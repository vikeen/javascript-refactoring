var Rental = function(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
};

Rental.prototype.charge = function() {
    result = 0;

    // determine amounts for each line
    switch (this.movie.priceCode) {
        case jsRefactoring.movieTypes.REGULAR:
            result += 2;
            if (this.daysRented > 2) {
                result += (this.daysRented - 2) * 1.5;
            }
            break;
        case jsRefactoring.movieTypes.NEW_RELEASE:
            result += this.daysRented * 3;
            break;
        case jsRefactoring.movieTypes.CHILDRENS:
            result += 1.5;
            if (this.daysRented > 3) {
                result += (this.daysRented - 3) * 1.5;
            }
            break;
    }

    return result;
};