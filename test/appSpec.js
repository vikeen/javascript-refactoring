// Movie Stubs
describe('Movie tests:', function() {
    var newReleaseMovie = new Movie('Die Hard', jsRefactoring.movieTypes.NEW_RELEASE),
        regularMovie = new Movie('Indiana Jones', jsRefactoring.movieTypes.REGULAR),
        childrensMovie = new Movie('Frozen', jsRefactoring.movieTypes.CHILDRENS);

    // Rental stubs for our movies
    var newReleaseRental = new Rental(newReleaseMovie, 2),
        regularRental = new Rental(regularMovie, 2),
        lateRegularRental = new Rental(regularMovie, 5),
        childrensRental = new Rental(childrensMovie, 3),
        lateChildrensRental = new Rental(childrensMovie, 10);

    var movieSnob;

    beforeEach(function() {
        movieSnob = new Customer('John Rake');
    });

    it('new release rental', function() {
        movieSnob.addRental(newReleaseRental);
        expect(movieSnob.statement()).toMatch(/Amount owed is 6/);
        expect(movieSnob.statement()).toMatch(/You earned 2 frequent renter points/);
    });

    it('regular release rental', function() {
        movieSnob.addRental(regularRental);
        expect(movieSnob.statement()).toMatch(/Amount owed is 2/);
        expect(movieSnob.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('late regular release rental', function() {
        movieSnob.addRental(lateRegularRental);
        expect(movieSnob.statement()).toMatch(/Amount owed is 6.5/);
        expect(movieSnob.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('childrens release rental', function() {
        movieSnob.addRental(childrensRental);
        expect(movieSnob.statement()).toMatch(/Amount owed is 1.5/);
        expect(movieSnob.statement()).toMatch(/You earned 1 frequent renter points/);
    });

    it('late childrens release rental', function() {
        movieSnob.addRental(lateChildrensRental);
        expect(movieSnob.statement()).toMatch(/Amount owed is 12/);
        expect(movieSnob.statement()).toMatch(/You earned 1 frequent renter points/);
    });
});