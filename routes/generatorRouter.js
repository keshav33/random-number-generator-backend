const generatorRouter = require('express').Router();

generatorRouter.get('/all-random-numbers', (req, res) => {
    const { totalSum, numbersRequired } = req.query;
    const tempRandomNum = [];
    const resultRandomNum = [];
    let tempSum = 0;

    for (let i = 0; i < parseInt(numbersRequired); i++) {
        tempRandomNum.push(Math.random());
        tempSum += tempRandomNum[i];
    }

    for (let i = 0; i < parseInt(numbersRequired); i++) {
        const randomNum = Math.round(tempRandomNum[i] / tempSum * parseInt(totalSum));
        resultRandomNum.push(randomNum);
    }

    res.status(200).send({result: resultRandomNum});
});

module.exports = generatorRouter;