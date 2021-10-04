import {
    addDevice
} from '../usecases'

import makePostDevice from './post-device'

const postDevice = makePostDevice({ addDevice })

const deviceManagerController = Object.freeze({
    postDevice
})

export default deviceManagerController;
export { postDevice }