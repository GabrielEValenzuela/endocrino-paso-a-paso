(function () {
  'use strict';

  /* ---------------- Utilidades ---------------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('endoweb:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('endoweb:' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, html = '') => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') n.className = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    if (html) n.innerHTML = html;
    return n;
  };
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const LETTERS = ['A', 'B', 'C', 'D'];

  /* ---------------- Tema ---------------- */
  const root = document.documentElement;
  const savedTheme = store.get('theme', null);
  if (savedTheme) root.dataset.theme = savedTheme;
  $('#themeBtn').addEventListener('click', () => {
    const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    store.set('theme', root.dataset.theme);
  });

  /* ---------------- Navegación ---------------- */
  const pages = Array.from(document.querySelectorAll('.page'));
  const navLinks = Array.from(document.querySelectorAll('#nav a'));
  const doneSet = new Set(store.get('done', []));

  function refreshDone() {
    navLinks.forEach(a => a.classList.toggle('done', doneSet.has(a.getAttribute('href').slice(1))));
  }

  pages.forEach((p, i) => {
    if (['sistemas', 'hormonas', 'eje', 'regulacion', 'glandulas', 'conducta', 'desarrollo', 'metodo', 'resueltos'].includes(p.id)) {
      const b = el('button', { class: 'btn ghost done-btn', type: 'button' });
      const paint = () => { b.textContent = doneSet.has(p.id) ? '✓ Sección estudiada (tocá para desmarcar)' : 'Marcar esta sección como estudiada'; };
      paint();
      b.addEventListener('click', () => {
        doneSet.has(p.id) ? doneSet.delete(p.id) : doneSet.add(p.id);
        store.set('done', [...doneSet]); paint(); refreshDone();
      });
      p.appendChild(b);
    }
    const pager = el('nav', { class: 'pager', 'aria-label': 'Navegación entre secciones' });
    const prev = pages[i - 1], next = pages[i + 1];
    pager.appendChild(prev ? el('a', { class: 'btn ghost', href: '#' + prev.id }, '← ' + prev.dataset.title) : el('span'));
    if (next) pager.appendChild(el('a', { class: 'btn', href: '#' + next.id }, next.dataset.title + ' →'));
    p.appendChild(pager);
  });

  function show() {
    const id = location.hash.slice(1) || 'inicio';
    const target = pages.find(p => p.id === id) || pages[0];
    pages.forEach(p => { p.hidden = p !== target; });
    navLinks.forEach(a => {
      const on = a.getAttribute('href') === '#' + target.id;
      if (on) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center' }); }
      else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
    if (target.id === 'repaso') renderSemaforo($('#semDespues'), 'despues');
  }
  window.addEventListener('hashchange', show);
  refreshDone();

  /* ---------------- Semáforo ---------------- */
  const TOPICS = [
    'Sistema nervioso vs. endocrino; control neuroendocrino',
    'Homeostasis',
    'Glándulas endocrinas, exocrinas y mixtas',
    'Características y mecanismo de acción de las hormonas',
    'Hipófisis: divisiones, origen y hormonas',
    'Eje hipotálamo-hipofisario y hormonas liberadoras',
    'Retroalimentación negativa y positiva',
    'Tiroides y paratiroides',
    'Suprarrenales (corteza y médula)',
    'Páncreas y glucemia',
    'Pineal y gónadas',
    'Hormonas y conducta (estrés, eje intestino-cerebro)',
    'Hormonas y desarrollo (crecimiento, pubertad, ciclo menstrual)'
  ];
  const SEM = [['r', '🔴'], ['y', '🟡'], ['v', '🟢']];
  const SEM_LABEL = { r: '🔴', y: '🟡', v: '🟢' };

  function renderSemaforo(container, key) {
    const data = store.get('sem-' + key, {});
    const before = key === 'despues' ? store.get('sem-antes', {}) : null;
    container.innerHTML = '';
    TOPICS.forEach((t, i) => {
      const row = el('div', { class: 'sem-row' });
      row.appendChild(el('div', { class: 'sem-name' }, t));
      const btns = el('div', { class: 'sem-btns', role: 'group', 'aria-label': t });
      SEM.forEach(([cls, icon]) => {
        const b = el('button', { type: 'button', class: cls, 'aria-pressed': String(data[i] === cls) }, icon);
        b.addEventListener('click', () => {
          data[i] = cls; store.set('sem-' + key, data);
          btns.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        });
        btns.appendChild(b);
      });
      row.appendChild(btns);
      if (before) row.appendChild(el('div', { class: 'sem-before' }, 'Al empezar: ' + (before[i] ? SEM_LABEL[before[i]] : 'sin marcar')));
      container.appendChild(row);
    });
  }
  renderSemaforo($('#semAntes'), 'antes');

  /* ---------------- Problemas resueltos ---------------- */
  const probIndex = $('#probIndex'), probList = $('#probList');
  PROBLEMS.forEach((p, n) => {
    probIndex.appendChild(el('a', { href: '#resueltos', onclick: (e) => { e.preventDefault(); document.getElementById('prob-' + p.id).scrollIntoView({ behavior: 'smooth' }); } },
      `<span class="n">${n + 1}</span><span>${p.title} <span class="badge lv-${p.level}">${p.level}</span></span>`));

    const card = el('article', { class: 'card', id: 'prob-' + p.id });
    card.innerHTML = `
      <div><span class="badge lv-${p.level}">${p.level}</span><span class="badge">${p.tema}</span></div>
      <h3 style="margin-top:.5rem">${n + 1}. ${p.title}</h3>
      <p>${p.enunciado}</p>
      <div class="box think"><span class="box-title">🧭 Antes de mirar</span>${p.antes}</div>
      <div class="steps"></div>
      <div class="btn-row"></div>`;
    const stepsBox = card.querySelector('.steps');
    const row = card.querySelector('.btn-row');
    let shown = 0;
    const nextBtn = el('button', { class: 'btn', type: 'button' });
    const resetBtn = el('button', { class: 'btn ghost', type: 'button' }, 'Reiniciar');
    const paint = () => {
      if (shown < p.steps.length) nextBtn.textContent = `Mostrar paso ${shown + 1} de ${p.steps.length}`;
      else if (shown === p.steps.length) nextBtn.textContent = 'Ver respuesta final';
      nextBtn.hidden = shown > p.steps.length;
      resetBtn.hidden = shown === 0;
    };
    nextBtn.addEventListener('click', () => {
      if (shown < p.steps.length) {
        const s = p.steps[shown];
        const d = el('div', { class: 'step' });
        let h = `<h4>Paso ${shown + 1} · ${s.t}</h4>`;
        if (s.p) h += `<div class="row"><span class="tag p">🧠 Lo que pienso:</span> ${s.p}</div>`;
        if (s.w) h += `<div class="row"><span class="tag w">💡 Por qué:</span> ${s.w}</div>`;
        if (s.c) h += `<div class="row"><span class="tag c">🔍 Cómo me controlo:</span> ${s.c}</div>`;
        d.innerHTML = h;
        stepsBox.appendChild(d);
      } else {
        stepsBox.appendChild(el('div', { class: 'final' }, `<b>✅ Respuesta</b><br>${p.respuesta}`));
      }
      shown++; paint();
    });
    resetBtn.addEventListener('click', () => { shown = 0; stepsBox.innerHTML = ''; paint(); card.scrollIntoView({ behavior: 'smooth' }); });
    row.append(nextBtn, resetBtn);
    paint();
    probList.appendChild(card);
  });

  /* ---------------- Retroalimentación metacognitiva ---------------- */
  const CONF = [['guess', 'Adivino'], ['unsure', 'Tengo dudas'], ['sure', 'Lo sé']];
  function metaMsg(ok, conf) {
    if (ok && conf === 'sure') return '🎯 <b>Bien calibrado:</b> sabías que sabías. Es un concepto firme.';
    if (ok && conf === 'unsure') return '🙂 <b>Acertaste con dudas.</b> Leé la explicación para convertir esa duda en certeza.';
    if (ok && conf === 'guess') return '🍀 <b>Acertaste, pero adivinando.</b> La suerte no es confiable: repasá este tema.';
    if (!ok && conf === 'sure') return '🚨 <b>Alarma: error con seguridad.</b> Es la señal de una idea mal aprendida. Anotala en tu hoja y releé la explicación con calma.';
    if (!ok && conf === 'unsure') return '🔎 <b>Tu duda tenía razón.</b> Tu radar funcionó: ahora aprendé el porqué.';
    return '👍 <b>Sabías que no sabías.</b> Eso es buena metacognición. Ahora aprendelo con la explicación.';
  }

  /* Prepara una pregunta con opciones mezcladas */
  function prepQ(q) {
    const order = shuffle(q.opts.map((_, i) => i));
    return { ...q, shuffled: order.map(i => q.opts[i]), correct: order.indexOf(q.a) };
  }

  /* ---------------- Práctica ---------------- */
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
  const LV_NAME = { facil: 'Fácil', medio: 'Medio', dificil: 'Difícil' };
  const LV_BADGE = { facil: 'Básico', medio: 'Intermedio', dificil: 'Desafío' };
  const levelOf = {};
  QUESTIONS.forEach(q => { levelOf[q.id] = q.lv; });
  const LEVELS = { facil: [], medio: [], dificil: [] };
  QUESTIONS.forEach(q => LEVELS[q.lv].push(q.id));
  const lvBadge = (id) => `<span class="badge lv-${LV_BADGE[levelOf[id]]}">${LV_NAME[levelOf[id]]}</span>`;
  const quiz = { filter: 'todo', list: [], i: 0, ok: 0, done: 0, cal: { 'sure-ok': 0, 'sure-bad': 0, 'unsure-ok': 0, 'unsure-bad': 0, 'guess-ok': 0, 'guess-bad': 0 } };
  const FILTERS = [['todo', 'Todo'], ['facil', 'Fácil'], ['medio', 'Medio'], ['dificil', 'Difícil'], ['errores', 'Mis errores']];

  function wrongSet() { return new Set(store.get('wrong', [])); }

  function renderTabs() {
    const tabs = $('#quizTabs'); tabs.innerHTML = '';
    FILTERS.forEach(([k, label]) => {
      const extra = k === 'errores' ? ` (${wrongSet().size})` : '';
      const b = el('button', { type: 'button', 'aria-pressed': String(quiz.filter === k) }, label + extra);
      b.addEventListener('click', () => { quiz.filter = k; startQuiz(); });
      tabs.appendChild(b);
    });
  }

  function startQuiz() {
    let pool = QUESTIONS;
    if (quiz.filter === 'teoria' || quiz.filter === 'ejercicio') pool = QUESTIONS.filter(q => q.tipo === quiz.filter);
    if (LEVELS[quiz.filter]) pool = QUESTIONS.filter(q => levelOf[q.id] === quiz.filter);
    if (quiz.filter === 'errores') { const w = wrongSet(); pool = QUESTIONS.filter(q => w.has(q.id)); }
    quiz.list = shuffle(pool).map(prepQ);
    quiz.i = 0; quiz.ok = 0; quiz.done = 0;
    Object.keys(quiz.cal).forEach(k => { quiz.cal[k] = 0; });
    renderTabs(); renderQuiz();
  }

  function renderStats() {
    const s = $('#quizStats');
    if (!quiz.done) { s.innerHTML = ''; return; }
    const alarms = quiz.cal['sure-bad'];
    s.innerHTML = `<div class="stats">
      <div class="stat"><div class="v">${quiz.ok}/${quiz.done}</div><div class="k">aciertos en esta ronda</div></div>
      <div class="stat"><div class="v">${quiz.cal['sure-ok']}</div><div class="k">🎯 bien calibradas</div></div>
      <div class="stat"><div class="v">${alarms}</div><div class="k">🚨 errores con seguridad</div></div>
      <div class="stat"><div class="v">${wrongSet().size}</div><div class="k">para repasar (Mis errores)</div></div>
    </div>`;
  }

  function renderQuiz() {
    renderStats();
    const card = $('#quizCard');
    if (!quiz.list.length) {
      card.innerHTML = quiz.filter === 'errores'
        ? '<p>🎉 No tenés errores pendientes. Cuando te equivoques en una pregunta, aparece acá hasta que la respondas bien.</p>'
        : '<p>No hay preguntas en este filtro.</p>';
      return;
    }
    if (quiz.i >= quiz.list.length) {
      const pct = Math.round(100 * quiz.ok / quiz.done);
      card.innerHTML = `<h3 style="margin-top:0">Terminaste la ronda: ${quiz.ok}/${quiz.done} (${pct}%)</h3>
        <p>${quiz.cal['sure-bad'] ? `Tuviste <b>${quiz.cal['sure-bad']}</b> error(es) con seguridad 🚨. Son tu prioridad: andá a "Mis errores".` : 'No tuviste errores con seguridad: tu radar está bien calibrado. 👏'}</p>
        <div class="btn-row"><button class="btn" type="button" id="qAgain">Otra ronda</button><button class="btn ghost" type="button" id="qErr">Repasar mis errores</button></div>`;
      $('#qAgain').addEventListener('click', startQuiz);
      $('#qErr').addEventListener('click', () => { quiz.filter = 'errores'; startQuiz(); });
      return;
    }
    const q = quiz.list[quiz.i];
    let pick = null, conf = null;
    card.innerHTML = `<div class="q-meta"><span>Pregunta ${quiz.i + 1} de ${quiz.list.length}</span><span>${lvBadge(q.id)}${q.tema}</span></div>
      <div class="q-text">${q.q}</div>
      <div class="opts"></div>
      <div class="conf"><span class="conf-label">¿Qué tan seguro o segura estás? (elegilo antes de corregir)</span><div class="seg" role="group"></div></div>
      <div class="btn-row"><button class="btn" type="button" disabled>Corregir</button></div>
      <div class="fb"></div>`;
    const opts = card.querySelector('.opts'), seg = card.querySelector('.seg');
    const check = card.querySelector('.btn-row .btn'), fb = card.querySelector('.fb');
    const upd = () => { check.disabled = pick === null || conf === null; };
    q.shuffled.forEach((o, i) => {
      const b = el('button', { class: 'opt', type: 'button', 'aria-pressed': 'false' }, `<span class="l">${LETTERS[i]}</span><span>${o}</span>`);
      b.addEventListener('click', () => { pick = i; opts.querySelectorAll('.opt').forEach(x => x.setAttribute('aria-pressed', String(x === b))); upd(); });
      opts.appendChild(b);
    });
    CONF.forEach(([k, label]) => {
      const b = el('button', { type: 'button', 'aria-pressed': 'false' }, label);
      b.addEventListener('click', () => { conf = k; seg.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); upd(); });
      seg.appendChild(b);
    });
    check.addEventListener('click', () => {
      const ok = pick === q.correct;
      const btns = opts.querySelectorAll('.opt');
      btns.forEach((b, i) => { b.disabled = true; if (i === q.correct) b.classList.add('correct'); else if (i === pick) b.classList.add('wrong'); });
      seg.querySelectorAll('button').forEach(b => { b.disabled = true; });
      quiz.done++; if (ok) quiz.ok++;
      quiz.cal[conf + '-' + (ok ? 'ok' : 'bad')]++;
      const w = wrongSet(); ok ? w.delete(q.id) : w.add(q.id); store.set('wrong', [...w]);
      fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><b>${ok ? '✔ Correcto.' : '✘ No es esa.'}</b> ${q.exp}<div class="meta">${metaMsg(ok, conf)}</div></div>`;
      check.textContent = quiz.i + 1 < quiz.list.length ? 'Siguiente →' : 'Ver resultado';
      check.disabled = false;
      check.onclick = () => { quiz.i++; renderTabs(); renderQuiz(); card.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      renderStats();
    }, { once: true });
  }
  startQuiz();

  /* ---------------- Juego de unir ---------------- */
  const MATCH_MODES = {
    hg: { label: 'Hormona → glándula', left: 'h', right: 'g', src: () => PAIRS },
    ha: { label: 'Hormona → acción', left: 'h', right: 'a', src: () => PAIRS },
    ax: { label: 'Hipotálamo → hipófisis', left: 'h', right: 'a', src: () => AXIS_PAIRS }
  };
  const match = { mode: 'hg' };

  function renderMatchTabs() {
    const tabs = $('#matchTabs'); tabs.innerHTML = '';
    Object.entries(MATCH_MODES).forEach(([k, v]) => {
      const b = el('button', { type: 'button', 'aria-pressed': String(match.mode === k) }, v.label);
      b.addEventListener('click', () => { match.mode = k; renderMatchTabs(); newMatch(); });
      tabs.appendChild(b);
    });
  }

  function newMatch() {
    const m = MATCH_MODES[match.mode];
    // 5 pares con respuestas distintas entre sí
    const picked = [], seen = new Set();
    shuffle(m.src()).forEach(p => { if (picked.length < 5 && !seen.has(p[m.right])) { seen.add(p[m.right]); picked.push(p); } });
    const card = $('#matchCard');
    card.innerHTML = `<div class="q-meta"><span>Ronda de ${picked.length} pares</span><span id="mScore">Errores: 0</span></div>
      <div class="match"><div class="match-col" id="mL"></div><div class="match-col" id="mR"></div></div>
      <div id="mFb"></div>
      <div class="btn-row"><button class="btn ghost" type="button" id="mNew">Nueva ronda</button></div>`;
    $('#mNew').addEventListener('click', newMatch);
    let sel = null, errors = 0, done = 0;
    const L = $('#mL'), R = $('#mR');
    picked.forEach((p, i) => {
      const b = el('button', { type: 'button', 'aria-pressed': 'false', 'data-i': String(i) }, p[m.left]);
      b.addEventListener('click', () => {
        if (b.classList.contains('done')) return;
        sel = b; L.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      });
      L.appendChild(b);
    });
    shuffle(picked.map((p, i) => [p, i])).forEach(([p, i]) => {
      const b = el('button', { type: 'button', 'data-i': String(i) }, p[m.right]);
      b.addEventListener('click', () => {
        if (!sel || b.classList.contains('done')) return;
        if (sel.dataset.i === b.dataset.i) {
          sel.classList.add('done'); b.classList.add('done'); sel.setAttribute('aria-pressed', 'false'); sel = null; done++;
          if (done === picked.length) {
            $('#mFb').innerHTML = `<div class="feedback ${errors ? 'bad' : 'ok'}">${errors ? `Completaste la ronda con <b>${errors}</b> error(es). Mirá cuáles te costaron y hacé otra ronda: la repetición espaciada es lo que fija la memoria.` : '🎯 <b>¡Ronda perfecta!</b> Probá otro modo o una ronda nueva.'}</div>`;
          }
        } else {
          errors++; $('#mScore').textContent = 'Errores: ' + errors;
          b.classList.remove('miss'); void b.offsetWidth; b.classList.add('miss');
        }
      });
      R.appendChild(b);
    });
  }
  renderMatchTabs();
  newMatch();

  /* ---------------- Simulacro ---------------- */
  const SIM_SECONDS = 15 * 60;
  let simTimer = null;

  function simIntro() {
    clearInterval(simTimer);
    const hist = store.get('simHist', []);
    $('#simRoot').innerHTML = `
      <p class="lead">Es el ensayo general: <b>6 preguntas en 3 niveles</b>: 2 fáciles, 2 medias y 2 difíciles, en ese orden. Tenés <b>15 minutos</b>, sin corrección hasta el final.</p>
      <div class="box key"><span class="box-title">Antes de empezar</span>
        <ul><li>Tené una <b>hoja y lapicera</b> al lado.</li>
        <li>Marcá tu <b>confianza</b> en cada respuesta: al final vas a ver qué tan bien calibrada está tu confianza.</li>
        <li>Podés moverte entre preguntas y cambiar respuestas antes de entregar.</li>
        <li>Si te trabás, saltala y volvé después.</li></ul></div>
      <div class="btn-row"><button class="btn" type="button" id="simStart">Empezar simulacro ⏱</button></div>
      ${hist.length ? `<h3>Tus intentos anteriores</h3><ul>${hist.slice(-5).reverse().map(h => `<li>${h.date}: <b>${h.score}/6</b>${h.alarms ? ` · 🚨 ${h.alarms} error(es) con seguridad` : ''}</li>`).join('')}</ul>` : ''}`;
    $('#simStart').addEventListener('click', simStart);
  }

  function simStart() {
    // 2 preguntas por nivel, en orden de dificultad
    const ids = [];
    ['facil', 'medio', 'dificil'].forEach(lv => ids.push(...shuffle(LEVELS[lv]).slice(0, 2)));
    const st = { qs: ids.map(id => prepQ(QMAP[id])), ans: Array(6).fill(null), conf: Array(6).fill(null), i: 0, left: SIM_SECONDS };
    const r = $('#simRoot');
    r.innerHTML = `<div class="timer" id="simTimer"><span>⏱ <span class="clock" id="simClock">15:00</span></span><div class="dots" id="simDots"></div></div>
      <div class="card" id="simCard"></div>`;
    const tick = () => {
      st.left--;
      const m = Math.floor(st.left / 60), s = st.left % 60;
      $('#simClock').textContent = `${m}:${String(s).padStart(2, '0')}`;
      $('#simTimer').classList.toggle('low', st.left <= 120);
      if (st.left <= 0) simFinish(st, true);
    };
    clearInterval(simTimer);
    simTimer = setInterval(tick, 1000);
    simRenderQ(st);
  }

  function simRenderQ(st) {
    const dots = $('#simDots'); dots.innerHTML = '';
    st.qs.forEach((_, i) => {
      const b = el('button', { type: 'button', class: (st.ans[i] !== null ? 'ans ' : '') + (i === st.i ? 'cur' : ''), 'aria-label': 'Ir a la pregunta ' + (i + 1) }, String(i + 1));
      b.addEventListener('click', () => { st.i = i; simRenderQ(st); });
      dots.appendChild(b);
    });
    const q = st.qs[st.i], card = $('#simCard');
    card.innerHTML = `<div class="q-meta"><span>Pregunta ${st.i + 1} de 6</span><span>${lvBadge(q.id)}${q.tema}</span></div>
      <div class="q-text">${q.q}</div><div class="opts"></div>
      <div class="conf"><span class="conf-label">Confianza</span><div class="seg" role="group"></div></div>
      <div class="btn-row"></div>`;
    const opts = card.querySelector('.opts'), seg = card.querySelector('.seg'), row = card.querySelector('.btn-row');
    q.shuffled.forEach((o, i) => {
      const b = el('button', { class: 'opt', type: 'button', 'aria-pressed': String(st.ans[st.i] === i) }, `<span class="l">${LETTERS[i]}</span><span>${o}</span>`);
      b.addEventListener('click', () => { st.ans[st.i] = i; simRenderQ(st); });
      opts.appendChild(b);
    });
    CONF.forEach(([k, label]) => {
      const b = el('button', { type: 'button', 'aria-pressed': String(st.conf[st.i] === k) }, label);
      b.addEventListener('click', () => { st.conf[st.i] = k; simRenderQ(st); });
      seg.appendChild(b);
    });
    if (st.i > 0) row.appendChild(el('button', { class: 'btn ghost', type: 'button', onclick: () => { st.i--; simRenderQ(st); } }, '← Anterior'));
    if (st.i < 5) row.appendChild(el('button', { class: 'btn', type: 'button', onclick: () => { st.i++; simRenderQ(st); } }, 'Siguiente →'));
    const pending = st.ans.filter(a => a === null).length;
    row.appendChild(el('button', {
      class: st.i === 5 ? 'btn' : 'btn ghost', type: 'button',
      onclick: () => {
        if (pending && !card.querySelector('.warn')) {
          card.appendChild(el('p', { class: 'warn small', style: 'color:var(--bad)' }, `Te quedan ${pending} sin responder. Tocá "Entregar" de nuevo para entregar igual.`));
          return;
        }
        simFinish(st, false);
      }
    }, 'Entregar'));
  }

  function simFinish(st, timeout) {
    clearInterval(simTimer);
    let score = 0, alarms = 0;
    const items = st.qs.map((q, i) => {
      const ok = st.ans[i] === q.correct;
      if (ok) score++;
      if (!ok && st.conf[i] === 'sure') alarms++;
      if (!ok) { const w = wrongSet(); w.add(q.id); store.set('wrong', [...w]); }
      const yours = st.ans[i] === null ? '<i>sin responder</i>' : q.shuffled[st.ans[i]];
      return `<div class="review-item"><b>${i + 1}. ${ok ? '✔' : '✘'}</b> ${lvBadge(q.id)} ${q.q}
        <p class="small"><b>Tu respuesta:</b> ${yours}${st.conf[i] ? ` <span class="muted">(${CONF.find(c => c[0] === st.conf[i])[1].toLowerCase()})</span>` : ''}<br><b>Correcta:</b> ${q.shuffled[q.correct]}</p>
        <div class="feedback ${ok ? 'ok' : 'bad'} small">${q.exp}${st.conf[i] && st.ans[i] !== null ? `<div class="meta">${metaMsg(ok, st.conf[i])}</div>` : ''}</div></div>`;
    }).join('');
    const byLv = { facil: 0, medio: 0, dificil: 0 };
    st.qs.forEach((q, i) => { if (st.ans[i] === q.correct) byLv[levelOf[q.id]]++; });
    const hist = store.get('simHist', []);
    const d = new Date();
    hist.push({ date: d.toLocaleDateString('es-AR') + ' ' + d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }), score, alarms });
    store.set('simHist', hist);
    const used = SIM_SECONDS - Math.max(st.left, 0);
    const msg = score >= 5 ? '¡Excelente! Repasá igual los errores para que no te sorprendan.'
      : score >= 4 ? 'Muy bien. Mirá con atención las que fallaste: suelen ser un solo concepto.'
      : 'Todavía hay huecos, y está perfecto descubrirlos ahora. Volvé a los resueltos del tema que falló y hacé otro simulacro.';
    $('#simRoot').innerHTML = `<div class="card">
      <h2 style="margin-top:0">${timeout ? '⏰ ¡Tiempo! ' : ''}Resultado: ${score}/6</h2>
      <p>${msg}</p>
      <div class="stats">${['facil', 'medio', 'dificil'].map(lv => `<div class="stat"><div class="v">${byLv[lv]}/2</div><div class="k">${LV_NAME[lv]}</div></div>`).join('')}</div>
      <p class="small muted">Tiempo usado: ${Math.floor(used / 60)} min ${used % 60} s.${alarms ? ` · 🚨 ${alarms} error(es) con seguridad: son tu prioridad.` : ''}</p>
      <div class="btn-row"><button class="btn" type="button" id="simAgain">Otro simulacro</button><a class="btn ghost" href="#practica">Ir a practicar</a></div>
      ${items}</div>`;
    $('#simAgain').addEventListener('click', simStart);
    window.scrollTo(0, 0);
  }
  simIntro();

  show();
})();
