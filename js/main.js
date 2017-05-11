$( document ).ready(function() {
	
	$("#mainRecipes").html(" ");
	var imageURL = "";
	var imageName = "";
    $.getJSON( "data/beispielrezept.json").done(function(data) {
		var dataNum = data.length;
		var counter = 1;
		$.each(data, function (i, item) {
		imageURL = data[i].image;
		imageName = data[i].name;
		$("#mainRecipes").append("<div class='column is-3'><div class='card'><div class='card-image'><figure class='image is-4by3'><img id='cardIMG'></figure></div></div></div>")
		$("#cardIMG").attr("src", imageURL);
		$("#cardIMG").attr("alt", imageName);
		if (i%4 == 0) {
			 $("#mainRecipes").append("</div><div class='columns'>");
		} 
		counter ++;
	})
		})

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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
