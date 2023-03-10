import { Message } from './../_models/message';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { getPaginatedResult, getPagintionHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessages(pageNumber: number, pageSize:number, container:string) {
    let params = getPagintionHeaders(pageNumber, pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseUrl + 'messages', params, this.http);
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/' + username);
  }

  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.baseUrl + 'messages',
    {recipientUsername: username, content});
  }

  deleteMessage(id: number) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  }
}
