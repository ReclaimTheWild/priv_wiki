---
layout: default
title: Creature builder
summary: An online tool to easily create creature tables that can be added to the wiki.
permalink: /web_tools/creature_builder
parent: Web Tools
---

#### Head:

<form>
    <div class="large-input">
        <label for="id_name">Name*:</label>
        <input id="id_name" type="text" placeholder="Name, Common">
    </div>
    <div class="large-input">
        <label for="id_rank">Rank*:</label>
        <input id="id_rank" type="text" placeholder="Rank 1 Natural Template">
    </div>
</form>

#### Stats:

<form>
    <div class="small-input">
        <label for="id_hp">HP*:</label>
        <input id="id_hp" type="text" placeholder="0">
    </div>
    <div class="small-input">
        <label for="id_mp">MP*:</label>
        <input id="id_mp" type="text" placeholder="0">
    </div>
    <div class="small-input">
        <label for="id_sp">SP*:</label>
        <input id="id_sp" type="text" placeholder="0">
    </div>
</form>
<form>
    <div class="flex-shrink-0 small-input">
        <label for="id_defense">Defense*:</label>
        <input id="id_defense" type="text" placeholder="0">
    </div>
    <div class="large-input flex-grow-2 small-input">
        <label for="id_defense_type">Def. Type*:</label>
        <input id="id_defense_type" type="text" placeholder="Civilian">
    </div>
    <div class="flex-shrink-0 small-input">
        <label for="id_concentration">Concentration*:</label>
        <input id="id_concentration" type="text" placeholder="0">
    </div>
</form>
<form>
    <div class="small-input">
        <label for="id_initiative">Initiative*:</label>
        <input id="id_initiative" type="text" placeholder="+1">
    </div>
    <div class="small-input">
        <label for="id_evasion">Evasion*:</label>
        <input id="id_evasion" type="text" placeholder="0">
    </div>
    <div class="small-input">
        <label for="id_vitality">Vitality*:</label>
        <input id="id_vitality" type="text" placeholder="0">
    </div>
</form>
<form>
    <div class="large-input">
        <label for="id_size">Size*:</label>
        <input id="id_size" type="text" placeholder="Small">
    </div>
    <div class="large-input flex-grow-3">
        <label for="id_movement">Movement*:</label>
        <input id="id_movement" type="text" placeholder="6 (Walking), 2 (Swimming)">
    </div>
</form>

#### Main Attack(s):

<button type="button" name="button_add_main_attack" class="btn btn-purple" onclick="builderAddMainAttack()">+</button> <button type="button" name="button_remove_main_attack" class="btn btn-purple" onclick="builderAddMainAttack(true)">-</button>

<div id="main_attacks"></div>

#### Abilities:

<button type="button" name="button_add_ability" class="btn btn-purple" onclick="builderAddAbility()">+</button> <button type="button" name="button_remove_ability" class="btn btn-purple" onclick="builderAddAbility(true)">-</button>

<div id="abilities_container"></div>

#### Default Weapon:

<button type="button" name="button_add_weapon" class="btn btn-purple" onclick="builderAddWeapon()">+</button> <button type="button" name="button_remove_weapon" class="btn btn-purple" onclick="builderAddWeapon(true)">-</button>

<div id="weapons"></div>

#### Passives & Weak Points:

<button type="button" name="button_add_passive" class="btn btn-purple" onclick="builderAddPassive()">+</button> <button type="button" name="button_remove_passive" class="btn btn-purple" onclick="builderAddPassive(true)">-</button>

<div id="passives"></div>

#### Traits:

<form>
    <div class="large-input">
        <label for="id_traits_infos">Intelligence & Infos*:</label>
        <input id="id_traits_infos" type="text" placeholder="Limited Intelligence, Undead">
    </div>
    <div class="large-input">
        <label for="id_traits_resistance">Resistance:</label>
        <input id="id_traits_resistance" type="text" placeholder="Fire damage (Rank 5)">
    </div>
</form>
<form>
    <div class="large-input">
        <label for="id_traits_immunity">Immunity:</label>
        <input id="id_traits_immunity" type="text" placeholder="Darkness (Leave empty for none)">
    </div>
    <div class="large-input">
        <label for="id_traits_vulnerability">Vulnerability:</label>
        <input id="id_traits_vulnerability" type="text" placeholder="Light (Leave empty for none)">
    </div>
</form>
<form>
    <div class="traits small-input">
        <div class="traits-title">
            <span>Power</span>
        </div>
        <div>
            <label for="id_traits_combat">Combat*:</label>
            <input id="id_traits_combat" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_hearts">Hearts*:</label>
            <input id="id_traits_hearts" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_athletics">Athletics*:</label>
            <input id="id_traits_athletics" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_civilization">Civilization*:</label>
            <input id="id_traits_civilization" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_fortitude">Fortitude*:</label>
            <input id="id_traits_fortitude" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_intimidate">Intimidate*:</label>
            <input id="id_traits_intimidate" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_mechanics">Mechanics*:</label>
            <input id="id_traits_mechanics" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_smithing">Smithing*:</label>
            <input id="id_traits_smithing" type="text" placeholder="0">
        </div>
    </div>
    <div class="traits small-input">
        <div class="traits-title">
            <span>Wisdom</span>
        </div>
        <div>
            <label for="id_traits_willpower">Willpower*:</label>
            <input id="id_traits_willpower" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_magic">Magic*:</label>
            <input id="id_traits_magic" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_arcana">Arcana*:</label>
            <input id="id_traits_arcana" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_perception">Perception*:</label>
            <input id="id_traits_perception" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_influence">Influence*:</label>
            <input id="id_traits_influence" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_discipline">Discipline*:</label>
            <input id="id_traits_discipline" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_perform">Perform*:</label>
            <input id="id_traits_perform" type="text" placeholder="0">
        </div>        
        <div>
            <label for="id_traits_enchanting">Enchanting*:</label>
            <input id="id_traits_enchanting" type="text" placeholder="0">
        </div>
    </div>
    <div class="traits small-input">
        <div class="traits-title">
            <span>Courage</span>
        </div>
        <div>
            <label for="id_traits_accuracy">Accuracy*:</label>
            <input id="id_traits_accuracy" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_stamina">Stamina*:</label>
            <input id="id_traits_stamina" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_nature">Nature*:</label>
            <input id="id_traits_nature" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_agility">Agility*:</label>
            <input id="id_traits_agility" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_command">Command*:</label>
            <input id="id_traits_command" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_insight">Insight*:</label>
            <input id="id_traits_insight" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_guile">Guile*:</label>
            <input id="id_traits_guile" type="text" placeholder="0">
        </div>
        <div>
            <label for="id_traits_cooking">Cooking*:</label>
            <input id="id_traits_cooking" type="text" placeholder="0">
        </div>
    </div>
</form>

#### Drops:

<button type="button" name="button_add_drop" class="btn btn-purple" onclick="builderAddDrop()">+</button> <button type="button" name="button_remove_drop" class="btn btn-purple" onclick="builderAddDrop(true)">-</button>

<div id="drops_container"></div>

<button type="button" name="button" class="btn" onclick="buildTable()">Generate Table</button>

<div id="result_infos"></div>

<div id="built-table" class="table-wrapper"></div>

**Code**: <button type="button" name="button" class="btn" onclick="copyTableToClipboard()">Copy</button>
```
```
{: #built-table-code}