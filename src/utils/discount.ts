// src/utils/discount.ts
export function calculateDiscount(price: number, discountRate: number) {
  // price가 numberr가 아니거나  할인율이 숫자가 아닐경우 0 리턴
  if (typeof price !== "number" || typeof discountRate !== "number") return 0;
  // price가 0보다 작거나 할인율이 0보다 작거나 할인율이 100보다 크면 0리턴
  if (price < 0 || discountRate < 0 || discountRate > 100) return 0;
  // 할인율이 1-discountRate/100 곱해서 리턴
  return price * (1 - discountRate / 100);
}
