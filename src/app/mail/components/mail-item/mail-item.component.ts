import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from '../../models/mail.interface';

@Component({
    selector: 'mail-item',
    templateUrl: './mail-item.component.html',
    styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {
    @Input() message: Mail;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    navigateToMessage() {
        this.router.navigate(['', { outlets: { pane: ['message', this.message.id] } }]);
    }
}
