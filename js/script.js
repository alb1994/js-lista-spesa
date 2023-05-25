let lista = [
    "6 uova",
    "150 g di zucchero",
    "500 g di mascarpone",
    "200 ml di caffè forte",
    "200 g di savoiardi",
    "Cacao amaro in polvere"
    ];

let listahtml = document .getElementById("lista");

let i=0;
while(i<lista.length){
    let elememento_lista = document.createElement("li")
    elememento_lista.innerText = lista[i];
    listahtml.append(elememento_lista)

    i++
}