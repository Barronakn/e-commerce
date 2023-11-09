@extends('layouts.admin')

@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Product
        </h2>

        <div class="flex flex-col md:flex-row items-center w-full justify-around py-10">
            @if ($product->image_path)
                <div class="md:w-1/3">
                    <img style="width: 400px; height: 450px" class="bg-white p-5" src="{{ $product->image_path }}"
                        alt="{{ $product->image_path }}">
                </div>
            @else
                <p class="text-center">Aucune image disponible</p>
            @endif

            <div class="pl-20 md:w-2/3 md:pl-10">
                <div class="flex justify-center items-center">
                    <p class="font-bold mb-3"> {{ $product->name }}</p>
                </div>
                <div style="margin: 15px 0" class="flex items-center">
                    <span class="underline pr-10">Description : </span>
                    <p> {{ $product->description }}</p>
                </div>
                <div class="flex items-center">
                    <span style="margin-right: 90px" class="underline">Price : </span>
                    <p> {{ $product->price }} FCFA</p>
                </div>
            </div>
        </div>
    @endsection
