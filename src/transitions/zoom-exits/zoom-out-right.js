import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-out-right', undefined, 'zoomOutRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-out-right', undefined, 'zoomOutRight', true)

export default { single, group }
