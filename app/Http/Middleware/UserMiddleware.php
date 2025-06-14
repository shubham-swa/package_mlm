<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() &&
            (Auth::user()->hasRole('admin') || Auth::user()->hasRole('user'))) {
                $request->route()->setParameter('userid', Auth::user()->id);
            return $next($request);
        }

        return redirect()->route('login')->with('error', 'Please Login First!');
    }
}
