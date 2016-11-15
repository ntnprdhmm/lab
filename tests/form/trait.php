<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Sign up trait</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <?php 

            if(isset($_POST['login'])) {
                $e = checkinputs();
                if(sizeof($e)) {
                    echo '<h1>Sign up failed !</h1>';
                    echo '<div>';
                    for($i = 0; $i < sizeof($e); $i++) {
                        echo '<p>'.$e[$i].'</p>';
                    }
                    echo '</div>';
                } else {
                    echo '<h1>Sign up ok !</h1>';
                    echo '<div>';
                    echo '<p>Login : '.$_POST['login'].'</p>';
                    echo '<p>Password : '.$_POST['pwd'].'</p>';
                    echo '</div>';
                }
            } else {
                echo '<h1>Error : </h1>';
                echo '<p>Please go to the <a href="index.php">sign up form</a> before.</p>';
            }

            /**
            *   Check the inputs again
            */
            function checkinputs() {

                $rgx_login = '/^[A-Za-z0-9]{5,30}$/';
                $rgx_pwd = '/^\S{6,}$/';
                $errors = [];

                if(!preg_match($rgx_login, $_POST['login'])) {
                    array_push($errors, 'Login invalid');
                }
                if(!preg_match($rgx_pwd, $_POST['pwd'])) {
                    array_push($errors, 'Password invalid : "'.$_POST['pwd'].'"');
                }
                if($_POST['pwd'] != $_POST['pwd_conf']) {
                    array_push($errors, 'Password and confirmation does not matches : "'.$_POST['pwd'].'" != "'.$_POST['pwd_conf'].'"');
                }
                return $errors;
            }

        ?>
    </div>
</body>
</html>