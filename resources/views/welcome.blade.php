<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}"> 
        <title>Laravel</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Chivo' rel="stylesheet">
      <style>
          html,body { height: 100%; margin: 0px; padding: 0px; font-family: 'Chivo'; }
          #app { height: 100%;}
      </style>
    <body>
        <div class="flex-center position-ref full-height" style="height:100%;">

                <div id="app">
                <!-- <App></App> -->
                <mainapp/>
                </div>

        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
