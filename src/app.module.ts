import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { CustomersModule } from './customers/customers.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { RacersModule } from './racers/racers.module';
import { SupportersModule } from './supporters/supporters.module';
import { SellersModule } from './sellers/sellers.module';
import { CodersModule } from './coders/coders.module';

@Module({
  imports: [UsersModule, ClientsModule, CustomersModule, DoctorsModule, PatientsModule, RacersModule, SupportersModule, SellersModule, CodersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
