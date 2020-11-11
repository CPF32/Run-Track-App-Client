'use strict'
const store = require('./../store')

// ADD-RUN HANDLERs
const addRunSuccess = (response) => {
  store.run = response.run
  $('#message4').text('')
  // add to row
  $('#runtablebody2').prepend(
    `<tr>
      <td>${store.run._id}</td>
      <td>${store.run.date}</td>
      <td>${store.run.distance}</td>
      <td>${store.run.pace}</td>
      <td>${store.run.description}</td>
    </tr>`)

  $('#addmodalform').trigger('reset')
}

const addRunFailure = () => {
  $('#message4').text('Add Run Failed. Try Again')
  $('#addmodalform').trigger('reset')
}

const deleteRunSuccess = (response) => {

}

const deleteRunFailure = () => {

}

const editRunSuccess = (response) => {

}

const editRunFailure = () => {

}

const indexRunSuccess = (response) => {
  const runs = response.runs

  console.log(response.runs.length)

  runs.forEach(run => {
    const runHTML = (`
      <tr>
      <td>${response.run._id}</td>
      <td>${response.run.date}</td>
      <td>${response.run.distance}</td>
      <td>${response.run.pace}</td>
      <td>${response.run.description}</td>
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
