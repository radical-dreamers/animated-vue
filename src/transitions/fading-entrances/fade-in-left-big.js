import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-in-left-big', 'fadeInLeftBig')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-in-left-big', 'fadeInLeftBig', undefined, true)

export default { single, group }
