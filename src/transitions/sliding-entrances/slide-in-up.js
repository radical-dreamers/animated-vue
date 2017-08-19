import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'slide-in-up', 'slideInUp')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-slide-in-up', 'slideInUp', undefined, true)

export default { single, group }
