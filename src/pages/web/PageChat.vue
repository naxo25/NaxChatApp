<template>

  <q-page v-if='$store.state.store.otherId == 0' :class="{ 'invisible' : !show }">
    <div class="absolute-center">
      Selecciona una conversación
    </div>
  </q-page>

  <q-page v-else :class="{ 'invisible' : !showMessages }"
    ref="pageChat"
    no caps
    class="page-chat flex column bg-grey-1">

    <q-banner 
      v-if="!otherUser.online"
      class="bg-grey-4 text-center top">
      {{ otherUser.name }} no esta en línea.
    </q-banner>

    <div 
      :class="{ 'invisible' : !showMessages }"
      class="q-pa-md column col justify-end text-weight-bold">

      <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : otherUser.name"
        :sent="message.from == 'me' ? true : false"
        :align="message.from == 'me' ? 'right' : 'left'">

          <span v-if="message.tipo == 'text'">
            {{ message.text }}
          </span>

          <img v-else-if="message.tipo == 'foto'" style="min-width: 130px; min-height: 130px; max-width: 200px; max-height: 200px;" 
               :src='message.textweb' @click='foto(message), watch = true' />

          <a v-else="message.tipo == 'url'" :href='message.text' target="blank" style="text-decoration: none; color: blue"> Archivo </a>

        <br>
        {{ message.hora }}

      </q-chat-message>

    </div>

    <q-footer elevated class='bg-white'>
      <q-toolbar
            class='text-weight-bold'>
        <q-form 
          @submit="sendMessage('text')"
          class="full-width">
          <q-input
            v-model="newMessage"
            ref="newMessage"
            bg-color="white"
            color='black'
            placeholder="Escribe tu mensaje aquí...."
            dense>

            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                @click='galeria()'
                color="green"
                icon="phone"/>
              <q-btn
                round
                dense
                flat
                @click='galeria(5)'
                color="black"
                icon="camera"/>
              <q-btn
                round
                dense
                flat
                @click='galeria(1)'
                color="orange"
                icon="photo"/>
              <q-btn
                round
                dense
                flat
                @click='galeria(4)'
                color="grey"
                icon="archive" />
              <q-btn
                round
                dense
                flat
                type="submit"
                color="primary"
                icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>

    <q-dialog v-model="watch">
      <q-img :src="fotoClick.img" />
    </q-dialog>

    <q-dialog v-model='capture' :style='style'>
      <div class='camera-frame q-pa-md'>
        <video
          v-show='!showCapture'
          ref='video'
          class='full-width'
          width='600'
          autoplay
        />
        <canvas
          v-show='showCapture'
          ref='canvas'
          class='full-width'
          height='240'
        />
        <q-btn @click='getCanvas()'> Capturar Pantalla </q-btn>
        <q-btn @click='enviar()'> Enviar </q-btn>
      </div>
    </q-dialog>

    <q-input class='hidden' filled hint="Native file" id='subir' @change='changeFoto' type="file" accept="image/*" />
    <input id='subirArch' type='file' @change='mandarArchivo' style='display: none;' />
    <img id='preview' hidden />

  </q-page>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  import gets from 'boot/funs.js';
  import ImageTools from 'boot/redim.js';
  import firebase from 'firebase';

  export default {
    data() {
      return {
        newMessage: '',
        show: true,
        showMessages: true,
        watch: false,
        fotoClick: {},
        capture: false,
        showCapture: false,
      }
    },
    mounted(){
      setTimeout(() => {
        this.show = true
      }, 1700);
      this.scrollToBottom();
      setTimeout(() => {
        this.showMessages = true
      }, 100);
    },
    computed: {
      ...mapState('store', ['userDetails']),
      otherUser(){
        return this.$store.state.store.amigos[this.$store.state.store.otherId]
      },
      messages(){
        return this.$store.state.store.mensajes[this.$store.state.store.otherId]
      },
      style(){
        return{
          height: this.$q.screen.height / 2,
          width: this.$q.screen.width / 2,
        }
      }
    },
    watch: {
      messages: function(val) {
        if (Object.keys(val).length) {
          this.scrollToBottom();
        }
      }
    },
    methods: {
      ...mapActions('store', ['GetMessages', 'StopGettingMessages', 'SendMessage', 'SendPhoto', 'RecibeMessage', 'toDatos']),
      ...mapMutations('store',['changePre']),

      scrollToBottom() {
        let pageChat = this.$refs.pageChat.$el
        setTimeout(() => {
          window.scrollTo(0, pageChat.scrollHeight)
        }, 0);
      },

      sendMessage(tipo) {

        let hora = gets.hora();
        this.SendMessage({ tipo, text: this.newMessage, textweb: this.newMessage, hora });        
        this.RecibeMessage({ tipo, text: this.newMessage, textweb: this.newMessage, hora });

        this.clearMessage()
      },   
      clearMessage() {
          this.scrollToBottom();
          this.newMessage = '';
          this.$refs.newMessage.focus();
      },

      galeria(op){
        if (op==1) {
          subir.click();
        } else if (op==4) {
          subirArch.click();
        } else if (op==5) {
          this.sacarFoto();
        } else if (op==7) {
          this.showCapture = true;
          this.capture = true;
          setInterval(()=> this.initVideo(), 1000);
        }
      },

        async resizeTools(event, calidad){
            await ImageTools.resize(event, {
                width: calidad,
                height: calidad
            }, function(blob, didItResize) {
                preview.src = window.URL.createObjectURL(blob);
            });
            await setTimeout(()=>this.onUpload(),500)
        },
        changeFoto(e){
            this.resizeTools(e.target.files[0], 500); // _Thumbnails
        },

        onUpload(){

          let hora = gets.hora();
          let ruta = 'FotosSend/'+ this.userDetails.email +'/'+ this.otherUser.name +'/'+ hora;

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

                firebase.storage().ref().child(ruta).put(blob).on('state_changed', snapshot =>{},
                error=>{ ()=> alert(error.message) },
                ()=>{
                    firebase.storage().ref().child(ruta).getDownloadURL().then((urlStorage)=>{

                        this.newMessage = urlStorage;
                        this.sendMessage('foto');

                    }).catch( err => 
                        alert('Se ha producido un error, intente nuevamente') 
                    );
                });

              });

          }; 
          uploadToStorage(preview.src);

        },

        foto(item){
          this.fotoClick.img = item.textweb;
        },

        mandarArchivo(e){

          let hora = gets.hora();
          let ruta = 'Archivos/'+ this.userDetails.email +'/'+ this.otherUser.name + '/' + hora;

          firebase.storage().ref().child(ruta).put(e.target.files[0]).on('state_changed', snapshot =>{},
            error=>{ ()=> alert(error.message) },
            ()=>{
                firebase.storage().ref().child(ruta).getDownloadURL().then((urlStorage)=>{
                    this.newMessage = urlStorage;
                    this.sendMessage('url');
                }).catch( err => 
                    alert('Se ha producido un error, intente nuevamente') 
                );
            });

        },

        enviar(){
          if (!this.showCapture) {
            this.getCanvas();
            this.onUpload();
          } else {
            this.onUpload();
          }
          this.capture = false;
        },
        getCanvas() {
          this.showCapture = true;
          let video = this.$refs.video;
          let canvas = this.$refs.canvas;
          canvas.width = video.getBoundingClientRect().width;
          canvas.height = video.getBoundingClientRect().height;
          let context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          let asd = this.dataURItoBlob(canvas.toDataURL())
          let link = window.URL.createObjectURL(asd)
          preview.src = link;
          this.toDatos({ link })
        },
        dataURItoBlob(dataURI) {
          // convert base64 to raw binary data held in a string
          // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
          var byteString = atob(dataURI.split(',')[1]);

          // separate out the mime component
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

          // write the bytes of the string to an ArrayBuffer
          var ab = new ArrayBuffer(byteString.length);

          // create a view into the buffer
          var ia = new Uint8Array(ab);

          // set the bytes of the buffer to the correct values
          for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
          }

          // write the ArrayBuffer to a blob, and you're done
          var blob = new Blob([ab], {type: mimeString});
          return blob;
        },
        sacarFoto(){
          this.showCapture = false;
          this.capture = true;
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          }).then(stream => {
            this.$refs.video.srcObject = stream
          })
        },
        initVideo(){
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          }).then(stream => {
            this.$refs.video.srcObject = stream
          })
          let video = this.$refs.video;
          let canvas = this.$refs.canvas;
          canvas.width = video.getBoundingClientRect().width;
          canvas.height = video.getBoundingClientRect().height;
          let context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          let asd = this.dataURItoBlob(canvas.toDataURL())
          let link = window.URL.createObjectURL(asd)
          preview.src = link;
          this.toDatos({ link })
        },

    },
    
  }
</script>

<style lang="stylus">
</style>