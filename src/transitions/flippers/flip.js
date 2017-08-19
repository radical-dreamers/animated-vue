import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flip', 'flip')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flip', 'flip', undefined, true)

export default { single, group }
