$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
		$(".icon-arrow-left-alt").hide();
});

//"recipesArray" declarada en el archivo "data/recipes.js"
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*"recipesArray" declarada en el archivo "data/recipes.js"
*/
function renderHighlightedRecipes(recipesArray) {
//icono oculto
  	$(".icon-arrow-left-alt").hide();
 	//Pinta
  	printNews();
 	// data
 	renderHighlightedRecipes(recipesArray);
  });

//funcion para pintar la noticia, y funcion para pintar el titulo
function printNews(){
	$('#newsRecipes').text('receta nueva')
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$('#newsRecipes').text('NUEVAS RECETAS')
	console.log('Voy a pintar la receta: ', recipe);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for(var i=0;i<activitiesArray.length;i++){
		console.log('Activities: ', activitiesArray[i]);
		renderActivity(activitiesArray[i]);
		
}



/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
	function renderActivity(activity) {
		console.log('pintar la actividad: ', activity);
	
}

var elemento = $(a);
    $('.list-activities').append(elemento);
 } 

