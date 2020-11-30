import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  about: boolean = false;
  apps: boolean = false;
  techs: boolean = false;

  constructor() { }
}
