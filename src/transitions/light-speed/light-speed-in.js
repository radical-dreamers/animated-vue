import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'light-speed-in', 'lightSpeedIn')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-light-speed-in', 'lightSpeedIn', undefined, true)

export default { single, group }
