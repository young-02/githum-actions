// discountCalculator.test.ts
import { calculatePrice, Coupon, Membership } from "./discountCalculator";

// 4. 중복된 가격 상수 정의를 개선하기 위해 상수 추가
const BASE_PRICE_100K = 100000;
const BASE_PRICE_50K = 50000;
const BASE_PRICE_200K = 200000;
const BASE_PRICE_30K = 30000;

// 1. 중복된 고객 객체 생성을 개선하기 위해 헬퍼 함수 createCustomer를 추가
// 2. 타입 캐스팅(as)을 개선하기 위해 TypeScript 타입을 명확히 정의
const createCustomer = (
  membership: Membership = "regular",
  coupon?: Coupon,
): { membership: Membership; coupon?: Coupon } => ({
  membership,
  coupon,
});

describe("할인 계산기", () => {
  test("기본 가격에 할인이 적용되지 않아야 함 (5만원 미만)", () => {
    const customer = createCustomer();
    const finalPrice = calculatePrice(BASE_PRICE_30K, customer);
    expect(finalPrice).toBe(BASE_PRICE_30K);
  });
});

describe("금액별 할인 테스트", () => {
  test("5만원 이상 구매 시 5% 할인이 적용되어야 함", () => {
    const customer = createCustomer();
    const finalPrice = calculatePrice(BASE_PRICE_50K, customer);
    expect(finalPrice).toBe(BASE_PRICE_50K * 0.95); // 50,000 * 0.95
  });

  test("10만원 이상 구매 시 10% 할인이 적용되어야 함", () => {
    const customer = createCustomer();
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9); // 100,000 * 0.9
  });

  test("20만원 이상 구매 시 20% 할인이 적용되어야 함", () => {
    const customer = createCustomer();
    const finalPrice = calculatePrice(BASE_PRICE_200K, customer);
    expect(finalPrice).toBe(BASE_PRICE_200K * 0.8); // 200,000 * 0.8
  });
});

describe("회원 등급별 할인 테스트", () => {
  test("실버 회원은 추가 2% 할인이 적용되어야 함", () => {
    const customer = createCustomer("silver");
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.98); // 100,000 * 0.9 * 0.98
  });

  test("골드 회원은 추가 5% 할인이 적용되어야 함", () => {
    const customer = createCustomer("gold");
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.95); // 100,000 * 0.9 * 0.95
  });

  test("VIP 회원은 추가 10% 할인이 적용되어야 함", () => {
    const customer = createCustomer("vip");
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.9); // 100,000 * 0.9 * 0.9
  });
});

describe("쿠폰할일 테스트", () => {
  test("정액 쿠폰이 적용되어야 함", () => {
    const customer = createCustomer("regular", {
      type: "fixed",
      value: 5000,
    });
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 - 5000); // (100,000 * 0.9) - 5,000
  });

  test("정률 쿠폰이 적용되어야 함", () => {
    const customer = createCustomer("regular", {
      type: "percentage",
      value: 5,
    });
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.95); // 100,000 * 0.9 * 0.95
  });
});

describe("최소 가격 제한 테스트", () => {
  test("할인 후 가격은 원래 가격의 50% 이하로 내려갈 수 없음", () => {
    const customer = createCustomer("vip", {
      type: "percentage" as const,
      value: 50,
    });
    const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
    expect(finalPrice).toBe(BASE_PRICE_100K * 0.5); // 최소 가격: 100,000 * 0.5
  });
});
