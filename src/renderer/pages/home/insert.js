// eslint-disable-next-line no-unused-vars
var selectPlugin = {

  startSelect: function () {
    this.addEvent(document.body, 'mouseover', this.mouseOverHandler)
    this.addEvent(document.body, 'mouseout', this.mouseOutHandler)
  },

  stopSelect: function () {
    document.body.style.cursor = 'auto'
    this.removeEvent(document.body, 'mouseover', this.mouseOverHandler)
    this.removeEvent(document.body, 'mouseout', this.mouseOutHandler)
  },

  mouseOverHandler: function (e) {
    e.stopPropagation()
    e.target.style.backgroundColor = 'red'
  },

  mouseOutHandler: function (e) {
    e.stopPropagation()
    e.target.style.backgroundColor = ''
  },

  mouseDownHandler: function (e) {
    e.stopPropagation()
  },

  addEvent: function (element, eventName, handler) {
    element.addEventListener(eventName, handler, false)
  },

  removeEvent: function (element, eventName, handler) {
    element.removeEventListener(eventName, handler, false)
  }
}

var selectPluginText = `var selectPlugin = {

  startSelect: function () {
    this.addEvent(document.body, 'mouseover', this.mouseOverHandler)
    this.addEvent(document.body, 'mouseout', this.mouseOutHandler)
  },

  stopSelect: function () {
    document.body.style.cursor = 'auto'
    this.removeEvent(document.body, 'mouseover', this.mouseOverHandler)
    this.removeEvent(document.body, 'mouseout', this.mouseOutHandler)
  },

  mouseOverHandler: function (e) {
    e.stopPropagation()
    e.target.style.backgroundColor = 'red'
  },

  mouseOutHandler: function (e) {
    e.stopPropagation()
    e.target.style.backgroundColor = ''
  },

  mouseDownHandler: function (e) {
    e.stopPropagation()
  },

  addEvent: function (element, eventName, handler) {
    element.addEventListener(eventName, handler, false)
  },

  removeEvent: function (element, eventName, handler) {
    element.removeEventListener(eventName, handler, false)
  }
}`

export default selectPluginText
