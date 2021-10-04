export default function makeRemoveDevice({ devicesManagerDb }) {
    return async function removeDevice(deviceInfo){
        return devicesManagerDb.removeDeviceById(deviceInfo.id);
    }
}