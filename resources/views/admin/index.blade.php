@extends('layouts.admin')
@section('content')
          <div class="container px-6 mx-auto grid">
            <h2
              class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Products
            </h2>

            <div>
                <section class="products mx-auto my-0">
                    <div class="container mx-auto">
                            <table class="table-auto w-full border-collapse border">
                                <thead class="dark:text-gray-200">
                                    <tr>
                                        <th class="border p-3">Image</th>
                                        <th class="border p-3">Name</th>
                                        <th class="border p-3">Description</th>
                                        <th class="border p-3">Price</th>
                                        <th class="border p-3" width="280px">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white">
                                    @foreach($products as $product)
                                        <tr>
                                            <td class="border p-3 flex justify-center items-center"><img style="width:100px;" src="{{ $product->image_path }}" alt="product_{{ $product["id"] }}" /></td>
                                            <td class="border p-3 text-center">{{ $product['name'] }}</td>
                                            <td class="border p-3 text-center">{{ $product['description'] }}</td>
                                            <td class="border p-3 text-center">{{ $product['price'] }}</td>
                                            <td class="border p-3">
                                                <div class="flex justify-center items-center">
                                                    <a href="products/admin/show/{{ $product['id'] }}" style="color: green" class="mr-2">View</a>
                                                    <a href="products/admin/edit/{{ $product['id'] }}" style="color: blue" class="mr-2">Edit</a>
                                                    <form action="products/admin/delete/{{ $product['id'] }}"  style="color: red" method="POST" class="block">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="" onclick="return confirm('Voulez-vous vraiment supprimer ce produit ?')">Delete</button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                    </div>
                </section>
            </div>

          </div>
@endsection
