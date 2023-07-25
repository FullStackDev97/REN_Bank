import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api_service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  comptes: any[] = [];
  compteEmetteur: number = 0;
  compteDestinataire: number = 0;
  montant: number = 0;

  constructor(private apiService: ApiService, private router : Router) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.apiService.getAccounts().subscribe(
      (accounts) => {
        this.comptes = accounts;
        console.log(this.comptes[0])
        // Vous pouvez également trier les comptes selon vos besoins ici
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submitVirement() {
    // Vérifier si les comptes émetteur et destinataire sont différents
    /*console.log("montant = "+this.montant);
    console.log("compte emetteur = "+this.compteEmetteur);
    console.log("compte destinataire = "+this.compteDestinataire);*/
    if (this.compteEmetteur === this.compteDestinataire) {
      alert("Les comptes émetteur et destinataire doivent être différents.");
      return;
    }

    // Appeler le service ApiService pour effectuer le virement
    this.apiService.makeVirement(this.compteEmetteur, this.compteDestinataire, this.montant).subscribe(
      (result) => {
        // Le virement a été effectué avec succès, vous pouvez traiter la réponse du serveur si nécessaire
        console.log('Virement effectué :', result);
        this.router.navigate(['/virementGood']);
      },
      (error) => {
        // Gérer les erreurs en cas d'échec du virement
        console.error('Erreur lors du virement :', error);
        alert('Erreur lors du virement.');
      }
    );
  }
}
