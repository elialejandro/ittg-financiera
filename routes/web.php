<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/clients', 'ClientsController@index')
    ->name('clients.index');
Route::get('/clients/new', 'ClientsController@create')
    ->name('clients.create');
Route::post('/clients', 'ClientsController@store')
    ->name('clients.store');
Route::delete('/clients/{id}', 'ClientsController@destroy')
    ->name('clients.destroy');
