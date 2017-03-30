import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'jello', 'jello')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-jello', 'jello', undefined, true)

export default { single, group }
