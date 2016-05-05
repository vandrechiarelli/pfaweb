module.exports = {
    get: function (req, res) {
        var DocType = require('../models/doctype');
        DocType.find(function (err, doctypes) {
            if (err)
                res.send(err)
            res.json(doctypes);
        });
    },
    post: function (req, res) {
        var DocType = require('../models/doctype');
        DocType.create({
            text : req.body.text,
            done : false
        }, function (err, doctypes) {
            if (err)
                res.send(err);
            DocType.find(function (err, doctypes) {
                if (err)
                    res.send(err)
                res.json(doctypes);
            });
        });
    },
    delete: function (req, res) {
        var DocType = require('../models/doctype');
        DocType.remove({
            _id : req.params.doctype_id
        }, function (err, doctypes) {
            if (err)
                res.send(err);
            DocType.find(function (err, doctypes) {
                if (err)
                    res.send(err)
                res.json(doctypes);
            });
        });
    }
};