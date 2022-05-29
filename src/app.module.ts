import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [UsersModule, ClientsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
