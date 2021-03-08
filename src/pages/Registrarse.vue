<template>
  <q-page class="flex q-pa-md page text-white" style='max-width: 400px; margin: auto;'>
        <q-btn
          flat
          dense 
          v-go-back.single
          label='Volver'
          no-caps/>    

  	<q-card class="card bg-transparent" flat>

      <q-form @submit='register'>
       
          <h4 style='margin-bottom: 20px'>Registro</h4> 
          <p>Completa los siguientes datos ..</p>
        
        <q-input
          required
          label-color='white'
          v-model="formData.name"
          label="Escribe tu nombre" />
        <q-input
          required
          label-color='white'
          v-model="formData.email"
          type='email'
          onkeyup="javascript:this.value=this.value.toLowerCase();"
          label="Escribe tu correo" />
        <q-input
          required
          label-color='white'
          style=' margin-bottom: 80px'
          v-model="formData.password"
          type="password"
          label="Escribe tu contraseña" />
        <q-btn
          style=' margin-bottom: 60px'
          class='btn-inicio'
          type="submit"
          label="Continuar" />
      </q-form>

    </q-card>

    <div style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." style="display: block;" target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a></div>
    
  </q-page>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
        }
      }
    },
    methods:{
      ...mapActions('store', ['registerUser']),
          register (){                
            this.registerUser(this.formData)
          }
      }
    }
</script>

<style>
.page{
  background: rgba(73,155,234,1);
  background: -moz-radial-gradient(center, ellipse cover, rgba(73,155,234,1) 0%, rgba(39,37,138,1) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(73,155,234,1)), color-stop(100%, rgba(39,37,138,1)));
  background: -webkit-radial-gradient(center, ellipse cover, rgba(73,155,234,1) 0%, rgba(39,37,138,1) 100%);
  background: -o-radial-gradient(center, ellipse cover, rgba(73,155,234,1) 0%, rgba(39,37,138,1) 100%);
  background: -ms-radial-gradient(center, ellipse cover, rgba(73,155,234,1) 0%, rgba(39,37,138,1) 100%);
  background: radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(39,37,138,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#27258a', GradientType=1 );
}
.btn{
  color: white;
}
.q-card{
  width:90%; 
  height: 100%; 
  margin: auto
}
.btn-inicio{
  width: 100%; 
  border-radius: 25%
}
</style>