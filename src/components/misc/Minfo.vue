<template>
	
      <q-card class='text-weight-bold' style='max-height: 300px; min-width: 300px'>
        
        <q-card-section>
          <div class="text-h6 text-center">Acerca de el autor</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p class='text-center'> App de red social multiplataforma creado por Ignacio Labra </p> 
          <p class='text-center'> Visita mi <a href='https://nacholabraweb.000webhostapp.com' id='a'> página web </a>
            o escribeme un correo a <a href='mailto:naxorojas25@gmail.com' id='a'> naxorojas25@gmail.com </a>
          </p>
          <p class='text-center'>
            <q-img src='firebase.png' style='width:2.5em' />
            <q-img src="vue.png" style='width:2.5em' /> 
            <q-img src="quasar-logo.svg" style='width:2.5em' /> 
          </p>
          <p class='text-right'>{{ $store.state.store.V }}<br> </p>
        </q-card-section>

      </q-card>

</template>

<style lang="stylus">
  #a
    text-decoration: none; 
    color: green;
    display: block
  #a:hover 
    color: blue;

</style>

<script>
  
  export default {
    computed:{
      style () {
        return {
          height: this.$q.screen.height*.5 + 'px'
        }
      }
    }
  }

</script>