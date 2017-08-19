import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-in', 'fadeIn')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-in', 'fadeIn', undefined, true)

export default { single, group }
