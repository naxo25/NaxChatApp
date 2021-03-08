<template>
  <div class="WAL position-relative" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <q-header elevated v-if='userDetails.userId'>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="WAL__drawer-open q-mr-sm"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-btn round flat>
            <q-avatar>
              <img :src="other.img != null ? other.img : noimg">
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ other.name }}
          </span>

          <q-space/>

          <q-btn round flat icon="search" />
          <q-btn round flat>
            <q-icon name="attachment" class="rotate-135" />
          </q-btn>
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section @click='clearMessages'>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="$router.push('/video')">Llamar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-if='userDetails.userId'
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >
        <q-toolbar class="bg-grey-3">

          <q-avatar class="cursor-pointer" style='margin-left: .1em'>
            <q-img :src="userDetails.img != null ? userDetails.img : noimg" />
            <q-menu auto-close :offset="[-35, 8]">
              <lista />
            </q-menu>
          </q-avatar>

            <q-item-label>
                {{ userDetails.name }}
            </q-item-label>

          <q-space />

          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 8]">
              <lista />
            </q-menu>
          </q-btn>

        </q-toolbar>

        <q-toolbar class="bg-grey-2 hidden">
          <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search">
            <template slot="prepend">
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(other, index) in amigos"
              :key="other.userId"
              clickable
              v-ripple
              @click="currentConversationIndex = index, getMessages(index)"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="other.img != null ? other.img : noimg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">
                  {{ other.name }}
                </q-item-label>
                <q-item-label class="other__summary" caption>
                  <q-icon name="check" v-if="other.sent" />
                  <q-icon name="not_interested" v-if="other.deleted" />
                  {{ other.ultChat }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge @click='go(key)'
                  :color="other.online ? 'light-primary-5' : 'grey-4'">
                  {{ other.online ? 'Online' : 'Offline' }}
                </q-badge>
              </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>

        <q-toolbar class="fixed">
          <q-btn 
            flat
            no-caps 
            icon='info' 
            color='primary'
            label='Autor' 
            @click="info = true" 
          />
          <q-btn 
            flat
            no-caps
            icon='add' 
            color="red" 
            label='Agregar amigos'
            @click="AddFriend = true" 
          />
        </q-toolbar>

      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model='perfil'>
      <div class="bg-white" style="padding: 100px">
        <a href='https://nacholabraweb.000webhostapp.com/pwa/#/' style="color: red; text-decoration: none" target="_blank">Cambiar en version movil</a>
      </div>
    </q-dialog>

    <q-dialog v-model="info" transition-show="rotate" transition-hide="rotate">
      <Minfo />
    </q-dialog>

    <q-dialog v-model="AddFriend" position='bottom'>
      <AddFriend />
    </q-dialog>
      
    </q-layout>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'WhatsappLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      message: '',
      currentConversationIndex: 0,
      amigoClick: {},
      info: false,
      AddFriend: false,
      perfil: false,
      watch: false,
      noimg: '',
      quasarlog: 'statics/quasar-logo.svg'
    }
  },
  mounted(){
    this.noimg = this.$store.state.store.noimg;
  },
  components: {
    'component-watch': require('components/misc/component-watch.vue').default,
    'lista': require('components/Web/menu-lista.vue').default,
    'Minfo': require('components/misc/Minfo.vue').default,
    'AddFriend': require('components/Solicitudes/AddFriend.vue').default,
  }, 
  computed: {
      ...mapState('store', ['userDetails']),
      ...mapGetters('store', ['amigos']),
    other () {
      if (this.$store.state.store.otherId != 0) {
        return this.amigos[this.$store.state.store.otherId]
      } else {
        return { img: this.quasarlog }
      }
    },
    click(){
      this.amigoClick = this.other;
      this.watch = true
    },
    style () {
      return {
        height: this.$q.screen.height + 'px'
      }
    }
  },
  methods: {
    ...mapActions('store',['logoutUser', 'clearMessages', 'StopGettingMessages', 'GetMessages']),
    ...mapMutations('store', ['changeOtherId']),
    getMessages(key) {
      //this.StopGettingMessages()
      this.changeOtherId(key);
    }
  },
}
</script>