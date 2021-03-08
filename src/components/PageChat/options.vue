<template>
  <q-tabs style='opacity: .9;' class='bg-white text-left'>
    <q-tab class="text-blue" style='padding:.2em' icon="photo_camera" @click='galeria(2)' />
    <q-tab class="text-orange-8" style='padding:.2em' icon="photo" @click='galeria(1)' />
    <q-tab class="text-grey-8" style='padding:.2em' icon="attachment" @click='galeria(4)' />
    <q-tab class="text-black" style='padding:.2em' icon="gif" @click='galeria(5)' />
    <q-tab class="text-grey-8" style='padding:.2em' icon="close" v-close-popup />
  </q-tabs>
</template>

<script>
	
</script>