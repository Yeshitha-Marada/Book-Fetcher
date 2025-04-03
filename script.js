// Function to fetch books using async/await
async function fetchBooks() {
    let url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&startIndex=0";

    try {
        let response = await fetch(url); // Fetch data
        let data = await response.json(); // Convert response to JSON
        displayBooks(data.items); // Display books
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Function to display books
function displayBooks(books) {
    let bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = ""; // Clear previous content

    books.forEach(book => {
        let title = book.volumeInfo.title || "Unknown Title";
        let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
        let image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150";

        // Create book card
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${image}" alt="Book Image">
            <h3>${title}</h3>
            <p>${authors}</p>
            <button>Add to Cart</button>
        `;

        bookContainer.appendChild(bookCard);
    });
}
