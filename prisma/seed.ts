import { books, categories, ratings, subcategories, tags } from './constants';
import {prisma} from './prisma-client'
import { hashSync } from 'bcrypt'

import slugify from 'slugify';

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
 

    const categoriesWithSlugs = categories.map((category) => ({
        ...category,
        slug: slugify(category.name, {lower: true})
    }))
    await prisma.category.createMany({
        data: categoriesWithSlugs,
        skipDuplicates: true
    })


    const subCategoriesWithSlugs = subcategories.map((subcategory) => ({
        ...subcategory,
        slug: slugify(subcategory.name, {lower: true})
    }))
    await prisma.subCategory.createMany({
        data: subCategoriesWithSlugs,
        skipDuplicates: true
    })

    const tagsWithSlugs = tags.map((tag) => ({
        ...tag,
        slug: slugify(tag.name, {lower: true})
    }))
    await prisma.tag.createMany({
        data: tagsWithSlugs,
        skipDuplicates: true
    })

    

    await prisma.book.createMany({
        data: books,
    })

    await prisma.book.update({
        where: { id: 1 },
        data: {
            tags: {
            connect: [{ id: 1 }]
            }
        }
    });
    await prisma.book.update({
        where: { id: 3 },
        data: {
            tags: {
            connect: [{ id: 1}, {id:2} ]
            }
        }
    },);
    await prisma.book.update({
        where: { id: 4 },
        data: {
            tags: {
            connect: [{ id: 3}, {id:2} ]
            }
        }
    },);

    await prisma.rating.createMany({
        data: ratings
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 150,
                token: 'dsds2121dsds'
            },
            {
                userId: 2,
                totalAmount: 200,
                token: 'awaw2121awaw'
            }
        ]
    })

    await prisma.cartItem.create({
        data: {
            cartId: 1,
            bookId: 3,
            quantity: 2,

        }
    })
}

async function clearData() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "SubCategory" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Book" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Tag" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Rating" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;
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