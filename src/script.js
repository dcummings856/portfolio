const github = document.querySelector('.li-github')
const resume = document.querySelector('.li-resume')
const twitter = document.querySelector('.li-twitter')
const instagram = document.querySelector('.li-instagram')

github.addEventListener('click', getGithub)

function getGithub () {
  window.open("https://github.com/dcummings856")
}

resume.addEventListener('click', getResume)

function getResume () {
  window.location.href = ""
}

twitter.addEventListener('click', getTwitter)

function getTwitter () {
  window.open("https://twitter.com/dcummings856")
}

instagram.addEventListener('click', getInstagram)

function getInstagram () {
  window.open("https://www.instagram.com/davecummings/?hl=en")
}