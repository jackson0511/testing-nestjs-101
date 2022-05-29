import { Resolver } from '@nestjs/graphql';
import { DoctorsService } from './doctors.service';

@Resolver()
export class DoctorsResolver {
  constructor(private readonly doctorsService: DoctorsService) {}
}
