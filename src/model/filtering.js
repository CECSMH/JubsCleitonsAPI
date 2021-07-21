const filtering = (req) => {

    const { brand, model, version, year, mileage, transmission, price, endYear, endPrice} = req.query;

    queryObj = new Object()

    if(brand){
        queryObj.brand = brand;

    }
    if(model){
        queryObj.model = model;

    }
    if(version){
        queryObj.version = version;
        
    }
    if(mileage){
        queryObj.mileage = mileage;
        
    }
    if(transmission){
        queryObj.transmission = transmission;
        
    }
    if(price){
        if(endPrice){
            queryObj.price = {'$gte': price, '$lte': endPrice};
        }else{
            queryObj.price = price;
        }
    }
    if(year){
        if(endYear){
            queryObj.year = {'$gte': year, '$lte': endYear};
        }else{
            queryObj.year = year;
        }
    }

    return queryObj;
}

module.exports = filtering;