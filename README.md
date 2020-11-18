# Run Trak App
For this project my goal was to create a basic application, in this case a run
tracker, that would allow the user to view community runs, log in, add, edit,
and delete runs. Each run would have an ID, a date of the run, and the distance
as well as pace and short description.

Back-End Repo: https://github.com/CPF32/Run-Track-App

- - - -

## Planning and Development
My plan for this application was to make a user friendly tracker for runs.
As a running enthusiast, having a community of runners who can track and share
their progress together, can really help motivate you in your fitness journey!


I set out to break down my work into segments, starting with the planning and
design and then knocking out the authentification of the users. After that
I was able to complete the run API with only a few minor bumps. As I went on
there were choices I made that I would probably not make again, but it was
all part of build process.

- - - -

## Technologies Used
  - Javascript
  - MongoDB Atlas
  - Express
  - Mongoose
  - HTML // CSS
  - Bootstrap
  - Jquery

- - - -

## Unsolved Problems
As we all do, I had high hopes for this project and set out to create some
really cool components. I wasnt able to knock out every option I set out to
implement, but I got every core aspect completed which I am happy with.

My future goals for this project would be:
  - Mobile friendly (improve dynamic nature of the UI)
  - Add community run feature to frontpage

- - - -

## Wireframes & User Stories
### User Stories
#### Authentication
  - As a user, I want to sign up with email, paswword, password confirmation
  - As a user, I want to sign in with email and password
  - As a user, I want to be able to change my password
  - As a user, I want to sign out

#### Run Tracking
  - As a signed in user, I want to be able to view all my private runs
  - As a signed in user, I want to be able to add new runs to my DB
  - As a signed in user, I want to be able to edit runs with ID
  - As a signed in user, I want to be able to delete previous runs with ID

### Wireframes
#### Logged Out
  - Sign up nav bar dropdown
  - Sign in nav bar dropdown
  - Community run table

#### Logged In
  - Change password nav bar dropdown
  - Sign out nav bar dropdown
  - Table of user runs
  - Add/Edit/Delete run buttons (modal forms)

#### Original Image
![Hand Sketched Wireframe]
