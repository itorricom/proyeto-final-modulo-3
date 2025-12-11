const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for the API',
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        },
        schemas: {
            AuthInput: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: {
                        type: 'string',
                        example: 'jhon.doe@exmaple.com'
                    },
                    password: {
                        type: 'string',
                        example: 'password123'
                    }
                }
            },
            User: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        example: '60c72b2f9b1e8a001f8e4caa'
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe'
                    },
                    email: {
                        type: 'string',
                        example: 'jhon.doe@example.com'
                    },
                    roles: {
                        type: 'array',
                        items: {
                            type: 'string'
                        },
                        example: ['user']
                    }
                }
            },
            UserInput: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'John Doe'
                    },
                    email: {
                        type: 'string',
                        example: 'jhon.doe@exmaple.com'
                    },
                    password: {
                        type: 'string',
                        example: 'password123'
                    },
                    roles: {
                        type: 'array',
                        items: {
                            type: 'string'
                        },
                        example: ['user']
                    }
                }
            },
            Role: {
                properties: {
                    id: {
                        type: 'string',
                        example: '692e411883dfb0eb67cde16a'
                    },
                    name: {
                        type: 'string',
                        example: 'Sample Role 1'
                    }
                }
            },
            RoleInput: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Admin'
                    },
                }
            },
            Order: {
                properties: {
                    id: {
                        type: 'string',
                        example: '692e59b083dfb0eb67cde176'
                    },
                    name: {
                        type: 'string',
                        example: 'Sample Product 3'
                    },
                    description: {
                        type: 'string',
                        example: 'This is a detailed description of the sample product 3'
                    },
                    quantity: {
                        type: 'number',
                        example: 5
                    },
                    price: {
                        type: 'number',
                        example: 5
                    },
                    discount: {
                        type: 'number',
                        example: 5
                    },
                    total: {
                        type: 'number',
                        example: 20
                    }
                }
            },
            OrderInput: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Sample Order 2'
                    },
                    description: {
                        type: 'string',
                        example: 'This is a detailed description of the sample order 2'
                    },
                    quantity: {
                        type: 'number',
                        example: 5
                    },
                    price: {
                        type: 'number',
                        example: 5
                    },
                    discount: {
                        type: 'number',
                        example: 5
                    },
                    total: {
                        type: 'number',
                        example: 20
                    }
                }
            },
            Product: {
                properties: {
                    id: {
                        type: 'string',
                        example: '692e411883dfb0eb67cde16a'
                    },
                    name: {
                        type: 'string',
                        example: 'Sample Product 3'
                    },
                    description: {
                        type: 'string',
                        example: 'This is a detailed description of the sample product 3'
                    },
                    price: {
                        type: 'number',
                        example: 5
                    },
                    stock: {
                        type: 'number',
                        example: 5
                    },
                    category: {
                        type: 'string',
                        example: 'Electronic'
                    },
                    imageUrl: {
                        type: 'string',
                        example: 'https://example.com/images/sample-product.jpg'
                    }
                }
            },
            ProductInput: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Sample Product 3'
                    },
                    description: {
                        type: 'string',
                        example: 'This is a detailed description of the sample product 3'
                    },
                    price: {
                        type: 'number',
                        example: 5
                    },
                    stock: {
                        type: 'number',
                        example: 5
                    },
                    category: {
                        type: 'string',
                        example: 'Gaming'
                    },
                    imageUrl: {
                        type: 'string',
                        example: 'https://example.com/images/sample-product.jpg'
                    }
                }
            },
        }
    },
    security: [{
        bearerAuth: []
    }]
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;