import { Component, OnInit } from '@angular/core';
import { AdoptmeService } from '../service/adoptme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  activeOption: number = 1;
  programData: any;
  associateData: any;

  /**
   * Constructor.
   * 
   * @param service Adoptme service for making get call.
   */
  constructor(private service: AdoptmeService) {}

  /**
   * @inheritdoc
   */
  ngOnInit() {
   this.service.getProgramsDetails().subscribe( data => {
    this.programData = data;
   }); 
  }
  
  /**
   * Trigger on testimonial option click.
   * 
   * @param option Testimonial Option.
   */
  onClick(option: number) {
    this.activeOption = option;
    switch(option) {
      case 1: 
        this.service.getProgramsDetails().subscribe( data => {
          this.programData = data;
        }); 
        break;
      case 2: 
        this.service.getAssociateDetails().subscribe( data => {
          this.associateData = data;
        }); 
    }
  }
}
