var Rental = function(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
};

Rental.prototype.charge = function() {
    return this.movie.charge(this.daysRented);
};

Rental.prototype.frequentRenterPoints = function() {
    return this.movie.frequentRenterPoints(this.daysRented);
};