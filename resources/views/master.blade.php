<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @include('layouts.head')
    <body>
        @include('layouts.header')
        @yield('content')
        @include('layouts.footer')
        @include('layouts.modal-form')
        <script src="{{ mix('/assets/js/main.js') }}"></script>
        @yield("scripts")
    </body>
</html>

