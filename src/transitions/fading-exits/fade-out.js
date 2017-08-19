import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-out', undefined, 'fadeOut')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-out', undefined, 'fadeOut', true)

export default { single, group }
