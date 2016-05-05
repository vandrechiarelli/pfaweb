var express = require('express');
var router = express.Router();

var bank = require('./bank');
var doctype = require('./doctype');
var paymenttype = require('./paymenttype');
var checkingaccount = require('./checkingaccount');

router.get('/controllers/banks', bank.get);
router.post('/controllers/banks', bank.post);
router.delete('/controllers/banks/:bank_id', bank.delete);

router.get('/controllers/doctypes', doctype.get);
router.post('/controllers/doctypes', doctype.post);
router.delete('/controllers/doctypes/:doctype_id', doctype.delete);

router.get('/controllers/paymenttypes', paymenttype.get);
router.post('/controllers/paymenttypes', paymenttype.post);
router.delete('/controllers/paymenttypes/:paymenttype_id', paymenttype.delete);

router.get('/controllers/checkingaccounts', checkingaccount.get);
router.post('/controllers/checkingaccounts', checkingaccount.post);
router.delete('/controllers/checkingaccounts/:checkingaccount_id', checkingaccount.delete);

module.exports = router;