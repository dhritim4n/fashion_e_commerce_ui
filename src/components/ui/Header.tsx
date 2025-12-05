import { Link } from "react-router-dom";
import { User, ShoppingCart, Store } from "lucide-react";
import SearchBar from "./SearchBar";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import Cart from "./Cart";


export default function Header() {



  const { cart } = useContext(StoreContext)
  const [isCartVisible, toggleCartVisible] = useState(false)


  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">



        {/* CENTER LOGO */}
        <div className="">
          <Link to="/">
            <h1 className="text-xl p-2 font-bold tracking-wide cursor-pointer">
              TR3NDZ
            </h1>
          </Link>
        </div>

        <SearchBar />

        {/* RIGHT ICONS */}
        <div className="flex items-center space-x-6 pr-2">

          <User className="cursor-pointer hover:text-black/70 transition" size={20} />



          <span
            className="hover:bg-black group rounded-lg relative"
            onClick={() => {
              toggleCartVisible(true)
              console.log(isCartVisible)
            }}>
            <ShoppingCart className="cursor-pointer m-0.5 group-hover:text-white transition" size={20} />
            {cart.length !== 0 &&
              <div
                className="absolute -right-3 -top-4 transform translate-y-1
               bg-blue-500 rounded-full 
               w-5 h-5 flex items-center justify-center 
               text-white text-xs"
              >

                <span className="p-0">{cart.length}</span>
              </div>
            }
          </span>

          {
            isCartVisible &&
            <Cart
              isCartVisible={isCartVisible}
              toggleCartVisible={toggleCartVisible}
            />
          }
        </div>

      </div>
    </nav>
  );
}

interface NavItemProps {
  label: string;
  href: string;
}

function NavItem({ label, href }: NavItemProps) {
  return (
    <Link
      to={href}
      className="text-sm font-medium hover:text-black transition relative pb-2"
    >
      {label}
    </Link>
  );
}
