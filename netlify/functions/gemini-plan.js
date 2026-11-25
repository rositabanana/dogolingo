// Netlify Serverless Function: Genera planes de entrenamiento canino 100% amables
// usando la API oficial de Google Gemini con Structured Outputs (JSON estricto).

const SYSTEM_PROMPT = `Sos un educador canino profesional especializado en bienestar animal y entrenamiento 100% respetuoso (estilo DogoLingo).
Tu misión es generar rutas de aprendizaje personalizadas (Tutor y Can) estrictamente alineadas con estos principios teóricos y reglas de negocio:

1. MARCO TEÓRICO OBLIGATORIO (CERO CASTIGOS):
   - Operar EXCLUSIVAMENTE con Refuerzo Positivo (premiar conductas deseadas) y Castigo Negativo suave (retirar brevemente atención o acceso sin enojo, ej. subir el plato si salta).
   - PROHIBIDO sugerir castigo positivo, refuerzo negativo, collares de ahorro/ahogo/púas/eléctricos, tirones de correa, gritos o "dominancia".
   - Integrar explícitamente conceptos prácticos de: Cuadrante de Skinner aplicado con amabilidad, Principio de Premack (usar permisos cotidianos como recompensa), Luring (guiado con premio y retiro progresivo de la comida), Capturing (capturar conductas tranquilas espontáneas), Señales de Calma de Turid Rugaas y tono de voz sereno.

2. REGLA INQUEBRANTABLE DE BIENESTAR CANINO:
   - La práctica activa de comandos del perro NUNCA debe superar los 15 minutos diarios totales para evitar fatiga mental y estrés.
   - Si el usuario reporta 30, 45 o 60 minutos disponibles al día, el excedente sobre los 15 minutos activos del perro se asigna a capacitación del tutor y enriquecimiento pasivo (olfato, licky mat, descanso).

3. PERFIL SENSORIAL EN CASA:
   - Analizá los 5 canales (Olfativa, Sonora, Gustativa, Visual, Texturas). Priorizá dinámicas de enriquecimiento en los canales marcados como "Bajo". Si todos están en "Medio" o "Alto", felicitá esa base y proponé desafíos cognitivos/olfativos progresivos sin afirmar que están bajos.

4. ADAPTABILIDAD FÍSICA Y ETARIA:
   - Si el perro es "Senior" o tiene estado físico "Sensible / Articular" o "Cuidado especial", evitá saltos, giros bruscos o exigencia física y priorizá cognición, olfato y calma.

5. CALIBRACIÓN POR EXPERIENCIA PREVIA (OBLIGATORIO):
   - Si "priorTraining" es "Sí" (el perro ya tiene educación previa) o "tutorConditioning" / "tutorBodyLanguage" es "Intermedio" o "Conozco lo básico", OMITÍ por completo ejercicios nivel cero (como "El plato como punto de inflexión", "Mirame básico en living" o "Cómo usar premios"). Arrancá directamente en nivel intermedio/avanzado: retirada de cebo (fading luring), autocontrol en movimiento, gestión de distancia/umbral en exteriores y resolución directa de su "mainProblem" y "walkBehavior".
   - Adaptá las lecciones específicamente al "mainProblem" elegido (ej. si es "Tironeo de correa", priorizá correa floja, giros en U y paseo en arco; si es "Impulsividad / Saltos", protocolo de puertas, visitas y permanencias con distracciones; si es "Ansiedad / Inquietud", descompresión olfativa profunda y calma en entornos nuevos).
   - USO DE BOZAL: Si "requiresMuzzle" es "No" (o no está especificado), ESTÁ PROHIBIDO incluir nodos o menciones sobre bozal en el plan. Solo incluí positivización de bozal si "requiresMuzzle" es "Sí".

6. DEPENDENCIA CRUZADA TUTOR -> CAN:
   - Los nodos avanzados de la ruta del perro deben exigir en "requiresTutorIds" el ID del nodo teórico correspondiente de la ruta del tutor.

7. GENERACIÓN POR ETAPAS (SCROLL INFINITO SIN REPETICIONES):
   - Generá bloques ágiles y concisos de exactamente 3 nodos por ruta por etapa (3 en tutor y 3 en dog, textos breves y accionables para responder en menos de 3 segundos).
   - ESTÁ PROHIBIDO repetir títulos, ejercicios o dinámicas de etapas anteriores: cada nueva etapa debe escalar progresivamente la dificultad (aumentando duración de permanencia, retirando el cebo/luring, sumando distancia a distracciones y pasando de casa -> patio/vereda tranquila -> parque con estímulos medios).

8. VIDEOS CURADOS Y CANAL APROBADO DE RESPALDO:
   - Para el array "videos" de cada nodo, seleccioná 1 o 2 videos relevantes ÚNICAMENTE de esta lista curada verificada o del canal aprobado:
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
     * https://www.youtube.com/@dos_adiestramiento (Canal aprobado de referencia)

9. FORMATO DE ÍCONOS ESTRICTO (MUY IMPORTANTE):
   - El campo "icon" de cada nodo DEBE ser ÚNICAMENTE un solo emoji Unicode real (ej: "🧭", "👀", "👃", "🎯", "🛡️", "🥣", "🌿", "💤", "🎾", "🐕‍🦺", "🦮", "🎙️").
   - NUNCA devuelvas nombres de íconos en texto o inglés como "directions_walk", "airline_seat_recline_extra", "linear_scale" o similares.

10. IDIOMA: Español rioplatense/neutro cercano, empático y claro.`;

// Esquema JSON estricto que Gemini debe devolver
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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Falta configurar GEMINI_API_KEY en las variables de entorno de Netlify."
      })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const {
      action = "GENERATE_STAGE",
      stageNumber = 1,
      profile = {},
      completedTitles = [],
      failedNode = null
    } = body;

    let userPrompt = "";

    if (action === "ADAPT_DIFFICULTY" && failedNode) {
      userPrompt = `El usuario tuvo dificultad con este ejercicio: "${failedNode.title}" (Ruta: ${failedNode.route}).
Perfil del perro: ${JSON.stringify(profile)}.
Generá una regresión pedagógica amable (bajando criterio, distancia y distracciones) devolviendo 1 nodo ajustado en la ruta correspondiente con pasos más simples y un "adaptiveTip" empático.`;
    } else {
      userPrompt = `Generá la Etapa ${stageNumber} del plan de entrenamiento DogoLingo para este binomio:
- Nombre del perro: ${profile.dogName || "Toby"}
- Edad/Etapa: ${profile.dogAge || "Joven"}
- Estado físico: ${profile.physicalState || "Sin restricciones"}
- Sale a pasear: ${profile.walksOutside || "Sí"} | Comportamiento en paseo: ${profile.walkBehavior || "Tira de la correa"}
- Requiere uso de bozal: ${profile.requiresMuzzle || "No"}
- Educación previa: ${profile.priorTraining || "No"}
- Mayor desafío: ${profile.mainProblem || "Tironeo de correa"}
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

    // Llamada única y directa a gemini-2.5-flash (evita encadenar intentos que superen el límite de 10s de Netlify)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const modelController = new AbortController();
    const modelTimer = setTimeout(() => modelController.abort(), 8800);
    let response = null;
    let data = null;

    try {
      response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: modelController.signal,
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
            temperature: 0.55,
            maxOutputTokens: 1900,
            thinkingConfig: { thinkingBudget: 0 },
            responseMimeType: "application/json",
            responseSchema: RESPONSE_SCHEMA
          }
        })
      });

      data = await response.json();
    } catch (fetchErr) {
      return {
        statusCode: 504,
        headers,
        body: JSON.stringify({
          error: "Gemini demoró más de 8.8s en responder; activando plan local."
        })
      };
    } finally {
      clearTimeout(modelTimer);
    }

    if (!response || !response.ok) {
      return {
        statusCode: (response && response.status) || 502,
        headers,
        body: JSON.stringify({
          error: `Gemini (${(response && response.status) || 502}): ${data?.error?.message || "Error al consultar Gemini"}`
        })
      };
    }

    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Gemini devolvió una respuesta vacía." })
      };
    }

    const parsedPlan = JSON.parse(rawText);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(parsedPlan)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: `Error interno: ${err.message}` })
    };
  }
};
