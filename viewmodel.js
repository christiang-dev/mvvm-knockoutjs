<script src="/Scripts/knockout-3.5.1.js" type="text/javascript"></script>


// <!-- ViewModel -->   
    var AppViewModel = function(items) {
        this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function() {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};
 
ko.applyBindings(new AppViewModel(["Alpha", "Beta", "Gamma"]));
