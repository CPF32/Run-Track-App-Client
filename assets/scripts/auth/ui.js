'use strict'
const store = require('./../store')

// SIGN-UP HANDLERS
const signUpSuccess = (response) => {
  $('#message2').text('Sign-Up Successful: ' + response.user.email)
  $('#registerform').trigger('reset')
}

const signUpFailure = () => {
  $('#message2').text('Sign-Up Failed. Try Again')
  $('#registerform').trigger('reset')
}

// SIGN-IN HANDLERS
const signInSuccess = (response) => {
  store.user = response.user

  $('#loginform').trigger('reset')
  $('#loginanchor').hide()
  $('#registeranchor').hide()
  $('.login').hide()
  $('#signoutanchor').show()
  $('#changepasswordanchor').show()
  $('#addrun').show()
  $('#editrun').show()
  $('#deleterun').show()
  $('#postlogin').show()
  $('#prelogin').hide()
  $('#postloadtable').show()
  $('#preloadtable').hide()
  // $('#runtablebody2').show()
}

const signInFailure = () => {
  $('#message1').text('Sign-In Failed. Try Again')
  $('#loginform').trigger('reset')
}

// SIGN-OUT HANDLERS
const signOutSuccess = () => {
  $('#signoutanchor').hide()
  $('#changepasswordanchor').hide()
  $('.signout').hide()
  $('#loginanchor').show()
  $('#registeranchor').show()
  $('#addrun').hide()
  $('#editrun').hide()
  $('#deleterun').hide()
  $('#postlogin').hide()
  $('#prelogin').show()
  $('#postloadtable').hide()
  $('#preloadtable').show()
  $('#runtablebody2').html('')
}

const signOutFailure = () => {
  console.log('Sign-Out Failed')
}

// CHANGE-PASSWORD HANDLERS
const changePasswordSuccess = () => {
  $('#message3').text('Password Successfully Changed.')
  $('#changepasswordform').trigger('reset')
}

const changePasswordFailure = () => {
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
