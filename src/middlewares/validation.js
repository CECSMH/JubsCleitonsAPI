const Validation = (req, res, next) => {
    
    const { brand, model, version, year, mileage, transmission, price} = req.body;

    if(!brand){
        return res.status(400).json({ error: 'A marca é obrigatoria!'})

    }else if(!model){
        return res.status(400).json({ error: 'O modelo é obrigatorio!'})

    }else if(!version){
        return res.status(400).json({ error: 'A versão é obrigatoria!'})
        
    }else if(!year){
        return res.status(400).json({ error: 'O ano é obrigatorio!'})

    }else if(!mileage){
        return res.status(400).json({ error: 'A quilometragem é obrigatoria!'})

    }else if(!transmission){
        return res.status(400).json({ error: 'O tipo de cambio é obrigatorio!'})

    }else if(!price){
        return res.status(400).json({ error: 'O preço é obrigatorio!'})
        
    }else{
        next();
    }
};

module.exports = Validation;