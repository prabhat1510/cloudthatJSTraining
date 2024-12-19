function displayStringList(){
        // Create an array of strings
        //const arrayOfStrings = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
        const arrayOfStrings = ["STANDARD","CHARTERED","BANK"]
        // Get the UL element by its ID
        const listElement = document.getElementById('string-list');

        // Iterate through the array and create list items
        arrayOfStrings.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
}