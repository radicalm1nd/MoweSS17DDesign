<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VapeRecipes [Working Title]</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bulma.css">
  <link rel="stylesheet" type="text/css" href="css/landing.css">
</head>
<body>
  <section class="hero is-fullheight is-dark">
  <?php include 'hero.php'; ?>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <figure class="image is-4by3">
              <img src="http://radicalm1nd.de/projects/vape/img/hero_img.jpg" class="promo-img" alt="Description">
            </figure>
          </div>
          <div class="column is-6 is-offset-1">
            <h1 class="title is-1">
              Welcome to Vape Recipes.
            </h1>
            <h2 class="subtitle is-4">
              A project for TH-Köln MoWe WPF.
            </h2>
            <br>
          </div>
        </div>
      </div>
    </div>


    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <a href="#galHead"><img alt="down-arrow" src="img/arrow.png"></a>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <div class="columns section">
  
      <div class="column is-8">
	  <a name="galHead"></a>
        <h2 class="title">Rezepte</h2>
      </div>



    </div>


	<div id="recipes">
      <img alt="Loading..." src="img/loader.gif">
	 </div>

   <script type="text/javascript" src="js/main.js"></script>

     <div class="columns section">
  
      <div class="column is-8">
        <h2 class="title">Premium-Rezepte</h2>
      </div>



    </div>


  <div id="recipes2">
      
  <?php
  session_start();
  if(!isset($_SESSION['userid'])) {
      echo'<div class="content">Bitte zuerst <a href="login.php">einloggen</a> bevor sie die geheimen Rezepte sehen können</div>';
  } else{
  //Abfrage der Nutzer ID vom Login
  $userid = $_SESSION['userid'];
  echo '<img src="img/loader.gif" alt="Loading..."> <div class="content">Erfolgreich eingeloggt. Leider sind zurzeit keine Premium-Rezepte verfügbar.</div>';
}
  ?>
   </div>




</body>
</html>