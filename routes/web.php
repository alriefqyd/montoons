<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

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

Route::redirect('/','/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->group(function(){
    route::get('/login',function(){
        return Inertia::render('Prototype/Login');
    })->name('prototype.login');
    route::get('/register',function (){
        return Inertia::render('Prototype/Register');
    })->name('prototype.register');
    route::get('/dashboard',function (){
        return Inertia::render('Prototype/Dashboard');
    })->name('prototype.dashboard');
});

require __DIR__.'/auth.php';
