const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const character3 = document.getElementById("character3");
const character4 = document.getElementById("character4");
const mySubmit = document.getElementById("mySubmit");
const selectedCharacter = document.getElementById("selectedCharacter");
mySubmit.onclick = function(){

    if(character1.checked){
        selectedCharacter.textContent = `You have selected Artoria!`
    }
    else if(character2.checked){
        selectedCharacter.textContent = `You have selected Baobhan!`
    }
    else if(character3.checked){
        selectedCharacter.textContent = `You have selected Kafka!`
    }
    else if(character4.checked){
        selectedCharacter.textContent = `You have selected Seele!`
    }
    else selectedCharacter.textContent = `Please pick a character.`
}