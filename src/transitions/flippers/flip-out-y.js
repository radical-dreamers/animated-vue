import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'flip-out-y', undefined, 'flipOutY')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-flip-out-y', undefined, 'flipOutY', true)

export default { single, group }
