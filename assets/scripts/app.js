'use strict'
const authEvents = require('./auth/events')

$(() => {
  $('input[type="submit"]').mousedown(() => {
    $(this).css('background', '#2ecc71')
  })
  $('input[type="submit"]').mouseup(() => {
    $(this).css('background', '#1abc9c')
  })

  $('#loginanchor').click(() => {
    $('.login').fadeToggle('slow')
    $(this).toggleClass('green')
    $('#message2').text('')
  })
  $('#registeranchor').click(() => {
    $('.register').fadeToggle('slow')
    $(this).toggleClass('green')
    $('#message1').text('')
  })
  $('#changepasswordanchor').click(() => {
    $('.changepassword').fadeToggle('slow')
    $(this).toggleClass('green')
  })
  $('#signoutanchor').click(() => {
    $('.signout').fadeToggle('slow')
    $(this).toggleClass('green')
    $('#message3').text('')
  })
  $(document).mouseup((e) => {
    const container = $('.login')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#loginform').removeClass('green')
      $('#message1').text('')
      $('#message2').text('')
      $('#loginform').trigger('reset')
    }
  })
  $(document).mouseup((e) => {
    const container = $('.register')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#registerform').removeClass('green')
      $('#message1').text('')
      $('#message2').text('')
      $('#registerform').trigger('reset')
    }
  })
  $(document).mouseup((e) => {
    const container = $('.changepassword')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#changepasswordform').removeClass('green')
      $('#message3').text('')
      $('#changepasswordform').trigger('reset')
    }
  })
  $(document).mouseup((e) => {
    const container = $('.signout')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#signoutform').removeClass('green')
      $('#message3').text('')
    }
  })

  $('#registerform').on('submit', authEvents.signUpEvent)
  $('#loginform').on('submit', authEvents.signInEvent)
  $('#signoutform').on('submit', authEvents.signOutEvent)
  $('#changepasswordform').on('submit', authEvents.changePasswordEvent)

  $('#signoutanchor').hide()
  $('#changepasswordanchor').hide()
})
