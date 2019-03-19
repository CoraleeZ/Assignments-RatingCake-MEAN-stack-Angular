var Cake = require('./models').Cake
var Rate = require('./models').Rate

module.exports = {

    getAllCake: (req, res) => {
        Cake.find().then(data => res.json(data)).catch(err => res.json(err))
    },

    getOneCake: (req, res) => {
        const ID = req.params.id;
        Cake.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err => res.json(err))
    },

    createCake: (req, res) => {
        const DATA = req.body;
        Cake.create(DATA).then(data => res.json(data)).catch(err => res.json(err))
    },

    updateCake: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Cake.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },

    deleteCake: (req, res) => {
        const ID = req.params.id;
        Cake.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    },

    /////

    getAllRate: (req, res) => {
        Rate.find().then(data => res.json(data)).catch(err => res.json(err))
    },

    getOneRate: (req, res) => {
        const ID = req.params.id;
        Rate.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err => res.json(err))
    },

    createRate(req, res) {
        const ID = req.params.id;
        const DATA = req.body;
        Rate.create(DATA)
            .then(data => {
                Cake.findOneAndUpdate({ _id: ID }, { $push: { rate: data } })
                    .then(data => res.json(data))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    updateRate: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Rate.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },

    deleteRate: (req, res) => {
        const ID = req.params.id;
        Rate.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    }

}