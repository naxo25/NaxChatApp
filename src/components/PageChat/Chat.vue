<template>

<span class="chats">
  	<span v-if="message.tipo == 'text'">
  		{{ message.text }}
  	</span>

	<q-img v-else-if="message.tipo == 'foto'" style="width: 180px; height: 180px" :src="message.text" @click='foto(message.text), watch = true' />

    <a v-else-if="message.tipo == 'url'" :href='message.text' style="text-decoration: none; color: green; display: inline-block;"> Archivo </a>

    <div v-else-if="message.tipo == 'gif'">
    	<iframe frameborder="0" style="width: 180px; height: 180px; pointer-events: none" :src='message.text' />
	</div>
    <br> {{ message.hora }}

    <q-dialog v-model="watch">
      <fotoCanvas :fotoClick='fotoClick' />
    </q-dialog>
</span>

</template>

<script>
	export default {
		props: ['message'],
		data(){
			return{
        		watch: false,
        		fotoClick: {},
    		}
		},
	    components: {
	      'fotoCanvas': require('components/PageChat/canvas.vue').default,
	    },
	    methods:{
	        foto(item){
	          this.fotoClick.img = item;
	        },
    	}
	}
	
</script>

<style>
	@keyframes animation{
		0%{
			transition: 1s; 
			opacity: .2;
    		padding-top: 50px;
		}
	}
	.chats{
		opacity: 1;
		transition: 1s;
		animation: animation 1s ease;
	}
</style>