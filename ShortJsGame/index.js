const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const character3 = document.getElementById("character3");
const character4 = document.getElementById("character4");
const mySubmit = document.getElementById("mySubmit");
const selectedCharacter = document.getElementById("p1Message");
const showStatus = document.getElementById("showStatus");
const returnBtn = document.getElementById("returnBtn");
const radios = document.querySelectorAll('input[name="characterList"]'); // Seleciona todos os radios
let character;
let enemy;
let clickPhase = 1;
// Adiciona evento de mudança a todos os radios
radios.forEach((radio) => {
    radio.addEventListener("change", checkSelection);
});

// Mudar cor do BACK com base nos inputs radio
function checkSelection () {
    let isChecked = false;
    radios.forEach((radio) => {
        if (radio.checked) isChecked = true;
    });
    if (isChecked) {
        returnBtn.classList.add('hover-active');
    }
    else{
        returnBtn.classList.remove('hover-active');
    }
}

// onclick functions
returnBtn.onclick = function () {
    if (character1.checked || character2.checked || character3.checked || character4.checked){
        radios.forEach((radio) => {radio.checked = false});
    }
    else if (clickPhase >= 2){
        clickPhase = 1;
        character = null;
        document.querySelector('p[id="showPlayerStatus"]').textContent = "";
        enemy = null;
        document.querySelector('p[id="showEnemyStatus"]').textContent = null;
        document.querySelector('label[for="character1"]').textContent = "Artoria";
        document.querySelector('label[for="character2"]').textContent = "Baobhan";
        document.querySelector('label[for="character3"]').textContent = "Kafka";
        document.querySelector('label[for="character4"]').textContent = "Seele";
        if (character != null && clickPhase >= 2) {
            showStatus.classList.remove("active");
            showStatus.classList.add("hidden");
        }
        selectedCharacter.textContent = "Select a character.";
    }
    if (!(character1.checked || character2.checked || character3.checked || character4.checked) && clickPhase == 1){
        returnBtn.classList.remove('hover-active'); // classe hover-active
    }
}

mySubmit.onclick = function () {
    if (clickPhase < 2 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please select a character.`;
    }
    if (clickPhase > 1 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please select an enemy.`;
    }
    if (character1.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Artoria!`;
            character = "Artoria";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Gepard!`;
            enemy = "Gepard";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
        }
    } else if (character2.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Baobhan!`;
            character = "Baobhan";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Bronya!`;
            enemy = "Bronya";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
        }
    } else if (character3.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Kafka!`;
            character = "Kafka";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Blade!`;
            enemy = "Blade";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
        }
    } else if (character4.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Seele!`;
            character = "Seele";
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Archer!`;
            enemy = "Archer";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
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
            radios.forEach(radio => { radio.checked = false; });
        }, 1500);
    }

    // Adicionar a classe 'active' para a div #showStatus com animação de slide down
    if (character != null && clickPhase >= 2) {
        showStatus.classList.add("active"); // Adiciona a classe para mostrar a div com animação
    }
};