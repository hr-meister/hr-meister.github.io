window.onload = function () {
    
    var gllacyForms = {};
    
    gllacyForms.textFields = document.querySelectorAll("textarea, input[type='text'], input[type='email'], input[type='search'], input[type='password']");
    
    gllacyForms.addClassNotEmpty = function (event) {
        
        event = event || window.event;
        if (this.value != "") {
            this.classList.add("not-empty");
        } else {
            this.classList.remove("not-empty");
        };
        
    };
    
    if (gllacyForms.textFields.length != 0) {
        
        for (var i = 0, l = gllacyForms.textFields.length; i < l; i++) {
            
            gllacyForms.textFields[i].addEventListener("blur", gllacyForms.addClassNotEmpty);
            
        };
        
    };
    
}