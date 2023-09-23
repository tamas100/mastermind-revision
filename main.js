function generateSecret() {
    return new Array(4).fill(null).map(() => JSON.stringify(Math.trunc(Math.random() * 10.0)));
}

function readGuess() {
    let guess =
        prompt("Találd ki a titkos kódot, ami négy számjegyből áll!")
            .split("");
    return guess;
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

function getWhiteCount(guess, secret, blackCount) {
    let egyezésekSzáma = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess.sort()[i] === secret.sort()[i]) {
            egyezésekSzáma++;
        }
    }
    return egyezésekSzáma - blackCount;
}

function isGameWon(blackCount) {
    return blackCount === 4;
}

function gameLoop() {   // levezényli a játékot
    const secret = generateSecret();    // legenerál egy négyszámjegyű sorozatot
    console.log(secret);
    let guess = readGuess();    // bekér a felhasználótól egy tippet
    console.log(guess);
    let blackCount = getBlackCount(guess, secret);   // fekete pöttyök száma
    console.log(blackCount);
    let whiteCount = getWhiteCount(guess, secret, blackCount);   // fehér pöttyök száma
    console.log(whiteCount);

    if (isGameWon(blackCount)) {
        console.log("Nyertél!");    // nyertünk?
    }
}