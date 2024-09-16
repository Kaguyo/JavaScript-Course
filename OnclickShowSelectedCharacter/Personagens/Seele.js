let seele = new Object();
seele.name = "Seele";
seele.hp = 22672;
seele.atk = 1721;
seele.def = 700;
seele.spd = 160;
seele.normalAtk = 100;
seele.skillAtk = 250;
seele.ultimateAtk = 700;
seele.manaLimit = 230;

seele.NormalAtk = function(atk, normalAtk, enemyDef) {
    return ((atk - enemyDef) * normalAtk)
}
seele.SkillAtk = function(atk, skillAtk, enemyDef) {
    return ((atk - enemyDef) * skillAtk)
}
seele.UltimateAtk = function(atk, ultimateAtk, enemyDef) {
    return ((atk - enemyDef) * ultimateAtk)
}