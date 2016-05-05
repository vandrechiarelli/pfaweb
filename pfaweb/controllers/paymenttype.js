module.exports = {
    get: function (req, res) {
        var PaymentType = require('../models/paymenttype');
        PaymentType.find(function (err, paymenttypes) {
            if (err)
                res.send(err)
            res.json(paymenttypes);
        });
    },
    post: function (req, res) {
        var PaymentType = require('../models/paymenttype');
        PaymentType.create({
            text : req.body.text,
            done : false
        }, function (err, paymenttypes) {
            if (err)
                res.send(err);
            PaymentType.find(function (err, paymenttypes) {
                if (err)
                    res.send(err)
                res.json(paymenttypes);
            });
        });
    },
    delete: function (req, res) {
        var PaymentType = require('../models/paymenttype');
        PaymentType.remove({
            _id : req.params.paymenttype_id
        }, function (err, paymenttypes) {
            if (err)
                res.send(err);
            PaymentType.find(function (err, paymenttypes) {
                if (err)
                    res.send(err)
                res.json(paymenttypes);
            });
        });
    }
};