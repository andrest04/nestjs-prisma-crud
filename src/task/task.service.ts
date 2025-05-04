// define la coneccion a la base de datos

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { title } from "process";
import { Task } from "generated/prisma";

@Injectable()
export class TaskService {

  constructor(private prisma: PrismaService) {}

  getALlTasks() : Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  getTaskById(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: {
        id: id,
        },
    });
  }

  createTask(data: Task): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
  }

  updateTask(id: number, data: Task): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        description: data.description
    }});
  }

  deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
} 