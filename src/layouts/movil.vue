<template>

  <q-layout view="lHh Lpr lFf" style='max-width:420px; margin: auto;'>

    <!--loader-->
    <div v-if='$store.state.store.loader == 1'>
      <!--<div class='animate-bottom absolute-center' id="loader"></div>-->
      <q-circular-progress
        show-value
        class='absolute-center'
        :value="$store.state.store.value"
        size="120px"
        color='blue-6'
        track-color="grey-9">
          <q-avatar size="100px">
            <img src="statics/quasar-logo.svg">
          </q-avatar>
      </q-circular-progress>
    </div>

    <q-header style='max-width:420px; margin: auto' :class="{ 'invisible' : !show }">
      <q-toolbar v-if="userDetails.userId"
          class='text-black bg-secondary'>
        <div v-if="$route.fullPath.includes('/chat')">
          <q-btn          
            flat
            dense 
            to='/users'
            color='black'
            icon="arrow_back"
            no-caps>
            <img :src='other.img_thumb != null ? other.img_thumb : noimg' 
                       style='width:33px; height:33px; margin:0px 7px 0px 1px ;border-radius:50%'/>
            {{ other.name }}
          </q-btn> 

          <q-btn-dropdown
            icon='miscellaneous_services'
            dense
            flat
            class="absolute-right text-secondary"
            color="black"
            >
            <q-list>

              <q-item clickable v-close-popup @click="clearFriend">
                <q-item-section>
                  <q-item-label>Borrar amigo</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="remove" color="black" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="clearMessages">
                <q-item-section>
                  <q-item-label>Borrar Mensajes</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="delete" color="red" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="LLamar">
                <q-item-section>
                  <q-item-label>LLamar</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="phone" color="green" />
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>

        <div v-else>
            <q-btn 
              flat 
              no-caps 
              icon='info'
              class='text-primary'
              label='naxchat' 
              @click="info = true"/>
            <q-btn 
              flat 
              no-caps 
              class='absolute-right' 
              color='black'
              icon='exit_to_app' 
              label='salir' 
              @click="logoutUser" />
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container :class="{ 'invisible' : !show }"> 
      <router-view />
    </q-page-container>

    <q-toolbar class='fixed-bottom bg-white' :class="{ 'invisible' : !show }" v-if="userDetails.userId">

        <q-tabs
          v-model="opcion"
          @click='cambiarOpcion(opcion)'
          no-caps
          style='margin: auto;'
          class="text-primary"
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab name="amigos" icon='chat' />
          <q-tab name="solicitudes" icon='person_add'/>
          <q-tab name="perfil" icon='account_circle' />
        </q-tabs>

    </q-toolbar>

    <q-dialog v-model="info" transition-show="rotate" transition-hide="rotate">
      <Minfo />
    </q-dialog>

  </q-layout>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  export default {
    data () {
      return {
        noimg: '',
        info: false,
        show: false,
        opcion: 'amigos'
      }
    },
    mounted(){
      this.noimg = this.$store.state.store.noimg;
      setTimeout(() => {
        this.show = true
      }, this.$store.state.store.pretime);

      if(navigator.onLine) {
      } else {        
      }
      //Efecto lista
      setTimeout(()=> this.loadings(), 3200);
    },
    computed: {
      ...mapState('store', ['userDetails']),
      other() {
        return this.$store.state.store.amigos[this.$store.state.store.otherId];
      }
    },
    methods: {
      ...mapActions('store', ['logoutUser']),
      ...mapActions('store_friends', ['clearFriend','clearMessages']),
      ...mapMutations('store', ['cambiarOpcion','loadings']),
      LLamar(){ 
          this.$router.push('/video');
      },
    },
    components: {
      'Minfo': require('components/misc/Minfo.vue').default
    }
  }

</script>

<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1.2
  *
    font-weight: bold  
  #loader {
    background: url(https://d31i9b8skgubvn.cloudfront.net/assets/img/loading.gif);
    position: absolute;
    width: 300px;
    height: 300px;
  }

  a {
    display: none
  }

</style>