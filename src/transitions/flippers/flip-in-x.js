import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flip-in-x', 'flipInX')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flip-in-x', 'flipInX', undefined, true)

export default { single, group }
