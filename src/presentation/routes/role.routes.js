const { Router } = require('express');
const RoleController = require('../controller/role.controller');
const RoleService = require('../../application/use-cases/role.service');
const RoleMongoRepository = require('../../infrastructure/repositories/database/mongo/role.mongo.repository');

const roleRepository = new RoleMongoRepository();
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

const router = Router();
/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Retrieve a list of roles
 *     responses:
 *       200:
 *         description: A list of roles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.get('/', roleController.getAll);
/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Retrieve a single role by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */
router.get('/:id', roleController.getById);
/**
     * @swagger
     * /roles:
     *   post:
     *     summary: Create a new role
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/RoleInput'
     *     responses:
     *       201:
     *         description: The created role.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Role'
     *       400:
     *         description: Bad request
     *       409:
     *         description: Role with this name already exists
     */
router.post('/', roleController.create);
/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Update a role
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
 *             $ref: '#/components/schemas/RoleInput'
 *     responses:
 *       200:
 *         description: The updated role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */
router.put('/:id', roleController.update);
/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Delete a role
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
 *         description: Role not found
 */
router.delete('/:id', roleController.delete);

module.exports = router;
