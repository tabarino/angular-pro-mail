import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-mail-view',
    templateUrl: './mail-view.component.html',
    styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
    message$: Observable<Mail>;
    reply = '';
    hasUnsavedChanges = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.message$ = this.route.data.pipe(pluck('message'));
        this.route.params.subscribe(() => {
            this.reply = '';
            this.hasUnsavedChanges = false;
        });
    }

    updateReply(value: string) {
        this.reply = value;
        this.hasUnsavedChanges = true;
    }

    sendReply() {
        console.log('Sent!', this.reply);
        this.reply = '';
        this.hasUnsavedChanges = false;
    }
}
