const Coupon = require('../../domain/entities/coupon.entity');

class CouponService {
    constructor(couponRepository) {
        this.couponRepository = couponRepository;
    }

    async getAllCoupons() {
        return this.couponRepository.getAll();
    }

    async getCouponById(id) {
        return this.couponRepository.getById(id);
    }

    async getCouponByCode(code) {
        return this.couponRepository.getByCode(code);
    }

    async createCoupon(couponData) {
        const couponEntity = new Coupon(
            null,
            couponData.code,
            couponData.discount,
            couponData.expirationDate
        );
        return this.couponRepository.create(couponEntity);
    }

    async updateCoupon(id, couponData) {
        const couponEntity = new Coupon(
            id,
            couponData.code,
            couponData.discount,
            couponData.expirationDate
        );
        return this.couponRepository.update(id, couponEntity);
    }

    async deleteCoupon(id) {
        return this.couponRepository.delete(id);
    }
    
    async validateCoupon(code) {
        const coupon = await this.getCouponByCode(code);
        
        if (!coupon) {
            return { valid: false, message: 'Cupón no encontrado' };
        }
        
        const now = new Date();
        if (new Date(coupon.expirationDate) < now) {
            return { valid: false, message: 'Cupón expirado' };
        }
        
        return { valid: true, discount: coupon.discount, coupon };
    }
}

module.exports = CouponService;