type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Item = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
};

class ShoppingCart {
  items: CartItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    //id가 같으면 기존 아템 조회
    const existingItem = this.items.find((i) => i.id === item.id);

    //기존 아이템이 있으면 수량 증가
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.items.push({
        ...item,
        quantity: item.quantity || 1,
      });
    }
  }

  //id가 같으면 아이템 제거
  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  //id가 같으면 수량 업데이트
  updateQuantity(id: number, quantity: number) {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
    }
  }
  // 총개수 더하기
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  clear() {
    this.items = [];
  }
}

export default ShoppingCart;
