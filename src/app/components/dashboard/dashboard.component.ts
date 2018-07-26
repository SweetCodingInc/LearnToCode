import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExecutionResponse } from '../../../../server/src/server/models/execute.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

  @HostBinding('class') klass = 'f c';
  private API_URL = 'http://localhost:3000/execute';

  editorOptions = { theme: 'vs-dark', language: 'c' };
  code = '';
  stdout = '';
  stderr = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  run() {
    this.http.post(this.API_URL, { language: 'c', code: this.code })
      .subscribe((response: IExecutionResponse) => {
        console.log(response);
        this.stderr = response.stderr;
        this.stdout = response.stdout;
      });
  }

}
