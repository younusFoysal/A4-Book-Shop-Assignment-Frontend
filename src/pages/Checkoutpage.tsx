import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import axios from "axios";

// Load Stripe
const stripePromise = loadStripe(
  "pk_test_51M1YVBL6YvgZDvxuWiJT39NxnF7fG3kDudsD3gOxgUw6WmJusFHhvT4RHti88caAiBMIvOqptpW3smjH3c1mPlZ600PtOgXZj6"
);

// Main Component
const CheckoutPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];
  const product = products.find((p) => p._id === id);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (totalPrice > 0) {
        const { data } = await axios.post(
          "http://localhost:5000/api/create-payment-intent",
          {
            amount: totalPrice * 100,
          }
        );
        setClientSecret(data.clientSecret);
      }
    };
    createPaymentIntent();
  }, [totalPrice]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= product.quantity) {
      setQuantity(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: {
            name: "Customer Name", // Optionally capture more user details
          },
        },
      }
    );

    if (error) {
      console.error(error.message);
    } else if (paymentIntent?.status === "succeeded") {
      // Order Data to Save
      const orderData = {
        productId: product._id,
        productName: product.name,
        productImage: product.image,
        productPrice: product.price,
        quantity,
        totalPrice,
        user: {
          name: "Customer Name",
          email: "customer@example.com",
        },
        paymentStatus: "pending",
        paymentId: paymentIntent.id,
      };

      try {
        await axios.post("http://localhost:5000/api/orders", orderData);
        alert("Order placed successfully!");
      } catch (err) {
        console.error("Order saving failed:", err);
        alert("Order could not be saved. Please try again.");
      }
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !product) return <h1>Product not found</h1>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <h2 className="text-2xl text-gray-600">{product.brand}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-3xl font-semibold text-primary-jext">
            ${product.price.toLocaleString()}
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-primary-jext"
              min="1"
              max={product.quantity}
            />

            <p className="mt-4 text-xl">
              Total Price:{" "}
              <span className="font-bold">${totalPrice.toLocaleString()}</span>
            </p>

            <div className="mt-6">
              <CardElement className="border border-gray-300 rounded-lg p-4" />
            </div>

            <button
              type="submit"
              className="mt-6 bg-primary-jext text-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300"
              disabled={!stripe || !clientSecret}
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default StripeWrapper;
