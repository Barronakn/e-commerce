<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;


class ForgotPasswordController extends Controller
{
    // use SendsPasswordResetEmails;

    public function index()
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function forgot()
    {
        return Inertia::render('Auth/StepForgotPass');
    }
}
