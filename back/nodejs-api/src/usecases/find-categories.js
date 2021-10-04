export default function makeFindCategories({ devicesManagerDb }) {
    return async function findCategories(){
        return devicesManagerDb.findAllCategories();
    }
}