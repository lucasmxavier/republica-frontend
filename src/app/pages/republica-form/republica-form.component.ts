import { Component, OnInit } from '@angular/core';
import { Republica } from '../../models/republica';
import { ActivatedRoute, Router } from '@angular/router';
import { RepublicaService } from '../../services/republica.service';
import { Morador } from '../../models/morador';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-republica-form',
  templateUrl: './republica-form.component.html',
  styleUrls: ['./republica-form.component.css']
})
export class RepublicaFormComponent implements OnInit {

  republica: Republica;
  endereco: Endereco;
  moradores: Morador[];

  constructor(private route: ActivatedRoute, private router: Router,
              private republicaService: RepublicaService) {
    this.republica = new Republica();
    this.endereco = new Endereco();
  }

  ngOnInit() {
    this.republica = this.republicaService.getRepublica();
    if (this.republica.endereco !== undefined) {
      this.endereco = this.republica.endereco;
    }
  }

  async onSubmit() {
    this.republica.endereco = this.endereco;
    if (this.republica.id === undefined) {
      this.republicaService.save(this.republica).subscribe(() => {
        alert('República adicionada com sucesso!');
        this.router.navigate(['/republica/gerencia']).then(() => {
          window.location.reload();
        });
      });
    } else {
      this.republicaService.update(this.republica).subscribe(result => {
        this.router.navigate(['/republica/gerencia']);
        alert('República editada com sucesso!');
      });
    }
  }

}
