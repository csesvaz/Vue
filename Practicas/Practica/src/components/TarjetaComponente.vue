<template>
    <router-view></router-view>
    <h1>pagina enlazada</h1>
 <div class="tarjeta"><h1><slot></slot></h1>
    <ul>
      <li><slot name="dos"></slot></li>
      <li><slot name="tres"></slot></li>
      </ul>
  </div>
  <router-link to="/">volver</router-link>
</template>