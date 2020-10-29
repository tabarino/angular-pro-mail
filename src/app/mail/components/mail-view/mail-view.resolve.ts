import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';
import { MailService } from '../../services/mail.service';

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
    constructor(private mailService: MailService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Mail> {
        return this.mailService.getMessage(route.params.id);
    }
}
