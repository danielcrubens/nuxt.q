const fs = require('fs')
const path = require('path')

const prismaClientPath = path.join(__dirname, 'node_modules', '.prisma', 'client')

if (!fs.existsSync(prismaClientPath)) {
  fs.mkdirSync(prismaClientPath, { recursive: true })
}