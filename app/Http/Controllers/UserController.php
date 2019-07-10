<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(
            [
                'status'=>'Success',
                'users' => $users->toArray()
            ], 200
        );
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);

        return reseponse()->json(
            [
                'status'=>'Success',
                'user'=> $user->toArray()
            ], 200
        );
    }
}
