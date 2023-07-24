<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\TestController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProductsController;

Route::get('/', [PagesController::class, 'show'])->name('pages.show');

Route::get('/{locale}/products', [ProductsController::class, 'index'])->name('products');

if (! Request::is(config('statamic.cp.route'))) {
    Route::get('/pages/{slug}', [PagesController::class, 'show'])->name('pages.show');
}
