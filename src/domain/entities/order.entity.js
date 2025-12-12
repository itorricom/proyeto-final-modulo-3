class Order {
    constructor(id, name, description, quantity, price, discount, total) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
        this.total = total;
    }
}

module.exports = Order;