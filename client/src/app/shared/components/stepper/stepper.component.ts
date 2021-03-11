import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper implements OnInit {

  @Input() linearModeSelected : boolean;

  ngOnInit() {
    this.linear = this.linearModeSelected;
  }

  onClick(index : number){
    this.selectedIndex =index;
    console.log("this.selectedIndex =>",this.selectedIndex );
  }

}
