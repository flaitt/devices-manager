import makeDeviceManagerDb from "./devices-db";

const urlDb = process.env['URL_DB'] || "mysql://username:password@localhost:3306/devices_manager";

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
    // console.log("urldb:", urlDb)
    const connection = await mysql.createConnection(urlDb);
    // const connection = await mysql.createConnection("mysql://root:MySql2019!@localhost:3306/devices_manager");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

const devicesManagerDb = makeDeviceManagerDb({ makeDb })
export default devicesManagerDb