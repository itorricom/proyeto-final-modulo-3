const Order = require('../../domain/entities/order.entity');

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async getAllOrders() {
        return this.orderRepository.getAll();
    }

    async getOrderById(id) {
        return this.orderRepository.getById(id);
    }

    async createOrder(orderData) {
        // Calcular el total con descuento
        const discount = orderData.discount || 0;
        const subtotal = orderData.price * orderData.quantity;
        const total = subtotal - (subtotal * (discount / 100));

        const orderEntity = new Order(
            null,
            orderData.name,
            orderData.description,
            orderData.quantity,
            orderData.price,
            discount,
            total
        );
        return this.orderRepository.create(orderEntity);
    }

    async updateOrder(id, orderData) {
        // Calcular el total con descuento
        const discount = orderData.discount || 0;
        const subtotal = orderData.price * orderData.quantity;
        const total = subtotal - (subtotal * (discount / 100));

        const orderEntity = new Order(
            id,
            orderData.name,
            orderData.description,
            orderData.quantity,
            orderData.price,
            discount,
            total
        );
        return this.orderRepository.update(id, orderEntity);
    }

    async deleteOrder(id) {
        return this.orderRepository.delete(id);
    }
}

module.exports = OrderService;