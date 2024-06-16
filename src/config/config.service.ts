import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
 
  getDatabaseUrl(): string {
    return process.env.DATABASE_URL;
  }
  
}

