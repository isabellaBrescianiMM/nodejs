//TicketManager segun Isabella
class Event{
    #precioBaseDeGanancia = 0.15
    static counter = 0
    constructor (nombre,lugar,precio,capacidad = 50 ,fecha = new Date()){
        Event.counter += 1
        this.id = Event.counter
        this.nombre = nombre
        this.lugar = lugar
        this.precio = precio + (precio * this.#precioBaseDeGanancia)
        this.capacidad = capacidad 
        this.fecha = fecha
        this.participantes = []
    }
}

class TicketManager {
    constructor(){
        this.eventos = [ ]
    }
    async getEventos(){
        return this.eventos
    }
    async addEvent(event){
        this.eventos.push(event)
        console.log('Event added')
    }
    async addUser(id, user_id){
        let evento = this.eventos.find(evento=> evento.id === id);
        if (!evento){
            console.log('Event not Found')
            return
            
        }else{
           
            if(!evento.participantes.includes(user_id)){
                evento.participantes.push(user_id)
                console.log('Usuario agregado con exito')
            }else{
                console.log('Usuario ya registrado')
            }
            

        }
    }

    async ponerEventoEnGira(id, localidad,fecha = new Date()){
        const evento = this.eventos.find(evento=> evento.id === id);
        const {nombre,lugar,precio} = evento
        let nuevoEvento = new Event(nombre,lugar,precio)
        this.eventos.push({
            ...nuevoEvento,
            adress: localidad,
            fecha: fecha,
            participantes: []
        })

    }
    
}


//Prueba Ticket Manager
let TicketManager_instancia = new TicketManager()
let evento1 = new Event('nicky', 'luna-park', 5000)
let evento2 = new Event('trueno', 'luna-park', 4000)
let evento3 = new Event('duki', 'luna-park', 7000)
TicketManager_instancia.addEvent(evento1)
TicketManager_instancia.addEvent(evento2)
TicketManager_instancia.addEvent(evento3)
TicketManager_instancia.ponerEventoEnGira(1,'Bera')
TicketManager_instancia.addUser(4, 'isabella')
TicketManager_instancia.addUser(4, 'isabella')
console.log(TicketManager_instancia.getEventos())
console.log(TicketManager_instancia.eventos[3].participantes)
