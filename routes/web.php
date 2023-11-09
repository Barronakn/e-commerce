<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\StatisticsController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginAdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Users\CarteController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Users\CompteController;
use App\Http\Controllers\Users\ContactController;
use App\Http\Controllers\Users\PaiementController;
use App\Http\Controllers\Users\ProductController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Users
|
*/

Route::get('/', [HomeController::class, "index"])->name('home');
Route::get('/register', [RegisterController::class, "index"])->name('register_users');
Route::post('/register', [RegisterController::class, "register"]);
Route::get('/login', [LoginController::class, "index"])->name('login_users');
Route::post('/login', [LoginController::class, "login"]);
Route::match(['get', 'post'], '/logout', [LoginController::class, 'logout']);
Route::get('/forgot', [ForgotPasswordController::class, "forgot"])->name('forgot');
Route::get('/forgot-password', [ForgotPasswordController::class, "index"])->name('password_request');
Route::post('/forgot-password', [ForgotPasswordController::class, "sendResetLinkEmail"])->name('password_email');
Route::get('/reset-password/{token}', [ResetPasswordController::class, "index"])->name('password_reset');
Route::post('/reset-password', [ResetPasswordController::class, "reset"])->name('password_update');


Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/accueil', [HomeController::class, "userHome"])->name('accueil');
    Route::get('/shops', [ProductController::class, "indexUser"])->name('shops');
    Route::get('/shop/{id}', [ProductController::class, 'showUser'])->name('shop');
    Route::get('/cart', [CarteController::class, 'index'])->name('cart');
    Route::post('/cart/add/{id}', [CarteController::class, 'add'])->name('cart.add');
    Route::get('/cart/decrease-quantity/{cartItemId}', [CarteController::class, 'decreaseQuantity'])->name('cart.decreaseQuantity');
    Route::delete('/cart/remove/{cartItemId}', [CarteController::class, 'remove'])->name('cart.remove');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact');
    Route::post('/contact', [ContactController::class, 'submit']);
    Route::get('/compte', [CompteController::class, 'index'])->name('compte');
    Route::get('/formulaire/paiement', [PaiementController::class, 'index'])->name('formulaire-paiement');
    Route::post('/payment/process', [PaiementController::class, 'processPayment'])->name("payment.process");
});

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Admins
|
*/
//dashboard routes
Route::group(['middleware' => ['auth', 'role:admin'], 'prefix' => 'products', 'as' => 'admin.'], function () {

    Route::get('/', [ProductController::class, "index"])->name('home');

    Route::get('/admin/create', [ProductController::class, 'create']);

    Route::post('/admin/create', [ProductController::class, 'store'])->name("create");

    Route::get('/admin/show/{id}', [ProductController::class, 'show']);

    Route::get('/admin/edit/{id}', [ProductController::class, 'edit']);

    Route::put('/admin/edit/{id}', [ProductController::class, 'update'])->name("produit.update");

    Route::delete('/admin/delete/{id}', [ProductController::class, 'destroy']);

    Route::post('/admin/logout', [LoginAdminController::class, 'destroy'])->name('logout');
});


Route::middleware("auth")->group(function () {
    Route::get("/admin/settings", [SettingsController::class, "index"]);
    Route::get("/admin/statistics", [StatisticsController::class, "index"]);
});


require __DIR__ . '/auth.php';
