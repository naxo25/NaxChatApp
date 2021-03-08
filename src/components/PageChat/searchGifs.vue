<template>
  <q-list class='bg-white text-center' style='padding:5px'>
    <q-input autofocus type='text' label='Buscar gif' v-model='gif' @keyup='searchGif' style=' padding: 0em .8em'/><br>
    <div style="display: flex; flex-wrap: wrap;" ref='pagechat'>
	    <q-list v-for='gif,i in urlGif' :key='i' style='margin: auto;'>
		    <div v-close-popup @click='ongif(gif.embed_url)'>
		      <iframe :src="gif.embed_url" frameborder="0" style='pointer-events: none;' :style='width' />
		    </div>
	    </q-list>
	</div>
  </q-list>
</template>

<script>
	import axios from 'axios';
  	import naxJs from 'boot/NaxJs.js';
	import { mapActions } from 'vuex';
	export default {
		data(){
			return{
				urlGif: '',
				gif: '',
				cant_gif: 10
			}
		},
		computed:{
			width(){
	          let width = this.$q.screen.width;
	          return {
	            width: width*.47 +'px',
	          }
			}
		},
		methods: {
		  ...mapActions('store', ['SendMessage', 'RecibeMessage']),
	      searchGif(){
	        axios.get('https://api.giphy.com/v1/gifs/search?q='+this.gif+'&api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&limit='+this.cant_gif)
	          .then(res => {
	              this.urlGif = res.data.data
	          })
	      },
	      ongif(url) {
	      	let hora = naxJs.hora();
          	this.SendMessage({ tipo:'gif', text: url, textweb: url, hora });
        	this.RecibeMessage({ tipo:'gif', text: url, textweb: url, hora });
	        this.gif=''
	      },
		},
	}
	
</script>


     <!--  <q-btn
        round
        dense
        flat
        v-close-popup
        no-caps
        style='padding: 1.5em'
        @click='ongif(gif.embed_url)'
        class='text-grey'
        label='enviar gif'
        icon="send" /> -->