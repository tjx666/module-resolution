const add = require('./add');

// console.log(add(3, 3));

function fromCommonjs() {
    console.log('form commonjs');
}

module.exports = {
    add,
    fromCommonjs,
};

exports.fromCommonjs = fromCommonjs;
