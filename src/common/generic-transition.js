class GenericTransition {
  constructor(enterTransition = '', leaveTransition = '', name, isGroup = false) {
    this.functional = true,
    this.enterTransition = enterTransition
    this.name = name
    this.leaveTransition = leaveTransition
    this.isGroup = isGroup

    let that = this
    /**
     * This is our component's render function. It will render a transition or transition-group
     * component depending on the isGroup setting for this object
     * @param  {Function} createElement Vue's function for creating elements
     * @param  {Object} context All props, data, and stuff our component has
     * @return {Object}              the result of createElement with this
     * component's current parameters.
     */
    this.render = function (createElement, context) {

      var data = {
        props: {
          name: that.name,
          enterActiveClass: that.enterTransition != '' ? 'animated ' + that.enterTransition : '',
          leaveActiveClass: that.leaveTransition != '' ? 'animated' + that.leaveTransition : ''
        },
        on: {
          beforeEnter (el) {
          },
          afterEnter (el) {
          }
        }
      }
      return createElement(that.isGroup ? 'transition-group':'transition', data, context.children)
    }
  }


}

export default GenericTransition
