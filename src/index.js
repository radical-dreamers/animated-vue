import fadeIn from './transitions/fade-in'
import AttentionSeekers from './transitions/attention-seekers'
import BouncingEntrances from './transitions/bouncing-entrances'

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
  'animated-bounce-in-right': BouncingEntrances.BounceInRight
}

optoins.install = (Vue) => {
  for (let key in components) {
    Vue.component(key, components[key])
  }
}

export default options
