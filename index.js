function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const spy = "HELLO"
}

function logWhisper(string) {
  var spy = "hello"
  console.log(spy)
  console.log.restore()
}