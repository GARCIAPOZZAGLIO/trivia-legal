import React, { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// ESTUDIO JURÍDICO GARCÍA POZZAGLIO — TRIVIA LEGAL APP
// Versión completa unificada — Todas las categorías
// ═══════════════════════════════════════════════════════════

const CATEGORIAS = {
  mixta: { nombre: "Preguntas Mixtas", icono: "🎲", color: "#F59E0B" },
  civil: { nombre: "Derecho Civil", icono: "⚖️", color: "#2563EB" },
  penal: { nombre: "Derecho Penal", icono: "🔒", color: "#DC2626" },
  laboral: { nombre: "Derecho Laboral", icono: "👷", color: "#D97706" },
  ambiental: { nombre: "Derecho Ambiental", icono: "🌿", color: "#059669" },
  maritimo: { nombre: "Derecho Marítimo", icono: "⚓", color: "#0891B2" },
  consumidor: { nombre: "Defensa del Consumidor", icono: "🛒", color: "#7C3AED" },
  familia: { nombre: "Derecho de Familia", icono: "👨‍👩‍👧", color: "#DB2777" },
  sociedades: { nombre: "Sociedades", icono: "🏢", color: "#4F46E5" },
  transito: { nombre: "Acc. de Tránsito", icono: "🚗", color: "#EA580C" },
  art: { nombre: "ART / Riesgos", icono: "🏥", color: "#0D9488" },
  constitucion: { nombre: "Constitución Nacional", icono: "📜", color: "#92400E" },
  sucesiones: { nombre: "Sucesiones", icono: "📋", color: "#6D28D9" },
  previsional: { nombre: "Previsional", icono: "🧓", color: "#047857" },
  tributario: { nombre: "Tributario / Fiscal", icono: "🧾", color: "#B45309" },
  administrativo: { nombre: "D. Administrativo", icono: "🏛️", color: "#1E40AF" },
  concursal: { nombre: "Comercial / Concursal", icono: "📊", color: "#7C2D12" },
  procesal: { nombre: "D. Procesal", icono: "📑", color: "#4338CA" },
  reales: { nombre: "Derechos Reales", icono: "🏠", color: "#065F46" },
  aeronautico: { nombre: "D. Aeronáutico", icono: "✈️", color: "#1D4ED8" },
  salud: { nombre: "Derecho de la Salud", icono: "🩺", color: "#BE123C" },
  intelectual: { nombre: "Propiedad Intelectual", icono: "💡", color: "#7E22CE" },
  migratorio: { nombre: "D. Migratorio", icono: "🌍", color: "#0F766E" },
  bancario: { nombre: "Bancario / Financiero", icono: "🏦", color: "#0369A1" },
  ddhh: { nombre: "Derechos Humanos", icono: "✊", color: "#9333EA" },
  federales: { nombre: "Delitos Federales", icono: "🛡️", color: "#B91C1C" },
};



// ═══════════════════════════════════════════════════════════
// PREGUNTAS — DERECHO CIVIL (50)
// ═══════════════════════════════════════════════════════════
const PREGUNTAS = [
  {c:"civil",q:"¿A qué edad se adquiere la mayoría de edad según el CCyCN?",o:["18 años","21 años","16 años"],a:"18 años"},
  {c:"civil",q:"¿Qué artículo del CCyCN regula la capacidad de las personas?",o:["Art. 22","Art. 1","Art. 100"],a:"Art. 22"},
  {c:"civil",q:"¿Cuál es el plazo de prescripción genérico del CCyCN?",o:["5 años","2 años","10 años"],a:"5 años"},
  {c:"civil",q:"¿Qué es el domicilio real según el CCyCN?",o:["Donde la persona tiene su residencia habitual","Donde trabaja","Donde nació"],a:"Donde la persona tiene su residencia habitual"},
  {c:"civil",q:"¿Qué tipo de persona jurídica es una fundación?",o:["Persona jurídica privada sin fines de lucro","Persona jurídica pública","Ente estatal"],a:"Persona jurídica privada sin fines de lucro"},
  {c:"civil",q:"¿Qué es la lesión subjetiva-objetiva (art. 332 CCyCN)?",o:["Obtener una ventaja patrimonial desproporcionada explotando la necesidad, debilidad o inexperiencia del otro","Un daño físico","Una cláusula penal"],a:"Obtener una ventaja patrimonial desproporcionada explotando la necesidad, debilidad o inexperiencia del otro"},
  {c:"civil",q:"¿Cuál es la edad mínima para testar en Argentina?",o:["18 años","21 años","16 años"],a:"18 años"},
  {c:"civil",q:"¿Qué es la legítima hereditaria?",o:["La porción de la herencia de la que no se puede disponer libremente","El total de la herencia","Los bienes gananciales"],a:"La porción de la herencia de la que no se puede disponer libremente"},
  {c:"civil",q:"¿Qué porción legítima corresponde a los hijos?",o:["Dos tercios","Un medio","Cuatro quintos"],a:"Dos tercios"},
  {c:"civil",q:"¿Qué es el pacto comisorio tácito?",o:["La facultad implícita de resolver el contrato ante incumplimiento","Un acuerdo de confidencialidad","Una cláusula penal"],a:"La facultad implícita de resolver el contrato ante incumplimiento"},
  {c:"civil",q:"¿Cuál es el plazo de prescripción de la responsabilidad civil extracontractual?",o:["3 años","5 años","1 año"],a:"3 años"},
  {c:"civil",q:"¿Qué artículo del CCyCN regula la responsabilidad por daños?",o:["Art. 1716","Art. 1","Art. 500"],a:"Art. 1716"},
  {c:"civil",q:"¿Qué es el daño moral según el CCyCN?",o:["Las consecuencias no patrimoniales del hecho dañoso","Solo el dolor físico","Las pérdidas económicas"],a:"Las consecuencias no patrimoniales del hecho dañoso"},
  {c:"civil",q:"¿Cuántos tipos de obligaciones reconoce el CCyCN según su objeto?",o:["De dar, de hacer y de no hacer","Solo de dar","De dar y de hacer"],a:"De dar, de hacer y de no hacer"},
  {c:"civil",q:"¿Qué es la evicción?",o:["La garantía que debe el transmitente cuando el adquirente es turbado en su derecho","Un tipo de contrato","Una forma de prescripción"],a:"La garantía que debe el transmitente cuando el adquirente es turbado en su derecho"},
  {c:"civil",q:"¿Qué es el boleto de compraventa inmobiliaria?",o:["Un contrato preliminar que genera obligación de escriturar","La escritura pública","Un certificado de dominio"],a:"Un contrato preliminar que genera obligación de escriturar"},
  {c:"civil",q:"¿Qué artículo del CCyCN regula la compraventa?",o:["Art. 1123","Art. 1","Art. 2000"],a:"Art. 1123"},
  {c:"civil",q:"¿Qué es la señal o arras confirmatoria?",o:["Una entrega de dinero que se imputa al precio y confirma el contrato","Un depósito judicial","Una multa contractual"],a:"Una entrega de dinero que se imputa al precio y confirma el contrato"},
  {c:"civil",q:"¿Qué es el derecho real de usufructo?",o:["El derecho de usar y gozar de una cosa ajena sin alterar su sustancia","El derecho de propiedad","Una servidumbre de paso"],a:"El derecho de usar y gozar de una cosa ajena sin alterar su sustancia"},
  {c:"civil",q:"¿Qué diferencia hay entre nulidad absoluta y relativa?",o:["La absoluta protege el interés público y es imprescriptible; la relativa protege intereses particulares","No hay diferencia","La absoluta solo la declara el juez"],a:"La absoluta protege el interés público y es imprescriptible; la relativa protege intereses particulares"},
  {c:"civil",q:"¿Qué es la teoría de la imprevisión (art. 1091 CCyCN)?",o:["Permite revisar o resolver un contrato cuando circunstancias extraordinarias alteran la prestación","Una forma de prescripción","Un tipo de obligación"],a:"Permite revisar o resolver un contrato cuando circunstancias extraordinarias alteran la prestación"},
  {c:"civil",q:"¿Qué es una obligación solidaria?",o:["Aquella en que cualquier acreedor puede exigir el total y cualquier deudor debe pagar el total","Una obligación compartida en partes iguales","Una obligación alternativa"],a:"Aquella en que cualquier acreedor puede exigir el total y cualquier deudor debe pagar el total"},
  {c:"civil",q:"¿Cuál es el plazo máximo de locación de inmuebles para vivienda según el CCyCN?",o:["20 años","50 años","10 años"],a:"20 años"},
  {c:"civil",q:"¿Qué artículo del CCyCN regula el contrato de locación?",o:["Art. 1187","Art. 1500","Art. 500"],a:"Art. 1187"},
  {c:"civil",q:"¿Cuál es el plazo mínimo de locación de inmuebles para vivienda?",o:["3 años (art. 1198 CCyCN, DNU 70/2023)","1 año","5 años"],a:"3 años (art. 1198 CCyCN, DNU 70/2023)"},
  {c:"civil",q:"¿Qué es la acción reivindicatoria?",o:["La acción real que tiene el propietario para recuperar la cosa de quien la posee ilegítimamente","Una acción personal","Un recurso administrativo"],a:"La acción real que tiene el propietario para recuperar la cosa de quien la posee ilegítimamente"},
  {c:"civil",q:"¿Qué es el condominio?",o:["El derecho real de propiedad sobre una cosa que pertenece en común a varias personas","La propiedad horizontal","Un contrato de sociedad"],a:"El derecho real de propiedad sobre una cosa que pertenece en común a varias personas"},
  {c:"civil",q:"¿Qué es la prescripción adquisitiva (usucapión)?",o:["La adquisición del dominio por la posesión continua durante el plazo legal","La pérdida del derecho por no ejercerlo","Una forma de venta"],a:"La adquisición del dominio por la posesión continua durante el plazo legal"},
  {c:"civil",q:"¿Cuántos años se requieren para la usucapión larga?",o:["20 años","10 años","5 años"],a:"20 años"},
  {c:"civil",q:"¿Qué es la responsabilidad objetiva?",o:["La que no requiere probar la culpa del responsable","La que requiere dolo","La que excluye al Estado"],a:"La que no requiere probar la culpa del responsable"},
  {c:"civil",q:"¿Qué es el factor de atribución en la responsabilidad civil?",o:["La razón jurídica por la cual se imputa el deber de reparar (culpa, riesgo, garantía, equidad)","La causa del daño","El monto indemnizatorio"],a:"La razón jurídica por la cual se imputa el deber de reparar (culpa, riesgo, garantía, equidad)"},
  {c:"civil",q:"¿Qué establece el art. 1757 del CCyCN sobre responsabilidad por actividades riesgosas?",o:["Que el dueño o guardián responde objetivamente por el daño causado","Que solo responde si hay culpa","Que el Estado siempre es responsable"],a:"Que el dueño o guardián responde objetivamente por el daño causado"},
  {c:"civil",q:"¿Cuántos testigos requiere un testamento ológrafo?",o:["Ninguno, solo debe ser escrito de puño y letra, fechado y firmado","Dos testigos","Tres testigos"],a:"Ninguno, solo debe ser escrito de puño y letra, fechado y firmado"},
  {c:"civil",q:"¿Qué es la acción subrogatoria (art. 739 CCyCN)?",o:["La que permite al acreedor ejercer los derechos de su deudor contra terceros","Una acción de cobro directo","Un recurso procesal"],a:"La que permite al acreedor ejercer los derechos de su deudor contra terceros"},
  {c:"civil",q:"¿Qué es un contrato aleatorio?",o:["Aquel cuyas ventajas o pérdidas dependen de un acontecimiento incierto","Un contrato verbal","Un contrato gratuito"],a:"Aquel cuyas ventajas o pérdidas dependen de un acontecimiento incierto"},
  {c:"civil",q:"¿Qué es la mora automática según el CCyCN?",o:["La que opera por el solo vencimiento del plazo sin necesidad de interpelación","La que requiere intimación previa","La que declara el juez"],a:"La que opera por el solo vencimiento del plazo sin necesidad de interpelación"},
  {c:"civil",q:"¿Qué es el abuso del derecho (art. 10 CCyCN)?",o:["El ejercicio de un derecho que excede los límites de la buena fe, la moral o los fines sociales","Una acción ilegal","Un delito penal"],a:"El ejercicio de un derecho que excede los límites de la buena fe, la moral o los fines sociales"},
  {c:"civil",q:"¿Cuál es el orden sucesorio según el CCyCN?",o:["Descendientes, ascendientes, cónyuge, colaterales hasta 4° grado","Solo hijos y cónyuge","Cónyuge primero, luego hijos"],a:"Descendientes, ascendientes, cónyuge, colaterales hasta 4° grado"},
  {c:"civil",q:"¿Qué es la colación en materia sucesoria?",o:["La obligación de los herederos forzosos de traer a la masa las donaciones recibidas en vida del causante","Una forma de cobro","Un impuesto sucesorio"],a:"La obligación de los herederos forzosos de traer a la masa las donaciones recibidas en vida del causante"},
  {c:"civil",q:"¿Qué es la acción de reducción?",o:["La que protege la legítima cuando fue afectada por donaciones o legados excesivos","Una acción de desalojo","Un recurso de apelación"],a:"La que protege la legítima cuando fue afectada por donaciones o legados excesivos"},
  {c:"civil",q:"¿Qué es la obligación natural?",o:["Ya no existe como categoría autónoma en el CCyCN; las obligaciones son civiles","Una obligación sin acción judicial","Una obligación moral"],a:"Ya no existe como categoría autónoma en el CCyCN; las obligaciones son civiles"},
  {c:"civil",q:"¿Qué es la caducidad de un derecho?",o:["La extinción de un derecho por el transcurso de un plazo perentorio","La prescripción liberatoria","Una forma de novación"],a:"La extinción de un derecho por el transcurso de un plazo perentorio"},
  {c:"civil",q:"¿Qué es la simulación de un acto jurídico?",o:["Cuando se encubre el carácter jurídico de un acto bajo la apariencia de otro","Una estafa","Un contrato verbal"],a:"Cuando se encubre el carácter jurídico de un acto bajo la apariencia de otro"},
  {c:"civil",q:"¿Qué diferencia hay entre simulación absoluta y relativa?",o:["La absoluta oculta que no hay acto; la relativa oculta el verdadero acto bajo otro aparente","No hay diferencia","La absoluta es lícita y la relativa ilícita"],a:"La absoluta oculta que no hay acto; la relativa oculta el verdadero acto bajo otro aparente"},
  {c:"civil",q:"¿Qué es el derecho de retención?",o:["La facultad del acreedor de conservar una cosa del deudor hasta que le paguen","Un embargo judicial","Una hipoteca"],a:"La facultad del acreedor de conservar una cosa del deudor hasta que le paguen"},
  {c:"civil",q:"¿Cuánto es la porción legítima del cónyuge supérstite?",o:["Un medio","Dos tercios","Un tercio"],a:"Un medio"},
  {c:"civil",q:"¿Qué es la inhabilitación judicial (art. 48 CCyCN)?",o:["Una restricción a la capacidad por prodigalidad, adicciones u otras causas","La declaración de incapacidad total","Una sanción penal"],a:"Una restricción a la capacidad por prodigalidad, adicciones u otras causas"},
  {c:"civil",q:"¿Qué es la compensación como modo de extinción de obligaciones?",o:["Se extinguen las obligaciones recíprocas hasta la concurrencia de la menor","El pago en especie","La renuncia del acreedor"],a:"Se extinguen las obligaciones recíprocas hasta la concurrencia de la menor"},
  {c:"civil",q:"¿Qué es la novación?",o:["La extinción de una obligación por la creación de otra nueva que la sustituye","La modificación del plazo","La cesión de créditos"],a:"La extinción de una obligación por la creación de otra nueva que la sustituye"},



  // ═══════════════════════════════════════════════════════════
  // PREGUNTAS — DERECHO PENAL (50)
  // ═══════════════════════════════════════════════════════════
  {c:"penal",q:"¿Cuál es la edad de imputabilidad penal en Argentina?",o:["16 años","14 años","18 años"],a:"16 años"},
  {c:"penal",q:"¿Qué establece el principio de legalidad penal?",o:["No hay delito ni pena sin ley previa","Los jueces crean delitos","Las costumbres definen los delitos"],a:"No hay delito ni pena sin ley previa"},
  {c:"penal",q:"¿Cuál es la pena máxima en Argentina?",o:["Prisión perpetua","Pena de muerte","50 años de prisión"],a:"Prisión perpetua"},
  {c:"penal",q:"¿Qué es el dolo en derecho penal?",o:["La intención de cometer el delito","La negligencia","El error de hecho"],a:"La intención de cometer el delito"},
  {c:"penal",q:"¿Qué es la culpa en derecho penal?",o:["Causar un resultado por negligencia, imprudencia o impericia","La intención directa","La premeditación"],a:"Causar un resultado por negligencia, imprudencia o impericia"},
  {c:"penal",q:"¿Cuál es la pena del homicidio simple (art. 79 CP)?",o:["8 a 25 años de prisión o reclusión","5 a 15 años","Prisión perpetua"],a:"8 a 25 años de prisión o reclusión"},
  {c:"penal",q:"¿Cuál es la pena del homicidio agravado por el vínculo (art. 80 inc. 1° CP)?",o:["Prisión o reclusión perpetua","8 a 25 años","10 a 20 años"],a:"Prisión o reclusión perpetua"},
  {c:"penal",q:"¿Qué es la tentativa?",o:["El comienzo de ejecución de un delito que no se consuma por circunstancias ajenas a la voluntad del autor","Un delito consumado","La preparación de un delito"],a:"El comienzo de ejecución de un delito que no se consuma por circunstancias ajenas a la voluntad del autor"},
  {c:"penal",q:"¿Cómo se reduce la pena en la tentativa?",o:["Se aplica la escala reducida de un tercio a la mitad del mínimo y máximo","Se reduce a la mitad","No se reduce"],a:"Se aplica la escala reducida de un tercio a la mitad del mínimo y máximo"},
  {c:"penal",q:"¿Qué es la legítima defensa?",o:["Causa de justificación que excluye la antijuridicidad ante agresión ilegítima","Un atenuante","Un agravante"],a:"Causa de justificación que excluye la antijuridicidad ante agresión ilegítima"},
  {c:"penal",q:"¿Cuáles son los requisitos de la legítima defensa (art. 34 inc. 6° CP)?",o:["Agresión ilegítima, necesidad racional del medio y falta de provocación suficiente","Solo repeler la agresión","Actuar con autorización judicial"],a:"Agresión ilegítima, necesidad racional del medio y falta de provocación suficiente"},
  {c:"penal",q:"¿Qué es el estado de necesidad?",o:["Causar un mal para evitar otro mayor e inminente","Un atenuante por emoción","Una excusa absolutoria"],a:"Causar un mal para evitar otro mayor e inminente"},
  {c:"penal",q:"¿Qué es la reincidencia?",o:["Cuando quien cumplió pena privativa de libertad comete un nuevo delito con pena de esa naturaleza","Cometer dos faltas","Tener antecedentes penales sin cumplir pena"],a:"Cuando quien cumplió pena privativa de libertad comete un nuevo delito con pena de esa naturaleza"},
  {c:"penal",q:"¿Qué es la libertad condicional?",o:["La posibilidad de cumplir parte de la pena en libertad bajo ciertas condiciones","La excarcelación","La probation"],a:"La posibilidad de cumplir parte de la pena en libertad bajo ciertas condiciones"},
  {c:"penal",q:"¿Cuándo procede la libertad condicional para penas temporales?",o:["Al cumplir 2/3 de la pena, con informe favorable","Al cumplir la mitad","Al año de detenido"],a:"Al cumplir 2/3 de la pena, con informe favorable"},
  {c:"penal",q:"¿Qué es la suspensión del juicio a prueba (probation)?",o:["Suspender el proceso penal bajo condiciones sin llegar a juicio (art. 76 bis CP)","Una absolución","Un beneficio solo para menores"],a:"Suspender el proceso penal bajo condiciones sin llegar a juicio (art. 76 bis CP)"},
  {c:"penal",q:"¿Para qué delitos procede la probation?",o:["Aquellos con pena máxima no superior a 3 años de prisión","Todos los delitos","Solo delitos contra la propiedad"],a:"Aquellos con pena máxima no superior a 3 años de prisión"},
  {c:"penal",q:"¿Qué es la condenación condicional?",o:["Dejar en suspenso el cumplimiento de la pena cuando es la primera condena y no supera 3 años","Un indulto","Una amnistía"],a:"Dejar en suspenso el cumplimiento de la pena cuando es la primera condena y no supera 3 años"},
  {c:"penal",q:"¿Cuál es la pena del robo simple (art. 164 CP)?",o:["1 mes a 6 años de prisión","3 a 10 años","6 meses a 3 años"],a:"1 mes a 6 años de prisión"},
  {c:"penal",q:"¿Cuál es la pena del robo agravado con armas (art. 166 inc. 2° CP)?",o:["5 a 15 años de prisión","1 a 6 años","3 a 10 años"],a:"5 a 15 años de prisión"},
  {c:"penal",q:"¿Qué diferencia el hurto del robo?",o:["El robo requiere fuerza en las cosas o violencia en las personas; el hurto no","El monto de lo sustraído","La cantidad de autores"],a:"El robo requiere fuerza en las cosas o violencia en las personas; el hurto no"},
  {c:"penal",q:"¿Cuál es la pena del hurto simple (art. 162 CP)?",o:["1 mes a 2 años de prisión","1 a 6 años","3 a 10 años"],a:"1 mes a 2 años de prisión"},
  {c:"penal",q:"¿Qué es la estafa (art. 172 CP)?",o:["Defraudar a otro mediante ardid o engaño","Robar con violencia","Falsificar documentos"],a:"Defraudar a otro mediante ardid o engaño"},
  {c:"penal",q:"¿Cuál es la pena de la estafa?",o:["1 mes a 6 años de prisión","3 a 10 años","6 meses a 3 años"],a:"1 mes a 6 años de prisión"},
  {c:"penal",q:"¿Qué es el concurso ideal de delitos?",o:["Cuando un solo hecho configura dos o más delitos","Cuando se cometen varios hechos independientes","Cuando hay varios autores"],a:"Cuando un solo hecho configura dos o más delitos"},
  {c:"penal",q:"¿Qué es el concurso real de delitos?",o:["Cuando hay varios hechos independientes que configuran varios delitos","Cuando un hecho configura varios delitos","Cuando hay reincidencia"],a:"Cuando hay varios hechos independientes que configuran varios delitos"},
  {c:"penal",q:"¿Qué artículo del CP regula la prescripción de la acción penal?",o:["Art. 62","Art. 59","Art. 76 bis"],a:"Art. 62"},
  {c:"penal",q:"¿Cuál es el plazo de prescripción para delitos con pena de prisión perpetua?",o:["15 años","20 años","Nunca prescribe"],a:"15 años"},
  {c:"penal",q:"¿Qué es la coautoría?",o:["Cuando dos o más personas toman parte en la ejecución del hecho","Cuando uno planifica y otro ejecuta","La complicidad"],a:"Cuando dos o más personas toman parte en la ejecución del hecho"},
  {c:"penal",q:"¿Qué es la participación necesaria?",o:["La cooperación sin la cual el delito no se habría cometido","La autoría directa","La instigación"],a:"La cooperación sin la cual el delito no se habría cometido"},
  {c:"penal",q:"¿Qué es el desistimiento voluntario en la tentativa?",o:["Cuando el autor abandona voluntariamente la ejecución del delito, quedando impune","Un atenuante","Una agravante"],a:"Cuando el autor abandona voluntariamente la ejecución del delito, quedando impune"},
  {c:"penal",q:"¿Qué es el error de tipo?",o:["El desconocimiento de un elemento del tipo penal que excluye el dolo","Un error del juez","Un vicio procesal"],a:"El desconocimiento de un elemento del tipo penal que excluye el dolo"},
  {c:"penal",q:"¿Qué es el error de prohibición?",o:["El desconocimiento de la antijuridicidad de la conducta","Un error en la identidad del autor","Un error de tipo"],a:"El desconocimiento de la antijuridicidad de la conducta"},
  {c:"penal",q:"¿Cuál es la pena del abuso sexual simple (art. 119, 1° párrafo CP)?",o:["6 meses a 4 años de prisión","1 a 6 años","3 a 10 años"],a:"6 meses a 4 años de prisión"},
  {c:"penal",q:"¿Qué es el femicidio?",o:["El homicidio de una mujer cuando es perpetrado por un hombre y media violencia de género (art. 80 inc. 11 CP)","Cualquier homicidio de una mujer","Un delito contra la familia"],a:"El homicidio de una mujer cuando es perpetrado por un hombre y media violencia de género (art. 80 inc. 11 CP)"},
  {c:"penal",q:"¿Cuál es la pena del femicidio?",o:["Prisión o reclusión perpetua","8 a 25 años","10 a 20 años"],a:"Prisión o reclusión perpetua"},
  {c:"penal",q:"¿Qué es la acción penal pública?",o:["La que se ejerce de oficio por el Ministerio Público Fiscal","La que inicia la víctima","La que requiere querella exclusiva"],a:"La que se ejerce de oficio por el Ministerio Público Fiscal"},
  {c:"penal",q:"¿Qué es la acción penal dependiente de instancia privada?",o:["La que requiere denuncia o instancia de la víctima para iniciar pero luego se ejerce de oficio","La que solo puede ejercer la víctima","La que ejerce el juez"],a:"La que requiere denuncia o instancia de la víctima para iniciar pero luego se ejerce de oficio"},
  {c:"penal",q:"¿Qué delito tipifica el art. 189 bis del CP?",o:["Tenencia y portación ilegal de armas de fuego","Homicidio","Robo con armas"],a:"Tenencia y portación ilegal de armas de fuego"},
  {c:"penal",q:"¿Cuál es la pena de la portación ilegal de arma de guerra?",o:["3 años y 6 meses a 8 años y 6 meses","1 a 6 años","5 a 15 años"],a:"3 años y 6 meses a 8 años y 6 meses"},
  {c:"penal",q:"¿Qué es la unificación de penas?",o:["La adecuación de condenas múltiples a las reglas del concurso (art. 58 CP)","La suma aritmética de todas las penas","La aplicación de la pena más grave"],a:"La adecuación de condenas múltiples a las reglas del concurso (art. 58 CP)"},
  {c:"penal",q:"¿Qué es la inimputabilidad?",o:["La incapacidad de comprender la criminalidad del acto o dirigir las acciones al momento del hecho (art. 34 inc. 1° CP)","No tener antecedentes","Ser menor de 18 años"],a:"La incapacidad de comprender la criminalidad del acto o dirigir las acciones al momento del hecho (art. 34 inc. 1° CP)"},
  {c:"penal",q:"¿Qué es la alevosía como agravante del homicidio?",o:["Matar aprovechando la indefensión de la víctima o empleando procedimientos que aseguran el resultado","Matar por dinero","Matar con arma de fuego"],a:"Matar aprovechando la indefensión de la víctima o empleando procedimientos que aseguran el resultado"},
  {c:"penal",q:"¿Qué es la excusa absolutoria?",o:["Una circunstancia personal que impide la punibilidad pese a existir delito","Una causa de justificación","Un error de tipo"],a:"Una circunstancia personal que impide la punibilidad pese a existir delito"},
  {c:"penal",q:"¿Cuál es la pena de la defraudación por administración fraudulenta (art. 173 inc. 7° CP)?",o:["1 mes a 6 años de prisión","3 a 10 años","6 meses a 3 años"],a:"1 mes a 6 años de prisión"},
  {c:"penal",q:"¿Qué artículo del CP tipifica las amenazas?",o:["Art. 149 bis","Art. 89","Art. 172"],a:"Art. 149 bis"},
  {c:"penal",q:"¿Cuál es la pena de las amenazas simples?",o:["6 meses a 2 años de prisión","1 a 6 años","3 a 10 años"],a:"6 meses a 2 años de prisión"},
  {c:"penal",q:"¿Qué artículo del CP tipifica las lesiones leves?",o:["Art. 89","Art. 79","Art. 149 bis"],a:"Art. 89"},
  {c:"penal",q:"¿Cuál es la pena de las lesiones graves (art. 90 CP)?",o:["1 a 6 años de prisión","6 meses a 2 años","3 a 10 años"],a:"1 a 6 años de prisión"},



  // ═══════════════════════════════════════════════════════════
  // PREGUNTAS — DERECHO LABORAL (50)
  // ═══════════════════════════════════════════════════════════
  {c:"laboral",q:"¿Qué ley regula el contrato de trabajo en Argentina?",o:["Ley 20.744","Ley 24.240","Ley 11.723"],a:"Ley 20.744"},
  {c:"laboral",q:"¿Cuál es el período de prueba en un contrato de trabajo?",o:["3 meses","6 meses","1 mes"],a:"3 meses"},
  {c:"laboral",q:"¿Cuántas horas semanales comprende la jornada legal de trabajo?",o:["48 horas","40 horas","44 horas"],a:"48 horas"},
  {c:"laboral",q:"¿Cuál es el plazo de preaviso con antigüedad mayor a 5 años?",o:["2 meses","1 mes","3 meses"],a:"2 meses"},
  {c:"laboral",q:"¿Cómo se calcula la indemnización por antigüedad (art. 245 LCT)?",o:["Un mes de sueldo por cada año de servicio o fracción mayor a 3 meses","Medio sueldo por año","Dos sueldos por año"],a:"Un mes de sueldo por cada año de servicio o fracción mayor a 3 meses"},
  {c:"laboral",q:"¿Qué es el despido con justa causa?",o:["El que se funda en un incumplimiento grave del trabajador que no admite la continuación del vínculo","Cualquier despido con preaviso","Un despido por causas económicas"],a:"El que se funda en un incumplimiento grave del trabajador que no admite la continuación del vínculo"},
  {c:"laboral",q:"¿Qué es el ius variandi?",o:["La facultad del empleador de modificar las condiciones de trabajo sin alterar la esencia del contrato","El derecho del trabajador a cambiar de empleo","Una acción judicial laboral"],a:"La facultad del empleador de modificar las condiciones de trabajo sin alterar la esencia del contrato"},
  {c:"laboral",q:"¿Cuántos días de vacaciones corresponden con más de 5 y hasta 10 años de antigüedad?",o:["21 días corridos","14 días","28 días"],a:"21 días corridos"},
  {c:"laboral",q:"¿Qué es el SAC (Sueldo Anual Complementario)?",o:["El aguinaldo: la doceava parte del mejor salario mensual del semestre","Un bono de productividad","Un subsidio estatal"],a:"El aguinaldo: la doceava parte del mejor salario mensual del semestre"},
  {c:"laboral",q:"¿En cuántas cuotas se paga el SAC?",o:["Dos cuotas: junio y diciembre","Una cuota en diciembre","Cuatro cuotas trimestrales"],a:"Dos cuotas: junio y diciembre"},
  {c:"laboral",q:"¿Qué principio rige la interpretación de las normas laborales?",o:["In dubio pro operario","In dubio pro reo","Pacta sunt servanda"],a:"In dubio pro operario"},
  {c:"laboral",q:"¿Qué es la irrenunciabilidad de derechos en materia laboral?",o:["Los derechos laborales son irrenunciables; toda renuncia es nula","El trabajador puede renunciar por escrito","Solo son irrenunciables los del convenio colectivo"],a:"Los derechos laborales son irrenunciables; toda renuncia es nula"},
  {c:"laboral",q:"¿Qué es el SECLO?",o:["El Servicio de Conciliación Laboral Obligatoria previo a la demanda","Un sindicato","Un tribunal laboral"],a:"El Servicio de Conciliación Laboral Obligatoria previo a la demanda"},
  {c:"laboral",q:"¿Qué ley regula las asociaciones sindicales?",o:["Ley 23.551","Ley 20.744","Ley 24.013"],a:"Ley 23.551"},
  {c:"laboral",q:"¿Qué es la tutela sindical?",o:["La protección especial de los representantes gremiales contra despidos y modificaciones de condiciones","Un seguro sindical","Una licencia gremial"],a:"La protección especial de los representantes gremiales contra despidos y modificaciones de condiciones"},
  {c:"laboral",q:"¿Qué ley regula el empleo no registrado y sus sanciones?",o:["Ley 24.013","Ley 20.744","Ley 25.323"],a:"Ley 24.013"},
  {c:"laboral",q:"¿Qué multa establece el art. 8 de la Ley 24.013?",o:["Indemnización equivalente al 25% de las remuneraciones no registradas","El doble de la indemnización","Un mes de sueldo"],a:"Indemnización equivalente al 25% de las remuneraciones no registradas"},
  {c:"laboral",q:"¿Qué establece la Ley 25.323?",o:["Duplica la indemnización cuando el empleador no registró o registró deficientemente la relación laboral y obliga a litigar","Triplica la indemnización","Reduce la indemnización"],a:"Duplica la indemnización cuando el empleador no registró o registró deficientemente la relación laboral y obliga a litigar"},
  {c:"laboral",q:"¿Qué es la jornada nocturna?",o:["La que se cumple entre las 21:00 y las 6:00, con límite de 7 horas","La que se cumple después de las 20:00","La que supera las 8 horas"],a:"La que se cumple entre las 21:00 y las 6:00, con límite de 7 horas"},
  {c:"laboral",q:"¿Cuántos días de licencia por matrimonio establece la LCT?",o:["10 días corridos","5 días","15 días"],a:"10 días corridos"},
  {c:"laboral",q:"¿Cuántos días de licencia por nacimiento de hijo corresponden al padre?",o:["2 días corridos","5 días","10 días"],a:"2 días corridos"},
  {c:"laboral",q:"¿Qué es la presunción del art. 23 de la LCT?",o:["La prestación de servicios hace presumir la existencia de un contrato de trabajo","La presunción de inocencia","La presunción de buena fe"],a:"La prestación de servicios hace presumir la existencia de un contrato de trabajo"},
  {c:"laboral",q:"¿Qué es el trabajo en negro?",o:["La relación laboral no registrada ante los organismos de seguridad social","El trabajo nocturno","El trabajo informal pero registrado"],a:"La relación laboral no registrada ante los organismos de seguridad social"},
  {c:"laboral",q:"¿Qué derecho tiene la trabajadora embarazada?",o:["Estabilidad en el empleo y licencia de 90 días (45 pre y 45 post parto)","Solo licencia de 30 días","No tiene protección especial"],a:"Estabilidad en el empleo y licencia de 90 días (45 pre y 45 post parto)"},
  {c:"laboral",q:"¿Qué es el despido indirecto?",o:["Cuando el trabajador se considera despedido por incumplimiento grave del empleador","Un despido sin causa","Un despido por justa causa"],a:"Cuando el trabajador se considera despedido por incumplimiento grave del empleador"},
  {c:"laboral",q:"¿Cuál es el tope de la base de cálculo de la indemnización del art. 245 LCT?",o:["Tres veces el promedio de las remuneraciones del convenio colectivo aplicable","No hay tope","El salario mínimo vital y móvil"],a:"Tres veces el promedio de las remuneraciones del convenio colectivo aplicable"},
  {c:"laboral",q:"¿Qué es la integración del mes de despido?",o:["La suma que debe abonarse por los días faltantes del mes en que se produce el despido","Un concepto del aguinaldo","El preaviso"],a:"La suma que debe abonarse por los días faltantes del mes en que se produce el despido"},
  {c:"laboral",q:"¿Qué establece el art. 80 de la LCT sobre los certificados de trabajo?",o:["El empleador debe entregar certificados de aportes y de trabajo al cesar la relación","El trabajador debe pedirlos judicialmente","No hay obligación de entregarlos"],a:"El empleador debe entregar certificados de aportes y de trabajo al cesar la relación"},
  {c:"laboral",q:"¿Qué es el convenio colectivo de trabajo?",o:["Un acuerdo entre sindicatos y empleadores que regula condiciones laborales de un sector","Un contrato individual","Una ley del Congreso"],a:"Un acuerdo entre sindicatos y empleadores que regula condiciones laborales de un sector"},
  {c:"laboral",q:"¿Cuántos días de vacaciones corresponden con antigüedad de hasta 5 años?",o:["14 días corridos","7 días","21 días"],a:"14 días corridos"},
  {c:"laboral",q:"¿Cuántos días de vacaciones corresponden con más de 10 hasta 20 años de antigüedad?",o:["28 días corridos","21 días","35 días"],a:"28 días corridos"},
  {c:"laboral",q:"¿Cuántos días de vacaciones corresponden con más de 20 años de antigüedad?",o:["35 días corridos","28 días","42 días"],a:"35 días corridos"},
  {c:"laboral",q:"¿Qué es el salario mínimo vital y móvil?",o:["La menor remuneración que debe percibir en efectivo el trabajador mayor de 18 años por jornada legal","El sueldo promedio del país","Un subsidio estatal"],a:"La menor remuneración que debe percibir en efectivo el trabajador mayor de 18 años por jornada legal"},
  {c:"laboral",q:"¿Qué organismo fija el salario mínimo vital y móvil?",o:["El Consejo Nacional del Empleo, la Productividad y el SMVM","El Ministerio de Trabajo","El Congreso Nacional"],a:"El Consejo Nacional del Empleo, la Productividad y el SMVM"},
  {c:"laboral",q:"¿Qué es la jornada insalubre?",o:["La que se desarrolla en condiciones nocivas para la salud, con límite de 6 horas diarias y 36 semanales","La jornada nocturna","La que supera 8 horas"],a:"La que se desarrolla en condiciones nocivas para la salud, con límite de 6 horas diarias y 36 semanales"},
  {c:"laboral",q:"¿Cuántos días de licencia por fallecimiento de cónyuge o hijo corresponden?",o:["3 días corridos","5 días","1 día"],a:"3 días corridos"},
  {c:"laboral",q:"¿Qué es el mobbing laboral?",o:["El acoso moral sistemático en el ámbito de trabajo","Una forma de despido","Un beneficio sindical"],a:"El acoso moral sistemático en el ámbito de trabajo"},
  {c:"laboral",q:"¿Cuántos días de licencia por examen corresponden por la LCT?",o:["2 días corridos por examen, hasta 10 por año","5 días por examen","1 día por examen"],a:"2 días corridos por examen, hasta 10 por año"},
  {c:"laboral",q:"¿Qué es el período de excedencia?",o:["El plazo de entre 3 y 6 meses sin goce de sueldo que puede tomar la madre después de la licencia por maternidad","Una extensión del período de prueba","Una licencia sindical"],a:"El plazo de entre 3 y 6 meses sin goce de sueldo que puede tomar la madre después de la licencia por maternidad"},
  {c:"laboral",q:"¿Qué es la pluriempleo?",o:["Cuando un trabajador presta servicios para dos o más empleadores","Un tipo de cooperativa","El trabajo en equipo"],a:"Cuando un trabajador presta servicios para dos o más empleadores"},
  {c:"laboral",q:"¿Cuál es el recargo por horas extras en días comunes?",o:["50% sobre el salario habitual","100%","25%"],a:"50% sobre el salario habitual"},
  {c:"laboral",q:"¿Cuál es el recargo por horas extras en días sábados después de las 13, domingos y feriados?",o:["100% sobre el salario habitual","50%","75%"],a:"100% sobre el salario habitual"},
  {c:"laboral",q:"¿Qué es la extinción del contrato por mutuo acuerdo (art. 241 LCT)?",o:["La disolución del vínculo por voluntad de ambas partes ante autoridad judicial o administrativa","Una renuncia del trabajador","Un despido sin causa"],a:"La disolución del vínculo por voluntad de ambas partes ante autoridad judicial o administrativa"},
  {c:"laboral",q:"¿Qué artículo de la LCT regula las horas extras?",o:["Art. 201","Art. 245","Art. 80"],a:"Art. 201"},
  {c:"laboral",q:"¿Qué es la solidaridad laboral del art. 30 LCT?",o:["La responsabilidad solidaria de quien contrata o subcontrata trabajos propios de su actividad","Un fondo de garantía","Un seguro obligatorio"],a:"La responsabilidad solidaria de quien contrata o subcontrata trabajos propios de su actividad"},
  {c:"laboral",q:"¿Qué es la primacía de la realidad en derecho laboral?",o:["Prevalecen los hechos reales sobre lo que las partes documentaron formalmente","Prevalece el contrato escrito","Prevalece lo que dice el empleador"],a:"Prevalecen los hechos reales sobre lo que las partes documentaron formalmente"},
  {c:"laboral",q:"¿Qué establece el art. 9 de la LCT sobre la duda?",o:["En caso de duda las situaciones deben resolverse a favor del trabajador","A favor del empleador","A favor del Estado"],a:"En caso de duda las situaciones deben resolverse a favor del trabajador"},
  {c:"laboral",q:"¿Qué es la indemnización sustitutiva de preaviso?",o:["El pago equivalente al salario del período de preaviso cuando no se otorga","Una multa","Un bono de despido"],a:"El pago equivalente al salario del período de preaviso cuando no se otorga"},



  // ═══════════════════════════════════════════════════════════
  // PREGUNTAS — DERECHO AMBIENTAL (50)
  // ═══════════════════════════════════════════════════════════
  {c:"ambiental",q:"¿Qué artículo de la CN consagra el derecho a un ambiente sano?",o:["Art. 41","Art. 14","Art. 43"],a:"Art. 41"},
  {c:"ambiental",q:"¿Qué ley establece los presupuestos mínimos de protección ambiental?",o:["Ley 25.675 (Ley General del Ambiente)","Ley 24.240","Ley 20.744"],a:"Ley 25.675 (Ley General del Ambiente)"},
  {c:"ambiental",q:"¿Qué es el principio precautorio en materia ambiental?",o:["Ante peligro de daño grave o irreversible, la falta de certeza científica no debe postergar medidas de protección","Solo actuar con certeza científica","No tomar medidas hasta confirmar el daño"],a:"Ante peligro de daño grave o irreversible, la falta de certeza científica no debe postergar medidas de protección"},
  {c:"ambiental",q:"¿Qué es el principio preventivo?",o:["Las causas y fuentes de los problemas ambientales deben atenderse en forma prioritaria e integrada","Reparar después del daño","Solo sancionar al contaminador"],a:"Las causas y fuentes de los problemas ambientales deben atenderse en forma prioritaria e integrada"},
  {c:"ambiental",q:"¿Qué es el principio contaminador-pagador?",o:["Quien contamina debe asumir los costos de la remediación ambiental","El Estado paga la remediación","La comunidad asume los costos"],a:"Quien contamina debe asumir los costos de la remediación ambiental"},
  {c:"ambiental",q:"¿Qué es la evaluación de impacto ambiental?",o:["Un procedimiento preventivo que analiza los efectos ambientales de un proyecto antes de su ejecución","Un estudio posterior al daño","Una auditoría financiera"],a:"Un procedimiento preventivo que analiza los efectos ambientales de un proyecto antes de su ejecución"},
  {c:"ambiental",q:"¿Qué establece la Ley 25.675 sobre la responsabilidad por daño ambiental?",o:["Es objetiva: el que contamina es responsable independientemente de la culpa","Es subjetiva: requiere culpa","No establece responsabilidad"],a:"Es objetiva: el que contamina es responsable independientemente de la culpa"},
  {c:"ambiental",q:"¿Qué ley regula los residuos peligrosos?",o:["Ley 24.051","Ley 25.675","Ley 25.916"],a:"Ley 24.051"},
  {c:"ambiental",q:"¿Qué ley regula la gestión integral de residuos domiciliarios?",o:["Ley 25.916","Ley 24.051","Ley 25.675"],a:"Ley 25.916"},
  {c:"ambiental",q:"¿Qué es el daño ambiental colectivo?",o:["Toda alteración relevante que modifique negativamente el ambiente, sus recursos o el equilibrio de los ecosistemas","Solo el daño a una persona","El daño a la propiedad privada"],a:"Toda alteración relevante que modifique negativamente el ambiente, sus recursos o el equilibrio de los ecosistemas"},
  {c:"ambiental",q:"¿Quiénes tienen legitimación para accionar por daño ambiental colectivo?",o:["El afectado, el Defensor del Pueblo, las asociaciones ambientalistas y el Estado","Solo el Estado","Solo el Defensor del Pueblo"],a:"El afectado, el Defensor del Pueblo, las asociaciones ambientalistas y el Estado"},
  {c:"ambiental",q:"¿Qué ley regula los bosques nativos?",o:["Ley 26.331","Ley 25.675","Ley 22.421"],a:"Ley 26.331"},
  {c:"ambiental",q:"¿Qué ley regula los glaciares?",o:["Ley 26.639","Ley 25.675","Ley 26.331"],a:"Ley 26.639"},
  {c:"ambiental",q:"¿Qué fallo emblemático de la CSJN abordó la contaminación del Riachuelo?",o:["Mendoza, Beatriz c/ Estado Nacional (causa Riachuelo/Matanza)","Halabi","Arriola"],a:"Mendoza, Beatriz c/ Estado Nacional (causa Riachuelo/Matanza)"},
  {c:"ambiental",q:"¿Qué es la recomposición ambiental?",o:["La obligación de restablecer el ambiente al estado anterior al daño","La demolición de construcciones","El pago de multas"],a:"La obligación de restablecer el ambiente al estado anterior al daño"},
  {c:"ambiental",q:"¿Qué ley regula la fauna silvestre?",o:["Ley 22.421","Ley 25.675","Ley 26.331"],a:"Ley 22.421"},
  {c:"ambiental",q:"¿Qué establece el art. 41 CN sobre el deber de recomponer?",o:["El daño ambiental generará prioritariamente la obligación de recomponer","Solo la obligación de indemnizar","Ninguna obligación"],a:"El daño ambiental generará prioritariamente la obligación de recomponer"},
  {c:"ambiental",q:"¿Qué es el seguro ambiental obligatorio?",o:["La cobertura que deben contratar quienes realizan actividades riesgosas para el ambiente (art. 22 Ley 25.675)","Un seguro de vida","Un seguro de responsabilidad civil automotor"],a:"La cobertura que deben contratar quienes realizan actividades riesgosas para el ambiente (art. 22 Ley 25.675)"},
  {c:"ambiental",q:"¿Qué es el ordenamiento ambiental del territorio?",o:["La planificación del uso del suelo según criterios ambientales y desarrollo sustentable","Un mapa catastral","Un plan de urbanización"],a:"La planificación del uso del suelo según criterios ambientales y desarrollo sustentable"},
  {c:"ambiental",q:"¿Qué ley regula el acceso a la información pública ambiental?",o:["Ley 25.831","Ley 25.675","Ley 27.275"],a:"Ley 25.831"},
  {c:"ambiental",q:"¿Quién es la autoridad de aplicación de la Ley General del Ambiente?",o:["La autoridad ambiental nacional que designe el Poder Ejecutivo (actualmente la Secretaría de Ambiente)","El Congreso","El Poder Judicial"],a:"La autoridad ambiental nacional que designe el Poder Ejecutivo (actualmente la Secretaría de Ambiente)"},
  {c:"ambiental",q:"¿Qué tratado internacional protege la capa de ozono?",o:["El Protocolo de Montreal","El Acuerdo de París","El Convenio de Basilea"],a:"El Protocolo de Montreal"},
  {c:"ambiental",q:"¿Qué acuerdo internacional aborda el cambio climático?",o:["El Acuerdo de París (2015)","El Protocolo de Montreal","El Convenio CITES"],a:"El Acuerdo de París (2015)"},
  {c:"ambiental",q:"¿Qué convenio regula el comercio internacional de especies amenazadas?",o:["CITES","Protocolo de Montreal","Convenio de Basilea"],a:"CITES"},
  {c:"ambiental",q:"¿Qué es la audiencia pública ambiental?",o:["Un mecanismo de participación ciudadana previo a la aprobación de proyectos con impacto ambiental","Una conferencia de prensa","Un juicio oral"],a:"Un mecanismo de participación ciudadana previo a la aprobación de proyectos con impacto ambiental"},
  {c:"ambiental",q:"¿Qué es el Fondo de Compensación Ambiental (art. 34 Ley 25.675)?",o:["Un fondo destinado a garantizar la recomposición del daño ambiental","Un fondo de inversión","Un subsidio para empresas"],a:"Un fondo destinado a garantizar la recomposición del daño ambiental"},
  {c:"ambiental",q:"¿Qué establece el principio de equidad intergeneracional?",o:["Los responsables de la protección ambiental deben velar por el uso de los recursos naturales para las generaciones presentes y futuras","Solo proteger a la generación actual","Dejar todo para el futuro"],a:"Los responsables de la protección ambiental deben velar por el uso de los recursos naturales para las generaciones presentes y futuras"},
  {c:"ambiental",q:"¿Qué ley regula los presupuestos mínimos para la gestión del agua?",o:["Ley 25.688 (Régimen de Gestión Ambiental de Aguas)","Ley 25.675","Ley 26.639"],a:"Ley 25.688 (Régimen de Gestión Ambiental de Aguas)"},
  {c:"ambiental",q:"¿Qué es el principio de sustentabilidad?",o:["El desarrollo económico y social debe realizarse sin comprometer las posibilidades de las generaciones futuras","Maximizar las ganancias","Explotar todos los recursos disponibles"],a:"El desarrollo económico y social debe realizarse sin comprometer las posibilidades de las generaciones futuras"},
  {c:"ambiental",q:"¿Qué ley regula la quema de pastizales y residuos agropecuarios?",o:["Ley 26.562 (Presupuestos Mínimos de Protección Ambiental para Control de Actividades de Quema)","Ley 25.675","Ley 26.331"],a:"Ley 26.562 (Presupuestos Mínimos de Protección Ambiental para Control de Actividades de Quema)"},
  {c:"ambiental",q:"¿Qué tipo de acción procede para proteger el ambiente según el art. 43 CN?",o:["La acción de amparo ambiental colectivo","Solo la denuncia penal","Solo la acción civil individual"],a:"La acción de amparo ambiental colectivo"},
  {c:"ambiental",q:"¿Qué es el principio de solidaridad en la Ley 25.675?",o:["La Nación y las provincias son responsables de la prevención y mitigación ambiental de forma solidaria","Solo las provincias son responsables","Solo la Nación es responsable"],a:"La Nación y las provincias son responsables de la prevención y mitigación ambiental de forma solidaria"},
  {c:"ambiental",q:"¿Qué tipo de prescripción tiene la acción por daño ambiental colectivo?",o:["Es imprescriptible según la Ley 25.675","Prescribe a los 2 años","Prescribe a los 5 años"],a:"Es imprescriptible según la Ley 25.675"},
  {c:"ambiental",q:"¿Qué convenio internacional regula los movimientos transfronterizos de desechos peligrosos?",o:["El Convenio de Basilea","El Protocolo de Montreal","CITES"],a:"El Convenio de Basilea"},
  {c:"ambiental",q:"¿Qué es el COFEMA?",o:["El Consejo Federal de Medio Ambiente, órgano de coordinación entre la Nación y las provincias","Un tribunal ambiental","Una ONG ambientalista"],a:"El Consejo Federal de Medio Ambiente, órgano de coordinación entre la Nación y las provincias"},
  {c:"ambiental",q:"¿Qué significa que las normas ambientales sean de presupuestos mínimos?",o:["Son pisos de protección que las provincias pueden ampliar pero nunca reducir","Son normas máximas","Son solo recomendaciones"],a:"Son pisos de protección que las provincias pueden ampliar pero nunca reducir"},
  {c:"ambiental",q:"¿Qué ley regula los residuos industriales?",o:["Ley 25.612","Ley 24.051","Ley 25.916"],a:"Ley 25.612"},
  {c:"ambiental",q:"¿Qué establece la cláusula ambiental del art. 41 CN sobre las autoridades?",o:["Que corresponde a la Nación dictar presupuestos mínimos y a las provincias las normas complementarias","Que todo es competencia nacional","Que solo las provincias legislan"],a:"Que corresponde a la Nación dictar presupuestos mínimos y a las provincias las normas complementarias"},
  {c:"ambiental",q:"¿Qué es la licencia social para operar en materia ambiental?",o:["La aceptación de la comunidad afectada por un proyecto, lograda mediante consulta y participación","Un permiso del municipio","Una habilitación comercial"],a:"La aceptación de la comunidad afectada por un proyecto, lograda mediante consulta y participación"},
  {c:"ambiental",q:"¿Cuál es la competencia judicial en materia de daño ambiental interjurisdiccional?",o:["La justicia federal","La justicia provincial donde se originó el daño","La justicia de paz"],a:"La justicia federal"},



  // ═══════════════════════════════════════════════════════════
  // PREGUNTAS — DERECHO MARÍTIMO (50)
  // ═══════════════════════════════════════════════════════════
  {c:"maritimo",q:"¿Qué ley regula la navegación en Argentina?",o:["Ley 20.094 (Ley de Navegación)","Código de Comercio","Ley 17.418"],a:"Ley 20.094 (Ley de Navegación)"},
  {c:"maritimo",q:"¿Qué es el derecho de limitación de responsabilidad del armador?",o:["La facultad de limitar su responsabilidad al valor del buque y fletes","No tiene limitación","Se limita al seguro contratado"],a:"La facultad de limitar su responsabilidad al valor del buque y fletes"},
  {c:"maritimo",q:"¿Qué es el contrato de fletamento?",o:["El contrato por el cual el armador pone a disposición un buque para el transporte","Un contrato de seguro marítimo","Un contrato de compraventa de buques"],a:"El contrato por el cual el armador pone a disposición un buque para el transporte"},
  {c:"maritimo",q:"¿Qué es la avería gruesa?",o:["El sacrificio extraordinario hecho para la salvación común del buque y la carga","Un daño del buque por tormenta","Una multa portuaria"],a:"El sacrificio extraordinario hecho para la salvación común del buque y la carga"},
  {c:"maritimo",q:"¿Qué es el conocimiento de embarque?",o:["El documento que prueba el contrato de transporte marítimo y sirve como título de crédito","La matrícula del buque","El certificado de navegabilidad"],a:"El documento que prueba el contrato de transporte marítimo y sirve como título de crédito"},
  {c:"maritimo",q:"¿Qué autoridad ejerce el poder de policía de la navegación?",o:["La Prefectura Naval Argentina","La Armada","El Ministerio de Transporte"],a:"La Prefectura Naval Argentina"},
  {c:"maritimo",q:"¿Qué es el privilegio marítimo?",o:["Un derecho preferente de cobro sobre el buque que sigue a la cosa","Una licencia de navegación","Un impuesto portuario"],a:"Un derecho preferente de cobro sobre el buque que sigue a la cosa"},
  {c:"maritimo",q:"¿Qué es el salvamento marítimo?",o:["La asistencia prestada a un buque en peligro, que genera derecho a recompensa","El rescate de náufragos solamente","La reparación del buque"],a:"La asistencia prestada a un buque en peligro, que genera derecho a recompensa"},
  {c:"maritimo",q:"¿Qué es la hipoteca naval?",o:["Un derecho real de garantía sobre un buque inscripto","Un seguro obligatorio","Un impuesto de puerto"],a:"Un derecho real de garantía sobre un buque inscripto"},
  {c:"maritimo",q:"¿Qué es el cabotaje?",o:["La navegación entre puertos de un mismo país","La navegación internacional","La navegación fluvial exclusivamente"],a:"La navegación entre puertos de un mismo país"},
  {c:"maritimo",q:"¿Quién es el capitán del buque?",o:["El representante legal del armador a bordo y delegado de la autoridad pública","Un empleado sin responsabilidad legal","El dueño del buque"],a:"El representante legal del armador a bordo y delegado de la autoridad pública"},
  {c:"maritimo",q:"¿Qué es la matrícula de un buque?",o:["La inscripción en el registro que otorga nacionalidad al buque","La patente de navegación","El seguro obligatorio"],a:"La inscripción en el registro que otorga nacionalidad al buque"},
  {c:"maritimo",q:"¿Qué convenio internacional unifica reglas sobre conocimientos de embarque?",o:["Las Reglas de La Haya-Visby","El Protocolo de Montreal","La Convención de Viena"],a:"Las Reglas de La Haya-Visby"},
  {c:"maritimo",q:"¿Qué es el embargo de buque?",o:["Una medida cautelar que inmoviliza el buque como garantía de un crédito marítimo","La confiscación definitiva","Una multa portuaria"],a:"Una medida cautelar que inmoviliza el buque como garantía de un crédito marítimo"},
  {c:"maritimo",q:"¿Qué es la protesta de mar?",o:["La declaración del capitán ante autoridad competente sobre los hechos ocurridos durante la navegación","Una huelga de marineros","Un reclamo administrativo"],a:"La declaración del capitán ante autoridad competente sobre los hechos ocurridos durante la navegación"},
  {c:"maritimo",q:"¿Qué es el armador?",o:["Quien explota comercialmente un buque, sea o no su propietario","El constructor del buque","El capitán"],a:"Quien explota comercialmente un buque, sea o no su propietario"},
  {c:"maritimo",q:"¿Qué tipo de jurisdicción rige en los delitos cometidos a bordo de buques de bandera argentina en alta mar?",o:["La jurisdicción argentina (federal)","La del puerto más cercano","Jurisdicción internacional"],a:"La jurisdicción argentina (federal)"},
  {c:"maritimo",q:"¿Qué es la carta de porte en transporte fluvial?",o:["El documento que prueba el contrato de transporte de mercaderías por agua","Una licencia de navegación","Un certificado de inspección"],a:"El documento que prueba el contrato de transporte de mercaderías por agua"},
  {c:"maritimo",q:"¿Qué es el abordaje?",o:["La colisión entre dos o más buques","El acto de subir a un buque","Un tipo de piratería"],a:"La colisión entre dos o más buques"},
  {c:"maritimo",q:"¿Qué ley argentina regula los espacios marítimos?",o:["Ley 23.968","Ley 20.094","Ley 17.418"],a:"Ley 23.968"},
  {c:"maritimo",q:"¿Cuántas millas comprende el mar territorial argentino?",o:["12 millas náuticas","200 millas","3 millas"],a:"12 millas náuticas"},
  {c:"maritimo",q:"¿Cuántas millas comprende la zona económica exclusiva argentina?",o:["200 millas náuticas desde la línea de base","100 millas","350 millas"],a:"200 millas náuticas desde la línea de base"},
  {c:"maritimo",q:"¿Qué es el seguro de protección e indemnización (P&I)?",o:["Un seguro mutual que cubre la responsabilidad civil del armador frente a terceros","Un seguro de casco","Un seguro de carga"],a:"Un seguro mutual que cubre la responsabilidad civil del armador frente a terceros"},
  {c:"maritimo",q:"¿Qué es la echazón?",o:["El acto de arrojar mercaderías al mar para aligerar el buque en peligro","Una maniobra de atraque","Un tipo de contrato"],a:"El acto de arrojar mercaderías al mar para aligerar el buque en peligro"},
  {c:"maritimo",q:"¿Qué registro lleva la matrícula de los buques en Argentina?",o:["El Registro Nacional de Buques","El Registro de la Propiedad Inmueble","El Registro Público de Comercio"],a:"El Registro Nacional de Buques"},
  {c:"maritimo",q:"¿Qué es la Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR)?",o:["El tratado internacional que establece el marco jurídico de los océanos y mares","Un acuerdo de pesca","Un tratado de comercio marítimo"],a:"El tratado internacional que establece el marco jurídico de los océanos y mares"},
  {c:"maritimo",q:"¿En qué año se firmó la CONVEMAR?",o:["1982","1958","2001"],a:"1982"},
  {c:"maritimo",q:"¿Qué es la navegación de cabotaje menor?",o:["La que se realiza entre puertos de una misma provincia o zona determinada","La navegación transoceánica","La navegación deportiva"],a:"La que se realiza entre puertos de una misma provincia o zona determinada"},
  {c:"maritimo",q:"¿Cuál es la prescripción de las acciones derivadas del contrato de transporte marítimo?",o:["1 año","2 años","5 años"],a:"1 año"},
  {c:"maritimo",q:"¿Qué es el acta de protesta?",o:["El documento donde el capitán deja constancia de averías o incidentes para preservar derechos","Una denuncia penal","Un seguro adicional"],a:"El documento donde el capitán deja constancia de averías o incidentes para preservar derechos"},
  {c:"maritimo",q:"¿Qué son las Reglas de York-Amberes?",o:["Las reglas internacionales que regulan la avería gruesa","Normas de construcción naval","Reglas de navegación"],a:"Las reglas internacionales que regulan la avería gruesa"},
  {c:"maritimo",q:"¿Qué organismo internacional regula la seguridad marítima?",o:["La Organización Marítima Internacional (OMI)","La ONU directamente","La Corte Internacional de Justicia"],a:"La Organización Marítima Internacional (OMI)"},
  {c:"maritimo",q:"¿Qué convenio regula la prevención de la contaminación por los buques?",o:["MARPOL","SOLAS","CONVEMAR"],a:"MARPOL"},
  {c:"maritimo",q:"¿Qué convenio regula la seguridad de la vida humana en el mar?",o:["SOLAS","MARPOL","CONVEMAR"],a:"SOLAS"},
  {c:"maritimo",q:"¿Qué es el derecho de paso inocente?",o:["El derecho de un buque extranjero a atravesar el mar territorial de un Estado sin detenerse","El derecho a pescar en aguas ajenas","El derecho a fondear en cualquier puerto"],a:"El derecho de un buque extranjero a atravesar el mar territorial de un Estado sin detenerse"},
  {c:"maritimo",q:"¿Qué tipo de responsabilidad tiene el transportador marítimo por pérdida o daño de la carga?",o:["Responsabilidad subjetiva con inversión de la carga probatoria (presunción de culpa)","Responsabilidad objetiva absoluta","No tiene responsabilidad"],a:"Responsabilidad subjetiva con inversión de la carga probatoria (presunción de culpa)"},
  {c:"maritimo",q:"¿Qué es un buque según la Ley 20.094?",o:["Toda construcción flotante destinada a navegar por agua","Solo los barcos a motor","Solo las embarcaciones de más de 10 metros"],a:"Toda construcción flotante destinada a navegar por agua"},
  {c:"maritimo",q:"¿Qué diferencia hay entre buque y artefacto naval?",o:["El buque está destinado a navegar; el artefacto naval no, aunque puede ser remolcado","No hay diferencia","El artefacto naval es más grande"],a:"El buque está destinado a navegar; el artefacto naval no, aunque puede ser remolcado"},
  {c:"maritimo",q:"¿Qué son los créditos marítimos privilegiados de primer rango?",o:["Los gastos de justicia, salarios de la tripulación y gastos de salvamento","Los créditos hipotecarios","Los impuestos portuarios"],a:"Los gastos de justicia, salarios de la tripulación y gastos de salvamento"},
  {c:"maritimo",q:"¿Qué recurso tiene el asegurador marítimo cuando paga una indemnización?",o:["La subrogación en los derechos del asegurado contra el tercero responsable","Ninguno","Solo reclamar al Estado"],a:"La subrogación en los derechos del asegurado contra el tercero responsable"},


  // ═══════════════════════════════════════
  // MARÍTIMO (últimas 10)
  // ═══════════════════════════════════════
  {c:"maritimo",q:"¿Qué es la 'fortuna de mar'?",o:["El patrimonio naval del armador al cual se limita su responsabilidad","Un tesoro encontrado en el mar","La ganancia del viaje"],a:"El patrimonio naval del armador al cual se limita su responsabilidad"},
  {c:"maritimo",q:"¿Qué es el contrato de remolque?",o:["El acuerdo por el cual un buque presta tracción a otro buque o artefacto naval","Un contrato de seguro","Un contrato de compraventa naval"],a:"El acuerdo por el cual un buque presta tracción a otro buque o artefacto naval"},
  {c:"maritimo",q:"¿Qué jurisdicción es competente en un abordaje entre buques de distinta bandera?",o:["La del Estado de bandera del buque abordado o la del primer puerto de arribo","La del país más cercano","La jurisdicción internacional exclusivamente"],a:"La del Estado de bandera del buque abordado o la del primer puerto de arribo"},
  {c:"maritimo",q:"¿Qué es el derecho de retención del transportador marítimo?",o:["La facultad de retener las mercancías hasta el pago del flete","El derecho a no zarpar","La retención de la tripulación"],a:"La facultad de retener las mercancías hasta el pago del flete"},
  {c:"maritimo",q:"¿Qué es la Zona Contigua según la CONVEMAR?",o:["La franja de mar entre las 12 y 24 millas desde la línea de base","El mar territorial","La plataforma continental"],a:"La franja de mar entre las 12 y 24 millas desde la línea de base"},
  {c:"maritimo",q:"¿Qué es la plataforma continental?",o:["La prolongación natural del territorio bajo el mar, donde el Estado costero ejerce derechos soberanos sobre los recursos","El fondo del océano profundo","La costa marítima"],a:"La prolongación natural del territorio bajo el mar, donde el Estado costero ejerce derechos soberanos sobre los recursos"},
  {c:"maritimo",q:"¿Qué es el derecho de persecución (hot pursuit)?",o:["La facultad del Estado ribereño de perseguir un buque extranjero que violó sus leyes desde sus aguas hasta alta mar","Un recurso procesal","Un tipo de embargo"],a:"La facultad del Estado ribereño de perseguir un buque extranjero que violó sus leyes desde sus aguas hasta alta mar"},
  {c:"maritimo",q:"¿Quién responde por los daños causados por contaminación por hidrocarburos?",o:["El propietario del buque, con responsabilidad objetiva","El capitán personalmente","El Estado del puerto"],a:"El propietario del buque, con responsabilidad objetiva"},
  {c:"maritimo",q:"¿Qué es el charter party?",o:["El contrato de fletamento formalizado entre armador y fletador","Un seguro marítimo","Una patente de navegación"],a:"El contrato de fletamento formalizado entre armador y fletador"},
  {c:"maritimo",q:"¿Qué es la navegación en lastre?",o:["Cuando el buque navega sin carga comercial","Navegar contra corriente","Navegar en convoy"],a:"Cuando el buque navega sin carga comercial"},

  // ═══════════════════════════════════════
  // DEFENSA DEL CONSUMIDOR (50)
  // ═══════════════════════════════════════
  {c:"consumidor",q:"¿Qué ley protege al consumidor en Argentina?",o:["Ley 24.240","Ley 20.744","Ley 19.550"],a:"Ley 24.240"},
  {c:"consumidor",q:"¿Qué artículo de la CN protege los derechos de consumidores y usuarios?",o:["Art. 42","Art. 14","Art. 41"],a:"Art. 42"},
  {c:"consumidor",q:"¿Qué es una relación de consumo?",o:["El vínculo jurídico entre el proveedor y el consumidor o usuario","Un contrato comercial entre empresas","Una relación laboral"],a:"El vínculo jurídico entre el proveedor y el consumidor o usuario"},
  {c:"consumidor",q:"¿Cuánto dura la garantía legal por defectos en cosas muebles nuevas?",o:["6 meses","3 meses","1 año"],a:"6 meses"},
  {c:"consumidor",q:"¿Cuánto dura la garantía legal en cosas muebles usadas?",o:["3 meses","6 meses","1 mes"],a:"3 meses"},
  {c:"consumidor",q:"¿Qué es el derecho de arrepentimiento?",o:["La facultad del consumidor de revocar la aceptación en compras a distancia dentro de los 10 días","El derecho a quejarse","El derecho a no pagar"],a:"La facultad del consumidor de revocar la aceptación en compras a distancia dentro de los 10 días"},
  {c:"consumidor",q:"¿En qué plazo puede ejercerse el derecho de arrepentimiento?",o:["10 días corridos desde la entrega o celebración del contrato","30 días","5 días"],a:"10 días corridos desde la entrega o celebración del contrato"},
  {c:"consumidor",q:"¿Qué es una cláusula abusiva?",o:["La que desnaturaliza las obligaciones o importa renuncia o restricción de derechos del consumidor","Una cláusula de precio","Una garantía extendida"],a:"La que desnaturaliza las obligaciones o importa renuncia o restricción de derechos del consumidor"},
  {c:"consumidor",q:"¿Qué es el daño punitivo?",o:["Una multa civil a favor del consumidor cuando el proveedor no cumple sus obligaciones legales (art. 52 bis)","Un daño moral","Una sanción penal"],a:"Una multa civil a favor del consumidor cuando el proveedor no cumple sus obligaciones legales (art. 52 bis)"},
  {c:"consumidor",q:"¿Quién tiene la carga de la prueba en las relaciones de consumo?",o:["El proveedor","El consumidor","El juez decide"],a:"El proveedor"},
  {c:"consumidor",q:"¿Qué es la publicidad engañosa?",o:["La que induce a error al consumidor respecto de las características del bien o servicio","Una publicidad sin registro","Una publicidad en horario nocturno"],a:"La que induce a error al consumidor respecto de las características del bien o servicio"},
  {c:"consumidor",q:"¿Qué obligación tiene el proveedor respecto a la información?",o:["Brindar información cierta, clara y detallada sobre las características del producto o servicio","Solo informar el precio","No tiene obligación de informar"],a:"Brindar información cierta, clara y detallada sobre las características del producto o servicio"},
  {c:"consumidor",q:"¿Qué es el trato digno al consumidor?",o:["La obligación del proveedor de tratar al consumidor con respeto y sin discriminación","Un saludo protocolar","Una política de la empresa"],a:"La obligación del proveedor de tratar al consumidor con respeto y sin discriminación"},
  {c:"consumidor",q:"¿Qué sanciones puede aplicar la autoridad de aplicación?",o:["Apercibimiento, multa, clausura, decomiso, suspensión del registro","Solo multa","Solo clausura"],a:"Apercibimiento, multa, clausura, decomiso, suspensión del registro"},
  {c:"consumidor",q:"¿Qué es el contrato de adhesión?",o:["Aquel cuyas cláusulas son predispuestas unilateralmente por el proveedor sin negociación","Un contrato notarial","Un contrato laboral"],a:"Aquel cuyas cláusulas son predispuestas unilateralmente por el proveedor sin negociación"},
  {c:"consumidor",q:"¿Qué recurso tiene el consumidor ante el rechazo de un reclamo?",o:["Acudir a la autoridad de defensa del consumidor, al COPREC, a la mediación o a la justicia","Solo la denuncia penal","Ninguno"],a:"Acudir a la autoridad de defensa del consumidor, al COPREC, a la mediación o a la justicia"},
  {c:"consumidor",q:"¿Qué es COPREC?",o:["El servicio de Conciliación Previa en las Relaciones de Consumo","Un colegio profesional","Un organismo de control de precios"],a:"El servicio de Conciliación Previa en las Relaciones de Consumo"},
  {c:"consumidor",q:"¿Se aplica la Ley 24.240 a los servicios públicos domiciliarios?",o:["Sí, con las normas del marco regulatorio específico","No, están excluidos","Solo al agua y la luz"],a:"Sí, con las normas del marco regulatorio específico"},
  {c:"consumidor",q:"¿Qué es la garantía legal?",o:["La cobertura obligatoria que cubre defectos o vicios de la cosa, sin costo adicional para el consumidor","Un seguro optativo","Una extensión de garantía paga"],a:"La cobertura obligatoria que cubre defectos o vicios de la cosa, sin costo adicional para el consumidor"},
  {c:"consumidor",q:"¿Qué es la responsabilidad solidaria en la cadena de comercialización?",o:["Todos los integrantes de la cadena productiva y comercial son responsables frente al consumidor","Solo el fabricante","Solo el vendedor"],a:"Todos los integrantes de la cadena productiva y comercial son responsables frente al consumidor"},
  {c:"consumidor",q:"¿Qué artículo del CCyCN regula los contratos de consumo?",o:["Arts. 1092 a 1122","Arts. 1 a 50","Arts. 2000 a 2050"],a:"Arts. 1092 a 1122"},
  {c:"consumidor",q:"¿El consumidor puede renunciar a sus derechos?",o:["No, son irrenunciables y cualquier renuncia es nula","Sí, por escrito","Solo ante escribano"],a:"No, son irrenunciables y cualquier renuncia es nula"},
  {c:"consumidor",q:"¿Qué es la venta domiciliaria?",o:["La oferta o venta de bienes o servicios efectuada fuera del establecimiento del proveedor","La venta de inmuebles","La venta por internet"],a:"La oferta o venta de bienes o servicios efectuada fuera del establecimiento del proveedor"},
  {c:"consumidor",q:"¿Qué plazo tiene el proveedor para reparar una cosa en garantía?",o:["30 días desde que el consumidor la entregó","60 días","15 días"],a:"30 días desde que el consumidor la entregó"},
  {c:"consumidor",q:"¿Qué es la obsolescencia programada?",o:["La práctica de diseñar productos con vida útil limitada para forzar su reemplazo","Un método de reciclaje","Una norma de calidad"],a:"La práctica de diseñar productos con vida útil limitada para forzar su reemplazo"},
  {c:"consumidor",q:"¿Qué es el deber de seguridad del proveedor?",o:["La obligación de que los productos y servicios no presenten peligro para la salud o integridad del consumidor","Contratar un seguro","Tener guardia de seguridad"],a:"La obligación de que los productos y servicios no presenten peligro para la salud o integridad del consumidor"},
  {c:"consumidor",q:"¿Qué establece el art. 40 de la Ley 24.240 sobre responsabilidad por productos?",o:["La responsabilidad solidaria y objetiva del productor, fabricante, importador, distribuidor y vendedor por daños","Solo responde el fabricante","Solo responde el vendedor"],a:"La responsabilidad solidaria y objetiva del productor, fabricante, importador, distribuidor y vendedor por daños"},
  {c:"consumidor",q:"¿En qué plazo prescriben las acciones del consumidor?",o:["3 años","1 año","5 años"],a:"3 años"},
  {c:"consumidor",q:"¿Qué es la oferta al público?",o:["La propuesta dirigida a consumidores potenciales indeterminados que obliga al oferente","Una sugerencia sin valor legal","Una publicidad institucional"],a:"La propuesta dirigida a consumidores potenciales indeterminados que obliga al oferente"},
  {c:"consumidor",q:"¿El proveedor puede modificar unilateralmente las condiciones del contrato?",o:["No, es nula la cláusula que faculte al proveedor a modificar unilateralmente el contrato","Sí, con previo aviso","Sí, si lo dice el contrato"],a:"No, es nula la cláusula que faculte al proveedor a modificar unilateralmente el contrato"},

  {c:"consumidor",q:"¿Qué es el servicio técnico adecuado?",o:["La obligación del proveedor de asegurar reparación y repuestos durante la vida útil del producto","Un servicio premium optativo","Un seguro de reparación"],a:"La obligación del proveedor de asegurar reparación y repuestos durante la vida útil del producto"},
  {c:"consumidor",q:"¿Qué ley regula la lealtad comercial?",o:["Ley 22.802","Ley 24.240","Ley 20.744"],a:"Ley 22.802"},
  {c:"consumidor",q:"¿Qué son las acciones de incidencia colectiva en materia de consumo?",o:["Acciones judiciales que protegen derechos de un grupo de consumidores afectados por la misma causa","Demandas individuales","Reclamos administrativos"],a:"Acciones judiciales que protegen derechos de un grupo de consumidores afectados por la misma causa"},
  {c:"consumidor",q:"¿Qué es la publicidad comparativa?",o:["La que compara productos o servicios del anunciante con los de un competidor","Publicidad engañosa","Publicidad subliminal"],a:"La que compara productos o servicios del anunciante con los de un competidor"},
  {c:"consumidor",q:"¿Quién es consumidor según la Ley 24.240?",o:["Toda persona física o jurídica que adquiere o utiliza bienes o servicios como destinatario final","Solo personas físicas","Solo quien compra"],a:"Toda persona física o jurídica que adquiere o utiliza bienes o servicios como destinatario final"},
  {c:"consumidor",q:"¿Qué principio rige la interpretación de los contratos de consumo?",o:["In dubio pro consumidor: se interpreta en el sentido más favorable al consumidor","In dubio pro venditor","Pacta sunt servanda sin excepciones"],a:"In dubio pro consumidor: se interpreta en el sentido más favorable al consumidor"},
  {c:"consumidor",q:"¿Qué es el Sistema Nacional de Arbitraje de Consumo?",o:["Un mecanismo voluntario de resolución de conflictos entre consumidores y proveedores","Un tribunal obligatorio","Un organismo de control de precios"],a:"Un mecanismo voluntario de resolución de conflictos entre consumidores y proveedores"},
  {c:"consumidor",q:"¿Qué fallo emblemático amplió la noción de consumidor expuesto?",o:["Mosca (CSJN, 2007)","Halabi","Mendoza"],a:"Mosca (CSJN, 2007)"},
  {c:"consumidor",q:"¿Qué establece el art. 36 de la Ley 24.240 sobre operaciones de crédito?",o:["Obligación de informar el costo financiero total, tasa de interés y sistema de amortización","Solo informar el precio final","No establece obligaciones"],a:"Obligación de informar el costo financiero total, tasa de interés y sistema de amortización"},
  {c:"consumidor",q:"¿Qué es el consumidor hipervulnerable?",o:["El que por su condición (edad, salud, condición social) merece protección reforzada","El consumidor moroso","El consumidor mayorista"],a:"El que por su condición (edad, salud, condición social) merece protección reforzada"},
  {c:"consumidor",q:"¿Qué es la venta por correspondencia y medios electrónicos?",o:["La oferta y venta de bienes realizadas por correo, internet u otros medios a distancia","La venta presencial con factura electrónica","La venta telefónica exclusivamente"],a:"La oferta y venta de bienes realizadas por correo, internet u otros medios a distancia"},
  {c:"consumidor",q:"¿Qué es el deber de trato equitativo y no discriminatorio?",o:["La prohibición al proveedor de establecer diferencias injustificadas entre consumidores","La obligación de dar descuentos","Un principio laboral"],a:"La prohibición al proveedor de establecer diferencias injustificadas entre consumidores"},

  // ═══════════════════════════════════════
  // DERECHO DE FAMILIA (50)
  // ═══════════════════════════════════════
  {c:"familia",q:"¿Qué edad mínima se requiere para contraer matrimonio sin dispensa judicial?",o:["18 años","16 años","21 años"],a:"18 años"},
  {c:"familia",q:"¿Qué régimen patrimonial pueden elegir los cónyuges según el CCyCN?",o:["Comunidad de gananciales o separación de bienes","Solo comunidad de gananciales","Solo separación de bienes"],a:"Comunidad de gananciales o separación de bienes"},
  {c:"familia",q:"¿Cuál es el régimen patrimonial supletorio si los cónyuges no eligen?",o:["Comunidad de gananciales","Separación de bienes","Participación en las ganancias"],a:"Comunidad de gananciales"},
  {c:"familia",q:"¿Qué es la responsabilidad parental?",o:["El conjunto de deberes y derechos de los progenitores sobre la persona y bienes de los hijos menores","Solo la patria potestad","La tutela"],a:"El conjunto de deberes y derechos de los progenitores sobre la persona y bienes de los hijos menores"},
  {c:"familia",q:"¿Cuál es el plazo de duración de la cuota alimentaria a favor de los hijos?",o:["Hasta los 21 años, o 25 si estudian","Hasta los 18 años","Hasta los 16 años"],a:"Hasta los 21 años, o 25 si estudian"},
  {c:"familia",q:"¿Qué es la adopción plena?",o:["Aquella que confiere al adoptado la condición de hijo y extingue los vínculos con la familia de origen","La que mantiene vínculos con ambas familias","Una guarda provisoria"],a:"Aquella que confiere al adoptado la condición de hijo y extingue los vínculos con la familia de origen"},
  {c:"familia",q:"¿Qué es la adopción simple?",o:["Aquella que confiere el vínculo de filiación pero no extingue la filiación de origen","La adopción definitiva","Una guarda temporal"],a:"Aquella que confiere el vínculo de filiación pero no extingue la filiación de origen"},
  {c:"familia",q:"¿Qué es la unión convivencial?",o:["La unión de dos personas basada en relaciones afectivas de carácter singular, pública, notoria, estable y permanente","El concubinato sin derechos","Un matrimonio informal"],a:"La unión de dos personas basada en relaciones afectivas de carácter singular, pública, notoria, estable y permanente"},
  {c:"familia",q:"¿Cuántos años de convivencia se requieren para configurar una unión convivencial?",o:["2 años","5 años","1 año"],a:"2 años"},
  {c:"familia",q:"¿Qué es la compensación económica tras el divorcio?",o:["Una prestación destinada a compensar el desequilibrio económico que el divorcio causa a un cónyuge","Una pensión alimentaria vitalicia","La división de bienes"],a:"Una prestación destinada a compensar el desequilibrio económico que el divorcio causa a un cónyuge"},
  {c:"familia",q:"¿En qué plazo debe reclamarse la compensación económica post-divorcio?",o:["6 meses desde la sentencia de divorcio","1 año","2 años"],a:"6 meses desde la sentencia de divorcio"},
  {c:"familia",q:"¿Qué es el cuidado personal compartido alternado?",o:["Cuando el hijo reside alternadamente con cada progenitor por períodos determinados","Cuando solo un progenitor tiene la tenencia","Cuando un tercero cuida al hijo"],a:"Cuando el hijo reside alternadamente con cada progenitor por períodos determinados"},
  {c:"familia",q:"¿Qué es el cuidado personal compartido indistinto?",o:["Cuando el hijo reside principalmente con uno pero ambos progenitores toman decisiones","Cuando el hijo vive solo","Cuando un juez decide todo"],a:"Cuando el hijo reside principalmente con uno pero ambos progenitores toman decisiones"},
  {c:"familia",q:"¿Qué es la obligación alimentaria?",o:["El deber de proveer lo necesario para la manutención, educación, salud, vestimenta y esparcimiento del hijo","Solo proveer comida","Solo pagar educación"],a:"El deber de proveer lo necesario para la manutención, educación, salud, vestimenta y esparcimiento del hijo"},
  {c:"familia",q:"¿Qué ley regula la protección contra la violencia familiar en la Provincia de Buenos Aires?",o:["Ley 12.569","Ley 24.417","Ley 26.485"],a:"Ley 12.569"},
  {c:"familia",q:"¿Qué ley nacional aborda la violencia contra la mujer?",o:["Ley 26.485","Ley 24.417","Ley 12.569"],a:"Ley 26.485"},
  {c:"familia",q:"¿Qué es el derecho de comunicación (antes llamado régimen de visitas)?",o:["El derecho del progenitor no conviviente y del hijo a mantener contacto y comunicación","Un permiso judicial para viajar","Una obligación económica"],a:"El derecho del progenitor no conviviente y del hijo a mantener contacto y comunicación"},
  {c:"familia",q:"¿Qué es la privación de la responsabilidad parental?",o:["La resolución judicial que extingue la responsabilidad parental por causas graves (abandono, maltrato, delitos)","Una suspensión temporal","Una multa"],a:"La resolución judicial que extingue la responsabilidad parental por causas graves (abandono, maltrato, delitos)"},
  {c:"familia",q:"¿Qué tipos de filiación reconoce el CCyCN?",o:["Por naturaleza, por técnicas de reproducción humana asistida y por adopción","Solo por naturaleza","Solo por naturaleza y adopción"],a:"Por naturaleza, por técnicas de reproducción humana asistida y por adopción"},
  {c:"familia",q:"¿Qué es la voluntad procreacional?",o:["El consentimiento previo, informado y libre para someterse a técnicas de reproducción asistida","El deseo de tener hijos naturalmente","Una licencia médica"],a:"El consentimiento previo, informado y libre para someterse a técnicas de reproducción asistida"},
  {c:"familia",q:"¿Qué artículos del CCyCN regulan el divorcio?",o:["Arts. 435 a 445","Arts. 1 a 10","Arts. 2000 a 2050"],a:"Arts. 435 a 445"},
  {c:"familia",q:"¿El divorcio en el CCyCN requiere expresión de causa?",o:["No, es incausado","Sí, se debe probar culpa","Solo por mutuo acuerdo"],a:"No, es incausado"},
  {c:"familia",q:"¿Qué es el convenio regulador en el divorcio?",o:["La propuesta que las partes presentan sobre la distribución de bienes, alimentos, vivienda y cuidado de hijos","Un contrato prenupcial","Un acuerdo laboral"],a:"La propuesta que las partes presentan sobre la distribución de bienes, alimentos, vivienda y cuidado de hijos"},
  {c:"familia",q:"¿Qué es la tutela?",o:["La representación de un menor de edad que no tiene padres o cuya responsabilidad parental fue privada","La guarda provisoria","Un contrato de custodia"],a:"La representación de un menor de edad que no tiene padres o cuya responsabilidad parental fue privada"},
  {c:"familia",q:"¿Qué es la curatela?",o:["La representación de una persona mayor de edad con capacidad restringida","La tutela de menores","Un poder notarial"],a:"La representación de una persona mayor de edad con capacidad restringida"},
  {c:"familia",q:"¿Qué es el Registro del Estado Civil y Capacidad de las Personas?",o:["El organismo que inscribe nacimientos, matrimonios, defunciones y otros actos del estado civil","Un registro de antecedentes penales","Un registro de la propiedad"],a:"El organismo que inscribe nacimientos, matrimonios, defunciones y otros actos del estado civil"},
  {c:"familia",q:"¿Qué son los bienes gananciales?",o:["Los adquiridos durante el matrimonio bajo el régimen de comunidad, excepto los recibidos por herencia o donación","Todos los bienes del matrimonio","Solo los inmuebles"],a:"Los adquiridos durante el matrimonio bajo el régimen de comunidad, excepto los recibidos por herencia o donación"},
  {c:"familia",q:"¿Qué son los bienes propios?",o:["Los que cada cónyuge tenía antes del matrimonio o adquirió durante él por herencia, legado o donación","Los bienes inmuebles","Los bienes en el extranjero"],a:"Los que cada cónyuge tenía antes del matrimonio o adquirió durante él por herencia, legado o donación"},
  {c:"familia",q:"¿Qué ley regula la mediación familiar obligatoria en la Provincia de Buenos Aires?",o:["Ley 13.951","Ley 24.573","Ley 26.589"],a:"Ley 13.951"},
  {c:"familia",q:"¿Qué es la capacidad progresiva del menor?",o:["El reconocimiento de que los menores adquieren autonomía gradual según su madurez","La capacidad plena desde el nacimiento","La capacidad solo a los 18 años"],a:"El reconocimiento de que los menores adquieren autonomía gradual según su madurez"},
  {c:"familia",q:"¿Qué es el progenitor afín?",o:["El cónyuge o conviviente que vive con quien tiene a su cargo el cuidado de un hijo","El padrino","Un tutor designado por el juez"],a:"El cónyuge o conviviente que vive con quien tiene a su cargo el cuidado de un hijo"},
  {c:"familia",q:"¿A partir de qué edad el menor debe ser oído en todo proceso que lo afecte?",o:["Desde que pueda expresar su opinión, considerando su edad y madurez","Desde los 14 años","Desde los 18 años"],a:"Desde que pueda expresar su opinión, considerando su edad y madurez"},
  {c:"familia",q:"¿Qué es la adopción de integración?",o:["La adopción del hijo del cónyuge o conviviente","La adopción internacional","La adopción de adultos"],a:"La adopción del hijo del cónyuge o conviviente"},
  {c:"familia",q:"¿Qué es el asentimiento conyugal?",o:["La conformidad del otro cónyuge para disponer de ciertos bienes gananciales o la vivienda familiar","Un poder notarial","Una autorización judicial"],a:"La conformidad del otro cónyuge para disponer de ciertos bienes gananciales o la vivienda familiar"},
  {c:"familia",q:"¿Qué protección tiene la vivienda familiar?",o:["No puede ser ejecutada por deudas posteriores a su afectación y requiere asentimiento para su disposición","Ninguna protección especial","Solo protección contra el Estado"],a:"No puede ser ejecutada por deudas posteriores a su afectación y requiere asentimiento para su disposición"},
  {c:"familia",q:"¿Qué es la guarda preadoptiva?",o:["El período previo a la adopción en que el niño convive con los guardadores","Una custodia policial","Una medida cautelar"],a:"El período previo a la adopción en que el niño convive con los guardadores"},
  {c:"familia",q:"¿Cuánto dura la guarda preadoptiva?",o:["6 meses","1 año","3 meses"],a:"6 meses"},
  {c:"familia",q:"¿Qué establece el interés superior del niño?",o:["Que en toda decisión que afecte a un menor debe priorizarse su bienestar integral","Que los padres siempre tienen razón","Que el juez decide sin oír al menor"],a:"Que en toda decisión que afecte a un menor debe priorizarse su bienestar integral"},
  {c:"familia",q:"¿Qué ley consagra el interés superior del niño en Argentina?",o:["Ley 26.061 (Protección Integral de Derechos de Niños, Niñas y Adolescentes)","Ley 24.240","Ley 20.744"],a:"Ley 26.061 (Protección Integral de Derechos de Niños, Niñas y Adolescentes)"},

  {c:"familia",q:"¿Qué es el deber de cohabitación en el matrimonio según el CCyCN?",o:["El deber de vivir juntos en un domicilio común","Una obligación absoluta sin excepciones","Un deber extinguido por el CCyCN"],a:"El deber de vivir juntos en un domicilio común"},
  {c:"familia",q:"¿Qué es el plan de parentalidad?",o:["Un acuerdo entre progenitores sobre las modalidades de cuidado, educación y comunicación del hijo","Un plan de estudios","Un programa de asistencia social"],a:"Un acuerdo entre progenitores sobre las modalidades de cuidado, educación y comunicación del hijo"},

  // ═══════════════════════════════════════
  // SOCIEDADES (50)
  // ═══════════════════════════════════════
  {c:"sociedades",q:"¿Qué ley regula las sociedades comerciales en Argentina?",o:["Ley 19.550 (Ley General de Sociedades)","Ley 20.744","Ley 24.240"],a:"Ley 19.550 (Ley General de Sociedades)"},
  {c:"sociedades",q:"¿Cuáles son los tipos societarios más comunes?",o:["SA, SRL, SCS, SCA, SC, sociedad simple","Solo SA y SRL","Solo cooperativas"],a:"SA, SRL, SCS, SCA, SC, sociedad simple"},
  {c:"sociedades",q:"¿Cuántos socios se necesitan como mínimo para constituir una SRL?",o:["2 socios (excepto SRL unipersonal que no está expresamente regulada; la SAU es la unipersonal)","1 socio","5 socios"],a:"2 socios (excepto SRL unipersonal que no está expresamente regulada; la SAU es la unipersonal)"},
  {c:"sociedades",q:"¿Qué es una SAU (Sociedad Anónima Unipersonal)?",o:["Una SA constituida por un solo socio, introducida por la reforma de la Ley 26.994","Una SA con dos socios","Una cooperativa"],a:"Una SA constituida por un solo socio, introducida por la reforma de la Ley 26.994"},
  {c:"sociedades",q:"¿Qué órgano administra una SA?",o:["El Directorio","La Asamblea de accionistas","La Sindicatura"],a:"El Directorio"},
  {c:"sociedades",q:"¿Qué órgano de gobierno tiene una SA?",o:["La Asamblea de accionistas","El Directorio","El Gerente"],a:"La Asamblea de accionistas"},
  {c:"sociedades",q:"¿Qué órgano de fiscalización interna tiene una SA?",o:["La Sindicatura o el Consejo de Vigilancia","El Directorio","La Asamblea"],a:"La Sindicatura o el Consejo de Vigilancia"},
  {c:"sociedades",q:"¿Qué es la inoponibilidad de la persona jurídica?",o:["El corrimiento del velo societario para responsabilizar a los socios cuando la sociedad se usa para fines ilícitos (art. 54 ter LGS)","La disolución de la sociedad","Una sanción tributaria"],a:"El corrimiento del velo societario para responsabilizar a los socios cuando la sociedad se usa para fines ilícitos (art. 54 ter LGS)"},
  {c:"sociedades",q:"¿Cuál es el capital mínimo para constituir una SA?",o:["$100.000 (sujeto a actualización)","No hay mínimo","$1.000.000"],a:"$100.000 (sujeto a actualización)"},
  {c:"sociedades",q:"¿Quién administra una SRL?",o:["Uno o más gerentes, socios o no","El Directorio","La Asamblea"],a:"Uno o más gerentes, socios o no"},
  {c:"sociedades",q:"¿Cuántos socios puede tener como máximo una SRL?",o:["50 socios","100 socios","No hay límite"],a:"50 socios"},
  {c:"sociedades",q:"¿Qué son las sociedades de la Sección IV (ex sociedades irregulares)?",o:["Las sociedades simples o no constituidas según un tipo previsto, reguladas por los arts. 21 a 26 LGS","Sociedades ilegales","Sociedades extranjeras"],a:"Las sociedades simples o no constituidas según un tipo previsto, reguladas por los arts. 21 a 26 LGS"},
  {c:"sociedades",q:"¿Qué es la resolución parcial de una sociedad?",o:["La salida de uno o más socios sin que la sociedad se disuelva","La liquidación total","La fusión"],a:"La salida de uno o más socios sin que la sociedad se disuelva"},
  {c:"sociedades",q:"¿Qué es la disolución de una sociedad?",o:["La verificación de una causal que abre el proceso de liquidación","La quiebra inmediata","La transformación societaria"],a:"La verificación de una causal que abre el proceso de liquidación"},
  {c:"sociedades",q:"¿Qué es la liquidación societaria?",o:["El proceso de realización del activo y cancelación del pasivo para distribuir el remanente entre socios","Un concurso preventivo","Una fusión"],a:"El proceso de realización del activo y cancelación del pasivo para distribuir el remanente entre socios"},
  {c:"sociedades",q:"¿Qué es la transformación societaria?",o:["El cambio de tipo social sin disolución ni alteración de derechos y obligaciones","La fusión de dos sociedades","La escisión"],a:"El cambio de tipo social sin disolución ni alteración de derechos y obligaciones"},
  {c:"sociedades",q:"¿Qué es la fusión societaria?",o:["La unión de dos o más sociedades en una sola","El cambio de tipo social","La disolución de una sociedad"],a:"La unión de dos o más sociedades en una sola"},
  {c:"sociedades",q:"¿Qué es la escisión societaria?",o:["La división de una sociedad en dos o más, o la separación de parte del patrimonio para formar otra sociedad","La quiebra","La transformación"],a:"La división de una sociedad en dos o más, o la separación de parte del patrimonio para formar otra sociedad"},
  {c:"sociedades",q:"¿Cuándo prescribe la responsabilidad de los directores de una SA?",o:["3 años desde la aprobación de la gestión o desde la comisión del acto dañoso","1 año","5 años"],a:"3 años desde la aprobación de la gestión o desde la comisión del acto dañoso"},
  {c:"sociedades",q:"¿Qué es el derecho de receso?",o:["El derecho del socio disidente a retirarse de la sociedad recibiendo el valor de su participación","El derecho a votar en contra","Un recurso judicial"],a:"El derecho del socio disidente a retirarse de la sociedad recibiendo el valor de su participación"},
  {c:"sociedades",q:"¿Qué es la IGJ?",o:["La Inspección General de Justicia, organismo de control de las sociedades en CABA","Un juzgado comercial","Una cámara de apelaciones"],a:"La Inspección General de Justicia, organismo de control de las sociedades en CABA"},
  {c:"sociedades",q:"¿Qué organismo controla las sociedades en la Provincia de Buenos Aires?",o:["La Dirección Provincial de Personas Jurídicas (DPPJ)","La IGJ","El BCRA"],a:"La Dirección Provincial de Personas Jurídicas (DPPJ)"},
  {c:"sociedades",q:"¿Qué es la responsabilidad del socio en una SRL?",o:["Limitada al capital suscripto, salvo integración y garantía del art. 150 LGS","Ilimitada y solidaria","No tiene responsabilidad"],a:"Limitada al capital suscripto, salvo integración y garantía del art. 150 LGS"},
  {c:"sociedades",q:"¿Qué tipo de acciones pueden emitir las SA?",o:["Ordinarias y preferidas, nominativas no endosables","Solo al portador","Solo escriturales"],a:"Ordinarias y preferidas, nominativas no endosables"},
  {c:"sociedades",q:"¿Qué es el dividendo?",o:["La parte de las ganancias que se distribuye a los accionistas por resolución de la asamblea","Un impuesto societario","Una deuda de la sociedad"],a:"La parte de las ganancias que se distribuye a los accionistas por resolución de la asamblea"},
  {c:"sociedades",q:"¿Qué es la reserva legal?",o:["La obligación de destinar el 5% de las ganancias hasta alcanzar el 20% del capital social","Un fondo de garantía bancaria","Un seguro obligatorio"],a:"La obligación de destinar el 5% de las ganancias hasta alcanzar el 20% del capital social"},
  {c:"sociedades",q:"¿Qué es la sociedad en comandita simple?",o:["La que tiene socios comanditados (responsabilidad ilimitada) y comanditarios (limitada al aporte)","Una SA con directorio","Una cooperativa"],a:"La que tiene socios comanditados (responsabilidad ilimitada) y comanditarios (limitada al aporte)"},
  {c:"sociedades",q:"¿Qué es la acción social de responsabilidad?",o:["La acción que ejerce la sociedad contra los administradores por daños causados a la sociedad","Una demanda laboral","Un recurso administrativo"],a:"La acción que ejerce la sociedad contra los administradores por daños causados a la sociedad"},
  {c:"sociedades",q:"¿Qué es el beneficio de inventario en la responsabilidad del socio colectivo?",o:["No existe tal beneficio: el socio colectivo responde ilimitada y solidariamente","Limitar la responsabilidad al activo","Una excepción del art. 56 LGS"],a:"No existe tal beneficio: el socio colectivo responde ilimitada y solidariamente"},
  {c:"sociedades",q:"¿Qué quórum necesita la asamblea ordinaria de una SA en primera convocatoria?",o:["Mayoría de acciones con derecho a voto","Unanimidad","75% del capital social"],a:"Mayoría de acciones con derecho a voto"},

  // ═══════════════════════════════════════
  // ACC. DE TRÁNSITO (50)
  // ═══════════════════════════════════════
  {c:"transito",q:"¿Qué ley nacional regula el tránsito en Argentina?",o:["Ley 24.449","Ley 20.744","Ley 19.550"],a:"Ley 24.449"},
  {c:"transito",q:"¿Cuál es la tasa máxima de alcohol en sangre permitida para conducir?",o:["0,5 g/l (0 para transporte de pasajeros)","0,8 g/l","1 g/l"],a:"0,5 g/l (0 para transporte de pasajeros)"},
  {c:"transito",q:"¿Qué es el seguro obligatorio automotor?",o:["La cobertura de responsabilidad civil que todo vehículo debe tener para circular","Un seguro contra robo","Un seguro de vida"],a:"La cobertura de responsabilidad civil que todo vehículo debe tener para circular"},
  {c:"transito",q:"¿Qué artículo del CCyCN regula la responsabilidad por accidentes de tránsito?",o:["Art. 1757 (responsabilidad por actividades riesgosas) y art. 1769","Art. 1","Art. 500"],a:"Art. 1757 (responsabilidad por actividades riesgosas) y art. 1769"},
  {c:"transito",q:"¿Qué tipo de responsabilidad genera la conducción de un vehículo?",o:["Responsabilidad objetiva por actividad riesgosa","Responsabilidad subjetiva","No genera responsabilidad"],a:"Responsabilidad objetiva por actividad riesgosa"},
  {c:"transito",q:"¿Quién responde por los daños causados por un vehículo?",o:["El dueño y/o guardián del vehículo solidariamente","Solo el conductor","Solo la aseguradora"],a:"El dueño y/o guardián del vehículo solidariamente"},
  {c:"transito",q:"¿Qué es el factor de atribución objetivo en accidentes de tránsito?",o:["El riesgo creado por la circulación del vehículo, que genera responsabilidad sin necesidad de probar culpa","La culpa del conductor","El dolo del conductor"],a:"El riesgo creado por la circulación del vehículo, que genera responsabilidad sin necesidad de probar culpa"},
  {c:"transito",q:"¿Qué eximentes puede invocar el dueño o guardián del vehículo?",o:["Hecho de la víctima, hecho de un tercero por quien no debe responder, o caso fortuito","Solo fuerza mayor","No hay eximentes"],a:"Hecho de la víctima, hecho de un tercero por quien no debe responder, o caso fortuito"},
  {c:"transito",q:"¿Qué es la prioridad de paso?",o:["El derecho de un vehículo a cruzar primero en una intersección; por defecto, el que viene por la derecha","Siempre tiene prioridad el más grande","No existe la prioridad de paso"],a:"El derecho de un vehículo a cruzar primero en una intersección; por defecto, el que viene por la derecha"},
  {c:"transito",q:"¿Quién tiene prioridad en una intersección sin semáforo ni señalización?",o:["El vehículo que viene por la derecha","El que viene por la izquierda","El más rápido"],a:"El vehículo que viene por la derecha"},
  {c:"transito",q:"¿Qué es la pericia mecánica en un siniestro vial?",o:["El examen técnico del vehículo para determinar daños y estado mecánico previo al hecho","Una reparación del auto","Un informe policial"],a:"El examen técnico del vehículo para determinar daños y estado mecánico previo al hecho"},
  {c:"transito",q:"¿Cuál es la velocidad máxima en zona urbana según la Ley 24.449?",o:["40 km/h en calles y 60 km/h en avenidas","60 km/h en calles","80 km/h en avenidas"],a:"40 km/h en calles y 60 km/h en avenidas"},
  {c:"transito",q:"¿Cuál es la velocidad máxima en ruta según la Ley 24.449?",o:["110 km/h para autos y 80 km/h para camiones","130 km/h","100 km/h"],a:"110 km/h para autos y 80 km/h para camiones"},
  {c:"transito",q:"¿Cuál es la velocidad máxima en autopista según la Ley 24.449?",o:["130 km/h para autos","150 km/h","110 km/h"],a:"130 km/h para autos"},
  {c:"transito",q:"¿Es obligatorio el uso del cinturón de seguridad?",o:["Sí, para todos los ocupantes","Solo para el conductor","Solo en ruta"],a:"Sí, para todos los ocupantes"},
  {c:"transito",q:"¿Qué es la franquicia en el seguro automotor?",o:["El monto que queda a cargo del asegurado en cada siniestro","El premio del seguro","El valor de la póliza"],a:"El monto que queda a cargo del asegurado en cada siniestro"},
  {c:"transito",q:"¿La franquicia es oponible al tercero damnificado?",o:["No, según la jurisprudencia mayoritaria (plenario Obarrio)","Sí, siempre","Depende de la póliza"],a:"No, según la jurisprudencia mayoritaria (plenario Obarrio)"},
  {c:"transito",q:"¿Qué es la incapacidad sobreviniente por accidente de tránsito?",o:["La disminución de aptitudes físicas o psíquicas de la víctima como consecuencia del siniestro","La pérdida del vehículo","La baja del seguro"],a:"La disminución de aptitudes físicas o psíquicas de la víctima como consecuencia del siniestro"},
  {c:"transito",q:"¿Qué rubros indemnizatorios se reclaman en un accidente de tránsito?",o:["Incapacidad sobreviniente, daño moral, gastos médicos, lucro cesante, daño al vehículo","Solo el arreglo del auto","Solo daño moral"],a:"Incapacidad sobreviniente, daño moral, gastos médicos, lucro cesante, daño al vehículo"},
  {c:"transito",q:"¿Qué es la culpa de la víctima como eximente?",o:["Cuando el hecho exclusivo de la víctima causó el daño, liberando al responsable","Una disculpa del conductor","Un atenuante penal"],a:"Cuando el hecho exclusivo de la víctima causó el daño, liberando al responsable"},
  {c:"transito",q:"¿Qué pasa si hay concurrencia de culpas?",o:["Se reduce la indemnización en proporción a la culpa de cada parte","No se indemniza","Se duplica la indemnización"],a:"Se reduce la indemnización en proporción a la culpa de cada parte"},
  {c:"transito",q:"¿Qué documento es esencial para acreditar la titularidad de un vehículo?",o:["El título del automotor emitido por el Registro de la Propiedad del Automotor","La cédula verde","El seguro"],a:"El título del automotor emitido por el Registro de la Propiedad del Automotor"},
  {c:"transito",q:"¿Qué es la cédula de identificación del automotor?",o:["El documento que habilita a conducir un vehículo específico y acredita su inscripción registral","La licencia de conducir","El seguro del auto"],a:"El documento que habilita a conducir un vehículo específico y acredita su inscripción registral"},
  {c:"transito",q:"¿Qué organismo emite las licencias de conducir?",o:["Los municipios, bajo los lineamientos de la ANSV","La policía","El Registro del Automotor"],a:"Los municipios, bajo los lineamientos de la ANSV"},
  {c:"transito",q:"¿Qué es la ANSV?",o:["La Agencia Nacional de Seguridad Vial","Un tipo de seguro","Un tribunal de tránsito"],a:"La Agencia Nacional de Seguridad Vial"},
  {c:"transito",q:"¿Qué delito configura manejar alcoholizado y causar la muerte?",o:["Homicidio culposo agravado (art. 84 bis CP)","Homicidio simple","Lesiones leves"],a:"Homicidio culposo agravado (art. 84 bis CP)"},
  {c:"transito",q:"¿Es obligatorio el uso de luces bajas durante el día en rutas?",o:["Sí","No","Solo en autopistas"],a:"Sí"},
  {c:"transito",q:"¿Cuál es la edad mínima para obtener licencia de conducir?",o:["17 años con autorización de los padres, 18 sin autorización","16 años","21 años"],a:"17 años con autorización de los padres, 18 sin autorización"},
  {c:"transito",q:"¿Qué es la denuncia de venta en el Registro del Automotor?",o:["La comunicación del vendedor al registro informando que transfirió la posesión del vehículo, para deslindar responsabilidad","Una demanda civil","Un certificado de libre deuda"],a:"La comunicación del vendedor al registro informando que transfirió la posesión del vehículo, para deslindar responsabilidad"},
  {c:"transito",q:"¿Qué efecto tiene la denuncia de venta?",o:["Libera al titular registral de responsabilidad civil por hechos posteriores","Transfiere el dominio","Cancela el seguro"],a:"Libera al titular registral de responsabilidad civil por hechos posteriores"},

  {c:"transito",q:"¿Qué es el sistema de scoring de la licencia de conducir?",o:["Un sistema de puntos que se descuentan por infracciones, pudiendo llevar a la suspensión o cancelación de la licencia","Un puntaje para descuentos en seguros","Un sistema de calificación de rutas"],a:"Un sistema de puntos que se descuentan por infracciones, pudiendo llevar a la suspensión o cancelación de la licencia"},
  {c:"transito",q:"¿Es obligatorio llevar matafuegos y balizas en el vehículo?",o:["Sí, son elementos de seguridad obligatorios","No, son opcionales","Solo el matafuegos"],a:"Sí, son elementos de seguridad obligatorios"},
  {c:"transito",q:"¿Qué es la verificación técnica vehicular (VTV)?",o:["La inspección periódica obligatoria del estado mecánico y de seguridad del vehículo","Un seguro adicional","Una multa"],a:"La inspección periódica obligatoria del estado mecánico y de seguridad del vehículo"},
  {c:"transito",q:"¿Qué es la citación en garantía de la aseguradora?",o:["El pedido de incorporación de la compañía de seguros al juicio por accidente de tránsito","La cancelación de la póliza","Una denuncia penal contra la aseguradora"],a:"El pedido de incorporación de la compañía de seguros al juicio por accidente de tránsito"},
  {c:"transito",q:"¿Qué establece el art. 1769 CCyCN sobre accidentes de tránsito?",o:["Que los artículos referidos a la responsabilidad derivada de la intervención de cosas se aplican a los accidentes de tránsito","Que no hay responsabilidad objetiva","Que solo responde el conductor"],a:"Que los artículos referidos a la responsabilidad derivada de la intervención de cosas se aplican a los accidentes de tránsito"},
  {c:"transito",q:"¿Cuántos años de prescripción tiene la acción por daños derivados de un siniestro vial?",o:["3 años (extracontractual según art. 2561 CCyCN)","1 año","5 años"],a:"3 años (extracontractual según art. 2561 CCyCN)"},
  {c:"transito",q:"¿Está permitido el uso de teléfono celular mientras se conduce?",o:["No, salvo con dispositivo manos libres","Sí, siempre","Solo en ciudad"],a:"No, salvo con dispositivo manos libres"},
  {c:"transito",q:"¿Qué pasa con la responsabilidad del dueño que vendió el auto pero no lo transfirió?",o:["Sigue siendo responsable como titular registral salvo que haya hecho la denuncia de venta","No tiene responsabilidad","Solo responde penalmente"],a:"Sigue siendo responsable como titular registral salvo que haya hecho la denuncia de venta"},
  {c:"transito",q:"¿Quién es el guardián del vehículo?",o:["Quien tiene el poder de uso, control y dirección del vehículo al momento del siniestro","Solo el propietario registral","El mecánico que lo repara"],a:"Quien tiene el poder de uso, control y dirección del vehículo al momento del siniestro"},
  {c:"transito",q:"¿Qué es un siniestro vial?",o:["Un hecho dañoso ocurrido con intervención de al menos un vehículo en la vía pública","Solo un choque entre dos autos","Una falla mecánica"],a:"Un hecho dañoso ocurrido con intervención de al menos un vehículo en la vía pública"},

  // ═══════════════════════════════════════
  // ART / RIESGOS DEL TRABAJO (50)
  // ═══════════════════════════════════════
  {c:"art",q:"¿Qué ley regula los riesgos del trabajo en Argentina?",o:["Ley 24.557","Ley 20.744","Ley 24.240"],a:"Ley 24.557"},
  {c:"art",q:"¿Qué son las ART?",o:["Aseguradoras de Riesgos del Trabajo: entidades que cubren contingencias laborales","Asociaciones de Recaudación Tributaria","Agencias de Regulación del Transporte"],a:"Aseguradoras de Riesgos del Trabajo: entidades que cubren contingencias laborales"},
  {c:"art",q:"¿Qué contingencias cubre la Ley 24.557?",o:["Accidentes de trabajo, accidentes in itinere y enfermedades profesionales","Solo accidentes de trabajo","Solo enfermedades profesionales"],a:"Accidentes de trabajo, accidentes in itinere y enfermedades profesionales"},
  {c:"art",q:"¿Qué es un accidente in itinere?",o:["El que ocurre en el trayecto entre el domicilio del trabajador y el lugar de trabajo","Un accidente en horario laboral","Un accidente en vacaciones"],a:"El que ocurre en el trayecto entre el domicilio del trabajador y el lugar de trabajo"},
  {c:"art",q:"¿Qué es una enfermedad profesional?",o:["La producida por causa del lugar o tipo de trabajo, incluida en el listado del Decreto 658/96","Cualquier enfermedad","Una enfermedad preexistente"],a:"La producida por causa del lugar o tipo de trabajo, incluida en el listado del Decreto 658/96"},
  {c:"art",q:"¿Qué organismo controla las ART?",o:["La Superintendencia de Riesgos del Trabajo (SRT)","El Ministerio de Salud","La ANSES"],a:"La Superintendencia de Riesgos del Trabajo (SRT)"},
  {c:"art",q:"¿Qué es la incapacidad laboral temporaria (ILT)?",o:["La que impide al trabajador prestar servicios por un tiempo determinado mientras se recupera","La jubilación","El despido"],a:"La que impide al trabajador prestar servicios por un tiempo determinado mientras se recupera"},
  {c:"art",q:"¿Cuánto dura como máximo la ILT?",o:["12 meses, prorrogables por otros 12","6 meses","24 meses sin prórroga"],a:"12 meses, prorrogables por otros 12"},
  {c:"art",q:"¿Qué es la incapacidad laboral permanente parcial?",o:["La disminución definitiva de la capacidad laborativa inferior al 66%","La pérdida total de capacidad","Una incapacidad temporal"],a:"La disminución definitiva de la capacidad laborativa inferior al 66%"},
  {c:"art",q:"¿Qué es la incapacidad laboral permanente total?",o:["La disminución definitiva de la capacidad laborativa igual o superior al 66%","La incapacidad del 50%","Una incapacidad temporal"],a:"La disminución definitiva de la capacidad laborativa igual o superior al 66%"},
  {c:"art",q:"¿Qué es el gran inválido?",o:["El trabajador con incapacidad laboral permanente total que necesita asistencia continua de otra persona","Un jubilado","Un trabajador con licencia"],a:"El trabajador con incapacidad laboral permanente total que necesita asistencia continua de otra persona"},
  {c:"art",q:"¿Qué ley complementó la LRT con mejoras indemnizatorias?",o:["Ley 26.773","Ley 24.240","Ley 20.744"],a:"Ley 26.773"},
  {c:"art",q:"¿Qué estableció el fallo 'Aquino' de la CSJN?",o:["La inconstitucionalidad de la limitación de la vía civil para el trabajador accidentado (art. 39 LRT)","La constitucionalidad del sistema","Un aumento de aportes"],a:"La inconstitucionalidad de la limitación de la vía civil para el trabajador accidentado (art. 39 LRT)"},
  {c:"art",q:"¿Qué es el baremo de incapacidades laborales?",o:["La tabla que establece los porcentajes de incapacidad según el tipo y grado de lesión (Decreto 659/96)","Una escala salarial","Un índice de precios"],a:"La tabla que establece los porcentajes de incapacidad según el tipo y grado de lesión (Decreto 659/96)"},
  {c:"art",q:"¿Qué prestaciones en especie debe brindar la ART?",o:["Asistencia médica, farmacéutica, prótesis, rehabilitación y recalificación profesional","Solo medicamentos","Solo cirugías"],a:"Asistencia médica, farmacéutica, prótesis, rehabilitación y recalificación profesional"},
  {c:"art",q:"¿Qué pasa si el empleador no tiene ART?",o:["Debe asumir las prestaciones y es responsable directo, pudiendo ser demandado civilmente","No pasa nada","El Estado cubre al trabajador"],a:"Debe asumir las prestaciones y es responsable directo, pudiendo ser demandado civilmente"},
  {c:"art",q:"¿Qué es la Comisión Médica Central?",o:["El organismo que resuelve las discrepancias sobre incapacidades laborales","Un hospital público","Un tribunal laboral"],a:"El organismo que resuelve las discrepancias sobre incapacidades laborales"},
  {c:"art",q:"¿Qué estableció el fallo 'Castillo' de la CSJN?",o:["Que la competencia para entender en acciones de la LRT es de la justicia ordinaria y no la federal","Que la competencia es federal","Que las Comisiones Médicas son inconstitucionales"],a:"Que la competencia para entender en acciones de la LRT es de la justicia ordinaria y no la federal"},
  {c:"art",q:"¿Qué es el Fondo de Garantía de la LRT?",o:["El fondo que cubre prestaciones cuando el empleador está en estado de insolvencia o no está asegurado","Un fondo de inversión","Un subsidio estatal"],a:"El fondo que cubre prestaciones cuando el empleador está en estado de insolvencia o no está asegurado"},
  {c:"art",q:"¿Qué es el Fondo de Reserva de la LRT?",o:["El fondo para cubrir prestaciones cuando una ART es liquidada","Un ahorro del trabajador","Una reserva bancaria"],a:"El fondo para cubrir prestaciones cuando una ART es liquidada"},
  {c:"art",q:"¿Puede el trabajador optar entre el sistema de la LRT y la acción civil?",o:["Sí, desde el fallo Aquino y la Ley 26.773, puede optar con renuncia de la otra vía","No, debe ir obligatoriamente por la LRT","Solo puede ir por la vía civil"],a:"Sí, desde el fallo Aquino y la Ley 26.773, puede optar con renuncia de la otra vía"},
  {c:"art",q:"¿Qué es el índice RIPTE?",o:["El índice de Remuneraciones Imponibles Promedio de los Trabajadores Estables, utilizado para actualizar indemnizaciones","Un índice bursátil","Un índice de inflación"],a:"El índice de Remuneraciones Imponibles Promedio de los Trabajadores Estables, utilizado para actualizar indemnizaciones"},
  {c:"art",q:"¿Quién debe denunciar el accidente de trabajo?",o:["El trabajador al empleador y el empleador a la ART","Solo el trabajador","Solo la ART"],a:"El trabajador al empleador y el empleador a la ART"},
  {c:"art",q:"¿Qué plazo tiene el empleador para denunciar el accidente a la ART?",o:["Dentro de las 24 horas de tomado conocimiento","48 horas","1 semana"],a:"Dentro de las 24 horas de tomado conocimiento"},
  {c:"art",q:"¿Qué es la recalificación profesional?",o:["La capacitación del trabajador para desempeñar otra tarea cuando no puede volver a la anterior por su incapacidad","Un ascenso","Un cambio de convenio"],a:"La capacitación del trabajador para desempeñar otra tarea cuando no puede volver a la anterior por su incapacidad"},
  {c:"art",q:"¿El trabajador puede demandar civilmente al empleador por un accidente de trabajo?",o:["Sí, invocando normas del derecho civil (arts. 1716 y ss. CCyCN)","No, nunca","Solo con autorización de la ART"],a:"Sí, invocando normas del derecho civil (arts. 1716 y ss. CCyCN)"},
  {c:"art",q:"¿Qué es el deber de seguridad del empleador?",o:["La obligación de adoptar medidas para prevenir riesgos y proteger la integridad psicofísica del trabajador","Contratar vigilancia","Pagar horas extras"],a:"La obligación de adoptar medidas para prevenir riesgos y proteger la integridad psicofísica del trabajador"},
  {c:"art",q:"¿Qué estableció el fallo 'Llosco' de la CSJN?",o:["Que es posible acumular las acciones de la LRT con las de derecho civil contra distintos responsables","Que no se pueden acumular","Que solo procede la LRT"],a:"Que es posible acumular las acciones de la LRT con las de derecho civil contra distintos responsables"},
  {c:"art",q:"¿Qué establece la Ley 27.348 sobre el procedimiento ante las Comisiones Médicas?",o:["Un trámite previo obligatorio ante las Comisiones Médicas antes de acudir a la justicia","La eliminación de las Comisiones","Un trámite optativo"],a:"Un trámite previo obligatorio ante las Comisiones Médicas antes de acudir a la justicia"},
  {c:"art",q:"¿Qué es una enfermedad no listada?",o:["Una enfermedad no incluida en el listado de enfermedades profesionales pero que puede ser reconocida si se demuestra relación causal con el trabajo","Una enfermedad excluida definitivamente","Una enfermedad que no da derecho a indemnización"],a:"Una enfermedad no incluida en el listado de enfermedades profesionales pero que puede ser reconocida si se demuestra relación causal con el trabajo"},

  {c:"art",q:"¿Qué fallo declaró la inconstitucionalidad de la doble vía excluyente del art. 39 LRT?",o:["Aquino (CSJN, 2004)","Vizzoti","Álvarez"],a:"Aquino (CSJN, 2004)"},
  {c:"art",q:"¿Qué es la reagravación?",o:["El empeoramiento de una incapacidad laboral previamente determinada, que habilita un nuevo reclamo","Una segunda denuncia","Un recurso de apelación"],a:"El empeoramiento de una incapacidad laboral previamente determinada, que habilita un nuevo reclamo"},
  {c:"art",q:"¿Cuánto debe abonar la ART durante la ILT?",o:["El 100% del ingreso base mensual del trabajador desde el primer día si es accidente de trabajo","El 50%","El salario mínimo"],a:"El 100% del ingreso base mensual del trabajador desde el primer día si es accidente de trabajo"},

  // ═══════════════════════════════════════════════════════════
  // CONSTITUCIÓN NACIONAL (100 preguntas)
  // ═══════════════════════════════════════════════════════════
  {c:"constitucion",q:"¿En qué año se sancionó la Constitución Nacional Argentina?",o:["1853","1810","1816"],a:"1853"},
  {c:"constitucion",q:"¿Cuántas partes tiene la Constitución Nacional?",o:["Dos: Dogmática y Orgánica","Tres","Una"],a:"Dos: Dogmática y Orgánica"},
  {c:"constitucion",q:"¿Qué forma de gobierno adopta la CN?",o:["Representativa, republicana y federal","Unitaria y monárquica","Parlamentaria"],a:"Representativa, republicana y federal"},
  {c:"constitucion",q:"¿Qué artículo consagra el derecho de trabajar?",o:["Art. 14","Art. 1","Art. 75"],a:"Art. 14"},
  {c:"constitucion",q:"¿Qué artículo consagra los derechos del trabajador?",o:["Art. 14 bis","Art. 14","Art. 16"],a:"Art. 14 bis"},
  {c:"constitucion",q:"¿Qué establece el art. 16 de la CN?",o:["La igualdad ante la ley","La libertad de expresión","El derecho de propiedad"],a:"La igualdad ante la ley"},
  {c:"constitucion",q:"¿Qué artículo consagra el derecho de propiedad?",o:["Art. 17","Art. 14","Art. 18"],a:"Art. 17"},
  {c:"constitucion",q:"¿Qué garantías procesales establece el art. 18 de la CN?",o:["Juicio previo, juez natural, inviolabilidad de la defensa en juicio, prohibición de torturas","Solo el juicio por jurados","Solo la defensa en juicio"],a:"Juicio previo, juez natural, inviolabilidad de la defensa en juicio, prohibición de torturas"},
  {c:"constitucion",q:"¿Qué establece el art. 19 de la CN?",o:["El principio de reserva: las acciones privadas que no afecten el orden público están exentas de la autoridad de los magistrados","El estado de sitio","La intervención federal"],a:"El principio de reserva: las acciones privadas que no afecten el orden público están exentas de la autoridad de los magistrados"},
  {c:"constitucion",q:"¿Qué artículo regula la libertad de expresión y prensa?",o:["Art. 14 (y art. 32)","Art. 1","Art. 75"],a:"Art. 14 (y art. 32)"},
  {c:"constitucion",q:"¿Qué establece el art. 28 de la CN?",o:["Que los derechos no pueden ser alterados por las leyes que reglamenten su ejercicio (razonabilidad)","La libertad de culto","El estado de sitio"],a:"Que los derechos no pueden ser alterados por las leyes que reglamenten su ejercicio (razonabilidad)"},
  {c:"constitucion",q:"¿Qué artículo establece los derechos no enumerados?",o:["Art. 33","Art. 14","Art. 75"],a:"Art. 33"},
  {c:"constitucion",q:"¿Qué es el amparo según el art. 43 CN?",o:["Una acción expedita y rápida contra todo acto que lesione derechos constitucionales de forma manifiestamente ilegal o arbitraria","Un recurso ordinario","Una medida cautelar"],a:"Una acción expedita y rápida contra todo acto que lesione derechos constitucionales de forma manifiestamente ilegal o arbitraria"},
  {c:"constitucion",q:"¿Qué es el hábeas corpus?",o:["La acción que protege la libertad física cuando es restringida ilegalmente","Un recurso contra sentencias","Una acción de daños"],a:"La acción que protege la libertad física cuando es restringida ilegalmente"},
  {c:"constitucion",q:"¿Qué es el hábeas data?",o:["La acción para acceder, corregir o suprimir datos personales en registros públicos o privados","Un recurso de amparo","Una acción penal"],a:"La acción para acceder, corregir o suprimir datos personales en registros públicos o privados"},
  {c:"constitucion",q:"¿Cuántos senadores tiene cada provincia?",o:["3 senadores","2 senadores","4 senadores"],a:"3 senadores"},
  {c:"constitucion",q:"¿Cuántos años dura el mandato de un senador nacional?",o:["6 años","4 años","2 años"],a:"6 años"},
  {c:"constitucion",q:"¿Cuántos años dura el mandato de un diputado nacional?",o:["4 años","6 años","2 años"],a:"4 años"},
  {c:"constitucion",q:"¿Cuántos años dura el mandato presidencial?",o:["4 años con posibilidad de una reelección consecutiva","6 años","4 años sin reelección"],a:"4 años con posibilidad de una reelección consecutiva"},
  {c:"constitucion",q:"¿Qué establece el art. 75 inc. 22 de la CN?",o:["Otorga jerarquía constitucional a tratados internacionales de derechos humanos","La competencia del Congreso en materia penal","La creación de impuestos"],a:"Otorga jerarquía constitucional a tratados internacionales de derechos humanos"},
  {c:"constitucion",q:"¿Qué es el estado de sitio?",o:["Una medida excepcional que suspende garantías constitucionales ante conmoción interior o ataque exterior (art. 23 CN)","La declaración de guerra","Una intervención federal"],a:"Una medida excepcional que suspende garantías constitucionales ante conmoción interior o ataque exterior (art. 23 CN)"},
  {c:"constitucion",q:"¿Quién declara el estado de sitio por conmoción interior?",o:["El Congreso, o el Presidente si está en receso con posterior comunicación","Solo el Presidente","Solo la Corte Suprema"],a:"El Congreso, o el Presidente si está en receso con posterior comunicación"},
  {c:"constitucion",q:"¿Qué es la intervención federal?",o:["La facultad del gobierno federal de intervenir una provincia para garantizar la forma republicana o repeler invasiones (art. 6 CN)","El estado de sitio","Un golpe de estado"],a:"La facultad del gobierno federal de intervenir una provincia para garantizar la forma republicana o repeler invasiones (art. 6 CN)"},
  {c:"constitucion",q:"¿Qué artículo establece la supremacía constitucional?",o:["Art. 31","Art. 1","Art. 75"],a:"Art. 31"},
  {c:"constitucion",q:"¿Qué es el control de constitucionalidad?",o:["La facultad judicial de declarar la inconstitucionalidad de normas contrarias a la CN","Un control administrativo","Una auditoría del Congreso"],a:"La facultad judicial de declarar la inconstitucionalidad de normas contrarias a la CN"},
  {c:"constitucion",q:"¿Qué modelo de control de constitucionalidad rige en Argentina?",o:["Difuso: cualquier juez puede declarar la inconstitucionalidad","Concentrado: solo la Corte Suprema","Mixto: la Corte y los tribunales federales"],a:"Difuso: cualquier juez puede declarar la inconstitucionalidad"},
  {c:"constitucion",q:"¿Cuántos miembros tiene la Corte Suprema de Justicia de la Nación?",o:["5 miembros (según la ley vigente)","9 miembros","7 miembros"],a:"5 miembros (según la ley vigente)"},
  {c:"constitucion",q:"¿Qué artículo regula la cláusula del progreso?",o:["Art. 75 inc. 18","Art. 14","Art. 31"],a:"Art. 75 inc. 18"},
  {c:"constitucion",q:"¿Qué artículo establece la cláusula del nuevo progreso (desarrollo humano)?",o:["Art. 75 inc. 19","Art. 75 inc. 18","Art. 14 bis"],a:"Art. 75 inc. 19"},
  {c:"constitucion",q:"¿Qué es el juicio político?",o:["El procedimiento para destituir al Presidente, Vice, Jefe de Gabinete, ministros y jueces de la Corte Suprema","Un juicio penal","Un juicio laboral"],a:"El procedimiento para destituir al Presidente, Vice, Jefe de Gabinete, ministros y jueces de la Corte Suprema"},
  {c:"constitucion",q:"¿Qué cámara acusa en el juicio político?",o:["La Cámara de Diputados","El Senado","La Corte Suprema"],a:"La Cámara de Diputados"},
  {c:"constitucion",q:"¿Qué cámara juzga en el juicio político?",o:["El Senado","La Cámara de Diputados","La Corte Suprema"],a:"El Senado"},
  {c:"constitucion",q:"¿Qué mayoría se necesita en el Senado para la destitución en juicio político?",o:["Dos tercios de los miembros presentes","Mayoría simple","Unanimidad"],a:"Dos tercios de los miembros presentes"},
  {c:"constitucion",q:"¿Qué es el Consejo de la Magistratura?",o:["El órgano encargado de seleccionar candidatos a jueces y administrar el Poder Judicial (art. 114 CN)","Un tribunal de apelaciones","Un órgano del Poder Ejecutivo"],a:"El órgano encargado de seleccionar candidatos a jueces y administrar el Poder Judicial (art. 114 CN)"},
  {c:"constitucion",q:"¿Qué reforma constitucional introdujo el cargo de Jefe de Gabinete?",o:["La reforma de 1994","La reforma de 1957","La reforma de 1860"],a:"La reforma de 1994"},
  {c:"constitucion",q:"¿Quién designa al Jefe de Gabinete?",o:["El Presidente de la Nación","El Congreso","La Corte Suprema"],a:"El Presidente de la Nación"},
  {c:"constitucion",q:"¿Qué artículo regula los decretos de necesidad y urgencia (DNU)?",o:["Art. 99 inc. 3","Art. 75","Art. 14"],a:"Art. 99 inc. 3"},
  {c:"constitucion",q:"¿En qué materias están prohibidos los DNU?",o:["Penal, tributaria, electoral y de partidos políticos","No hay restricciones","Solo penal"],a:"Penal, tributaria, electoral y de partidos políticos"},
  {c:"constitucion",q:"¿Qué es la Auditoría General de la Nación?",o:["El organismo de control externo del sector público nacional (art. 85 CN)","Un tribunal de cuentas provincial","Una oficina del Poder Ejecutivo"],a:"El organismo de control externo del sector público nacional (art. 85 CN)"},
  {c:"constitucion",q:"¿Qué es el Defensor del Pueblo?",o:["Un órgano independiente que defiende los derechos humanos y demás derechos ante actos de la Administración (art. 86 CN)","Un juez de paz","Un ministro"],a:"Un órgano independiente que defiende los derechos humanos y demás derechos ante actos de la Administración (art. 86 CN)"},
  {c:"constitucion",q:"¿Qué artículo establece la autonomía municipal?",o:["Art. 123","Art. 5","Art. 75"],a:"Art. 123"},
  {c:"constitucion",q:"¿Qué establece el art. 5 de la CN?",o:["Las provincias deben dictar su propia constitución bajo el sistema representativo republicano","Las provincias no pueden tener constitución propia","Las provincias dependen del gobierno federal"],a:"Las provincias deben dictar su propia constitución bajo el sistema representativo republicano"},
  {c:"constitucion",q:"¿Qué artículo regula la coparticipación federal de impuestos?",o:["Art. 75 inc. 2","Art. 4","Art. 17"],a:"Art. 75 inc. 2"},
  {c:"constitucion",q:"¿Qué es la iniciativa popular?",o:["El derecho de los ciudadanos a presentar proyectos de ley ante la Cámara de Diputados (art. 39 CN)","Un plebiscito","Un referéndum"],a:"El derecho de los ciudadanos a presentar proyectos de ley ante la Cámara de Diputados (art. 39 CN)"},
  {c:"constitucion",q:"¿Qué es la consulta popular?",o:["Un mecanismo de democracia semidirecta por el cual se somete un proyecto de ley a votación popular (art. 40 CN)","Una encuesta de opinión","Un censo"],a:"Un mecanismo de democracia semidirecta por el cual se somete un proyecto de ley a votación popular (art. 40 CN)"},
  {c:"constitucion",q:"¿Qué artículo establece el derecho a un ambiente sano?",o:["Art. 41","Art. 14","Art. 33"],a:"Art. 41"},
  {c:"constitucion",q:"¿Qué artículo protege los derechos de consumidores y usuarios?",o:["Art. 42","Art. 41","Art. 43"],a:"Art. 42"},
  {c:"constitucion",q:"¿Qué artículo reconoce los derechos de los pueblos indígenas?",o:["Art. 75 inc. 17","Art. 14","Art. 33"],a:"Art. 75 inc. 17"},
  {c:"constitucion",q:"¿Qué establece el art. 36 de la CN?",o:["La defensa del orden constitucional y la inhabilitación de quienes lo interrumpan","La libertad de culto","El derecho de propiedad"],a:"La defensa del orden constitucional y la inhabilitación de quienes lo interrumpan"},
  {c:"constitucion",q:"¿Qué es la Convención Constituyente?",o:["El órgano elegido especialmente para reformar la Constitución","El Congreso Nacional","La Corte Suprema"],a:"El órgano elegido especialmente para reformar la Constitución"},


  // ═══════════════════════════════════════
  // SUCESIONES (50)
  // ═══════════════════════════════════════
  {c:"sucesiones",q:"¿Qué es la sucesión mortis causa?",o:["La transmisión de derechos y obligaciones del causante a sus herederos por fallecimiento","Una donación en vida","Un contrato de cesión"],a:"La transmisión de derechos y obligaciones del causante a sus herederos por fallecimiento"},
  {c:"sucesiones",q:"¿Qué tipos de sucesión reconoce el CCyCN?",o:["Legítima (por ley) y testamentaria (por voluntad del causante)","Solo legítima","Solo testamentaria"],a:"Legítima (por ley) y testamentaria (por voluntad del causante)"},
  {c:"sucesiones",q:"¿Quiénes son herederos forzosos?",o:["Descendientes, ascendientes y cónyuge","Solo los hijos","Solo el cónyuge"],a:"Descendientes, ascendientes y cónyuge"},
  {c:"sucesiones",q:"¿Qué es la legítima?",o:["La porción de la herencia de la que el testador no puede disponer libremente porque la ley la reserva a los herederos forzosos","El total de la herencia","Una donación"],a:"La porción de la herencia de la que el testador no puede disponer libremente porque la ley la reserva a los herederos forzosos"},
  {c:"sucesiones",q:"¿Cuál es la legítima de los descendientes?",o:["2/3 del patrimonio","1/2","4/5"],a:"2/3 del patrimonio"},
  {c:"sucesiones",q:"¿Cuál es la legítima de los ascendientes?",o:["1/2 del patrimonio","2/3","1/3"],a:"1/2 del patrimonio"},
  {c:"sucesiones",q:"¿Cuál es la legítima del cónyuge?",o:["1/2 del patrimonio","2/3","1/3"],a:"1/2 del patrimonio"},
  {c:"sucesiones",q:"¿Dónde se radica el juicio sucesorio?",o:["Ante el juez del último domicilio del causante","Ante cualquier juez","Donde están los bienes"],a:"Ante el juez del último domicilio del causante"},
  {c:"sucesiones",q:"¿Qué es la declaratoria de herederos?",o:["La resolución judicial que reconoce el carácter de heredero a quienes acrediten su vínculo","Un testamento judicial","Una partición de bienes"],a:"La resolución judicial que reconoce el carácter de heredero a quienes acrediten su vínculo"},
  {c:"sucesiones",q:"¿Qué es la investidura de pleno derecho?",o:["La que tienen descendientes, ascendientes y cónyuge, que son herederos desde la muerte sin necesidad de declaratoria para adquirir la herencia","La que se obtiene por sentencia","La que otorga el escribano"],a:"La que tienen descendientes, ascendientes y cónyuge, que son herederos desde la muerte sin necesidad de declaratoria para adquirir la herencia"},
  {c:"sucesiones",q:"¿Qué es la aceptación de la herencia?",o:["El acto por el cual el heredero asume su condición y los efectos de la sucesión","La renuncia a la herencia","El pago de impuestos sucesorios"],a:"El acto por el cual el heredero asume su condición y los efectos de la sucesión"},
  {c:"sucesiones",q:"¿Qué es la renuncia a la herencia?",o:["El acto formal por el cual el heredero declina su derecho hereditario","La donación de la herencia","La cesión de derechos"],a:"El acto formal por el cual el heredero declina su derecho hereditario"},
  {c:"sucesiones",q:"¿Qué es la colación?",o:["La obligación de computar en la masa hereditaria las donaciones recibidas en vida del causante para igualar las porciones","Un pago de deudas","Una partición"],a:"La obligación de computar en la masa hereditaria las donaciones recibidas en vida del causante para igualar las porciones"},
  {c:"sucesiones",q:"¿Qué es la acción de reducción?",o:["La que protege la legítima de los herederos forzosos contra donaciones y legados excesivos","Una acción de daños","Un recurso de apelación"],a:"La que protege la legítima de los herederos forzosos contra donaciones y legados excesivos"},
  {c:"sucesiones",q:"¿Qué es la indignidad sucesoria?",o:["La exclusión del heredero por incurrir en causales graves contra el causante (art. 2281 CCyCN)","Una sanción administrativa","Una multa fiscal"],a:"La exclusión del heredero por incurrir en causales graves contra el causante (art. 2281 CCyCN)"},
  {c:"sucesiones",q:"¿Qué es el testamento ológrafo?",o:["El escrito íntegramente de puño y letra del testador, fechado y firmado","Un testamento ante escribano","Un testamento cerrado"],a:"El escrito íntegramente de puño y letra del testador, fechado y firmado"},
  {c:"sucesiones",q:"¿Qué es el testamento por acto público?",o:["El otorgado por escritura pública ante escribano y dos testigos","Un testamento ológrafo","Un testamento verbal"],a:"El otorgado por escritura pública ante escribano y dos testigos"},
  {c:"sucesiones",q:"¿Se puede desheredar en el CCyCN?",o:["No existe la desheredación como institución autónoma en el CCyCN; se aplica la indignidad","Sí, por cualquier motivo","Solo por ingratitud"],a:"No existe la desheredación como institución autónoma en el CCyCN; se aplica la indignidad"},
  {c:"sucesiones",q:"¿Qué es la partición hereditaria?",o:["La división y adjudicación de los bienes de la herencia entre los coherederos","La venta de todos los bienes","El pago de deudas del causante"],a:"La división y adjudicación de los bienes de la herencia entre los coherederos"},
  {c:"sucesiones",q:"¿Qué tipos de partición reconoce el CCyCN?",o:["Privada (por acuerdo entre herederos), judicial (por el juez) y mixta","Solo judicial","Solo privada"],a:"Privada (por acuerdo entre herederos), judicial (por el juez) y mixta"},
  {c:"sucesiones",q:"¿Qué es el derecho de representación?",o:["El derecho de los descendientes de un heredero premuerto a ocupar su lugar en la sucesión","Un poder notarial","Una cesión de herencia"],a:"El derecho de los descendientes de un heredero premuerto a ocupar su lugar en la sucesión"},
  {c:"sucesiones",q:"¿Qué es la cesión de derechos hereditarios?",o:["El contrato por el cual un heredero transfiere a un tercero su derecho sobre la herencia","La renuncia a la herencia","La partición"],a:"El contrato por el cual un heredero transfiere a un tercero su derecho sobre la herencia"},
  {c:"sucesiones",q:"¿Qué es el legado?",o:["Una disposición testamentaria particular que beneficia a una persona con un bien o derecho determinado","La totalidad de la herencia","Una donación entre vivos"],a:"Una disposición testamentaria particular que beneficia a una persona con un bien o derecho determinado"},
  {c:"sucesiones",q:"¿Qué es el albacea?",o:["La persona designada por el testador para hacer cumplir su voluntad testamentaria","Un heredero forzoso","Un juez sucesorio"],a:"La persona designada por el testador para hacer cumplir su voluntad testamentaria"},
  {c:"sucesiones",q:"¿El heredero responde por las deudas del causante?",o:["Sí, pero limitada al valor de los bienes que recibe (responsabilidad cum viribus hereditatis)","Sí, ilimitadamente","No responde"],a:"Sí, pero limitada al valor de los bienes que recibe (responsabilidad cum viribus hereditatis)"},
  {c:"sucesiones",q:"¿Qué es la herencia vacante?",o:["La que no tiene herederos conocidos y corresponde al Estado","La que fue rechazada","La que está en litigio"],a:"La que no tiene herederos conocidos y corresponde al Estado"},
  {c:"sucesiones",q:"¿Qué derecho tiene el cónyuge supérstite sobre la vivienda que fue hogar conyugal?",o:["Derecho real de habitación vitalicio y gratuito (art. 2383 CCyCN)","Ninguno","Solo por 5 años"],a:"Derecho real de habitación vitalicio y gratuito (art. 2383 CCyCN)"},
  {c:"sucesiones",q:"¿Cuántos años prescribe la acción de petición de herencia?",o:["10 años desde la apertura de la sucesión","5 años","2 años"],a:"10 años desde la apertura de la sucesión"},
  {c:"sucesiones",q:"¿Qué es la apertura de la sucesión?",o:["El momento del fallecimiento del causante, a partir del cual se transmiten los derechos hereditarios","La presentación ante el juez","La declaratoria de herederos"],a:"El momento del fallecimiento del causante, a partir del cual se transmiten los derechos hereditarios"},
  {c:"sucesiones",q:"¿Puede una persona viva ser sujeto de sucesión mortis causa?",o:["No, no existe sucesión de persona viva; los pactos sobre herencia futura son nulos","Sí, mediante contrato","Sí, con autorización judicial"],a:"No, no existe sucesión de persona viva; los pactos sobre herencia futura son nulos"},


  // ═══════════════════════════════════════
  // PREVISIONAL (50)
  // ═══════════════════════════════════════
  {c:"previsional",q:"¿Qué organismo administra el sistema previsional argentino?",o:["ANSES","AFIP","Ministerio de Trabajo"],a:"ANSES"},
  {c:"previsional",q:"¿Qué ley regula el Sistema Integrado Previsional Argentino (SIPA)?",o:["Ley 26.425","Ley 24.241","Ley 20.744"],a:"Ley 26.425"},
  {c:"previsional",q:"¿Qué edad jubilatoria se exige a los hombres en el régimen general?",o:["65 años","60 años","70 años"],a:"65 años"},
  {c:"previsional",q:"¿Qué edad jubilatoria se exige a las mujeres en el régimen general?",o:["60 años","65 años","55 años"],a:"60 años"},
  {c:"previsional",q:"¿Cuántos años de aportes se requieren para la jubilación ordinaria?",o:["30 años","25 años","35 años"],a:"30 años"},
  {c:"previsional",q:"¿Qué es la moratoria previsional?",o:["Un plan que permite regularizar años de aportes adeudados para acceder a la jubilación","Una multa por falta de aportes","Un bono del Estado"],a:"Un plan que permite regularizar años de aportes adeudados para acceder a la jubilación"},
  {c:"previsional",q:"¿Qué es la Pensión Universal para el Adulto Mayor (PUAM)?",o:["Una prestación no contributiva para mayores de 65 años que no tienen jubilación ni pensión","Una jubilación anticipada","Un seguro de desempleo"],a:"Una prestación no contributiva para mayores de 65 años que no tienen jubilación ni pensión"},
  {c:"previsional",q:"¿Cuánto representa la PUAM respecto del haber mínimo?",o:["El 80% del haber mínimo jubilatorio","El 100%","El 50%"],a:"El 80% del haber mínimo jubilatorio"},
  {c:"previsional",q:"¿Qué es la pensión por fallecimiento?",o:["La prestación que reciben los derechohabientes del jubilado o afiliado fallecido","Un seguro de vida","Una indemnización laboral"],a:"La prestación que reciben los derechohabientes del jubilado o afiliado fallecido"},
  {c:"previsional",q:"¿Quiénes son derechohabientes de la pensión por fallecimiento?",o:["Cónyuge o conviviente, hijos menores de 18 (o incapacitados)","Solo el cónyuge","Solo los hijos"],a:"Cónyuge o conviviente, hijos menores de 18 (o incapacitados)"},
  {c:"previsional",q:"¿Qué porcentaje de la jubilación corresponde como pensión al cónyuge?",o:["70% del haber del causante","50%","100%"],a:"70% del haber del causante"},
  {c:"previsional",q:"¿Qué es el retiro por invalidez?",o:["La prestación que se otorga cuando el afiliado se incapacita en un 66% o más de forma permanente","Una licencia médica","Un subsidio temporal"],a:"La prestación que se otorga cuando el afiliado se incapacita en un 66% o más de forma permanente"},
  {c:"previsional",q:"¿Qué organismo dictamina la invalidez previsional?",o:["Las Comisiones Médicas de la SRT/ANSES","El médico del hospital","El juez laboral"],a:"Las Comisiones Médicas de la SRT/ANSES"},
  {c:"previsional",q:"¿Qué es el SIPA?",o:["El Sistema Integrado Previsional Argentino, de reparto público, que reemplazó al sistema mixto","Un sistema de ahorro privado","Un seguro de salud"],a:"El Sistema Integrado Previsional Argentino, de reparto público, que reemplazó al sistema mixto"},
  {c:"previsional",q:"¿Qué eliminó la Ley 26.425?",o:["El régimen de capitalización individual (AFJP)","El régimen de reparto","Las moratorias"],a:"El régimen de capitalización individual (AFJP)"},
  {c:"previsional",q:"¿Qué fallo de la CSJN ordenó la movilidad jubilatoria?",o:["Badaro (2006-2007)","Halabi","Arriola"],a:"Badaro (2006-2007)"},
  {c:"previsional",q:"¿Qué estableció el fallo 'Elliff' de la CSJN?",o:["Que el haber jubilatorio debe guardar proporcionalidad con la remuneración en actividad","Que no hay movilidad","Que las AFJP son constitucionales"],a:"Que el haber jubilatorio debe guardar proporcionalidad con la remuneración en actividad"},
  {c:"previsional",q:"¿Qué es la Prestación Básica Universal (PBU)?",o:["Un componente fijo del haber jubilatorio que perciben todos los beneficiarios","Un bono extraordinario","Una asignación familiar"],a:"Un componente fijo del haber jubilatorio que perciben todos los beneficiarios"},
  {c:"previsional",q:"¿Qué es la Prestación Compensatoria (PC)?",o:["El componente del haber que compensa los aportes realizados al antiguo sistema antes de julio de 1994","Un bono de productividad","Una indemnización"],a:"El componente del haber que compensa los aportes realizados al antiguo sistema antes de julio de 1994"},
  {c:"previsional",q:"¿Qué es la Prestación Adicional por Permanencia (PAP)?",o:["El componente que reconoce los aportes realizados al régimen de reparto después de julio de 1994","Un plus salarial","Un subsidio estatal"],a:"El componente que reconoce los aportes realizados al régimen de reparto después de julio de 1994"},
  {c:"previsional",q:"¿Qué es el haber mínimo garantizado?",o:["El piso por debajo del cual ninguna jubilación o pensión puede ubicarse","El promedio de todas las jubilaciones","El sueldo mínimo vital y móvil"],a:"El piso por debajo del cual ninguna jubilación o pensión puede ubicarse"},
  {c:"previsional",q:"¿Qué es la movilidad jubilatoria?",o:["El mecanismo de actualización periódica de los haberes para mantener su poder adquisitivo","La posibilidad de cambiar de régimen","La jubilación anticipada"],a:"El mecanismo de actualización periódica de los haberes para mantener su poder adquisitivo"},
  {c:"previsional",q:"¿Qué ley estableció la fórmula de movilidad jubilatoria vigente?",o:["La ley vigente al momento (ha variado: Ley 26.417, luego 27.426, luego DNU 274/2024)","Ley 20.744","Ley 24.240"],a:"La ley vigente al momento (ha variado: Ley 26.417, luego 27.426, luego DNU 274/2024)"},
  {c:"previsional",q:"¿Qué son los regímenes especiales de jubilación?",o:["Regímenes diferenciados por actividad (docentes, judiciales, investigadores, fuerzas de seguridad) con requisitos propios","Jubilaciones de privilegio","Pensiones graciables"],a:"Regímenes diferenciados por actividad (docentes, judiciales, investigadores, fuerzas de seguridad) con requisitos propios"},
  {c:"previsional",q:"¿Qué es una pensión no contributiva?",o:["Una prestación otorgada por el Estado sin requerir aportes previos, por razones de vulnerabilidad","Una jubilación por aportes","Un subsidio de desempleo"],a:"Una prestación otorgada por el Estado sin requerir aportes previos, por razones de vulnerabilidad"},
  {c:"previsional",q:"¿Qué recurso tiene el afiliado ante la denegatoria de ANSES?",o:["Recurso administrativo y/o acción judicial ante la justicia federal de la seguridad social","Ninguno","Solo queja ante el Defensor del Pueblo"],a:"Recurso administrativo y/o acción judicial ante la justicia federal de la seguridad social"},
  {c:"previsional",q:"¿Qué tribunal entiende en las causas previsionales en CABA?",o:["Los juzgados federales de la seguridad social","Los juzgados laborales nacionales","Los juzgados civiles"],a:"Los juzgados federales de la seguridad social"},
  {c:"previsional",q:"¿Qué es el reajuste de haberes?",o:["El reclamo judicial para obtener la correcta liquidación del haber jubilatorio según la ley y la jurisprudencia","Un aumento automático","Una queja administrativa"],a:"El reclamo judicial para obtener la correcta liquidación del haber jubilatorio según la ley y la jurisprudencia"},
  {c:"previsional",q:"¿Qué es la compatibilidad entre jubilación y trabajo?",o:["La posibilidad de trabajar mientras se cobra jubilación, aportando al Fondo de Sustentabilidad","La prohibición de trabajar siendo jubilado","Un beneficio solo para autónomos"],a:"La posibilidad de trabajar mientras se cobra jubilación, aportando al Fondo de Sustentabilidad"},
  {c:"previsional",q:"¿Qué es la Asignación Universal por Hijo (AUH)?",o:["Una prestación de seguridad social para hijos de desempleados, trabajadores informales y del servicio doméstico","Una jubilación anticipada","Un crédito fiscal"],a:"Una prestación de seguridad social para hijos de desempleados, trabajadores informales y del servicio doméstico"},
  {c:"previsional",q:"¿Qué requisito de salud exige la AUH?",o:["Cumplir con el plan de vacunación y controles sanitarios del hijo","Ninguno","Tener obra social"],a:"Cumplir con el plan de vacunación y controles sanitarios del hijo"},
  {c:"previsional",q:"¿Qué es el Fondo de Garantía de Sustentabilidad (FGS)?",o:["El fondo administrado por ANSES con los activos que eran de las AFJP, destinado a garantizar las prestaciones","Un fondo de inversión privado","Un fideicomiso bancario"],a:"El fondo administrado por ANSES con los activos que eran de las AFJP, destinado a garantizar las prestaciones"},
  {c:"previsional",q:"¿Qué es la jubilación anticipada?",o:["No existe como régimen general en Argentina; solo aplica en regímenes especiales o por convenio","Una jubilación a los 50 años","Un retiro voluntario"],a:"No existe como régimen general en Argentina; solo aplica en regímenes especiales o por convenio"},
  {c:"previsional",q:"¿Qué es la prestación por desempleo?",o:["La prestación económica que brinda ANSES al trabajador registrado que pierde su empleo sin justa causa","Una jubilación","Una pensión"],a:"La prestación económica que brinda ANSES al trabajador registrado que pierde su empleo sin justa causa"},
  {c:"previsional",q:"¿Qué ley regula el seguro de desempleo?",o:["Ley 24.013 (Título IV)","Ley 20.744","Ley 24.557"],a:"Ley 24.013 (Título IV)"},
  {c:"previsional",q:"¿Cuántos meses de trabajo registrado se requieren para acceder al seguro de desempleo?",o:["Al menos 6 meses en los 3 años anteriores al cese","12 meses","3 meses"],a:"Al menos 6 meses en los 3 años anteriores al cese"},
  {c:"previsional",q:"¿Qué es el reconocimiento de servicios?",o:["La acreditación ante ANSES de los años trabajados y aportes realizados para computarlos al jubilarse","Un certificado de trabajo","Una constancia de CUIL"],a:"La acreditación ante ANSES de los años trabajados y aportes realizados para computarlos al jubilarse"},
  {c:"previsional",q:"¿Qué es la reciprocidad jubilatoria?",o:["El convenio entre cajas previsionales nacionales y provinciales para computar aportes realizados en distintas jurisdicciones","Un tratado internacional","Un intercambio de personal"],a:"El convenio entre cajas previsionales nacionales y provinciales para computar aportes realizados en distintas jurisdicciones"},
  {c:"previsional",q:"¿Qué es el suplemento por movilidad?",o:["El ajuste periódico que se aplica sobre el haber jubilatorio según la fórmula legal vigente","Un bono extraordinario","Un plus por antigüedad"],a:"El ajuste periódico que se aplica sobre el haber jubilatorio según la fórmula legal vigente"},
  {c:"previsional",q:"¿Puede embargarse una jubilación?",o:["Solo hasta el porcentaje legal permitido (generalmente 20% del haber) y con las excepciones de ley","No, es inembargable","Sí, totalmente"],a:"Solo hasta el porcentaje legal permitido (generalmente 20% del haber) y con las excepciones de ley"},

  {c:"previsional",q:"¿Qué establece el principio de integralidad en la seguridad social?",o:["Que las prestaciones deben cubrir de manera completa las contingencias sociales","Que solo se cubren accidentes","Que el sistema es optativo"],a:"Que las prestaciones deben cubrir de manera completa las contingencias sociales"},
  {c:"previsional",q:"¿Qué establece el principio de solidaridad en la seguridad social?",o:["Que los activos financian a los pasivos en un sistema de reparto","Que cada uno ahorra para sí mismo","Que el Estado no participa"],a:"Que los activos financian a los pasivos en un sistema de reparto"},
  {c:"previsional",q:"¿Qué es el CUIL?",o:["La Clave Única de Identificación Laboral que identifica al trabajador en el sistema de seguridad social","El Código Único Impositivo","Una credencial médica"],a:"La Clave Única de Identificación Laboral que identifica al trabajador en el sistema de seguridad social"},
  {c:"previsional",q:"¿Qué artículo de la CN consagra los beneficios de la seguridad social?",o:["Art. 14 bis, tercer párrafo","Art. 14","Art. 75 inc. 22"],a:"Art. 14 bis, tercer párrafo"},
  {c:"previsional",q:"¿Qué fallo de la CSJN declaró la confiscatoriedad de haberes jubilatorios?",o:["Sánchez, María del Carmen (2005)","Halabi","Arriola"],a:"Sánchez, María del Carmen (2005)"},
  {c:"previsional",q:"¿Qué porcentaje del haber se considera confiscatorio según la CSJN?",o:["Cuando el haber es inferior al 70% del salario en actividad actualizado","Cuando es inferior al 50%","Cuando es inferior al 82%"],a:"Cuando el haber es inferior al 70% del salario en actividad actualizado"},
  {c:"previsional",q:"¿Se puede renunciar a una jubilación?",o:["No, los beneficios de la seguridad social son irrenunciables","Sí, ante escribano","Solo con autorización judicial"],a:"No, los beneficios de la seguridad social son irrenunciables"},
  {c:"previsional",q:"¿Qué es la doble prestación previsional?",o:["La percepción simultánea de dos beneficios previsionales, en principio prohibida salvo excepciones legales","Un pago doble del haber","Cobrar jubilación y pensión siempre"],a:"La percepción simultánea de dos beneficios previsionales, en principio prohibida salvo excepciones legales"},
  {c:"previsional",q:"¿Qué es el Programa de Reparación Histórica?",o:["El programa de la Ley 27.260 que permitió reajustar haberes jubilatorios atrasados mediante acuerdos individuales","Una moratoria","Una amnistía fiscal"],a:"El programa de la Ley 27.260 que permitió reajustar haberes jubilatorios atrasados mediante acuerdos individuales"},
  {c:"previsional",q:"¿Qué es la jubilación por edad avanzada?",o:["La que se otorga a los 70 años con solo 10 años de servicios y aportes","La jubilación ordinaria","Una pensión graciable"],a:"La que se otorga a los 70 años con solo 10 años de servicios y aportes"},

  // ═══════════════════════════════════════
  // DERECHOS REALES (50)
  // ═══════════════════════════════════════
  {c:"reales",q:"¿Qué son los derechos reales?",o:["Derechos que recaen directamente sobre una cosa y son oponibles erga omnes","Derechos entre personas","Derechos procesales"],a:"Derechos que recaen directamente sobre una cosa y son oponibles erga omnes"},
  {c:"reales",q:"¿El CCyCN adopta un sistema de numerus clausus para los derechos reales?",o:["Sí, solo existen los derechos reales creados por ley (art. 1884)","No, las partes pueden crear nuevos","Solo en materia inmobiliaria"],a:"Sí, solo existen los derechos reales creados por ley (art. 1884)"},
  {c:"reales",q:"¿Cuántos derechos reales enumera el art. 1887 del CCyCN?",o:["Dominio, condominio, propiedad comunitaria indígena, propiedad horizontal, conjuntos inmobiliarios, tiempo compartido, cementerio privado, superficie, usufructo, uso, habitación, servidumbre, hipoteca, anticresis, prenda","Solo dominio e hipoteca","Solo 5"],a:"Dominio, condominio, propiedad comunitaria indígena, propiedad horizontal, conjuntos inmobiliarios, tiempo compartido, cementerio privado, superficie, usufructo, uso, habitación, servidumbre, hipoteca, anticresis, prenda"},
  {c:"reales",q:"¿Qué es el dominio?",o:["El derecho real más amplio: permite usar, gozar y disponer de una cosa dentro de los límites legales","Una servidumbre","Un usufructo"],a:"El derecho real más amplio: permite usar, gozar y disponer de una cosa dentro de los límites legales"},
  {c:"reales",q:"¿Qué es el dominio imperfecto?",o:["El dominio sujeto a condición resolutoria, plazo o revocabilidad","El dominio pleno","La posesión sin título"],a:"El dominio sujeto a condición resolutoria, plazo o revocabilidad"},
  {c:"reales",q:"¿Qué es el condominio?",o:["El derecho real de propiedad sobre una cosa que pertenece en común a varias personas por una parte indivisa","La propiedad horizontal","Un contrato de sociedad"],a:"El derecho real de propiedad sobre una cosa que pertenece en común a varias personas por una parte indivisa"},
  {c:"reales",q:"¿Qué es la propiedad horizontal?",o:["El derecho real sobre partes privativas y comunes de un edificio, regulado por un reglamento de copropiedad","Un alquiler","Una servidumbre"],a:"El derecho real sobre partes privativas y comunes de un edificio, regulado por un reglamento de copropiedad"},
  {c:"reales",q:"¿Qué es el usufructo?",o:["El derecho real de usar y gozar de una cosa ajena sin alterar su sustancia","El derecho de propiedad","Una servidumbre de paso"],a:"El derecho real de usar y gozar de una cosa ajena sin alterar su sustancia"},
  {c:"reales",q:"¿Cuánto dura el usufructo a favor de personas humanas?",o:["Como máximo, la vida del usufructuario","20 años","50 años"],a:"Como máximo, la vida del usufructuario"},
  {c:"reales",q:"¿Cuánto dura el usufructo a favor de personas jurídicas?",o:["Máximo 50 años","Máximo 20 años","Es vitalicio"],a:"Máximo 50 años"},
  {c:"reales",q:"¿Qué es el derecho real de uso?",o:["El derecho de usar y gozar de una cosa ajena limitado a las necesidades del usuario y su familia","El usufructo","La habitación"],a:"El derecho de usar y gozar de una cosa ajena limitado a las necesidades del usuario y su familia"},
  {c:"reales",q:"¿Qué es el derecho real de habitación?",o:["El derecho de morar en un inmueble ajeno, limitado a las necesidades del habitador y su familia","Un contrato de alquiler","El usufructo"],a:"El derecho de morar en un inmueble ajeno, limitado a las necesidades del habitador y su familia"},
  {c:"reales",q:"¿Qué es la servidumbre?",o:["Un derecho real que grava un inmueble (sirviente) en beneficio de otro (dominante)","Un contrato de alquiler","Un usufructo"],a:"Un derecho real que grava un inmueble (sirviente) en beneficio de otro (dominante)"},
  {c:"reales",q:"¿Qué es la hipoteca?",o:["Un derecho real de garantía que grava un inmueble sin desplazar la posesión al acreedor","Una prenda","Un embargo"],a:"Un derecho real de garantía que grava un inmueble sin desplazar la posesión al acreedor"},
  {c:"reales",q:"¿Qué es la prenda?",o:["Un derecho real de garantía sobre cosas muebles o créditos","Una hipoteca","Un embargo"],a:"Un derecho real de garantía sobre cosas muebles o créditos"},
  {c:"reales",q:"¿Qué es la anticresis?",o:["Un derecho real de garantía donde el acreedor percibe los frutos del inmueble y los imputa a la deuda","Una hipoteca","Un usufructo"],a:"Un derecho real de garantía donde el acreedor percibe los frutos del inmueble y los imputa a la deuda"},
  {c:"reales",q:"¿Qué es el derecho real de superficie?",o:["El derecho de construir o plantar sobre suelo ajeno y hacer propio lo construido o plantado","La propiedad horizontal","Una servidumbre"],a:"El derecho de construir o plantar sobre suelo ajeno y hacer propio lo construido o plantado"},
  {c:"reales",q:"¿Cuánto dura el derecho de superficie?",o:["Máximo 70 años para construcciones y 50 para plantaciones","100 años","Es perpetuo"],a:"Máximo 70 años para construcciones y 50 para plantaciones"},
  {c:"reales",q:"¿Qué es la posesión?",o:["El poder de hecho sobre una cosa con intención de tenerla como propia (corpus + animus domini)","Un contrato","Un derecho real"],a:"El poder de hecho sobre una cosa con intención de tenerla como propia (corpus + animus domini)"},
  {c:"reales",q:"¿Qué es la tenencia?",o:["El poder de hecho sobre una cosa reconociendo en otro la propiedad (corpus sin animus domini)","La posesión","El dominio"],a:"El poder de hecho sobre una cosa reconociendo en otro la propiedad (corpus sin animus domini)"},
  {c:"reales",q:"¿Qué es la prescripción adquisitiva breve (usucapión corta)?",o:["La adquisición del dominio por posesión de 10 años con justo título y buena fe","La de 20 años","La de 5 años"],a:"La adquisición del dominio por posesión de 10 años con justo título y buena fe"},
  {c:"reales",q:"¿Qué es la prescripción adquisitiva larga?",o:["La adquisición del dominio por posesión continua de 20 años sin necesidad de título ni buena fe","La de 10 años","La de 5 años"],a:"La adquisición del dominio por posesión continua de 20 años sin necesidad de título ni buena fe"},
  {c:"reales",q:"¿Qué son las acciones posesorias?",o:["Las que protegen la posesión contra actos de despojo o turbación","Acciones de cobro","Recursos administrativos"],a:"Las que protegen la posesión contra actos de despojo o turbación"},
  {c:"reales",q:"¿Qué es la acción reivindicatoria?",o:["La acción real del propietario para recuperar la cosa de quien la posee ilegítimamente","Una acción posesoria","Un interdicto"],a:"La acción real del propietario para recuperar la cosa de quien la posee ilegítimamente"},
  {c:"reales",q:"¿Qué es la acción negatoria?",o:["La que tiene el titular del derecho real para que cese una turbación sobre su cosa sin despojarlo","La acción reivindicatoria","Una acción de daños"],a:"La que tiene el titular del derecho real para que cese una turbación sobre su cosa sin despojarlo"},
  {c:"reales",q:"¿Qué es la acción confesoria?",o:["La que tiene el titular de una servidumbre para exigir al sirviente que la respete","La acción reivindicatoria","Una acción penal"],a:"La que tiene el titular de una servidumbre para exigir al sirviente que la respete"},
  {c:"reales",q:"¿Qué es la publicidad registral en materia de derechos reales?",o:["La inscripción en el Registro de la Propiedad para oponer el derecho real a terceros","La publicación en un diario","Una notificación judicial"],a:"La inscripción en el Registro de la Propiedad para oponer el derecho real a terceros"},
  {c:"reales",q:"¿Es constitutiva o declarativa la inscripción registral inmobiliaria en Argentina?",o:["Declarativa: el derecho real nace con el título y modo; la inscripción lo hace oponible a terceros","Constitutiva","Mixta"],a:"Declarativa: el derecho real nace con el título y modo; la inscripción lo hace oponible a terceros"},
  {c:"reales",q:"¿Qué es el principio de tracto sucesivo en el registro?",o:["Que cada asiento registral debe derivar del anterior, formando una cadena ininterrumpida de titularidades","Que se registra todo junto","Que solo se registra el último titular"],a:"Que cada asiento registral debe derivar del anterior, formando una cadena ininterrumpida de titularidades"},
  {c:"reales",q:"¿Qué es el bien de familia (ahora protección de la vivienda)?",o:["La afectación de un inmueble como vivienda familiar para protegerlo de ejecución por deudas posteriores (arts. 244-256 CCyCN)","Un seguro de hogar","Un crédito hipotecario"],a:"La afectación de un inmueble como vivienda familiar para protegerlo de ejecución por deudas posteriores (arts. 244-256 CCyCN)"},
  {c:"reales",q:"¿Qué es el derecho real de tiempo compartido?",o:["El derecho de usar periódicamente un inmueble o conjunto de bienes durante lapsos determinados","Un contrato de alquiler temporal","Una multipropiedad registrada como condominio"],a:"El derecho de usar periódicamente un inmueble o conjunto de bienes durante lapsos determinados"},
  {c:"reales",q:"¿Qué es el conjunto inmobiliario?",o:["Clubes de campo, barrios cerrados y similares regulados como derecho real (arts. 2073-2086 CCyCN)","Un consorcio de propiedad horizontal","Un condominio"],a:"Clubes de campo, barrios cerrados y similares regulados como derecho real (arts. 2073-2086 CCyCN)"},
  {c:"reales",q:"¿Qué ley regula el Registro de la Propiedad Inmueble?",o:["Ley 17.801","Ley 19.550","Ley 20.094"],a:"Ley 17.801"},
  {c:"reales",q:"¿Qué es la tradición en materia de derechos reales?",o:["La entrega material de la cosa como modo suficiente para adquirir un derecho real","La inscripción registral","La firma del contrato"],a:"La entrega material de la cosa como modo suficiente para adquirir un derecho real"},
  {c:"reales",q:"¿Qué significa que los derechos reales son de orden público?",o:["Que no pueden ser creados ni modificados por voluntad de las partes fuera de lo que la ley establece","Que son gratuitos","Que los fija el Estado cada año"],a:"Que no pueden ser creados ni modificados por voluntad de las partes fuera de lo que la ley establece"},


  // ═══════════════════════════════════════
  // DERECHO DE LA SALUD (50)
  // ═══════════════════════════════════════
  {c:"salud",q:"¿Qué ley regula los derechos del paciente en Argentina?",o:["Ley 26.529","Ley 24.240","Ley 26.657"],a:"Ley 26.529"},
  {c:"salud",q:"¿Qué es el consentimiento informado?",o:["La declaración de voluntad del paciente tras recibir información clara sobre diagnóstico, tratamiento y riesgos","La firma del alta médica","Un formulario administrativo"],a:"La declaración de voluntad del paciente tras recibir información clara sobre diagnóstico, tratamiento y riesgos"},
  {c:"salud",q:"¿Puede el paciente rechazar un tratamiento médico?",o:["Sí, tiene derecho a aceptar o rechazar procedimientos con información adecuada","No, el médico decide","Solo en enfermedades terminales"],a:"Sí, tiene derecho a aceptar o rechazar procedimientos con información adecuada"},
  {c:"salud",q:"¿Qué es la historia clínica?",o:["El documento cronológico obligatorio donde se registran todos los actos médicos realizados al paciente","Un resumen de alta","Un certificado médico"],a:"El documento cronológico obligatorio donde se registran todos los actos médicos realizados al paciente"},
  {c:"salud",q:"¿Quién es titular de la historia clínica?",o:["El paciente","El médico","El hospital"],a:"El paciente"},
  {c:"salud",q:"¿Qué ley regula la salud mental en Argentina?",o:["Ley 26.657 (Ley Nacional de Salud Mental)","Ley 26.529","Ley 23.661"],a:"Ley 26.657 (Ley Nacional de Salud Mental)"},
  {c:"salud",q:"¿Qué principio establece la Ley 26.657 respecto de las internaciones?",o:["La internación es considerada un recurso terapéutico de último recurso","La internación es la primera opción","El paciente no puede negarse"],a:"La internación es considerada un recurso terapéutico de último recurso"},
  {c:"salud",q:"¿Qué es la internación involuntaria según la Ley 26.657?",o:["La que se dispone sin consentimiento cuando existe riesgo cierto e inminente para sí o para terceros, con control judicial","La que decide el familiar","Una medida administrativa"],a:"La que se dispone sin consentimiento cuando existe riesgo cierto e inminente para sí o para terceros, con control judicial"},
  {c:"salud",q:"¿Qué ley regula las obras sociales?",o:["Ley 23.660","Ley 26.529","Ley 23.661"],a:"Ley 23.660"},
  {c:"salud",q:"¿Qué ley creó el Sistema Nacional de Seguro de Salud?",o:["Ley 23.661","Ley 23.660","Ley 26.529"],a:"Ley 23.661"},
  {c:"salud",q:"¿Qué es el PMO?",o:["El Programa Médico Obligatorio: el conjunto mínimo de prestaciones que deben cubrir obras sociales y prepagas","Un plan de ahorro médico","Un seguro de vida"],a:"El Programa Médico Obligatorio: el conjunto mínimo de prestaciones que deben cubrir obras sociales y prepagas"},
  {c:"salud",q:"¿Qué ley regula las empresas de medicina prepaga?",o:["Ley 26.682","Ley 23.660","Ley 24.240"],a:"Ley 26.682"},
  {c:"salud",q:"¿Pueden las prepagas rechazar afiliados por enfermedades preexistentes?",o:["No, no pueden rechazar la afiliación por preexistencias según la Ley 26.682","Sí, libremente","Solo mayores de 65 años"],a:"No, no pueden rechazar la afiliación por preexistencias según la Ley 26.682"},
  {c:"salud",q:"¿Qué es la mala praxis médica?",o:["La responsabilidad del profesional de la salud por el daño causado al paciente por negligencia, imprudencia o impericia","Un error administrativo","Una demora en la atención"],a:"La responsabilidad del profesional de la salud por el daño causado al paciente por negligencia, imprudencia o impericia"},
  {c:"salud",q:"¿Qué tipo de responsabilidad tiene el médico por mala praxis?",o:["Subjetiva, basada en la culpa (obligación de medios, no de resultado)","Objetiva","No tiene responsabilidad"],a:"Subjetiva, basada en la culpa (obligación de medios, no de resultado)"},
  {c:"salud",q:"¿Qué ley regula la donación y trasplante de órganos?",o:["Ley 27.447 (Ley Justina)","Ley 26.529","Ley 24.193"],a:"Ley 27.447 (Ley Justina)"},
  {c:"salud",q:"¿Qué establece la Ley Justina sobre la donación de órganos?",o:["Toda persona mayor de 18 años es donante presunta salvo que haya expresado su voluntad en contrario","Solo se donan órganos con consentimiento expreso","La familia siempre decide"],a:"Toda persona mayor de 18 años es donante presunta salvo que haya expresado su voluntad en contrario"},
  {c:"salud",q:"¿Qué organismo regula los trasplantes?",o:["El INCUCAI","El Ministerio de Salud directamente","La ANMAT"],a:"El INCUCAI"},
  {c:"salud",q:"¿Qué es la ANMAT?",o:["La Administración Nacional de Medicamentos, Alimentos y Tecnología Médica","Una obra social","Un hospital público"],a:"La Administración Nacional de Medicamentos, Alimentos y Tecnología Médica"},
  {c:"salud",q:"¿Qué ley regula los derechos de las personas con discapacidad?",o:["Ley 22.431 y Ley 24.901 (Sistema de Prestaciones Básicas)","Ley 26.529","Ley 23.660"],a:"Ley 22.431 y Ley 24.901 (Sistema de Prestaciones Básicas)"},
  {c:"salud",q:"¿Qué es el CUD?",o:["El Certificado Único de Discapacidad, que acredita la condición de discapacidad y habilita prestaciones","Una credencial médica","Un carnet de obra social"],a:"El Certificado Único de Discapacidad, que acredita la condición de discapacidad y habilita prestaciones"},
  {c:"salud",q:"¿Qué cobertura deben brindar las obras sociales y prepagas a personas con discapacidad?",o:["El 100% de las prestaciones incluidas en la Ley 24.901","Solo el 50%","Solo rehabilitación"],a:"El 100% de las prestaciones incluidas en la Ley 24.901"},
  {c:"salud",q:"¿Qué ley regula la reproducción médicamente asistida?",o:["Ley 26.862","Ley 26.529","Ley 23.660"],a:"Ley 26.862"},
  {c:"salud",q:"¿Qué cobertura establece la Ley 26.862 para reproducción asistida?",o:["Cobertura integral por obras sociales y prepagas de los procedimientos y medicación","Solo un intento","No hay cobertura obligatoria"],a:"Cobertura integral por obras sociales y prepagas de los procedimientos y medicación"},
  {c:"salud",q:"¿Qué es la directiva anticipada (testamento vital)?",o:["La declaración de voluntad del paciente sobre tratamientos médicos para cuando no pueda expresar su voluntad","Un testamento sucesorio","Un poder general"],a:"La declaración de voluntad del paciente sobre tratamientos médicos para cuando no pueda expresar su voluntad"},
  {c:"salud",q:"¿Qué ley regula la identidad de género?",o:["Ley 26.743","Ley 26.529","Ley 26.485"],a:"Ley 26.743"},
  {c:"salud",q:"¿Qué establece la Ley 26.743 sobre intervenciones quirúrgicas de adecuación corporal?",o:["Que no requieren autorización judicial ni diagnóstico psiquiátrico","Que requieren autorización judicial","Que están prohibidas"],a:"Que no requieren autorización judicial ni diagnóstico psiquiátrico"},
  {c:"salud",q:"¿Qué ley regula el ejercicio de la medicina?",o:["Ley 17.132","Ley 26.529","Ley 23.660"],a:"Ley 17.132"},
  {c:"salud",q:"¿Qué es el secreto profesional médico?",o:["La obligación del médico de guardar confidencialidad sobre la información del paciente","Una cláusula contractual","Un acuerdo entre colegas"],a:"La obligación del médico de guardar confidencialidad sobre la información del paciente"},
  {c:"salud",q:"¿Cuándo puede revelarse el secreto médico?",o:["Por orden judicial, denuncia obligatoria de ciertas enfermedades, o riesgo para terceros","Nunca","Siempre que lo pida la familia"],a:"Por orden judicial, denuncia obligatoria de ciertas enfermedades, o riesgo para terceros"},
  {c:"salud",q:"¿Qué ley regula la sangre y hemoderivados?",o:["Ley 22.990","Ley 26.529","Ley 17.132"],a:"Ley 22.990"},
  {c:"salud",q:"¿Qué es el derecho a la muerte digna?",o:["El derecho del paciente terminal a rechazar procedimientos extraordinarios que prolonguen artificialmente la vida (Ley 26.742)","La eutanasia activa","El suicidio asistido"],a:"El derecho del paciente terminal a rechazar procedimientos extraordinarios que prolonguen artificialmente la vida (Ley 26.742)"},
  {c:"salud",q:"¿Qué ley reguló la interrupción voluntaria del embarazo?",o:["Ley 27.610","Ley 26.529","Ley 25.929"],a:"Ley 27.610"},
  {c:"salud",q:"¿Hasta qué semana de gestación se permite la IVE según la Ley 27.610?",o:["Semana 14 inclusive","Semana 12","Semana 20"],a:"Semana 14 inclusive"},
  {c:"salud",q:"¿Qué es la objeción de conciencia en salud?",o:["El derecho del profesional a negarse a realizar una práctica por razones morales, sin obstruir el acceso del paciente","Un recurso judicial","Una excusa absolutoria"],a:"El derecho del profesional a negarse a realizar una práctica por razones morales, sin obstruir el acceso del paciente"},
  {c:"salud",q:"¿Qué ley promueve el parto respetado?",o:["Ley 25.929","Ley 26.529","Ley 26.485"],a:"Ley 25.929"},
  {c:"salud",q:"¿Qué derechos establece la Ley 25.929?",o:["Ser tratada con respeto, elegir acompañante, recibir información, no ser sometida a prácticas invasivas innecesarias","Solo elegir médico","Solo elegir hospital"],a:"Ser tratada con respeto, elegir acompañante, recibir información, no ser sometida a prácticas invasivas innecesarias"},
  {c:"salud",q:"¿Qué ley regula los productos medicinales?",o:["Ley 16.463","Ley 17.132","Ley 26.529"],a:"Ley 16.463"},
  {c:"salud",q:"¿Qué es la cobertura de enfermedades poco frecuentes?",o:["La obligación de obras sociales y prepagas de cubrir tratamientos para enfermedades con prevalencia menor a 1/2000 (Ley 26.689)","Un programa voluntario","Una cobertura privada"],a:"La obligación de obras sociales y prepagas de cubrir tratamientos para enfermedades con prevalencia menor a 1/2000 (Ley 26.689)"},
  {c:"salud",q:"¿Qué es el Programa Nacional de Salud Sexual y Procreación Responsable?",o:["El programa creado por Ley 25.673 que garantiza acceso a información y métodos anticonceptivos","Un programa de educación sexual escolar","Un subsidio por hijo"],a:"El programa creado por Ley 25.673 que garantiza acceso a información y métodos anticonceptivos"},

  {c:"salud",q:"¿Qué ley regula el cannabis medicinal?",o:["Ley 27.350","Ley 26.529","Ley 23.737"],a:"Ley 27.350"},
  {c:"salud",q:"¿Qué es el REPROCANN?",o:["El Registro del Programa de Cannabis para uso medicinal","Un registro de profesionales","Una base de datos de pacientes"],a:"El Registro del Programa de Cannabis para uso medicinal"},
  {c:"salud",q:"¿Qué ley regula las vacunas obligatorias?",o:["Ley 27.491","Ley 26.529","Ley 22.990"],a:"Ley 27.491"},
  {c:"salud",q:"¿Qué ley regula la prevención y atención de trastornos alimentarios?",o:["Ley 26.396","Ley 26.529","Ley 23.660"],a:"Ley 26.396"},
  {c:"salud",q:"¿Qué ley protege la salud de los celíacos?",o:["Ley 26.588","Ley 26.529","Ley 24.240"],a:"Ley 26.588"},
  {c:"salud",q:"¿Qué ley regula los derechos del paciente en su relación con los profesionales de la salud?",o:["Ley 26.529 (modificada por Ley 26.742 sobre muerte digna)","Ley 17.132","Ley 23.660"],a:"Ley 26.529 (modificada por Ley 26.742 sobre muerte digna)"},
  {c:"salud",q:"¿Qué cobertura deben brindar las obras sociales en materia de salud mental?",o:["Prestaciones incluidas en el PMO y la Ley 26.657, incluyendo tratamientos ambulatorios","Solo internación","No tienen obligación"],a:"Prestaciones incluidas en el PMO y la Ley 26.657, incluyendo tratamientos ambulatorios"},
  {c:"salud",q:"¿Qué es la Superintendencia de Servicios de Salud?",o:["El organismo que regula y controla a las obras sociales nacionales","Un hospital público","Un sindicato médico"],a:"El organismo que regula y controla a las obras sociales nacionales"},
  {c:"salud",q:"¿Qué derecho tiene el paciente respecto de la información sobre su salud?",o:["Derecho a recibir información completa, comprensible y oportuna sobre su estado de salud","Solo a conocer el diagnóstico","No tiene derecho a información"],a:"Derecho a recibir información completa, comprensible y oportuna sobre su estado de salud"},
  {c:"salud",q:"¿Puede un menor de edad dar consentimiento informado?",o:["Sí, según la capacidad progresiva y la gravedad del acto, conforme al CCyCN y la Ley 26.529","No, nunca","Solo a partir de los 16 años"],a:"Sí, según la capacidad progresiva y la gravedad del acto, conforme al CCyCN y la Ley 26.529"},

  // ═══════════════════════════════════════
  // DERECHO MIGRATORIO (50)
  // ═══════════════════════════════════════
  {c:"migratorio",q:"¿Qué ley regula la política migratoria argentina?",o:["Ley 25.871","Ley 22.439 (derogada)","Ley 346"],a:"Ley 25.871"},
  {c:"migratorio",q:"¿Qué derecho reconoce la Ley 25.871 a los migrantes?",o:["El derecho a migrar como esencial e inalienable de la persona","Solo el derecho a trabajar","Solo el derecho a residir"],a:"El derecho a migrar como esencial e inalienable de la persona"},
  {c:"migratorio",q:"¿Qué organismo es la autoridad migratoria en Argentina?",o:["La Dirección Nacional de Migraciones (DNM)","La Policía Federal","El Ministerio del Interior"],a:"La Dirección Nacional de Migraciones (DNM)"},
  {c:"migratorio",q:"¿Qué categorías de residencia establece la Ley 25.871?",o:["Permanente, temporaria y transitoria","Solo permanente y temporal","Solo turista y residente"],a:"Permanente, temporaria y transitoria"},
  {c:"migratorio",q:"¿Qué es la residencia permanente?",o:["La que autoriza al extranjero a residir indefinidamente y ejercer toda actividad lícita","Una visa de trabajo temporal","Un permiso de turismo"],a:"La que autoriza al extranjero a residir indefinidamente y ejercer toda actividad lícita"},
  {c:"migratorio",q:"¿Qué es la residencia temporaria?",o:["La que autoriza al extranjero a permanecer por un plazo determinado, renovable","La ciudadanía","Un permiso de tránsito"],a:"La que autoriza al extranjero a permanecer por un plazo determinado, renovable"},
  {c:"migratorio",q:"¿Qué derechos tienen los extranjeros según el art. 20 de la CN?",o:["Los mismos derechos civiles que los ciudadanos argentinos","Solo derechos políticos","Ningún derecho"],a:"Los mismos derechos civiles que los ciudadanos argentinos"},
  {c:"migratorio",q:"¿Qué es la expulsión migratoria?",o:["La orden de salida del territorio argentino dictada por la DNM ante irregularidad migratoria o condena penal","La deportación inmediata sin proceso","Una multa"],a:"La orden de salida del territorio argentino dictada por la DNM ante irregularidad migratoria o condena penal"},
  {c:"migratorio",q:"¿La expulsión es recurrible judicialmente?",o:["Sí, el extranjero puede impugnarla ante la justicia, con efecto suspensivo","No, es irrecurrible","Solo ante la DNM"],a:"Sí, el extranjero puede impugnarla ante la justicia, con efecto suspensivo"},
  {c:"migratorio",q:"¿Qué ley regula la ciudadanía argentina?",o:["Ley 346","Ley 25.871","Ley 24.430"],a:"Ley 346"},
  {c:"migratorio",q:"¿Qué tipos de ciudadanía reconoce la Ley 346?",o:["Nativa (por nacer en el territorio), por opción (hijos de argentinos nacidos en el exterior) y por naturalización","Solo nativa","Solo por naturalización"],a:"Nativa (por nacer en el territorio), por opción (hijos de argentinos nacidos en el exterior) y por naturalización"},
  {c:"migratorio",q:"¿Cuántos años de residencia se requieren para obtener la ciudadanía por naturalización?",o:["2 años de residencia legal continuada","5 años","10 años"],a:"2 años de residencia legal continuada"},
  {c:"migratorio",q:"¿Pueden los extranjeros votar en Argentina?",o:["Sí, en elecciones provinciales y municipales según cada jurisdicción, pero no en nacionales","Sí, en todas las elecciones","No, nunca"],a:"Sí, en elecciones provinciales y municipales según cada jurisdicción, pero no en nacionales"},
  {c:"migratorio",q:"¿Qué es el criterio de nacionalidad MERCOSUR?",o:["El que facilita la residencia temporaria a nacionales de países del MERCOSUR y asociados","Un pasaporte común","Una exención de visa"],a:"El que facilita la residencia temporaria a nacionales de países del MERCOSUR y asociados"},
  {c:"migratorio",q:"¿Qué facilidades tienen los ciudadanos del MERCOSUR?",o:["Obtener residencia temporaria de 2 años con solo acreditar nacionalidad, sin necesidad de contrato laboral previo","Libre circulación total","Ciudadanía automática"],a:"Obtener residencia temporaria de 2 años con solo acreditar nacionalidad, sin necesidad de contrato laboral previo"},
  {c:"migratorio",q:"¿Qué es el refugio?",o:["La protección que se otorga a quien huye de su país por persecución, conflicto armado o violencia generalizada","Una visa de turismo","Un asilo diplomático"],a:"La protección que se otorga a quien huye de su país por persecución, conflicto armado o violencia generalizada"},
  {c:"migratorio",q:"¿Qué ley regula el reconocimiento del estatuto de refugiado?",o:["Ley 26.165","Ley 25.871","Ley 346"],a:"Ley 26.165"},
  {c:"migratorio",q:"¿Qué es el principio de no devolución (non-refoulement)?",o:["La prohibición de expulsar o devolver a un refugiado al país donde su vida o libertad corren peligro","El derecho de retorno","Un principio comercial"],a:"La prohibición de expulsar o devolver a un refugiado al país donde su vida o libertad corren peligro"},
  {c:"migratorio",q:"¿Qué organismo internacional asiste a los refugiados?",o:["El ACNUR (Alto Comisionado de las Naciones Unidas para los Refugiados)","La OIT","La OMS"],a:"El ACNUR (Alto Comisionado de las Naciones Unidas para los Refugiados)"},
  {c:"migratorio",q:"¿Qué es el asilo diplomático?",o:["La protección otorgada por una embajada o legación a una persona perseguida políticamente","Un tipo de visa","Un refugio territorial"],a:"La protección otorgada por una embajada o legación a una persona perseguida políticamente"},
  {c:"migratorio",q:"¿Qué es el asilo territorial?",o:["La protección que un Estado otorga en su territorio a una persona perseguida por otro Estado","El asilo en una embajada","Una visa humanitaria"],a:"La protección que un Estado otorga en su territorio a una persona perseguida por otro Estado"},
  {c:"migratorio",q:"¿Tienen los migrantes irregulares derecho a la salud y educación?",o:["Sí, la Ley 25.871 garantiza acceso a salud, educación y asistencia social independientemente de la condición migratoria","No, están excluidos","Solo a la educación"],a:"Sí, la Ley 25.871 garantiza acceso a salud, educación y asistencia social independientemente de la condición migratoria"},
  {c:"migratorio",q:"¿Qué es la retención para expulsión?",o:["Una medida restrictiva de libertad ordenada judicialmente mientras se ejecuta la expulsión","Un arresto policial","Una multa"],a:"Una medida restrictiva de libertad ordenada judicialmente mientras se ejecuta la expulsión"},
  {c:"migratorio",q:"¿Qué estableció la CSJN en 'De Luca' sobre extranjeros?",o:["Que la igualdad del art. 20 CN prohíbe discriminar a los extranjeros en el acceso a derechos civiles","Que los extranjeros no tienen derechos","Que solo tienen derechos los residentes"],a:"Que la igualdad del art. 20 CN prohíbe discriminar a los extranjeros en el acceso a derechos civiles"},
  {c:"migratorio",q:"¿Puede revocarse la residencia permanente?",o:["Sí, por ausencia prolongada del país (más de 2 años) o por condenas penales graves","No, es irrevocable","Solo por orden judicial"],a:"Sí, por ausencia prolongada del país (más de 2 años) o por condenas penales graves"},
  {c:"migratorio",q:"¿Qué es el DNI para extranjeros?",o:["El Documento Nacional de Identidad que se otorga a los extranjeros con residencia legal","Un pasaporte argentino","Una credencial consular"],a:"El Documento Nacional de Identidad que se otorga a los extranjeros con residencia legal"},
  {c:"migratorio",q:"¿Qué es la reunificación familiar en materia migratoria?",o:["El derecho del migrante a solicitar la residencia de sus familiares directos","Un trámite de adopción","Un acuerdo bilateral"],a:"El derecho del migrante a solicitar la residencia de sus familiares directos"},
  {c:"migratorio",q:"¿Qué es la apatridia?",o:["La condición de una persona que no es considerada nacional por ningún Estado","La doble nacionalidad","La ciudadanía múltiple"],a:"La condición de una persona que no es considerada nacional por ningún Estado"},
  {c:"migratorio",q:"¿Qué convención protege a los apátridas?",o:["La Convención sobre el Estatuto de los Apátridas de 1954","La Convención de Viena","La CONVEMAR"],a:"La Convención sobre el Estatuto de los Apátridas de 1954"},
  {c:"migratorio",q:"¿Qué DNU modificó aspectos de la Ley 25.871?",o:["DNU 70/2017","DNU 70/2023","DNU 274/2024"],a:"DNU 70/2017"},

  {c:"migratorio",q:"¿Qué estableció la CSJN sobre el DNU 70/2017?",o:["Fue parcialmente declarado inconstitucional en diversas instancias judiciales","Fue confirmado en su totalidad","No fue judicializado"],a:"Fue parcialmente declarado inconstitucional en diversas instancias judiciales"},
  {c:"migratorio",q:"¿Qué es la precaria migratoria?",o:["La autorización provisoria de permanencia que se otorga mientras se tramita la residencia","Una residencia ilegal","Un tipo de visa"],a:"La autorización provisoria de permanencia que se otorga mientras se tramita la residencia"},
  {c:"migratorio",q:"¿Qué es el RADEX?",o:["El sistema de Radicación a Distancia de Extranjeros de la DNM para trámites en línea","Un registro de delincuentes","Un sistema de control de fronteras"],a:"El sistema de Radicación a Distancia de Extranjeros de la DNM para trámites en línea"},
  {c:"migratorio",q:"¿Pueden los extranjeros ejercer profesiones liberales en Argentina?",o:["Sí, con la convalidación o reválida del título según la normativa vigente","No, está prohibido","Solo con autorización del presidente"],a:"Sí, con la convalidación o reválida del título según la normativa vigente"},
  {c:"migratorio",q:"¿Qué tratado regional facilita la libre circulación de personas en el MERCOSUR?",o:["El Acuerdo de Residencia del MERCOSUR (2002)","El Tratado de Asunción","El Protocolo de Ouro Preto"],a:"El Acuerdo de Residencia del MERCOSUR (2002)"},
  {c:"migratorio",q:"¿Qué es la deportación?",o:["La ejecución efectiva de la orden de expulsión, haciendo salir al extranjero del territorio","Una multa migratoria","Un cambio de categoría"],a:"La ejecución efectiva de la orden de expulsión, haciendo salir al extranjero del territorio"},
  {c:"migratorio",q:"¿Qué principio rige la política migratoria argentina según la Ley 25.871?",o:["La integración del migrante a la sociedad con igualdad de derechos y el respeto a la diversidad cultural","La restricción migratoria","El cierre de fronteras"],a:"La integración del migrante a la sociedad con igualdad de derechos y el respeto a la diversidad cultural"},
  {c:"migratorio",q:"¿Tienen los migrantes derecho a la defensa en juicio?",o:["Sí, con patrocinio letrado gratuito si es necesario, en cualquier procedimiento migratorio","No, no tienen derecho a defensa","Solo si tienen residencia legal"],a:"Sí, con patrocinio letrado gratuito si es necesario, en cualquier procedimiento migratorio"},
  {c:"migratorio",q:"¿Qué es la convalidación de títulos extranjeros?",o:["El procedimiento para reconocer un título académico extranjero en Argentina","La traducción del título","Una equivalencia automática"],a:"El procedimiento para reconocer un título académico extranjero en Argentina"},
  {c:"migratorio",q:"¿Qué es el tráfico de personas en contexto migratorio?",o:["La facilitación de la entrada ilegal de personas a un país con fines de lucro","La migración regular","El turismo"],a:"La facilitación de la entrada ilegal de personas a un país con fines de lucro"},


  // ═══════════════════════════════════════
  // DERECHOS HUMANOS (50)
  // ═══════════════════════════════════════
  {c:"ddhh",q:"¿Qué artículo de la CN otorga jerarquía constitucional a tratados de derechos humanos?",o:["Art. 75 inc. 22","Art. 31","Art. 43"],a:"Art. 75 inc. 22"},
  {c:"ddhh",q:"¿Cuántos instrumentos de derechos humanos tienen jerarquía constitucional por la reforma de 1994?",o:["Once (más los que el Congreso apruebe con mayoría especial)","Cinco","Todos los tratados internacionales"],a:"Once (más los que el Congreso apruebe con mayoría especial)"},
  {c:"ddhh",q:"¿La Convención Americana sobre Derechos Humanos (Pacto de San José de Costa Rica) tiene jerarquía constitucional?",o:["Sí","No, es supralegal pero infraconstitucional","No, es ley ordinaria"],a:"Sí"},
  {c:"ddhh",q:"¿Qué instrumento se conoce como 'Pacto de San José de Costa Rica'?",o:["La Convención Americana sobre Derechos Humanos","La Declaración Americana de Derechos y Deberes del Hombre","El Pacto Internacional de Derechos Civiles y Políticos"],a:"La Convención Americana sobre Derechos Humanos"},
  {c:"ddhh",q:"¿La Declaración Universal de Derechos Humanos tiene jerarquía constitucional en Argentina?",o:["Sí, desde la reforma de 1994","No, es solo una recomendación","Sí, pero solo parcialmente"],a:"Sí, desde la reforma de 1994"},
  {c:"ddhh",q:"¿Qué dos órganos principales tiene el Sistema Interamericano de Derechos Humanos?",o:["La Comisión Interamericana (CIDH) y la Corte Interamericana (Corte IDH)","La OEA y la CIDH","La Corte IDH y el Consejo de Seguridad"],a:"La Comisión Interamericana (CIDH) y la Corte Interamericana (Corte IDH)"},
  {c:"ddhh",q:"¿Dónde tiene sede la Corte Interamericana de Derechos Humanos?",o:["San José, Costa Rica","Washington D.C.","Buenos Aires"],a:"San José, Costa Rica"},
  {c:"ddhh",q:"¿Dónde tiene sede la Comisión Interamericana de Derechos Humanos?",o:["Washington D.C.","San José, Costa Rica","Ginebra"],a:"Washington D.C."},
  {c:"ddhh",q:"¿Pueden los particulares acceder directamente a la Corte Interamericana?",o:["No, solo la Comisión o los Estados pueden someter un caso a la Corte","Sí, directamente","Solo si el Estado lo autoriza"],a:"No, solo la Comisión o los Estados pueden someter un caso a la Corte"},
  {c:"ddhh",q:"¿Qué es el 'control de convencionalidad'?",o:["La obligación de los jueces nacionales de verificar la compatibilidad de las normas internas con la CADH","Un control de constitucionalidad","Una auditoría de la OEA"],a:"La obligación de los jueces nacionales de verificar la compatibilidad de las normas internas con la CADH"},
  {c:"ddhh",q:"¿En qué caso la Corte IDH estableció la doctrina del control de convencionalidad?",o:["Almonacid Arellano vs. Chile (2006)","Velásquez Rodríguez vs. Honduras","Barrios Altos vs. Perú"],a:"Almonacid Arellano vs. Chile (2006)"},
  {c:"ddhh",q:"¿Qué garantía protege la libertad ambulatoria contra detenciones ilegales?",o:["El hábeas corpus","El amparo","El hábeas data"],a:"El hábeas corpus"},
  {c:"ddhh",q:"¿Qué garantía constitucional protege los datos personales del individuo?",o:["El hábeas data (art. 43, párrafo tercero CN)","El amparo","El hábeas corpus"],a:"El hábeas data (art. 43, párrafo tercero CN)"},
  {c:"ddhh",q:"¿Qué artículo de la CN consagra la acción de amparo?",o:["Art. 43","Art. 14","Art. 18"],a:"Art. 43"},
  {c:"ddhh",q:"¿Qué establece el art. 18 de la CN respecto a la defensa en juicio?",o:["Es inviolable la defensa en juicio de la persona y de los derechos","Establece la libertad de prensa","Consagra el derecho al trabajo"],a:"Es inviolable la defensa en juicio de la persona y de los derechos"},
  {c:"ddhh",q:"¿Qué principio establece el art. 19 de la CN?",o:["El principio de reserva: las acciones privadas que no ofendan al orden público ni perjudiquen a terceros están solo reservadas a Dios","El principio de legalidad penal","El principio de igualdad"],a:"El principio de reserva: las acciones privadas que no ofendan al orden público ni perjudiquen a terceros están solo reservadas a Dios"},
  {c:"ddhh",q:"¿Qué caracteriza a los crímenes de lesa humanidad?",o:["Son ataques generalizados o sistemáticos contra una población civil","Son delitos comunes agravados","Son delitos cometidos en guerra"],a:"Son ataques generalizados o sistemáticos contra una población civil"},
  {c:"ddhh",q:"¿Los crímenes de lesa humanidad son imprescriptibles en Argentina?",o:["Sí, por la Convención sobre Imprescriptibilidad con jerarquía constitucional","No, prescriben a los 15 años","Solo los cometidos después de 1994"],a:"Sí, por la Convención sobre Imprescriptibilidad con jerarquía constitucional"},
  {c:"ddhh",q:"¿Qué fallo de la CSJN declaró la inconstitucionalidad de las leyes de Obediencia Debida y Punto Final?",o:["Simón (2005)","Arancibia Clavel (2004)","Mazzeo (2007)"],a:"Simón (2005)"},
  {c:"ddhh",q:"¿Qué estableció la CSJN en el fallo 'Arancibia Clavel' (2004)?",o:["La imprescriptibilidad de los crímenes de lesa humanidad como principio de ius cogens","La validez de las leyes de amnistía","La incompetencia de tribunales argentinos"],a:"La imprescriptibilidad de los crímenes de lesa humanidad como principio de ius cogens"},
  {c:"ddhh",q:"¿Qué estableció el fallo 'Mazzeo' de la CSJN (2007)?",o:["La inconstitucionalidad de los indultos a condenados por crímenes de lesa humanidad","La validez de los indultos presidenciales","La competencia exclusiva de tribunales internacionales"],a:"La inconstitucionalidad de los indultos a condenados por crímenes de lesa humanidad"},
  {c:"ddhh",q:"¿Qué convención protege específicamente los derechos del niño con jerarquía constitucional?",o:["La Convención sobre los Derechos del Niño","La Convención de Ginebra","El Pacto de San José"],a:"La Convención sobre los Derechos del Niño"},
  {c:"ddhh",q:"¿Qué convención protege contra la discriminación racial?",o:["La Convención Internacional sobre la Eliminación de Todas las Formas de Discriminación Racial","La Declaración Universal","El Pacto de San José"],a:"La Convención Internacional sobre la Eliminación de Todas las Formas de Discriminación Racial"},
  {c:"ddhh",q:"¿Qué convención protege contra la discriminación hacia la mujer?",o:["La CEDAW (Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer)","La Convención de Belém do Pará","La Declaración Universal"],a:"La CEDAW (Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer)"},
  {c:"ddhh",q:"¿Qué instrumento regional aborda específicamente la violencia contra la mujer?",o:["La Convención de Belém do Pará (1994)","La CEDAW","La Declaración Americana"],a:"La Convención de Belém do Pará (1994)"},
  {c:"ddhh",q:"¿Qué ley argentina incorpora la Convención de Belém do Pará?",o:["Ley 24.632","Ley 26.485","Ley 24.417"],a:"Ley 24.632"},
  {c:"ddhh",q:"¿Qué ley argentina establece la protección integral para prevenir, sancionar y erradicar la violencia contra las mujeres?",o:["Ley 26.485","Ley 24.632","Ley 27.499"],a:"Ley 26.485"},
  {c:"ddhh",q:"¿Qué es la Ley Micaela (27.499)?",o:["Establece la capacitación obligatoria en género y violencia contra las mujeres para funcionarios públicos","Una ley de cupo femenino","Una ley de femicidio"],a:"Establece la capacitación obligatoria en género y violencia contra las mujeres para funcionarios públicos"},
  {c:"ddhh",q:"¿Qué convención protege contra la tortura con jerarquía constitucional?",o:["La Convención contra la Tortura y Otros Tratos o Penas Crueles, Inhumanos o Degradantes","La Convención de Ginebra","El Pacto de San José exclusivamente"],a:"La Convención contra la Tortura y Otros Tratos o Penas Crueles, Inhumanos o Degradantes"},
  {c:"ddhh",q:"¿Qué son las '100 Reglas de Brasilia'?",o:["Reglas de acceso a la justicia para personas en condición de vulnerabilidad","Normas de procedimiento de la Corte IDH","Principios del derecho penal internacional"],a:"Reglas de acceso a la justicia para personas en condición de vulnerabilidad"},
  {c:"ddhh",q:"¿Qué es el principio 'pro homine' en materia de derechos humanos?",o:["La obligación de interpretar las normas del modo más favorable a la persona","La presunción de inocencia","El principio de legalidad"],a:"La obligación de interpretar las normas del modo más favorable a la persona"},
  {c:"ddhh",q:"¿Qué significa el principio de 'progresividad' en materia de derechos económicos, sociales y culturales?",o:["Que los Estados deben avanzar gradualmente hacia la plena efectividad de estos derechos y no retroceder","Que los derechos se adquieren con la edad","Que los tratados se aplican gradualmente"],a:"Que los Estados deben avanzar gradualmente hacia la plena efectividad de estos derechos y no retroceder"},
  {c:"ddhh",q:"¿Qué es el principio de no regresividad?",o:["Prohíbe al Estado reducir el nivel de protección de derechos ya alcanzado","Prohíbe reformar la Constitución","Impide la derogación de leyes"],a:"Prohíbe al Estado reducir el nivel de protección de derechos ya alcanzado"},
  {c:"ddhh",q:"¿En qué caso la Corte IDH condenó a Argentina por condiciones carcelarias?",o:["'Instituto de Reeducación del Menor' (2004) — sobre menores en instituciones","Bulacio vs. Argentina","Mendoza y otros vs. Argentina"],a:"'Instituto de Reeducación del Menor' (2004) — sobre menores en instituciones"},
  {c:"ddhh",q:"¿Qué determinó la Corte IDH en 'Bulacio vs. Argentina' (2003)?",o:["La responsabilidad internacional de Argentina por la detención arbitraria y muerte de Walter Bulacio por parte de la policía","La validez de las detenciones policiales","La incompetencia de la Corte IDH"],a:"La responsabilidad internacional de Argentina por la detención arbitraria y muerte de Walter Bulacio por parte de la policía"},
  {c:"ddhh",q:"¿Qué estableció la Corte IDH en 'Mendoza y otros vs. Argentina' (2013)?",o:["Que las penas de prisión y reclusión perpetuas aplicadas a menores de edad violan la CADH","Que Argentina puede aplicar pena perpetua a menores","Que los menores deben ser juzgados por tribunales militares"],a:"Que las penas de prisión y reclusión perpetuas aplicadas a menores de edad violan la CADH"},
  {c:"ddhh",q:"¿Qué rama del derecho regula los conflictos armados?",o:["El Derecho Internacional Humanitario (DIH)","El derecho penal nacional","El derecho administrativo"],a:"El Derecho Internacional Humanitario (DIH)"},
  {c:"ddhh",q:"¿Qué instrumentos son la base del DIH?",o:["Los cuatro Convenios de Ginebra de 1949 y sus Protocolos Adicionales","La Declaración Universal de Derechos Humanos","El Pacto de San José de Costa Rica"],a:"Los cuatro Convenios de Ginebra de 1949 y sus Protocolos Adicionales"},
  {c:"ddhh",q:"¿Qué tribunal internacional juzga genocidio, crímenes de lesa humanidad y crímenes de guerra?",o:["La Corte Penal Internacional (CPI), con sede en La Haya","La Corte Internacional de Justicia","La Corte Interamericana de Derechos Humanos"],a:"La Corte Penal Internacional (CPI), con sede en La Haya"},
  {c:"ddhh",q:"¿Qué tratado crea la Corte Penal Internacional?",o:["El Estatuto de Roma (1998)","La Carta de las Naciones Unidas","El Pacto de San José"],a:"El Estatuto de Roma (1998)"},
  {c:"ddhh",q:"¿Qué artículo de la CN reconoce la preexistencia étnica y cultural de los pueblos indígenas argentinos?",o:["Art. 75 inc. 17","Art. 14","Art. 43"],a:"Art. 75 inc. 17"},
  {c:"ddhh",q:"¿Qué derechos reconoce el art. 75 inc. 17 de la CN a los pueblos indígenas?",o:["La posesión comunitaria de las tierras, la educación bilingüe y la personería jurídica de sus comunidades","Solo el derecho al voto","Solo beneficios económicos"],a:"La posesión comunitaria de las tierras, la educación bilingüe y la personería jurídica de sus comunidades"},
  {c:"ddhh",q:"¿Qué ley creó el Mecanismo Nacional de Prevención de la Tortura en Argentina?",o:["Ley 26.827","Ley 26.485","Ley 25.871"],a:"Ley 26.827"},
  {c:"ddhh",q:"¿Qué función cumple el Defensor del Pueblo de la Nación según el art. 86 CN?",o:["La defensa y protección de los derechos humanos y demás derechos, garantías e intereses tutelados por la CN","La representación del Estado en juicio","La fiscalización del gasto público"],a:"La defensa y protección de los derechos humanos y demás derechos, garantías e intereses tutelados por la CN"},
  {c:"ddhh",q:"¿Qué instrumento protege a los refugiados a nivel internacional?",o:["La Convención sobre el Estatuto de los Refugiados de 1951","La Declaración Universal","La Convención Americana"],a:"La Convención sobre el Estatuto de los Refugiados de 1951"},
  {c:"ddhh",q:"¿Qué ley argentina regula el reconocimiento de la condición de refugiado?",o:["Ley 26.165","Ley 25.871","Ley 24.660"],a:"Ley 26.165"},

  // ═══════════════════════════════════════
  // DELITOS FEDERALES (50)
  // ═══════════════════════════════════════
  {c:"federales",q:"¿Qué artículo de la CN establece la competencia de la justicia federal?",o:["Art. 116","Art. 75","Art. 18"],a:"Art. 116"},
  {c:"federales",q:"¿Qué ley regula la competencia penal federal?",o:["La Ley 48 y el Código Procesal Penal Federal (Ley 27.063)","Solo el Código Penal","La Ley 27.499"],a:"La Ley 48 y el Código Procesal Penal Federal (Ley 27.063)"},
  {c:"federales",q:"¿Cuándo un delito es de competencia federal por razón de la materia?",o:["Cuando afecta intereses federales, como la seguridad del Estado, la renta nacional, el comercio interprovincial o delitos previstos en leyes federales especiales","Cuando el imputado es extranjero","Cuando la pena supera los 3 años"],a:"Cuando afecta intereses federales, como la seguridad del Estado, la renta nacional, el comercio interprovincial o delitos previstos en leyes federales especiales"},
  {c:"federales",q:"¿Qué ley regula los estupefacientes en Argentina?",o:["Ley 23.737","Ley 27.737","Código Penal, Libro II"],a:"Ley 23.737"},
  {c:"federales",q:"¿Cuál es la pena para la producción o fabricación de estupefacientes según la Ley 23.737?",o:["4 a 15 años de reclusión o prisión y multa","1 a 6 años","8 a 20 años"],a:"4 a 15 años de reclusión o prisión y multa"},
  {c:"federales",q:"¿Cuál es la pena para la comercialización de estupefacientes?",o:["4 a 15 años de reclusión o prisión y multa","1 a 3 años","6 a 20 años"],a:"4 a 15 años de reclusión o prisión y multa"},
  {c:"federales",q:"¿Cuál es la pena para la tenencia simple de estupefacientes (art. 14, párrafo 1°)?",o:["1 a 6 años de prisión y multa","3 meses a 2 años","4 a 15 años"],a:"1 a 6 años de prisión y multa"},
  {c:"federales",q:"¿Qué estableció el fallo 'Arriola' de la CSJN (2009) sobre tenencia para consumo personal?",o:["Declaró inconstitucional la penalización de la tenencia para consumo personal que no afecte a terceros (art. 14, 2° párrafo)","Confirmó la constitucionalidad de penalizar la tenencia para consumo","Despenalizó toda tenencia de estupefacientes"],a:"Declaró inconstitucional la penalización de la tenencia para consumo personal que no afecte a terceros (art. 14, 2° párrafo)"},
  {c:"federales",q:"¿Qué agravante prevé la Ley 23.737 cuando intervienen menores de edad?",o:["La pena se aumenta (arts. 10 y 11) cuando se suministra o facilita estupefacientes a menores","No hay agravante por menores","Se reduce la pena"],a:"La pena se aumenta (arts. 10 y 11) cuando se suministra o facilita estupefacientes a menores"},
  {c:"federales",q:"¿Qué es el 'agente encubierto' en la Ley 27.319?",o:["Un funcionario de las fuerzas de seguridad autorizado judicialmente a infiltrarse en organizaciones criminales","Un informante civil","Un perito del Poder Judicial"],a:"Un funcionario de las fuerzas de seguridad autorizado judicialmente a infiltrarse en organizaciones criminales"},
  {c:"federales",q:"¿Qué ley tipifica el delito de contrabando en Argentina?",o:["El Código Aduanero (Ley 22.415)","El Código Penal","La Ley 23.737"],a:"El Código Aduanero (Ley 22.415)"},
  {c:"federales",q:"¿Cuál es la pena para el contrabando simple (art. 863 del Código Aduanero)?",o:["2 a 8 años de prisión","6 meses a 3 años","4 a 15 años"],a:"2 a 8 años de prisión"},
  {c:"federales",q:"¿Cuál es la pena del contrabando agravado (art. 865)?",o:["3 a 12 años de prisión","2 a 8 años","1 a 6 años"],a:"3 a 12 años de prisión"},
  {c:"federales",q:"¿Qué se entiende por contrabando según el Código Aduanero?",o:["Impedir o dificultar el adecuado ejercicio del control aduanero mediante ardid o engaño","Solo la importación de mercaderías prohibidas","Solo la evasión de impuestos aduaneros"],a:"Impedir o dificultar el adecuado ejercicio del control aduanero mediante ardid o engaño"},
  {c:"federales",q:"¿Qué artículo del CP tipifica el lavado de activos?",o:["Art. 303","Art. 172","Art. 174"],a:"Art. 303"},
  {c:"federales",q:"¿Cuál es la pena del lavado de activos según el art. 303 inc. 1° del CP?",o:["3 a 10 años de prisión y multa","1 a 6 años","6 meses a 3 años"],a:"3 a 10 años de prisión y multa"},
  {c:"federales",q:"¿A partir de qué monto se configura el lavado de activos del art. 303 inc. 1°?",o:["Cuando el valor de los bienes supere los $300.000 (pesos trescientos mil, según texto original)","No hay monto mínimo","A partir de 1 millón de dólares"],a:"Cuando el valor de los bienes supere los $300.000 (pesos trescientos mil, según texto original)"},
  {c:"federales",q:"¿Qué es el autolavado?",o:["Cuando quien lava los activos es el mismo que cometió el delito precedente que los originó","Cuando un banco lava sus propios fondos","Un delito contra las personas"],a:"Cuando quien lava los activos es el mismo que cometió el delito precedente que los originó"},
  {c:"federales",q:"¿Qué ley contiene el actual Régimen Penal Tributario?",o:["Ley 27.430 (Título IX)","Ley 24.769","Ley 11.683"],a:"Ley 27.430 (Título IX)"},
  {c:"federales",q:"¿A partir de qué monto se configura la evasión simple de tributos nacionales?",o:["Cuando el monto evadido exceda la suma de $1.500.000 por cada tributo y por cada ejercicio anual","Desde $100.000","No hay monto mínimo"],a:"Cuando el monto evadido exceda la suma de $1.500.000 por cada tributo y por cada ejercicio anual"},
  {c:"federales",q:"¿Cuál es la pena de la evasión tributaria simple?",o:["2 a 6 años de prisión","6 meses a 2 años","4 a 10 años"],a:"2 a 6 años de prisión"},
  {c:"federales",q:"¿Cuál es la pena de la evasión tributaria agravada?",o:["3 años y 6 meses a 9 años de prisión","2 a 6 años","1 a 4 años"],a:"3 años y 6 meses a 9 años de prisión"},
  {c:"federales",q:"¿Qué es la 'apropiación indebida de tributos' en el Régimen Penal Tributario?",o:["No ingresar al fisco tributos retenidos o percibidos como agente de retención o percepción","Robar fondos del Estado","Evadir tributos municipales"],a:"No ingresar al fisco tributos retenidos o percibidos como agente de retención o percepción"},
  {c:"federales",q:"¿Qué ley reprime la trata de personas en Argentina?",o:["Ley 26.842 (modificatoria de la Ley 26.364)","Ley 23.737","Código Penal exclusivamente"],a:"Ley 26.842 (modificatoria de la Ley 26.364)"},
  {c:"federales",q:"¿Qué pena establece la Ley 26.842 para la trata de personas?",o:["4 a 8 años de prisión (agravada: 5 a 15 años)","1 a 3 años","10 a 25 años"],a:"4 a 8 años de prisión (agravada: 5 a 15 años)"},
  {c:"federales",q:"¿Es relevante el consentimiento de la víctima mayor de edad en la trata de personas según la Ley 26.842?",o:["No, la ley eliminó el consentimiento como eximente","Sí, si consintió no hay delito","Solo si consta por escrito"],a:"No, la ley eliminó el consentimiento como eximente"},
  {c:"federales",q:"¿Qué tipo de explotación comprende la trata de personas?",o:["Sexual, laboral, para extracción de órganos, servidumbre y matrimonio forzado, entre otras","Solo explotación sexual","Solo explotación laboral"],a:"Sexual, laboral, para extracción de órganos, servidumbre y matrimonio forzado, entre otras"},
  {c:"federales",q:"¿Qué ley incorporó los delitos informáticos al Código Penal argentino?",o:["Ley 26.388 (2008)","Ley 25.326","Ley 27.078"],a:"Ley 26.388 (2008)"},
  {c:"federales",q:"¿Qué delito tipifica el art. 153 bis del CP (incorporado por la Ley 26.388)?",o:["El acceso ilegítimo a un sistema informático de acceso restringido","La estafa informática","La distribución de pornografía infantil"],a:"El acceso ilegítimo a un sistema informático de acceso restringido"},
  {c:"federales",q:"¿Qué ley tipifica el grooming (contacto con menores por medios tecnológicos con fines sexuales)?",o:["Ley 26.904 que incorporó el art. 131 al CP","Ley 26.388","Ley 25.326"],a:"Ley 26.904 que incorporó el art. 131 al CP"},
  {c:"federales",q:"¿Qué artículo del CP tipifica la asociación ilícita?",o:["Art. 210","Art. 189 bis","Art. 303"],a:"Art. 210"},
  {c:"federales",q:"¿Cuál es la pena de la asociación ilícita simple (art. 210 CP)?",o:["3 a 10 años de prisión","1 a 6 años","6 meses a 3 años"],a:"3 a 10 años de prisión"},
  {c:"federales",q:"¿Qué artículo del CP tipifica la asociación ilícita terrorista?",o:["Art. 213 ter","Art. 210","Art. 189 bis"],a:"Art. 213 ter"},
  {c:"federales",q:"¿Cuál es la pena para el financiamiento del terrorismo según el art. 306 del CP?",o:["5 a 15 años de prisión y multa","1 a 6 años","3 a 10 años"],a:"5 a 15 años de prisión y multa"},
  {c:"federales",q:"¿Qué artículo del CP tipifica la rebelión?",o:["Art. 226","Art. 210","Art. 189 bis"],a:"Art. 226"},
  {c:"federales",q:"¿Cuál es la pena para quien se alzare en armas para cambiar la Constitución (rebelión)?",o:["5 a 15 años de prisión","1 a 6 años","3 a 10 años"],a:"5 a 15 años de prisión"},
  {c:"federales",q:"¿Qué artículo del CP tipifica la sedición?",o:["Art. 229","Art. 226","Art. 210"],a:"Art. 229"},
  {c:"federales",q:"¿Qué artículo de la Ley 25.871 tipifica el tráfico ilícito de migrantes?",o:["Art. 116 a 121","Art. 1 a 5","Art. 50 a 55"],a:"Art. 116 a 121"},
  {c:"federales",q:"¿Cuál es la pena para quien promueva o facilite la permanencia ilegal de extranjeros con fines de lucro?",o:["1 a 6 años de prisión","6 meses a 2 años","3 a 10 años"],a:"1 a 6 años de prisión"},
  {c:"federales",q:"¿Qué ley regula los delitos electorales en Argentina?",o:["El Código Electoral Nacional (Ley 19.945) y la Ley Orgánica de Partidos Políticos (23.298)","Solo el Código Penal","La Ley 26.215 exclusivamente"],a:"El Código Electoral Nacional (Ley 19.945) y la Ley Orgánica de Partidos Políticos (23.298)"},
  {c:"federales",q:"¿Es delito federal la compra de votos?",o:["Sí, está penado en el Código Electoral Nacional con prisión","No, es solo una falta","Solo si interviene un funcionario público"],a:"Sí, está penado en el Código Electoral Nacional con prisión"},
  {c:"federales",q:"¿Qué artículo del CP tipifica la malversación de caudales públicos?",o:["Art. 260","Art. 172","Art. 174"],a:"Art. 260"},
  {c:"federales",q:"¿Cuál es la pena para el peculado (art. 261 CP)?",o:["2 a 10 años de reclusión o prisión e inhabilitación absoluta perpetua","1 a 6 años","6 meses a 3 años"],a:"2 a 10 años de reclusión o prisión e inhabilitación absoluta perpetua"},
  {c:"federales",q:"¿Qué artículo del CP tipifica las negociaciones incompatibles con el ejercicio de la función pública?",o:["Art. 265","Art. 260","Art. 256"],a:"Art. 265"},
  {c:"federales",q:"¿Qué artículo del CP tipifica el cohecho (soborno)?",o:["Art. 256 (cohecho pasivo) y 258 (cohecho activo)","Art. 172","Art. 174"],a:"Art. 256 (cohecho pasivo) y 258 (cohecho activo)"},
  {c:"federales",q:"¿Qué artículo del CP tipifica el enriquecimiento ilícito de funcionarios públicos?",o:["Art. 268 (2)","Art. 256","Art. 260"],a:"Art. 268 (2)"},

  // COMPLETAR A 50: civil (+1), penal (+1), laboral (+2)
  {c:"civil",q:"¿Qué es la evicción?",o:["La garantía que debe el enajenante al adquirente cuando un tercero reclama un derecho anterior sobre la cosa transmitida","Una forma de prescripción","Un tipo de contrato"],a:"La garantía que debe el enajenante al adquirente cuando un tercero reclama un derecho anterior sobre la cosa transmitida"},
  {c:"penal",q:"¿Qué es el concurso aparente de leyes penales?",o:["Cuando varias normas penales parecen aplicables pero solo una rige el caso por especialidad, subsidiariedad o consunción","La acumulación de penas","La reincidencia"],a:"Cuando varias normas penales parecen aplicables pero solo una rige el caso por especialidad, subsidiariedad o consunción"},
  {c:"laboral",q:"¿Qué es el ius variandi?",o:["La facultad del empleador de modificar condiciones no esenciales del contrato de trabajo sin alterar la remuneración ni causar perjuicio moral o material","El derecho del trabajador a cambiar de empleo","Una cláusula de confidencialidad"],a:"La facultad del empleador de modificar condiciones no esenciales del contrato de trabajo sin alterar la remuneración ni causar perjuicio moral o material"},
  {c:"laboral",q:"¿Qué establece el art. 245 de la LCT sobre el despido sin justa causa?",o:["Una indemnización equivalente a un mes de sueldo por cada año de servicio o fracción mayor a 3 meses","Dos meses de sueldo por año","Ninguna indemnización"],a:"Una indemnización equivalente a un mes de sueldo por cada año de servicio o fracción mayor a 3 meses"},

  // COMPLETAR: ddhh (+4)
  {c:"ddhh",q:"¿Qué estableció el fallo 'Mazzeo' de la CSJN?",o:["La inconstitucionalidad del indulto a condenados por crímenes de lesa humanidad","La constitucionalidad del indulto","La prescripción de delitos de lesa humanidad"],a:"La inconstitucionalidad del indulto a condenados por crímenes de lesa humanidad"},
  {c:"ddhh",q:"¿Qué es el Protocolo de Estambul?",o:["El manual para la investigación y documentación eficaces de la tortura y otros tratos crueles","Un tratado de libre comercio","Un acuerdo migratorio"],a:"El manual para la investigación y documentación eficaces de la tortura y otros tratos crueles"},
  {c:"ddhh",q:"¿Qué establece la Convención sobre los Derechos del Niño?",o:["Que los niños son sujetos de derecho y su interés superior debe ser una consideración primordial","Que los niños no tienen derechos autónomos","Solo regula la adopción internacional"],a:"Que los niños son sujetos de derecho y su interés superior debe ser una consideración primordial"},
  {c:"ddhh",q:"¿Qué es la Comisión de la Verdad?",o:["Un órgano no judicial creado para investigar violaciones masivas de derechos humanos ocurridas en un período determinado","Un tribunal penal internacional","Una ONG de derechos humanos"],a:"Un órgano no judicial creado para investigar violaciones masivas de derechos humanos ocurridas en un período determinado"},

  // COMPLETAR: federales (+4) — ya teníamos 46, con estos 4 llegamos a 50... pero ya sumé los 4 de arriba, verifico
  {c:"federales",q:"¿Qué es el delito de contrabando menor?",o:["El contrabando cuyo valor no supera una suma determinada por ley, con pena reducida","El contrabando de armas","El contrabando internacional"],a:"El contrabando cuyo valor no supera una suma determinada por ley, con pena reducida"},
  {c:"federales",q:"¿Qué organismo tiene competencia para investigar delitos aduaneros?",o:["La Dirección General de Aduanas (DGA) y la justicia penal económica","La Policía Federal exclusivamente","La AFIP sin intervención judicial"],a:"La Dirección General de Aduanas (DGA) y la justicia penal económica"},
  {c:"federales",q:"¿Qué ley tipifica el delito de financiamiento del terrorismo?",o:["Ley 26.734","Ley 23.737","Ley 25.246"],a:"Ley 26.734"},
  {c:"federales",q:"¿Qué es la Procuraduría de Narcocriminalidad (PROCUNAR)?",o:["Una fiscalía especializada del Ministerio Público Fiscal dedicada a la investigación de delitos de narcotráfico","Un tribunal federal","Una fuerza de seguridad"],a:"Una fiscalía especializada del Ministerio Público Fiscal dedicada a la investigación de delitos de narcotráfico"},

  // COMPLETAR: consumidor (+8)
  {c:"consumidor",q:"¿Qué es la garantía legal en la Ley 24.240?",o:["La obligación del proveedor de garantizar el buen funcionamiento de la cosa durante 6 meses (3 para usados)","Una garantía bancaria","Un seguro obligatorio"],a:"La obligación del proveedor de garantizar el buen funcionamiento de la cosa durante 6 meses (3 para usados)"},
  {c:"consumidor",q:"¿Qué es la obsolescencia programada?",o:["La práctica de diseñar productos con vida útil artificialmente limitada, sancionada por la ley de defensa del consumidor","Un tipo de garantía","Una estrategia de marketing legal"],a:"La práctica de diseñar productos con vida útil artificialmente limitada, sancionada por la ley de defensa del consumidor"},
  {c:"consumidor",q:"¿Qué establece el art. 40 de la Ley 24.240?",o:["La responsabilidad solidaria de toda la cadena de producción y comercialización por daños al consumidor","Solo la responsabilidad del vendedor","La exclusión de responsabilidad del fabricante"],a:"La responsabilidad solidaria de toda la cadena de producción y comercialización por daños al consumidor"},
  {c:"consumidor",q:"¿Qué es el derecho al trato digno del consumidor?",o:["El derecho a no ser sometido a condiciones vergonzantes, vejatorias o intimidatorias en la relación de consumo","El derecho a descuentos","Un beneficio para clientes frecuentes"],a:"El derecho a no ser sometido a condiciones vergonzantes, vejatorias o intimidatorias en la relación de consumo"},
  {c:"consumidor",q:"¿Qué es la publicidad abusiva?",o:["La que incita a la violencia, explota el miedo, se aprovecha de la inexperiencia de niños o es discriminatoria","Toda publicidad televisiva","La publicidad en redes sociales"],a:"La que incita a la violencia, explota el miedo, se aprovecha de la inexperiencia de niños o es discriminatoria"},
  {c:"consumidor",q:"¿Ante qué organismo se puede denunciar a un proveedor?",o:["Ante la autoridad de aplicación (Dirección Nacional de Defensa del Consumidor) o el organismo provincial/municipal","Solo ante la justicia","Ante la policía"],a:"Ante la autoridad de aplicación (Dirección Nacional de Defensa del Consumidor) o el organismo provincial/municipal"},
  {c:"consumidor",q:"¿Qué establece el art. 8 bis de la Ley 24.240?",o:["El deber de trato digno y equitativo, prohibiendo condiciones vergonzantes y prácticas discriminatorias","El derecho de arrepentimiento","La garantía legal"],a:"El deber de trato digno y equitativo, prohibiendo condiciones vergonzantes y prácticas discriminatorias"},
  {c:"consumidor",q:"¿Qué son las cláusulas abusivas?",o:["Las que desnaturalizan las obligaciones, limitan la responsabilidad del proveedor o restringen derechos del consumidor","Las cláusulas en letras grandes","Las cláusulas negociadas individualmente"],a:"Las que desnaturalizan las obligaciones, limitan la responsabilidad del proveedor o restringen derechos del consumidor"},

  // COMPLETAR: familia (+9)
  {c:"familia",q:"¿Qué es la mediación familiar?",o:["Un proceso de resolución de conflictos con intervención de un tercero neutral para facilitar el acuerdo entre las partes","Un juicio abreviado","Una pericia psicológica"],a:"Un proceso de resolución de conflictos con intervención de un tercero neutral para facilitar el acuerdo entre las partes"},
  {c:"familia",q:"¿Qué son los alimentos provisorios?",o:["Los fijados judicialmente de manera cautelar mientras se tramita el juicio de alimentos definitivo","Los alimentos para mascotas","Un subsidio estatal"],a:"Los fijados judicialmente de manera cautelar mientras se tramita el juicio de alimentos definitivo"},
  {c:"familia",q:"¿Puede un progenitor mudarse con el hijo sin consentimiento del otro?",o:["No, si altera el régimen de cuidado se necesita acuerdo o autorización judicial","Sí, libremente","Solo con aviso"],a:"No, si altera el régimen de cuidado se necesita acuerdo o autorización judicial"},
  {c:"familia",q:"¿Qué es la acción de filiación?",o:["La acción judicial para establecer o impugnar el vínculo de parentesco entre padres e hijos","Una demanda de alimentos","Un trámite administrativo"],a:"La acción judicial para establecer o impugnar el vínculo de parentesco entre padres e hijos"},
  {c:"familia",q:"¿Qué es la impugnación de la paternidad?",o:["La acción para negar el vínculo filial matrimonial cuando el marido no es el padre biológico","La solicitud de cuota alimentaria","Un recurso de apelación"],a:"La acción para negar el vínculo filial matrimonial cuando el marido no es el padre biológico"},
  {c:"familia",q:"¿Cuánto dura la unión convivencial inscripta a efectos de la compensación económica?",o:["El plazo para reclamarla es de 6 meses desde el cese de la convivencia","2 años","1 año"],a:"El plazo para reclamarla es de 6 meses desde el cese de la convivencia"},
  {c:"familia",q:"¿Qué es el pacto de convivencia?",o:["El acuerdo escrito entre convivientes que regula aspectos patrimoniales de la unión convivencial","Un contrato de alquiler","Un acuerdo prenupcial"],a:"El acuerdo escrito entre convivientes que regula aspectos patrimoniales de la unión convivencial"},
  {c:"familia",q:"¿Qué es la figura del abogado del niño?",o:["El letrado que representa los intereses del menor en todo proceso judicial que lo afecte (art. 27 Ley 26.061)","El defensor de menores","El asesor tutelar"],a:"El letrado que representa los intereses del menor en todo proceso judicial que lo afecte (art. 27 Ley 26.061)"},
  {c:"familia",q:"¿Qué es el cese de la cuota alimentaria?",o:["La extinción de la obligación alimentaria por alcanzar el hijo la mayoría de edad o los 25 si estudia, entre otras causales","Una reducción del monto","Un cambio de cuota"],a:"La extinción de la obligación alimentaria por alcanzar el hijo la mayoría de edad o los 25 si estudia, entre otras causales"},

  // COMPLETAR: transito (+10)
  {c:"transito",q:"¿Qué es la responsabilidad del concesionario vial?",o:["La obligación de mantener la ruta en condiciones seguras, respondiendo por daños derivados de su mal estado o falta de señalización","Solo cobrar peaje","Reparar los vehículos dañados"],a:"La obligación de mantener la ruta en condiciones seguras, respondiendo por daños derivados de su mal estado o falta de señalización"},
  {c:"transito",q:"¿Qué es el acta de constatación de un siniestro vial?",o:["El documento labrado por la autoridad policial en el lugar del hecho con datos de los involucrados y circunstancias","La denuncia ante la aseguradora","Un certificado médico"],a:"El documento labrado por la autoridad policial en el lugar del hecho con datos de los involucrados y circunstancias"},
  {c:"transito",q:"¿Qué responsabilidad tiene el titular registral que prestó el vehículo?",o:["Responde como dueño solidariamente con el conductor, salvo denuncia de venta o robo","No tiene responsabilidad","Solo responde si estaba presente"],a:"Responde como dueño solidariamente con el conductor, salvo denuncia de venta o robo"},
  {c:"transito",q:"¿Qué pasa si el conductor se da a la fuga tras un siniestro?",o:["Comete el delito de fuga y genera presunción de culpabilidad en el siniestro","No tiene consecuencias","Solo recibe una multa"],a:"Comete el delito de fuga y genera presunción de culpabilidad en el siniestro"},
  {c:"transito",q:"¿Cuál es la velocidad mínima en autopista?",o:["60 km/h","40 km/h","80 km/h"],a:"60 km/h"},
  {c:"transito",q:"¿Qué es el peritaje accidentológico?",o:["El estudio técnico que reconstruye la mecánica del siniestro para determinar responsabilidades","Una reparación mecánica","Un informe médico"],a:"El estudio técnico que reconstruye la mecánica del siniestro para determinar responsabilidades"},
  {c:"transito",q:"¿Está permitido adelantar en una curva?",o:["No, está prohibido adelantar en curvas, puentes, túneles y encrucijadas","Sí, con precaución","Solo en curvas amplias"],a:"No, está prohibido adelantar en curvas, puentes, túneles y encrucijadas"},
  {c:"transito",q:"¿Qué sanción tiene conducir sin licencia habilitante?",o:["Retención del vehículo y multa según la legislación local","Solo multa","Prisión"],a:"Retención del vehículo y multa según la legislación local"},
  {c:"transito",q:"¿Qué obligación tiene el conductor ante un siniestro con heridos?",o:["Detenerse, dar aviso a la autoridad y prestar socorro a las víctimas","Seguir circulando y llamar después","Solo sacar fotos"],a:"Detenerse, dar aviso a la autoridad y prestar socorro a las víctimas"},
  {c:"transito",q:"¿Qué es la licencia nacional de conducir?",o:["El documento habilitante para conducir vehículos en todo el territorio nacional, emitido según normas de la ANSV","Un permiso municipal","Un carnet internacional"],a:"El documento habilitante para conducir vehículos en todo el territorio nacional, emitido según normas de la ANSV"},

  // COMPLETAR: migratorio (+10)
  {c:"migratorio",q:"¿Qué es el principio de igualdad de trato en materia migratoria?",o:["El deber del Estado de garantizar a los migrantes iguales derechos que a los nacionales en condiciones laborales y de seguridad social","Un trato preferencial a extranjeros","La exención de impuestos"],a:"El deber del Estado de garantizar a los migrantes iguales derechos que a los nacionales en condiciones laborales y de seguridad social"},
  {c:"migratorio",q:"¿Qué es la trata de personas?",o:["La captación, transporte o acogida de personas con fines de explotación mediante engaño, fuerza o abuso de poder","La migración irregular","El contrabando de migrantes"],a:"La captación, transporte o acogida de personas con fines de explotación mediante engaño, fuerza o abuso de poder"},
  {c:"migratorio",q:"¿Qué ley tipifica la trata de personas en Argentina?",o:["Ley 26.842","Ley 25.871","Ley 346"],a:"Ley 26.842"},
  {c:"migratorio",q:"¿Qué es la regularización migratoria extraordinaria?",o:["Un programa excepcional que permite a migrantes en situación irregular obtener residencia legal","La deportación masiva","Un cierre de fronteras"],a:"Un programa excepcional que permite a migrantes en situación irregular obtener residencia legal"},
  {c:"migratorio",q:"¿Puede un extranjero ser funcionario público en Argentina?",o:["Sí, en ciertos cargos según la jurisdicción, excepto los reservados a ciudadanos argentinos por la CN","No, nunca","Solo con 10 años de residencia"],a:"Sí, en ciertos cargos según la jurisdicción, excepto los reservados a ciudadanos argentinos por la CN"},
  {c:"migratorio",q:"¿Qué es el principio de unidad familiar en materia migratoria?",o:["El derecho de los migrantes a que se proteja la unidad de su grupo familiar en las decisiones migratorias","La obligación de viajar juntos","Un requisito para la visa"],a:"El derecho de los migrantes a que se proteja la unidad de su grupo familiar en las decisiones migratorias"},
  {c:"migratorio",q:"¿Qué es la cancelación de residencia?",o:["La revocación del permiso de residencia por incumplimiento de requisitos legales o condena penal","La renovación automática","Un cambio de categoría"],a:"La revocación del permiso de residencia por incumplimiento de requisitos legales o condena penal"},
  {c:"migratorio",q:"¿Qué derechos laborales tienen los migrantes regulares?",o:["Los mismos que los trabajadores argentinos, incluyendo seguridad social, sindicalización y condiciones dignas","Solo el derecho a trabajar","Ningún derecho especial"],a:"Los mismos que los trabajadores argentinos, incluyendo seguridad social, sindicalización y condiciones dignas"},
  {c:"migratorio",q:"¿Qué organismo internacional promueve la migración ordenada?",o:["La Organización Internacional para las Migraciones (OIM)","La OMS","La UNESCO"],a:"La Organización Internacional para las Migraciones (OIM)"},
  {c:"migratorio",q:"¿Qué es el arraigo como fundamento para evitar la expulsión?",o:["La demostración de vínculos familiares, laborales y sociales que justifican la permanencia del migrante en el país","Una garantía económica","Un tipo de visa"],a:"La demostración de vínculos familiares, laborales y sociales que justifican la permanencia del migrante en el país"},

  // COMPLETAR: ambiental (+10)
  {c:"ambiental",q:"¿Qué es el seguro ambiental obligatorio?",o:["La póliza que debe contratar toda actividad riesgosa para el ambiente, según la Ley 25.675","Un seguro de vida","Un impuesto ambiental"],a:"La póliza que debe contratar toda actividad riesgosa para el ambiente, según la Ley 25.675"},
  {c:"ambiental",q:"¿Qué es la remediación ambiental?",o:["El conjunto de acciones para restaurar un ambiente dañado a su estado anterior o al más cercano posible","La limpieza de basura","Una multa ambiental"],a:"El conjunto de acciones para restaurar un ambiente dañado a su estado anterior o al más cercano posible"},
  {c:"ambiental",q:"¿Qué establece la Ley 26.331 sobre bosques nativos?",o:["Los presupuestos mínimos de protección ambiental para el enriquecimiento, restauración y conservación de bosques nativos","La tala libre","La reforestación obligatoria con especies exóticas"],a:"Los presupuestos mínimos de protección ambiental para el enriquecimiento, restauración y conservación de bosques nativos"},
  {c:"ambiental",q:"¿Qué son los presupuestos mínimos ambientales?",o:["Las normas que establecen condiciones necesarias para asegurar la protección ambiental en todo el territorio, dictadas por el Congreso Nacional","Normas municipales","Decretos provinciales"],a:"Las normas que establecen condiciones necesarias para asegurar la protección ambiental en todo el territorio, dictadas por el Congreso Nacional"},
  {c:"ambiental",q:"¿Qué es el ordenamiento ambiental del territorio?",o:["La planificación del uso del suelo según su aptitud ambiental, social y económica","La división catastral","Un censo ambiental"],a:"La planificación del uso del suelo según su aptitud ambiental, social y económica"},
  {c:"ambiental",q:"¿Qué ley regula los residuos peligrosos?",o:["Ley 24.051","Ley 25.675","Ley 25.688"],a:"Ley 24.051"},
  {c:"ambiental",q:"¿Qué es el principio de responsabilidad en la Ley 25.675?",o:["Que quien causa daño ambiental es responsable de su reparación, independientemente de la culpa","Que solo el Estado es responsable","Que no hay responsabilidad ambiental"],a:"Que quien causa daño ambiental es responsable de su reparación, independientemente de la culpa"},
  {c:"ambiental",q:"¿Qué ley regula la gestión de aguas?",o:["Ley 25.688 (Régimen de Gestión Ambiental de Aguas)","Ley 25.675","Ley 24.051"],a:"Ley 25.688 (Régimen de Gestión Ambiental de Aguas)"},
  {c:"ambiental",q:"¿Qué es la licencia social ambiental?",o:["La aceptación por parte de la comunidad local de un proyecto que puede impactar el ambiente","Un permiso de construcción","Una habilitación municipal"],a:"La aceptación por parte de la comunidad local de un proyecto que puede impactar el ambiente"},
  {c:"ambiental",q:"¿Qué ley regula la gestión de PCB (bifenilos policlorados)?",o:["Ley 25.670","Ley 24.051","Ley 25.675"],a:"Ley 25.670"},

  // COMPLETAR: reales (+15)
  {c:"reales",q:"¿Qué es el derecho de retención?",o:["La facultad del acreedor de conservar en su poder una cosa del deudor hasta el pago de lo adeudado por razón de esa cosa","Un derecho real de garantía","Una medida cautelar"],a:"La facultad del acreedor de conservar en su poder una cosa del deudor hasta el pago de lo adeudado por razón de esa cosa"},
  {c:"reales",q:"¿Qué es la medianería?",o:["El régimen que regula los muros, cercos y fosos que separan dos inmuebles contiguos","Un tipo de servidumbre","Un contrato entre vecinos"],a:"El régimen que regula los muros, cercos y fosos que separan dos inmuebles contiguos"},
  {c:"reales",q:"¿Qué es la accesión como modo de adquirir el dominio?",o:["La incorporación natural o artificial de una cosa a otra, haciendo al dueño de la principal dueño de la accesoria","La compraventa","La donación"],a:"La incorporación natural o artificial de una cosa a otra, haciendo al dueño de la principal dueño de la accesoria"},
  {c:"reales",q:"¿Qué es la expropiación?",o:["La privación del dominio por razones de utilidad pública, previo pago de indemnización justa (art. 17 CN)","Una confiscación","Un embargo judicial"],a:"La privación del dominio por razones de utilidad pública, previo pago de indemnización justa (art. 17 CN)"},
  {c:"reales",q:"¿Qué es la restricción al dominio?",o:["Las limitaciones legales al ejercicio del dominio en interés del vecindario o del interés público","La pérdida del dominio","Una servidumbre"],a:"Las limitaciones legales al ejercicio del dominio en interés del vecindario o del interés público"},
  {c:"reales",q:"¿Qué es el muro medianero?",o:["El muro construido sobre el límite entre dos inmuebles que pertenece en condominio forzoso a ambos vecinos","Un muro privado","Un cerco provisorio"],a:"El muro construido sobre el límite entre dos inmuebles que pertenece en condominio forzoso a ambos vecinos"},
  {c:"reales",q:"¿Qué es la hipoteca abierta?",o:["La que garantiza créditos futuros o eventuales hasta un monto máximo determinado","Una hipoteca sin plazo","Una hipoteca verbal"],a:"La que garantiza créditos futuros o eventuales hasta un monto máximo determinado"},
  {c:"reales",q:"¿Cuánto dura la inscripción de la hipoteca?",o:["20 años, renovable","10 años","5 años"],a:"20 años, renovable"},
  {c:"reales",q:"¿Qué es el principio de prioridad registral?",o:["Que el derecho inscripto primero en el tiempo prevalece sobre el inscripto después","Que todos los derechos tienen igual rango","Que solo cuenta la fecha del contrato"],a:"Que el derecho inscripto primero en el tiempo prevalece sobre el inscripto después"},
  {c:"reales",q:"¿Qué es la reserva de prioridad?",o:["El bloqueo registral que otorga el certificado del art. 23 Ley 17.801 durante un plazo para asegurar la prioridad","Un tipo de hipoteca","Una anotación preventiva"],a:"El bloqueo registral que otorga el certificado del art. 23 Ley 17.801 durante un plazo para asegurar la prioridad"},
  {c:"reales",q:"¿Qué es el cementerio privado como derecho real?",o:["El derecho de sepultura sobre una parcela en un cementerio privado, regulado como derecho real por el CCyCN","Un contrato de alquiler de parcela","Un usufructo"],a:"El derecho de sepultura sobre una parcela en un cementerio privado, regulado como derecho real por el CCyCN"},
  {c:"reales",q:"¿Qué es la acción de deslinde?",o:["La que tiene el propietario para fijar los límites de su inmueble cuando son confusos o inciertos","Una acción posesoria","Un recurso administrativo"],a:"La que tiene el propietario para fijar los límites de su inmueble cuando son confusos o inciertos"},
  {c:"reales",q:"¿Puede una servidumbre ser perpetua?",o:["Sí, las servidumbres reales pueden ser perpetuas; las personales se extinguen con la persona","No, todas son temporales","Solo las de paso"],a:"Sí, las servidumbres reales pueden ser perpetuas; las personales se extinguen con la persona"},
  {c:"reales",q:"¿Qué es la prenda con registro?",o:["Un derecho real de garantía sobre cosas muebles que quedan en poder del deudor, inscripto en el registro correspondiente","Una prenda con desplazamiento","Un embargo"],a:"Un derecho real de garantía sobre cosas muebles que quedan en poder del deudor, inscripto en el registro correspondiente"},
  {c:"reales",q:"¿Qué diferencia hay entre título y modo en derechos reales?",o:["El título es el acto jurídico que justifica la adquisición y el modo es la tradición o entrega efectiva de la cosa","Son sinónimos","El modo es el contrato y el título la escritura"],a:"El título es el acto jurídico que justifica la adquisición y el modo es la tradición o entrega efectiva de la cosa"},

  // COMPLETAR: art (+17)
  {c:"art",q:"¿Qué es el examen preocupacional?",o:["El estudio médico obligatorio previo al inicio de la relación laboral para determinar la aptitud del trabajador","Un examen de ingreso","Una prueba de conocimientos"],a:"El estudio médico obligatorio previo al inicio de la relación laboral para determinar la aptitud del trabajador"},
  {c:"art",q:"¿Qué es el Plan de Mejoramiento?",o:["El programa que la ART acuerda con el empleador para reducir los riesgos laborales detectados","Un plan de capacitación","Un seguro adicional"],a:"El programa que la ART acuerda con el empleador para reducir los riesgos laborales detectados"},
  {c:"art",q:"¿Qué establece el Decreto 658/96?",o:["El listado de enfermedades profesionales reconocidas por el sistema de riesgos del trabajo","Las alícuotas de las ART","Los montos indemnizatorios"],a:"El listado de enfermedades profesionales reconocidas por el sistema de riesgos del trabajo"},
  {c:"art",q:"¿Qué establece el Decreto 659/96?",o:["La tabla de evaluación de incapacidades laborales (baremo)","El listado de enfermedades profesionales","Las prestaciones dinerarias"],a:"La tabla de evaluación de incapacidades laborales (baremo)"},
  {c:"art",q:"¿Qué es la alícuota que paga el empleador a la ART?",o:["El porcentaje sobre la masa salarial que el empleador abona mensualmente a la ART por la cobertura","Una multa","Un impuesto estatal"],a:"El porcentaje sobre la masa salarial que el empleador abona mensualmente a la ART por la cobertura"},
  {c:"art",q:"¿Qué es un accidente de trabajo según la LRT?",o:["Todo acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo","Solo lesiones graves","Solo accidentes con máquinas"],a:"Todo acontecimiento súbito y violento ocurrido por el hecho o en ocasión del trabajo"},
  {c:"art",q:"¿El trabajador puede elegir su ART?",o:["No, la ART la contrata el empleador","Sí, libremente","Solo si es autónomo"],a:"No, la ART la contrata el empleador"},
  {c:"art",q:"¿Qué es el alta médica en el sistema de riesgos del trabajo?",o:["La determinación de que el trabajador está en condiciones de retomar sus tareas habituales o se le fija incapacidad","El ingreso al hospital","La licencia médica"],a:"La determinación de que el trabajador está en condiciones de retomar sus tareas habituales o se le fija incapacidad"},
  {c:"art",q:"¿Qué es la prestación adicional de pago mensual (PAPM)?",o:["La prestación dineraria mensual complementaria que recibe el trabajador con incapacidad permanente parcial definitiva","Un bono anual","Un subsidio estatal"],a:"La prestación dineraria mensual complementaria que recibe el trabajador con incapacidad permanente parcial definitiva"},
  {c:"art",q:"¿Qué es el Comité Mixto de Seguridad e Higiene?",o:["Un órgano paritario de empleadores y trabajadores para la prevención de riesgos laborales en el establecimiento","Un sindicato","Una comisión médica"],a:"Un órgano paritario de empleadores y trabajadores para la prevención de riesgos laborales en el establecimiento"},
  {c:"art",q:"¿Qué obligación tiene el trabajador respecto de la seguridad laboral?",o:["Utilizar los elementos de protección personal, cumplir las normas de higiene y seguridad, y denunciar riesgos","Ninguna","Solo usar casco"],a:"Utilizar los elementos de protección personal, cumplir las normas de higiene y seguridad, y denunciar riesgos"},
  {c:"art",q:"¿Puede el trabajador negarse a realizar tareas riesgosas sin protección?",o:["Sí, tiene derecho a abstenerse si existe peligro grave e inminente para su salud sin incurrir en abandono","No, debe obedecer siempre","Solo con autorización del sindicato"],a:"Sí, tiene derecho a abstenerse si existe peligro grave e inminente para su salud sin incurrir en abandono"},
  {c:"art",q:"¿Qué son las prestaciones en dinero de la LRT?",o:["Las indemnizaciones y pagos mensuales que recibe el trabajador según el grado y tipo de incapacidad","Solo el sueldo","Un subsidio del Estado"],a:"Las indemnizaciones y pagos mensuales que recibe el trabajador según el grado y tipo de incapacidad"},
  {c:"art",q:"¿Qué estableció el fallo 'Milone' de la CSJN?",o:["Que el pago de la indemnización en forma de renta periódica puede ser inconstitucional cuando no resguarda al trabajador","Que las ART son inconstitucionales","Que no hay indemnización por accidentes"],a:"Que el pago de la indemnización en forma de renta periódica puede ser inconstitucional cuando no resguarda al trabajador"},
  {c:"art",q:"¿Qué es la Superintendencia de Riesgos del Trabajo?",o:["El organismo estatal que regula, fiscaliza y controla el funcionamiento del sistema de riesgos del trabajo","Una ART estatal","Un tribunal laboral"],a:"El organismo estatal que regula, fiscaliza y controla el funcionamiento del sistema de riesgos del trabajo"},
  {c:"art",q:"¿Qué es el ingreso base mensual (IBM)?",o:["El promedio de remuneraciones sujetas a aportes del año anterior al siniestro, usado para calcular prestaciones","El salario mínimo","El sueldo del mes del accidente"],a:"El promedio de remuneraciones sujetas a aportes del año anterior al siniestro, usado para calcular prestaciones"},
  {c:"art",q:"¿Quién paga el salario durante los primeros 10 días de ILT?",o:["El empleador paga los primeros 10 días y luego la ART","La ART desde el primer día","El Estado"],a:"El empleador paga los primeros 10 días y luego la ART"},

  // COMPLETAR: sucesiones (+20)
  {c:"sucesiones",q:"¿Qué es la acción de petición de herencia?",o:["La acción del heredero para obtener la entrega de los bienes hereditarios de quien los posee invocando también título hereditario","Una demanda de alimentos","Un recurso de apelación"],a:"La acción del heredero para obtener la entrega de los bienes hereditarios de quien los posee invocando también título hereditario"},
  {c:"sucesiones",q:"¿Qué es la masa hereditaria?",o:["El conjunto de bienes, derechos y obligaciones que componen el patrimonio del causante al momento de su muerte","Solo los inmuebles","Solo el dinero en efectivo"],a:"El conjunto de bienes, derechos y obligaciones que componen el patrimonio del causante al momento de su muerte"},
  {c:"sucesiones",q:"¿Qué es el acervo hereditario?",o:["El patrimonio neto del causante (activo menos pasivo) que se distribuye entre los herederos","El total de deudas","Los bienes gananciales"],a:"El patrimonio neto del causante (activo menos pasivo) que se distribuye entre los herederos"},
  {c:"sucesiones",q:"¿Qué es el fideicomiso testamentario?",o:["La disposición por la cual el testador transmite bienes en fideicomiso para cumplir un fin determinado","Un seguro de vida","Una donación en vida"],a:"La disposición por la cual el testador transmite bienes en fideicomiso para cumplir un fin determinado"},
  {c:"sucesiones",q:"¿Puede el testador imponer condiciones a los herederos?",o:["Sí, puede imponer cargos a los herederos instituidos, pero no puede afectar la legítima con condiciones ilícitas","No, nunca","Solo a los legatarios"],a:"Sí, puede imponer cargos a los herederos instituidos, pero no puede afectar la legítima con condiciones ilícitas"},
  {c:"sucesiones",q:"¿Qué es la mejora estricta?",o:["La porción de libre disposición que el testador puede asignar a uno o más herederos forzosos además de su legítima","Un aumento de la legítima","Un beneficio fiscal"],a:"La porción de libre disposición que el testador puede asignar a uno o más herederos forzosos además de su legítima"},
  {c:"sucesiones",q:"¿Qué pasa si el testamento ológrafo no tiene fecha?",o:["Es nulo por incumplimiento de los requisitos formales del art. 2477 CCyCN","Es válido igual","Se presume la fecha de la muerte"],a:"Es nulo por incumplimiento de los requisitos formales del art. 2477 CCyCN"},
  {c:"sucesiones",q:"¿Qué es el inventario en el juicio sucesorio?",o:["La descripción detallada de todos los bienes, derechos y deudas que componen el acervo hereditario","Una lista de herederos","Un certificado bancario"],a:"La descripción detallada de todos los bienes, derechos y deudas que componen el acervo hereditario"},
  {c:"sucesiones",q:"¿Qué es el avalúo en el juicio sucesorio?",o:["La tasación del valor de los bienes que integran el acervo hereditario para proceder a la partición","Un impuesto sucesorio","Un certificado de defunción"],a:"La tasación del valor de los bienes que integran el acervo hereditario para proceder a la partición"},
  {c:"sucesiones",q:"¿Qué es la vocación hereditaria?",o:["El llamamiento legal o testamentario a recibir la herencia","Un deseo de heredar","Una cláusula contractual"],a:"El llamamiento legal o testamentario a recibir la herencia"},
  {c:"sucesiones",q:"¿Qué es la porción disponible?",o:["La fracción del patrimonio de la que el testador puede disponer libremente sin afectar la legítima","El total de la herencia","La legítima"],a:"La fracción del patrimonio de la que el testador puede disponer libremente sin afectar la legítima"},
  {c:"sucesiones",q:"¿Cuál es la porción disponible cuando concurren descendientes?",o:["1/3 del patrimonio","1/2","2/3"],a:"1/3 del patrimonio"},
  {c:"sucesiones",q:"¿Cuál es la porción disponible cuando concurren ascendientes?",o:["1/2 del patrimonio","1/3","2/3"],a:"1/2 del patrimonio"},
  {c:"sucesiones",q:"¿Cuál es la porción disponible cuando concurre solo el cónyuge?",o:["1/2 del patrimonio","1/3","Todo el patrimonio"],a:"1/2 del patrimonio"},
  {c:"sucesiones",q:"¿Hereda el Estado si no hay herederos?",o:["Sí, la herencia se declara vacante y los bienes pasan al Estado","No, los bienes quedan sin titular","Se donan a caridad"],a:"Sí, la herencia se declara vacante y los bienes pasan al Estado"},
  {c:"sucesiones",q:"¿Qué es la preterición de un heredero forzoso?",o:["La omisión del heredero forzoso en el testamento, que no anula el testamento pero le permite reclamar su legítima","La desheredación","La renuncia a la herencia"],a:"La omisión del heredero forzoso en el testamento, que no anula el testamento pero le permite reclamar su legítima"},
  {c:"sucesiones",q:"¿Qué es la transmisión hereditaria por derecho propio?",o:["La que corresponde al heredero por su propia relación de parentesco con el causante, sin representar a otro","La representación","La cesión"],a:"La que corresponde al heredero por su propia relación de parentesco con el causante, sin representar a otro"},
  {c:"sucesiones",q:"¿Qué es la partición provisional?",o:["La distribución del uso y goce de los bienes sin transferir la propiedad, mientras se resuelve la partición definitiva","La venta de los bienes","La renuncia"],a:"La distribución del uso y goce de los bienes sin transferir la propiedad, mientras se resuelve la partición definitiva"},
  {c:"sucesiones",q:"¿Se puede revocar un testamento?",o:["Sí, el testamento es esencialmente revocable en cualquier momento por el testador","No, es irrevocable","Solo con autorización judicial"],a:"Sí, el testamento es esencialmente revocable en cualquier momento por el testador"},
  {c:"sucesiones",q:"¿Qué es la caducidad del testamento?",o:["La ineficacia del testamento por causas sobrevinientes previstas en la ley, como el fallecimiento previo del instituido","La nulidad","La revocación"],a:"La ineficacia del testamento por causas sobrevinientes previstas en la ley, como el fallecimiento previo del instituido"},

  // COMPLETAR: sociedades (+20)
  {c:"sociedades",q:"¿Qué es la personalidad jurídica de la sociedad?",o:["El reconocimiento legal de la sociedad como sujeto de derecho distinto de sus socios","Una ficción sin efectos","Un registro administrativo"],a:"El reconocimiento legal de la sociedad como sujeto de derecho distinto de sus socios"},
  {c:"sociedades",q:"¿Qué es la affectio societatis?",o:["La voluntad de los socios de colaborar activamente en la consecución del fin social","Un tipo de sociedad","Un contrato de trabajo"],a:"La voluntad de los socios de colaborar activamente en la consecución del fin social"},
  {c:"sociedades",q:"¿Qué es el objeto social?",o:["La actividad o actividades que la sociedad se propone realizar, descripta en el contrato constitutivo","El patrimonio social","La razón social"],a:"La actividad o actividades que la sociedad se propone realizar, descripta en el contrato constitutivo"},
  {c:"sociedades",q:"¿Qué es la razón social?",o:["El nombre de la sociedad formado con el nombre de uno o más socios, utilizado en sociedades con responsabilidad ilimitada","El objeto social","La denominación comercial"],a:"El nombre de la sociedad formado con el nombre de uno o más socios, utilizado en sociedades con responsabilidad ilimitada"},
  {c:"sociedades",q:"¿Qué es la denominación social?",o:["El nombre de fantasía que puede adoptar cualquier tipo societario, diferente de la razón social","El domicilio social","El CUIT"],a:"El nombre de fantasía que puede adoptar cualquier tipo societario, diferente de la razón social"},
  {c:"sociedades",q:"¿Qué es el aporte en una sociedad?",o:["La contribución que cada socio realiza al patrimonio social para la formación del capital","Un préstamo al socio","Una donación"],a:"La contribución que cada socio realiza al patrimonio social para la formación del capital"},
  {c:"sociedades",q:"¿Qué tipos de aportes se pueden realizar?",o:["Aportes en dinero, bienes muebles e inmuebles, derechos y trabajo personal según el tipo societario","Solo dinero","Solo inmuebles"],a:"Aportes en dinero, bienes muebles e inmuebles, derechos y trabajo personal según el tipo societario"},
  {c:"sociedades",q:"¿Qué es la sociedad en formación?",o:["La sociedad que aún no completó su inscripción registral pero ya tiene acto constitutivo","Una sociedad disuelta","Una cooperativa"],a:"La sociedad que aún no completó su inscripción registral pero ya tiene acto constitutivo"},
  {c:"sociedades",q:"¿Qué es el capital social?",o:["La cifra representativa de los aportes comprometidos por los socios, establecida en el contrato social","Las ganancias acumuladas","Los préstamos bancarios"],a:"La cifra representativa de los aportes comprometidos por los socios, establecida en el contrato social"},
  {c:"sociedades",q:"¿Qué mayoría se necesita para modificar el contrato social de una SRL?",o:["Mayoría de capital presente en la reunión de socios, salvo que el contrato exija más","Unanimidad","51% del capital social total"],a:"Mayoría de capital presente en la reunión de socios, salvo que el contrato exija más"},
  {c:"sociedades",q:"¿Qué es la acción individual de responsabilidad?",o:["La que ejerce un socio o tercero contra el administrador por daños causados directamente a su patrimonio","Una acción penal","Un recurso administrativo"],a:"La que ejerce un socio o tercero contra el administrador por daños causados directamente a su patrimonio"},
  {c:"sociedades",q:"¿Qué es la intervención judicial de una sociedad?",o:["Una medida cautelar que designa un interventor para proteger los derechos de socios o terceros cuando la administración es irregular","La quiebra","La liquidación"],a:"Una medida cautelar que designa un interventor para proteger los derechos de socios o terceros cuando la administración es irregular"},
  {c:"sociedades",q:"¿Qué es la exclusión de un socio?",o:["La separación forzosa de un socio por justa causa, prevista en el art. 91 LGS","La renuncia voluntaria","El derecho de receso"],a:"La separación forzosa de un socio por justa causa, prevista en el art. 91 LGS"},
  {c:"sociedades",q:"¿Qué causales de disolución prevé la LGS?",o:["Vencimiento del plazo, cumplimiento del objeto, pérdida del capital, resolución de socios, imposibilidad sobreviniente, entre otras","Solo la quiebra","Solo el vencimiento del plazo"],a:"Vencimiento del plazo, cumplimiento del objeto, pérdida del capital, resolución de socios, imposibilidad sobreviniente, entre otras"},
  {c:"sociedades",q:"¿Qué es la sociedad accidental o en participación?",o:["Fue eliminada por la reforma de la LGS; antes era una sociedad oculta para operaciones determinadas sin personalidad jurídica","Una SA con pocos socios","Una cooperativa"],a:"Fue eliminada por la reforma de la LGS; antes era una sociedad oculta para operaciones determinadas sin personalidad jurídica"},
  {c:"sociedades",q:"¿Qué es la sociedad colectiva?",o:["Aquella en que todos los socios responden ilimitada y solidariamente por las obligaciones sociales","Una SA","Una SRL"],a:"Aquella en que todos los socios responden ilimitada y solidariamente por las obligaciones sociales"},
  {c:"sociedades",q:"¿Qué es la SAS (Sociedad por Acciones Simplificada)?",o:["Un tipo societario simplificado creado por la Ley 27.349, con constitución digital y capital mínimo de 2 salarios mínimos","Una SA común","Una cooperativa"],a:"Un tipo societario simplificado creado por la Ley 27.349, con constitución digital y capital mínimo de 2 salarios mínimos"},
  {c:"sociedades",q:"¿Qué es el libro de actas?",o:["El registro obligatorio donde se transcriben las deliberaciones y resoluciones de los órganos sociales","Un libro contable","Un inventario"],a:"El registro obligatorio donde se transcriben las deliberaciones y resoluciones de los órganos sociales"},
  {c:"sociedades",q:"¿Qué es el estado de situación patrimonial?",o:["El balance que muestra el activo, pasivo y patrimonio neto de la sociedad a una fecha determinada","Una auditoría externa","Un presupuesto"],a:"El balance que muestra el activo, pasivo y patrimonio neto de la sociedad a una fecha determinada"},
  {c:"sociedades",q:"¿Cuándo puede un socio ejercer el derecho de receso en una SA?",o:["Ante transformación, fusión, escisión, prórroga, cambio de objeto social u otras modificaciones sustanciales","En cualquier momento","Solo al vencimiento del plazo social"],a:"Ante transformación, fusión, escisión, prórroga, cambio de objeto social u otras modificaciones sustanciales"},
];

// ═══════════════════════════════════════════════════════════
// LÓGICA DE LA APP — COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════════════════

const LOGO_BASE64 = "data:image/jpeg;base64,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";

const DATOS_ESTUDIO = {
  nombre: "Estudio Jurídico García Pozzaglio",
  direccion: "Av. Juan Domingo Perón 3274, Local 25, Los Polvorines",
  telefonos: ["11-3820-7360", "11-2725-3359"],
  emails: ["marcos_ivan85@hotmail.com.ar", "Micomputadora1989@gmail.com"],
  instagram: "@garciapozzaglioestudiojuridico",
  whatsapp: "5491138207360",
};

function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function IlustracionCategoria({ categoriaKey }) {
  const cat = CATEGORIAS[categoriaKey];
  if (!cat) return null;
  const color = cat.color;

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  const wrapStyle = {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    background: `linear-gradient(135deg, ${hexToRgba(color, 0.15)} 0%, ${hexToRgba(color, 0.05)} 100%)`,
    border: `1px solid ${hexToRgba(color, 0.2)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 0",
  };

  const ilustraciones = {
    civil: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[...Array(8)].map((_, i) => <circle key={i} cx="200" cy="90" r={20 + i * 18} fill="none" stroke={hexToRgba(color, 0.1 + i * 0.01)} strokeWidth="0.8" />)}
        <line x1="200" y1="30" x2="200" y2="155" stroke={hexToRgba(color, 0.35)} strokeWidth="3" />
        <line x1="130" y1="60" x2="270" y2="60" stroke={hexToRgba(color, 0.35)} strokeWidth="3" />
        <path d="M130 60 L115 110 L145 110 Z" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        <path d="M270 60 L255 110 L285 110 Z" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        <polygon points="200,25 193,38 207,38" fill={hexToRgba(color, 0.3)} />
        <rect x="188" y="148" width="24" height="8" rx="2" fill={hexToRgba(color, 0.2)} />
      </svg>
    ),
    penal: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[...Array(10)].map((_, i) => <line key={i} x1={40 + i * 36} y1="0" x2={40 + i * 36} y2="180" stroke={hexToRgba(color, 0.15)} strokeWidth="3.5" />)}
        {[...Array(3)].map((_, i) => <line key={`h${i}`} x1="0" y1={45 + i * 50} x2="400" y2={45 + i * 50} stroke={hexToRgba(color, 0.08)} strokeWidth="2" />)}
        <path d="M170 45 A30 30 0 0 1 230 45" fill="none" stroke={hexToRgba(color, 0.4)} strokeWidth="3.5" />
        <rect x="160" y="65" width="80" height="65" rx="5" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.4)} strokeWidth="3" />
        <circle cx="200" cy="95" r="8" fill={hexToRgba(color, 0.4)} />
        <line x1="200" y1="103" x2="200" y2="120" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
      </svg>
    ),
    laboral: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[...Array(10)].map((_, i) => { const a = (i / 10) * Math.PI * 2; return <line key={i} x1={130 + Math.cos(a) * 35} y1={90 + Math.sin(a) * 35} x2={130 + Math.cos(a) * 55} y2={90 + Math.sin(a) * 55} stroke={hexToRgba(color, 0.25)} strokeWidth="7" strokeLinecap="round" />; })}
        <circle cx="130" cy="90" r="26" fill="none" stroke={hexToRgba(color, 0.2)} strokeWidth="2" />
        {[...Array(8)].map((_, i) => { const a = (i / 8) * Math.PI * 2; return <line key={`g${i}`} x1={280 + Math.cos(a) * 28} y1={90 + Math.sin(a) * 28} x2={280 + Math.cos(a) * 45} y2={90 + Math.sin(a) * 45} stroke={hexToRgba(color, 0.2)} strokeWidth="6" strokeLinecap="round" />; })}
        <circle cx="280" cy="90" r="20" fill="none" stroke={hexToRgba(color, 0.15)} strokeWidth="2" />
        <circle cx="130" cy="90" r="8" fill={hexToRgba(color, 0.2)} />
        <circle cx="280" cy="90" r="6" fill={hexToRgba(color, 0.15)} />
      </svg>
    ),
    ambiental: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[60,140,220,300,360].map((x, i) => <path key={i} d={`M${x} ${80 + i * 8} Q${x + 18} ${55 + i * 8} ${x + 36} ${80 + i * 8} Q${x + 18} ${105 + i * 8} ${x} ${80 + i * 8}`} fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.25)} strokeWidth="1.5" />)}
        {[60,140,220,300,360].map((x, i) => <line key={`s${i}`} x1={x} y1={80 + i * 8} x2={x + 36} y2={80 + i * 8} stroke={hexToRgba(color, 0.15)} strokeWidth="0.8" />)}
        {[0,1,2,3].map(w => <path key={`w${w}`} d={`M0 ${130 + w * 16} ${[...Array(22)].map((_, x) => `L${x * 20} ${130 + w * 16 + Math.sin(x * 0.7 + w) * 8}`).join(' ')}`} fill="none" stroke={hexToRgba(color, 0.15)} strokeWidth="1.5" />)}
      </svg>
    ),
    maritimo: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[0,1,2,3,4,5].map(w => <path key={w} d={`M0 ${50 + w * 22} ${[...Array(22)].map((_, x) => `L${x * 20} ${50 + w * 22 + Math.sin(x * 0.6 + w * 0.8) * 12}`).join(' ')}`} fill="none" stroke={hexToRgba(color, 0.15 + w * 0.02)} strokeWidth="2" />)}
        <path d="M200 20 A18 18 0 0 1 200 56" fill="none" stroke={hexToRgba(color, 0.4)} strokeWidth="3.5" />
        <line x1="200" y1="20" x2="200" y2="140" stroke={hexToRgba(color, 0.35)} strokeWidth="3.5" />
        <line x1="175" y1="50" x2="225" y2="50" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
        <path d="M165 115 Q165 145 200 138" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
        <path d="M235 115 Q235 145 200 138" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
      </svg>
    ),
    consumidor: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <text x="200" y="130" textAnchor="middle" fontSize="140" fill={hexToRgba(color, 0.12)} fontFamily="sans-serif" fontWeight="bold">$</text>
        {[50,130,270,340].map((x, i) => <g key={i}><rect x={x} y={30 + i * 20} width="28" height={45 + (i % 2) * 15} rx="3" fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.18)} strokeWidth="1" />{[0,1,2].map(l => <line key={l} x1={x + 5} y1={40 + i * 20 + l * 10} x2={x + 23} y2={40 + i * 20 + l * 10} stroke={hexToRgba(color, 0.12)} strokeWidth="0.8" />)}</g>)}
      </svg>
    ),
    familia: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[[145,75,36],[255,75,36],[180,95,28],[220,95,28]].map(([cx,cy,s], i) => <g key={i}><circle cx={cx} cy={cy - s * 0.9} r={s * 0.3} fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2" /><line x1={cx} y1={cy - s * 0.6} x2={cx} y2={cy + s * 0.3} stroke={hexToRgba(color, 0.3)} strokeWidth="2" /><line x1={cx - s * 0.4} y1={cy - s * 0.1} x2={cx + s * 0.4} y2={cy - s * 0.1} stroke={hexToRgba(color, 0.3)} strokeWidth="2" /><line x1={cx} y1={cy + s * 0.3} x2={cx - s * 0.3} y2={cy + s * 0.8} stroke={hexToRgba(color, 0.3)} strokeWidth="2" /><line x1={cx} y1={cy + s * 0.3} x2={cx + s * 0.3} y2={cy + s * 0.8} stroke={hexToRgba(color, 0.3)} strokeWidth="2" /></g>)}
        <path d="M200 30 C220 5 250 25 200 60 C150 25 180 5 200 30" fill={hexToRgba(color, 0.1)} stroke={hexToRgba(color, 0.25)} strokeWidth="1.5" />
      </svg>
    ),
    sociedades: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[[60,110],[115,70],[170,120],[225,55],[280,100],[335,60]].map(([x, h], i) => <g key={i}><rect x={x - 16} y={180 - h} width="32" height={h} fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.18)} strokeWidth="1" />{[...Array(Math.floor(h / 20))].map((_, r) => [0,1].map(c => <rect key={`${r}${c}`} x={x - 12 + c * 14} y={185 - h + r * 20} width="8" height="12" fill={hexToRgba(color, 0.12)} rx="1" />))}</g>)}
      </svg>
    ),
    transito: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="0" width="200" height="180" fill={hexToRgba(color, 0.05)} />
        {[...Array(8)].map((_, i) => <rect key={i} x="198" y={i * 24 + 5} width="4" height="14" fill={hexToRgba(color, 0.35)} rx="1" />)}
        <line x1="310" y1="40" x2="310" y2="150" stroke={hexToRgba(color, 0.25)} strokeWidth="3" />
        <circle cx="310" cy="28" r="18" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
        <circle cx="310" cy="28" r="7" fill={hexToRgba(color, 0.2)} />
      </svg>
    ),
    art: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <rect x="185" y="30" width="30" height="80" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.35)} strokeWidth="2.5" />
        <rect x="155" y="55" width="90" height="30" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.35)} strokeWidth="2.5" />
        <polyline points={`0,150 ${[...Array(50)].map((_, x) => { const seg = (x * 8) % 140; let y = 150; if (seg > 40 && seg < 55) y = 125; else if (seg > 55 && seg < 65) y = 160; else if (seg > 65 && seg < 80) y = 110; else if (seg > 80 && seg < 88) y = 155; return `${x * 8},${y}`; }).join(' ')}`} fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" />
      </svg>
    ),
    constitucion: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <rect x="140" y="20" width="120" height="150" rx="4" fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.25)} strokeWidth="2" />
        {[...Array(8)].map((_, i) => <line key={i} x1="158" y1={42 + i * 16} x2={210 + (i % 3) * 15} y2={42 + i * 16} stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" />)}
        {[[55,25],[345,25]].map(([x, y], i) => <g key={`c${i}`}><rect x={x - 8} y={y} width="16" height="135" fill={hexToRgba(color, 0.05)} stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" /><rect x={x - 14} y={y - 5} width="28" height="7" rx="2" fill={hexToRgba(color, 0.1)} /><rect x={x - 14} y={y + 133} width="28" height="7" rx="2" fill={hexToRgba(color, 0.1)} /></g>)}
      </svg>
    ),
    sucesiones: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="30" r="16" fill={hexToRgba(color, 0.1)} stroke={hexToRgba(color, 0.35)} strokeWidth="2" />
        <line x1="200" y1="46" x2="130" y2="80" stroke={hexToRgba(color, 0.2)} strokeWidth="1.5" />
        <line x1="200" y1="46" x2="270" y2="80" stroke={hexToRgba(color, 0.2)} strokeWidth="1.5" />
        <circle cx="130" cy="92" r="13" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.3)} strokeWidth="1.8" />
        <circle cx="270" cy="92" r="13" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.3)} strokeWidth="1.8" />
        <line x1="130" y1="105" x2="95" y2="140" stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" />
        <line x1="130" y1="105" x2="165" y2="140" stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" />
        <line x1="270" y1="105" x2="235" y2="140" stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" />
        <line x1="270" y1="105" x2="305" y2="140" stroke={hexToRgba(color, 0.15)} strokeWidth="1.2" />
        {[95,165,235,305].map((x, i) => <circle key={i} cx={x} cy="150" r="10" fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.2)} strokeWidth="1.5" />)}
      </svg>
    ),
    previsional: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="155,20 245,20 210,90 245,90 200,170 155,90 190,90" fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        {[...Array(12)].map((_, i) => <circle key={i} cx={190 + Math.random() * 20} cy={100 + Math.random() * 55} r="2.5" fill={hexToRgba(color, 0.2 + Math.random() * 0.15)} />)}
      </svg>
    ),
    reales: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,20 120,75 280,75" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.35)} strokeWidth="2.5" />
        <rect x="135" y="75" width="130" height="85" fill={hexToRgba(color, 0.05)} stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        <rect x="185" y="110" width="30" height="50" fill={hexToRgba(color, 0.1)} stroke={hexToRgba(color, 0.25)} strokeWidth="1.5" />
        <rect x="148" y="88" width="22" height="22" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.2)} strokeWidth="1.2" />
        <rect x="230" y="88" width="22" height="22" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.2)} strokeWidth="1.2" />
        <circle cx="320" cy="55" r="12" fill="none" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />
        <line x1="332" y1="55" x2="365" y2="55" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />
        <line x1="365" y1="55" x2="365" y2="65" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />
        <line x1="355" y1="55" x2="355" y2="63" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />
      </svg>
    ),
    salud: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[...Array(60)].map((_, i) => { const y = i * 3; const x1 = 200 + Math.sin(y / 15) * 50; const x2 = 200 - Math.sin(y / 15) * 50; return <g key={i}><circle cx={x1} cy={y} r="2" fill={hexToRgba(color, 0.2)} /><circle cx={x2} cy={y} r="2" fill={hexToRgba(color, 0.2)} />{y % 18 < 3 && <line x1={x1} y1={y} x2={x2} y2={y} stroke={hexToRgba(color, 0.1)} strokeWidth="0.8" />}</g>; })}
        <rect x="52" y="50" width="16" height="45" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.25)} strokeWidth="1.5" />
        <rect x="37" y="65" width="46" height="16" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.25)} strokeWidth="1.5" />
      </svg>
    ),
    migratorio: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="90" r="70" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        {[18,38,58].map((rx, i) => <ellipse key={i} cx="200" cy="90" rx={rx} ry="70" fill="none" stroke={hexToRgba(color, 0.12)} strokeWidth="1" />)}
        {[-2,-1,0,1,2].map((p, i) => { const py = 90 + p * 22; const rx2 = Math.sqrt(4900 - p * p * 484); return <line key={i} x1={200 - rx2} y1={py} x2={200 + rx2} y2={py} stroke={hexToRgba(color, 0.12)} strokeWidth="1" />; })}
        <line x1="310" y1="40" x2="345" y2="28" stroke={hexToRgba(color, 0.3)} strokeWidth="2" />
        <polygon points="345,28 352,22 348,35" fill={hexToRgba(color, 0.25)} />
      </svg>
    ),
    ddhh: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        {[100,145,190,210,255,300].map((x, i) => { const tall = i === 3 ? 18 : 0; return <g key={i}><line x1={x} y1={140} x2={x} y2={100 - tall} stroke={hexToRgba(color, 0.3)} strokeWidth="2.5" /><circle cx={x} cy={90 - tall} r="10" fill="none" stroke={hexToRgba(color, 0.3)} strokeWidth="2" /></g>; })}
        {[0,1,2].map(c => <ellipse key={`l${c}`} cx={80 + c * 26} cy="45" rx="13" ry="8" fill="none" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />)}
        {[0,1,2].map(c => <ellipse key={`r${c}`} cx={280 + c * 26} cy="45" rx="13" ry="8" fill="none" stroke={hexToRgba(color, 0.25)} strokeWidth="2" />)}
      </svg>
    ),
    federales: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 15 L260 45 L260 120 Q200 170 200 170 Q200 170 140 120 L140 45 Z" fill={hexToRgba(color, 0.06)} stroke={hexToRgba(color, 0.35)} strokeWidth="2.5" />
        {[0,1,2,3,4].map(s => { const a1 = (s / 5) * Math.PI * 2 - Math.PI / 2; const a2 = ((s + 2) / 5) * Math.PI * 2 - Math.PI / 2; return <line key={s} x1={200 + Math.cos(a1) * 22} y1={90 + Math.sin(a1) * 22} x2={200 + Math.cos(a2) * 22} y2={90 + Math.sin(a2) * 22} stroke={hexToRgba(color, 0.25)} strokeWidth="2" />; })}
      </svg>
    ),
    mixta: (
      <svg viewBox="0 0 400 180" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
        <rect x="168" y="55" width="64" height="64" rx="10" fill={hexToRgba(color, 0.08)} stroke={hexToRgba(color, 0.35)} strokeWidth="2.5" />
        {[[0,0],[-16,-16],[16,16],[-16,16],[16,-16]].map(([dx, dy], i) => <circle key={i} cx={200 + dx} cy={87 + dy} r="5" fill={hexToRgba(color, 0.35)} />)}
      </svg>
    ),
  };

  return (
    <div style={wrapStyle}>
      {ilustraciones[categoriaKey] || ilustraciones.civil}
    </div>
  );
}

export default function TriviaLegal() {
  const [pantalla, setPantalla] = useState("inicio");
  const [categoriaActual, setCategoriaActual] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [respondida, setRespondida] = useState(false);
  const [opcionesMezcladas, setOpcionesMezcladas] = useState([]);

  const iniciarPartida = (cat) => {
    const pregsCat = cat === "mixta"
      ? mezclar(PREGUNTAS).slice(0, 20)
      : mezclar(PREGUNTAS.filter((p) => p.c === cat)).slice(0, 20);
    setPreguntas(pregsCat);
    setCategoriaActual(cat);
    setIndicePregunta(0);
    setPuntaje(0);
    setRespuestaSeleccionada(null);
    setRespondida(false);
    setOpcionesMezcladas(mezclar(pregsCat[0].o));
    setPantalla("juego");
  };

  const seleccionarRespuesta = (opcion) => {
    if (respondida) return;
    setRespuestaSeleccionada(opcion);
    setRespondida(true);
    if (opcion === preguntas[indicePregunta].a) {
      setPuntaje((p) => p + 1);
    }
  };

  const siguientePregunta = () => {
    if (indicePregunta + 1 >= preguntas.length) {
      setPantalla("resultado");
    } else {
      const nuevo = indicePregunta + 1;
      setIndicePregunta(nuevo);
      setRespuestaSeleccionada(null);
      setRespondida(false);
      setOpcionesMezcladas(mezclar(preguntas[nuevo].o));
    }
  };

  const volverInicio = () => {
    setPantalla("inicio");
    setCategoriaActual(null);
    setPreguntas([]);
    setIndicePregunta(0);
    setPuntaje(0);
  };

  const porcentaje = preguntas.length > 0 ? Math.round((puntaje / preguntas.length) * 100) : 0;
  const descuento = 0;

  const categoriaKeys = Object.keys(CATEGORIAS);

  // Pantalla de inicio

  const estilos = {
    app: {
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#fff",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    contenedor: {
      position: "relative",
      zIndex: 1,
      maxWidth: 800,
      margin: "0 auto",
      padding: "20px 16px",
    },
    header: {
      textAlign: "center",
      padding: "30px 0 20px",
    },
    titulo: {
      fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
      fontWeight: 800,
      color: "#C9A84C",
      margin: 0,
      letterSpacing: "0.02em",
      lineHeight: 1.2,
    },
    subtitulo: {
      fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
      color: "#999",
      marginTop: 8,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: 12,
      marginTop: 24,
    },
    catCard: (color, activa) => ({
      background: activa ? color + "20" : "#141414",
      border: `1px solid ${activa ? color : "#222"}`,
      borderRadius: 12,
      padding: "16px 12px",
      cursor: "pointer",
      transition: "all 0.2s",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }),
    catIcono: { fontSize: 32, marginBottom: 6 },
    catNombre: { fontSize: 12, fontWeight: 600, color: "#ddd", lineHeight: 1.3 },
    catCount: (color) => ({
      fontSize: 10,
      color: color,
      marginTop: 4,
      opacity: 0.8,
    }),
    preguntaCard: {
      background: "#141414",
      border: "1px solid #222",
      borderRadius: 16,
      padding: "28px 20px",
      marginTop: 20,
    },
    preguntaTexto: {
      fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#eee",
      marginBottom: 24,
    },
    opcion: (seleccionada, correcta, respondida) => {
      let bg = "#1a1a1a";
      let borde = "#333";
      let col = "#ddd";
      if (respondida) {
        if (correcta) {
          bg = "#065f4620";
          borde = "#059669";
          col = "#34d399";
        } else if (seleccionada) {
          bg = "#7f1d1d20";
          borde = "#dc2626";
          col = "#f87171";
        }
      } else if (seleccionada) {
        bg = "#C9A84C20";
        borde = "#C9A84C";
      }
      return {
        display: "block",
        width: "100%",
        padding: "14px 16px",
        marginBottom: 10,
        background: bg,
        border: `1.5px solid ${borde}`,
        borderRadius: 10,
        color: col,
        fontSize: "clamp(0.9rem, 2vw, 1rem)",
        cursor: respondida ? "default" : "pointer",
        textAlign: "left",
        transition: "all 0.2s",
        fontFamily: "inherit",
        lineHeight: 1.4,
      };
    },
    botonSiguiente: (color) => ({
      display: "block",
      width: "100%",
      padding: "14px",
      marginTop: 16,
      background: color || "#C9A84C",
      border: "none",
      borderRadius: 10,
      color: "#000",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
    }),
    barra: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid #222",
      marginBottom: 8,
    },
    barraTexto: { fontSize: 13, color: "#888" },
    progreso: (pct, color) => ({
      height: 4,
      background: "#222",
      borderRadius: 4,
      overflow: "hidden",
      flex: 1,
      margin: "0 12px",
    }),
    progresoFill: (pct, color) => ({
      height: "100%",
      width: `${pct}%`,
      background: color,
      borderRadius: 4,
      transition: "width 0.3s",
    }),
    resultado: {
      textAlign: "center",
      padding: "40px 20px",
    },
    resultadoCirculo: (pct) => ({
      width: 160,
      height: 160,
      borderRadius: "50%",
      border: `6px solid ${pct >= 70 ? "#059669" : pct >= 40 ? "#C9A84C" : "#dc2626"}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 24px",
      background: "#14141480",
    }),
    infoPanel: {
      background: "#141414",
      border: "1px solid #C9A84C30",
      borderRadius: 16,
      padding: "24px 20px",
      marginTop: 20,
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px solid #1a1a1a",
      fontSize: 14,
      color: "#ccc",
    },
    btnVolver: {
      background: "transparent",
      border: "1px solid #333",
      borderRadius: 8,
      color: "#999",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "inherit",
    },
  };

  // ═══════════ PANTALLA INICIO ═══════════
  if (pantalla === "inicio") {
    const countPorCat = {};
    PREGUNTAS.forEach((p) => {
      countPorCat[p.c] = (countPorCat[p.c] || 0) + 1;
    });

    return (
      <div style={estilos.app}>
        <div style={estilos.contenedor}>
          <div style={estilos.header}>
            <img
              src={LOGO_BASE64}
              alt="García & Pozzaglio — Estudio Jurídico"
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 24,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "3px solid #C9A84C50",
                boxShadow: "0 8px 32px rgba(201,168,76,0.25), 0 0 60px rgba(201,168,76,0.08)",
              }}
            />
            <h1 style={{ ...estilos.titulo, fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)", marginBottom: 6 }}>
              LEYES ARGENTINAS
            </h1>
            <p style={{ ...estilos.subtitulo, fontSize: "clamp(0.85rem, 2.2vw, 1.1rem)", marginBottom: 20, letterSpacing: "0.12em" }}>
              TRIVIA JURÍDICA
            </p>
            <div style={{ width: 60, height: 1, background: "#C9A84C40", margin: "0 auto 20px" }} />
            <p style={{ ...estilos.subtitulo, marginBottom: 8, fontSize: 11 }}>
              ESTUDIO JURÍDICO
            </p>
            <h2 style={{ ...estilos.titulo, fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>GARCÍA POZZAGLIO</h2>
            <p style={{ fontSize: 13, color: "#666", marginTop: 16, lineHeight: 1.6 }}>
              Poné a prueba tus conocimientos jurídicos.
              <br />
              20 preguntas por partida — ¡Acertá el 20% y ganá descuento en honorarios!
            </p>
          </div>

          <h2
            style={{
              fontSize: 14,
              color: "#C9A84C",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: 28,
              marginBottom: 4,
            }}
          >
            Elegí una categoría
          </h2>

          <div style={estilos.grid}>
            {categoriaKeys.map((key) => {
              const cat = CATEGORIAS[key];
              const esMixta = key === "mixta";
              const count = esMixta ? PREGUNTAS.length : (countPorCat[key] || 0);
              if (count === 0) return null;
              return (
                <div
                  key={key}
                  style={{
                    ...estilos.catCard(cat.color, false),
                    ...(esMixta ? {
                      gridColumn: "1 / -1",
                      background: "linear-gradient(135deg, #1a1a0a 0%, #141414 100%)",
                      border: "1px solid #C9A84C40",
                      padding: "20px 16px",
                    } : {}),
                  }}
                  onClick={() => iniciarPartida(key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = cat.color;
                    e.currentTarget.style.background = esMixta
                      ? "linear-gradient(135deg, #2a2a0a 0%, #1a1a1a 100%)"
                      : cat.color + "15";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = esMixta ? "#C9A84C40" : "#222";
                    e.currentTarget.style.background = esMixta
                      ? "linear-gradient(135deg, #1a1a0a 0%, #141414 100%)"
                      : "#141414";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div style={{ ...estilos.catIcono, fontSize: esMixta ? 40 : 32 }}>{cat.icono}</div>
                  <div style={{ ...estilos.catNombre, fontSize: esMixta ? 15 : 12, color: esMixta ? "#F59E0B" : "#ddd" }}>
                    {cat.nombre}
                  </div>
                  <div style={estilos.catCount(cat.color)}>
                    {esMixta ? "20 preguntas aleatorias de todas las ramas" : `${count} preguntas`}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={estilos.infoPanel}>
            <h3 style={{ color: "#C9A84C", margin: "0 0 16px", fontSize: 15, textAlign: "center" }}>
              📍 Contacto del Estudio
            </h3>
            <div style={estilos.infoItem}>
              <span>📍</span>
              <span>{DATOS_ESTUDIO.direccion}</span>
            </div>
            <div style={estilos.infoItem}>
              <span>📞</span>
              <span>{DATOS_ESTUDIO.telefonos.join(" / ")}</span>
            </div>
            <div style={estilos.infoItem}>
              <span>✉️</span>
              <span style={{ wordBreak: "break-all" }}>{DATOS_ESTUDIO.emails[0]}</span>
            </div>
            <div style={estilos.infoItem}>
              <span>✉️</span>
              <span style={{ wordBreak: "break-all" }}>{DATOS_ESTUDIO.emails[1]}</span>
            </div>
            <div style={estilos.infoItem}>
              <span>📸</span>
              <span>{DATOS_ESTUDIO.instagram}</span>
            </div>
            <div style={{ ...estilos.infoItem, borderBottom: "none" }}>
              <span>💬</span>
              <a
                href={`https://wa.me/${DATOS_ESTUDIO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366", textDecoration: "none", fontWeight: 600 }}
              >
                Contactanos por WhatsApp
              </a>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 11, color: "#444", marginTop: 30 }}>
            © {new Date().getFullYear()} {DATOS_ESTUDIO.nombre}
          </p>
        </div>
      </div>
    );
  }

  // ═══════════ PANTALLA JUEGO ═══════════
  if (pantalla === "juego") {
    const cat = CATEGORIAS[categoriaActual];
    const pregActual = preguntas[indicePregunta];
    const progreso = ((indicePregunta + 1) / preguntas.length) * 100;

    return (
      <div style={estilos.app}>
        <div style={estilos.contenedor}>
          <div style={estilos.barra}>
            <button style={estilos.btnVolver} onClick={volverInicio}>
              ← Salir
            </button>
            <span style={{ ...estilos.barraTexto, color: cat.color, fontWeight: 600 }}>
              {cat.icono} {cat.nombre}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 12, color: "#666" }}>{indicePregunta + 1}/{preguntas.length}</span>
            <div style={estilos.progreso(progreso, cat.color)}>
              <div style={estilos.progresoFill(progreso, cat.color)} />
            </div>
            <span style={{ fontSize: 12, color: "#C9A84C", fontWeight: 600 }}>
              {puntaje} ✓
            </span>
          </div>

          <div style={estilos.preguntaCard}>
            <IlustracionCategoria categoriaKey={categoriaActual === "mixta" ? pregActual.c : categoriaActual} />
            {categoriaActual === "mixta" && CATEGORIAS[pregActual.c] && (
              <p style={{ fontSize: 11, color: CATEGORIAS[pregActual.c].color, marginBottom: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {CATEGORIAS[pregActual.c].icono} {CATEGORIAS[pregActual.c].nombre}
              </p>
            )}
            <p style={estilos.preguntaTexto}>{pregActual.q}</p>

            {opcionesMezcladas.map((opcion, i) => (
              <button
                key={i}
                style={estilos.opcion(
                  opcion === respuestaSeleccionada,
                  opcion === pregActual.a,
                  respondida
                )}
                onClick={() => seleccionarRespuesta(opcion)}
              >
                <span style={{ marginRight: 8, opacity: 0.5, fontWeight: 700 }}>
                  {String.fromCharCode(65 + i)}.
                </span>
                {opcion}
              </button>
            ))}

            {respondida && (
              <div style={{ marginTop: 16 }}>
                <p
                  style={{
                    fontSize: 13,
                    color: respuestaSeleccionada === pregActual.a ? "#34d399" : "#f87171",
                    marginBottom: 12,
                    fontWeight: 600,
                  }}
                >
                  {respuestaSeleccionada === pregActual.a
                    ? "✓ ¡Correcto!"
                    : `✗ La respuesta correcta era: ${pregActual.a}`}
                </p>
                <button
                  style={estilos.botonSiguiente(cat.color)}
                  onClick={siguientePregunta}
                >
                  {indicePregunta + 1 >= preguntas.length ? "Ver resultado" : "Siguiente →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════ PANTALLA RESULTADO ═══════════
  if (pantalla === "resultado") {
    const cat = CATEGORIAS[categoriaActual];
    let mensaje = "";
    let emoji = "";
    if (porcentaje >= 80) { mensaje = "¡Excelente! Sos un/a crack del derecho"; emoji = "🏆"; }
    else if (porcentaje >= 60) { mensaje = "¡Muy bien! Conocimientos sólidos"; emoji = "🎯"; }
    else if (porcentaje >= 40) { mensaje = "¡Bien! Seguí practicando"; emoji = "💪"; }
    else if (porcentaje >= 20) { mensaje = "¡No está mal! A repasar un poco más"; emoji = "📚"; }
    else { mensaje = "¡A estudiar! Podés mejorar mucho"; emoji = "📖"; }

    return (
      <div style={estilos.app}>
        <div style={estilos.contenedor}>
          <div style={estilos.resultado}>
            <p style={{ fontSize: 48, marginBottom: 8 }}>{emoji}</p>
            <div style={estilos.resultadoCirculo(porcentaje)}>
              <span style={{ fontSize: 42, fontWeight: 800, color: "#fff" }}>
                {porcentaje}%
              </span>
              <span style={{ fontSize: 13, color: "#888" }}>
                {puntaje}/{preguntas.length}
              </span>
            </div>

            <h2 style={{ fontSize: 20, color: "#eee", marginBottom: 8 }}>{mensaje}</h2>
            <p style={{ fontSize: 14, color: cat.color, marginBottom: 4 }}>
              {cat.icono} {cat.nombre}
            </p>

            ;
  }

  return null;
}
