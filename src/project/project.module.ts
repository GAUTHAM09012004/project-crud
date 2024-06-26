import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule,ProjectModule],
  controllers: [ProjectController],
  providers : [ProjectService],
  exports: [ProjectService], 
})
export class ProjectModule {}

