import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'roll-in', 'rollIn')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-roll-in', 'rollIn', undefined, true)

export default { single, group }
