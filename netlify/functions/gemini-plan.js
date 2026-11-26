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
   - Si el usuario reporta 30, 45 o 60 minutos disponibles al día, el excedente sobre los 15 minutos activos del perro se asigna a capacitación del tutor y enriquecimiento pasivo (olfato, licky mat, descanso).

3. PERFIL SENSORIAL EN CASA:
   - Analizá los 5 canales (Olfativa, Sonora, Gustativa, Visual, Texturas). Priorizá dinámicas de enriquecimiento en los canales marcados como "Bajo". Si todos están en "Medio" o "Alto", felicitá esa base y proponé desafíos cognitivos/olfativos progresivos sin afirmar que están bajos.

4. ADAPTABILIDAD FÍSICA Y ETARIA:
   - Si el perro es "Senior" o tiene estado físico "Sensible / Articular" o "Cuidado especial", evitá saltos, giros bruscos o exigencia física y priorizá cognición, olfato y calma.

5. CALIBRACIÓN POR EXPERIENCIA PREVIA (OBLIGATORIO):
   - Si "priorTraining" es "Sí" (el perro ya tiene educación previa) o "tutorConditioning" / "tutorBodyLanguage" es "Intermedio" o "Conozco lo básico", OMITÍ por completo ejercicios nivel cero (como "El plato como punto de inflexión", "Mirame básico en living" o "Cómo usar premios"). Arrancá directamente en nivel intermedio/avanzado: retirada de cebo (fading luring), autocontrol en movimiento, gestión de distancia/umbral en exteriores y resolución directa de su "mainProblem" y "walkBehavior".
   - Integrá de forma progresiva y orgánica comandos funcionales y juegos cognitivos amables: Mirame (contacto visual), Sit (sentado), Acostado (down), Quieto (permanencia 3D: distancia, duración y distracción), Dar la pata / Choca esos cinco, Soltar (intercambio justo sin forcejeos) y juegos mentales como "¿En qué mano está?" (olfato y elección).
   - Adaptá las lecciones específicamente a TODOS los desafíos elegidos en "mainProblems" (o "mainProblem" como prioritario), cubriendo tanto el desafío principal como los complementarios sin exceder los 15 minutos activos diarios ni saturar al perro.
   - USO DE BOZAL: Si "requiresMuzzle" es "No" (o no está especificado), ESTÁ PROHIBIDO incluir nodos o menciones sobre bozal en el plan. Solo incluí positivización de bozal si "requiresMuzzle" es "Sí".

6. DEPENDENCIA CRUZADA TUTOR -> CAN:
   - Los nodos avanzados de la ruta del perro deben exigir en "requiresTutorIds" el ID del nodo teórico correspondiente de la ruta del tutor.

7. GENERACIÓN POR ETAPAS (SCROLL INFINITO SIN REPETICIONES):
   - Generá bloques ágiles y concisos de exactamente 3 nodos por ruta por etapa (3 en tutor y 3 en dog, textos breves y accionables).
   - ESTÁ PROHIBIDO repetir títulos, ejercicios o dinámicas de etapas anteriores: cada nueva etapa debe escalar progresivamente la dificultad (aumentando duración de permanencia, retirando el cebo/luring, sumando distancia a distracciones y pasando de casa -> patio/vereda tranquila -> parque con estímulos medios).

8. VIDEOS CURADOS Y CANAL APROBADO DE RESPALDO:
   - Para el array "videos" de cada nodo, seleccioná 1 o 2 videos relevantes ÚNICAMENTE de esta lista curada verificada o del canal aprobado:
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
            title: "Juegos Cognitivos y Olfato en Casa",
            duration: "4 min",
            icon: "🧠",
            tags: ["Cognición", "Olfato", "Calma"],
            mediaType: "video",
            mediaTitle: `Estimulación mental sin impacto físico para ${dog}`,
            mediaBody: "Los juegos de elección y olfato canalizan energía mental y fortalecen la concentración.",
            videos: [{ title: "Enriquecimiento sensorial: alfombras olfativas y licky mats", url: "https://www.youtube.com/watch?v=NAth4ZBEAnE" }],
            steps: [
              "Prepará 3 repeticiones de búsqueda en puños cerrados o vasos.",
              "Dejá que use su nariz sin darle pistas con la voz.",
              "Cerrá la sesión cuando resuelva con calma."
            ],
            adaptiveTip: "Ideal para días de lluvia o para complementar el tope de 15 min activos."
          }
        ],
        dog: [
          {
            id: `d_s${stage}_1`,
            title: "Sit, Acostado y Quieto con 2 Pasos de Distancia",
            duration: "4 min",
            icon: "🪑",
            requiresTutorIds: [`t_s${stage}_1`],
            tags: ["Sit", "Acostado", "Quieto"],
            mediaType: "video",
            mediaTitle: `Posturas de calma y permanencia para ${dog}`,
            mediaBody: "Encadenamos Sit y Acostado con retirada de cebo y sumamos 2 pasos de Quieto tranquilo.",
            videos: [{ title: "Luring básico: Mirame, Sit y juego", url: "https://www.youtube.com/shorts/eKS3mjN0f3U" }],
            steps: [
              "Pedí Sit y luego Acostado usando gesto manual limpio.",
              "Mostrá palma abierta ('Quieto'), dá 2 pasos atrás, volvé, premiá y liberá.",
              "Mantené la práctica por debajo de los 4 minutos."
            ],
            adaptiveTip: "Premiá en el suelo cuando esté acostado para reforzar la calma."
          },
          {
            id: `d_s${stage}_2`,
            title: "Dar la Pata y Soltar con Intercambio",
            duration: "4 min",
            icon: "🐾",
            requiresTutorIds: [`t_s${stage}_2`],
            tags: ["Dar la Pata", "Soltar", "Vínculo"],
            mediaType: "video",
            mediaTitle: `Trucos cooperativos y control bucal para ${dog}`,
            mediaBody: "Construimos el gesto de Dar la Pata por iniciativa propia y el Soltar amable con mordedor.",
            videos: [{ title: "Luring vs. Capturing sin frustración", url: "https://www.youtube.com/watch?v=kRN9KxcrCes" }],
            steps: [
              "Cerrá un premio en tu mano baja; cuando toque con la pata, marcá '¡Bien!' y premiá.",
              "Jugá suave con un mordedor, pedí 'Soltá' ofreciendo premio y retomá el juego.",
              "Hacé 3 repeticiones divertidas y cortas."
            ],
            adaptiveTip: "Celebrá cada pequeño avance con voz serena y alegre."
          },
          {
            id: `d_s${stage}_3`,
            title: "Juego Mental: ¿En qué mano está?",
            duration: "4 min",
            icon: "✊",
            requiresTutorIds: [`t_s${stage}_3`],
            tags: ["¿En qué mano está?", "Olfato", "Autocontrol"],
            mediaType: "video",
            mediaTitle: `Desafío olfativo de elección para ${dog}`,
            mediaBody: "Tu perro usa su olfato para identificar en qué puño está el premio sin mordisquear.",
            videos: [{ title: "Descompresión y juego de olfato base", url: "https://www.youtube.com/watch?v=e1bEILT1h2E" }],
            steps: [
              "Escondé un premio en una mano y presentá ambos puños cerrados.",
              "Cuando apoye el hocico o la pata suavemente en la mano correcta, abrí y premiá.",
              "Alterná de mano durante 4 rondas tranquilas."
            ],
            adaptiveTip: "Si rasca fuerte, esperá 1 segundo de pausa antes de abrir la mano."
          }
        ]
      },
      {
        tutor: [
          {
            id: `t_s${stage}_1`,
            title: "Estación de Calma en Manta (Place) y Visitas",
            duration: "4 min",
            icon: "🏕️",
            tags: ["Place / Manta", "Autocontrol", "Premack"],
            mediaType: "video",
            mediaTitle: "Crear un punto seguro de descanso portátil",
            mediaBody: "Asociar una manta con calma profunda permite gestionar timbres, comidas y salidas sin estrés.",
            videos: [{ title: "Cómo aplicar Capturing en casa", url: "https://www.youtube.com/watch?v=WP-wtPet_uI" }],
            steps: [
              "Premiá cada vez que pise o se eche sobre su manta.",
              "Entregá los premios despacio entre sus patas para bajar revoluciones.",
              "Usá una palabra clara de liberación cuando termine el ejercicio."
            ],
            adaptiveTip: "La manta nunca se usa como castigo, siempre como refugio positivo."
          },
          {
            id: `t_s${stage}_2`,
            title: "Generalización en Plazas con Estímulos Medios",
            duration: "4 min",
            icon: "🌳",
            tags: ["Exterior", "Foco", "Alto Valor"],
            mediaType: "video",
            mediaTitle: `Sostener la atención de ${dog} fuera de casa`,
            mediaBody: "En espacios abiertos subimos el valor del premio y acortamos las repeticiones.",
            videos: [{ title: "Foco con distracciones en exteriores", url: "https://www.youtube.com/watch?v=pC1aZf15pOE" }],
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
            { title: "Cómo ser un buen guía y referente para tu perro", url: "https://www.youtube.com/watch?v=9b7F1QY9iWc" },
            { title: "Luring vs. Capturing sin frustración", url: "https://www.youtube.com/watch?v=kRN9KxcrCes" }
          ],
          steps: [
            "Antes de pedir una conducta, regulá tu postura y respiración para transmitir calma.",
            "Sé coherente con tus señales: premiá con timing preciso y evitá repetir órdenes.",
            "Usá permisos del entorno como recompensa natural (Principio de Premack)."
          ],
          adaptiveTip: "Tu serenidad es el ancla emocional desde la cual tu perro interpreta el entorno."
        },
        {
          id: `t_s${stage}_2`,
          title: stage === 1 ? "Lectura de Señales y Umbrales" : `Etapa ${stage}: Gestión de Distancia`,
          duration: "4 min",
          icon: "👀",
          tags: ["Señales de Calma", "Bienestar", "Prevención"],
          mediaType: "video",
          mediaTitle: `Anticipar incomodidad en ${dog}`,
          mediaBody: `Observá señales sutiles antes de que aparezca ${problemsSummary} y ajustá la distancia con calma.`,
          videos: [
            { title: "Lectura corporal y señales de calma - Turid Rugaas", url: "https://www.youtube.com/watch?v=RppFTzWkFOw" }
          ],
          steps: [
            "Identificá señales tempranas de tensión o desconexión.",
            "Aumentá distancia o bajá exigencia antes de que se sature.",
            "Premiá cuando recupere el foco hacia vos."
          ],
          adaptiveTip: "La distancia cómoda protege el vínculo y acelera el aprendizaje."
        },
        {
          id: `t_s${stage}_3`,
          title: stage === 1 ? "Enriquecimiento Olfativo en Casa" : `Etapa ${stage}: Generalización Exterior`,
          duration: "4 min",
          icon: "👃",
          tags: ["Olfato", "Calma", "Refuerzo Positivo"],
          mediaType: "video",
          mediaTitle: `Descompresión mental para ${dog}`,
          mediaBody: "Sumamos olfato y calma para equilibrar la energía sin exigir esfuerzo físico excesivo.",
          videos: [
            { title: "Enriquecimiento sensorial: alfombras olfativas y licky mats", url: "https://www.youtube.com/watch?v=NAth4ZBEAnE" }
          ],
          steps: [
            "Prepará una búsqueda simple o sesión de olfato tranquila.",
            "Dejá que explore sin apurar ni repetir órdenes.",
            "Cerrá cuando muestre respiración pausada."
          ],
          adaptiveTip: "El olfateo ayuda a regular el sistema nervioso de forma natural."
        }
      ]
    : [
        {
          id: `t_s${stage}_1`,
          title: stage === 1 ? "Ser un Buen Guía y Refuerzo Positivo" : `Etapa ${stage}: Capturing y Calma`,
          duration: "4 min",
          icon: "🧭",
          tags: ["Guía Seguro", "Refuerzo Positivo", "Sin Castigos"],
          mediaType: profile.wantsReading === "Sí" ? "reading" : "video",
          mediaTitle: "Tu perro percibe el mundo a través de tu ejemplo",
          mediaBody: `Para ${dog}, vos sos su puente con el entorno: cuando actuás con calma, previsibilidad y refuerzo positivo, aprende a confiar y a tomar mejores decisiones sin miedo.`,
          videos: [
            { title: "Cómo ser un buen guía y referente para tu perro", url: "https://www.youtube.com/watch?v=9b7F1QY9iWc" },
            { title: "Estructura, previsibilidad y refuerzo positivo", url: "https://www.youtube.com/watch?v=rYRhnF4-NUg" }
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
          title: stage === 1 ? "Señales de Calma y Estrés" : `Etapa ${stage}: Foco con Estímulos`,
          duration: "4 min",
          icon: "👀",
          tags: ["Turid Rugaas", "Lectura Corporal", "Calma"],
          mediaType: "video",
          mediaTitle: "Leer el lenguaje corporal de tu perro",
          mediaBody: "Reconocer señales de calma a tiempo evita frustraciones durante las prácticas.",
          videos: [
            { title: "Lectura corporal y señales de calma - Turid Rugaas", url: "https://www.youtube.com/watch?v=RppFTzWkFOw" }
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
