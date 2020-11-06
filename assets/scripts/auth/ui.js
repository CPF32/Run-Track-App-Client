'use strict'
const store = require('./../store')

// SIGN-UP HANDLERS
const signUpSuccess = (response) => {
  console.log('Sign-Up: ' + response.user.email)
}

const signUpFailure = () => {
  console.log('Sign-Up Failed')
}

// SIGN-IN HANDLERS
const signInSuccess = (response) => {
  store.user = response.user
  console.log('Sign-In: ' + store.user)
}

const signInFailure = () => {
  console.log('Sign-In Failed')
}

// SIGN-OUT HANDLERS
const signOutSuccess = () => {
  store.user = null
  console.log('Sign-Out')
}

const signOutFailure = () => {
  console.log('Sign-Out Failed')
}

// CHANGE-PASSWORD HANDLERS
const changePasswordSuccess = () => {
  console.log('Password-Change: ' + store.user)
}

const changePasswordFailure = () => {
  console.log('Password-Change Failed')
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
