<template >
    <div class="container">
        <h1>editar usuario {{this.$route.params.book}}</h1>
    <div class="row">
    <div class="col-12 mt-3">
    <b-form-input v-model="nome"  placeholder="nome"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="categoria"  placeholder="categoria"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="codigo"   placeholder="codigo"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="autor"  placeholder="autor"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="ebook"  placeholder="ebook"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="tamanhoDoArquivo"  placeholder="tamanhoDoArquivo"></b-form-input>
    </div>
    <div class="col-12 mt-3">
    <b-form-input v-model="peso"  placeholder="peso"></b-form-input>
    </div>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
         <button @click="update" class="btn btn-success btn-block">Salvar</button>
        <button @click="excluir" class="btn btn-danger btn-block">excluir</button>
        <div v-if="excluido" class="alert alert-success">
            <p>Excluido com sucesso..</p>

        </div>


      </div>
    </div>
    
    </div>
</template> 
<script>     
export default {
    data(){
    return{
      
      nome:'',
      categoria:'',
      codigo:'',
      autor:'',
      ebook:'',
      tamanhoDoArquivo:'',
      peso:'',
      excluido:false,
    };
    
  },
  methods:{
    getbook(){
        this.$http.get(`editar/${this.$route.params.book}`).then((response)=>{
            this.nome = response.data.nome
            this.categoria = response.data.categoria
            this.codigo = response.data.codigo
            this.autor = response.data.autor
            this.ebook = response.data.ebook
            this.tamanhoDoArquivo = response.data.tamanhoDoArquivo
            this.peso = response.data.peso
        })
    },
    update() {
         var data ={nome:this.nome,categoria:this.categoria,codigo:this.codigo,autor:this.autor,ebook:this.ebook,tamanhoDoArquivo:this.tamanhoDoArquivo,peso:this.peso}
        this.$http.put(`update/${this.$route.params.book}`,data).then((response)=>{
            setTimeout(()=>{
                    this.$router.push('/admin')
                },1000)
            console.log(response)
        })
    },
    excluir(){
          this.$http.delete(`delete/${this.$route.params.book}`).then((response)=>{
            if(response.data == 'success'){
                this.excluido = true;
                setTimeout(()=>{
                    this.$router.push('/admin')
                },1000)

                
            }
        })
    },
  },
  created(){
    this.getbook()
  }
    
}
</script>
<style lang="">
    
</style>