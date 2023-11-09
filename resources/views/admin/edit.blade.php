@extends('layouts.admin')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Edit Product
        </h2>

        <div class="container">
            <form action="{{ route('admin.produit.update', $product->id) }}" enctype="multipart/form-data" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-4">
                    <label for="name" class="block font-medium dark:text-gray-200">Name:</label>
                    <input type="text" id="name" name="name" value="{{ $product->name }}"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4">
                    <label htmlFor="description" class="block font-medium dark:text-gray-200">Description:</label>
                    <textarea id="description" name="description" class="border border-gray-400 p-2 w-full h-32">{{ $product->description }}</textarea>
                </div>
                <div class="mb-4">
                    <label htmlFor="price" class="block font-medium dark:text-gray-200">Price:</label>
                    <input type="text" id="price" name="price" value="{{ $product->price }}"
                        class="border  border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="name" class="block font-medium">Image:</label>
                    <input type="file" id="image" name="image" value="{{ $product->image_path }}"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <button type="submit"
                    class="bg-purple-500 hover:bg-purple-700 dark:text-gray-200 font-bold py-2 px-4 rounded">Update</button>

            </form>
        </div>
    </div>
@endsection
