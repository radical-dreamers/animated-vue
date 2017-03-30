import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-in-right', 'bounceInRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-in-right', 'bounceInRight', undefined, true)

export default { single, group }
