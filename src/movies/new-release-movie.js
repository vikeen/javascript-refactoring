var NewReleaseMovie = function(title) {
    this.title = title;
    this.priceCode = this.types.NEW_RELEASE;
};

NewReleaseMovie.prototype = Object.create(Movie.prototype);

NewReleaseMovie.prototype.charge = function(daysRented) {
    return daysRented * 3;
};

NewReleaseMovie.prototype.frequentRenterPoints = function(daysRented) {
    return (daysRented > 1) ? 2 : 1;
};