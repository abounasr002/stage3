import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-records',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {
  fields = [
    { name: 'OBJECTTYPE', label: "Object Type", type: 'text', nullable: false },  //obligatory
    { name: 'PROPERTY', label: 'Property', type: 'text', nullable: false }, // obligatory
    { name: 'REQUIRED', label: 'Required', type: 'text', nullable: true },
    { name: 'HIDDEN', label: 'Hidden', type: 'text', nullable: true },
    { name: 'MAXVAL', label: 'Max Value', type: 'number', nullable: true },
    { name: 'MAXLEN', label: 'Max Length', type: 'number', nullable: true },
    { name: 'HASDEPENDANT', label: 'Has Dependant', type: 'text', nullable: true },
    { name: 'MINVAL', label: 'Min Value', type: 'number', nullable: true },
    { name: 'DESKTOP', label: 'Desktop', type: 'text', nullable: false }, //obligatory
    { name: 'CHOICELIST', label: 'Choice List', type: 'text', nullable: true },
    { name: 'DEPENDENTON', label: 'Dependent On', type: 'text', nullable: true },
    { name: 'DEPENDENCYSQL', label: 'Dependency SQL', type: 'text', nullable: true },
    { name: 'CHECKERFTABLE', label: 'Checker Table', type: 'text', nullable: true },
    { name: 'FILTERVALUE', label: 'Filter Value', type: 'text', nullable: true },
    { name: 'DISPLAYMODE', label: 'Display Mode', type: 'text', nullable: true },
    { name: 'JOBDATACAP', label: 'Job Data Cap', type: 'text', nullable: true },
    { name: 'MAXDATE', label: 'Max Date', type: 'text', nullable: true },
    { name: 'MINDATE', label: 'Min Date', type: 'text', nullable: true },
    { name: 'DEPENDENCYWST24', label: 'Dependency WST24', type: 'text', nullable: true },
    { name: 'DEPENDENCYWSCREDENTIALS', label: 'Dependency WSCredentials', type: 'text', nullable: true }
  ];

  nouveau: any = {};
  enregistrements: any[] = [];
  editantId: string | null = null;

  creerEnregistrement() {
    if (!this.editantId) {
      const champsObligatoires = ['OBJECTTYPE', 'PROPERTY', 'DESKTOP'];
      for (let champ of champsObligatoires) {
        // if (!this.nouveau[champ]) {
        //   const label = this.fields.find(f => f.name === champ)?.label;
        //   alert(`Le champ "${label}" est obligatoire.`);
        //   return;
        // }
      }

      // Création
      const nouvelEnregistrement = {
        ...this.nouveau,
        _id: crypto.randomUUID()
      };
      this.enregistrements.push(nouvelEnregistrement);
    } else {
      // Édition
      const index = this.enregistrements.findIndex(r => r._id === this.editantId);
      if (index > -1) {
        this.enregistrements[index] = { ...this.nouveau, _id: this.editantId };
      }
      this.editantId = null;
    }

    this.nouveau = {}; // Réinitialiser le formulaire
  }

  supprimerEnregistrement(id: string) {
    this.enregistrements = this.enregistrements.filter(r => r._id !== id);
    if (this.editantId === id) {
      this.annulerEdition();
    }
  }

  editerEnregistrement(enregistrement: any) {
    this.nouveau = { ...enregistrement };
    this.editantId = enregistrement._id;
  }

  annulerEdition() {
    this.nouveau = {};
    this.editantId = null;
  }
}
