var RegularMovie = function(title) {
    this.title = title;
    this.priceCode = this.types.REGULAR;
};

RegularMovie.prototype = Object.create(Movie.prototype);

RegularMovie.prototype.charge = function(daysRented) {
    var result = 2;
    if (daysRented > 2) {
        result += (daysRented - 2) * 1.5;
    }
    return result;
};