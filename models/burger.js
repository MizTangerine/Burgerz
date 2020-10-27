const orm = require('../config/orm.js');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (colName, valOfCol, cb) => {
        orm.insertOne('burgers', colName, valOfCol, (res) => {
            cb(res);
        });
    },
    updateOne: (colName, valToUpdate, colNameId, valId, cb) => {
        orm.updateOne('burgers', colName, valToUpdate, colNameId, valId, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;