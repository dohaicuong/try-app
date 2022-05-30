import { server } from './server'

server.start()

process.on('SIGTERM', () => {
  console.log('Closing http server.')
  server.stop().then(() => {
    console.log('Http server closed.')
  })
})
