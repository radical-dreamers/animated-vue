import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flip-in-y', 'flipInY')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flip-in-y', 'flipInY', undefined, true)

export default { single, group }
