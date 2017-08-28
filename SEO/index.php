<!DOCTYPE html>
<html lang="de" dir="ltr">
<head>
	<!-- Title hat gefehlt -->
	<title>Super coole SEO Seite</title>
	<meta charset="UTF-8">
	<meta name="publisher" content="Technische Hochschule Köln, Campus Gummersbach">
	<meta name="author" content="Andre Kasper">
	<meta name="description" content="SEO Testdatei">
	<meta name="date" content="<?=date('c', getlastmod())?>">
	<link rel="stylesheet" href="css/datatables.min.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
	<header>
		<!-- Logo hatte keinen alt tag, wurde hinzugefügt -->
		<img src="img/logo.jpg" alt="logo">
	</header>
	<main>
		<div class="mydiv">
			<!-- Website hatte keine H1, deswegen H2 zu H1 geändert -->
			<h1>Super coole Seite!</h1>
			<p>
				Dies ist eine super coole Seite! Nur leider nicht SEO-optimiert :( Könnt ihr mir helfen?
			</p>
			<p>Hier ein Link: <a href="seo.php" title="Klick mich!">Klick mich!</a></p>
		</div>
		<!-- Div id "mydiv" wurde 2x benutzt. Deswegen hier und in CSS zu Class geändert -->
		<div class="mydiv">
			<h3>WPF MoWE</h3>
			<p>
				Für das WPF Moderner Webentwicklung mit HTML5, CSS3 und JavaScript sollen 3 mögliche Optimierungen für diese Webseite gefunden und in der Dokumentation aufgeschrieben werden!
			</p>
			<p>
				Viel Spaß und viel Erfolg!<br>
				Andre Kasper
			</p>
		</div>
		<!-- Iframe durch Link ersetzt, da iFrame nicht ausgelesen wird -->
		<a href="https://www.th-koeln.de/">TH Köln</a>
	</main>
	<footer>
		&copy; 2017 Andre Kasper
	</footer>
</body>
</html>