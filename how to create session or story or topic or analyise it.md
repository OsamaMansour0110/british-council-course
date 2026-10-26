# British Council Courseware Implementation & Prompt Guide
**Standard Operating Procedure for Sessions, Stories, Topics & Material Analysis**

---

## 1. Golden Prompt Template: Creating a Course Session

Use this exact prompt whenever you provide session materials (handouts, smartboards, notebook photos) to be implemented:

```text
I want you to implement [SESSION NUMBER, e.g., Session 13] into the courseware following the exact gold standard established in Session 12.

Folder location: `Session [13] (storytelling)`

CRITICAL DIRECTIVES:

1. STRICT B1 / B1+ DEFINITION STANDARD (NO C1/C2 JARGON):
   - Every single vocabulary `definition` MUST be written in plain, accessible, student-friendly Intermediate B1 / B1+ (or gentle B2-) English.
   - STRICTLY FORBIDDEN: Do NOT use difficult C1/C2 dictionary jargon or academic/philosophical phrasing (e.g., avoid words like "without conscious thinking", "skepticism", "lack of conviction", "tapered end", "cognitive stages", "beveled", "retribution").
   - Definitions must be concise (10–18 words maximum) and immediately clear so an intermediate learner understands them without a dictionary when playing Part 1 (Flashcards), Part 2 (Sentence Clues), Part 3 (Connect Game), and Part 4 (Final Exam).

2. NO IMAGE PLACEHOLDERS OR SUMMARY SHORTCUTS:
   - Extract and transcribe 100% of the authentic text and context directly into the page (verbatim reading texts, handouts, smartboard slides, and handwritten student notebook notes).
   - Do NOT just drop an image with a sentence caption; extract the actual exercises, dialogues, grammar rules, and text.

3. FULL PEDAGOGICAL BREAKDOWN:
   - Lead-in Activity: Authentic classroom discussion table with model partner speech turn.
   - Core Reading/Listening Passage: Full verbatim text formatted cleanly with interactive keyword highlights, audio narration, and comprehension questions.
   - Language Focus / Smartboard Matching Quiz: Interactive reveal/check quiz based on classroom slides with Arabic explanations and rules.
   - Master Vocabulary & Antonyms Matrix: All 28 target lexis with simplified B1/B1+ definitions, opposites, Arabic meanings, and context sentences.
   - Case Study / Candidate / Scenario Analysis: Complete profiles, positive vs. negative points matrix, and an interactive group debate/decision tool.
   - Discussion Speaking Lab: Authentic classroom prompts with expandable B1/B2 model answers and audio.
   - Teacher Live Corrections Clinic: Real student errors formatted with live whiteboard styling (strikethroughs, teacher green corrections, grammar rules).
   - Pronunciation & Syllable Stress Clinic: IPA phonetic transcription, syllable stress markings, vowel rules, and speech samples.
   - Handwritten Notebook Transcriptions: Every handwritten page completely transcribed into realistic notebook study cards.

4. ARCHITECTURE & CODE INTEGRITY:
   - Add all vocab objects and module data structures to `js/data.js` and explicitly expose them on `window`.
   - Implement the render functions in `js/app.js` and wire them into `switchSession()`.
   - Add semantic HTML containers in `index.html`.
   - Ensure Part 1 (Flashcards), Part 2 (Gap Fill), Part 3 (Connect Game), and Part 4 (Full Exam) automatically support the new 28-word session vocabulary with their simplified B1 definitions.
   - Provide British English text-to-speech audio for all target vocabulary, questions, model answers, and corrections.
```

---

## 2. Golden Prompt Template: Creating a Graded Story

Use this prompt when implementing an uncut British Council graded fiction story into `stories.html`:

```text
I want you to implement a new Graded Story into `stories.html` following the gold standard established in Bad Blood and First Star.

Story Title: [STORY TITLE, e.g., The Man Who Stole the Stars]
CEFR Level: [e.g., Intermediate B1 / B1+]

CRITICAL DIRECTIVES:
1. STRICT B1 / B1+ DEFINITION STANDARD:
   - All story vocabulary definitions MUST be written in accessible B1 / B1+ English (no C1 dictionary jargon).
2. FULL UNCUT FICTION TRANSCRIPTION:
   - Extract and transcribe 100% of the uncut fiction text paragraph by paragraph into `js/stories_and_topics.js` under `STORIES_DATA`.
   - Provide paragraph-by-paragraph British English audio narration with speaking highlights and font zoom controls.
3. 4 INTERACTIVE VOCABULARY GAMES:
   - Part 1: 3D Flashcards with speed timer, manual flip, and audio.
   - Part 2: Sentence Solve gap-fill challenge with distractors and Arabic clues.
   - Part 3: Word-to-Definition Connect Matching Test using `.connect-btn` styling and checkmarks.
   - Part 4: All-words final exam using `.test-choice-option` cards and instant grading.
4. MEMORABLE QUOTES & EXPRESSIONS:
   - Extract authentic dialogue lines categorized by theme with English text, speaker audio, and Arabic translations.
5. CODE & NAVIGATION INTEGRITY:
   - Add story choice tab to `stories.html` header selector.
   - Ensure `switchStory()` in `js/stories_page.js` dynamically updates all 4 learning parts without full reload.
```

---

## 3. Golden Prompt Template: Creating a Video Topic

Use this prompt when implementing a YouTube playlist lesson / topic into `topics.html`:

```text
I want you to implement a new Video Topic into `topics.html` following the gold standard established in Travel & Exploration.

Topic Title: [TOPIC TITLE, e.g., Travel and Exploration]
YouTube Video ID: [e.g., gOMypAhVaXE]

CRITICAL DIRECTIVES:
1. VIDEO PLAYER DEFAULTS:
   - The in-page embedded YouTube player (`#videoIframeWrap`) MUST be visible and active by default so the user can play it directly in the page.
   - Provide a prominent red button `▶ Play on Browser / YouTube ↗` as the secondary option to open in an external browser tab.
   - Provide a toggle button (`Switch to Poster Mode`) for alternate viewing.
2. BILINGUAL SYNCHRONIZED TRANSCRIPT:
   - Provide complete timestamped segments with English narration, Arabic explanation, British speech audio, and live search filter.
3. STRICT B1 DEFINITIONS:
   - Provide 30+ topic vocabulary terms with plain B1 / B1+ definitions, Cambridge level badges, and Arabic meanings.
4. 4 VOCABULARY PARTS:
   - Full support for Part 1 (Flashcards), Part 2 (Sentence Solve), Part 3 (Connect Test), and Part 4 (Comprehensive Exam).
```

---

## 4. How to Analyze Authentic Session Materials

When analyzing raw student folders, handouts, and smartboard slides:

1. **Step 1: Raw Material Extraction**
   - Transcribe verbatim all text from handouts (reading passages, vocabulary tables, grammar exercises).
   - Transcribe all smartboard slides (matching exercises, grammar structures, timelines).
   - Transcribe handwritten notebook pages completely (student sentences, corrections, teacher feedback).

2. **Step 2: Pedagogical Leveling (The B1 Rule)**
   - Audit every vocabulary definition: Replace heavy dictionary terminology (e.g. *without conscious thinking*, *tapered end*, *skepticism*) with clean, high-frequency, natural English definitions understandable to an intermediate English learner.

3. **Step 3: Verification**
   - Test that the 4 learning games (Cards, Gap-Fill, Connect, Exam) run error-free and load the correct 28-word session vocabulary.
   - Verify speech synthesis works across all target vocabulary and dialogues.
