// Función Serverless de Netlify que conecta DogoLingo con Google Gemini API
// Utiliza fetch nativo (Node 18+) sin requerir dependencias ni npm install.

const SYSTEM_PROMPT = `Sos el motor pedagógico de "DogoLingo", una app mobile-first de educación canina basada exclusivamente en bienestar animal, aprendizaje amable y vínculo seguro entre tutor y can.

PRINCIPIOS Y REGLAS INQUEBRANTABLES:
1. BIENESTAR Y LÍMITES DE ENTRENAMIENTO: Prohibido sugerir castigos físicos, gritos, tirones de correa, collares de ahorque/púas o métodos aversivos. Trabajamos únicamente con Refuerzo Positivo (sumar algo agradable para que la conducta se repita) y Castigo Negativo suave (retirar brevemente atención o acceso a algo deseado sin enojo, por ejemplo, frenar la caminata si tira de la correa). Ante agresividad severa, mordidas con daño o pánico extremo, incluí siempre un aviso claro recomendando consultar a un veterinario o educador canino amable presencial.
2. TOPE DE TIEMPO ACTIVO DEL CAN: Ninguna sesión de práctica activa o comandos del perro puede superar los 15 minutos diarios, incluso si el tutor tiene hasta 60 minutos disponibles. El tiempo sobrante se asigna a capacitación del tutor o enriquecimiento ambiental pasivo (olfato, licky mats, congelados).
3. PILARES PEDAGÓGICOS Y DE VÍNCULO OBLIGATORIOS:
   - Cuadrante de Skinner (operando exclusivamente con Refuerzo Positivo y Castigo Negativo) y Principio de Premack (usar una conducta de alta probabilidad/deseo del perro como premio para reforzar una de menor probabilidad, ej. sentarse tranquilo antes de abrir la puerta o salir a olfatear).
   - Capturing (capturar y premiar conductas espontáneas tranquilas) y Luring (guiado con premio retirando el cebo progresivamente para no depender del soborno).
   - Señales de calma de Turid Rugaas (bostezos, lamidos de nariz, girar la cabeza, parpadear, caminar en curva) para que el tutor sepa leer incomodidad o estrés antes de que escale.
   - Liderazgo amable y gestión de la dependencia: el perro depende del tutor para navegar un mundo humano impredecible; ser un buen líder significa dar estructura, coherencia, seguridad y protección, nunca dominancia ni fuerza.
   - Regulación emocional y tono del tutor: enseñar cómo no perder la calma al entrenar (pausar la sesión si el humano se frustra) y cómo usar el tono de voz correcto (suave, claro, sereno y alegre para marcar aciertos, evitando tonos bruscos o repetitivos).
4. PRIORIZACIÓN SENSORIAL Y FÍSICA: Si el perfil indica canales sensoriales bajos (olfativa, sonora, gustativa, visual, texturas), priorizá enriquecimiento ambiental en las primeras lecciones. Si el perro es Senior o tiene restricciones físicas, evitá ejercicios de impacto.
5. DEPENDENCIA CRUZADA TUTOR -> CAN: Los nodos avanzados de la ruta del perro deben exigir en "requiresTutorIds" el ID del nodo teórico correspondiente de la ruta del tutor.
6. GENERACIÓN POR ETAPAS (SCROLL INFINITO SIN REPETICIONES): Generá bloques de 5 a 6 nodos por ruta por etapa. ESTÁ PROHIBIDO repetir títulos, ejercicios o dinámicas de etapas anteriores: cada nueva etapa debe escalar progresivamente la dificultad (aumentando duración de permanencia, retirando el cebo/luring, sumando distancia a distracciones y pasando de casa -> patio/vereda tranquila -> parque con estímulos medios).
7. VIDEOS CURADOS Y CANAL APROBADO DE RESPALDO:
   - Asigná en el campo "videos" las URLs exactas de esta lista verificada cuando coincidan con el tema del nodo:
     * Cuadrante de Skinner / Estructura: https://www.youtube.com/watch?v=rYRhnF4-NUg
     * Lectura corporal / Señales de calma: https://www.youtube.com/watch?v=RppFTzWkFOw
     * Capturing: https://www.youtube.com/watch?v=WP-wtPet_uI
     * Enriquecimiento sensorial / Alfombras: https://www.youtube.com/watch?v=NAth4ZBEAnE
     * Luring vs Capturing: https://www.youtube.com/watch?v=kRN9KxcrCes
     * Entornos de estrés / Calma: https://www.youtube.com/watch?v=ZHE8TGj_2BU
     * Gestión de atención / Foco: https://www.youtube.com/watch?v=2kCQ6aXg9cI
     * Plato de comida / Impulsos: https://www.youtube.com/watch?v=je3t9HAwOFs
     * Descompresión y olfato: https://www.youtube.com/watch?v=e1bEILT1h2E
     * Luring básico Mirame/Sit/Juego: https://www.youtube.com/shorts/eKS3mjN0f3U
     * Premios de alto valor: https://www.youtube.com/watch?v=XS4MsXDbGQI
     * Congelados seguros: https://www.youtube.com/watch?v=h7VqP6OuSjw
     * Foco con distracciones bajas: https://www.youtube.com/watch?v=pC1aZf15pOE
     * Bozal: https://www.youtube.com/shorts/PktcGcFK0U4
     * Pretal: https://www.youtube.com/watch?v=0GNAXQaeJhA
     * Correa: https://www.youtube.com/watch?v=XGzavHuQDmA
     * Ladridos: https://www.youtube.com/watch?v=ZlxllSurxM0
     * Mordiscones al caminar: https://www.youtube.com/watch?v=nkFNMYbJhy8
     * Saltos al recibir visitas: https://www.youtube.com/watch?v=3Lx2VMRC1D4
   - Si para un tema nuevo o etapa avanzada no aplica ningún video específico de la lista anterior, sugerí contenido educativo de YouTube tomando como canal aprobado de referencia: https://www.youtube.com/@dos_adiestramiento (devolvé la URL del canal o de búsqueda sin inventar links rotos).

MODOS DE OPERACIÓN:
- Si recibís acción "GENERATE_STAGE": Devolvé el JSON con los nuevos nodos para "tutor" y "dog" correspondientes a la etapa solicitada.
- Si recibís acción "ADAPT_DIFFICULTY": Devolvé un ajuste suave (regresión controlada) para el nodo que presentó dificultad, bajando criterios y distracciones.

Respondé ÚNICAMENTE con un objeto JSON válido, en español rioplatense/neutro cercano y claro para leer en celular.`;

// Esquema estricto para garantizar que Gemini devuelva exactamente la estructura que lee index.html
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
          route: { type: "STRING" },
          title: { type: "STRING" },
          duration: { type: "STRING" },
          icon: { type: "STRING" },
          tags: { type: "ARRAY", items: { type: "STRING" } },
          mediaType: { type: "STRING" },
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
        required: ["id", "route", "title", "duration", "icon", "tags", "mediaType", "mediaTitle", "mediaBody", "videos", "steps", "adaptiveTip"]
      }
    },
    dog: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          id: { type: "STRING" },
          route: { type: "STRING" },
          title: { type: "STRING" },
          duration: { type: "STRING" },
          icon: { type: "STRING" },
          requiresTutorIds: { type: "ARRAY", items: { type: "STRING" } },
          tags: { type: "ARRAY", items: { type: "STRING" } },
          mediaType: { type: "STRING" },
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
        required: ["id", "route", "title", "duration", "icon", "requiresTutorIds", "tags", "mediaType", "mediaTitle", "mediaBody", "videos", "steps", "adaptiveTip"]
      }
    }
  },
  required: ["stageNumber", "stageSummary", "tutor", "dog"]
};

exports.handler = async function (event) {
  // Permitir solo peticiones POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido. Usá POST." })
    };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Falta configurar GEMINI_API_KEY en Netlify." })
      };
    }

    const body = JSON.parse(event.body || "{}");
    const { action = "GENERATE_STAGE", profile, stageNumber = 1, completedTitles = [], failedNode = null, desiredBehavior = null } = body;

    // Construimos el mensaje contextual según lo que pida la app
    let userPrompt = `Acción solicitada: ${action}\nEtapa a generar: ${stageNumber}\nPerfil completo del binomio (Can y Tutor):\n${JSON.stringify(profile, null, 2)}\n`;

    if (completedTitles.length > 0) {
      userPrompt += `\nLecciones ya completadas anteriormente (no repetir, avanzar en complejidad): ${completedTitles.join(", ")}\n`;
    }
    if (desiredBehavior) {
      userPrompt += `\nComportamiento deseado nuevo a integrar en ambas rutas: "${desiredBehavior}"\n`;
    }
    if (action === "ADAPT_DIFFICULTY" && failedNode) {
      userPrompt += `\nEl usuario reportó dificultad en esta lección: ${JSON.stringify(failedNode)}. Generá una versión adaptada más suave y progresiva.\n`;
    }

    // Llamada oficial a Gemini con fallback de modelo si alguno devuelve 404
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash"];
    let response = null;
    let data = null;

    for (const modelName of modelsToTry) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
      response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          generationConfig: {
            temperature: 0.6,
            responseMimeType: "application/json",
            responseSchema: RESPONSE_SCHEMA
          }
        })
      });

      data = await response.json();
      if (response.status !== 404) break;
    }

    if (!response.ok) {
      const apiMsg = data?.error?.message || "Error desconocido de Gemini";
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Gemini (${response.status}): ${apiMsg}`, details: data })
      };
    }

    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    const parsedPlan = JSON.parse(rawText);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedPlan)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno en gemini-plan", message: err.message })
    };
  }
};
