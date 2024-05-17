import { Component, OnInit } from '@angular/core';
import { NavesService } from '../naves.service';
import { Nave } from '../Nave';

@Component({
  selector: 'app-naves-cards',
  templateUrl: './naves-cards.component.html',
  styleUrls: ['./naves-cards.component.css']
})
export class NavesCardsComponent implements OnInit {

  naves: Nave[] = [];
  selected: boolean = false;
  selectedNave!: Nave;
  navesRevelion: number = 0;
  navesImperio: number = 0;
  navesNeutrales: number = 0;

  constructor(private navesService: NavesService) { }

  ngOnInit() {
    this.getNaves();
  }

  getNaves(): void {
    this.navesService.getNaves().subscribe((naves) => {
      this.naves = naves;
      this.countNaves();
    });
  }

  onSelectedNave(nave: Nave): void {
    this.selectedNave = nave;
    this.selected = true;
  }

  countNaves(): void {

    this.naves.forEach((nave) => {
      if (nave.bando === 'Rebelión') {
        this.navesRevelion++;
      } else if (nave.bando === 'Imperio') {
        this.navesImperio++;
      } else {
        this.navesNeutrales++;
      }
    });
  }

}
