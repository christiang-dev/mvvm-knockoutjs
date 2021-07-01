// Class to represent a row in the seat reservations grid

function Movies(name, image, director, year, actors, description) {
    var self = this;
    self.name = ko.observable(name);
    self.image = ko.observable(image);
    self.director = ko.observable(director);
    self.year = ko.observable(year);
    self.actors = ko.observable(actors);
    self.description = ko.observable(description);
    return self;
}

// function NeueFilme(name, image) {
//     var self = this;
//     self.name = name;
//     self.image = image;
// }

// function DerzeitBeliebt(name, image) {
//     var self = this;
//     self.name = name;
//     self.image = image;
// }

// function NochmalAnsehen(name, image) {
//     var self = this;
//     self.name = name;
//     self.image = image;
// }



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
        new Movies("Deadpool", "assets/deadpool.webp", 
         "Tim Miller",
         "2016",
         "Ryan Reynolds, Morena Baccarin, T.J. Miller",
         "Deadpool beginnt ganz am Anfang. Wade Wilson (Reynolds) war erst bei den Special Forces, bevor er Söldner wurde. Dann schlug der Krebs zu. Nachdem er Versuchskaninchen für ein fragwürdiges Experiment gespielt hat, verfügt Wilson über beschleunigte Heilungskräfte und nimmt die Identität von Deadpool an. Bewaffnet mit diesen neuen Fähigkeiten und einem dunklen, verdrehten Sinn für Humor, jagt er dem Mann hinterher, der beinahe sein Leben zerstört hat..."),
        new Movies("Lucy", "assets/lucy.webp",
         "Luc Besson", 
         "2014", 
         "Scarlett Johansson, Luc Besson, Morgan Freeman",
         "Die US-Studentin Lucy (Scarlett Johansson) ist auf Party-Urlaub in Taipeh, wo sie von ihrem neuen Freund, dem Kleinkriminellen Richard (Pilou Asbaek), gebeten wird, einen Koffer an den mysteriösen Mr. Chang (Choi Min-sik) zu übergeben. Bei der Übergabe geht alles schief, Richard wird hingerichtet und Lucy von Mr. Chang gefangen genommen. Um dem Schlamassel zu entkommen, soll sie eine neuartige Superdroge nach Europa schmuggeln. diese wird ihr gegen ihren Willen in den Bauch implantiert. Wieder geht jedoch alles schief, Lucy wird zusammengeschlagen und dabei wird die gefährliche Substanz in ihrem Körper freigesetzt. Lucys Panik verwandelt sich allerdings schnell in Erstaunen, als sie merkt, dass die Droge ungeahnte Kräfte ausgelöst hat. Nach und nach wird sie immer stärker, denkt immer schärfer und entwickelt übermenschliche Fähigkeiten, mit denen sie ihren Peinigern entkommen kann. Während Lucy sich mit dem renommierten Hirnforscher Professor Samuel Norman (Morgan Freeman) in Verbindung setzt, um zu erfahren, was mit ihr geschieht, setzt Mafioso Jang seine Schergen auf Lucy an, die die junge Frau zum Schweigen bringen sollen..."),
        new Movies("Batman Begins", "assets/batman.webp",
        "Christopher Nolan",
        "2005",
        "Christian Bale, Cillian Murphy, Katie Holmes",
        "Nachdem er Zeuge des Mordes an seinen Eltern geworden ist, reist der Industrie-Erbe Bruce Wayne geplagt von seinen Kindheitserinnerungen ziellos durch die Welt auf der Suche nach einem Weg, jene zu bekämpfen, die Schrecken und Angst verbreiten. Mit der Hilfe seines treuen Butlers Alfred, Detective Jim Gordon und seines Verbündeten Lucius Fox kehrt Wayne schließlich nach Gotham City zurück und erschafft sein Alter Ego: Batman! Als maskierter Ritter kämpft er mit all seinen Fähigkeiten - Stärke, Intelligenz und einem Arsenal von High-Tech-Waffen - gegen das Böse der Unterwelt, die die Stadt bedrohen...")
    ]);

    self.popularMovies = ko.observableArray([
        new Movies("Iron Man", "assets/iron_man.webp", 
        "Jon Favreau",
        "2008",
        "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        "Tony Stark (Robert Downey Jr.) hat es als Großindustrieller in der Rüstungsbranche zum Multimillionär gebracht. Alles verläuft in Starks Leben nach Plan, bis er während eines Waffen-Testlaufs entführt wird. Der geniale Tüftler sieht nur eine Chance, zu entkommen: die Entwicklung einer hochtechnisierten und vielseitig einsetzbaren eisernen Rüstung, die ihn mit übermenschlichen Kräften und Fähigkeiten ausstattet. Und es klappt - der Kampfanzug ermöglicht Stark die Flucht. Zurück in seinem alten Leben will er die Waffenproduktion seiner Firma beenden und seine neueste Erfindung weiter perfektionieren. Sein zwielichtiger Geschäftspartner Obadiah Stane (Jeff Bridges) jedoch setzt alles daran, Stark möglichst schnell für unzurechnungsfähig erklären zu lassen, um ihn so aus dem Konzern ausschließen zu können. Und ein Auge auf den hochtechnisierten Anzug hat er auch geworfen..."),
        new Movies("Rush Hour", "assets/rush_hour.webp",
        "Brett Ratner",
        "1998",
        "Chris Tucker, Jackie Chan, Zhan Jingchu",
        "Inspektor Lee fügt dem organisierten Verbrechen in Hongkong immer wieder empfindliche Niederlagen zu. Sein väterlicher Freund, Konsul Han, hilft ihm dabei nach Kräften. Als Hans Tochter Soo Yung in Los Angeles entführt wird, bittet er Lee um Hilfe.. Dieser Text wurde von www.cinehits.de entnommen."),
        new Movies("The Interview", "assets/the_interview.webp",
        "´Seth Rogen, Evan Goldberg",
        "2014",
        "Seth Rogen, James Franco, Randall Park",
        "Der Film handelt von einem Mordkomplott der CIA gegen Nordkoreas Staatsoberhaupt Kim Jong-un im Rahmen eines Interviews durch einen US-amerikanischen Showmaster.")
    ]);

    self.rewatchMovies = ko.observableArray([
        new Movies("Suicide Squad", "assets/suicide_squad.webp",
        "David Ayer",
        "2016",
        "Margot Robbie, Will Smith, Jared Leto",
        "Amanda Waller stellt für die US-Regierung ein Team zusammen, das bei hochriskanten Aufträgen ohne Rücksicht auf Verluste eingesetzt werden soll und deshalb aus gefährlichen Verbrechern besteht: der gestörten Harley Quinn, dem Profikiller Deadshot, dem pyrokinetischen Ex-Gangster El Diablo, dem Dieb Captain Boomerang, ..."),
        new Movies("Joker", "assets/joker.webp",
        "Todd Phillips",
        "2019",
        "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        "Joker ist eine US-amerikanische Comicverfilmung von Todd Phillips aus dem Jahr 2019, basierend auf Figuren aus dem DC-Universum. Der Film erzählt die Ursprungsgeschichte von Arthur Fleck, dargestellt von Joaquin Phoenix, der unter dem Namen Joker später der notorische Gegenspieler von Batman wird."),
        new Movies("Spiderman", "assets/spiderman.webp",
        "Sam Raimi",
        "2001",
        "Kirsten Dunst, James Franco, Willem Dafoe",
        "In der Highschool ist er schüchtern und unbeliebt. Auf einem Schulausflug wird er von einer genetisch manipulierten Spinne gebissen und entwickelt daraufhin Superkräfte: die vergrößerte Kraft, Geschwindigkeit und Wendigkeit einer Spinne, die Fähigkeit Wände zu erklettern und einen besonderen „Spinnensinn“ für Gefahren.")
    ]);
}

ko.applyBindings(new MoviesViewModel());