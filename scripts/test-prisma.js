(async () => {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  try {
    const r = await prisma.serviceRegistration.create({
      data: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test-'+Date.now()+'@example.com',
        phone: '123',
        address: 'addr',
        city: 'city',
        zipCode: '00000',
        selectedPackage: 'Basic',
      },
    });
    console.log('OK insert id=', r.id);
  } catch (e) {
    console.error('ERROR', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
