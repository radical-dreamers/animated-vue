import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flash', 'flash')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flash', 'flash', undefined, true)

export default { single, group }
