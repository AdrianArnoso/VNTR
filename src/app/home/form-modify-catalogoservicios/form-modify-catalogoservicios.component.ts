import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'


@Component({
  selector: 'abanca-form-modify-catalogoservicios',
  templateUrl: './form-modify-catalogoservicios.component.html',
  styleUrls: ['./form-modify-catalogoservicios.component.scss']

})
export class FormModifyCatalogoserviciosComponent implements OnInit {
catalogoForm : FormGroup;

  // catalogoForm = this.fb.group({
  //   catalogo_servicios_es: [null, [Validators.required]],
  //   catalogo_servicios_en: [null, [Validators.required]],
  //   responsable: [null, [Validators.required]],
  //   negocio: [null, [Validators.required]],
  //   descripcion_es: [null, [Validators.required]],
  //   descripcion_en: [null, [Validators.required]],
  //   criticidad: [null, [Validators.required]]
  // });

  @Input() negocios;
  @Input() responsables;
  @Input() servicios;

  selectedCrit = "";
  selectedResp = "";
  selectedNeg = "";
  dataCatalogo ="";
  dataDescripcion ="";



  constructor(private fb: FormBuilder,
    private location: Location
    ) {

     }

  ngOnInit() {
    console.log(this.servicios);
    this.selectedCrit = this.servicios[0].criticidad.toLowerCase();
    this.selectedResp = this.servicios[0].responsable;
    this.selectedNeg = this.servicios[0].negocio;
    this.dataCatalogo = this.servicios[0].name;
    this.dataDescripcion = this.servicios[0].descripcion;
    console.log("Selected " + this.selectedNeg );

    this.catalogoForm = this.fb.group({
      catalogo_servicios_es: [this.dataCatalogo, [Validators.required]],
      catalogo_servicios_en: ['', [Validators.required]],
      responsable: [this.selectedResp, [Validators.required]],
      negocio: [this.selectedNeg, [Validators.required]],
      descripcion_es: [this.dataDescripcion, [Validators.required]],
      descripcion_en: ['', [Validators.required]],
      criticidad: [this.selectedCrit, [Validators.required]]
    });
  }


  goBack(){
    this.location.back();
  }


}
