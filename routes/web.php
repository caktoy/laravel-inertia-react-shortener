<?php

use App\Models\Link;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

Route::get('/', function(){
  return Inertia::render('Home', [
    'result' => session()->has('result') ? url('/v'.session('result')) : null,
  ]);
})->name('home');

Route::get('/about', function(){
  return Inertia::render('About');
})->name('about');

Route::post('/generate', function () {
  request()->validate([
    'origin' => 'required|url',
  ], [
    'origin.required' => 'Origin URL harus diisi.',
    'origin.url' => 'Origin URL tidak valid.',
  ]);

  $link = new Link();
  $link->destination = request()->origin;
  $link->source = Str::random(6);
  if (auth()->check()) {
    $link->created_by = auth()->user()->id;
  }
  $link->save();
  
  return redirect()->route('home')->with('result', $link->source);
})->name('generate');

Route::get('/v{source}', function ($source) {
  $link = Link::where('source', $source)->firstOrFail();

  return redirect($link->destination);
})->name('visit');
