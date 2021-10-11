import makeDeviceManagerDb from "./devices-db";

export async function makeDb(){
    if(global.connection && global.connection.state !== 'disconnected'){
        console.log("Conexão já existente")
        try {
            global.connection.end();
        } catch (error) {
            global.connection = null;
            console.log("Erro ao fechar conexão", error)
        }
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://username:password@database-1.cc14cf7siydh.us-east-2.rds.amazonaws.com:3306/devices_manager");
    // const connection = await mysql.createConnection("mysql://root:MySql2019!@localhost:3306/devices_manager");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

const devicesManagerDb = makeDeviceManagerDb({ makeDb })
export default devicesManagerDb