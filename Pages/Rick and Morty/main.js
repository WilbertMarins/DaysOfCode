/* 
fetch('https://rickandmortyapi.com/api/character')
.then(response=>response.json())
.then(json=>console.log(json))
*/

fetch('https://rickandmortyapi.com/api/character',{
    method: 'GET'
})
.then(response=>response.json())
.then(function(json){

    //seleciona area de exibição geral
    var container = document.querySelector('.container');

    //interpreta o json, vamos criar os cards
    json.results.map(function(results){

        container.innerHTML+=
        `
        <div class="card">
        
        <div class="centralized"> <img style="margin-top:5px" src=${results.image} > </div>
        
        <div class="standard-margin">
            <h4>Nome: ${results.name}</>
            <h4>Status: ${results.status}</>
            <h4>Espécie: ${results.species}</>
            <h4>Gênero: ${results.gender}</>
            <h4>Localização: ${results.location.name}</>
        </div>
        
        <h4 class="centralized" >ID: ${results.id}</>
        
        </div>

        `;

    })
})
