import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { isUndefined } from 'util';



@Component({
  selector: 'abanca-form-sistema',
  templateUrl: './form-sistema.component.html',
  styleUrls: ['./form-sistema.component.scss']
})
export class FormSistemaComponent  {
  sistemasForm : FormGroup;

  disabledCheck = true;


  // sistemasForm = this.fb.group({
  //   sistemaInformacion_es: [null, [Validators.required]],
  //   sistemaInformacion_en: [null, [Validators.required]],
  //   critico: [null, [Validators.required]],
  //   });

    @Input() sistema;
    @Input() familias;
    criticidad;
    titulo;

    dataSistemaEs = '';

  constructor(private fb: FormBuilder,
    private location: Location) {

    }

  ngOnInit() {
        if(isUndefined(this.sistema.id))
          this.titulo = "Nuevo Sistema";
        else
          this.titulo = "Modificar Sistema";
        this.criticidad = this.sistema.criticidad;
        this.dataSistemaEs = this.sistema.sistemaInformacion;
        console.log(this.criticidad)

        this.sistemasForm = this.fb.group({
          sistemaInformacion_es: [this.dataSistemaEs, [Validators.required]],
          sistemaInformacion_en: ['', [Validators.required]],
          critico: [this.criticidad, [Validators.required]],
          });

  }

  goBack(){
    this.location.back();
  }

}

