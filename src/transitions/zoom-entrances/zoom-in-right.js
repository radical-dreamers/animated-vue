import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-in-right', 'zoomInRight')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-in-right', 'zoomInRight', undefined, true)

export default { single, group }
