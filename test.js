function timeout(ms) {
  return new Promise((res,rej) => {
    setTimeout(res,ms,'done');
  })
}
timeout(2000).then((val) => {
  console.log(val);
})
