import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-out-down', undefined, 'bounceOutDown')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-out-down', undefined, 'bounceOutDown', true)

export default { single, group }
