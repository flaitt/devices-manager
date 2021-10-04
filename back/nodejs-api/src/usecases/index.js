import makeAddDevice from "./add-device";
import devicesManagerDb from "../data-access";

const addDevice = makeAddDevice({ devicesManagerDb })

const deviceManagerService = Object.freeze({
    addDevice
})

export default deviceManagerService;
export { addDevice }