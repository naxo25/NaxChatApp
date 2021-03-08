<template>
  <q-page class="flex q-pa-md page text-black" style='max-width: 400px; margin: auto;'>
        <q-btn
          flat
          dense 
          v-go-back.single
          label='Volver'
          no-caps/>    

  	<q-card class="card bg-transparent" flat>

      <q-form @submit='register'>
       
          <h4 style='margin-bottom: 20px'>Registro</h4> 
          <p>Completa los siguientes datos ...</p>
        
        <q-input
          required
          v-model="formData.name"
          label="Escribe tu nombre" />
        <q-input
          required
          label-color='white'
          v-model="formData.email"
          type='email'
          onkeyup="javascript:this.value=this.value.toLowerCase();"
          label="Escribe tu correo institucional" />
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
          tipoEmail: ''
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