<template>
  <div class="dashboard">
    <div class="text-center">
      <h1>Bem vindo ao seu perfil {{ user.username }}</h1>
    </div>
    <div class="container" v-for="(item, index) in users" :key="item.username">
      <div v-if="user.username == item.username">
        <div class="row">
          <div class="col-12 mt-3">
            <b-form-input v-model="index" placeholder="index"></b-form-input>
          </div>
          <div class="col-12 mt-3">
            <b-form-input v-model="nome" placeholder="nome"></b-form-input>
          </div>
          <div class="col-12 mt-3">
            <b-form-input
              v-model="dataDeNascimento"
              placeholder="dataDeNascimento"
            ></b-form-input>
          </div>
          <div class="col-12 mt-3">
            <b-form-input v-model="sexo" placeholder="sexo"></b-form-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-3">
            <button @click="adduser" class="btn btn-success btn-block">
              Salvar
            </button>
            <div v-if="excluido" class="alert alert-success">
              <p>Excluido com sucesso..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      users: [],
      nome: '',
      dataDeNascimento: '',
      sexo: '',
      index: '',
    };
  },
  methods: {
    adduser() {
      var data = {
        nome: this.nome,
        dataDeNascimento: this.dataDeNascimento,
        sexo: this.sexo,
        index: this.index,
      };
      this.$http.post('/add', data).then(response => {
        console.log(response);
      });
      this.listagem.push(data);
      this.nome = '';
      this.dataDeNascimento = '';
      this.sexo = '';
      this.index = '';
    },
  },
  mounted() {
    if (localStorage.activeUser) {
      let lsUsers = localStorage.users;
      this.users = JSON.parse(lsUsers);
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
};
</script>

<style></style>
