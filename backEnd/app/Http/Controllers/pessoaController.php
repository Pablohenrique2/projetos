<?php

namespace App\Http\Controllers;

use App\Models\Pessoa;
use Illuminate\Http\Request;

class pessoaController extends Controller
{
    public function adicionar(Request $request)
    {
        $newpessoa = new Pessoa();
        $newpessoa->id = $request->index;
        $newpessoa->nome = $request->nome;
        $newpessoa->idade= $request->dataDeNascimento;
        $newpessoa->sexo = $request->sexo;
        $newpessoa->save();
        return response()->json('success');

    }
}
