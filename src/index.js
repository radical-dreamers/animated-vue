/**
* This module centralizes all animations from animate.css expressed as functional
* Vue components for transitions.
*/

import AttentionSeekers from './transitions/attention-seekers'
import BouncingEntrances from './transitions/bouncing-entrances'
import BouncingExits from './transitions/bouncing-exits'
import FadingEntrances from './transitions/fading-entrances'
import FadingExits from './transitions/fading-exits'
import Flippers from './transitions/flippers'
import LightSpeed from './transitions/light-speed'
import RotatingEntrances from './transitions/rotating-entrances'
import RotatingExits from './transitions/rotating-exits'
import SlidingEntrances from './transitions/sliding-entrances'
import SlidingExits from './transitions/sliding-exits'
import ZoomEntrances from './transitions/zoom-entrances'
import ZoomExits from './transitions/zoom-exits'
import Specials from './transitions/specials'

const components = {
  AttentionSeekers,
  BouncingEntrances,
  BouncingExits,
  FadingEntrances,
  FadingExits,
  Flippers,
  LightSpeed,
  RotatingEntrances,
  RotatingExits,
  SlidingEntrances,
  SlidingExits,
  ZoomEntrances,
  ZoomExits,
  Specials
}

components.install = (Vue) => {

  // Iterate over component categories so we can install them
  for (let index in components) {
    if (index === 'install') {
      continue
    }

    // Iterate over each component of each category
    for (let key in components[index]) {

      let animation = components[index][key]

      // declare out component according to its name
      Vue.component(animation.single.name, animation.single)
      Vue.component(animation.group.name, animation.group)
    }
  }
}

export default components
