import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'slide-out-up', undefined, 'slideOutUp')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-slide-out-up', undefined, 'slideOutUp', true)

export default { single, group }
