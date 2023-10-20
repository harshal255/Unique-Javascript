const jokes = document.getElementById('jokes')
const changer = document.getElementById('changer')

const changeJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }
        jokes.innerHTML = 'Funny Jokes are comming...'
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerText = data.joke;
    } catch(e) {
        console.log(e);
    }
}

changer.addEventListener('click', changeJokes)
changeJokes()
