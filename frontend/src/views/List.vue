<template>
  <div class="container">
    <h1>listagem de livros</h1>
    <b-button v-b-modal.modal-1>Adicionar livros</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <div>
        <div>
          <div class="row">
            <div class="col-12 mt-3">
              <b-form-input v-model="nome" placeholder="nome"></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input
                v-model="categoria"
                placeholder="categoria"
              ></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input
                v-model="codigo"
                placeholder="codigo"
              ></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input v-model="autor" placeholder="autor"></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input v-model="ebook" placeholder="ebook"></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input
                v-model="tamanhoDoArquivo"
                placeholder="tamanhoDoArquivo"
              ></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input v-model="peso" placeholder="peso"></b-form-input>
            </div>
            <div class="col-12 mt-3">
              <b-form-input v-model="index" placeholder="index"></b-form-input>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-3">
              <button @click="addebook" class="btn btn-success btn-block">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">nome</th>
          <th scope="col">categoria</th>
          <th scope="col">codigo</th>
          <th scope="col">Autor</th>
          <th scope="col">Ebook</th>
          <th scope="col">tamanho do Arquivo</th>
          <th scope="col">peso</th>
          <th scope="col">id pessoa</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ebook in listagem" ::key="ebook.id">
          <th scope="row">{{ ebook.id }}</th>
          <td>{{ ebook.nome }}</td>
          <td>{{ ebook.categoria }}</td>
          <td>{{ ebook.codigo }}</td>
          <td>{{ ebook.autor }}</td>
          <td>{{ ebook.ebook }}</td>
          <td>{{ ebook.tamanhoDoArquivo }}</td>
          <td>{{ ebook.peso }}</td>
          <td>{{ ebook.pessoa_id }}</td>
          <router-link :to="{ name: 'edit', params: { book: ebook.id } }">
            <button type="button" class="btn btn-outline-primary">
              editar
            </button>
          </router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listagem: [],
      nome: '',
      categoria: '',
      codigo: '',
      autor: '',
      ebook: '',
      tamanhoDoArquivo: '',
      peso: '',
      index: '',
    };
  },
  methods: {
    adicionarlistagem() {},
    addebook() {
      var data = {
        nome: this.nome,
        categoria: this.categoria,
        codigo: this.codigo,
        autor: this.autor,
        ebook: this.ebook,
        tamanhoDoArquivo: this.tamanhoDoArquivo,
        peso: this.peso,
        index: this.index,
      };
      this.$http.post('/adicionar', data).then(response => {
        console.log(response);
      });
      this.listagem.push(data);
      this.nome = '';
      this.categoria = '';
      this.codigo = '';
      this.autor = '';
      this.ebook = '';
      this.tamanhoDoArquivo = '';
      this.peso = '';
      this.index = '';
    },
    getListagem() {
      this.$http.get('lista').then(response => {
        this.listagem = response.data;
      });
    },
  },
  created() {
    this.getListagem();
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
<style lang=""></style>
