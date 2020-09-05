const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
const configuration = require("./config");

let readata = async (input) => {

    try {
        let connection = mysql.createConnection(configuration.dataconfig);

        await connection.connectAsync();

        let sql = "select transport_name,src,dest,transport_type from transports where src=? and dest=?";

        let result = await connection.queryAsync(sql, [input.src, input.dest]);

        console.log(result);

        await connection.endAsync();

        return result;
    } catch (err) {
        console.log(err);
    }

};





let adduser = async (input) => {
    try {
        let connection = mysql.createConnection(configuration.dataconfig);

        await connection.connectAsync();

        let sql = "insert into newuser (username,emailid,upassword) values(?,?,?)";

        let result = await connection.queryAsync(sql, [input.username, input.emailid, input.upassword]);


        console.log(result);

        await connection.endAsync();

        return result;
    } catch (err) {
        console.log(err);
    }

};


let addlogin = async (input) => {
    try {
        let connection = mysql.createConnection(configuration.dataconfig);

        await connection.connectAsync();

        let sql = "insert into logindetails (username,upassword) values(?,?)";

        let result = await connection.queryAsync(sql, [input.username, input.upassword]);


        console.log(result);

        await connection.endAsync();

        return result;
    } catch (err) {
        console.log(err);
    }

};




let updatepass = async (input) => {
    try {
        let connection = mysql.createConnection(configuration.dataconfig);

        await connection.connectAsync();


        let sql2 = "update logindetails set upassword=? where username=?"

        let result = await connection.queryAsync(sql2, [input.upassword, input.username]);


        console.log(result);

        await connection.endAsync();

        return result;
    } catch (err) {
        console.log(err);
    }

};








module.exports = { readata, adduser, addlogin, updatepass };