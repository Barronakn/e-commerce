<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{
        // use ResetsPasswords;

        protected $redirectTo = '/';

        public function index(Request $request, $token = null)
        {
            return Inertia::render('Auth/ResetPassword', [
                'token' => $token,
                'admin_email' => $request->admin_email,
            ]);
        }
}
