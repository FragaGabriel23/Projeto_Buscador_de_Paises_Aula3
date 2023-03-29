document.getElementById('Card').style.setProperty('display', 'none', 'important')

function Procurar(){
    document.getElementById('Card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('Pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    
    console.log(finalURL)

    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        document.getElementById('Bandeira').src = data[0].flags.svg;
        document.getElementById('Nome').innerText = data[0].name.common;
        document.getElementById('Capital').innerText = data[0].capital[0];
        document.getElementById('Continente').innerText = data[0].continents[0];
        document.getElementById('Populacao').innerText = data[0].population;
    })
}