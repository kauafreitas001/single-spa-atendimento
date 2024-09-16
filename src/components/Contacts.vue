<template>
  <div class="bg-grey-10 text-white q-pa-md" :style="showBack ? '' : 'border-radius: 10px;'">
    <div class="sidebar-header">
      <h4>Contatos</h4>
      <div>
        <q-btn
        v-if="showBack"
        padding="xs lg"
        color="teal-9"
        icon="arrow_back"
        size="xs"
        @click="backPage()"
        />
        <q-btn
        padding="xs lg"
        color="teal-9"
        icon="add"
        size="xs"
        :style=" showBack ? 'margin-left: 10px;' : ''"
        @click="showDialog = true"
        />
      </div>
    </div>
    <q-input
    placeholder="Pesquisar"
    v-model="search"
    dense
    outlined
    dark
    bg-color="grey-9"
    color="teal"
    style="margin: 10px;"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-list bordered class="bg-grey-10 text-white shadow-2" v-for="(contact, c) in contacts" :key="c">
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img :src="contact.avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator color="grey-9" inset />
    </q-list>
    <manage-contact :showDialog="showDialog" @closeDialog="showDialog = false"/>
  </div>
</template>
<script>
import ManageContact from '@/components/ManageContact.vue';
export default {
  components: { ManageContact },
  props: { showBack: Boolean },
  data () {
    return {
      contacts: [
        {
          id: 1,
          name: "Pedro Damiani",
          avatar: "../assets/logo.png",
        },
        {
          id: 2,
          name: "Emily Freitas",
          avatar: "../assets/logo.png",
        },
      ],
      showDialog: false,
    }
  },
  methods: {
    backPage () {
      this.$emit('backPage');
    }
  }
}
</script>
<style scoped>
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>