import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  activarMsj:boolean=false;
  formulario1:FormGroup
  constructor(public FormB:FormBuilder) {
    this.formulario1=this.FormB.group({
      nombre: ["",Validators.required],
      telefono:["",Validators.required],
      email:["",Validators.required],
      objetivo:["",Validators.required],
      mensaje:["",Validators.required],
    })
  }

  ngOnInit(): void {
  }
  validacion(){
    console.log(this.formulario1.get("nombre")?.value);
    console.log(this.formulario1.get("telefono")?.value);
    console.log(this.formulario1.get("email")?.value);
    console.log(this.formulario1.get("objetivo")?.value);
    console.log(this.formulario1.get("mensaje")?.value);
    this.activarMsj=true
  }
}
