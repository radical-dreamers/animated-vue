import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rubber-band', undefined, 'rubberBand')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rubber-band', undefined, 'rubberBand', true)

export default { single, group }
