const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.missionCommander.upsert({
      where: { name: 'Carlo' },
      update: {},
      create: {
        name: 'Carlo',
				username: 'carloGilmar',
				mainStack: 'Full Stack',
        currentEnrollment: true,
        hasAzureCertification :true,
      },
    });

    const woopa1 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
        name: 'Rodrigo ',
				username: 'romarpla ',
				mainStack: 'Full Stack',
        currentEnrollment: true,
        hasAzureCertification :true,
      },
    });

    const woopa2 = await prisma.missionCommander.upsert({
      where: { name: 'Fernanda' },
      update: {},
      create: {
        name: 'Fernanda ',
				username: 'fernandaOchoa ',
				mainStack: 'Full Stack',
        currentEnrollment: true,
        hasAzureCertification :true,
      },
    });


    console.log('Create 3 missions');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();