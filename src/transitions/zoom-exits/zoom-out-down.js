import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-out-down', undefined, 'zoomOutDown')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-out-down', undefined, 'zoomOutDown', true)

export default { single, group }
