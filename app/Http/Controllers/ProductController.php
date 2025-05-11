<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Product;


class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::select('id', 'name', 'description', 'price')->get();

        return Inertia::render('Products', [
            'products' => $products,
        ]);
    }
}
