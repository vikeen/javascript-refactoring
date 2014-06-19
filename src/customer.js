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
        frequentRenterPoints = this.rentals[i].frequentRenterPoints();

        // show figures for this rental
        result += "\t" + this.rentals[i].movie.title + "\t" + this.rentals[i].charge() + "\n";
        totalAmount += this.rentals[i].charge();
    }

    // add footer lines
    result += "Amount owed is " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";
    return result;
};