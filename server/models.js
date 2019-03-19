const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost/tasks_api';
mongoose.connect('mongodb://localhost/tasks_api', { useNewUrlParser: true });


const RateSchema = new mongoose.Schema({
    star: { type: Number, required: true },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CakeUploadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: {
        type: String,
        required: true
    },
    rate: [RateSchema]
}, { timestamps: true });


var Cake = mongoose.model('Cake', CakeUploadSchema);
var Rate = mongoose.model('Rate', RateSchema);
module.exports = { Cake: Cake, Rate: Rate };