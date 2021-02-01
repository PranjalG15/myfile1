const connection = require("./connection");
const { v4: uuidv4 } = require('uuid');
const util = require("util");
/* let pQuery = util.promisify(connection.query); */
// query
// create
let create = (userObj) => {
         // insert 
         userObj.uid = uuidv4();
         // create user 
         return new Promise(function (resolve, reject) {
            connection.query("INSERT INTO user SET ?",userObj, function (err, res) {
                if (err) {
                     reject(err)
                     return;
                 } else {
                     resolve(res);
                 }
             })
         })
     }
// get by uid
let getById = (uid) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * from user WHERE uid="${uid}"`,
            function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res[0]);
                }
            })
    })
}
// update
let update = (uid, toUpdateObject) => {
    console.log(uid);
    let updateString = '';
    console.log(toUpdateObject);
    for (let attr in toUpdateObject) {
        console.log(toUpdateObject[attr]);
        updateString += `${attr}="${toUpdateObject[attr]}", `
    }
    updateString = updateString.substring(0,
         updateString.length - 2);
    return new Promise(function (resolve, reject) {
        connection.query(`UPDATE user SET 
        ${updateString} WHERE uid="${uid}"`,
         function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        });
    })

}
// delete
let deleteById =  (uid) => {
    console.log(uid);
    return new Promise(function (resolve, reject) {
        connection.query(`DELETE from user WHERE uid="${uid}"`,
            function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        })
    }
// send request
// receive request
module.exports.create = create;
module.exports.getById = getById; 
module.exports.update = update;
module.exports.deleteById = deleteById;