'use strict'
const store = require('./../store')

// SIGN-UP HANDLERS
const signUpSuccess = (response) => {

}

const signUpFailure = () => {

}

// SIGN-IN HANDLERS
const signInSuccess = (response) => {
  store.user = response.user
}

const signInFailure = () => {

}

// SIGN-OUT HANDLERS
const signOutSuccess = () => {
  store.user = null
}

const signOutFailure = () => {

}

// CHANGE-PASSWORD HANDLERS
const changePasswordSuccess = () => {

}

const changePasswordFailure = () => {

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
