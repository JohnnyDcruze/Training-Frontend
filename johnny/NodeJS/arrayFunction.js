countries=["India","USA","Canada","Australia","Japan"];
captials=["NewDelhi","washington","Ottawa","Canberra","Tokyo"];


function getCapitals(country){
    for(i in countries)
    {
        if(countries[i]==country)
        return captials[i];
    }
    return "Country doesn't Exist";
}

module.exports.getCapCity=getCapitals;