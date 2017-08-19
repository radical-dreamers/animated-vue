import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-out-down-left', undefined, 'rotateOutDownLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-out-down-left', undefined, 'rotateOutDownLeft', true)

export default { single, group }
