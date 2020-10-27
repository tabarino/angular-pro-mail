import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Mail } from '../../models/mail.interface';

@Component({
    selector: 'mail-folder',
    templateUrl: './mail-folder.component.html',
    styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {
    title$: Observable<string>;
    messages$: Observable<Mail[]>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.title$ = this.route.params.pipe(pluck('name'));
        this.messages$ = this.route.data.pipe(pluck('messages'));
    }
}
