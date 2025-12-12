const CouponRepository = require('../../../../domain/repositories/coupon.repository.interface');
const CouponModel = require('./models/coupon.model');
const Coupon = require('../../../../domain/entities/coupon.entity');

class CouponMongoRepository extends CouponRepository {
    async getAll() {
        const coupons = await CouponModel.find();
        return coupons.map(c => new Coupon(
            c._id.toString(), 
            c.code, 
            c.discount, 
            c.expirationDate 

        ));
    }

    async getById(id) {
        const coupon = await CouponModel.findById(id);
        if (!coupon) return null;
        return new Coupon(
            coupon._id.toString(), 
            coupon.code, 
            coupon.discount, 
            coupon.expirationDate
        );
    }

    async getByCode(code) {
        const coupon = await CouponModel.findOne({ code: code.toUpperCase() });
        if (!coupon) return null;
        return new Coupon(
            coupon._id.toString(), 
            coupon.code, 
            coupon.discount, 
            coupon.expirationDate
        );
    }

    async create(couponEntity) {
        const newCoupon = new CouponModel({
            code: couponEntity.code,
            discount: couponEntity.discount,
            expirationDate: couponEntity.expirationDate
        });
        const savedCoupon = await newCoupon.save();
        return new Coupon(
            savedCoupon._id.toString(), 
            savedCoupon.code, 
            savedCoupon.discount, 
            savedCoupon.expirationDate
        );
    }

    async update(id, couponEntity) {
        const updatedCoupon = await CouponModel.findByIdAndUpdate(id, {
            code: couponEntity.code,
            discount: couponEntity.discount,
            expirationDate: couponEntity.expirationDate
        }, { new: true });

        if (!updatedCoupon) return null;
        return new Coupon(
            updatedCoupon._id.toString(), 
            updatedCoupon.code, 
            updatedCoupon.discount, 
            updatedCoupon.expirationDate
        );
    }

    async delete(id) {
        await CouponModel.findByIdAndDelete(id);
    }
}

module.exports = CouponMongoRepository;