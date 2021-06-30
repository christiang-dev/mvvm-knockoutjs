// Class to represent a row in the seat reservations grid
function NeueFilme(name, image) {
    var self = this;
    self.name = name;
    self.image = image;
}

function DerzeitBeliebt(name, image) {
    var self = this;
    self.name = name;
    self.image = image;
}

function NochmalAnsehen(name, image) {
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
    self.newMovies = ko.observableArray([
        new NeueFilme("Deadpool", "assets/deadpool.webp"),
        new NeueFilme("Lucy", "assets/lucy.webp"),
        new NeueFilme("Batman Begins", "assets/batman.webp")
    ]);

    self.popularMovies = ko.observableArray([
        new NeueFilme("Iron Man", "assets/iron_man.webp"),
        new NeueFilme("Rush Hour", "assets/rush_hour.webp"),
        new NeueFilme("Avengers", "assets/avengers.jpg")
    ]);

    self.rewatchMovies = ko.observableArray([
        new NeueFilme("Suicide Squad", "assets/suicide_squad.webp"),
        new NeueFilme("Joker", "assets/joker.webp"),
        new NeueFilme("Spiderman", "assets/spiderman.webp")
    ]);
}

ko.applyBindings(new MoviesViewModel());