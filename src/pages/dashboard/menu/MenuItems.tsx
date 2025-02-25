import { NavLink } from "react-router-dom";

interface MenuItemProps {
  address: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MenuItems: React.FC<MenuItemProps> = ({ address, label, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary-text  text-black hover:text-white rounded-sm ${
          isActive ? "bg-primary-text text-white" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItems;
