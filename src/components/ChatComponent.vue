<template>
  <div class="chat-window">
    <div class="chat-header bg-grey-10 text-white">
      <div class="contact-details">
        <img :src="selectedContact.avatar" />
        <h4>{{ selectedContact.name }}</h4>
      </div>
    </div>
    <div
    class="q-pa-md row justify-center bg-grey-9"
    style="height: 100%;"
    >
      <q-chat-message label="Hoje" class="text-grey-1"/>
      <div v-for="message in messages" :key="message.id" class="chat-message q-pa-md">
        <q-chat-message
        v-if="message.sender === 'me'"
        :text="[message.text]"
        sent
        stamp="4 minutes ago"
        bg-color="green-10"
        text-color="grey-1"
        />
        <q-chat-message
        v-else
        :text="[message.text]"
        stamp="4 minutes ago"
        bg-color="grey-10"
        text-color="grey-1"
        />
      </div>
    </div>
    <div class="chat-input bg-grey-10 text-white">
      <q-input
      placeholder="Digite uma mensagem"
      v-model="newMessage"
      style="width: 100%;"
      dense
      outlined
      dark
      bg-color="grey-9"
      color="grey-1"
      />
      <q-btn
      style="margin-left: 10px;"
      padding="xs lg"
      color="teal-9"
      icon="send"
      size="xs"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatComponent",
  data () {
    return {
      selectedContact: {
        id: 1,
        avatar: "../assets/logo.png",
        name: "Pedro Damiani",
      },
      messages: [
        {
          id: 1,
          text: "Bom dia!",
          sender: "Pedro",
          time: "09:07 am",
        },
        {
          id: 2,
          text: "Bom dia, tu é gay?",
          sender: "me",
          time: "09:08 am",
        },
        {
          id: 3,
          text: "Sim",
          sender: "Pedro",
          time: "09:10 am",
        },
        {
          id: 4,
          text: "Eu sabia",
          sender: "me",
          time: "09:30 am",
        },
      ],
      newMessage: "",
    };
  },
  methods: {
    // 
  },
};
</script>
<style scoped>
.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid teal;
}
.contact-details {
  display: flex;
  align-items: center;
}
.contact-details img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.chat-message {
  width: 100%;
}
.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid teal;
}
</style>