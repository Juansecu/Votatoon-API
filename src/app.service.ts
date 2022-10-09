import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCrossDoman(): string {
    return `<?xml version="1.0" encoding="utf-8" ?>
      <cross-domain-policy>
        <allow-access-from domain="*"/>
      </cross-domain-policy>`;
  }
}
