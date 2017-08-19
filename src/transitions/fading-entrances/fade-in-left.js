import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-in-left', 'fadeInLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-in-left', 'fadeInLeft', undefined, true)

export default { single, group }
