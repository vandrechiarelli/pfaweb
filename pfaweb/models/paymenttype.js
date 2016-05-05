var mongoose = require('mongoose');
var PaymentType = mongoose.model('paymenttype', {
    PaymentTypeID: { type: Number, required: true },
    PaymentTypeName: { type: String, required: true }
}, 'paymenttype');

module.exports = PaymentType;