function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

function Address(street, city, county){
    this.street = street;
    this.city = city;
    this.county = county;
}

Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

$(document).ready(function () {
    $("add-address").click(function (e) { 
        e.preventDefault();
        $("new-addresses").append('<div class = "new-address">' + 
        '<div class="form-group">' + 
        '<label for="new-street">Street</label>' + 
        '<input type="text" class="form-control new-street">' + 
        '</div>' + 
        '<div class="form-group">' + 
        '<label for="new-city">City</label>' + 
        '<input type="text" class="form-control new-city">' + 
        '</div>' + 
        '<div class="form-group">' + 
        '<label for="new-county">County</label>' + 
        '<input type="text" class="form-control new-county">' + 
        '</div>' + 
        '</div>');
    });


    $("form#new-contact").submit(function (e) { 
        e.preventDefault();
        
        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $(".new-address").each(function () { 
             let inputtedStreet = $(this).find("input.new-street").val();
             let inputtedCity = $(this).find("input.new-city").val();
             let inputtedCounty = $(this).find("input.new-county").val();

             let newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
             newContact.addresses.push(newAddress);
        });

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        })

        $("input#new-first-name").val("")
        $("input#new-last-name").val("")
    });
})