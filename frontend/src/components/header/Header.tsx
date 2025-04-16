import gradient from "@/assets/gradient.webp";
import { HeaderButton } from "./HeaderButton";

import {
  ArrowLeft,
  User
} from "lucide-react"

export function Header() {
  return (
    <header className="w-full sticky top-0 right-0 px-4 py-2">
      <div
        className="bg-cover bg-center flex items-center justify-between p-2 rounded-md shadow-ours"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        <HeaderButton to={"/"} Icon={ArrowLeft}/>
        <h1 className="text-white font-bold text-3xl font-serif">gradia.</h1>
        <HeaderButton to={"/"} Icon={User}/>
      </div>
    </header>
  );
}
