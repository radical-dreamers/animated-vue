export default class GenericTransition {
  /**
   * Constructor for the GenericTransition class
   * @param  {String}  name                 The transition's name
   * @param  {String}  [enterTransition=''] animate.css class to assign to a transition's enterActiveClass. Defaults to ''
   * @param  {String}  [leaveTransition=''] animate.css class to assign to a transition's leaveActiveClass. Defaults to ''
   * @param  {Boolean} [isGroup=false]      Whether to render this transition as 'transition' or 'transition-group' component
   * @return {Object}                       The new instance.
   */
  constructor (name, enterTransition = '', leaveTransition = '', isGroup = false) {
    this.functional = true
    this.enterTransition = enterTransition
    this.name = name
    this.leaveTransition = leaveTransition
    this.isGroup = isGroup
    this.props = {
      tag: {
        type: String,
        required: false,
        default: 'p'
      }
    }

    let self = this

    /**
     * This is our component's render function. It will render a transition or transition-group
     * component depending on the isGroup setting for this object
     * @param  {Function} createElement Vue's function for creating elements
     * @param  {Object} context All props, data, and stuff our component has
     * @return {Object}              the result of createElement with this
     * component's current parameters.
     */
    this.render = function (createElement, context) {

      let data = null

      data = {
        props: {
          name: self.name,
          enterActiveClass: self.enterTransition !== '' ? 'animated ' + self.enterTransition : '',
          leaveActiveClass: self.leaveTransition !== '' ? 'animated' + self.leaveTransition : ''
        },
        on: {
          beforeEnter (el) {
          },
          afterEnter (el) {
          }
        }
      }
      if (self.isGroup) {
        data.props.tag = context.props.tag
      }
      return createElement(self.isGroup ? 'transition-group' : 'transition', data, context.children)
    }
  }


}
