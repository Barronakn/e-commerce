<?php

namespace App\Http\Controllers;

use App\Mail\DownloadMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class MailController extends Controller
{
    public function sendmails () {
        $toMail = 'barronakn@gmail.com';
        $subject = "Mail pour recevoir son cv";
        $message = 'Voici le cv que vous avez téléchargé !';

        $response = Mail::to($toMail)->send(new DownloadMail($message, $subject));

        @dd($response);
    }
}
