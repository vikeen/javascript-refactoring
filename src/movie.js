var Movie = function(title, type) {
    this.title = title;
    this.priceCode = this.types[type];
};

Movie.prototype.types = {
    'REGULAR': 0,
    'NEW_RELEASE': 1,
    'CHILDRENS': 2,
};

Movie.prototype.charge = function(daysRented) {
    result = 0;

    // determine amounts for each line
    switch (this.priceCode) {
        case this.types.REGULAR:
            result += 2;
            if (daysRented > 2) {
                result += (daysRented - 2) * 1.5;
            }
            break;
        case this.types.NEW_RELEASE:
            result += daysRented * 3;
            break;
        case this.types.CHILDRENS:
            result += 1.5;
            if (daysRented > 3) {
                result += (daysRented - 3) * 1.5;
            }
            break;
    }

    return result;
};

Movie.prototype.frequentRenterPoints = function(daysRented) {
    return (this.priceCode == this.types.NEW_RELEASE && daysRented > 1) ? 2 : 1;
};