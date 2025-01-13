import { prisma } from '../index'

async function main() {
  try {
    // Test database connection
    console.log('Testing database connection...')
    await prisma.$connect()
    console.log('✅ Database connected successfully')

    // Create a test user
    const testUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        username: 'testuser',
        provider: 'EMAIL',
        password: 'test123',
        rating: 1200
      }
    })
    console.log('✅ Test user created:', testUser)

    // Query the user back
    const users = await prisma.user.findMany()
    console.log('✅ All users:', users)

  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 