<template>

    <q-card style="min-width: 80%">

      <q-card-section>
        <p class='text-center'> 
          Para agregar a alguien agregalo con su correo con el que se registro.
        </p>
      </q-card-section>

      <q-card-section class="q-pt-none">
      
      <div class='flex'>

        <q-input dense v-model="idamigo" v-close-popup no-caps onkeyup="javascript:this.value=this.value.toLowerCase();" 
                 @keyup.enter="Solicitud({ item: idamigo, tipo: tipoItem}); idamigo=''" 
                 label='Inserte dirección de correo de amigo' style='width:67%' autofocus />

        <q-input no-caps dense v-model='tipoItem' style='width:33%' />

      </div>

      </q-card-section>

      <q-card-actions align="right">

        <q-btn color='red' flat label="Cancel" @click='idamigo=""' v-close-popup />
        <q-btn color='primary' flat label="Mandar Solicitud" @click="Solicitud({ item: idamigo, tipo: tipoItem}); idamigo=''" v-close-popup />

      </q-card-actions>

    </q-card>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        tipoItem: '@gmail.com',
        idamigo: ''
      }
    },
    methods: {
      ...mapActions('store_friends', ['Solicitud']),
    }
  }
</script>