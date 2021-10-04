import {
    addDevice,
    addCategory
} from '../usecases'

import makePostDevice from './post-device'
import makePostCategory from './post-category'

const postDevice = makePostDevice({ addDevice })
const postCategory = makePostCategory({ addCategory })

const deviceManagerController = Object.freeze({
    postDevice,
    postCategory
})

export default deviceManagerController;
export { postDevice, postCategory }