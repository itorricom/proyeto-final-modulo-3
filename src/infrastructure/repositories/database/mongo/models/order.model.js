const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true, 
        min: 1 
    },
    price: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    discount: { 
        type: Number, 
        default: 0, 
        min: 0, 
        max: 100 
    },
    total: { 
        type: Number, 
        required: true, 
        min: 0 
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);