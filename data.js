const nama="aldy akbar";
let usia = 10;

let biodata = document.getElementById("BIODATA")

function generateBiodata() {
    let generasi;
    if (usia >10 && usia < 18) {
 generasi="generasi remaja";
    }
     else if(usia > 18 && usia < 30){
generasi ="generasi dewasa"
    }
    else if (usia >= 30){
generasi = "tua bingitt kamu";
    }
    else if (usia < 10 && usia > 2) {
generasi = "generasi anak anak";
    }
    else {
generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;
}  
console.log (nama);
console.log (usia);
generateBiodata();