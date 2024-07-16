

// Function to simulate logging in a user with email and password
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            resolve({ email }); // Resolving with user's email
        }, 2000); // Simulating 2 seconds delay
    });
}

// Function to simulate fetching enrolled courses based on user's email
function findEnrolledCourses(email) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            resolve(["React.js", "Next.js", "Node.js"]); // Resolving with array of course titles
        }, 1000); // Simulating 1 second delay
    });
}

// Function to simulate fetching episodes of a course based on course title
function getEpisodes(courseTitle) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            resolve(["E01", "E02", "E03"]); // Resolving with array of episode names
        }, 2000); // Simulating 2 seconds delay
    });
}

// Example usage of the above functions chained together
loginUser("user@gmail.com")
    .then((userData) => findEnrolledCourses(userData.email)) // Fetch enrolled courses after logging in
    .then((courses) => getEpisodes(courses[0])) // Fetch episodes of the first enrolled course
    .then((episodes) => console.log(episodes)) // Log episodes to console
    .catch((err) => console.log(err.message)); // Catch and log any errors during the process
