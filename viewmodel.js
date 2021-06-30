// Class to represent a row in the seat reservations grid
function NeueFilme(name) {
    var self = this;
    self.name = name;
}

// Overall viewmodel for this screen, along with initial state
function MoviesViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMovies = [
        { movieName: "Deadpool"},
        { movieName: "Lucy"},
        { movieName: "Batman Begins"}
    ];    

    // Editable data
    self.movies = ko.observableArray([
        new NeueFilme("Test123", self.availableMovies[0]),
        new NeueFilme("Test321", self.availableMovies[0])
    ]);
}

ko.applyBindings(new MoviesViewModel());