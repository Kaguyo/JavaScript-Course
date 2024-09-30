// Alocagem de atributos dos personagens
let atk;
let hpMax;
let hp;
let def;
let critDmg;
let critRate;
let ultCost;
let energy;
let speed;

let atkEnemy;
let hpMaxEnemy;
let hpEnemy;
let defEnemy;
let critDmgEnemy;
let critRateEnemy;
let ultCostEnemy;
let energyEnemy;
let speedEnemy;
// Fim alocagem de atributos de personagens

let userJson = null;
let enemyJson = null;
let chamarApi = 0;
const healthBar = document.getElementById("healthBar");
const healthBarEnemy = document.getElementById("healthBarEnemy");
const bleedingHealthBarEnemy = document.getElementById("bleedingHealthBarEnemy");
const bleedingHealthBar = document.getElementById("bleedingHealthBar")
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
function TrackHealth(hpParameter, hpMaxParameter) {
    let fraction = (hpParameter / hpMaxParameter) * 100;
    if (hpMaxParameter == 0) { fraction = 0 };
    healthBar.style.width = `${fraction}%`;

    let speed = 120;
    
    let healthWidth = parseFloat(window.getComputedStyle(healthBar).width);
    let bleedingWidth = parseFloat(window.getComputedStyle(bleedingHealthBar).width);
    let deltaBleeding = Math.abs(healthWidth - bleedingWidth);
    let transitionDuration = deltaBleeding / speed; 

    bleedingHealthBar.style.transition = `width ${transitionDuration}s`;

    bleedingHealthBar.style.width = `${fraction}%`;
}
// =========================================================
function TrackHealthEnemy(hpEnemyParameter, hpMaxEnemyParameter) {
    let fractionEnemy = (hpEnemyParameter / hpMaxEnemyParameter) * 100;
    if (hpMaxEnemyParameter == 0) { fractionEnemy = 0 };
    healthBarEnemy.style.width = `${fractionEnemy}%`;
    let speed = 120;

    let healthWidthEnemy = parseFloat(window.getComputedStyle(healthBarEnemy).width);
    let bleedingWidthEnemy = parseFloat(window.getComputedStyle(bleedingHealthBarEnemy).width);
    let deltaBleedingEnemy = Math.abs(healthWidthEnemy - bleedingWidthEnemy); 
    let transitionDurationEnemy = deltaBleedingEnemy / speed;

    bleedingHealthBarEnemy.style.transition = `width ${transitionDurationEnemy}s`;

    bleedingHealthBarEnemy.style.width = `${fractionEnemy}%`;
}

// onclick functions
returnBtn.onclick = function () {
    if (character1.checked || character2.checked || character3.checked || character4.checked) {
        radios.forEach((radio) => {radio.checked = false});
    }
    else if (clickPhase == 2) {
        clickPhase = 1;
        character = null;

        document.querySelector('p[id="showPlayerStatus"]').textContent = null;
        document.querySelector('label[for="character1"]').textContent = "Artoria";
        document.querySelector('label[for="character2"]').textContent = "Baobhan";
        document.querySelector('label[for="character3"]').textContent = "Kafka";
        document.querySelector('label[for="character4"]').textContent = "Seele";
        
        showStatus.classList.remove("active");

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
            console.log("Dados recebidos da API Personagem:", data);
            atk = data.atk;
            hpMax = data.hpMax;
            hp = data.hp;
            def = data.def;
            critDmg = data.critDmg;
            critRate = data.critRate;
            ultCost = data.ultCost;
            energy = data.energy;
            speed = data.speed; 
            TrackHealth(hp, hpMax);
        });

        selectedCharacter.textContent = "Select a character.";
    }
    else if (clickPhase == 3) {
        chamarApi = 2;
        healthBarContainer.classList.add("singlePlayer");
        showStatus.classList.add("singlePlayer");
        selectedCharacter.style.visibility = "visible";
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
            console.log("Dados recebidos da API Inimigo:", data);
            atkEnemy = data.atk;
            hpMaxEnemy = data.hpMax;
            hpEnemy = data.hp;
            defEnemy = data.def;
            critDmgEnemy = data.critDmg;
            critRateEnemy = data.critRate;
            ultCostEnemy = data.ultCost;
            energyEnemy = data.energy;
            speedEnemy = data.speed;
            TrackHealthEnemy(hpEnemy, hpMaxEnemy); 
        });
        

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
            C1img.classList.add("active");
        } else {
            selectedCharacter.textContent = `You have selected Gepard!`;
            enemy = "Gepard";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
            C11img.classList.add("active");
        }
    } else if (character2.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Baobhan!`;
            character = "Baobhan";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
            C2img.classList.add("active");
        } else {
            selectedCharacter.textContent = `You have selected Bronya!`;
            enemy = "Bronya";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
            C21img.classList.add("active");
        }
    } else if (character3.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Kafka!`;
            character = "Kafka";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
            C3img.classList.add("active");
        } else {
            selectedCharacter.textContent = `You have selected Blade!`;
            enemy = "Blade";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
            C31img.classList.add("active");
        }
    } else if (character4.checked) {
        if (clickPhase == 1) {
            selectedCharacter.textContent = `You have selected Seele!`;
            character = "Seele";
            chamarApi = 1; // Permite bater na API/Personagem
            clickPhase = 2;
            document.querySelector('p[id="showPlayerStatus"]').textContent = character;
            C4img.classList.add("active");
        } else {
            selectedCharacter.textContent = `You have selected Archer!`;
            enemy = "Archer";
            clickPhase = 3;
            document.querySelector('p[id="showEnemyStatus"]').textContent = enemy;
            radios.forEach(radio => { radio.checked = false; });
            C41img.classList.add("active");
        }
    }
    if (clickPhase == 2 && chamarApi == 1){
        healthBar.style.width = `${0}%`; // Concede largura de barra de vida em 0 para efeito visual
        chamarApi = 2;
        healthBarContainer.classList.add("singlePlayer");
        showStatus.classList.add("singlePlayer");
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
            console.log("Dados recebidos da API Personagem:", data);
            atk = data.atk;
            hpMax = data.hpMax;
            hp = data.hp;
            def = data.def;
            critDmg = data.critDmg;
            critRate = data.critRate;
            ultCost = data.ultCost;
            energy = data.energy;
            speed = data.speed; 
            TrackHealth(hp, hpMax);
        });
        
    } else if (clickPhase == 3 && chamarApi == 2){
        chamarApi = 3;
        healthBarContainer.classList.remove("singlePlayer");
        showStatus.classList.remove("singlePlayer");
        healthBarEnemy.style.width = `${0}%`; // Concede largura de barra de vida em 0 para efeito visual
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
            if (!response.ok) {
                throw new Error("Erro na requisicao")
            }
            return response.json()
        }).then(data => {
            console.log("Dados recebidos da API Inimigo:", data);
            atkEnemy = data.atk;
            hpMaxEnemy = data.hpMax;
            hpEnemy = data.hp;
            defEnemy = data.def;
            critDmgEnemy = data.critDmg;
            critRateEnemy = data.critRate;
            ultCostEnemy = data.ultCost;
            energyEnemy = data.energy;
            speedEnemy = data.speed;
            TrackHealthEnemy(hpEnemy, hpMaxEnemy);
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
    } 
    else if (clickPhase == 3) {
        radios.forEach(radio => {
            radio.classList.add("hidden")
        });
        pickCharacter.classList.add("shrink");
        document.querySelector('label[for="character1"]').textContent = null;
        document.querySelector('label[for="character2"]').textContent = null;
        document.querySelector('label[for="character3"]').textContent = null;
        document.querySelector('label[for="character4"]').textContent = null;
        setTimeout(function () { 
            if (selectedCharacter.textContent != "Please select an enemy." && selectedCharacter.textContent != "Select a character.")
            selectedCharacter.style.visibility = "hidden";},1500);
    }
    
    // Adicionar a classe 'active' para a div #showStatus com animação de slide down
    if (character != null && clickPhase == 2) {
        showStatus.classList.add("active"); // Adiciona a classe para mostrar a div com animação
    }
};