var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessorSchema = new Schema(
{
	name: {type: String, required: true, max: 100, min: 3},
	office: {type: String, required: true, max: 100, min: 3},
	email: {type: String, required: true, max: 100, min: 3},
	sections: [{type: Schema.ObjectId, ref: 'Section'}]
}
);
/*
//Virtual for professor's name
ProfessorSchema
.virtual('name')
.get(function() {
	return this.name
});

//Virtual for professor's URL
ProfessorSchema
.virtual('url')
.get(function () {
	return '/school/professor/' + this._id;
});
*/
//Export model
module.exports = mongoose.model('Professor', ProfessorSchema);