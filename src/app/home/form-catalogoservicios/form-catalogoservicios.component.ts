import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common'


@Component({
  selector: 'abanca-form-catalogoservicios',
  templateUrl: './form-catalogoservicios.component.html',
  styleUrls: ['./form-catalogoservicios.component.scss']
})
export class FormCatalogoserviciosComponent {
  catalogoForm = this.fb.group({
    catalogo_servicios_es: [null, [Validators.required]],
    catalogo_servicios_en: [null, [Validators.required]],
    responsable: [null, [Validators.required]],
    negocio: [null, [Validators.required]],
    descripcion_es: [null, [Validators.required]],
    descripcion_en: [null, [Validators.required]],
    criticidad: [null, [Validators.required]]
  });

  @Input() negocios;
  @Input() responsables;

  constructor(private fb: FormBuilder,
    private location: Location
    ) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

}
