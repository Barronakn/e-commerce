<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV Pro</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('assets/css/tailwind.output.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/Chart.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/Chart.min.css') }}">

    {{-- TinyMCE --}}
    <script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js"></script>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            ClassicEditor
                .create(document.querySelector('#about'))
                .catch(error => {
                    console.error(error);
                });

            ClassicEditor
                .create(document.querySelector('#foryou'))
                .catch(error => {
                    console.error(error);
                });
        });
    </script>

</head>

<body>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
        <!-- Desktop sidebar -->
        @include('includes.desktop-sidebar')

        <!-- Mobile sidebar -->
        @include('includes.mobile-sidebar')

        <div class="flex flex-col flex-1 w-full">
            @include('includes.header')
            <main class="main h-full overflow-y-auto">
                @yield('content')
            </main>
        </div>
    </div>

    <script src="{{ asset('assets/js/alpine.min.js') }}" defer></script>
    <script src="{{ asset('assets/js/Chart.min.js') }}" defer></script>
    <script src="{{ asset('assets/js/init-alpine.js') }}"></script>
    <script src="{{ asset('assets/js/charts-lines.js') }}" defer></script>
    <script src="{{ asset('assets/js/charts-pie.js') }}" defer></script>
</body>

</html>
