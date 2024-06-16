import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';
import { TrpcModule } from './trpc/trpc.module';
import { ConfigModule } from './config/config.module';
import { ProjectApplicationModule } from './project-application/project-application.module';
import { ProjectSelectionModule } from './project-selection/project-selection.module';


@Module({
  imports: [PrismaModule, ProjectModule, TrpcModule, ConfigModule, ProjectApplicationModule, ProjectSelectionModule],
})
export class AppModule {}
