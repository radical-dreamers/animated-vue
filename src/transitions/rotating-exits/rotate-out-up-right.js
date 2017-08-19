import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-out-up-right', undefined, 'rotateOutUpRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-out-up-right', undefined, 'rotateOutUpRight', true)

export default { single, group }
