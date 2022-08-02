<?php

namespace App\Http\Controllers;

use App\Models\Ebook;
use Illuminate\Http\Request;

class ebooksController extends Controller
{
    public function listagem(Request $request)
    {
     $listEbooks = Ebook::all();
     return response()->json($listEbooks);
    }
    public function adicionar(Request $request)
    {
        $newEbooks = new Ebook();
        $newEbooks->nome = $request->nome;
        $newEbooks->categoria = $request->categoria;
        $newEbooks->codigo = $request->codigo;
        $newEbooks->autor = $request->autor;
        $newEbooks->ebook = $request->ebook;
        $newEbooks->tamanhoDoArquivo = $request->tamanhoDoArquivo;
        $newEbooks->pessoa_id = $request->pessoa;
        $newEbooks->peso = $request->peso;
        $newEbooks->save();
        return response()->json('success');


    }
    public function editar(Ebook $id , Request $request)
    {
        
        return response()->json($id);
    }
    public function update(Ebook $id , Request $request)
    {
        $id->nome = $request->nome;
        $id->categoria = $request->categoria;
        $id->codigo = $request->codigo;
        $id->autor = $request->autor;
        $id->ebook = $request->ebook;
        $id->tamanhoDoArquivo = $request->tamanhoDoArquivo;
        $id->peso = $request->peso;
        $id->save();
        return response()->json('success');
    }
    public function delete(Ebook $id , Request $request)
    {
        $id->delete();
        
        return response()->json('success');
    }
}
