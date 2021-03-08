<template>

  <div style='width: 100%; max-height: 400px'>
  	<q-img :src='fotoClick.img' v-close-popup />
  </div>

</template>

<script>
	export default {
		props: ['fotoClick'],
	}
	
</script>