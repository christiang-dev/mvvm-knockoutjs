// Class to represent a row in the seat reservations grid
function NeueFilme(name, image) {
    var self = this;
    self.name = name;
    self.image = image;
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
        new NeueFilme("Deadpool", "assets/deadpool.webp"),
        new NeueFilme("Lucy", "assets/lucy.webp"),
        new NeueFilme("Batman Begins", "assets/batman.webp")
    ]);
}

ko.applyBindings(new MoviesViewModel());