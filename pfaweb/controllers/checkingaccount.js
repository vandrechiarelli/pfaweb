module.exports = {
    get: function (req, res) {
        var CheckingAccount = require('../models/checkingaccount');
        CheckingAccount.find(function (err, checkingaccounts) {
            if (err)
                res.send(err)
            res.json(checkingaccounts);
        });
    },
    post: function (req, res) {
        var CheckingAccount = require('../models/checkingaccount');
        CheckingAccount.create({
            text : req.body.text,
            done : false
        }, function (err, checkingaccounts) {
            if (err)
                res.send(err);
            CheckingAccount.find(function (err, checkingaccounts) {
                if (err)
                    res.send(err)
                res.json(checkingaccounts);
            });
        });
    },
    delete: function (req, res) {
        var CheckingAccount = require('../models/checkingaccount');
        CheckingAccount.remove({
            _id : req.params.checkingaccount_id
        }, function (err, checkingaccounts) {
            if (err)
                res.send(err);
            CheckingAccount.find(function (err, checkingaccounts) {
                if (err)
                    res.send(err)
                res.json(checkingaccounts);
            });
        });
    }
};