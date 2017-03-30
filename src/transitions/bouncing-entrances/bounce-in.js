import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-in', 'bounceIn')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-in', 'bounceIn', undefined, true)

export default { single, group }
