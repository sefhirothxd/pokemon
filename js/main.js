/* Clase semana 13 - 1 */

let container = document.getElementById('container-pokemons');
let canPoke = document.getElementById('input');
let btn = document.querySelectorAll('button');


btn.forEach(btn => {
    btn.addEventListener('click', EventButton);
})


function getPokemon1(fn, numero) {
    let pk1 = new XMLHttpRequest();
    let api_url = 'https://pokeapi.co/api/v2/';
    let poke_url = 'pokemon/:id'
    pk1.open('GET', api_url + poke_url.replace(':id', numero));
    pk1.send();

    pk1.onload = function() {
        if (pk1.status == 200) {
            let dato = pk1.response;
            fn(dato);
        }
    }
}

function EventButton(event) {
    if (event.target.id == 'btn-enviar')
        for (let index = 1; index <= canPoke.value; index++) {
            getPokemon1(function(dato) {

                let pokemon1 = JSON.parse(dato);
                console.log(pokemon1);
                poke = {
                    img: pokemon1.sprites.front_shiny,
                    name: pokemon1.name,
                    type: pokemon1.types[0].type.name,
                    number: pokemon1.id
                }

                let img = poke.img;
                let name = poke.name;
                let type = poke.type;
                let number = poke.number;
                let card = document.createElement('article');
                card.classList.add('card');
                card.innerHTML = `
            <ul>
                <li><img src='${img}'/></li>
                <li>Nombre: ${name}</li>
                <li>Tipo: ${type}</li>
                <li>Numero: ${number}</li>
            </ul>
        `
                container.appendChild(card);


                console.log(poke);
            }, index)
        }
}

