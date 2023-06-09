<?php

namespace App\Http\Controllers;

use App\Mail\ContactsForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PageController extends Controller
{
    public function index() {
        return view('pages.main.index');
    }

    public function politics() {
        return view('pages.politics.index');
    }

    public function formContacts(Request $request)
    {
        $mail = new \stdClass();
        $mail->name = $request->name;
        $mail->phone = $request->phone;
        //mia.sydykova@gmail.com
        if (Mail::to('mia.sydykova@gmail.com')->send(new ContactsForm($mail))) {
            return response()->json($request);
        } else {
            return response()->json(["answer" => "error"]);
        }
    }
}
