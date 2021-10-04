import devicesManagerDb from "../data-access";

import makeAddDevice from "./add-device";
import makeAddCategory from './add-category'
import makeFindDevices from "./find-device";

const addDevice = makeAddDevice({ devicesManagerDb })
const addCategory = makeAddCategory({ devicesManagerDb })
const findDevices = makeFindDevices({ devicesManagerDb })

const deviceManagerService = Object.freeze({
    addDevice,
    addCategory,
    findDevices
})

export default deviceManagerService;
export { addDevice, addCategory, findDevices }