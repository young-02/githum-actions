"use client";

import { useEffect, useState } from "react";
import { CartItem } from "../page";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  // 세션 스토리지에서 장바구니 아이템을 가져오기 (새로고침해도 유지)
  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    setCartItems(cartItems);
  }, []);

  const handleOrder = () => {
    // 세션 스토리지에서 장바구니 아이템을 제거
    sessionStorage.removeItem("cartItems");
    setCartItems([]);
    alert("주문이 완료되었습니다.");
    router.push("/");
  };

  return (
    <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">코드잇 마켓</h1>
      <div className="flex w-full flex-col justify-between gap-2 rounded-md bg-gray-100 px-8 py-4 font-medium">
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            {item.name}: {item.count}개
          </div>
        ))}
      </div>
      <button
        onClick={handleOrder}
        className="w-full cursor-pointer rounded-md bg-indigo-500 px-4 py-3 text-white"
      >
        주문하기
      </button>
    </div>
  );
}
