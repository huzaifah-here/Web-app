<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
 
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;

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

//Route::get('employees','EmployeeController@getEmployee');
Route::get('/getemployees', [EmployeeController::class, 'getEmployee']);

//addEmployee
Route::post('/addemployees', [EmployeeController::class, 'addEmployee']);

//get user by id
Route::get('/employee/{id}', [EmployeeController::class, 'getUserById']);

//deleteRecord
//Route::delete('employees/{id}', 'EmployeeController@delete');
Route::delete('/employee/{id}', [EmployeeController::class, 'deleteEmployee']);

//updateEmployee
Route::put('/updateemployee/{id}',[EmployeeController::class, 'updateEmployee']);

//login
Route::post('login', [LoginController::class, 'login']);

//Token to show data
Route::get('/profile', [EmployeeController::class,'getEmpByToken'])->middleware('auth:api');
//Route::middleware('auth:api')->get('/employee', 'EmployeeController@getEmployeeData');

Route::put('/edit',[EmployeeController::class, 'editEmpByToken'])->middleware('auth:api');;
