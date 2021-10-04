import {
    addDevice,
    addCategory,
    findDevices
} from '../usecases'

import makePostDevice from './post-device'
import makePostCategory from './post-category'
import makeGetDevices from './get-devices'

const postDevice = makePostDevice({ addDevice })
const postCategory = makePostCategory({ addCategory })
const getDevices = makeGetDevices({ findDevices })

const deviceManagerController = Object.freeze({
    postDevice,
    postCategory,
    getDevices
})

export default deviceManagerController;
export { postDevice, postCategory, getDevices }