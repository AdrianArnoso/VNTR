import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}