'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const addRunEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.addRun(data)
    .then(ui.addRunSuccess)
    .catch(ui.addRunFailure)
}

const deleteRunEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.deleteRun(data)
    .then(ui.deleteRunSuccess)
    .catch(ui.deleteRunFailure)
}

const editRunEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.editRun(data)
    .then(ui.editRunSuccess)
    .catch(ui.editRunFailure)
}

const indexRunEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.indexRun(data)
    .then(ui.indexRunSuccess)
    .catch(ui.indexRunFailure)
}

module.exports = {
  addRunEvent,
  deleteRunEvent,
  editRunEvent,
  indexRunEvent
}
