var Core = {
  _s: null,
  onReadyOk: (data)=>{
    console.log(['readyOk',data])
  },
  run: () => {
    var self=this
    self._s = io.connect()
    self._s.on('readyOk',(data)=>{ console.log(data); })
    self._s.emit('ready');
    console.log('ok')
  }
}

Core.run()
