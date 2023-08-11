<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }


    public function login(Request $request)
    {
        // Validation des données du formulaire de connexion
        $request->validate([
            'email' => 'Required|email',
            'password' => 'Required',
        ]);

        // Tenter de connecter l'utilisateur
        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            // Authentification réussie
            return redirect()->route('accueil')->with('success', 'Connexion réussie.');
        } else {
            // Authentification échouée
            return back()->withErrors(['email' => 'Identifiants invalides. Veuillez réessayer.']);
        }
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route("login_users")->with('success', 'Déconnexion réussie.');
    }
}
