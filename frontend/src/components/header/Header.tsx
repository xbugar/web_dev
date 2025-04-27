import gradient from "@/assets/gradient.webp";
import { HeaderButton } from "./HeaderButton";

import {
  ArrowLeft,
  User
} from "lucide-react"
import { HeaderBackButton } from "./HeaderBackButton";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="w-full sticky top-0 right-0 px-2 py-2 backdrop-blur-md rounded-b-md z-50">
      <div
        className="bg-cover bg-center flex items-center justify-between p-2 rounded-md shadow-ours"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        <HeaderBackButton Icon={ArrowLeft}/>
        <Link to={"/home"}><h1 className="text-white font-bold text-3xl font-serif">gradia.</h1></Link>
        <HeaderButton to={"/"} Icon={User}/>
      </div>
    </header>
  );
}
