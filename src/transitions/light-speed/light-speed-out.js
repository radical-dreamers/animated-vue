import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'light-speed-out', undefined, 'lightSpeedOut')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-light-speed-out', undefined, 'lightSpeedOut', true)

export default { single, group }
