import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function getTodos() {
    const todos = await prisma.todos.findMany();
    console.log(todos);
}

async function createTodo() {
    const newTodo = await prisma.todos.create({
        data: {
            title: 'タスク1',
            details: '詳細情報',
            status: 'pending',
        },
    });

    console.log(newTodo);
}

export default async function main() {
    await createTodo();
    await getTodos();
}