import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  route: ActivatedRoute = Inject(ActivatedRoute);

}
