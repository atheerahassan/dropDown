import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) { }

  getSideMenus() {
    return [
    {
      title: 'Business Names',
      subPages: [{
        title: 'Business Name A',
      }, {
        title: 'Business Name B',
      }, {
        
          title: 'Business Name C',
      },
      {
        title: 'Business Name D',
      }]
    }];
  }
}
