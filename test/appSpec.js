// Movie Stubs
describe('Movie tests:', function() {

    var newReleaseMovie = new NewReleaseMovie('Die Hard'),
        regularMovie = new RegularMovie('Indiana Jones'),
        childrensMovie = new ChildrensMovie('Frozen');

    // Rental stubs for our movies
    var newReleaseRental = new Rental(newReleaseMovie, 2),
        regularRental = new Rental(regularMovie, 2),
        lateRegularRental = new Rental(regularMovie, 5),
        childrensRental = new Rental(childrensMovie, 3),
        lateChildrensRental = new Rental(childrensMovie, 10);

    var customer;

    beforeEach(function() {
        customer = new Customer('John Rake');
    });

    it('new release rental', function() {
        customer.addRental(newReleaseRental);
        expect(customer.statement()).toMatch(/Amount owed is 6/);
        expect(customer.statement()).toMatch(/You earned 2 frequent renter points/);
    });

    it('regular release rental', function() {
        customer.addRental(regularRental);
        expect(customer.statement()).toMatch(/Amount owed is 2/);
        expect(customer.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('late regular release rental', function() {
        customer.addRental(lateRegularRental);
        expect(customer.statement()).toMatch(/Amount owed is 6.5/);
        expect(customer.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('childrens release rental', function() {
        customer.addRental(childrensRental);
        expect(customer.statement()).toMatch(/Amount owed is 1.5/);
        expect(customer.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('late childrens release rental', function() {
        customer.addRental(lateChildrensRental);
        expect(customer.statement()).toMatch(/Amount owed is 12/);
        expect(customer.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('new release rental and a regular release rental', function() {
        customer.addRental(newReleaseRental);
        customer.addRental(regularRental);
        expect(customer.statement()).toMatch(/Amount owed is 8/);
        expect(customer.statement()).toMatch(/You earned 3 frequent renter points/);
    });
});