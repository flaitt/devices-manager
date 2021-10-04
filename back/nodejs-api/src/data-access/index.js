import makeDeviceManagerDb from "./devices-db";


export async function makeDb(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:MySql2019!@localhost:3306/testedb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

const devicesManagerDb = makeDeviceManagerDb({ makeDb })
export default devicesManagerDb