const Model = require('../model/model');
const filtering = require('../model/filtering');


class carController {

    async create(req, res){
        const car = new Model(req.body);

        await car.save().then(resp => {
            return res.status(200).json(resp);

        }).catch(error => { return res.status(500).json(error);});
    }

    async update(req, res){

        await Model.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true}).then(resp => {
            return res.status(200).json(resp);

        }).catch(error => { return res.status(500).json(error);});
    }

    async delete(req, res){

        await Model.deleteOne({"_id": req.params.id}).then(resp =>{
            return res.status(200).json(resp);

        }).catch(error => {return res.status(500).json(error);});
    }

    async fetchAll(req, res){

        await Model.find().sort('year').then(resp => {
            return res.status(200).json(resp);

        }).catch(error => res.status(500).json(error));
    }

    async fetchOne(req, res){

        await Model.findById(req.params.id).then(resp => {
            if(resp){
                return res.status(200).json(resp);
            }else{
                return res.status(404).json({error: 'carro não encontrado!'});
            }
        }).catch(error =>{ return res.status(500).json(error)});
    }

    async filteredFetch(req, res){
        
        const queryObj = filtering(req);

        await Model.find(queryObj).sort("year").then(resp => {
            if(resp){
                return res.status(200).json(resp);
            }else{
                return res.status(404).json({error: 'não há carros correspondentes!'});
            }
        }).catch(error => { return res.status(500).json(error)});
    }

}

module.exports = new carController();