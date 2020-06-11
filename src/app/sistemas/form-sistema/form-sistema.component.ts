import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'abanca-form-sistema',
  templateUrl: './form-sistema.component.html',
  styleUrls: ['./form-sistema.component.scss']
})
export class FormSistemaComponent  {
  disabledCheck = true;


  sistemasForm = this.fb.group({
    sistemaInformacion_es: [null, [Validators.required]],
    sistemaInformacion_en: [null, [Validators.required]],
    critico: [null, [Validators.required]],
    });


    @Input() familias;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onClickSelect(option){
    if(option == true){
      this.disabledCheck = false;
    }else if(option == false){
      this.disabledCheck = true;
    }
  }

}

