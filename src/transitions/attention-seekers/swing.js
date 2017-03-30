import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'swing', 'swing')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-swing', 'swing', undefined, true)

export default { single, group }
