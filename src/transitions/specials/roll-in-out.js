import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'roll-in-out', 'rollIn', 'rollOut')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-roll-in-out', 'rollIn', 'rollOut', true)

export default { single, group }
