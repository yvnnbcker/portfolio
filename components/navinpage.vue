<template>
    <div class="menu-nav">
        <ul class="inpage-nav">
            <li>
                <button class="button-inpage" to="/all" onclick="filterSelection('all')">all</button>                                   
                <button class="button-inpage" to="/web" onclick="filterSelection('web')">web</button>   
                <button class="button-inpage" to="/app" onclick="filterSelection('app')">app</button>                   
                <button class="button-inpage" to="/iks" onclick="filterSelection('iks')">iks</button>                   
            </li>
        </ul>
       <Line />
    </div>
</template>