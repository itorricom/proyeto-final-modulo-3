class Coupon {
    constructor(id, code, discount, expirationDate) {
        this.id = id;
        this.code = code;
        this.discount = discount;
        this.expirationDate = expirationDate;
    }
}

module.exports = Coupon;