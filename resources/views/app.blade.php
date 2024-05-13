<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Caasineuve Actions') }}</title>



    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="content font-sans antialiased">
    @inertia

    <!-- Fedapay -->
    <script src="https://cdn.fedapay.com/checkout.js?v=1.1.7"></script>
</body>

</html>
