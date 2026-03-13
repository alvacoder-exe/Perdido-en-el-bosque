import { useState } from "react";
import './App.css'
import { saveGame } from "./config/endpoints.ts";

interface Choice {
    title: string
    object: string | null
}

const storyMap: Record<string, { story: string; choices: Choice[]; image: string }> = {
    "Investigar el ruido": {
        story: "Decides investigar el ruido. Al voltear, ves a un lobo enorme mirándote fijamente.",
        choices: [
            { title: "Luchar contra el lobo", object: null },
            { title: "Gritar para intentar ahuyentarlo", object: null },
            { title: "Intentar trepar un árbol", object: null },
        ],
        image: "blue",
    },
    "Seguir tu camino": {
        story: "Decides seguir tu camino. Después de un rato, te encuentras con un río.",
        choices: [
            { title: "Cruzar el río", object: null },
            { title: "Seguir el río", object: null },
            { title: "Detenerte un momento.", object: null },
        ],
        image: "white",
    },
    "Gritar por ayuda": {
        story: "Decides gritar por ayuda. Nadie te escucha. El ruido está cada vez más cerca.",
        choices: [
            { title: "Investigar el ruido", object: null },
            { title: "Seguir tu camino", object: null },
            { title: "Correr por el camino", object: null },
        ],
        image: "red",
    },
    "Luchar contra el lobo": {
        story: "Decides luchar contra el lobo. El lobo te ataca, te muerde gravemente y se va.",
        choices: [
            { title: "Buscar refugio", object: null },
            { title: "Romper tu ropa para cubrir las heridas", object: "Vendaje improvisado" },
            { title: "Seguir tu camino", object: null },
        ],
        image: "yellow",
    },
    "Gritar para intentar ahuyentarlo": {
        story: "Gritas muy fuerte, pero el ruido atrajo a la manada.",
        choices: [
            { title: "Buscar algo para defenderte", object: null },
            { title: "Gritar aún más fuerte", object: null },
            { title: "Ceder a tu suerte", object: null },
        ],
        image: "orange",
    },
    "Intentar trepar un árbol": {
        story: "Decides intentar trepar un árbol. El lobo te persigue, pero logras subir a un árbol. El lobo se acuesta esperando.",
        choices: [
            { title: "Esperar a que el lobo se vaya", object: null },
            { title: "Gritar por ayuda", object: null },
            { title: "Tirarle piñas del árbol", object: null },
        ],
        image: "green",
    },
    "Tirarle piñas del árbol": {
        story: "Decides tirarle piñas al lobo. El lobo se molesta y se va.",
        choices: [
            { title: "Bajar pero desconfiar", object: null },
            { title: "Bajar y seguir tu camino", object: null },
            { title: "Quedarte en el árbol", object: null },
        ],
        image: "orange",
    },
    "Quedarte en el árbol": {
        story: "Te quedas un rato en el árbol. Comienzas a notar un cosquilleo en el cuerpo. Te das cuenta que arañas están trepando tu cuerpo.",
        choices: [
            { title: "Quitar las arañas desesperadamente", object: null },
            { title: "Quedarte quieto y esperar a que se vayan", object: null },
            { title: "Intentar removerlas tranquilamente", object: null },
        ],
        image: "red",
    },
    "Bajar pero desconfiar": {
        story: "Decides bajar del árbol, pero estás muy desconfiado. Sigues tu camino con cuidado, mirando a tu alrededor constantemente.",
        choices: [
            { title: "Seguir tu camino", object: null },
            { title: "Explorar el bosque", object: null },
            { title: "Tomarte un segundo", object: null },
        ],
        image: "orange",
    },
    "Bajar y seguir tu camino": {
        story: "Decides bajar del árbol y seguir tu camino. Sigues caminando sin mirar atrás y despúes de un rato llegas a un río.",
        choices: [
            { title: "Cruzar el río", object: null },
            { title: "Seguir el río", object: null },
            { title: "Detenerte un momento", object: null },
        ],
        image: "green",
    },

    "Cruzar el río": {
        story: "Decides cruzar el río. El agua está fría y la corriente es fuerte, pero logras cruzar con éxito.",
        choices: [
            { title: "Volver al bosque", object: null },
            { title: "Descansar en la orilla", object: null },
            { title: "Buscar un lugar para acampar", object: null },
        ],
        image: "purple",
    },
    "Seguir el río": {
        story: "Decides seguir el río. Después de un rato, encuentras una pequeña cabaña abandonada a la orilla del río.",
        choices: [
            { title: "Entrar a la cabaña", object: null },
            { title: "Seguir el río", object: null },
            { title: "Descansar en la orilla", object: null },
        ],
        image: "blue",
    },
    "Detenerte un momento": {
        story: "Te detienes a mirar a tu alrededor. Escuchas nuevamente el ruido, esta vez más cerca de ti",
        choices: [
            { title: "Cruzar el río", object: null },
            { title: "Investigar el ruido", object: null },
            { title: "Gritar por ayuda", object: null },
        ],
        image: "red",
    },
    "Volver al bosque": {
        story: "El río creció, no puedes volver a cruzarlo.",
        choices: [
            { title: "Buscar un lugar para acampar", object: null },
            { title: "Seguir el río", object: null },
            { title: "Gritar por ayuda", object: null },
        ],
        image: "grey",
    },
    "Descansar en la orilla": {
        story: "Decides descansar en la orilla. Mientras descansas, observas como empieza a anochecer.",
        choices: [
            { title: "Buscar refugio", object: null },
            { title: "Seguir el río", object: null },
            { title: "Gritar por ayuda", object: null },
        ],
        image: "purple",
    },
    "Buscar un lugar para acampar": {
        story: "Decides buscar un lugar para acampar. Encuentras un claro en el bosque y decides acampar allí por la noche.",
        choices: [
            { title: "Buscar comida", object: null },
            { title: "Dormir sin hacer nada", object: null },
            { title: "Buscar leña para la fogata", object: "Leña" },
        ],
        image: "brown",
    },
    "Correr por el camino": {
        story: "Decides correr por el camino. Corres lo más rápido que puedes, pero el ruido se acerca cada vez más.",
        choices: [
            { title: "Seguir corriendo", object: null },
            { title: "Investigar el ruido", object: null },
            { title: "Esconderse detrás de un árbol", object: null },
        ],
        image: "red",
    },
    "Voltear para ver el ruido": {
        story: "Te das vuelta y te encuentras con un lobo",
        choices: [
            { title: "Luchar contra el lobo", object: null },
            { title: "Gritar para intentar ahuyentarlo", object: null },
            { title: "Intentar trepar un árbol", object: null },
        ],
        image: "green",
    },
    "Esconderse detrás de un árbol": {
        story: "Te escondes detrás de un árbol. El ruido se aleja.",
        choices: [
            { title: "Seguir tu camino", object: null },
            { title: "Explorar el bosque", object: null },
            { title: "Esperar un momento más", object: null },
        ],
        image: "grey",
    },
    "Seguir corriendo": {
        story: "Corres hasta que no puedes más. Te sientes deshidratado",
        choices: [
            { title: "Buscar agua en algún lugar", object: null },
            { title: "Detenerte un momento", object: null },
            { title: "Seguir corriendo aún más", object: null },
        ],
        image: "red",
    },
    "Seguir corriendo aún más": {
        story: "Te desmayas. Despiertas de noche en una cabaña. Hay una hoguera encendida y una mujer de espaldas.",
        choices: [
            { title: "Preguntar qué pasó", object: null },
            { title: "Levantarte sigilosamente", object: null },
            { title: "Fingir seguir dormidx", object: null },
        ],
        image: "black",
    },
    "Preguntar qué pasó": {
        story: "Al escucharte, la mujer toma rapidamente una pala y golpea tu cabeza. Te desmayas nuevamente. Despiertas de día. La cabaña está vacía.",
        choices: [
            { title: "Intentar huir rápidamente", object: null },
            { title: "Buscar algo para defenderte", object: null },
            { title: "Seguir acostadx", object: null },
        ],
        image: "black",
    },
    "Levantarte sigilosamente": {
        story: "Te levantas con cuidado, la mujer no te oye",
        choices: [
            { title: "Buscar herramientas", object: "Herramientas" },
            { title: "Intentar huir", object: null },
            { title: "Preguntar qué pasó", object: null },
        ],
        image: "black",
    },
    "Fingir seguir dormidx": {
        story: "Finges. Puedes escuchar a la mujer murmurar en voz baja pero no entiendes que dice. Se acerca hacia ti.",
        choices: [
            { title: "Seguir fingiendo", object: null },
            { title: "Levantarte rápidamente", object: null },
            { title: "Esperar y tomarla por sorpresa", object: null },
        ],
        image: "black",
    },
    "Seguir fingiendo": {
        story: "Sigues fingiendo. La mujer se acerca cada vez más, hasta que finalmente se sienta a tu lado y te abraza. Sientes un gran alivio, pero no sabes si es seguro confiar en ella.",
        choices: [
            { title: "Agradecerle el abrazo", object: null },
            { title: "Intentar hablar con ella", object: null },
            { title: "Seguir fingiendo", object: null },
        ],
        image: "black",
    },
    "Buscar leña para la fogata": {
        story: "Ahora tienes leña para la fogata.",
        choices: [
            { title: "Encender una fogata", object: "Leña" },
            { title: "Descansar", object: null },
            { title: "Explorar el bosque de noche", object: null },
        ],
        image: "brown",
    },

    "Gritar aún más fuerte": {
        story: "Gritas aún más fuerte, pero los lobos se enojan y se acercan cada vez más. Van a atacarte.",
        choices: [
            { title: "Luchar contra los lobos", object: null },
            { title: "Comenzar a correr", object: null },
            { title: "Tomar una piedra", object: "Piedra" },
        ],
        image: "orange",
    },

    "Luchar contra los lobos": {
        story: "Decides luchar contra los lobos. Luchas con todas tus fuerzas, pero son demasiados y te atacan hasta que pierdes el conocimiento. Te despiertas horas después, solo y herido en el bosque. Ves otras huellas en el piso.",
        choices: [
            { title: "Buscar ayuda", object: null },
            { title: "Intentar curar tus heridas con lo que tienes", object: "Ropajes rotos" },
            { title: "Investigar las huellas", object: null },
        ],
        image: "orange",
    },

    "Intentar curar tus heridas con lo que tienes": {
        story: "Intentas usar tus ropajes rotos para cubrir tus heridas, pero no es suficiente. Sientes que te estás desangrando.",
        choices: [
            { title: "Buscar ayuda", object: null },
            { title: "Seguir las huellas a pesar de las heridas", object: null },
            { title: "Sentarte a esperar a que alguien te encuentre", object: null },
        ],
        image: "orange",
    },

    "Buscar ayuda": {
        story: "Decides buscar ayuda. Sigues las huellas y encuentras a un grupo de personas acampando.",
        choices: [
            { title: "Pedirles ayuda", object: null },
            { title: "Esconderse y esperar a que se vayan", object: null },
            { title: "Intentar robar algo de su comida", object: null },
        ],
        image: "green",
    },
    
    "Pedirles ayuda": {
        story: "Te acercas al grupo a pedir ayuda. Te reciben, te llevan a una tienda donde te dan de beber un té y curan tus heridas. Después de un rato, te desvaneces. Despiertas en un cuarto desconocido. No sabes cómo llegaste ahí.",
        choices: [
            { title: "Buscar la salida", object: null },
            { title: "Preguntar por alguien", object: null },
            { title: "Esperar a que alguien venga", object: null },
        ],
        image: "green",
    },

    "Buscar la salida": {
        story: "Ves una puerta de metal oxidada. Intentas abrirla, pero está cerrada con llave. No hay ventanas en la habitación.",
        choices: [
            { title: "Intentar forzar la puerta", object: null },
            { title: "Buscar algo para usar como herramienta", object: null },
            { title: "Conservar la calma", object: null },
        ],
        image: "black",
    },

    "Intentar forzar la puerta": {
        story: "Intentas forzar la puerta, pero es demasiado fuerte. Te das cuenta de que estás atrapado.",
        choices: [
            { title: "Gritar con desesperación", object: null },
            { title: "Buscar algo para usar como herramienta", object: "Llave" },
            { title: "Conservar la calma", object: null },
        ],
        image: "black",
    },

    "Buscar algo para usar como herramienta": {
        story: "Buscas en la habitación y ves una rejilla de aire. La abres y encuentras una llave.",
        choices: [
            { title: "Abrir la puerta con la llave", object: "Llave" },
            { title: "Esconder la llave por si acaso", object: null },
            { title: "Esperar a que alguien venga", object: null },
        ],
        image: "black",
    },

    "Abrir la puerta con la llave": {
        story: "Usas la llave para abrir la puerta. La puerta se abre lentamente y ves un pasillo oscuro. No sabes qué hay al final del pasillo.",
        choices: [
            { title: "Entrar al pasillo", object: null },
            { title: "Cerrar la puerta y esconderse", object: null },
            { title: "Correr por el pasillo", object: null },
        ],
        image: "black",
    },


}
function App2({ onLogout }: { onLogout: () => void }) {
    const [story, setStory] = useState("Estas perdidx en un bosque oscuro. Escuchas un ruido extraño detrás de ti.")
    const [choices, setChoices] = useState<Choice[]>([
        { title: "Investigar el ruido", object: null },
        { title: "Seguir tu camino", object: null },
        { title: "Gritar por ayuda", object: null },
    ])
    const [image, setImage] = useState("grey")
    const [inventory, setInventory] = useState<string[]>([])
    const [lastChoice, setLastChoice] = useState<string>("")
    
    const handleSaveGame = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
        
            try {
              await saveGame(lastChoice);
              console.log("Game saved successfully");
            } catch (err) {
              console.error(err);
            } 
    }

    const handleChoice = (choice: Choice) => {
        if (choice.object) {
            if (!inventory.includes(choice.object)) {
                // Agregar el objeto al inventario
                setInventory(prev => [...prev, choice.object!])
            } else if (inventory.includes(choice.object)) {
                // Si el objeto ya está en el inventario, eliminarlo               
                setInventory(prev => prev.filter(item => item !== choice.object))
            }
        }

        const result = storyMap[choice.title]
        if (result) {
            setStory(result.story)
            setChoices(result.choices)
            setImage(result.image)
            setLastChoice(choice.title)
        }
    }

    return (  
        <div className="App" style={{ backgroundImage: `url(${image})` }}>
        <nav className="navbar">
            <div className="save-load">
                <button onClick={() => handleSaveGame}>Guardar partida</button>
                <button>Cargar partida</button>
            </div>
            <div className="logout">
                <button className="logout" onClick={onLogout}>Cerrar sesión</button>
            </div>
        </nav>
            <h1>Perdido en el bosque</h1>
            <p>{story}</p>
            {inventory.length > 0 && (
                <div className="inventory-box">
                    <img className="inventory-bag"src="https://png.pngtree.com/png-clipart/20250104/original/pngtree-backpack-icon-design-template-vector-isolated-png-image_4092136.png"></img> 
                    <div className="inventory-items">
                        {inventory.map(item => (
                            <div key={item} className="inventory-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <h2>¿Qué haces?</h2>
            <div className="btn-choices">
            <button onClick={() => handleChoice(choices[0])}> {choices[0].title} </button>
            <button onClick={() => handleChoice(choices[1])}> {choices[1].title} </button>
            <button onClick={() => handleChoice(choices[2])}> {choices[2].title} </button>
            </div>
        </div>
    );
}

export default App2;
