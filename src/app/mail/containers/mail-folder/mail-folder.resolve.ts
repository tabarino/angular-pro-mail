import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Mail } from '../../models/mail.interface';
import { MailService } from '../../services/mail.service';

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]>{
    constructor(private mailService: MailService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail[]> {
        return this.mailService.getFolderMessages(route.params.name);
    }
}
