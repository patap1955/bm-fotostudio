@extends('master')
@section('title', 'Аренда фотостудии в Москве в стиле Pinterest')
@section('description', 'BM — новая фотостудия в стиле Pinterest.Стильный минималистичный интерьер и разнообразный реквизит, который постоянно пополняется. Новая циклорама. Зал идеально подходит для всех видов съемки: как для себя, так и для брендов.')
@section('css')
@endsection

@section('content')
    @include('pages.main.sections.about')
    @include('pages.main.sections.fotozone')
    @include('pages.main.sections.price')
    @include('pages.main.sections.contacts')
@endsection

@section('script')
@endsection
