import { prisma } from '../../../prisma/prisma-client';
import { ProductsContent } from '../components';

export default async function Products() {
  const books = await prisma.book.findMany();
  return <ProductsContent items={books} />;
}
