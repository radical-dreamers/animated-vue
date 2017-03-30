import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'tada', 'tada')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-tada', 'tada', undefined, true)

export default { single, group }
