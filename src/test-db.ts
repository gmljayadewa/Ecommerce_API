import { prisma } from "./config/prisma";

async function main() {
  const count = await prisma.product.___();
  console.log("Products:", count);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
