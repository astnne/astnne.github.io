function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let names = ['Alexis', 'Anderson', 'Austin', 'Carleigh', 'Darko', 'Eden', 'Edward', 'Emily', 'Ethan', 'Freddy', 'Grace', 'Hayden', 'Hector', 'Heidi', 'Issac', 'Jarett', 'Jordan', 'Justin', 'Kingston', 'Lucas', 'Nancy', 'Nicholas', 'Rain', 'Tariq', 'Travis', 'Vivienne', 'Yuki', 'Zachary'];

let randomNames = ""

shuffleArray(names);

for (let i = 1; i <= 8; i++) {
    const start_index = (i - 1) * 3;
    const end_index = i * 3;
    randomNames = randomNames + (`<span class="elements">${i}. ${names.slice(start_index, end_index).join(' ')}\n </span> <br><br>`);
}

randomNames = randomNames + (`<span class="elements">${9}. ${names[24]} ${names[25]}\n </span> <br><br>`);
randomNames = randomNames + (`<span class="elements">${10}. ${names[26]} ${names[27]}\n </span>`);

console.log(randomNames)

document.getElementById("theNames").innerHTML = randomNames;