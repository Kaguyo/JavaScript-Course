const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const character3 = document.getElementById("character3");
const character4 = document.getElementById("character4");
const mySubmit = document.getElementById("mySubmit");
const selectedCharacter = document.getElementById("p1Message");
const showStatus = document.getElementById("showStatus");
let character;
let enemy;
let clickPhase = 1;

mySubmit.onclick = function () {
    if (clickPhase < 2 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please pick a character.`;
    }
    if (clickPhase > 1 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please select an enemy.`;
    }
    if (character1.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Artoria!`;
            character = "Artoria";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = "Artoria";
        } else {
            selectedCharacter.textContent = `You have selected Gepard!`;
            enemy = "Gepard";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = "Gepard"
        }
    } else if (character2.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Baobhan!`;
            character = "Baobhan";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = "Baobhan";
        } else {
            selectedCharacter.textContent = `You have selected Bronya!`;
            enemy = "Bronya";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = "Bronya"
        }
    } else if (character3.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Kafka!`;
            character = "Kafka";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = "Kafka";
        } else {
            selectedCharacter.textContent = `You have selected Blade!`;
            enemy = "Blade";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = "Blade"
        }
    } else if (character4.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Seele!`;
            character = "Seele";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = "Seele";
        } else {
            selectedCharacter.textContent = `You have selected Archer!`;
            enemy = "Archer";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = "Archer"
        }
    }

    if (clickPhase == 2) {
        setTimeout(function () {
            clickPhase = 3;
            selectedCharacter.textContent = "Now select an enemy.";
            document.querySelector('label[for="character1"]').textContent = "Gepard";
            document.querySelector('label[for="character2"]').textContent = "Bronya";
            document.querySelector('label[for="character3"]').textContent = "Blade";
            document.querySelector('label[for="character4"]').textContent = "Archer";
            document.querySelectorAll('input[name="characterList"]').forEach(radio => { radio.checked = false; });
        }, 1500);
    }

    // Adicionar a classe 'active' para a div #showStatus com animação de slide down
    if (character != null && clickPhase >= 2) {
        showStatus.classList.add("active"); // Adiciona a classe para mostrar a div com animação
    }
};
