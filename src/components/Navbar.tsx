import { MenuIcon, Search, MapPin, Heart } from "lucide-react";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="w-full bg-green-800 text-white">
      <Container>
        <div className="flex h-22 items-center justify-between px-2 py-4">
          {/* left nav side*/}
          <div className="flex cursor-pointer items-center gap-2">
            <MenuIcon className="size-6" />
            <span className="text-sm font-medium">Menu</span>
          </div>
          {/* center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <img src="/logo.png" alt="logo" className="h-8 object-contain" />
          </div>

          {/* right nav side*/}
          <div className="flex items-center gap-6">
            <Search className="size-5 cursor-pointer hover:opacity-80" />
            <MapPin className="size-5 cursor-pointer hover:opacity-80" />
            <Heart className="size-5 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;