'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const appApi = require('./../app/api')
const appUi = require('./../app/ui')

const signUpEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const signInEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .then(appApi.indexRun)
    .then(appUi.indexRunSuccess)
    .catch(ui.signInFailure)
}

const signOutEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changePasswordEvent = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  signUpEvent,
  signInEvent,
  signOutEvent,
  changePasswordEvent
}
