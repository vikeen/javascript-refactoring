var Customer = function(name) {
    this.name = name;
    this.rentals = [];
};

Customer.prototype.addRental = function(rental) {
    this.rentals.push(rental);
};

Customer.prototype.statement = function() {
    var totalAmount = 0,
        frequentRenterPoints = 0,
        result = "Rental Record for " + this.name + "\n";

    for (var i = 0; i < this.rentals.length; i++) {
        var rental = this.rentals[i],
            amount = this.calculateAmount(rental);

        // add frequent renter points
        frequentRenterPoints += 1;

        // add bonus for a two day new release rental
        if (rental.movie.priceCode == jsRefactoring.movieTypes.NEW_RELEASE && rental.daysRented > 1) {
            frequentRenterPoints += 1;
        }

        // show figures for this rental
        result += "\t" + rental.movie.title + "\t" + amount + "\n";
        totalAmount += amount;
    }

    // add footer lines
    result += "Amount owed is " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";
    return result;
};

Customer.prototype.calculateAmount = function(rental) {
    result = 0;

    // determine amounts for each line
    switch (rental.movie.priceCode) {
        case jsRefactoring.movieTypes.REGULAR:
            result += 2;
            if (rental.daysRented > 2) {
                result += (rental.daysRented - 2) * 1.5;
            }
            break;
        case jsRefactoring.movieTypes.NEW_RELEASE:
            result += rental.daysRented * 3;
            break;
        case jsRefactoring.movieTypes.CHILDRENS:
            result += 1.5;
            if (rental.daysRented > 3) {
                result += (rental.daysRented - 3) * 1.5;
            }
            break;
    }

    return result;
};
