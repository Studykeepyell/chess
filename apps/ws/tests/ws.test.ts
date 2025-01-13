import WebSocket from 'ws'

const ws = new WebSocket('ws://localhost:8080')

ws.on('open', () => {
  console.log('✅ Connected to WebSocket server')
  
  // Test authentication
  const authMessage = {
    type: 'auth',
    data: {
      email: 'test@example.com',
      password: 'test123'
    }
  }
  
  ws.send(JSON.stringify(authMessage))
})

ws.on('message', (data) => {
  console.log('Received:', JSON.parse(data.toString()))
})

ws.on('error', (error) => {
  console.error('❌ WebSocket error:', error)
})

// Close connection after 5 seconds
setTimeout(() => {
  ws.close()
  console.log('Connection closed')
  process.exit(0)
}, 5000) 