var Customer = function(name) {
    this.name = name;
    this.rentals = [];
};

Customer.prototype.addRental = function(rental) {
    this.rentals.push(rental);
};

Customer.prototype.statement = function() {
    var result = "Rental Record for " + this.name + "\n";

    for (var i = 0; i < this.rentals.length; i++) {
        // show figures for this rental
        result += "\t" + this.rentals[i].movie.title + "\t" + this.rentals[i].charge() + "\n";
    }

    // add footer lines
    result += "Amount owed is " + this.totalCharge() + "\n";
    result += "You earned " + this.totalFrequentRenterPoints() + " frequent renter points";
    return result;
};

Customer.prototype.totalCharge = function() {
    var result = 0;
    for (var i = 0; i < this.rentals.length; i++) {
        result += this.rentals[i].charge();
    }
    return result;
};

Customer.prototype.totalFrequentRenterPoints = function() {
    var result = 0;
    for (var i = 0; i < this.rentals.length; i++) {
        result += this.rentals[i].frequentRenterPoints();
    }
    return result;
};