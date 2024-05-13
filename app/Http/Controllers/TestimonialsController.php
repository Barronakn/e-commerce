<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialsController extends Controller
{
    public function index() {
        $items = CartItem::all();
        return Inertia::render("Testimonials", compact('items'));
    }
}
