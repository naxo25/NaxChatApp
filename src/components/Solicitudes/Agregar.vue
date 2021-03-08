<template>

  <q-page style='margin-bottom:100px'>

    <q-list class="rounded-borders" style="max-width: 350px; margin: auto;">
      <div v-for='(amigo, key) in solicitudes' :key="key">
        <q-item>

          <q-item-section avatar @click="changeOtherId(key), watch = true">
            <q-avatar>
              <q-img style="background: lightgrey" :src="amigo.img_thumb" />
            </q-avatar>
          </q-item-section>

          <q-item-section class='text-left'>
            <q-item-label>
              {{ amigo.name }}
            </q-item-label>
          </q-item-section>
          
          <div style='text-align:right; margin-right:0'>
            <q-btn icon='add' color='green-8' no-caps flat dense @click='Accept({ amigo : key})' /> 
            <q-btn icon='remove' color='red' no-caps flat dense @click='RemoveSolicitud({ amigo: key})' />
          </div>

        </q-item>
        <q-separator inset='item' spaced />
      </div>
    </q-list>

    <q-dialog v-model="AddFriend" position='bottom'>
      <AddFriend />
    </q-dialog>
        
    <div class="boton">
     <q-btn icon='add' size='1.1em' round dense glossy color="primary" @click="AddFriend = true" />
    </div>

    <q-dialog v-model='watch' class="my-card">
      <component-watch :modo='"solicitudes"' />
    </q-dialog>

  </q-page>

</template>

<style lang='stylus'>
.boton
  position: fixed
  bottom: 1.1em
  right: 0
  margin-right: .8em
  padding-bottom: 3.5em
</style>

<!--   position: fixed
  bottom: 46px
  text-align: right
  padding-bottom: 30px
  margin-right: 9px -->

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {

    data () {
      return {
        amigoClick: {},
        watch: false,
        AddFriend: false,
        }
      },
      computed: {
        ...mapGetters('store', ['solicitudes'])
      },
      methods: {
        ...mapActions('store_friends', ['Accept', 'RemoveSolicitud']),
        ...mapActions('store', ['changeOtherId']),
      },
      components: {
        'AddFriend': require('components/Solicitudes/AddFriend.vue').default,
        'component-watch': require('components/misc/component-watch.vue').default
      } 

  }
</script>