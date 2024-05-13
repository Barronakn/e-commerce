<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AideController;
use App\Http\Controllers\Auth\LoginAdminController;
use App\Http\Controllers\AvisController;
use App\Http\Controllers\DesignController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SurMesureController;
use App\Http\Controllers\TestimonialsController;
use App\Http\Controllers\ModelesController;
use App\Http\Controllers\ModerneController;
use App\Http\Controllers\SansPhotoController;
use App\Http\Controllers\Users\CartController;
use App\Http\Controllers\Users\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Users
|
*/


Route::get('/', [HomeController::class, "index"])->name('accueil');
Route::get('/detailscv/{id}', [ProductController::class, 'showCv'])->name('details');
Route::post('/avis', [AvisController::class, 'store']);
Route::get('/avis', [AvisController::class, 'index'])->name("avis");
Route::get('/avisettemoignages', [TestimonialsController::class, 'index']);
Route::get('/cvsurmesure', [SurMesureController::class, 'index']);
Route::get('/aide', [AideController::class, 'index']);
Route::get('/cvmodernes', [ModerneController::class, "index"]);
Route::get('/cvdesign', [DesignController::class, "index"]);
Route::get('/cvsansphoto', [SansPhotoController::class, "index"]);
Route::get('/cv_professionnel-cv_word-cv_powerPoint-cv_junior-cv_simples-cv_senior-cv_ modernes-cv-sur_deux_pages', [ModelesController::class, "index"])->name('modeles');

Route::get('/cart', [CartController::class, 'index'])->name('cart');
Route::get('/cart/add/{id}', [CartController::class, 'add'])->name('cart.add');
Route::get('/cart/decrease-quantity/{cartItemId}', [CartController::class, 'decreaseQuantity'])->name('cart.decreaseQuantity');
Route::delete('/cart/remove/{cartItemId}', [CartController::class, 'remove'])->name('cart.remove');
Route::get('/send-mails', [MailController::class, 'sendmails'])->name('sendmails');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Admins
|
*/
//dashboard routes
Route::group(['middleware' => ['auth', 'role:admin'], 'prefix' => 'cv', 'as' => 'admin.'], function () {

    Route::get('/', [DashboardController::class, "index"])->name('home');

    Route::get('/admin/create', [DashboardController::class, 'create'])->name("create");

    Route::post('/admin/create', [DashboardController::class, 'store'])->name("create");

    Route::get('/admin/show/{id}', [DashboardController::class, 'show']);

    Route::get('/admin/edit/{id}', [DashboardController::class, 'edit']);

    Route::put('/admin/edit/{id}', [DashboardController::class, 'update'])->name("cv.update");

    Route::delete('/admin/delete/{id}', [DashboardController::class, 'destroy']);

    Route::post('/admin/logout', [LoginAdminController::class, 'destroy'])->name('logout');

});


require __DIR__ . '/auth.php';
