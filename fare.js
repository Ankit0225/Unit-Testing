rate = {
    fixed: 30,
    minkm: 5,
    perkm: 10,
    freemin: 15,
    perMin: 2
}

function calculate_Fare(km, min) {
    let fare = rate.fixed
    fare += (km > rate.minkm) ? ((km- rate.minkm) * rate.perkm) : 0;
    fare += (min > rate.freemin) ? ((min- rate.freemin) * rate.perMin) : 0;
    return fare
}

exports = module.exports = {
    rate, calculate_Fare
}