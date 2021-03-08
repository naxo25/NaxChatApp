<template>

  <q-page 
    ref="pageChat"
    class="page-chat bg-grey-2">

    <q-banner 
      v-if="!otherUser.online"
      class="bg-grey-4 text-center flex hidden">
      {{ otherUser.name }} no esta en línea.
    </q-banner>

    <div :class="{ 'invisible' : !showMessages }"
      class="q-pa-md column col justify-end">

      <q-chat-message
        v-for="(message, key) in limit"
        :key="key"
        :sent="message.from == 'me' ? true : false"
        :align="message.from == 'me' ? 'right' : 'left'">

        <Chat :message='message' />
        
      </q-chat-message>

    </div>

    <q-footer class='bg-white' style='max-width:350px; margin: auto; text-align:left'>

      <q-toolbar class='text-weight-bold' style='padding: .8em'>

        <q-form 
          class="full-width"
          id='myform'
          @submit="SendChat('text')">

          <div v-if='load' class="bg-white text-grey" style="text-align: center;">
            <q-spinner
              color="grey-6"
              size="3em"
              :thickness="2"
            />
          </div>

          <q-tabs v-if='tab' style='opacity: .9;' class='bg-white text-left'>
            <q-tab class="text-blue" style='padding:.2em' icon="photo_camera" @click='galeria(2)' />
            <q-tab class="text-orange-8" style='padding:.2em' icon="photo" @click='galeria(1)' />
            <q-tab class="text-grey-8" style='padding:.2em' icon="attachment" @click='galeria(4)' />
            <q-tab class="text-black" style='padding:.2em' icon="gif" @click='galeria(5)' />
            <q-tab class="text-grey-8" style='padding:.2em' icon="close" @click='tab = false' />
          </q-tabs>

          <q-input
            v-model="newMessage"
            ref="newMessage"
            id='message'
            bg-color="white"
            color='black'
            placeholder="Escribe tu mensaje aquí...."
            @keyup.enter='SendChat("text")'
            autogrow
            dense>
              <q-btn
                round
                dense
                flat
                @click='tab = true'
                class='text-black'
                icon="camera" />
              <q-btn
                round
                dense
                flat
                type='submit'
                class='text-primary'
                icon="send" />
          </q-input>

        </q-form>
      </q-toolbar>

    </q-footer>

    <q-dialog v-model='dialog_gifs' position='bottom'>
      <searchGifs />
    </q-dialog>

    <q-dialog v-model='show_minMenu' >
      <minMenu />
    </q-dialog>

    <input class='hidden' filled hint="Native file" id='subir' @change='changeFoto' type="file" accept="image/*" />
    <input hidden type="file" id="subirCam" name="file" @change='changeFoto' accept="image/*;" capture="camera" />    
    <input id='subirArch' type='file' @change='mandarArchivo' style='display: none;' />

    <div v-if="this.$store.state.store.loads == 1">
      <input id='change' @click="onUpload" type="text"/>
      <img id='preview' />
      <q-btn to='/camara' label='camara' />
      <q-btn to='/video' label='video' />
    </div>
    <div v-else>
      <input id='change' @click="onUpload" type="text" hidden/>
      <img id='preview' hidden />
    </div>

  </q-page>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import naxJs from 'boot/NaxJs.js';
  import ImageTools from 'boot/redim.js';
  import searchGifs from 'components/PageChat/searchGifs.vue';
  import { decodeBase64, encodeBase64 } from 'boot/encript.js'

  export default {
    data() {
      return {
        load: false,
        dialog_gifs: false,// urlgif: '', gif: '', 
        tab: false,
        newMessage: '',
        show_minMenu: false,
        showMessages: false,
        fotolocal: '',
        calidad: 700,
        cant_limit: 0,
      }
    },
    components: {
      'minMenu': require('components/PageChat/menu-min-chat.vue').default,
      'Chat': require('components/PageChat/Chat.vue').default,
      searchGifs,
    },
    computed: {
      ...mapState('store', ['userDetails','otherId']),
      ...mapGetters('store', ['messages']),
      otherUser(){
        return this.$store.state.store.amigos[this.otherId]
      },
      limit(){
        try {
          let mensajes = Object.values(this.messages[this.otherId]).reverse() 
          let msgs = [];
          Object.values(mensajes).slice(0,this.cant_limit).forEach(msg => {
            const { ...payload } = msg
            payload.text = payload.tipo === 'text' ? decodeBase64(payload.text) : payload.text
            msgs.push(payload)
          })
          return msgs.reverse();
        } catch //(e) 
        {
          return { 0: { tipo: 'text', text: 'Escribe tu 1er mensaje' } }
        }
      },
    },
    destroyed() {
      this.StopGettingMessages();
    },
    watch: {
      messages: function(val) {
        if (Object.keys(val).length) {
          this.scrollToBottom();
        }
      }
    },
    mounted(){

      this.scrollToBottom();

      setTimeout(() => {
        this.showMessages = true
      }, 0);

      let alturaTotal = this.$q.screen.height;
      if (alturaTotal < 642) {
        this.cant_limit = 10;
      } else if (alturaTotal < 851) {
        this.cant_limit = 15;
      } else {
        this.cant_limit = 20;
      }

      let scroll = document.scrollingElement || document.body;

      let altoPost = scroll.scrollHeight;

      window.onscroll = () => {

        let alturamax = scroll.scrollHeight;

        if ( (0 >= window.scrollY - 200 && alturamax != altoPost) ) {
          window.scroll(0, alturamax - altoPost)
          this.cant_limit += 10;
          altoPost = alturamax
        }
      }

    },
    methods: {
      ...mapActions('store', ['StopGettingMessages', 'SendMessage', 'RecibeMessage','subirArchivo']),

      scrollToBottom() {
        let pageChat = this.$refs.pageChat.$el
        setTimeout(() => {
          window.scrollTo(0, pageChat.scrollHeight)
        }, 0);
      },

      noti () {
        this.$q.notify({
          position: 'top',
          message: this.otherUser.name + 'Te mando un mensaje',
          color: 'green'
        })
      },

      SendChat(tipo) {

        let hora = naxJs.hora();
        let text;
        let textweb = '';
        
        if (change.value == 2) {
          if (this.$store.state.store.loads == 1) {
              alert('222');
              alert(this.newMessage);
              alert(this.fotolocal);
          }
          text = this.fotolocal;
          textweb = this.newMessage;
        } else {
          text = encodeBase64(this.newMessage);
        }

        let message = { tipo, text, textweb, hora }
        this.SendMessage(message);
        this.RecibeMessage(message);
        this.clearMessage()

      },

      clearMessage() {
          //this.scrollToBottom()
          change.value = 1;
          this.newMessage = '';
          //this.$refs.newMessage.focus();
      }, 

      galeria(op){
        this.tab = false
        if (op==1) {
          subir.click();
        } else if (op==2) {
          subirCam.click();
          //this.captureImage();
        } else if (op==4) {
          subirArch.click();
        } else if (op==5) {
          this.dialog_gifs = true;
        }
      },
      resizeTools(event, calidad){
          ImageTools.resize(event, {
              width: calidad,
              height: calidad
          }, function(blob, didItResize) {
              preview.src = window.URL.createObjectURL(blob);
              change.click()
          });
      },

        changeFoto(e){
            this.resizeTools(e.target.files[0], this.calidad); // _Thumbnails
        },
        onUpload(){

          this.load = true;
          let hora = naxJs.hora();
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

                let payload = { file: blob, ruta, hora, tipo: 'foto' }
                if (change.value == 2) {
                  payload.fotolocal = 1;
                }
                this.subirArchivo(payload).then(
                  this.load = false
                )

              });

          }; 
          uploadToStorage(preview.src);

        },

        captureImage () {

          change.value = 2;

          navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
          destinationType: Camera.DestinationType.FILE_URI, targetHeight: this.calidad, targetWidth: this.calidad });

          function onSuccess(imageURI) {
              preview.src = imageURI;
              change.click();
          }

          function onFail(message) {}

        },

        mandarArchivo(e){

          this.load = true
          let hora = naxJs.hora();
          let name = e.target.files[0].name
          let ruta = 'Archivos/'+ this.userDetails.email +'/'+ this.otherUser.name + '/' + name;

          this.subirArchivo({ file: e.target.files[0], ruta, name, hora, tipo: 'url' }).then(
            this.load = false
          )
          this.clearMessage();

        },

      },
    
  }
</script>
