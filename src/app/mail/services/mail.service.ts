import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Mail } from '../models/mail.interface';
import { map, catchError } from 'rxjs/operators';
import { convertSnaps } from './db-utils';

@Injectable()
export class MailService {
    constructor(private http: HttpClient) { }

    getFolderMessages(folder: string): Observable<Mail[]> {
        let params = new HttpParams();
        params = params.append('folder', folder);
        return this.http.get<Mail[]>('/api/messages', { params }).pipe(
            map(snaps => convertSnaps<Mail>(snaps)),
            catchError(error => throwError(error))
        );
    }

    getMessage(id: string): Observable<Mail> {
        return this.http.get(`/api/messages/${id}`).pipe(
            map((message) => message as Mail),
            catchError(error => throwError(error))
        );
    }
}
