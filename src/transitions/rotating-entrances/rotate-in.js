import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-in', 'rotateIn')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-in', 'rotateIn', undefined, true)

export default { single, group }
