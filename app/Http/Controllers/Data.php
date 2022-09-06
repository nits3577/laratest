<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Datas;

class Data extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function sendData(Request $request)
    {
        //
        $request = $request->all();
        // echo "<pre>";
        // print_r($request);
        // exit;
        Datas::create($request['datas']);

    }
    

   
    public function gettodos(Request $request){
         $request = $request->all();
        // echo "<pre>";
        //  dd($request['value']);
         if($request['value']){
            // $todos = Datas::where('name Like', $request['value'])->get();
            $todos = Datas::where('name', 'LIKE', '%'.$request['value'].'%')->distinct()->get();
         }else{
            $todos = Datas::all();

         }

        // exit;
        return response()->json($todos, 200);

    }
    
    public function deletedata(Request $request){
       $delete= Datas::where('id',$request->id)->delete();
        return response()->json($delete, 200);
    }
}
