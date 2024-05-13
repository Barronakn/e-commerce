<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurMesureController extends Controller
{
    public function index() {
        $items = CartItem::all();
        return Inertia::render("SurMesure", compact('items'));
    }
}
