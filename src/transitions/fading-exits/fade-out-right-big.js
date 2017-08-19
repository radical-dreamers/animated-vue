import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'fade-out-right-big', undefined, 'fadeOutRightBig')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-fade-out-right-big', undefined, 'fadeOutRightBig', true)

export default { single, group }
