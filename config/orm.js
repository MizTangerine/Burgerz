const connection = require("../config/connection.js");

//Helper functions to convert given items to SQL syntax
function printQuestionMarks(num) {
    let arr = [];
    for (i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    };
    return arr.toString();
};


const orm = {
    selectAll: function (table, cb) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        let queryString = 'INSERT INTO ' + table;
        queryString += '(' + cols.toString() + ')';
        queryString += 'VALUES (' + printQuestionMarks(vals.length) + ')';
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
            console.log('insert', res)
        });
    },

    updateOne: function (table, colVal, condition, cb) {
        let queryString = 'UPDATE ' + table;
        queryString += ' SET ' + objToSql(colVal);
        queryString += ' WHERE ' + condition;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;