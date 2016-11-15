<html>
    <head>
        <title>Sign up form</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="container">
            <h1>Sign up !</h1>
            <form action="trait.php" method="POST" id="signup-form">
                <div class="form-group">
                    <label for="login">Login</label>
                    <input type="text" class="form-control" id="login" name="login">
                </div>
                <div class="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" class="form-control" id="pwd" name="pwd">
                </div>
                <div class="form-group">
                    <label for="login">Password confirm</label>
                    <input type="password" class="form-control" id="pwd_conf" name="pwd_conf">
                </div>
                <button class="btn btn-success" type="submit" id="signup">Send</button>
            </form>
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>