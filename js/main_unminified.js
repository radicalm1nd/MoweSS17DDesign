$( document ).ready(function() {
	var imageURL = "";
	var imageName = "";
    $.getJSON( "data/beispielrezept.json").done(function(data) {
		//var dataNum = data.length;
		var counter = 0;
		var recipeMain = '<div class="columns mainRecipes">';
		$.each(data, function (i, item) {
			imageURL = data[i].image;
			imageName = data[i].name;
			recipeMain += '<div class="column is-3"><div class="card"><div class="card-image"><figure class="image is-4by3">';
			recipeMain+= '<img class="cardIMG" src="' + imageURL + '">';
			recipeMain+='</figure></div></div></div>';
			counter ++;
			if (counter % 4 == 0) {
			recipeMain +=	'</div><div class="columns mainRecipes">'
			}
		})
	$("#recipes").html(" ");
	$("#recipes").append(recipeMain);
	})
});
