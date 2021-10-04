import {
    addDevice,
    addCategory,
    findDevices,
    findCategories
} from '../usecases'

import makePostDevice from './post-device'
import makePostCategory from './post-category'
import makeGetDevices from './get-devices'
import makeGetCategories from './get-categories'

const postDevice = makePostDevice({ addDevice })
const postCategory = makePostCategory({ addCategory })
const getDevices = makeGetDevices({ findDevices })
const getCategories = makeGetCategories({ findCategories })

const deviceManagerController = Object.freeze({
    postDevice,
    postCategory,
    getDevices,
    findCategories
})

export default deviceManagerController;
export { postDevice, postCategory, getDevices, getCategories }