module.exports = (object, parse) => {

    return `def ${parse(object.id)}():`;

};