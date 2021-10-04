export default function makeAddDevice({ devicesManagerDb }) {
    return async function addDevice(deviceInfo){
        if(deviceInfo.color.length > 16) {
            throw "Color is bigger then 16"
        } else {
            if(deviceInfo.partNumber < 0) {
                throw "Part Number must be positive"
            } else {
                return devicesManagerDb.insertDevice(deviceInfo.categoryId, deviceInfo.color, deviceInfo.partNumber);
            }
        }
    }
}