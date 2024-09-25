let userJson = null;
let enemyJson = null;
let chamarApi = 0;
const healthBar = document.getElementById("healthBar");
const healthBarEnemy = document.getElementById("healthBarEnemy");
const bleedingHealthBarEnemy = document.getElementById("bleedingHealthBarEnemy");
const bleedingHealthBar = document.getElementById("bleedingHealthBar")
const ChangeHealth = document.getElementById("ChangeHealth");
const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const character3 = document.getElementById("character3");
const character4 = document.getElementById("character4");
const pickCharacter = document.getElementById("pickCharacter");
const mySubmit = document.getElementById("mySubmit");
const selectedCharacter = document.getElementById("p1Message");
const showStatus = document.getElementById("showStatus");
const returnBtn = document.getElementById("returnBtn");
const radios = document.querySelectorAll('input[name="characterList"]'); // Seleciona todos os radios
let character = null;
let enemy = null;
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

/*  formula de animação para barras de vida
    let speed = 140;
    
    let healthWidth = parseFloat(window.getComputedStyle(healthBar).width);
    let healthWidthEnemy = parseFloat(window.getComputedStyle(healthBarEnemy).width);
    
    let bleedingWidth = parseFloat(window.getComputedStyle(bleedingHealthBar).width);
    let bleedingWidthEnemy = parseFloat(window.getComputedStyle(bleedingHealthBarEnemy).width);

    let deltaBleeding = Math.abs(healthWidth - bleedingWidth); // Usado para conseguir valores diferentes para o divisor pela velocidade
    let deltaBleedingEnemy = Math.abs(healthWidthEnemy - bleedingWidthEnemy); 
    let transitionDuration = deltaBleeding / speed; 
    let transitionDurationEnemy = deltaBleedingEnemy / speed;

    bleedingHealthBar.style.transition = `width ${transitionDuration}s ease`;
    bleedingHealthBarEnemy.style.transition = `width ${transitionDurationEnemy}s ease`;

    bleedingHealthBar.style.width = `${healthWidth}px`;
    bleedingHealthBarEnemy.style.width = `${healthWidthEnemy}px`;
    
    console.log(`Transition Duration for Player: ${transitionDuration}s`);
    console.log(`Transition Duration for Enemy: ${transitionDurationEnemy}s`);
*/

// onclick functions
returnBtn.onclick = function () {
    if (character1.checked || character2.checked || character3.checked || character4.checked){
        radios.forEach((radio) => {radio.checked = false});
    }
    else if (clickPhase == 2){
        clickPhase = 1;
        character = null;

        document.querySelector('p[id="showPlayerStatus"]').textContent = null;
        document.querySelector('label[for="character1"]').textContent = "Artoria";
        document.querySelector('label[for="character2"]').textContent = "Baobhan";
        document.querySelector('label[for="character3"]').textContent = "Kafka";
        document.querySelector('label[for="character4"]').textContent = "Seele";
        
        showStatus.classList.remove("active");
        showStatus.classList.add("hidden");

        healthBar.classList.remove("active");
        backgroundHealth.classList.remove("active");
        energyBar.classList.remove("active");
        backgroundEnergy.classList.remove("active");

        userJson = {
            "name": ""
        }
        fetch("https://localhost:7204/api/Personagem",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userJson)
        }).then(response => {
            if (!response.ok){
                throw new Error("Erro na requisicao")
            }
            return response.json()
        }).then(data => {
            console.log(data)
        })
        selectedCharacter.textContent = "Select a character.";
    }
    else if (clickPhase == 3){
        bleedingHealthBarEnemy.classList.remove("active");
        document.querySelector('label[for="character1"]').textContent = "Gepard";
        document.querySelector('label[for="character2"]').textContent = "Bronya";
        document.querySelector('label[for="character3"]').textContent = "Blade";
        document.querySelector('label[for="character4"]').textContent = "Archer";
        pickCharacter.classList.remove("shrink");

        healthBarEnemy.classList.remove("active");
        backgroundHealthEnemy.classList.remove("active");
        energyBarEnemy.classList.remove("active");
        backgroundEnergyEnemy.classList.remove("active");
        
        radios.forEach(radio => {
            radio.classList.remove("hidden")
        });
        clickPhase = 2;
        enemy = null;
        document.querySelector('p[id="showEnemyStatus"]').textContent = null;
        enemyJson = {
            "name": ""
        }
        fetch("https://localhost:7204/api/Inimigo",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(enemyJson)
        }).then(response => {
            if (!response.ok){
                throw new Error("Erro na requisicao")
            }
            return response.json()
        }).then(data => {
            console.log(data)
        })
        selectedCharacter.textContent = "Please select an enemy.";
    }
    if (clickPhase == 1){
        returnBtn.classList.remove('hover-active'); // classe hover-active
    }
}

mySubmit.onclick = function () {
    if (clickPhase < 2 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please select a character.`;
    }
    if (clickPhase > 1 && clickPhase < 3 && !(character1.checked || character2.checked || character3.checked || character4.checked)) {
        selectedCharacter.textContent = `Please select an enemy.`;
    }
    if (character1.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Artoria!`;
            character = "Artoria";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Gepard!`;
            enemy = "Gepard";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
        }
    } else if (character2.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Baobhan!`;
            character = "Baobhan";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Bronya!`;
            enemy = "Bronya";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
        }
    } else if (character3.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Kafka!`;
            character = "Kafka";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Blade!`;
            enemy = "Blade";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
        }
    } else if (character4.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Seele!`;
            character = "Seele";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
        } else {
            selectedCharacter.textContent = `You have selected Archer!`;
            enemy = "Archer";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
        }
    }
    if (clickPhase == 2 && chamarApi == 1){
        chamarApi = 0;

        healthBar.classList.add("active");
        backgroundHealth.classList.add("active");
        energyBar.classList.add("active");
        backgroundEnergy.classList.add("active");

        userJson = {
            "name": character
        }
        fetch("https://localhost:7204/api/Personagem",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userJson)
        }).then(response => {
            if (!response.ok){
                throw new Error("Erro na requisicao")
            }
            return response.json()
        }).then(data => {
            console.log(data)
        });
        
    } else if (clickPhase == 3){
        chamarApi = 0
        bleedingHealthBarEnemy.classList.add("active");
        healthBarEnemy.classList.add("active");
        backgroundHealthEnemy.classList.add("active");
        energyBarEnemy.classList.add("active");
        backgroundEnergyEnemy.classList.add("active");

        enemyJson = {
            "name": enemy
        }
        fetch("https://localhost:7204/api/Inimigo",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(enemyJson)
        }).then(response => {
            if (!response.ok){
                throw new Error("Erro na requisicao")
            }
            return response.json()
        }).then(data => {
            console.log(data)
        });
    }
    

    if (clickPhase == 2) {
        document.querySelector('label[for="character1"]').textContent = "Gepard";
        document.querySelector('label[for="character2"]').textContent = "Bronya";
        document.querySelector('label[for="character3"]').textContent = "Blade";
        document.querySelector('label[for="character4"]').textContent = "Archer";
        radios.forEach(radio => { radio.checked = false; });
        setTimeout(function () {
            if (selectedCharacter.textContent != "Please select an enemy." && selectedCharacter.textContent != "Select a character." && clickPhase != 3)
            selectedCharacter.textContent = "Now select an enemy.";
        }, 1500);
    } else if (clickPhase == 3) {
        radios.forEach(radio => {
            radio.classList.add("hidden")
        });
        pickCharacter.classList.add("shrink");
        document.querySelector('label[for="character1"]').textContent = null;
        document.querySelector('label[for="character2"]').textContent = null;
        document.querySelector('label[for="character3"]').textContent = null;
        document.querySelector('label[for="character4"]').textContent = null;
    }
    
    // Adicionar a classe 'active' para a div #showStatus com animação de slide down
    if (character != null && clickPhase >= 2 && clickPhase <= 3) {
        showStatus.classList.add("active"); // Adiciona a classe para mostrar a div com animação
    }
};