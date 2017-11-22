var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
	course_name: {type: String, required: true, max: 100, min: 3},
	sections: [{type: Schema.ObjectId, ref: 'Section'}]
});
/*
//Virtual for Course name
CourseSchema
.virtual('name')
.get(funciont () {
	return this.course_name;
});

//Virtual for Course URL
CourseSchema
.virtual('url')
.get(function () {
	return '/school/course/' + this._id;
});
*/
//Export model
module.exports = mongoose.model('Course', CourseSchema);