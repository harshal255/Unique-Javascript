
const ingredientInput = document.getElementById("ingredient-input");
const generateButton = document.getElementById("generate-button");
const recipeList = document.getElementById("recipe-list");


const spoonacularAPIKey = "28f78619dec84ba09976d7142f3cff9e";
const spoonacularEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonacularAPIKey}&ingredients=`;

// Event listener for the Generate Recipes button
generateButton.addEventListener("click", () => {
    const ingredients = ingredientInput.value.split(",").map((ingredient) => ingredient.trim());
    fetchRecipes(ingredients);
});

// Function to fetch recipes from Spoonacular API
function fetchRecipes(ingredients) {
    const apiUrl = `${spoonacularEndpoint}${ingredients.join(",")}&number=10`; // Fetch up to 10 recipes

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            displayRecipes(data);
        })
        .catch((error) => {
            console.error("Error fetching recipes:", error);
        });
}

// Function to display recipes on the web page
function displayRecipes(recipes) {
    recipeList.innerHTML = ""; // Clear previous recipes
    recipes.forEach((recipe) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <p><strong>Ingredients:</strong> ${recipe.usedIngredients.map((ingredient) => ingredient.name).join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions || "No instructions available"}</p>
        `;
        recipeList.appendChild(li);
    });
}
