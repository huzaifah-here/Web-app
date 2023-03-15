<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// use Tymon\JWTAuth\Fascades\JWTAuth;
// use Tymon\JWTAuth\Exception\JWTException;
//use Illuminate\Support\Facades\App;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\Employee;
use App\Models\User;
class EmployeeController extends Controller
{
    public function getEmployee(){
        //return Employee::all();
        return response()->json(Employee::all());
    }

    public function addEmployee(Request $request) {
        //$requestData = $request->all();
        //$requestData['hobbies'] = json_encode($requestData['hobbies']);
        //$requestData['password'] = Hash::make($requestData['password']);
        //$employee = Employee::where ('email', $request['email'])->first();
        // $employee = new Employee();
        // $employee->name = $request->name;
        // $employee->email = $request->email;
        // $employee->age = $request->age;
        // $employee->gender = $request->gender;
        // $employee->number = $request->number;
        // $employee->hobbies = json_encode($request->hobbies);
        // dd($employee);
        // $newEmployee = $employee->save();
        // dd($requestData);
        try{
            $employee = Employee::create([
                'name' => $request->input(('name')),
                'email' => $request->input(('email')),
                'age' => $request->input(('age')),
                'gender' => $request->input(('gender')),
                'number' => $request->input(('number')),
                'hobbies' => json_encode($request->input(('hobbies')))
            ]);

            $user = User::create([
                'name' => $request->input(('name')),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
        } catch (\Exception $e) {
            // log the error message
            Log::error('Error while saving record: ' . $e->getMessage());
            // return a response indicating that the record could not be saved
            return response()->json(['error' => 'Record could not be saved'], 500);
        Auth::login($user);
        return response()->json(['data' => $employee->id], 201);
        // return response($employee, 201);
        }
    }

    public function getUserById($id){
        //$requestData = ;
        $employee = Employee::findOrFail($id);
        //print_r($id);
        return response()->json($employee);

    }
    public function deleteEmployee($id) {
        $record = Employee::find($id);
        $record->delete();
      
        return response()->json([
          'message' => 'Record deleted successfully'
        ], 200);
      }
      
    public function updateEmployee(Request $request, $id) {
        
        //dd($id,$request->all());
        //$data = $request->all();
        $employee = Employee::findOrFail($id);
        if ($employee) {
            $employee->update($request->all());
            return response()->json(['message' => 'Employee updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Employee not found'], 404);
        }
        //return response()->json(['message' => 'Hello, world!',$employee[0]], 200);
        
        // Validate the incoming data here
        // $data['hobbies'] = json_encode($data['hobbies']);
        // $myData = Employee::findOrFail($id);
        // $myData->update($data);
        
        
        return response()->json(['message' => 'Data updated successfully',200]);
        
    }
    
    public function getEmpByToken(Request $request)
    {
        $user = $request->user();
        $employee = Employee::where('id', $user->id)->first();
        return response()->json($employee);
    }

    public function editEmpByToken(Request $request) {
        
        //dd($id,$request->all());
        //$data = $request->all();
        $user = auth()->user();
        $employee = Employee::findOrFail($user->id);
        if ($employee) {
            $employee->update($request->all());
            return response()->json(['message' => 'Employee updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        
        return response()->json(['message' => 'Data updated successfully',200]);
        
    }



}
