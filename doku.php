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
  <section class="hero is-dark">
  <?php include 'hero.php'; ?>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <div class="columns section">
  
      <div class="column is-8">
	  <a name="galHead"></a>
        <div class="title">Dokumentation</div>
        <div class="content">
          <b>Die Projektteilnehmer sind wie folgt:</b>´<br>
<ul>
<li>David Bajon - 11111401</li>
<li>Daniel Spelten - 11115353</li>
<li>Dustin Herzog - 11115227</li>
</ul>
<p>Der gesamte Code ist auf <a href="https://github.com/radicalm1nd/MoweSS17DDesign" target="blank" alt="github">Github</a> zu finden.
<p>
Die folgenden Punkte haben wir wie folgt umgesetzt:
<ol>
<li>Das CSS ist basierend auf dem responsive flex-box Framework "Bulma" entstanden. Die CSS Dateien sind im Ordner "css" und bereits minified. Unsere Änderungen sind alle in der <a href="https://github.com/radicalm1nd/MoweSS17DDesign/blob/master/css/landing.css" target="_blank">landing.css</a>.</li>
<li>Durch das Framework ist alles responsive</li>
<li>Die Session kann über Login/Logout in der Navigation gestartet/beendet werden. Code dazu befindet sich in der login.php und logout.php. Der geschützte bereich befindet sich auf der Startseite - in der index.php ab Zeile 79.</li>
<li>Die Datenbank-Anbindung ist in der login.php und signup.php vorhanden. Diese Verbinden zu einer mySQL Datenbank die auf diesem Server via PHPmyadmin erstellt wurde.</li>
<li>Der AJAX-Request geschieht via JQuery in der main.js. In der main_unminified.js ist dies in Zeile 4. Die JSON Datei haben wir selber erstellt und sie liegt im Ordner "data". Sie wird verwendet um Rezepte auf die main page zu laden und diese schön anzuordnen. Wir können hier theoretisch unendlich viele Rezepte responsive anzeigen.</li>
<li>Unsere JavaScript-Funktionen sind in der Datei <a href="https://github.com/radicalm1nd/MoweSS17DDesign/blob/master/js/main.js" target="_blank">main.js</a> im Ordner ”js” zu finden! Diese ist bereits minified, es liegt eine unminified version zu lesen im selben Ordner.</li>
<li>Unser JS-Framework ist JQuery was wie schon beschrieben in der main.js benutzt wurde. Wir benutzen dies für den AJAX request und zur DOM-Manipulation um die Rezepte in die HTML-Struktur zu laden.</li>
<li>Minimierte Dateien sind die landing.css im "CSS" ordner und main.js im "js" Ordner.</li>
<li>Komprimierung findet in der .htaccess statt. Komprimierung Zeile 5-18, Cache ab Zeile 20.</li>
</ol>
</p>

<p>Die optimierte SEO-Datei ist <a href="http://radicalm1nd.de/projects/vape/SEO/index.php" target="_blank">HIER</a> zu finden und kann in Github im <a href="https://github.com/radicalm1nd/MoweSS17DDesign/tree/master/SEO" target="_blank">SEO-Ordner</a> angesehen werden. <br>
Folgende Änderungen wurden hier gemacht:
<ul>
<li>In der Original-Datei gab es keine H1. Diese wurde hinzugefügt.</li>
<li>Es wurde eine iFrame verwendet, welche von Google nicht eingelesen wird. Wir haben diese durch einen Link ersetzt. Es gibt workarounds - zB. mit javascript - mit denen man Seiten so einbinden kann, dass Google sie lesen kann. Zum Beispiel <a href="https://stackoverflow.com/questions/4943677/seo-friendly-alternative-for-an-iframe" target="_blank" rel="_nofollow">hier auf stackoverflow</a>. Dies haben wir aber unterlassen.</li>
<li>Das Bild(Logo) auf der Seite hatte keinen alt-tag. Dieser wurde hinzugefügt.</li>
<li>Die ID "mydiv" wurde mehrmals verwendet. Da IDs pro Seite nur einmal vorkommen sollten, haben wir "mydiv" sowohl in der index.php als auch in der CSS-Datei zu einer Klasse gemacht.</li>
<li>Der Webseite fehlte ein Title-Tag im head. Diesen haben wir hinzugefügt.</li>
<li>Der Link "Klick mich!" hatte ebenfalls keinen title-tag und wurde deswegen hinzugefügt.</li>
</ul>
     
        </div>
      </div>

    </div>


   <script type="text/javascript" src="js/main.js"></script>


</body>
</html>