import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'shake', 'shake')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-shake', 'shake', undefined, true)

export default { single, group }
