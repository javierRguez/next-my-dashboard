import { CartCounter } from "@/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

// snippet create page component ==> prc
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carro</span>
      <CartCounter value={20} />
    </div>
  );
}
