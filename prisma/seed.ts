import { books, categories, ratings, subcategories, tags } from './constants';
import {prisma} from './prisma-client'
import { hashSync } from 'bcrypt'

async function generateData() {
    await prisma.user.createMany({
        data: [{
            fullName: 'User User',
            email: 'user@test.ru',
            password: hashSync('1111',10),
            role: 'USER',
            verified: new Date()
        },{ fullName: 'Admin Admin',
            email: 'admin@test.ru',
            password: hashSync('2222',10),
            role: 'ADMIN',
            verified: new Date()}]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.subCategory.createMany({
        data: subcategories,
    })

    await prisma.book.createMany({
        data: books,
    })

    await prisma.tag.createMany({
        data: tags,
    })

    await prisma.rating.createMany({
        data: ratings,
    })
}

async function clearData() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "SubCategory" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Book" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Tag" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ratings" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await clearData()
        await  generateData()
    } catch (e) {
        console.error(e)
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})