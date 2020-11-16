'use strict'
// const store = require('./../store')

// ADD-RUN HANDLERs
const addRunSuccess = (response) => {
  const run = response.run

  $('#message4').text('')

  $('#runtablebody2').prepend(
    `<tr>
      <td>${run._id}</td>
      <td>${run.date}</td>
      <td>${run.distance}</td>
      <td>${run.pace}</td>
      <td>${run.description}</td>
    </tr>`)

  $('#message4').text('Add Run Success')
  $('#addmodalform').trigger('reset')
}

const addRunFailure = () => {
  $('#message4').text('Add Run Failed')
  $('#addmodalform').trigger('reset')
}

const deleteRunSuccess = (response) => {
  $('#message6').text('')

  $('#message6').text('Delete Run Success')
  $('#deletemodalform').trigger('reset')
}

const deleteRunFailure = () => {
  $('#message6').text('Delete Run Failed')

  $('#deletemodalform').trigger('reset')
}

const editRunSuccess = (response) => {
  $('#message5').text('')

  $('#message5').text('Edit Run Success')
  $('#editmodalform').trigger('reset')
}

const editRunFailure = () => {
  $('#message5').text('Edit Run Failed')
  $('#editmodalform').trigger('reset')
}

const indexRunSuccess = (response) => {
  const runs = response.runs

  runs.forEach(run => {
    const runHTML = (`
      <tr>
      <td>${run._id}</td>
      <td>${run.date}</td>
      <td>${run.distance}</td>
      <td>${run.pace}</td>
      <td>${run.description}</td>
      </tr>`
    )
    $('#runtablebody2').prepend(runHTML)
  })
}

const indexRunFailure = () => {
  console.log('Index Run Failed')
}

module.exports = {
  addRunSuccess,
  addRunFailure,
  deleteRunSuccess,
  deleteRunFailure,
  editRunSuccess,
  editRunFailure,
  indexRunSuccess,
  indexRunFailure
}
