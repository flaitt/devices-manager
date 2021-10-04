export default function makeDeviceManagerDb ({ makeDb }) {
    return Object.freeze({
        findAllDevices,
        findAllCategories,
        insertDevice,
        insertCategory,
        removeDeviceById,
        removeCategoryById,
    })
    async function findAllDevices(){
        console.log('finding all devices')
        const dbConnection = await makeDb();
        const [devices] = await dbConnection.query('SELECT * FROM devices')
        return JSON.parse(JSON.stringify(devices));
    }
    async function findAllCategories(){
        const dbConnection = await makeDb();
        const [categories] = await dbConnection.query('SELECT * FROM categories')
        return JSON.parse(JSON.stringify(categories));
    }
    async function insertDevice(categoryId, color, partNumber){
        const dbConnection = await makeDb();
        const result = await dbConnection.query(`INSERT INTO devices VALUES(LAST_INSERT_ID(), "${categoryId}", "${color}", ${partNumber});`)
        return result;
    }
    async function insertCategory(name){
        const dbConnection = await makeDb();
        const result = await dbConnection.query(`INSERT INTO categories VALUES(LAST_INSERT_ID(), "${name}");`)
        return result;
    }
    async function removeDeviceById(id){
        const dbConnection = await makeDb();
        const result = await dbConnection.query(`DELETE FROM devices WHERE id=${id}`)
        return result;
    }
    async function removeCategoryById(id){
        const dbConnection = await makeDb();
        const result = await dbConnection.query(`DELETE FROM categories WHERE id=${id}`)
        return result;
    }
}
