import { useState } from "react";
import './App.css'

function App2() {
    const [story, setStory] = useState("Estas perdidx en un bosque oscuro. Escuchas un ruido extraño detrás de ti.")
    const [choices, setChoices] = useState(["Investigar el ruido", "Seguir tu camino", "Gritar por ayuda"])

    const handleChoice = (choice: string) => {
        setChoices(["Voltear para ver el ruido", "Correr por el camino", "Esconderse detrás de un árbol"])
         
        if (choice === "Investigar el ruido") {
            setStory("Decides investigar el ruido. Al voltear, ves a un lobo enorme mirándote fijamente.")     
            const newChoices = ["Luchar contra el lobo", "Gritar para intentar ahuyentarlo", "Intentar trepar un árbol"]
            setChoices(newChoices)

        } else if (choice === "Seguir tu camino") {
            setStory("Decides seguir tu camino. Después de un rato, te encuentras con un río.")
            const newChoices = ["Cruzar el río", "Seguir el río", "Detenerte un momento."]
            setChoices(newChoices)
        } else if (choice === "Gritar por ayuda") {
            setStory("Decides gritar por ayuda. Nadie te escucha. El ruido está cada vez más cerca.")
            const newChoices = ["Investigar el ruido", "Seguir tu camino", "Correr por el camino"]
            setChoices(newChoices)
        }
    
            if (choice === "Luchar contra el lobo") {
                setStory("Decides luchar contra el lobo. El lobo te ataca, te muerde gravemente y se va.")
                const newChoices = ["Buscar refugio", "Romper tu ropa para cubrir las heridas", "Seguir tu camino"]
                setChoices(newChoices)
        } else if (choice === "Gritar para intentar ahuyentarlo") {
                setStory("Gritas muy fuerte, pero el ruido atrajo a la manada.")
                const newChoices = ["Buscar algo para defenderte", "Gritar aún más fuerte", "Ceder a tu suerte"]
                setChoices(newChoices)
        } else if (choice === "Intentas trepar un árbol") {
                setStory("Decides intentar trepar un árbol. El lobo te persigue, pero logras subir a un árbol. El lobo se acuesta esperando.")
                const newChoices = ["Esperar a que el lobo se vaya", "Gritar por ayuda", "Tirarle piñas del árbol"]
                setChoices(newChoices)
        } 
    
            if (choice === "Cruzar el río") {
                setStory("Decides cruzar el río. El agua está fría y la corriente es fuerte, pero logras cruzar con éxito.")
                const newChoices = ["Volver al bosque", "Descansar en la orilla", "Buscar un lugar para acampar"]
                setChoices(newChoices)
        } else if (choice === "Seguir el río") {
                setStory("Decides seguir el río. Después de un rato, encuentras una pequeña cabaña abandonada a la orilla del río.")
                const newChoices = ["Entrar a la cabaña", "Seguir el río", "Descansar en la orilla"]
                setChoices(newChoices)
        } else if (choice === "Detenerte un momento") {
                setStory("Te detienes a mirar a tu alrededor. Escuchas nuevamente el ruido, esta vez más cerca de ti")
                const newChoices = ["Cruzar el río", "Investigar el ruido", "Gritar por ayuda"]
                setChoices(newChoices)
        }   

            if (choice === "Volver al bosque") {
                setStory("El río creció, no puedes volver a cruzarlo.")
                const newChoices = ["Buscar un lugar para acampar", "Seguir el río", "Gritar por ayuda"]
                setChoices(newChoices)
        } else if (choice === "Descansar en la orilla") {
                setStory("Decides descansar en la orilla. Mientras descansas, observas como empieza a anochecer.")
                const newChoices = ["Buscar refugio", "Seguir el río", "Gritar por ayuda"]
                setChoices(newChoices)       
        } else if (choice === "Buscar un lugar para acampar") {
                setStory("Decides buscar un lugar para acampar. Encuentras un claro en el bosque y decides acampar allí por la noche.")
                const newChoices = ["Buscar comida", "Dormir sin hacer nada", "Buscar leña para la fogata"]
                setChoices(newChoices)
        }

            if (choice === "Correr por el camino") { 
                setStory("Decides correr por el camino. Corres lo más rápido que puedes, pero el ruido se acerca cada vez más.") 
                const newChoices = ["Seguir corriendo", "Investigar el ruido", "Esconderse detrás de un árbol"]
                setChoices(newChoices)
        }    else if (choice === "Voltear para ver el ruido") {
                setStory("Te das vuelta y te encuentras con un lobo")
                const newChoices = ["Luchar contra el lobo", "Gritar para intentar ahuyentarlo", "Intentar trepar un árbol"]
                setChoices(newChoices)

        }   else if (choice === "Esconderse detrás de un árbol") {
                setStory("Te escondes detrás de un árbol. El ruido se aleja.")
                const newChoices = ["Seguir tu camino", "Explorar el bosque", "Esperar un momento más"]
                setChoices(newChoices)
        }
            
            if (choice === "Seguir corriendo") {
                setStory("Corres hasta que no puedes más. Te sientes deshidratado")
                const newChoices = ["Buscar agua en algún lugar", "Detenerte un momento", "Seguir corriendo aún más"]
                setChoices(newChoices)
        }
            if (choice === "Seguir corriendo aún más") {
                setStory("Te desmayas. Despiertas de noche en una cabaña. Hay una hoguera encendida y una mujer de espaldas.")
                const newChoices = ["Preguntar qué pasó", "Levantarte sigilosamente", "Fingir seguir dormidx"]
                setChoices(newChoices)
        }
            if (choice === "Preguntar qué pasó") {
                setStory("Al escucharte, la mujer toma rapidamente una pala y golpea tu cabeza. Te desmayas nuevamente. Despiertas de día. La cabaña está vacía.")
                const newChoices = ["Intentar huir rápidamente", "Buscar algo para defenderte", "Seguir acostadx"]
                setChoices(newChoices)
            } else if (choice === "Levantarte sigilosamente") {
                setStory("Te levantas con cuidado, la mujer no te oye")
                const newChoices = ["Buscar herramientas", "Intentar huir", "Preguntar qué pasó"]
                setChoices(newChoices)
            } else if (choice === "Fingir seguir dormidx") {
                setStory("Finges. Puedes escuchar a la mujer murmurar en voz baja pero no entiendes que dice. Se acerca hacia ti.")
                const newChoices = ["Seguir fingiendo", "Levantarte rápidamente", "Esperar y tomarla por sorpresa"]
                setChoices(newChoices)
            }


}



    return (
        <div className="App">
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


