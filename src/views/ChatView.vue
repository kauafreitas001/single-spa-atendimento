<template>
  <div class="home">
    <contact
    v-if="!isMobile && showContact"
    :showBack="true"
    @backPage="showContact = false"
    class="sidebar"
    />
    <ticket
    v-else-if="!isMobile && !showContact"
    @newChat="showContact = true"
    class="sidebar"
    />
    <chat
    v-if="!isMobile"
    class="chat"
    />
    <component
    v-if="isMobile"
    :is="currentComponent"
    :showBack="true"
    @backPage="handleBack"
    @newChat="handleNewChat"
    class="mobile"
    />
  </div>
</template>
<script>
import Contact from "@/components/Contacts.vue";
import Ticket from "@/components/TicketsComponent.vue";
import Chat from "@/components/ChatComponent.vue";
import { ref } from "vue";
export default {
  name: "ChatView",
  components: {
    Contact,
    Ticket,
    Chat
  },
  data () {
    return {
      showContact: false,
      currentComponent: 'Ticket',
    }
  },
  computed: {
    isMobile () {
      localStorage.setItem( "mobile", this.$q.screen.lt.md );
      return this.$q.screen.lt.md;
    }
  },
  methods: {
    handleBack () {
      this.currentComponent = 'Ticket';
    },
    handleNewChat () {
      this.currentComponent = 'Contact';
    },
  },
};
</script>
<style>
.home {
  display: flex;
  height: calc(100dvh - 60px);
}
.sidebar {
  border-radius: 10px 0 0 10px;
  border-right: 1px solid teal;
  width: 23dvw;
  max-width: 500px;
  min-width: 400px;
}
.chat {
  width: 100%;
  border-radius: 0 10px 10px 0; /* Exemplo de border-radius personalizado */
}
.mobile {
  border-radius: 10px;
  width: calc(100dvw - 60px);
}
</style>
