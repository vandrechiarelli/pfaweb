module.exports = {
    get: function (req, res) {
        var Bank = require('../models/bank');
        Bank.find(function (err, banks) {
            if (err)
                res.send(err)
            res.json(banks);
        });
    },
    post: function (req, res) {
        var Bank = require('../models/bank');
        Bank.create({
            text : req.body.text,
            done : false
        }, function (err, banks) {
            if (err)
                res.send(err);
            Bank.find(function (err, banks) {
                if (err)
                    res.send(err)
                res.json(banks);
            });
        });
    },
    delete: function (req, res) {
        var Bank = require('../models/bank');
        Bank.remove({
            _id : req.params.bank_id
        }, function (err, banks) {
            if (err)
                res.send(err);
            Bank.find(function (err, banks) {
                if (err)
                    res.send(err)
                res.json(banks);
            });
        });
    }
};