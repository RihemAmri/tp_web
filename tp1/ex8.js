const wait = ms => new Promise(res => setTimeout(res, ms));

async function telechargement() {
    console.log("Début");
    await wait(2000); // pause de 2 secondes
    console.log("Fin");
}

telechargement();

