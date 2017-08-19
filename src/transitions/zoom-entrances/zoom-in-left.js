import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-in-left', 'zoomInLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-in-left', 'zoomInLeft', undefined, true)

export default { single, group }
