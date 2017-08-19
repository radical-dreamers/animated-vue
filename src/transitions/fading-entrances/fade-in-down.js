import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-in-down', 'fadeInDown')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-in-down', 'fadeInDown', undefined, true)

export default { single, group }
