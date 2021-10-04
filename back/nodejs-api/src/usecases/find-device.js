export default function makeFindDevices({ devicesManagerDb }) {
    return async function findDevices(){
        return devicesManagerDb.findAllDevices();
    }
}