import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeOrmModuleOptions from '../ormconfig';

import { ClientsModule } from './clients/clients.module';
import { ContestantsModule } from './contestants/contestants.module';
import { RacesModule } from './races/races.module';
import { VotesModule } from './votes/votes.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmModuleOptions,
      entities: [__dirname + '/**/entities/*.entity.{ts,js}'],
      migrations: [__dirname + '/**/migrations/*.migration.{ts,js}']
    }),
    ClientsModule,
    ContestantsModule,
    RacesModule,
    VotesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
