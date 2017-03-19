import fadeIn from './transitions/fade-in'
import AttentionSeekers from './transitions/attention-seekers'
import BouncingEntrances from './transitions/bouncing-entrances'
import BouncingExits from './transitions/bouncing-exits'

const components = {
  'animated-fade-in': fadeIn,
  'animated-bounce': AttentionSeekers.Bounce,
  'animated-flash': AttentionSeekers.Flash,
  'animated-jello': AttentionSeekers.Jello,
  'animated-pulse': AttentionSeekers.Pulse,
  'animated-rubber-band': AttentionSeekers.RubberBand,
  'animated-shake': AttentionSeekers.Shake,
  'animated-swing': AttentionSeekers.Swing,
  'animated-tada': AttentionSeekers.Tada,
  'animated-wobble': AttentionSeekers.Wobble,
  'animated-bounce-in': BouncingEntrances.BounceIn,
  'animated-bounce-in-down': BouncingEntrances.BounceInDown,
  'animated-bounce-in-left': BouncingEntrances.BounceInLeft,
  'animated-bounce-in-up': BouncingEntrances.BounceInUp,
  'animated-bounce-in-right': BouncingEntrances.BounceInRight,
  'animated-bounce-out': BouncingExits.BounceOut,
  'animated-bounce-out-up': BouncingExits.BounceOutUp,
  'animated-bounce-out-left': BouncingExits.BounceOutLeft,
  'animated-bounce-out-down': BouncingExits.BounceOutDown,
  'animated-bounce-out-right': BouncingExits.BounceOutRight
}

components.install = (Vue) => {
  for (let key in components) {
    Vue.component(key, components[key])
  }
}

export default components
