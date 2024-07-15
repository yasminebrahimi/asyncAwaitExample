







function loginUser (email, password){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({email}); 
        }, 2000); 
    }); 
}

function findEnrolledCourses (email){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(["React.js", "Next.js", "Node.js"]); 
        }, 1000); 
    }); 
}

function getEpisodes (courseTitle){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(["E01", "E02", "E03"]); 
        }, 2000); 
    }); 
}


loginUser("user@gmail.com")
.then((userData) => findEnrolledCourses(userData.email))
.then((courses) =>  getEpisodes(courses[0]))
.then((episodes) => console.log(episodes))
.catch((err) => console.log(err.message)); 

