const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";

function fetchData(url){
    return fetch(url)
        .then(response => response.json())
        .then((data)=> data)
        .catch((err)=> err)
}

// chaining form

fetchData(POST_URL)
    .then((data)=>{
        console.log(data);
        return fetchData(USER_URL);
    })
    .then((data)=>{
        console.log(data);
        return fetchData(COMMENT_URL);
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })

// Async await

async function social() {
    const postData = await fetchData(POST_URL); // Post
    console.log(postData);
    const userData = await fetchData(USER_URL); // User
    console.log(userData);
    const commentData = await fetchData(COMMENT_URL); // Comment
    console.log(commentData);
}

social();


// Async await with try catch

async function social() {
    try {
        const postData = await fetchData(POST_URL); // Post
        console.log(postData);
        const userData = await fetchData(USER_URL); // User
        console.log(userData);
        const commentData = await fetchData(COMMENT_URL); // Comment
        console.log(commentData);
    } catch (error) {
        console.log(error);
    }
    
}

social();


// Async await with try catch and promise all

async function social() {
    try {
        const results = await Promise.all([
            fetchData(POST_URL),
            fetchData(USER_URL),
            fetchData(COMMENT_URL),
        ]);
        console.log(results);
    } catch (error) {
        console.log(error);
    }
    
}

social();