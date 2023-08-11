<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Products;

class DashboardController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return view("admin.index", [
            "products" => $products
        ]);
    }
}
