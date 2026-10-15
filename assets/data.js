/* =========================================================
   Casos resueltos, banco de preguntas y pares para unir.
   ========================================================= */

window.PROBLEMS = [
  {
    id: 'deportista', title: 'El deportista en la línea de largada', level: 'Básico', tema: 'Estrés agudo',
    enunciado: 'Un deportista de alto rendimiento está en la línea de largada de la final de una carrera de velocidad. ¿Qué glándulas y hormonas lo ayudan en este momento de gran exigencia física y emocional?',
    antes: 'Antes de abrir: hacé una lista de lo que el cuerpo "necesita" en los próximos 10 segundos (energía, oxígeno, sangre en los músculos…). Después pensá qué hormona da cada cosa.',
    steps: [
      { t: 'Traduzco la situación a necesidades', p: 'El cerebro interpreta la largada como un desafío. El cuerpo necesita <b>ya</b>: más glucosa disponible, más oxígeno, más sangre en los músculos y el corazón latiendo fuerte.', w: 'Si primero pienso en <em>qué necesita el cuerpo</em>, después las hormonas "caen solas".', c: '' },
      { t: 'La respuesta rápida: médula suprarrenal', p: 'El sistema nervioso simpático estimula la <b>médula suprarrenal</b>, que libera <b>adrenalina y noradrenalina</b> en segundos: aumentan la frecuencia y la fuerza del latido, elevan la presión, dilatan las vías respiratorias y suben la glucemia.', w: 'La médula suprarrenal está controlada directamente por nervios: por eso es la respuesta más veloz.', c: '¿Puse la adrenalina en la <b>médula</b> y no en la corteza? Sí.' },
      { t: 'La respuesta sostenida: eje hipotálamo-hipófisis-suprarrenal', p: 'En paralelo, el <b>hipotálamo</b> libera CRH → la <b>adenohipófisis</b> libera ACTH → la <b>corteza suprarrenal</b> libera <b>cortisol</b>, que fabrica glucosa a partir de proteínas y lípidos y prioriza el uso de energía del cerebro y el corazón.', w: 'El cortisol tarda minutos, pero su efecto dura más: es la "segunda ola" de la respuesta al estrés.', c: '' },
      { t: 'Otros actores', p: 'El páncreas libera <b>glucagón</b> (sube la glucemia) y baja la insulina; las <b>hormonas tiroideas</b> mantienen alta la tasa metabólica de base.', w: 'Varias hormonas suman efectos para un mismo fin: es un ejemplo de <b>sinergia</b>.', c: '¿Respondí glándulas <b>y</b> hormonas, como pedía la pregunta? Sí.' }
    ],
    respuesta: '<b>Médula suprarrenal</b> → adrenalina y noradrenalina (respuesta inmediata, controlada por el simpático). <b>Hipotálamo → adenohipófisis → corteza suprarrenal</b> → CRH → ACTH → cortisol (respuesta sostenida, más glucosa). Además, <b>páncreas</b> → glucagón y <b>tiroides</b> → T3/T4 (metabolismo).'
  },
  {
    id: 'bocio', title: 'Hipotiroidismo… con la tiroides agrandada', level: 'Desafío', tema: 'Retroalimentación negativa',
    enunciado: 'Un paciente tiene la tasa metabólica muy baja, poca energía y otros síntomas de hipotiroidismo. Sin embargo, su glándula tiroides es <b>más grande</b> de lo normal. a) ¿A qué se deben los síntomas? b) ¿Qué pruebas ayudarían al diagnóstico? c) ¿Qué provoca que la glándula crezca?',
    antes: 'Parece una contradicción: la glándula fabrica poco, pero es grande. Pensá: ¿quién le "ordena" a la tiroides que trabaje y qué hace esa orden cuando no recibe respuesta?',
    steps: [
      { t: 'Explico los síntomas', p: 'Hay poca <b>T3/T4</b> en sangre. Como las hormonas tiroideas aceleran el metabolismo de casi todas las células, su falta da metabolismo lento, cansancio, intolerancia al frío y piel seca.', w: 'Primero conecto el síntoma con la acción normal de la hormona: el síntoma es esa acción "en negativo".', c: '' },
      { t: 'Repaso el circuito normal', p: 'Hipotálamo → <b>TRH</b> → adenohipófisis → <b>TSH</b> → tiroides → <b>T3/T4</b>. Cuando T3/T4 suben, frenan al hipotálamo y a la hipófisis (<b>retroalimentación negativa</b>).', w: 'Casi todos los "misterios" endocrinos se resuelven dibujando el eje completo.', c: '' },
      { t: 'Encuentro la falla', p: 'Una causa clásica es la <b>falta de yodo</b> en la dieta: sin yodo, la tiroides no puede fabricar T3/T4. Como no hay T3/T4, <b>no hay freno</b>: el hipotálamo y la hipófisis siguen liberando TRH y TSH en cantidad.', w: 'La retroalimentación negativa es un freno: si el producto final falta, el freno nunca se aplica.', c: '' },
      { t: 'Explico el agrandamiento', p: 'La TSH no solo estimula la secreción: también estimula el <b>crecimiento</b> de la tiroides. Con TSH alta todo el tiempo, la glándula crece: eso es el <b>bocio</b>. Por eso se agrega yodo a la sal de mesa.', w: '', c: 'Mi explicación da cuenta de las <b>dos</b> cosas raras: hormonas bajas y glándula grande ✔' },
      { t: 'Propongo pruebas', p: 'Medir en sangre <b>T3/T4</b> (bajas) y <b>TSH</b> (alta), y evaluar la ingesta de yodo.', w: '', c: '' }
    ],
    respuesta: 'a) Falta de hormonas tiroideas (T3/T4) → metabolismo bajo. b) Análisis de sangre de T3/T4 y TSH (y del yodo). c) Al no haber T3/T4 no hay retroalimentación negativa: la TSH queda alta y estimula el crecimiento de la tiroides (bocio).'
  },
  {
    id: 'glucemia', title: 'Después del almuerzo y a media tarde: la glucemia', level: 'Básico', tema: 'Homeostasis · antagonismo',
    enunciado: 'Una persona almuerza fideos (mucho almidón). ¿Qué pasa con su glucosa en sangre y qué hormona interviene? Cuatro horas después, sin comer, ¿qué hormona actúa?',
    antes: '¿Cuál de las dos hormonas del páncreas <em>baja</em> la glucemia y cuál la <em>sube</em>? Escribilo antes de abrir.',
    steps: [
      { t: 'Después de comer', p: 'Al digerir el almidón, sube la glucemia. Las <b>células β</b> de los islotes de Langerhans lo detectan y liberan <b>insulina</b>, que hace que las células capten glucosa y que el hígado la guarde como glucógeno. La glucemia baja.', w: 'Es <b>hipoglucemiante</b>.', c: '' },
      { t: 'En ayunas', p: 'Cuando la glucemia baja, las <b>células α</b> liberan <b>glucagón</b>, que hace que el hígado degrade el glucógeno y libere glucosa. La glucemia sube.', w: 'Es <b>hiperglucemiante</b>.', c: 'Truco para no confundirlas: gluca<b>gón</b> → "glucosa, <b>go</b>, ¡salí del hígado!".' },
      { t: 'Le pongo nombre al mecanismo', p: 'Insulina y glucagón tienen efectos opuestos sobre una misma variable: son <b>antagonistas</b>. Juntas mantienen la glucemia en un rango estable: eso es <b>homeostasis</b> por retroalimentación negativa (el cambio provoca una respuesta que lo corrige).', w: '', c: 'No confundas <b>glucagón</b> (hormona) con <b>glucógeno</b> (la reserva de glucosa en hígado y músculo).' }
    ],
    respuesta: 'Después de comer: sube la glucemia → <b>insulina</b> (células β) → la glucemia baja. En ayunas: baja la glucemia → <b>glucagón</b> (células α) → la glucemia sube. Son hormonas antagonistas que mantienen la homeostasis.'
  },
  {
    id: 'paracelso', title: 'Paracelso y la orina dulce', level: 'Intermedio', tema: 'Páncreas · diabetes',
    enunciado: 'En el siglo XVI, Paracelso hirvió la orina de un paciente diabético y obtuvo un jarabe; al evaporarlo quedaron depósitos blancos. Concluyó que eran sal y que la diabetes se debía a sal depositada en los riñones. a) ¿Por qué la orina se convertía en jarabe? b) ¿Fueron correctas sus conclusiones?',
    antes: '¿Qué sustancia hace que algo hervido se vuelva jarabe?',
    steps: [
      { t: 'Identifico la sustancia', p: 'Un jarabe se forma al concentrar <b>azúcar</b>. La orina tenía glucosa.', w: '', c: '' },
      { t: 'Explico por qué había glucosa en la orina', p: 'En la diabetes mellitus hay falta (o falla) de <b>insulina</b>, así que la glucemia sube tanto que el riñón no alcanza a reabsorber toda la glucosa, y esta se pierde por la orina, arrastrando agua (orina abundante y sed).', w: 'Conecto el síntoma con la hormona: sin insulina, la glucosa se queda en la sangre.', c: '' },
      { t: 'Evalúo la conclusión', p: 'Paracelso acertó en algo: la observación (hay un residuo en la orina). Se equivocó en la interpretación: no era sal sino glucosa, y el problema no estaba en los riñones sino en el <b>páncreas endocrino</b>.', w: 'Separar observación de interpretación es pensamiento científico (y metacognición).', c: '' }
    ],
    respuesta: 'a) Porque tenía glucosa: sin insulina suficiente, la glucemia supera lo que el riñón puede reabsorber. b) No: el residuo era azúcar, no sal, y el origen es la falta de insulina del páncreas, no un depósito renal.'
  },
  {
    id: 'cortisolexceso', title: 'Un tumor que fabrica cortisol', level: 'Desafío', tema: 'Retroalimentación negativa',
    enunciado: 'Un tumor en la corteza suprarrenal produce cortisol en exceso, sin obedecer a ninguna orden. ¿Qué pasa con los niveles de CRH y de ACTH? ¿Por qué?',
    antes: 'Dibujá el eje: hipotálamo → ? → hipófisis → ? → suprarrenal → cortisol. ¿Hacia dónde apunta la flecha del freno?',
    steps: [
      { t: 'Dibujo el eje', p: 'Hipotálamo → <b>CRH</b> → adenohipófisis → <b>ACTH</b> → corteza suprarrenal → <b>cortisol</b>. El cortisol frena al hipotálamo y a la hipófisis.', w: '', c: '' },
      { t: 'Aplico el freno', p: 'Hay mucho cortisol → el freno está "a fondo" → el hipotálamo baja la CRH y la hipófisis baja la ACTH.', w: 'La retroalimentación negativa responde al <b>nivel</b> de la hormona final, sin importar de dónde viene.', c: '' },
      { t: 'Compruebo la lógica', p: 'El tumor no obedece a la ACTH, así que aunque la ACTH baje, el cortisol sigue alto. Resultado: cortisol ↑, ACTH ↓, CRH ↓.', w: '', c: 'Comparalo con el caso del bocio: ahí la hormona final estaba <b>baja</b> y las de arriba <b>altas</b>. Es el mismo freno, al revés.' }
    ],
    respuesta: 'CRH y ACTH <b>disminuyen</b>, porque el cortisol alto ejerce retroalimentación negativa sobre el hipotálamo y la hipófisis. El cortisol sigue alto porque el tumor no depende de la ACTH.'
  },
  {
    id: 'lactancia', title: 'Un bebé que mama', level: 'Intermedio', tema: 'Neurohipófisis · retroalimentación positiva',
    enunciado: 'Durante la lactancia, la succión del bebé hace que la madre produzca y eyecte leche. ¿Qué hormonas participan, de dónde salen y qué tipo de regulación es?',
    antes: 'Ojo: "producir" leche y "sacarla" son dos procesos distintos. ¿Puede haber dos hormonas?',
    steps: [
      { t: 'Separo los dos procesos', p: '<b>Producir</b> leche → <b>prolactina</b> (adenohipófisis). <b>Eyectar</b> (expulsar) la leche → <b>oxitocina</b> (fabricada en el hipotálamo, liberada por la neurohipófisis).', w: 'Muchos errores vienen de juntar en una sola hormona dos funciones parecidas.', c: '' },
      { t: 'Sigo el camino de la señal', p: 'La succión genera impulsos nerviosos que llegan al hipotálamo. Este disminuye el factor inhibidor de prolactina (dopamina) y estimula la liberación de oxitocina.', w: 'Es un reflejo <b>neuroendocrino</b>: empieza como señal nerviosa y termina como hormona.', c: '' },
      { t: 'Clasifico la regulación', p: 'Más succión → más hormona → más leche → el bebé sigue mamando: el efecto <b>refuerza</b> el estímulo. Es <b>retroalimentación positiva</b>. Cuando el bebé deja de mamar, la señal se corta y la producción baja: "la oferta se regula por la demanda".', w: '', c: 'La retroalimentación positiva es rara y siempre tiene un final claro (el parto termina, el bebé deja de mamar).' }
    ],
    respuesta: '<b>Prolactina</b> (adenohipófisis): producción de leche. <b>Oxitocina</b> (hipotálamo → neurohipófisis): eyección de la leche. Es un reflejo neuroendocrino con <b>retroalimentación positiva</b>.'
  },
  {
    id: 'adh', title: 'Una tarde de calor sin tomar agua', level: 'Intermedio', tema: 'ADH · homeostasis',
    enunciado: 'Una persona pasa la tarde al sol sin tomar agua y casi no orina. ¿Qué hormona explica esto, dónde se fabrica, dónde se libera y sobre qué órgano actúa?',
    antes: 'Pista: el nombre de la hormona describe su efecto ("anti" + "diuresis").',
    steps: [
      { t: 'Detecto el desequilibrio', p: 'Al perder agua por el sudor, la sangre se concentra (sube la osmolaridad). El <b>hipotálamo</b> lo detecta.', w: 'Toda regulación homeostática empieza con un sensor que detecta el cambio.', c: '' },
      { t: 'Ubico la hormona', p: 'La <b>ADH</b> (hormona antidiurética o vasopresina) se <b>fabrica en el hipotálamo</b>, viaja por los axones y se <b>almacena y libera en la neurohipófisis</b>.', w: 'Trampa clásica: la neurohipófisis <b>no fabrica</b> hormonas; solo libera las que hace el hipotálamo.', c: '' },
      { t: 'Efecto y corrección', p: 'La ADH actúa en los <b>túbulos renales</b> aumentando la reabsorción de agua: la orina sale escasa y concentrada, y la sangre recupera su concentración normal. Retroalimentación negativa.', w: '', c: '' }
    ],
    respuesta: '<b>ADH / vasopresina</b>: se fabrica en el hipotálamo, se libera desde la neurohipófisis y actúa en el riñón aumentando la reabsorción de agua (menos orina).'
  },
  {
    id: 'ciclo', title: 'Las curvas del ciclo menstrual', level: 'Desafío', tema: 'Hormonas y desarrollo · reproducción',
    enunciado: 'Analizá un ciclo menstrual típico de 28 días. ¿Cuándo crecen los estrógenos? ¿Qué hormona hace crecer el endometrio y cuál lo mantiene? ¿Cuándo hay un pico de LH y FSH? ¿Cuándo y dónde se produce la progesterona? ¿Cuándo bajan los esteroides y las gonadotrofinas? ¿Qué glándulas producen gonadotrofinas? ¿Cómo se llama el desprendimiento del endometrio?',
    antes: 'Dividí el ciclo en dos mitades separadas por la ovulación (día ~14). Antes de abrir: ¿qué estructura del ovario "manda" en cada mitad?',
    steps: [
      { t: 'Primera mitad: fase folicular (días 1–14)', p: 'La <b>FSH</b> de la adenohipófisis hace crecer un folículo ovárico, que secreta <b>estrógenos</b> en cantidad <b>creciente</b>. Los estrógenos hacen <b>proliferar</b> (crecer) el endometrio.', w: 'El folículo es el "protagonista" de la primera mitad.', c: '' },
      { t: 'El pico: ovulación (día ~14)', p: 'Cuando los estrógenos llegan a un nivel alto, ejercen retroalimentación <b>positiva</b> sobre el hipotálamo y la hipófisis: aparece un <b>pico de LH</b> (y de FSH) que provoca la <b>ovulación</b>.', w: 'Es uno de los pocos ejemplos de retroalimentación positiva en el cuerpo.', c: '' },
      { t: 'Segunda mitad: fase lútea (días 14–28)', p: 'Los restos del folículo que liberó el óvulo forman el <b>cuerpo lúteo</b>, que produce <b>progesterona</b> (y estrógenos). La progesterona <b>mantiene</b> el endometrio preparado para una posible implantación. Progesterona y estrógenos frenan a las gonadotrofinas (retroalimentación negativa), que quedan bajas.', w: 'El cuerpo lúteo es el protagonista de la segunda mitad.', c: '' },
      { t: 'El final del ciclo', p: 'Si no hay embarazo, el cuerpo lúteo degenera: <b>caen progesterona y estrógenos</b> (fin del ciclo) y el endometrio se desprende: es la <b>menstruación</b>. Al caer los esteroides se libera el freno y la FSH empieza a subir otra vez.', w: '', c: '' },
      { t: '¿Quién produce gonadotrofinas?', p: 'La <b>adenohipófisis</b> (FSH y LH). Durante el embarazo, la <b>placenta</b> (el corion del embrión) produce <b>gonadotrofina coriónica</b> (hCG), que mantiene al cuerpo lúteo. Es la hormona que detectan los test de embarazo.', w: '', c: '¿Respondí cada una de las 7 preguntas? Revisalas una por una.' }
    ],
    respuesta: 'Estrógenos crecientes: fase folicular. Crecimiento del endometrio: estrógenos; mantenimiento: progesterona. Pico de LH/FSH: justo antes de la ovulación (día ~14). Progesterona: cuerpo lúteo, en la fase lútea (prepara y mantiene el endometrio, sostiene el embarazo). Bajan los esteroides al final del ciclo; las gonadotrofinas están bajas en la fase lútea. Gonadotrofinas: adenohipófisis y placenta (hCG). Desprendimiento: menstruación.'
  },
  {
    id: 'estrescronico', title: '¿Por qué nos enfermamos más en épocas de estrés?', level: 'Intermedio', tema: 'Hormonas y conducta · estrés',
    enunciado: 'Muchas personas notan que se resfrían más después de semanas de estrés intenso (mudanzas, problemas laborales, exámenes). ¿Qué explicación endocrina hay?',
    antes: '¿Qué hormona del estrés se mantiene alta durante semanas? ¿Qué le hace al sistema inmune?',
    steps: [
      { t: 'Distingo estrés agudo y crónico', p: 'El estrés <b>agudo</b> es breve y útil (adrenalina, cortisol por un rato). El estrés <b>crónico</b> dura semanas o meses y mantiene el eje hipotálamo-hipófisis-suprarrenal activado.', w: '', c: '' },
      { t: 'Conecto con el cortisol', p: 'El <b>cortisol</b> (glucocorticoide) sostenido <b>suprime las respuestas inflamatoria e inmunitaria</b>.', w: 'Lo que en el corto plazo es una ventaja (ahorrar energía para la emergencia), en el largo plazo es un costo.', c: '' },
      { t: 'Concluyo', p: 'Con las defensas deprimidas, aumenta la susceptibilidad a infecciones. Además, el estrés crónico se asocia a hipertensión, alteraciones del sueño y del ánimo, y cambios en la microbiota intestinal.', w: '', c: 'Es un ejemplo de cómo un estado psicológico tiene efectos biológicos medibles.' }
    ],
    respuesta: 'El estrés crónico mantiene el <b>cortisol</b> elevado; los glucocorticoides suprimen la respuesta inmune e inflamatoria, por lo que aumenta la susceptibilidad a enfermedades.'
  },
  {
    id: 'jetlag', title: 'Jet lag y melatonina', level: 'Básico', tema: 'Pineal · ritmos',
    enunciado: 'Alguien vuela de Buenos Aires a Tokio y durante días tiene sueño de día y está despierto de noche. ¿Qué glándula y qué hormona están involucradas? ¿Cómo se regula su secreción?',
    antes: '¿Qué señal del ambiente le dice al cuerpo que es de noche?',
    steps: [
      { t: 'Ubico la glándula', p: 'La <b>glándula pineal</b>, en el centro del encéfalo, secreta <b>melatonina</b>.', w: '', c: '' },
      { t: 'Cómo se regula', p: 'La melatonina se secreta de forma rítmica: <b>alta de noche</b> y baja de día. La <b>luz</b> durante la noche interrumpe su producción. Es un <b>ritmo circadiano</b> (de alrededor de 24 h).', w: 'No todo se regula por retroalimentación: algunas hormonas siguen ritmos ambientales.', c: '' },
      { t: 'Explico el desajuste', p: 'El reloj biológico sigue "en hora de Buenos Aires": la melatonina sube cuando en Tokio es de día. Con los días, la luz reajusta el reloj. Por eso se estudia la melatonina como <b>cronobiótico</b> para acelerar ese ajuste.', w: '', c: '' }
    ],
    respuesta: '<b>Pineal → melatonina</b>. Su secreción sigue un ritmo circadiano regulado por el ciclo luz-oscuridad (alta de noche, inhibida por la luz). El viaje desfasa ese ritmo.'
  },
  {
    id: 'calcio', title: 'El calcio en sangre baja', level: 'Intermedio', tema: 'Paratiroides · tiroides',
    enunciado: 'Por una dieta muy pobre en calcio, baja la concentración de calcio en sangre. ¿Qué glándula responde, con qué hormona y cómo corrige el problema? ¿Qué hormona haría lo opuesto?',
    antes: 'Hay dos glándulas "vecinas" en el cuello que se reparten esta tarea. ¿Cuáles son?',
    steps: [
      { t: 'Ubico la respuesta', p: 'Las <b>paratiroides</b> (detrás de la tiroides) detectan el calcio bajo y liberan <b>parathormona (PTH)</b>.', w: '', c: '' },
      { t: 'Cómo sube el calcio', p: 'La PTH: 1) estimula la liberación de calcio de los <b>huesos</b>; 2) reduce la pérdida de calcio por los <b>riñones</b>; 3) activa la <b>vitamina D</b>, que aumenta la absorción de calcio en el <b>intestino</b>.', w: 'Tres órganos, un mismo objetivo.', c: '' },
      { t: 'El antagonista', p: 'Si el calcio sube demasiado, la <b>tiroides</b> (células parafoliculares) libera <b>calcitonina</b>, que inhibe la liberación de calcio del hueso.', w: 'PTH y calcitonina son antagonistas, como insulina y glucagón.', c: '' }
    ],
    respuesta: '<b>Paratiroides → parathormona</b>: saca calcio del hueso, lo retiene en el riñón y aumenta su absorción intestinal (vía vitamina D). La <b>calcitonina</b> de la tiroides hace lo opuesto.'
  },
  {
    id: 'intestino', title: 'Microbiota, intestino y estrés', level: 'Desafío', tema: 'Hormonas y conducta · eje intestino-cerebro',
    enunciado: 'Se propone que la microbiota intestinal y el estrés se influyen mutuamente. ¿Qué antecedentes apoyan esa relación y por qué vías se comunicarían el intestino y el cerebro?',
    antes: 'Pensá en dos tipos de "cables": uno nervioso y otro que viaja por la sangre.',
    steps: [
      { t: 'Defino el eje', p: 'El <b>eje intestino-cerebro</b> es un sistema de comunicación <b>bidireccional</b> que incluye la microbiota, el sistema nervioso entérico, el autónomo, el neuroendocrino, el neuroinmune y el sistema nervioso central.', w: '', c: '' },
      { t: 'Antecedentes', p: 'El estrés altera la motilidad intestinal, la barrera intestinal y la percepción visceral, y se asocia a <b>disbiosis</b> (cambios en la composición normal de la microbiota). A la vez, una microbiota diversa y equilibrada se asocia a mejor bienestar emocional y rendimiento cognitivo.', w: '', c: '' },
      { t: 'Vía nerviosa', p: 'El <b>nervio vago</b> es la principal vía: neuronas sensitivas del intestino llevan información al sistema nervioso central. Participan hormonas intestinales del apetito (grelina, que estimula la ingesta; CCK, GLP-1 y PYY, que la frenan).', w: '', c: '' },
      { t: 'Vía circulatoria', p: 'Por la sangre viajan sustancias como serotonina, dopamina, GABA, ácidos grasos de cadena corta y <b>cortisol</b> (del eje hipotálamo-hipófisis-suprarrenal).', w: '', c: 'Cierro con cautela: la evidencia es prometedora pero todavía <b>no es concluyente</b>; es un campo joven.' }
    ],
    respuesta: 'Antecedentes: el estrés altera la función intestinal y la microbiota (disbiosis), y la microbiota se asocia al bienestar emocional y cognitivo. Vías: <b>nervio vago</b> (nerviosa) y <b>circulatoria</b> (neurotransmisores, ácidos grasos de cadena corta y cortisol del eje HHA). La evidencia aún no es concluyente.'
  }
];

/* =========================================================
   Banco de preguntas · lv: facil | medio | dificil
   ========================================================= */
window.QUESTIONS = [
  // ---------- Fácil ----------
  { id: 'f1', lv: 'facil', tipo: 'teoria', tema: 'Glándulas', q: '¿Qué diferencia a una glándula endocrina de una exocrina?',
    opts: ['La endocrina vuelca sus productos a la sangre; la exocrina, a un conducto que comunica con el exterior o con una cavidad', 'La endocrina es más grande', 'La exocrina produce hormonas', 'No hay diferencia'], a: 0,
    exp: 'Endo = adentro (a la sangre, sin conducto). Exo = afuera (por un conducto). Ejemplos de exocrinas: sudoríparas, salivales, mamarias.' },
  { id: 'f2', lv: 'facil', tipo: 'teoria', tema: 'Glándulas', q: '¿Cuál es un ejemplo de glándula mixta (exocrina y endocrina a la vez)?',
    opts: ['Páncreas', 'Hipófisis', 'Glándula sudorípara', 'Pineal'], a: 0,
    exp: 'El páncreas fabrica jugo pancreático (exocrino, va al intestino) y, en los islotes de Langerhans, insulina y glucagón (endocrino, a la sangre).' },
  { id: 'f3', lv: 'facil', tipo: 'teoria', tema: 'Hormonas', q: '¿Qué es una hormona?',
    opts: ['Una sustancia química secretada en pequeñas cantidades que viaja por la sangre y actúa sobre células blanco con receptores específicos', 'Un impulso eléctrico', 'Una enzima digestiva', 'Una célula del sistema inmune'], a: 0,
    exp: 'Es un mensajero químico: se produce en poca cantidad, viaja por la sangre y solo actúa donde hay receptores para ella.' },
  { id: 'f4', lv: 'facil', tipo: 'teoria', tema: 'Hormonas', q: '¿Qué es una "célula blanco"?',
    opts: ['Una célula que tiene receptores específicos para una hormona', 'Un glóbulo blanco', 'La célula que fabrica la hormona', 'Cualquier célula del cuerpo'], a: 0,
    exp: 'La hormona llega a casi todas las células, pero solo responden las que tienen su receptor: esas son las células blanco (o diana).' },
  { id: 'f5', lv: 'facil', tipo: 'teoria', tema: 'Páncreas', q: '¿Qué hormona baja la glucosa en sangre?',
    opts: ['Insulina', 'Glucagón', 'Cortisol', 'Adrenalina'], a: 0,
    exp: 'La insulina es hipoglucemiante. Glucagón, cortisol y adrenalina suben la glucemia.' },
  { id: 'f6', lv: 'facil', tipo: 'teoria', tema: 'Pineal', q: '¿Qué hormona regula el ritmo día/noche y dónde se produce?',
    opts: ['Melatonina, en la glándula pineal', 'Cortisol, en la hipófisis', 'Oxitocina, en la pineal', 'Tiroxina, en el hipotálamo'], a: 0,
    exp: 'La pineal secreta melatonina, alta de noche e inhibida por la luz.' },
  { id: 'f7', lv: 'facil', tipo: 'teoria', tema: 'Suprarrenales', q: 'La "hormona del estrés", producida por la corteza suprarrenal, es…',
    opts: ['El cortisol', 'La insulina', 'La melatonina', 'La prolactina'], a: 0,
    exp: 'El cortisol (glucocorticoide) se libera ante el estrés y aumenta la glucemia.' },
  { id: 'f8', lv: 'facil', tipo: 'teoria', tema: 'Hipófisis', q: '¿En qué dos partes se divide la hipófisis?',
    opts: ['Adenohipófisis (anterior) y neurohipófisis (posterior)', 'Corteza y médula', 'Islotes y acinos', 'Derecha e izquierda'], a: 0,
    exp: 'Adeno = glándula (anterior); neuro = tejido nervioso (posterior). Corteza y médula son las partes de la suprarrenal.' },
  { id: 'f9', lv: 'facil', tipo: 'teoria', tema: 'Tiroides', q: '¿Qué hacen las hormonas tiroideas (T3 y T4)?',
    opts: ['Aumentan la tasa metabólica', 'Bajan el calcio', 'Producen leche', 'Regulan el sueño'], a: 0,
    exp: 'Aceleran el metabolismo de casi todas las células. Bajar el calcio es tarea de la calcitonina (también de la tiroides, pero otra hormona).' },
  { id: 'f10', lv: 'facil', tipo: 'teoria', tema: 'Homeostasis', q: '¿Qué es la homeostasis?',
    opts: ['El mantenimiento de un medio interno relativamente constante', 'La producción de hormonas sexuales', 'Un tipo de glándula', 'El crecimiento del cuerpo'], a: 0,
    exp: 'Homeo = similar, stasis = estado: mantener variables como la glucemia, la temperatura o el agua dentro de un rango estable.' },
  { id: 'f11', lv: 'facil', tipo: 'teoria', tema: 'Suprarrenales', q: '¿Dónde se producen la adrenalina y la noradrenalina?',
    opts: ['En la médula suprarrenal', 'En la corteza suprarrenal', 'En la tiroides', 'En el páncreas'], a: 0,
    exp: 'La médula (el centro) de la suprarrenal libera catecolaminas, bajo el control del sistema nervioso simpático.' },
  { id: 'f12', lv: 'facil', tipo: 'teoria', tema: 'Sistemas', q: 'Comparado con el sistema nervioso, el sistema endocrino actúa en general…',
    opts: ['Más lento, pero con efectos más duraderos y generalizados', 'Más rápido y localizado', 'Igual de rápido', 'Solo durante el sueño'], a: 0,
    exp: 'Nervioso: rápido, focalizado, breve. Endocrino: más lento (minutos a horas), generalizado y duradero.' },

  // ---------- Medio ----------
  { id: 'm1', lv: 'medio', tipo: 'teoria', tema: 'Neurohipófisis', q: '¿Dónde se fabrican la ADH (vasopresina) y la oxitocina?',
    opts: ['En el hipotálamo; se almacenan y liberan en la neurohipófisis', 'En la neurohipófisis', 'En la adenohipófisis', 'En el riñón y el útero'], a: 0,
    exp: 'Trampa clásica: la neurohipófisis <b>no fabrica</b>, solo almacena y libera hormonas que llegan por los axones desde el hipotálamo.' },
  { id: 'm2', lv: 'medio', tipo: 'teoria', tema: 'Hipotálamo', q: '¿Por qué se dice que el hipotálamo es un órgano neuroendocrino?',
    opts: ['Porque es parte del encéfalo y además secreta neurohormonas que controlan la hipófisis', 'Porque está dentro de la hipófisis', 'Porque solo produce neurotransmisores', 'Porque fabrica insulina'], a: 0,
    exp: 'Es tejido nervioso que funciona como glándula: es el enlace entre el sistema nervioso y el endocrino (por ejemplo, libera CRH, TRH, GnRH, y fabrica ADH y oxitocina).' },
  { id: 'm3', lv: 'medio', tipo: 'teoria', tema: 'Hipófisis', q: '¿Cómo llegan las hormonas hipotalámicas liberadoras e inhibidoras a la adenohipófisis?',
    opts: ['Por el sistema porta hipotálamo-hipofisario (vasos sanguíneos locales)', 'Por los axones directamente', 'Por el líquido cefalorraquídeo', 'Por el nervio vago'], a: 0,
    exp: 'El sistema porta es una red de capilares que comunica el hipotálamo con la adenohipófisis. A la neurohipófisis, en cambio, se llega por axones.' },
  { id: 'm4', lv: 'medio', tipo: 'teoria', tema: 'Hipófisis', q: '¿Qué es una hormona trófica?',
    opts: ['Una hormona que estimula a otra glándula endocrina (por ejemplo TSH, ACTH, FSH, LH)', 'Una hormona que produce leche', 'Una hormona que baja la glucemia', 'Una hormona local'], a: 0,
    exp: 'Trófica = "que alimenta o estimula a otra glándula". Las tróficas de la adenohipófisis mandan sobre la tiroides, la corteza suprarrenal y las gónadas.' },
  { id: 'm5', lv: 'medio', tipo: 'teoria', tema: 'Ejes', q: 'Ordená el eje del estrés:',
    opts: ['CRH (hipotálamo) → ACTH (adenohipófisis) → cortisol (corteza suprarrenal)', 'ACTH → CRH → cortisol', 'Cortisol → ACTH → CRH', 'TRH → TSH → cortisol'], a: 0,
    exp: 'Hipotálamo → hipófisis → glándula periférica. El cortisol cierra el circuito frenando arriba (retroalimentación negativa).' },
  { id: 'm6', lv: 'medio', tipo: 'teoria', tema: 'Retroalimentación', q: '¿En qué consiste la retroalimentación negativa?',
    opts: ['El producto final frena su propia producción, manteniendo los niveles estables', 'El producto final estimula aún más su producción', 'La hormona se destruye en la sangre', 'Una hormona que "hace mal"'], a: 0,
    exp: 'Funciona como un termostato. Ej.: T3/T4 altas frenan la TRH y la TSH. "Negativa" no significa "mala": significa que se opone al cambio.' },
  { id: 'm7', lv: 'medio', tipo: 'teoria', tema: 'Retroalimentación', q: '¿Cuál es un ejemplo de retroalimentación positiva?',
    opts: ['La oxitocina durante el parto', 'La insulina después de comer', 'La TSH y las hormonas tiroideas', 'La ADH en la deshidratación'], a: 0,
    exp: 'Las contracciones estimulan más oxitocina, que estimula más contracciones, hasta que nace el bebé. Las otras opciones son retroalimentación negativa.' },
  { id: 'm8', lv: 'medio', tipo: 'teoria', tema: 'Mecanismo', q: 'Las hormonas esteroides (cortisol, estrógenos, testosterona)…',
    opts: ['Derivan del colesterol, atraviesan la membrana y se unen a receptores intracelulares que modifican la expresión de genes', 'Se unen a receptores de membrana y usan AMPc como segundo mensajero', 'Son proteínas', 'No necesitan receptores'], a: 0,
    exp: 'Por ser lipídicas pasan la membrana. Las proteicas/peptídicas (insulina, ADH) no pueden: se unen a receptores de membrana y actúan mediante segundos mensajeros.' },
  { id: 'm9', lv: 'medio', tipo: 'teoria', tema: 'Mecanismo', q: '¿Cómo actúa una hormona proteica como la insulina o la ADH?',
    opts: ['Se une a un receptor de membrana y desencadena una cascada con un segundo mensajero (por ejemplo, AMPc)', 'Entra al núcleo y se une al ADN', 'Atraviesa la membrana por ser lipídica', 'Actúa solo en la célula que la produjo'], a: 0,
    exp: 'La hormona es el "primer mensajero"; adentro, una molécula como el AMPc (segundo mensajero) activa enzimas que producen la respuesta.' },
  { id: 'm10', lv: 'medio', tipo: 'teoria', tema: 'Efectos', q: 'La insulina y el glucagón tienen efectos opuestos sobre la glucemia. Eso se llama…',
    opts: ['Antagonismo', 'Sinergia', 'Efecto trófico', 'Retroalimentación positiva'], a: 0,
    exp: 'Antagonismo = efectos opuestos. Sinergia = juntas potencian el efecto (por ejemplo, GH y hormonas tiroideas en el crecimiento).' },
  { id: 'm11', lv: 'medio', tipo: 'teoria', tema: 'Suprarrenales', q: '¿Qué produce cada zona de la corteza suprarrenal?',
    opts: ['Glomerular: mineralocorticoides (aldosterona); fasciculada: glucocorticoides (cortisol); reticular: esteroides sexuales', 'Glomerular: cortisol; fasciculada: adrenalina; reticular: insulina', 'Todas producen adrenalina', 'Glomerular: melatonina; fasciculada: TSH; reticular: ADH'], a: 0,
    exp: 'Truco "SAL, AZÚCAR y SEXO", de afuera hacia adentro: aldosterona (sal), cortisol (azúcar), andrógenos (sexo).' },
  { id: 'm12', lv: 'medio', tipo: 'teoria', tema: 'Paratiroides', q: 'Si el calcio en sangre baja, ¿qué hormona se libera?',
    opts: ['Parathormona (paratiroides)', 'Calcitonina (tiroides)', 'Insulina', 'Aldosterona'], a: 0,
    exp: 'La PTH sube el calcio (hueso, riñón, intestino vía vitamina D). La calcitonina hace lo contrario.' },
  { id: 'm13', lv: 'medio', tipo: 'teoria', tema: 'Desarrollo', q: 'Un exceso de hormona de crecimiento <b>en la infancia</b> produce…',
    opts: ['Gigantismo', 'Acromegalia', 'Enanismo hipofisario', 'Bocio'], a: 0,
    exp: 'En la infancia los huesos todavía pueden alargarse: gigantismo. En el adulto el exceso produce acromegalia (crecen manos, pies y mandíbula). La falta en la infancia produce enanismo hipofisario, con proporciones normales.' },
  { id: 'm14', lv: 'medio', tipo: 'teoria', tema: 'Conducta', q: '¿Qué alteración tiroidea se asocia a síntomas parecidos a la depresión (cansancio, enlentecimiento)?',
    opts: ['Hipotiroidismo', 'Hipertiroidismo', 'Exceso de calcitonina', 'Exceso de melatonina'], a: 0,
    exp: 'Con poca T3/T4 todo se enlentece (incluido el ánimo). El hipertiroidismo, en cambio, da nerviosismo, insomnio y pérdida de peso.' },
  { id: 'm15', lv: 'medio', tipo: 'teoria', tema: 'Hipófisis', q: '¿Qué hormona hipotalámica inhibe la secreción de prolactina?',
    opts: ['Dopamina', 'CRH', 'TRH', 'GnRH'], a: 0,
    exp: 'La dopamina actúa como factor inhibidor de prolactina. Cuando el bebé mama, baja la dopamina y sube la prolactina.' },
  { id: 'm16', lv: 'medio', tipo: 'teoria', tema: 'Hormonas', q: 'Las prostaglandinas son un ejemplo de hormonas…',
    opts: ['Locales (autocrinas o paracrinas), derivadas de ácidos grasos', 'Producidas solo por la hipófisis', 'Proteicas de acción lejana', 'Exclusivas de la próstata'], a: 0,
    exp: 'Actúan sobre la misma célula o sus vecinas, se degradan rápido y participan en la inflamación, el dolor y las contracciones. La aspirina inhibe su síntesis.' },

  // ---------- Difícil ----------
  { id: 'd1', lv: 'dificil', tipo: 'ejercicio', tema: 'Retroalimentación', q: 'Una persona tiene un tumor suprarrenal que produce cortisol en exceso de forma autónoma. ¿Qué esperás encontrar?',
    opts: ['Cortisol alto, ACTH baja y CRH baja', 'Cortisol alto, ACTH alta y CRH alta', 'Cortisol bajo y ACTH alta', 'Todo normal'], a: 0,
    exp: 'El exceso de cortisol frena (retroalimentación negativa) al hipotálamo y a la hipófisis: CRH y ACTH bajan. El tumor no obedece, así que el cortisol sigue alto.' },
  { id: 'd2', lv: 'dificil', tipo: 'ejercicio', tema: 'Retroalimentación', q: 'Hipotiroidismo por falta de yodo con la tiroides agrandada (bocio). ¿Por qué crece la glándula?',
    opts: ['Porque sin T3/T4 no hay retroalimentación negativa y la TSH alta estimula el crecimiento de la tiroides', 'Porque el yodo hace crecer la glándula', 'Porque la TSH está baja', 'Porque hay exceso de calcitonina'], a: 0,
    exp: 'Sin el producto final, el freno no actúa: TRH y TSH quedan altas, y la TSH estimula a la tiroides a crecer.' },
  { id: 'd3', lv: 'dificil', tipo: 'ejercicio', tema: 'Ciclo menstrual', q: '¿Qué desencadena la ovulación y qué estructura produce progesterona después?',
    opts: ['Un pico de LH (por retroalimentación positiva de los estrógenos); después, el cuerpo lúteo produce progesterona', 'Una caída de estrógenos; la placenta produce progesterona', 'Un pico de prolactina; el folículo produce progesterona', 'Un pico de oxitocina; la hipófisis produce progesterona'], a: 0,
    exp: 'Los estrógenos altos al final de la fase folicular provocan el pico de LH (positiva) → ovulación. El folículo vacío se transforma en cuerpo lúteo, que secreta progesterona en la fase lútea.' },
  { id: 'd4', lv: 'dificil', tipo: 'ejercicio', tema: 'Ciclo menstrual', q: 'Si no hay embarazo, ¿por qué se produce la menstruación?',
    opts: ['El cuerpo lúteo degenera, caen la progesterona y los estrógenos y el endometrio pierde sostén y se desprende', 'Sube la LH y destruye el endometrio', 'La FSH aumenta la progesterona', 'La oxitocina contrae el ovario'], a: 0,
    exp: 'La progesterona es la que "sostiene" el endometrio. Sin cuerpo lúteo no hay progesterona y el endometrio se desprende. Al caer los esteroides, se libera el freno y la FSH vuelve a subir.' },
  { id: 'd5', lv: 'dificil', tipo: 'ejercicio', tema: 'Embarazo', q: 'Además de la adenohipófisis, ¿qué estructura produce gonadotrofinas y para qué?',
    opts: ['La placenta (corion): produce gonadotrofina coriónica (hCG), que mantiene al cuerpo lúteo al comienzo del embarazo', 'El hipotálamo: produce FSH', 'La tiroides: produce LH', 'Las suprarrenales: producen hCG'], a: 0,
    exp: 'La hCG "rescata" al cuerpo lúteo para que siga produciendo progesterona. Es la hormona que detectan los test de embarazo.' },
  { id: 'd6', lv: 'dificil', tipo: 'ejercicio', tema: 'Estrés', q: 'En el estrés agudo, ¿qué respuesta es más rápida y por qué?',
    opts: ['La de la médula suprarrenal (adrenalina), porque está activada directamente por nervios simpáticos', 'La del cortisol, porque es esteroide', 'La de la tiroides, porque acelera el metabolismo', 'La de la insulina, porque baja la glucemia'], a: 0,
    exp: 'La médula suprarrenal responde en segundos a la señal nerviosa. El eje CRH → ACTH → cortisol necesita pasos hormonales en cadena y tarda minutos.' },
  { id: 'd7', lv: 'dificil', tipo: 'ejercicio', tema: 'Estrés', q: '¿Por qué el estrés crónico puede aumentar la frecuencia de infecciones?',
    opts: ['Porque el cortisol sostenido suprime las respuestas inmune e inflamatoria', 'Porque la adrenalina destruye los anticuerpos', 'Porque baja la melatonina y eso causa infecciones', 'Porque la insulina inhibe los glóbulos blancos'], a: 0,
    exp: 'Los glucocorticoides deprimen la inmunidad: útil por un rato, perjudicial si dura semanas.' },
  { id: 'd8', lv: 'dificil', tipo: 'ejercicio', tema: 'ADH', q: 'Una persona con un daño en la neurohipófisis orina litros de orina muy diluida. ¿Qué hormona falta?',
    opts: ['ADH (vasopresina)', 'Aldosterona', 'Insulina', 'Oxitocina'], a: 0,
    exp: 'Sin ADH, el riñón no reabsorbe agua y la pierde por la orina (diabetes insípida). Ojo: la ADH se fabrica en el hipotálamo, pero se libera en la neurohipófisis.' },
  { id: 'd9', lv: 'dificil', tipo: 'ejercicio', tema: 'Glucemia', q: 'Después de un ayuno largo, ¿qué combinación de hormonas mantiene la glucemia?',
    opts: ['Glucagón y cortisol (con aporte de adrenalina y GH)', 'Insulina y calcitonina', 'Insulina sola', 'Melatonina y prolactina'], a: 0,
    exp: 'Al menos siete hormonas participan; todas salvo la insulina tienden a subir la glucemia. El cerebro casi solo usa glucosa, por eso el control es tan estricto.' },
  { id: 'd10', lv: 'dificil', tipo: 'ejercicio', tema: 'Intestino-cerebro', q: '¿Cuál es la principal vía nerviosa de comunicación del eje intestino-cerebro?',
    opts: ['El nervio vago', 'El nervio óptico', 'La médula suprarrenal', 'El sistema porta hipotálamo-hipofisario'], a: 0,
    exp: 'Neuronas sensitivas del intestino conectan con el vago y llevan información al SNC. La otra gran vía es la circulatoria (cortisol, serotonina, ácidos grasos de cadena corta…).' },
  { id: 'd11', lv: 'dificil', tipo: 'ejercicio', tema: 'Disruptores', q: '¿Qué son los disruptores endocrinos?',
    opts: ['Sustancias externas (naturales o artificiales) que alteran el sistema hormonal, por ejemplo imitando o bloqueando a los estrógenos', 'Hormonas producidas por tumores', 'Enzimas que degradan hormonas', 'Neurotransmisores del intestino'], a: 0,
    exp: 'Ej.: PCB, DDT, ftalatos de plásticos, alquilfenoles de detergentes. Pueden unirse a receptores, bloquearlos, alterar el metabolismo hormonal o cambiar la cantidad de receptores. Sus efectos suelen aparecer en la descendencia.' },
  { id: 'd12', lv: 'dificil', tipo: 'ejercicio', tema: 'Lactancia', q: 'Cuando el bebé mama, ¿qué hormonas actúan y qué hace cada una?',
    opts: ['Prolactina produce la leche; oxitocina provoca su eyección', 'Oxitocina produce la leche; prolactina provoca su eyección', 'Solo la prolactina', 'Estrógenos y progesterona'], a: 0,
    exp: 'Producir ≠ expulsar. La prolactina viene de la adenohipófisis; la oxitocina se fabrica en el hipotálamo y se libera en la neurohipófisis.' }
];

/* =========================================================
   Pares para el juego de unir
   ========================================================= */
window.PAIRS = [
  { h: 'Somatotrofina (GH)', g: 'Adenohipófisis', a: 'Crecimiento de huesos y tejidos' },
  { h: 'Prolactina', g: 'Adenohipófisis', a: 'Producción de leche' },
  { h: 'TSH', g: 'Adenohipófisis', a: 'Estimula a la tiroides' },
  { h: 'ACTH', g: 'Adenohipófisis', a: 'Estimula la corteza suprarrenal' },
  { h: 'LH', g: 'Adenohipófisis', a: 'Ovulación y formación del cuerpo lúteo' },
  { h: 'ADH (vasopresina)', g: 'Neurohipófisis', a: 'Reabsorción de agua en el riñón' },
  { h: 'Oxitocina', g: 'Neurohipófisis', a: 'Contracciones del parto y eyección de leche' },
  { h: 'T3 / T4', g: 'Tiroides', a: 'Aumentan el metabolismo' },
  { h: 'Calcitonina', g: 'Tiroides', a: 'Baja el calcio en sangre' },
  { h: 'Parathormona', g: 'Paratiroides', a: 'Sube el calcio en sangre' },
  { h: 'Cortisol', g: 'Corteza suprarrenal', a: 'Hormona del estrés: sube la glucemia' },
  { h: 'Aldosterona', g: 'Corteza suprarrenal', a: 'Retiene sodio en el riñón' },
  { h: 'Adrenalina', g: 'Médula suprarrenal', a: 'Lucha o huida: acelera el corazón' },
  { h: 'Insulina', g: 'Páncreas (células β)', a: 'Baja la glucemia' },
  { h: 'Glucagón', g: 'Páncreas (células α)', a: 'Sube la glucemia' },
  { h: 'Melatonina', g: 'Pineal', a: 'Ritmo día/noche y sueño' },
  { h: 'Estrógenos', g: 'Ovario (folículo)', a: 'Hacen crecer el endometrio' },
  { h: 'Progesterona', g: 'Ovario (cuerpo lúteo)', a: 'Mantiene el endometrio y el embarazo' },
  { h: 'Testosterona', g: 'Testículo', a: 'Espermatogénesis y caracteres masculinos' },
  { h: 'Leptina', g: 'Tejido adiposo', a: 'Saciedad' }
];
window.AXIS_PAIRS = [
  { h: 'TRH', a: 'TSH' }, { h: 'CRH', a: 'ACTH' }, { h: 'GnRH', a: 'FSH y LH' },
  { h: 'GHRH', a: 'Hormona del crecimiento (estimula)' }, { h: 'Somatostatina', a: 'Hormona del crecimiento (inhibe)' },
  { h: 'Dopamina', a: 'Prolactina (inhibe)' }
];
