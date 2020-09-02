---
layout: default
title: Tools
permalink: /tools
---

#### Head:

<form style="display:flex;">
    <div class="large-input">
        <label for="id_name">Name:</label>
        <input id="id_name" type="text" placeholder="Name, Common">
    </div>
    <div class="large-input">
        <label for="id_rank">Rank:</label>
        <input id="id_rank" type="text" placeholder="Rank 1 Natural Template">
    </div>
</form>

#### Stats:

<form>
    <div>
        <label for="id_hp">HP:</label>
        <input id="id_hp" type="text" placeholder="0">
    </div>
    <div>
        <label for="id_mp">MP:</label>
        <input id="id_mp" type="text" placeholder="0">
    </div>
    <div>
        <label for="id_sp">SP:</label>
        <input id="id_sp" type="text" placeholder="0">
    </div>
</form>
<form>
    <div class="flex-shrink-0">
        <label for="id_defense">Defense:</label>
        <input id="id_defense" type="text" placeholder="0">
    </div>
    <div class="large-input flex-grow-2">
        <label for="id_defense_type">Def. Type:</label>
        <input id="id_defense_type" type="text" placeholder="Civilian">
    </div>
    <div class="flex-shrink-0">
        <label for="id_concentration">Concentration:</label>
        <input id="id_concentration" type="text" placeholder="0">
    </div>
</form>
<form>
    <div>
        <label for="id_initiative">Initiative:</label>
        <input id="id_initiative" type="text" placeholder="+1">
    </div>
    <div>
        <label for="id_evasion">Evasion:</label>
        <input id="id_evasion" type="text" placeholder="0">
    </div>
    <div>
        <label for="id_vitality">Vitality:</label>
        <input id="id_vitality" type="text" placeholder="0">
    </div>
</form>
<form>
    <div class="large-input">
        <label for="id_size">Size:</label>
        <input id="id_size" type="text" placeholder="Small">
    </div>
    <div class="large-input flex-grow-3">
        <label for="id_movement">Movement:</label>
        <input id="id_movement" type="text" placeholder="6 (Walking), 2 (Swimming)">
    </div>
</form>

#### Main Attack:

<form>
    <div class="large-input flex-grow-2">
        <label for="id_attack_name">Name:</label>
        <input id="id_attack_name" type="text" placeholder="Sword strike">
    </div>
    <div>
        <label for="id_attack_damage">Damage:</label>
        <input id="id_attack_damage" type="text" placeholder="42">
    </div>
</form>
<form>
    <div>
        <label for="id_attack_hit">To-Hit Check:</label>
        <input id="id_attack_hit" type="text" placeholder="8">
    </div>
    <div class="large-input flex-grow-2">
        <label for="id_attack_range">Range:</label>
        <input id="id_attack_range" type="text" placeholder="Projectile 12-16">
    </div>
</form>

#### Abilities:

<div id="abilities_1">
    <form>
        <div class="large-input flex-grow-2">
            <label for="id_abilities_name_1">Name:</label>
            <input id="id_abilities_name_1" type="text" placeholder="Arc Shot">
        </div>
        <div>
            <label for="id_abilities_damage_1">Damage:</label>
            <input id="id_abilities_damage_1" type="text" placeholder="42">
        </div>
    </form>
    <form>
        <div>
            <label for="id_abilities_hit_1">To-Hit Check:</label>
            <input id="id_abilities_hit_1" type="text" placeholder="8">
        </div>
        <div class="large-input flex-grow-2">
            <label for="id_abilities_range_1">Range:</label>
            <input id="id_abilities_range_1" type="text" placeholder="Projectile 12-16">
        </div>
    </form>
    <form>
        <div class="large-input">
            <label for="id_abilities_description_1">Description:</label>
            <textarea id="id_abilities_description_1" rows="3" placeholder="Description..."></textarea>
        </div>
    </form>
</div>

(Add more through JS)

#### Default Weapon:

<form>
    <div class="large-input">
        <label for="id_weapon_name">Name:</label>
        <input id="id_weapon_name" type="text" placeholder="Holy Rod of Wisdom">
    </div>
    <div class="large-input">
        <label for="id_weapon_rank">Rank:</label>
        <input id="id_weapon_rank" type="text" placeholder="Rank 1 Natural Rod">
    </div>
</form>
<form>
    <div>
        <label for="id_weapon_accuracy">Accuracy:</label>
        <input id="id_weapon_accuracy" type="text" placeholder="0">
    </div>
    <div>
        <label for="id_weapon_attack">Attack:</label>
        <input id="id_weapon_attack" type="text" placeholder="0">
    </div>
    <div>
        <label for="id_weapon_durability">Durability:</label>
        <input id="id_weapon_durability" type="text" placeholder="0">
    </div>
</form>

#### Passives:

<div id="passives_1">
    <form>
        <div class="large-input">
            <label for="id_passives_name_1">Name:</label>
            <input id="id_passives_name_1" type="text" placeholder="Flying Fish">
        </div>
    </form>
    <form>
        <div class="large-input">
            <label for="id_passives_description_1">Description:</label>
            <textarea id="id_passives_description_1" rows="3" placeholder="Description..."></textarea>
        </div>
    </form>    
</div>

(Add more through JS)

#### Traits:

<form>
    <div class="large-input flex-grow-3">
        <label for="id_traits_infos">Intelligence & Infos:</label>
        <input id="id_traits_infos" type="text" placeholder="Limited Intelligence, Undead">
    </div>
    <div class="large-input">
        <label for="id_traits_vulnerability">Vulnerability:</label>
        <input id="id_traits_vulnerability" type="text" placeholder="Light (Leave empty for none)">
    </div>
</form>
<form>
    <div class="traits">
        <div class="traits-title">
            <span>Power</span>
        </div>
        <div>
            <label for="id_traits_combat">Combat:</label>
            <input id="id_traits_combat" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_hearts">Hearts:</label>
            <input id="id_traits_hearts" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_athletics">Athletics:</label>
            <input id="id_traits_athletics" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_civilization">Civilization:</label>
            <input id="id_traits_civilization" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_fortitude">Fortitude:</label>
            <input id="id_traits_fortitude" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_intimidate">Intimidate:</label>
            <input id="id_traits_intimidate" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_mechanics">Mechanics:</label>
            <input id="id_traits_mechanics" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_smithing">Smithing:</label>
            <input id="id_traits_smithing" type="text" placeholder="0">
        </div>
    </div>
    <div class="traits">
        <div class="traits-title">
            <span>Wisdom</span>
        </div>
        <div>
            <label for="id_traits_willpower">Willpower:</label>
            <input id="id_traits_willpower" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_magic">Magic:</label>
            <input id="id_traits_magic" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_arcana">Arcana:</label>
            <input id="id_traits_arcana" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_perception">Perception:</label>
            <input id="id_traits_perception" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_influence">Influence:</label>
            <input id="id_traits_influence" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_discipline">Discipline:</label>
            <input id="id_traits_discipline" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_perform">Perform:</label>
            <input id="id_traits_perform" type="text" placeholder="0">
        </div>        
        <div>
            <label for="id_traits_enchanting">Enchanting:</label>
            <input id="id_traits_enchanting" type="text" placeholder="0">
        </div>
    </div>
    <div class="traits">
        <div class="traits-title">
            <span>Courage</span>
        </div>
        <div>
            <label for="id_traits_accuracy">Accuracy:</label>
            <input id="id_traits_accuracy" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_stamina">Stamina:</label>
            <input id="id_traits_stamina" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_nature">Nature:</label>
            <input id="id_traits_nature" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_agility">Agility:</label>
            <input id="id_traits_agility" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_command">Command:</label>
            <input id="id_traits_command" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_insight">Insight:</label>
            <input id="id_traits_insight" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_guile">Guile:</label>
            <input id="id_traits_guile" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_cooking">Cooking:</label>
            <input id="id_traits_cooking" type="text" placeholder="0">
        </div>
    </div>
</form>

#### Drops:

<div id="drops_1">
    <form>
        <div>
            <label for="id_drops_quantity_1">Quantity:</label>
            <input id="id_drops_quantity_1" type="text" placeholder="5">
        </div>
        <div class="large-input flex-grow-5">
            <label for="id_drops_name_1">Name:</label>
            <input id="id_drops_name_1" type="text" placeholder="Cheep Cheep Meat">
        </div>
        <div class="large-input flex-grow-5">
            <label for="id_drops_rank_1">Rank:</label>
            <input id="id_drops_rank_1" type="text" placeholder="Cheep Cheep Meat">
        </div>
    </form>
</div>

(Add more through JS)

```js
let example = {
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
    passives: [
        {
            name: "Flying Fish",
            description: "While on the surface of the water, this creature can jump as if its Athletics were 5 points higher. (Horiz. 4; Vert. 3)",
        },
    ],
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
```

<div class="field required">
    <label for="id_username">Username</label>
    <input type="text" name="username" id="id_username" value="test" />
</div>
<div class="field required">
    <label for="id_password">Password</label>
    <input type="password" name="password" id="id_password" value="test" />
</div>
<div class="field required">
    <label for="id_confirm">Confirm</label>
    <input type="password" name="confirm" id="id_confirm" value="test" />
</div>
<div class="field">
    <label for="id_email">Email</label>
    <input type="text" name="email" id="id_email" />
</div>

<button type="button" name="button" class="btn" onclick="buildTable()">Generate Table</button>

<div id="built-table" class="table-wrapper"></div>

**Code**: <button type="button" name="button" class="btn" onclick="copyTableToClipboard()">Copy</button>
```
```
{: #built-table-code}