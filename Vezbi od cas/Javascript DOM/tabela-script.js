    let ime;
    let prezime;
    let index;
    let predmet;
    let ocena;
    let validate_btn= document.getElementById("validiraj");
    let add_btn= document.getElementById("dodadi");
    let sign_div= document.getElementById("validation-sign");

function validate() {

    ime= document.getElementById("ime").value.toString();
    prezime= document.getElementById("prezime").value.toString();
    index= document.getElementById("index").value;
    ocena= document.getElementById("ocena").value;

    if(ime.length >= 3 && prezime.length >= 3 && predmet.length >= 3 && (!isNaN(index) && index > 99999 && index < 10000000)){
        sign_div.innerHTML= "✔";
        add_btn.disabled= false;
    }
    else {
        sign_div.innerHTML= "❌";
    }
}

function add_data() {

    
}
