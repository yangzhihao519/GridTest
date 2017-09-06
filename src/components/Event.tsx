import {Ticket} from './Ticket';

export class Event {
  id: number;
  tickets: Array<Ticket>;
  hasTicket(): boolean {
      // Return true if there is at least one ticket in this event; Otherwise, return false.
      return this.tickets.length > 0;
  }
  getCheapestTicketPrice(): string {
    // Sort the tickets in ascending order by the price of the tickets
    var cheapestTicketPrice = '';

    if(this.tickets.length >0){
        this.tickets.sort(function(ticketA, ticketB) {
            return ticketA.price - ticketB.price;
        });
        cheapestTicketPrice = "$"+this.tickets[0].price;
    }else{
        // There is no tickets in this event
        // do nothing
    }
    
    return cheapestTicketPrice;
  }

  constructor(id: number, tickets: Array<Ticket>){
      this.id = id;
      this.tickets = tickets;
  }
}