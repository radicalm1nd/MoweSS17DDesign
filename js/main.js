$( document ).ready(function() {
	var imageURL = "";
	var imageName = "";
    $.getJSON( "data/beispielrezept.json").done(function(data) {
		//var dataNum = data.length;
		var counter = 0;
		var recipeMain = '<div class="columns mainRecipes">';
		$.each(data, function (i, item) {
			while(counter<4) {
			imageURL = data[i].image;
			imageName = data[i].name;
			recipeMain += '<div class="column is-3"><div class="card"><div class="card-image"><figure class="image is-4by3">';
			recipeMain+= '<img class="cardIMG" src="' + imageURL + '"'>';
			recipeMain+='</figure></div></div></div>';
			counter ++;
			if (counter % 4 == 0) {
			recipeMain +=	'</div><div class="columns mainRecipes">'
			}
			}
		})
	})
	$("#recipes").html(" ");
	$("#recipes").append(recipeMain);
});
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	
	
	
	
	
	    <div class="columns" id="mainRecipes">
	
	
	
	
	
	
	
	
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
