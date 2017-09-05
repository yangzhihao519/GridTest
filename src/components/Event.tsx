import {Ticket} from './Ticket';

export class Event {
  id: number;
  tickets: Array<Ticket>;
  getCheapestTicketPrice(): string {
    // Sort the tickets in ascending order by the price of the tickets
    var cheapestTicketPrice = '';

    if(this.tickets.length >0){
        this.tickets.sort(function(ticketA, ticketB) {
            return ticketA.price - ticketB.price;
        });
        cheapestTicketPrice = "$"+this.tickets[0].price;
    }else{
        // do nothing
        cheapestTicketPrice = "Sold out";
    }
    
    return cheapestTicketPrice;
  }

  constructor(id: number, tickets: Array<Ticket>){
      this.id = id;
      this.tickets = tickets;
  }
}