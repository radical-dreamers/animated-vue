import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-out-up', undefined, 'bounceOutUp')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-out-up', undefined, 'bounceOutUp', true)

export default { single, group }
