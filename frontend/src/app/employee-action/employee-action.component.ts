import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.css']
})
export class EmployeeActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;

  selectedGenderBtnValue:string="all";
  @Output()
  genderOnChangeEventEmitter:EventEmitter<string>=new EventEmitter<string>();

  onChangeSelectedGenderBtnValue()
  {
    this.genderOnChangeEventEmitter.emit(this.selectedGenderBtnValue);
    console.log(this.selectedGenderBtnValue);
  }
}
