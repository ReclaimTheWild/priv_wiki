---
layout: default
title: Tools
permalink: /tools
---

<form>
    <label for="id_username">Name:</label>
    <input type="text" placeholder="Name, Common">
    <label for="id_username">Rank:</label>    
    <input type="text" placeholder="Rank 1 Natural Template">
</form>
<form>
    <label for="id_username">HP:</label>
    <input type="text" placeholder="0">
    <label for="id_username">SP:</label>
    <input type="text" placeholder="0">
    <label for="id_username">SP:</label>
    <input type="text" placeholder="0">
</form>

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