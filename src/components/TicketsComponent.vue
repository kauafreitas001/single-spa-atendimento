<template>
  <div class="bg-grey-10 text-white q-pa-md">
    <div class="sidebar-header">
      <h4>Chats</h4>
      <q-btn
      padding="xs lg"
      color="teal-9"
      icon="add"
      size="xs"
      @click="newChat"
      />
    </div>
    <div class="q-gutter-y-md column">
      <q-input
      placeholder="Pesquisar"
      v-model="search"
      dense
      outlined
      dark
      bg-color="grey-9"
      color="teal"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-select
      v-model="sector"
      label="Setores"
      :options="sectors"
      multiple
      clearable
      dense
      outlined
      dark
      bg-color="grey-9"
      color="teal"
      />
      <div class="q-gutter-xs checkboxes-container">
        <q-checkbox v-model="open" label="Abertos" color="blue" />
        <q-checkbox v-model="pending" label="Pendentes" color="red" />
        <q-checkbox v-model="resolved" label="Resolvidos" color="green" />
      </div>
    </div>
    <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="teal"
    indicator-color="teal"
    align="justify"
    mobile-arrows
    >
      <q-tab name="Chats" label="Chats" />
      <q-tab name="Grupos" label="Grupos" />
      <q-tab name="Bots" label="Bots" />
      <q-tab name="Todos" label="Todos os Chats" />
    </q-tabs>
    <q-list bordered class="bg-grey-10 text-white shadow-2" v-for="( chat, c ) in chats" :key="c">
      <q-item clickable>
        <q-item-section avatar style="position: relative;">
          <q-avatar>
            <img :src="chat.avatar" />
          </q-avatar>
          <q-badge
          v-if="chat.unreadCount > 0"
          floating
          color="teal"
          class="notification-badge"
          >
            {{ chat.unreadCount }}
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ chat.name }}</q-item-label>
          <q-item-label caption class="text-grey">{{ chat.lastMessage }}</q-item-label>
          <q-item-label caption class="text-grey">{{ 'Usuário: ' + chat.user }}</q-item-label>
          <q-item-label caption class="text-grey">{{ 'Setor: ' + chat.sector }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption class="text-grey">{{ '21:33' }}</q-item-label>
          <q-icon name="push_pin" size="16px" />
        </q-item-section>
      </q-item>
      <q-separator color="grey-9" inset />
    </q-list>
  </div>
</template>
<script>
export default {
  name: "TicketsComponent",
  data () {
    return {
      search: "",
      sector: null,
      sectors: [
        { id: 1, label: "Setor 1" },
        { id: 2, label: "Setor 2" },
        { id: 3, label: "Setor 3" },
      ],
      open: true,
      pending: false,
      resolved: false,
      tab: "Chats",
      chats: [
        {
          id: 1,
          avatar: "../assets/logo.png",
          name: "Pedro Damiani",
          lastMessage: "Sou muito gay!",
          user: "Kauã",
          sector: "Administrativo",
          // ultima att
          unreadCount: 3,
        },
        {
          id: 2,
          avatar: "../assets/logo.png",
          name: "Emily Freitas",
          lastMessage: "To maluca!",
          user: "Kauã",
          sector: "Suporte",
          // ultima att
          unreadCount: 1,
        },
      ],
    }
  },
  methods: {
    newChat () {
      this.$emit("newChat");
    },
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
.checkboxes-container {
  display: flex;
  justify-content: space-around; /* space-between, space-evenly */
  align-items: center;
}
.notification-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
}
</style>