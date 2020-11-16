'use strict'
const authEvents = require('./auth/events')
const appEvents = require('./app/events')

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

  $('#addmodalform').on('submit', appEvents.addRunEvent)
  $('#editmodalform').on('submit', appEvents.editRunEvent)
  $('#deletemodalform').on('submit', appEvents.deleteRunEvent)

  $(document).mouseup((e) => {
    const container = $('#addmodal')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#addmodalform').removeClass('green')
      $('#message4').text('')
      $('#addmodalform').trigger('reset')
    }
  })
  $(document).mouseup((e) => {
    const container = $('#editmodal')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#editmodalform').removeClass('green')
      $('#message5').text('')
      $('#editmodalform').trigger('reset')
    }
  })
  $(document).mouseup((e) => {
    const container = $('#deletemodal')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#deletemodalform').removeClass('green')
      $('#message6').text('')
      $('#deletemodalform').trigger('reset')
    }
  })

  $('#preloadtable').hide()
  $('#signoutanchor').hide()
  $('#changepasswordanchor').hide()
  $('#addrun').hide()
  $('#editrun').hide()
  $('#deleterun').hide()
  $('#postlogin').hide()
})
