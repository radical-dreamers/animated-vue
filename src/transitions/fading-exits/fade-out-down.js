import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-out-down', undefined, 'fadeOutDown')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-out-down', undefined, 'fadeOutDown', true)

export default { single, group }
