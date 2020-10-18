const connection = require("../config/connection.js");

const orm = {
    all: (tableInput, cb) => {
        const queryString = "SELECT * FROM ?? ORDER BY id";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            // cb(result); // what is the difference between this and the cb on line 10 (see activites 14 and 16)?
        });
        cb(result);
    },
    insertOne: (tableInput, colName, valOfCol, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput], [colName], [valOfCol], (err, result) => {
            if (err) throw err;
        });
        cb(result);
    },
    updateOne: ([tableInput], [colName], [valToUpdate], [colNameId], [valId], cb) => {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput], [colName], [valToUpdate], [colNameId], [valId], (err, result) => {
            if (err) throw err;
        });
        cb(result);
    }
};

// ***Export the orm object
module.exports = orm;