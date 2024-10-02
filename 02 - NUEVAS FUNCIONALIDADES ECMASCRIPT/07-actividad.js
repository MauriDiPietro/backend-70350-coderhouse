class TicketManager {
  #priceBaseGain = 0.15;
  constructor() {
    this.events = [];
  }

  #getId() {
    let id = 0;
    this.events.map((event) => {
      if (event.id > id) id = event.id;
    });
    return id;
  }

  addEvent(
    name,
    site,
    price,
    capacity = 50,
    date = new Date().toLocaleDateString()
  ) {
    const event = {
      id: this.#getId() + 1,
      name,
      site,
      capacity,
      price: price + this.#priceBaseGain,
      date,
      participants: [],
    };
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  #getEventById(idEvent) {
    return this.events.find((event) => event.id === idEvent);
  }

  addUser(idEvent, idUser) {
    const event = this.#getEventById(idEvent);
    if (!event) return "this event not found";
    if (!event.participants.includes(idUser)) event.participants.push(idUser);
  }

  eventTour(idEvent, newSite, newDate) {
    const event = this.#getEventById(idEvent);
    if (!event) return "this event not found";
    const newEvent = {
      ...event,
      id: this.#getId() + 1,
      site: newSite,
      date: newDate,
      participants: [],
    };
    this.events.push(newEvent);
  }
};

const ticketManager = new TicketManager();

ticketManager.addEvent('Circo 70350', 'Córdoba', 5000, 75000);
ticketManager.addEvent('Concierto Los Piojos', 'Bs. As', 55000, 150000);
ticketManager.addUser(1, 'Raul')
ticketManager.addUser(1, 'Gaston')
ticketManager.addUser(2, 'Jonathan')
ticketManager.eventTour(1, 'Tierra del Fuego', '01/12/2024')
ticketManager.eventTour(1, 'Punta del Este', '05/01/2025')
console.log(ticketManager.getEvents());


