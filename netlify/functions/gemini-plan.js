// Netlify Serverless Function: Genera planes de entrenamiento canino 100% amables
// usando la API oficial de Google Gemini con Structured Outputs (JSON estricto)
// y respaldo pedagógico dinámico garantizado.

const SYSTEM_PROMPT = `Sos un educador canino profesional especializado en bienestar animal y entrenamiento 100% respetuoso (estilo DogoLingo).
Tu misión es generar rutas de aprendizaje personalizadas (Tutor y Can) estrictamente alineadas con estos principios teóricos y reglas de negocio:

1. MARCO TEÓRICO OBLIGATORIO (CERO CASTIGOS):
   - Operar EXCLUSIVAMENTE con Refuerzo Positivo (premiar conductas deseadas) y Castigo Negativo suave (retirar brevemente atención o acceso sin enojo, ej. subir el plato si salta).
   - PROHIBIDO sugerir castigo positivo, refuerzo negativo, collares de ahorro/ahogo/púas/eléctricos, tirones de correa, gritos o "dominancia" por imposición.
   - Integrar explícitamente conceptos prácticos de: Liderazgo amable y rol de guía seguro (el perro percibe y regula el mundo a través de nuestra calma, coherencia y ejemplo), Cuadrante de Skinner aplicado con amabilidad, Principio de Premack (usar permisos cotidianos como recompensa), Luring (guiado con premio y retiro progresivo de la comida), Capturing (capturar conductas tranquilas espontáneas), Señales de Calma de Turid Rugaas y tono de voz sereno.

2. REGLA INQUEBRANTABLE DE BIENESTAR CANINO:
   - La práctica activa de comandos del perro NUNCA debe superar los 15 minutos diarios totales para evitar fatiga mental y estrés.
8. VIDEOS CURADOS Y CANAL APROBADO DE RESPALDO (REPARTIR POR NIVEL Y TEMA):
   - Para el array "videos" de cada nodo, seleccioná 1 o 2 videos relevantes ÚNICAMENTE de esta lista curada verificada, respetando el nivel y el problema específico:
     * https://www.youtube.com/watch?v=9b7F1QY9iWc (Cómo ser un buen guía y referente seguro para tu perro)
     * https://www.youtube.com/watch?v=rYRhnF4-NUg (Estructura, previsibilidad y refuerzo positivo)
     * https://www.youtube.com/watch?v=RppFTzWkFOw (Lectura corporal y señales de calma - Turid Rugaas)
     * https://www.youtube.com/watch?v=WP-wtPet_uI (Cómo aplicar Capturing en casa)
     * https://www.youtube.com/watch?v=NAth4ZBEAnE (Enriquecimiento sensorial: alfombras olfativas y licky mats)
     * https://www.youtube.com/watch?v=kRN9KxcrCes (Luring vs. Capturing sin frustración)
     * https://www.youtube.com/watch?v=ZHE8TGj_2BU (Manejo en entornos de estrés y calma)
     * https://www.youtube.com/watch?v=2kCQ6aXg9cI (Gestión de atención y foco con distracciones)
     * https://www.youtube.com/watch?v=je3t9HAwOFs (El plato como punto de inflexión: autocontrol amable)
     * https://www.youtube.com/watch?v=e1bEILT1h2E (Descompresión y juego de olfato base)
     * https://www.youtube.com/shorts/eKS3mjN0f3U (Luring básico: Mirame, Sit y juego)
     * https://www.youtube.com/watch?v=XS4MsXDbGQI (Premios de alto valor saludables)
     * https://www.youtube.com/watch?v=h7VqP6OuSjw (Recetas de congelados y juguetes rellenables)
     * https://www.youtube.com/watch?v=pC1aZf15pOE (Foco con distracciones en exteriores)
     * https://www.youtube.com/shorts/PktcGcFK0U4 (Positivizar el bozal tipo canasta)
     * https://www.youtube.com/watch?v=0GNAXQaeJhA (Poner el pretal sin miedo)
     * https://www.youtube.com/watch?v=XGzavHuQDmA (Calma antes de enganchar la correa / correa floja)
     * https://www.youtube.com/watch?v=ZlxllSurxM0 (Gestión ambiental para bajar ladridos)
     * https://www.youtube.com/watch?v=nkFNMYbJhy8 (Redirigir mordiscones al caminar)
     * https://www.youtube.com/watch?v=3Lx2VMRC1D4 (Frenar el salto al recibir visitas)
     * https://www.youtube.com/watch?v=ny8sshxsoHo (Ansiedad por separación: señales y bases - Nivel 1)
     * https://www.youtube.com/watch?v=PvEXf5gY-OM (Quedarse solo en casa: salidas graduales - Nivel 2)
     * https://www.youtube.com/watch?v=wPjLYCiu4xk (Miedo profundo en la calle: distancia segura y respeto)
     * https://www.youtube.com/watch?v=P7R3vpgz6mA (Inseguridad en la calle: construir confianza paso a paso)
     * https://www.youtube.com/watch?v=r09mb_nfTZo (Miedo a tormentas y pirotecnia: fobia sonora y refugio)
     * https://www.youtube.com/watch?v=AftyX0Kt7-s (Protección de recursos: plato, hueso, juguete o sillón)
     * https://www.youtube.com/watch?v=hQrx64U2ZEc (Reactividad hacia otros perros en paseo: guía general)
     * https://www.youtube.com/watch?v=2dt0kVwF6j4 (Causas de reactividad hacia otros perros - Nivel 2)
     * https://www.youtube.com/watch?v=dUz4mbJFU3M (Causas de reactividad: alternativa y manejo preventivo)
     * https://www.youtube.com/watch?v=egbkNwNUxog (Reactividad hacia personas, niños, bicis o motos)
     * https://www.youtube.com/watch?v=7coCAFVkewA (Hábitos higiénicos: enseñar pis y caca afuera sin retos)
     * https://www.youtube.com/watch?v=oPDjqgxUcZM (Cuidados cooperativos: baño, cepillado y corte de uñas)
     * https://www.youtube.com/watch?v=V-JIAM4RWPw (Miedo al veterinario, gotas o pipeta sin forcejeos)
     * https://www.youtube.com/watch?v=zqTM2uDIOj8 (Miedo o mareo al viajar en auto)
     * https://www.youtube.com/watch?v=nLm-gg11IrQ (Convivencia entre perros y gatos en casa)
     * https://www.youtube.com/watch?v=k24VeWDxCaM (Convivencia segura entre perros y bebés/niños)
     * https://www.youtube.com/watch?v=Z_CDerzy1e4 (Perro hiperactivo que no sabe desconectar / modo turbina)
     * https://www.youtube.com/watch?v=v4ZV8d6XwBc (Cómo hablarle al perro: tono y actitud - Comunicación Nivel 1)
     * https://www.youtube.com/watch?v=QDdqPw-MDfo (Comunicación canina: coherencia y energía - Nivel 2)
     * https://www.youtube.com/watch?v=wJvndQ-7qwk (Comunicación canina avanzada: lectura sutil - Nivel 3)
     * https://www.youtube.com/watch?v=-hOqlYRl5Pk (Alternativa: cómo hablarle y comunicarnos con el perro)
     * https://www.youtube.com/@dos_adiestramiento/search?query=adiestramiento+positivo (Búsqueda en canal aprobado de referencia)

9. FORMATO DE ÍCONOS ESTRICTO (MUY IMPORTANTE):
   - El campo "icon" de cada nodo DEBE ser ÚNICAMENTE un solo emoji Unicode real (ej: "🧭", "👀", "👃", "🎯", "🛡️", "🥣", "🌿", "💤", "🎾", "🐕‍🦺", "🦮", "🎙️").
   - NUNCA devuelvas nombres de íconos en texto o inglés como "directions_walk", "airline_seat_recline_extra", "linear_scale" o similares.

10. IDIOMA: Español rioplatense/neutro cercano, empático y claro.`;

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    stageNumber: { type: "INTEGER" },
    stageSummary: { type: "STRING" },
    tutor: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          id: { type: "STRING" },
          title: { type: "STRING" },
          duration: { type: "STRING" },
          icon: { type: "STRING" },
          tags: { type: "ARRAY", items: { type: "STRING" } },
          mediaType: { type: "STRING", enum: ["reading", "video"] },
          mediaTitle: { type: "STRING" },
          mediaBody: { type: "STRING" },
          videos: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                title: { type: "STRING" },
                url: { type: "STRING" }
              },
              required: ["title", "url"]
            }
          },
          steps: { type: "ARRAY", items: { type: "STRING" } },
          adaptiveTip: { type: "STRING" }
        },
        required: ["id", "title", "duration", "icon", "tags", "mediaType", "mediaTitle", "mediaBody", "videos", "steps", "adaptiveTip"]
      }
    },
    dog: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          id: { type: "STRING" },
          title: { type: "STRING" },
          duration: { type: "STRING" },
          icon: { type: "STRING" },
          requiresTutorIds: { type: "ARRAY", items: { type: "STRING" } },
          tags: { type: "ARRAY", items: { type: "STRING" } },
          mediaType: { type: "STRING", enum: ["reading", "video"] },
          mediaTitle: { type: "STRING" },
          mediaBody: { type: "STRING" },
          videos: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                title: { type: "STRING" },
                url: { type: "STRING" }
              },
              required: ["title", "url"]
            }
          },
          steps: { type: "ARRAY", items: { type: "STRING" } },
          adaptiveTip: { type: "STRING" }
        },
        required: ["id", "title", "duration", "icon", "requiresTutorIds", "tags", "mediaType", "mediaTitle", "mediaBody", "videos", "steps", "adaptiveTip"]
      }
    }
  },
  required: ["stageNumber", "stageSummary", "tutor", "dog"]
};

function buildDynamicFallbackPlan(profile = {}, stageNumber = 1) {
  const stage = Number(stageNumber || 1);
  const dog = profile.dogName || "tu perro";
  const problemsList = Array.isArray(profile.mainProblems) && profile.mainProblems.length > 0
    ? profile.mainProblems
    : [profile.mainProblem || "Tironeo de correa"];
  const primaryProblem = problemsList[0];
  const problemsSummary = problemsList.join(", ");
  const isExperienced =
    profile.priorTraining === "Sí" ||
    profile.tutorConditioning === "Intermedio" ||
    profile.tutorBodyLanguage === "Intermedio";
  const allowsMuzzle = profile.requiresMuzzle === "Sí";

  if (stage >= 2) {
    const stageBank = [
      {
        tutor: [
          {
            id: `t_s${stage}_1`,
            title: "Regla de las 3D en el Quieto (Distancia, Duración, Distracción)",
            duration: "4 min",
            icon: "📐",
            tags: ["Quieto", "Progresión 3D", "Sin Frustración"],
            mediaType: "video",
            mediaTitle: `Construir permanencia sólida con ${dog}`,
            mediaBody: "Subí una sola variable por vez (segundos o pasos de distancia) y premiá siempre en la posición antes de liberar.",
            videos: [{ title: "Estructura, previsibilidad y refuerzo positivo", url: "https://www.youtube.com/watch?v=rYRhnF4-NUg" }],
            steps: [
              "Si sumás 2 pasos de distancia, bajá el tiempo de espera a 3 segundos.",
              "Volvé hacia tu perro para premiar en el lugar antes de decir '¡Libre!'.",
              "Evitá repetir la palabra 'quieto' varias veces seguidas."
            ],
            adaptiveTip: "Si se levanta antes, simplemente reducí la distancia en el intento siguiente."
          },
          {
            id: `t_s${stage}_2`,
            title: "Intercambio Justo para Enseñar Soltar",
            duration: "4 min",
            icon: "🤝",
            tags: ["Soltar", "Confianza", "Prevención"],
            mediaType: "video",
            mediaTitle: "Cooperación voluntaria sin quitar objetos por la fuerza",
            mediaBody: "Intercambiar un juguete por un premio rico y devolvérselo evita la protección de recursos.",
            videos: [{ title: "Premios de alto valor saludables", url: "https://www.youtube.com/watch?v=XS4MsXDbGQI" }],
            steps: [
              "Acercá un premio blando a su nariz mientras sostiene un juguete.",
              "Apenas abra la boca, decí 'Soltá', premiá y devolvele su juguete.",
              "Practicá 3 repeticiones breves en un entorno tranquilo."
            ],
            adaptiveTip: "Nunca corras detrás de tu perro para sacarle algo de la boca."
          },
          {
            id: `t_s${stage}_3`,
            title: "Comunicación Canina Avanzada (Nivel 3) y Exterior",
            duration: "4 min",
            icon: "🎙️",
            tags: ["Comunicación Nivel 3", "Exterior", "Alto Valor"],
            mediaType: "video",
            mediaTitle: "Lectura sutil y coherencia emocional en espacios abiertos",
            mediaBody: "Afinamos nuestra actitud corporal y voz en plazas o veredas, bajando la exigencia y subiendo el valor del premio.",
            videos: [
              { title: "Comunicación canina avanzada (Nivel 3: lectura sutil)", url: "https://www.youtube.com/watch?v=wJvndQ-7qwk" },
              { title: "Foco con distracciones en exteriores", url: "https://www.youtube.com/watch?v=pC1aZf15pOE" }
            ],
            steps: [
              "Dejá olfatear el entorno 3 minutos antes de pedir ejercicios.",
              "Premiá cada mirada voluntaria hacia vos a distancia cómoda.",
              "Cortá la sesión antes de que aparezca cansancio."
            ],
            adaptiveTip: "Si ignora premios ricos, aumentá unos metros la distancia al estímulo."
          },
          {
            id: `t_s${stage}_3`,
            title: "Encadenamiento Fluido y Descompresión",
            duration: "4 min",
            icon: "🎓",
            tags: ["Fluidez", "Bienestar", "15m Máx Activos"],
            mediaType: "video",
            mediaTitle: "Combinar señales conocidas sin saturar",
            mediaBody: "Alternar 2 ejercicios conocidos antes de premiar mantiene la mente ágil y entretenida.",
            videos: [{ title: "Gestión de atención y foco con distracciones", url: "https://www.youtube.com/watch?v=2kCQ6aXg9cI" }],
            steps: [
              "Pedí Mirame y luego Sit en una secuencia fluida.",
              "Premiá al completar ambos y dale una pausa de olfato.",
              "Respetá siempre el tope de 15 minutos activos al día."
            ],
            adaptiveTip: "Menos repeticiones y mayor calidad emocional."
          }
        ],
        dog: [
          {
            id: `d_s${stage}_1`,
            title: "Ir a su Manta (Place) y Acostado Relajado",
            duration: "4 min",
            icon: "🏕️",
            requiresTutorIds: [`t_s${stage}_1`],
            tags: ["Place", "Acostado", "Calma"],
            mediaType: "video",
            mediaTitle: `Descanso guiado sobre su manta para ${dog}`,
            mediaBody: "Practicamos ir a la manta, echarse tranquilo y esperar la señal de liberación.",
            videos: [{ title: "Cómo aplicar Capturing en casa", url: "https://www.youtube.com/watch?v=WP-wtPet_uI" }],
            steps: [
              "Invitalo hacia su manta y premiá cuando apoye las 4 patas.",
              "Guiá a Acostado y entregá 2 premios pausados en el lugar.",
              "Liberá con '¡Libre!' tras 5 segundos de calma."
            ],
            adaptiveTip: "Podés llevar esa misma manta cuando vayan de visita."
          },
          {
            id: `d_s${stage}_2`,
            title: "Mirame y Sit con Distracciones en Plaza",
            duration: "5 min",
            icon: "👀",
            requiresTutorIds: [`t_s${stage}_2`],
            tags: ["Mirame", "Sit", "Exterior"],
            mediaType: "video",
            mediaTitle: `Atención voluntaria en exterior para ${dog}`,
            mediaBody: "Consolidamos Mirame y Sit a distancia segura de personas o perros en movimiento.",
            videos: [{ title: "Foco con distracciones en exteriores", url: "https://www.youtube.com/watch?v=pC1aZf15pOE" }],
            steps: [
              "Ubicáte a 10 metros de estímulos tranquilos en el parque.",
              "Pedí Mirame, marcá el contacto visual y luego pedí Sit.",
              "Premiá con entusiasmo calmo y cerrá con olfateo libre."
            ],
            adaptiveTip: "La distancia es la clave para que pueda pensar y elegir mirarte."
          },
          {
            id: `d_s${stage}_3`,
            title: "Circuito Cognitivo: Choca Esos Cinco y Rastreo",
            duration: "4 min",
            icon: "🌟",
            requiresTutorIds: [`t_s${stage}_3`],
            tags: ["Choca Esos Cinco", "Olfato", "Diversión"],
            mediaType: "video",
            mediaTitle: `Cierre lúdico y olfativo para ${dog}`,
            mediaBody: "Evolucionamos Dar la Pata a Choca Esos Cinco y cerramos con rastreo de premios.",
            videos: [{ title: "Descompresión y juego de olfato base", url: "https://www.youtube.com/watch?v=e1bEILT1h2E" }],
            steps: [
              "Elevá un poco la palma abierta para invitar a tocarla con su pata ('Choca esos cinco').",
              "Premiá 3 aciertos fluidos y esparcí premios en una alfombra o pasto.",
              "Dejá que olfatee tranquilo para bajar pulsaciones."
            ],
            adaptiveTip: "Cerrar con olfato evita que quede sobreexcitado después de jugar."
          }
        ]
      }
    ];

    const selectedModule = stageBank[(stage - 2) % stageBank.length];
    return {
      stageNumber: stage,
      stageSummary: `Etapa ${stage} adaptada para ${dog} (nuevas habilidades y progresión sin repeticiones).`,
      tutor: selectedModule.tutor,
      dog: selectedModule.dog
    };
  }

  const tutor = isExperienced
    ? [
        {
          id: `t_s${stage}_1`,
          title: stage === 1 ? "Ser un Buen Guía y Referente" : `Etapa ${stage}: Timing en Movimiento`,
          duration: "4 min",
          icon: "🧭",
          tags: ["Liderazgo Amable", "Ejemplo y Calma", "Nivel Intermedio"],
          mediaType: profile.wantsReading === "Sí" ? "reading" : "video",
          mediaTitle: `Cómo percibe el mundo ${dog} a través de tu guía`,
          mediaBody: `Los perros leen nuestro estado emocional y coherencia para decidir si un entorno es seguro. Ser un buen guía no es imponer, sino ofrecer calma, previsibilidad y ejemplos claros.`,
          videos: [
            { title: "Cómo hablarle a tu perro (Nivel 1: tono y actitud)", url: "https://www.youtube.com/watch?v=v4ZV8d6XwBc" },
            { title: "Cómo ser un buen guía y referente para tu perro", url: "https://www.youtube.com/watch?v=9b7F1QY9iWc" }
          ],
          steps: [
            "Modelá la calma con movimientos pausados y voz serena antes de interactuar.",
            "Marcá cada acierto al instante con una palabra corta y entregá un premio suave.",
            "Hacé bloques cortos de 3 a 5 minutos cerrando siempre con éxito."
          ],
          adaptiveTip: "Guiar con ejemplo y claridad reemplaza por completo cualquier grito o tirón."
        },
        {
          id: `t_s${stage}_2`,
          title: stage === 1 ? "Señales de Calma y Comunicación Nivel 2" : `Etapa ${stage}: Foco con Estímulos`,
          duration: "4 min",
          icon: "👀",
          tags: ["Turid Rugaas", "Comunicación Nivel 2", "Calma"],
          mediaType: "video",
          mediaTitle: "Leer el lenguaje corporal y regular nuestra energía",
          mediaBody: "Reconocer señales de calma a tiempo evita frustraciones durante las prácticas.",
          videos: [
            { title: "Lectura corporal y señales de calma - Turid Rugaas", url: "https://www.youtube.com/watch?v=RppFTzWkFOw" },
            { title: "Comunicación canina (Nivel 2: coherencia y energía)", url: "https://www.youtube.com/watch?v=QDdqPw-MDfo" }
          ],
          steps: [
            "Observá postura, orejas y boca durante el ejercicio.",
            "Si se distrae o incomoda, bajá el nivel sin retarlo.",
            "Premiá conductas tranquilas espontáneas."
          ],
          adaptiveTip: "Respetar su ritmo mantiene alta su motivación."
        },
        {
          id: `t_s${stage}_3`,
          title: stage === 1 ? "Olfato y Descanso Guiado" : `Etapa ${stage}: Rutinas en Entornos`,
          duration: "4 min",
          icon: "🌿",
          tags: ["Olfato", "Bienestar", "15m Máx Activos"],
          mediaType: "video",
          mediaTitle: "Equilibrio entre mente y descanso",
          mediaBody: "Combiná práctica breve con enriquecimiento sensorial para cuidar su bienestar diario.",
          videos: [
            { title: "Descompresión y juego de olfato base", url: "https://www.youtube.com/watch?v=e1bEILT1h2E" }
          ],
          steps: [
            "Proponé una búsqueda olfativa suave.",
            "Respetá el tope de 15 minutos activos diarios.",
            "Finalizá con calma."
          ],
          adaptiveTip: "Menos repeticiones cansadas y más aciertos tranquilos."
        }
      ];

  const dogList = [
    {
      id: `d_s${stage}_1`,
      title: isExperienced
        ? (stage === 1 ? `Autocontrol Dinámico (${primaryProblem})` : `Etapa ${stage}: Permanencia y Calma`)
        : (stage === 1 ? "Espera Tranquila y Autocontrol" : `Etapa ${stage}: Foco en Casa`),
      duration: "4 min",
      icon: "🎯",
      requiresTutorIds: [`t_s${stage}_1`],
      tags: ["Práctica Guiada", primaryProblem, "Máx. 15m/día"],
      mediaType: "video",
      mediaTitle: `Ejercicio práctico para ${dog}`,
      mediaBody: `Adaptado a ${dog} (${profile.dogAge || "Joven"}) y sus desafíos seleccionados: ${problemsSummary}.`,
      videos: [
        { title: "Gestión de atención y foco con distracciones", url: "https://www.youtube.com/watch?v=2kCQ6aXg9cI" }
      ],
      steps: [
        "Empezá en un espacio con pocas distracciones.",
        "Premiá las respuestas tranquilas y cortas.",
        "Detenete antes de que se fatigue."
      ],
      adaptiveTip: "Si se equivoca, simplificá el paso siguiente."
    },
    {
      id: `d_s${stage}_2`,
      title: allowsMuzzle && stage === 1
        ? "Positivización del Bozal"
        : (profile.walksOutside === "Sí"
            ? (stage === 1 ? `Paseo y Correa (${profile.walkBehavior || "Calma"})` : `Etapa ${stage}: Exterior Progresivo`)
            : `Etapa ${stage}: Juego y Calma en Casa`),
      duration: "4 min",
      icon: allowsMuzzle && stage === 1 ? "🛡️" : "🦮",
      requiresTutorIds: [`t_s${stage}_2`],
      tags: [allowsMuzzle && stage === 1 ? "Bozal Amable" : "Paseo Amable", "Progresivo"],
      mediaType: "video",
      mediaTitle: allowsMuzzle && stage === 1 ? "Asociar el bozal con calma y comida" : "Avanzar con calma y sin tirones",
      mediaBody: allowsMuzzle && stage === 1
        ? "Acercá el bozal con premios suaves sin forzar ni abrochar en los primeros pasos."
        : "Mantené la correa floja y premiá el foco y la calma.",
      videos: [
        allowsMuzzle && stage === 1
          ? { title: "Positivizar el bozal tipo canasta", url: "https://www.youtube.com/shorts/PktcGcFK0U4" }
          : { title: "Calma antes de enganchar la correa / correa floja", url: "https://www.youtube.com/watch?v=XGzavHuQDmA" }
      ],
      steps: [
        "Trabajá en pasos breves de 2 a 4 minutos.",
        "Premiá cada avance tranquilo.",
        "Cerrá con una pausa relajada."
      ],
      adaptiveTip: "Sin fuerza ni presión: la cooperación nace de la seguridad."
    },
    {
      id: `d_s${stage}_3`,
      title: `Búsqueda Olfativa y Relajación (Etapa ${stage})`,
      duration: "4 min",
      icon: "🌿",
      requiresTutorIds: [`t_s${stage}_3`],
      tags: ["Olfato", "Descompresión", "Bienestar"],
      mediaType: "video",
      mediaTitle: `Cierre tranquilo para ${dog}`,
      mediaBody: "Un cierre olfativo ayuda a bajar revoluciones después de practicar.",
      videos: [
        { title: "Descompresión y juego de olfato base", url: "https://www.youtube.com/watch?v=e1bEILT1h2E" }
      ],
      steps: [
        "Esparcí premios en una zona tranquila.",
        "Dejá que olfatee a su ritmo.",
        "Dá por cerrada la sesión con calma."
      ],
      adaptiveTip: "Ideal para cerrar el día sin sobreexcitación."
    }
  ];

  return {
    stageNumber: stage,
    stageSummary: `Plan adaptado para ${dog} (${problemsSummary} • máx. 15 min activos/día).`,
    tutor,
    dog: dogList
  };
}

exports.handler = async function (event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Método no permitido. Usá POST." })
    };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || "{}");
  } catch (_) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "JSON inválido en el cuerpo de la solicitud." })
    };
  }

  const {
    action = "GENERATE_STAGE",
    stageNumber = 1,
    profile = {},
    completedTitles = [],
    failedNode = null
  } = body;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(buildDynamicFallbackPlan(profile, stageNumber))
    };
  }

  let userPrompt = "";
  if (action === "ADAPT_DIFFICULTY" && failedNode) {
    userPrompt = `El usuario tuvo dificultad con este ejercicio: "${failedNode.title}" (Ruta: ${failedNode.route}).
Perfil del perro: ${JSON.stringify(profile)}.
Generá una regresión pedagógica amable (bajando criterio, distancia y distracciones) devolviendo 1 nodo ajustado en la ruta correspondiente con pasos más simples y un "adaptiveTip" empático.`;
  } else {
    const problemsList = Array.isArray(profile.mainProblems) && profile.mainProblems.length > 0
      ? profile.mainProblems
      : [profile.mainProblem || "Tironeo de correa"];
    userPrompt = `Generá la Etapa ${stageNumber} del plan de entrenamiento DogoLingo para este binomio:
- Nombre del perro: ${profile.dogName || "Toby"}
- Edad/Etapa: ${profile.dogAge || "Joven"}
- Estado físico: ${profile.physicalState || "Sin restricciones"}
- Sale a pasear: ${profile.walksOutside || "Sí"} | Comportamiento en paseo: ${profile.walkBehavior || "Tira de la correa"}
- Requiere uso de bozal: ${profile.requiresMuzzle || "No"}
- Educación previa: ${profile.priorTraining || "No"}
- Desafíos seleccionados (en orden de prioridad): ${problemsList.join(" | ")}
- Perfil sensorial en casa: ${JSON.stringify(profile.sensory || {})}
- Nivel del tutor (condicionamiento): ${profile.tutorConditioning || "Principiante"}
- Nivel del tutor (lenguaje corporal): ${profile.tutorBodyLanguage || "Principiante"}
- Tiempo total diario disponible: ${profile.dailyMinutes || 30} min (Recordá: máx. 15 min activos/día para el can).
- Quiere lectura complementaria: ${profile.wantsReading || "Sí"}
${completedTitles.length > 0 ? `- Títulos de lecciones YA generadas en etapas previas (PROHIBIDO repetirlos o hacer variantes idénticas; subí el nivel de dificultad, duración o distracción en exterior): ${completedTitles.join(" | ")}` : ""}

Instrucciones de IDs para Etapa ${stageNumber}:
- Usá prefijos "t_s${stageNumber}_1", "t_s${stageNumber}_2", etc. para la ruta del tutor y "d_s${stageNumber}_1", "d_s${stageNumber}_2", etc. para la ruta del can.
- Asegurate de que los nodos avanzados del can referencien en "requiresTutorIds" a los IDs de esta misma etapa (o queden vacíos en los primeros nodos).`;
  }

  const candidateModels = ["gemini-2.5-flash", "gemini-flash-latest"];
  const startTime = Date.now();
  const maxTotalMs = 18000;
  let parsedPlan = null;

  for (const modelName of candidateModels) {
    const remainingMs = maxTotalMs - (Date.now() - startTime);
    if (remainingMs < 2000) break;

    const perRequestTimeout = Math.min(8500, remainingMs - 500);
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), perRequestTimeout);

    const generationConfig = {
      temperature: 0.45,
      maxOutputTokens: 1600,
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA
    };
    if (modelName.includes("2.5")) {
      generationConfig.thinkingConfig = { thinkingBudget: 0 };
    }

    try {
      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }]
            }
          ],
          generationConfig
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const candidate = JSON.parse(rawText);
          if (candidate && Array.isArray(candidate.tutor) && Array.isArray(candidate.dog)) {
            parsedPlan = candidate;
            break;
          }
        }
      }
    } catch (_) {
      // Si hay timeout, error de red o JSON incompleto, rotamos al siguiente modelo o al respaldo
    } finally {
      clearTimeout(timer);
    }
  }

  if (!parsedPlan) {
    parsedPlan = buildDynamicFallbackPlan(profile, stageNumber);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(parsedPlan)
  };
};
