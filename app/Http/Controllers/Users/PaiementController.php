<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaiementController extends Controller
{
    public function index()
    {
        return Inertia::render('formulaire-paiement');
    }

    public function processPayment(Request $request)
    {
        // Logique de traitement du paiement
    }
}
