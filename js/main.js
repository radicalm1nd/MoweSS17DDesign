$( document ).ready(function() {
	
	if (window.location.href.indexOf("index.html") > -1) { //if mainpage
	$("#mainRecipes").html(" ");
    $.getJSON( "data/beispielrezept.json", function( data ) {
	for (i=0; i<data.length; i++) {
		var imageURL = data[i].image;
		var imageName = data[i].name;
		$("#mainRecipes").append("<div class='column is-3'>")
								   .append("<div class='card'>")
                                   .append("<div class='card-image'>")
                                   .append("<figure class='image is-4by3'>")
                                   .append("<img id='cardIMG'>")
                                   .append("</figure>")
                                   .append("</div>")
                                   .append("</div>")
                                   .append("</div>");
		$("#cardIMG").attr("src", imageURL);
		$("#cardIMG").attr("alt", imageName);
	}
	});
};
});
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://cdn.shopify.com/s/files/1/1267/5363/products/JUNGLE-FEVER-E-JUICE-BY-rUTHLESS-VAPOR.jpg?v=1481571554" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	 </div>
	     <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	 </div>
	     <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	        <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="img/placeholder.jpg" alt="Image">
            </figure>
          </div>
        </div>
      </div>
	
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
