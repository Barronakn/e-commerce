<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Cv;
use App\Models\Variant;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        // Récupérer tous les éléments du panier pour la session en cours avec leurs relations Cv et Variant
        $cartItems = CartItem::where('session_id', session()->getId())->with('cv', 'variant')->get();

        // Initialiser un tableau pour stocker les produits uniques
        $products = [];
        // Parcourir chaque élément du panier
        foreach ($cartItems as $key => $cvItem) {
            $products[$key] = array_merge(
                $cvItem->toArray(), // Extrait attributes du model CV
                [
                    'variants' => isset($variants[$key]) ? $cartItems->variant->toArray() : [], // Ajout de l'array variant s'il existe
                ]
            );
        }

        $cvs = Cv::all();
        $variants = Variant::all();

        $productcvs = [];
        foreach ($cvs as $key => $cvItem) {
            $productcvs[$key] = array_merge(
                $cvItem->toArray(), // Extrait attributes du model CV
                [
                    'variants' => isset($variants[$key]) ? $variants[$key]->toArray() : [], // Ajout de l'array variant s'il existe
                ]
            );
        }

        // Calculer le prix total du panier
        $totalNewPrice = 0;
        $totalOldPrice = 0;
        foreach ($products as $product) {
            $totalNewPrice += $product['cv']['newprice'];
            $totalOldPrice += $product['cv']['oldprice'];
        }

        $items = CartItem::all();
        return Inertia::render('Cart', [
            'products' => array_values($products), // Convertir le tableau associatif en tableau indexé
            'totalNewPrice' => $totalNewPrice,
            'totalOldPrice' => $totalOldPrice,
            'productcvs' => $productcvs,
            'items' => $items
        ]);
    }



    public function add($id)
    {
        $product = Cv::findOrFail($id);
        $variant = Variant::findOrFail($id);

        // Vérifier si le produit existe déjà dans le panier
        $existingCartItem = CartItem::where('cv_id', $product->id)
            ->where('variant_id', $variant->id)
            ->where('session_id', session()->getId())
            ->first();

        if (!$existingCartItem) {
            // Ajouter un nouveau produit dans le panier
            $cartItem = new CartItem();
            $cartItem->cv_id = $product->id;
            $cartItem->variant_id = $variant->id;
            $cartItem->session_id = session()->getId();
            $cartItem->save();
        }

        return redirect()->route('accueil')->with('success', 'Le produit a été ajouté au panier.');
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
        $cartItem = CartItem::find($id);
        $cartItem->delete();

        return redirect()->route('cart');
    }
}
