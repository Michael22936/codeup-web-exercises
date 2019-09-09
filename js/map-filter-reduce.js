const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let one = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(one);

let two = users.map((user) => user.email);

console.log(two);

let three = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);

console.log(three);

let four = users.reduce((total, person) => {
    return total + person.yearsOfExperience/users.length;
}, 0);

console.log(four);

let longestEmail = users.reduce(function (total, emails) { return total.email.length > emails.email.length ? total.email : emails; });

console.log(longestEmail);

let usernames = users.reduce( function(finalString, person, index){
    if (index === users.length -1){

    return finalString + `${person.name}. `

    } else {
        return finalString + `${person.name}, `
    }
}, 'Your instructors are: ');

console.log(usernames);


///////BONUS////////////

