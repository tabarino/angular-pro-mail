import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
    selector: 'mail-item',
    templateUrl: './mail-item.component.html',
    styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {
    @Input() message: Mail;

    constructor() { }

    ngOnInit(): void {
    }
}
