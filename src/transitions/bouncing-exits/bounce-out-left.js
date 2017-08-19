import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-out-left', undefined, 'bounceOutLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-out-left', undefined, 'bounceOutLeft', true)

export default { single, group }
