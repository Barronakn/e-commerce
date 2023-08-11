<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admins;
use App\Models\Users;
use Illuminate\Foundation\Auth\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginAdminController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.login');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {

            return redirect()->route("admin.home");
        } else {
            //     Authentification échouée
            return back()->withErrors(['email' => 'Identifiants invalides. Veuillez réessayer.']);
        }

    }

    public function destroy()
    {
        Auth::logout();

        return redirect('/admin/login');
    }
}
