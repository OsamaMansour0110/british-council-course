/* ==========================================================================
   BRITISH COUNCIL GRADED STORIES ENGINE (stories.html)
   Full Uncut Fiction • 4 Testing Games • Audio Narration • Interactive Tasks
   100% Parity with Course Sessions Design & Non-Luck Skill-Based Learning
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. GLOBAL STATE & VOCABULARY ADAPTER
   -------------------------------------------------------------------------- */
let urlParams = new URLSearchParams(window.location.search);
let currentStoryId = urlParams.get('story') || 'bad_blood';
if (typeof STORIES_DATA === 'undefined' || !STORIES_DATA[currentStoryId]) currentStoryId = 'bad_blood';

function convertToMasterVocab(wordsList) {
  return (wordsList || []).map((w, idx) => ({
    id: w.num || (idx + 1),
    word: w.word,
    pos: w.pos || 'vocabulary',
    cambridgeLevel: w.level || 'B1',
    pronunciation: w.pronunciation || '',
    definition: w.definition,
    b1Explain: w.arabic,
    sentence: w.example || ''
  }));
}

let MASTER_VOCAB = convertToMasterVocab(STORIES_DATA[currentStoryId].words);

/* --------------------------------------------------------------------------
   2. BRITISH SPEECH SYNTHESIS ENGINE
   -------------------------------------------------------------------------- */
let ukVoice = null;

function initSpeech() {
  if ('speechSynthesis' in window) {
    function pickVoice() {
      const voices = window.speechSynthesis.getVoices();
      ukVoice = voices.find(v => v.lang === 'en-GB' || v.name.includes('UK') || v.name.includes('British') || v.name.includes('George') || v.name.includes('Hazel'))
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

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJs(str) {
  if (!str) return '';
  return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* --------------------------------------------------------------------------
   3. STORY SWITCHING LOGIC
   -------------------------------------------------------------------------- */
function switchStory(storyId) {
  if (!STORIES_DATA[storyId]) return;
  currentStoryId = storyId;

  // Update URL without full reload
  const newUrl = `${window.location.pathname}?story=${storyId}`;
  window.history.pushState({ path: newUrl }, '', newUrl);

  MASTER_VOCAB = convertToMasterVocab(STORIES_DATA[currentStoryId].words);

  // Update tabs active state
  document.querySelectorAll('.hub-choice-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-story') === storyId);
  });

  // Re-render hero banner and all story components
  renderStoryHero();
  renderStoryReader();
  renderStoryQuotes();
  renderStoryVocabGrid();
  renderStoryTasks();

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
    AnimEngine.showToast(`Loaded: ${STORIES_DATA[storyId].title}`, 'success');
  }
}

/* --------------------------------------------------------------------------
   4. HERO PANEL (MIRRORS SESSIONS HERO PANEL 100%)
   -------------------------------------------------------------------------- */
function renderStoryHero() {
  const story = STORIES_DATA[currentStoryId];
  const banner = document.getElementById('storyHeroBanner');
  if (!banner || !story) return;

  banner.innerHTML = `
    <div>
      <div class="hero-tag-pills">
        <span class="hero-tag-pill pill-gold">ACTIVE STORY • ${escapeHtml(story.title.toUpperCase())}</span>
        <span class="hero-tag-pill pill-glass">CEFR ${escapeHtml(story.cefr)}</span>
        <span class="hero-tag-pill pill-glass">BRITISH COUNCIL FICTION</span>
      </div>
      <h1 class="hero-heading">${escapeHtml(story.title)} &amp; <span>Fiction Hub</span></h1>
      <p class="hero-subtitle-text">${escapeHtml(story.summary)}</p>
      <div class="hero-stats-row">
        <div class="hero-stat-cell">
          <span class="big-val">4</span>
          <span class="lbl">Card Games &amp; Tests</span>
        </div>
        <div class="hero-stat-cell">
          <span class="big-val">${MASTER_VOCAB.length}</span>
          <span class="lbl">Story Vocabulary</span>
        </div>
        <div class="hero-stat-cell">
          <span class="big-val">${story.paragraphs.length}</span>
          <span class="lbl">Uncut Paragraphs</span>
        </div>
      </div>
    </div>

    <!-- Quick Part Launcher (Exact match to Sessions hero) -->
    <div class="hero-quick-launcher">
      <span style="font-size:0.8rem; font-weight:800; color:#38bdf8; text-transform:uppercase;">The 4 Learning Parts:</span>
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
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(story.summary)}')">🔊</button>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   5. COMPLETE UNCUT STORY READER
   -------------------------------------------------------------------------- */
let isStoryNarrating = false;
let currentStoryParaIdx = 0;
let storyFontSize = 1.05;

function adjustStoryFontSize(delta) {
  storyFontSize = Math.max(0.85, Math.min(1.4, storyFontSize + delta));
  const container = document.getElementById('storyTextContainer');
  if (container) container.style.fontSize = `${storyFontSize}rem`;
}

function renderStoryReader() {
  const container = document.getElementById('storyTextContainer');
  const countBadge = document.getElementById('readerParaCount');
  const story = STORIES_DATA[currentStoryId];
  if (!container || !story) return;

  if (countBadge) countBadge.textContent = `${story.paragraphs.length} Paragraphs`;

  container.innerHTML = story.paragraphs.map((p, idx) => `
    <div class="story-para-row" id="storyParaRow_${idx}">
      <button class="para-audio-btn" onclick="speakStoryParagraph(${idx})" title="Listen to this paragraph in British English">
        🔊
      </button>
      <div class="story-para-text">
        <span class="para-num">${idx + 1}</span>
        ${escapeHtml(p)}
      </div>
    </div>
  `).join('');
}

function speakStoryParagraph(idx) {
  const story = STORIES_DATA[currentStoryId];
  if (!story || !story.paragraphs[idx]) return;

  document.querySelectorAll('.story-para-row').forEach(r => r.classList.remove('speaking-highlight'));
  const row = document.getElementById(`storyParaRow_${idx}`);
  if (row) {
    row.classList.add('speaking-highlight');
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  speakUK(story.paragraphs[idx]);
}

function toggleStoryNarration() {
  if (isStoryNarrating) {
    stopStoryNarration();
  } else {
    startStoryNarration();
  }
}

function startStoryNarration() {
  const story = STORIES_DATA[currentStoryId];
  if (!story || !story.paragraphs.length) return;

  isStoryNarrating = true;
  currentStoryParaIdx = 0;
  const btn = document.getElementById('btnStoryNarrate');
  if (btn) btn.innerHTML = '⏸️ Pause Narration';

  function playNext() {
    if (!isStoryNarrating || currentStoryParaIdx >= story.paragraphs.length) {
      stopStoryNarration();
      return;
    }

    const text = story.paragraphs[currentStoryParaIdx];
    document.querySelectorAll('.story-para-row').forEach(r => r.classList.remove('speaking-highlight'));
    const row = document.getElementById(`storyParaRow_${currentStoryParaIdx}`);
    if (row) {
      row.classList.add('speaking-highlight');
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const u = new SpeechSynthesisUtterance(text);
    if (ukVoice) u.voice = ukVoice;
    u.lang = 'en-GB';
    u.rate = 0.95;

    u.onend = () => {
      currentStoryParaIdx++;
      setTimeout(playNext, 450);
    };
    u.onerror = () => {
      stopStoryNarration();
    };

    window.speechSynthesis.speak(u);
  }

  playNext();
}

function stopStoryNarration() {
  isStoryNarrating = false;
  currentStoryParaIdx = 0;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.querySelectorAll('.story-para-row').forEach(r => r.classList.remove('speaking-highlight'));
  const btn = document.getElementById('btnStoryNarrate');
  if (btn) btn.innerHTML = '▶️ Read Aloud Story';
}

function copyStoryText() {
  const story = STORIES_DATA[currentStoryId];
  if (!story) return;
  const fullText = `${story.title}\n${story.author}\n\n${story.paragraphs.join('\n\n')}`;
  navigator.clipboard.writeText(fullText).then(() => {
    if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
      AnimEngine.showToast('Copied full story text to clipboard!', 'success');
    }
  });
}

/* --------------------------------------------------------------------------
   6. PART 1: 3D INTERACTIVE FLASHCARDS (TIMER, GESTURES, DUAL SIDES)
   -------------------------------------------------------------------------- */
let cardIdx = 0;
let cardTimer = null;
let cardTimerSecs = 15;
let cardTimerMax = 15;
let cardTimerPaused = false;
let streak = 0;
let cardSidePref = localStorage.getItem('bc_story_card_side_pref') || 'defFirst';
let masteredIds = new Set(JSON.parse(localStorage.getItem('bc_story_mastered_words') || '[]'));

function getCambridgeBadgeHTML(level) {
  const lvl = (level || 'B1').toUpperCase();
  let cls = 'cefr-b1';
  if (lvl === 'B2') cls = 'cefr-b2';
  else if (lvl === 'C1') cls = 'cefr-c1';
  else if (lvl === 'A2') cls = 'cefr-b1';
  return `<span class="cambridge-badge ${cls}">Cambridge ${lvl}</span>`;
}

function initPart1Flashcards() {
  const btnDef = document.getElementById('btnModeDefFirst');
  const btnWord = document.getElementById('btnModeWordFirst');
  const timerSelect = document.getElementById('flashcardTimerSelect');
  const btnPause = document.getElementById('btnPauseTimer');
  const btnMark = document.getElementById('btnMarkMastered');
  const btnPrev = document.getElementById('btnPrevWord');
  const btnNext = document.getElementById('btnNextWord');
  const btnFlip = document.getElementById('btnFlipCardManual');
  const btnShuffle = document.getElementById('btnShuffleWords');

  btnDef?.addEventListener('click', () => {
    cardSidePref = 'defFirst';
    localStorage.setItem('bc_story_card_side_pref', 'defFirst');
    btnDef.classList.add('active');
    btnWord?.classList.remove('active');
    flipAndRenderCard(true);
  });

  btnWord?.addEventListener('click', () => {
    cardSidePref = 'wordFirst';
    localStorage.setItem('bc_story_card_side_pref', 'wordFirst');
    btnWord.classList.add('active');
    btnDef?.classList.remove('active');
    flipAndRenderCard(true);
  });

  if (cardSidePref === 'wordFirst') {
    btnWord?.classList.add('active');
    btnDef?.classList.remove('active');
  }

  timerSelect?.addEventListener('change', (e) => {
    cardTimerMax = parseInt(e.target.value, 10);
    resetSpeedTimer();
  });

  btnPause?.addEventListener('click', () => {
    cardTimerPaused = !cardTimerPaused;
    btnPause.textContent = cardTimerPaused ? '▶ Resume' : '⏸ Pause';
    if (!cardTimerPaused) resetSpeedTimer();
    else clearInterval(cardTimer);
  });

  btnMark?.addEventListener('click', toggleMastered);

  btnPrev?.addEventListener('click', () => {
    cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
    flipAndRenderCard();
  });

  btnNext?.addEventListener('click', () => {
    cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
    flipAndRenderCard();
  });

  btnFlip?.addEventListener('click', () => {
    document.getElementById('cardFlipper')?.classList.toggle('flipped');
  });

  document.getElementById('cardViewport')?.addEventListener('click', () => {
    document.getElementById('cardFlipper')?.classList.toggle('flipped');
  });

  btnShuffle?.addEventListener('click', () => {
    shuffleArray(MASTER_VOCAB);
    cardIdx = 0;
    flipAndRenderCard(true);
    if (window.AnimEngine) AnimEngine.showToast('Story cards shuffled!', 'info');
  });

  // Audio Buttons
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

  initCardSwipeGestures();
  flipAndRenderCard(true);
}

function flipAndRenderCard(keepSide = false) {
  if (!MASTER_VOCAB || !MASTER_VOCAB.length) return;
  if (cardIdx >= MASTER_VOCAB.length) cardIdx = 0;
  if (cardIdx < 0) cardIdx = MASTER_VOCAB.length - 1;

  const item = MASTER_VOCAB[cardIdx];
  const flipper = document.getElementById('cardFlipper');
  if (!flipper) return;

  if (!keepSide) flipper.classList.remove('flipped');

  // Step Badge
  const stepBadge = document.getElementById('cardStepBadge');
  if (stepBadge) stepBadge.textContent = `${cardIdx + 1} / ${MASTER_VOCAB.length}`;

  const frontPlane = document.getElementById('cardPlaneFront');
  const backPlane = document.getElementById('cardBackPlane');
  if (!frontPlane || !backPlane) return;

  if (cardSidePref === 'defFirst') {
    frontPlane.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:1rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted);">#${cardIdx + 1} • Story Vocab #${item.id}</span>
        <div style="display:flex; gap:0.5rem;">
          ${getCambridgeBadgeHTML(item.cambridgeLevel)}
          <span class="topic-category-badge">📚 STORY VOCABULARY</span>
        </div>
      </div>
      <div style="font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--bc-blue); letter-spacing:0.05em; margin-bottom:0.4rem;">
        📖 CAMBRIDGE DEFINITION (GUESS WORD):
      </div>
      <div class="card-lead-text" style="font-size:1.45rem; line-height:1.45; font-weight:800; color:var(--text-main); margin-bottom:1rem;">
        ${escapeHtml(item.definition)}
      </div>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:auto;">
        💡 Tap or spacebar to reveal the word &amp; Arabic translation
      </div>
    `;

    backPlane.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:0.75rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted);">#${cardIdx + 1} • Story Answer</span>
        <div style="display:flex; gap:0.5rem;">
          ${getCambridgeBadgeHTML(item.cambridgeLevel)}
          <span class="topic-category-badge">${masteredIds.has(item.id) ? '★ MASTERED' : '☆ IN PROGRESS'}</span>
        </div>
      </div>
      <div class="card-lead-text" style="font-size:2.2rem; font-weight:900; color:var(--bc-blue); margin-bottom:0.25rem;">
        ${escapeHtml(item.word)}
      </div>
      <div style="font-size:1.25rem; font-weight:800; color:var(--emerald); margin-bottom:0.85rem;" dir="rtl">
        ${escapeHtml(item.b1Explain)}
      </div>
      <div class="card-sentence-box" style="background:var(--bg-subtle); padding:0.85rem 1rem; border-radius:var(--radius-sm); border-left:3px solid var(--bc-blue); font-size:0.92rem; font-style:italic; line-height:1.5;">
        “${escapeHtml(item.sentence)}”
      </div>
    `;
  } else {
    frontPlane.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:1rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted);">#${cardIdx + 1} • Story Vocab #${item.id}</span>
        <div style="display:flex; gap:0.5rem;">
          ${getCambridgeBadgeHTML(item.cambridgeLevel)}
          <span class="topic-category-badge">📚 STORY VOCABULARY</span>
        </div>
      </div>
      <div class="card-lead-text" style="font-size:2.4rem; font-weight:900; color:var(--bc-blue); margin-bottom:0.4rem;">
        ${escapeHtml(item.word)}
      </div>
      <div style="font-size:1.3rem; font-weight:800; color:var(--emerald); margin-bottom:1rem;" dir="rtl">
        ${escapeHtml(item.b1Explain)}
      </div>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:auto;">
        💡 Tap or spacebar to reveal definition &amp; example sentence
      </div>
    `;

    backPlane.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:0.75rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted);">#${cardIdx + 1} • Cambridge Meaning</span>
        <div style="display:flex; gap:0.5rem;">
          ${getCambridgeBadgeHTML(item.cambridgeLevel)}
          <span class="topic-category-badge">${masteredIds.has(item.id) ? '★ MASTERED' : '☆ IN PROGRESS'}</span>
        </div>
      </div>
      <div class="card-lead-text" style="font-size:1.3rem; font-weight:700; color:var(--text-main); margin-bottom:1rem; line-height:1.45;">
        ${escapeHtml(item.definition)}
      </div>
      <div class="card-sentence-box" style="background:var(--bg-subtle); padding:0.85rem 1rem; border-radius:var(--radius-sm); border-left:3px solid var(--bc-blue); font-size:0.92rem; font-style:italic; line-height:1.5;">
        “${escapeHtml(item.sentence)}”
      </div>
    `;
  }

  updateMasteredBtn();
  resetSpeedTimer();
}

function updateMasteredBtn() {
  const btn = document.getElementById('btnMarkMastered');
  const countSpan = document.getElementById('masteredBadge');
  const cur = MASTER_VOCAB[cardIdx];

  if (countSpan) countSpan.textContent = `${masteredIds.size} / ${MASTER_VOCAB.length} Mastered`;
  if (btn && cur) {
    if (masteredIds.has(cur.id)) {
      btn.innerHTML = '★ Mastered';
      btn.style.background = 'rgba(16, 185, 129, 0.15)';
      btn.style.color = 'var(--emerald)';
      btn.style.borderColor = 'var(--emerald)';
    } else {
      btn.innerHTML = '☆ Mark Mastered';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-main)';
      btn.style.borderColor = 'var(--border-light)';
    }
  }
}

function toggleMastered() {
  const cur = MASTER_VOCAB[cardIdx];
  if (!cur) return;

  if (masteredIds.has(cur.id)) {
    masteredIds.delete(cur.id);
  } else {
    masteredIds.add(cur.id);
    streak++;
    updateStreak();
    if (window.AnimEngine) AnimEngine.showToast(`Mastered: "${cur.word}"! Streak: ${streak} 🔥`, 'success');
  }

  localStorage.setItem('bc_story_mastered_words', JSON.stringify([...masteredIds]));
  updateMasteredBtn();
}

function updateStreak() {
  const el = document.getElementById('streakBadge');
  if (el) el.textContent = `🔥 Streak: ${streak}`;
}

function resetSpeedTimer() {
  clearInterval(cardTimer);
  const display = document.getElementById('flashcardTimerDisplay');
  if (cardTimerMax === 0) {
    if (display) display.textContent = '⏱ Off';
    return;
  }

  cardTimerSecs = cardTimerMax;
  if (display) display.textContent = `⏱ ${cardTimerSecs}s`;

  if (cardTimerPaused) return;

  cardTimer = setInterval(() => {
    cardTimerSecs--;
    if (display) display.textContent = `⏱ ${cardTimerSecs}s`;
    if (cardTimerSecs <= 0) {
      clearInterval(cardTimer);
      cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
      flipAndRenderCard();
    }
  }, 1000);
}

function initCardSwipeGestures() {
  const vp = document.getElementById('cardViewport');
  if (!vp) return;

  let touchStartX = 0;
  let touchStartY = 0;

  vp.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  vp.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
        flipAndRenderCard();
      } else {
        cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
        flipAndRenderCard();
      }
    } else if (Math.abs(diffY) > 45 && Math.abs(diffY) > Math.abs(diffX)) {
      document.getElementById('cardFlipper')?.classList.toggle('flipped');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   7. PART 2: SENTENCE GAP-FILL & SOLVING CHALLENGE
   Replaces the blind luck tile flip game with real skill, solving & recall!
   -------------------------------------------------------------------------- */
let gapfillIdx = 0;
let gapfillDeck = [];
let gapfillSolvedCount = 0;
let gapfillStreak = 0;

function initPart2GapFill() {
  gapfillDeck = [...MASTER_VOCAB].filter(v => v.sentence && v.sentence.trim().length > 10);
  if (gapfillDeck.length === 0) gapfillDeck = [...MASTER_VOCAB];
  shuffleArray(gapfillDeck);

  gapfillIdx = 0;
  gapfillSolvedCount = 0;
  gapfillStreak = 0;

  document.getElementById('btnGapfillShuffle')?.addEventListener('click', () => {
    shuffleArray(gapfillDeck);
    gapfillIdx = 0;
    renderGapfillQuestion();
    if (window.AnimEngine) AnimEngine.showToast('Sentence questions shuffled!', 'info');
  });

  document.getElementById('btnGapfillNext')?.addEventListener('click', () => {
    gapfillIdx = (gapfillIdx + 1) % gapfillDeck.length;
    renderGapfillQuestion();
  });

  renderGapfillQuestion();
}

function renderGapfillQuestion() {
  if (!gapfillDeck.length) return;
  if (gapfillIdx >= gapfillDeck.length) gapfillIdx = 0;

  const item = gapfillDeck[gapfillIdx];
  const counter = document.getElementById('gapfillCounter');
  const scoreBadge = document.getElementById('gapfillScoreBadge');
  const streakBadge = document.getElementById('gapfillStreakBadge');
  const sentenceBox = document.getElementById('gapfillSentenceDisplay');
  const hintBox = document.getElementById('gapfillHintDisplay');
  const optionsGrid = document.getElementById('gapfillOptionsGrid');
  const feedback = document.getElementById('gapfillFeedbackPane');

  if (counter) counter.textContent = `Sentence ${gapfillIdx + 1} of ${gapfillDeck.length}`;
  if (scoreBadge) scoreBadge.textContent = `Solved: ${gapfillSolvedCount} / ${gapfillDeck.length}`;
  if (streakBadge) streakBadge.textContent = `Streak: ${gapfillStreak} 🔥`;
  if (feedback) feedback.style.display = 'none';

  // Construct sentence with blank
  const regex = new RegExp(`\\b${item.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  let blankSentence = item.sentence;
  if (regex.test(blankSentence)) {
    blankSentence = blankSentence.replace(regex, `<span class="gapfill-blank" id="targetBlank">_______</span>`);
  } else {
    blankSentence = `"${escapeHtml(item.sentence)}" <br><small style="color:var(--text-muted); font-size:0.85rem;">[Context word: <span class="gapfill-blank" id="targetBlank">_______</span>]</small>`;
  }

  if (sentenceBox) {
    sentenceBox.innerHTML = `"${blankSentence}"`;
  }

  if (hintBox) {
    hintBox.innerHTML = `
      <span class="cefr-badge" style="font-size:0.75rem; background:rgba(0,102,245,0.1); color:var(--bc-blue); padding:0.2rem 0.5rem; border-radius:4px; font-weight:800;">Cambridge ${item.cambridgeLevel || 'B1'}</span>
      <span>💡 <strong>Clue:</strong> ${escapeHtml(item.definition)} (${escapeHtml(item.b1Explain)})</span>
    `;
  }

  // Generate 4 distinct options (1 correct, 3 distractors)
  const distractors = MASTER_VOCAB
    .filter(v => v.id !== item.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const choices = [item, ...distractors];
  shuffleArray(choices);

  if (optionsGrid) {
    optionsGrid.innerHTML = choices.map(opt => `
      <button type="button" class="gapfill-option-btn" data-id="${opt.id}">
        <span>${escapeHtml(opt.word)}</span>
        <span style="font-size:0.8rem; opacity:0.6;">👉</span>
      </button>
    `).join('');

    optionsGrid.querySelectorAll('.gapfill-option-btn').forEach(btn => {
      btn.addEventListener('click', () => onGapfillChoiceSelected(btn, item, choices));
    });
  }
}

function onGapfillChoiceSelected(selectedBtn, correctItem, allChoices) {
  const chosenId = parseInt(selectedBtn.getAttribute('data-id'), 10);
  const optionsGrid = document.getElementById('gapfillOptionsGrid');
  const blank = document.getElementById('targetBlank');
  const feedback = document.getElementById('gapfillFeedbackPane');
  if (!optionsGrid) return;

  // Disable all options
  optionsGrid.querySelectorAll('.gapfill-option-btn').forEach(b => {
    b.disabled = true;
    const bId = parseInt(b.getAttribute('data-id'), 10);
    if (bId === correctItem.id) {
      b.classList.add('correct');
    }
  });

  if (chosenId === correctItem.id) {
    selectedBtn.classList.add('correct');
    if (blank) {
      blank.textContent = correctItem.word;
      blank.style.borderColor = 'var(--emerald)';
      blank.style.color = 'var(--emerald)';
      blank.style.background = 'rgba(16, 185, 129, 0.12)';
    }

    gapfillSolvedCount++;
    gapfillStreak++;
    speakUK(correctItem.word);

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(16, 185, 129, 0.1)';
      feedback.style.border = '1px solid var(--emerald)';
      feedback.style.color = 'var(--emerald)';
      feedback.innerHTML = `
        <strong>🎉 Brilliant! Correct Answer!</strong><br>
        <span>"${escapeHtml(correctItem.word)}" fits perfectly: <em>${escapeHtml(correctItem.definition)}</em></span>
      `;
    }

    if (window.AnimEngine) AnimEngine.showToast(`Correct! +1 Streak (${gapfillStreak} 🔥)`, 'success');

    // Auto advance after 1.8 seconds
    setTimeout(() => {
      gapfillIdx = (gapfillIdx + 1) % gapfillDeck.length;
      renderGapfillQuestion();
    }, 1800);
  } else {
    selectedBtn.classList.add('wrong');
    gapfillStreak = 0;
    if (blank) {
      blank.textContent = correctItem.word;
      blank.style.borderColor = 'var(--bc-blue)';
      blank.style.color = 'var(--bc-blue)';
    }

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(239, 68, 68, 0.1)';
      feedback.style.border = '1px solid #ef4444';
      feedback.style.color = '#dc2626';
      feedback.innerHTML = `
        <strong>Not quite.</strong> The correct word is <strong>"${escapeHtml(correctItem.word)}"</strong> (${escapeHtml(correctItem.b1Explain)}).<br>
        <span>Meaning: <em>${escapeHtml(correctItem.definition)}</em></span>
      `;
    }

    if (window.AnimEngine) AnimEngine.showToast('Incorrect - review the correct word', 'error');
  }

  // Update badges
  const scoreBadge = document.getElementById('gapfillScoreBadge');
  const streakBadge = document.getElementById('gapfillStreakBadge');
  if (scoreBadge) scoreBadge.textContent = `Solved: ${gapfillSolvedCount} / ${gapfillDeck.length}`;
  if (streakBadge) streakBadge.textContent = `Streak: ${gapfillStreak} 🔥`;
}

/* --------------------------------------------------------------------------
   8. PART 3: CONNECT & MATCH (WORD-TO-DEFINITION MATCHING TEST)
   -------------------------------------------------------------------------- */
let connectSelectedWord = null;
let connectSelectedDef = null;
let connectPairsSolved = 0;
let connectCurrentSet = [];

function initPart3Connect() {
  document.getElementById('btnRefreshConnect')?.addEventListener('click', loadConnectSet);
  loadConnectSet();
}

function loadConnectSet() {
  const wordsCol = document.getElementById('connectWordsCol');
  const defsCol = document.getElementById('connectDefsCol');
  const alertBox = document.getElementById('connectSuccessAlert');
  const scoreBadge = document.getElementById('connectScoreBadge');
  if (!wordsCol || !defsCol || !MASTER_VOCAB || !MASTER_VOCAB.length) return;

  if (alertBox) alertBox.style.display = 'none';
  connectSelectedWord = null;
  connectSelectedDef = null;
  connectPairsSolved = 0;

  if (scoreBadge) scoreBadge.textContent = `Connected: 0 / 6`;

  // Select 6 random items
  const pool = [...MASTER_VOCAB];
  shuffleArray(pool);
  connectCurrentSet = pool.slice(0, 6);

  const wordsDeck = [...connectCurrentSet];
  const defsDeck = [...connectCurrentSet];
  shuffleArray(wordsDeck);
  shuffleArray(defsDeck);

  wordsCol.innerHTML = '<span class="connect-col-title">Column 1: Story Words</span>';
  defsCol.innerHTML = '<span class="connect-col-title">Column 2: English Definitions</span>';

  wordsDeck.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'connect-item-card';
    btn.dataset.id = item.id;
    btn.innerHTML = `
      <span style="font-weight:700; color:var(--text-main);">${escapeHtml(item.word)}</span>
      <span class="cefr-badge" style="font-size:0.7rem; background:rgba(0,102,245,0.08); color:var(--bc-blue); padding:0.15rem 0.45rem; border-radius:4px;">${item.cambridgeLevel || 'B1'}</span>
    `;
    btn.addEventListener('click', () => onConnectWordClick(btn, item));
    wordsCol.appendChild(btn);
  });

  defsDeck.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'connect-item-card';
    btn.dataset.id = item.id;
    btn.innerHTML = `
      <span style="font-size:0.88rem; color:var(--text-body); line-height:1.4;">${escapeHtml(item.definition)}</span>
    `;
    btn.addEventListener('click', () => onConnectDefClick(btn, item));
    defsCol.appendChild(btn);
  });
}

function onConnectWordClick(btn, item) {
  if (btn.classList.contains('locked')) return;

  document.querySelectorAll('#connectWordsCol .connect-item-card').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  connectSelectedWord = { btn, item };

  speakUK(item.word);
  checkConnectMatch();
}

function onConnectDefClick(btn, item) {
  if (btn.classList.contains('locked')) return;

  document.querySelectorAll('#connectDefsCol .connect-item-card').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  connectSelectedDef = { btn, item };

  checkConnectMatch();
}

function checkConnectMatch() {
  if (!connectSelectedWord || !connectSelectedDef) return;

  const wordObj = connectSelectedWord;
  const defObj = connectSelectedDef;

  if (wordObj.item.id === defObj.item.id) {
    // MATCH FOUND
    wordObj.btn.classList.remove('selected');
    defObj.btn.classList.remove('selected');
    wordObj.btn.classList.add('locked');
    defObj.btn.classList.add('locked');

    wordObj.btn.innerHTML += ` <span style="color:var(--emerald); font-weight:800;">✓</span>`;
    defObj.btn.innerHTML += ` <span style="color:var(--emerald); font-weight:800;">✓</span>`;

    connectPairsSolved++;
    const scoreBadge = document.getElementById('connectScoreBadge');
    if (scoreBadge) scoreBadge.textContent = `Connected: ${connectPairsSolved} / ${connectCurrentSet.length}`;

    connectSelectedWord = null;
    connectSelectedDef = null;

    if (window.AnimEngine) AnimEngine.showToast(`Matched: "${wordObj.item.word}"!`, 'success');

    if (connectPairsSolved === connectCurrentSet.length) {
      const alertBox = document.getElementById('connectSuccessAlert');
      if (alertBox) alertBox.style.display = 'block';
      if (window.AnimEngine) AnimEngine.triggerConfetti();
    }
  } else {
    // MISMATCH
    wordObj.btn.classList.add('wrong-shake');
    defObj.btn.classList.add('wrong-shake');

    setTimeout(() => {
      wordObj.btn.classList.remove('wrong-shake', 'selected');
      defObj.btn.classList.remove('wrong-shake', 'selected');
      connectSelectedWord = null;
      connectSelectedDef = null;
    }, 600);
  }
}

/* --------------------------------------------------------------------------
   9. PART 4: ALL-WORDS COMPREHENSIVE FINAL EXAM
   -------------------------------------------------------------------------- */
let examCurrentIdx = 0;
let examScore = 0;
let examQuestionsList = [];

function initPart4Exam() {
  document.getElementById('btnExamPrev')?.addEventListener('click', () => {
    if (examCurrentIdx > 0) {
      examCurrentIdx--;
      renderExamQuestion();
    }
  });

  document.getElementById('btnExamNext')?.addEventListener('click', () => {
    if (examCurrentIdx < examQuestionsList.length - 1) {
      examCurrentIdx++;
      renderExamQuestion();
    } else {
      finishExam();
    }
  });

  document.getElementById('btnRestartExam')?.addEventListener('click', startFullExam);
  startFullExam();
}

function startFullExam() {
  examCurrentIdx = 0;
  examScore = 0;
  examQuestionsList = [...MASTER_VOCAB].map(item => {
    const distractors = MASTER_VOCAB
      .filter(x => x.id !== item.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const options = [item, ...distractors];
    shuffleArray(options);
    return {
      item,
      options,
      userAnswerId: null,
      isCorrect: false
    };
  });

  const quizBox = document.getElementById('examActiveQuizBox');
  const resultsBox = document.getElementById('examResultsBox');
  if (quizBox) quizBox.style.display = 'block';
  if (resultsBox) resultsBox.style.display = 'none';

  renderExamQuestion();
}

function renderExamQuestion() {
  if (!examQuestionsList.length) return;
  const q = examQuestionsList[examCurrentIdx];

  const qIdxDisplay = document.getElementById('testQuestionIndex');
  const scoreDisplay = document.getElementById('testScoreDisplay');
  const leadPrompt = document.getElementById('testLeadPrompt');
  const choicesList = document.getElementById('testChoicesList');
  const feedbackPane = document.getElementById('examFeedbackPane');
  const btnNext = document.getElementById('btnExamNext');

  if (qIdxDisplay) qIdxDisplay.textContent = `Question ${examCurrentIdx + 1} of ${examQuestionsList.length}`;
  if (scoreDisplay) scoreDisplay.textContent = `Score: ${examScore}`;
  if (btnNext) btnNext.textContent = (examCurrentIdx === examQuestionsList.length - 1) ? 'Finish & View Score 🏆' : 'Next Question ▶';

  if (leadPrompt) {
    leadPrompt.innerHTML = `
      <div style="font-size:0.85rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.4rem;">
        What vocabulary word matches this definition?
      </div>
      <div style="font-size:1.35rem; color:var(--text-main); font-weight:700;">
        "${escapeHtml(q.item.definition)}"
      </div>
      <div style="font-size:0.92rem; color:var(--emerald); margin-top:0.4rem;" dir="rtl">
        💡 ترجمة عربية مساعدة: <strong>${escapeHtml(q.item.b1Explain)}</strong>
      </div>
    `;
  }

  if (choicesList) {
    choicesList.innerHTML = q.options.map(opt => {
      let extraClass = '';
      if (q.userAnswerId !== null) {
        if (opt.id === q.item.id) extraClass = 'correct';
        else if (opt.id === q.userAnswerId) extraClass = 'wrong';
      }
      return `
        <button type="button" class="test-choice-btn ${extraClass}" data-id="${opt.id}" ${q.userAnswerId !== null ? 'disabled' : ''}>
          <span>${escapeHtml(opt.word)}</span>
          <span style="font-size:0.8rem; opacity:0.6;">(${escapeHtml(opt.cambridgeLevel || 'B1')})</span>
        </button>
      `;
    }).join('');

    choicesList.querySelectorAll('.test-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => onExamChoiceSelected(btn, q));
    });
  }

  if (feedbackPane) {
    if (q.userAnswerId !== null) {
      feedbackPane.style.display = 'block';
      if (q.isCorrect) {
        feedbackPane.style.background = 'rgba(16, 185, 129, 0.1)';
        feedbackPane.style.color = 'var(--emerald)';
        feedbackPane.innerHTML = `✓ <strong>Spot on!</strong> "${escapeHtml(q.item.word)}" means: <em>${escapeHtml(q.item.definition)}</em>`;
      } else {
        feedbackPane.style.background = 'rgba(239, 68, 68, 0.1)';
        feedbackPane.style.color = '#dc2626';
        feedbackPane.innerHTML = `✗ <strong>Incorrect.</strong> The correct word is <strong>"${escapeHtml(q.item.word)}"</strong> (${escapeHtml(q.item.b1Explain)}).`;
      }
    } else {
      feedbackPane.style.display = 'none';
    }
  }
}

function onExamChoiceSelected(btn, q) {
  const chosenId = parseInt(btn.getAttribute('data-id'), 10);
  q.userAnswerId = chosenId;
  q.isCorrect = (chosenId === q.item.id);

  if (q.isCorrect) {
    examScore++;
    speakUK(q.item.word);
  }

  renderExamQuestion();
}

function finishExam() {
  const quizBox = document.getElementById('examActiveQuizBox');
  const resultsBox = document.getElementById('examResultsBox');
  const finalScoreEl = document.getElementById('examFinalScore');
  const detailEl = document.getElementById('examScoreDetail');

  if (quizBox) quizBox.style.display = 'none';
  if (resultsBox) resultsBox.style.display = 'block';

  const total = examQuestionsList.length;
  const pct = Math.round((examScore / total) * 100);

  if (finalScoreEl) finalScoreEl.textContent = `${pct}%`;
  if (detailEl) {
    detailEl.innerHTML = `You answered <strong>${examScore} out of ${total}</strong> questions correctly across the full story vocabulary evaluation.`;
  }

  if (window.AnimEngine) AnimEngine.triggerConfetti();
}

/* --------------------------------------------------------------------------
   10. MEMORABLE QUOTES & EXPRESSIONS
   -------------------------------------------------------------------------- */
function renderStoryQuotes() {
  const story = STORIES_DATA[currentStoryId];
  const grid = document.getElementById('storyQuotesGrid');
  if (!grid || !story) return;

  grid.innerHTML = (story.quotes || []).map(q => `
    <div class="quote-item-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--bc-blue); background:rgba(0,102,245,0.08); padding:0.2rem 0.5rem; border-radius:var(--radius-sm);">
          ${escapeHtml(q.group)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.eng)}')">🔊</button>
      </div>
      <div class="quote-en-text">"${escapeHtml(q.eng)}"</div>
      <div class="quote-ar-text">${escapeHtml(q.ara)}</div>
      <div style="font-size:0.8rem; color:var(--text-muted); font-style:normal; margin-top:0.2rem;">
        <strong>Context:</strong> ${escapeHtml(q.context)}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   11. GRADED STORY VOCABULARY MATRIX
   -------------------------------------------------------------------------- */
let storyCefrFilter = 'ALL';
let storySearchTerm = '';

function setStoryCefrFilter(level) {
  storyCefrFilter = level;
  document.querySelectorAll('#storyCefrFilterBar .cefr-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-level') === level);
  });
  renderStoryVocabGrid();
}

function onStoryVocabSearch(query) {
  storySearchTerm = (query || '').trim().toLowerCase();
  renderStoryVocabGrid();
}

function renderStoryVocabGrid() {
  const grid = document.getElementById('storyVocabGrid');
  const story = STORIES_DATA[currentStoryId];
  if (!grid || !story) return;

  const filtered = story.words.filter(w => {
    const matchesLevel = (storyCefrFilter === 'ALL' || w.level === storyCefrFilter);
    const matchesSearch = !storySearchTerm ||
      w.word.toLowerCase().includes(storySearchTerm) ||
      (w.arabic && w.arabic.includes(storySearchTerm)) ||
      (w.definition && w.definition.toLowerCase().includes(storySearchTerm));
    return matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:2.5rem; background:var(--bg-surface); border-radius:var(--radius-md); border:1px dashed var(--border-light); color:var(--text-muted);">
        <span style="font-size:2rem; display:block; margin-bottom:0.5rem;">🔍</span>
        No vocabulary matches found for "<strong>${escapeHtml(storySearchTerm)}</strong>".
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
            <span class="cefr-level-badge ${lvl}">${w.level}</span>
          </div>
          <button class="audio-circle-btn" onclick="speakUK('${escapeJs(w.word)}')">🔊</button>
        </div>

        <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0;">${escapeHtml(w.word)}</h4>
        <div class="arabic-translation-box">${escapeHtml(w.arabic)}</div>

        <p style="font-size:0.88rem; color:var(--text-body); line-height:1.5; margin:0;">
          <strong>Definition:</strong> ${escapeHtml(w.definition)}
        </p>

        <div style="background:var(--bg-subtle); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); border-left:3px solid var(--bc-blue); font-size:0.84rem; font-style:italic; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
          <span style="color:var(--text-main);">"${escapeHtml(w.example)}"</span>
          <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(w.example)}')">🔊</button>
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   12. INTERACTIVE COMPREHENSION TASKS
   -------------------------------------------------------------------------- */
function renderStoryTasks() {
  const container = document.getElementById('storyTasksContainer');
  const story = STORIES_DATA[currentStoryId];
  if (!container || !story) return;

  container.innerHTML = (story.tasks || []).map((task, tIdx) => {
    if (task.type === 'matching') {
      return `
        <div class="comprehension-card" id="storyTask_${tIdx}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">TASK ${tIdx + 1} • MATCHING</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(task.title)}</h4>
            </div>
            <button type="button" class="btn-solid-blue" style="font-size:0.8rem; padding:0.35rem 0.85rem;" onclick="evaluateStoryMatchTask(${tIdx})">
              Check Answers
            </button>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">${escapeHtml(task.instructions)}</p>

          <div style="display:flex; flex-direction:column; gap:0.65rem;">
            ${task.questions.map((q, qIdx) => `
              <div class="task-q-row" id="matchRow_${tIdx}_${qIdx}">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                  <strong style="color:var(--text-main); font-size:0.95rem;">${q.num}. ${escapeHtml(q.term)}</strong>
                  <select class="filter-input task-select" id="matchSelect_${tIdx}_${qIdx}" data-correct="${escapeHtml(q.meaning)}" style="max-width:380px;">
                    <option value="">-- Choose matching definition --</option>
                    ${(q.options || []).map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('')}
                  </select>
                </div>
                <div class="task-feedback-msg" id="matchFeedback_${tIdx}_${qIdx}" style="display:none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (task.type === 'true_false') {
      return `
        <div class="comprehension-card" id="storyTask_${tIdx}">
          <div style="margin-bottom:0.75rem;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">TASK ${tIdx + 1} • TRUE / FALSE</span>
            <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(task.title)}</h4>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">${escapeHtml(task.instructions)}</p>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${task.questions.map((q, qIdx) => `
              <div class="task-tf-row" id="tfRow_${tIdx}_${qIdx}">
                <div style="font-size:0.95rem; font-weight:600; color:var(--text-main); margin-bottom:0.4rem;">
                  ${q.num}. ${escapeHtml(q.statement)}
                </div>
                <div style="display:flex; gap:0.6rem; align-items:center;">
                  <button type="button" class="btn-outline-subtle tf-choice-btn" onclick="checkTFChoice(${tIdx}, ${qIdx}, 'True', '${escapeJs(q.correct)}')">True</button>
                  <button type="button" class="btn-outline-subtle tf-choice-btn" onclick="checkTFChoice(${tIdx}, ${qIdx}, 'False', '${escapeJs(q.correct)}')">False</button>
                  <span id="tfFeedback_${tIdx}_${qIdx}" style="font-size:0.85rem; font-weight:700; margin-left:0.5rem;"></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    return '';
  }).join('');
}

function evaluateStoryMatchTask(tIdx) {
  const taskCard = document.getElementById(`storyTask_${tIdx}`);
  if (!taskCard) return;

  const selects = taskCard.querySelectorAll('.task-select');
  let score = 0;

  selects.forEach(sel => {
    const chosen = sel.value;
    const correct = sel.getAttribute('data-correct');
    const feedback = sel.parentElement.nextElementSibling;

    if (chosen && chosen === correct) {
      score++;
      sel.style.borderColor = 'var(--emerald)';
      sel.style.background = 'rgba(16, 185, 129, 0.08)';
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.color = 'var(--emerald)';
        feedback.textContent = '✓ Correct';
      }
    } else {
      sel.style.borderColor = '#ef4444';
      sel.style.background = 'rgba(239, 68, 68, 0.08)';
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.color = '#dc2626';
        feedback.textContent = `✗ Expected: "${correct}"`;
      }
    }
  });

  if (window.AnimEngine) {
    if (score === selects.length) {
      AnimEngine.showToast(`Perfect! ${score}/${selects.length} matches correct! 🎉`, 'success');
      AnimEngine.triggerConfetti();
    } else {
      AnimEngine.showToast(`${score}/${selects.length} correct. Review errors!`, 'info');
    }
  }
}

function checkTFChoice(tIdx, qIdx, chosen, correct) {
  const feedback = document.getElementById(`tfFeedback_${tIdx}_${qIdx}`);
  const row = document.getElementById(`tfRow_${tIdx}_${qIdx}`);
  if (!feedback || !row) return;

  const btns = row.querySelectorAll('.tf-choice-btn');
  btns.forEach(b => b.classList.remove('active', 'correct', 'wrong'));

  if (chosen.toLowerCase() === correct.toLowerCase()) {
    feedback.style.color = 'var(--emerald)';
    feedback.textContent = '✓ Correct!';
    if (window.AnimEngine) AnimEngine.showToast('Spot on!', 'success');
  } else {
    feedback.style.color = '#dc2626';
    feedback.textContent = `✗ Incorrect. Correct is ${correct}.`;
    if (window.AnimEngine) AnimEngine.showToast('Incorrect', 'error');
  }
}

/* --------------------------------------------------------------------------
   13. BOOTSTRAP ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initSpeech();

  // Toolbar Voice Button
  document.getElementById('britishAccentTestBtn')?.addEventListener('click', () => {
    speakUK('British Council Graded Stories Hub: Practice fiction and testing games.');
  });

  // Mobile Drawer Toggle
  const btnToggle = document.getElementById('btnMobileToggle');
  const drawer = document.getElementById('mobileDrawerMenu');
  const btnClose = document.getElementById('btnDrawerClose');

  btnToggle?.addEventListener('click', () => {
    drawer?.classList.add('open');
  });

  btnClose?.addEventListener('click', () => {
    drawer?.classList.remove('open');
  });

  // Theme Toggle
  const themeBtn = document.getElementById('toggleThemeBtn');
  themeBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('bc_theme', nextTheme);
    const sym = document.getElementById('themeSymbol');
    if (sym) sym.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  });

  const savedTheme = localStorage.getItem('bc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const sym = document.getElementById('themeSymbol');
  if (sym) sym.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Render Story Page
  renderStoryHero();
  renderStoryReader();
  initPart1Flashcards();
  initPart2GapFill();
  initPart3Connect();
  initPart4Exam();
  renderStoryQuotes();
  renderStoryVocabGrid();
  renderStoryTasks();
});
