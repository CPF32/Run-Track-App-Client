'use strict'
const store = require('./../store')

// SIGN-UP HANDLERS
const signUpSuccess = (response) => {
  console.log('Sign-Up: ' + response.user.email)

  $('#message2').text('Sign-Up Successful: ' + response.user.email)
  $('#registerform').trigger('reset')
}

const signUpFailure = () => {
  console.log('Sign-Up Failed')

  $('#message2').text('Sign-Up Failed. Try Again')
  $('#registerform').trigger('reset')
}

// SIGN-IN HANDLERS
const signInSuccess = (response) => {
  store.user = response.user

  console.log('Sign-In: ' + store.user)

  $('#loginform').trigger('reset')
  $('#loginanchor').hide()
  $('#registeranchor').hide()
  $('.login').hide()
  $('#signoutanchor').show()
  $('#changepasswordanchor').show()
  $('#addrun').show()
  $('#editrun').show()
  $('#postlogin').show()
  $('#prelogin').hide()
}

const signInFailure = () => {
  console.log('Sign-In Failed')

  $('#message1').text('Sign-In Failed. Try Again')
  $('#loginform').trigger('reset')
}

// SIGN-OUT HANDLERS
const signOutSuccess = () => {
  console.log('Sign-Out')

  store.user = null
  $('#signoutanchor').hide()
  $('#changepasswordanchor').hide()
  $('.signout').hide()
  $('#loginanchor').show()
  $('#registeranchor').show()
  $('#addrun').hide()
  $('#editrun').hide()
  $('#postlogin').hide()
  $('#prelogin').show()
}

const signOutFailure = () => {
  console.log('Sign-Out Failed')
}

// CHANGE-PASSWORD HANDLERS
const changePasswordSuccess = () => {
  console.log('Password-Change: ' + store.user)

  $('#message3').text('Password Successfully Changed.')
  $('#changepasswordform').trigger('reset')
}

const changePasswordFailure = () => {
  console.log('Password-Change Failed')

  $('#message3').text('Change Password Failed. Try Again')
  $('#changepasswordform').trigger('reset')
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
