'use strict'
const authEvents = require('./auth/events')

$(() => {
  $('input[type="submit"]').mousedown(() => {
    $(this).css('background', '#2ecc71')
  })
  $('input[type="submit"]').mouseup(() => {
    $(this).css('background', '#1abc9c')
  })
  $('#loginform').click(() => {
    $('.login').fadeToggle('slow')
    $(this).toggleClass('green')
  })
  $('#registerform').click(() => {
    $('.register').fadeToggle('slow')
    $(this).toggleClass('green')
  })
  $(document).mouseup((e) => {
    const container = $('.login')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#loginform').removeClass('green')
    }
  })
  $(document).mouseup((e) => {
    const container = $('.register')

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide()
      $('#registerform').removeClass('green')
    }
  })

  $('#registerform').on('submit', authEvents.signUpEvent)
  $('#loginform').on('submit', authEvents.signInEvent)
})
