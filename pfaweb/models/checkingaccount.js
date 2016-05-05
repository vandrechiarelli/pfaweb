var mongoose = require('mongoose');
var CheckingAccount = mongoose.model('checkingaccount', {
    CheckingAccountID: { type: Number, required: true },
    UserBankID: { type: Number, required: true },
    CheckingAccountDate: { type: String, required: false },
    CheckingAccountOrderBy: { type: Number, required: true },
    DocTypeID: { type: Number, required: true },
    PaymentTypeID: { type: Number, required: true },
    CheckingAccountDocInfo: { type: String, required: true },
    CheckingAccountValue: { type: String, required: true },
    CheckingAccountConfirmation: { type: String, required: true },
    CheckingAccountComment: { type: String, required: false },
    CheckingAccountActive: { type: String, required: false }
}, 'checkingaccount');

module.exports = CheckingAccount;