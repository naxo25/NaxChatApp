<template>
  <q-page class="full-width q-pa">
    <perfil :user='user' />
    <input class='hidden' filled hint="Native file" id='subir' @change='changeFoto' type="file" accept="image/*" />
    <input class='hidden' filled hint="Native file" id='subirC' @change='changeFoto' type="file" accept="image/*" capture="camera" />
    <preview :user='user' />
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ImageTools from 'boot/redim.js';

  export default {
    computed: {
      ...mapGetters('store', ['user']),
    },
    methods: {
        async changeFoto(e){
          var evento = e.target.files[0];
          this.op = 1;
          this.resizeTools(evento, 350); 
          this.resizeTools(evento, 40); // _Thumbnails
        },
        resizeTools(event, calidad){
            ImageTools.resize(event, {
                width: calidad,
                height: calidad
            }, function(blob, didItResize) {
                var lk = window.URL.createObjectURL(blob);
                if (calidad == 40) preview_min.src = lk; 
                else preview.src = lk
            });
        }
      },
      components: {
        'preview': require('components/Perfil/preview.vue').default,
        'perfil': require('components/Perfil/user.vue').default,
      } 

  }

</script>