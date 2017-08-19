import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'hinge', 'hinge')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-hinge', 'hinge', undefined, true)

export default { single, group }
