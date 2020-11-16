'use strict'
const config = require('./../config')
const store = require('../store')

const addRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const deleteRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + data.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const editRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + data.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const indexRun = () => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  addRun,
  deleteRun,
  editRun,
  indexRun
}
