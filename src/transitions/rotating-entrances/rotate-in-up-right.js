import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-in-up-right', 'rotateInUpRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-in-up-right', 'rotateInUpRight', undefined, true)

export default { single, group }
