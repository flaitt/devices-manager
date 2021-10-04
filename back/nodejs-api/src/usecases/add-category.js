export default function makeAddCategory({ devicesManagerDb }) {
    return async function addCategory(categoryInfo){
        if(categoryInfo.name.length > 128) {
            throw "Name is bigger then 128"
        } else {
            return devicesManagerDb.insertCategory(categoryInfo.name);
        }
    }
}