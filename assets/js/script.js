const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts__container');

// Get all posts
async function getAllPosts() {
    const response = await fetch(url);

    console.log(response);
}

getAllPosts();