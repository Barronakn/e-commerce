<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarteController extends Controller
{
    public function index()
    {
        $cartItems = CartItem::where('user_id', auth()->id())->with('product')->get();
        $totalPrice = $cartItems->sum(function ($item) {
            return $item->product->price * $item->quantity;
        });

        return Inertia::render('Users/Cart', [
            'cartItems' => $cartItems,
            'totalPrice' => $totalPrice,
        ]);
    }



    public function add(Request $request, $id)
    {
        $product = Products::findOrFail($id);

        $quantity = $request->input('quantity', 1);

        $cartItem = new CartItem();
        $cartItem->product_id = $product->id;
        $cartItem->user_id = auth()->id();
        $cartItem->quantity = $quantity;

        $cartItem->save();

        return redirect()->route('shops')->with('success', 'Le produit a été ajouté au panier.');
    }

    public function decreaseQuantity($cartItemId)
    {
        $cartItem = CartItem::findOrFail($cartItemId);

        if ($cartItem->quantity > 1) {
            $cartItem->decrement('quantity');
        } else {
            $cartItem->delete();
        }

        return redirect()->route('cart.index');
    }

    public function remove($id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();

        return redirect()->route('cart');
    }

    public function calculateTotalPrice($cartItems)
    {
        $totalPrice = 0;

        foreach ($cartItems as $cartItem) {
            $totalPrice += $cartItem->product->price * $cartItem->quantity;
        }

        return $totalPrice;
    }
}
