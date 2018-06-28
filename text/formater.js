let text = require('../text/text.json');

let raised = (babloRaised, babloCurrent) => {
    return `${text.raised[0][0]} ${babloRaised} ${text.raised[0][1]} ${babloCurrent}`;
}

let bablo = (babloCurrent) => {
    if(babloCurrent == 0)
        return `${text.babloZero[0][0]}`;
    else
        return `${text.bablo[0][0]} ${babloCurrent} ${text.bablo[0][1]}`;
}

let load = (babloLoaded) => {
    return `${text.load}`;
}

let what = (unexpectedText) => {
    return `${text.what}`;
}

let max = () => {
    return text.max;
}

let loadBablo = (type, count) => {
    result = text.sir;
    if(type.toLowerCase() == text.rub[0])
        result += text.rub[1].repeat(count);
    else
        result += text.btc[1].repeat(count);
    return result;
}

module.exports = {
  raised,
  bablo,
  load,
  what,
  max,
  loadBablo
};