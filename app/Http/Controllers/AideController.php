<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Inertia\Inertia;

class AideController extends Controller
{
    public function index() {
        $items = CartItem::all();
        return Inertia::render("Aide", compact('items'));
    }
}
