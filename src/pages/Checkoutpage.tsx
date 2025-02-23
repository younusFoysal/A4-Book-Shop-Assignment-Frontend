import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { BookOpen, CreditCard, Package, ShoppingBag } from 'lucide-react';
import axios from "axios";
import {toast} from "sonner";
import UseUser from "@/hook/UseUser.tsx";

const stripePromise = loadStripe("pk_test_51M1YVBL6YvgZDvxuWiJT39NxnF7fG3kDudsD3gOxgUw6WmJusFHhvT4RHti88caAiBMIvOqptpW3smjH3c1mPlZ600PtOgXZj6");

const CheckoutPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: productsResponse, isLoading, isError } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];
  const product = products.find((p) => p._id === id);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  const user = UseUser()

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (totalPrice > 0) {
        const { data } = await axios.post("http://localhost:5000/api/create-payment-intent", {
          amount: totalPrice * 100,
        });
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
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement!,
        billing_details: {
          name: user?.name,
        },
      },
    });

    if (error) {
      console.error(error.message);
    } else if (paymentIntent?.status === "succeeded") {
      const orderData = {
        productId: product._id,
        productName: product.title,
        productImage: product.image,
        productPrice: product.price,
        quantity,
        totalPrice,
        user: {
          name: user?.name,
          email: user?.email,
        },
        paymentStatus: "pending",
        paymentId: paymentIntent.id,
      };

      try {
        await axios.post("http://localhost:5000/api/orders", orderData);
        toast.success("Order placed successfully!");
        navigate("/");
        // alert("Order placed successfully!");
      } catch (err) {
        console.error("Order saving failed:", err);
        alert("Order could not be saved. Please try again.");
      }
    }
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen"><ShoppingBag className="animate-spin" /></div>;
  if (isError || !product) return <div className="text-center text-red-500">Product not found</div>;

  return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <ShoppingBag className="text-[#04345c]" />
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-start gap-4">
              <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-xl"
              />
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen size={20} />
                  {product.title}
                </h2>
                <p className="text-gray-600">by {product.author}</p>
                <p className="text-[#04345c] font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Package size={16} />
                Quantity:
              </label>
              <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded-2xl px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-[#04345c]"
                  min="1"
                  max={product.quantity}
              />
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-[#04345c]">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="text-[#04345c]" />
              Payment Details
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <CardElement
                    className="border border-gray-300 rounded-2xl p-4"
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                />
              </div>

              <button
                  type="submit"
                  className="w-full  py-3 px-6 rounded-2xl text-lg font-semibold  flex items-center justify-center gap-2 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c]   transition-colors duration-500  drop-shadow-lg disabled:opacity-50"
                  disabled={!stripe || !clientSecret}
              >
                <ShoppingBag size={20} />
                Complete Purchase
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
