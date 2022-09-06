<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use app\Http\Controller\Data;
use App\Http\Controllers\Data;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 Route::post("/senddata",[Data::class,'sendData'])->name("sendData");
 Route::post("/deletedata",[Data::class,'deletedata'])->name("deletedata");;
 Route::post("/gettodos",[Data::class,'gettodos'])->name("gettodos");

// Route::post("/sendOptions", [AllData::class, 'sendOptions'])->name('sendOptions');
