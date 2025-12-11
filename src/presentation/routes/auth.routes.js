const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public

/**
     * @swagger
     * /auths:
     *   post:
     *     summary: Make a new login
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/AuthInput'
     *     responses:
     *       200:
     *         description: The login user.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Email and password are required
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: An internal error occurred
     */
router.post('/login', authController.login);

module.exports = router;
