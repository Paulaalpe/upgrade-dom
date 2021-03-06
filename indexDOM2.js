// // // 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div")
document.body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
var div = document.createElement("div")
document.body.appendChild(div);
var p = document.createElement("p");
div.appendChild(p);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let container = document.createElement("div");
document.body.appendChild(container);
for(let i=1; i<=6; i++) {
    let p = document.createElement("p");
    container.appendChild(p);
}


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
var p = document.createElement("p");
document.body.appendChild(p);
var t = document.createTextNode("Soy dinámico");
p.appendChild(t);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2");
h2.textContent = "Wubba Lubba dub dub";

// // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul");
document.body.appendChild(lista);


for (i=0; i < apps.length; i++) {
    let elementoLista = document.createElement("li")
    lista.appendChild(elementoLista);
    // lista.appendChild(elementoLista[i]);
    let textoLi = document.createTextNode(apps[i]);
    elementoLista.appendChild(textoLi)
}

// // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// let nodosConClase = document.querySelectorAll(".fn-remove-me");
// nodosConClase.remove()

let deleteElement = document.querySelectorAll(".fn-remove-me"); 
deleteElement.remove()

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let contenedor8 = document.querySelector("div");
let parrafo8 = document.createElement("p");
contenedor8.appendChild(parrafo8);
let texto8 = document.createTextNode("Voy en medio");
parrafo8.appendChild(texto8);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


