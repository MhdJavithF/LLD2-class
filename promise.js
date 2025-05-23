var data = { "todos": [{ "id": 1, "todo": "Do something nice for someone you care about", "completed": false, "userId": 152 }, { "id": 2, "todo": "Memorize a poem", "completed": true, "userId": 13 }, { "id": 3, "todo": "Watch a classic movie", "completed": true, "userId": 68 }, { "id": 4, "todo": "Watch a documentary", "completed": false, "userId": 84 }, { "id": 5, "todo": "Invest in cryptocurrency", "completed": false, "userId": 163 }, { "id": 6, "todo": "Contribute code or a monetary donation to an open-source software project", "completed": false, "userId": 69 }, { "id": 7, "todo": "Solve a Rubik's cube", "completed": true, "userId": 76 }, { "id": 8, "todo": "Bake pastries for yourself and neighbor", "completed": true, "userId": 198 }, { "id": 9, "todo": "Go see a Broadway production", "completed": false, "userId": 7 }, { "id": 10, "todo": "Write a thank you letter to an influential person in your life", "completed": true, "userId": 9 }, { "id": 11, "todo": "Invite some friends over for a game night", "completed": false, "userId": 104 }, { "id": 12, "todo": "Have a football scrimmage with some friends", "completed": false, "userId": 32 }, { "id": 13, "todo": "Text a friend you haven't talked to in a long time", "completed": true, "userId": 2 }, { "id": 14, "todo": "Organize pantry", "completed": false, "userId": 46 }, { "id": 15, "todo": "Buy a new house decoration", "completed": true, "userId": 105 }, { "id": 16, "todo": "Plan a vacation you've always wanted to take", "completed": true, "userId": 162 }, { "id": 17, "todo": "Clean out car", "completed": false, "userId": 71 }, { "id": 18, "todo": "Draw and color a Mandala", "completed": true, "userId": 6 }, { "id": 19, "todo": "Create a cookbook with favorite recipes", "completed": true, "userId": 53 }, { "id": 20, "todo": "Bake a pie with some friends", "completed": false, "userId": 162 }, { "id": 21, "todo": "Create a compost pile", "completed": false, "userId": 13 }, { "id": 22, "todo": "Take a hike at a local park", "completed": true, "userId": 37 }, { "id": 23, "todo": "Take a class at local community center that interests you", "completed": true, "userId": 65 }, { "id": 24, "todo": "Research a topic interested in", "completed": true, "userId": 130 }, { "id": 25, "todo": "Plan a trip to another country", "completed": false, "userId": 140 }, { "id": 26, "todo": "Improve touch typing", "completed": false, "userId": 178 }, { "id": 27, "todo": "Learn Express.js", "completed": false, "userId": 194 }, { "id": 28, "todo": "Learn calligraphy", "completed": false, "userId": 80 }, { "id": 29, "todo": "Have a photo session with some friends", "completed": true, "userId": 91 }, { "id": 30, "todo": "Go to the gym", "completed": true, "userId": 142 }], "total": 254, "skip": 0, "limit": 30 }

const myFetch = function () {
    return new Promise(function (resolve, reject) {
        // Write logic
        setTimeout(function () {
            resolve(data);
            reject('err0r');
        }, 2000);
    })
} // Return todo data after 10sec
myFetch()
    .then(data => console.log(data))
    .catch(err => console.log(err));


---------------------------------------------


const myFetchWithId = function (Id) {
    return new Promise(function (resolve, reject) {
        // Write logic
        setTimeout(function () {
            const todoitem = data.todos.find((item) => item.id === Id)
            if (todoitem) {
                resolve(todoitem);
            }
            else {
                reject("No ID found!");
            }
        }, 3000);
    })
} // Return todo data after 10sec
myFetchWithId(5)
    .then(data => console.log(data))
    .catch(err => console.log(err));

---------------------------------------------

const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product'
}, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product'
}, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product'
}];


const myFetch = function (delay, limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (limit < 3) {
                resolve(list.slice(0, limit));
            }
            else {
                reject("out of stock");
            }
        }, delay)
    })
}

// Parallel way process

const Promise1 = myFetch(1000, 2);

const Promise2 = myFetch(2000, 0);

const Promise3 = myFetch(5000, 1);

Promise1.then((data) => {console.log(data); }).catch ((err) => {console.log(err); })

Promise2.then((data) => {console.log(data); }).catch ((err) => {console.log(err); })

Promise3.then((data) => {console.log(data); }).catch ((err) => {console.log(err); })


// Chaining form

myFetch(1000, 2)
    .then((data) => {
        console.log(data);
        return myFetch(2000,1);
    }).then((data) => {
        console.log(data);
        return myFetch(5000,3);
    }).then((data) => {
        console.log(data);
        return myFetch(6000,6);
    }).then((data) => {
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    });

// Promise All    --- any one fails all fail 

Promise.all([myFetch(2000,2),myFetch(3000,1),myFetch(1000,3)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })

// Promise allSettled  --- will give all output even fails

Promise.allSettled([myFetch(2000,2),myFetch(3000,4),myFetch(1000,1)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })

// Promise race --------- fastest first is output

Promise.race([myFetch(2000,2),myFetch(3000,4),myFetch(1000,1)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })