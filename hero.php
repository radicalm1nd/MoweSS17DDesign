  <div class="hero-head">
      <div class="container">
        <nav class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item" href="../index.php">
                VAPE RECIPES
              </a>
				<span class="nav-toggle">
					<span></span>
					<span></span>
					<span></span>
				</span>
				<div class="nav-right nav-menu">
                  <a class="nav-item" href="http://radicalm1nd.de/projects/vape/">
                Home
              </a>
              <a class="nav-item" href="http://radicalm1nd.de/projects/vape/doku.php">
                Dokumentation
              </a>     
               <a class="nav-item" target="_blank" href="http://radicalm1nd.de/projects/vape/SEO/index.php">
                SEO-Aufgabe
              </a>  
              <?php
                session_start();
                if(!isset($_SESSION['userid'])) {
                  echo'  <a class="nav-item" href="http://radicalm1nd.de/projects/vape/login.php">
                Login
              </a>  ';
                 } else{
                  //Abfrage der Nutzer ID vom Login
                  $userid = $_SESSION['userid'];
                  echo '  <a class="nav-item" href="http://radicalm1nd.de/projects/vape/logout.php">
                Logout
              </a>  ';
                }
              ?>
        </div>       
              <span class="nav-item">
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>