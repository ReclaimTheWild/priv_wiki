// 
// Table Builder for RtW Creatures
// 

let example = {
    head: {
        name: "Cheep Cheep, Common",
        rank: "Rank 1 Natural Hunter",
    },
    stats: {
        hp: "12",
        mp: "0",
        sp: "12",
        defense: "2", defense_type: "Civilian",
        concentration: "11",
        initiative: "+4",
        evasion: "14",
        size: "Small",
        vitality: "13",
        movement: "6 (Swimming), 1 (Walking)",
    },
    main_attack: {
        name: "Spurt Water",
        damage: "7",
        hit: +8,
        range: "Projectile 4",
    },
    abilities: [
        {
            name: "Arc Shot",
            damage: "7, Water",
            cost: "4 Stamina",
            range: "Projectile 12-16",
            description: "You may ignore allies, enemies and any obstacles that do not reach higher than 6 squares above you, for determining line of sight for this attack.",
        },
        {
            name: "Jump Attack",
            damage: "10",
            cost: "6 Stamina",
            range: "Jump 4, Melee",
            description : "You jump towards your target in a straight line, landing next to them, even if you have already reached your maximum Movement for the turn. You are Off-Balance until the start of your next turn. This attack cannot be performed if you are Halted or Slowed.",
        },
    ],
    weapon: {
        name: "Cheep Water Spurt",
        rank: "Rank 1 Natural Rod, Water",
        accuracy: "1",
        attack: "5",
        durability: "6",
    },
    passives: [
        {
            name: "Flying Fish",
            description: "While on the surface of the water, this creature can jump as if its Athletics were 5 points higher. (Horiz. 4; Vert. 3)",
        },
    ],
    traits: {
        informations: [
            "Limited Intelligence",
        ],
        vulnerability : "",
        power: {
            combat: 2,
            hearts: 3,
            athletics: 3,
            civilization: 0,
            fortitude: 3,
            intimidate: 1,
            mechanics: 0,
            smithing: 0,
        },
        wisdom: {
            willpower: 2,
            magic: 0,
            arcana: 1,
            perception: 1,
            influence: 1,
            discipline: 1,
            perform: 0,
            enchanting: 0,
        },
        courage: {
            accuracy: 4,
            stamina: 3,
            nature: 2,
            agility: 4,
            command: 0,
            insight: 1,
            guile: 1,
            cooking: 0,
        },
    },
    drops: [
        {
            name: "Cheep Cheep Meat",
            rank: "Rank 1 Food Ingredient",
            quantity: 5,
        },
        {
            name: "Cheep Cheep Fin",
            rank: "Rank 1 Critter, Spongy",
            quantity: 2,
        },
    ],
}

function generateTableHead(table) {
    let thead = table.createTHead();
    let row_name = thead.insertRow();
    let th_name = document.createElement("th");
    let text_name = document.createTextNode(example.head.name);
    th_name.colSpan = "6";
    th_name.appendChild(text_name);
    row_name.appendChild(th_name);
    let row_rank = thead.insertRow();
    let th_rank = document.createElement("th");
    let text_rank = document.createTextNode(example.head.rank);
    th_rank.colSpan = "6";
    th_rank.appendChild(text_rank);
    row_rank.appendChild(th_rank);
    th_name.classList.add("fs-6");
    th_name.classList.add("text-grey-lt-000");
    th_name.classList.add("creature-title-bg");
    th_rank.classList.add("fs-5");
    th_rank.classList.add("text-grey-lt-000");
    th_rank.classList.add("creature-title-bg");
}

function generateTableBodyStats(table) {

    let row_p = table.insertRow();
    let cell_hp = row_p.insertCell();
    cell_hp.classList.add("text-grey-dk-300");
    cell_hp.classList.add("creature-content-bg-dark");
    cell_hp.colSpan = "2";
    let hp_strong = document.createElement("strong");
    hp_strong.appendChild(document.createTextNode("HP"));
    cell_hp.appendChild(document.createTextNode(hp_strong.outerHTML + ": " + example.stats.hp));
    let cell_mp = row_p.insertCell();
    cell_mp.classList.add("text-grey-dk-300");
    cell_mp.classList.add("creature-content-bg-dark");
    cell_mp.colSpan = "2";
    let mp_strong = document.createElement("strong");
    mp_strong.appendChild(document.createTextNode("MP"));
    cell_mp.appendChild(document.createTextNode(mp_strong.outerHTML + ": " + example.stats.mp));
    let cell_sp = row_p.insertCell();
    cell_sp.classList.add("text-grey-dk-300");
    cell_sp.classList.add("creature-content-bg-dark");
    cell_sp.colSpan = "2";
    let sp_strong = document.createElement("strong");
    sp_strong.appendChild(document.createTextNode("SP"));
    cell_sp.appendChild(document.createTextNode(sp_strong.outerHTML + ": " + example.stats.sp));

    let row_s1 = table.insertRow();
    let cell_def = row_s1.insertCell();
    cell_def.classList.add("text-grey-dk-300");
    cell_def.classList.add("creature-content-bg-light");
    cell_def.colSpan = "3";
    cell_def.appendChild(document.createTextNode("Defense: " + 
                                                example.stats.defense + 
                                                " (" + example.stats.defense_type + ")"));
    let cell_con = row_s1.insertCell();
    cell_con.classList.add("text-grey-dk-300");
    cell_con.classList.add("creature-content-bg-light");
    cell_con.colSpan = "3";
    cell_con.appendChild(document.createTextNode("Concentration: " +
                                                example.stats.concentration));
    
    let row_s2 = table.insertRow();
    let cell_ini = row_s2.insertCell();
    cell_ini.classList.add("text-grey-dk-300");
    cell_ini.classList.add("creature-content-bg-light");
    cell_ini.colSpan = "3";
    cell_ini.appendChild(document.createTextNode("Initiative: " + 
                                                example.stats.initiative));
    let cell_eva = row_s2.insertCell();
    cell_eva.classList.add("text-grey-dk-300");
    cell_eva.classList.add("creature-content-bg-light");
    cell_eva.colSpan = "3";
    cell_eva.appendChild(document.createTextNode("Evasion: " +
                                                example.stats.evasion));

    let row_s3 = table.insertRow();
    let cell_size = row_s3.insertCell();
    cell_size.classList.add("text-grey-dk-300");
    cell_size.classList.add("creature-content-bg-light");
    cell_size.colSpan = "3";
    cell_size.appendChild(document.createTextNode("Size: " + 
                                                example.stats.size));
    let cell_vit = row_s3.insertCell();
    cell_vit.classList.add("text-grey-dk-300");
    cell_vit.classList.add("creature-content-bg-light");
    cell_vit.colSpan = "3";
    cell_vit.appendChild(document.createTextNode("Vitality: " +
                                                example.stats.vitality));

    let row_s4 = table.insertRow();
    let cell_mov = row_s4.insertCell();
    cell_mov.classList.add("text-grey-dk-300");
    cell_mov.classList.add("creature-content-bg-light");
    cell_mov.colSpan = "6";
    cell_mov.appendChild(document.createTextNode("Movement: " + 
                                                example.stats.movement));
}

function generateTableNormalAttack(table) {
    let row_1 = table.insertRow();
    let cell_name = row_1.insertCell();
    cell_name.classList.add("text-grey-dk-300");
    cell_name.classList.add("creature-content-bg-dark");
    cell_name.colSpan = "3";
    let cell_name_strong = document.createElement("strong");
    cell_name_strong.appendChild(document.createTextNode(example.main_attack.name));
    cell_name.appendChild(cell_name_strong);
    let cell_dmg = row_1.insertCell();
    cell_dmg.classList.add("text-grey-dk-300");
    cell_dmg.classList.add("creature-content-bg-dark");
    cell_dmg.colSpan = "3";
    cell_dmg.appendChild(document.createTextNode("Damage: " +
                                                example.main_attack.damage));

    let row_2 = table.insertRow();
    let cell_hit = row_2.insertCell();
    cell_hit.classList.add("text-grey-dk-300");
    cell_hit.classList.add("creature-content-bg-dark");
    cell_hit.colSpan = "3";
    cell_hit.appendChild(document.createTextNode("To-Hit Check: " +
                                                example.main_attack.hit));
    let cell_ran = row_2.insertCell();
    cell_ran.classList.add("text-grey-dk-300");
    cell_ran.classList.add("creature-content-bg-dark");
    cell_ran.colSpan = "3";
    cell_ran.appendChild(document.createTextNode("Range: " +
                                                example.main_attack.range));
}

function generateTableAbilities(table) {
    for (let element of example.abilities) {
        let row_1 = table.insertRow();
        let cell_name = row_1.insertCell();
        cell_name.classList.add("text-grey-dk-300");
        cell_name.classList.add("creature-content-bg-light");
        cell_name.colSpan = "3";
        let cell_name_strong = document.createElement("strong");
        cell_name_strong.appendChild(document.createTextNode(element.name));
        cell_name.appendChild(cell_name_strong);
        let cell_dmg = row_1.insertCell();
        cell_dmg.classList.add("text-grey-dk-300");
        cell_dmg.classList.add("creature-content-bg-light");
        cell_dmg.colSpan = "3";
        cell_dmg.appendChild(document.createTextNode("Damage: " +
                                                    element.damage));
    
        let row_2 = table.insertRow();
        row_2.classList.add("text-grey-dk-300");
        row_2.classList.add("creature-content-bg-light");
        let cell_cost = row_2.insertCell();
        cell_cost.classList.add("text-grey-dk-300");
        cell_cost.classList.add("creature-content-bg-light");
        cell_cost.colSpan = "3";
        cell_cost.appendChild(document.createTextNode(element.cost));
        let cell_ran = row_2.insertCell();
        cell_ran.classList.add("text-grey-dk-300");
        cell_ran.classList.add("creature-content-bg-light");
        cell_ran.colSpan = "3";
        cell_ran.appendChild(document.createTextNode("Range: " +
                                                    element.range));

        let row_3 = table.insertRow();
        let cell_desc = row_3.insertCell();
        cell_desc.classList.add("text-grey-dk-300");
        cell_desc.classList.add("creature-content-bg-light");
        cell_desc.classList.add("fs-2");
        cell_desc.colSpan = "6";
        cell_desc.appendChild(document.createTextNode(element.description));
    }
}

function generateTableDefaultWeapon(table) {
    let row_1 = table.insertRow();
    let cell_name = row_1.insertCell();
    cell_name.classList.add("text-grey-dk-300");
    cell_name.classList.add("creature-content-bg-dark");
    cell_name.colSpan = "6";
    let weap_strong = document.createElement("strong");
    weap_strong.appendChild(document.createTextNode("Default Weapon"));
    cell_name.appendChild(document.createTextNode(weap_strong.outerHTML + ": " + example.weapon.name));

    let row_2 = table.insertRow();
    let cell_rank = row_2.insertCell();
    cell_rank.classList.add("text-grey-dk-300");
    cell_rank.classList.add("creature-content-bg-dark");
    cell_rank.colSpan = "6";
    cell_rank.appendChild(document.createTextNode("(" + example.weapon.rank + ")"));

    let row_3 = table.insertRow();
    let cell_acc = row_3.insertCell();
    cell_acc.classList.add("text-grey-dk-300");
    cell_acc.classList.add("creature-content-bg-dark");
    cell_acc.colSpan = "2";
    cell_acc.appendChild(document.createTextNode("Accuracy: " + example.weapon.accuracy));
    let cell_atk = row_3.insertCell();
    cell_atk.classList.add("text-grey-dk-300");
    cell_atk.classList.add("creature-content-bg-dark");
    cell_atk.colSpan = "2";
    cell_atk.appendChild(document.createTextNode("Attack: " + example.weapon.accuracy));
    let cell_dur = row_3.insertCell();
    cell_dur.classList.add("text-grey-dk-300");
    cell_dur.classList.add("creature-content-bg-dark");
    cell_dur.colSpan = "2";
    cell_dur.appendChild(document.createTextNode("Durability: " + example.weapon.accuracy));
}

function generateTablePassives(table) {
    for (let element of example.passives) {
        let row_1 = table.insertRow();
        let cell_name = row_1.insertCell();
        cell_name.classList.add("text-grey-dk-300");
        cell_name.classList.add("creature-content-bg-light");
        cell_name.colSpan = "6";
        let pas_strong = document.createElement("strong");
        pas_strong.appendChild(document.createTextNode(element.name));
        cell_hp.appendChild(document.createTextNode(pas_strong.outerHTML + " (Passive)"));

        let row_2 = table.insertRow();
        let cell_desc = row_2.insertCell();
        cell_desc.classList.add("text-grey-dk-300");
        cell_desc.classList.add("creature-content-bg-light");
        cell_desc.classList.add("fs-2");
        cell_desc.colSpan = "6";
        cell_desc.appendChild(document.createTextNode(element.description));
    }
}

function generateTableTraits(table) {
    let infos_str = example.traits.informations.join(", ");
    let traits = example.traits;
    let row_inf = table.insertRow();
    let cell_name = row_inf.insertCell();
    cell_name.classList.add("text-grey-dk-300");
    cell_name.classList.add("creature-content-bg-dark");
    cell_name.classList.add("fs-4");
    cell_name.colSpan = "6";
    cell_name.appendChild(document.createTextNode(infos_str));

    let row_vuln = table.insertRow();
    let cell_vuln = row_vuln.insertCell();
    cell_vuln.classList.add("text-grey-dk-300");
    cell_vuln.classList.add("creature-content-bg-dark");
    cell_vuln.classList.add("fs-4");
    cell_vuln.colSpan = "6";
    cell_vuln.appendChild(document.createTextNode("Vulnerability: " + traits.vulnerability));

    let row_1 = table.insertRow();
    let cell_1_1 = row_1.insertCell();
    cell_1_1.appendChild(document.createTextNode("Combat"));
    let cell_1_2 = row_1.insertCell();
    cell_1_2.appendChild(document.createTextNode(traits.power.combat));
    let cell_1_3 = row_1.insertCell();
    cell_1_3.appendChild(document.createTextNode("Willpower"));
    let cell_1_4 = row_1.insertCell();
    cell_1_4.appendChild(document.createTextNode(traits.wisdom.willpower));
    let cell_1_5 = row_1.insertCell();
    cell_1_5.appendChild(document.createTextNode("Accuracy"));
    let cell_1_6 = row_1.insertCell();
    cell_1_6.appendChild(document.createTextNode(traits.courage.accuracy));

    let row_2 = table.insertRow();
    row_2.classList.add("text-grey-dk-300");
    row_2.classList.add("creature-content-bg-dark");
    row_2.classList.add("fs-2");
    let cell_2_1 = row_2.insertCell();
    cell_2_1.appendChild(document.createTextNode("Hearts"));
    let cell_2_2 = row_2.insertCell();
    cell_2_2.appendChild(document.createTextNode(traits.power.hearts));
    let cell_2_3 = row_2.insertCell();
    cell_2_3.appendChild(document.createTextNode("Magic"));
    let cell_2_4 = row_2.insertCell();
    cell_2_4.appendChild(document.createTextNode(traits.wisdom.magic));
    let cell_2_5 = row_2.insertCell();
    cell_2_5.appendChild(document.createTextNode("Stamina"));
    let cell_2_6 = row_2.insertCell();
    cell_2_6.appendChild(document.createTextNode(traits.courage.stamina));

    let row_3 = table.insertRow();
    row_3.classList.add("text-grey-dk-300");
    row_3.classList.add("creature-content-bg-dark");
    row_3.classList.add("fs-2");
    let cell_3_1 = row_3.insertCell();
    cell_3_1.appendChild(document.createTextNode("Athletics"));
    let cell_3_2 = row_3.insertCell();
    cell_3_2.appendChild(document.createTextNode(traits.power.athletics));
    let cell_3_3 = row_3.insertCell();
    cell_3_3.appendChild(document.createTextNode("Arcana"));
    let cell_3_4 = row_3.insertCell();
    cell_3_4.appendChild(document.createTextNode(traits.wisdom.arcana));
    let cell_3_5 = row_3.insertCell();
    cell_3_5.appendChild(document.createTextNode("Nature"));
    let cell_3_6 = row_3.insertCell();
    cell_3_6.appendChild(document.createTextNode(traits.courage.nature));

    let row_4 = table.insertRow();
    row_4.classList.add("text-grey-dk-300");
    row_4.classList.add("creature-content-bg-dark");
    row_4.classList.add("fs-2");
    let cell_4_1 = row_4.insertCell();
    cell_4_1.appendChild(document.createTextNode("Civilization"));
    let cell_4_2 = row_4.insertCell();
    cell_4_2.appendChild(document.createTextNode(traits.power.civilization));
    let cell_4_3 = row_4.insertCell();
    cell_4_3.appendChild(document.createTextNode("Perception"));
    let cell_4_4 = row_4.insertCell();
    cell_4_4.appendChild(document.createTextNode(traits.wisdom.perception));
    let cell_4_5 = row_4.insertCell();
    cell_4_5.appendChild(document.createTextNode("Agility"));
    let cell_4_6 = row_4.insertCell();
    cell_4_6.appendChild(document.createTextNode(traits.courage.agility));

    let row_5 = table.insertRow();
    row_5.classList.add("text-grey-dk-300");
    row_5.classList.add("creature-content-bg-dark");
    row_5.classList.add("fs-2");
    let cell_5_1 = row_5.insertCell();
    cell_5_1.appendChild(document.createTextNode("Fortitude"));
    let cell_5_2 = row_5.insertCell();
    cell_5_2.appendChild(document.createTextNode(traits.power.fortitude));
    let cell_5_3 = row_5.insertCell();
    cell_5_3.appendChild(document.createTextNode("Influence"));
    let cell_5_4 = row_5.insertCell();
    cell_5_4.appendChild(document.createTextNode(traits.wisdom.influence));
    let cell_5_5 = row_5.insertCell();
    cell_5_5.appendChild(document.createTextNode("Command"));
    let cell_5_6 = row_5.insertCell();
    cell_5_6.appendChild(document.createTextNode(traits.courage.command));

    let row_6 = table.insertRow();
    row_6.classList.add("text-grey-dk-300");
    row_6.classList.add("creature-content-bg-dark");
    row_6.classList.add("fs-2");
    let cell_6_1 = row_6.insertCell();
    cell_6_1.appendChild(document.createTextNode("Intimidate"));
    let cell_6_2 = row_6.insertCell();
    cell_6_2.appendChild(document.createTextNode(traits.power.intimidate));
    let cell_6_3 = row_6.insertCell();
    cell_6_3.appendChild(document.createTextNode("Discipline"));
    let cell_6_4 = row_6.insertCell();
    cell_6_4.appendChild(document.createTextNode(traits.wisdom.discipline));
    let cell_6_5 = row_6.insertCell();
    cell_6_5.appendChild(document.createTextNode("Insight"));
    let cell_6_6 = row_6.insertCell();
    cell_6_6.appendChild(document.createTextNode(traits.courage.insight));

    let row_7 = table.insertRow();
    row_7.classList.add("text-grey-dk-300");
    row_7.classList.add("creature-content-bg-dark");
    row_7.classList.add("fs-2");
    let cell_7_1 = row_7.insertCell();
    cell_7_1.appendChild(document.createTextNode("Mechanics"));
    let cell_7_2 = row_7.insertCell();
    cell_7_2.appendChild(document.createTextNode(traits.power.mechanics));
    let cell_7_3 = row_7.insertCell();
    cell_7_3.appendChild(document.createTextNode("Perform"));
    let cell_7_4 = row_7.insertCell();
    cell_7_4.appendChild(document.createTextNode(traits.wisdom.perform));
    let cell_7_5 = row_7.insertCell();
    cell_7_5.appendChild(document.createTextNode("Guile"));
    let cell_7_6 = row_7.insertCell();
    cell_7_6.appendChild(document.createTextNode(traits.courage.guile));

    let row_8 = table.insertRow();
    row_8.classList.add("text-grey-dk-300");
    row_8.classList.add("creature-content-bg-dark");
    row_8.classList.add("fs-2");
    let cell_8_1 = row_8.insertCell();
    cell_8_1.appendChild(document.createTextNode("Smithing"));
    let cell_8_2 = row_8.insertCell();
    cell_8_2.appendChild(document.createTextNode(traits.power.smithing));
    let cell_8_3 = row_8.insertCell();
    cell_8_3.appendChild(document.createTextNode("Enchanting"));
    let cell_8_4 = row_8.insertCell();
    cell_8_4.appendChild(document.createTextNode(traits.wisdom.enchanting));
    let cell_8_5 = row_8.insertCell();
    cell_8_5.appendChild(document.createTextNode("Cooking"));
    let cell_8_6 = row_8.insertCell();
    cell_8_6.appendChild(document.createTextNode(traits.courage.cooking));

    cell_1_1.classList.add("text-grey-dk-300");
    cell_1_1.classList.add("creature-content-bg-dark");
    cell_1_1.classList.add("fs-2");

    cell_1_2.classList.add("text-grey-dk-300");
    cell_1_2.classList.add("creature-content-bg-dark");
    cell_1_2.classList.add("fs-2");

    cell_1_3.classList.add("text-grey-dk-300");
    cell_1_3.classList.add("creature-content-bg-dark");
    cell_1_3.classList.add("fs-2");

    cell_1_4.classList.add("text-grey-dk-300");
    cell_1_4.classList.add("creature-content-bg-dark");
    cell_1_4.classList.add("fs-2");

    cell_1_5.classList.add("text-grey-dk-300");
    cell_1_5.classList.add("creature-content-bg-dark");
    cell_1_5.classList.add("fs-2");

    cell_1_6.classList.add("text-grey-dk-300");
    cell_1_6.classList.add("creature-content-bg-dark");
    cell_1_6.classList.add("fs-2");

    cell_2_1.classList.add("text-grey-dk-300");
    cell_2_1.classList.add("creature-content-bg-dark");
    cell_2_1.classList.add("fs-2");

    cell_2_2.classList.add("text-grey-dk-300");
    cell_2_2.classList.add("creature-content-bg-dark");
    cell_2_2.classList.add("fs-2");

    cell_2_3.classList.add("text-grey-dk-300");
    cell_2_3.classList.add("creature-content-bg-dark");
    cell_2_3.classList.add("fs-2");

    cell_2_4.classList.add("text-grey-dk-300");
    cell_2_4.classList.add("creature-content-bg-dark");
    cell_2_4.classList.add("fs-2");

    cell_2_5.classList.add("text-grey-dk-300");
    cell_2_5.classList.add("creature-content-bg-dark");
    cell_2_5.classList.add("fs-2");

    cell_2_6.classList.add("text-grey-dk-300");
    cell_2_6.classList.add("creature-content-bg-dark");
    cell_2_6.classList.add("fs-2");

    cell_3_1.classList.add("text-grey-dk-300");
    cell_3_1.classList.add("creature-content-bg-dark");
    cell_3_1.classList.add("fs-2");

    cell_3_2.classList.add("text-grey-dk-300");
    cell_3_2.classList.add("creature-content-bg-dark");
    cell_3_2.classList.add("fs-2");

    cell_3_3.classList.add("text-grey-dk-300");
    cell_3_3.classList.add("creature-content-bg-dark");
    cell_3_3.classList.add("fs-2");

    cell_3_4.classList.add("text-grey-dk-300");
    cell_3_4.classList.add("creature-content-bg-dark");
    cell_3_4.classList.add("fs-2");

    cell_3_5.classList.add("text-grey-dk-300");
    cell_3_5.classList.add("creature-content-bg-dark");
    cell_3_5.classList.add("fs-2");

    cell_3_6.classList.add("text-grey-dk-300");
    cell_3_6.classList.add("creature-content-bg-dark");
    cell_3_6.classList.add("fs-2");

    cell_4_1.classList.add("text-grey-dk-300");
    cell_4_1.classList.add("creature-content-bg-dark");
    cell_4_1.classList.add("fs-2");

    cell_4_2.classList.add("text-grey-dk-300");
    cell_4_2.classList.add("creature-content-bg-dark");
    cell_4_2.classList.add("fs-2");

    cell_4_3.classList.add("text-grey-dk-300");
    cell_4_3.classList.add("creature-content-bg-dark");
    cell_4_3.classList.add("fs-2");

    cell_4_4.classList.add("text-grey-dk-300");
    cell_4_4.classList.add("creature-content-bg-dark");
    cell_4_4.classList.add("fs-2");

    cell_4_5.classList.add("text-grey-dk-300");
    cell_4_5.classList.add("creature-content-bg-dark");
    cell_4_5.classList.add("fs-2");

    cell_4_6.classList.add("text-grey-dk-300");
    cell_4_6.classList.add("creature-content-bg-dark");
    cell_4_6.classList.add("fs-2");

    cell_5_1.classList.add("text-grey-dk-300");
    cell_5_1.classList.add("creature-content-bg-dark");
    cell_5_1.classList.add("fs-2");

    cell_5_2.classList.add("text-grey-dk-300");
    cell_5_2.classList.add("creature-content-bg-dark");
    cell_5_2.classList.add("fs-2");

    cell_5_3.classList.add("text-grey-dk-300");
    cell_5_3.classList.add("creature-content-bg-dark");
    cell_5_3.classList.add("fs-2");

    cell_5_4.classList.add("text-grey-dk-300");
    cell_5_4.classList.add("creature-content-bg-dark");
    cell_5_4.classList.add("fs-2");

    cell_5_5.classList.add("text-grey-dk-300");
    cell_5_5.classList.add("creature-content-bg-dark");
    cell_5_5.classList.add("fs-2");

    cell_5_6.classList.add("text-grey-dk-300");
    cell_5_6.classList.add("creature-content-bg-dark");
    cell_5_6.classList.add("fs-2");

    cell_6_1.classList.add("text-grey-dk-300");
    cell_6_1.classList.add("creature-content-bg-dark");
    cell_6_1.classList.add("fs-2");

    cell_6_2.classList.add("text-grey-dk-300");
    cell_6_2.classList.add("creature-content-bg-dark");
    cell_6_2.classList.add("fs-2");

    cell_6_3.classList.add("text-grey-dk-300");
    cell_6_3.classList.add("creature-content-bg-dark");
    cell_6_3.classList.add("fs-2");

    cell_6_4.classList.add("text-grey-dk-300");
    cell_6_4.classList.add("creature-content-bg-dark");
    cell_6_4.classList.add("fs-2");

    cell_6_5.classList.add("text-grey-dk-300");
    cell_6_5.classList.add("creature-content-bg-dark");
    cell_6_5.classList.add("fs-2");

    cell_6_6.classList.add("text-grey-dk-300");
    cell_6_6.classList.add("creature-content-bg-dark");
    cell_6_6.classList.add("fs-2");

    cell_7_1.classList.add("text-grey-dk-300");
    cell_7_1.classList.add("creature-content-bg-dark");
    cell_7_1.classList.add("fs-2");

    cell_7_2.classList.add("text-grey-dk-300");
    cell_7_2.classList.add("creature-content-bg-dark");
    cell_7_2.classList.add("fs-2");

    cell_7_3.classList.add("text-grey-dk-300");
    cell_7_3.classList.add("creature-content-bg-dark");
    cell_7_3.classList.add("fs-2");

    cell_7_4.classList.add("text-grey-dk-300");
    cell_7_4.classList.add("creature-content-bg-dark");
    cell_7_4.classList.add("fs-2");

    cell_7_5.classList.add("text-grey-dk-300");
    cell_7_5.classList.add("creature-content-bg-dark");
    cell_7_5.classList.add("fs-2");

    cell_7_6.classList.add("text-grey-dk-300");
    cell_7_6.classList.add("creature-content-bg-dark");
    cell_7_6.classList.add("fs-2");

    cell_8_1.classList.add("text-grey-dk-300");
    cell_8_1.classList.add("creature-content-bg-dark");
    cell_8_1.classList.add("fs-2");

    cell_8_2.classList.add("text-grey-dk-300");
    cell_8_2.classList.add("creature-content-bg-dark");
    cell_8_2.classList.add("fs-2");

    cell_8_3.classList.add("text-grey-dk-300");
    cell_8_3.classList.add("creature-content-bg-dark");
    cell_8_3.classList.add("fs-2");

    cell_8_4.classList.add("text-grey-dk-300");
    cell_8_4.classList.add("creature-content-bg-dark");
    cell_8_4.classList.add("fs-2");

    cell_8_5.classList.add("text-grey-dk-300");
    cell_8_5.classList.add("creature-content-bg-dark");
    cell_8_5.classList.add("fs-2");

    cell_8_6.classList.add("text-grey-dk-300");
    cell_8_6.classList.add("creature-content-bg-dark");
    cell_8_6.classList.add("fs-2");
}

function generateTableDrops(table) {
    let row_1 = table.insertRow();
    let cell_drop = row_1.insertCell();
    cell_drop.classList.add("text-grey-dk-300");
    cell_drop.classList.add("creature-content-bg-light");
    cell_drop.rowSpan = example.drops.length.toString();
    let drop_strong = document.createElement("strong");
    drop_strong.appendChild(document.createTextNode("Drops"));
    cell_drop.appendChild(document.createTextNode(drop_strong.outerHTML + ":"));
    let cell_d1 = row_1.insertCell();
    cell_d1.classList.add("text-grey-dk-300");
    cell_d1.classList.add("creature-content-bg-light");
    cell_d1.colSpan = "5";
    cell_d1.appendChild(document.createTextNode(
        example.drops[0].quantity + "x " +
        example.drops[0].name + " (" + example.drops[0].rank + ")"
    ));
    let drops_sup = example.drops.slice(1);
    for (let element of drops_sup) {
        let row = table.insertRow();
        let cell_d = row.insertCell();
        cell_d.classList.add("text-grey-dk-300");
        cell_d.classList.add("creature-content-bg-light");
        cell_d.colSpan = "5";
        cell_d.appendChild(document.createTextNode(
            element.quantity + "x " +
            element.name + " (" + element.rank + ")"
        )); 
    }
}

function buildTable() {
    div_table = document.querySelector("#built-table");
    newTable = document.createElement("table");
    newTable.classList.add("creature-table");
    div_table.appendChild(newTable);
    let table = div_table.querySelector("table");
    generateTableHead(table);
    generateTableBodyStats(table);
    generateTableNormalAttack(table);
    generateTableAbilities(table);
    generateTableDefaultWeapon(table);
    generateTablePassives(table);
    generateTableTraits(table);
    if (example.drops != null)
        generateTableDrops(table);
}