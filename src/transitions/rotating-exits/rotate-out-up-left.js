import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-out-up-left', undefined, 'rotateOutUpLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-out-up-left', undefined, 'rotateOutUpLeft', true)

export default { single, group }
