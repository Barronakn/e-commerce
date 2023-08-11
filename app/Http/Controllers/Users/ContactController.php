<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Contact');
    }

    public function submit(Request $request)
    {
        // Validation des données du formulaire de contact
        $request->validate([
            'name' => 'Required|string|max:255',
            'email' => 'Required|email|max:255',
            'message' => 'Required|string',
        ]);

        // Création d'un nouvel enregistrement de contact dans la base de données
        $contact = new Contact();
        $contact->name = $request->input('name');
        $contact->email = $request->input('email');
        $contact->message = $request->input('message');
        $contact->save();

        // rediriger l'utilisateur vers la page de contact avec un message de succès
        return redirect()->route('contact')->with('success', 'Votre message a été envoyé avec succès.');
    }
}
