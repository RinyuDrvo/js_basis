function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject, ms);
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));