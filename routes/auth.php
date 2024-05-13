<?php

use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\LoginAdminController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredAdminController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;


// Route : Admin connexion
Route::get('/admin/register', [RegisteredAdminController::class, 'create'])
    ->name('register');

Route::post('/admin/register', [RegisteredAdminController::class, 'store']);

Route::get('/admin/login', [LoginAdminController::class, 'create'])
    ->name('login');

Route::post('/admin/login', [LoginAdminController::class, 'store'])->name('login_post');

Route::get('/admin/forgot-password', [PasswordResetLinkController::class, 'create'])
    ->name('password.request');

Route::post('/admin/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->name('password.email');

Route::get('/admin/reset-password/{token}', [NewPasswordController::class, 'create'])
    ->name('password.reset');

Route::post('/admin/reset-password', [NewPasswordController::class, 'store'])
    ->name('password.update');

Route::get('/admin/verify-email', [EmailVerificationPromptController::class, '__invoke'])
    ->middleware('auth')
    ->name('verification.notice');

Route::get('/admin/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/admin/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::get('/admin/confirm-password', [ConfirmablePasswordController::class, 'show'])
    ->middleware('auth')
    ->name('password.confirm');

Route::post('/admin/confirm-password', [ConfirmablePasswordController::class, 'store'])
    ->middleware('auth');
