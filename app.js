// Function to simulate logging in a user with email and password
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            if (email === "user@gmail.com" && password === "password") {
                resolve({ email }); // Resolving with user's email
            } else {
                reject(new Error("Invalid email or password")); // Rejecting with an error
            }
        }, 2000); // Simulating 2 seconds delay
    });
}

// Function to simulate fetching enrolled courses based on user's email
function findEnrolledCourses(email) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            // Simulating scenario where courses are not found for the user
            if (email === "user@gmail.com") {
                resolve(["React.js", "Next.js", "Node.js"]); // Resolving with array of course titles
            } else {
                reject(new Error("Courses not found for the user")); // Rejecting with an error
            }
        }, 1000); // Simulating 1 second delay
    });
}

// Function to simulate fetching episodes of a course based on course title
function getEpisodes(courseTitle) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            // Simulating scenario where episodes are not found for the course
            if (courseTitle === "React.js") {
                resolve(["E01", "E02", "E03"]); // Resolving with array of episode names
            } else {
                reject(new Error("Episodes not found for the course")); // Rejecting with an error
            }
        }, 2000); // Simulating 2 seconds delay
    });
}

// Example usage of the above functions chained together
loginUser("user@gmail.com", "password")
    .then((userData) => findEnrolledCourses(userData.email)) // Fetch enrolled courses after logging in
    .then((courses) => getEpisodes(courses[0])) // Fetch episodes of the first enrolled course
    .then((episodes) => console.log(episodes)) // Log episodes to console
    .catch((err) => console.log(err.message)); // Catch and log any errors during the process
