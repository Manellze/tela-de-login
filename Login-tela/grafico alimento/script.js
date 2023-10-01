document.addEventListener("DOMContentLoaded", function() {
    const foodData = {
        "banana": { carbs: 27, protein: 1.3, fat: 0.4 },
        "maçã": { carbs: 25, protein: 0.5, fat: 0.3 },
        "frango": { carbs: 0, protein: 27, fat: 3.6 },
        "arroz": { carbs: 45, protein: 2.2, fat: 0.4 }
    };

    const foodInput = document.getElementById("food-input");
    const searchButton = document.getElementById("search-button");
    const foodDetails = document.getElementById("food-details");

    searchButton.addEventListener("click", function() {
        const searchTerm = foodInput.value.toLowerCase();
        if (foodData.hasOwnProperty(searchTerm)) {
            const food = foodData[searchTerm];
            foodDetails.innerHTML = `
                <h2>${searchTerm}</h2>
                <p>Carboidratos: ${food.carbs}g</p>
                <p>Proteínas: ${food.protein}g</p>
                <p>Gorduras: ${food.fat}g</p>
            `;
        } else {
            foodDetails.innerHTML = "<p>Alimento não encontrado</p>";
        }
    });
});
