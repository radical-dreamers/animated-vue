import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-out-down-right', undefined, 'rotateOutDownRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-out-down-right', undefined, 'rotateOutDownRight', true)

export default { single, group }
