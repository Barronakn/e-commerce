@extends('layouts.admin')
@section('content')
<div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Create New Product
    </h2>
    <form action="{{route("admin.create")}}" method="POST" enctype="multipart/form-data" class="max-w-md overflow-auto text-gray-700">
        @csrf
        <div class="mb-4">
            <label for="name" class="block font-medium dark:text-gray-200">Name:</label>
            <input type="text" id="name" name="name" class="border border-gray-400 p-2 w-full" />
        </div>
        <div class="mb-4">
            <label for="description" class="block font-medium  dark:text-gray-200">Description:</label>
            <textarea id="description" name="description" class="border border-gray-400 p-2 w-full h-32"></textarea>
        </div>
        <div class="mb-4">
            <label for="price" class="block  dark:text-gray-200 font-medium">Price:</label>
            <input type="number" id="price" name="price" class="border border-gray-400 p-2 w-full" />
        </div>
        <div class="mb-4  dark:text-gray-200">
            <label for="image" class="block font-medium">Image:</label>
            <input type="file" id="image" name="image" class="border border-gray-400 p-2 w-full" />
        </div>
        <button type="submit" class="bg-purple-500 hover:bg-purple-700  dark:text-gray-200 font-bold py-2 px-4 rounded">Create</button>
    </form>
</div>
@endsection
