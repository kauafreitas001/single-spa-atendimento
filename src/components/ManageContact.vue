<template>
  <q-dialog v-model="showDialog">
    <q-card class="bg-grey-10" style="width: 700px; max-width: 80vw;">
      <q-card-title class="text-white">
        <q-toolbar >
          <q-toolbar-title>Novo Contato</q-toolbar-title>
        </q-toolbar>
      </q-card-title>
      <q-card-section class="row items-center q-gutter-sm">
        <q-input
        placeholder="Nome do contato"
        v-model="search"
        dense
        outlined
        dark
        bg-color="grey-9"
        color="teal"
        class="col"
        ></q-input>
        <q-input
        placeholder="Numero de contato"
        v-model="search"
        dense
        outlined
        dark
        bg-color="grey-9"
        color="teal"
        class="col"
        ></q-input>
      </q-card-section>
      <q-card-actions align="right" class="text-teal">
        <q-btn flat label="Adicionar" />
        <q-btn flat label="Fechar" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: { showDialog: Boolean },
  methods: {
    closeDialog () {
      this.$emit( 'closeDialog' );
    },
  }
}
</script>