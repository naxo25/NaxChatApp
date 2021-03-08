<template>
  
    <q-card flat>

      <q-card-section class='text-center'>
        <div class="row no-wrap">
          <div class="col text-h6">
            <q-img
              id='fotoUser'
              class='item-start'   
              :src="user.img != null ? user.img : noimg"
              native-context-menu
              v-ripple
              spinner-color="white"
              style="height: 180px; width: 100%; margin-bottom:0px; border-radius: 8%; cursor:pointer;"
              @click="changePre(true)"
            >
              <div class="absolute-bottom text-center">
                <q-btn round color="black" icon="photo_camera" text-color='white' />
              </div>
            </q-img>

            <div style="margin-top: 1em;">
              <span v-if='!editar'>  
                <div class="row">
                  <div class="col-10 text-left">  
                <div class="text-left text-caption text-primary" style="margin-bottom: -10px; font-weight: bold;">
                        Nombre 
                    </div>                 
                    {{ user.name }}
                  </div>
                    <q-btn v-close-popup flat dense color="primary" @click='name = user.name, editar = !editar' icon="edit" style='margin-top: 10px; padding: 0; font-size: .6em' />
                </div>
              </span>
              <span v-else>
                <div class="row">            
                  <div class="col-9 text-left">
                    <q-input v-model="name" label='Nombre' color='black' dense autofocus
                    @keyup.enter='saveEdit(), editar = !editar' />
                  </div>
                    <q-btn v-close-popup flat dense color="primary" icon="save" style='margin-top: 10px; padding:0; font-size: .52em' @click='saveEdit(), editar = !editar' />
                    <q-btn v-close-popup flat dense color="red" icon='cancel' @click='editar = !editar' style='margin-top: 10px; padding:0; font-size: .52em' />
                </div>
              </span>
                <div class="text-left text-caption text-grey-8" style="margin: -3px -5px -9px 0px">
                    Este es tu nombre publico.
                </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section style="margin: 0em 0 1.5em">
          Correo de registro: <br>
          <q-img style='width: 1.3em; margin-right: 5px' src='gmail.png' />
          {{ user.email }}
      </q-card-section>

      <q-btn rounded class='text-caption' @click='notiPush'>
        Mandar notificación push
      </q-btn>

    </q-card>

</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  
  export default {
    props: ['user'],
    data () { 
      return {
        noimg: '',
        editar: false,
        name: '',
      }
    },
    mounted(){
      this.noimg = this.$store.state.store.noimg;
    },
    methods: {
      ...mapActions('store', ['cambiarNombre']),
      ...mapMutations('store',['changePre']),
      saveEdit(){
        this.cambiarNombre({ name: this.name})
      },
      async notiPush(){
        await fetch(this.$store.state.store.puertoNotis + 'new-message/' + this.user.email, {
            method: 'POST',
            body: JSON.stringify({ 
              title: 'Ejemplo a ' + this.user.name, 
              message: 'Probando notificaciones push',
              img_thumb: this.user.img_thumb
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
      }
    }
  }

</script>