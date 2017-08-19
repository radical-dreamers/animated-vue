import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'zoom-out-up', undefined, 'zoomOutUp')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-zoom-out-up', undefined, 'zoomOutUp', true)

export default { single, group }
