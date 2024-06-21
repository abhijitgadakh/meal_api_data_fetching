// Function to fetch category data
async function getCategoriesData() {
  const categoryUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  try {
    const response = await fetch(categoryUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
    console.log("something went wrong");
  }
}

// Function to fetch ingredient data
async function getIngredientData() {
  const ingredientUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  try {
    const response = await fetch(ingredientUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
    console.log("something went wrong");
  }
}

// Event listeners for the buttons
document
  .getElementById("get-category-data")
  .addEventListener("click", getCategoriesData);
document
  .getElementById("get-ingredient-data")
  .addEventListener("click", getIngredientData);
