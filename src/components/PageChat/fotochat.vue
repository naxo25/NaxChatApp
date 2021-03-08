<template>

  <q-dialog v-model='$store.state.store.changePre' :maximized='bottom' persistent>

      <q-item class='bg-white' style='justify-content: center; align-items: center;'>

        <div v-if='value == 0'>

          <img
           id='preview' 
           style='width: 100%;'
          />

          <q-tabs style='height:6.5em'>
            <q-tab class="text-primary" icon="done" @click='onUpload' />
            <q-tab class='text-red' icon='cancel' @click='changePre(false)' />
          </q-tabs>

          <q-tabs style='height:6.5em'>
            <q-tab class="text-blue" no-caps icon="photo_camera" label="Camara" @click='galeria(2)' />
            <q-tab class="text-orange-8" no-caps icon="photo" label="Galeria" @click='galeria(1)' />
            <q-tab class="text-red" no-caps icon="delete" label="Borrar" @click='galeria(3)' v-if='user.img' />
          </q-tabs>

        </div>

        <!--loader-->
        <div v-else='value != 0'>
          <q-circular-progress
            show-value
            class="q-ma-md"
            :value="value"
            size="120px"
            color='blue'
            track-color="grey-9">
              <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
              </q-avatar>
          </q-circular-progress>
        </div>

      </q-item>

  </q-dialog>

</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import ImageTools from 'boot/redim.js';
  import firebase from 'firebase';

  export default {
    props: ['user'],
    data () { 
      return {
        noimg: '',
        imageData: null,
        value: 0,
      }
    },
    mounted(){
      this.noimg = this.$store.state.store.noimg;
    },
    methods: {
      ...mapActions('store', ['cambiarFoto','borrarFotoPerfil']),
      ...mapMutations('store',['changePre']),
        
        galeria(op){
          if (op==1) {
            subir.click();
          } else if (op==2) {
            this.captureImage();
          } else if (op==3) {
            this.deleteFoto();
          }
        },

        deleteFoto(){
          this.borrarFotoPerfil();
          firebase.storage().ref().child(this.user.email).delete();
        },

        onUpload(){
          this.imageData = document.getElementById('preview').src;
          let namefoto = this.user.email;

          const uploadToStorage = (imageURL) => {

              var getFileBlob = function (url, cb) {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url);
                  xhr.responseType = "blob";
                  xhr.addEventListener('load', function() {
                    cb(xhr.response);
                  });
                  xhr.send();
              };

              getFileBlob(imageURL, blob =>{

                firebase.storage().ref().child(namefoto).put(blob).on('state_changed', snapshot =>{
                  this.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                }, error=>{ ()=> alert(error.message) },
                ()=>{
                    firebase.storage().ref().child(namefoto).getDownloadURL().then((url)=>{
                        this.changePre(false);
                        this.value = 0;
                        this.cambiarFoto({ img:url });
                    }).catch( err => 
                        alert('Se ha producido un error, intente nuevamente') 
                    );
                });

              });

          }; 
          uploadToStorage(this.imageData); //ejecutamos funcion  

        },

        changeCamera(imageURI){
          
            const imageURL = ImageTools.resize(imageURI, {
                width: 100,
                height: 100
            }, function(blob, didItResize) {
                document.getElementById('preview').src = window.URL.createObjectURL(blob);
                document.getElementById('preview-Min').src = document.getElementById('preview').src;
            });

        },

        captureImage () {

          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
          destinationType: Camera.DestinationType.FILE_URI });

          function onSuccess(imageURI) {
              var image = document.getElementById('preview');
              image.src = imageURI;
              var image2 = document.getElementById('preview-Min');
              image2.src = imageURI;
          }
          changeCamera(imageURI);

          function onFail(message) {
              alert('Failed because: ' + message);
          }

        },

      }
  
  }

</script>