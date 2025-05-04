import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException, NotFoundException} from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "generated/prisma";


@Controller('tasks')
export class TaskController {

  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getALlTasks();
  }

  @Post()
  async createTask(@Body() data: Task) {
    return this.taskService.createTask(data);
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const taskFounf =  await this.taskService.getTaskById(Number(id));
    
    if (!taskFounf) throw new NotFoundException('Task not found');

    return taskFounf;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {

    try {
      return await this.taskService.deleteTask(Number(id));
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    try {
      return await this.taskService.updateTask(Number(id), data);
    }
    catch (error) {
      throw new NotFoundException('Task not found');
    }
  }
} 