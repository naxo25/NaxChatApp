<template>
	
    <q-card :style='styleCard'  >

      <q-img :style='style' :src="details.img" v-close-popup />

      <q-card-section>

         <div class="col text-h6 ellipsis">
          {{ details.name }}
         </div>


      </q-card-section>

    </q-card>

</template>

<script>
  export default {
    props: ['modo'],
    data () { 
      return {
        noimg: this.$store.state.store.noimg,
      }
    },
    computed:{
      details() {
        let lista = this.modo == 'solicitudes' ? this.$store.state.store.solicitudes : this.$store.state.store.amigos
        return {
          img: this.$store.state.store.imgs[this.$store.state.store.otherId],
          name: lista.[this.$store.state.store.otherId].name,
        }
      },
      style () {
        return {
          height: this.$q.screen.height*.5 + 'px',
          width: this.$q.screen.width*.85 + 'px'
        }
      },
      styleCard () {
        return {
          height: this.$q.screen.height*.628 + 'px',
          width: this.$q.screen.width*.85 + 'px'
        }
      },
    },
  }
</script>

<style lang='stylus'>
  #preload
    background: rgb(211,211,211)
  .my-card
    width: 100%
    height: 335px
</style>
