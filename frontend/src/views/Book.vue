<template lang="">
  <div class="container">
    <div class="text-center">
      <h1>listagem dos livros</h1>
    </div>
    <table class="table mt-5">
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
    getListagem() {
      this.$http.get('lista').then(response => {
        this.listagem = response.data;
      });
    },
  },
  created() {
    this.getListagem();
  },
};
</script>
<style></style>
