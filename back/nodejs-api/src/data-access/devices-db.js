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
        const [devices] = await dbConnection.query(`
            SELECT d.id, color, part_number, name as category_name
            FROM devices as d
            LEFT JOIN categories as c
            ON d.category_id = c.id`)
        return JSON.parse(JSON.stringify(devices));
    }
    async function findAllCategories(){
        const dbConnection = await makeDb();
        const [categories] = await dbConnection.query('SELECT * FROM categories')
        return JSON.parse(JSON.stringify(categories));
    }
    async function insertDevice(categoryId, color, partNumber){
        const dbConnection = await makeDb();
        const lastInsertId = await dbConnection.query(`SELECT MAX(id) as max FROM devices`)
        const result = await dbConnection.query(`INSERT INTO devices VALUES(${JSON.parse(JSON.stringify(lastInsertId))[0][0].max + 1}, "${categoryId}", "${color}", ${partNumber});`)
        return result;
    }
    async function insertCategory(name){
        const dbConnection = await makeDb();
        const lastInsertId = await dbConnection.query(`SELECT MAX(id) as max FROM categories`)
        const result = await dbConnection.query(`INSERT INTO categories VALUES(${JSON.parse(JSON.stringify(lastInsertId))[0][0].max + 1}, "${name}");`)
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
