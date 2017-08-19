import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-out-left', undefined, 'zoomOutLeft')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-out-left', undefined, 'zoomOutLeft', true)

export default { single, group }
