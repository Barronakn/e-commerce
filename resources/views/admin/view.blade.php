@extends('layouts.admin')

@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            CV
        </h2>

        <div class="flex flex-col md:flex-row items-center w-full justify-around py-10">
            @if ($variant->image_path)
                <div class="md:w-1/3">
                    <img style="width: 400px; height: 450px" class="bg-white p-5" src="{{ asset('../../../'.$variant->image_path) }}"
                        alt={{ $product->modeles }}>
                </div>
            @else
                <p class="text-center">Aucune image disponible</p>
            @endif

            <div class="pl-20 md:w-2/3 md:pl-10">
                <div class="flex justify-center items-center">
                    <p class="font-bold mb-3"> {{ $product->modeles }}</p>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline pr-10">Type de CV : </span>
                    <p> {{ $product->typedecv }}</p>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline pr-10">Prix : </span>
                    <div class="flex flex-row gap-4 justify-center items-center">
                        <p class="text-green-500 text-lg"> {{ $product->newprice }}</p>
                        <p class="text-red-500 text-xl"> {{ $product->oldprice }}</p>
                    </div>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline pr-10">À propos du Modèle : </span>
                    <p> {{ $variant->about  }}</p>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline pr-10">Le Modèle de CV pour vous ? : </span>
                    <p> {{ $variant->foryou }}</p>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline">Couleur : </span>
                    <p> {{ $variant->couleur }}</p>
                </div>
            </div>
        </div>
    @endsection
