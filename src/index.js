const components = require('./components').getComponents();

function parseObject(object) {

    return components[object.type](object, parseObject);

}

function parseFile(data) {

    let output = "";

    data.body.forEach((element) => {

        output += parseObject(element);

    });

    return output;

}

function getEmoji() {

    return '🐍';

}

function getName() {

    return 'Python';

}

function getStatus() {

    // Needs Work
    // In-Development
    // Working
    // Done
    // Deprecated

    return 0;

}

module.exports = {
    getName,
    getStatus,
    getEmoji,
    parseFile
};