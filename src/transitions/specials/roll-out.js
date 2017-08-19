import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'roll-out', undefined, 'rollOut')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-roll-out', undefined, 'rollOut', true)

export default { single, group }
