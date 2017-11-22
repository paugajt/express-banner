var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SectionSchema = new Schema ({
	section_number: {type: Number, required: true},
	professor: {type: Schema.ObjectId, ref:'Professor'},
	course: {type: Schema.ObjectId, ref:'Course', required: true}
});

/*
//Virtual for Section's URL
SectionSchema
.Virtual('url')
.get(function () {
	return '/school/section/' + this._id;
});
*/
//Export model
module.exports = mongoose.model('Section', SectionSchema);