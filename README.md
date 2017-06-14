# animated-vue
A plugin to use animate.css animations as Vue2 transitions

> **Demo**: Coming soon!

## Installation

Install **animated-vue** from npm

`npm install --save animated-vue`

Import Vue and Animated Vue in your code, and register the plugin:

```javascript
import Vue from 'vue'
import AnimatedVue from 'animated-vue'

Vue.use(AnimatedVue)

```

## How to use

**Animated Vue** offers a series of functional components for Vue, enabling you to
use animate.css animations just as any other Vue component. This reduces the amount
of coding you need and makes your templates easier to read and reason about.

All built-in transitions are created to make sense with the original animation's
purpose. So, a *bounceIn* animation is set to play when a component **appears** while a
*fadeOut* animation is set to play, obviously, when a component **dissappears** from the
screen.

### Single component animations

Built-in animations are easy to use and fast to remember. For example, if you want
to give some part of your vue template a **jello** effect, you simply do:

```html
<template>
  <!-- Here goes some part of your template -->
    <animated-jello>
      <div class="something-i-need-to-animate">
        <!-- Even more stuff here -->
      </div>
    </animated-jello>
  <!-- Here goes the rest of your template-->
</template>
```

### List animations

**Animated Vue** leverages Vue's *transition-group* component to offer you the
very same transitions for a group of elements related to a **v-for** directive.
As you might have guessed, usage has also been simplified, but we also see the
introduction of a new attribute called "tag" ([Learn More](https://vuejs.org/v2/guide/transitions.html#List-Transitions)).

```html
<template>
  <!-- Here goes some part of your template -->
    <animated-group-jello tag="p">
      <span v-for="element in list" class="something-i-need-to-animate">
        <!-- Even more stuff here -->
      </span>
    </animated-group-jello>
  <!-- Here goes the rest of your template-->
</template>
```

The above template will render a "p" tag wrapping your list of rendered elements as
the base to play the animation on.


## What's included

**animated-vue** offers functional components for all of [Animate.css](https://daneden.github.io/animate.css/)
animations, as well as a simple framework for defining new ones.
All components follow the same naming convention:

```
<animated-(group-)?(kebap-cased-animatecss-animation-name)
```

### Built in single component animations

Here's a list of built-in animation components for single component rendering.

#### Attention seekers

* animated-bounce
* animated-flash
* animated-jello
* animated-pulse
* animated-rubber-band
* animated-shake
* animated-swing
* animated-tada
* animated-wobble

#### Bouncing entrances

* animated-bounce-in
* animated-bounce-in-left
* animated-bounce-in-right
* animated-bounce-in-up
* animated-bounce-in-up

#### Bouncing exits

* animated-bounce-out
* animated-bounce-out-down
* animated-bounce-out-left
* animated-bounce-out-right
* animated-bounce-out-up

#### Fading entrances

* animated-fade-in
* animated-fade-in-down
* animated-fade-in-down-big
* animated-fade-in-left
* animated-fade-in-left-big
* animated-fade-in-right
* animated-fade-in-right-big
* animated-fade-in-up
* animated-fade-in-up-big

#### Fading exits

* animated-fade-out
* animated-fade-out-down
* animated-fade-out-down-big
* animated-fade-out-left
* animated-fade-out-left-big
* animated-fade-out-right
* animated-fade-out-right-big
* animated-fade-out-up
* animated-fade-out-up-big

#### Flippers

* animated-flip
* animated-flip-in-x
* animated-flip-in-y
* animated-flip-out-x
* animated-flip-out-y

#### Light speed

* animated-light-speed-in
* animated-light-speed-out

#### Rotating entrances

* animated-rotate-in
* animated-rotate-in-down-left
* animated-rotate-in-down-right
* animated-rotate-in-up-left
* animated-rotate-in-up-right

#### Rotating exits

* animated-rotate-out
* animated-rotate-out-down-left
* animated-rotate-out-down-right
* animated-rotate-out-up-left
* animated-rotate-out-up-right

#### Sliding entrances

* animated-slide-in-down
* animated-slide-in-left
* animated-slide-in-right
* animated-slide-in-up

#### Sliding exits

* animated-slide-out-down
* animated-slide-out-left
* animated-slide-out-right
* animated-slide-out-up

#### Zoom entrances

* animated-zoom-in
* animated-zoom-in-down
* animated-zoom-in-left
* animated-zoom-in-right
* animated-zoom-in-up

#### Zoom exits

* animated-zoom-out
* animated-zoom-out-down
* animated-zoom-out-left
* animated-zoom-out-right
* animated-zoom-out-up

#### Specials

* animated-hinge
* animated-roll-in
* animated-roll-out
* animated-roll-in-out

### Built-in group component animations

Here's a list of built-in animation components for single component rendering.

#### Attention seekers

* animated-group-bounce
* animated-group-flash
* animated-group-jello
* animated-group-pulse
* animated-group-rubber-band
* animated-group-shake
* animated-group-swing
* animated-group-tada
* animated-group-wobble

#### Bouncing entrances

* animated-group-bounce-in
* animated-group-bounce-in-left
* animated-group-bounce-in-right
* animated-group-bounce-in-up
* animated-group-bounce-in-up

#### Bouncing exits

* animated-group-bounce-out
* animated-group-bounce-out-down
* animated-group-bounce-out-left
* animated-group-bounce-out-right
* animated-group-bounce-out-up

#### Fading entrances

* animated-group-fade-in
* animated-group-fade-in-down
* animated-group-fade-in-down-big
* animated-group-fade-in-left
* animated-group-fade-in-left-big
* animated-group-fade-in-right
* animated-group-fade-in-right-big
* animated-group-fade-in-up
* animated-group-fade-in-up-big

#### Fading exits

* animated-group-fade-out
* animated-group-fade-out-down
* animated-group-fade-out-down-big
* animated-group-fade-out-left
* animated-group-fade-out-left-big
* animated-group-fade-out-right
* animated-group-fade-out-right-big
* animated-group-fade-out-up
* animated-group-fade-out-up-big

#### Flippers

* animated-group-flip
* animated-group-flip-in-x
* animated-group-flip-in-y
* animated-group-flip-out-x
* animated-group-flip-out-y

#### Light speed

* animated-group-light-speed-in
* animated-group-light-speed-out

#### Rotating entrances

* animated-group-rotate-in
* animated-group-rotate-in-down-left
* animated-group-rotate-in-down-right
* animated-group-rotate-in-up-left
* animated-group-rotate-in-up-right

#### Rotating exits

* animated-group-rotate-out
* animated-group-rotate-out-down-left
* animated-group-rotate-out-down-right
* animated-group-rotate-out-up-left
* animated-group-rotate-out-up-right

#### Sliding entrances

* animated-group-slide-in-down
* animated-group-slide-in-left
* animated-group-slide-in-right
* animated-group-slide-in-up

#### Sliding exits

* animated-group-slide-out-down
* animated-group-slide-out-left
* animated-group-slide-out-right
* animated-group-slide-out-up

#### Zoom entrances

* animated-group-zoom-in
* animated-group-zoom-in-down
* animated-group-zoom-in-left
* animated-group-zoom-in-right
* animated-group-zoom-in-up

#### Zoom exits

* animated-group-zoom-out
* animated-group-zoom-out-down
* animated-group-zoom-out-left
* animated-group-zoom-out-right
* animated-group-zoom-out-up

#### Specials

* animated-group-hinge
* animated-group-roll-in
* animated-group-roll-out
* animated-group-roll-in-out

## Custom animation definition

**Animated Vue** is not bundled, thus you may use whatever public artifact defined
in it. One of the most useful tools you will find is the *GenericTransition* class.
By creating new instances of it, and with the right parameters, you may define your own custom
animations based on **animate.css**

For example, let's assume you want to apply a `fadeIn` animation when an element appears and a
`bounceOut` one when it dissappears, and assuming it's a transition including a single component:

```javascript
/**
 * custom-fade-in-bounce-out.js
 */
import GenericTransition from 'animated-vue/src/common/generic-transition'

/**
 * The first parameter is the animation's name, the second is the "enter" animation,
 * the third one is the "leave" animation, while the last parameter marks if the transition
 * is a group transition or not (**false** for "single" and **true** for "group")
 * @type {Object}
 */
export default new GenericTransition('custom-fade-in-bounce-out', 'fadeIn', 'bounceOut', false)
```

Then, in your component you can simply do:


```javascript
/**
 * some-component.vue
 */
<template>
  <div>
    <button type="button" @click="toggleContent">Toggle Content</button>
    <custom-fade-in-bounce-out>
      <div v-show="showContent">
        <h1>See my awesome animation</h1>
      </div>
    </custom-fade-in-bounce-out>

  </div>

</template>
<script>
  import CustomFadeInBounceOut from './custom-fade-in-bounce-out.js'

  export default {
    data () {
      return {
        showContent: false
      }
    },
    components: {
      'custom-fade-in-bounce-out': CustomFadeInBounceOut
    },
    methods: {
      toggleContent: {
        this.showContent = !this.showContent
      }
    }
  }
</script>
```

Similarly, you can simply define a list transition using some animate.css animations
by changing the last parameter of the **GenericTransition** constructor to *true*. In this case, you
can also use the "tag" prop when using the component, so you can decide which tag is used when rendering
the element's animation.

```javascript
/**
 * custom-group-fade-in-bounce-out.js
 */
import GenericTransition from 'animated-vue/src/common/generic-transition'

/**
 * This is a group animation you can fill with a v-for block in your template
 * @type {Object}
 */
export default new GenericTransition('custom-fade-in-bounce-out', 'fadeIn', 'bounceIn', true)
```

## License

MIT
