var squad = ["joker", "deadshot", "harley"];

var years = [1977, 1974, 1979, 1972, 1980,];

var bias = squad.map(function(person){
    if(person === "harley"){
        return person + " is my hero";
    }
    else{
        return person + " suks";
    }
});
console.log(bias);

var lit = years.map(function(year){
    if(year === 1979){
        return "Shit was LIT";
    }
    else{
        return year
    }
});
console.log(lit);

var doubled = years.map(function(year){
    if(year === 1980){
        return year * 4;
    }
    else{
        return year * 2
    }
});
console.log(doubled);
