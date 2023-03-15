<template>
  <h1 >{{casa}}</h1>
  <button
  @click="cambiarResultadoTotal"
    class="valor"
    type="button" >Casa
  </button>
  <!-- <TarjetaComponente>
    <template #dos>{{ casa }}</template>
    <template #tres>tres</template>uno -->
    <!-- </TarjetaComponente> -->
</template>
<script>
// import TarjetaComponente from './TarjetaComponente.vue'
export default{
components:{
  // TarjetaComponente
}
  ,props: {
    casa:String,
    perro:{ type: String,required: true, default: 'perro'
  }},
  emits:['cambiarResultado'],
  methods:{
    cambiarResultadoTotal(){
      this.$emit('cambiarResultado')
    }
  }
  }
</script>
<style scoped>
</style>
