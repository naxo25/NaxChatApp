<template>

  <q-page v-if="$store.state.store.userDetails.userId"> 

        <q-tab-panels v-model="opcion">

          <q-tab-panel name="amigos">
            <listaamigos />
          </q-tab-panel>

          <q-tab-panel name="solicitudes">
            <listasolicitudes />
          </q-tab-panel>

          <q-tab-panel name="perfil">
            <perfil />
          </q-tab-panel>
          
        </q-tab-panels>

  </q-page>

</template>

<script>
  import { mapState } from 'vuex';
  import 'boot/main.js'
  export default {
    computed:{
        ...mapState('store',['opcion'])
    },
    components: {
      'listaamigos': require('components/Users/Users.vue').default,
      'listasolicitudes': require('components/Solicitudes/Agregar.vue').default,
      'perfil': require('components/Perfil/Perfil.vue').default,
    }
  }
</script>
