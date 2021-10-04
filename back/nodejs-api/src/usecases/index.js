import makeAddDevice from "./add-device";
import makeAddCategory from './add-category'
import devicesManagerDb from "../data-access";

const addDevice = makeAddDevice({ devicesManagerDb })
const addCategory = makeAddCategory({ devicesManagerDb })

const deviceManagerService = Object.freeze({
    addDevice,
    addCategory
})

export default deviceManagerService;
export { addDevice, addCategory }