import { Component } from '@angular/core';

export class Accounts {
    id : number = 0;
    libelle : string = '';
    solde : number = 0;
    decouvert : number  = 0;
    taux : number = 0;


    constructor() {
    }

    
    public getId() : number {
        return this.id
    }

    
    public setId(id : number) {
        this.id = id;
    }
    
    

    
    public getLibelle() : string {
        return this.libelle;
    }

    
    public setLibelle(libelle : string) {
        this.libelle = libelle;
    }

    public getSolde() : number {
        return this.solde;
    }

    
    public setSolde(solde : number) {
        this.solde = solde;
    }

    public getTaux() : number {
        return this.taux;
    }

    
    public setTaux(taux : number) {
        this.taux = taux;
    }

    public getDecouvert() : number {
        return this.decouvert;
    }

    
    public setSecouvert(decouvert : number) {
        this.decouvert = decouvert;
    }
    
    
}


