import { Component, OnInit } from '@angular/core';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
  
    constructor(
      private googleSheetService: GoogleSheetService
    ){}

  ngOnInit() {
  }
  async onSubmit(name, subject, email, message) {
    try {
      this.googleSheetService.submitData({ name, subject, email, message }).subscribe(response => {
        alert('Data submitted successfully!');
        console.log('Response:', response);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
