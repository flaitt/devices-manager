import devicesManagerDb from "../data-access";

import makeAddDevice from "./add-device";
import makeAddCategory from './add-category'
import makeFindDevices from "./find-device";
import makeFindCategories from "./find-categories";
import makeRemoveDevice from "./remove-device";

const addDevice = makeAddDevice({ devicesManagerDb })
const addCategory = makeAddCategory({ devicesManagerDb })
const findDevices = makeFindDevices({ devicesManagerDb })
const findCategories = makeFindCategories({ devicesManagerDb })
const removeDevice = makeRemoveDevice({ devicesManagerDb })

const deviceManagerService = Object.freeze({
    addDevice,
    addCategory,
    findDevices,
    findCategories,
    removeDevice
})

export default deviceManagerService;
export { addDevice, addCategory, findDevices, findCategories, removeDevice }