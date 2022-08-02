<?php

use App\Http\Controllers\ebooksController;
use App\Http\Controllers\pessoaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/lista',[ebooksController::class,'listagem']);
Route::post('/adicionar',[ebooksController::class,'adicionar']);
Route::get('/editar/{id}',[ebooksController::class,'editar']);
Route::put('/update/{id}',[ebooksController::class,'update']);
Route::delete('/delete/{id}',[ebooksController::class,'delete']);
Route::post('/add',[pessoaController::class,'adicionar']);
