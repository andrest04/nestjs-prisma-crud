import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrimsaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TaskController], // para los controllers
  providers: [TaskService], // para los servicioss
  imports: [PrimsaModule], // para importar modulos
})
export class TaskModule {}