function generateSecret() {
    return new Array(4).fill(null).map(() => JSON.stringify(Math.trunc(Math.random() * 10.0)));
}

function readGuess() {
    let guess;
    do {
        guess = prompt("Találd ki a titkos kódot, ami négy számjegyből áll!");
    } while (isNaN(Number(guess)) === true || guess.length !== 4);
    return guess.split("");
}

function getBlackCount(guess, secret) {
    let egyezésekSzáma = 0;

    for (let i = 0; i < secret.length; i++) {
        if (guess[i] === secret[i]) {
            egyezésekSzáma++;
        }
    }

    return egyezésekSzáma;
}

function assocArray(array) {
    const object = {};
    for (let item of array) {
        if (object[item] > 0) {
            object[item]++;
        } else {
            object[item] = 1;
        }
    }
    return object;
}

function getWhiteCount(guess, secret, blackCount) {
    let egyezésekSzáma = 0;
    let guess2 = assocArray(guess);
    let secret2 = assocArray(secret);
    for (key in secret2) {
        if (guess2[key] === undefined) {
            continue;
        } else if (secret2[key] <= guess2[key]) {
            egyezésekSzáma = egyezésekSzáma + secret2[key];
        } else {
            egyezésekSzáma = egyezésekSzáma + guess2[key];
        }
    }
    return egyezésekSzáma - blackCount;
}

function isGameWon(blackCount) {
    return blackCount === 4;
}

function gameLoop() {   // levezényli a játékot
    const secret = generateSecret();    // legenerál egy négyszámjegyű sorozatot
    console.log(secret); // fejlesztési segédlet
    let playerMoves = 10;
    do {
        console.log("Próbálkozások száma: ", playerMoves);
        let guess = readGuess();    // bekér a felhasználótól egy tippet
        console.log(guess);
        var blackCount = getBlackCount(guess, secret);   // fekete pöttyök száma
        console.log("A fekete pöttyök száma: ", blackCount);
        let whiteCount = getWhiteCount(guess, secret, blackCount);   // fehér pöttyök száma
        console.log("A fehér pöttyök száma: ", whiteCount);

        if (isGameWon(blackCount)) {
            console.log("Nyertél!");    // nyertünk?
        }
        playerMoves--;
    } while (isGameWon(blackCount) !== true && playerMoves > 0);
}