import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { firestore } from 'firebase';

export interface ContactFormResponse {
  contactName?: string;
  name?: string;
  email: string;
  message: string;
  phone: string;
  sent: boolean;
  submitted: string | firestore.Timestamp;
}

export interface ContactMessage {
  id: string;
  contactName: string;
  email: string;
  message: string;
  phone: string;
  submitted: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  contactFormResponses$: Observable<ContactMessage[]> = this.af
    .collection<ContactFormResponse>('messages')
    .snapshotChanges()
    .pipe(
      map((arr: DocumentChangeAction<ContactFormResponse>[]) => {
        return arr.map(doc => {
          const {
            contactName,
            name,
            email,
            message,
            phone,
            submitted
          } = doc.payload.doc.data() as ContactFormResponse;

          let submittedDate: Date;

          if (submitted !== undefined) {
            submittedDate = isTimeStamp(submitted)
              ? submitted.toDate()
              : new Date(submitted);
          } else {
            submittedDate = new Date('3/1/2019');
          }

          return {
            id: doc.payload.doc.id,
            contactName: name || contactName,
            email,
            message,
            phone,
            submitted: submittedDate
          };
        });
      }),
      map((messages: ContactMessage[]) =>
        messages.sort((a, b) => b.submitted.getTime() - a.submitted.getTime())
      )
    );

  constructor(private af: AngularFirestore) {}
}

function isTimeStamp(
  timestamp: string | firestore.Timestamp
): timestamp is firestore.Timestamp {
  return (timestamp as firestore.Timestamp).nanoseconds !== undefined;
}
