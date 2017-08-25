<?php
session_start();
session_destroy();

echo 'Logout erfolgreich <br><br>
Zurück zur <a href="index.php"> Startseite';
?>