const { Router } = require('express');
const CouponController = require('../controller/coupon.controller');

// Esta es la "Inyección de Dependencias" manual
const CouponService = require('../../application/use-cases/coupon.service');

const CouponMongoRepository = require('../../infrastructure/repositories/database/mongo/coupon.mongo.repository');
const couponRepository = new CouponMongoRepository();

const couponService = new CouponService(couponRepository);
const couponController = new CouponController(couponService);

const router = Router();
// Rutas específicas primero (antes de /:id para evitar conflictos)
/**
 * @swagger
 * /coupons/code/{code}:
 *   get:
 *     summary: Retrieve a coupon by code
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single coupon.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coupon'
 *       404:
 *         description: Coupon not found
 */
router.get('/code/:code', couponController.getByCode);
/**
 * @swagger
 * /coupons/validate/{code}:
 *   get:
 *     summary: Validate a coupon by code
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coupon is valid
 *       400:
 *         description: Coupon is invalid or expired
 */
router.get('/validate/:code', couponController.validate);
/**
 * @swagger
 * /coupons:
 *   get:
 *     summary: Retrieve a list of coupons
 *     responses:
 *       200:
 *         description: A list of coupons.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coupon'
 */
router.get('/', couponController.getAll);
/**
 * @swagger
 * /coupons/{id}:
 *   get:
 *     summary: Retrieve a single coupon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single coupon.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coupon'
 *       404:
 *         description: Coupon not found
 */
router.get('/:id', couponController.getById);
/**
 * @swagger
 * /coupons:
 *   post:
 *     summary: Create a new coupon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CouponInput'
 *     responses:
 *       201:
 *         description: The created coupon.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coupon'
 */
router.post('/', couponController.create);
/**
 * @swagger
 * /coupons/{id}:
 *   put:
 *     summary: Update a coupon
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
 *             $ref: '#/components/schemas/CouponInput'
 *     responses:
 *       200:
 *         description: The updated coupon.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coupon'
 *       404:
 *         description: Coupon not found
 */
router.put('/:id', couponController.update);
/**
 * @swagger
 * /coupons/{id}:
 *   delete:
 *     summary: Delete a coupon
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
 *         description: Coupon not found
 */
router.delete('/:id', couponController.delete);

module.exports = router;