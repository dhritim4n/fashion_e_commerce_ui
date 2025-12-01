import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">



        {/* CENTER LOGO */}
        <div className="">
          <Link to="/">
            <h1 className="text-xl font-bold tracking-wide cursor-pointer">
              EVERLANE
            </h1>
          </Link>
        </div>

        <SearchBar/>

        {/* RIGHT ICONS */}
        <div className="flex items-center space-x-6">
          
          <User className="cursor-pointer hover:text-black/70 transition" size={20} />
          <ShoppingCart className="cursor-pointer hover:text-black/70 transition" size={20} />
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
