var Movie = function(title, type) {
    this.title = title;
    this.priceCode = this.types[type];
};

Movie.prototype.types = {
    'REGULAR': 0,
    'NEW_RELEASE': 1,
    'CHILDRENS': 2,
};

Movie.prototype.frequentRenterPoints = function() {
    return 1;
};