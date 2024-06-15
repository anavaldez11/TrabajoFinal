const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const story = {
    introduction: {
        text:" Explora escenarios detallados, resuelve acertijos desafiantes y descubre conexiones sorprendentes entre pasado y presente. Enfrenta poderosos enemigos y encuentra aliados inesperados en tu búsqueda por descubrir los secretos ocultos en El Secreto del Reloj de Arena. Prepárate para una aventura inolvidable donde el tiempo guarda sus más profundos misterios",
        choices: [
            { text: "Continuar", next: "comenzar" }
        ]
    },
    comenzar: {
        text: "Tu misión es responder correctamente una serie de preguntas y resolver desafíos relacionados con el reloj de arena en cada escenario. Cada respuesta correcta te acerca más a desvelar el verdadero propósito y poder del reloj, así como a comprender su conexión con eventos históricos clave.",
        choices: [
            { text: "comenzar", next: "inicio" },
           
        ]
    },
    inicio: {
        text: "Ana y Diego descubren un antiguo reloj de arena en el ático de su abuela, junto con una nota que sugiere que el artefacto tiene poderes mágicos. Intrigados, buscan al Profesor Martínez para que les ayude a descifrar su significado.",
        choices: [
            { text: "Continuar", next: "siguiente" }
        ]
    },
   siguiente: {
        text: "A medida que exploran el pasado del reloj, descubren que perteneció a un antiguo mago que lo usaba para controlar el tiempo. Sin embargo, también descubren que el reloj está maldito y que quien lo posea corre el riesgo de perderse en el tiempo para siempre... ",
        choices: [
            { text: "Continuar", next: "sig" }
        ]
    },
    sig: {
        text: "TIENES QUE EVITAR QUE ESO SUCEDA.",
        choices: [
            { text: "Continuar", next: "NEXT" }
        ]
    },
    NEXT: {
        text: "Ana, Diego y el maestro deciden averiguar donde localizar al mago encontrando asi el siguiente acertijo... ",
        choices: [
            { text: "Ver", next: "acertijo" },
        ]
    },
    acertijo: {
        text: "Entre las olas danzantes del mar azul y el susurro del viento, yace una ciudad antigua envuelta en misterio. Sus calles empedradas guardan secretos de dioses olvidados y reyes legendarios. Pilares de mármol sostienen historias de conquistas y tragedias. ¿Dónde estoy?",
        choices: [
            { text: "Estoy en Atlantis, la legendaria ciudad sumergida en el océano.", next: "bien" },
            { text: "Estoy en Pompeya, la ciudad romana sepultada por la erupción del Vesubio.", next: "fin" }
        ]
    },
    fin: {
        text: "Se adentran en Pompeya, desaparece y mueren",
        choices: [
            { text: "volver a empezar", next: "introduction" }
        ]
    },
    bien: {
        text: "Comienzan su camino a Atlantis sin saber que esta ciudad perdida tiene de guardianes a los mostruos marinos mas peligrosos de la literatura y la ficcion",
        choices: [
            { text: "continuar", next: "listo" }
        ]
    },
    listo: {
        text: "Juntos comienzan su embarcacion. En medio de la noche, una densa niebla se levanta sobre las aguas oscuras del mar. La tripulación del barco, agotada tras días de navegación difícil, se encuentra en alerta máxima. De repente, un grito atraviesa el aire: han avistado un ser que se acerca peligrosamente rápido hacia su barco...Sin saber que hacer estos se encuentran con objetos para defenderse",
        choices: [
            { text: "Bengala de señales marítimas", next: "SI" },
                    { text: "Jaula de buceo resistente: ", next: "SI" },   
              { text: "un tenedor ", next: "NO" }, 
        ]
    },
    NO:{
        text: "son atacados por el primer guardian de la isla y mueren", 
        choices: [
            {text: "Volver a empezar", next: "introduction"},
        ]
    },
    SI: {
        text: "Finalmente, logran llegar a la isla pasando a los guardianes de la isla, pero el mago sabia que estos llegarian asi que decidio mandarles diferentes complicaciones para el camino.",
        choices: [
            { text: "continuar", next: "seguir" },
        ]
    },
    seguir: {
        text: "Al llegar a la isla son recibidos por una viejita mul amable que respondia al nombre de Nichole, esta decidio resguardarlkos en su casa, para asi alimentarlos, darles asilo, etc..¿Deberian aceptar sus servicios",
        choices: [
            { text: "Si", next: "oh_no" },
            {text: "no", next: "seguir_aventura"},
        ]
    },
     oh_no: {
         text: "Esta resulto ser un aliado de el mago, los enveneno y fallecieron",
         choices: [
            { text: "volver a empezar", next: "introduction" }
        ]
    },
   seguir_aventura: {
        text: "Pasando asi todas las complicaciones logran llegar al paradero del mago",
        choices: [
            { text: "Continuar", next: "conclusion" }
        ]
    },
    conclusion: {
        text: "Al encontrar al mago este comienza a contarles la historia de dicho reloj. Después de todo, Ana y Diego descubren que el verdadero poder del reloj de arena no está en controlar el tiempo, sino en aceptar el flujo de la vida. Deciden devolver el reloj a su lugar de origen, liberándose de su influencia maligna y aprendiendo que el tiempo es un regalo que debe ser vivido en el presente..",
        choices: [
            { text: "Volver a empezar", next: "introduction" }
        ]
    }
};

function showStory(node) {
    storyElement.innerHTML = story[node].text;
    choicesElement.innerHTML = '';
    story[node].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

// Iniciar la historia
showStory('introduction');