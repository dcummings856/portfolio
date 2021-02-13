const github = document.querySelector('.li-github')
const resume = document.querySelector('.li-resume')
const twitter = document.querySelector('.li-twitter')
const instagram = document.querySelector('.li-instagram')

github.addEventListener('click', getGithub)

function getGithub () {
  window.location.href = "https://github.com/dcummings856"
}

resume.addEventListener('click', getResume)

function getResume () {
  window.location.href = ""
}

twitter.addEventListener('click', getTwitter)

function getTwitter () {
  window.location.href = "https://twitter.com/dcummings856"
}

instagram.addEventListener('click', getInstagram)

function getInstagram () {
  window.location.href = "https://www.instagram.com/davecummings/?hl=en"
}