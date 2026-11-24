# Content brief: British Council B1 course, vocab and grammar data

The learner is an Arabic speaker at **CEFR B1**. We are rebuilding their study site. Your job is to produce **clean JSON data files**. Someone else is building the UI.

Project root: `D:\British Council Course\Html page`
Raw class materials: `D:\British Council Course\Session N (...)\` (handout PDF + `pictures/` = whiteboard/smartboard/notebook photos from class)
Existing (old, sometimes wrong) data:
- `tools/old_vocab.json`: `{ "1": [ {word, pos, cambridgeLevel, pronunciation, definition, b1Explain, opposite, arWord, arMeaning, sentence|example|context ...} ], ... }` for sessions 1-3, 10-24
- `js/data.js`: also has each session's grammar/lesson modules, e.g. `SESSION_3_THIRD_CONDITIONAL`, `SESSION_16_QUESTION_TAGS_LAB`, `SECOND_CONDITIONAL_EXERCISES` (session 11), `SESSION_24_PAST_MODALS_LAB`. Grep for `SESSION_<N>_` to find them.
- `tools/old_stories_topics.json`: stories and video topics

## Output: one file per session, `data/sessions/sNN.json` (two digits: s04.json, s25.json)

```json
{
  "id": 4,
  "title": "Further Explanation and Description",
  "summary": "Two or three short B1 sentences: what we practised in this lesson.",
  "source": "ARB_B1_04_I022CEA_HO_v1.0.pdf",
  "vocab": [
    {
      "word": "pretend",
      "pos": "verb",
      "level": "B1",
      "ipa": "/prɪˈtend/",
      "def": "To act as if something is true when it is not.",
      "example": "He pretended everything was fine, but he was really worried.",
      "opposite": "",
      "tr": {
        "ar": {"w": "يتظاهر", "d": "أن تتصرف كأن شيئاً صحيح وهو غير صحيح"},
        "zh": {"w": "假装", "d": "表现得好像某事是真的，其实不是"},
        "de": {"w": "so tun, als ob", "d": "sich so verhalten, als wäre etwas wahr, obwohl es nicht stimmt"},
        "es": {"w": "fingir", "d": "actuar como si algo fuera verdad cuando no lo es"},
        "fr": {"w": "faire semblant", "d": "agir comme si quelque chose était vrai alors que ce n'est pas le cas"}
      }
    }
  ],
  "grammar": [
    {
      "title": "Third conditional",
      "explain": "B1 English, 1-3 short sentences: when and why we use it.",
      "explain_ar": "The same idea in clear, natural Arabic.",
      "form": ["If + had + past participle, would have + past participle"],
      "examples": [{"en": "If I had studied, I would have passed.", "note": "I didn't study, so I failed."}],
      "mistakes": [{"wrong": "If I would have known...", "right": "If I had known...", "why": "No 'would' in the if-part."}],
      "quiz": [{"q": "If she ___ earlier, she wouldn't have missed the bus.", "options": ["had left", "left", "would leave"], "answer": 0, "why": "Third conditional: if + had + past participle."}]
    }
  ],
  "phrases": [{"en": "Could you tell me where the station is?", "use": "Polite indirect question"}]
}
```

## Rules for vocabulary

1. **`def` must be real B1 English.** Use only very common words (the Oxford 3000 / B1 range). Keep it to 15 words or fewer. Do not use the headword inside its own definition. Verbs start with "To ...". Give the meaning the word has **in this lesson**. No dictionary jargon ("denoting", "pertaining to", "a state of being", "conscious", "manifest"...).
   - Bad: "Exhibiting a disposition characterised by procrastination."  Good: "Often leaving work until later because you don't want to do it."
2. `example`: one natural sentence, B1 level, ideally connected to the lesson topic, using the word.
3. `word`: the form a learner should learn (base form, no article: "challenge", not "A challenge"; "process", not "Processes"). Phrases and idioms are fine ("break the ice").
4. `level`: honest Cambridge/CEFR level of the word (A2, B1, B2, C1).
5. `ipa`: British IPA with stress mark.
6. `opposite`: a simple opposite if a natural one exists, else "".
7. `tr`: all five languages, `ar` (Arabic), `zh` (Simplified Chinese), `de` (German), `es` (Spanish), `fr` (French).
   - `w` = the short translation a dictionary would give (1-4 words, the right sense). Not a long list of synonyms: at most two, separated by " / ".
   - `d` = the B1 definition translated naturally (not word-for-word), short.
   - Arabic must be correct Modern Standard Arabic with the right meaning for this context.
8. Check every old entry. The old data has real errors (for example a definition that belongs to a different word). Fix them. Keep all old words that really belong to the lesson, drop exact duplicates.

## Rules for grammar

- Include every grammar point the lesson actually taught (look at the handout, the board photos and the old modules). Usually 1-3 points. If a lesson had no grammar, use `"grammar": []`.
- Everything in B1 English, plus `explain_ar` in Arabic.
- 4-6 quiz questions per grammar point, three options each, `answer` is the 0-based index of the right option.
- `phrases`: useful functional language from the lesson (e.g. ways to give compliments, give directions, agree/disagree). 5-15 items. `[]` if none.

## Rules for new sessions (no old data)

Read the handout PDF fully and look at **every** photo in `pictures/` (whiteboards often show the words and corrections the teacher wrote). Pick the 20-30 most useful target words/phrases from the lesson: the handout's vocabulary tasks first, then words the teacher wrote on the board, then key words from the reading/listening. 

## Finish

- Write valid UTF-8 JSON (use the Write tool). Double quotes only, no trailing commas, no comments.
- After writing, validate with: `python "D:/British Council Course/Html page/tools/validate.py" <file>` and fix anything it reports.
- Do not edit any other file in the project.
- Report back: file(s) written, number of words and grammar points per file, and anything uncertain (e.g. a photo you could not read).
