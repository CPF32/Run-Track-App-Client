'use strict'
const config = require('./../config')
const store = require('../store')

const addRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/create',
    method: 'POST',
    data: data
  })
}

const deleteRun = () => {
  return $.ajax({
    url: config.apiUrl + '/destroy',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const editRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/update',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const indexRun = (data) => {
  return $.ajax({
    url: config.apiUrl + '/index',
    method: 'POST',
    data: data
  })
}

module.exports = {
  addRun,
  deleteRun,
  editRun,
  indexRun
}
