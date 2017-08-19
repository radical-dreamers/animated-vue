import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'slide-in-right', 'slideInRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-slide-in-right', 'slideInRight', undefined, true)

export default { single, group }
