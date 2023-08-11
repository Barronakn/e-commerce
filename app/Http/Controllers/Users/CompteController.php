<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;

use App\Models\Order;
use Inertia\Inertia;

class CompteController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $orders = Order::where('user_id', $user->id)->latest()->get();

        return Inertia::render('Users/Compte', [
            'user' => $user,
            'orders' => $orders,
        ]);
    }
}
