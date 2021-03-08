<template>
  <q-page class="flex q-pa-md" style='max-width: 400px; margin: auto;' >


      <div class="header-content">
        <div id='cont-logo'>
          <img src="icos.png" alt="Nax" class="logo"> 
          <span class='logo-span'> ax Web </span>
        </div>
      </div>
    
    <q-card class="card" flat>

      <q-form @submit="ingresar">
        <q-input
          required      
          v-model="formData.email"
          type='email'
          onkeyup="javascript:this.value=this.value.toLowerCase();"
          label="Ingresa tu correo" />
        <q-input
          required
          v-model="formData.password"
          type="password"
          class="q-mb-md"
          label="Ingresa tu contraseña" />
        <q-btn
          class='btn-inicio'
          flat
          no-caps
          type="submit"
          color='primary'
          label="Iniciar sesión" />
        <q-btn
          flat
          to='/Registro'
          class="full-width"
          color='blue'
          no-caps
          label="Registrarse" />
      </q-form>

        <q-btn
          color='black'
          no-caps
          class='btn-inicio'
          @click='probar'
          flat
          label="Probar app" />
          
      <q-btn flat no-caps @click="info = true" style='margin-top: 2em'>
        2021 Nax@ Licencia naxWeb
      </q-btn>

    </q-card>

    <div style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." style="display: block;" target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a></div>

    <q-dialog v-model="info" transition-show="rotate" transition-hide="rotate">
      <Minfo />
    </q-dialog>

  </q-page>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        info: false,
        formData: {
          email: '',
          password: ''
        }
      }
    },
    components:{
      'Minfo': require('components/misc/Minfo.vue').default,
    },
    mounted() {
      if (localStorage.email)
        this.formData.email = localStorage.email;
    },
    methods:{      
      ...mapActions('store', ['loginUser']),
          ingresar (){            
            this.loginUser(this.formData)
          },
          probar (){
            this.formData.email = 'user@gmail.com' 
            this.formData.password = '444444'
            this.loginUser(this.formData)
          }
      }
    }
</script>

<style>
.q-card{
  width:85%; 
  height: 100%; 
  margin: auto
}
.btn-inicio{
  width: 100%; 
  border-radius: 25%
}
@keyframes logo {
  0% {
    transform: rotate(0deg);

  }
  100% {
    transform: rotate(360deg);

  }
}
@keyframes spanlogo {
  0% {
    left: 100px;
  }
  80% {
    left: 200px
  }
  100% {
    left: 200px
  }
}

.header-content {
  color: black;
  border-radius: 30%;
  font-weight: bolder;
  position: absolute;
  z-index: -2;
  top: 5%;
  width: 300px;
  height: 20vh;
  text-align: center; 
}

.header-content .logo {
  animation: logo 2s ease;
  height: 60px;
  width: 60px;
}
.header-content .logo-span{
  z-index: -1;
  animation: spanlogo 1s ease;
  font-size: 0px;
  margin-top:  50px;
  position: absolute;
  display: none;
}

.header-content .text {
  line-height: 1.7;
  margin-top: 1rem;
  color: black;
}
</style>