export default function makeRemoveCategory({ devicesManagerDb }) {
    return async function removeCategory(categoryInfo){
        return devicesManagerDb.removeCategoryById(categoryInfo.id);
    }
}