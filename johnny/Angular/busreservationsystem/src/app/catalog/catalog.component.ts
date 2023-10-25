import { Component } from '@angular/core';

 

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  travelName: string = 'Yamuna';
  luxuryType: string = 'Non Ac Sleeper';
  price: string = 'Rs. 0';

  handleTravelNameChange(): void {
    this.price = this.getPriceForTravelAndLuxury(this.travelName, this.luxuryType);
  }

  handleLuxuryTypeChange(): void {
    this.price = this.getPriceForTravelAndLuxury(this.travelName, this.luxuryType);
  }

  getPriceForTravelAndLuxury(travelName: string, luxuryType: string): string {
    if (travelName === 'Ganga') {
      if (luxuryType === 'Ac Sleeper') {
        return 'Rs. 800';
      } else if (luxuryType === 'Non Ac Sleeper') {
        return 'Rs. 450';
      } else if (luxuryType === 'Ac Seater') {
        return 'Rs. 550';
      } else if (luxuryType === 'Non Ac Seater') {
        return 'Rs. 300';
      }
    } else if (travelName === 'Yamuna') {
      if (luxuryType === 'Ac Sleeper') {
        return 'Rs. 850';
      } else if (luxuryType === 'Non Ac Sleeper') {
        return 'Rs. 475';
      } else if (luxuryType === 'Ac Seater') {
        return 'Rs. 600';
      } else if (luxuryType === 'Non Ac Seater') {
        return 'Rs. 350';
      }
    } else if (travelName === 'Lakshmi') {
      if (luxuryType === 'Ac Sleeper') {
        return 'Rs. 1000';
      } else if (luxuryType === 'Non Ac Sleeper') {
        return 'Rs. 550';
      } else if (luxuryType === 'Ac Seater') {
        return 'Rs. 700';
      } else if (luxuryType === 'Non Ac Seater') {
        return 'Rs. 450';
      }
    } else if (travelName === 'Krishna') {
      if (luxuryType === 'Ac Sleeper') {
        return 'Rs. 900';
      } else if (luxuryType === 'Non Ac Sleeper') {
        return 'Rs. 500';
      } else if (luxuryType === 'Ac Seater') {
        return 'Rs. 650';
      } else if (luxuryType === 'Non Ac Seater') {
        return 'Rs. 400';
      }
    }

 

    // Default price
    return 'Rs. 0';
  }
}
