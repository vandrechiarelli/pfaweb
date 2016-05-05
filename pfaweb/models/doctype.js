var mongoose = require('mongoose');
var DocType = mongoose.model('doctype', {
    DocTypeID: { type: Number, required: true },
    DocTypeName: { type: String, required: true }
}, 'doctype');

module.exports = DocType;