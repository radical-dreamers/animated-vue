import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'pulse', 'pulse')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-pulse', 'pulse', undefined, true)

export default { single, group }
