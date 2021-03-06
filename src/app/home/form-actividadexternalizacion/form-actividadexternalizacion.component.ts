import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'abanca-form-actividadexternalizacion',
  templateUrl: './form-actividadexternalizacion.component.html',
  styleUrls: ['./form-actividadexternalizacion.component.scss']
})
export class FormActividadexternalizacionComponent {
  disabledCheck = true;

  actExternalizacionForm = this.fb.group({
    actividadServicio_es: [null, [Validators.required]],
    actividadServicio_en: [null, [Validators.required]],
    criticidad: [null, [Validators.required]],
    descripcion_es: [null, [Validators.required]],
    descripcion_en: [null, [Validators.required]],
    externalizado: [null, [Validators.required]]
    });

  @Input() empresas;
  constructor(
    private fb: FormBuilder,
    private apiServices: ApiService,
    private location: Location
    ) {
     }

  ngOnInit() {
  }

  onClickSelect(option){
    if(option == true){
      this.disabledCheck = false;
    }else if(option == false){
      this.disabledCheck = true;
    }
  }
  SaveNewActividadExternalizacion(){
    //console.log(this.actExternalizacionForm.value);
    return this.apiServices.postActividadExternalizacion$(this.actExternalizacionForm.value).subscribe();

  }

  goBack(){
    this.location.back();
  }
}
