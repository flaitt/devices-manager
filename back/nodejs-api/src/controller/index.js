import {
    addDevice,
    addCategory,
    findDevices,
    findCategories,
    removeDevice
} from '../usecases'

import makePostDevice from './post-device'
import makePostCategory from './post-category'
import makeGetDevices from './get-devices'
import makeGetCategories from './get-categories'
import makeDeleteDevice from './delete-device'

const postDevice = makePostDevice({ addDevice })
const postCategory = makePostCategory({ addCategory })
const getDevices = makeGetDevices({ findDevices })
const getCategories = makeGetCategories({ findCategories })
const deleteDevice = makeDeleteDevice({ removeDevice })

const deviceManagerController = Object.freeze({
    postDevice,
    postCategory,
    getDevices,
    findCategories,
    deleteDevice
})

export default deviceManagerController;
export { postDevice, postCategory, getDevices, getCategories, deleteDevice }