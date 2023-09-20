const ShoppingCart = {
  calculateTotal(items: any[]) {
    return items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },
  addToCart(items: any[], item: any) {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(items));

    console.log(`${items}`);
  },
  removeFromCart(items: any[], index: number) {
    items.splice(index, 1);
  },
  itemAmount(items: any[]) {
    return items.length;
  },
};

export default ShoppingCart;
