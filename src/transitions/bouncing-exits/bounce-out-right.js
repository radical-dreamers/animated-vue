import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-out-right', undefined, 'bounceOutRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-out-right', undefined, 'bounceOutRight', true)

export default { single, group }
