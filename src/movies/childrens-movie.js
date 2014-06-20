var ChildrensMovie = function(title) {
    this.title = title;
    this.priceCode = this.types.CHILDRENS;
};

ChildrensMovie.prototype = Object.create(Movie.prototype);

ChildrensMovie.prototype.charge = function(daysRented) {
    var result = 1.5;
    if (daysRented > 3) {
        result += (daysRented - 3) * 1.5;
    }
    return result;
};