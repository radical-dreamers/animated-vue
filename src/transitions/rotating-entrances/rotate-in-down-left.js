import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-in-down-left', 'rotateInDownLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-in-down-left', 'rotateInDownLeft', undefined, true)

export default { single, group }
