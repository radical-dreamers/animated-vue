import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flip-out-x', undefined, 'flipOutX')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flip-out-x', undefined, 'flipOutX', true)

export default { single, group }
