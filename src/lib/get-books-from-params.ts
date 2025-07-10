//на основании параметров из адресной строки, мы делаем запрос к бд 
// для получения книг по метке (category, subcstegory, tag)
//  /products/subcategory/biografii-i-memuary будет искать в сущности Subcategory поле
// со значение slug: 'biografii-i-memuary' и с этого поля мы достаем все привязанные книги,
// а так же название поля для отображения заголовка



import { Book } from "@prisma/client";
import { prisma } from "../../prisma/prisma-client";

interface ReturnProps {
    books: Book[]
    title: string 
}

export const getBooksFromParams = async (type: string, slug: string): Promise<ReturnProps> => {
    let books:Book[] = []
    let title = ''
    try {
          if (type === 'subcategory') {
            const result = await prisma.subCategory.findUnique({
              where: { slug: slug },
              include: { books: true },
            });
            if (result != undefined) {
                books = result?.books
                title = result?.name
            }
            
            
          } else if (type === 'category') {
            const result = await prisma.category.findUnique({
              where: { slug: slug },
              include: { books: true },
            });
            if (result != undefined) {
                books = result?.books
                title = result?.name
            }
            
          } else if (type === 'tag') {
            const result = await prisma.tag.findUnique({
              where: { slug: slug },
              include: { books: true },
            });
            if (result != undefined) {
                books = result?.books
                title = result?.name
            }
            
          }
        } catch (e) {
          console.log(e);
        }
        return {books, title}
      }
