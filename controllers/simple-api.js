async function emulateGet (req, res) {
    await setTimeout(() => { console.log("emulate db request"); }, 3000);
    res.status(200).send({ "simpleget": "Hello, Sentry Health!" });
}

async function emulateParam (req, res) {

    await setTimeout(() => { console.log("emulate db request"); }, 3000);

    if(req.params.num > 9 ){
        res.status(400).send({ "paramtest": "too big" });
    }

    if(req.params.num < 0 ){
        res.status(400).send({ "paramtest": "too small" });
    }

    res.status(200).send({ "paramtest":"just right" });
}

module.exports = {
    emulateGet,
    emulateParam
};