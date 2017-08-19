import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-in-right', 'fadeInRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-in-right', 'fadeInRight', undefined, true)

export default { single, group }
