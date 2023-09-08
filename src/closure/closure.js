function greeting() {
    let username = 'Oscar';

    function displayUsername() {
        return `Hello ${username}`
    }
    return displayUsername;
}

const g = greeting()
console.log(g)
console.log(g())
