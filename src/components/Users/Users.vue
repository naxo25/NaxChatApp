<template>

    <q-page style='margin-bottom:40px'>

    <q-list class="rounded-borders" style="max-width: 350px; margin: auto;">

      <div v-for='amigo,key in limit' :key='key'>
        
        <q-item v-if='!$store.state.store.loadings'>
          <q-item-section avatar @click="changeOtherId(key); watch = true">
            <q-avatar>
              <q-img style='size: 3em' :src="amigo.img_thumb" /> 
            </q-avatar>
          </q-item-section>

          <q-item-section @click='go(key)'>
            <q-item-label>{{ amigo.name }}</q-item-label>
            <q-item-label caption lines="2">
              <span lines='1' class='text-caption ' :style=" amigo.cant_msjs ? 'color: green' : 'color: grey' ">{{ amigo.ultChat }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top @click='go(key)'>
              <q-item-label lines='1' class='text-caption text-grey'>{{ amigo.fecha }}</q-item-label>
              <q-item-label lines='1' class='text-caption text-grey'>{{ amigo.hora }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-else>
          <Skeleton />
        </q-item>

        <q-separator spaced inset="item" />

       </div>

    </q-list>

      <q-dialog v-model="watch" class='my-card'>
        <component-watch :modo='"friends"' />
      </q-dialog>

    </q-page>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data () {
      return {
        amigoClick: {},
        watch: false,
        cant_limit: '',
        limite: {}
      }
    },
    computed: {
      ...mapGetters('store', ['amigos']),
      limit(){
        
        let limit = {};
        
        if (this.$store.state.store.desarrollo != 2) {
          Object.keys(this.amigos).slice(0, this.cant_limit).forEach(key => {
            if (this.amigos[key]) 
              limit[key] = this.amigos[key];
          })
        } else if (this.$store.state.store.desarrollo == 2) {
          let img = this.$store.state.store.noimg
          limit = {
            '60teQqCd5dOD6b8wfgVBKA2en2O2':{ name: 'claudia', img_thumb: img, img, },
            1:{ name: 'Ej', img_thumb: img, img, },
            2:{ name: 'Ej', img_thumb: img, img, },
            3:{ name: 'Ej', img_thumb: img, img, },
            4:{ name: 'Ej', img_thumb: img, img, },
            5:{ name: 'Ej', img_thumb: img, img, },
            6:{ name: 'Ej', img_thumb: img, img, },
            7:{ name: 'Ej', img_thumb: img, img, },
            8:{ name: 'Ej', img_thumb: img, img, },
            9:{ name: 'Ej', img_thumb: img, img, },
            10:{ name: 'Ej', img_thumb: img, img, },
            11:{ name: 'Ej', img_thumb: img, img, },
            12:{ name: 'Ej', img_thumb: img, img, },
            13:{ name: 'Ej', img_thumb: img, img, },
            14:{ name: 'Ej', img_thumb: img, img, },
          }
        }
          return limit
      },
    },
    mounted(){

      let altura = this.$q.screen.height;
      this.cant_limit = Math.floor(altura/100 + altura/500)

      let scroll = document.scrollingElement || document.body;
      window.onscroll = () => {
          if ( (this.$q.screen.height >= scroll.scrollHeight - window.scrollY - 200) ) {
            this.cant_limit += 5;
          }
      }
        //axios.get('http://localhost:3000/amigos').then((doc) => {
        //  this.limite = doc.data
        //});

    },
    methods: {
      ...mapActions('store', ['changeOtherId']),
      go(key){
        this.changeOtherId(key);
        this.$router.push('chat/')
      }
    },
    components: {
      'component-watch': require('components/misc/component-watch.vue').default,
      'Skeleton': require('components/Users/Skeleton.vue').default,
    }

  }
</script>