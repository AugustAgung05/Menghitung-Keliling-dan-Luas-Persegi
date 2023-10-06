// KELILING
// TEMPAT DIV DENGAN ID BERADA
let tempatkeliling = document.getElementById("hasil-keliling");
    

// MEMBUAT PERHITUNGAN UNTUK KELILING S x 4 & MENAMBAHKAN CHILD KE TAG HTML
function hitungkeliling(){
    let keliling = document.getElementById("hitung-keliling").value;
    if (keliling ==  "" ){
        alert("Isi Input Dengan Nilai");
    } else if (keliling == 0) {
        alert("Gakbisa Kalo Valuenya NOL!");
        document.getElementById("hitung-keliling").value = "";
    } else {
        keliling = parseInt(keliling);
        resultkel = keliling * 4;
        tempatkeliling.appendChild(tampilankeliling(keliling));
        tempatkeliling.appendChild(tampilanhasilkel(resultkel));
    }

}

// MEMBUAT CHILD UNTUK INPUT KELILING
function tampilankeliling(keliling){
    let tampilank = document.createElement("div");
    tampilank.innerHTML = `
        <div id="hasil-keliling">
        <p>L = S * 4</p>
        <p>L = ${keliling} * 4</p>
        </div>
        `
    return tampilank;
}

// MEMBUAT CHILD UNTUK HASIL INPUT KELILING 
function tampilanhasilkel(resultkel){
    let hasil2 = document.createElement("div");
    hasil2.innerHTML = `
        <div id="hasil-keliling">
        <p>L = ${resultkel}</p>
        <button class="btnht" onclick="resetKeliling()">Reset</button>
        </div>
        `
    return hasil2;
}

// BUTTON RESET UNTUK KELILING 
function resetKeliling() {
    document.getElementById("hasil-keliling").innerHTML = "";
    document.getElementById("hitung-keliling").value = "";

};


// LUAS
// TEMPAT DIV DENGAN ID BERADA
let tempathasilluas = document.getElementById("hasil-luas");

// MEMBUAT PERHITUNGAN UNTUK LUAS S x S & MENAMBAHKAN CHILD KE TAG HTML
function hitungluas(){
    let luas = document.getElementById("hitung-luas").value;
    if (luas == "") {
        alert("Isi Input Dengan Nilai");
    }else if (luas == 0) {
        alert("Gakbisa Kalo Valuenya NOL!");
        document.getElementById("hitung-keliling").value = "";
    } else {
        luas = parseInt(luas);
        resultluas = luas * luas;
        tempathasilluas.appendChild(tampilanluas(luas));
        tempathasilluas.appendChild(tampilanhasiluas(resultluas));
    }

}

// MEMBUAT CHILD UNTUK INPUT LUAS
function tampilanluas(luas){
    let tampilan1 = document.createElement("section");
    tampilan1.innerHTML = `
        <p>L = S x S</p>
        <p>L = ${luas} x ${luas}</p>
    `
    return tampilan1;
}

// MEMBUAT CHILD UNTUK HASIL INPUT LUAS
function tampilanhasiluas(resultluas){
    let hasil1 = document.createElement("section");
    hasil1.innerHTML = `
        <p>L = ${resultluas}</p>
        <button class="btnht" onclick="resetLuas()">Reset</button>
     `
    return hasil1;
}

// BUTTON RESET UNTUK LUAS
function resetLuas(){
    document.getElementById("hasil-luas").innerHTML = "";
    document.getElementById("hitung-luas").value = "";
}
