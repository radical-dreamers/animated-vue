import AttentionSeekers from './transitions/attention-seekers'
import BouncingEntrances from './transitions/bouncing-entrances'
import BouncingExits from './transitions/bouncing-exits'
import FadingEntrances from './transitions/fading-entrances'

const components = {
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
  'animated-bounce-out-right': BouncingExits.BounceOutRight,
  'animated-fade-in': FadingEntrances.FadeIn,
  'animated-fade-in-down': FadingEntrances.FadeInDown,
  'animated-fade-in-down-big': FadingEntrances.FadeInDownBig,
  'animated-fade-in-left': FadingEntrances.FadeInLeft,
  'animated-fade-in-left-big': FadingEntrances.FadeInLeftBig,
  'animated-fade-in-right': FadingEntrances.FadeInRight,
  'animated-fade-in-right-big': FadingEntrances.FadeInRightBig,
  'animated-fade-in-up': FadingEntrances.FadeInUp,
  'animated-fade-in-up-big': FadingEntrances.FadeInUpBig
}

components.install = (Vue) => {
  for (let key in components) {
    Vue.component(key, components[key])
  }
}

export default components
