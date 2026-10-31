/* ==========================================================================
   BRITISH COUNCIL INTERMEDIATE B1 COURSEWARE - APPLICATION ENGINE
   Modular Architecture • Hot Animations • Touch Gestures • Voice Synthesis
   ========================================================================== */

/* --------------------------------------------------------------------------
   GLOBAL STATE
   -------------------------------------------------------------------------- */
const urlSessionParam = new URLSearchParams(window.location.search).get('session');
if (urlSessionParam) {
  localStorage.setItem('bc_active_session', urlSessionParam);
}
let currentSessionId = localStorage.getItem('bc_active_session') || '2';
let MASTER_VOCAB = (currentSessionId === '1') ? VOCAB_SESSION_1
  : (currentSessionId === '2') ? VOCAB_SESSION_2
  : (currentSessionId === '3') ? VOCAB_SESSION_3
  : (currentSessionId === '12') ? VOCAB_SESSION_12
  : (currentSessionId === '13') ? (typeof VOCAB_SESSION_13 !== 'undefined' ? VOCAB_SESSION_13 : VOCAB_SESSION_10)
  : (currentSessionId === '14') ? (typeof VOCAB_SESSION_14 !== 'undefined' ? VOCAB_SESSION_14 : VOCAB_SESSION_10)
  : (currentSessionId === '15') ? (typeof VOCAB_SESSION_15 !== 'undefined' ? VOCAB_SESSION_15 : VOCAB_SESSION_10)
  : (currentSessionId === '16') ? (typeof VOCAB_SESSION_16 !== 'undefined' ? VOCAB_SESSION_16 : VOCAB_SESSION_10)
  : (currentSessionId === '17') ? (typeof VOCAB_SESSION_17 !== 'undefined' ? VOCAB_SESSION_17 : VOCAB_SESSION_10)
  : ((currentSessionId === '10') ? VOCAB_SESSION_10 : VOCAB_SESSION_11);

/* --------------------------------------------------------------------------
   1. BRITISH SPEECH SYNTHESIS ENGINE WITH EQUALIZER VISUALIZER
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
   2. SESSION SWITCHING ENGINE (SESSIONS 1, 10, 11)
   -------------------------------------------------------------------------- */
function switchSession(sessionId) {
  currentSessionId = String(sessionId);
  localStorage.setItem('bc_active_session', currentSessionId);
  MASTER_VOCAB = (currentSessionId === '1') ? VOCAB_SESSION_1
    : (currentSessionId === '2') ? VOCAB_SESSION_2
    : (currentSessionId === '3') ? VOCAB_SESSION_3
    : (currentSessionId === '12') ? VOCAB_SESSION_12
    : (currentSessionId === '13') ? (typeof VOCAB_SESSION_13 !== 'undefined' ? VOCAB_SESSION_13 : VOCAB_SESSION_10)
    : (currentSessionId === '14') ? (typeof VOCAB_SESSION_14 !== 'undefined' ? VOCAB_SESSION_14 : VOCAB_SESSION_10)
    : (currentSessionId === '15') ? (typeof VOCAB_SESSION_15 !== 'undefined' ? VOCAB_SESSION_15 : VOCAB_SESSION_10)
    : (currentSessionId === '16') ? (typeof VOCAB_SESSION_16 !== 'undefined' ? VOCAB_SESSION_16 : VOCAB_SESSION_10)
    : (currentSessionId === '17') ? (typeof VOCAB_SESSION_17 !== 'undefined' ? VOCAB_SESSION_17 : VOCAB_SESSION_10)
    : ((currentSessionId === '10') ? VOCAB_SESSION_10 : VOCAB_SESSION_11);

  // Sync toolbar select dropdown
  const select = document.getElementById('sessionDropdown');
  if (select && select.value !== currentSessionId) {
    select.value = currentSessionId;
  }
  const mobSelect = document.getElementById('mobileSessionDropdown');
  if (mobSelect && mobSelect.value !== currentSessionId) {
    mobSelect.value = currentSessionId;
  }

  // Section references
  const sec1Materials = document.getElementById('session1Materials');
  const sec2Materials = document.getElementById('session2Materials');
  const sec3Materials = document.getElementById('session3Materials');
  const sec10Materials = document.getElementById('courseMaterials');
  const sec10Grammar = document.getElementById('grammarSection');
  const sec11Materials = document.getElementById('session11Materials');
  const sec12Materials = document.getElementById('session12Materials');
  const sec13Materials = document.getElementById('session13Materials');
  const sec14Materials = document.getElementById('session14Materials');
  const sec15Materials = document.getElementById('session15Materials');
  const sec16Materials = document.getElementById('session16Materials');
  const sec17Materials = document.getElementById('session17Materials');
  const storiesSec = document.getElementById('storiesSection');
  const spareTopicsSec = document.getElementById('spareTopicsSection');

  if (storiesSec) storiesSec.style.display = 'none';
  if (spareTopicsSec) spareTopicsSec.style.display = 'none';

  // Nav Links
  const navLinkMat = document.getElementById('navLinkSessionMaterials');
  const mobileLinkMat = document.getElementById('mobileLinkSessionMaterials');
  const bottomLinkMat = document.getElementById('bottomLinkSessionMaterials');

  // Hero Elements
  const heroTag = document.getElementById('heroActiveSessionTag');
  const heroDocTag = document.getElementById('heroDocCodeTag');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroVocabCount = document.getElementById('heroVocabCount');
  const heroPart4Sub = document.getElementById('heroPart4Subtext');
  const heroAudioBtn = document.getElementById('heroAudioPlayBtn');
  const part4Header = document.getElementById('part4ExamHeaderTitle');
  const footerText = document.getElementById('footerCourseText');

  if (currentSessionId === '1') {
    if (sec1Materials) sec1Materials.style.display = 'block';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">🔧</span><span class="nav-text">Tools Hub</span>';
      navLinkMat.setAttribute('href', '#session1Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>🔧</span> Tools Hub &amp; Formulas';
      mobileLinkMat.setAttribute('href', '#session1Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session1Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 1';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_04_I021CGL';
    if (heroTitle) heroTitle.innerHTML = 'Describing Things &amp; <span>Compound Stress</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2/C1 vocabulary words and workshop tools, practice everyday object formulas, relative clauses chaining, 3 listening conversations, and compound noun stress with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 1: Describing Things • Handout ID: <code>ARB_B1_04_I021CGL_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session one: Describing things, everyday objects, and compound noun stress.');
    }

    renderSession1Formulas();
    renderSession1Riddles();
    renderSession1RelativeClauses();
    renderSession1ListeningGaps();
    renderSession1CompoundStress();
    renderSession1ClarifyingChecking();
    renderSession1MediaHub();
  } else if (currentSessionId === '2') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'block';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">✈️</span><span class="nav-text">Travel Hub</span>';
      navLinkMat.setAttribute('href', '#session2Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>✈️</span> Travel Hub &amp; Indirect Questions';
      mobileLinkMat.setAttribute('href', '#session2Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session2Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 2';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARS_B1_02_I027CEU';
    if (heroTitle) heroTitle.innerHTML = 'Travel Arrangements &amp; <span>Indirect Questions</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2 travel vocabulary words, practice polite indirect questions, travel agency dialogue listening gap-fills, travel categories matrix, and English tenses lab with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 2: Making Travel Arrangements • Handout ID: <code>ARS_B1_02_I027CEU_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session two: Making travel arrangements and indirect questions.');
    }

    renderSession2IndirectQuestions();
    renderSession2ListeningExtracts();
    renderSession2Categories();
    renderSession2TensesLab();
    renderSession2MediaHub();
  } else if (currentSessionId === '3') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'block';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💡</span><span class="nav-text">Decisions Hub</span>';
      navLinkMat.setAttribute('href', '#session3Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💡</span> Decisions Hub &amp; Regrets';
      mobileLinkMat.setAttribute('href', '#session3Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session3Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 3';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARS_B1_05_I028CEA';
    if (heroTitle) heroTitle.innerHTML = 'The Decision Process &amp; <span>Third Conditional</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2 decision vocabulary words, practice Third Conditional imaginary past sentences, 6 ways to express regret, speaker evaluations, and classroom feedback with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 3: The Decision Process • Handout ID: <code>ARS_B1_05_I028CEA_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session three: The decision process, third conditional, and expressing regret.');
    }

    renderSession3ThirdConditional();
    renderSession3WaysToRegret();
    renderSession3RegretEval();
    renderSession3TimeLinkers();
    renderSession3TeacherFeedback();
    renderSession3AmusementPark();
    renderSession3NotebookPages();
  } else if (currentSessionId === '10') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'block';
    if (sec10Grammar) sec10Grammar.style.display = 'block';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">📄</span><span class="nav-text">Materials</span>';
      navLinkMat.setAttribute('href', '#courseMaterials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>📄</span> Course Materials';
      mobileLinkMat.setAttribute('href', '#courseMaterials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#courseMaterials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 10';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_04_I068CEA';
    if (heroTitle) heroTitle.innerHTML = 'Planning Events &amp; <span>Team Building</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 25 B1/B2/C1 vocabulary words with Cambridge CEFR ratings, interactive games, British pronunciation, and course materials.';
    if (heroVocabCount) heroVocabCount.textContent = '25';
    if (heroPart4Sub) heroPart4Sub.textContent = '25-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (25 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 10: Planning Events • Handout ID: <code>ARB_B1_04_I068CEA_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session ten: Planning events and team building.');
    }
  } else if (currentSessionId === '11') {
    // Session 11
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'block';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💡</span><span class="nav-text">Study Hub</span>';
      navLinkMat.setAttribute('href', '#session11Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💡</span> Study Hub &amp; Grammar';
      mobileLinkMat.setAttribute('href', '#session11Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session11Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 11';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARS_B1_08_I039CEU';
    if (heroTitle) heroTitle.innerHTML = 'Study Advice &amp; <span>Second Conditional</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2/C1 study advice vocabulary words and listening idioms, practice Second Conditional advice structures (\'If I were you, I would...\'), and explore teacher coaching insights with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 11: Study Advice • Handout ID: <code>ARS_B1_08_I039CEU_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session eleven: Study advice and second conditional.');
    }

    renderSecondConditionalExercises();
    renderAdviceScenarios();
    initListeningPhrasesMatch();
    initSentenceHalvesMatch();
    initFindSomeoneWho();
    initMediaHub();
  } else if (currentSessionId === '12') {
    // Session 12
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'block';
    if (sec13Materials) sec13Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">🏨</span><span class="nav-text">Recruitment Hub</span>';
      navLinkMat.setAttribute('href', '#session12Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>🏨</span> Recruitment Hub &amp; Candidates';
      mobileLinkMat.setAttribute('href', '#session12Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session12Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 12';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_03_I053CEU';
    if (heroTitle) heroTitle.innerHTML = 'Character Analysis &amp; <span>Alpine Recruitment</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2/C1 personality adjectives and hospitality management terms, evaluate Peter Bogdovic for the Italian ski resort hotel, practice opposites and pronunciation clinic with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 12: Character Analysis • Handout ID: <code>ARB_B1_03_I053CEU_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session twelve: Character analysis and alpine hotel recruitment.');
    }

    renderSession12LeadIn();
    renderSession12JobAdvert();
    renderSession12MatchingLab();
    renderSession12CharacterTraits();
    renderSession12CandidateAnalysis();
    renderSession12DiscussionLab();
    renderSession12TeacherFeedback();
    renderSession12PronunciationLab();
    renderSession12NotebookPages();
  } else if (currentSessionId === '13') {
    // Session 13: Storytelling & Narrative Tenses
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'block';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">📖</span><span class="nav-text">Stories Hub</span>';
      navLinkMat.setAttribute('href', '#session13Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>📖</span> Stories Hub &amp; Narrative Tenses';
      mobileLinkMat.setAttribute('href', '#session13Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session13Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 13';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_01_I059CEU';
    if (heroTitle) heroTitle.innerHTML = 'Storytelling &amp; <span>Narrative Tenses</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2 narrative vocabulary words, read 3 authentic bizarre news stories verbatim, master Past Simple, Continuous & Perfect rules and timeline, complete Fred the Dog live smartboard challenge, explore student notebook transcriptions, and practice storytelling speaking with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 13: Storytelling &amp; Narrative Tenses • Handout ID: <code>ARB_B1_01_I059CEU_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session thirteen: Storytelling, bizarre news stories, and narrative tenses.');
    }

    renderSession13LeadIn();
    renderSession13Stories();
    renderSession13TrueFalse();
    renderSession13NarrativeGrammar();
    renderSession13FredPractice();
    renderSession13Notebook();
    renderSession13SpeakingLab();
    renderSession13TeacherClinic();
  } else if (currentSessionId === '14') {
    // Session 14: Attending Weddings & Traditions
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'block';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💍</span><span class="nav-text">Weddings Hub</span>';
      navLinkMat.setAttribute('href', '#session14Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💍</span> Weddings Hub &amp; Traditions';
      mobileLinkMat.setAttribute('href', '#session14Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session14Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 14';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_03_I069CGL';
    if (heroTitle) heroTitle.innerHTML = 'Attending Weddings &amp; <span>Conversational Interest</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2 wedding vocabulary and active listening phrases, explore Andy\'s DIY wedding & the hilarious Shaggy aisle music disaster verbatim, practice echo questions and backchannelling, compare global wedding customs, and review teacher live corrections with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 14: Attending Weddings • Handout ID: <code>ARB_B1_03_I069CGL_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session fourteen: Attending weddings, showing interest, and global wedding customs.');
    }

    renderSession14LeadIn();
    renderSession14Dialogues();
    renderSession14Smartboard();
    renderSession14VocabGroups();
    renderSession14Customs();
    renderSession14Speaking();
    renderSession14Feedback();
    renderSession14Pronunciation();
    renderSession14Notebook();
  } else if (currentSessionId === '15') {
    // Session 15: Conversation Skills: Avoiding 'Dead Air'
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'block';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💬</span><span class="nav-text">Conversation Hub</span>';
      navLinkMat.setAttribute('href', '#session15Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💬</span> Conversation Hub &amp; Avoiding Dead Air';
      mobileLinkMat.setAttribute('href', '#session15Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session15Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 15';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARB_B1_07_I029CEA';
    if (heroTitle) heroTitle.innerHTML = 'Conversation Skills: <span>Avoiding ‘Dead Air’</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B2 conversation management and social interaction vocabulary words, practice open icebreakers and graceful closing signals, complete the interactive "Would You Rather" Dilemma challenge (Items 17–21), review Teacher Live Corrections from Smartboard 4, and master sentence stress and weak forms /ə/ with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 15: Conversation Skills: Avoiding ‘Dead Air’ • Handout ID: <code>ARB_B1_07_I029CEA_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session fifteen: Conversation skills, avoiding dead air, giving advice, and would you rather dilemmas.');
    }

    renderSession15LeadIn();
    renderSession15Dialogues();
    renderSession15Smartboard();
    renderSession15VocabGroups();
    renderSession15Dilemmas();
    renderSession15Speaking();
    renderSession15Feedback();
    renderSession15Pronunciation();
    renderSession15Notebook();
  } else if (currentSessionId === '16') {
    // Session 16: Improving Conversation Skills: Avoiding Awkward Silences
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'block';
    if (sec17Materials) sec17Materials.style.display = 'none';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💬</span><span class="nav-text">Conversation Hub</span>';
      navLinkMat.setAttribute('href', '#session16Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💬</span> Conversation Hub &amp; Avoiding Silences';
      mobileLinkMat.setAttribute('href', '#session16Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session16Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 16';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARS_B1_01_I029CEU';
    if (heroTitle) heroTitle.innerHTML = 'Conversation Skills: <span>Avoiding Awkward Silences</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 28 B1/B1+ conversational strategy and social interaction vocabulary words, practice open icebreakers and graceful closing signals, master tag questions with falling intonation (↘), and transcribe authentic classroom smartboards with British audio.';
    if (heroVocabCount) heroVocabCount.textContent = '28';
    if (heroPart4Sub) heroPart4Sub.textContent = '28-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (28 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 16: Improving Conversation Skills: Avoiding Awkward Silences • Handout ID: <code>ARS_B1_01_I029CEU_HO_v1.0</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session sixteen: Improving conversation skills, avoiding awkward silences, tag questions, and smooth transitions.');
    }

    renderSession16LeadIn();
    renderSession16Dialogues();
    renderSession16Smartboard();
    renderSession16VocabGroups();
    renderSession16QuestionTags();
    renderSession16Speaking();
    renderSession16Feedback();
    renderSession16Pronunciation();
    renderSession16Notebook();
  } else if (currentSessionId === '17') {
    // Session 17: Communicating with Confidence: Job Appraisal Interview
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) sec17Materials.style.display = 'block';

    if (navLinkMat) {
      navLinkMat.innerHTML = '<span class="nav-icon">💼</span><span class="nav-text">Appraisal Hub</span>';
      navLinkMat.setAttribute('href', '#session17Materials');
    }
    if (mobileLinkMat) {
      mobileLinkMat.innerHTML = '<span>💼</span> Appraisal Hub &amp; Review Meetings';
      mobileLinkMat.setAttribute('href', '#session17Materials');
    }
    if (bottomLinkMat) {
      bottomLinkMat.setAttribute('href', '#session17Materials');
    }

    if (heroTag) heroTag.textContent = 'ACTIVE SESSION 17';
    if (heroDocTag) heroDocTag.textContent = 'DOC: ARC_B1_01_I016CEU';
    if (heroTitle) heroTitle.innerHTML = 'Communicating with Confidence: <span>Job Appraisal Interview</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Master 36 B1/B2/C1 performance review and management vocabulary words, analyze Emma\'s 3-year appraisal report, master modal verbs for polite recommendations (could, may, might, should), explore 10 feedback categories matrix, and study authentic whiteboard corrections.';
    if (heroVocabCount) heroVocabCount.textContent = '36';
    if (heroPart4Sub) heroPart4Sub.textContent = '36-question final exam';
    if (part4Header) part4Header.textContent = 'All-Words Final Exam (36 Questions)';
    if (footerText) footerText.innerHTML = 'Intermediate B1 Course • Session 17: Communicating with Confidence: Job Appraisal Interview • Handout ID: <code>ARC_B1_01_I016CEU_HO_v1.1</code>';
    if (heroAudioBtn) {
      heroAudioBtn.onclick = () => speakUK('British Council Session seventeen: Communicating with confidence, job appraisal interview, performance feedback, and modal verbs for recommendations.');
    }

    renderSession17LeadIn();
    renderSession17EmmaReport();
    renderSession17Smartboard();
    renderSession17VocabGroups();
    renderSession17Modals();
    renderSession17Speaking();
    renderSession17Feedback();
    renderSession17Pronunciation();
    renderSession17Notebook();
  }

  // Re-initialize games for selected session
  try {
    cardIdx = 0;
    streak = 0;
    updateStreak();
    updateMasteredBtn();
    flipAndRender();

    initPart2GapFill();
    loadConnectSet();
    startFullExam();
  } catch (err) {
    console.error('Error re-initializing session learning games:', err);
  }

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Switched to Session ${currentSessionId}`, 'info');
  }
}

function initSessionsDropdown() {
  const select = document.getElementById('sessionDropdown');
  const notice = document.getElementById('sessionNotice');
  const numSpan = document.getElementById('sessionNumberDisplay');

  const activeSessions = ['1', '2', '3', '10', '11', '12', '13', '14', '15', '16', '17'];

  if (select) {
    select.value = currentSessionId;
    select.addEventListener('change', () => {
      const val = select.value;
      if (activeSessions.includes(val)) {
        if (notice) notice.classList.remove('active');
        switchSession(val);
      } else {
        if (notice && numSpan) {
          numSpan.textContent = val;
          notice.classList.add('active');
          setTimeout(() => {
            select.value = currentSessionId;
            notice.classList.remove('active');
          }, 3500);
        }
      }
    });
  }

  const mobSelect = document.getElementById('mobileSessionDropdown');
  if (mobSelect) {
    mobSelect.value = currentSessionId;
    mobSelect.addEventListener('change', () => {
      const val = mobSelect.value;
      if (activeSessions.includes(val)) {
        if (notice) notice.classList.remove('active');
        switchSession(val);
      } else {
        if (notice && numSpan) {
          numSpan.textContent = val;
          notice.classList.add('active');
          setTimeout(() => {
            mobSelect.value = currentSessionId;
            notice.classList.remove('active');
          }, 3500);
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. PART 1: 3D FLASHCARDS WITH GESTURES, AUDIO & SPEED TIMER
   -------------------------------------------------------------------------- */
let cardIdx = 0;
let cardTimer = null;
let secondsRemaining = 15;
let timerRunning = true;
let streak = 0;
let cardSidePref = localStorage.getItem('bc_card_side_pref') || 'defFirst';
let masteredIds = new Set(JSON.parse(localStorage.getItem('bc_mastered_words') || '[]'));

function getCambridgeBadgeHTML(level) {
  const lvl = (level || 'B1').toUpperCase();
  let cls = 'cefr-b1';
  if (lvl === 'B2') cls = 'cefr-b2';
  else if (lvl === 'C1') cls = 'cefr-c1';
  return `<span class="cambridge-badge ${cls}" title="Cambridge Dictionary CEFR Rating: ${lvl}">🏛️ Cambridge ${lvl}</span>`;
}

function getTypeBadgeHTML(pos) {
  if (!pos) return '';
  const p = pos.toLowerCase();
  let cls = 'badge-noun';
  let icon = '🏷️';
  let label = pos.toUpperCase();

  if (p.includes('phrasal verb')) {
    cls = 'badge-verb'; icon = '⚡'; label = 'PHRASAL VERB';
  } else if (p.includes('noun phrase')) {
    cls = 'badge-noun'; icon = '🏷️'; label = 'NOUN PHRASE';
  } else if (p.includes('compound noun')) {
    cls = 'badge-noun'; icon = '🏷️'; label = 'COMPOUND NOUN';
  } else if (p.includes('uncountable')) {
    cls = 'badge-noun'; icon = '🏷️'; label = 'UNCOUNTABLE NOUN';
  } else if (p.includes('adj')) {
    cls = 'badge-adj'; icon = '✨'; label = 'ADJECTIVE';
  } else if (p.includes('adv')) {
    cls = 'badge-adv'; icon = '⚡'; label = 'ADVERB';
  } else if (p.includes('verb')) {
    cls = 'badge-verb'; icon = '⚡'; label = 'VERB';
  } else if (p.includes('idiom') || (p.includes('phrase') && !p.includes('noun'))) {
    cls = 'badge-phrase'; icon = '💬'; label = 'IDIOM / PHRASE';
  }
  return `<span class="word-type-badge ${cls}" title="Part of Speech: ${pos}">${icon} ${label}</span>`;
}

function initPart1() {
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
    localStorage.setItem('bc_card_side_pref', 'defFirst');
    updateModeButtons();
    flipAndRender();
  });

  btnWord?.addEventListener('click', () => {
    cardSidePref = 'wordFirst';
    localStorage.setItem('bc_card_side_pref', 'wordFirst');
    updateModeButtons();
    flipAndRender();
  });

  updateModeButtons();
  renderCard();
  startCardTimer();

  const viewport = document.getElementById('cardViewport');
  const flipper = document.getElementById('cardFlipper');
  const btnFlip = document.getElementById('btnFlipCardManual');

  // Flip on click/tap
  if (viewport && flipper) {
    viewport.addEventListener('click', (e) => {
      if (e.target.closest('.audio-circle-btn') || e.target.closest('.audio-pill-btn') || e.target.closest('button')) return;
      flipper.classList.toggle('flipped');
    });

    // Touch Swipe Gestures
    if (window.AnimEngine && typeof AnimEngine.attachSwipeGestures === 'function') {
      AnimEngine.attachSwipeGestures(viewport, {
        onSwipeLeft: () => {
          cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
          streak++;
          updateStreak();
          flipAndRender('next');
        },
        onSwipeRight: () => {
          cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
          flipAndRender('prev');
        },
        onSwipeUp: () => {
          flipper.classList.toggle('flipped');
        }
      });
    }
  }

  if (btnFlip && flipper) {
    btnFlip.addEventListener('click', (e) => {
      e.stopPropagation();
      flipper.classList.toggle('flipped');
    });
  }

  // Next Word
  document.getElementById('btnNextWord')?.addEventListener('click', () => {
    cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
    streak++;
    updateStreak();
    flipAndRender('next');
  });

  // Previous Word
  document.getElementById('btnPrevWord')?.addEventListener('click', () => {
    cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
    flipAndRender('prev');
  });

  // Shuffle Word
  document.getElementById('btnShuffleWords')?.addEventListener('click', () => {
    cardIdx = Math.floor(Math.random() * MASTER_VOCAB.length);
    flipAndRender('next');
  });

  // Mark Mastered
  document.getElementById('btnMarkMastered')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const curId = MASTER_VOCAB[cardIdx].id;
    if (masteredIds.has(curId)) {
      masteredIds.delete(curId);
      if (window.AnimEngine) AnimEngine.showToast('Unmarked word', 'info');
    } else {
      masteredIds.add(curId);
      if (window.AnimEngine) {
        AnimEngine.showToast('Word Mastered! 🎉', 'success');
        AnimEngine.fireConfetti({ count: 35 });
      }
    }
    localStorage.setItem('bc_mastered_words', JSON.stringify([...masteredIds]));
    updateMasteredBtn();
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.code === 'Space') {
      e.preventDefault();
      flipper?.classList.toggle('flipped');
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      cardIdx = (cardIdx + 1) % MASTER_VOCAB.length;
      flipAndRender('next');
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      cardIdx = (cardIdx - 1 + MASTER_VOCAB.length) % MASTER_VOCAB.length;
      flipAndRender('prev');
    }
  });

  // Timer Selection
  document.getElementById('flashcardTimerSelect')?.addEventListener('change', startCardTimer);
  document.getElementById('btnPauseTimer')?.addEventListener('click', () => {
    timerRunning = !timerRunning;
    document.getElementById('btnPauseTimer').textContent = timerRunning ? "⏸ Pause" : "▶ Resume";
  });
}

function flipAndRender(direction = 'none') {
  const flipper = document.getElementById('cardFlipper');
  if (flipper) flipper.classList.remove('flipped');
  renderCard();

  if (direction !== 'none' && window.AnimEngine && typeof AnimEngine.animateCardEntrance === 'function') {
    AnimEngine.animateCardEntrance(flipper, direction);
  }
}

function maskWord(sentence, word) {
  if (!sentence || !word) return sentence;
  const clean = word.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const reg = new RegExp('\\b' + clean + '\\b', 'gi');
  if (reg.test(sentence)) {
    return sentence.replace(reg, '<span class="masked-blank">[ ________ ? ]</span>');
  }
  if (clean.length > 4) {
    const root = clean.slice(0, -2);
    const regRoot = new RegExp('\\b' + root + '\\w*\\b', 'gi');
    if (regRoot.test(sentence)) {
      return sentence.replace(regRoot, '<span class="masked-blank">[ ________ ? ]</span>');
    }
  }
  return sentence;
}

function highlightWord(sentence, word) {
  if (!sentence || !word) return sentence;
  const clean = word.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const reg = new RegExp('(\\b' + clean + '\\w*\\b)', 'gi');
  return sentence.replace(reg, '<strong style="color:var(--violet); text-decoration:underline;">$1</strong>');
}

function renderCard() {
  const item = MASTER_VOCAB[cardIdx];
  if (!item) return;

  const flipper = document.getElementById('cardFlipper');
  if (flipper) flipper.classList.remove('flipped');

  const stepBadge = document.getElementById('cardStepBadge');
  if (stepBadge) stepBadge.textContent = `${cardIdx + 1} / ${MASTER_VOCAB.length}`;

  const frontPlane = document.getElementById('cardPlaneFront');
  const backPlane = document.getElementById('cardBackPlane');
  if (!frontPlane || !backPlane) return;

  const isDefFirst = (cardSidePref === 'defFirst');

  // Definition face template
  const buildDefFace = (isOnFront) => `
    <div class="card-top-meta">
      <div class="card-meta-left">
        <span class="chip-citation">📍 ${item.citation}</span>
      </div>
      <div class="card-meta-right">
        ${getCambridgeBadgeHTML(item.cambridgeLevel)}
        ${getTypeBadgeHTML(item.pos)}
      </div>
    </div>

    <div class="card-center-lead">
      <div class="card-face-subhead">
        <span class="card-role-pill ${isOnFront ? 'role-front' : 'role-back'}">
          ${isOnFront ? '📖 DEFINITION (GUESS THE WORD)' : '📖 DEFINITION REVEALED'}
        </span>
        <button class="audio-circle-btn btn-play-def" title="Listen to Definition in British English">🔊</button>
      </div>

      <div class="card-def-primary">
        "${item.definition}"
      </div>

      <div class="card-def-secondary">
        💡 <strong>B1 Explanation:</strong> ${item.b1Explain}
      </div>

      <div class="back-example-sentence-box">
        <div class="back-sentence-row">
          <span class="back-label">
            ${isOnFront ? '💼 Workplace Sentence (Fill the blank):' : '💼 Workplace Sentence:'}
          </span>
          <button class="audio-circle-btn btn-play-sentence" title="Listen to Sentence in British English">🔊</button>
        </div>
        <p class="back-sentence-quote">
          "${isOnFront ? maskWord(item.sentence, item.word) : highlightWord(item.sentence, item.word)}"
        </p>
      </div>
    </div>

    <div class="card-flip-hint">
      🔄 Click or swipe up to ${isOnFront ? 'reveal the target word ▶' : 'flip back ◀'}
    </div>
  `;

  // Word face template
  const buildWordFace = (isOnFront) => `
    <div class="card-top-meta">
      <div class="card-meta-left">
        <span class="chip-citation">📍 ${item.citation}</span>
      </div>
      <div class="card-meta-right">
        ${getCambridgeBadgeHTML(item.cambridgeLevel)}
        ${getTypeBadgeHTML(item.pos)}
      </div>
    </div>

    <div class="card-center-lead">
      <div class="card-face-subhead">
        <span class="card-role-pill ${isOnFront ? 'role-front' : 'role-back'}">
          ${isOnFront ? '🔤 TARGET WORD' : '✓ THE WORD REVEALED'}
        </span>
        <button class="audio-circle-btn btn-play-word" title="Listen to Word in British English">🔊</button>
      </div>

      <h3 class="card-word-title">
        ${item.word}
      </h3>

      <div class="card-phonetic-row">
        <span class="phonetic-uk-flag">🇬🇧 UK</span>
        <span class="phonetic-val">${item.pronunciation}</span>
        <span class="phonetic-dot">•</span>
        <span class="phonetic-pos">${item.pos}</span>
      </div>

      ${!isOnFront ? `
      <div class="card-quick-def">
        <strong>Definition:</strong> ${item.definition}
      </div>
      ` : ''}

      <div class="back-example-sentence-box">
        <div class="back-sentence-row">
          <span class="back-label">💼 Full Workplace Sentence:</span>
          <button class="audio-circle-btn btn-play-sentence" title="Listen to Full Sentence in British English">🔊</button>
        </div>
        <p class="back-sentence-quote">
          "${highlightWord(item.sentence, item.word)}"
        </p>
      </div>
    </div>

    <div class="card-flip-hint">
      🔄 Click or swipe up to ${isOnFront ? 'reveal the definition ▶' : 'flip back ◀'}
    </div>
  `;

  if (isDefFirst) {
    frontPlane.innerHTML = buildDefFace(true);
    backPlane.innerHTML = buildWordFace(false);
  } else {
    frontPlane.innerHTML = buildWordFace(true);
    backPlane.innerHTML = buildDefFace(false);
  }

  attachCardAudio(frontPlane, item);
  attachCardAudio(backPlane, item);

  updateMasteredBtn();
  startCardTimer();
}

function attachCardAudio(plane, item) {
  plane.querySelectorAll('.btn-play-def').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.definition);
    });
  });
  plane.querySelectorAll('.btn-play-word').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.word);
    });
  });
  plane.querySelectorAll('.btn-play-sentence').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.sentence);
    });
  });
}

function getMasteredCountForCurrentSession() {
  let count = 0;
  MASTER_VOCAB.forEach(item => {
    if (masteredIds.has(item.id)) count++;
  });
  return count;
}

function updateMasteredBtn() {
  const btn = document.getElementById('btnMarkMastered');
  const badge = document.getElementById('masteredBadge');
  if (!btn || !MASTER_VOCAB[cardIdx]) return;
  const isM = masteredIds.has(MASTER_VOCAB[cardIdx].id);
  btn.textContent = isM ? "✓ Mastered" : "☆ Mark Mastered";
  btn.style.background = isM ? "var(--emerald)" : "var(--bg-subtle)";
  btn.style.color = isM ? "#ffffff" : "var(--emerald)";
  if (badge) badge.textContent = `${getMasteredCountForCurrentSession()} / ${MASTER_VOCAB.length} Mastered`;
}

function updateStreak() {
  const el = document.getElementById('streakBadge');
  if (el) el.textContent = `🔥 Streak: ${streak}`;
}

function startCardTimer() {
  clearInterval(cardTimer);
  const sel = parseInt(document.getElementById('flashcardTimerSelect')?.value || "15", 10);
  const display = document.getElementById('flashcardTimerDisplay');
  if (sel === 0) {
    if (display) {
      display.textContent = "⏱ Off";
      display.classList.remove('hurry');
    }
    return;
  }
  secondsRemaining = sel;
  updateTimerUI();

  cardTimer = setInterval(() => {
    if (!timerRunning) return;
    secondsRemaining--;
    updateTimerUI();

    if (secondsRemaining <= 0) {
      clearInterval(cardTimer);
    }
  }, 1000);
}

function updateTimerUI() {
  const display = document.getElementById('flashcardTimerDisplay');
  if (!display) return;
  display.textContent = secondsRemaining <= 0 ? `⏱ 0s (Time's up!)` : `⏱ ${secondsRemaining}s`;
  if (secondsRemaining <= 4) display.classList.add('hurry');
  else display.classList.remove('hurry');
}

/* --------------------------------------------------------------------------
   4. PART 2: SENTENCE GAP-FILL & SOLVING CHALLENGE
   Replaces the blind luck tile flip game with real skill, solving & recall!
   -------------------------------------------------------------------------- */
let gapfillIdx = 0;
let gapfillDeck = [];
let gapfillSolvedCount = 0;
let gapfillStreak = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initPart2() {
  initPart2GapFill();
}

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
   5. PART 3: TEST AND CONNECT PART
   -------------------------------------------------------------------------- */
let selectedWordBtn = null;
let connectedCount = 0;

function initPart3() {
  loadConnectSet();
  document.getElementById('btnRefreshConnect')?.addEventListener('click', loadConnectSet);
}

function loadConnectSet() {
  const wordsCol = document.getElementById('connectWordsCol');
  const defsCol = document.getElementById('connectDefsCol');
  const scoreBadge = document.getElementById('connectScoreBadge');
  const alertBox = document.getElementById('connectSuccessAlert');

  if (!wordsCol || !defsCol) return;

  selectedWordBtn = null;
  connectedCount = 0;
  if (scoreBadge) scoreBadge.textContent = `Connected: 0 / 8`;
  if (alertBox) alertBox.style.display = 'none';

  const set = [...MASTER_VOCAB].sort(() => 0.5 - Math.random()).slice(0, 8);
  const shuffledDefs = [...set].sort(() => 0.5 - Math.random());

  wordsCol.innerHTML = '<span class="connect-col-title">Column 1: Words</span>';
  defsCol.innerHTML = '<span class="connect-col-title">Column 2: English Definitions</span>';

  set.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'connect-btn';
    btn.dataset.id = item.id;
    btn.innerHTML = `<span>${item.word}</span><span class="connect-mark"></span>`;

    btn.addEventListener('click', () => {
      wordsCol.querySelectorAll('.connect-btn').forEach(b => b.classList.remove('active-source'));
      btn.classList.add('active-source');
      selectedWordBtn = btn;
      speakUK(item.word);
    });

    wordsCol.appendChild(btn);
  });

  shuffledDefs.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'connect-btn';
    btn.dataset.id = item.id;
    btn.innerHTML = `<span>${item.definition}</span><span class="connect-mark"></span>`;

    btn.addEventListener('click', () => {
      if (!selectedWordBtn) {
        if (window.AnimEngine) AnimEngine.showToast("Select a word on the left first!", "warning");
        return;
      }

      if (selectedWordBtn.dataset.id === btn.dataset.id) {
        selectedWordBtn.classList.remove('active-source');
        selectedWordBtn.classList.add('paired');
        btn.classList.add('paired');
        selectedWordBtn.querySelector('.connect-mark').textContent = '✓';
        btn.querySelector('.connect-mark').textContent = '✓';
        connectedCount++;
        if (scoreBadge) scoreBadge.textContent = `Connected: ${connectedCount} / 8`;
        selectedWordBtn = null;

        if (connectedCount === 8) {
          if (alertBox) alertBox.style.display = 'block';
          if (window.AnimEngine) {
            AnimEngine.fireConfetti({ count: 70 });
            AnimEngine.showToast('Outstanding! All 8 pairs connected! 🎉', 'success');
          }
        }
      } else {
        btn.style.borderColor = 'var(--rose)';
        setTimeout(() => {
          btn.style.borderColor = 'var(--border-light)';
        }, 600);
      }
    });

    defsCol.appendChild(btn);
  });
}

/* --------------------------------------------------------------------------
   6. PART 4: COMPREHENSIVE FINAL EXAM
   -------------------------------------------------------------------------- */
let testExamQuestions = [];
let currentTestIdx = 0;
let fullTestScore = 0;

function initPart4() {
  startFullExam();
  document.getElementById('btnRestartFullTest')?.addEventListener('click', startFullExam);
}

function startFullExam() {
  currentTestIdx = 0;
  fullTestScore = 0;

  testExamQuestions = [...MASTER_VOCAB].sort(() => 0.5 - Math.random()).map(target => {
    const distractors = MASTER_VOCAB
      .filter(v => v.id !== target.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(v => v.word);

    const options = [target.word, ...distractors].sort(() => 0.5 - Math.random());
    return {
      definition: target.definition,
      correctWord: target.word,
      options: options
    };
  });

  renderExamQuestion();
}

function renderExamQuestion() {
  const idxEl = document.getElementById('testQuestionIndex');
  const scoreEl = document.getElementById('testScoreDisplay');
  const promptEl = document.getElementById('testLeadPrompt');
  const listEl = document.getElementById('testChoicesList');

  if (!promptEl || !listEl) return;

  if (currentTestIdx >= testExamQuestions.length) {
    if (idxEl) idxEl.textContent = "EXAM COMPLETE";
    if (scoreEl) scoreEl.textContent = `Score: ${fullTestScore}`;
    promptEl.textContent = `Final Result: ${fullTestScore} / ${testExamQuestions.length} Correct`;
    listEl.innerHTML = `
      <div style="text-align:center; padding:2rem; background:var(--bg-subtle); border-radius:var(--radius-md);">
        <h4 style="font-size:1.6rem; color:var(--bc-blue); margin-bottom:0.5rem;">
          ${fullTestScore >= Math.round(testExamQuestions.length * 0.8) ? '🏆 British Council B1/B2 Master!' : '👍 Good job! Keep practicing the cards.'}
        </h4>
        <p style="color:var(--text-body); margin-bottom:1.5rem;">
          You completed the ${testExamQuestions.length}-word exam with ${Math.round((fullTestScore / testExamQuestions.length) * 100)}% accuracy.
        </p>
        <button class="btn-solid-blue" onclick="startFullExam()">Retake Full Exam</button>
      </div>
    `;
    if (window.AnimEngine && fullTestScore >= Math.round(testExamQuestions.length * 0.7)) {
      AnimEngine.fireConfetti({ count: 120 });
    }
    return;
  }

  const q = testExamQuestions[currentTestIdx];
  if (idxEl) idxEl.textContent = `Question ${currentTestIdx + 1} of ${testExamQuestions.length}`;
  if (scoreEl) scoreEl.textContent = `Score: ${fullTestScore}`;
  promptEl.textContent = `Which vocabulary word matches: "${q.definition}"?`;

  listEl.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'test-choice-option';
    btn.innerHTML = `<span>${opt}</span><span class="test-feedback-tag"></span>`;

    btn.addEventListener('click', () => {
      listEl.querySelectorAll('.test-choice-option').forEach(b => b.disabled = true);

      if (opt === q.correctWord) {
        btn.classList.add('correct');
        btn.querySelector('.test-feedback-tag').textContent = '✓ Correct';
        fullTestScore++;
        speakUK(opt);
      } else {
        btn.classList.add('wrong');
        btn.querySelector('.test-feedback-tag').textContent = '✕';
        listEl.querySelectorAll('.test-choice-option').forEach(b => {
          if (b.textContent.includes(q.correctWord)) {
            b.classList.add('correct');
            b.querySelector('.test-feedback-tag').textContent = '✓ Answer';
          }
        });
      }

      setTimeout(() => {
        currentTestIdx++;
        renderExamQuestion();
      }, 1200);
    });

    listEl.appendChild(btn);
  });
}

/* --------------------------------------------------------------------------
   7. SECOND CONDITIONAL EXERCISES (SLIDE 6)
   -------------------------------------------------------------------------- */
function renderSecondConditionalExercises() {
  const container = document.getElementById('conditionalSentencesList');
  if (!container) return;

  container.innerHTML = '';
  SECOND_CONDITIONAL_EXERCISES.forEach(item => {
    const row = document.createElement('div');
    row.className = 'conditional-row';
    row.dataset.id = item.id;

    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap;">
        <span style="font-size:0.78rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">Sentence ${item.id}</span>
        <button class="audio-circle-btn btn-speak-cond" title="Listen in British English">🔊</button>
      </div>
      <div class="conditional-sentence-text">
        ${item.prefix}
        <input type="text" class="cond-gap" data-qid="${item.id}" data-gap="1" placeholder="${item.gap1Label}" autocomplete="off" spellcheck="false">
        ${item.mid}
        <input type="text" class="cond-gap" data-qid="${item.id}" data-gap="2" placeholder="${item.gap2Label}" autocomplete="off" spellcheck="false">
        ${item.suffix}
      </div>
      <div class="cond-feedback-msg" id="cond_feedback_${item.id}" style="display:none; font-size:0.84rem; font-weight:600;"></div>
    `;

    row.querySelector('.btn-speak-cond').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.fullSpoken);
    });

    container.appendChild(row);
  });

  const btnCheck = document.getElementById('btnCheckConditionals');
  const btnReveal = document.getElementById('btnRevealConditionals');

  if (btnCheck) {
    btnCheck.onclick = () => {
      let correctGaps = 0;
      const totalGaps = SECOND_CONDITIONAL_EXERCISES.length * 2;

      SECOND_CONDITIONAL_EXERCISES.forEach(item => {
        const row = container.querySelector(`.conditional-row[data-id="${item.id}"]`);
        if (!row) return;
        const input1 = row.querySelector('input[data-gap="1"]');
        const input2 = row.querySelector('input[data-gap="2"]');
        const fb = row.querySelector('.cond-feedback-msg');

        const val1 = (input1.value || '').trim().toLowerCase().replace(/’/g, "'");
        const val2 = (input2.value || '').trim().toLowerCase().replace(/’/g, "'");

        const ok1 = item.gap1Key.some(k => k.toLowerCase() === val1);
        const ok2 = item.gap2Key.some(k => k.toLowerCase() === val2);

        input1.className = 'cond-gap ' + (ok1 ? 'is-correct' : 'is-wrong');
        input2.className = 'cond-gap ' + (ok2 ? 'is-correct' : 'is-wrong');

        if (ok1) correctGaps++;
        if (ok2) correctGaps++;

        if (fb) {
          fb.style.display = 'block';
          if (ok1 && ok2) {
            fb.style.color = 'var(--emerald)';
            fb.textContent = '✓ Correct verb forms!';
          } else {
            fb.style.color = 'var(--rose)';
            fb.textContent = `Expected: [${item.gap1Key[0]}] and [${item.gap2Key[0]}]`;
          }
        }
      });

      if (correctGaps === totalGaps && window.AnimEngine) {
        AnimEngine.fireConfetti({ count: 70 });
        AnimEngine.showToast("Excellent! All second conditional sentences are correct.", "success");
      }
      speakUK(correctGaps === totalGaps ? "Excellent! All second conditional sentences are correct." : `You got ${correctGaps} out of ${totalGaps} blanks correct.`);
    };
  }

  if (btnReveal) {
    btnReveal.onclick = () => {
      SECOND_CONDITIONAL_EXERCISES.forEach(item => {
        const row = container.querySelector(`.conditional-row[data-id="${item.id}"]`);
        if (!row) return;
        const input1 = row.querySelector('input[data-gap="1"]');
        const input2 = row.querySelector('input[data-gap="2"]');
        const fb = row.querySelector('.cond-feedback-msg');

        input1.value = item.gap1Key[0];
        input2.value = item.gap2Key[0];
        input1.className = 'cond-gap is-correct';
        input2.className = 'cond-gap is-correct';

        if (fb) {
          fb.style.display = 'block';
          fb.style.color = 'var(--emerald)';
          fb.textContent = '✓ Teacher Whiteboard Key (Slide 6)';
        }
      });
      speakUK("All answers revealed from Slide 6 whiteboard.");
    };
  }
}

/* --------------------------------------------------------------------------
   8. ADVICE SCENARIOS
   -------------------------------------------------------------------------- */
function renderAdviceScenarios() {
  const container = document.getElementById('adviceScenariosGrid');
  if (!container) return;

  container.innerHTML = '';
  ADVICE_SCENARIOS_DATA.forEach((sc) => {
    const card = document.createElement('div');
    card.className = 'study-card';
    card.style.cursor = 'pointer';

    card.innerHTML = `
      <div class="study-card-header">
        <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">${sc.speakerTip}</span>
        <button class="audio-circle-btn btn-advice-speak" title="Listen in British English">🔊</button>
      </div>
      <h4 style="font-size:1.02rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${sc.title}</h4>
      <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.45; margin:0 0 0.5rem;">
        <em>Problem:</em> "${sc.problem}"
      </p>
      <div style="background:var(--bg-subtle); padding:0.75rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--violet); font-size:0.9rem; color:var(--text-body); line-height:1.45; margin-top:auto;">
        <strong>Advice:</strong> "${sc.advice}"
      </div>
    `;

    card.addEventListener('click', () => {
      speakUK(sc.advice);
    });

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   9. PORTAL: PHRASES FROM LISTENING (PICTURE 1)
   -------------------------------------------------------------------------- */
let listeningSelectedPhrase = null;
let listeningMatchedCount = 0;

function initListeningPhrasesMatch() {
  const grid = document.getElementById('portalListeningPhrasesGrid');
  const msgEl = document.getElementById('portalListeningMsg');
  const btnRestart = document.getElementById('btnRestartListeningPhrases');
  const btnSolution = document.getElementById('btnSolutionListeningPhrases');

  if (!grid) return;

  listeningSelectedPhrase = null;
  listeningMatchedCount = 0;
  if (msgEl) msgEl.textContent = '';

  const phrases = [...PORTAL_LISTENING_PHRASES].sort(() => 0.5 - Math.random());
  const meanings = [...PORTAL_LISTENING_PHRASES].sort(() => 0.5 - Math.random());

  grid.innerHTML = `
    <div class="portal-column" id="portalListeningPhrasesCol">
      <div class="portal-column-header">Phrases from Listening</div>
    </div>
    <div class="portal-column" id="portalListeningMeaningsCol">
      <div class="portal-column-header">Meanings</div>
    </div>
  `;

  const colP = document.getElementById('portalListeningPhrasesCol');
  const colM = document.getElementById('portalListeningMeaningsCol');

  phrases.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'portal-match-card';
    btn.dataset.id = item.id;
    btn.innerHTML = `<span class="phrase-text">${item.phrase}</span><span class="match-check"></span>`;

    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-matched')) return;
      colP.querySelectorAll('.portal-match-card').forEach(c => c.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      listeningSelectedPhrase = btn;
      speakUK(item.phrase);
    });

    colP.appendChild(btn);
  });

  meanings.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'portal-match-card';
    btn.dataset.id = item.id;
    btn.innerHTML = `<span class="meaning-text">${item.meaning}</span><span class="match-check"></span>`;

    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-matched')) return;
      if (!listeningSelectedPhrase) {
        if (window.AnimEngine) AnimEngine.showToast("Click a phrase on the left first!", "warning");
        return;
      }

      if (listeningSelectedPhrase.dataset.id === btn.dataset.id) {
        listeningSelectedPhrase.classList.remove('is-selected');
        listeningSelectedPhrase.classList.add('is-matched');
        btn.classList.add('is-matched');
        listeningSelectedPhrase.querySelector('.match-check').textContent = '✓';
        btn.querySelector('.match-check').textContent = '✓';
        listeningMatchedCount++;
        listeningSelectedPhrase = null;

        if (listeningMatchedCount === PORTAL_LISTENING_PHRASES.length) {
          if (msgEl) msgEl.textContent = '🎉 All 6 phrases matched successfully!';
          if (window.AnimEngine) {
            AnimEngine.fireConfetti({ count: 80 });
            AnimEngine.showToast('Portal Listening Exercise Complete! 🎉', 'success');
          }
        }
      } else {
        btn.classList.add('is-wrong');
        setTimeout(() => btn.classList.remove('is-wrong'), 700);
      }
    });

    colM.appendChild(btn);
  });

  if (btnRestart) btnRestart.onclick = initListeningPhrasesMatch;
  if (btnSolution) {
    btnSolution.onclick = () => {
      colP.querySelectorAll('.portal-match-card').forEach(c => {
        c.classList.add('is-matched');
        c.querySelector('.match-check').textContent = '✓';
      });
      colM.querySelectorAll('.portal-match-card').forEach(c => {
        c.classList.add('is-matched');
        c.querySelector('.match-check').textContent = '✓';
      });
      if (msgEl) msgEl.textContent = 'Showing official British Council portal answers.';
    };
  }
}

/* --------------------------------------------------------------------------
   10. PORTAL: SENTENCE HALVES (PICTURE 3)
   -------------------------------------------------------------------------- */
let halvesSelectedLeft = null;
let halvesMatchedCount = 0;

function initSentenceHalvesMatch() {
  const grid = document.getElementById('portalSentenceHalvesGrid');
  const msgEl = document.getElementById('portalHalvesMsg');
  const btnRestart = document.getElementById('btnRestartSentenceHalves');
  const btnValidate = document.getElementById('btnValidateSentenceHalves');

  if (!grid) return;

  halvesSelectedLeft = null;
  halvesMatchedCount = 0;
  if (msgEl) msgEl.textContent = '';

  const lefts = [...PORTAL_SENTENCE_HALVES].sort(() => 0.5 - Math.random());
  const rights = [...PORTAL_SENTENCE_HALVES].sort(() => 0.5 - Math.random());

  grid.innerHTML = `
    <div class="portal-column" id="portalHalvesLeftCol">
      <div class="portal-column-header">If-Clause / Main Clause</div>
    </div>
    <div class="portal-column" id="portalHalvesRightCol">
      <div class="portal-column-header">Result / Condition Partner</div>
    </div>
  `;

  const colL = document.getElementById('portalHalvesLeftCol');
  const colR = document.getElementById('portalHalvesRightCol');

  lefts.forEach(item => {
    const card = document.createElement('div');
    card.className = 'portal-match-card';
    card.dataset.id = item.id;
    card.innerHTML = `<span class="phrase-text">${item.left}</span><span class="match-check"></span>`;

    card.addEventListener('click', () => {
      if (card.classList.contains('is-matched')) return;
      colL.querySelectorAll('.portal-match-card').forEach(c => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
      halvesSelectedLeft = card;
      speakUK(item.left);
    });

    colL.appendChild(card);
  });

  rights.forEach(item => {
    const card = document.createElement('div');
    card.className = 'portal-match-card';
    card.dataset.id = item.id;
    card.innerHTML = `<span class="meaning-text">${item.right}</span><span class="match-check"></span>`;

    card.addEventListener('click', () => {
      if (card.classList.contains('is-matched')) return;
      if (!halvesSelectedLeft) {
        if (window.AnimEngine) AnimEngine.showToast("Click a clause on the left first!", "warning");
        return;
      }

      if (halvesSelectedLeft.dataset.id === card.dataset.id) {
        halvesSelectedLeft.classList.remove('is-selected');
        halvesSelectedLeft.classList.add('is-matched');
        card.classList.add('is-matched');
        halvesSelectedLeft.querySelector('.match-check').textContent = '✓';
        card.querySelector('.match-check').textContent = '✓';
        halvesMatchedCount++;
        const partner = PORTAL_SENTENCE_HALVES.find(h => h.id === card.dataset.id);
        if (partner) speakUK(partner.full);
        halvesSelectedLeft = null;

        if (halvesMatchedCount === PORTAL_SENTENCE_HALVES.length) {
          if (msgEl) msgEl.textContent = '🎉 All 4 second conditional sentences validated!';
          if (window.AnimEngine) {
            AnimEngine.fireConfetti({ count: 70 });
            AnimEngine.showToast('Sentence Halves Complete! 🎉', 'success');
          }
        }
      } else {
        card.classList.add('is-wrong');
        setTimeout(() => card.classList.remove('is-wrong'), 700);
      }
    });

    colR.appendChild(card);
  });

  if (btnRestart) btnRestart.onclick = initSentenceHalvesMatch;
  if (btnValidate) {
    btnValidate.onclick = () => {
      colL.querySelectorAll('.portal-match-card').forEach(c => {
        c.classList.add('is-matched');
        c.querySelector('.match-check').textContent = '✓';
      });
      colR.querySelectorAll('.portal-match-card').forEach(c => {
        c.classList.add('is-matched');
        c.querySelector('.match-check').textContent = '✓';
      });
      if (msgEl) msgEl.textContent = 'All sentence partner pairs validated from portal key.';
    };
  }
}

/* --------------------------------------------------------------------------
   11. CLASSROOM SURVEY: FIND SOMEONE WHO... (PICTURE 4)
   -------------------------------------------------------------------------- */
function initFindSomeoneWho() {
  const container = document.getElementById('findSomeoneGrid');
  const counterBadge = document.getElementById('findSomeoneCounterBadge');
  if (!container) return;

  const savedSurvey = JSON.parse(localStorage.getItem('bc_survey_state') || '{}');

  function updateCount() {
    let count = 0;
    FIND_SOMEONE_WHO_DATA.forEach(item => {
      const state = savedSurvey[item.id];
      if (state && (state.name || state.found)) count++;
      else if (!state && (item.defaultName || item.defaultFound)) count++;
    });
    if (counterBadge) counterBadge.textContent = `${count} / ${FIND_SOMEONE_WHO_DATA.length} Found`;
  }

  container.innerHTML = '';
  FIND_SOMEONE_WHO_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'find-someone-card';

    const currentName = savedSurvey[item.id]?.name !== undefined ? savedSurvey[item.id].name : item.defaultName;
    const isFound = savedSurvey[item.id]?.found !== undefined ? savedSurvey[item.id].found : item.defaultFound;

    card.innerHTML = `
      <div class="find-someone-top">
        <span class="statement-num">#${item.id}</span>
        <button class="audio-circle-btn btn-ask-question" title="Listen to question in British English">🔊</button>
      </div>
      <div class="find-someone-statement">
        ${item.statement}
      </div>
      <div class="find-someone-ask">
        🗣️ <em>Ask:</em> "${item.askQuestion}"
      </div>
      <div class="find-chips-row">
        <span class="quick-chip-btn ${currentName === 'Osama' ? 'chip-osama' : ''}" data-name="Osama">Osama</span>
        <span class="quick-chip-btn ${currentName === 'Mariem' ? 'chip-mariem' : ''}" data-name="Mariem">Mariem</span>
        <span class="quick-chip-btn ${currentName === 'I' ? 'chip-me' : ''}" data-name="I">Me</span>
        <span class="quick-chip-btn" data-name="clear">Clear</span>
      </div>
      <div class="find-input-wrap">
        <input type="text" class="find-name-input" data-id="${item.id}" placeholder="Classmate name..." value="${currentName}">
      </div>
    `;

    card.querySelector('.btn-ask-question').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.askQuestion);
    });

    const input = card.querySelector('.find-name-input');
    input.addEventListener('input', () => {
      savedSurvey[item.id] = { name: input.value.trim(), found: !!input.value.trim() };
      localStorage.setItem('bc_survey_state', JSON.stringify(savedSurvey));
      updateCount();
    });

    card.querySelectorAll('.quick-chip-btn').forEach(chip => {
      chip.addEventListener('click', () => {
        const chipName = chip.dataset.name;
        if (chipName === 'clear') {
          input.value = '';
          savedSurvey[item.id] = { name: '', found: false };
        } else {
          input.value = chipName;
          savedSurvey[item.id] = { name: chipName, found: true };
        }
        localStorage.setItem('bc_survey_state', JSON.stringify(savedSurvey));
        updateCount();
      });
    });

    container.appendChild(card);
  });

  updateCount();
}

/* --------------------------------------------------------------------------
   12. MEDIA HUB & IMAGE LIGHTBOX
   -------------------------------------------------------------------------- */
function initMediaHub() {
  const grid = document.getElementById('mediaHubGrid');
  if (!grid) return;

  grid.innerHTML = '';
  MEDIA_HUB_ITEMS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'media-hub-card';

    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}" class="media-hub-thumb" loading="lazy">
      <div class="media-hub-content">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">${item.badge}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.source}</span>
        </div>
        <h4 style="font-size:1.02rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${item.title}</h4>
        <p style="font-size:0.86rem; color:var(--text-body); line-height:1.4; margin:0 0 0.5rem;">${item.desc}</p>
        <div style="margin-top:auto; display:flex; justify-content:flex-end;">
          <button type="button" class="btn-outline-subtle" style="font-size:0.8rem; padding:0.25rem 0.65rem;">
            🔍 View Full Size
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(item.imgUrl, item.title, `${item.source} • ${item.desc}`);
    });

    grid.appendChild(card);
  });
}

function openLightbox(imgUrlOrKey, title, caption) {
  const modal = document.getElementById('imageLightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const capEl = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  let resolvedSrc = imgUrlOrKey;
  if (!resolvedSrc.startsWith('.') && !resolvedSrc.startsWith('http') && !resolvedSrc.startsWith('data:')) {
    const found1 = (typeof MEDIA_HUB_ITEMS !== 'undefined') ? MEDIA_HUB_ITEMS.find(m => m.key === imgUrlOrKey) : null;
    const found2 = (typeof SESSION_1_MEDIA_ITEMS !== 'undefined') ? SESSION_1_MEDIA_ITEMS.find(m => m.key === imgUrlOrKey) : null;
    const found3 = (typeof SESSION_2_MEDIA_ITEMS !== 'undefined') ? SESSION_2_MEDIA_ITEMS.find(m => m.key === imgUrlOrKey) : null;
    const found = found1 || found2 || found3;
    resolvedSrc = found ? found.imgUrl : `./assets/images/${imgUrlOrKey}.jpg`;
  }

  img.src = resolvedSrc;
  if (titleEl) titleEl.textContent = title || 'Classroom Material Preview';
  if (capEl) capEl.textContent = caption || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('lightbox-close-btn')) return;
  const modal = document.getElementById('imageLightboxModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* --------------------------------------------------------------------------
   13. READING MATCHING (a–f) FOR SESSION 10
   -------------------------------------------------------------------------- */
function initReadingMatch() {
  const checkBtn = document.getElementById('btnCheckMatching');
  const resetBtn = document.getElementById('btnResetMatching');
  const revealBtn = document.getElementById('btnRevealBoardAnswers');
  const resultBox = document.getElementById('matchScoreResult');

  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      let score = 0;
      ['a', 'b', 'c', 'd', 'e', 'f'].forEach(letter => {
        const sel = document.getElementById(`sel_match_${letter}`);
        const expected = READING_MATCH_ANSWERS[letter];
        if (sel) {
          if (sel.value === expected) {
            score++;
            sel.style.borderColor = 'var(--emerald)';
          } else {
            sel.style.borderColor = 'var(--rose)';
          }
        }
      });

      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.style.background = score === 6 ? 'var(--emerald-bg)' : 'var(--amber-bg)';
        resultBox.style.color = score === 6 ? 'var(--emerald)' : 'var(--amber)';
        resultBox.innerHTML = score === 6
          ? `🎉 100% Correct (6/6)! Exactly matches the classroom whiteboard!`
          : `You scored ${score}/6. Review the red highlighted items and try again!`;
      }
      if (score === 6 && window.AnimEngine) {
        AnimEngine.fireConfetti({ count: 70 });
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      ['a', 'b', 'c', 'd', 'e', 'f'].forEach(letter => {
        const sel = document.getElementById(`sel_match_${letter}`);
        if (sel) {
          sel.value = '';
          sel.style.borderColor = 'var(--border-light)';
        }
      });
      if (resultBox) resultBox.style.display = 'none';
    });
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      for (const [letter, eventName] of Object.entries(READING_MATCH_ANSWERS)) {
        const sel = document.getElementById(`sel_match_${letter}`);
        if (sel) {
          sel.value = eventName;
          sel.style.borderColor = 'var(--emerald)';
        }
      }
      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.style.background = 'var(--emerald-bg)';
        resultBox.style.color = 'var(--emerald)';
        resultBox.innerHTML = `<strong>Official Whiteboard Key:</strong> Boat building: a, f • Nature park challenge: b, d, e • City solutions: c`;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   SESSION 1: INTERACTIVE MODULE RENDERERS
   -------------------------------------------------------------------------- */
function renderSession1Formulas() {
  const container = document.getElementById('session1FormulasGrid');
  if (!container || !window.SESSION_1_DESCRIBING_OBJECTS) return;

  container.innerHTML = '';
  SESSION_1_DESCRIBING_OBJECTS.formulas.forEach(f => {
    const box = document.createElement('div');
    box.className = 'formula-box';
    box.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <code style="font-weight:800; color:var(--bc-blue); font-size:0.95rem;">${f.pattern}</code>
        <button class="audio-circle-btn" title="Listen in British English">🔊</button>
      </div>
      <div style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin-top:0.25rem;">
        "${f.example}"
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">
        ${f.usage}
      </div>
    `;
    box.querySelector('.audio-circle-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(f.example);
    });
    container.appendChild(box);
  });
}

function renderSession1Riddles() {
  const container = document.getElementById('session1RiddlesGrid');
  if (!container || !window.SESSION_1_DESCRIBING_OBJECTS) return;

  container.innerHTML = '';
  SESSION_1_DESCRIBING_OBJECTS.riddles.forEach((r, idx) => {
    const card = document.createElement('div');
    card.className = 'object-riddle-card';
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">Tool Riddle ${idx + 1}</span>
        <button class="audio-circle-btn btn-riddle-audio" title="Listen to clues">🔊</button>
      </div>
      <div style="font-size:0.88rem; color:var(--text-body); display:flex; flex-direction:column; gap:0.4rem;">
        ${r.clues.map(c => `<div>• ${c}</div>`).join('')}
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">
        <strong>Made of:</strong> ${r.madeOf}
      </div>
      <div style="margin-top:auto; padding-top:0.5rem; display:flex; justify-content:space-between; align-items:center;">
        <button type="button" class="btn-outline-subtle btn-reveal-tool" style="font-size:0.8rem; padding:0.3rem 0.75rem;">
          👁 Reveal Tool
        </button>
        <span class="tool-answer-badge" style="display:none; font-weight:800; color:var(--emerald); font-size:0.95rem;">
          ✓ ${r.tool}
        </span>
      </div>
    `;

    const btnReveal = card.querySelector('.btn-reveal-tool');
    const answerBadge = card.querySelector('.tool-answer-badge');
    btnReveal.addEventListener('click', () => {
      answerBadge.style.display = 'inline-block';
      btnReveal.style.display = 'none';
      speakUK(`The tool is a ${r.tool}.`);
    });

    card.querySelector('.btn-riddle-audio').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(r.audio);
    });

    container.appendChild(card);
  });
}

function renderSession1RelativeClauses() {
  const combosContainer = document.getElementById('session1RelativeCombosGrid');
  const chainingContainer = document.getElementById('session1ChainingGrid');

  if (combosContainer && window.SESSION_1_RELATIVE_CLAUSES) {
    combosContainer.innerHTML = '';
    SESSION_1_RELATIVE_CLAUSES.combos.forEach(c => {
      const card = document.createElement('div');
      card.className = 'study-card';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">Relative Pronoun: ${c.relativePronoun}</span>
          <button class="audio-circle-btn btn-combo-audio" title="Listen in British English">🔊</button>
        </div>
        <div style="font-size:0.86rem; color:var(--text-muted); margin-bottom:0.5rem; line-height:1.4;">
          <strong>Sentence 1:</strong> "${c.sentenceA}"<br>
          <strong>Sentence 2:</strong> "${c.sentenceB}"
        </div>
        <div style="background:var(--bg-subtle); padding:0.75rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--emerald); font-size:0.9rem; font-weight:700; color:var(--text-main); margin-top:auto;">
          "${c.combined}"
        </div>
      `;
      card.querySelector('.btn-combo-audio').addEventListener('click', () => speakUK(c.spoken));
      combosContainer.appendChild(card);
    });
  }

  if (chainingContainer && window.SESSION_1_RELATIVE_CLAUSES) {
    chainingContainer.innerHTML = '';
    SESSION_1_RELATIVE_CLAUSES.chaining.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'chaining-card';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="font-size:1.05rem; font-weight:800; color:var(--text-main);">${ch.title}</h4>
          <button class="audio-circle-btn btn-chain-audio" title="Listen to full chained sentence">🔊</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.35rem; font-size:0.88rem; color:var(--text-muted);">
          <div class="chain-step-row"><span>1️⃣</span> <span>"${ch.step1}"</span></div>
          <div class="chain-step-row"><span>2️⃣</span> <span>"${ch.step2}"</span></div>
          <div class="chain-step-row"><span>3️⃣</span> <span>"${ch.step3}"</span></div>
        </div>
        <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-sm); border-left:4px solid var(--violet); font-size:0.92rem; font-weight:700; color:var(--text-main); line-height:1.5;">
          "${ch.chainedResult}"
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">
          💡 ${ch.rule}
        </div>
      `;
      card.querySelector('.btn-chain-audio').addEventListener('click', () => speakUK(ch.chainedResult));
      chainingContainer.appendChild(card);
    });
  }
}

function renderSession1ListeningGaps() {
  const container = document.getElementById('session1ListeningConvsWrap');
  if (!container || !window.SESSION_1_LISTENING_GAPS) return;

  container.innerHTML = '';
  SESSION_1_LISTENING_GAPS.forEach(conv => {
    const card = document.createElement('div');
    card.className = 'listening-conv-card';
    card.dataset.convId = conv.id;

    let excerptsHtml = conv.excerpts.map(ex => `
      <div class="conv-excerpt-row">
        <strong>${ex.num}.</strong> ${ex.prefix}
        <input type="text" class="conv-gap-input" data-num="${ex.num}" placeholder="${ex.displayHint}" autocomplete="off" spellcheck="false">
        ${ex.suffix}
        <div class="conv-gap-feedback" id="gap_fb_${ex.num}" style="display:none; font-size:0.82rem; font-weight:700; margin-top:0.35rem;"></div>
      </div>
    `).join('');

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main);">${conv.title}</h4>
          <span style="font-size:0.82rem; color:var(--text-muted);">${conv.situation}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="teacher-badge" style="background:var(--amber-bg); color:var(--amber); border-color:var(--amber);">🔧 Tools: ${conv.toolsNeeded}</span>
          <button class="audio-circle-btn btn-conv-audio" title="Listen to full conversation dialogue">🔊</button>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${excerptsHtml}
      </div>
    `;

    card.querySelector('.btn-conv-audio').addEventListener('click', () => {
      speakUK(conv.fullAudioTranscript);
    });

    container.appendChild(card);
  });

  // Wire buttons
  const btnCheck = document.getElementById('btnCheckSession1Gaps');
  const btnReset = document.getElementById('btnResetSession1Gaps');
  const btnReveal = document.getElementById('btnRevealSession1Gaps');

  if (btnCheck) {
    btnCheck.onclick = () => {
      let correct = 0;
      let total = 0;

      SESSION_1_LISTENING_GAPS.forEach(conv => {
        conv.excerpts.forEach(ex => {
          total++;
          const input = container.querySelector(`input[data-num="${ex.num}"]`);
          const fb = document.getElementById(`gap_fb_${ex.num}`);
          if (!input) return;

          const userVal = (input.value || '').trim().toLowerCase().replace(/[.,!]/g, '');
          const isOk = ex.gapKey.some(k => k.toLowerCase().replace(/[.,!]/g, '') === userVal);

          input.className = 'conv-gap-input ' + (isOk ? 'is-correct' : 'is-wrong');
          if (fb) {
            fb.style.display = 'block';
            if (isOk) {
              fb.style.color = 'var(--emerald)';
              fb.textContent = '✓ Correct!';
              correct++;
            } else {
              fb.style.color = 'var(--rose)';
              fb.textContent = `Expected: "${ex.gapKey[0]}"`;
            }
          }
        });
      });

      if (correct === total && window.AnimEngine) {
        AnimEngine.fireConfetti({ count: 70 });
        AnimEngine.showToast("Outstanding! All listening gap-fills correct!", "success");
      }
      speakUK(correct === total ? "Excellent! All listening sentences are completely correct." : `You got ${correct} out of ${total} listening gaps correct.`);
    };
  }

  if (btnReset) {
    btnReset.onclick = () => {
      container.querySelectorAll('.conv-gap-input').forEach(input => {
        input.value = '';
        input.className = 'conv-gap-input';
      });
      container.querySelectorAll('.conv-gap-feedback').forEach(fb => {
        fb.style.display = 'none';
      });
    };
  }

  if (btnReveal) {
    btnReveal.onclick = () => {
      SESSION_1_LISTENING_GAPS.forEach(conv => {
        conv.excerpts.forEach(ex => {
          const input = container.querySelector(`input[data-num="${ex.num}"]`);
          const fb = document.getElementById(`gap_fb_${ex.num}`);
          if (input) {
            input.value = ex.gapKey[0];
            input.className = 'conv-gap-input is-correct';
          }
          if (fb) {
            fb.style.display = 'block';
            fb.style.color = 'var(--emerald)';
            fb.textContent = '✓ Whiteboard Key Answer';
          }
        });
      });
      speakUK("All listening gap-fill answers revealed from the whiteboard.");
    };
  }
}

function renderSession1CompoundStress() {
  const container = document.getElementById('session1CompoundStressGrid');
  if (!container || !window.SESSION_1_COMPOUND_STRESS) return;

  container.innerHTML = '';
  SESSION_1_COMPOUND_STRESS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'compound-stress-card';
    card.style.cursor = 'pointer';

    const isFirst = item.stressedWord === 'first';
    const parts = item.displayCapitalized.split(' ');
    const displayHtml = isFirst
      ? `<span class="stressed">${parts[0]}</span> ${parts.slice(1).join(' ')}`
      : `${parts.slice(0, -1).join(' ')} <span class="stressed">${parts[parts.length - 1]}</span>`;

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="stress-badge ${isFirst ? 'stress-first' : 'stress-second'}">
          ${item.pattern} • ${isFirst ? '1st Stressed' : '2nd Stressed'}
        </span>
        <button class="audio-circle-btn btn-stress-audio" title="Listen with UK stress">🔊</button>
      </div>
      <div class="stress-word-display ${isFirst ? 'stress-first' : 'stress-second'}">
        ${displayHtml}
      </div>
      <div style="font-size:0.82rem; color:var(--text-muted); font-family:monospace;">
        ${item.ipa}
      </div>
      <div style="background:var(--bg-subtle); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--text-body); margin-top:auto;">
        <em>"${item.sentence}"</em>
      </div>
      <div style="font-size:0.78rem; color:var(--text-muted); font-style:italic;">
        ${item.ruleNote}
      </div>
    `;

    card.addEventListener('click', () => {
      speakUK(item.sentence);
    });

    card.querySelector('.btn-stress-audio').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.term);
    });

    container.appendChild(card);
  });
}

function renderSession1ClarifyingChecking() {
  const clarList = document.getElementById('clarifyingExpressionsList');
  const chkList = document.getElementById('checkingExpressionsList');
  if (!window.SESSION_1_CLARIFYING_CHECKING) return;

  if (clarList) {
    clarList.innerHTML = '';
    SESSION_1_CLARIFYING_CHECKING.clarifying.forEach(item => {
      const row = document.createElement('div');
      row.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.65rem 0.85rem; background:var(--bg-subtle); border-radius:var(--radius-sm);";
      row.innerHTML = `
        <div>
          <strong style="color:var(--text-main); font-size:0.92rem;">"${item.phrase}"</strong><br>
          <small style="color:var(--text-muted); font-size:0.8rem;">${item.meaning}</small>
        </div>
        <button class="audio-circle-btn">🔊</button>
      `;
      row.querySelector('.audio-circle-btn').addEventListener('click', () => speakUK(item.phrase));
      clarList.appendChild(row);
    });
  }

  if (chkList) {
    chkList.innerHTML = '';
    SESSION_1_CLARIFYING_CHECKING.checking.forEach(item => {
      const row = document.createElement('div');
      row.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.65rem 0.85rem; background:var(--bg-subtle); border-radius:var(--radius-sm);";
      row.innerHTML = `
        <div>
          <strong style="color:var(--text-main); font-size:0.92rem;">"${item.phrase}"</strong><br>
          <small style="color:var(--text-muted); font-size:0.8rem;">${item.meaning}</small>
        </div>
        <button class="audio-circle-btn">🔊</button>
      `;
      row.querySelector('.audio-circle-btn').addEventListener('click', () => speakUK(item.phrase));
      chkList.appendChild(row);
    });
  }
}

function renderSession1MediaHub() {
  const grid = document.getElementById('session1MediaHubGrid');
  if (!grid || !window.SESSION_1_MEDIA_ITEMS) return;

  grid.innerHTML = '';
  SESSION_1_MEDIA_ITEMS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'media-hub-card';

    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}" class="media-hub-thumb" loading="lazy">
      <div class="media-hub-content">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">${item.badge}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.source}</span>
        </div>
        <h4 style="font-size:1.02rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${item.title}</h4>
        <p style="font-size:0.86rem; color:var(--text-body); line-height:1.4; margin:0 0 0.5rem;">${item.desc}</p>
        <div style="margin-top:auto; display:flex; justify-content:flex-end;">
          <button type="button" class="btn-outline-subtle" style="font-size:0.8rem; padding:0.25rem 0.65rem;">
            🔍 View Full Size
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(item.imgUrl, item.title, `${item.source} • ${item.desc}`);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   SESSION 2 STUDY MATERIALS RENDERERS
   ========================================================================== */
function renderSession2IndirectQuestions() {
  const container = document.getElementById('session2IndirectPracticeGrid');
  if (!container || !window.SESSION_2_INDIRECT_QUESTIONS) return;

  container.innerHTML = '';
  SESSION_2_INDIRECT_QUESTIONS.practiceItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'indirect-practice-card';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <div>
          <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Direct Question</span>
          <h4 style="font-size:1.02rem; font-weight:800; color:var(--text-main); margin-top:0.15rem;">"${item.direct}"</h4>
        </div>
        <button class="audio-circle-btn btn-direct-audio" title="Listen to direct question">🔊</button>
      </div>

      <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
        <span class="indirect-prompt-badge">Prompt:</span>
        <strong style="color:var(--bc-blue); font-size:0.95rem;">${item.prompt}</strong>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.4rem;">
        <input type="text" class="indirect-input-box" data-id="${item.id}" placeholder="complete the polite sentence..." autocomplete="off" spellcheck="false">
        <div id="indirect_fb_${item.id}" style="font-size:0.84rem; font-weight:700; display:none;"></div>
      </div>

      <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:0.4rem;">
        <span style="font-size:0.78rem; color:var(--text-muted); font-style:italic;">Target: polite indirect statement</span>
        <button class="audio-circle-btn btn-indirect-audio" title="Listen to polite indirect sentence">🔊</button>
      </div>
    `;

    card.querySelector('.btn-direct-audio').addEventListener('click', () => {
      speakUK(item.direct);
    });

    card.querySelector('.btn-indirect-audio').addEventListener('click', () => {
      speakUK(item.spoken);
    });

    container.appendChild(card);
  });

  // Wire buttons
  const btnCheck = document.getElementById('btnCheckIndirectQuestions');
  const btnReset = document.getElementById('btnResetIndirectQuestions');
  const btnReveal = document.getElementById('btnRevealIndirectQuestions');

  if (btnCheck) {
    btnCheck.onclick = () => {
      let correct = 0;
      const total = SESSION_2_INDIRECT_QUESTIONS.practiceItems.length;

      SESSION_2_INDIRECT_QUESTIONS.practiceItems.forEach(item => {
        const input = container.querySelector(`input[data-id="${item.id}"]`);
        const fb = document.getElementById(`indirect_fb_${item.id}`);
        if (!input || !fb) return;

        const val = input.value.trim().toLowerCase();
        const cleanVal = val.replace(/[?.!]+$/, '').trim();

        const isMatch = item.expectedKeys.some(k => {
          const cleanK = k.toLowerCase().replace(/[?.!]+$/, '').trim();
          return cleanVal === cleanK || val === k.toLowerCase();
        });

        if (isMatch) {
          correct++;
          input.className = 'indirect-input-box is-correct';
          fb.style.display = 'block';
          fb.style.color = 'var(--emerald)';
          fb.textContent = '✓ Spot on! Correct statement order.';
        } else {
          input.className = 'indirect-input-box is-wrong';
          fb.style.display = 'block';
          fb.style.color = 'var(--rose)';
          fb.textContent = `Expected: "${item.expectedDisplay}"`;
        }
      });

      if (correct === total && window.AnimEngine) {
        AnimEngine.fireConfetti({ count: 70 });
        AnimEngine.showToast("Outstanding! All indirect question rewrites correct!", "success");
      }
      speakUK(correct === total
        ? "Excellent work! All indirect questions are completely correct."
        : `You got ${correct} out of ${total} indirect questions correct.`);
    };
  }

  if (btnReset) {
    btnReset.onclick = () => {
      container.querySelectorAll('.indirect-input-box').forEach(input => {
        input.value = '';
        input.className = 'indirect-input-box';
      });
      container.querySelectorAll('[id^="indirect_fb_"]').forEach(fb => {
        fb.style.display = 'none';
      });
    };
  }

  if (btnReveal) {
    btnReveal.onclick = () => {
      SESSION_2_INDIRECT_QUESTIONS.practiceItems.forEach(item => {
        const input = container.querySelector(`input[data-id="${item.id}"]`);
        const fb = document.getElementById(`indirect_fb_${item.id}`);
        if (input) {
          const promptClean = item.prompt.replace('…', '').trim();
          let displayPart = item.expectedDisplay;
          if (displayPart.toLowerCase().startsWith(promptClean.toLowerCase())) {
            displayPart = displayPart.slice(promptClean.length).trim();
          }
          input.value = displayPart || item.expectedDisplay;
          input.className = 'indirect-input-box is-correct';
        }
        if (fb) {
          fb.style.display = 'block';
          fb.style.color = 'var(--emerald)';
          fb.textContent = '✓ Whiteboard Key Answer';
        }
      });
      speakUK("All indirect question answers revealed from the whiteboard.");
    };
  }
}

function renderSession2ListeningExtracts() {
  const container = document.getElementById('session2ListeningExtractsWrap');
  if (!container || !window.SESSION_2_LISTENING_EXTRACTS) return;

  container.innerHTML = '';
  SESSION_2_LISTENING_EXTRACTS.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'listening-conv-card';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge">Extract #${ex.num} • Travel Agency Audio</span>
        <button class="audio-circle-btn btn-extract-audio" title="Listen to full spoken extract">🔊</button>
      </div>
      <div class="conv-excerpt-row">
        <span>${ex.prefix ? ex.prefix + ' ' : ''}</span>
        <input type="text" class="conv-gap-input s2-gap-input" data-num="${ex.num}" placeholder="${ex.displayHint}" autocomplete="off" spellcheck="false">
        <span>${ex.suffix ? ' ' + ex.suffix : ''}</span>
      </div>
      <div id="s2_gap_fb_${ex.num}" class="conv-gap-feedback" style="font-size:0.84rem; font-weight:700; display:none; padding:0 0.85rem;"></div>
    `;

    card.querySelector('.btn-extract-audio').addEventListener('click', () => {
      speakUK(ex.full);
    });

    container.appendChild(card);
  });

  const btnCheck = document.getElementById('btnCheckSession2Gaps');
  const btnReset = document.getElementById('btnResetSession2Gaps');
  const btnReveal = document.getElementById('btnRevealSession2Gaps');

  if (btnCheck) {
    btnCheck.onclick = () => {
      let correct = 0;
      const total = SESSION_2_LISTENING_EXTRACTS.length;

      SESSION_2_LISTENING_EXTRACTS.forEach(ex => {
        const input = container.querySelector(`input[data-num="${ex.num}"]`);
        const fb = document.getElementById(`s2_gap_fb_${ex.num}`);
        if (!input || !fb) return;

        const val = input.value.trim().toLowerCase();
        const cleanVal = val.replace(/[?.!]+$/, '').trim();

        const isMatch = ex.gapKey.some(k => {
          const cleanK = k.toLowerCase().replace(/[?.!]+$/, '').trim();
          return cleanVal === cleanK || val === k.toLowerCase();
        });

        if (isMatch) {
          correct++;
          input.className = 'conv-gap-input s2-gap-input is-correct';
          fb.style.display = 'block';
          fb.style.color = 'var(--emerald)';
          fb.textContent = '✓ Correct gap-fill!';
        } else {
          input.className = 'conv-gap-input s2-gap-input is-wrong';
          fb.style.display = 'block';
          fb.style.color = 'var(--rose)';
          fb.textContent = `Expected: "${ex.gapKey[0]}"`;
        }
      });

      if (correct === total && window.AnimEngine) {
        AnimEngine.fireConfetti({ count: 70 });
        AnimEngine.showToast("Outstanding! All listening extracts correct!", "success");
      }
      speakUK(correct === total
        ? "Excellent! All listening extracts are completely correct."
        : `You got ${correct} out of ${total} gaps correct.`);
    };
  }

  if (btnReset) {
    btnReset.onclick = () => {
      container.querySelectorAll('.s2-gap-input').forEach(input => {
        input.value = '';
        input.className = 'conv-gap-input s2-gap-input';
      });
      container.querySelectorAll('.conv-gap-feedback').forEach(fb => {
        fb.style.display = 'none';
      });
    };
  }

  if (btnReveal) {
    btnReveal.onclick = () => {
      SESSION_2_LISTENING_EXTRACTS.forEach(ex => {
        const input = container.querySelector(`input[data-num="${ex.num}"]`);
        const fb = document.getElementById(`s2_gap_fb_${ex.num}`);
        if (input) {
          input.value = ex.gapKey[0];
          input.className = 'conv-gap-input s2-gap-input is-correct';
        }
        if (fb) {
          fb.style.display = 'block';
          fb.style.color = 'var(--emerald)';
          fb.textContent = '✓ Whiteboard Key Answer';
        }
      });
      speakUK("All listening extract answers revealed from the whiteboard.");
    };
  }
}

function renderSession2Categories() {
  const container = document.getElementById('session2CategoriesMatrixWrap');
  if (!container || !window.SESSION_2_CATEGORIES_MATRIX) return;

  const cols = [
    { title: "Accommodation", icon: "🏨", badge: "7 Items", items: SESSION_2_CATEGORIES_MATRIX.accommodation, color: "var(--bc-blue)" },
    { title: "Flights & Aircraft", icon: "✈️", badge: "7 Items", items: SESSION_2_CATEGORIES_MATRIX.flights, color: "var(--violet)" },
    { title: "Services & Facilities", icon: "🛎️", badge: "7 Items", items: SESSION_2_CATEGORIES_MATRIX.services, color: "var(--emerald)" }
  ];

  container.innerHTML = '';
  cols.forEach(col => {
    const colDiv = document.createElement('div');
    colDiv.className = 'travel-matrix-col';
    colDiv.style.borderTop = `4px solid ${col.color}`;

    let itemsHtml = '';
    col.items.forEach(it => {
      itemsHtml += `
        <div class="matrix-item-row">
          <div style="flex:1;">
            <strong style="color:var(--text-main); font-size:0.92rem; display:block;">${it.name}</strong>
            <small style="color:var(--text-muted); font-size:0.8rem; line-height:1.4; display:block;">${it.desc}</small>
          </div>
          <button class="audio-circle-btn btn-matrix-audio" data-speech="${it.name}. ${it.desc}" title="Listen in British English">🔊</button>
        </div>
      `;
    });

    colDiv.innerHTML = `
      <div class="travel-matrix-header">
        <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
          <span>${col.icon}</span> ${col.title}
        </h4>
        <span class="teacher-badge">${col.badge}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        ${itemsHtml}
      </div>
    `;

    colDiv.querySelectorAll('.btn-matrix-audio').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speakUK(btn.dataset.speech);
      });
    });

    container.appendChild(colDiv);
  });
}

function renderSession2TensesLab() {
  const container = document.getElementById('session2TensesLabGrid');
  if (!container || !window.SESSION_2_TENSES_LAB) return;

  container.innerHTML = '';
  SESSION_2_TENSES_LAB.forEach(t => {
    const card = document.createElement('div');
    card.className = 'tenses-card';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">English Tense Rule</span>
        <button class="audio-circle-btn btn-tense-audio" title="Listen to tense formula and example">🔊</button>
      </div>

      <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin-top:0.15rem;">${t.name}</h4>

      <div class="tenses-formula-tag">
        ${t.formula}
      </div>

      <p style="font-size:0.88rem; color:var(--text-body); line-height:1.45; margin:0;">
        <strong>Usage:</strong> ${t.usage}
      </p>

      <div style="font-size:0.82rem; color:var(--text-muted);">
        <strong>Signal Words:</strong> ${t.timeWords}
      </div>

      ${t.contrastNote ? `<div class="tenses-contrast-callout"><strong>💡 Contrast Key:</strong> ${t.contrastNote}</div>` : ''}

      <div style="background:var(--bg-subtle); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--text-body); margin-top:auto;">
        <em>"${t.example}"</em>
      </div>
    `;

    card.querySelector('.btn-tense-audio').addEventListener('click', () => {
      speakUK(`${t.name}. Formula: ${t.formula}. For example: ${t.example}`);
    });

    container.appendChild(card);
  });
}

function renderSession2MediaHub() {
  const grid = document.getElementById('session2MediaHubGrid');
  if (!grid || !window.SESSION_2_MEDIA_ITEMS) return;

  grid.innerHTML = '';
  SESSION_2_MEDIA_ITEMS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'media-hub-card';

    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}" class="media-hub-thumb" loading="lazy">
      <div class="media-hub-content">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">${item.badge}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.source}</span>
        </div>
        <h4 style="font-size:1.02rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${item.title}</h4>
        <p style="font-size:0.86rem; color:var(--text-body); line-height:1.4; margin:0 0 0.5rem;">${item.desc}</p>
        <div style="margin-top:auto; display:flex; justify-content:flex-end;">
          <button type="button" class="btn-outline-subtle" style="font-size:0.8rem; padding:0.25rem 0.65rem;">
            🔍 View Full Size
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(item.imgUrl, item.title, `${item.source} • ${item.desc}`);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   SESSION 3 STUDY MATERIALS RENDERERS: DECISIONS, THIRD CONDITIONAL & REGRETS
   ========================================================================== */
function renderSession3ThirdConditional() {
  const container = document.getElementById('session3ThirdConditionalList');
  if (!container || !window.SESSION_3_THIRD_CONDITIONAL) return;

  container.innerHTML = '';
  SESSION_3_THIRD_CONDITIONAL.forEach(item => {
    const card = document.createElement('div');
    card.className = 'indirect-practice-card';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge">Scenario #${item.id} • Handout Page 2</span>
        <button class="audio-circle-btn btn-prompt-audio" title="Listen to prompt">🔊</button>
      </div>

      <div style="margin:0.35rem 0;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Handout Prompt:</span>
        <div style="font-size:0.98rem; font-weight:700; color:var(--text-main); margin-top:0.2rem;">"${escapeHtml(item.prompt)}"</div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.4rem;">
        <input type="text" class="indirect-input-box s3-cond-input" data-id="${item.id}" placeholder="complete the result clause..." autocomplete="off" spellcheck="false">
        <div id="s3_cond_fb_${item.id}" style="font-size:0.84rem; font-weight:700; display:none;"></div>
      </div>

      <div style="margin-top:auto; padding-top:0.5rem; display:flex; justify-content:space-between; align-items:center; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle btn-reveal-cond" data-id="${item.id}" style="font-size:0.78rem; padding:0.25rem 0.6rem;">
          👁 Reveal Suggested Solution
        </button>
        <button class="audio-circle-btn btn-full-audio" title="Listen to sample solution in British accent">🔊</button>
      </div>
    `;

    card.querySelector('.btn-prompt-audio').addEventListener('click', () => {
      speakUK(item.prompt);
    });

    const fullSentence = `${item.stem} ${item.sampleAnswer}`;
    card.querySelector('.btn-full-audio').addEventListener('click', () => {
      speakUK(fullSentence);
    });

    const revealBtn = card.querySelector('.btn-reveal-cond');
    revealBtn.addEventListener('click', () => {
      const input = card.querySelector('.s3-cond-input');
      const fb = document.getElementById(`s3_cond_fb_${item.id}`);
      if (input) {
        input.value = item.sampleAnswer;
        input.className = 'indirect-input-box s3-cond-input is-correct';
      }
      if (fb) {
        fb.style.display = 'block';
        fb.style.color = 'var(--emerald)';
        fb.innerHTML = `<strong>💡 Teacher Note:</strong> ${escapeHtml(item.explanation)}`;
      }
      speakUK(fullSentence);
    });

    container.appendChild(card);
  });
}

function renderSession3WaysToRegret() {
  const tbody = document.getElementById('session3WaysToRegretBody');
  if (!tbody || !window.SESSION_3_WAYS_TO_REGRET) return;

  tbody.innerHTML = '';
  SESSION_3_WAYS_TO_REGRET.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border-subtle)';
    tr.style.background = idx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)';

    tr.innerHTML = `
      <td style="padding:0.75rem 1rem;">
        <code style="font-weight:700; color:var(--bc-blue); background:rgba(0,102,245,0.08); padding:0.2rem 0.5rem; border-radius:var(--radius-sm); font-size:0.86rem;">
          ${escapeHtml(row.structure)}
        </code>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.25rem;">${escapeHtml(row.tip)}</div>
      </td>
      <td style="padding:0.75rem 1rem; font-weight:600; color:var(--text-main); font-size:0.86rem;">
        ${escapeHtml(row.mainUse)}
      </td>
      <td style="padding:0.75rem 1rem; font-style:italic; color:var(--text-body); font-size:0.88rem;">
        "${escapeHtml(row.example)}"
      </td>
      <td style="padding:0.75rem 1rem; font-family:'Cairo',var(--font-main); color:#0284c7; direction:rtl; text-align:right; font-size:0.88rem;">
        ${escapeHtml(row.arabic)}
      </td>
      <td style="padding:0.75rem 1rem;">
        <button class="audio-circle-btn btn-regret-audio" data-speech="${escapeJs(row.example)}" title="Listen in British English">🔊</button>
      </td>
    `;

    tr.querySelector('.btn-regret-audio').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(row.example);
    });

    tbody.appendChild(tr);
  });
}

function renderSession3RegretEval() {
  const container = document.getElementById('session3RegretEvalGrid');
  if (!container || !window.SESSION_3_REGRET_EVALUATION) return;

  container.innerHTML = '';
  SESSION_3_REGRET_EVALUATION.forEach(speaker => {
    const card = document.createElement('div');
    card.className = 'study-card';
    card.style.borderLeft = '4px solid var(--bc-blue)';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:800; color:var(--bc-blue); font-size:0.82rem; text-transform:uppercase;">Speaker: ${escapeHtml(speaker.speaker)}</span>
        <button class="audio-circle-btn btn-eval-audio" title="Listen to speaker statement">🔊</button>
      </div>

      <h4 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0.4rem 0;">
        "${escapeHtml(speaker.statement)}"
      </h4>

      <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.6rem;">
        <strong>Grammar Clue:</strong> <code>${escapeHtml(speaker.grammarClue)}</code>
      </div>

      <div style="background:var(--bg-subtle); padding:0.6rem 0.75rem; border-radius:var(--radius-sm); font-size:0.85rem; margin-bottom:0.75rem;">
        <div style="font-weight:700; margin-bottom:0.35rem; color:var(--text-main);">Does ${escapeHtml(speaker.speaker)} regret the decision?</div>
        <div style="display:flex; gap:0.5rem;">
          <button type="button" class="btn-outline-subtle btn-choice-regret" data-choice="yes" style="font-size:0.8rem; padding:0.3rem 0.75rem;">
            Yes, Regrets
          </button>
          <button type="button" class="btn-outline-subtle btn-choice-regret" data-choice="no" style="font-size:0.8rem; padding:0.3rem 0.75rem;">
            No, Does Not Regret
          </button>
        </div>
      </div>

      <div id="eval_fb_${speaker.id}" style="font-size:0.85rem; line-height:1.45; padding:0.5rem 0.75rem; border-radius:var(--radius-sm); display:none;"></div>
    `;

    card.querySelector('.btn-eval-audio').addEventListener('click', () => {
      speakUK(speaker.statement);
    });

    const fb = card.querySelector(`#eval_fb_${speaker.id}`);
    const btns = card.querySelectorAll('.btn-choice-regret');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.getAttribute('data-choice') === 'yes';
        const isCorrect = (chosen === speaker.regrets);

        btns.forEach(b => {
          b.className = 'btn-outline-subtle';
        });

        if (isCorrect) {
          btn.className = 'btn btn-primary';
          fb.style.display = 'block';
          fb.style.background = 'rgba(16, 185, 129, 0.12)';
          fb.style.color = 'var(--emerald)';
          fb.innerHTML = `✓ <strong>Correct!</strong> ${escapeHtml(speaker.explanation)}`;
          speakUK(`Correct! ${speaker.explanation}`);
        } else {
          btn.className = 'btn-outline-subtle is-wrong';
          fb.style.display = 'block';
          fb.style.background = 'rgba(239, 68, 68, 0.12)';
          fb.style.color = 'var(--rose)';
          fb.innerHTML = `✕ <strong>Not quite.</strong> ${escapeHtml(speaker.explanation)}`;
          speakUK(`Not quite. ${speaker.explanation}`);
        }
      });
    });

    container.appendChild(card);
  });
}

function renderSession3TimeLinkers() {
  const container = document.getElementById('session3TimeLinkersContainer');
  if (!container || !window.SESSION_3_TIME_LINKERS) return;

  container.innerHTML = '';
  SESSION_3_TIME_LINKERS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'study-card';
    card.style.borderTop = '3.5px solid var(--violet)';
    card.style.padding = '0.75rem 0.85rem';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--violet);">STEP ${item.rank} OF 6</span>
        <button class="audio-circle-btn btn-linker-audio" style="width:26px; height:26px; font-size:0.75rem;" title="Listen in British English">🔊</button>
      </div>
      <div style="font-size:0.92rem; font-weight:800; color:var(--text-main); margin-bottom:0.25rem;">
        "${escapeHtml(item.text)}"
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">
        ${escapeHtml(item.label)}
      </div>
    `;

    card.querySelector('.btn-linker-audio').addEventListener('click', (e) => {
      e.stopPropagation();
      speakUK(item.text);
    });

    container.appendChild(card);
  });
}

function renderSession3TeacherFeedback() {
  // Grammar Corrections
  const grammarList = document.getElementById('session3GrammarFeedbackList');
  if (grammarList && window.SESSION_3_TEACHER_FEEDBACK && window.SESSION_3_TEACHER_FEEDBACK.grammarErrors) {
    grammarList.innerHTML = '';
    SESSION_3_TEACHER_FEEDBACK.grammarErrors.forEach(item => {
      const row = document.createElement('div');
      row.style.cssText = 'background:var(--bg-subtle); padding:0.6rem 0.85rem; border-radius:var(--radius-sm); border-left:3px solid var(--rose); font-size:0.86rem;';

      row.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <div style="color:var(--rose); text-decoration:line-through; font-weight:600;">✕ "${escapeHtml(item.wrong)}"</div>
            <div style="color:var(--emerald); font-weight:800; margin-top:0.15rem;">✓ "${escapeHtml(item.correct)}"</div>
          </div>
          <button class="audio-circle-btn btn-corr-audio" style="width:26px; height:26px; font-size:0.75rem;" title="Listen to correct English">🔊</button>
        </div>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.35rem;"><strong>Teacher Note:</strong> ${escapeHtml(item.note)}</div>
      `;

      row.querySelector('.btn-corr-audio').addEventListener('click', () => {
        speakUK(item.correct);
      });

      grammarList.appendChild(row);
    });
  }

  // Phonetics List
  const phoneticsList = document.getElementById('session3PhoneticsList');
  if (phoneticsList && window.SESSION_3_TEACHER_FEEDBACK && window.SESSION_3_TEACHER_FEEDBACK.pronunciationList) {
    phoneticsList.innerHTML = '';
    SESSION_3_TEACHER_FEEDBACK.pronunciationList.forEach(item => {
      const row = document.createElement('div');
      row.style.cssText = 'background:var(--bg-subtle); padding:0.6rem 0.85rem; border-radius:var(--radius-sm); border-left:3px solid var(--bc-blue); font-size:0.86rem; display:flex; justify-content:space-between; align-items:center;';

      row.innerHTML = `
        <div>
          <div style="font-weight:800; color:var(--text-main); font-size:0.95rem;">${escapeHtml(item.word)} <code style="font-weight:400; color:var(--bc-blue); font-size:0.84rem;">${escapeHtml(item.ipa)}</code></div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.15rem;">${escapeHtml(item.tip)}</div>
        </div>
        <button class="audio-circle-btn btn-phone-audio" style="width:28px; height:28px; font-size:0.78rem;" title="Listen to pronunciation">🔊</button>
      `;

      row.querySelector('.btn-phone-audio').addEventListener('click', () => {
        speakUK(item.word);
      });

      phoneticsList.appendChild(row);
    });
  }
}

function renderSession3AmusementPark() {
  const container = document.getElementById('session3AmusementParkWrap');
  if (!container || !window.SESSION_3_AMUSEMENT_PARK) return;

  container.innerHTML = `
    <!-- Categories Column -->
    <div class="travel-matrix-col" style="border-top:4px solid var(--violet);">
      <div class="travel-matrix-header">
        <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
          <span>🎡</span> 'El Malahy' Terminology
        </h4>
        <span class="teacher-badge">Slide 17 Note</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${SESSION_3_AMUSEMENT_PARK.categories.map(cat => `
          <div class="matrix-item-row">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.15rem;">
                <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(cat.term)}</strong>
                <span style="font-family:'Cairo',var(--font-main); color:#0284c7; font-size:0.82rem; direction:rtl; font-weight:700;">${escapeHtml(cat.arabic)}</span>
              </div>
              <small style="color:var(--text-muted); font-size:0.82rem; line-height:1.4; display:block;">${escapeHtml(cat.distinction)}</small>
            </div>
            <button class="audio-circle-btn" style="width:28px; height:28px; font-size:0.75rem;" onclick="speakUK('${escapeJs(cat.speech)}')">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Rides Column -->
    <div class="travel-matrix-col" style="border-top:4px solid var(--emerald);">
      <div class="travel-matrix-header">
        <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
          <span>🎢</span> Mechanical Rides (Games)
        </h4>
        <span class="teacher-badge">Fairground Attractions</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${SESSION_3_AMUSEMENT_PARK.rides.map(ride => `
          <div class="matrix-item-row">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.15rem;">
                <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(ride.term)}</strong>
                <span style="font-family:'Cairo',var(--font-main); color:#0284c7; font-size:0.82rem; direction:rtl; font-weight:700;">${escapeHtml(ride.arabic)}</span>
              </div>
              <small style="color:var(--text-muted); font-size:0.82rem; line-height:1.4; display:block;">${escapeHtml(ride.desc)}</small>
            </div>
            <button class="audio-circle-btn" style="width:28px; height:28px; font-size:0.75rem;" onclick="speakUK('${escapeJs(ride.speech)}')">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession3NotebookPages() {
  const container = document.getElementById('session3NotebookPagesContainer');
  if (!container || !window.SESSION_3_NOTEBOOK_PAGES) return;

  container.innerHTML = '';
  SESSION_3_NOTEBOOK_PAGES.forEach(page => {
    const card = document.createElement('div');
    card.className = 'notebook-sheet-card';

    let entriesHtml = page.notes.map(n => `
      <div class="notebook-entry-row ${n.arabic ? 'arabic-highlight' : ''}">
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; margin-bottom:0.2rem;">
            <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(n.term)}</strong>
            ${n.arabic ? `<span class="notebook-arabic-tag">${escapeHtml(n.arabic)}</span>` : ''}
          </div>
          <div style="font-size:0.85rem; color:var(--text-body); line-height:1.45;">
            ${escapeHtml(n.definition)}
          </div>
          ${n.example ? `
            <div style="margin-top:0.35rem; font-size:0.82rem; font-style:italic; color:var(--bc-blue); background:rgba(0,102,245,0.06); padding:0.25rem 0.5rem; border-radius:var(--radius-sm);">
              "${escapeHtml(n.example)}"
            </div>
          ` : ''}
        </div>
        <button class="audio-circle-btn" style="width:28px; height:28px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(n.speech || n.term)}')">🔊</button>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="notebook-header-row">
        <div>
          <span class="notebook-page-badge">📄 Notebook Page ${page.pageNum}</span>
          <h4 class="notebook-handwritten-title" style="margin-top:0.3rem;">${escapeHtml(page.title)}</h4>
        </div>
        <small style="color:var(--text-muted); font-size:0.78rem;">${escapeHtml(page.sub)}</small>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${entriesHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   SESSION 12 STUDY MATERIALS RENDERERS: CHARACTER ANALYSIS & RECRUITMENT
   ========================================================================== */
/* ==========================================================================
   SESSION 12 STUDY MATERIALS RENDERERS: CHARACTER ANALYSIS & RECRUITMENT
   Official British Council Intermediate B1 Handout: ARB_B1_03_I053CEU_HO_v1.0
   Italian Ski Resort Case Study • Smartboard Slides 5, 6, 7, 8 & Classroom Notes
   ========================================================================== */

function getSession12Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

function renderSession12LeadIn() {
  const container = document.getElementById('session12LeadInWrap');
  const data = getSession12Data('SESSION_12_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none; margin-bottom:0.35rem; display:inline-block;">HANDOUT PAGE 1 • LEAD-IN TASK 1 &amp; 2</span>
          <h4 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">Describing Someone You Know: Character &amp; Appearance Table</h4>
          <p style="font-size:0.9rem; color:var(--text-muted); margin:0.2rem 0 0;">
            "${escapeHtml(data.instruction)}"
          </p>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(data.instruction)}')" title="Listen to Lead-in prompt">🔊</button>
      </div>

      <!-- 5-Aspect Notes Table (Student's Classroom Partner Notes) -->
      <div style="overflow-x:auto; margin-bottom:1.25rem;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:var(--bg-subtle); border-bottom:2px solid var(--border-subtle);">
              <th style="padding:0.7rem 0.85rem; color:var(--text-main); font-weight:700; width:22%;">Prompt Category</th>
              <th style="padding:0.7rem 0.85rem; color:var(--bc-blue); font-weight:700; width:45%;">Classroom Partner Notes (Transcribed)</th>
              <th style="padding:0.7rem 0.85rem; color:var(--text-muted); font-weight:700;">Useful B1 Speaking Collocations</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-surface);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">🎂 Age</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.partnerNotes.age)}
                <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(data.partnerNotes.age)}')">🔊</button>
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">"In their mid-twenties", "A 25-year-old professional"</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-subtle);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">🎨 Hobbies</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.partnerNotes.hobbies)}
                <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(data.partnerNotes.hobbies)}')">🔊</button>
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">"Keen on sketching", "Spends spare time drawing"</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-surface);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">💼 Job</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.partnerNotes.job)}
                <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(data.partnerNotes.job)}')">🔊</button>
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">"Works as a software engineer", "Responsible for backend logic"</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-subtle);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">🧠 Character</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.partnerNotes.character)}
                <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(data.partnerNotes.character)}')">🔊</button>
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">"Easy-going and mature", "Remains calm under heavy pressure"</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-surface);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">👤 Appearance</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.partnerNotes.appearance)}
                <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(data.partnerNotes.appearance)}')">🔊</button>
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">"Medium height with curly hair", "Smart and well-presented"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Model Description Card -->
      <div style="background:linear-gradient(135deg, rgba(0,102,245,0.05) 0%, rgba(139,92,246,0.05) 100%); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <strong style="color:var(--bc-blue); font-size:0.95rem; display:flex; align-items:center; gap:0.4rem;">
            <span>🎙️</span> B1/B2 Model Speaking Turn (Pair Work Exercise 2 &amp; 3)
          </strong>
          <button class="audio-circle-btn" onclick="speakUK('${escapeJs(data.modelDescription)}')">🔊</button>
        </div>
        <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6; margin:0 0 0.85rem; font-style:italic;">
          "${escapeHtml(data.modelDescription)}"
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.6rem; border-top:1px dashed var(--border-light); padding-top:0.75rem;">
          ${data.usefulPhrases.map(ph => `
            <div style="background:var(--bg-surface); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:0.84rem; color:var(--text-main); display:block;">${escapeHtml(ph.en)}</strong>
                <span style="font-size:0.78rem; color:#0284c7; direction:rtl; display:block;">${escapeHtml(ph.ar)}</span>
              </div>
              <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; flex-shrink:0;" onclick="speakUK('${escapeJs(ph.en)}')">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSession12JobAdvert() {
  const container = document.getElementById('session12JobAdvertWrap');
  const data = getSession12Data('SESSION_12_JOB_ADVERT');
  if (!container || !data) return;

  container.innerHTML = `
    <!-- Top Hotel & Location Banner -->
    <div style="background:linear-gradient(135deg, rgba(0,102,245,0.08) 0%, rgba(139,92,246,0.08) 100%); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:1.5rem; box-shadow:var(--shadow-sm);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none; margin-bottom:0.4rem; display:inline-block;">${escapeHtml(data.code)}</span>
          <h4 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(data.title)}</h4>
          <p style="font-size:0.95rem; color:var(--text-body); margin:0.25rem 0 0; line-height:1.5;">${escapeHtml(data.hotelInfo.setting)}</p>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(data.title)}. ${escapeJs(data.hotelInfo.setting)}')" title="Listen to job introduction" style="flex-shrink:0;">🔊</button>
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; font-size:0.85rem; font-weight:700;">
        <span style="background:rgba(0,102,245,0.1); color:var(--bc-blue); padding:0.35rem 0.85rem; border-radius:var(--radius-full);">🏨 ${data.hotelInfo.rooms} Guest Rooms</span>
        <span style="background:rgba(16,185,129,0.1); color:var(--emerald); padding:0.35rem 0.85rem; border-radius:var(--radius-full);">⛷️ Winter Peak Season (High Traffic)</span>
        <span style="background:rgba(245,158,11,0.1); color:var(--amber); padding:0.35rem 0.85rem; border-radius:var(--radius-full);">🌄 Italian Alps Isolated Valley</span>
      </div>
    </div>

    <!-- Authentic Verbatim Reading Text Card -->
    <div class="study-card" style="border-top:4px solid var(--violet); margin-bottom:1.5rem; background:linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-subtle) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; padding-bottom:0.85rem; border-bottom:1px solid var(--border-light); margin-bottom:1rem;">
        <div>
          <span class="teacher-badge" style="background:rgba(139,92,246,0.1); color:var(--violet); border-color:rgba(139,92,246,0.3);">
            OFFICIAL HANDOUT PAGE 1 • VERBATIM READING PASSAGE
          </span>
          <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            Authentic Job Advert: Assistant Manager Wanted
          </h4>
        </div>
        <button class="btn btn-primary" id="btnPlayFullAdvert" style="font-size:0.85rem; padding:0.45rem 1rem; display:flex; align-items:center; gap:0.4rem;">
          <span>🔊</span> Listen to Full Advert (British Voice)
        </button>
      </div>

      <div style="font-size:0.96rem; color:var(--text-body); line-height:1.75; white-space:pre-line; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem; font-family:'Plus Jakarta Sans',sans-serif; margin-bottom:1.25rem;" id="jobAdvertVerbatimBox">
${escapeHtml(data.fullText)}
      </div>

      <!-- Critical Analysis & Reading Comprehension -->
      <div style="background:rgba(0,102,245,0.06); border:1px solid rgba(0,102,245,0.2); border-radius:var(--radius-sm); padding:1rem;">
        <strong style="color:var(--bc-blue); font-size:0.95rem; display:block; margin-bottom:0.4rem;">
          🤔 Handout Question 1: "${escapeHtml(data.comprehensionAnalysis.question)}"
        </strong>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:0.85rem; margin-top:0.6rem;">
          <div style="background:var(--bg-surface); padding:0.75rem; border-radius:var(--radius-sm); border-left:3px solid var(--emerald);">
            <strong style="color:var(--emerald); font-size:0.85rem; display:block; margin-bottom:0.3rem;">✨ Attractive Aspects (Pros):</strong>
            <ul style="margin:0; padding-left:1.1rem; font-size:0.84rem; color:var(--text-body); line-height:1.45;">
              ${data.comprehensionAnalysis.pros.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
            </ul>
          </div>
          <div style="background:var(--bg-surface); padding:0.75rem; border-radius:var(--radius-sm); border-left:3px solid var(--rose);">
            <strong style="color:var(--rose); font-size:0.85rem; display:block; margin-bottom:0.3rem;">⚠️ Challenging Aspects (Cons):</strong>
            <ul style="margin:0; padding-left:1.1rem; font-size:0.84rem; color:var(--text-body); line-height:1.45;">
              ${data.comprehensionAnalysis.cons.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 Core Advert Columns: Duties, Requirements, Perks -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.25rem;">
      <!-- Duties Column -->
      <div class="study-card" style="border-top:4px solid var(--bc-blue);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
            <span>🛎️</span> Core Duties
          </h4>
          <span class="teacher-badge">${data.duties.length} Key Areas</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${data.duties.map(d => `
            <div class="matrix-item-row" style="align-items:flex-start;">
              <span style="font-size:1.5rem; line-height:1; flex-shrink:0; margin-top:0.15rem;">${d.icon}</span>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.15rem;">
                  <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(d.title)}</strong>
                  <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(d.title)}: ${escapeJs(d.desc)}')">🔊</button>
                </div>
                <p style="color:var(--text-body); font-size:0.85rem; line-height:1.45; margin:0;">${escapeHtml(d.desc)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Requirements Column -->
      <div class="study-card" style="border-top:4px solid var(--violet);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
            <span>📋</span> Strict Requirements
          </h4>
          <span class="teacher-badge">Candidate Criteria</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${data.requirements.map(r => `
            <div class="matrix-item-row" style="align-items:flex-start;">
              <span style="font-size:1.5rem; line-height:1; flex-shrink:0; margin-top:0.15rem;">${r.icon}</span>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.15rem;">
                  <strong style="color:var(--violet); font-size:0.95rem;">${escapeHtml(r.req)}</strong>
                  <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(r.req)}: ${escapeJs(r.detail)}')">🔊</button>
                </div>
                <p style="color:var(--text-body); font-size:0.85rem; line-height:1.45; margin:0;">${escapeHtml(r.detail)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Perks & Compensation Column -->
      <div class="study-card" style="border-top:4px solid var(--emerald);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
            <span>🎁</span> Perks &amp; Package
          </h4>
          <span class="teacher-badge">${data.perks.length} Benefits</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr; gap:0.6rem;">
          ${data.perks.map(p => `
            <div style="background:var(--bg-subtle); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border-left:3px solid var(--emerald); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
              <div>
                <strong style="color:var(--text-main); font-size:0.9rem; display:block;">${escapeHtml(p.perk)}</strong>
                <small style="color:var(--text-muted); font-size:0.8rem;">${escapeHtml(p.detail)}</small>
              </div>
              <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(p.perk)}. ${escapeJs(p.detail)}')">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const btnPlayFull = document.getElementById('btnPlayFullAdvert');
  if (btnPlayFull) {
    btnPlayFull.onclick = () => {
      speakUK("Job Advert: We are looking for an assistant manager to help with the day-to-day running of a small hotel with 20 rooms in a ski resort in Italy. The applicant needs to speak Italian and English, and be outgoing, sociable, a sympathetic listener, punctual, and efficient.");
    };
  }
}

function renderSession12MatchingLab() {
  const container = document.getElementById('session12MatchingWrap');
  const quiz = getSession12Data('SESSION_12_MATCHING_QUIZ');
  if (!container || !quiz) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">SMARTBOARD SLIDE 6 &amp; HANDOUT PAGE 2</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            Match Character Meanings with Words from the Job Advert (1–8)
          </h4>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button type="button" class="btn btn-primary" id="btnRevealAllS12Matches" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal All Answers
          </button>
          <button type="button" class="btn-outline-subtle" id="btnResetS12Matches" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(310px, 1fr)); gap:1rem;">
        ${quiz.map(q => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="font-size:0.75rem; padding:0.15rem 0.45rem;">
                CLUE #${q.num}
              </span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.clue)}')" title="Listen to clue">🔊</button>
            </div>

            <p style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin:0; line-height:1.45;">
              "${escapeHtml(q.clue)}"
            </p>

            <div style="margin-top:auto; padding-top:0.5rem;">
              <button type="button" class="btn-outline-subtle btn-s12-match-reveal" data-target="s12_match_${q.num}" style="width:100%; font-size:0.8rem; padding:0.35rem 0.6rem; text-align:center;">
                👁 Show Answer
              </button>
              <div id="s12_match_${q.num}" class="s12-match-answer-box" style="display:none; margin-top:0.6rem; background:rgba(0,102,245,0.06); border:1px solid rgba(0,102,245,0.2); border-radius:var(--radius-sm); padding:0.65rem 0.85rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
                  <strong style="color:var(--bc-blue); font-size:1rem; text-transform:capitalize;">
                    ${escapeHtml(q.answer)}
                  </strong>
                  <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem;" onclick="speakUK('${escapeJs(q.answer)}')">🔊</button>
                </div>
                <div style="font-size:0.84rem; color:#0284c7; direction:rtl; font-weight:600; margin-bottom:0.25rem;">
                  ${escapeHtml(q.arabic)}
                </div>
                <small style="font-size:0.78rem; color:var(--text-muted); display:block; line-height:1.4;">
                  💡 ${escapeHtml(q.rule)}
                </small>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Wire reveal buttons
  container.querySelectorAll('.btn-s12-match-reveal').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const box = document.getElementById(targetId);
      if (box) {
        const isHidden = box.style.display === 'none';
        box.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? '🙈 Hide Answer' : '👁 Show Answer';
      }
    });
  });

  const btnRevealAll = document.getElementById('btnRevealAllS12Matches');
  const btnReset = document.getElementById('btnResetS12Matches');
  if (btnRevealAll && btnReset) {
    btnRevealAll.onclick = () => {
      container.querySelectorAll('.s12-match-answer-box').forEach(b => b.style.display = 'block');
      container.querySelectorAll('.btn-s12-match-reveal').forEach(b => b.textContent = '🙈 Hide Answer');
    };
    btnReset.onclick = () => {
      container.querySelectorAll('.s12-match-answer-box').forEach(b => b.style.display = 'none');
      container.querySelectorAll('.btn-s12-match-reveal').forEach(b => b.textContent = '👁 Show Answer');
    };
  }
}

function renderSession12CharacterTraits() {
  const grid = document.getElementById('session12TraitsGrid');
  const punctualityCard = document.getElementById('session12PunctualityCard');
  const traits = getSession12Data('SESSION_12_CHARACTER_TRAITS');
  if (!grid || !traits) return;

  grid.innerHTML = traits.map(t => `
    <div class="study-card" style="border-top:3.5px solid var(--bc-blue); display:flex; flex-direction:column; gap:0.55rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <div>
          <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">TRAIT ATTRIBUTE</span>
          <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0.2rem 0 0;">${escapeHtml(t.trait)}</h4>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(t.speech)}')">🔊</button>
      </div>

      <div style="background:rgba(239, 68, 68, 0.08); border:1px solid rgba(239, 68, 68, 0.2); border-radius:var(--radius-sm); padding:0.4rem 0.65rem; display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--rose); text-transform:uppercase;">Opposite:</span>
        <strong style="font-size:0.86rem; color:var(--text-main);">${escapeHtml(t.opposite)}</strong>
      </div>

      <div class="arabic-translation-box" style="margin:0; font-size:0.88rem; padding:0.35rem 0.65rem;">${escapeHtml(t.arabic)}</div>

      <p style="font-size:0.85rem; color:var(--text-body); line-height:1.45; margin:0;">
        <strong>Meaning:</strong> ${escapeHtml(t.meaning)}
      </p>

      <div style="background:var(--bg-subtle); padding:0.5rem 0.65rem; border-radius:var(--radius-sm); border-left:3px solid var(--bc-blue); font-size:0.8rem; color:var(--text-muted); line-height:1.4; margin-top:auto;">
        💡 <em>Hotel Context:</em> ${escapeHtml(t.jobContext)}
      </div>
    </div>
  `).join('');

  const pData = getSession12Data('SESSION_12_PUNCTUALITY_VS_TARDINESS');
  if (punctualityCard && pData) {
    punctualityCard.innerHTML = `
      <div class="study-card" style="border-top:4px solid var(--amber); background:linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-subtle) 100%);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0;">${escapeHtml(pData.rule)}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">Live whiteboard phonetics &amp; grammar contrast between on-time discipline and chronic lateness.</p>
          </div>
          <button class="audio-circle-btn" onclick="speakUK('Teacher Whiteboard Rule: Punctuality versus Tardiness. Punctual is the adjective, punctuality is the noun, and punctually is the adverb.')">🔊</button>
        </div>

        <!-- Forms Table -->
        <div style="overflow-x:auto; margin-bottom:1rem;">
          <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.88rem;">
            <thead>
              <tr style="background:var(--bg-subtle); border-bottom:2px solid var(--border-subtle);">
                <th style="padding:0.6rem 0.75rem; color:var(--text-main); font-weight:700;">Grammar Part of Speech</th>
                <th style="padding:0.6rem 0.75rem; color:var(--emerald); font-weight:700;">Positive (Prompt Timekeeping)</th>
                <th style="padding:0.6rem 0.75rem; color:var(--rose); font-weight:700;">Negative (Lateness)</th>
                <th style="padding:0.6rem 0.75rem; color:var(--text-muted); font-weight:700;">Linguistic Note</th>
              </tr>
            </thead>
            <tbody>
              ${pData.forms.map((f, idx) => `
                <tr style="border-bottom:1px solid var(--border-subtle); background:${idx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)'};">
                  <td style="padding:0.6rem 0.75rem; font-weight:700; color:var(--text-main);">${escapeHtml(f.pos)}</td>
                  <td style="padding:0.6rem 0.75rem; color:var(--emerald); font-weight:700;">
                    ${escapeHtml(f.positive)}
                    <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(f.positive)}')">🔊</button>
                  </td>
                  <td style="padding:0.6rem 0.75rem; color:var(--rose); font-weight:700;">
                    ${escapeHtml(f.negative)}
                    <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem; margin-left:0.35rem;" onclick="speakUK('${escapeJs(f.negative)}')">🔊</button>
                  </td>
                  <td style="padding:0.6rem 0.75rem; font-size:0.82rem; color:var(--text-body);">${escapeHtml(f.note)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- High-Impact Collocations -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.75rem;">
          ${pData.collocations.map(col => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); padding:0.6rem 0.85rem; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
              <div>
                <strong style="font-size:0.88rem; color:var(--text-main); display:block;">"${escapeHtml(col.en)}"</strong>
                <span style="font-family:'Cairo',var(--font-main); font-size:0.82rem; color:#0284c7; direction:rtl; display:block;">${escapeHtml(col.ar)}</span>
              </div>
              <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(col.en)}')">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function renderSession12CandidateAnalysis() {
  const container = document.getElementById('session12CandidateWrap');
  const p = getSession12Data('SESSION_12_CANDIDATE_PETER');
  if (!container || !p) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.25rem;">
      <!-- Profile Header (Classroom Candidate Card Simulation) -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; padding-bottom:1rem; border-bottom:1px solid var(--border-light); margin-bottom:1rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <div style="width:58px; height:58px; border-radius:50%; background:linear-gradient(135deg, var(--bc-blue) 0%, #1e40af 100%); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.8rem; box-shadow:var(--shadow-sm); flex-shrink:0;">
            👤
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.25rem;">
              <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">OFFICIAL CANDIDATE CARD</span>
              <span style="font-size:0.84rem; font-weight:800; color:var(--text-muted);">${escapeHtml(p.nationality)} • Age ${p.age}</span>
            </div>
            <h4 style="font-size:1.45rem; font-weight:800; color:var(--text-main); margin:0;">${escapeHtml(p.name)}</h4>
            <p style="font-size:0.88rem; color:var(--text-body); margin:0.2rem 0 0;">
              <strong>Languages:</strong> ${escapeHtml(p.languages)} • <strong>Tech:</strong> ${escapeHtml(p.qualifications)}
            </p>
          </div>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('Candidate Profile: ${escapeJs(p.name)}, age ${p.age}, from Croatia. ${escapeJs(p.experience)}. ${escapeJs(p.personality)}.')" title="Listen to candidate summary">🔊</button>
      </div>

      <!-- Verbatim Classroom Profile Card Breakdown -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:1.25rem;">
        <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--bc-blue);">
          <strong style="color:var(--bc-blue); font-size:0.88rem; display:block; margin-bottom:0.25rem;">🏨 Experience &amp; Ambition</strong>
          <p style="font-size:0.85rem; color:var(--text-body); line-height:1.45; margin:0;">${escapeHtml(p.experience)}</p>
        </div>

        <div style="background:rgba(239,68,68,0.06); padding:0.85rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--rose);">
          <strong style="color:var(--rose); font-size:0.88rem; display:block; margin-bottom:0.25rem;">⚠️ Medical &amp; Driving Notice</strong>
          <p style="font-size:0.85rem; color:var(--text-body); line-height:1.45; margin:0;">${escapeHtml(p.medicalNotice)}</p>
        </div>

        <div style="background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--violet);">
          <strong style="color:var(--violet); font-size:0.88rem; display:block; margin-bottom:0.25rem;">🎭 Personality Assessment</strong>
          <p style="font-size:0.85rem; color:var(--text-body); line-height:1.45; margin:0;">${escapeHtml(p.personality)}</p>
        </div>
      </div>

      <!-- Strengths vs Limitations Matrix (Handout Task 1: Positive vs Negative) -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        <!-- Pros -->
        <div style="background:var(--bg-surface); border:1px solid rgba(16,185,129,0.3); border-radius:var(--radius-sm); padding:1rem;">
          <h5 style="color:var(--emerald); font-weight:800; font-size:0.95rem; margin:0 0 0.75rem; display:flex; align-items:center; gap:0.4rem;">
            <span>✅</span> Positive Points (Reasons to Hire)
          </h5>
          <ul style="padding-left:1.2rem; margin:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem; color:var(--text-body); line-height:1.4;">
            ${p.pros.map(pro => `<li>${escapeHtml(pro)}</li>`).join('')}
          </ul>
        </div>

        <!-- Cons -->
        <div style="background:var(--bg-surface); border:1px solid rgba(239,68,68,0.3); border-radius:var(--radius-sm); padding:1rem;">
          <h5 style="color:var(--rose); font-weight:800; font-size:0.95rem; margin:0 0 0.75rem; display:flex; align-items:center; gap:0.4rem;">
            <span>⚠️</span> Negative Points (Limitations &amp; Challenges)
          </h5>
          <ul style="padding-left:1.2rem; margin:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem; color:var(--text-body); line-height:1.4;">
            ${p.cons.map(con => `<li>${escapeHtml(con)}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Interactive Classroom Recruitment Decision Tool -->
      <div style="background:var(--bg-subtle); padding:1.25rem; border-radius:var(--radius-md); border:1px dashed var(--border-light);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.75rem;">
          <div>
            <strong style="font-size:0.95rem; color:var(--text-main);">Classroom Decision Task: Would you hire Peter Bogdovic?</strong>
            <p style="font-size:0.84rem; color:var(--text-muted); margin:0.15rem 0 0;">Vote based on the British Council pair discussion criteria.</p>
          </div>
          <div style="display:flex; gap:0.6rem;">
            <button type="button" class="btn btn-primary" id="btnVoteHirePeter" style="font-size:0.82rem; padding:0.4rem 0.9rem;">
              ✅ Yes, Hire Peter
            </button>
            <button type="button" class="btn-outline-subtle" id="btnVoteRejectPeter" style="font-size:0.82rem; padding:0.4rem 0.9rem;">
              ❌ Reject / Keep Searching
            </button>
          </div>
        </div>
        <div id="peterDecisionFeedback" style="display:none; font-size:0.88rem; line-height:1.5; padding:0.75rem 1rem; border-radius:var(--radius-sm); margin-top:0.75rem;"></div>
      </div>
    </div>
  `;

  const btnHire = document.getElementById('btnVoteHirePeter');
  const btnReject = document.getElementById('btnVoteRejectPeter');
  const fb = document.getElementById('peterDecisionFeedback');

  if (btnHire && btnReject && fb) {
    btnHire.onclick = () => {
      fb.style.display = 'block';
      fb.style.background = 'rgba(16, 185, 129, 0.12)';
      fb.style.color = 'var(--text-main)';
      fb.style.borderLeft = '4px solid var(--emerald)';
      fb.innerHTML = `
        <strong style="color:var(--emerald);">✓ Balanced Decision — Hired with Conditions:</strong> Peter brings unparalleled ski coaching insight, kitchen flexibility, and relentless enthusiasm to learn. To mitigate his weaknesses, the hotel must provide intensive Italian hospitality lessons and assign driving errands to another staff member.
      `;
      speakUK("Good choice. Peter brings strong ski knowledge and enthusiasm, but will need support with Italian and driving.");
      if (window.AnimEngine) AnimEngine.fireConfetti({ count: 50 });
    };

    btnReject.onclick = () => {
      fb.style.display = 'block';
      fb.style.background = 'rgba(239, 68, 68, 0.1)';
      fb.style.color = 'var(--text-main)';
      fb.style.borderLeft = '4px solid var(--rose)';
      fb.innerHTML = `
        <strong style="color:var(--rose);">✕ Conservative Decision — Candidate Rejected:</strong> The job advert strictly demands fluent Italian for an isolated Alpine resort with an included car. Peter's inability to drive due to back injury and his basic Italian could compromise operations when acting as sole manager.
      `;
      speakUK("Understandable decision. His limited Italian and driving constraints are serious operational risks.");
    };
  }
}

function renderSession12DiscussionLab() {
  const container = document.getElementById('session12DiscussionWrap');
  const questions = getSession12Data('SESSION_12_DISCUSSION_QUESTIONS');
  if (!container || !questions) return;

  container.innerHTML = questions.map(q => `
    <div class="study-card" style="border-top:3.5px solid var(--violet); display:flex; flex-direction:column; gap:0.6rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="background:rgba(139,92,246,0.1); color:var(--violet); border-color:rgba(139,92,246,0.3);">
          SLIDE 8 QUESTION #${q.num}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.speech)}')" title="Listen to question">🔊</button>
      </div>

      <h4 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0.2rem 0; line-height:1.45;">
        "${escapeHtml(q.q)}"
      </h4>

      <div style="font-size:0.8rem; font-weight:700; color:var(--bc-blue);">
        🎯 Target Lexis: <code>${escapeHtml(q.focusWord)}</code>
      </div>

      <!-- Toggle Model Answer -->
      <div style="margin-top:auto; padding-top:0.6rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle btn-toggle-answer" data-target="modelAns_${q.num}" style="font-size:0.78rem; padding:0.3rem 0.65rem; width:100%; text-align:center;">
          👁 Show B1/B2 Model Answer
        </button>
        <div id="modelAns_${q.num}" style="display:none; margin-top:0.65rem; background:var(--bg-subtle); padding:0.75rem; border-radius:var(--radius-sm); border-left:3px solid var(--emerald); font-size:0.85rem; color:var(--text-body); line-height:1.45;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
            <strong style="color:var(--emerald); font-size:0.8rem; text-transform:uppercase;">Model B1/B2 Response:</strong>
            <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem;" onclick="speakUK('${escapeJs(q.modelAnswer)}')">🔊</button>
          </div>
          "${escapeHtml(q.modelAnswer)}"
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-toggle-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const box = document.getElementById(targetId);
      if (box) {
        const isHidden = box.style.display === 'none';
        box.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? '🙈 Hide Model Answer' : '👁 Show B1/B2 Model Answer';
      }
    });
  });
}

function renderSession12TeacherFeedback() {
  const container = document.getElementById('session12FeedbackWrap');
  const feedback = getSession12Data('SESSION_12_TEACHER_FEEDBACK');
  if (!container || !feedback) return;

  container.innerHTML = feedback.map(f => `
    <div class="study-card" style="border-top:3.5px solid var(--rose); display:flex; flex-direction:column; gap:0.5rem; background:linear-gradient(180deg, var(--bg-surface) 0%, rgba(239,68,68,0.02) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:rgba(239,68,68,0.1); color:var(--rose); border-color:rgba(239,68,68,0.3); font-size:0.72rem;">
          ${escapeHtml(f.category)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(f.speech)}')">🔊</button>
      </div>

      <!-- Incorrect (Live Board Markup) -->
      <div style="background:rgba(239, 68, 68, 0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--rose); font-family:monospace;">
        ❌ <s style="text-decoration:line-through; font-weight:600;">${escapeHtml(f.incorrect)}</s>
      </div>

      <!-- Correct (Teacher Green Pen) -->
      <div style="background:rgba(16, 185, 129, 0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.9rem; font-weight:700; color:var(--emerald);">
        ✅ ${escapeHtml(f.correct)}
      </div>

      <!-- Grammar Rule -->
      <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.45; margin:0; margin-top:auto;">
        💡 <strong>Tutor Note:</strong> ${escapeHtml(f.rule)}
      </p>
    </div>
  `).join('');
}

function renderSession12PronunciationLab() {
  const container = document.getElementById('session12PronunciationWrap');
  const list = getSession12Data('SESSION_12_PRONUNCIATION_LAB');
  if (!container || !list) return;

  container.innerHTML = list.map(p => `
    <div class="study-card" style="border-top:3.5px solid var(--bc-blue); display:flex; flex-direction:column; gap:0.45rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0;">${escapeHtml(p.word)}</h4>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.audioSample)}')">🔊</button>
      </div>

      <div style="font-family:monospace; font-size:0.95rem; font-weight:700; color:var(--bc-blue); background:rgba(0,102,245,0.06); padding:0.25rem 0.5rem; border-radius:var(--radius-sm); width:fit-content;">
        ${escapeHtml(p.phonetic)}
      </div>

      <p style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin:0;">
        <strong>Syllable Stress:</strong> ${escapeHtml(p.stressRule)}
      </p>
    </div>
  `).join('');
}

function renderSession12NotebookPages() {
  const container = document.getElementById('session12NotebookWrap');
  const pages = getSession12Data('SESSION_12_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = '';
  pages.forEach(page => {
    const card = document.createElement('div');
    card.className = 'notebook-sheet-card';

    let entriesHtml = page.notes.map(n => `
      <div class="notebook-entry-row ${n.arabic ? 'arabic-highlight' : ''}">
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; margin-bottom:0.2rem;">
            <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(n.term)}</strong>
            ${n.arabic ? `<span class="notebook-arabic-tag">${escapeHtml(n.arabic)}</span>` : ''}
          </div>
          <div style="font-size:0.85rem; color:var(--text-body); line-height:1.45;">
            ${escapeHtml(n.definition)}
          </div>
          ${n.example ? `
            <div style="margin-top:0.35rem; font-size:0.82rem; font-style:italic; color:var(--bc-blue); background:rgba(0,102,245,0.06); padding:0.25rem 0.5rem; border-radius:var(--radius-sm);">
              "${escapeHtml(n.example)}"
            </div>
          ` : ''}
        </div>
        <button class="audio-circle-btn" style="width:28px; height:28px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(n.speech || n.term)}')">🔊</button>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="notebook-header-row">
        <div>
          <span class="notebook-page-badge">📄 Notebook Page ${page.pageNum}</span>
          <h4 class="notebook-handwritten-title" style="margin-top:0.3rem;">${escapeHtml(page.title)}</h4>
        </div>
        <small style="color:var(--text-muted); font-size:0.78rem;">${escapeHtml(page.sub)}</small>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${entriesHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   SESSION 13 STUDY MATERIALS RENDERERS: STORYTELLING & NARRATIVE TENSES
   Official British Council Intermediate B1 Handout: ARB_B1_01_I059CEU_HO_v1.0
   The Bizarre Stories Archive • Smartboard Slides 11.08.08 & 11.08.09
   ========================================================================== */

function getSession13Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

/* --------------------------------------------------------------------------
   1. Lead-in Activity: Mystery Opening Line & Classroom Brainstorming
   -------------------------------------------------------------------------- */
function renderSession13LeadIn() {
  const container = document.getElementById('session13LeadInWrap');
  const data = getSession13Data('SESSION_13_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none; margin-bottom:0.35rem; display:inline-block;">HANDOUT PAGE 1 • NOTEBOOK PAGE 1 • LEAD-IN HOOK</span>
          <h4 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">Mystery Opening Line: Story Conception &amp; Scene Setting</h4>
          <p style="font-size:0.9rem; color:var(--text-muted); margin:0.2rem 0 0;">
            "${escapeHtml(data.instruction)}"
          </p>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(data.instruction)}')" title="Listen to Lead-in prompt">🔊</button>
      </div>

      <!-- Spotlight Classroom Opening Line Banner -->
      <div style="background:linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); color:#fff; padding:1.5rem 1.75rem; border-radius:var(--radius-md); margin-bottom:1.25rem; box-shadow:var(--shadow-sm); position:relative; overflow:hidden;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem; position:relative; z-index:2;">
          <div>
            <span style="font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.18); padding:0.2rem 0.6rem; border-radius:var(--radius-full); display:inline-block; margin-bottom:0.5rem;">
              Classroom Whiteboard Prompt
            </span>
            <div style="font-size:1.25rem; font-weight:800; font-family:'Plus Jakarta Sans',sans-serif; line-height:1.5; color:#f8fafc;">
              "${escapeHtml(data.boardLine)}"
            </div>
          </div>
          <button class="audio-circle-btn" style="background:#fff; color:#1e1b4b; flex-shrink:0;" onclick="speakUK('${escapeJs(data.boardLine)}')">🔊</button>
        </div>
      </div>

      <!-- Student Notebook Notes & Hypotheses Table -->
      <div style="overflow-x:auto; margin-bottom:1.25rem;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:var(--bg-subtle); border-bottom:2px solid var(--border-subtle);">
              <th style="padding:0.7rem 0.85rem; color:var(--text-main); font-weight:700; width:25%;">Narrative Element</th>
              <th style="padding:0.7rem 0.85rem; color:var(--bc-blue); font-weight:700; width:45%;">Classroom Partner Notes (Transcribed)</th>
              <th style="padding:0.7rem 0.85rem; color:var(--text-muted); font-weight:700;">Grammar &amp; Atmospheric Function</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-surface);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">🌌 Setting &amp; Mood</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.notebookNotes.setting)}
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">Establishes gloomy, suspenseful environment</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-subtle);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">⏰ Auditory Cue</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.notebookNotes.sound)}
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">Builds psychological tension &amp; anticipation</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-surface);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">⚡ Inciting Incident</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.notebookNotes.action)}
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--text-muted);">Past Simple sudden interruption of quiet</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle); background:var(--bg-subtle);">
              <td style="padding:0.65rem 0.85rem; font-weight:700; color:var(--text-main);">⏳ Tenses Concord</td>
              <td style="padding:0.65rem 0.85rem; color:var(--text-body); font-weight:600;">
                ${escapeHtml(data.notebookNotes.tensesUsed)}
              </td>
              <td style="padding:0.65rem 0.85rem; font-size:0.83rem; color:var(--emerald); font-weight:700;">Slide 11.08.08 Golden Rule</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Model Classroom Story Continuation -->
      <div style="background:linear-gradient(135deg, rgba(0,102,245,0.05) 0%, rgba(139,92,246,0.05) 100%); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <strong style="color:var(--bc-blue); font-size:0.95rem; display:flex; align-items:center; gap:0.4rem;">
            <span>🎙️</span> B1/B2 Model Story Continuation (Classroom Model)
          </strong>
          <button class="audio-circle-btn" onclick="speakUK('${escapeJs(data.modelContinuation)}')">🔊</button>
        </div>
        <p style="font-size:0.92rem; color:var(--text-body); line-height:1.65; margin:0; font-style:italic;">
          "${escapeHtml(data.modelContinuation)}"
        </p>
      </div>

      <!-- Useful Story Openers Grid -->
      <div>
        <span style="font-size:0.8rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.5rem; display:block;">
          Authentic British Story Openers &amp; Time Markers:
        </span>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.65rem;">
          ${data.usefulStoryOpeners.map(op => `
            <div style="background:var(--bg-surface); padding:0.55rem 0.75rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
              <div>
                <strong style="font-size:0.86rem; color:var(--text-main); display:block;">${escapeHtml(op.en)}</strong>
                <span style="font-family:'Cairo',var(--font-main); font-size:0.8rem; color:#0284c7; direction:rtl; display:block;">${escapeHtml(op.ar)}</span>
              </div>
              <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(op.en)}')">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   2. Core Reading Passages: The Bizarre Stories Archive & Title Matching
   -------------------------------------------------------------------------- */
let session13TenseHighlightActive = false;

function toggleSession13TenseHighlights() {
  session13TenseHighlightActive = !session13TenseHighlightActive;
  const btn = document.getElementById('btnToggleTenseHighlight');
  if (btn) {
    btn.innerHTML = session13TenseHighlightActive
      ? '<span>👁️</span> Turn Off Tense Colors'
      : '<span>🎨</span> Highlight Narrative Tenses';
  }

  document.querySelectorAll('.story-verbatim-text-box').forEach(box => {
    const plain = box.getAttribute('data-plain');
    const highlighted = box.getAttribute('data-highlighted');
    box.innerHTML = session13TenseHighlightActive ? highlighted : plain;
  });

  const legend = document.getElementById('tenseLegendWrap');
  if (legend) legend.style.display = session13TenseHighlightActive ? 'flex' : 'none';

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(session13TenseHighlightActive ? 'Narrative tenses highlighted' : 'Plain text restored', 'info');
  }
}

function renderSession13Stories() {
  const container = document.getElementById('session13StoriesWrap');
  const stories = getSession13Data('SESSION_13_STORIES');
  if (!container || !stories) return;

  container.innerHTML = `
    <!-- Top Action & Interactive Matching Bar -->
    <div class="study-card" style="border-top:4px solid var(--violet); margin-bottom:1.5rem; background:linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-subtle) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; padding-bottom:0.85rem; border-bottom:1px solid var(--border-light); margin-bottom:1rem;">
        <div>
          <span class="teacher-badge" style="background:rgba(139,92,246,0.1); color:var(--violet); border-color:rgba(139,92,246,0.3);">
            HANDOUT PAGE 1 TASK 1 • SMARTBOARD HEADLINE MATCHING LAB
          </span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            Match Headlines (1–6) to Stories A, B &amp; C
          </h4>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" id="btnToggleTenseHighlight" onclick="toggleSession13TenseHighlights()" style="font-size:0.82rem; padding:0.4rem 0.9rem; display:flex; align-items:center; gap:0.4rem;">
            <span>🎨</span> Highlight Narrative Tenses
          </button>
          <button type="button" class="btn-outline-subtle" onclick="checkSession13Headlines()" style="font-size:0.82rem; padding:0.4rem 0.9rem;">
            ✅ Check Matching
          </button>
          <button type="button" class="btn-outline-subtle" onclick="revealSession13Headlines()" style="font-size:0.82rem; padding:0.4rem 0.9rem;">
            👁 Reveal Solutions
          </button>
        </div>
      </div>

      <!-- Tense Legend (hidden by default) -->
      <div id="tenseLegendWrap" style="display:none; gap:0.75rem; flex-wrap:wrap; margin-bottom:1rem; padding:0.6rem 0.85rem; background:var(--bg-surface); border-radius:var(--radius-sm); border:1px solid var(--border-light); font-size:0.82rem;">
        <span style="font-weight:700; color:var(--text-main);">Tense Guide:</span>
        <span class="tense-past-simple">Past Simple (Main sequential events)</span>
        <span class="tense-past-continuous">Past Continuous (Background ongoing actions)</span>
        <span class="tense-past-perfect">Past Perfect (Earlier action prior to past point)</span>
      </div>

      <!-- 3 Headline Selectors Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:1rem;">
        <!-- Story A -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-light); padding:1rem; border-radius:var(--radius-sm); border-top:3.5px solid var(--bc-blue);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong style="color:var(--bc-blue); font-size:0.95rem;">Story A (Magician &amp; Parrot)</strong>
            <span class="teacher-badge" id="s13HeadBadgeA" style="font-size:0.72rem;">Pending</span>
          </div>
          <select id="s13SelectA" class="filter-input" style="width:100%; font-size:0.88rem; margin-bottom:0.4rem;">
            <option value="">-- Choose best headline --</option>
            <option value="1">1. A Walk In The Country</option>
            <option value="2">2. Never Work With Animals</option>
            <option value="3">3. Disappearing Act</option>
            <option value="4">4. Pigs Might Fly</option>
            <option value="5">5. Need For Speed</option>
            <option value="6">6. Is It A Bird, Is It A Plane?</option>
          </select>
          <small style="color:var(--text-muted); font-size:0.78rem; display:block;" id="s13ExplainA">
            Student notebook choice: <strong>Disappearing Act ✓</strong> (or <em>Never Work With Animals</em>)
          </small>
        </div>

        <!-- Story B -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-light); padding:1rem; border-radius:var(--radius-sm); border-top:3.5px solid var(--emerald);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong style="color:var(--emerald); font-size:0.95rem;">Story B (Airborne Cow)</strong>
            <span class="teacher-badge" id="s13HeadBadgeB" style="font-size:0.72rem;">Pending</span>
          </div>
          <select id="s13SelectB" class="filter-input" style="width:100%; font-size:0.88rem; margin-bottom:0.4rem;">
            <option value="">-- Choose best headline --</option>
            <option value="1">1. A Walk In The Country</option>
            <option value="2">2. Never Work With Animals</option>
            <option value="3">3. Disappearing Act</option>
            <option value="4">4. Pigs Might Fly</option>
            <option value="5">5. Need For Speed</option>
            <option value="6">6. Is It A Bird, Is It A Plane?</option>
          </select>
          <small style="color:var(--text-muted); font-size:0.78rem; display:block;" id="s13ExplainB">
            Student notebook choice: <strong>Pigs Might Fly ✓</strong> (or <em>Is It A Bird, Is It A Plane?</em>)
          </small>
        </div>

        <!-- Story C -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-light); padding:1rem; border-radius:var(--radius-sm); border-top:3.5px solid var(--amber);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong style="color:var(--amber); font-size:0.95rem;">Story C (Speeding Sheep)</strong>
            <span class="teacher-badge" id="s13HeadBadgeC" style="font-size:0.72rem;">Pending</span>
          </div>
          <select id="s13SelectC" class="filter-input" style="width:100%; font-size:0.88rem; margin-bottom:0.4rem;">
            <option value="">-- Choose best headline --</option>
            <option value="1">1. A Walk In The Country</option>
            <option value="2">2. Never Work With Animals</option>
            <option value="3">3. Disappearing Act</option>
            <option value="4">4. Pigs Might Fly</option>
            <option value="5">5. Need For Speed</option>
            <option value="6">6. Is It A Bird, Is It A Plane?</option>
          </select>
          <small style="color:var(--text-muted); font-size:0.78rem; display:block;" id="s13ExplainC">
            Student notebook choice: <strong>Need For Speed ✓</strong> (or <em>A Walk In The Country</em>)
          </small>
        </div>
      </div>
    </div>

    <!-- 3 Verbatim Stories Reader Cards Grid -->
    <div style="display:flex; flex-direction:column; gap:1.75rem;">
      ${stories.map(st => {
        let highlighted = escapeHtml(st.text);
        (st.analysis.pastContinuous || []).forEach(frag => {
          highlighted = highlighted.replace(escapeHtml(frag), `<span class="tense-past-continuous" title="Past Continuous">${escapeHtml(frag)}</span>`);
        });
        (st.analysis.pastPerfect || []).forEach(frag => {
          highlighted = highlighted.replace(escapeHtml(frag), `<span class="tense-past-perfect" title="Past Perfect">${escapeHtml(frag)}</span>`);
        });
        (st.analysis.pastSimple || []).forEach(frag => {
          highlighted = highlighted.replace(escapeHtml(frag), `<span class="tense-past-simple" title="Past Simple">${escapeHtml(frag)}</span>`);
        });

        const borderCol = st.letter === 'A' ? 'var(--bc-blue)' : (st.letter === 'B' ? 'var(--emerald)' : 'var(--amber)');

        return `
          <div class="study-card" style="border-top:4.5px solid ${borderCol};">
            <!-- Story Header -->
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; padding-bottom:1rem; border-bottom:1px solid var(--border-light); margin-bottom:1.15rem;">
              <div>
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
                  <span class="teacher-badge" style="background:${borderCol}; color:#fff; border:none; font-weight:800;">
                    STORY ${st.letter} • AUTHENTIC READING PASSAGE
                  </span>
                  <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">
                    📍 ${escapeHtml(st.setting)}
                  </span>
                </div>
                <h4 style="font-size:1.35rem; font-weight:900; color:var(--text-main); margin:0;">
                  ${escapeHtml(st.title)}
                </h4>
                <p style="font-size:0.86rem; color:var(--text-body); margin:0.25rem 0 0;">
                  <strong>Dramatis Personae:</strong> ${escapeHtml(st.characters)}
                </p>
              </div>
              <button class="btn btn-primary" onclick="speakUK('${escapeJs(st.audioText)}')" style="font-size:0.84rem; padding:0.4rem 0.95rem; display:flex; align-items:center; gap:0.4rem;">
                <span>🔊</span> Listen to Full Story ${st.letter}
              </button>
            </div>

            <!-- Verbatim Story Text -->
            <div class="story-verbatim-text-box" data-plain="${escapeHtml(st.text)}" data-highlighted="${escapeHtml(highlighted)}" style="font-size:1rem; color:var(--text-body); line-height:1.8; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem 1.4rem; font-family:'Plus Jakarta Sans',sans-serif; margin-bottom:1.25rem; white-space:pre-line;">
              ${escapeHtml(st.text)}
            </div>

            <!-- Narrative Anatomy Analysis Accordion -->
            <div style="background:var(--bg-subtle); border-radius:var(--radius-sm); padding:1rem; border-left:3.5px solid ${borderCol};">
              <strong style="color:var(--text-main); font-size:0.9rem; display:block; margin-bottom:0.6rem;">
                🔍 Narrative Tenses Anatomy (Why each tense was used):
              </strong>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.85rem; font-size:0.84rem;">
                <div>
                  <strong style="color:var(--amber); display:block; margin-bottom:0.2rem;">⏳ Past Continuous (Background Scene):</strong>
                  <ul style="margin:0; padding-left:1.1rem; color:var(--text-body); line-height:1.4;">
                    ${(st.analysis.pastContinuous || []).map(p => `<li><em>"${escapeHtml(p)}"</em></li>`).join('')}
                  </ul>
                </div>
                <div>
                  <strong style="color:var(--bc-blue); display:block; margin-bottom:0.2rem;">⚡ Past Simple (Main Sequence):</strong>
                  <ul style="margin:0; padding-left:1.1rem; color:var(--text-body); line-height:1.4;">
                    ${(st.analysis.pastSimple || []).slice(0, 4).map(p => `<li><em>"${escapeHtml(p)}"</em></li>`).join('')}
                  </ul>
                </div>
                <div>
                  <strong style="color:var(--emerald); display:block; margin-bottom:0.2rem;">⏮️ Past Perfect (Action Before):</strong>
                  <ul style="margin:0; padding-left:1.1rem; color:var(--text-body); line-height:1.4;">
                    ${(st.analysis.pastPerfect || []).map(p => `<li><em>"${escapeHtml(p)}"</em></li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function checkSession13Headlines() {
  const selA = document.getElementById('s13SelectA');
  const selB = document.getElementById('s13SelectB');
  const selC = document.getElementById('s13SelectC');
  const bA = document.getElementById('s13HeadBadgeA');
  const bB = document.getElementById('s13HeadBadgeB');
  const bC = document.getElementById('s13HeadBadgeC');

  let correctCount = 0;
  // A: 3 (Disappearing Act) or 2 (Never Work With Animals)
  if (selA && (selA.value === '3' || selA.value === '2')) {
    correctCount++;
    if (bA) { bA.textContent = '✅ Correct'; bA.style.background = 'rgba(16,185,129,0.15)'; bA.style.color = 'var(--emerald)'; }
  } else if (bA) {
    bA.textContent = '❌ Try Again'; bA.style.background = 'rgba(239,68,68,0.15)'; bA.style.color = 'var(--rose)';
  }

  // B: 4 (Pigs Might Fly) or 6 (Is It A Bird...)
  if (selB && (selB.value === '4' || selB.value === '6')) {
    correctCount++;
    if (bB) { bB.textContent = '✅ Correct'; bB.style.background = 'rgba(16,185,129,0.15)'; bB.style.color = 'var(--emerald)'; }
  } else if (bB) {
    bB.textContent = '❌ Try Again'; bB.style.background = 'rgba(239,68,68,0.15)'; bB.style.color = 'var(--rose)';
  }

  // C: 5 (Need For Speed) or 1 (A Walk In The Country)
  if (selC && (selC.value === '5' || selC.value === '1')) {
    correctCount++;
    if (bC) { bC.textContent = '✅ Correct'; bC.style.background = 'rgba(16,185,129,0.15)'; bC.style.color = 'var(--emerald)'; }
  } else if (bC) {
    bC.textContent = '❌ Try Again'; bC.style.background = 'rgba(239,68,68,0.15)'; bC.style.color = 'var(--rose)';
  }

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Headlines Score: ${correctCount}/3 Correct`, correctCount === 3 ? 'success' : 'info');
  }
}

function revealSession13Headlines() {
  const selA = document.getElementById('s13SelectA');
  const selB = document.getElementById('s13SelectB');
  const selC = document.getElementById('s13SelectC');
  if (selA) selA.value = '3';
  if (selB) selB.value = '4';
  if (selC) selC.value = '5';
  checkSession13Headlines();
}

/* --------------------------------------------------------------------------
   3. Reading Comprehension & True / False Lab (Handout Page 2)
   -------------------------------------------------------------------------- */
function renderSession13TrueFalse() {
  const container = document.getElementById('session13TrueFalseWrap');
  const items = getSession13Data('SESSION_13_TRUE_FALSE');
  if (!container || !items) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--emerald); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; padding-bottom:0.85rem; border-bottom:1px solid var(--border-light); margin-bottom:1.25rem;">
        <div>
          <span class="teacher-badge" style="background:var(--emerald); color:#fff; border:none;">HANDOUT PAGE 2 • COMPREHENSION VERIFICATION</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            True / False Comprehension Verification (Statements 1–6)
          </h4>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button type="button" class="btn btn-primary" onclick="revealAllSession13TF()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal All Answers
          </button>
          <button type="button" class="btn-outline-subtle" onclick="resetAllSession13TF()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.85rem;">
        ${items.map(item => `
          <div class="study-card" id="s13_tf_row_${item.num}" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; transition:all 0.2s;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem; flex-wrap:wrap;">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
                  <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">STATEMENT #${item.num}</span>
                  <span id="s13_tf_badge_${item.num}" class="teacher-badge" style="display:none; font-size:0.72rem; padding:0.15rem 0.45rem;"></span>
                </div>
                <p style="font-size:1rem; font-weight:700; color:var(--text-main); margin:0; line-height:1.45;">
                  "${escapeHtml(item.statement)}"
                </p>
              </div>

              <!-- Buttons -->
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <button type="button" class="btn-outline-subtle s13-tf-btn" id="s13_btn_t_${item.num}" onclick="answerSession13TF(${item.num}, true)" style="font-size:0.85rem; padding:0.35rem 0.9rem; font-weight:700;">
                  True
                </button>
                <button type="button" class="btn-outline-subtle s13-tf-btn" id="s13_btn_f_${item.num}" onclick="answerSession13TF(${item.num}, false)" style="font-size:0.85rem; padding:0.35rem 0.9rem; font-weight:700;">
                  False
                </button>
                <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.speech)}')" title="Listen to statement and proof">🔊</button>
              </div>
            </div>

            <!-- Feedback Proof Box (hidden initially) -->
            <div id="s13_tf_proof_${item.num}" style="display:none; margin-top:0.75rem; background:rgba(0,102,245,0.06); border:1px solid rgba(0,102,245,0.2); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.86rem; color:var(--text-body); line-height:1.45;">
              <strong style="color:var(--bc-blue);">Textual Evidence:</strong> ${escapeHtml(item.proof)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function answerSession13TF(num, userChoice) {
  const items = getSession13Data('SESSION_13_TRUE_FALSE');
  if (!items) return;
  const item = items.find(i => i.num === num);
  if (!item) return;

  const row = document.getElementById(`s13_tf_row_${num}`);
  const proofBox = document.getElementById(`s13_tf_proof_${num}`);
  const badge = document.getElementById(`s13_tf_badge_${num}`);
  const btnT = document.getElementById(`s13_btn_t_${num}`);
  const btnF = document.getElementById(`s13_btn_f_${num}`);

  if (proofBox) proofBox.style.display = 'block';
  if (badge) badge.style.display = 'inline-block';

  const isCorrect = userChoice === item.isTrue;

  if (btnT && btnF) {
    btnT.style.borderColor = '';
    btnF.style.borderColor = '';
    btnT.style.background = '';
    btnF.style.background = '';
    const chosenBtn = userChoice ? btnT : btnF;
    if (isCorrect) {
      chosenBtn.style.background = 'var(--emerald)';
      chosenBtn.style.color = '#fff';
      chosenBtn.style.borderColor = 'var(--emerald)';
    } else {
      chosenBtn.style.background = 'var(--rose)';
      chosenBtn.style.color = '#fff';
      chosenBtn.style.borderColor = 'var(--rose)';
    }
  }

  if (badge) {
    if (isCorrect) {
      badge.textContent = `✅ Correct (${item.isTrue ? 'True' : 'False'})`;
      badge.style.background = 'rgba(16,185,129,0.15)';
      badge.style.color = 'var(--emerald)';
    } else {
      badge.textContent = `❌ Incorrect (It's ${item.isTrue ? 'True' : 'False'})`;
      badge.style.background = 'rgba(239,68,68,0.15)';
      badge.style.color = 'var(--rose)';
    }
  }

  if (row) {
    row.style.borderLeft = isCorrect ? '4px solid var(--emerald)' : '4px solid var(--rose)';
  }

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(isCorrect ? 'Well spotted!' : 'Check the evidence quote', isCorrect ? 'success' : 'info');
  }
}

function revealAllSession13TF() {
  const items = getSession13Data('SESSION_13_TRUE_FALSE');
  if (!items) return;
  items.forEach(item => answerSession13TF(item.num, item.isTrue));
}

function resetAllSession13TF() {
  const items = getSession13Data('SESSION_13_TRUE_FALSE');
  if (!items) return;
  items.forEach(item => {
    const row = document.getElementById(`s13_tf_row_${item.num}`);
    const proofBox = document.getElementById(`s13_tf_proof_${item.num}`);
    const badge = document.getElementById(`s13_tf_badge_${item.num}`);
    const btnT = document.getElementById(`s13_btn_t_${item.num}`);
    const btnF = document.getElementById(`s13_btn_f_${item.num}`);
    if (proofBox) proofBox.style.display = 'none';
    if (badge) badge.style.display = 'none';
    if (row) row.style.borderLeft = '';
    if (btnT) { btnT.style.background = ''; btnT.style.color = ''; btnT.style.borderColor = ''; }
    if (btnF) { btnF.style.background = ''; btnF.style.color = ''; btnF.style.borderColor = ''; }
  });
}

/* --------------------------------------------------------------------------
   4. Language Focus: Narrative Tenses Timeline & Smartboard Rules
   -------------------------------------------------------------------------- */
function renderSession13NarrativeGrammar() {
  const container = document.getElementById('session13GrammarWrap');
  const grammar = getSession13Data('SESSION_13_NARRATIVE_TENSES');
  if (!container || !grammar) return;

  container.innerHTML = `
    <!-- Timeline Diagram Card -->
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem;">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">SMARTBOARD SLIDE 11.08.08</span>
          <h4 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            ${escapeHtml(grammar.title)}
          </h4>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('British Council Narrative Tenses Framework. We use Past Continuous for background actions in progress, Past Simple for sequential completed actions, and Past Perfect for actions that happened before another action in the past.')">🔊</button>
      </div>

      <!-- Chronological Visual Timeline Flow -->
      <div class="narrative-timeline-wrap">
        <!-- Stage 1: Past Perfect -->
        <div class="timeline-step-card step-past-perfect">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="teacher-badge" style="background:rgba(16,185,129,0.15); color:var(--emerald); border:none;">STAGE 1 • EARLIEST IN PAST</span>
            <span style="font-size:1.2rem;">⏮️</span>
          </div>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--emerald); margin:0 0 0.25rem;">Past Perfect</h4>
          <code style="font-size:0.86rem; background:var(--bg-subtle); padding:0.2rem 0.45rem; border-radius:var(--radius-sm); display:inline-block; margin-bottom:0.5rem;">
            had + past participle (V3)
          </code>
          <p style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin:0 0 0.5rem;">
            Actions completed <strong>BEFORE</strong> another action or milestone in the past.
          </p>
          <div style="background:var(--bg-subtle); padding:0.5rem; border-radius:var(--radius-sm); font-size:0.8rem; font-style:italic; color:var(--text-main);">
            "They <strong>had flown</strong> a cow from Russia before it panicked."
          </div>
        </div>

        <!-- Stage 2: Past Continuous -->
        <div class="timeline-step-card step-past-continuous">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="teacher-badge" style="background:rgba(245,158,11,0.15); color:var(--amber); border:none;">STAGE 2 • ONGOING SCENE</span>
            <span style="font-size:1.2rem;">⏳</span>
          </div>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--amber); margin:0 0 0.25rem;">Past Continuous</h4>
          <code style="font-size:0.86rem; background:var(--bg-subtle); padding:0.2rem 0.45rem; border-radius:var(--radius-sm); display:inline-block; margin-bottom:0.5rem;">
            was / were + verb-ing
          </code>
          <p style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin:0 0 0.5rem;">
            Actions in active progression forming background scenery, often interrupted.
          </p>
          <div style="background:var(--bg-subtle); padding:0.5rem; border-radius:var(--radius-sm); font-size:0.8rem; font-style:italic; color:var(--text-main);">
            "A fishing boat <strong>was working</strong> off the coast when suddenly..."
          </div>
        </div>

        <!-- Stage 3: Past Simple -->
        <div class="timeline-step-card step-past-simple">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="teacher-badge" style="background:rgba(0,102,245,0.15); color:var(--bc-blue); border:none;">STAGE 3 • POINT EVENTS</span>
            <span style="font-size:1.2rem;">⚡</span>
          </div>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--bc-blue); margin:0 0 0.25rem;">Past Simple</h4>
          <code style="font-size:0.86rem; background:var(--bg-subtle); padding:0.2rem 0.45rem; border-radius:var(--radius-sm); display:inline-block; margin-bottom:0.5rem;">
            Verb-ed or irregular V2
          </code>
          <p style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin:0 0 0.5rem;">
            Single completed actions or sequential main plot events that push the story forward.
          </p>
          <div style="background:var(--bg-subtle); padding:0.5rem; border-radius:var(--radius-sm); font-size:0.8rem; font-style:italic; color:var(--text-main);">
            "The cow <strong>fell</strong>, <strong>landed</strong>, and <strong>sank</strong> the boat."
          </div>
        </div>
      </div>

      <!-- 3 In-Depth Grammar Rule Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-top:1.25rem;">
        ${grammar.rules.map(r => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.55rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h5 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0;">${escapeHtml(r.tense)}</h5>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(r.usage)}')">🔊</button>
            </div>

            <div style="background:var(--bg-subtle); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.82rem; font-family:monospace; color:var(--bc-blue);">
              <strong>Form:</strong> ${escapeHtml(r.formula)}
            </div>

            <p style="font-size:0.85rem; color:var(--text-body); line-height:1.45; margin:0;">
              <strong>Rule:</strong> ${escapeHtml(r.usage)}
            </p>

            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); display:flex; flex-direction:column; gap:0.4rem;">
              ${r.examples.map(ex => `
                <div style="background:var(--bg-subtle); padding:0.4rem 0.6rem; border-radius:var(--radius-sm); font-size:0.8rem;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:var(--text-main); font-weight:600;">"${escapeHtml(ex.en)}"</span>
                    <button class="audio-circle-btn" style="width:22px; height:22px; font-size:0.65rem;" onclick="speakUK('${escapeJs(ex.en)}')">🔊</button>
                  </div>
                  <div style="font-family:'Cairo',var(--font-main); font-size:0.78rem; color:#0284c7; direction:rtl; margin-top:0.15rem;">
                    ${escapeHtml(ex.ar)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   5. Smartboard Live Practice: The Story of Fred the Dog (Slide 11.08.09)
   -------------------------------------------------------------------------- */
function renderSession13FredPractice() {
  const container = document.getElementById('session13PracticeWrap');
  const fred = getSession13Data('SESSION_13_FRED_PRACTICE');
  if (!container || !fred) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--amber); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.75rem; padding-bottom:0.85rem; border-bottom:1px solid var(--border-light); margin-bottom:1.25rem;">
        <div>
          <span class="teacher-badge" style="background:var(--amber); color:#000; border:none; font-weight:800;">LIVE SMARTBOARD CHALLENGE • SLIDE 11.08.09</span>
          <h4 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            ${escapeHtml(fred.title)}
          </h4>
          <p style="font-size:0.88rem; color:var(--text-muted); margin:0.2rem 0 0;">
            ${escapeHtml(fred.lead)}
          </p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" onclick="checkSession13FredAnswers()" style="font-size:0.82rem; padding:0.4rem 0.95rem;">
            ✅ Check My Gaps
          </button>
          <button type="button" class="btn-outline-subtle" onclick="revealSession13FredAnswers()" style="font-size:0.82rem; padding:0.4rem 0.85rem;">
            👁 Show Answers
          </button>
          <button type="button" class="btn-outline-subtle" onclick="resetSession13FredGaps()" style="font-size:0.82rem; padding:0.4rem 0.85rem;">
            🔄 Reset
          </button>
          <button type="button" class="btn-outline-subtle" onclick="speakUK('${escapeJs(fred.fullTextTranscribed)}')" style="font-size:0.82rem; padding:0.4rem 0.85rem; display:flex; align-items:center; gap:0.35rem;">
            <span>🔊</span> Listen to Full Story
          </button>
        </div>
      </div>

      <!-- Score Banner -->
      <div id="fredScoreBanner" style="display:none; padding:0.75rem 1rem; border-radius:var(--radius-sm); margin-bottom:1.25rem; font-size:0.92rem; font-weight:700;"></div>

      <!-- Verbatim Smartboard Exercise Text with 10 Interactive Gaps -->
      <div style="background:var(--bg-surface); border:2px solid var(--border-medium); border-radius:var(--radius-md); padding:1.5rem; line-height:2.4; font-size:1.05rem; color:var(--text-main); margin-bottom:1.5rem;">
        When I <input type="text" class="fred-gap-input" id="fred_gap_1" data-num="1" placeholder="(1: live)"> in London, I <input type="text" class="fred-gap-input" id="fred_gap_2" data-num="2" placeholder="(2: buy)"> a dog. I <input type="text" class="fred-gap-input" id="fred_gap_3" data-num="3" placeholder="(3: decide)"> to call it Fred. He was great fun. Every day, I <input type="text" class="fred-gap-input" id="fred_gap_4" data-num="4" placeholder="(4: take)"> him for a walk and he was good company. After I <input type="text" class="fred-gap-input" id="fred_gap_5" data-num="5" placeholder="(5: have)"> him for about six months, I took him to a training school because he <input type="text" class="fred-gap-input" id="fred_gap_6" data-num="6" placeholder="(6: behave)"> very badly and not listening to me when I called. Training school <input type="text" class="fred-gap-input" id="fred_gap_7" data-num="7" placeholder="(7: help)"> him a lot and he <input type="text" class="fred-gap-input" id="fred_gap_8" data-num="8" placeholder="(8: become)"> much better. I <input type="text" class="fred-gap-input" id="fred_gap_9" data-num="9" placeholder="(9: not own)"> a pet before I <input type="text" class="fred-gap-input" id="fred_gap_10" data-num="10" placeholder="(10: have)"> Fred, but I'm very glad to have him around.
      </div>

      <!-- Grammatical Breakdown Accordion for All 10 Gaps -->
      <div style="background:var(--bg-subtle); padding:1rem 1.25rem; border-radius:var(--radius-sm); border-left:3.5px solid var(--amber);">
        <strong style="font-size:0.92rem; color:var(--text-main); display:block; margin-bottom:0.6rem;">
          💡 Smartboard Slide 11.08.09 Grammar Breakdown (Why each tense is required):
        </strong>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:0.65rem;">
          ${fred.answers.map(ans => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); padding:0.5rem 0.75rem; border-radius:var(--radius-sm); font-size:0.83rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.2rem;">
                <span style="font-weight:800; color:var(--amber);">#${ans.num} (${ans.base}): <strong>${escapeHtml(ans.correct)}</strong></span>
                <span class="teacher-badge" style="font-size:0.7rem; padding:0.1rem 0.4rem;">${escapeHtml(ans.tense)}</span>
              </div>
              <p style="margin:0; color:var(--text-muted); line-height:1.35;">${escapeHtml(ans.reason)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function checkSession13FredAnswers() {
  const fred = getSession13Data('SESSION_13_FRED_PRACTICE');
  if (!fred) return;

  let correctCount = 0;
  fred.answers.forEach(ans => {
    const input = document.getElementById(`fred_gap_${ans.num}`);
    if (!input) return;
    const val = (input.value || '').trim().toLowerCase();
    const target = ans.correct.toLowerCase();

    // Allow common contractions: e.g. "hadn't owned" or "had not owned"
    const isOk = val === target ||
      (ans.num === 9 && (val === "had not owned" || val === "hadn't owned")) ||
      (ans.num === 5 && val === "had had");

    input.classList.remove('correct', 'incorrect');
    if (isOk) {
      input.classList.add('correct');
      correctCount++;
    } else {
      input.classList.add('incorrect');
    }
  });

  const banner = document.getElementById('fredScoreBanner');
  if (banner) {
    banner.style.display = 'block';
    if (correctCount === 10) {
      banner.style.background = 'rgba(16,185,129,0.15)';
      banner.style.color = 'var(--emerald)';
      banner.style.border = '1px solid rgba(16,185,129,0.3)';
      banner.innerHTML = `🎉 Outstanding! 10 / 10 Correct. You have fully mastered narrative tenses concord!`;
      if (window.AnimEngine && typeof AnimEngine.fireConfetti === 'function') {
        AnimEngine.fireConfetti({ count: 60 });
      }
    } else {
      banner.style.background = 'rgba(245,158,11,0.15)';
      banner.style.color = '#b45309';
      banner.style.border = '1px solid rgba(245,158,11,0.3)';
      banner.innerHTML = `Score: ${correctCount} / 10 correct. Review the red gaps and study the grammar rules below.`;
    }
  }

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Fred the Dog Score: ${correctCount}/10`, correctCount === 10 ? 'success' : 'info');
  }
}

function revealSession13FredAnswers() {
  const fred = getSession13Data('SESSION_13_FRED_PRACTICE');
  if (!fred) return;
  fred.answers.forEach(ans => {
    const input = document.getElementById(`fred_gap_${ans.num}`);
    if (input) {
      input.value = ans.correct;
      input.classList.remove('incorrect');
      input.classList.add('correct');
    }
  });
  checkSession13FredAnswers();
}

function resetSession13FredGaps() {
  const fred = getSession13Data('SESSION_13_FRED_PRACTICE');
  if (!fred) return;
  fred.answers.forEach(ans => {
    const input = document.getElementById(`fred_gap_${ans.num}`);
    if (input) {
      input.value = '';
      input.classList.remove('correct', 'incorrect');
    }
  });
  const banner = document.getElementById('fredScoreBanner');
  if (banner) banner.style.display = 'none';
}

/* --------------------------------------------------------------------------
   6. Student Handwritten Notebook Transcriptions (2 Pages)
   -------------------------------------------------------------------------- */
function renderSession13Notebook() {
  const container = document.getElementById('session13NotebookWrap');
  const pages = getSession13Data('SESSION_13_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = '';
  pages.forEach(page => {
    const card = document.createElement('div');
    card.className = 'notebook-sheet-card';

    let entriesHtml = page.notes.map(n => `
      <div class="notebook-entry-row ${n.arabic ? 'arabic-highlight' : ''}">
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; margin-bottom:0.2rem;">
            <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHtml(n.term)}</strong>
            ${n.arabic ? `<span class="notebook-arabic-tag">${escapeHtml(n.arabic)}</span>` : ''}
          </div>
          <div style="font-size:0.85rem; color:var(--text-body); line-height:1.45;">
            ${escapeHtml(n.definition)}
          </div>
        </div>
        <button class="audio-circle-btn" style="width:28px; height:28px; font-size:0.75rem; flex-shrink:0;" onclick="speakUK('${escapeJs(n.speech || n.term)}')">🔊</button>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="notebook-header-row">
        <div>
          <span class="notebook-page-badge">📄 Notebook Page ${page.pageNum}</span>
          <h4 class="notebook-handwritten-title" style="margin-top:0.3rem;">${escapeHtml(page.title)}</h4>
        </div>
        <small style="color:var(--text-muted); font-size:0.78rem;">${escapeHtml(page.sub)}</small>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem;">
        ${entriesHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   7. Storytelling Speaking Lab: 5 Creative Prompts & Model Narratives
   -------------------------------------------------------------------------- */
function renderSession13SpeakingLab() {
  const container = document.getElementById('session13SpeakingWrap');
  const prompts = getSession13Data('SESSION_13_STORY_PROMPTS');
  if (!container || !prompts) return;

  container.innerHTML = prompts.map(p => `
    <div class="study-card" style="border-top:3.5px solid ${p.isStudentChosen ? 'var(--emerald)' : 'var(--violet)'}; display:flex; flex-direction:column; gap:0.65rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <div>
          <span class="teacher-badge" style="background:${p.isStudentChosen ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)'}; color:${p.isStudentChosen ? 'var(--emerald)' : 'var(--violet)'}; border-color:${p.isStudentChosen ? 'rgba(16,185,129,0.3)' : 'rgba(139,92,246,0.3)'};">
            PROMPT #${p.num} ${p.isStudentChosen ? '• STUDENT NOTEBOOK ORIGINAL' : '• CLASSROOM STORY HOOK'}
          </span>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            "${escapeHtml(p.title)}"
          </h4>
        </div>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.modelStory)}')" title="Listen to model story">🔊</button>
      </div>

      <!-- Expandable Model B1/B2 Narrative -->
      <div style="margin-top:auto; padding-top:0.6rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle btn-s13-story-toggle" data-target="s13StoryAns_${p.num}" style="font-size:0.78rem; padding:0.3rem 0.65rem; width:100%; text-align:center;">
          👁 Show B1/B2 Model Narrative
        </button>
        <div id="s13StoryAns_${p.num}" style="display:none; margin-top:0.65rem; background:var(--bg-subtle); padding:0.85rem; border-radius:var(--radius-sm); border-left:3px solid ${p.isStudentChosen ? 'var(--emerald)' : 'var(--violet)'}; font-size:0.88rem; color:var(--text-body); line-height:1.55;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">
            <strong style="color:${p.isStudentChosen ? 'var(--emerald)' : 'var(--violet)'}; font-size:0.8rem; text-transform:uppercase;">Model Story Transcript:</strong>
            <button class="audio-circle-btn" style="width:24px; height:24px; font-size:0.7rem;" onclick="speakUK('${escapeJs(p.modelStory)}')">🔊</button>
          </div>
          "${escapeHtml(p.modelStory)}"
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-s13-story-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const box = document.getElementById(targetId);
      if (box) {
        const isHidden = box.style.display === 'none';
        box.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? '🙈 Hide Model Narrative' : '👁 Show B1/B2 Model Narrative';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Teacher Live Corrections Clinic: Narrative Tense Mistakes
   -------------------------------------------------------------------------- */
function renderSession13TeacherClinic() {
  const container = document.getElementById('session13ClinicWrap');
  const items = getSession13Data('SESSION_13_TEACHER_CLINIC');
  if (!container || !items) return;

  container.innerHTML = items.map(f => `
    <div class="study-card" style="border-top:3.5px solid var(--rose); display:flex; flex-direction:column; gap:0.5rem; background:linear-gradient(180deg, var(--bg-surface) 0%, rgba(239,68,68,0.02) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:rgba(239,68,68,0.1); color:var(--rose); border-color:rgba(239,68,68,0.3); font-size:0.72rem;">
          ${escapeHtml(f.category)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(f.speech)}')">🔊</button>
      </div>

      <!-- Incorrect (Live Board Markup) -->
      <div style="background:rgba(239, 68, 68, 0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--rose); font-family:monospace;">
        ❌ <s style="text-decoration:line-through; font-weight:600;">${escapeHtml(f.incorrect)}</s>
      </div>

      <!-- Correct (Teacher Green Pen) -->
      <div style="background:rgba(16, 185, 129, 0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.9rem; font-weight:700; color:var(--emerald);">
        ✅ ${escapeHtml(f.correct)}
      </div>

      <!-- Grammar Rule -->
      <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.45; margin:0; margin-top:auto;">
        💡 <strong>Tutor Note:</strong> ${escapeHtml(f.rule)}
      </p>
    </div>
  `).join('');
}

/* ==========================================================================
   SESSION 14: ATTENDING WEDDINGS & CONVERSATIONAL INTEREST
   Complete Interactive Pedagogical Rendering Suite
   ========================================================================== */
function getSession14Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

function renderSession14LeadIn() {
  const container = document.getElementById('session14LeadInWrap');
  const data = getSession14Data('SESSION_14_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 1 • WARM-UP DISCUSSION</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Authentic Classroom Speaking Table &amp; Model Responses
          </h4>
        </div>
        <button class="btn btn-primary" onclick="speakUK('Discuss the following questions with your group: Whose wedding celebrations did you last attend? What are the most important factors to consider? What is your idea of a perfect wedding?')" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Prompts
        </button>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${data.questions.map(q => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="font-size:0.75rem; padding:0.15rem 0.5rem;">QUESTION #${q.num}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.q)}')">🔊</button>
            </div>
            <p style="font-size:0.98rem; font-weight:700; color:var(--text-main); margin:0;">
              ${escapeHtml(q.q)}
            </p>
            <p style="font-size:0.85rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
              ${escapeHtml(q.qAr)}
            </p>
            <div style="margin-top:auto; padding-top:0.75rem; border-top:1px dashed var(--border-light);">
              <button type="button" class="btn-outline-subtle btn-s14-answer-toggle" data-target="s14LeadInAns_${q.num}" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
                <span>💡 Model Partner Response</span>
                <span class="toggle-icon">▼</span>
              </button>
              <div id="s14LeadInAns_${q.num}" style="display:none; margin-top:0.65rem; background:rgba(0,102,245,0.05); border:1px solid rgba(0,102,245,0.15); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
                <p style="margin:0 0 0.5rem; color:var(--text-body);">
                  ${escapeHtml(q.modelAnswer)}
                </p>
                <button class="btn btn-primary" onclick="speakUK('${escapeJs(q.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
                  🔊 Play Model Turn
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Useful phrases table -->
      <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:1rem;">
        <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0 0 0.75rem; display:flex; align-items:center; gap:0.4rem;">
          <span>💬</span> Useful Classroom Turn-Taking Phrases:
        </h5>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.65rem;">
          ${data.usefulPhrases.map(p => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.5rem 0.75rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
              <div>
                <strong style="font-size:0.86rem; color:var(--text-main); display:block;">${escapeHtml(p.en)}</strong>
                <span style="font-size:0.78rem; color:var(--text-muted); direction:rtl; display:block;">${escapeHtml(p.ar)}</span>
              </div>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.en)}')">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-s14-answer-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector('.toggle-icon');
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        if (icon) icon.textContent = isHidden ? '▲' : '▼';
      }
    });
  });
}

function renderSession14Dialogues() {
  const container = document.getElementById('session14DialoguesWrap');
  const data = getSession14Data('SESSION_14_DIALOGUES');
  if (!container || !data) return;

  const s1 = data.story1;
  const s2 = data.story2;
  const matrix = data.unusualWeddingsMatrix;

  container.innerHTML = `
    <!-- Story 1: Andy's Bristol Church Hall DIY Wedding -->
    <div class="study-card" style="border-top:4px solid var(--emerald); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--emerald); color:#fff; border:none;">HANDOUT PAGE 2 • DIALOGUE LISTENING GAP-FILL</span>
          <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            ${escapeHtml(s1.title)}
          </h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
            Topic: ${escapeHtml(s1.topic)} • Practice using <strong>Echo Questions</strong> to show active interest.
          </p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="checkSession14Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Questions
          </button>
          <button class="btn-outline-subtle" onclick="revealSession14Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal Answers
          </button>
          <button class="btn-outline-subtle" onclick="resetSession14Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
          <button class="audio-circle-btn" onclick="playSession14Story1Audio()" title="Listen to Andy's Wedding Dialogue">🔊</button>
        </div>
      </div>

      <!-- Dialogue turns -->
      <div style="display:flex; flex-direction:column; gap:0.75rem; background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); margin-bottom:1.25rem;">
        ${s1.turns.map((t, idx) => `
          <div style="display:flex; gap:0.75rem; align-items:flex-start;">
            <div style="width:32px; height:32px; border-radius:50%; background:${t.speaker === 'A' ? 'var(--bc-blue)' : 'var(--emerald)'}; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0;">
              ${t.speaker}
            </div>
            <div style="flex:1; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.92rem; line-height:1.5;">
              <strong style="color:${t.speaker === 'A' ? 'var(--bc-blue)' : 'var(--emerald)'};">${t.speaker}:</strong>
              ${t.isGap ? `
                <div style="margin-top:0.35rem; display:flex; flex-wrap:wrap; align-items:center; gap:0.5rem;">
                  <input type="text" class="filter-input s14-story1-input" id="s14_s1_gap_${idx}" data-correct="${escapeHtml(t.answer)}" placeholder="Type echo question..." style="width:220px; font-weight:700; font-size:0.88rem; padding:0.35rem 0.6rem;">
                  <span id="s14_s1_badge_${idx}" class="teacher-badge" style="display:none; font-size:0.75rem;"></span>
                  <small style="color:var(--text-muted); font-size:0.78rem;">(${escapeHtml(t.prompt)})</small>
                </div>
              ` : `
                <span>${escapeHtml(t.text)}</span>
              `}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Pedagogical rule -->
      <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.25); border-radius:var(--radius-sm); padding:0.85rem 1rem;">
        <h5 style="font-size:0.92rem; font-weight:800; color:var(--emerald); margin:0 0 0.35rem; display:flex; align-items:center; gap:0.4rem;">
          <span>💡</span> Why does Speaker A ask these questions? (Handout Question 4)
        </h5>
        <p style="font-size:0.86rem; color:var(--text-body); margin:0 0 0.35rem; line-height:1.45;">
          ${escapeHtml(s1.pedagogicalAnalysis.answerEn)}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
          ${escapeHtml(s1.pedagogicalAnalysis.answerAr)}
        </p>
      </div>
    </div>

    <!-- Story 2: The Bizarre CD Player Disaster -->
    <div class="study-card" style="border-top:4px solid var(--amber); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--amber); color:#000; border:none;">HANDOUT PAGE 3 • ACTIVE LISTENING &amp; BACKCHANNELLING</span>
          <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            ${escapeHtml(s2.title)}
          </h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
            Topic: ${escapeHtml(s2.topic)} • Practice <strong>Showing Interest &amp; Reacting Emotionally</strong>.
          </p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="checkSession14Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Phrases
          </button>
          <button class="btn-outline-subtle" onclick="revealSession14Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal Answers
          </button>
          <button class="btn-outline-subtle" onclick="resetSession14Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
          <button class="audio-circle-btn" onclick="playSession14Story2Audio()" title="Listen to Shaggy Music Blunder">🔊</button>
        </div>
      </div>

      <!-- Dialogue turns -->
      <div style="display:flex; flex-direction:column; gap:0.75rem; background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); margin-bottom:1.25rem;">
        ${s2.turns.map((t, idx) => `
          <div style="display:flex; gap:0.75rem; align-items:flex-start;">
            <div style="width:32px; height:32px; border-radius:50%; background:${t.speaker === 'A' ? 'var(--bc-blue)' : 'var(--amber)'}; color:${t.speaker === 'A' ? '#fff' : '#000'}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0;">
              ${t.speaker}
            </div>
            <div style="flex:1; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.92rem; line-height:1.5;">
              <strong style="color:${t.speaker === 'A' ? 'var(--bc-blue)' : 'var(--amber)'};">${t.speaker}:</strong>
              ${t.isGap ? `
                <div style="margin-top:0.35rem; display:flex; flex-wrap:wrap; align-items:center; gap:0.5rem;">
                  <input type="text" class="filter-input s14-story2-input" id="s14_s2_gap_${idx}" data-correct="${escapeHtml(t.answer)}" placeholder="Type reaction phrase..." style="width:200px; font-weight:700; font-size:0.88rem; padding:0.35rem 0.6rem;">
                  <span id="s14_s2_badge_${idx}" class="teacher-badge" style="display:none; font-size:0.75rem;"></span>
                  <small style="color:var(--text-muted); font-size:0.78rem;">(${escapeHtml(t.prompt)})</small>
                </div>
              ` : `
                <span>${escapeHtml(t.text)}</span>
              `}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Pedagogical rule -->
      <div style="background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:var(--radius-sm); padding:0.85rem 1rem;">
        <h5 style="font-size:0.92rem; font-weight:800; color:var(--amber); margin:0 0 0.35rem; display:flex; align-items:center; gap:0.4rem;">
          <span>💡</span> Why does Speaker B say these phrases? (Handout Page 3 Question)
        </h5>
        <p style="font-size:0.86rem; color:var(--text-body); margin:0 0 0.35rem; line-height:1.45;">
          ${escapeHtml(s2.pedagogicalAnalysis.answerEn)}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
          ${escapeHtml(s2.pedagogicalAnalysis.answerAr)}
        </p>
      </div>
    </div>

    <!-- Unusual Weddings Comparison Matrix -->
    <div class="study-card" style="border-top:4px solid var(--purple); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--purple); color:#fff; border:none;">HANDOUT PAGE 1 • LISTENING COMPREHENSION TABLE</span>
          <h4 style="font-size:1.2rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Unusual Weddings Around the World: 4 Stories Comparison
          </h4>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
        ${matrix.map(m => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.75rem; padding:0.15rem 0.5rem;">STORY #${m.storyNum}</span>
              <span style="font-size:1.5rem;">${m.icon}</span>
            </div>
            <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0;">
              ${escapeHtml(m.title)}
            </h5>
            <p style="font-size:0.84rem; color:var(--text-muted); margin:0;">
              📍 <strong>Venue:</strong> ${escapeHtml(m.venue)}
            </p>
            <p style="font-size:0.86rem; color:var(--text-body); margin:0; line-height:1.45;">
              ⚡ <strong>Why Unusual:</strong> ${escapeHtml(m.unusualAspect)}
            </p>
            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); font-size:0.82rem; color:var(--emerald); font-weight:600;">
              💰 ${escapeHtml(m.costImpact)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function checkSession14Story1Gaps() {
  const inputs = document.querySelectorAll('.s14-story1-input');
  inputs.forEach(input => {
    const val = input.value.trim().toLowerCase();
    const correct = input.getAttribute('data-correct').toLowerCase();
    const badge = document.getElementById(input.id.replace('gap', 'badge'));
    const isCorrect = val && (val === correct || correct.includes(val) || val.includes(correct.replace('?', '').trim()));
    if (isCorrect) {
      input.style.borderColor = 'var(--emerald)';
      input.style.background = 'rgba(16,185,129,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--emerald)';
        badge.style.color = '#fff';
        badge.textContent = '✓ Correct';
      }
    } else {
      input.style.borderColor = 'var(--rose)';
      input.style.background = 'rgba(239,68,68,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--rose)';
        badge.style.color = '#fff';
        badge.textContent = '✗ Try again';
      }
    }
  });
}

function revealSession14Story1Gaps() {
  const inputs = document.querySelectorAll('.s14-story1-input');
  inputs.forEach(input => {
    input.value = input.getAttribute('data-correct');
  });
  checkSession14Story1Gaps();
}

function resetSession14Story1Gaps() {
  const inputs = document.querySelectorAll('.s14-story1-input');
  inputs.forEach(input => {
    input.value = '';
    input.style.borderColor = '';
    input.style.background = '';
    const badge = document.getElementById(input.id.replace('gap', 'badge'));
    if (badge) badge.style.display = 'none';
  });
}

function playSession14Story1Audio() {
  speakUK("Speaker A: So, what was the last wedding you went to? Speaker B: Well, I went to a friend's wedding near Bristol in England. It was my friend, Andy, who I've known for a long time. It was unusual in that he booked a small church hall. Speaker A: A church hall? Speaker B: Well, it's not the church, but a nice old building where they hold functions and parties. Andy did most of the catering for his own wedding. Speaker A: Really? He worked on his wedding day! Speaker B: Yes, and all the jobs like washing all the dishes were done by me and his other friends. Speaker A: You did the washing up? Speaker B: Yeah, so all in all, it was much cheaper, and it felt like a friendly, family occasion.");
}

function checkSession14Story2Gaps() {
  const inputs = document.querySelectorAll('.s14-story2-input');
  inputs.forEach(input => {
    const val = input.value.trim().toLowerCase();
    const correct = input.getAttribute('data-correct').toLowerCase();
    const badge = document.getElementById(input.id.replace('gap', 'badge'));
    const isCorrect = val && (val === correct || correct.includes(val) || val.includes(correct.replace(/[!.]/g, '').trim()));
    if (isCorrect) {
      input.style.borderColor = 'var(--emerald)';
      input.style.background = 'rgba(16,185,129,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--emerald)';
        badge.style.color = '#fff';
        badge.textContent = '✓ Correct';
      }
    } else {
      input.style.borderColor = 'var(--rose)';
      input.style.background = 'rgba(239,68,68,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--rose)';
        badge.style.color = '#fff';
        badge.textContent = '✗ Try again';
      }
    }
  });
}

function revealSession14Story2Gaps() {
  const inputs = document.querySelectorAll('.s14-story2-input');
  inputs.forEach(input => {
    input.value = input.getAttribute('data-correct');
  });
  checkSession14Story2Gaps();
}

function resetSession14Story2Gaps() {
  const inputs = document.querySelectorAll('.s14-story2-input');
  inputs.forEach(input => {
    input.value = '';
    input.style.borderColor = '';
    input.style.background = '';
    const badge = document.getElementById(input.id.replace('gap', 'badge'));
    if (badge) badge.style.display = 'none';
  });
}

function playSession14Story2Audio() {
  speakUK("Speaker A: I read this great story in a magazine once. Speaker B: Oh yeah? Speaker A: Well, it was this guy's job to press the button on the CD player when the bride arrived at the ceremony, so she could walk down the aisle to the music she had chosen. Speaker B: Right. Sure. Speaker A: The problem was that the guy was waiting outside the wrong door. Someone else had to press the button and didn't know which track it was. So track number one got played, and it was Mr Boombastic by Shaggy! Speaker B: No, you're joking! Speaker A: Mr Boombastic! Totally the wrong music for a wedding! The bride never spoke to the man again, but it must have been hilarious.");
}

function renderSession14Smartboard() {
  const container = document.getElementById('session14SmartboardWrap');
  const items = getSession14Data('SESSION_14_SMARTBOARD_MATCHING');
  if (!container || !items) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid #0284c7; margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:#0284c7; color:#fff; border:none;">CLASSROOM PHOTOS 1 &amp; 2 • LEARNINGAPPS MATCHING QUIZ</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Interactive Smartboard Vocabulary Match &amp; Part-of-Speech Board
          </h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
            Match each authentic definition card from the LearningApps smartboard slide to its target word, then examine the teacher's handwritten grammar derivations.
          </p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-primary" onclick="checkSession14Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Matches
          </button>
          <button class="btn-outline-subtle" onclick="revealSession14Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal All
          </button>
          <button class="btn-outline-subtle" onclick="resetSession14Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${items.map(item => `
          <div class="study-card s14-match-card" id="s14_match_${item.id}" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.65rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="background:rgba(2,132,199,0.1); color:#0284c7; border-color:rgba(2,132,199,0.3); font-size:0.72rem;">
                ${escapeHtml(item.pos)}
              </span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.term)}: ${escapeJs(item.definition)}')">🔊</button>
            </div>

            <!-- Definition Box -->
            <div style="background:rgba(16,185,129,0.06); border:1.5px dashed var(--emerald); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.9rem; color:var(--text-main); line-height:1.45;">
              "${escapeHtml(item.definition)}"
            </div>

            <!-- Dropdown Matcher -->
            <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.25rem;">
              <select class="filter-input task-select s14-match-select" id="s14_sel_${item.id}" data-correct="${escapeHtml(item.term)}" style="flex:1; font-weight:700; font-size:0.88rem; padding:0.35rem 0.6rem;">
                <option value="">-- Choose Word --</option>
                ${items.map(opt => `<option value="${escapeHtml(opt.term)}">${escapeHtml(opt.term)}</option>`).join('')}
              </select>
              <span id="s14_match_badge_${item.id}" class="teacher-badge" style="display:none; font-size:0.75rem;"></span>
            </div>

            <!-- Arabic Translation & Example -->
            <div style="font-size:0.82rem; color:var(--text-muted); border-top:1px dashed var(--border-light); padding-top:0.5rem; margin-top:auto;">
              <div style="direction:rtl; text-align:right; margin-bottom:0.25rem; color:var(--text-body);">
                ${escapeHtml(item.arMeaning)}
              </div>
              <div style="font-style:italic; color:var(--bc-blue);">
                💬 "${escapeHtml(item.example)}"
              </div>
              <div style="margin-top:0.35rem; font-size:0.78rem; background:var(--bg-subtle); padding:0.25rem 0.5rem; border-radius:4px; color:var(--text-main);">
                📋 <strong>Teacher Board Note:</strong> ${escapeHtml(item.boardAnnotation)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function checkSession14Matches() {
  const selects = document.querySelectorAll('.s14-match-select');
  selects.forEach(sel => {
    const val = sel.value;
    const correct = sel.getAttribute('data-correct');
    const badge = document.getElementById(sel.id.replace('sel', 'match_badge'));
    if (val === correct) {
      sel.style.borderColor = 'var(--emerald)';
      sel.style.background = 'rgba(16,185,129,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--emerald)';
        badge.style.color = '#fff';
        badge.textContent = '✓ Correct';
      }
    } else {
      sel.style.borderColor = 'var(--rose)';
      sel.style.background = 'rgba(239,68,68,0.08)';
      if (badge) {
        badge.style.display = 'inline-block';
        badge.style.background = 'var(--rose)';
        badge.style.color = '#fff';
        badge.textContent = '✗ Incorrect';
      }
    }
  });
}

function revealSession14Matches() {
  const selects = document.querySelectorAll('.s14-match-select');
  selects.forEach(sel => {
    sel.value = sel.getAttribute('data-correct');
  });
  checkSession14Matches();
}

function resetSession14Matches() {
  const selects = document.querySelectorAll('.s14-match-select');
  selects.forEach(sel => {
    sel.value = '';
    sel.style.borderColor = '';
    sel.style.background = '';
    const badge = document.getElementById(sel.id.replace('sel', 'match_badge'));
    if (badge) badge.style.display = 'none';
  });
}

function renderSession14VocabGroups() {
  const container = document.getElementById('session14GroupsWrap');
  const data = getSession14Data('SESSION_14_VOCAB_GROUPS');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--purple); margin-bottom:1.5rem;">
      <div style="margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <span class="teacher-badge" style="background:var(--purple); color:#fff; border:none;">HANDOUT PAGE 1 • LEXIS CLUSTERING</span>
        <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
          5-Domain Master Lexis Matrix (28 Target Words)
        </h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
          ${escapeHtml(data.instruction)} Click any chip to listen to native British pronunciation.
        </p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
        ${data.categories.map(cat => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:1.4rem;">${cat.icon}</span>
              <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0;">
                ${escapeHtml(cat.name)}
              </h5>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin:0;">
              ${escapeHtml(cat.note)}
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.25rem;">
              ${cat.words.map(w => `
                <button type="button" class="btn-outline-subtle" onclick="speakUK('${escapeJs(w)}')" style="font-size:0.82rem; padding:0.25rem 0.6rem; border-radius:16px; font-weight:600; display:flex; align-items:center; gap:0.3rem;">
                  <span>🔊</span> ${escapeHtml(w)}
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession14Customs() {
  const container = document.getElementById('session14CustomsWrap');
  const customs = getSession14Data('SESSION_14_GLOBAL_CUSTOMS');
  if (!container || !customs) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid #0d9488; margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:#0d9488; color:#fff; border:none;">AUTHENTIC HANDOUT &amp; STUDENT NOTEBOOK NOTES</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Wedding Customs Around the World: Case Study Profiles
          </h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
            100% authentic transcription of British Council cutout reading slips and handwritten classroom student notes.
          </p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
        ${customs.map(c => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.1rem; display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="font-size:1.5rem;">${c.icon}</span>
                <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">
                  ${escapeHtml(c.country)}
                </h5>
              </div>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(c.country)}: ${escapeJs(c.authenticText)}')">🔊</button>
            </div>

            <!-- Authentic Text -->
            <div style="background:var(--bg-subtle); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.88rem; color:var(--text-body); line-height:1.45;">
              <span class="teacher-badge" style="font-size:0.68rem; padding:0.1rem 0.4rem; margin-bottom:0.35rem; display:inline-block;">${escapeHtml(c.badge)}</span>
              <p style="margin:0;">"${escapeHtml(c.authenticText)}"</p>
            </div>

            <!-- Student Handwritten Notes -->
            <div style="background:rgba(245,158,11,0.06); border:1px dashed var(--amber); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.84rem; line-height:1.45;">
              <strong style="color:var(--amber);">✏️ Student Notebook Notes:</strong>
              <p style="margin:0.25rem 0 0; color:var(--text-main); font-style:italic;">"${escapeHtml(c.studentNotes)}"</p>
            </div>

            <!-- Cultural Symbolism -->
            <div style="font-size:0.82rem; color:var(--text-body); line-height:1.45;">
              🔮 <strong>Cultural Symbolism:</strong> ${escapeHtml(c.symbolism)}
            </div>

            <!-- Arabic Translation -->
            <div style="font-size:0.8rem; color:var(--text-muted); direction:rtl; text-align:right; border-top:1px dashed var(--border-light); padding-top:0.45rem; margin-top:auto;">
              ${escapeHtml(c.arExplain)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Classroom Discussion Prompt -->
      <div style="background:rgba(13,148,136,0.08); border:1px solid rgba(13,148,136,0.25); border-radius:var(--radius-sm); padding:1rem;">
        <h5 style="font-size:0.95rem; font-weight:800; color:#0d9488; margin:0 0 0.5rem; display:flex; align-items:center; gap:0.4rem;">
          <span>🗣️</span> Handout Group Discussion Task:
        </h5>
        <p style="font-size:0.9rem; color:var(--text-main); margin:0 0 0.75rem; font-weight:600;">
          "Did anything you hear surprise you? Which place would you most or least like to attend a wedding? Tell your group."
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${customs.map(c => `
            <button type="button" class="btn-outline-subtle" onclick="voteCustom('${escapeJs(c.country)}')" style="font-size:0.8rem; padding:0.35rem 0.75rem;">
              ${c.icon} ${escapeHtml(c.country)}
            </button>
          `).join('')}
        </div>
        <div id="customVoteFeedback" style="display:none; margin-top:0.75rem; font-size:0.85rem; color:var(--emerald); font-weight:700;"></div>
      </div>
    </div>
  `;
}

function voteCustom(country) {
  const el = document.getElementById('customVoteFeedback');
  if (el) {
    el.style.display = 'block';
    el.textContent = `✓ Selected: You chose to attend a wedding in ${country}! Now practice explaining your reasons using adjectives like 'symbolic', 'intimate', or 'fascinating'.`;
  }
}

function renderSession14Speaking() {
  const container = document.getElementById('session14SpeakingWrap');
  const prompts = getSession14Data('SESSION_14_DISCUSSION_LAB');
  if (!container || !prompts) return;

  container.innerHTML = prompts.map(p => `
    <div class="study-card" style="border-top:3.5px solid var(--bc-blue); display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">
          PROMPT #${p.num} • ${escapeHtml(p.level)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.prompt)}')">🔊</button>
      </div>

      <p style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin:0; line-height:1.45;">
        ${escapeHtml(p.prompt)}
      </p>

      <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
        ${p.keyLexisUsed.map(w => `<span class="teacher-badge" style="font-size:0.7rem; padding:0.1rem 0.4rem; background:rgba(0,102,245,0.06); color:var(--bc-blue); border-color:rgba(0,102,245,0.2);">${escapeHtml(w)}</span>`).join('')}
      </div>

      <div style="margin-top:auto; padding-top:0.65rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle btn-s14-speech-toggle" data-target="s14SpeechAns_${p.num}" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
          <span>💡 Expandable Model Answer</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div id="s14SpeechAns_${p.num}" style="display:none; margin-top:0.65rem; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
          <p style="margin:0 0 0.5rem; color:var(--text-body);">
            "${escapeHtml(p.modelSpeech)}"
          </p>
          <button class="btn btn-primary" onclick="speakUK('${escapeJs(p.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
            🔊 Play Spoken Speech
          </button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-s14-speech-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector('.toggle-icon');
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        if (icon) icon.textContent = isHidden ? '▲' : '▼';
      }
    });
  });
}

function renderSession14Feedback() {
  const container = document.getElementById('session14FeedbackWrap');
  const items = getSession14Data('SESSION_14_TEACHER_FEEDBACK');
  if (!container || !items) return;

  container.innerHTML = items.map(f => `
    <div class="study-card" style="border-top:3.5px solid var(--rose); display:flex; flex-direction:column; gap:0.65rem; background:linear-gradient(180deg, var(--bg-surface) 0%, rgba(239,68,68,0.02) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:rgba(239,68,68,0.1); color:var(--rose); border-color:rgba(239,68,68,0.3); font-size:0.72rem;">
          ${escapeHtml(f.category)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(f.speech)}')">🔊</button>
      </div>

      <!-- Incorrect (Live Board Markup) -->
      <div style="background:rgba(239,68,68,0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--rose); font-family:monospace;">
        ❌ <s style="text-decoration:line-through; font-weight:600;">${escapeHtml(f.incorrect)}</s>
      </div>

      <!-- Correct (Teacher Green Pen) -->
      <div style="background:rgba(16,185,129,0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.9rem; font-weight:700; color:var(--emerald);">
        ✅ ${escapeHtml(f.correct)}
      </div>

      <!-- Grammar Rule -->
      <div style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin-top:auto;">
        💡 <strong>Tutor Rule:</strong> ${escapeHtml(f.rule)}
      </div>

      <!-- Arabic Explanation -->
      <div style="font-size:0.8rem; color:var(--text-muted); direction:rtl; text-align:right; border-top:1px dashed var(--border-light); padding-top:0.45rem;">
        ${escapeHtml(f.arRule)}
      </div>
    </div>
  `).join('');
}

function renderSession14Pronunciation() {
  const container = document.getElementById('session14PronunciationWrap');
  const sections = getSession14Data('SESSION_14_PRONUNCIATION_LAB');
  if (!container || !sections) return;

  const intonationSec = sections[0];
  const stressSec = sections[1];

  container.innerHTML = `
    <!-- Card 1: Intonation of Showing Interest -->
    <div class="study-card" style="border-top:4px solid var(--bc-blue); display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none; font-size:0.72rem;">
          ACTIVE LISTENING INTONATION
        </span>
      </div>
      <h5 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(intonationSec.category)}
      </h5>
      <p style="font-size:0.86rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(intonationSec.rule)}
      </p>

      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.5rem;">
        ${intonationSec.examples.map(ex => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <div>
              <strong style="font-size:0.92rem; color:var(--text-main); display:block;">"${escapeHtml(ex.phrase)}"</strong>
              <span class="teacher-badge" style="font-size:0.7rem; padding:0.1rem 0.35rem; margin-top:0.2rem; display:inline-block;">${escapeHtml(ex.type)}</span>
              <p style="font-size:0.78rem; color:var(--text-muted); margin:0.2rem 0 0;">${escapeHtml(ex.note)}</p>
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(ex.audioText)}')">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Card 2: Silent Letters & Stress Shifts -->
    <div class="study-card" style="border-top:4px solid var(--purple); display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:var(--purple); color:#fff; border:none; font-size:0.72rem;">
          PHONETICS &amp; SILENT CONSONANTS
        </span>
      </div>
      <h5 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(stressSec.category)}
      </h5>
      <p style="font-size:0.86rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(stressSec.rule)}
      </p>

      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.5rem;">
        ${stressSec.items.map(it => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <strong style="font-size:0.92rem; color:var(--text-main);">${escapeHtml(it.word)}</strong>
                <code style="font-size:0.82rem; color:var(--bc-blue); background:rgba(0,102,245,0.06); padding:0.1rem 0.35rem; border-radius:4px;">${escapeHtml(it.ipa)}</code>
              </div>
              <p style="font-size:0.8rem; color:var(--text-body); margin:0.25rem 0 0;">${escapeHtml(it.silentLetter)}</p>
              <p style="font-size:0.75rem; color:var(--text-muted); margin:0.15rem 0 0; direction:rtl; text-align:right;">${escapeHtml(it.arNote)}</p>
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(it.word)}')">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession14Notebook() {
  const container = document.getElementById('session14NotebookWrap');
  const pages = getSession14Data('SESSION_14_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = pages.map(p => `
    <div class="study-card paper-texture" style="border:1px solid var(--border-light); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">
          ${escapeHtml(p.tag)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.title)}')">🔊</button>
      </div>

      <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(p.title)}
      </h5>

      <!-- Image thumbnail with lightbox click -->
      <div style="position:relative; border-radius:var(--radius-sm); overflow:hidden; border:1px solid var(--border-light); cursor:pointer;" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}', '${escapeJs(p.summary)}')">
        <img src="${p.imgUrl}" alt="${escapeHtml(p.title)}" style="width:100%; height:180px; object-fit:cover; display:block; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
        <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(0,0,0,0.65); color:#fff; font-size:0.75rem; padding:0.35rem 0.65rem; text-align:center;">
          🔍 Click to view full-resolution classroom photo
        </div>
      </div>

      <p style="font-size:0.84rem; color:var(--text-muted); margin:0;">
        ${escapeHtml(p.summary)}
      </p>

      <!-- Verbatim Transcription Box -->
      <div style="margin-top:auto; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.82rem; line-height:1.45; font-family:monospace; max-height:220px; overflow-y:auto; white-space:pre-wrap; color:var(--text-body);">
        ${escapeHtml(p.fullTranscription)}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   14. THEME, DRAWER, AND MOBILE BOTTOM BAR SYNCHRONIZATION
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

  // Mobile Bottom Navigation Sync
  const bottomBarItems = document.querySelectorAll('.bottom-bar-item');
  bottomBarItems.forEach(item => {
    item.addEventListener('click', () => {
      bottomBarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Synchronize active tabs on scroll
  window.addEventListener('scroll', () => {
    const sections = [
      { id: 'heroOverview', mobLink: '.bottom-bar-item[href="#heroOverview"]' },
      { id: 'part1Flashcards', mobLink: '.bottom-bar-item[href="#part1Flashcards"]' },
      { id: 'part2Memory', mobLink: '.bottom-bar-item[href="#part2Memory"]' },
      { id: 'part3Connect', mobLink: '.bottom-bar-item[href="#part3Connect"]' },
      { id: 'part4AllTest', mobLink: '.bottom-bar-item[href="#part4AllTest"]' }
    ];

    const scrollY = window.pageYOffset + 180;
    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el && el.style.display !== 'none') {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          bottomBarItems.forEach(i => i.classList.remove('active'));
          const activeMob = document.querySelector(sec.mobLink);
          if (activeMob) activeMob.classList.add('active');
          break;
        }
      }
    }
  }, { passive: true });
}

function updateThemeSymbol(theme) {
  const el = document.getElementById('themeSymbol');
  if (el) el.textContent = theme === 'dark' ? '☀️' : '🌙';
}


/* ==========================================================================
   SESSION 15: CONVERSATION SKILLS & AVOIDING 'DEAD AIR'
   Complete Interactive Pedagogical Rendering Suite
   ========================================================================== */
function getSession15Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

function renderSession15LeadIn() {
  const container = document.getElementById('session15LeadInWrap');
  const data = getSession15Data('SESSION_15_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 1 • WARM-UP DISCUSSION</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Meeting New People &amp; Social vs. Business Situations
          </h4>
        </div>
        <button class="btn btn-primary" onclick="speakUK('Work with a partner and discuss the following questions. Are you good at meeting new people? When was the last time you met someone new? What kind of questions might you ask in a social party versus a formal business meeting?')" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Prompts
        </button>
      </div>

      <!-- 3 Discussion Questions -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${data.questions.map(q => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="font-size:0.75rem; padding:0.15rem 0.5rem;">QUESTION #${q.num}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.q)}')">🔊</button>
            </div>
            <p style="font-size:0.98rem; font-weight:700; color:var(--text-main); margin:0;">
              ${escapeHtml(q.q)}
            </p>
            <p style="font-size:0.85rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
              ${escapeHtml(q.qAr)}
            </p>
            <div style="margin-top:auto; padding-top:0.75rem; border-top:1px dashed var(--border-light);">
              <button type="button" class="btn-outline-subtle btn-s15-answer-toggle" data-target="s15LeadInAns_${q.num}" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
                <span>💡 Model Partner Response</span>
                <span class="toggle-icon">▼</span>
              </button>
              <div id="s15LeadInAns_${q.num}" style="display:none; margin-top:0.65rem; background:rgba(0,102,245,0.05); border:1px solid rgba(0,102,245,0.15); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
                <p style="margin:0 0 0.5rem; color:var(--text-body);">
                  ${escapeHtml(q.modelAnswer)}
                </p>
                <button class="btn btn-primary" onclick="speakUK('${escapeJs(q.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
                  🔊 Play Model Turn
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Social vs Business Setting Matrix -->
      <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:1rem;">
        <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0 0 0.75rem; display:flex; align-items:center; gap:0.4rem;">
          <span>⚖️</span> Comparing Registers: Social Gatherings vs. Formal Business Settings
        </h5>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;">
          ${data.contextComparison.map(c => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.5rem;">
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span style="font-size:1.3rem;">${c.icon}</span>
                <strong style="font-size:0.95rem; color:var(--text-main);">${escapeHtml(c.setting)}</strong>
              </div>
              <div style="font-size:0.84rem; color:var(--text-body);">
                <strong>Tone &amp; Style:</strong> ${escapeHtml(c.tone)}
              </div>
              <div style="font-size:0.84rem; color:var(--text-body);">
                <strong>Safe Topics:</strong> ${escapeHtml(c.topics)}
              </div>
              <div style="font-size:0.84rem; color:var(--text-body);">
                <strong>Body Language:</strong> ${escapeHtml(c.bodyLanguage)}
              </div>
              <div style="font-size:0.82rem; background:rgba(0,102,245,0.04); border-left:3px solid var(--bc-blue); padding:0.4rem 0.6rem; border-radius:2px; margin-top:0.25rem;">
                <strong>Typical Openers:</strong> ${c.openers.join(' • ')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-s15-answer-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector('.toggle-icon');
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        if (icon) icon.textContent = isHidden ? '▲' : '▼';
      }
    });
  });
}

function renderSession15Dialogues() {
  const container = document.getElementById('session15DialoguesWrap');
  const data = getSession15Data('SESSION_15_DIALOGUES');
  if (!container || !data) return;

  container.innerHTML = `
    <!-- Dialogue 1: The Boat Race -->
    <div class="study-card" style="border-top:4px solid var(--emerald); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--emerald); color:#fff; border:none;">HANDOUT PAGE 3 • LISTENING 1</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            ${escapeHtml(data.dialogue1.title)}
          </h4>
          <span style="font-size:0.85rem; color:var(--text-muted);">${escapeHtml(data.dialogue1.topic)}</span>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <button class="btn btn-primary" onclick="checkSession15Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Gaps
          </button>
          <button class="btn-outline-subtle" onclick="revealSession15Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal
          </button>
          <button class="btn-outline-subtle" onclick="resetSession15Story1Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
          <button class="audio-circle-btn" onclick="playSession15Story1Audio()" title="Listen to full dialogue">🔊</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.25rem;">
        ${data.dialogue1.turns.map((turn, idx) => `
          <div style="display:flex; gap:0.75rem; align-items:flex-start; background:${idx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)'}; padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
            <span style="font-weight:800; min-width:65px; color:${turn.speaker === 'Mark' ? 'var(--bc-blue)' : 'var(--emerald)'};">
              ${escapeHtml(turn.speaker)}:
            </span>
            <div style="flex:1; font-size:0.92rem; line-height:1.5; color:var(--text-body);">
              ${turn.isGap ? `
                <div style="display:inline-block; vertical-align:middle; width:100%;">
                  <input type="text" id="s15_gap_story1_${idx}" class="filter-input task-input s15-story1-gap" data-answer="${escapeHtml(turn.answer)}" placeholder="Type conversation closing signal..." style="width:100%; font-weight:700; padding:0.3rem 0.6rem; font-size:0.88rem;">
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
                    💡 <em>Prompt: ${escapeHtml(turn.prompt)}</em>
                  </div>
                </div>
              ` : escapeHtml(turn.text)}
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(turn.text)}')">🔊</button>
          </div>
        `).join('')}
      </div>

      <!-- Pedagogical Analysis -->
      <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.2); border-radius:var(--radius-sm); padding:0.85rem;">
        <h6 style="font-size:0.88rem; font-weight:800; color:var(--emerald); margin:0 0 0.35rem;">
          📋 British Council Listening Analysis:
        </h6>
        <p style="font-size:0.88rem; color:var(--text-main); margin:0 0 0.35rem; font-weight:600;">
          ${escapeHtml(data.dialogue1.pedagogicalAnalysis.question)}
        </p>
        <p style="font-size:0.85rem; color:var(--text-body); margin:0 0 0.35rem;">
          ${escapeHtml(data.dialogue1.pedagogicalAnalysis.answerEn)}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
          ${escapeHtml(data.dialogue1.pedagogicalAnalysis.answerAr)}
        </p>
      </div>
    </div>

    <!-- Dialogue 2: Colleagues at Work -->
    <div class="study-card" style="border-top:4px solid var(--purple); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--purple); color:#fff; border:none;">HANDOUT PAGE 3 &amp; 4 • LISTENING 2</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            ${escapeHtml(data.dialogue2.title)}
          </h4>
          <span style="font-size:0.85rem; color:var(--text-muted);">${escapeHtml(data.dialogue2.topic)}</span>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <button class="btn btn-primary" onclick="checkSession15Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Gaps
          </button>
          <button class="btn-outline-subtle" onclick="revealSession15Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal
          </button>
          <button class="btn-outline-subtle" onclick="resetSession15Story2Gaps()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
          <button class="audio-circle-btn" onclick="playSession15Story2Audio()" title="Listen to full dialogue">🔊</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.25rem;">
        ${data.dialogue2.turns.map((turn, idx) => `
          <div style="display:flex; gap:0.75rem; align-items:flex-start; background:${idx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)'}; padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
            <span style="font-weight:800; min-width:65px; color:${turn.speaker === 'Sarah' ? 'var(--rose)' : 'var(--purple)'};">
              ${escapeHtml(turn.speaker)}:
            </span>
            <div style="flex:1; font-size:0.92rem; line-height:1.5; color:var(--text-body);">
              ${turn.isGap ? `
                <div style="display:inline-block; vertical-align:middle; width:100%;">
                  <input type="text" id="s15_gap_story2_${idx}" class="filter-input task-input s15-story2-gap" data-answer="${escapeHtml(turn.answer)}" placeholder="Type advice formula..." style="width:100%; font-weight:700; padding:0.3rem 0.6rem; font-size:0.88rem;">
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
                    💡 <em>Formula: ${escapeHtml(turn.gapType)}</em>
                  </div>
                </div>
              ` : escapeHtml(turn.text)}
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(turn.text)}')">🔊</button>
          </div>
        `).join('')}
      </div>

      <!-- Pedagogical Analysis -->
      <div style="background:rgba(124,58,237,0.06); border:1px solid rgba(124,58,237,0.2); border-radius:var(--radius-sm); padding:0.85rem;">
        <h6 style="font-size:0.88rem; font-weight:800; color:var(--purple); margin:0 0 0.35rem;">
          📋 Language of Advice Breakdown:
        </h6>
        <p style="font-size:0.88rem; color:var(--text-main); margin:0 0 0.35rem; font-weight:600;">
          ${escapeHtml(data.dialogue2.pedagogicalAnalysis.question)}
        </p>
        <p style="font-size:0.85rem; color:var(--text-body); margin:0 0 0.35rem;">
          ${escapeHtml(data.dialogue2.pedagogicalAnalysis.answerEn)}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
          ${escapeHtml(data.dialogue2.pedagogicalAnalysis.answerAr)}
        </p>
      </div>
    </div>

    <!-- Dialogue 3: Singapore Business Icebreakers -->
    <div class="study-card" style="border-top:4px solid var(--amber);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--amber); color:#000; border:none;">HANDOUT PAGE 1 &amp; 2 • EXERCISES 2 &amp; 3</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            ${escapeHtml(data.dialogue3.title)}
          </h4>
          <span style="font-size:0.85rem; color:var(--text-muted);">${escapeHtml(data.dialogue3.topic)}</span>
        </div>
        <button class="audio-circle-btn" onclick="playSession15Story3Audio()" title="Listen to full dialogue">🔊</button>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1rem;">
        ${data.dialogue3.turns.map((turn, idx) => `
          <div style="display:flex; gap:0.75rem; align-items:flex-start; background:${idx % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-subtle)'}; padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
            <span style="font-weight:800; min-width:65px; color:${turn.speaker === 'Emma' ? 'var(--bc-blue)' : 'var(--amber)'};">
              ${escapeHtml(turn.speaker)}:
            </span>
            <div style="flex:1; font-size:0.92rem; line-height:1.5; color:var(--text-body);">
              ${escapeHtml(turn.text)}
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(turn.text)}')">🔊</button>
          </div>
        `).join('')}
      </div>

      <div style="background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:var(--radius-sm); padding:0.85rem;">
        <h6 style="font-size:0.88rem; font-weight:800; color:var(--amber); margin:0 0 0.35rem;">
          📋 Pedagogical Analysis: Reciprocal Social Questions
        </h6>
        <p style="font-size:0.85rem; color:var(--text-body); margin:0 0 0.35rem;">
          ${escapeHtml(data.dialogue3.pedagogicalAnalysis.answerEn)}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
          ${escapeHtml(data.dialogue3.pedagogicalAnalysis.answerAr)}
        </p>
      </div>
    </div>
  `;
}

function checkSession15Story1Gaps() {
  const inputs = document.querySelectorAll('.s15-story1-gap');
  inputs.forEach(inp => {
    const val = inp.value.trim().toLowerCase();
    const ans = inp.getAttribute('data-answer').toLowerCase();
    if (val.length > 5 && (ans.includes(val) || val.includes('lunch break') || val.includes('see you later'))) {
      inp.style.borderColor = 'var(--emerald)';
      inp.style.background = 'rgba(16,185,129,0.08)';
    } else {
      inp.style.borderColor = 'var(--rose)';
      inp.style.background = 'rgba(239,68,68,0.08)';
    }
  });
}

function revealSession15Story1Gaps() {
  const inputs = document.querySelectorAll('.s15-story1-gap');
  inputs.forEach(inp => {
    inp.value = inp.getAttribute('data-answer');
  });
  checkSession15Story1Gaps();
}

function resetSession15Story1Gaps() {
  const inputs = document.querySelectorAll('.s15-story1-gap');
  inputs.forEach(inp => {
    inp.value = '';
    inp.style.borderColor = '';
    inp.style.background = '';
  });
}

function playSession15Story1Audio() {
  const data = getSession15Data('SESSION_15_DIALOGUES');
  if (!data || !data.dialogue1) return;
  const script = data.dialogue1.turns.map(t => `${t.speaker}: ${t.text}`).join('. ');
  speakUK(script);
}

function checkSession15Story2Gaps() {
  const inputs = document.querySelectorAll('.s15-story2-gap');
  inputs.forEach(inp => {
    const val = inp.value.trim().toLowerCase();
    const ans = inp.getAttribute('data-answer').toLowerCase();
    if (val.length > 3 && ans.includes(val)) {
      inp.style.borderColor = 'var(--emerald)';
      inp.style.background = 'rgba(16,185,129,0.08)';
    } else {
      inp.style.borderColor = 'var(--rose)';
      inp.style.background = 'rgba(239,68,68,0.08)';
    }
  });
}

function revealSession15Story2Gaps() {
  const inputs = document.querySelectorAll('.s15-story2-gap');
  inputs.forEach(inp => {
    inp.value = inp.getAttribute('data-answer');
  });
  checkSession15Story2Gaps();
}

function resetSession15Story2Gaps() {
  const inputs = document.querySelectorAll('.s15-story2-gap');
  inputs.forEach(inp => {
    inp.value = '';
    inp.style.borderColor = '';
    inp.style.background = '';
  });
}

function playSession15Story2Audio() {
  const data = getSession15Data('SESSION_15_DIALOGUES');
  if (!data || !data.dialogue2) return;
  const script = data.dialogue2.turns.map(t => `${t.speaker}: ${t.text}`).join('. ');
  speakUK(script);
}

function playSession15Story3Audio() {
  const data = getSession15Data('SESSION_15_DIALOGUES');
  if (!data || !data.dialogue3) return;
  const script = data.dialogue3.turns.map(t => `${t.speaker}: ${t.text}`).join('. ');
  speakUK(script);
}

function renderSession15Smartboard() {
  const container = document.getElementById('session15SmartboardWrap');
  const items = getSession15Data('SESSION_15_SMARTBOARD_MATCHING');
  if (!container || !items) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid #0284c7; margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:#0284c7; color:#fff; border:none;">HANDOUT PAGE 3 &amp; SMARTBOARDS 1 &amp; 2 • MATCHING LAB</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            12 Conversational Phrases: Initiating vs. Closing &amp; Register Sorting
          </h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
            Classify each authentic British Council phrase into Initiating (I) or Closing (C), and test your intuition on Formal vs. Informal registers.
          </p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-primary" onclick="checkSession15Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            ✓ Check Matches
          </button>
          <button class="btn-outline-subtle" onclick="revealSession15Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            👁 Reveal All
          </button>
          <button class="btn-outline-subtle" onclick="resetSession15Matches()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
            🔄 Reset
          </button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${items.map(item => `
          <div class="study-card s15-match-card" id="s15_match_${item.id}" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.65rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.72rem;">PHRASE #${item.id.replace('sb', '')}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.phrase)}')">🔊</button>
            </div>

            <!-- The Phrase -->
            <div style="background:rgba(0,102,245,0.06); border:1.5px solid rgba(0,102,245,0.2); border-radius:var(--radius-sm); padding:0.65rem 0.8rem; font-size:1.02rem; font-weight:800; color:var(--text-main);">
              "${escapeHtml(item.phrase)}"
            </div>

            <!-- Two Selectors: Initiating/Closing and Formal/Informal -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
              <div>
                <label style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:0.2rem;">Function:</label>
                <select class="filter-input task-select s15-cat-select" id="s15_cat_${item.id}" data-correct="${escapeHtml(item.category)}" style="width:100%; font-size:0.82rem; padding:0.3rem 0.5rem; font-weight:700;">
                  <option value="">-- Function --</option>
                  <option value="Initiating">Initiating (I)</option>
                  <option value="Closing">Closing (C)</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:0.2rem;">Register:</label>
                <select class="filter-input task-select s15-reg-select" id="s15_reg_${item.id}" data-correct="${escapeHtml(item.register)}" style="width:100%; font-size:0.82rem; padding:0.3rem 0.5rem; font-weight:700;">
                  <option value="">-- Register --</option>
                  <option value="Formal">Formal</option>
                  <option value="Neutral / Informal">Neutral / Informal</option>
                  <option value="Informal">Informal</option>
                  <option value="Very Informal">Very Informal</option>
                  <option value="Polite / Formal">Polite / Formal</option>
                  <option value="Neutral / Polite">Neutral / Polite</option>
                  <option value="Polite / Neutral">Polite / Neutral</option>
                </select>
              </div>
            </div>

            <!-- Arabic Meaning & Teacher Board Note -->
            <div style="font-size:0.82rem; color:var(--text-muted); border-top:1px dashed var(--border-light); padding-top:0.5rem; margin-top:auto;">
              <div style="direction:rtl; text-align:right; margin-bottom:0.25rem; color:var(--text-body);">
                ${escapeHtml(item.arMeaning)}
              </div>
              <div style="font-size:0.78rem; background:var(--bg-subtle); padding:0.3rem 0.5rem; border-radius:4px; color:var(--text-main); line-height:1.4;">
                📋 <strong>Usage Note:</strong> ${escapeHtml(item.responseNote)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function checkSession15Matches() {
  const catSelects = document.querySelectorAll('.s15-cat-select');
  catSelects.forEach(sel => {
    const val = sel.value;
    const correct = sel.getAttribute('data-correct');
    if (val === correct) {
      sel.style.borderColor = 'var(--emerald)';
      sel.style.background = 'rgba(16,185,129,0.08)';
    } else {
      sel.style.borderColor = 'var(--rose)';
      sel.style.background = 'rgba(239,68,68,0.08)';
    }
  });

  const regSelects = document.querySelectorAll('.s15-reg-select');
  regSelects.forEach(sel => {
    const val = sel.value;
    const correct = sel.getAttribute('data-correct');
    // Flexible check for registers
    if (val && correct.toLowerCase().includes(val.toLowerCase())) {
      sel.style.borderColor = 'var(--emerald)';
      sel.style.background = 'rgba(16,185,129,0.08)';
    } else {
      sel.style.borderColor = 'var(--rose)';
      sel.style.background = 'rgba(239,68,68,0.08)';
    }
  });
}

function revealSession15Matches() {
  const catSelects = document.querySelectorAll('.s15-cat-select');
  catSelects.forEach(sel => {
    sel.value = sel.getAttribute('data-correct');
  });
  const regSelects = document.querySelectorAll('.s15-reg-select');
  regSelects.forEach(sel => {
    sel.value = sel.getAttribute('data-correct');
  });
  checkSession15Matches();
}

function resetSession15Matches() {
  const catSelects = document.querySelectorAll('.s15-cat-select');
  catSelects.forEach(sel => {
    sel.value = '';
    sel.style.borderColor = '';
    sel.style.background = '';
  });
  const regSelects = document.querySelectorAll('.s15-reg-select');
  regSelects.forEach(sel => {
    sel.value = '';
    sel.style.borderColor = '';
    sel.style.background = '';
  });
}

function renderSession15VocabGroups() {
  const container = document.getElementById('session15GroupsWrap');
  const data = getSession15Data('SESSION_15_VOCAB_GROUPS');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--purple); margin-bottom:1.5rem;">
      <div style="margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <span class="teacher-badge" style="background:var(--purple); color:#fff; border:none;">4 THEMATIC DOMAINS • 28 TARGET LEXIS</span>
        <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
          Categorized Vocabulary &amp; Conversational Toolkit
        </h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin:0.2rem 0 0;">
          ${escapeHtml(data.instruction)}
        </p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
        ${data.categories.map(cat => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1rem; display:flex; flex-direction:column; gap:0.65rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:1.3rem;">${cat.icon}</span>
              <strong style="font-size:0.95rem; color:var(--text-main);">${escapeHtml(cat.name)}</strong>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin:0;">
              ${escapeHtml(cat.note)}
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-top:0.35rem;">
              ${cat.words.map(w => `
                <button type="button" class="tag-pill" onclick="speakUK('${escapeJs(w)}')" style="cursor:pointer; display:flex; align-items:center; gap:0.25rem; padding:0.25rem 0.55rem; font-size:0.8rem; background:rgba(124,58,237,0.06); color:var(--purple); border:1px solid rgba(124,58,237,0.25); border-radius:var(--radius-sm);">
                  <span>${escapeHtml(w)}</span>
                  <span style="font-size:0.65rem;">🔊</span>
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession15Dilemmas() {
  const container = document.getElementById('session15DilemmasWrap');
  const dilemmas = getSession15Data('SESSION_15_DILEMMAS');
  if (!container || !dilemmas) return;

  container.innerHTML = dilemmas.map(dil => `
    <div class="study-card s15-dil-card" id="card_${dil.id}" style="border-top:3.5px solid var(--amber); display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="background:rgba(245,158,11,0.12); color:var(--amber); border-color:rgba(245,158,11,0.3); font-size:0.75rem; font-weight:800;">
          ITEM #${dil.itemNum} • WOULD YOU RATHER...?
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(dil.optionA.text)} or ${escapeJs(dil.optionB.text)}?')">🔊</button>
      </div>

      <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(dil.title)}
      </h5>

      <!-- Choice Option A -->
      <button type="button" class="btn-outline-subtle s15-choice-btn" id="btn_${dil.id}_A" onclick="voteSession15Dilemma('${dil.id}', 'A')" style="width:100%; text-align:left; padding:0.65rem 0.85rem; font-size:0.92rem; font-weight:700; border-radius:var(--radius-sm); border:1.5px solid var(--border-light); background:var(--bg-surface); cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
        <span>🅰️ ${escapeHtml(dil.optionA.text)}</span>
        <span class="vote-indicator" id="ind_${dil.id}_A" style="font-size:0.75rem; color:var(--text-muted);">Vote</span>
      </button>

      <!-- Choice Option B -->
      <button type="button" class="btn-outline-subtle s15-choice-btn" id="btn_${dil.id}_B" onclick="voteSession15Dilemma('${dil.id}', 'B')" style="width:100%; text-align:left; padding:0.65rem 0.85rem; font-size:0.92rem; font-weight:700; border-radius:var(--radius-sm); border:1.5px solid var(--border-light); background:var(--bg-surface); cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
        <span>🅱️ ${escapeHtml(dil.optionB.text)}</span>
        <span class="vote-indicator" id="ind_${dil.id}_B" style="font-size:0.75rem; color:var(--text-muted);">Vote</span>
      </button>

      <!-- Second Conditional Speech Model (Shown on click) -->
      <div id="speech_${dil.id}" style="display:none; background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.86rem; line-height:1.45; margin-top:0.25rem;">
        <div style="font-weight:700; color:var(--amber); margin-bottom:0.25rem;">
          💬 Second Conditional Debate Model:
        </div>
        <p style="margin:0 0 0.5rem; color:var(--text-body);">
          "${escapeHtml(dil.modelSecondConditional)}"
        </p>
        <button class="btn btn-primary" onclick="speakUK('${escapeJs(dil.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
          🔊 Play Model Speech
        </button>
      </div>

      <!-- Pros and Cons Comparison -->
      <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); font-size:0.78rem; color:var(--text-muted);">
        <div><strong>A Pros:</strong> ${escapeHtml(dil.optionA.pros)}</div>
        <div><strong>B Pros:</strong> ${escapeHtml(dil.optionB.pros)}</div>
      </div>
    </div>
  `).join('');
}

function voteSession15Dilemma(dilId, chosenOpt) {
  const btnA = document.getElementById(`btn_${dilId}_A`);
  const btnB = document.getElementById(`btn_${dilId}_B`);
  const indA = document.getElementById(`ind_${dilId}_A`);
  const indB = document.getElementById(`ind_${dilId}_B`);
  const speechBox = document.getElementById(`speech_${dilId}`);

  if (chosenOpt === 'A') {
    btnA.style.borderColor = 'var(--emerald)';
    btnA.style.background = 'rgba(16,185,129,0.1)';
    indA.textContent = '✓ Your Choice (68%)';
    indA.style.color = 'var(--emerald)';
    indA.style.fontWeight = '800';

    btnB.style.borderColor = 'var(--border-light)';
    btnB.style.background = 'var(--bg-surface)';
    indB.textContent = '32%';
    indB.style.color = 'var(--text-muted)';
  } else {
    btnB.style.borderColor = 'var(--emerald)';
    btnB.style.background = 'rgba(16,185,129,0.1)';
    indB.textContent = '✓ Your Choice (74%)';
    indB.style.color = 'var(--emerald)';
    indB.style.fontWeight = '800';

    btnA.style.borderColor = 'var(--border-light)';
    btnA.style.background = 'var(--bg-surface)';
    indA.textContent = '26%';
    indA.style.color = 'var(--text-muted)';
  }

  if (speechBox) {
    speechBox.style.display = 'block';
  }
}

function renderSession15Speaking() {
  const container = document.getElementById('session15SpeakingWrap');
  const prompts = getSession15Data('SESSION_15_DISCUSSION_LAB');
  if (!container || !prompts) return;

  container.innerHTML = prompts.map(p => `
    <div class="study-card" style="border-top:3.5px solid var(--bc-blue); display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">
          PROMPT #${p.num} • ${escapeHtml(p.level)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.prompt)}')">🔊</button>
      </div>

      <p style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin:0; line-height:1.45;">
        ${escapeHtml(p.prompt)}
      </p>

      <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
        ${p.keyLexisUsed.map(w => `<span class="teacher-badge" style="font-size:0.7rem; padding:0.1rem 0.4rem; background:rgba(0,102,245,0.06); color:var(--bc-blue); border-color:rgba(0,102,245,0.2);">${escapeHtml(w)}</span>`).join('')}
      </div>

      <div style="margin-top:auto; padding-top:0.65rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle btn-s15-speech-toggle" data-target="s15SpeechAns_${p.num}" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
          <span>💡 Expandable Model Answer</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div id="s15SpeechAns_${p.num}" style="display:none; margin-top:0.65rem; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
          <p style="margin:0 0 0.5rem; color:var(--text-body);">
            "${escapeHtml(p.modelSpeech)}"
          </p>
          <button class="btn btn-primary" onclick="speakUK('${escapeJs(p.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
            🔊 Play Spoken Speech
          </button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-s15-speech-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector('.toggle-icon');
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        if (icon) icon.textContent = isHidden ? '▲' : '▼';
      }
    });
  });
}

function renderSession15Feedback() {
  const container = document.getElementById('session15FeedbackWrap');
  const items = getSession15Data('SESSION_15_TEACHER_FEEDBACK');
  if (!container || !items) return;

  container.innerHTML = items.map(f => `
    <div class="study-card" style="border-top:3.5px solid var(--rose); display:flex; flex-direction:column; gap:0.65rem; background:linear-gradient(180deg, var(--bg-surface) 0%, rgba(239,68,68,0.02) 100%);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="background:rgba(239,68,68,0.1); color:var(--rose); border-color:rgba(239,68,68,0.3); font-size:0.72rem;">
          ${escapeHtml(f.category)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(f.speech)}')">🔊</button>
      </div>

      <!-- Incorrect (Live Board Markup) -->
      <div style="background:rgba(239,68,68,0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.88rem; color:var(--rose); font-family:monospace;">
        ❌ <s style="text-decoration:line-through; font-weight:600;">${escapeHtml(f.incorrect)}</s>
      </div>

      <!-- Correct (Teacher Green Pen) -->
      <div style="background:rgba(16,185,129,0.08); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); font-size:0.9rem; font-weight:700; color:var(--emerald);">
        ✅ ${escapeHtml(f.correct)}
      </div>

      <!-- Grammar Rule -->
      <div style="font-size:0.84rem; color:var(--text-body); line-height:1.45; margin-top:auto;">
        💡 <strong>Tutor Rule:</strong> ${escapeHtml(f.rule)}
      </div>

      <!-- Arabic Explanation -->
      <div style="font-size:0.8rem; color:var(--text-muted); direction:rtl; text-align:right; border-top:1px dashed var(--border-light); padding-top:0.45rem;">
        ${escapeHtml(f.arRule)}
      </div>
    </div>
  `).join('');
}

function renderSession15Pronunciation() {
  const container = document.getElementById('session15PronunciationWrap');
  const sections = getSession15Data('SESSION_15_PRONUNCIATION_LAB');
  if (!container || !sections) return;

  container.innerHTML = sections.map((sec, idx) => `
    <div class="study-card" style="border-top:3.5px solid ${idx === 0 ? 'var(--bc-blue)' : 'var(--purple)'}; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="font-size:0.72rem;">
          ${idx === 0 ? 'WEAK FORMS /ə/' : 'INTONATION CURVES'}
        </span>
      </div>

      <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(sec.category)}
      </h5>

      <p style="font-size:0.84rem; color:var(--text-muted); margin:0; line-height:1.45;">
        ${escapeHtml(sec.rule)}
      </p>

      <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.25rem;">
        ${sec.items.map(item => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.6rem 0.75rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <div>
              <strong style="font-size:0.9rem; color:var(--text-main); display:block;">
                ${escapeHtml(item.question || item.phrase)}
              </strong>
              ${item.ipa ? `<span style="font-size:0.82rem; font-family:monospace; color:var(--bc-blue); display:block;">${escapeHtml(item.ipa)}</span>` : ''}
              <span style="font-size:0.76rem; color:var(--text-muted); display:block;">
                ${escapeHtml(item.stressPattern || item.note)}
              </span>
              ${item.arNote ? `<span style="font-size:0.75rem; color:var(--text-muted); direction:rtl; text-align:right; display:block; margin-top:0.15rem;">${escapeHtml(item.arNote)}</span>` : ''}
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.question || item.phrase)}')">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSession15Notebook() {
  const container = document.getElementById('session15NotebookWrap');
  const pages = getSession15Data('SESSION_15_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = pages.map(p => `
    <div class="study-card paper-texture" style="border:1px solid var(--border-light); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="teacher-badge" style="font-size:0.72rem; padding:0.15rem 0.45rem;">
          ${escapeHtml(p.tag)}
        </span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.title)}')">🔊</button>
      </div>

      <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">
        ${escapeHtml(p.title)}
      </h5>

      <!-- Image thumbnail with lightbox click -->
      <div style="position:relative; border-radius:var(--radius-sm); overflow:hidden; border:1px solid var(--border-light); cursor:pointer;" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}', '${escapeJs(p.summary)}')">
        <img src="${p.imgUrl}" alt="${escapeHtml(p.title)}" style="width:100%; height:180px; object-fit:cover; display:block; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
        <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(0,0,0,0.65); color:#fff; font-size:0.75rem; padding:0.35rem 0.65rem; text-align:center;">
          🔍 Click to view full-resolution classroom photo
        </div>
      </div>

      <p style="font-size:0.84rem; color:var(--text-muted); margin:0;">
        ${escapeHtml(p.summary)}
      </p>

      <!-- Verbatim Transcription Box -->
      <div style="margin-top:auto; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.82rem; line-height:1.45; font-family:monospace; max-height:220px; overflow-y:auto; white-space:pre-wrap; color:var(--text-body);">
        ${escapeHtml(p.fullTranscription)}
      </div>
    </div>
  `).join('');
}



/* ==========================================================================
   SESSION 16: IMPROVING CONVERSATION SKILLS: AVOIDING AWKWARD SILENCES
   Render Suite & Interactive Mechanics
   ========================================================================== */
function getSession16Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

function renderSession16LeadIn() {
  const container = document.getElementById('session16LeadInWrap');
  const data = getSession16Data('SESSION_16_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 1 • LEAD-IN DISCUSSION</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Breaking the Ice with Strangers &amp; Social Taboos
          </h4>
        </div>
        <button class="btn btn-primary" onclick="speakUK('Discuss the questions with your partner. How easy is it for you to make conversation with strangers? What topics are safe, and what puts you off speaking to someone again?')" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Overview
        </button>
      </div>

      <!-- 6 Discussion Questions Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${data.questions.map(q => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="font-size:0.75rem; padding:0.15rem 0.5rem;">QUESTION #${q.num}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.q)}')">🔊</button>
            </div>
            <p style="font-size:0.96rem; font-weight:700; color:var(--text-main); margin:0; line-height:1.4;">
              ${escapeHtml(q.q)}
            </p>
            <div style="margin-top:auto; padding-top:0.75rem; border-top:1px dashed var(--border-light);">
              <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s16LeadAns_${q.num}')" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
                <span>💡 B1 Partner Model Answer</span>
                <span>▼</span>
              </button>
              <div id="s16LeadAns_${q.num}" style="display:none; margin-top:0.65rem; background:rgba(0,102,245,0.05); border:1px solid rgba(0,102,245,0.15); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
                <p style="margin:0 0 0.5rem; color:var(--text-body);">
                  ${escapeHtml(q.b1PartnerModel)}
                </p>
                <button class="btn btn-primary" onclick="speakUK('${escapeJs(q.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
                  🔊 Play Model Turn
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Question Forms Exercise (Smartboard 1) -->
      <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:1.2rem; border:1px solid var(--border-light);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
          <div>
            <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0; display:flex; align-items:center; gap:0.4rem;">
              <span>🧩</span> Smartboard 1 Practice: Question Formation with Auxiliary Verbs
            </h5>
            <p style="font-size:0.84rem; color:var(--text-muted); margin:0.2rem 0 0;">
              Handout Page 1 (Exercise 3) &amp; Smartboard Slide 1: Complete questions using <code>do, are, have, was, is, did</code>.
            </p>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn btn-primary" onclick="checkSession16QForms()" style="font-size:0.8rem; padding:0.3rem 0.75rem;">Check</button>
            <button class="btn-outline-subtle" onclick="revealSession16QForms()" style="font-size:0.8rem; padding:0.3rem 0.75rem;">Reveal</button>
            <button class="btn-outline-subtle" onclick="resetSession16QForms()" style="font-size:0.8rem; padding:0.3rem 0.75rem;">Reset</button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:0.85rem;">
          ${data.questionFormsExercise.map(item => `
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.5rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="teacher-badge" style="font-size:0.7rem;">Item #${item.num} • ${item.type}</span>
                <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.prompt.replace('___', item.answer))}')" style="width:26px; height:26px; font-size:0.75rem;">🔊</button>
              </div>
              <div style="font-size:0.95rem; color:var(--text-main); font-weight:600;">
                ${item.prompt.replace('___', `<select id="s16QFormSelect_${item.num}" class="s16-qform-select" data-answer="${item.answer}" style="padding:0.25rem 0.5rem; border:1px solid var(--border-light); border-radius:4px; font-weight:700; background:var(--bg-subtle);">
                  <option value="">-- select --</option>
                  ${item.options.map(o => `<option value="${o}">${o}</option>`).join('')}
                </select>`)}
              </div>
              <div id="s16QFormFeedback_${item.num}" style="font-size:0.8rem; display:none; padding:0.3rem 0.5rem; border-radius:4px;"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function checkSession16QForms() {
  const selects = document.querySelectorAll('.s16-qform-select');
  selects.forEach(sel => {
    const userVal = sel.value.trim().toLowerCase();
    const correctVal = sel.getAttribute('data-answer').toLowerCase();
    const id = sel.id.replace('s16QFormSelect_', '');
    const fb = document.getElementById(`s16QFormFeedback_${id}`);
    if (fb) {
      fb.style.display = 'block';
      if (userVal === correctVal) {
        sel.style.borderColor = '#10b981';
        sel.style.backgroundColor = 'rgba(16,185,129,0.1)';
        fb.style.color = '#065f46';
        fb.style.backgroundColor = 'rgba(16,185,129,0.15)';
        fb.innerHTML = '✓ Correct auxiliary verb!';
      } else {
        sel.style.borderColor = '#ef4444';
        sel.style.backgroundColor = 'rgba(239,68,68,0.1)';
        fb.style.color = '#991b1b';
        fb.style.backgroundColor = 'rgba(239,68,68,0.15)';
        fb.innerHTML = `✗ Incorrect. Expected: <strong>${sel.getAttribute('data-answer')}</strong>`;
      }
    }
  });
}

function revealSession16QForms() {
  const selects = document.querySelectorAll('.s16-qform-select');
  selects.forEach(sel => {
    sel.value = sel.getAttribute('data-answer');
  });
  checkSession16QForms();
}

function resetSession16QForms() {
  const selects = document.querySelectorAll('.s16-qform-select');
  selects.forEach(sel => {
    sel.value = '';
    sel.style.borderColor = '';
    sel.style.backgroundColor = '';
    const id = sel.id.replace('s16QFormSelect_', '');
    const fb = document.getElementById(`s16QFormFeedback_${id}`);
    if (fb) fb.style.display = 'none';
  });
}

function renderSession16Dialogues() {
  const container = document.getElementById('session16DialoguesWrap');
  const dialogues = getSession16Data('SESSION_16_DIALOGUES');
  if (!container || !dialogues) return;

  container.innerHTML = `
    <!-- Setting Identification Banner (Screenshot 540) -->
    <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1rem 1.25rem; margin-bottom:1.5rem;">
      <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0 0 0.5rem; display:flex; align-items:center; gap:0.4rem;">
        <span>📍</span> BC Platform Context: Where are the speakers? (Screenshot 540)
      </h5>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem; font-size:0.86rem;">
        <div style="background:var(--bg-surface); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border-light);">
          <strong>Conversation 1:</strong> Wedding party / reception 💍
        </div>
        <div style="background:var(--bg-surface); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border-light);">
          <strong>Conversation 2:</strong> Marketing conference 📊
        </div>
        <div style="background:var(--bg-surface); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border-light);">
          <strong>Conversation 3:</strong> Social house party 🍕
        </div>
        <div style="background:var(--bg-surface); padding:0.6rem 0.85rem; border-radius:6px; border:1px solid var(--border-light);">
          <strong>Conversation 4:</strong> Company conference break 🏢
        </div>
      </div>
    </div>

    <!-- 4 Verbatim Dialogues Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:1.25rem;">
      ${dialogues.map(d => `
        <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.85rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; padding-bottom:0.65rem; border-bottom:1px solid var(--border-light);">
            <div>
              <span class="teacher-badge" style="font-size:0.75rem;">${d.badge}</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">${d.title}</h4>
              <p style="font-size:0.82rem; color:var(--text-muted); margin:0.15rem 0 0;">Setting: ${d.setting}</p>
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(d.audioText)}')" title="Play full dialogue">🔊</button>
          </div>

          <!-- Dialogue Transcript Lines -->
          <div style="background:var(--bg-subtle); border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem; max-height:280px; overflow-y:auto;">
            ${d.lines.map(l => `
              <div style="line-height:1.45;">
                <strong style="color:var(--bc-blue);">${l.speaker}:</strong> 
                <span style="color:var(--text-body);">${highlightKeywords(l.text)}</span>
              </div>
            `).join('')}
          </div>

          <!-- Key Functions & Tag Gap-Fill -->
          <div style="margin-top:auto; padding-top:0.65rem; border-top:1px dashed var(--border-light); font-size:0.82rem;">
            <div style="margin-bottom:0.4rem; color:var(--text-muted);">
              <strong>Key Strategies:</strong> ${d.keyFunctions.join(' • ')}
            </div>
            <div style="background:rgba(0,102,245,0.06); padding:0.5rem 0.75rem; border-radius:4px; border:1px solid rgba(0,102,245,0.15);">
              <span style="font-weight:700; color:var(--text-main);">Tag Check:</span> 
              <em>${d.gapQuestion}</em>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSession16Smartboard() {
  const container = document.getElementById('session16SmartboardWrap');
  const items = getSession16Data('SESSION_16_SMARTBOARD_MATCHING');
  if (!container || !items) return;

  container.innerHTML = `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge">HANDOUT PAGE 3 &amp; SMARTBOARD 5</span>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            12 Essential Phrases Categorization Matrix
          </h4>
        </div>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          <button class="btn btn-outline-subtle btn-s16-filter active" onclick="filterSession16BoardStages('all', this)" style="font-size:0.8rem; padding:0.3rem 0.7rem;">All (12)</button>
          <button class="btn btn-outline-subtle btn-s16-filter" onclick="filterSession16BoardStages('Starting a conversation', this)" style="font-size:0.8rem; padding:0.3rem 0.7rem;">Starting</button>
          <button class="btn btn-outline-subtle btn-s16-filter" onclick="filterSession16BoardStages('Closing a conversation', this)" style="font-size:0.8rem; padding:0.3rem 0.7rem;">Closing</button>
          <button class="btn btn-outline-subtle btn-s16-filter" onclick="filterSession16BoardStages('Changing topic', this)" style="font-size:0.8rem; padding:0.3rem 0.7rem;">Changing Topic</button>
        </div>
      </div>

      <div id="s16StagesGrid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:0.85rem;">
        ${items.map(item => `
          <div class="s16-stage-item" data-category="${item.category}" style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <span class="teacher-badge" style="font-size:0.7rem; ${item.category === 'Starting a conversation' ? 'background:rgba(16,185,129,0.15); color:#065f46;' : item.category === 'Closing a conversation' ? 'background:rgba(239,68,68,0.15); color:#991b1b;' : 'background:rgba(245,158,11,0.15); color:#92400e;'}">
                ${item.category}
              </span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.phrase)}')" style="width:26px; height:26px; font-size:0.75rem;">🔊</button>
            </div>
            <div style="font-size:0.95rem; font-weight:700; color:var(--text-main);">
              “${escapeHtml(item.phrase)}”
            </div>
            <div style="font-size:0.82rem; color:var(--text-muted); direction:rtl; text-align:right; margin-top:auto;">
              ${escapeHtml(item.arNote)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function filterSession16BoardStages(category, btnEl) {
  document.querySelectorAll('.btn-s16-filter').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const items = document.querySelectorAll('.s16-stage-item');
  items.forEach(el => {
    if (category === 'all' || el.getAttribute('data-category') === category) {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  });
}

function renderSession16VocabGroups() {
  const container = document.getElementById('session16GroupsWrap');
  const groups = getSession16Data('SESSION_16_VOCAB_GROUPS');
  const allVocab = getSession16Data('VOCAB_SESSION_16');
  if (!container || !groups || !allVocab) return;

  const vocabMap = new Map();
  allVocab.forEach(v => vocabMap.set(v.word.toLowerCase(), v));

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1.25rem;">
      ${groups.map(g => `
        <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; padding-bottom:0.5rem; border-bottom:1px solid var(--border-light);">
            <div>
              <span class="teacher-badge" style="font-size:0.75rem;">${g.badge}</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0; display:flex; align-items:center; gap:0.4rem;">
                <span>${g.icon}</span> ${g.title}
              </h4>
            </div>
          </div>
          <p style="font-size:0.86rem; color:var(--text-body); margin:0; line-height:1.45;">
            ${g.desc}
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;">
            ${g.words.map(w => {
              const item = vocabMap.get(w.toLowerCase());
              return `
                <button type="button" class="vocab-token-pill" onclick="speakUK('${escapeJs(w)}')" title="${item ? escapeHtml(item.def) : ''}" style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:20px; padding:0.3rem 0.7rem; font-size:0.82rem; font-weight:700; color:var(--text-main); cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">
                  <span>🔊</span> ${w}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSession16QuestionTags() {
  const container = document.getElementById('session16QuestionTagsWrap');
  const labData = getSession16Data('SESSION_16_QUESTION_TAGS_LAB');
  if (!container || !labData) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">SMARTBOARD SLIDES 3 &amp; 4 • GRAMMAR LAB</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Question Tags &amp; Intonation Pitch Rules (Handout Page 2)
          </h4>
        </div>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-primary" onclick="revealSession16Tags()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">Reveal All Tags</button>
          <button class="btn-outline-subtle" onclick="resetSession16Tags()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">Hide All</button>
        </div>
      </div>

      <!-- 3 Golden Rules Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${labData.rules.map(r => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
            <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0 0 0.5rem;">${r.title}</h5>
            <p style="font-size:0.85rem; color:var(--text-body); margin:0; line-height:1.45; white-space:pre-wrap;">${escapeHtml(r.content)}</p>
          </div>
        `).join('')}
      </div>

      <!-- 8 Practice Sentences Grid -->
      <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0 0 0.85rem; display:flex; align-items:center; gap:0.4rem;">
        <span>📝</span> 8 Authentic Practice Sentences (Handout Page 2 Ex 4 &amp; Smartboard 4)
      </h5>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem;">
        ${labData.practiceItems.map(item => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.75rem;">ITEM #${item.id.replace('qt_', '')}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.full)}')" title="Listen to sentence">🔊</button>
            </div>
            <div style="font-size:0.98rem; font-weight:700; color:var(--text-main);">
              ${escapeHtml(item.statement)} <span id="s16TagAns_${item.id}" style="display:none; color:var(--bc-blue); border-bottom:2px solid var(--bc-blue);">${escapeHtml(item.tag)}</span>
            </div>
            <div style="font-size:0.82rem; color:var(--text-muted);">
              <strong>Pitch:</strong> ${escapeHtml(item.intonation)}
            </div>
            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); display:flex; justify-content:space-between; align-items:center;">
              <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s16TagAns_${item.id}')" style="font-size:0.78rem; padding:0.25rem 0.65rem;">
                Toggle Tag
              </button>
              <button type="button" class="btn-outline-subtle" onclick="speakUK('${escapeJs(item.expectedReply)}')" style="font-size:0.78rem; padding:0.25rem 0.65rem;">
                🔊 Expected Reply
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function revealSession16Tags() {
  const spans = document.querySelectorAll('[id^="s16TagAns_"]');
  spans.forEach(s => s.style.display = 'inline');
}

function resetSession16Tags() {
  const spans = document.querySelectorAll('[id^="s16TagAns_"]');
  spans.forEach(s => s.style.display = 'none');
}

function renderSession16Speaking() {
  const container = document.getElementById('session16SpeakingWrap');
  const prompts = getSession16Data('SESSION_16_DISCUSSION_LAB');
  if (!container || !prompts) return;

  container.innerHTML = prompts.map(p => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem;">SPEAKING TASK #${p.num}</span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.audioText)}')" title="Listen to model speech">🔊</button>
      </div>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${p.title}</h4>
      <p style="font-size:0.86rem; color:var(--text-muted); margin:0; line-height:1.4;">
        ${escapeHtml(p.scenario)}
      </p>
      <div style="margin-top:auto; padding-top:0.75rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s16SpeakAns_${p.num}')" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
          <span>💡 B1/B2 Expandable Speech Model</span>
          <span>▼</span>
        </button>
        <div id="s16SpeakAns_${p.num}" style="display:none; margin-top:0.65rem; background:rgba(0,102,245,0.05); border:1px solid rgba(0,102,245,0.15); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
          <p style="margin:0 0 0.5rem; color:var(--text-body);">
            ${highlightKeywords(p.modelSpeech)}
          </p>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">
            <button class="btn btn-primary" onclick="speakUK('${escapeJs(p.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
              🔊 Play Voice Model
            </button>
            <span style="font-size:0.75rem; color:var(--text-muted);">Lexis: ${p.keyLexisUsed.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSession16Feedback() {
  const container = document.getElementById('session16FeedbackWrap');
  const items = getSession16Data('SESSION_16_TEACHER_FEEDBACK');
  if (!container || !items) return;

  container.innerHTML = items.map(c => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem; background:rgba(239,68,68,0.15); color:#991b1b;">ERROR ANALYSIS</span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(c.speech)}')" title="Listen to corrected speech">🔊</button>
      </div>
      <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0;">${c.category}</h5>

      <div style="background:#1e293b; color:#f8fafc; border-radius:6px; padding:0.85rem; font-family:monospace; font-size:0.88rem;">
        <div style="color:#f87171; text-decoration:line-through; margin-bottom:0.35rem;">
          ❌ ${escapeHtml(c.incorrect)}
        </div>
        <div style="color:#34d399; font-weight:700;">
          ✓ ${escapeHtml(c.correct)}
        </div>
        <div style="color:#a78bfa; font-size:0.8rem; margin-top:0.35rem;">
          ✎ Teacher pen: ${escapeHtml(c.teacherPen)}
        </div>
      </div>

      <p style="font-size:0.84rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(c.rule)}
      </p>
      <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
        ${escapeHtml(c.arRule)}
      </p>
    </div>
  `).join('');
}

function renderSession16Pronunciation() {
  const container = document.getElementById('session16PronunciationWrap');
  const items = getSession16Data('SESSION_16_PRONUNCIATION_LAB');
  if (!container || !items) return;

  container.innerHTML = items.map(p => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <span class="teacher-badge" style="font-size:0.75rem;">PHONETICS CLINIC</span>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${p.category}</h4>
      <p style="font-size:0.85rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(p.rule)}
      </p>
      <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.35rem;">
        ${p.items.map(sub => `
          <div style="background:var(--bg-subtle); border-radius:6px; padding:0.6rem 0.85rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; font-size:0.86rem;">
            <div>
              <strong style="color:var(--text-main);">${escapeHtml(sub.question || sub.phrase)}</strong>
              ${sub.phonetic ? `<div style="font-family:monospace; color:var(--bc-blue);">${sub.phonetic}</div>` : ''}
              <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(sub.note || sub.type)}</div>
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(sub.question || sub.phrase)}')" style="width:28px; height:28px; font-size:0.8rem;">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSession16Notebook() {
  const container = document.getElementById('session16NotebookWrap');
  const pages = getSession16Data('SESSION_16_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = pages.map(p => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem;">${p.tag}</span>
        <button class="btn-outline-subtle" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}')" style="font-size:0.75rem; padding:0.2rem 0.6rem;">
          🔍 Zoom Photo
        </button>
      </div>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${p.title}</h4>
      <p style="font-size:0.84rem; color:var(--text-muted); margin:0;">${p.summary}</p>
      
      <!-- Photo Preview -->
      <div style="cursor:pointer; border-radius:6px; overflow:hidden; border:1px solid var(--border-light); max-height:220px;" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}')">
        <img src="${p.imgUrl}" alt="${escapeHtml(p.title)}" style="width:100%; height:auto; display:block; object-fit:cover;">
      </div>

      <!-- Verbatim Transcription Box -->
      <div style="margin-top:auto; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.82rem; line-height:1.45; font-family:monospace; max-height:220px; overflow-y:auto; white-space:pre-wrap; color:var(--text-body);">
        ${escapeHtml(p.fullTranscription)}
      </div>
    </div>
  `).join('');
}


/* ==========================================================================
   SESSION 17: COMMUNICATING WITH CONFIDENCE: JOB APPRAISAL INTERVIEW
   Render Suite & Interactive Mechanics
   ========================================================================== */
function getSession17Data(key) {
  if (typeof window !== 'undefined' && window[key]) return window[key];
  try {
    return eval(key);
  } catch (e) {
    return null;
  }
}

function renderSession17LeadIn() {
  const container = document.getElementById('session17LeadInWrap');
  const data = getSession17Data('SESSION_17_LEAD_IN');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 1 &amp; SMARTBOARDS 1 &amp; 2</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            What is a Job Appraisal? &amp; Workplace Perspectives
          </h4>
        </div>
        <button class="btn btn-primary" onclick="speakUK('A job appraisal is the official or formal assessment of the strengths and weaknesses of someone or something. Read what employees think about their company appraisal systems.')" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Definition
        </button>
      </div>

      <!-- Definition Card from Smartboard 1 -->
      <div style="background:rgba(0,102,245,0.06); border:1px solid rgba(0,102,245,0.2); border-radius:var(--radius-sm); padding:1rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
          <span style="font-size:1.2rem;">📋</span>
          <strong style="font-size:0.95rem; color:var(--text-main);">Official Definition (Smartboard 1):</strong>
        </div>
        <p style="font-size:0.92rem; color:var(--text-body); margin:0; line-height:1.5; font-style:italic;">
          “The official or formal assessment of the strengths and weaknesses of someone or something. Appraisal often involves observation or some kind of testing.”
        </p>
      </div>

      <!-- 8 Employee Quotes Grid -->
      <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0 0 0.85rem; display:flex; align-items:center; gap:0.4rem;">
        <span>💬</span> 8 Authentic Employee Comments (Handout Page 1 Ex 1)
      </h5>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:0.85rem; margin-bottom:1.5rem;">
        ${data.quotes.map(q => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.45rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.7rem; ${q.sentiment === 'Positive' ? 'background:rgba(16,185,129,0.15); color:#065f46;' : 'background:rgba(239,68,68,0.15); color:#991b1b;'}">
                ${q.sentiment}
              </span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(q.text)}')" style="width:24px; height:24px; font-size:0.75rem;">🔊</button>
            </div>
            <p style="font-size:0.88rem; color:var(--text-main); font-weight:600; margin:0; line-height:1.4;">
              “${escapeHtml(q.text)}”
            </p>
            <div style="font-size:0.78rem; color:var(--text-muted); margin-top:auto;">
              ${escapeHtml(q.analysis)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- 4 Discussion Questions with Smartboard 2 Green Box Answers -->
      <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0 0 0.85rem; display:flex; align-items:center; gap:0.4rem;">
        <span>🎯</span> Lead-in Questions &amp; Classroom Green Answers (Smartboard 2)
      </h5>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem;">
        ${data.discussionQuestions.map(d => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="teacher-badge" style="font-size:0.75rem;">QUESTION #${d.num}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(d.q)}')">🔊</button>
            </div>
            <p style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin:0;">
              ${escapeHtml(d.q)}
            </p>
            
            <!-- Smartboard 2 Green Board Highlight -->
            <div style="background:rgba(16,185,129,0.1); border-left:3px solid #10b981; padding:0.5rem 0.75rem; border-radius:4px; font-size:0.85rem; color:#065f46;">
              <strong>Teacher Smartboard 2 Note:</strong> ${escapeHtml(d.smartboardAnswer)}
            </div>

            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light);">
              <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s17LeadAns_${d.num}')" style="width:100%; font-size:0.78rem; padding:0.25rem 0.65rem; display:flex; justify-content:space-between; align-items:center;">
                <span>💡 B1 Model Partner Turn</span>
                <span>▼</span>
              </button>
              <div id="s17LeadAns_${d.num}" style="display:none; margin-top:0.5rem; font-size:0.84rem; line-height:1.45; color:var(--text-body);">
                ${escapeHtml(d.modelPartnerTurn)}
                <div style="margin-top:0.4rem;">
                  <button class="btn btn-primary" onclick="speakUK('${escapeJs(d.audioText)}')" style="font-size:0.72rem; padding:0.2rem 0.5rem;">🔊 Listen</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession17EmmaReport() {
  const container = document.getElementById('session17EmmaWrap');
  const report = getSession17Data('SESSION_17_EMMA_REPORT');
  if (!container || !report) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 2 &amp; SMARTBOARD 3 • CASE STUDY</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Emma's 3-Year Review Report for Senior Manager Promotion
          </h4>
        </div>
        <button class="btn btn-primary" onclick="playEmmaReportAudio()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Full Report
        </button>
      </div>

      <!-- Director's Briefing -->
      <div style="background:var(--bg-subtle); border-radius:var(--radius-sm); padding:0.85rem 1rem; margin-bottom:1.25rem; font-size:0.88rem; color:var(--text-body);">
        <strong>Roleplay Brief:</strong> ${escapeHtml(report.background)}
      </div>

      <!-- 6 Verbatim Report Paragraphs -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
        ${report.paragraphs.map(p => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.72rem; ${p.analysis.status === 'Strength' ? 'background:rgba(16,185,129,0.15); color:#065f46;' : 'background:rgba(239,68,68,0.15); color:#991b1b;'}">
                ${p.analysis.status}: ${p.analysis.category}
              </span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(p.text)}')" style="width:24px; height:24px; font-size:0.75rem;">🔊</button>
            </div>
            <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0;">${p.heading}</h5>
            <p style="font-size:0.88rem; color:var(--text-body); margin:0; line-height:1.45;">
              ${highlightKeywords(p.text)}
            </p>
            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); font-size:0.8rem; color:var(--bc-blue);">
              <strong>Suggested Strategy:</strong> ${escapeHtml(p.analysis.recommendation)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Smartboard 3 Synthesis: Strengths vs Weaknesses vs Strategies -->
      <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:1.2rem; border:1px solid var(--border-light); margin-bottom:1.5rem;">
        <h5 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0 0 1rem; display:flex; align-items:center; gap:0.4rem;">
          <span>📊</span> Smartboard 3 Synthesis: Board Breakdown
        </h5>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
          <div style="background:var(--bg-surface); border-radius:6px; padding:0.85rem; border-left:4px solid #10b981;">
            <strong style="color:#065f46; font-size:0.92rem; display:block; margin-bottom:0.4rem;">✓ Emma's Strengths:</strong>
            <ul style="margin:0; padding-left:1.2rem; font-size:0.84rem; color:var(--text-body); line-height:1.45;">
              ${report.smartboardSynthesis.strengths.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
            </ul>
          </div>
          <div style="background:var(--bg-surface); border-radius:6px; padding:0.85rem; border-left:4px solid #ef4444;">
            <strong style="color:#991b1b; font-size:0.92rem; display:block; margin-bottom:0.4rem;">✗ Emma's Weaknesses:</strong>
            <ul style="margin:0; padding-left:1.2rem; font-size:0.84rem; color:var(--text-body); line-height:1.45;">
              ${report.smartboardSynthesis.weaknesses.map(w => `<li>${escapeHtml(w)}</li>`).join('')}
            </ul>
          </div>
          <div style="background:var(--bg-surface); border-radius:6px; padding:0.85rem; border-left:4px solid var(--bc-blue);">
            <strong style="color:var(--bc-blue); font-size:0.92rem; display:block; margin-bottom:0.4rem;">💡 Recommended Strategies:</strong>
            <ul style="margin:0; padding-left:1.2rem; font-size:0.84rem; color:var(--text-body); line-height:1.45;">
              ${report.smartboardSynthesis.strategies.map(st => `<li>${escapeHtml(st)}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- Director's Decision Tool -->
      <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem; text-align:center;">
        <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0 0 0.5rem;">
          Company Director Decision: Would you grant Emma the promotion?
        </h5>
        <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-top:0.75rem;">
          <button class="btn btn-primary" onclick="voteEmmaPromotion('promote')" style="font-size:0.85rem; padding:0.4rem 1rem;">
            ✓ Promote Now to Senior Manager
          </button>
          <button class="btn-outline-subtle" onclick="voteEmmaPromotion('defer')" style="font-size:0.85rem; padding:0.4rem 1rem;">
            ⏳ Defer Promotion 6 Months (Training Period)
          </button>
          <button class="btn-outline-subtle" onclick="voteEmmaPromotion('deny')" style="font-size:0.85rem; padding:0.4rem 1rem;">
            ✗ Deny Promotion (Due to Customer Issues)
          </button>
        </div>
        <div id="emmaDecisionFeedback" style="display:none; margin-top:0.85rem; font-size:0.88rem; padding:0.75rem; border-radius:6px; line-height:1.45;"></div>
      </div>
    </div>
  `;
}

function playEmmaReportAudio() {
  const report = getSession17Data('SESSION_17_EMMA_REPORT');
  if (!report) return;
  const fullText = report.paragraphs.map(p => p.text).join(' ');
  speakUK(fullText);
}

function voteEmmaPromotion(decision) {
  const fb = document.getElementById('emmaDecisionFeedback');
  if (!fb) return;
  fb.style.display = 'block';

  if (decision === 'promote') {
    fb.style.background = 'rgba(16,185,129,0.15)';
    fb.style.color = '#065f46';
    fb.innerHTML = '<strong>Decision: Promote Now.</strong> Emma has demonstrated outstanding strengths in communication and building unity. However, you must attach a strict stipulation requiring her to attend time-management training and reduce meeting overruns.';
  } else if (decision === 'defer') {
    fb.style.background = 'rgba(0,102,245,0.1)';
    fb.style.color = 'var(--bc-blue)';
    fb.innerHTML = '<strong>Decision: Defer 6 Months (Recommended Pedagogical Choice).</strong> Emma will lead cross-department communication seminars and consult with customer service managers. In six months, her punctuality and customer complaint resolution will be re-evaluated for final appointment.';
  } else {
    fb.style.background = 'rgba(239,68,68,0.15)';
    fb.style.color = '#991b1b';
    fb.innerHTML = '<strong>Decision: Deny Promotion.</strong> Mismanaging customer expectations and habitual delays in meetings indicate that managerial leadership is premature. Emma should focus on foundational process compliance first.';
  }
}

function renderSession17Smartboard() {
  const container = document.getElementById('session17SmartboardWrap');
  const items = getSession17Data('SESSION_17_SMARTBOARD_MATCHING');
  if (!container || !items) return;

  container.innerHTML = `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge">SMARTBOARD SLIDES 7 &amp; 8</span>
          <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0 0;">
            10 Feedback Categories: Positive vs. Negative Adjective Matrix
          </h4>
        </div>
        <button class="btn btn-primary" onclick="speakUK('Ten appraisal categories: time management, communication, teamwork, creativity, customer satisfaction, initiative, job knowledge, leadership, managerial skills, problem solving.')" style="font-size:0.8rem; padding:0.35rem 0.8rem;">
          🔊 Listen to Categories
        </button>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem;">
        ${items.map((item, idx) => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.72rem;">CATEGORY #${idx+1}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(item.category + '. Positive: ' + item.pos + '. Negative: ' + item.neg)}')" style="width:24px; height:24px; font-size:0.75rem;">🔊</button>
            </div>
            <h5 style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0;">
              ${escapeHtml(item.category)}
            </h5>
            <div style="font-size:0.8rem; color:var(--text-muted); direction:rtl; text-align:right;">
              ${escapeHtml(item.arCategory)}
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-top:auto; font-size:0.84rem;">
              <div style="background:rgba(16,185,129,0.1); border-left:3px solid #10b981; padding:0.5rem; border-radius:4px;">
                <strong style="color:#065f46; display:block; font-size:0.78rem;">✓ Positive:</strong>
                ${escapeHtml(item.pos)}
              </div>
              <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:0.5rem; border-radius:4px;">
                <strong style="color:#991b1b; display:block; font-size:0.78rem;">✗ Negative:</strong>
                ${escapeHtml(item.neg)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSession17VocabGroups() {
  const container = document.getElementById('session17GroupsWrap');
  const groups = getSession17Data('SESSION_17_VOCAB_GROUPS');
  const allVocab = getSession17Data('VOCAB_SESSION_17');
  if (!container || !groups || !allVocab) return;

  const vocabMap = new Map();
  allVocab.forEach(v => vocabMap.set(v.word.toLowerCase(), v));

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1.25rem;">
      ${groups.map(g => `
        <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; padding-bottom:0.5rem; border-bottom:1px solid var(--border-light);">
            <div>
              <span class="teacher-badge" style="font-size:0.75rem;">${g.badge}</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0; display:flex; align-items:center; gap:0.4rem;">
                <span>${g.icon}</span> ${g.title}
              </h4>
            </div>
          </div>
          <p style="font-size:0.86rem; color:var(--text-body); margin:0; line-height:1.45;">
            ${g.desc}
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;">
            ${g.words.map(w => {
              const item = vocabMap.get(w.toLowerCase());
              return `
                <button type="button" class="vocab-token-pill" onclick="speakUK('${escapeJs(w)}')" title="${item ? escapeHtml(item.def) : ''}" style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:20px; padding:0.3rem 0.7rem; font-size:0.82rem; font-weight:700; color:var(--text-main); cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">
                  <span>🔊</span> ${w}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSession17Modals() {
  const container = document.getElementById('session17ModalsWrap');
  const labData = getSession17Data('SESSION_17_MODALS_LAB');
  if (!container || !labData) return;

  container.innerHTML = `
    <div class="study-card" style="border-top:4px solid var(--bc-blue); margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-light);">
        <div>
          <span class="teacher-badge" style="background:var(--bc-blue); color:#fff; border:none;">HANDOUT PAGE 3 &amp; SMARTBOARDS 4 &amp; 5</span>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0.35rem 0 0;">
            Modal Verbs for Recommendations (could, may, might, should)
          </h4>
        </div>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-primary" onclick="revealSession17Modals()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">Reveal All Solutions</button>
          <button class="btn-outline-subtle" onclick="resetSession17Modals()" style="font-size:0.8rem; padding:0.35rem 0.8rem;">Hide All</button>
        </div>
      </div>

      <!-- Rule Card -->
      <div style="background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem; margin-bottom:1.5rem; font-size:0.88rem; line-height:1.5; color:var(--text-body);">
        <strong>Grammar Rule (Smartboard 4):</strong> ${escapeHtml(labData.rule)}
      </div>

      <!-- 8 Situations Solved Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1rem;">
        ${labData.situations.map(s => `
          <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="teacher-badge" style="font-size:0.75rem;">SITUATION #${s.num}</span>
              <button class="audio-circle-btn" onclick="speakUK('${escapeJs(s.situation + ' Recommendation: ' + s.boardAnswer)}')" style="width:26px; height:26px; font-size:0.75rem;">🔊</button>
            </div>
            <div style="font-size:0.96rem; font-weight:700; color:var(--text-main);">
              ${escapeHtml(s.situation)}
            </div>

            <!-- Expandable Smartboard 5 Answer -->
            <div id="s17ModalAns_${s.num}" style="display:none; background:rgba(16,185,129,0.1); border-left:3px solid #10b981; padding:0.5rem 0.75rem; border-radius:4px; font-size:0.85rem; color:#065f46;">
              <strong>Smartboard 5 Solution:</strong> “${escapeHtml(s.boardAnswer)}”
              <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">Structure: ${escapeHtml(s.modalUsed)}</div>
            </div>

            <div style="margin-top:auto; padding-top:0.5rem; border-top:1px dashed var(--border-light); display:flex; justify-content:space-between; align-items:center;">
              <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s17ModalAns_${s.num}')" style="font-size:0.78rem; padding:0.25rem 0.65rem;">
                Toggle Solution
              </button>
              <button type="button" class="btn-outline-subtle" onclick="speakUK('${escapeJs(s.boardAnswer)}')" style="font-size:0.78rem; padding:0.25rem 0.65rem;">
                🔊 Play Solution
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function revealSession17Modals() {
  const blocks = document.querySelectorAll('[id^="s17ModalAns_"]');
  blocks.forEach(b => b.style.display = 'block');
}

function resetSession17Modals() {
  const blocks = document.querySelectorAll('[id^="s17ModalAns_"]');
  blocks.forEach(b => b.style.display = 'none');
}

function renderSession17Speaking() {
  const container = document.getElementById('session17SpeakingWrap');
  const tasks = getSession17Data('SESSION_17_DISCUSSION_LAB');
  if (!container || !tasks) return;

  container.innerHTML = tasks.map(t => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem;">WORKPLACE TASK #${t.num}</span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(t.audioText)}')" title="Listen to model speech">🔊</button>
      </div>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${t.title}</h4>
      <p style="font-size:0.86rem; color:var(--text-muted); margin:0; line-height:1.4;">
        ${escapeHtml(t.prompt)}
      </p>
      <div style="margin-top:auto; padding-top:0.75rem; border-top:1px dashed var(--border-light);">
        <button type="button" class="btn-outline-subtle" onclick="toggleAnswerVisibility('s17SpeakAns_${t.num}')" style="width:100%; font-size:0.8rem; padding:0.35rem 0.75rem; display:flex; justify-content:space-between; align-items:center;">
          <span>💡 B1/B2 Workplace Speech Model</span>
          <span>▼</span>
        </button>
        <div id="s17SpeakAns_${t.num}" style="display:none; margin-top:0.65rem; background:rgba(0,102,245,0.05); border:1px solid rgba(0,102,245,0.15); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.88rem; line-height:1.5;">
          <p style="margin:0 0 0.5rem; color:var(--text-body);">
            ${highlightKeywords(t.modelSpeech)}
          </p>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">
            <button class="btn btn-primary" onclick="speakUK('${escapeJs(t.audioText)}')" style="font-size:0.75rem; padding:0.25rem 0.65rem;">
              🔊 Play Voice Model
            </button>
            <span style="font-size:0.75rem; color:var(--text-muted);">Lexis: ${t.keyLexisUsed.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSession17Feedback() {
  const container = document.getElementById('session17FeedbackWrap');
  const items = getSession17Data('SESSION_17_TEACHER_FEEDBACK');
  if (!container || !items) return;

  container.innerHTML = items.map(c => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem; background:rgba(239,68,68,0.15); color:#991b1b;">WHITEBOARD 9 CLINIC</span>
        <button class="audio-circle-btn" onclick="speakUK('${escapeJs(c.speech)}')" title="Listen to corrected speech">🔊</button>
      </div>
      <h5 style="font-size:0.95rem; font-weight:800; color:var(--text-main); margin:0;">${c.category}</h5>

      <div style="background:#1e293b; color:#f8fafc; border-radius:6px; padding:0.85rem; font-family:monospace; font-size:0.88rem;">
        <div style="color:#f87171; text-decoration:line-through; margin-bottom:0.35rem;">
          ❌ ${escapeHtml(c.incorrect)}
        </div>
        <div style="color:#34d399; font-weight:700;">
          ✓ ${escapeHtml(c.correct)}
        </div>
        <div style="color:#a78bfa; font-size:0.8rem; margin-top:0.35rem;">
          ✎ Teacher pen: ${escapeHtml(c.teacherPen)}
        </div>
      </div>

      <p style="font-size:0.84rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(c.rule)}
      </p>
      <p style="font-size:0.82rem; color:var(--text-muted); margin:0; direction:rtl; text-align:right;">
        ${escapeHtml(c.arRule)}
      </p>
    </div>
  `).join('');
}

function renderSession17Pronunciation() {
  const container = document.getElementById('session17PronunciationWrap');
  const items = getSession17Data('SESSION_17_PRONUNCIATION_LAB');
  if (!container || !items) return;

  container.innerHTML = items.map(p => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <span class="teacher-badge" style="font-size:0.75rem;">PHONETICS CLINIC</span>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${p.category}</h4>
      <p style="font-size:0.85rem; color:var(--text-body); margin:0; line-height:1.45;">
        ${escapeHtml(p.rule)}
      </p>
      <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.35rem;">
        ${p.items.map(sub => `
          <div style="background:var(--bg-subtle); border-radius:6px; padding:0.6rem 0.85rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; font-size:0.86rem;">
            <div>
              <strong style="color:var(--text-main);">${escapeHtml(sub.word)}</strong>
              <span style="font-family:monospace; color:var(--bc-blue); margin-left:0.35rem;">${sub.ipa}</span>
              <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(sub.ruleNote || sub.stress)}</div>
            </div>
            <button class="audio-circle-btn" onclick="speakUK('${escapeJs(sub.word)}')" style="width:28px; height:28px; font-size:0.8rem;">🔊</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSession17Notebook() {
  const container = document.getElementById('session17NotebookWrap');
  const pages = getSession17Data('SESSION_17_NOTEBOOK_PAGES');
  if (!container || !pages) return;

  container.innerHTML = pages.map(p => `
    <div class="study-card" style="border:1px solid var(--border-light); background:var(--bg-surface); padding:1.25rem; display:flex; flex-direction:column; gap:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
        <span class="teacher-badge" style="font-size:0.75rem;">${p.tag}</span>
        <button class="btn-outline-subtle" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}')" style="font-size:0.75rem; padding:0.2rem 0.6rem;">
          🔍 Zoom Photo
        </button>
      </div>
      <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${p.title}</h4>
      <p style="font-size:0.84rem; color:var(--text-muted); margin:0;">${p.summary}</p>
      
      <!-- Photo Preview -->
      <div style="cursor:pointer; border-radius:6px; overflow:hidden; border:1px solid var(--border-light); max-height:220px;" onclick="openLightbox('${p.imgUrl}', '${escapeJs(p.title)}')">
        <img src="${p.imgUrl}" alt="${escapeHtml(p.title)}" style="width:100%; height:auto; display:block; object-fit:cover;">
      </div>

      <!-- Verbatim Transcription Box -->
      <div style="margin-top:auto; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:0.75rem; font-size:0.82rem; line-height:1.45; font-family:monospace; max-height:220px; overflow-y:auto; white-space:pre-wrap; color:var(--text-body);">
        ${escapeHtml(p.fullTranscription)}
      </div>
    </div>
  `).join('');
}


/* --------------------------------------------------------------------------
   15. HELPER UTILITIES & STRING ESCAPERS
   -------------------------------------------------------------------------- */
function toggleAnswerVisibility(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJs(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function highlightKeywords(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/\*([^*]+)\*/g, '<strong style="color:var(--bc-blue);">$1</strong>');
}

function formatStoryParagraph(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/([‘'"][^‘'"\n]+[’'"])/g, '<span class="dialogue-quote" style="font-weight:700; color:var(--text-main);">$1</span>');
}

/* --------------------------------------------------------------------------
   16. VIEW SWITCHING & SEPARATION (SESSIONS vs STORIES vs TOPICS)
   -------------------------------------------------------------------------- */
function syncNavActiveState(deskSelector, mobSelector) {
  document.querySelectorAll('.toolbar-nav-links .nav-tab-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.bottom-bar-item').forEach(i => i.classList.remove('active'));

  const activeDesk = document.querySelector(deskSelector);
  const activeMob = document.querySelector(mobSelector);
  if (activeDesk) activeDesk.classList.add('active');
  if (activeMob) activeMob.classList.add('active');
}

function showStoriesView(storyId = 'bad_blood') {
  const storiesSec = document.getElementById('storiesSection');
  const spareTopicsSec = document.getElementById('spareTopicsSection');
  const sec1Materials = document.getElementById('session1Materials');
  const sec2Materials = document.getElementById('session2Materials');
  const sec3Materials = document.getElementById('session3Materials');
  const sec10Materials = document.getElementById('courseMaterials');
  const sec10Grammar = document.getElementById('grammarSection');
  const sec11Materials = document.getElementById('session11Materials');
  const sec12Materials = document.getElementById('session12Materials');
  const sec13Materials = document.getElementById('session13Materials');
  const sec14Materials = document.getElementById('session14Materials');
  const sec15Materials = document.getElementById('session15Materials');
  const sec16Materials = document.getElementById('session16Materials');
  const sec17Materials = document.getElementById('session17Materials');

  // Hide all session materials & spare topics
  if (sec1Materials) sec1Materials.style.display = 'none';
  if (sec2Materials) sec2Materials.style.display = 'none';
  if (sec3Materials) sec3Materials.style.display = 'none';
  if (sec10Materials) sec10Materials.style.display = 'none';
  if (sec10Grammar) sec10Grammar.style.display = 'none';
  if (sec11Materials) sec11Materials.style.display = 'none';
  if (sec12Materials) sec12Materials.style.display = 'none';
  if (sec13Materials) sec13Materials.style.display = 'none';
  if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) sec17Materials.style.display = 'none';
  if (spareTopicsSec) spareTopicsSec.style.display = 'none';

  if (storiesSec) {
    storiesSec.style.display = 'block';
    renderActiveStory(storyId);
    storiesSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  syncNavActiveState('#navLinkStories', '#bottomLinkStories');
  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    const s = (typeof STORIES_DATA !== 'undefined' && STORIES_DATA[storyId]) ? STORIES_DATA[storyId].title : 'Graded Fiction';
    AnimEngine.showToast(`Opened British Council Story: ${s}`, 'info');
  }
}

function showSpareTopicsView(topicId = 'reading_and_books') {
  const storiesSec = document.getElementById('storiesSection');
  const spareTopicsSec = document.getElementById('spareTopicsSection');
  const sec1Materials = document.getElementById('session1Materials');
  const sec2Materials = document.getElementById('session2Materials');
  const sec3Materials = document.getElementById('session3Materials');
  const sec10Materials = document.getElementById('courseMaterials');
  const sec10Grammar = document.getElementById('grammarSection');
  const sec11Materials = document.getElementById('session11Materials');
  const sec12Materials = document.getElementById('session12Materials');
  const sec13Materials = document.getElementById('session13Materials');
  const sec14Materials = document.getElementById('session14Materials');
  const sec15Materials = document.getElementById('session15Materials');
  const sec16Materials = document.getElementById('session16Materials');
  const sec17Materials = document.getElementById('session17Materials');

  // Hide all session materials & stories
  if (sec1Materials) sec1Materials.style.display = 'none';
  if (sec2Materials) sec2Materials.style.display = 'none';
  if (sec3Materials) sec3Materials.style.display = 'none';
  if (sec10Materials) sec10Materials.style.display = 'none';
  if (sec10Grammar) sec10Grammar.style.display = 'none';
  if (sec11Materials) sec11Materials.style.display = 'none';
  if (sec12Materials) sec12Materials.style.display = 'none';
  if (sec13Materials) sec13Materials.style.display = 'none';
  if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) sec17Materials.style.display = 'none';
  if (storiesSec) storiesSec.style.display = 'none';

  if (spareTopicsSec) {
    spareTopicsSec.style.display = 'block';
    renderActiveTopic(topicId);
    spareTopicsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  syncNavActiveState('#navLinkSpareTopics', '#bottomLinkSpareTopics');
  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    const t = (typeof SPARE_TOPICS_DATA !== 'undefined' && SPARE_TOPICS_DATA[topicId]) ? SPARE_TOPICS_DATA[topicId].title : 'Topic Studio';
    AnimEngine.showToast(`Opened Topic: ${t}`, 'info');
  }
}

function showActiveSessionMaterials() {
  const storiesSec = document.getElementById('storiesSection');
  const spareTopicsSec = document.getElementById('spareTopicsSection');
  if (storiesSec) storiesSec.style.display = 'none';
  if (spareTopicsSec) spareTopicsSec.style.display = 'none';

  const sec1Materials = document.getElementById('session1Materials');
  const sec2Materials = document.getElementById('session2Materials');
  const sec3Materials = document.getElementById('session3Materials');
  const sec10Materials = document.getElementById('courseMaterials');
  const sec10Grammar = document.getElementById('grammarSection');
  const sec11Materials = document.getElementById('session11Materials');
  const sec12Materials = document.getElementById('session12Materials');
  const sec13Materials = document.getElementById('session13Materials');
  const sec14Materials = document.getElementById('session14Materials');
  const sec15Materials = document.getElementById('session15Materials');
  const sec16Materials = document.getElementById('session16Materials');
  const sec17Materials = document.getElementById('session17Materials');

  let targetEl = null;
  if (currentSessionId === '1') {
    if (sec1Materials) { sec1Materials.style.display = 'block'; targetEl = sec1Materials; }
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '2') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) { sec2Materials.style.display = 'block'; targetEl = sec2Materials; }
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '3') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) { sec3Materials.style.display = 'block'; targetEl = sec3Materials; }
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '10') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) { sec10Materials.style.display = 'block'; targetEl = sec10Materials; }
    if (sec10Grammar) sec10Grammar.style.display = 'block';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '11') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) { sec11Materials.style.display = 'block'; targetEl = sec11Materials; }
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '12') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) { sec12Materials.style.display = 'block'; targetEl = sec12Materials; }
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '13') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) { sec13Materials.style.display = 'block'; targetEl = sec13Materials; }
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
  } else if (currentSessionId === '14') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) { sec14Materials.style.display = 'block'; targetEl = sec14Materials; }
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) sec17Materials.style.display = 'none';
  } else if (currentSessionId === '15') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) { sec15Materials.style.display = 'block'; targetEl = sec15Materials; }
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) sec17Materials.style.display = 'none';
  } else if (currentSessionId === '16') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) { sec16Materials.style.display = 'block'; targetEl = sec16Materials; }
    if (sec17Materials) sec17Materials.style.display = 'none';
  } else if (currentSessionId === '17') {
    if (sec1Materials) sec1Materials.style.display = 'none';
    if (sec2Materials) sec2Materials.style.display = 'none';
    if (sec3Materials) sec3Materials.style.display = 'none';
    if (sec10Materials) sec10Materials.style.display = 'none';
    if (sec10Grammar) sec10Grammar.style.display = 'none';
    if (sec11Materials) sec11Materials.style.display = 'none';
    if (sec12Materials) sec12Materials.style.display = 'none';
    if (sec13Materials) sec13Materials.style.display = 'none';
    if (sec14Materials) sec14Materials.style.display = 'none';
    if (sec15Materials) sec15Materials.style.display = 'none';
    if (sec16Materials) sec16Materials.style.display = 'none';
    if (sec17Materials) { sec17Materials.style.display = 'block'; targetEl = sec17Materials; }
  }

  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  syncNavActiveState('#navLinkSessionMaterials', '#bottomLinkSessionMaterials');
}

/* --------------------------------------------------------------------------
   17. BRITISH COUNCIL GRADED STORIES ENGINE
   -------------------------------------------------------------------------- */
let activeStoryKey = 'bad_blood';
let storyFontSize = 1.05;
let isStoryNarrating = false;
let currentStoryParaIdx = 0;
let storyCefrFilter = 'ALL';
let storySearchTerm = '';

function initStoriesHub() {
  document.querySelectorAll('.story-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const storyId = btn.getAttribute('data-story');
      if (storyId) {
        showStoriesView(storyId);
      }
    });
  });
}

function renderActiveStory(storyKey = 'bad_blood') {
  activeStoryKey = storyKey;
  const container = document.getElementById('storyActiveContainer');
  if (!container || typeof STORIES_DATA === 'undefined' || !STORIES_DATA[storyKey]) return;

  const story = STORIES_DATA[storyKey];

  // Sync tab active states
  document.querySelectorAll('.story-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-story') === storyKey);
  });

  // Stop any ongoing narration
  stopStoryNarration();

  const themeClass = storyKey === 'bad_blood' ? 'theme-bad-blood' : 'theme-first-star';

  container.innerHTML = `
    <!-- Hero Banner -->
    <div class="story-hero-banner ${themeClass}">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
        <div>
          <span style="display:inline-block; font-size:0.75rem; font-weight:800; background:rgba(255,255,255,0.18); padding:0.25rem 0.65rem; border-radius:var(--radius-full); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.5rem;">
            ${story.badge} • ${story.cefr}
          </span>
          <h2 style="font-size:2.2rem; font-weight:900; margin:0 0 0.35rem; color:#fff;">${story.title}</h2>
          <p style="font-size:0.92rem; opacity:0.85; margin:0;">${story.author}</p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button type="button" class="btn" style="background:#fff; color:#0f172a; font-weight:700; border-radius:var(--radius-full); padding:0.45rem 1rem; font-size:0.86rem; box-shadow:var(--shadow-sm);" onclick="speakUK('${escapeJs(story.summary)}')">
            🔊 Listen to Synopsis
          </button>
        </div>
      </div>

      <div style="background:rgba(0,0,0,0.25); backdrop-filter:blur(6px); border-radius:var(--radius-md); padding:1rem 1.25rem; font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem; border-left:4px solid var(--bc-blue);">
        <strong>Plot Synopsis:</strong> ${story.summary}
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; font-size:0.82rem; font-weight:700;">
        <span style="background:rgba(255,255,255,0.12); padding:0.3rem 0.75rem; border-radius:var(--radius-full);">📖 ${story.paragraphs.length} Full Paragraphs</span>
        <span style="background:rgba(255,255,255,0.12); padding:0.3rem 0.75rem; border-radius:var(--radius-full);">🔤 ${story.words.length} Story Vocabulary Words</span>
        <span style="background:rgba(255,255,255,0.12); padding:0.3rem 0.75rem; border-radius:var(--radius-full);">💬 ${story.quotes.length} Key Dialogue Expressions</span>
        <span style="background:rgba(255,255,255,0.12); padding:0.3rem 0.75rem; border-radius:var(--radius-full);">📝 ${story.tasks.length} Comprehension Tasks</span>
      </div>
    </div>

    <!-- Complete Story Reader Card -->
    <div class="story-reader-card">
      <div class="reader-controls-bar">
        <div>
          <h3 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin:0;">Complete Reading Text</h3>
          <small style="color:var(--text-muted);">Click any 🔊 icon to hear that paragraph read aloud in British English.</small>
        </div>
        <div class="reader-btn-group">
          <button type="button" class="btn-outline-subtle" onclick="adjustStoryFontSize(-0.08)" title="Smaller text">A-</button>
          <button type="button" class="btn-outline-subtle" onclick="adjustStoryFontSize(0.08)" title="Larger text">A+</button>
          <button type="button" class="btn btn-primary" id="btnStoryNarrate" onclick="toggleStoryNarration('${storyKey}')" style="font-size:0.82rem; padding:0.4rem 0.85rem;">
            ▶️ Read Aloud Story
          </button>
          <button type="button" class="btn-outline-subtle" onclick="stopStoryNarration()" title="Stop narration">⏹️</button>
          <button type="button" class="btn-outline-subtle" onclick="copyStoryText('${storyKey}')" title="Copy full story to clipboard">📋 Copy</button>
        </div>
      </div>

      <div id="storyTextContainer" style="font-size:${storyFontSize}rem; transition: font-size 0.2s;">
        ${story.paragraphs.map((p, idx) => `
          <div class="story-para-row" id="storyPara_${idx}">
            <button class="story-para-audio-btn" onclick="speakStoryParagraph(${idx})" title="Listen to paragraph ${idx + 1}">🔊</button>
            <span class="story-para-num">¶${idx + 1}</span>
            <span class="story-para-content">${formatStoryParagraph(p)}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Themed Quotes & Expressions -->
    <div style="margin-bottom:2.5rem;">
      <div style="margin-bottom:1.25rem;">
        <span class="block-tag">Dialogue Focus</span>
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">💬 Memorable Quotes &amp; Expressions</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">Key British dialogue showing character emotions, conflict, and dramatic atmosphere.</p>
      </div>

      <div class="story-quotes-grid">
        ${story.quotes.map(q => `
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
        `).join('')}
      </div>
    </div>

    <!-- Graded Story Vocabulary -->
    <div style="margin-bottom:2.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.75rem;">
        <div>
          <span class="block-tag">Cambridge CEFR Graded Lexicon</span>
          <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">🔤 Story Vocabulary &amp; Expressions (${story.words.length} Words)</h3>
          <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">Words extracted directly from ${story.title} with CEFR level ratings, Arabic translations, and examples.</p>
        </div>
        <div style="width:100%; max-width:320px;">
          <input type="text" id="storyVocabSearchInput" class="filter-input" placeholder="🔍 Search ${story.words.length} story words or Arabic..." oninput="onStoryVocabSearch(this.value)">
        </div>
      </div>

      <!-- CEFR Filter Pills -->
      <div class="cefr-filter-bar" id="storyCefrFilterBar">
        <button type="button" class="cefr-pill-btn active" data-level="ALL" onclick="setStoryCefrFilter('ALL')">All (${story.words.length})</button>
        <button type="button" class="cefr-pill-btn" data-level="C1" onclick="setStoryCefrFilter('C1')">C1 Advanced</button>
        <button type="button" class="cefr-pill-btn" data-level="B2" onclick="setStoryCefrFilter('B2')">B2 Upper-Int</button>
        <button type="button" class="cefr-pill-btn" data-level="B1" onclick="setStoryCefrFilter('B1')">B1 Intermediate</button>
        <button type="button" class="cefr-pill-btn" data-level="A2" onclick="setStoryCefrFilter('A2')">A2 Pre-Int</button>
      </div>

      <div class="topic-vocab-grid" id="storyVocabGrid">
        <!-- Rendered by renderStoryVocabGrid() -->
      </div>
    </div>

    <!-- Interactive Tasks & Exercises -->
    <div style="margin-bottom:2rem;">
      <div style="margin-bottom:1.25rem;">
        <span class="block-tag">Comprehension &amp; Language Check</span>
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">📝 Interactive Story Tasks</h3>
        <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">Complete authentic comprehension exercises with instant feedback.</p>
      </div>

      <div id="storyTasksContainer">
        ${renderStoryTasksHtml(story.tasks)}
      </div>
    </div>
  `;

  renderStoryVocabGrid();
}

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
  if (!grid || typeof STORIES_DATA === 'undefined' || !STORIES_DATA[activeStoryKey]) return;

  const story = STORIES_DATA[activeStoryKey];
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
        No vocabulary matches found for "<strong>${escapeHtml(storySearchTerm)}</strong>". Try another search or filter.
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

function adjustStoryFontSize(delta) {
  storyFontSize = Math.min(1.4, Math.max(0.85, storyFontSize + delta));
  const el = document.getElementById('storyTextContainer');
  if (el) el.style.fontSize = `${storyFontSize.toFixed(2)}rem`;
}

function speakStoryParagraph(idx) {
  if (typeof STORIES_DATA === 'undefined' || !STORIES_DATA[activeStoryKey]) return;
  const pText = STORIES_DATA[activeStoryKey].paragraphs[idx];
  if (!pText) return;

  document.querySelectorAll('.story-para-row').forEach((row, i) => {
    row.classList.toggle('speaking-highlight', i === idx);
  });

  speakUK(pText);
}

function toggleStoryNarration(storyKey) {
  if (isStoryNarrating) {
    stopStoryNarration();
  } else {
    startStoryFullNarration(storyKey);
  }
}

function startStoryFullNarration(storyKey) {
  if (typeof STORIES_DATA === 'undefined' || !STORIES_DATA[storyKey]) return;
  const story = STORIES_DATA[storyKey];
  window.speechSynthesis.cancel();
  isStoryNarrating = true;
  currentStoryParaIdx = 0;

  const btn = document.getElementById('btnStoryNarrate');
  if (btn) btn.innerHTML = '⏸️ Pause Narration';

  function playNext() {
    if (!isStoryNarrating || currentStoryParaIdx >= story.paragraphs.length) {
      stopStoryNarration();
      return;
    }

    const row = document.getElementById(`storyPara_${currentStoryParaIdx}`);
    document.querySelectorAll('.story-para-row').forEach(r => r.classList.remove('speaking-highlight'));
    if (row) {
      row.classList.add('speaking-highlight');
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const text = story.paragraphs[currentStoryParaIdx];
    const u = new SpeechSynthesisUtterance(text);
    if (ukVoice) u.voice = ukVoice;
    u.lang = 'en-GB';
    u.rate = 0.95;

    u.onend = () => {
      if (isStoryNarrating) {
        currentStoryParaIdx++;
        playNext();
      }
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

function copyStoryText(storyKey) {
  if (typeof STORIES_DATA === 'undefined' || !STORIES_DATA[storyKey]) return;
  const story = STORIES_DATA[storyKey];
  const fullText = `${story.title}\n${story.author}\n\n${story.paragraphs.join('\n\n')}`;
  navigator.clipboard.writeText(fullText).then(() => {
    if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
      AnimEngine.showToast('Copied full story text to clipboard!', 'success');
    }
  });
}

function renderStoryTasksHtml(tasks) {
  if (!tasks || !tasks.length) return '';

  return tasks.map((task, tIdx) => {
    if (task.type === 'matching') {
      return `
        <div class="comprehension-card" id="storyTask_${tIdx}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">TASK ${tIdx + 1} • MATCHING</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(task.title)}</h4>
            </div>
            <button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.85rem;" onclick="evaluateStoryMatchTask(${tIdx})">
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
            <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">${escapeHtml(task.instructions)}</p>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.65rem;">
            ${task.questions.map((q, qIdx) => `
              <div class="task-q-row" id="tfRow_${tIdx}_${qIdx}">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem;">
                  <div style="font-size:0.92rem; color:var(--text-main); line-height:1.45;">
                    <strong>${q.num}.</strong> ${escapeHtml(q.statement)}
                  </div>
                  <div class="task-btn-group">
                    <button type="button" class="task-option-btn" id="tfBtn_${tIdx}_${qIdx}_True" onclick="answerStoryTrueFalse(${tIdx}, ${qIdx}, 'True', '${escapeJs(q.answer)}', '${escapeJs(q.explanation)}')">True</button>
                    <button type="button" class="task-option-btn" id="tfBtn_${tIdx}_${qIdx}_False" onclick="answerStoryTrueFalse(${tIdx}, ${qIdx}, 'False', '${escapeJs(q.answer)}', '${escapeJs(q.explanation)}')">False</button>
                  </div>
                </div>
                <div class="task-feedback-msg" id="tfFeedback_${tIdx}_${qIdx}" style="display:none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (task.type === 'gap_fill') {
      return `
        <div class="comprehension-card" id="storyTask_${tIdx}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">TASK ${tIdx + 1} • GAP-FILL</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(task.title)}</h4>
            </div>
            <button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.85rem;" onclick="evaluateStoryGapFillTask(${tIdx})">
              Check Answers
            </button>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">${escapeHtml(task.instructions)}</p>

          <div style="display:flex; flex-direction:column; gap:0.65rem;">
            ${task.questions.map((q, qIdx) => `
              <div class="task-q-row" id="gfRow_${tIdx}_${qIdx}">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                  <span style="font-size:0.92rem; color:var(--text-main);"><strong>${q.num}.</strong> ${escapeHtml(q.prompt)}</span>
                  <select class="filter-input task-select" id="gfSelect_${tIdx}_${qIdx}" data-correct="${escapeHtml(q.answer)}" style="max-width:220px;">
                    <option value="">-- Select word --</option>
                    ${(q.options || []).map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('')}
                  </select>
                </div>
                <div class="task-feedback-msg" id="gfFeedback_${tIdx}_${qIdx}" style="display:none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (task.type === 'ordering') {
      return `
        <div class="comprehension-card" id="storyTask_${tIdx}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:800; color:var(--bc-blue); text-transform:uppercase;">TASK ${tIdx + 1} • CHRONOLOGICAL ORDERING</span>
              <h4 style="font-size:1.15rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(task.title)}</h4>
            </div>
            <button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.85rem;" onclick="evaluateStoryOrderingTask(${tIdx})">
              Check Order
            </button>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">${escapeHtml(task.instructions)}</p>

          <div style="display:flex; flex-direction:column; gap:0.65rem;">
            ${task.questions.map((q, qIdx) => `
              <div class="task-q-row" id="ordRow_${tIdx}_${qIdx}">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                  <span style="font-size:0.92rem; color:var(--text-main); flex:1;">${escapeHtml(q.event)}</span>
                  <select class="filter-input task-select" id="ordSelect_${tIdx}_${qIdx}" data-correct="${q.correctOrder}" style="max-width:130px;">
                    <option value="">Order...</option>
                    ${task.questions.map((_, i) => `<option value="${i + 1}">Step ${i + 1}</option>`).join('')}
                  </select>
                </div>
                <div class="task-feedback-msg" id="ordFeedback_${tIdx}_${qIdx}" style="display:none;"></div>
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
  let correct = 0;
  let total = 0;
  document.querySelectorAll(`[id^="matchSelect_${tIdx}_"]`).forEach(sel => {
    total++;
    const qIdx = sel.id.split('_')[2];
    const userVal = sel.value;
    const correctVal = sel.getAttribute('data-correct');
    const row = document.getElementById(`matchRow_${tIdx}_${qIdx}`);
    const fb = document.getElementById(`matchFeedback_${tIdx}_${qIdx}`);

    fb.style.display = 'block';
    if (userVal === correctVal) {
      correct++;
      if (row) { row.classList.add('answered-correct'); row.classList.remove('answered-incorrect'); }
      fb.innerHTML = `<span style="color:var(--emerald); font-weight:700;">✅ Correct!</span>`;
    } else {
      if (row) { row.classList.add('answered-incorrect'); row.classList.remove('answered-correct'); }
      fb.innerHTML = `<span style="color:var(--rose); font-weight:700;">❌ Incorrect.</span> Definition is: <em>${escapeHtml(correctVal)}</em>`;
    }
  });

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Matching Score: ${correct} / ${total}`, correct === total ? 'success' : 'info');
  }
}

function answerStoryTrueFalse(tIdx, qIdx, userChoice, correctAnswer, explanation) {
  const row = document.getElementById(`tfRow_${tIdx}_${qIdx}`);
  const fb = document.getElementById(`tfFeedback_${tIdx}_${qIdx}`);
  const btnT = document.getElementById(`tfBtn_${tIdx}_${qIdx}_True`);
  const btnF = document.getElementById(`tfBtn_${tIdx}_${qIdx}_False`);

  if (!row || !fb) return;
  fb.style.display = 'block';

  btnT.classList.remove('selected-correct', 'selected-incorrect');
  btnF.classList.remove('selected-correct', 'selected-incorrect');

  const selectedBtn = userChoice === 'True' ? btnT : btnF;

  if (userChoice === correctAnswer) {
    row.classList.add('answered-correct');
    row.classList.remove('answered-incorrect');
    selectedBtn.classList.add('selected-correct');
    fb.innerHTML = `<span style="color:var(--emerald); font-weight:700;">✅ Correct!</span> ${escapeHtml(explanation)}`;
    if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
      AnimEngine.showToast('Spot on!', 'success');
    }
  } else {
    row.classList.add('answered-incorrect');
    row.classList.remove('answered-correct');
    selectedBtn.classList.add('selected-incorrect');
    fb.innerHTML = `<span style="color:var(--rose); font-weight:700;">❌ Incorrect.</span> ${escapeHtml(explanation)}`;
  }
}

function evaluateStoryGapFillTask(tIdx) {
  let correct = 0;
  let total = 0;
  document.querySelectorAll(`[id^="gfSelect_${tIdx}_"]`).forEach(sel => {
    total++;
    const qIdx = sel.id.split('_')[2];
    const userVal = sel.value;
    const correctVal = sel.getAttribute('data-correct');
    const row = document.getElementById(`gfRow_${tIdx}_${qIdx}`);
    const fb = document.getElementById(`gfFeedback_${tIdx}_${qIdx}`);

    fb.style.display = 'block';
    if (userVal && userVal.toLowerCase() === correctVal.toLowerCase()) {
      correct++;
      if (row) { row.classList.add('answered-correct'); row.classList.remove('answered-incorrect'); }
      fb.innerHTML = `<span style="color:var(--emerald); font-weight:700;">✅ Correct!</span>`;
    } else {
      if (row) { row.classList.add('answered-incorrect'); row.classList.remove('answered-correct'); }
      fb.innerHTML = `<span style="color:var(--rose); font-weight:700;">❌ Incorrect.</span> Correct answer: <strong>${escapeHtml(correctVal)}</strong>`;
    }
  });

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Gap-Fill Score: ${correct} / ${total}`, correct === total ? 'success' : 'info');
  }
}

function evaluateStoryOrderingTask(tIdx) {
  let correct = 0;
  let total = 0;
  document.querySelectorAll(`[id^="ordSelect_${tIdx}_"]`).forEach(sel => {
    total++;
    const qIdx = sel.id.split('_')[2];
    const userVal = parseInt(sel.value, 10);
    const correctVal = parseInt(sel.getAttribute('data-correct'), 10);
    const row = document.getElementById(`ordRow_${tIdx}_${qIdx}`);
    const fb = document.getElementById(`ordFeedback_${tIdx}_${qIdx}`);

    fb.style.display = 'block';
    if (userVal === correctVal) {
      correct++;
      if (row) { row.classList.add('answered-correct'); row.classList.remove('answered-incorrect'); }
      fb.innerHTML = `<span style="color:var(--emerald); font-weight:700;">✅ Correct Step (${correctVal})</span>`;
    } else {
      if (row) { row.classList.add('answered-incorrect'); row.classList.remove('answered-correct'); }
      fb.innerHTML = `<span style="color:var(--rose); font-weight:700;">❌ Incorrect.</span> This is actually <strong>Step ${correctVal}</strong> in the narrative.`;
    }
  });

  if (window.AnimEngine && typeof AnimEngine.showToast === 'function') {
    AnimEngine.showToast(`Chronological Score: ${correct} / ${total}`, correct === total ? 'success' : 'info');
  }
}

/* --------------------------------------------------------------------------
   18. SPARE MAJOR TOPICS & VIDEO TRANSCRIPT STUDIO ENGINE
   -------------------------------------------------------------------------- */
let activeTopicKey = 'reading_and_books';
let topicCefrFilter = 'ALL';
let topicSearchTerm = '';
let topicTranscriptSearchTerm = '';

function initSpareTopicsHub() {
  document.querySelectorAll('.topic-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-topic');
      if (topicId) {
        showSpareTopicsView(topicId);
      }
    });
  });
}

function renderActiveTopic(topicKey = 'reading_and_books') {
  activeTopicKey = topicKey;
  const container = document.getElementById('topicActiveContainer');
  if (!container || typeof SPARE_TOPICS_DATA === 'undefined' || !SPARE_TOPICS_DATA[topicKey]) return;

  const topic = SPARE_TOPICS_DATA[topicKey];

  // Sync tab active states
  document.querySelectorAll('.topic-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-topic') === topicKey);
  });

  container.innerHTML = `
    <!-- Topic Header Banner -->
    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-lg); padding:2rem 1.75rem; margin-bottom:1.75rem; box-shadow:var(--shadow-card);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <span style="font-size:3rem; line-height:1;">${topic.icon}</span>
          <div>
            <span class="block-tag">${escapeHtml(topic.tag)}</span>
            <h2 style="font-size:2rem; font-weight:900; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(topic.title)}</h2>
            <p style="font-size:0.95rem; color:var(--text-body); margin:0; max-width:700px;">${escapeHtml(topic.desc)}</p>
          </div>
        </div>
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap; font-size:0.82rem; font-weight:700;">
        <span style="background:rgba(0,102,245,0.1); color:var(--bc-blue); padding:0.35rem 0.85rem; border-radius:var(--radius-full);">📖 ${topic.words.length} Cambridge CEFR Vocabulary Terms</span>
        <span style="background:rgba(16,185,129,0.1); color:var(--emerald); padding:0.35rem 0.85rem; border-radius:var(--radius-full);">🎬 Video Tutorial: ${escapeHtml(topic.video.duration)} (${escapeHtml(topic.video.level)})</span>
        <span style="background:rgba(139,92,246,0.1); color:#7c3aed; padding:0.35rem 0.85rem; border-radius:var(--radius-full);">💬 ${topic.video.transcript.length} Timestamped Bilingual Dialogue Lines</span>
      </div>
    </div>

    <!-- Video Studio & Interactive Transcript -->
    <div class="video-studio-grid">
      <!-- Video Player Column -->
      <div class="video-player-box">
        <div class="video-embed-iframe-wrap">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${topic.video.youtubeId}?rel=0" 
            title="${escapeHtml(topic.video.title)}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-meta-pane">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <span style="font-size:0.78rem; font-weight:800; color:var(--bc-blue); background:rgba(0,102,245,0.08); padding:0.2rem 0.55rem; border-radius:var(--radius-sm);">
              ${escapeHtml(topic.video.level)} • ${escapeHtml(topic.video.duration)}
            </span>
            <a href="${topic.video.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size:0.8rem; padding:0.3rem 0.75rem; display:inline-flex; align-items:center; gap:0.4rem; color:#ef4444; border-color:rgba(239,68,68,0.3);">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>Watch on YouTube</span>
            </a>
          </div>
          <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">${escapeHtml(topic.video.title)}</h4>
          <p style="font-size:0.88rem; color:var(--text-body); line-height:1.45; margin:0;">${escapeHtml(topic.video.description)}</p>
        </div>
      </div>

      <!-- Bilingual Transcript Studio Column -->
      <div class="transcript-studio-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <div>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">Bilingual Video Transcript</h4>
            <small style="color:var(--text-muted);">${topic.video.transcript.length} conversational segments with Arabic translations</small>
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
    </div>

    <!-- Major Topic Cambridge CEFR Vocabulary Grid -->
    <div style="margin-bottom:2.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.75rem;">
        <div>
          <span class="block-tag">Cambridge CEFR Lexical Matrix</span>
          <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-main); margin:0.25rem 0;">🔤 ${topic.title} (${topic.words.length} Terms)</h3>
          <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">Categorized CEFR vocabulary with British audio, accurate Arabic definitions, and contextual examples.</p>
        </div>
        <div style="width:100%; max-width:320px;">
          <input type="text" id="topicVocabSearchInput" class="filter-input" placeholder="🔍 Search ${topic.words.length} terms or Arabic..." oninput="onTopicVocabSearch(this.value)">
        </div>
      </div>

      <!-- CEFR Filter Pills -->
      <div class="cefr-filter-bar" id="topicCefrFilterBar">
        <button type="button" class="cefr-pill-btn active" data-level="ALL" onclick="setTopicCefrFilter('ALL')">All (${topic.words.length})</button>
        <button type="button" class="cefr-pill-btn" data-level="C1" onclick="setTopicCefrFilter('C1')">C1 Advanced</button>
        <button type="button" class="cefr-pill-btn" data-level="B2" onclick="setTopicCefrFilter('B2')">B2 Upper-Int</button>
        <button type="button" class="cefr-pill-btn" data-level="B1" onclick="setTopicCefrFilter('B1')">B1 Intermediate</button>
        <button type="button" class="cefr-pill-btn" data-level="A2" onclick="setTopicCefrFilter('A2')">A2 Pre-Int</button>
      </div>

      <div class="topic-vocab-grid" id="topicVocabGrid">
        <!-- Rendered by renderTopicVocabGrid() -->
      </div>
    </div>
  `;

  renderTopicTranscriptList();
  renderTopicVocabGrid();
}

function onTopicTranscriptSearch(query) {
  topicTranscriptSearchTerm = (query || '').trim().toLowerCase();
  renderTopicTranscriptList();
}

function renderTopicTranscriptList() {
  const container = document.getElementById('topicTranscriptList');
  if (!container || typeof SPARE_TOPICS_DATA === 'undefined' || !SPARE_TOPICS_DATA[activeTopicKey]) return;

  const transcript = SPARE_TOPICS_DATA[activeTopicKey].video.transcript;
  const filtered = transcript.filter(t => {
    if (!topicTranscriptSearchTerm) return true;
    return t.en.toLowerCase().includes(topicTranscriptSearchTerm) ||
      (t.ar && t.ar.includes(topicTranscriptSearchTerm)) ||
      (t.speaker && t.speaker.toLowerCase().includes(topicTranscriptSearchTerm));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.88rem;">
        No transcript lines matched "${escapeHtml(topicTranscriptSearchTerm)}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="transcript-line-row">
      <div class="transcript-top-line">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="timestamp-pill">[${escapeHtml(item.time)}]</span>
          <strong style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">${escapeHtml(item.speaker)}</strong>
        </div>
        <button class="audio-circle-btn" style="width:26px; height:26px; font-size:0.75rem;" onclick="speakUK('${escapeJs(item.en)}')">🔊</button>
      </div>
      <div style="font-size:0.92rem; font-weight:700; color:var(--text-main); line-height:1.4;">
        ${escapeHtml(item.en)}
      </div>
      <div style="font-family:'Cairo',var(--font-main); font-size:0.88rem; color:#0284c7; direction:rtl; text-align:right; line-height:1.4;">
        ${escapeHtml(item.ar)}
      </div>
    </div>
  `).join('');
}

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
  if (!grid || typeof SPARE_TOPICS_DATA === 'undefined' || !SPARE_TOPICS_DATA[activeTopicKey]) return;

  const topic = SPARE_TOPICS_DATA[activeTopicKey];
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
      <div style="grid-column: 1/-1; text-align:center; padding:2.5rem; background:var(--bg-surface); border-radius:var(--radius-md); border:1px dashed var(--border-light); color:var(--text-muted);">
        <span style="font-size:2rem; display:block; margin-bottom:0.5rem;">🔍</span>
        No vocabulary matches found for "<strong>${escapeHtml(topicSearchTerm)}</strong>". Try another search or filter.
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
   19. INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initSpeech();
  initSessionsDropdown();
  initThemeAndDrawer();
  initPart1();
  initPart2();
  initPart3();
  initPart4();
  initReadingMatch();
  initStoriesHub();
  initSpareTopicsHub();
  switchSession(currentSessionId);

  // Attach button ripple micro-interactions
  if (window.AnimEngine && typeof AnimEngine.attachRipple === 'function') {
    AnimEngine.attachRipple();
  }
});
