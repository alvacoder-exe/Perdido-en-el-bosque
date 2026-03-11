import { useState } from "react";
import './App.css'

const storyMap: Record<string, { story: string; choices: string[]; image: string }> = {
    "Investigar el ruido": {
        story: "Decides investigar el ruido. Al voltear, ves a un lobo enorme mirándote fijamente.",
        choices: ["Luchar contra el lobo", "Gritar para intentar ahuyentarlo", "Intentar trepar un árbol"],
        image: "https://i.pinimg.com/1200x/39/c0/30/39c030e656b108c10c8e74dd144f533b.jpg",
    },
    "Seguir tu camino": {
        story: "Decides seguir tu camino. Después de un rato, te encuentras con un río.",
        choices: ["Cruzar el río", "Seguir el río", "Detenerte un momento."],
        image: "https://i.pinimg.com/1200x/38/48/19/384819ec8ce12f1c56f8f9880e4c2488.jpg"
    },
    "Gritar por ayuda": {
        story: "Decides gritar por ayuda. Nadie te escucha. El ruido está cada vez más cerca.",
        choices: ["Investigar el ruido", "Seguir tu camino", "Correr por el camino"],
        image: "red"

    },
    "Luchar contra el lobo": {
        story: "Decides luchar contra el lobo. El lobo te ataca, te muerde gravemente y se va.",
        choices: ["Buscar refugio", "Romper tu ropa para cubrir las heridas", "Seguir tu camino"],
        image: "yellow"

    },
    "Gritar para intentar ahuyentarlo": {
        story: "Gritas muy fuerte, pero el ruido atrajo a la manada.",
        choices: ["Buscar algo para defenderte", "Gritar aún más fuerte", "Ceder a tu suerte"],
        image: "orange"
    },
    "Intentar trepar un árbol": {
        story: "Decides intentar trepar un árbol. El lobo te persigue, pero logras subir a un árbol. El lobo se acuesta esperando.",
        choices: ["Esperar a que el lobo se vaya", "Gritar por ayuda", "Tirarle piñas del árbol"],
        image: "green"
    },
    "Cruzar el río": {
        story: "Decides cruzar el río. El agua está fría y la corriente es fuerte, pero logras cruzar con éxito.",
        choices: ["Volver al bosque", "Descansar en la orilla", "Buscar un lugar para acampar"],
        image: "purple"
    },
    "Seguir el río": {
        story: "Decides seguir el río. Después de un rato, encuentras una pequeña cabaña abandonada a la orilla del río.",
        choices: ["Entrar a la cabaña", "Seguir el río", "Descansar en la orilla"],
        image: "blue"
    },
    "Detenerte un momento": {
        story: "Te detienes a mirar a tu alrededor. Escuchas nuevamente el ruido, esta vez más cerca de ti",
        choices: ["Cruzar el río", "Investigar el ruido", "Gritar por ayuda"],
        image: "red"
    },
    "Volver al bosque": {
        story: "El río creció, no puedes volver a cruzarlo.",
        choices: ["Buscar un lugar para acampar", "Seguir el río", "Gritar por ayuda"],
        image: "grey"
    },
    "Descansar en la orilla": {
        story: "Decides descansar en la orilla. Mientras descansas, observas como empieza a anochecer.",
        choices: ["Buscar refugio", "Seguir el río", "Gritar por ayuda"],
        image: "purple"
    },
    "Buscar un lugar para acampar": {
        story: "Decides buscar un lugar para acampar. Encuentras un claro en el bosque y decides acampar allí por la noche.",
        choices: ["Buscar comida", "Dormir sin hacer nada", "Buscar leña para la fogata"],
        image: "brown"
    },
    "Correr por el camino": {
        story: "Decides correr por el camino. Corres lo más rápido que puedes, pero el ruido se acerca cada vez más.",
        choices: ["Seguir corriendo", "Investigar el ruido", "Esconderse detrás de un árbol"],
        image: "red"
    },
    "Voltear para ver el ruido": {
        story: "Te das vuelta y te encuentras con un lobo",
        choices: ["Luchar contra el lobo", "Gritar para intentar ahuyentarlo", "Intentar trepar un árbol"],
        image: "green"
    },
    "Esconderse detrás de un árbol": {
        story: "Te escondes detrás de un árbol. El ruido se aleja.",
        choices: ["Seguir tu camino", "Explorar el bosque", "Esperar un momento más"],
        image: "grey"
    },
    "Seguir corriendo": {
        story: "Corres hasta que no puedes más. Te sientes deshidratado",
        choices: ["Buscar agua en algún lugar", "Detenerte un momento", "Seguir corriendo aún más"],
        image: "red"
    },
    "Seguir corriendo aún más": {
        story: "Te desmayas. Despiertas de noche en una cabaña. Hay una hoguera encendida y una mujer de espaldas.",
        choices: ["Preguntar qué pasó", "Levantarte sigilosamente", "Fingir seguir dormidx"],
        image: "black"
    },
    "Preguntar qué pasó": {
        story: "Al escucharte, la mujer toma rapidamente una pala y golpea tu cabeza. Te desmayas nuevamente. Despiertas de día. La cabaña está vacía.",
        choices: ["Intentar huir rápidamente", "Buscar algo para defenderte", "Seguir acostadx"],
        image: "black"
    },
    "Levantarte sigilosamente": {
        story: "Te levantas con cuidado, la mujer no te oye",
        choices: ["Buscar herramientas", "Intentar huir", "Preguntar qué pasó"],
        image: "black"
    },
    "Fingir seguir dormidx": {
        story: "Finges. Puedes escuchar a la mujer murmurar en voz baja pero no entiendes que dice. Se acerca hacia ti.",
        choices: ["Seguir fingiendo", "Levantarte rápidamente", "Esperar y tomarla por sorpresa"],
        image: "black"
    },
    "Seguir fingiendo": {
        story: "Sigues fingiendo. La mujer se acerca cada vez más, hasta que finalmente se sienta a tu lado y te abraza. Sientes un gran alivio, pero no sabes si es seguro confiar en ella.",
        choices: ["Agradecerle el abrazo", "Intentar hablar con ella", "Seguir fingiendo"],
        image: "black"
    }
}

function App2() {
    const [story, setStory] = useState("Estas perdidx en un bosque oscuro. Escuchas un ruido extraño detrás de ti.")
    const [choices, setChoices] = useState(["Investigar el ruido", "Seguir tu camino", "Gritar por ayuda"])
    const [image, setImage] = useState("grey")

    const handleChoice = (choice: string) => {
        const result = storyMap[choice]
        if (result) {
            setStory(result.story)
            setChoices(result.choices)
            setImage(result.image) 
        }
    }

    return (
        <div className="App" style={{ backgroundImage: `url(${image})` }}>
            <h1>Historia</h1>
            <p>{story}</p>
            <h2>¿Qué haces?</h2>
            <button onClick={() => handleChoice(choices[0])}> {choices[0]} </button>
            <button onClick={() => handleChoice(choices[1])}> {choices[1]} </button>
            <button onClick={() => handleChoice(choices[2])}> {choices[2]} </button>
            
        </div>
    );
}

export default App2;
