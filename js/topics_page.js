/* ==========================================================================
   BRITISH COUNCIL MAJOR TOPICS & VIDEOS ENGINE (topics.html)
   Mirrors the Sessions Page Layout, Component Architecture & British Audio
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. GLOBAL STATE & VOCABULARY ADAPTER
   -------------------------------------------------------------------------- */
let urlParams = new URLSearchParams(window.location.search);
let currentTopicId = urlParams.get('topic') || 'travel_and_exploration';
if (!SPARE_TOPICS_DATA[currentTopicId]) currentTopicId = 'travel_and_exploration';

function convertToMasterVocab(wordsList) {
  return (wordsList || []).map((w, idx) => ({
    id: w.num || (idx + 1),
    word: w.word,
    pos: w.pos || 'topic vocabulary',
    cambridgeLevel: w.level || 'B1',
    pronunciation: w.pronunciation || '',
    citation: `Topic Vocab #${w.num || (idx + 1)}`,
    definition: w.definition,
    b1Explain: w.arabic || w.definition,
    sentence: w.example || ''
  }));
}

let MASTER_VOCAB = convertToMasterVocab(SPARE_TOPICS_DATA[currentTopicId].words);

/* --------------------------------------------------------------------------
   2. BRITISH SPEECH SYNTHESIS ENGINE
   -------------------------------------------------------------------------- */
let ukVoice = null;

function initSpeech() {
  if ('speechSynthesis' in window) {
    function pickVoice() {
      const voices = window.speechSynthesis.getVoices();
      ukVoice = voices.find(v => v.lang === 'en-GB' || v.name.includes('UK') || v.name.includes('British') || v.name.includes('George') || v.name.includes('Hazel') || v.name.includes('Susan'))
        || voices.find(v => v.lang.startsWith('en-GB') || v.lang.startsWith('en_GB'))
        || voices.find(v => v.lang.startsWith('en'))
        || null;
    }
    pickVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = pickVoice;
    }
  }
}

function speakUK(text, pitch = 1.0, rate = 0.95) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (ukVoice) utterance.voice = ukVoice;
  utterance.lang = 'en-GB';
  utterance.rate = rate;
  utterance.pitch = pitch;

  utterance.onstart = () => {
    if (window.AnimEngine && typeof AnimEngine.startEqualizerPulse === 'function') {
      AnimEngine.startEqualizerPulse();
    }
  };

  utterance.onend = utterance.onerror = () => {
    if (window.AnimEngine && typeof AnimEngine.stopEqualizerPulse === 'function') {
      AnimEngine.stopEqualizerPulse();
    }
  };

  window.speechSynthesis.speak(utterance);
}

/* --------------------------------------------------------------------------
   3. TOPIC SWITCHING ENGINE
   -------------------------------------------------------------------------- */
function switchTopic(topicId) {
  if (!SPARE_TOPICS_DATA[topicId]) return;
  currentTopicId = topicId;

  // Update URL without full page reload
  const newUrl = `${window.location.pathname}?topic=${topicId}`;
  window.history.pushState({ path: newUrl }, '', newUrl);

  MASTER_VOCAB = convertToMasterVocab(SPARE_TOPICS_DATA[currentTopicId].words);

  // Sync choice buttons
  document.querySelectorAll('.hub-choice-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-topic') === topicId);
  });

  // Re-render all components
  renderTopicHero();
  renderVideoStudio();
  renderTopicVocabGrid();
  renderTopicChecklist();

  // Reset and restart all 4 learning parts
  cardIdx = 0;
  streak = 0;
  updateStreak();
  updateMasteredBtn();
  flipAndRenderCard();

  initPart2GapFill();
  initPart3Connect();
  initPart4Exam();

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Loaded: ${SPARE_TOPICS_DATA[topicId].title}`, 'success');
  }
}

/* --------------------------------------------------------------------------
   4. HERO PANEL (MIRRORS SESSIONS HERO PANEL 100%)
   -------------------------------------------------------------------------- */
function renderTopicHero() {
  const topic = SPARE_TOPICS_DATA[currentTopicId];
  const banner = document.getElementById('topicHeroBanner');
  if (!banner || !topic) return;

  banner.innerHTML = `
    <div>
      <div class="hero-tag-pills">
        <span class="hero-tag-pill pill-gold">ACTIVE TOPIC • ${escapeHtml(topic.title.toUpperCase())}</span>
        <span class="hero-tag-pill pill-glass">INTERMEDIATE B1</span>
        <span class="hero-tag-pill pill-glass">YOUTUBE PLAYLIST LESSON</span>
      </div>
      <h1 class="hero-heading">${escapeHtml(topic.title)} &amp; <span>Video Studio</span></h1>
      <p class="hero-subtitle-text">${escapeHtml(topic.desc)}</p>
      <div class="hero-stats-row">
        <div class="hero-stat-cell">
          <span class="big-val">4</span>
          <span class="lbl">Card Games &amp; Tests</span>
        </div>
        <div class="hero-stat-cell">
          <span class="big-val">${MASTER_VOCAB.length}</span>
          <span class="lbl">Total Vocabulary</span>
        </div>
        <div class="hero-stat-cell">
          <span class="big-val">100%</span>
          <span class="lbl">Mobile &amp; Netlify Ready</span>
        </div>
      </div>
    </div>

    <!-- Quick Part Launcher (Identical to Sessions) -->
    <div class="hero-quick-launcher">
      <span style="font-size:0.8rem; font-weight:800; color:#38bdf8; text-transform:uppercase;">The 4 Vocabulary Parts:</span>
      <div class="quick-part-grid">
        <a href="#part1Flashcards" class="quick-part-btn">
          <strong>Part 1: Cards &amp; Timer</strong>
          <small>Word explanations &amp; audio</small>
        </a>
        <a href="#part2GapFill" class="quick-part-btn">
          <strong>Part 2: Sentence Solve</strong>
          <small>Contextual gap-fill challenge</small>
        </a>
        <a href="#part3Connect" class="quick-part-btn">
          <strong>Part 3: Connect</strong>
          <small>Word-to-definition matching</small>
        </a>
        <a href="#part4AllTest" class="quick-part-btn">
          <strong>Part 4: All Words Test</strong>
          <small>${MASTER_VOCAB.length}-question final exam</small>
        </a>
      </div>
      <div style="background:rgba(0,0,0,0.2); padding:0.6rem 0.9rem; border-radius:var(--radius-sm); font-size:0.8rem; color:#e0f2fe; display:flex; justify-content:space-between; align-items:center;">
        <span>🎧 British English voice synthesis active</span>
        <button class="audio-circle-btn" onclick="speakUK('British Council video lesson: ${escapeJs(topic.title)}.')">🔊</button>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   5. SECTION 1: VIDEO STUDIO & BILINGUAL TRANSCRIPT
   -------------------------------------------------------------------------- */
let topicTranscriptSearchTerm = '';

let inlinePlayerActive = true;

function toggleTopicInlineVideo() {
  const poster = document.getElementById('videoPosterWrap');
  const iframeWrap = document.getElementById('videoIframeWrap');
  const btn = document.getElementById('btnToggleInlinePlayer');
  if (!poster || !iframeWrap || !btn) return;

  inlinePlayerActive = !inlinePlayerActive;
  if (inlinePlayerActive) {
    poster.style.display = 'none';
    iframeWrap.style.display = 'block';
    btn.innerHTML = '🖼️ Switch to Poster Mode';
    btn.classList.add('active');
  } else {
    poster.style.display = 'block';
    iframeWrap.style.display = 'none';
    btn.innerHTML = '📺 Play Inside Page (Default)';
    btn.classList.remove('active');
  }
}

function renderVideoStudio() {
  inlinePlayerActive = true;
  const topic = SPARE_TOPICS_DATA[currentTopicId];
  const container = document.getElementById('videoStudioGrid');
  if (!container || !topic) return;

  const v = topic.video;
  const youtubeUrl = `https://www.youtube.com/watch?v=${v.youtubeId}&list=PLG4aOWLPpiU94F3pJvdfOSvoPgx1fxbwN`;

  container.innerHTML = `
    <!-- Video Player Column with In-Page Embed Default & External Browser Option -->
    <div class="video-player-box" style="display:flex; flex-direction:column; gap:0.85rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem;">
        <div>
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); background:rgba(0,102,245,0.08); padding:0.25rem 0.65rem; border-radius:var(--radius-sm);">
            ${escapeHtml(v.level)} • ⏱ ${escapeHtml(v.duration)}
          </span>
          <h3 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.4rem 0 0.2rem;">${escapeHtml(v.title)}</h3>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn" style="background:#ef4444; color:#fff; font-size:0.82rem; padding:0.45rem 1rem; border-radius:var(--radius-full); display:inline-flex; align-items:center; gap:0.45rem; text-decoration:none; font-weight:800; box-shadow:0 3px 12px rgba(239,68,68,0.35);">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>Play on Browser / YouTube ↗</span>
          </a>
        </div>
      </div>

      <!-- Video Player Card (In-Page Video is DEFAULT) -->
      <div style="position:relative; border-radius:var(--radius-md); overflow:hidden; background:#0f172a; border:1px solid var(--border-light); box-shadow:var(--shadow-card);">
        
        <!-- 1. Default: In-Page iFrame Player -->
        <div id="videoIframeWrap" style="display:block; position:relative; width:100%; aspect-ratio:16/9; background:#000;">
          <iframe 
            id="topicVideoIframe"
            src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0" 
            title="${escapeHtml(v.title)}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen 
            style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;">
          </iframe>
        </div>

        <!-- 2. Secondary Poster View (Switched on demand) -->
        <div id="videoPosterWrap" style="display:none; position:relative; width:100%; aspect-ratio:16/9; overflow:hidden; cursor:pointer;" onclick="window.open('${youtubeUrl}', '_blank')">
          <img 
            src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" 
            alt="${escapeHtml(v.title)}" 
            style="width:100%; height:100%; object-fit:cover; display:block; filter:brightness(0.85); transition:transform 0.3s;"
            onmouseover="this.style.transform='scale(1.03)'"
            onmouseout="this.style.transform='scale(1)'">
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.2) 50%, rgba(0,0,0,0.4) 100%); display:flex; flex-direction:column; justify-content:space-between; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="background:rgba(239,68,68,0.95); color:#fff; font-size:0.75rem; font-weight:800; padding:0.25rem 0.65rem; border-radius:var(--radius-sm); letter-spacing:1px; text-transform:uppercase;">
                🔴 Authentic YouTube Lesson
              </span>
              <span style="background:rgba(0,0,0,0.7); color:#fff; font-size:0.75rem; font-weight:700; padding:0.25rem 0.6rem; border-radius:var(--radius-sm);">
                ⏱ ${escapeHtml(v.duration)}
              </span>
            </div>

            <!-- Central Glow Play Icon -->
            <div style="align-self:center; display:flex; flex-direction:column; align-items:center; gap:0.4rem;">
              <div style="width:62px; height:62px; border-radius:50%; background:#ef4444; display:flex; align-items:center; justify-content:center; box-shadow:0 0 25px rgba(239,68,68,0.7); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span style="color:#fff; font-size:0.88rem; font-weight:800; text-shadow:0 2px 4px rgba(0,0,0,0.8);">Click to Watch Full Video on YouTube ↗</span>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:flex-end;">
              <span style="color:#cbd5e1; font-size:0.82rem; font-weight:600;">British Council Listening Series</span>
              <span style="color:#94a3b8; font-size:0.78rem;">Free Official Resource</span>
            </div>
          </div>
        </div>

        <!-- Video Player Control Strip -->
        <div style="padding:0.75rem 1rem; background:var(--bg-surface); border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-size:0.82rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <button type="button" id="btnToggleInlinePlayer" class="btn-outline-subtle active" onclick="toggleTopicInlineVideo()" style="font-size:0.8rem; padding:0.35rem 0.85rem;">
              🖼️ Switch to Poster Mode
            </button>
            <span style="color:var(--text-muted); font-size:0.78rem;">Currently playing in-page. Use button to switch view or YouTube button to open in browser.</span>
          </div>
          <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--bc-blue); font-weight:700; text-decoration:none;">
            Open in Browser / YouTube ↗
          </a>
        </div>
      </div>

      <p style="font-size:0.9rem; color:var(--text-body); line-height:1.5; margin:0;">${escapeHtml(v.description)}</p>
    </div>

    <!-- Bilingual Transcript Studio Column -->
    <div class="transcript-studio-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <div>
          <h3 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0;">Bilingual Video Transcript</h3>
          <small style="color:var(--text-muted);">${(v.transcript || []).length} key segments with Arabic explanations</small>
        </div>
      </div>

      <input 
        type="text" 
        id="topicTranscriptSearch" 
        class="filter-input" 
        placeholder="🔍 Search transcript lines in English or Arabic..." 
        style="margin-bottom:0.75rem;" 
        oninput="onTopicTranscriptSearch(this.value)">

      <div class="transcript-scroll-area" id="topicTranscriptList">
        <!-- Rendered by renderTopicTranscriptList() -->
      </div>
    </div>
  `;

  renderTopicTranscriptList();
}

function onTopicTranscriptSearch(query) {
  topicTranscriptSearchTerm = (query || '').trim().toLowerCase();
  renderTopicTranscriptList();
}

function renderTopicTranscriptList() {
  const container = document.getElementById('topicTranscriptList');
  const topic = SPARE_TOPICS_DATA[currentTopicId];
  if (!container || !topic) return;

  const transcript = topic.video.transcript || [];
  const filtered = transcript.filter(t => {
    if (!topicTranscriptSearchTerm) return true;
    return t.en.toLowerCase().includes(topicTranscriptSearchTerm) ||
      (t.ar && t.ar.includes(topicTranscriptSearchTerm)) ||
      (t.speaker && t.speaker.toLowerCase().includes(topicTranscriptSearchTerm));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.88rem;">
        No transcript lines found matching "${escapeHtml(topicTranscriptSearchTerm)}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(t => `
    <div class="transcript-line-row">
      <div class="transcript-top-line" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); font-family:monospace;">[${escapeHtml(t.time)}] ${escapeHtml(t.speaker.toUpperCase())}</span>
        <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(t.en)}')">🔊</button>
      </div>
      <p style="font-size:0.92rem; font-weight:600; color:var(--text-main); line-height:1.45; margin:0 0 0.25rem;">${escapeHtml(t.en)}</p>
      <p style="font-family:'Cairo',var(--font-main); font-size:0.92rem; color:#0284c7; direction:rtl; text-align:right; margin:0;">${escapeHtml(t.ar)}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. SECTION 2: PART 1 - 3D INTERACTIVE FLASHCARDS (WITH TIMER & TOUCH)
   -------------------------------------------------------------------------- */
let cardIdx = 0;
let cardSidePref = localStorage.getItem('bc_topic_card_side_pref') || 'defFirst';
let masteredIds = new Set(JSON.parse(localStorage.getItem('bc_topic_mastered_words') || '[]'));
let streak = 0;

let cardTimer = null;
let secondsRemaining = 15;
let timerRunning = true;

function initPart1Flashcards() {
  const btnDef = document.getElementById('btnModeDefFirst');
  const btnWord = document.getElementById('btnModeWordFirst');

  function updateModeButtons() {
    if (btnDef && btnWord) {
      btnDef.classList.toggle('active', cardSidePref === 'defFirst');
      btnWord.classList.toggle('active', cardSidePref === 'wordFirst');
    }
  }

  btnDef?.addEventListener('click', () => {
    cardSidePref = 'defFirst';
    localStorage.setItem('bc_topic_card_side_pref', 'defFirst');
    updateModeButtons();
    flipAndRenderCard(true);
  });

  btnWord?.addEventListener('click', () => {
    cardSidePref = 'wordFirst';
    localStorage.setItem('bc_topic_card_side_pref', 'wordFirst');
    updateModeButtons();
    flipAndRenderCard(true);
  });

  updateModeButtons();

  // Flip interactions
  const flipper = document.getElementById('cardFlipper');
  document.getElementById('cardViewport')?.addEventListener('click', () => {
    flipper?.classList.toggle('flipped');
  });

  document.getElementById('btnFlipCardManual')?.addEventListener('click', () => {
    flipper?.classList.toggle('flipped');
  });

  document.getElementById('btnPrevWord')?.addEventListener('click', prevCard);
  document.getElementById('btnNextWord')?.addEventListener('click', nextCard);

  document.getElementById('btnShuffleWords')?.addEventListener('click', () => {
    shuffleArray(MASTER_VOCAB);
    cardIdx = 0;
    flipAndRenderCard(true);
    if (window.AnimEngine) AnimEngine.showToast("Topic flashcards shuffled!", "info");
  });

  document.getElementById('btnMarkMastered')?.addEventListener('click', toggleMastered);

  // Extra Audio Buttons
  document.getElementById('btnAudioPrompt')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const cur = MASTER_VOCAB[cardIdx];
    if (cur) speakUK(cardSidePref === 'defFirst' ? cur.definition : cur.word);
  });

  document.getElementById('btnAudioWord')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const cur = MASTER_VOCAB[cardIdx];
    if (cur) speakUK(cur.word);
  });

  document.getElementById('btnAudioSentence')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const cur = MASTER_VOCAB[cardIdx];
    if (cur) speakUK(cur.sentence);
  });

  // Timer controls
  const timerSelect = document.getElementById('flashcardTimerSelect');
  timerSelect?.addEventListener('change', () => {
    const val = parseInt(timerSelect.value, 10);
    if (val === 0) {
      timerRunning = false;
      clearInterval(cardTimer);
      const disp = document.getElementById('flashcardTimerDisplay');
      if (disp) disp.textContent = '⏱ Off';
    } else {
      timerRunning = true;
      secondsRemaining = val;
      resetSpeedTimer();
    }
  });

  document.getElementById('btnPauseTimer')?.addEventListener('click', () => {
    const btn = document.getElementById('btnPauseTimer');
    if (timerRunning) {
      timerRunning = false;
      clearInterval(cardTimer);
      if (btn) btn.textContent = '▶ Resume';
    } else {
      timerRunning = true;
      resetSpeedTimer();
      if (btn) btn.textContent = '⏸ Pause';
    }
  });

  initSwipeGestures();
  flipAndRenderCard(true);
}

function flipAndRenderCard(keepOrientation = false) {
  if (!MASTER_VOCAB || !MASTER_VOCAB.length) return;
  if (cardIdx >= MASTER_VOCAB.length) cardIdx = 0;
  if (cardIdx < 0) cardIdx = MASTER_VOCAB.length - 1;

  const item = MASTER_VOCAB[cardIdx];
  const flipper = document.getElementById('cardFlipper');
  if (!flipper) return;

  if (!keepOrientation) flipper.classList.remove('flipped');

  const badge = document.getElementById('cardStepBadge');
  if (badge) badge.textContent = `${cardIdx + 1} / ${MASTER_VOCAB.length}`;

  const frontPlane = document.getElementById('cardPlaneFront');
  const backPlane = document.getElementById('cardBackPlane');

  const cefrClass = `cefr-${(item.cambridgeLevel || 'B1').toLowerCase()}`;

  if (cardSidePref === 'defFirst') {
    // FRONT: Definition
    frontPlane.innerHTML = `
      <div class="card-top-meta">
        <span class="chip-citation">#${item.id} • ${escapeHtml(item.citation)}</span>
        <div class="card-meta-right">
          <span class="cambridge-badge ${cefrClass}">Cambridge ${item.cambridgeLevel}</span>
          <span class="word-type-badge badge-phrase">🏷️ ${escapeHtml(item.pos)}</span>
        </div>
      </div>
      <div class="card-center-lead">
        <div class="card-face-subhead">
          <span class="card-role-pill role-front">📖 Cambridge Definition (Guess Word):</span>
          <button class="audio-circle-btn" onclick="event.stopPropagation(); speakUK('${escapeJs(item.definition)}')">🔊</button>
        </div>
        <div class="card-def-primary">${escapeHtml(item.definition)}</div>
      </div>
      <div class="card-flip-hint">💡 Tap or spacebar to reveal the word &amp; Arabic translation</div>
    `;

    // BACK: Word & Arabic & Example
    backPlane.innerHTML = `
      <div class="card-top-meta">
        <span class="chip-citation">#${item.id} • ${escapeHtml(item.citation)}</span>
        <div class="card-meta-right">
          <span class="cambridge-badge ${cefrClass}">Cambridge ${item.cambridgeLevel}</span>
          <span class="pill-counter" style="font-size:0.75rem; padding:0.15rem 0.5rem; color:${masteredIds.has(item.id) ? 'var(--emerald)' : 'var(--text-muted)'};">
            ${masteredIds.has(item.id) ? '★ Mastered' : '☆ In Progress'}
          </span>
        </div>
      </div>
      <div class="card-center-lead">
        <div class="card-face-subhead">
          <span class="card-role-pill role-back">🔤 English Vocabulary Term</span>
          <button class="audio-circle-btn" onclick="event.stopPropagation(); speakUK('${escapeJs(item.word)}')">🔊</button>
        </div>
        <div class="card-word-title" style="color:var(--bc-blue);">${escapeHtml(item.word)}</div>
        <div style="font-family:'Cairo',var(--font-main); font-size:1.3rem; font-weight:800; color:#0284c7; direction:rtl; text-align:right; margin-top:0.4rem;">
          ${escapeHtml(item.b1Explain)}
        </div>
      </div>
      <div class="back-example-sentence-box">
        <div class="back-sentence-row">
          <span class="back-label">Authentic Example Sentence:</span>
          <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="event.stopPropagation(); speakUK('${escapeJs(item.sentence)}')">🔊</button>
        </div>
        <p class="back-sentence-quote">"${escapeHtml(item.sentence)}"</p>
      </div>
    `;
  } else {
    // FRONT: Word
    frontPlane.innerHTML = `
      <div class="card-top-meta">
        <span class="chip-citation">#${item.id} • ${escapeHtml(item.citation)}</span>
        <div class="card-meta-right">
          <span class="cambridge-badge ${cefrClass}">Cambridge ${item.cambridgeLevel}</span>
          <span class="word-type-badge badge-phrase">🏷️ ${escapeHtml(item.pos)}</span>
        </div>
      </div>
      <div class="card-center-lead">
        <div class="card-face-subhead">
          <span class="card-role-pill role-front">🔤 English Vocabulary Term</span>
          <button class="audio-circle-btn" onclick="event.stopPropagation(); speakUK('${escapeJs(item.word)}')">🔊</button>
        </div>
        <div class="card-word-title" style="color:var(--bc-blue);">${escapeHtml(item.word)}</div>
        <div style="font-family:'Cairo',var(--font-main); font-size:1.3rem; font-weight:800; color:#0284c7; direction:rtl; text-align:right; margin-top:0.4rem;">
          ${escapeHtml(item.b1Explain)}
        </div>
      </div>
      <div class="card-flip-hint">💡 Tap or spacebar to reveal definition &amp; example</div>
    `;

    // BACK: Definition & Example
    backPlane.innerHTML = `
      <div class="card-top-meta">
        <span class="chip-citation">#${item.id} • ${escapeHtml(item.citation)}</span>
        <div class="card-meta-right">
          <span class="cambridge-badge ${cefrClass}">Cambridge ${item.cambridgeLevel}</span>
          <span class="pill-counter" style="font-size:0.75rem; padding:0.15rem 0.5rem; color:${masteredIds.has(item.id) ? 'var(--emerald)' : 'var(--text-muted)'};">
            ${masteredIds.has(item.id) ? '★ Mastered' : '☆ In Progress'}
          </span>
        </div>
      </div>
      <div class="card-center-lead">
        <div class="card-face-subhead">
          <span class="card-role-pill role-back">📖 Cambridge Definition</span>
          <button class="audio-circle-btn" onclick="event.stopPropagation(); speakUK('${escapeJs(item.definition)}')">🔊</button>
        </div>
        <div class="card-def-primary">${escapeHtml(item.definition)}</div>
      </div>
      <div class="back-example-sentence-box">
        <div class="back-sentence-row">
          <span class="back-label">Authentic Example Sentence:</span>
          <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="event.stopPropagation(); speakUK('${escapeJs(item.sentence)}')">🔊</button>
        </div>
        <p class="back-sentence-quote">"${escapeHtml(item.sentence)}"</p>
      </div>
    `;
  }

  updateMasteredBtn();
  resetSpeedTimer();
}

function prevCard() {
  cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
  flipAndRenderCard();
}

function nextCard() {
  cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
  flipAndRenderCard();
}

function toggleMastered() {
  const item = MASTER_VOCAB[cardIdx];
  if (!item) return;

  if (masteredIds.has(item.id)) {
    masteredIds.delete(item.id);
    if (window.AnimEngine) AnimEngine.showToast("Marked as In Progress", "info");
  } else {
    masteredIds.add(item.id);
    streak++;
    updateStreak();
    if (window.AnimEngine) AnimEngine.showToast(`Mastered: "${item.word}"! Streak: ${streak} 🔥`, "success");
  }

  localStorage.setItem('bc_topic_mastered_words', JSON.stringify([...masteredIds]));
  updateMasteredBtn();
  flipAndRenderCard(true);
}

function updateMasteredBtn() {
  const btn = document.getElementById('btnMarkMastered');
  const countSpan = document.getElementById('masteredBadge');
  const cur = MASTER_VOCAB[cardIdx];

  if (countSpan) countSpan.textContent = `${masteredIds.size} / ${MASTER_VOCAB.length} Mastered`;
  if (btn && cur) {
    if (masteredIds.has(cur.id)) {
      btn.style.background = 'var(--emerald)';
      btn.style.color = '#ffffff';
      btn.innerHTML = '★ Mastered';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--emerald)';
      btn.innerHTML = '☆ Mark Mastered';
    }
  }
}

function updateStreak() {
  const el = document.getElementById('streakBadge');
  if (el) el.textContent = `🔥 Streak: ${streak}`;
}

function resetSpeedTimer() {
  clearInterval(cardTimer);
  const sel = document.getElementById('flashcardTimerSelect');
  const duration = sel ? parseInt(sel.value, 10) : 15;
  if (duration === 0 || !timerRunning) return;

  secondsRemaining = duration;
  const disp = document.getElementById('flashcardTimerDisplay');
  if (disp) {
    disp.textContent = `⏱ ${secondsRemaining}s`;
    disp.classList.remove('hurry');
  }

  cardTimer = setInterval(() => {
    secondsRemaining--;
    if (disp) {
      disp.textContent = `⏱ ${secondsRemaining}s`;
      if (secondsRemaining <= 4) disp.classList.add('hurry');
      else disp.classList.remove('hurry');
    }
    if (secondsRemaining <= 0) {
      clearInterval(cardTimer);
      nextCard();
    }
  }, 1000);
}

function initSwipeGestures() {
  const vp = document.getElementById('cardViewport');
  if (!vp) return;

  let startX = 0;
  let startY = 0;

  vp.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  vp.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - startX;
    const dy = endY - startY;

    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) nextCard();
      else prevCard();
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   7. SECTION 3: PART 2 - SENTENCE GAP-FILL CHALLENGE (ACTIVE SOLVING!)
   Replaces the useless blind tile flip game with real learning & recall!
   -------------------------------------------------------------------------- */
let gapfillIdx = 0;
let gapfillSolvedCount = 0;
let gapfillStreak = 0;
let gapfillItems = [];

function initPart2GapFill() {
  if (!MASTER_VOCAB || !MASTER_VOCAB.length) return;

  // Filter words that have valid example sentences
  const pool = MASTER_VOCAB.filter(w => w.sentence && w.sentence.toLowerCase().includes(w.word.toLowerCase()));
  gapfillItems = pool.length >= 4 ? [...pool] : [...MASTER_VOCAB];
  shuffleArray(gapfillItems);

  gapfillIdx = 0;
  gapfillSolvedCount = 0;
  gapfillStreak = 0;

  updateGapfillStats();

  document.getElementById('btnGapfillNext')?.addEventListener('click', nextGapfillQuestion);
  document.getElementById('btnGapfillShuffle')?.addEventListener('click', () => {
    shuffleArray(gapfillItems);
    gapfillIdx = 0;
    renderGapfillQuestion();
  });

  renderGapfillQuestion();
}

function updateGapfillStats() {
  const scoreBadge = document.getElementById('gapfillScoreBadge');
  const streakBadge = document.getElementById('gapfillStreakBadge');
  if (scoreBadge) scoreBadge.textContent = `Solved: ${gapfillSolvedCount} / ${gapfillItems.length}`;
  if (streakBadge) streakBadge.textContent = `Streak: ${gapfillStreak} 🔥`;
}

function renderGapfillQuestion() {
  if (!gapfillItems.length) return;
  if (gapfillIdx >= gapfillItems.length) gapfillIdx = 0;

  const item = gapfillItems[gapfillIdx];
  const counterEl = document.getElementById('gapfillCounter');
  if (counterEl) counterEl.textContent = `Sentence ${gapfillIdx + 1} of ${gapfillItems.length}`;

  const sentenceDisplay = document.getElementById('gapfillSentenceDisplay');
  const hintDisplay = document.getElementById('gapfillHintDisplay');
  const optionsGrid = document.getElementById('gapfillOptionsGrid');
  const feedbackPane = document.getElementById('gapfillFeedbackPane');

  if (feedbackPane) feedbackPane.style.display = 'none';

  // Mask the target word in the sentence
  let sentenceText = item.sentence || `We learned about ${item.word} in this lesson.`;
  const regex = new RegExp(`\\b${escapeRegex(item.word)}\\b`, 'gi');
  const maskedHtml = sentenceText.replace(regex, `<span class="gapfill-blank" id="targetBlankSlot">______</span>`);

  if (sentenceDisplay) sentenceDisplay.innerHTML = `"${maskedHtml}"`;

  if (hintDisplay) {
    hintDisplay.innerHTML = `
      <span class="cambridge-badge cefr-${(item.cambridgeLevel || 'B1').toLowerCase()}">Cambridge ${item.cambridgeLevel}</span>
      <span>💡 Clue: <em>${escapeHtml(item.definition)}</em> (${escapeHtml(item.b1Explain)})</span>
    `;
  }

  // Create 4 choices: 1 correct + 3 random distractors
  const others = MASTER_VOCAB.filter(w => w.id !== item.id);
  shuffleArray(others);
  const distractors = others.slice(0, 3).map(w => w.word);

  const choices = [item.word, ...distractors];
  shuffleArray(choices);

  if (optionsGrid) {
    optionsGrid.innerHTML = choices.map(wordChoice => `
      <button type="button" class="gapfill-option-btn" onclick="submitGapfillAnswer('${escapeJs(wordChoice)}', '${escapeJs(item.word)}')">
        <span>${escapeHtml(wordChoice)}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">👉</span>
      </button>
    `).join('');
  }
}

function submitGapfillAnswer(selectedWord, correctWord) {
  const blankSlot = document.getElementById('targetBlankSlot');
  const feedbackPane = document.getElementById('gapfillFeedbackPane');
  const buttons = document.querySelectorAll('.gapfill-option-btn');

  // Disable all buttons to prevent spam
  buttons.forEach(b => b.disabled = true);

  const isCorrect = (selectedWord.toLowerCase() === correctWord.toLowerCase());

  if (blankSlot) {
    blankSlot.textContent = correctWord;
    blankSlot.classList.add(isCorrect ? 'correct' : 'wrong');
  }

  buttons.forEach(btn => {
    const text = btn.querySelector('span')?.textContent.trim();
    if (text?.toLowerCase() === correctWord.toLowerCase()) {
      btn.classList.add('correct');
    } else if (text?.toLowerCase() === selectedWord.toLowerCase() && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  if (feedbackPane) {
    feedbackPane.style.display = 'flex';
    if (isCorrect) {
      gapfillSolvedCount++;
      gapfillStreak++;
      feedbackPane.style.background = 'var(--emerald-bg)';
      feedbackPane.style.color = 'var(--emerald)';
      feedbackPane.innerHTML = `
        <span>🎉 Excellent! <strong>"${escapeHtml(correctWord)}"</strong> is the correct vocabulary word!</span>
        <button class="audio-circle-btn" style="background:#fff;" onclick="speakUK('${escapeJs(correctWord)}')">🔊</button>
      `;
      speakUK(correctWord);
    } else {
      gapfillStreak = 0;
      feedbackPane.style.background = 'var(--rose-bg)';
      feedbackPane.style.color = 'var(--rose)';
      feedbackPane.innerHTML = `
        <span>❌ Not quite! The correct answer is <strong>"${escapeHtml(correctWord)}"</strong>.</span>
        <button class="audio-circle-btn" style="background:#fff;" onclick="speakUK('${escapeJs(correctWord)}')">🔊</button>
      `;
    }
    updateGapfillStats();
  }

  // Auto-advance after 1.8s
  setTimeout(() => {
    nextGapfillQuestion();
  }, 1800);
}

function nextGapfillQuestion() {
  gapfillIdx = (gapfillIdx + 1) % gapfillItems.length;
  renderGapfillQuestion();
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------------------------------------------------------------------
   8. SECTION 4: PART 3 - TEST & CONNECT (WORD-TO-DEFINITION MATCH)
   -------------------------------------------------------------------------- */
let selectedLeft = null;
let selectedRight = null;
let connectScore = 0;
let connectTotal = 6;

function initPart3Connect() {
  document.getElementById('btnRefreshConnect')?.addEventListener('click', loadConnectPairs);
  loadConnectPairs();
}

function loadConnectPairs() {
  const colLeft = document.getElementById('connectWordsCol');
  const colRight = document.getElementById('connectDefsCol');
  if (!colLeft || !colRight || !MASTER_VOCAB || !MASTER_VOCAB.length) return;

  colLeft.innerHTML = '<span class="connect-col-title">Column 1: Words</span>';
  colRight.innerHTML = '<span class="connect-col-title">Column 2: English Definitions</span>';

  selectedLeft = null;
  selectedRight = null;
  connectScore = 0;

  const alertBox = document.getElementById('connectSuccessAlert');
  if (alertBox) alertBox.style.display = 'none';

  const pool = [...MASTER_VOCAB];
  shuffleArray(pool);
  const items = pool.slice(0, 6);
  connectTotal = items.length;

  const scoreBadge = document.getElementById('connectScoreBadge');
  if (scoreBadge) scoreBadge.textContent = `Connected: 0 / ${connectTotal}`;

  const leftList = items.map(w => ({ id: w.id, text: w.word, level: w.cambridgeLevel }));
  const rightList = items.map(w => ({ id: w.id, text: w.definition }));

  shuffleArray(leftList);
  shuffleArray(rightList);

  leftList.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'connect-btn';
    btn.setAttribute('data-id', item.id);
    btn.innerHTML = `
      <span style="font-weight:700;">${escapeHtml(item.text)}</span>
      <span class="cambridge-badge cefr-${(item.level || 'B1').toLowerCase()}">${item.level}</span>
    `;
    btn.addEventListener('click', () => {
      if (btn.classList.contains('paired')) return;
      document.querySelectorAll('#connectWordsCol .connect-btn').forEach(b => b.classList.remove('active-source'));
      btn.classList.add('active-source');
      selectedLeft = { id: item.id, btn, word: item.text };
      checkConnectPair();
    });
    colLeft.appendChild(btn);
  });

  rightList.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'connect-btn';
    btn.setAttribute('data-id', item.id);
    btn.innerHTML = `<span>${escapeHtml(item.text)}</span>`;
    btn.addEventListener('click', () => {
      if (btn.classList.contains('paired')) return;
      document.querySelectorAll('#connectDefsCol .connect-btn').forEach(b => b.classList.remove('active-source'));
      btn.classList.add('active-source');
      selectedRight = { id: item.id, btn };
      checkConnectPair();
    });
    colRight.appendChild(btn);
  });
}

function checkConnectPair() {
  if (!selectedLeft || !selectedRight) return;

  if (selectedLeft.id === selectedRight.id) {
    selectedLeft.btn.classList.remove('active-source');
    selectedRight.btn.classList.remove('active-source');
    selectedLeft.btn.classList.add('paired');
    selectedRight.btn.classList.add('paired');

    speakUK(selectedLeft.word);
    connectScore++;

    const scoreBadge = document.getElementById('connectScoreBadge');
    if (scoreBadge) scoreBadge.textContent = `Connected: ${connectScore} / ${connectTotal}`;

    selectedLeft = null;
    selectedRight = null;

    if (connectScore === connectTotal) {
      const alertBox = document.getElementById('connectSuccessAlert');
      if (alertBox) alertBox.style.display = 'block';
      if (window.AnimEngine) AnimEngine.showToast("All pairs connected! Outstanding!", "success");
    }
  } else {
    selectedLeft.btn.style.borderColor = 'var(--rose)';
    selectedRight.btn.style.borderColor = 'var(--rose)';
    setTimeout(() => {
      selectedLeft?.btn.classList.remove('active-source');
      selectedRight?.btn.classList.remove('active-source');
      if (selectedLeft?.btn) selectedLeft.btn.style.borderColor = '';
      if (selectedRight?.btn) selectedRight.btn.style.borderColor = '';
      selectedLeft = null;
      selectedRight = null;
    }, 650);
  }
}

/* --------------------------------------------------------------------------
   9. SECTION 5: PART 4 - ALL-WORDS COMPREHENSIVE FINAL EXAM
   -------------------------------------------------------------------------- */
let examQuestions = [];
let examCurrentIdx = 0;
let examScore = 0;

function initPart4Exam() {
  document.getElementById('btnExamPrevQuestion')?.addEventListener('click', () => {
    if (examCurrentIdx > 0) {
      examCurrentIdx--;
      renderExamQuestion();
    }
  });

  document.getElementById('btnRestartFullTest')?.addEventListener('click', startExam);
  document.getElementById('btnRestartExamDone')?.addEventListener('click', startExam);

  startExam();
}

function startExam() {
  if (!MASTER_VOCAB || !MASTER_VOCAB.length) return;

  const pool = [...MASTER_VOCAB];
  shuffleArray(pool);

  examQuestions = pool.map(targetWord => {
    const others = MASTER_VOCAB.filter(w => w.id !== targetWord.id);
    shuffleArray(others);
    const distractors = others.slice(0, 3).map(w => w.word);

    const choices = [targetWord.word, ...distractors];
    shuffleArray(choices);

    return {
      word: targetWord.word,
      definition: targetWord.definition,
      arabic: targetWord.b1Explain,
      choices
    };
  });

  examCurrentIdx = 0;
  examScore = 0;

  document.getElementById('examResultsBox').style.display = 'none';
  document.getElementById('examActiveQuizBox').style.display = 'block';

  renderExamQuestion();
}

function renderExamQuestion() {
  if (examCurrentIdx >= examQuestions.length) {
    finishExam();
    return;
  }

  const q = examQuestions[examCurrentIdx];
  const qCounter = document.getElementById('testQuestionIndex');
  const scoreDisp = document.getElementById('testScoreDisplay');
  const promptEl = document.getElementById('testLeadPrompt');
  const choicesList = document.getElementById('testChoicesList');

  if (qCounter) qCounter.textContent = `Question ${examCurrentIdx + 1} of ${examQuestions.length}`;
  if (scoreDisp) scoreDisp.textContent = `Score: ${examScore}`;

  if (promptEl) {
    promptEl.innerHTML = `
      Which vocabulary word matches this definition?<br>
      <span style="display:block; font-size:1.15rem; color:var(--bc-blue); margin-top:0.4rem; font-weight:700;">“${escapeHtml(q.definition)}”</span>
      <small style="font-family:'Cairo',var(--font-main); color:var(--text-muted); font-size:0.95rem; display:block; direction:rtl; text-align:right; margin-top:0.25rem;">${escapeHtml(q.arabic)}</small>
    `;
  }

  if (choicesList) {
    choicesList.innerHTML = q.choices.map(choiceWord => `
      <button type="button" class="test-choice-option" onclick="submitExamAnswer('${escapeJs(choiceWord)}', '${escapeJs(q.word)}')">
        <span>${escapeHtml(choiceWord)}</span>
        <span style="font-size:0.85rem; color:var(--text-muted);">👉</span>
      </button>
    `).join('');
  }
}

function submitExamAnswer(selectedWord, correctWord) {
  const buttons = document.querySelectorAll('.test-choice-option');
  buttons.forEach(b => b.disabled = true);

  const isCorrect = (selectedWord.toLowerCase() === correctWord.toLowerCase());
  if (isCorrect) examScore++;

  buttons.forEach(btn => {
    const text = btn.querySelector('span')?.textContent.trim();
    if (text?.toLowerCase() === correctWord.toLowerCase()) {
      btn.classList.add('correct');
    } else if (text?.toLowerCase() === selectedWord.toLowerCase() && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  speakUK(correctWord);

  setTimeout(() => {
    examCurrentIdx++;
    renderExamQuestion();
  }, 1400);
}

function finishExam() {
  document.getElementById('examActiveQuizBox').style.display = 'none';
  const resBox = document.getElementById('examResultsBox');
  resBox.style.display = 'block';

  const percentage = Math.round((examScore / examQuestions.length) * 100);
  document.getElementById('examFinalScore').textContent = `${percentage}%`;
  document.getElementById('examScoreDetail').textContent = `You correctly answered ${examScore} out of ${examQuestions.length} questions on this topic.`;

  if (window.AnimEngine) AnimEngine.showToast(`Exam completed! Score: ${percentage}%`, 'success');
}

/* --------------------------------------------------------------------------
   10. SECTION 6: TOPIC MATERIALS & FULL VOCABULARY LEXICON
   -------------------------------------------------------------------------- */
let topicCefrFilter = 'ALL';
let topicSearchTerm = '';

function setTopicCefrFilter(level) {
  topicCefrFilter = level;
  document.querySelectorAll('#topicCefrFilterBar .cefr-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-level') === level);
  });
  renderTopicVocabGrid();
}

function onTopicVocabSearch(query) {
  topicSearchTerm = (query || '').trim().toLowerCase();
  renderTopicVocabGrid();
}

function renderTopicVocabGrid() {
  const grid = document.getElementById('topicVocabGrid');
  const topic = SPARE_TOPICS_DATA[currentTopicId];
  if (!grid || !topic) return;

  const filtered = topic.words.filter(w => {
    const matchesLevel = (topicCefrFilter === 'ALL' || w.level === topicCefrFilter);
    const matchesSearch = !topicSearchTerm ||
      w.word.toLowerCase().includes(topicSearchTerm) ||
      (w.arabic && w.arabic.includes(topicSearchTerm)) ||
      (w.definition && w.definition.toLowerCase().includes(topicSearchTerm));
    return matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:2.5rem; background:var(--bg-subtle); border-radius:var(--radius-md); border:1px dashed var(--border-light); color:var(--text-muted);">
        <span style="font-size:2rem; display:block; margin-bottom:0.5rem;">🔍</span>
        No vocabulary matches found for "<strong>${escapeHtml(topicSearchTerm)}</strong>".
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(w => {
    const lvl = (w.level || 'B1').toLowerCase();
    return `
      <div class="topic-word-card ${lvl}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted);">#${w.num}</span>
            <span class="cefr-level-badge ${lvl}">Cambridge ${w.level}</span>
          </div>
          <button class="audio-circle-btn" onclick="speakUK('${escapeJs(w.word)}')">🔊</button>
        </div>

        <h4 style="font-size:1.25rem; font-weight:900; color:var(--text-main); margin:0;">${escapeHtml(w.word)}</h4>
        <div class="arabic-translation-box">${escapeHtml(w.arabic)}</div>

        <p style="font-size:0.9rem; color:var(--text-body); line-height:1.5; margin:0;">
          <strong>Definition:</strong> ${escapeHtml(w.definition)}
        </p>

        <div style="background:var(--bg-subtle); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border-left:3px solid var(--violet); font-size:0.86rem; font-style:italic; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-top:auto;">
          <span style="color:var(--text-main);">"${escapeHtml(w.example)}"</span>
          <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(w.example)}')">🔊</button>
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   11. THEME & HAMBURGER DRAWER SYSTEM
   -------------------------------------------------------------------------- */
function initThemeAndDrawer() {
  const toggle = document.getElementById('toggleThemeBtn');
  const savedTheme = localStorage.getItem('bc_site_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeSymbol(savedTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('bc_site_theme', next);
      updateThemeSymbol(next);
      if (window.AnimEngine) AnimEngine.showToast(`Switched to ${next} theme`, 'info');
    });
  }

  const mobileBtn = document.getElementById('btnMobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawerMenu');
  const closeBtn = document.getElementById('btnDrawerClose');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', mobileDrawer.classList.contains('open'));
    });
    closeBtn?.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }

  document.getElementById('britishAccentTestBtn')?.addEventListener('click', () => {
    speakUK("British Council Intermediate B1 English. Accent test successful.");
  });

  // Topic choice buttons
  document.querySelectorAll('.hub-choice-btn[data-topic]').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-topic');
      if (topicId) switchTopic(topicId);
    });
  });
}

function updateThemeSymbol(theme) {
  const el = document.getElementById('themeSymbol');
  if (el) el.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* --------------------------------------------------------------------------
   12. UTILITIES
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeJs(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* --------------------------------------------------------------------------
   12. TOPIC MASTERY CHECKLIST & ACTIVE RECALL STRATEGIES (GOLD STANDARD)
   -------------------------------------------------------------------------- */
const TOPIC_CHECKLIST_MAP = {
  travel_and_exploration: [
    "I can explain airport departure procedures, boarding gate protocol, and check-in steps.",
    "I know how to inquire about accommodation options (hostels, boutique hotels, homestays).",
    "I understand what to do during travel disruptions (layovers, cancellations, delayed flights).",
    "I can use core travel lexis: itinerary, layover, backpacking, sightseeing, departure lounge.",
    "I can politely communicate preferences with travel agents and hotel receptionists."
  ],
  sports_and_fitness: [
    "I master the sports collocation rules: PLAY (ball/team sports), DO (martial arts/gymnastics), GO (-ing activities).",
    "I can distinguish sporting venues accurately: pitch (football), court (tennis), ring (boxing), rink (ice skating).",
    "I understand competitive sports idioms: 'drop the ball', 'in the ballpark', 'saved by the bell'.",
    "I know the vocabulary for athletic gear: cleats, racket, goggles, helmet, barbell.",
    "I can articulate fitness goals, training routines, and health benefits in B1/B2 English."
  ],
  reading_and_books: [
    "I can describe reading habits, favorite literary genres (fiction, non-fiction, sci-fi, biography).",
    "I know book anatomy terms: spine, blurb, cover, foreword, preface, prologue, chapter.",
    "I can express literary reviews: 'a real page-turner', 'thought-provoking', 'heavy going'.",
    "I can debate the merits of physical print books vs e-readers and audiobooks.",
    "I understand narrative structure vocabulary: protagonist, antagonist, plot twist, climax."
  ],
  seasons_and_weather: [
    "I can describe seasonal transitions across winter, spring, summer, and autumn in Britain.",
    "I can use descriptive weather lexis: sweltering, crisp, bitterly cold, overcast, humid, drizzling.",
    "I know common weather idioms: 'under the weather', 'a breath of fresh air', 'come rain or shine'.",
    "I can explain how climate and seasons influence clothing, agriculture, mood, and outdoor events.",
    "I can discuss seasonal celebrations, travel preparations, and weather forecasts."
  ]
};

function renderTopicChecklist() {
  const container = document.getElementById('topicChecklistContainer');
  if (!container) return;

  const items = TOPIC_CHECKLIST_MAP[currentTopicId] || TOPIC_CHECKLIST_MAP.travel_and_exploration;
  const saved = JSON.parse(localStorage.getItem(`bc_topic_checklist_${currentTopicId}`) || '{}');

  const tipsList = [
    {
      icon: "⚡",
      title: "Spaced Retrieval with Speed Timer",
      desc: "Use Part 1 (3D Flashcards) with the 8s or 15s speed timer to train automatic word recall without hesitating."
    },
    {
      icon: "🧩",
      title: "Contextual Cloze Solves",
      desc: "In Part 2 (Sentence Solve), study the grammar clues and Arabic translations to understand the exact semantic role of the missing word."
    },
    {
      icon: "🔗",
      title: "Active Association Connections",
      desc: "Complete Part 3 (Connect) by associating target words directly with their Cambridge definition keywords rather than memorizing in isolation."
    },
    {
      icon: "🗣️",
      title: "Verbal Shadowing Drill",
      desc: "Click the 🔊 British audio button on transcript rows and flashcards, then shadow the speech aloud with matching intonation."
    }
  ];

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1.5rem; align-items:start;">
      <!-- Checklist Column -->
      <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1.25rem; box-shadow:var(--shadow-sm);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">SELF-CHECK • MILESTONES</span>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0.2rem 0;">Target Learning Objectives</h4>
          </div>
          <span class="pill-counter" id="topicChecklistProgressBadge" style="font-size:0.78rem; color:var(--emerald);">
            0 / ${items.length} Checked
          </span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
          Check off each skill as you master it through the video lesson and 4 interactive games. Progress saves automatically.
        </p>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${items.map((item, idx) => {
            const isChecked = !!saved[idx];
            return `
              <label style="display:flex; align-items:flex-start; gap:0.75rem; padding:0.65rem 0.85rem; border-radius:var(--radius-sm); background:var(--bg-subtle); border:1px solid var(--border-light); cursor:pointer; transition:all var(--transition-fast);" onmouseover="this.style.borderColor='var(--bc-blue)'" onmouseout="this.style.borderColor='var(--border-light)'">
                <input type="checkbox" id="topicCheck_${idx}" style="margin-top:0.25rem; accent-color:var(--bc-blue); width:17px; height:17px;" ${isChecked ? 'checked' : ''} onchange="toggleTopicChecklistItem(${idx})">
                <span style="font-size:0.88rem; color:var(--text-main); line-height:1.45;">${escapeHtml(item)}</span>
              </label>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Active Recall Tips Column -->
      <div style="background:linear-gradient(135deg, rgba(0,102,245,0.04) 0%, rgba(2,132,199,0.04) 100%); border:1px solid var(--border-light); border-left:4px solid var(--bc-blue); border-radius:var(--radius-md); padding:1.25rem; box-shadow:var(--shadow-sm);">
        <div style="margin-bottom:0.75rem;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">EVIDENCE-BASED LEARNING</span>
          <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0.2rem 0;">💡 Active Recall Strategies</h4>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
          Techniques used by top British Council students to retain vocabulary long-term.
        </p>

        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${tipsList.map(t => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem 0.95rem;">
              <strong style="color:var(--text-main); font-size:0.9rem; display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem;">
                <span>${t.icon}</span> ${escapeHtml(t.title)}
              </strong>
              <p style="margin:0; font-size:0.84rem; color:var(--text-muted); line-height:1.45;">${escapeHtml(t.desc)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  updateTopicChecklistBadge(items.length);
}

function toggleTopicChecklistItem(idx) {
  const saved = JSON.parse(localStorage.getItem(`bc_topic_checklist_${currentTopicId}`) || '{}');
  const checkbox = document.getElementById(`topicCheck_${idx}`);
  if (checkbox) {
    if (checkbox.checked) {
      saved[idx] = true;
    } else {
      delete saved[idx];
    }
  }
  localStorage.setItem(`bc_topic_checklist_${currentTopicId}`, JSON.stringify(saved));
  const total = document.querySelectorAll('[id^="topicCheck_"]').length;
  updateTopicChecklistBadge(total);
}

function updateTopicChecklistBadge(total) {
  const badge = document.getElementById('topicChecklistProgressBadge');
  const saved = JSON.parse(localStorage.getItem(`bc_topic_checklist_${currentTopicId}`) || '{}');
  const count = Object.keys(saved).length;
  if (badge) {
    badge.textContent = `${count} / ${total} Checked`;
    if (count === total && total > 0) {
      badge.style.color = 'var(--emerald)';
      badge.textContent = `🎉 All ${total} Complete!`;
    }
  }
}

/* --------------------------------------------------------------------------
   13. INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initSpeech();
  initThemeAndDrawer();
  renderTopicHero();
  renderVideoStudio();
  renderTopicVocabGrid();
  renderTopicChecklist();
  initPart1Flashcards();
  initPart2GapFill();
  initPart3Connect();
  initPart4Exam();

  if (window.AnimEngine && typeof AnimEngine.attachRipple === 'function') {
    AnimEngine.attachRipple();
  }
});
