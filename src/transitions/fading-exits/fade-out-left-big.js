import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-out-left-big', undefined, 'fadeOutLeftBig')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-out-left-big', undefined, 'fadeOutLeftBig', true)

export default { single, group }
