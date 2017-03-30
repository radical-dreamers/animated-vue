import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-in-up', 'bounceInUp')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-in-up', 'bounceInUp', undefined, true)

export default { single, group }
