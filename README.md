# animated-vue
A plugin to use animate.css animations as Vue2 transitions

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

#### Bounding entrances

* animated-bounce-in
* animated-bounce-in-left
* animated-bounce-in-right
* animated-bounce-in-up
* animated-bounce-in-up

[TODO: Write the complete list]

### Build in group component animations

[TODO: Write the complete list]

## Custom animation definition

[TODO: Explain how to define custom animations]

## License

MIT
