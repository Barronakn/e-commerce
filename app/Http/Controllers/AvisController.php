<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AvisController extends Controller
{
    public function index()
    {
        return Inertia::render("Avis");
    }

    public function store(Request $request)
    {
        $request->validate([
            'cv_modeles' => 'required|exists:cvs,modeles',
            'client_username' => 'required|string|max:255',
            'client_profession' => 'required|string|max:255',
            'avislong' => 'required|string',
            'aviscourt' => 'required|string',
            'stars' => 'required|integer|min:1|max:5',
        ]);

        Avis::create($request->all());

        return redirect()->route('avis')->with('success', 'Avis enregistré avec succès!');
    }
}
