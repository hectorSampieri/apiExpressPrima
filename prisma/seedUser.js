const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.user.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				lang: 'Español',
				missionCommander: 'Carlo',
        enrollments: 3,
        hasCertification :true,
      },
    });

    const woopa1 = await prisma.user.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa2',
				lang: 'Ingles',
				missionCommander: 'Carlo',
        enrollments: 2,
        hasCertification :false,
      },
    });

    const woopa2 = await prisma.user.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa3',
				lang: 'Español',
				missionCommander: 'Carlo',
        enrollments: 0,
        hasCertification :false,
      },
    });

    const woopa3 = await prisma.user.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa4',
				lang: 'Español',
				missionCommander: 'Carlo',
        enrollments: 2,
        hasCertification :true,
      },
    });

    console.log('Create 5 userts');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();