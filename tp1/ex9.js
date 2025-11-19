async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // Afficher les 5 premiers titres
        data.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error("Erreur :", error);
    }
}

getPosts();
