module.exports = (io) => {
  io.route('ready',(req)=>{
    if (req.session.op > 300)
      req.session.op = 10
    req.session.op++
    req.session.save(()=>{
      req.io.emit('readyOk',{op:req.session.op})
      console.log(['connect',req])
    })
  })
}
