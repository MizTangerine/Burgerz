const orm = require('../config/orm.js');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: (colVal, condition, cb) => {
        orm.updateOne('burgers', colVal, condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;