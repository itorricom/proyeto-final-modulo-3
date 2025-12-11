class Product {
    constructor(id, name, brand, description, price, stock, category, imageUrl) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}

module.exports = Product;