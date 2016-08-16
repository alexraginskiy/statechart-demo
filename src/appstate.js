import Transis from 'transis'

const AppState = Transis.Object.extend(function() {
  this.prop('view')
  this.prop('filter')
  this.prop('data')
  this.prop('sortedBy')
  this.prop('showDataControls')
  this.prop('modal')
  this.prop('state')
})

export default new AppState()
