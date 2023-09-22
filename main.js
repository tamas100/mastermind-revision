function generateSecret() {
    return new Array(4).fill(null).map(() => JSON.stringify(Math.trunc(Math.random() * 10.0)));
}

function readGuess() {

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

}

function isGameWon(blackCount) {
    return blackCount === 4;
}

function gameLoop() {   // levezényli a játékot
    const secret = generateSecret();    // legenerál egy négyszámjegyű sorozatot
    let guess = readGuess();    // bekér a felhasználótól egy tippet
    let blackCount = getBlackCount(guess, secret);   // fekete pöttyök száma
    let whiteCount = getWhiteCount(guess, secret, blackCount);   // fehér pöttyök száma

    if (isGameWon(blackCount)) {
        console.log("Nyertél!");    // nyertünk?
    }
}