import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Criar usuários
    const users = await prisma.user.createMany({
      data: [
        {
          id: uuidv4(),
          userName: 'superadmin',
          fullName: 'Super Admin',
          email: 'superadmin@example.com',
          password: 'password123', // Lembre-se de hashear a senha em um ambiente real
          groups: ['SUPERADMIN'],
        },
        {
          id: uuidv4(),
          userName: 'admin',
          fullName: 'Admin User',
          email: 'admin@example.com',
          password: 'password456', // Lembre-se de hashear a senha em um ambiente real
          groups: ['ADMIN'],
        },
        {
          id: uuidv4(),
          userName: 'user1',
          fullName: 'Regular User 1',
          email: 'user1@example.com',
          password: 'password789', // Lembre-se de hashear a senha em um ambiente real
          groups: ['USER'],
        },
        {
          id: uuidv4(),
          userName: 'user2',
          fullName: 'Regular User 2',
          email: 'user2@example.com',
          password: 'password101', // Lembre-se de hashear a senha em um ambiente real
          groups: ['USER'],
        },
      ],
      skipDuplicates: true, // Evita erros se os usuários já existirem
    });

    // Criar eventos
    const events = await prisma.event.createMany({
      data: [
        {
          id: uuidv4(),
          organizerId: users.count > 0 ? users.data[0].id : undefined, // Associa ao primeiro usuário criado
          name: 'Tech Conference 2024',
          description: 'A conference about the latest technologies.',
          date: new Date('2024-12-10T09:00:00.000Z'),
          endDate: new Date('2024-12-12T17:00:00.000Z'),
          location: 'São Paulo, Brasil',
          categories: ['Technology', 'Innovation', 'Software'],
          status: 'PUBLISHED',
        },
        {
          id: uuidv4(),
          organizerId: users.count > 1 ? users.data[1].id : undefined, // Associa ao segundo usuário criado
          name: 'Music Festival',
          description: 'A festival with various music genres.',
          date: new Date('2024-07-15T18:00:00.000Z'),
          location: 'Rio de Janeiro, Brasil',
          categories: ['Music', 'Festival', 'Live'],
          status: 'PUBLISHED',
        },
      ],
      skipDuplicates: true,
    });

    // Criar ingressos para o primeiro evento
    if (events.count > 0) {
      await prisma.ticket.createMany({
        data: [
          {
            id: uuidv4(),
            eventId: events.data[0].id,
            name: 'Pista',
            price: 150.00,
            stock: 100,
            availableStock: 100,
          },
          {
            id: uuidv4(),
            eventId: events.data[0].id,
            name: 'VIP',
            price: 300.00,
            stock: 50,
            availableStock: 50,
          },
        ],
        skipDuplicates: true,
      });
    }

    console.log('Seed completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();