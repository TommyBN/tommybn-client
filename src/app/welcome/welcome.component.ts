import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  formValid: boolean = false;
  showName: boolean = false;
  name: string = "";
  hollyNumber: number = 0;

  constructor() { }

  ngOnInit() { }

  checkValidation() {
    this.formValid = this.name.length > 1 ? true : false
  }
  
  calculateLetters() {
    let tempNumber = 0;
    for(let letter of this.name) {
      tempNumber+=letter.charCodeAt(0)
    }
    this.hollyNumber = this.digitalRoot(tempNumber)
  }

  digitalRoot(number) {
    let strin = number.toString()
    let len = strin.length
    if (len == 1) return number
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += parseInt(strin[i])
    }
    return this.digitalRoot(sum)
  }

  clear() {
    this.showName = false;
  }

}
