var mongoose = require('mongoose');
var Bank = mongoose.model('bank', {
    BankID: { type: Number, required: true },
    BankName: { type: String, required: true },
    BankURL: { type: String, required: false }
}, 'bank');

module.exports = Bank;