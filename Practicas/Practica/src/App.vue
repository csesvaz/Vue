<template>
<PruebaUno casa="Rojo" perro=default @cambiarResultado="subirResultado" ></PruebaUno>
  <div class="mensaje" :class="mensaje">{{ message }}</div>
  <button
    class="valor"
    type="button"
    @click="
      cambiar();
      subirResultado();
    "
  >
    mi boton
  </button>
  <router-link to="/lista">enlace</router-link>
  <h2>{{ resultado }}</h2>
</template>

<script>
import PruebaUno from "./components/PruebaUno.vue"
export default {
  components: {PruebaUno},
  data() {
    return {
      message: "Hello World",
      mensaje: "mensaje",
      resultado: 0,
    };
  },
  methods: {
    cambiar() {
      this.mensaje = "mensaje2";
    },
    subirResultado() {
      this.resultado++;
    },
  },
  computed: {
    numeroMayor10() {
      return this.resultado > 10;
    },
  },
};
</script>

<style scoped>
.mensaje {
  background-color: beige;
}
.mensaje2 {
  background-color: blue;
}
</style>
