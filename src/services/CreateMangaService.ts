import { PrismaClient } from ".prisma/client";

class CreateMangaService {
  async execute(
    name: string,
    num_acquired: number,
    num_released: number,
    periodicity: string,
    finished: boolean
  ) {
    const prisma = new PrismaClient();
    //All Prisma queries go here
    if (!name) {
      throw new Error("Nome incorreto!");
    }

    const mangaAlreadyExists = await prisma.manga.findFirst({
      where: {
        name: name,
      },
    });

    if (mangaAlreadyExists) {
      throw new Error("Mangá ja cadastrado!");
    }

    async function main() {
      const manga = await prisma.manga.create({
        data: {
          name: name,
          num_acquired: num_acquired,
          num_released: num_released,
          periodicity: periodicity,
          finished: finished,
        },
      });
      return manga;
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    // const allMangas = await this.prisma.manga.findMany();
    //console.dir(allMangas, { depth: null });
  }
}

export { CreateMangaService };
