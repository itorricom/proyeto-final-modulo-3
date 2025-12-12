const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        uppercase: true 
    },
    discount: { 
        type: Number, 
        required: true, 
        min: 0, 
        max: 100 
    },
    expirationDate: { 
        type: Date, 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);