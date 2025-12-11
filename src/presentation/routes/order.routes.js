const { Router } = require('express');
const OrderController = require('../controller/order.controller');
const OrderService = require('../../application/use-cases/order.service');

const OrderMongoRepository = require('../../infrastructure/repositories/database/mongo/order.mongo.repository');
const orderRepository = new OrderMongoRepository();

const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

const router = Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve a list of orders
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/', orderController.getAll);
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Retrieve a single order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get('/:id', orderController.getById);
/**
     * @swagger
     * /orders:
     *   post:
     *     summary: Create a new order
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/OrderInput'
     *     responses:
     *       201:
     *         description: The created order.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       400:
     *         description: Bad request
     *       409:
     *         description: Order with this name already exists
     */
router.post('/', orderController.create);
/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update a order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       200:
 *         description: The updated order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.put('/:id', orderController.update);
/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete a order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Order not found
 */
router.delete('/:id', orderController.delete);

module.exports = router;