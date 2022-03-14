function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

$(document).ready(function () {
    $("form#new-contact").submit(function (e) { 
        e.preventDefault();
        
        let inputtedFirstName = $("input#new-first-name").val();
        let inputtedLastName = $("input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

        $("input#new-first-name").val("")
        $("input#new-last-name").val("")
    })
})