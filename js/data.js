/* ==========================================================================
   BRITISH COUNCIL INTERMEDIATE B1 COURSEWARE - CENTRAL DATA REPOSITORY
   Sessions 10 & 11 • Cambridge CEFR Ratings • Authentic Classroom Materials
   ========================================================================== */

/* SESSION 10: PLANNING EVENTS (25 VOCABULARY WORDS) */
const VOCAB_SESSION_10 = [
  {
    id: 1, word: "Processes",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/ˈprəʊ.ses.ɪz/",
    citation: "Boat building (line 3)",
    definition: "Step-by-step actions that teams follow to complete a job together.",
    b1Explain: "Step-by-step actions that teams follow to complete a job together.",
    sentence: "Our team followed clear processes to finish the project on time without stress."
  },
  {
    id: 2, word: "Conflict resolution",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈkɒn.flɪkt ˌrez.əˈluː.ʃən/",
    citation: "Boat building (line 3)",
    definition: "Finding a fair, calm, and peaceful solution when people disagree.",
    b1Explain: "Finding a fair and calm solution when two people disagree.",
    sentence: "Good managers need conflict resolution skills so the team can work happily together."
  },
  {
    id: 3, word: "Dynamic",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/daɪˈnæm.ɪk/",
    citation: "Nature park challenge (line 1)",
    definition: "Full of energy, active, and exciting; never boring.",
    b1Explain: "Energetic and exciting, never boring or standing still.",
    sentence: "The outdoor obstacle course was very dynamic and kept everyone moving."
  },
  {
    id: 4, word: "A challenge",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ə ˈtʃæl.ɪndʒ/",
    citation: "Nature park challenge (line 2)",
    definition: "A difficult task that tests your ability and needs real effort.",
    b1Explain: "A task that is not easy, but exciting to try and finish.",
    sentence: "Hiking up the steep hill in 30 minutes was a real challenge for our group."
  },
  {
    id: 5, word: "Approximately",
    pos: "adverb", cambridgeLevel: "B1",
    pronunciation: "/əˈprɒk.sɪ.mət.li/",
    citation: "Nature park challenge (line 2)",
    definition: "Close to an exact number or time, but not completely exact; about.",
    b1Explain: "About or nearly, when you don't know the exact number.",
    sentence: "Each team in the park has approximately four or five colleagues."
  },
  {
    id: 6, word: "Capitalize on",
    pos: "phrasal verb", cambridgeLevel: "C1",
    pronunciation: "/ˈkæp.ɪ.təl.aɪz ɒn/",
    citation: "Nature park challenge (line 4)",
    definition: "To use a good situation, skill, or chance to get an advantage.",
    b1Explain: "To take advantage of something good that is available around you.",
    sentence: "We decided to capitalize on the sunny weather by organizing our games outdoors."
  },
  {
    id: 7, word: "Sophisticated",
    pos: "adjective", cambridgeLevel: "C1",
    pronunciation: "/səˈfɪs.tɪ.keɪ.tɪd/",
    citation: "Nature park challenge (line 6)",
    definition: "Cleverly designed and modern; not simple.",
    b1Explain: "Cleverly designed and advanced rather than simple.",
    sentence: "The organizers used a sophisticated digital app to give clues to the runners."
  },
  {
    id: 8, word: "Time-management",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈtaɪm ˌmæn.ɪdʒ.mənt/",
    citation: "Nature park challenge (line 8)",
    definition: "Planning your time well so you finish all your work before the deadline.",
    b1Explain: "Planning your hours wisely so you finish all tasks before the deadline.",
    sentence: "Good time-management allowed our group to finish the puzzle with five minutes to spare."
  },
  {
    id: 9, word: "Customised",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈkʌs.tə.maɪzd/",
    citation: "City solutions (line 3)",
    definition: "Specially made or arranged to fit the exact needs of a group.",
    b1Explain: "Made specially to fit your exact group and preferences.",
    sentence: "The company designed a customised tour so visitors could see their favourite places."
  },
  {
    id: 10, word: "Complex",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈkɒm.pleks/",
    citation: "City solutions (line 4)",
    definition: "Having many different connected parts and not simple to understand.",
    b1Explain: "Hard to solve quickly because it has many connected parts.",
    sentence: "The city riddle was complex, but our team solved it by sharing ideas."
  },
  {
    id: 11, word: "Brainstorm",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˈbreɪn.stɔːm/",
    citation: "Boat building (line 1)",
    definition: "To meet in a group and share lots of creative ideas quickly.",
    b1Explain: "Sitting together to think of creative ideas freely.",
    sentence: "Before building the cardboard boat, we took ten minutes to brainstorm ideas."
  },
  {
    id: 12, word: "Construct",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/kənˈstrʌkt/",
    citation: "Boat building (line 2)",
    definition: "To build or put pieces together to make something.",
    b1Explain: "To build something carefully using tools and materials.",
    sentence: "The team worked together to construct a strong boat from cardboard and tape."
  },
  {
    id: 13, word: "Decision-making",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/dɪˈsɪʒ.ən ˌmeɪ.kɪŋ/",
    citation: "Boat building (line 3)",
    definition: "The process of choosing the best option as a team.",
    b1Explain: "The way a group chooses what to do next.",
    sentence: "Effective decision-making requires listening to everyone's opinion."
  },
  {
    id: 14, word: "Feedback",
    pos: "uncountable noun", cambridgeLevel: "B1",
    pronunciation: "/ˈfiːd.bæk/",
    citation: "Boat building (line 4)",
    definition: "Helpful advice telling someone what they did well and how to get better.",
    b1Explain: "Telling someone what they did well and how they can improve.",
    sentence: "Constructive feedback helped our teammates build a more stable vessel."
  },
  {
    id: 15, word: "Orienteering",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˌɔː.ri.enˈtɪə.rɪŋ/",
    citation: "Nature park challenge (line 6)",
    definition: "The outdoor sport of finding your way using a map and a compass.",
    b1Explain: "Navigating across outdoor trails using maps.",
    sentence: "We learned orienteering skills so we would not lose our direction in the forest."
  },
  {
    id: 16, word: "Synchronized",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈsɪŋ.krə.naɪzd/",
    citation: "Plank walk slide",
    definition: "Happening or moving together at the exact same time and speed.",
    b1Explain: "Moving together at the same time in harmony.",
    sentence: "In the plank walk, our steps had to be synchronized to stay balanced."
  },
  {
    id: 17, word: "Freestanding",
    pos: "adjective", cambridgeLevel: "C1",
    pronunciation: "/ˌfriːˈstæn.dɪŋ/",
    citation: "Tower of Power slide",
    definition: "Standing up on its own without leaning against a wall or pole.",
    b1Explain: "Standing upright on its own without leaning against a wall.",
    sentence: "The craft stick tower must remain freestanding for at least thirty seconds."
  },
  {
    id: 18, word: "Structural stability",
    pos: "noun phrase", cambridgeLevel: "C1",
    pronunciation: "/ˈstrʌk.tʃər.əl stəˈbɪl.ə.ti/",
    citation: "Tower of Power slide",
    definition: "How strong and stable an object is so it does not fall or break.",
    b1Explain: "How well an object can stay standing without breaking.",
    sentence: "We added wider wooden sticks to the base to improve the structural stability."
  },
  {
    id: 19, word: "Venture",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈven.tʃər/",
    citation: "City solutions (line 2)",
    definition: "To go into a new or unfamiliar place with curiosity and courage.",
    b1Explain: "To go into a new place with curiosity and courage.",
    sentence: "Teams venture into the city centre to search for the hidden envelopes."
  },
  {
    id: 20, word: "Beat the clock",
    pos: "idiom / phrase", cambridgeLevel: "B2",
    pronunciation: "/biːt ðə klɒk/",
    citation: "City solutions (line 2)",
    definition: "To finish a task or game before the time runs out.",
    b1Explain: "Finishing quickly before time is over.",
    sentence: "We had to run through the park to beat the clock and submit our answer sheet."
  },
  {
    id: 21, word: "Acquaintance",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/əˈkweɪn.təns/",
    citation: "Classroom handwritten notes",
    definition: "Someone you know a little, but who is not a close friend.",
    b1Explain: "Someone you recognize and greet, but don't know deeply.",
    sentence: "The event helped turn an office acquaintance into a reliable work partner."
  },
  {
    id: 22, word: "Disorganised",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/dɪsˈɔː.ɡə.naɪzd/",
    citation: "HR Memo (Page 3)",
    definition: "Messy, poorly planned, and not working in an orderly way.",
    b1Explain: "Chaotic and messy without clear planning.",
    sentence: "Last year's event was disorganised, so we need a strict schedule this time."
  },
  {
    id: 23, word: "Tension",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈten.ʃən/",
    citation: "Team dynamics (line 2)",
    definition: "A nervous, uncomfortable feeling between people who disagree.",
    b1Explain: "Stress and uncomfortable feelings between colleagues when they disagree.",
    sentence: "Open communication during the event helped release all workplace tension among colleagues."
  },
  {
    id: 24, word: "Clue",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/kluː/",
    citation: "Nature park challenge (line 5)",
    definition: "A helpful sign or hint that helps you find an answer or solve a puzzle.",
    b1Explain: "A helpful hint that guides you to find the correct answer or secret spot.",
    sentence: "Each group received a written clue directing them to their next outdoor challenge."
  },
  {
    id: 25, word: "Outfitted with",
    pos: "phrasal verb", cambridgeLevel: "C1",
    pronunciation: "/ˈaʊt.fɪt.ɪd wɪð/",
    citation: "Boat building safety brief",
    definition: "Given all the clothes, tools, or safety gear needed for an activity.",
    b1Explain: "Provided with all the equipment and safety gear required for an activity.",
    sentence: "Before boarding the river raft, every employee was outfitted with a life jacket and helmet."
  }
];

/* SESSION 11: STUDY ADVICE & SECOND CONDITIONAL (28 VOCABULARY WORDS & PHRASES) */
const VOCAB_SESSION_11 = [
  {
    id: 101, word: "Paraphrase",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈpær.ə.freɪz/",
    citation: "Maggie's Advice (Slide 4)",
    definition: "To explain what someone said or wrote using your own simpler words.",
    b1Explain: "Explaining the same idea in simpler or different English words.",
    sentence: "If you don't know the exact word, paraphrase it by describing what it does."
  },
  {
    id: 102, word: "Lack of confidence",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/læk əv ˈkɒn.fɪ.dəns/",
    citation: "Teacher Insights (Slide 4)",
    definition: "Feeling shy, nervous, or unsure about your own abilities.",
    b1Explain: "Feeling shy or afraid to speak because you worry about making mistakes.",
    sentence: "His hesitation in meetings was caused by a lack of confidence, not poor English."
  },
  {
    id: 103, word: "Essential",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪˈsen.ʃəl/",
    citation: "Maggie's Quote (Slide 4)",
    definition: "Very important and completely necessary.",
    b1Explain: "Something that you must have or that is extremely important.",
    sentence: "Maggie reminded the class that making mistakes is an essential part of learning."
  },
  {
    id: 104, word: "Translate",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/trænzˈleɪt/",
    citation: "Slide 4 Discussion",
    definition: "To improve, get better, or move forward in what you are learning.",
    b1Explain: "Converting words from your native language into English.",
    sentence: "Translating word-for-word in your head slows down your speaking speed."
  },
  {
    id: 105, word: "Native language",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈneɪ.tɪv ˈlæŋ.ɡwɪdʒ/",
    citation: "Slide 4 Discussion",
    definition: "To read and study your lessons again before taking an exam.",
    b1Explain: "The primary language of your home country.",
    sentence: "Try to think in English rather than translating from your native language."
  },
  {
    id: 106, word: "Identify",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/aɪˈden.tɪ.faɪ/",
    citation: "Language Focus (Slide 5, Sentence a)",
    definition: "The correct way to make the sounds of words when speaking.",
    b1Explain: "To find out exactly what or who something is.",
    sentence: "If I had this problem, I would try to identify the reason first."
  },
  {
    id: 107, word: "Imaginary",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪˈmædʒ.ɪ.nər.i/",
    citation: "Language Focus (Slide 5, Q2)",
    definition: "A fast course where you study for many hours each day in a short time.",
    b1Explain: "Not real; existing only in your thoughts or imagination.",
    sentence: "The second conditional is used for imaginary or unreal situations in the present."
  },
  {
    id: 108, word: "Second conditional",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈsek.ənd kənˈdɪʃ.ən.əl/",
    citation: "Slide 6 Grammar Focus",
    definition: "To write down key facts or words quickly while listening to a teacher.",
    b1Explain: "The grammar pattern we use to imagine situations and give advice.",
    sentence: "We practiced the second conditional to give thoughtful study advice to our classmates."
  },
  {
    id: 109, word: "Stressed out",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/strest aʊt/",
    citation: "Handout Page 1 (Audio 1)",
    definition: "Difficulty in communicating because people speak different languages.",
    b1Explain: "Feeling overwhelmed, worried, and unable to rest.",
    sentence: "She was stressed out because she had three difficult exams in the same week."
  },
  {
    id: 110, word: "Fluency",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈfluː.ən.si/",
    citation: "Teacher Insights",
    definition: "The first language that you learned as a baby from your parents.",
    b1Explain: "Speaking smoothly without stopping or searching for words.",
    sentence: "Joining daily English conversation groups quickly boosted her speaking fluency."
  },
  {
    id: 111, word: "Overcome",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.vəˈkʌm/",
    citation: "Sailing Team Takeaway",
    definition: "Able to speak a language easily, smoothly, and without stopping.",
    b1Explain: "To defeat a problem or conquer a personal fear.",
    sentence: "He worked with a speaking partner to overcome his fear of public presentations."
  },
  {
    id: 112, word: "Promotion",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/prəˈməʊ.ʃən/",
    citation: "Handout Page 2 (Scenario 3)",
    definition: "A person who has spoken a language from the time they were a child.",
    b1Explain: "Getting a higher and better-paid position at work.",
    sentence: "If he improved his workplace English skills, he would get a promotion."
  },
  {
    id: 113, word: "Speaking club",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈspiː.kɪŋ klʌb/",
    citation: "Maggie's Advice",
    definition: "Speaking or writing correctly without making mistakes.",
    b1Explain: "A friendly meeting where learners practice talking in English.",
    sentence: "If I were you, I would join a local speaking club every Saturday."
  },
  {
    id: 114, word: "Excerpt",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈek.sɜːpt/",
    citation: "Language Focus Slide 5 Header",
    definition: "To learn and remember more new words to speak and write better.",
    b1Explain: "A short piece taken from a conversation or recording.",
    sentence: "Listen to the excerpts from the teacher's conversation and complete the sentences."
  },
  {
    id: 115, word: "Prediction",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/prɪˈdɪk.ʃən/",
    citation: "Slide 4 Header",
    definition: "A grammar form used to talk about imaginary or unlikely situations in the present or future.",
    b1Explain: "A guess about what will happen next based on what you already know.",
    sentence: "Before listening to the audio, the teacher asked us to make a prediction."
  },
  {
    id: 116, word: "Hypothetical",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˌhaɪ.pəˈθet.ɪ.kəl/",
    citation: "Grammar Notes",
    definition: "A friendly phrase used to give advice to someone about what you would do.",
    b1Explain: "Imagined as an example, not real or fact.",
    sentence: "We discussed a hypothetical situation: what would you do if you found a wallet in the street?"
  },
  {
    id: 117, word: "Complain",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/kəmˈpleɪn/",
    citation: "Handout Page 2 (Scenario 2)",
    definition: "To decide on clear things you want to achieve in the future.",
    b1Explain: "To say you are not satisfied with food, service, or treatment.",
    sentence: "If I were in your position, I would complain to the manager immediately."
  },
  {
    id: 118, word: "If I were you",
    pos: "idiom / phrase", cambridgeLevel: "B1",
    pronunciation: "/ɪf aɪ wɜː juː/",
    citation: "Slide 5 & 6 Advice Formula",
    definition: "The greatest amount of time allowed to finish something.",
    b1Explain: "The standard phrase used in English to give someone advice.",
    sentence: "If I were you, I would ask the teacher for extra pronunciation tips."
  },
  {
    id: 119, word: "Study tips",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈstʌd.i tɪps/",
    citation: "Handout Title",
    definition: "A clever trick or way to help your brain remember facts easily.",
    b1Explain: "Useful little pieces of advice on how to study better.",
    sentence: "Maggie shared three valuable study tips to help students remember grammar."
  },
  {
    id: 120, word: "Confidence",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈkɒn.fɪ.dəns/",
    citation: "Slide 4",
    definition: "Small cards with a question or word on one side and the answer on the other.",
    b1Explain: "Belief in your own power and ability to do something well.",
    sentence: "Practicing short conversations every day built her confidence immensely."
  },
  {
    id: 121, word: "Underlying reason",
    pos: "noun phrase", cambridgeLevel: "C1",
    pronunciation: "/ˌʌn.dəˈlaɪ.ɪŋ ˈriː.zən/",
    citation: "Teacher Analysis",
    definition: "A friend who studies together with you so you can help each other.",
    b1Explain: "The deep, real cause behind a difficulty that people don't notice at first.",
    sentence: "Before prescribing a solution, Maggie looked for the underlying reason for his hesitation."
  },
  {
    id: 122, word: "Acquiring",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/əˈkwaɪə.rɪŋ/",
    citation: "British Council Methodology",
    definition: "Studying and learning on your own without a teacher in a classroom.",
    b1Explain: "Gradually picking up a new language skill through daily use.",
    sentence: "Acquiring conversational fluency takes regular practice and active listening."
  },
  {
    id: 123, word: "Have a seat",
    pos: "idiom / phrase", cambridgeLevel: "B1",
    pronunciation: "/hæv ə siːt/",
    citation: "Listening phrases (portal)",
    definition: "Doing something regularly in the same good way over time.",
    b1Explain: "A polite invitation to sit down comfortably.",
    sentence: "Please come into the office and have a seat while we review the notes."
  },
  {
    id: 124, word: "A life saver",
    pos: "idiom / phrase", cambridgeLevel: "B2",
    pronunciation: "/ə ˈlaɪf ˌseɪ.vər/",
    citation: "Listening phrases (portal)",
    definition: "Feeling annoyed and impatient because you cannot achieve what you want.",
    b1Explain: "A person who helps you out of a stressful problem just in time.",
    sentence: "Thank you for explaining the grammar before the exam, you are a life saver!"
  },
  {
    id: 125, word: "Put somebody on the spot",
    pos: "idiom / phrase", cambridgeLevel: "C1",
    pronunciation: "/pʊt ˈsʌm.bə.di ɒn ðə spɒt/",
    citation: "Listening phrases (portal)",
    definition: "The feeling of excitement and energy that makes you want to work hard.",
    b1Explain: "Making someone feel uncomfortable by asking a sudden hard question in front of others.",
    sentence: "The teacher didn't want to put the quiet student on the spot during speaking class."
  },
  {
    id: 126, word: "Boost somebody's confidence",
    pos: "verb phrase", cambridgeLevel: "B2",
    pronunciation: "/buːst ˈsʌm.bə.diz ˈkɒn.fɪ.dəns/",
    citation: "Listening phrases (portal)",
    definition: "To succeed in dealing with a problem or difficulty.",
    b1Explain: "Helping someone feel more certain and positive about their abilities.",
    sentence: "Positive feedback from her speaking partner helped boost her confidence enormously."
  },
  {
    id: 127, word: "A round of applause",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ə ˌraʊnd əv əˈplɔːz/",
    citation: "Listening phrases (portal)",
    definition: "To stop doing unhelpful things that you do regularly.",
    b1Explain: "When the group or audience claps together to appreciate someone.",
    sentence: "Let's give our guest speaker a warm round of applause for sharing their study journey."
  },
  {
    id: 128, word: "World class",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˌwɜːld ˈklɑːs/",
    citation: "Listening phrases (portal)",
    definition: "To give yourself a nice treat after doing hard work.",
    b1Explain: "Of top international standard, among the very best.",
    sentence: "By analyzing every mistake, the American sailing team developed world class skills."
  }
];

/* SECOND CONDITIONAL: 9 INTERACTIVE SENTENCES (SLIDE 6) */
const SECOND_CONDITIONAL_EXERCISES = [
  {
    id: 1,
    prefix: "1. If I",
    gap1Label: "(be)",
    gap1Key: ["were", "was"],
    mid: "you, I",
    gap2Label: "(not go)",
    gap2Key: ["wouldn't go", "would not go"],
    suffix: "out with him.",
    fullSpoken: "If I were you, I wouldn't go out with him."
  },
  {
    id: 2,
    prefix: "2. I",
    gap1Label: "(buy)",
    gap1Key: ["would buy", "'d buy"],
    mid: "the blue suit if I",
    gap2Label: "(be)",
    gap2Key: ["were", "was"],
    suffix: "you.",
    fullSpoken: "I would buy the blue suit if I were you."
  },
  {
    id: 3,
    prefix: "3. If the weather",
    gap1Label: "(be)",
    gap1Key: ["was", "were"],
    mid: "nicer, we",
    gap2Label: "(have)",
    gap2Key: ["would have", "'d have"],
    suffix: "a picnic.",
    fullSpoken: "If the weather was nicer, we would have a picnic."
  },
  {
    id: 4,
    prefix: "4. She",
    gap1Label: "(go)",
    gap1Key: ["would go", "'d go"],
    mid: "by plane if it",
    gap2Label: "(be)",
    gap2Key: ["was", "were"],
    suffix: "cheaper.",
    fullSpoken: "She would go by plane if it was cheaper."
  },
  {
    id: 5,
    prefix: "5. What",
    gap1Label: "(do)",
    gap1Key: ["would you do", "would you do?"],
    mid: "if you",
    gap2Label: "(find)",
    gap2Key: ["found"],
    suffix: "a wallet in the street?",
    fullSpoken: "What would you do if you found a wallet in the street?"
  },
  {
    id: 6,
    prefix: "6. I",
    gap1Label: "(do)",
    gap1Key: ["would do", "'d do"],
    mid: "it myself if I",
    gap2Label: "(have)",
    gap2Key: ["had"],
    suffix: "more time.",
    fullSpoken: "I would do it myself if I had more time."
  },
  {
    id: 7,
    prefix: "7. If you",
    gap1Label: "(have)",
    gap1Key: ["had"],
    mid: "a good job, you",
    gap2Label: "(can)",
    gap2Key: ["could", "would be able to"],
    suffix: "save some money.",
    fullSpoken: "If you had a good job, you could save some money."
  },
  {
    id: 8,
    prefix: "8. She",
    gap1Label: "(look)",
    gap1Key: ["would look", "'d look"],
    mid: "much better if she",
    gap2Label: "(change)",
    gap2Key: ["changed"],
    suffix: "her hairstyle.",
    fullSpoken: "She would look much better if she changed her hairstyle."
  },
  {
    id: 9,
    prefix: "9. You",
    gap1Label: "(make)",
    gap1Key: ["would make", "'d make"],
    mid: "more friends if you",
    gap2Label: "(join)",
    gap2Key: ["joined"],
    suffix: "a sports club.",
    fullSpoken: "You would make more friends if you joined a sports club."
  }
];

/* PORTAL LISTENING PHRASES MATCH (PICTURE 1) */
const PORTAL_LISTENING_PHRASES = [
  { id: "lp1", phrase: "Have a seat.", meaning: "to invite someone to sit down" },
  { id: "lp2", phrase: "You are a life saver!", meaning: "someone who has been very helpful in a difficult situation" },
  { id: "lp3", phrase: "put somebody on the spot", meaning: "to ask someone to answer a difficult or embarasing question immediately" },
  { id: "lp4", phrase: "boost somebody's confidence", meaning: "to increase someone's belief that they have the ability to be successful" },
  { id: "lp5", phrase: "a round of applause", meaning: "when a lot of people clap at the same time" },
  { id: "lp6", phrase: "world class", meaning: "among the best in the world" }
];

/* PORTAL SENTENCE HALVES (PICTURE 3) */
const PORTAL_SENTENCE_HALVES = [
  { id: "sh1", left: "I would do it myself", right: "if I had more time.", full: "I would do it myself if I had more time." },
  { id: "sh2", left: "If you had a good job,", right: "you could save some money.", full: "If you had a good job, you could save some money." },
  { id: "sh3", left: "She would look much better", right: "if she changed her hairstyle.", full: "She would look much better if she changed her hairstyle." },
  { id: "sh4", left: "You would make more friends", right: "if you joined a sports club.", full: "You would make more friends if you joined a sports club." }
];

/* ADVICE SCENARIOS: "IF I WERE YOU..." (HANDOUT PAGE 2 & SLIDE 4) */
const ADVICE_SCENARIOS_DATA = [
  {
    title: "Student Hesitation & Freezing",
    problem: "A student is too shy to speak during class discussions and freezes up.",
    advice: "If I were you, I would teach him to paraphrase and explain that mistakes are an essential part of learning.",
    speakerTip: "Maggie's Teacher Advice (Slide 4)"
  },
  {
    title: "Translating In Head",
    problem: "I translate every sentence word-for-word from my native language, causing pauses.",
    advice: "If I were you, I would focus on fluency rather than perfection and practice thinking directly in English.",
    speakerTip: "Native Language Barrier (Slide 4)"
  },
  {
    title: "Public Speaking & Career Advancement",
    problem: "I want to get a promotion at work, but giving presentations makes me nervous.",
    advice: "If I were in your position, I would join an English speaking club every weekend to build my confidence.",
    speakerTip: "Workplace Career Scenario"
  },
  {
    title: "Unacceptable Customer Service",
    problem: "The staff at the local shop were unhelpful and dismissive of my complaint.",
    advice: "If I were you, I would complain calmly to the store manager and explain the exact issue.",
    speakerTip: "Everyday Consumer Advice (Handout Page 2)"
  },
  {
    title: "Overwhelming Study Pressure",
    problem: "I feel completely stressed out with three exams and assignment deadlines this week.",
    advice: "If I had that much study work, I would schedule 25-minute focus intervals with short breaks to stay calm.",
    speakerTip: "Study Skills (Handout Page 1)"
  },
  {
    title: "Fear of Making Errors in Public",
    problem: "I feel embarrassed whenever the teacher points out a mistake in my English sentences.",
    advice: "If I were you, I would remember the American sailing team story: analyze mistakes calmly as steps to victory.",
    speakerTip: "Championship Mindset (Slide 4)"
  }
];

/* FIND SOMEONE WHO CLASSROOM SURVEY (PICTURE 4) */
const FIND_SOMEONE_WHO_DATA = [
  {
    id: 1,
    statement: "... is studying English to get a promotion",
    askQuestion: "Are you studying English to get a promotion?",
    defaultName: "I",
    defaultFound: true
  },
  {
    id: 2,
    statement: "... has an English speaking friend they speak English with",
    askQuestion: "Do you have an English-speaking friend you speak English with?",
    defaultName: "Osama",
    defaultFound: true
  },
  {
    id: 3,
    statement: "... has watched a film in English",
    askQuestion: "Have you ever watched a film in English?",
    defaultName: "Osama",
    defaultFound: true
  },
  {
    id: 4,
    statement: "... has read a book in English",
    askQuestion: "Have you read a book in English?",
    defaultName: "",
    defaultFound: false
  },
  {
    id: 5,
    statement: "... has translated an English song",
    askQuestion: "Have you ever translated an English song into your native language?",
    defaultName: "Mariem",
    defaultFound: true
  },
  {
    id: 6,
    statement: "... has chatted in English online or in a social network",
    askQuestion: "Have you chatted in English online or in a social network?",
    defaultName: "Mariem",
    defaultFound: true
  },
  {
    id: 7,
    statement: "... has played a computer game in English",
    askQuestion: "Have you played a computer game in English?",
    defaultName: "",
    defaultFound: false
  },
  {
    id: 8,
    statement: "... goes to a speaking club regularly",
    askQuestion: "Do you go to an English speaking club regularly?",
    defaultName: "",
    defaultFound: false
  },
  {
    id: 9,
    statement: "... has been to an English-speaking country",
    askQuestion: "Have you ever been to an English-speaking country?",
    defaultName: "",
    defaultFound: false
  }
];

/* SESSION 10 READING MATCH KEY */
const READING_MATCH_ANSWERS = {
  a: "Boat building",
  b: "Nature park challenge",
  c: "City solutions",
  d: "Nature park challenge",
  e: "Nature park challenge",
  f: "Boat building"
};

/* MEDIA HUB ITEMS & IMAGE PATHS */
const MEDIA_HUB_ITEMS = [
  {
    key: "portal_listening_phrases",
    imgUrl: "./assets/images/portal_listening_phrases.jpg",
    title: "Phrases from the Listening",
    source: "British Council Portal • Picture 1",
    desc: "Match listening expressions: have a seat, life saver, put on the spot, world class.",
    badge: "Portal Screenshot"
  },
  {
    key: "portal_second_conditional_inputs",
    imgUrl: "./assets/images/portal_second_conditional_inputs.jpg",
    title: "Second Conditional Sentences",
    source: "British Council Portal • Picture 2",
    desc: "Complete sentences 1–5 with correct verb forms in brackets.",
    badge: "Portal Screenshot"
  },
  {
    key: "portal_second_conditional_halves",
    imgUrl: "./assets/images/portal_second_conditional_halves.jpg",
    title: "Match Sentence Halves",
    source: "British Council Portal • Picture 3",
    desc: "Interactive matching of condition clauses and result clauses.",
    badge: "Portal Screenshot"
  },
  {
    key: "handout_find_someone_who",
    imgUrl: "./assets/images/handout_find_someone_who.jpg",
    title: "Find Someone Who... Handout",
    source: "Classroom Paper Handout • Picture 4",
    desc: "Printed survey with classroom partner notes (Osama, Mariem).",
    badge: "Classroom Photo"
  }
];

/* ==========================================================================
   SESSION 1: DESCRIBING THINGS & WORKSHOP TOOLS (28 VOCABULARY WORDS)
   Official British Council Intermediate B1 Handout: ARB_B1_04_I021CGL
   ========================================================================== */
const VOCAB_SESSION_1 = [
  {
    id: 201, word: "Bargain over the price",
    pos: "verb phrase", cambridgeLevel: "C1",
    pronunciation: "/ˈbɑː.ɡɪn ˈəʊ.vər ðə praɪs/",
    citation: "Student Notebook (Session 1)",
    definition: "To talk with a seller to agree on a lower, cheaper price.",
    b1Explain: "Talking with a seller to get a cheaper price for what you want to buy.",
    sentence: "At the traditional market, shoppers often bargain over the price of handmade crafts."
  },
  {
    id: 202, word: "Made of",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/meɪd ɒv/",
    citation: "Handout Page 1 & Smartboard Slide 4",
    definition: "Used when you can still easily see the original material (like wood or glass).",
    b1Explain: "Used when the material hasn't changed its form (you can still see the wood, metal, or glass).",
    sentence: "This sturdy carpenter's workbench is made of solid beech wood."
  },
  {
    id: 203, word: "Made from",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/meɪd frɒm/",
    citation: "Handout Page 1 & Smartboard Slide 4",
    definition: "Used when the original material changes completely into something new (like paper from wood).",
    b1Explain: "Used when the original material is transformed into something new (like trees into paper).",
    sentence: "Cardboard boxes are made from recycled wood pulp and fibers."
  },
  {
    id: 204, word: "Renovate",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈren.ə.veɪt/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "To repair and paint an old room or building so it looks new again.",
    b1Explain: "To fix up and modernise an old room or house so it looks brand new.",
    sentence: "They bought an old country cottage and spent three months renovating the kitchen."
  },
  {
    id: 205, word: "DIY",
    pos: "noun / abbreviation", cambridgeLevel: "B1",
    pronunciation: "/ˌdiː.aɪˈwaɪ/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "Do-It-Yourself: repairing, painting, or building things yourself at home.",
    b1Explain: "Doing home improvements and building furniture yourself at home.",
    sentence: "He enjoys doing DIY on weekends and built his own wooden bookshelves."
  },
  {
    id: 206, word: "Craft",
    pos: "noun / verb", cambridgeLevel: "B1",
    pronunciation: "/krɑːft/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "An activity that needs skill in making nice things by hand.",
    b1Explain: "Making beautiful or practical objects with your own hands.",
    sentence: "She creates traditional ceramic crafts and sells them at the weekend craft fair."
  },
  {
    id: 207, word: "Handsaw",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈhænd.sɔː/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A sharp hand tool with metal teeth used to cut wood manually.",
    b1Explain: "A sharp hand tool with metal teeth used to cut wooden boards by hand.",
    sentence: "He used a sharp handsaw to trim the wooden planks for the garden fence."
  },
  {
    id: 208, word: "Screwdriver",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈskruːˌdraɪ.vər/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A handheld tool used to turn screws in or out.",
    b1Explain: "A handheld tool with a plastic grip used to turn screws in or out.",
    sentence: "I need a flat screwdriver to tighten the loose hinges on the kitchen cupboard."
  },
  {
    id: 209, word: "Measuring tape",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈmeʒ.ər.ɪŋ teɪp/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A flexible metal ribbon used for measuring lengths and room sizes.",
    b1Explain: "A flexible metal ruler that pulls out of a case to measure room dimensions.",
    sentence: "Always measure the wall with a measuring tape before buying a new wardrobe."
  },
  {
    id: 210, word: "Drill",
    pos: "noun / verb", cambridgeLevel: "B1",
    pronunciation: "/drɪl/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A heavy tool with a metal head used for hitting nails into wood.",
    b1Explain: "An electric power tool that rotates fast to make holes in walls or timber.",
    sentence: "He used an electric drill to make two clean holes in the wall for the picture frame."
  },
  {
    id: 211, word: "Spirit level",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈspɪr.ɪt ˌlev.əl/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A metal tool with two handles used for gripping, pulling, or bending wire.",
    b1Explain: "A long straight tool with a floating green bubble that shows if a shelf or picture is straight.",
    sentence: "Place the spirit level on the shelf to confirm the bubble is resting right in the middle."
  },
  {
    id: 212, word: "Soldering iron",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈsəʊl.dər.ɪŋ ˌaɪən/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "Protective glasses worn to keep your eyes safe from dust or flying pieces.",
    b1Explain: "A heated metal tool used to melt soft metal and join electrical wires or computer boards.",
    sentence: "He fixed the loose headphone wire using a soldering iron and wire cutters."
  },
  {
    id: 213, word: "Brackets and screws",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbræk.ɪts ænd skruːz/",
    citation: "Handout Page 2 (Listening 1)",
    definition: "A small folding ladder that stands on its own without leaning on a wall.",
    b1Explain: "Right-angle metal supports and threaded pins used to hold wall shelves securely.",
    sentence: "You will need four steel brackets and screws to put up these heavy book shelves."
  },
  {
    id: 214, word: "Sledgehammer",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈsledʒˌhæm.ər/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "Small thin metal pins with a sharp point, hammered into wood to join pieces.",
    b1Explain: "A very heavy hammer with a long handle used for breaking down brick or concrete walls.",
    sentence: "The builders used a sledgehammer to knock down the partition wall between the rooms."
  },
  {
    id: 215, word: "Nail gun",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈneɪl ɡʌn/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "Small metal pins with a spiral line around them, turned with a screwdriver.",
    b1Explain: "A tool that shoots nails into wood quickly so you don't need to swing a hammer.",
    sentence: "The carpenter used an air-powered nail gun to assemble the timber roof frame in minutes."
  },
  {
    id: 216, word: "Rubber handle",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈrʌb.ər ˈhæn.dəl/",
    citation: "Handout Page 2 (Listening 2)",
    definition: "A strong box or case used for storing and carrying tools neatly.",
    b1Explain: "A soft grip on a tool that stops your hands from slipping and protects against electric shocks.",
    sentence: "The wire cutters have a thick rubber handle to ensure a firm, safe grip while cutting."
  },
  {
    id: 217, word: "Pliers",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/ˈplaɪ.əz/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A metal hand tool with a shaped opening used to turn nuts and bolts.",
    b1Explain: "A scissor-like tool with flat jaws used to hold, pull, or bend wire.",
    sentence: "He held the metal nut securely with a pair of pliers while tightening the bolt."
  },
  {
    id: 218, word: "Wire cutters",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈwaɪə ˌkʌt.əz/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A power tool used to make holes in hard materials like wood or walls.",
    b1Explain: "A sharp hand tool shaped like pliers used to snip through electrical cables cleanly.",
    sentence: "Use these insulated wire cutters to trim the excess speaker wire safely."
  },
  {
    id: 219, word: "Safety catch",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈseɪf.ti kætʃ/",
    citation: "Handout Page 2 (Listening 3)",
    definition: "A tool with soft bristles used for putting paint onto walls or wood.",
    b1Explain: "A small switch on a power tool that locks it so it cannot start or shoot accidentally.",
    sentence: "Always engage the safety catch on the nail gun before setting it down on the table."
  },
  {
    id: 220, word: "Hacksaw",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈhæk.sɔː/",
    citation: "Student Notebook (Session 1)",
    definition: "Strong paper with rough sand on one side, used to make wood smooth.",
    b1Explain: "A metal saw with tiny sharp teeth used for cutting metal pipes and plastic tubes.",
    sentence: "He used a hacksaw to cut through the copper water pipe under the bathroom sink."
  },
  {
    id: 221, word: "Chisel",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈtʃɪz.əl/",
    citation: "Student Notebook (Session 1)",
    definition: "A sharp metal hand tool hit with a hammer to carve or cut wood or stone.",
    b1Explain: "A sharp flat steel blade used with a hammer to carve shapes or cut grooves in wood.",
    sentence: "The woodworker used a sharp chisel to carve neat grooves into the wooden cabinet door."
  },
  {
    id: 222, word: "Wrench",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/rentʃ/",
    citation: "Student Notebook (Session 1)",
    definition: "A metal tool with adjustable parts used to hold and turn nuts, bolts, or pipes.",
    b1Explain: "A metal tool that grips nuts and bolts so you can turn, tighten, or loosen them.",
    sentence: "He tightened the leaking plumbing pipe under the kitchen sink with an adjustable wrench."
  },
  {
    id: 223, word: "Answering machine",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈɑːn.sə.rɪŋ məˌʃiːn/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small machine that answers phone calls and records messages when you are away.",
    b1Explain: "A machine that records voice messages when you are away from your telephone.",
    sentence: "Please leave a brief message on my answering machine and I will phone you back."
  },
  {
    id: 224, word: "Laptop computer",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈlæp.tɒp kəmˌpjuː.tər/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small, portable computer that you can carry and use anywhere.",
    b1Explain: "A portable computer with a battery and screen that folds shut to carry anywhere.",
    sentence: "She packed her laptop computer into her backpack before heading to the British Council library."
  },
  {
    id: 225, word: "Digital camera",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈdɪdʒ.ɪ.təl ˈkæm.rə/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A camera that takes photos and saves them on an electronic memory card.",
    b1Explain: "An electronic camera that stores high-resolution photos on an internal memory card.",
    sentence: "He took sharp architectural photos using a high-end digital camera."
  },
  {
    id: 226, word: "Vacuum cleaner",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈvæk.juːm ˌkliː.nər/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "An electric machine that cleans floors and carpets by sucking up dust.",
    b1Explain: "An electrical household machine that sucks up dust and dirt from floors and rugs.",
    sentence: "He turned on the vacuum cleaner to clean the workshop floor after finishing the woodwork."
  },
  {
    id: 227, word: "Text message",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈtekst ˌmes.ɪdʒ/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A short written message sent from one mobile phone to another.",
    b1Explain: "A short written message sent from one mobile phone to another.",
    sentence: "Send me a quick text message when you arrive outside the British Council building."
  },
  {
    id: 228, word: "Mobile phone",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌməʊ.baɪl ˈfəʊn/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small phone that you can carry with you to make calls and use the internet.",
    b1Explain: "A portable cellular smartphone carried in your pocket.",
    sentence: "Please switch your mobile phone to silent mode during the English listening test."
  }
];

/* ==========================================================================
   SESSION 1: DESCRIBING EVERYDAY OBJECTS FORMULAS (HANDOUT PAGE 1)
   ========================================================================== */
const SESSION_1_DESCRIBING_OBJECTS = {
  formulas: [
    { pattern: "It's got a + [noun phrase]", example: "It's got a rubber handle.", usage: "Describing physical features, grips, switches, or components." },
    { pattern: "It's used for + [verb-ing]", example: "It's used for cutting electrical wires.", usage: "Explaining the practical purpose or function of a tool." },
    { pattern: "It's made of + [material]", example: "It's made of stainless steel and plastic.", usage: "Stating materials when the original substance does not chemically change." },
    { pattern: "It's made from + [material]", example: "Paper is made from wood pulp.", usage: "Stating materials when the original substance undergoes transformation." },
    { pattern: "It's a machine for + [verb-ing]", example: "It's a machine for washing dishes.", usage: "Describing automated or motorized appliances." },
    { pattern: "It's a person who + [verb phrase]", example: "It's a person who builds wooden furniture.", usage: "Defining professions, craftsmen, and specialists." },
    { pattern: "It's a thing that + [verb phrase]", example: "It's a thing that measures horizontal surfaces.", usage: "Describing inanimate objects without naming them directly." },
    { pattern: "It's a place where + [clause]", example: "It's a place where DIY tools are stored.", usage: "Describing locations, workshops, or studios." }
  ],
  riddles: [
    {
      id: "rid1",
      tool: "Spirit level",
      clues: [
        "It's a thing that checks if surfaces are flat and horizontal.",
        "It's got a small glass tube with green liquid and an air bubble in the middle.",
        "It's used for putting up wall shelves straight."
      ],
      madeOf: "plastic or aluminum",
      audio: "It's a thing that checks if surfaces are level. It's got a bubble in the middle."
    },
    {
      id: "rid2",
      tool: "Soldering iron",
      clues: [
        "It's an electrical tool with a heated pointed metal tip.",
        "It's used for sticking bits of metal or wires together.",
        "It looks somewhat like a glue gun, but melts metal solder."
      ],
      madeOf: "metal with a heat-resistant plastic handle",
      audio: "It's an electrical tool used for sticking bits of metal together."
    },
    {
      id: "rid3",
      tool: "Nail gun",
      clues: [
        "It's a machine for shooting nails into timber quickly.",
        "It's got a safety catch so it doesn't fire accidentally.",
        "It means you don't need to swing a heavy hammer."
      ],
      madeOf: "heavy-duty steel and hardened plastic",
      audio: "It's a power tool for shooting nails into wood so you don't need a hammer."
    },
    {
      id: "rid4",
      tool: "Wire cutters",
      clues: [
        "It's a hand tool that looks like pliers with sharp angled blades.",
        "It's got a thick rubber handle for electrical insulation and firm grip.",
        "It's used for cutting copper wires and electrical cables."
      ],
      madeOf: "hardened steel and rubber",
      audio: "It's a hand tool with a rubber handle used for cutting electrical wires."
    },
    {
      id: "rid5",
      tool: "Measuring tape",
      clues: [
        "It's got a flexible metal ribbon marked with centimeters and inches.",
        "It's used for measuring the height and width of walls and furniture.",
        "It retracts automatically into a compact plastic case."
      ],
      madeOf: "flexible steel ribbon inside a plastic casing",
      audio: "It's a flexible metal ruler that retracts into a case for measuring distances."
    },
    {
      id: "rid6",
      tool: "Drill",
      clues: [
        "It's a power tool with a spinning pointed metal bit.",
        "It's used for making round holes in bricks, concrete, or wood.",
        "It's essential for installing wall plugs and hanging heavy shelves."
      ],
      madeOf: "hardened steel, electric motor, and durable casing",
      audio: "It's a motorized tool used for making round holes in walls and wood."
    }
  ]
};

/* ==========================================================================
   SESSION 1: RELATIVE CLAUSES & CHAINING LAB
   Student Notebooks (Pages 5 & 6) & Handout
   ========================================================================== */
const SESSION_1_RELATIVE_CLAUSES = {
  combos: [
    {
      id: "rc1",
      sentenceA: "I bought a screwdriver.",
      sentenceB: "It has a magnetic tip.",
      relativePronoun: "which / that",
      combined: "I bought a screwdriver which has a magnetic tip.",
      spoken: "I bought a screwdriver which has a magnetic tip."
    },
    {
      id: "rc2",
      sentenceA: "He spoke to the carpenter.",
      sentenceB: "He built our garden shed.",
      relativePronoun: "who / that",
      combined: "He spoke to the carpenter who built our garden shed.",
      spoken: "He spoke to the carpenter who built our garden shed."
    },
    {
      id: "rc3",
      sentenceA: "This is the workshop.",
      sentenceB: "We store all our DIY power tools here.",
      relativePronoun: "where",
      combined: "This is the workshop where we store all our DIY power tools.",
      spoken: "This is the workshop where we store all our DIY power tools."
    },
    {
      id: "rc4",
      sentenceA: "She uses an adhesive glue.",
      sentenceB: "It dries in thirty seconds.",
      relativePronoun: "which / that",
      combined: "She uses an adhesive glue which dries in thirty seconds.",
      spoken: "She uses an adhesive glue which dries in thirty seconds."
    }
  ],
  chaining: [
    {
      id: "ch1",
      title: "3-Sentence Workshop Chain",
      step1: "I have a friend.",
      step2: "He owns a spacious workshop.",
      step3: "The workshop contains antique woodworking tools.",
      chainedResult: "I have a friend who owns a spacious workshop which contains antique woodworking tools.",
      rule: "Combines 3 ideas using 'who' (person) + 'which' (place/thing)."
    },
    {
      id: "ch2",
      title: "3-Sentence Studio Chain",
      step1: "She hired an architect.",
      step2: "The architect designed a solar studio.",
      step3: "The solar studio was built from recycled timber.",
      chainedResult: "She hired an architect who designed a solar studio which was built from recycled timber.",
      rule: "Combines 3 ideas using 'who' (subject) + 'which' (passive relative clause)."
    },
    {
      id: "ch3",
      title: "3-Sentence Craftsman Chain",
      step1: "We met an artisan.",
      step2: "The artisan crafts leather bags.",
      step3: "The bags are sold at international exhibitions.",
      chainedResult: "We met an artisan who crafts leather bags which are sold at international exhibitions.",
      rule: "Combines 3 ideas using 'who' + 'which' with present simple actions."
    }
  ]
};

/* ==========================================================================
   SESSION 1: LISTENING CONVERSATIONS & GAP-FILL EXERCISE (HANDOUT PAGE 2)
   ========================================================================== */
const SESSION_1_LISTENING_GAPS = [
  {
    id: "conv1",
    title: "Conversation 1: Putting Up Shelves",
    toolsNeeded: "Spirit level",
    situation: "Two people are preparing to put up wall shelves in a living room and need to make sure the shelves are horizontal.",
    excerpts: [
      {
        num: 1,
        prefix: "Have you got everything you need to put up",
        gapKey: ["the shelves, brackets and screws", "shelves, brackets and screws", "brackets and screws"],
        displayHint: "(shelves / brackets / screws)",
        suffix: "?"
      },
      {
        num: 2,
        prefix: "It's for",
        gapKey: ["checking the shelves are level", "checking the shelves are level.", "checking that the shelves are level"],
        displayHint: "(checking ... level)",
        suffix: "."
      },
      {
        num: 3,
        prefix: "There's a little",
        gapKey: ["bubble in the middle", "bubble in the middle."],
        displayHint: "(bubble ... middle)",
        suffix: ", and you have to get it right between the two lines."
      }
    ],
    fullAudioTranscript: "Have you got everything you need to put up the shelves, brackets and screws? Yes, but what is that long green tool for? It's for checking the shelves are level. There's a little bubble in the middle, and you have to get it right between the two lines."
  },
  {
    id: "conv2",
    title: "Conversation 2: Fixing Broken Metal & Wires",
    toolsNeeded: "Soldering iron & Wire cutters",
    situation: "Fixing a broken audio cable and joining metal contacts together safely.",
    excerpts: [
      {
        num: 4,
        prefix: "It's for",
        gapKey: ["sticking bits of metal together", "sticking metal together"],
        displayHint: "(sticking bits ... together)",
        suffix: ". It looks a bit like a glue gun."
      },
      {
        num: 5,
        prefix: "What are they",
        gapKey: ["made of", "made of?"],
        displayHint: "(made of / made from)",
        suffix: "? They've got a rubber handle so you don't get an electric shock."
      }
    ],
    fullAudioTranscript: "What is that heated tool? It's for sticking bits of metal together. It looks a bit like a glue gun. And what are these cutters made of? They've got a rubber handle so you don't get an electric shock."
  },
  {
    id: "conv3",
    title: "Conversation 3: Building a Timber Shed / Fence",
    toolsNeeded: "Nail gun & Sledgehammer",
    situation: "Constructing heavy timber framework without having to hammer nails manually for hours.",
    excerpts: [
      {
        num: 6,
        prefix: "Yes,",
        gapKey: ["it's got a", "it has got a"],
        displayHint: "(it's got a / it's used for)",
        suffix: "safety catch, so you don't need to worry about shooting yourself in the foot!"
      }
    ],
    fullAudioTranscript: "Is that nail gun dangerous? Yes, it's got a safety catch, so you don't need to worry about shooting yourself in the foot!"
  }
];

/* ==========================================================================
   SESSION 1: COMPOUND NOUN PRONUNCIATION & STRESS RULES (HANDOUT PAGE 3)
   Rule 1: noun + noun => FIRST word stressed (e.g. TEXT message, LAPTOP computer)
   Rule 2: adjective + noun => SECOND word stressed (e.g. mobile PHONE, digital CAMERA)
   ========================================================================== */
const SESSION_1_COMPOUND_STRESS = [
  {
    id: "cs1",
    term: "Text message",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "TEXT message",
    ipa: "/ˈtekst ˌmes.ɪdʒ/",
    sentence: "I received a TEXT message on my phone.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs2",
    term: "Answering machine",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "ANSWERING machine",
    ipa: "/ˈɑːn.sə.rɪŋ məˌʃiːn/",
    sentence: "Leave a note on my ANSWERING machine.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs3",
    term: "Laptop computer",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "LAPTOP computer",
    ipa: "/ˈlæp.tɒp kəmˌpjuː.tər/",
    sentence: "She carried her LAPTOP computer in her bag.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs4",
    term: "White House (Presidency)",
    pattern: "noun + noun (proper noun)",
    stressedWord: "first",
    displayCapitalized: "WHITE house",
    ipa: "/ˈwaɪt ˌhaʊs/",
    sentence: "The President spoke from the WHITE house today.",
    ruleNote: "Official name / institution: Stressed on WHITE."
  },
  {
    id: "cs5",
    term: "Light bulb",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "LIGHT bulb",
    ipa: "/ˈlaɪt ˌbʌlb/",
    sentence: "We replaced the burned-out LIGHT bulb in the hallway.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs6",
    term: "Wire cutters",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "WIRE cutters",
    ipa: "/ˈwaɪə ˌkʌt.əz/",
    sentence: "Hand me the WIRE cutters to snip this cable.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs7",
    term: "Mobile phone",
    pattern: "adjective + noun",
    stressedWord: "second",
    displayCapitalized: "mobile PHONE",
    ipa: "/ˌməʊ.baɪl ˈfəʊn/",
    sentence: "He answered his mobile PHONE immediately.",
    ruleNote: "Adjective + Noun phrase: Stress the 2nd word."
  },
  {
    id: "cs8",
    term: "Digital camera",
    pattern: "adjective + noun",
    stressedWord: "second",
    displayCapitalized: "digital CAMERA",
    ipa: "/ˌdɪdʒ.ɪ.təl ˈkæm.rə/",
    sentence: "She took high-resolution photos with her digital CAMERA.",
    ruleNote: "Adjective + Noun phrase: Stress the 2nd word."
  },
  {
    id: "cs9",
    term: "Vacuum cleaner",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "VACUUM cleaner",
    ipa: "/ˈvæk.juːm ˌkliː.nər/",
    sentence: "He turned on the VACUUM cleaner to tidy the carpet.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  },
  {
    id: "cs10",
    term: "Main branch",
    pattern: "adjective + noun",
    stressedWord: "second",
    displayCapitalized: "main BRANCH",
    ipa: "/ˌmeɪn ˈbrɑːntʃ/",
    sentence: "Our company opened its main BRANCH in London.",
    ruleNote: "Adjective + Noun phrase: Stress the 2nd word."
  },
  {
    id: "cs11",
    term: "White house (any house painted white)",
    pattern: "adjective + noun",
    stressedWord: "second",
    displayCapitalized: "white HOUSE",
    ipa: "/ˌwaɪt ˈhaʊs/",
    sentence: "They live in the pretty white HOUSE on the corner.",
    ruleNote: "Adjective + Noun phrase: Stress the 2nd word (contrast with Presidential White House)."
  },
  {
    id: "cs12",
    term: "Spirit level",
    pattern: "noun + noun",
    stressedWord: "first",
    displayCapitalized: "SPIRIT level",
    ipa: "/ˈspɪr.ɪt ˌlev.əl/",
    sentence: "Check the shelf with a SPIRIT level before screwing it tight.",
    ruleNote: "Noun + Noun compound: Stress the 1st word."
  }
];

/* ==========================================================================
   SESSION 1: CLARIFYING & CHECKING LANGUAGE (HANDOUT PAGE 4)
   ========================================================================== */
const SESSION_1_CLARIFYING_CHECKING = {
  clarifying: [
    { phrase: "So you mean …?", meaning: "Confirming what the other person means by rephrasing their words." },
    { phrase: "Are you saying (that) …?", meaning: "Checking if you interpreted their statement accurately." },
    { phrase: "What you're saying is …?", meaning: "Summarising their core point to ensure mutual agreement." },
    { phrase: "If I understand correctly, you mean …", meaning: "Polite formal clarification in workplace discussions." }
  ],
  checking: [
    { phrase: "Do you follow me?", meaning: "Making sure the listener is keeping up with your explanation." },
    { phrase: "Do you know what I mean?", meaning: "Informal check to confirm mutual understanding." },
    { phrase: "Can I just check (that) …?", meaning: "Polite pause to verify a detail before continuing." },
    { phrase: "Does that make sense?", meaning: "Asking if your instructions or ideas are clear and logical." }
  ]
};

/* ==========================================================================
   SESSION 1: CLASSROOM PHOTO HUB & SMARTBOARD SLIDES (13 PHOTOS)
   ========================================================================== */
const SESSION_1_MEDIA_ITEMS = [
  {
    key: "session1_workshop_tools",
    imgUrl: "./assets/images/session1_workshop_tools.jpg",
    title: "Teacher Smartboard: Workshop Tools",
    source: "Teacher Whiteboard • Slide 1",
    desc: "12 everyday workshop tools: handsaw, screwdriver, measuring tape, drill, pliers, wire cutters.",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_tool_pictures_match",
    imgUrl: "./assets/images/session1_tool_pictures_match.jpg",
    title: "Tool Pictures & Vocabulary Match",
    source: "Teacher Whiteboard • Slide 2",
    desc: "Visual tool matching activity linking tool photos with vocabulary labels.",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_describing_objects",
    imgUrl: "./assets/images/session1_describing_objects.jpg",
    title: "Describing Everyday Objects Formula",
    source: "Teacher Whiteboard • Slide 3",
    desc: "Formulas: It's got a..., It's used for..., It's made of..., It's a machine for...",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_made_of_vs_from",
    imgUrl: "./assets/images/session1_made_of_vs_from.jpg",
    title: "Made Of vs. Made From Rule Board",
    source: "Teacher Whiteboard • Slide 4",
    desc: "Grammar distinction: Made of (material visible) vs Made from (material transformed).",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_listening_tools",
    imgUrl: "./assets/images/session1_listening_tools.jpg",
    title: "3 Listening Situations & Tools",
    source: "Teacher Whiteboard • Slide 5",
    desc: "Listening task matching conversations to tools: spirit level, soldering iron, nail gun.",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_compound_stress",
    imgUrl: "./assets/images/session1_compound_stress.jpg",
    title: "Compound Noun Stress Rules",
    source: "Teacher Whiteboard • Slide 6",
    desc: "Pronunciation stress: Noun+Noun (1st stressed) vs Adjective+Noun (2nd stressed).",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_listening_gap_fill",
    imgUrl: "./assets/images/session1_listening_gap_fill.jpg",
    title: "Listening Gap-Fill Sentences",
    source: "Teacher Whiteboard • Slide 7",
    desc: "Completed gap-fill sentences from the 3 audio conversations.",
    badge: "Smartboard Slide"
  },
  {
    key: "session1_notebook_vocab1",
    imgUrl: "./assets/images/session1_notebook_vocab1.jpg",
    title: "Notebook: Workshop Tools & Materials",
    source: "Student Notebook • Page 1",
    desc: "Handwritten notes with definitions, parts of speech, and Arabic equivalents.",
    badge: "Notebook Photo"
  },
  {
    key: "session1_notebook_vocab2",
    imgUrl: "./assets/images/session1_notebook_vocab2.jpg",
    title: "Notebook: Tool Definitions & Pos",
    source: "Student Notebook • Page 2",
    desc: "Handwritten tool explanations, safety catch, and DIY terminology.",
    badge: "Notebook Photo"
  },
  {
    key: "session1_notebook_vocab3",
    imgUrl: "./assets/images/session1_notebook_vocab3.jpg",
    title: "Notebook: Made Of vs From & Tools",
    source: "Student Notebook • Page 3",
    desc: "Classroom notebook rules on made of, made from, and everyday objects.",
    badge: "Notebook Photo"
  },
  {
    key: "session1_notebook_vocab4",
    imgUrl: "./assets/images/session1_notebook_vocab4.jpg",
    title: "Notebook: Workshop Vocabulary",
    source: "Student Notebook • Page 4",
    desc: "Handwritten notes on chisel, hacksaw, wrench, and bargain over price.",
    badge: "Notebook Photo"
  },
  {
    key: "session1_notebook_grammar1",
    imgUrl: "./assets/images/session1_notebook_grammar1.jpg",
    title: "Notebook: Relative Clauses 2-Sentence Combos",
    source: "Student Notebook • Page 5",
    desc: "Handwritten grammar exercises combining two sentences with who, which, and where.",
    badge: "Notebook Photo"
  },
  {
    key: "session1_notebook_grammar2",
    imgUrl: "./assets/images/session1_notebook_grammar2.jpg",
    title: "Notebook: 3-Sentence Chaining",
    source: "Student Notebook • Page 6",
    desc: "Handwritten advanced relative clause chaining combining three full sentences.",
    badge: "Notebook Photo"
  }
];

/* ==========================================================================
   SESSION 2: PLANNING AND GOING ON HOLIDAY - MAKING TRAVEL ARRANGEMENTS (28 VOCABULARY WORDS)
   Official British Council Intermediate B1 Handout: ARS_B1_02_I027CEU
   ========================================================================== */
const VOCAB_SESSION_2 = [
  {
    id: 301, word: "Direct flight",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/daɪˈrekt flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "A flight between two places where you stay on the same plane without changing.",
    b1Explain: "A flight where you stay on the same plane with the same flight number until you arrive.",
    sentence: "I always book a direct flight to London so I don't have to wait between connections."
  },
  {
    id: 302, word: "Long-haul flight",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈlɒŋ.hɔːl flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "A long flight that travels across oceans or continents, usually over six hours.",
    b1Explain: "A very long flight to another continent that takes many hours.",
    sentence: "On long-haul flights across the Atlantic, I prefer to travel overnight so I can sleep."
  },
  {
    id: 303, word: "Connecting flight",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/kəˈnek.tɪŋ flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "A journey where you must get off one plane and get on another to reach your destination.",
    b1Explain: "When you change planes at another airport before reaching your final destination.",
    sentence: "Do you know if three hours will give me enough time to get the connecting flight?"
  },
  {
    id: 304, word: "Layover",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈleɪˌəʊ.vər/",
    citation: "Student Notebook & Smartboard Slide 2",
    definition: "A waiting time at an airport between two connecting flights.",
    b1Explain: "A short wait at an airport between two different flights.",
    sentence: "We had a four-hour layover in Dubai and took the opportunity to explore the duty-free shops."
  },
  {
    id: 305, word: "Business class",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbɪz.nɪs klɑːs/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "A more expensive section on a plane with bigger seats and better food.",
    b1Explain: "The expensive and comfortable section of a plane with large reclining seats and delicious meals.",
    sentence: "Executives often travel business class so they can work comfortably during the journey."
  },
  {
    id: 306, word: "Budget accommodation",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbʌdʒ.ɪt əˌkɒm.əˈdeɪ.ʃən/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "Cheap places to stay, like simple hotels, guesthouses, or hostels.",
    b1Explain: "Affordable places to stay that do not cost a lot of money.",
    sentence: "As a student travelling across Europe, I usually go for clean budget accommodation."
  },
  {
    id: 307, word: "Full-board",
    pos: "noun phrase / adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌfʊl ˈbɔːd/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "A hotel price that includes your room and all three daily meals.",
    b1Explain: "When your hotel price includes your room and all three meals every day.",
    sentence: "We chose full-board at the mountain resort so we wouldn't need to look for restaurants in town."
  },
  {
    id: 308, word: "Half-board",
    pos: "noun phrase / adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌhɑːf ˈbɔːd/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A hotel price that includes your room, breakfast, and dinner.",
    b1Explain: "A hotel package that gives you breakfast and dinner, but not lunch.",
    sentence: "Half-board is perfect because we can explore the city during the day and eat dinner at the hotel."
  },
  {
    id: 309, word: "All-inclusive",
    pos: "adjective / noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌɔːl.ɪnˈkluː.sɪv/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A holiday where the total price covers your room, all food, drinks, and activities.",
    b1Explain: "A holiday where one price pays for everything: room, food, drinks, and activities.",
    sentence: "Families love all-inclusive beach resorts because there are no unexpected bills at the end."
  },
  {
    id: 310, word: "Self-catering",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌselfˈkeɪ.tər.ɪŋ/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "A place to stay with a kitchen so you can cook your own food.",
    b1Explain: "A holiday apartment with a kitchen where you cook your own meals.",
    sentence: "We booked a self-catering apartment with a modern kitchen to save money on dining out."
  },
  {
    id: 311, word: "En-suite bathroom",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌɒn ˈswiːt ˈbɑːθ.ruːm/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A private bathroom that is connected directly inside your bedroom.",
    b1Explain: "A private bathroom that is inside your bedroom so you don't share it with anyone.",
    sentence: "Every guest bedroom in the boutique hotel has an en-suite bathroom with a rainfall shower."
  },
  {
    id: 312, word: "Facilities",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/fəˈsɪl.ə.tiz/",
    citation: "Handout Page 1 & Smartboard Slide 1",
    definition: "Places, equipment, or services provided for you, like a gym or swimming pool.",
    b1Explain: "Useful services and places provided by a hotel, like a swimming pool, gym, or free Wi-Fi.",
    sentence: "In a hotel, facilities like a fitness centre and heated pool are essential for relaxing."
  },
  {
    id: 313, word: "Aisle seat",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈaɪl siːt/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "A plane or train seat right next to the walking path in the middle.",
    b1Explain: "A seat next to the walking passage so you can stand up easily without disturbing others.",
    sentence: "I always request an aisle seat so I can get up and stretch my legs during the flight."
  },
  {
    id: 314, word: "Overhead locker",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.və.hed ˈlɒk.ər/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "An overhead cupboard above your plane seat where you put your small bags.",
    b1Explain: "The cupboard above your seat in a plane where you put your small bag.",
    sentence: "Please stow your carry-on bag securely in the overhead locker before take-off."
  },
  {
    id: 315, word: "Boarding pass",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbɔː.dɪŋ pɑːs/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A paper or phone card you must show to get on an airplane.",
    b1Explain: "The ticket card or phone barcode you show to get onto the aeroplane.",
    sentence: "Have your passport and boarding pass ready when approaching the departure gate."
  },
  {
    id: 316, word: "Departure gate",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/dɪˈpɑː.tʃər ɡeɪt/",
    citation: "Student Notebook (Session 2)",
    definition: "The numbered door in an airport where passengers wait to get on their plane.",
    b1Explain: "The door and waiting area at an airport where you get on your aeroplane.",
    sentence: "Flight BA 142 to London Heathrow is now boarding at departure gate 24."
  },
  {
    id: 317, word: "Flight attendant",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈflaɪt əˌten.dənt/",
    citation: "Student Notebook (Session 2)",
    definition: "A person whose job is to serve passengers and keep them safe on a plane.",
    b1Explain: "A member of the aeroplane staff who serves meals and ensures safety on board.",
    sentence: "The friendly flight attendant offered extra blankets and water to passengers."
  },
  {
    id: 318, word: "Luggage storage",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈlʌɡ.ɪdʒ ˌstɔː.rɪdʒ/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A safe room in a hotel or airport where you can leave your bags for a while.",
    b1Explain: "A safe room at a hotel where you can leave your bags before check-in or after check-out.",
    sentence: "After checking out at noon, we left our bags in the hotel luggage storage until our evening flight."
  },
  {
    id: 319, word: "Airport shuttle",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈeə.pɔːt ˌʃʌt.əl/",
    citation: "Smartboard Slide 2 & Student Notebook",
    definition: "A bus that makes regular trips between the airport and hotels or city centre.",
    b1Explain: "A bus that drives people between the airport terminal and nearby hotels.",
    sentence: "The hotel offers a complimentary airport shuttle that runs every thirty minutes."
  },
  {
    id: 320, word: "Vacancy",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈveɪ.kən.si/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "An empty room in a hotel that is ready to rent.",
    b1Explain: "An empty room available for guests to book in a hotel.",
    sentence: "The hotel sign said 'No Vacancy' because all rooms were booked for the holiday weekend."
  },
  {
    id: 321, word: "Fully booked",
    pos: "adjective phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌfʊl.i ˈbʊkt/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "Having all rooms, tickets, or seats sold, with none left.",
    b1Explain: "When all hotel rooms or flight seats are completely taken and none are left.",
    sentence: "I wanted to reserve a sea-view suite, but the receptionist explained they were fully booked."
  },
  {
    id: 322, word: "Arrivals board",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/əˈraɪ.vəlz bɔːd/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "A large electronic screen at the airport showing landing times of planes.",
    b1Explain: "The electronic screen in an airport that shows when flights are landing.",
    sentence: "We checked the arrivals board to see if our friend's flight from Paris had landed on schedule."
  },
  {
    id: 323, word: "Hand luggage",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈhænd ˌlʌɡ.ɪdʒ/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "Small bags or backpacks that you are allowed to take with you inside the airplane.",
    b1Explain: "Small suitcases or bags that you carry with you onto the plane.",
    sentence: "Make sure your hand luggage conforms to the airline's weight and dimension restrictions."
  },
  {
    id: 324, word: "Wheelchair accessible",
    pos: "adjective phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈwiːl.tʃeər əkˌses.ə.bəl/",
    citation: "Smartboard Slide 3",
    definition: "Having ramps, wide doors, and lifts so people in wheelchairs can enter easily.",
    b1Explain: "Designed with ramps and elevators so people in wheelchairs can enter comfortably.",
    sentence: "Can you tell me if the ground-floor rooms and hotel pool are wheelchair accessible?"
  },
  {
    id: 325, word: "Pet-friendly",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈpet ˌfrend.li/",
    citation: "Smartboard Slide 3 & Student Notebook",
    definition: "Allowing guests to bring their pet dogs or cats into the hotel.",
    b1Explain: "A hotel that allows you to bring your pet dog or cat to stay with you.",
    sentence: "We booked a pet-friendly cottage by the coast so our golden retriever could travel with us."
  },
  {
    id: 326, word: "Free cancellation",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/friː ˌkæn.səlˈeɪ.ʃən/",
    citation: "Smartboard Slide 3",
    definition: "A rule that lets you cancel your booking without paying any money.",
    b1Explain: "When you can cancel your hotel or flight booking and get all your money back.",
    sentence: "I chose the rate with free cancellation in case our vacation dates need to change."
  },
  {
    id: 327, word: "Non-refundable deposit",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌnɒn.rɪˈfʌn.də.bəl dɪˈpɒz.ɪt/",
    citation: "Smartboard Slide 3",
    definition: "A first payment that you lose if you decide to cancel your trip.",
    b1Explain: "An advance money payment that the hotel keeps if you decide to cancel your booking.",
    sentence: "Booking the luxury villa required a twenty percent non-refundable deposit."
  },
  {
    id: 328, word: "Room service",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈruːm ˌsɜː.vɪs/",
    citation: "Smartboard Slide 2",
    definition: "When hotel staff bring food or drinks directly to your bedroom.",
    b1Explain: "Ordering food and drinks over the hotel phone to be brought directly to your bedroom.",
    sentence: "After our long flight, we ordered hot pasta and tea from room service and relaxed."
  }
];

/* ==========================================================================
   SESSION 2: INDIRECT QUESTIONS MASTER LAB (HANDOUT PAGES 1 & 2, SLIDES 4-6)
   ========================================================================== */
const SESSION_2_INDIRECT_QUESTIONS = {
  rules: [
    {
      num: 1,
      title: "Statement Word Order",
      rule: "Question word order (verb + subject) shifts to statement word order (subject + verb).",
      directEx: "Where is the departure gate?",
      indirectEx: "Could you tell me where the departure gate is?"
    },
    {
      num: 2,
      title: "Omission of Auxiliary 'Do'",
      rule: "The auxiliary verbs 'do', 'does', and 'did' are completely removed in indirect questions.",
      directEx: "What time does the flight leave?",
      indirectEx: "Can you tell me what time the flight leaves?"
    },
    {
      num: 3,
      title: "'If' or 'Whether' for Yes/No Questions",
      rule: "When converting a yes/no question without a question word (who, what, where), insert 'if' or 'whether'.",
      directEx: "Is breakfast included?",
      indirectEx: "I wonder if breakfast is included."
    },
    {
      num: 4,
      title: "Punctuation Rule",
      rule: "Introductory statements like 'I wonder...' or 'I'd like to know...' end with a full stop (.), NOT a question mark. Introductory questions like 'Could you tell me...?' end with a question mark (?).",
      directEx: "Can you book me a hotel?",
      indirectEx: "I'd like to know if you can book me a hotel."
    }
  ],
  practiceItems: [
    {
      id: "iq1",
      direct: "Is breakfast included?",
      prompt: "I wonder …",
      expectedKeys: ["if breakfast is included.", "if breakfast is included", "whether breakfast is included.", "whether breakfast is included"],
      expectedDisplay: "I wonder if breakfast is included.",
      spoken: "I wonder if breakfast is included."
    },
    {
      id: "iq2",
      direct: "Does the hotel have a swimming pool?",
      prompt: "Could you tell me …",
      expectedKeys: ["if the hotel has a swimming pool?", "if the hotel has a swimming pool", "whether the hotel has a swimming pool?"],
      expectedDisplay: "Could you tell me if the hotel has a swimming pool?",
      spoken: "Could you tell me if the hotel has a swimming pool?"
    },
    {
      id: "iq3",
      direct: "How much will a single room cost?",
      prompt: "Do you know …",
      expectedKeys: ["how much a single room will cost?", "how much a single room will cost"],
      expectedDisplay: "Do you know how much a single room will cost?",
      spoken: "Do you know how much a single room will cost?"
    },
    {
      id: "iq4",
      direct: "Have you got anything cheaper?",
      prompt: "I'd like to know …",
      expectedKeys: ["if you have got anything cheaper.", "if you have got anything cheaper", "if you've got anything cheaper.", "if you've got anything cheaper", "whether you have got anything cheaper."],
      expectedDisplay: "I'd like to know if you have got anything cheaper.",
      spoken: "I'd like to know if you have got anything cheaper."
    },
    {
      id: "iq5",
      direct: "What's the luggage allowance?",
      prompt: "Can you tell me …",
      expectedKeys: ["what the luggage allowance is?", "what the luggage allowance is"],
      expectedDisplay: "Can you tell me what the luggage allowance is?",
      spoken: "Can you tell me what the luggage allowance is?"
    },
    {
      id: "iq6",
      direct: "Can I order a vegetarian meal?",
      prompt: "Do you know …",
      expectedKeys: ["if I can order a vegetarian meal?", "if I can order a vegetarian meal", "whether I can order a vegetarian meal?"],
      expectedDisplay: "Do you know if I can order a vegetarian meal?",
      spoken: "Do you know if I can order a vegetarian meal?"
    }
  ]
};

/* ==========================================================================
   SESSION 2: LISTENING EXTRACTS (HANDOUT PAGE 1 & SLIDE 4)
   ========================================================================== */
const SESSION_2_LISTENING_EXTRACTS = [
  {
    id: "le1",
    num: 1,
    prefix: "",
    gapKey: ["Could you tell me", "could you tell me"],
    displayHint: "(Could you tell me ...)",
    suffix: "when you'd like to travel?",
    full: "Could you tell me when you'd like to travel?"
  },
  {
    id: "le2",
    num: 2,
    prefix: "Hmm,",
    gapKey: ["I wonder if", "i wonder if"],
    displayHint: "(I wonder if ...)",
    suffix: "it'd be cheaper on another date. I'm fairly flexible.",
    full: "Hmm, I wonder if it'd be cheaper on another date. I'm fairly flexible."
  },
  {
    id: "le3",
    num: 3,
    prefix: "Do you know",
    gapKey: ["if that'll give", "if that will give"],
    displayHint: "(if that'll give ...)",
    suffix: "me enough time to get the connecting flight?",
    full: "Do you know if that'll give me enough time to get the connecting flight?"
  },
  {
    id: "le4",
    num: 4,
    prefix: "And can you tell me",
    gapKey: ["what time the flight leaves?", "what time the flight leaves", "what time the flight leaves.?"],
    displayHint: "(what time ...)",
    suffix: "?",
    full: "And can you tell me what time the flight leaves?"
  },
  {
    id: "le5",
    num: 5,
    prefix: "I'd also like to know",
    gapKey: ["if you can book me a hotel.", "if you can book me a hotel", "if you can book me a hotel."],
    displayHint: "(if you can book ...)",
    suffix: ".",
    full: "I'd also like to know if you can book me a hotel."
  }
];

/* ==========================================================================
   SESSION 2: ACCOMMODATION & FLIGHTS CLASSIFICATION MATRIX (SLIDES 2 & 3)
   ========================================================================== */
const SESSION_2_CATEGORIES_MATRIX = {
  accommodation: [
    { name: "Self-catering", desc: "Apartments with private kitchens to prepare your own food." },
    { name: "Full-board / Half-board", desc: "Room rate including either 3 meals or breakfast + dinner." },
    { name: "All-inclusive", desc: "Single price covering room, all meals, drinks, and activities." },
    { name: "En-suite bathroom", desc: "Private bathroom entered directly from inside the bedroom." },
    { name: "Campsite / Hostel", desc: "Outdoor camping areas or budget shared dormitory rooms." },
    { name: "Vacancy / Fully booked", desc: "Hotel occupancy status indicating available rooms or sold-out." },
    { name: "Check-in / Check-out", desc: "Formal arrival registration and departure key return." }
  ],
  flights: [
    { name: "Aisle seat / Window seat", desc: "Seating positions next to the walkway or looking outside." },
    { name: "Economy / Business class", desc: "Standard passenger seating vs premium spacious travel cabins." },
    { name: "Direct / Connecting flight", desc: "Non-stop journey vs changing aircraft at an airport layover." },
    { name: "Emergency exit row", desc: "Seats with extra legroom requiring passengers to assist in emergencies." },
    { name: "Overhead locker", desc: "Enclosed storage compartments above passenger seats." },
    { name: "Boarding pass & Gate", desc: "Travel authorization document and numbered airport departure lounge." },
    { name: "Hand luggage & Allowance", desc: "Permitted cabin baggage dimensions and weight limits." }
  ],
  services: [
    { name: "Free Wi-Fi", desc: "Complimentary wireless internet throughout rooms and public areas." },
    { name: "Airport shuttle", desc: "Dedicated hotel bus transferring guests to and from the airport." },
    { name: "Luggage storage", desc: "Secure room to keep baggage before check-in or after check-out." },
    { name: "Wheelchair accessible", desc: "Facilities fitted with ramps, wide doorways, and elevators." },
    { name: "Pet-friendly", desc: "Hotel policy welcoming domestic dogs and cats in guest rooms." },
    { name: "Free cancellation", desc: "Booking terms allowing reservations to be cancelled without penalty." },
    { name: "Room service & Laundry", desc: "In-room meal delivery and clothing washing/pressing services." }
  ]
};

/* ==========================================================================
   SESSION 2: TENSES REVIEW LAB (STUDENT NOTEBOOK PAGES 8 TO 11)
   ========================================================================== */
const SESSION_2_TENSES_LAB = [
  {
    name: "Present Simple",
    formula: "Subject + Base Verb (s/es)",
    usage: "Facts, permanent situations, daily habits, and routines.",
    timeWords: "Every day, always, usually, often, once a week",
    example: "I always book a direct flight if possible."
  },
  {
    name: "Present Continuous",
    formula: "Subject + am/is/are + verb-ing",
    usage: "Actions happening right now at the moment of speaking or temporary trends.",
    timeWords: "Now, at the moment, currently, right now",
    example: "I am looking at the arrivals board to check the flight time."
  },
  {
    name: "Present Perfect",
    formula: "Subject + have/has + Past Participle (V3)",
    usage: "Past actions connected to the present, completed actions with present visible results.",
    timeWords: "Already, yet, ever, never, since, for, just",
    contrastNote: "Focus is on the completed achievement or result in the present.",
    example: "I have studied Computer Science for four years (you can see the software apps I built)."
  },
  {
    name: "Present Perfect Continuous",
    formula: "Subject + have/has + been + verb-ing",
    usage: "Actions that started in the past and are STILL ongoing right now in the present.",
    timeWords: "For, since, all morning, how long",
    contrastNote: "Focus is on ongoing duration and continuous progress.",
    example: "I've been studying Computer Science for four years (and I am still studying it today)."
  },
  {
    name: "Past Perfect",
    formula: "Subject + had + Past Participle (V3)",
    usage: "An action that was completed before another specific action in the past.",
    timeWords: "Before, by the time, when, after",
    example: "The train had already left when I arrived at the station."
  }
];

/* ==========================================================================
   SESSION 2: CLASSROOM PHOTO HUB & SMARTBOARD SLIDES (18 PHOTOS)
   ========================================================================== */
const SESSION_2_MEDIA_ITEMS = [
  {
    key: "session2_board_lead_in",
    imgUrl: "./assets/images/session2_board_lead_in.jpg",
    title: "Teacher Smartboard: Travel Lead-In",
    source: "Teacher Whiteboard • Slide 1",
    desc: "10 travel statements: direct flights, long-haul, business class, and hotel facilities.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_vocab_table1",
    imgUrl: "./assets/images/session2_board_vocab_table1.jpg",
    title: "Travel Categories Matrix (Part 1)",
    source: "Teacher Whiteboard • Slide 2",
    desc: "Categorization of travel words: Accommodation, Flights, Services and facilities.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_vocab_table2",
    imgUrl: "./assets/images/session2_board_vocab_table2.jpg",
    title: "Travel Categories Matrix (Part 2)",
    source: "Teacher Whiteboard • Slide 3",
    desc: "Deposit, vacancy, arrivals board, overhead locker, wheelchair accessible, pet-friendly.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_listening_gaps",
    imgUrl: "./assets/images/session2_board_listening_gaps.jpg",
    title: "Language Focus: Listening Extracts",
    source: "Teacher Whiteboard • Slide 4",
    desc: "5 conversation extract gap-fill sentences from the travel agent dialogue.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_indirect_rules",
    imgUrl: "./assets/images/session2_board_indirect_rules.jpg",
    title: "Indirect Questions: Grammar Rules",
    source: "Teacher Whiteboard • Slide 5",
    desc: "The 4 core grammar rules: statement word order, auxiliary omission, if/whether, punctuation.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_indirect_practice",
    imgUrl: "./assets/images/session2_board_indirect_practice.jpg",
    title: "Indirect Questions Practice",
    source: "Teacher Whiteboard • Slide 6",
    desc: "The 6 direct questions to rewrite using polite indirect question formulas.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_board_ai_prompt",
    imgUrl: "./assets/images/session2_board_ai_prompt.jpg",
    title: "AI Chatbot Roleplay Prompt",
    source: "Teacher Whiteboard • Slide 7",
    desc: "Teacher strategy prompt for AI chatbot hotel receptionist simulation.",
    badge: "Smartboard Slide"
  },
  {
    key: "session2_notebook_vocab1",
    imgUrl: "./assets/images/session2_notebook_vocab1.jpg",
    title: "Notebook: Flight Terms & Facilities",
    source: "Student Notebook • Page 1",
    desc: "Handwritten definitions for direct flights, long-haul flights, aircraft, and hotel facilities.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_vocab2",
    imgUrl: "./assets/images/session2_notebook_vocab2.jpg",
    title: "Notebook: Board Arrangements",
    source: "Student Notebook • Page 2",
    desc: "Full-board vs half-board, all-inclusive, budget accommodation, en-suite bathroom.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_vocab3",
    imgUrl: "./assets/images/session2_notebook_vocab3.jpg",
    title: "Notebook: Boarding & Layovers",
    source: "Student Notebook • Page 3",
    desc: "Campsite, hostel, layover flight, in-flight entertainment, boarding pass, departure gates.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_vocab4",
    imgUrl: "./assets/images/session2_notebook_vocab4.jpg",
    title: "Notebook: Airport Luggage & Shuttles",
    source: "Student Notebook • Page 4",
    desc: "Luggage storage, airport shuttle, vacancy, arrivals board, overhead locker.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_vocab5",
    imgUrl: "./assets/images/session2_notebook_vocab5.jpg",
    title: "Notebook: Hotel Amenities",
    source: "Student Notebook • Page 5",
    desc: "Pet-friendly policies, laundry service, and classroom vocabulary notes.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_indirect1",
    imgUrl: "./assets/images/session2_notebook_indirect1.jpg",
    title: "Notebook: Indirect Questions 1–4",
    source: "Student Notebook • Page 6",
    desc: "Handwritten indirect questions: breakfast included, swimming pool, single room, cheaper.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_indirect2",
    imgUrl: "./assets/images/session2_notebook_indirect2.jpg",
    title: "Notebook: Indirect Questions 5–7 & Rules",
    source: "Student Notebook • Page 7",
    desc: "Luggage allowance, vegetarian meal, flight leave, and the 4 grammar rules.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_tenses1",
    imgUrl: "./assets/images/session2_notebook_tenses1.jpg",
    title: "Notebook: Present Tenses Overview",
    source: "Student Notebook • Page 8",
    desc: "Handwritten notes on Present Simple, Present Continuous, and Present Perfect.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_tenses2",
    imgUrl: "./assets/images/session2_notebook_tenses2.jpg",
    title: "Notebook: Present Perfect Continuous",
    source: "Student Notebook • Page 9",
    desc: "Formula have/has + been + verb-ing for ongoing progress starting in the past.",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_tenses3",
    imgUrl: "./assets/images/session2_notebook_tenses3.jpg",
    title: "Notebook: Perfect vs Continuous Contrast",
    source: "Student Notebook • Page 10",
    desc: "Comparison: studied CS for 4 years (present result) vs been studying CS (still ongoing).",
    badge: "Notebook Photo"
  },
  {
    key: "session2_notebook_past_tenses",
    imgUrl: "./assets/images/session2_notebook_past_tenses.jpg",
    title: "Notebook: Past Tenses & Past Perfect",
    source: "Student Notebook • Page 11",
    desc: "Past Simple, Past Continuous, and Past Perfect (had + V3 before another past action).",
    badge: "Notebook Photo"
  }
];

/* ==========================================================================
   SESSION 3: THE DECISION PROCESS & THIRD CONDITIONAL (28 VOCABULARY WORDS)
   Authentic British Council Handout: ARS_B1_05_I028CEA_HO_v1.0
   Teacher Smartboard Slides & Student Handwritten Notebook
   ========================================================================== */
const VOCAB_SESSION_3 = [
  {
    id: 1,
    word: "Recognize",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ˈrek.əɡ.naɪz/",
    citation: "Student Notebook & Teacher Smartboard Slide",
    definition: "To know someone or something because you have seen or met them before.",
    b1Explain: "التمييز / يتعرف على شخص أو شيء رآه من قبل.",
    sentence: "I recognized my childhood friend immediately when he entered the British Council reception."
  },
  {
    id: 2,
    word: "Realize",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ˈrɪə.laɪz/",
    citation: "Teacher Correction on Whiteboard (use realize instead of recognize)",
    definition: "To understand or notice something clearly for the first time.",
    b1Explain: "إدراك / يستوعب ويفهم حقيقة جديدة لم يكن مدركاً لها.",
    sentence: "I didn't realize how important learning English was until I started applying for jobs abroad."
  },
  {
    id: 3,
    word: "Regret",
    pos: "noun / verb",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈɡret/",
    citation: "Handout Page 1 & Student Notebook",
    definition: "A sad feeling of wishing you had made a different choice in the past.",
    b1Explain: "ندم أو أسف على قرار أو تصرف في الماضي.",
    sentence: "Do you have any regrets about leaving your hometown to study at university?"
  },
  {
    id: 4,
    word: "Studying abroad",
    pos: "phrase / gerund",
    cambridgeLevel: "B1",
    pronunciation: "/ˈstʌd.i.ɪŋ əˈbrɔːd/",
    citation: "Student Notebook (page 1)",
    definition: "Going to study at a school or university in a different country.",
    b1Explain: "الدراسة في الخارج بدولة أجنبية.",
    sentence: "Studying abroad allowed her to gain international experience and make lifelong friends from around the world."
  },
  {
    id: 5,
    word: "Lots to consider",
    pos: "idiom / phrase",
    cambridgeLevel: "B2",
    pronunciation: "/lɒts tuː kənˈsɪd.ər/",
    citation: "Student Notebook (page 1)",
    definition: "Having many different facts or options to think about before deciding.",
    b1Explain: "الكثير من الأمور والتفاصيل الواجب أخذها في الحسبان قبل اتخاذ القرار.",
    sentence: "Before accepting the job offer in London, I had lots to consider, like rent, transport, and family."
  },
  {
    id: 6,
    word: "Seeds",
    pos: "noun (plural)",
    cambridgeLevel: "A2",
    pronunciation: "/siːdz/",
    citation: "Student Notebook (page 2)",
    definition: "The small hard parts of a plant from which new plants grow; or new ideas.",
    b1Explain: "بذور النباتات أو بدايات الأفكار والمشاريع.",
    sentence: "The teacher explained how small seeds grow deep roots before producing green leaves."
  },
  {
    id: 7,
    word: "Roots",
    pos: "noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/ruːts/",
    citation: "Student Notebook (page 2)",
    definition: "The parts of a plant that grow under the ground; or family origins.",
    b1Explain: "جذور النبات تحت الأرض أو الأصول العائلية والتراث الثقافي.",
    sentence: "Even after twenty years of living in the UK, he never forgot his cultural roots."
  },
  {
    id: 8,
    word: "Leaves",
    pos: "noun (plural)",
    cambridgeLevel: "A2",
    pronunciation: "/liːvz/",
    citation: "Student Notebook (page 2: leaf -> leaves)",
    definition: "The flat green parts that grow on plants or tree branches.",
    b1Explain: "أوراق الأشجار والنباتات.",
    sentence: "In autumn, the golden leaves fall gently from the tall oak trees in the park."
  },
  {
    id: 9,
    word: "Muscular",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈmʌs.kjə.lər/",
    citation: "Student Notebook (page 2: a muscular man)",
    definition: "Having strong, large muscles from doing physical exercise.",
    b1Explain: "مفتول العضلات / ذو بنية عضلية قوية ورياضية.",
    sentence: "If he went to the gym five days a week, he would become a muscular man."
  },
  {
    id: 10,
    word: "Decision process",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/dɪˈsɪʒ.ən ˈprəʊ.ses/",
    citation: "British Council Handout ARS_B1_05_I028CEA title",
    definition: "The steps you take when thinking about choices before you decide.",
    b1Explain: "عملية التفكير والتقييم لاتخاذ القرار خطوة بخطوة.",
    sentence: "Understanding the decision process helps managers evaluate risks before investing company funds."
  },
  {
    id: 11,
    word: "Time linkers",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/taɪm ˈlɪŋ.kəz/",
    citation: "British Council Handout (page 2)",
    definition: "Words like 'before', 'after', or 'since' that connect events in time order.",
    b1Explain: "روابط زمنية تشير لترتيب وتوقيت وقوع الأحداث في الماضي.",
    sentence: "Time linkers like 'since leaving university' and 'by the age of thirty' help sequence past experiences."
  },
  {
    id: 12,
    word: "Since leaving university",
    pos: "adverbial time phrase",
    cambridgeLevel: "B1",
    pronunciation: "/sɪns ˈliː.vɪŋ ˌjuː.nɪˈvɜː.sɪ.ti/",
    citation: "Handout Activity 4 & Teacher Smartboard Slide",
    definition: "From the time you graduated from university up to now.",
    b1Explain: "منذ نقطة التخرج من الجامعة وحتى الوقت الحاضر.",
    sentence: "Since leaving university, he has worked as a financial consultant for major firms in Dubai."
  },
  {
    id: 13,
    word: "By the age of thirty",
    pos: "adverbial time phrase",
    cambridgeLevel: "B1",
    pronunciation: "/baɪ ði eɪdʒ əv ˈθɜː.ti/",
    citation: "Handout Activity 4 & Smartboard Slide (time linker = your age)",
    definition: "At or before the time you reach thirty years old.",
    b1Explain: "بحلول سن الثلاثين / قبل بلوغ سن الثلاثين من العمر.",
    sentence: "She had set a personal goal to start her own digital marketing company by the age of thirty."
  },
  {
    id: 14,
    word: "In the last couple of months",
    pos: "time phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ɪn ðə lɑːst ˈkʌp.əl əv mʌnθs/",
    citation: "Handout Activity 4",
    definition: "During the past two or three months.",
    b1Explain: "في الشهرين الأخيرين / في الفترة القريبة الماضية.",
    sentence: "In the last couple of months, our English speaking confidence has noticeably improved."
  },
  {
    id: 15,
    word: "Third conditional",
    pos: "grammar structure",
    cambridgeLevel: "B2",
    pronunciation: "/θɜːd kənˈdɪʃ.ən.əl/",
    citation: "Classroom Smartboard & Student Notebook",
    definition: "A grammar form used to talk about past situations that did not happen and regrets.",
    b1Explain: "الحالة الشرطية الثالثة للتعبير عن أحداث ماضية مستحيلة التغيير والندم عليها.",
    sentence: "We use the third conditional to express how past events could have turned out differently."
  },
  {
    id: 16,
    word: "Past modal of deduction",
    pos: "grammar structure",
    cambridgeLevel: "B2",
    pronunciation: "/pɑːst ˈməʊ.dəl əv dɪˈdʌk.ʃən/",
    citation: "Student Notebook (page 3) - ده استنتاج",
    definition: "Using words like 'must have' or 'couldn't have' to guess past events using facts.",
    b1Explain: "أفعال الاستنتاج في الماضي بناءً على أدلة وشواهد.",
    sentence: "Her car is parked outside, so she must have arrived early for the conference."
  },
  {
    id: 17,
    word: "Deduction",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/dɪˈdʌk.ʃən/",
    citation: "Student notebook & smartboard notes",
    definition: "The process of reaching an answer or conclusion by looking at the facts.",
    b1Explain: "الاستنتاج أو الاستدلال المنطقي بناءً على القرائن.",
    sentence: "Through logical deduction, the detective solved the mysterious disappearance of the document."
  },
  {
    id: 18,
    word: "If only I had listened",
    pos: "expression of regret",
    cambridgeLevel: "B2",
    pronunciation: "/ɪf ˈəʊn.li aɪ hæd ˈlɪs.ənd/",
    citation: "Classroom Smartboard Slide 16 & Student notebook",
    definition: "A phrase used to say you strongly wish you had followed someone's advice.",
    b1Explain: "تعبير عن ندم شديد: لو أنني فقط أنصت للنصيحة واستمعت للكلام!",
    sentence: "If only I had listened to my tutor's advice, I wouldn't have failed the final accounting exam."
  },
  {
    id: 19,
    word: "I wish I had studied harder",
    pos: "expression of regret",
    cambridgeLevel: "B1",
    pronunciation: "/aɪ wɪʃ aɪ hæd ˈstʌd.id ˈhɑː.dər/",
    citation: "Classroom Smartboard Slide 16 & Student notebook",
    definition: "A phrase used to express sadness that you did not work harder in the past.",
    b1Explain: "تمني عكس ما حدث في الماضي: أتمنى لو أنني ذاكرت بجدية أكبر.",
    sentence: "Looking at my test scores, I wish I had studied harder before the examination week."
  },
  {
    id: 20,
    word: "I regret leaving",
    pos: "expression of regret",
    cambridgeLevel: "B1",
    pronunciation: "/aɪ rɪˈɡret ˈliː.vɪŋ/",
    citation: "Classroom Smartboard Slide 16 & Student notebook",
    definition: "A clear statement saying you are sorry that you left.",
    b1Explain: "تعبير صريح عن الندم: أنا نادم على المغادرة أو ترك العمل.",
    sentence: "I regret leaving my former company because my colleagues there were very supportive."
  },
  {
    id: 21,
    word: "Theme park",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈθiːm ˌpɑːk/",
    citation: "Teacher Whiteboard Slide 17 (El Malahy = theme park / amusement park)",
    definition: "A very large amusement park with big rides, roller coasters, and shows.",
    b1Explain: "مدينة ملاهي كبيرة ذات طابع ترفيهي مميز.",
    sentence: "During our holiday in Florida, our family spent two unforgettable days exploring the famous theme park."
  },
  {
    id: 22,
    word: "Fun fair",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfʌn ˌfeər/",
    citation: "Teacher Whiteboard Slide 17 (fun fair -> small)",
    definition: "An outdoor event with games, food stalls, and fun rides for families.",
    b1Explain: "مدينة ألعاب ترفيهية صغيرة أو مهرجان ألعاب متنقل.",
    sentence: "Every summer, the village green hosts a delightful fun fair with cotton candy and prize stalls."
  },
  {
    id: 23,
    word: "Roller coaster",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈrəʊ.lə ˌkəʊ.stər/",
    citation: "Teacher Whiteboard Slide 17 (rides: roller coaster)",
    definition: "An exciting ride on a track with steep drops, high turns, and fast speed.",
    b1Explain: "قطار الموت أو الأفعوانية في مدينة الملاهي.",
    sentence: "Riding the giant roller coaster gave everyone a huge rush of adrenaline and laughter."
  },
  {
    id: 24,
    word: "Big wheel",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌbɪɡ ˈwiːl/",
    citation: "Teacher Whiteboard Slide 17 (rides: big wheel)",
    definition: "A huge turning wheel with seats that takes people high up to see the view.",
    b1Explain: "الساقية الدوارة العملاقة (عجلة فيريس) في مدن الملاهي.",
    sentence: "From the top of the big wheel, we had a breathtaking view across the entire city at sunset."
  },
  {
    id: 25,
    word: "Merry-go-round",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈmer.i.ɡəʊˌraʊnd/",
    citation: "Teacher Whiteboard Slide 17 (rides: merry-go-round)",
    definition: "A round turning ride for children with model horses and music.",
    b1Explain: "دوامة الخيل / لعبة الأحصنة الدوارة للأطفال.",
    sentence: "The young children laughed with joy as the colorful merry-go-round gently spun in circles."
  },
  {
    id: 26,
    word: "Amusement rides",
    pos: "compound noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/əˈmjuːz.mənt raɪdz/",
    citation: "Teacher Whiteboard Slide 17 (Games -> rides)",
    definition: "The fun machines and roller coasters that people ride at a park.",
    b1Explain: "ألعاب وركوبات الملاهي الترفيهية.",
    sentence: "Safety inspectors carefully checked all the amusement rides before opening the gates to visitors."
  },
  {
    id: 27,
    word: "Weak forms / schwa (ə)",
    pos: "pronunciation term",
    cambridgeLevel: "B2",
    pronunciation: "/wiːk fɔːmz / ʃwɑː/",
    citation: "Handout Page 3 (Mark weak forms with schwa)",
    definition: "The unstressed pronunciation of auxiliary words in speech (e.g., 'would've' pronounced /wʊdəv/ rather than full forms).",
    b1Explain: "الأشكال الصوتية الضعيفة (الشوا) في النطق الإنجليزي الطبيعي للضمائر وحروف الجر وأفعال المساعدة.",
    sentence: "Native speakers use weak forms and schwa in words like 'have' and 'of' to maintain natural conversational rhythm."
  },
  {
    id: 28,
    word: "Prepositions of time",
    pos: "grammar category",
    cambridgeLevel: "A2/B1",
    pronunciation: "/ˌprep.əˈzɪʃ.ənz əv taɪm/",
    citation: "Teacher Whiteboard (in morning/evening vs at night/noon/midnight)",
    definition: "Words showing when events occur: 'in' for parts of the day, months, and years; 'at' for specific clock times, noon, and night.",
    b1Explain: "حروف جر الزمان: استخدام in مع فترات اليوم و at مع الليل ومنتصف النهار والوقت المحدد.",
    sentence: "Remember the rule: we say 'in the morning and evening', but 'at noon, at night, and at midnight'."
  }
];

/* ==========================================================================
   SESSION 3: GRAMMAR & INTERACTIVE PRACTICE DATA STRUCTURES
   ========================================================================== */

/* 1. THIRD CONDITIONAL & REGRETS PRACTICE (Handout Page 2) */
const SESSION_3_THIRD_CONDITIONAL = [
  {
    id: 1,
    prompt: "I wouldn't have moved here if...",
    stem: "I wouldn't have moved here if",
    sampleAnswer: "I hadn't found a great job opportunity in the capital city.",
    explanation: "Third Conditional: Result clause (wouldn't have + V3) + If clause (hadn't + V3). Expresses an unreal past condition."
  },
  {
    id: 2,
    prompt: "My friend yelled at his boss and quit. I would have done the same if...",
    stem: "I would have done the same if",
    sampleAnswer: "my manager had spoken to me disrespectfully in front of the whole team.",
    explanation: "Third Conditional: 'would have done' specifies the imagined past reaction to an intolerable past condition."
  },
  {
    id: 3,
    prompt: "If I hadn't left (my hometown)...",
    stem: "If I hadn't left my hometown,",
    sampleAnswer: "I might never have learned English fluently or worked in international business.",
    explanation: "Third Conditional with 'might have + V3': Shows a possible alternative past result rather than a certain one."
  },
  {
    id: 4,
    prompt: "I might have regretted studying engineering if...",
    stem: "I might have regretted studying engineering if",
    sampleAnswer: "I hadn't discovered my true passion for software development and artificial intelligence.",
    explanation: "Regret + past condition: Evaluating past academic choices with hindsight."
  },
  {
    id: 5,
    prompt: "I would have gone on a long holiday if...",
    stem: "I would have gone on a long holiday if",
    sampleAnswer: "flights hadn't been so expensive and my work project hadn't been postponed.",
    explanation: "Past unfulfilled desire: 'would have gone' indicates the trip did not take place due to obstacles."
  },
  {
    id: 6,
    prompt: "I might not have got so sick when travelling if...",
    stem: "I might not have got so sick when travelling if",
    sampleAnswer: "I had only drunk bottled water and avoided raw street food in the humid weather.",
    explanation: "Past hypothetical prevention: Explaining how a negative health outcome could have been avoided."
  },
  {
    id: 7,
    prompt: "I wouldn't have got married if...",
    stem: "I wouldn't have got married if",
    sampleAnswer: "I hadn't met someone truly caring, ambitious, and understanding.",
    explanation: "Life milestone conditional: Stating the crucial condition required for a major life decision."
  },
  {
    id: 8,
    prompt: "If I had failed my high school leaving examination, I might have...",
    stem: "If I had failed my high school examination, I might have",
    sampleAnswer: "repeated the final school year or started an apprenticeship at a local trade workshop.",
    explanation: "Imagined failure scenario: Reflecting on alternative life paths had examinations gone poorly."
  }
];

/* 2. REGRET DECISIONS EVALUATION (Handout Page 2 / Teacher Smartboard) */
const SESSION_3_REGRET_EVALUATION = [
  {
    id: 1,
    speaker: "John",
    statement: "I wouldn't have made the same decision, if I had known.",
    grammarClue: "wouldn't have made + if I had known",
    regrets: true,
    explanation: "John REGRETS his decision. He is explicitly stating that with the knowledge he has now, he would have chosen a different path."
  },
  {
    id: 2,
    speaker: "Alice",
    statement: "I still would've done the same thing.",
    grammarClue: "still would've done",
    regrets: false,
    explanation: "Alice DOES NOT regret her decision. 'Still' emphasizes that despite any difficulties, she stands by her choice."
  },
  {
    id: 3,
    speaker: "Wilson",
    statement: "If I hadn't left the UK, I might have married Claire.",
    grammarClue: "If I hadn't left + might have married",
    regrets: true,
    explanation: "Wilson REGRETS leaving the UK. He is daydreaming about a lost romantic relationship that could have happened had he stayed."
  },
  {
    id: 4,
    speaker: "Grace",
    statement: "I wish I hadn't left school so early.",
    grammarClue: "I wish + past perfect (hadn't left)",
    regrets: true,
    explanation: "Grace REGRETS leaving school. 'I wish + past perfect' is the classic English formula for expressing sorrow about past actions."
  }
];

/* 3. SIX WAYS TO EXPRESS REGRET (Teacher Smartboard Slide 16) */
const SESSION_3_WAYS_TO_REGRET = [
  {
    structure: "I wish + past simple",
    mainUse: "Present regret",
    example: "I wish I had more time.",
    arabic: "تمني تغيير الحاضر (أتمنى لو كان لدي وقت الآن)",
    tip: "Use past simple after wish when you want a present situation to be different."
  },
  {
    structure: "I wish + past perfect",
    mainUse: "Past regret",
    example: "I wish I had studied harder.",
    arabic: "ندم على الماضي (أتمنى لو كنت قد ذاكرت بجدية في الماضي)",
    tip: "Use past perfect (had + V3) to talk about past mistakes and unchangeable events."
  },
  {
    structure: "If only + past perfect",
    mainUse: "Strong past regret",
    example: "If only I had listened!",
    arabic: "ندم قوي وعاطفي (يا ليتني فقط استمعت للنصيحة!)",
    tip: "'If only' is more dramatic and emphatic than 'I wish'."
  },
  {
    structure: "should have + PP",
    mainUse: "Regret / criticism",
    example: "I should have called her.",
    arabic: "لوم أو ندم (كان ينبغي عليّ الاتصال بها)",
    tip: "Expresses that a past action was desirable but did not occur."
  },
  {
    structure: "regret + -ing",
    mainUse: "Direct regret",
    example: "I regret leaving.",
    arabic: "ندم مباشر على فعل معين (أنا نادم على المغادرة)",
    tip: "Followed by a gerund (-ing) when apologizing or expressing personal remorse."
  },
  {
    structure: "third conditional",
    mainUse: "Imagined alternative past",
    example: "If I had studied, I would have passed.",
    arabic: "تخيل ماضٍ بديل (لو كنت قد ذاكرت، لكنت قد نجحت)",
    tip: "Connects a past condition (had + V3) with a hypothetical past result (would have + V3)."
  }
];

/* 4. TIME LINKERS CHRONOLOGICAL ORDERING (Handout Page 2) */
const SESSION_3_TIME_LINKERS = [
  { rank: 1, text: "When I finished school", label: "Oldest (School completion)" },
  { rank: 2, text: "Then, when I was 19", label: "Late teens" },
  { rank: 3, text: "Since leaving university", label: "After tertiary graduation" },
  { rank: 4, text: "By the age of thirty", label: "Reaching age 30" },
  { rank: 5, text: "In the last couple of months", label: "Recent months" },
  { rank: 6, text: "I've got two children now", label: "Most recent / Present" }
];

/* 5. TEACHER CLASSROOM FEEDBACK & PRONUNCIATION (Teacher Smartboard Slide 17 & Phonetics) */
const SESSION_3_TEACHER_FEEDBACK = {
  grammarErrors: [
    { wrong: "Why are you regret it?", correct: "Why do you regret it?", note: "Use auxiliary 'do' for present simple question with verb 'regret', not 'are'." },
    { wrong: "You was so tired?", correct: "Were you so tired? / You were so tired, right?", note: "Subject-verb agreement: 'you were', never 'you was'." },
    { wrong: "There's no memories.", correct: "There are no memories.", note: "Plural agreement: 'memories' requires plural verb 'there are'." },
    { wrong: "When you first smoking?", correct: "When did you first start smoking?", note: "Past simple question requires auxiliary 'did' and base verb." },
    { wrong: "Is that happen with you?", correct: "Did that happen with you? / Does that happen with you?", note: "Use 'Did' (past) or 'Does' (present) with base verb 'happen'." },
    { wrong: "There's no facilities there.", correct: "There are no facilities there.", note: "Plural noun 'facilities' requires 'there are'." },
    { wrong: "Facilities was...", correct: "Facilities were...", note: "Plural agreement: 'facilities were'." },
    { wrong: "The hotel far from everything.", correct: "The hotel is far from everything.", note: "Missing copula verb 'is' in English sentence structure." },
    { wrong: "We starting a new project. (past)", correct: "We started a new project.", note: "Past simple requires regular -ed ending." },
    { wrong: "If the customer refuse it, they will...", correct: "If the customer refuses it, they will...", note: "Third person singular requires -s: 'customer refuses'." },
    { wrong: "Are the description didn't match your tasks?", correct: "Did the description not match your tasks?", note: "Question form in past: 'Did the description not match...?'" },
    { wrong: "At the early morning", correct: "in the early morning", note: "Use 'in' for morning, afternoon, evening. Use 'at' for noon, night, midnight." },
    { wrong: "There's no courses", correct: "There are no courses", note: "Plural agreement with 'courses'." },
    { wrong: "In generally,", correct: "in general / generally", note: "Say 'in general' or simply 'generally' without 'in' before the adverb." },
    { wrong: "I didn't recognize that this is important", correct: "I didn't realize that this is important", note: "Recognize = identify something seen before. Realize = come to understand." },
    { wrong: "What I going to do...", correct: "What I am going to do...", note: "Missing auxiliary verb 'am' in 'going to' future structure." },
    { wrong: "When I graduate... (past)", correct: "When I graduated...", note: "Past simple 'graduated' needed for completed past education." }
  ],
  pronunciationList: [
    { word: "Lenses", ipa: "/ˈlen.zɪz/", tip: "Ends in distinct /zɪz/ sound" },
    { word: "These", ipa: "/ðiːz/", tip: "Voiced /ð/ and voiced /z/ at end" },
    { word: "Those", ipa: "/ðəʊz/", tip: "Voiced /ð/ with long /əʊ/ and /z/" },
    { word: "Basic", ipa: "/ˈbeɪ.sɪk/", tip: "Notice the unvoiced /s/, not /z/" },
    { word: "Thirty", ipa: "/ˈθɜː.ti/", tip: "Unvoiced /θ/ sound followed by clean /t/" },
    { word: "Decision", ipa: "/dɪˈsɪʒ.ən/", tip: "The 'si' is pronounced /ʒ/ as in vision" },
    { word: "Generally", ipa: "/ˈdʒen.ər.əl.i/", tip: "Starts with strong affricate /dʒ/" },
    { word: "Something", ipa: "/ˈsʌm.θɪŋ/", tip: "Clear /θ/ and /ŋ/ sounds" },
    { word: "Think", ipa: "/θɪŋk/", tip: "Unvoiced /θ/ and nasal /ŋk/" },
    { word: "Nothing", ipa: "/ˈnʌθ.ɪŋ/", tip: "Unvoiced /θ/ and nasal /ŋ/" },
    { word: "Shipment", ipa: "/ˈʃɪp.mənt/", tip: "Unvoiced /ʃ/ sound" }
  ]
};

/* 6. AMUSEMENT PARK & EL MALAHY TERMINOLOGY (Teacher Smartboard Slide 17) */
const SESSION_3_AMUSEMENT_PARK = {
  categories: [
    {
      term: "Theme park",
      arabic: "مدينة ملاهي كبيرة ذات طابع خاص",
      distinction: "A massive commercial park designed around specific themes with spectacular roller coasters and world-class attractions.",
      speech: "Theme park: a very large commercial amusement park."
    },
    {
      term: "Amusement park",
      arabic: "مدينة ملاهي ترفيهية عامة",
      distinction: "A large permanent outdoor recreational facility equipped with diverse mechanical rides and games.",
      speech: "Amusement park: a permanent park with mechanical rides and games."
    },
    {
      term: "Fun fair",
      arabic: "مهرجان ألعاب ترفيهية صغير / متنقل",
      distinction: "A smaller, often temporary outdoor carnival with games, food stalls, carousels, and prize competitions.",
      speech: "Fun fair: a small carnival or temporary fairground."
    }
  ],
  rides: [
    {
      term: "Roller coaster",
      arabic: "قطار الموت / الأفعوانية",
      desc: "Fast elevated track with sharp curves, steep vertical drops, and 360-degree inversions.",
      speech: "Roller coaster: an elevated railway with steep drops and sharp turns."
    },
    {
      term: "Big wheel (Ferris wheel)",
      arabic: "الساقية الدوارة العملاقة (عجلة فيريس)",
      desc: "Giant upright rotating mechanical wheel with passenger capsules giving panoramic views.",
      speech: "Big wheel: a giant rotating Ferris wheel."
    },
    {
      term: "Merry-go-round (Carousel)",
      arabic: "لعبة الأحصنة الدوارة (الدوامة)",
      desc: "Revolving platform with model horses that move rhythmically up and down to music.",
      speech: "Merry-go-round: a revolving carousel with moving horses."
    }
  ]
};

/* 7. ALL 5 STUDENT HANDWRITTEN NOTEBOOK PAGES (Fully Transcribed) */
const SESSION_3_NOTEBOOK_PAGES = [
  {
    pageNum: 1,
    title: "Key Decision Vocabulary & Arabic Definitions",
    sub: "Student Notebook Page 1 • Session Three Vocabulary",
    notes: [
      {
        term: "# Recognize",
        arabic: "التمييز",
        definition: "to identify something you have seen before",
        speech: "Recognize: to identify something you have seen before."
      },
      {
        term: "# Realize",
        arabic: "إدراك / فهم جديد",
        definition: "to come to understand something new / become aware of a fact",
        speech: "Realize: to come to understand something new or become aware."
      },
      {
        term: "# Time Prepositions System",
        arabic: "حروف الجر الزمنية",
        definition: "in the morning / in the evening / in the afternoon / in general vs at night / at noon / at midnight",
        speech: "In the morning, in the evening, in the afternoon, in general. At night, at noon, at midnight."
      },
      {
        term: "# Regrets",
        arabic: "أسف / ندم",
        definition: "feelings of sadness or sorrow over a past mistake or lost opportunity",
        speech: "Regrets: feelings of sorrow over a past action."
      },
      {
        term: "# Studying abroad",
        arabic: "الدراسة بالخارج",
        definition: "pursuing academic education in a foreign country",
        speech: "Studying abroad: pursuing education in a foreign university."
      },
      {
        term: "# Lots to consider",
        arabic: "الكثير لتهتم به وتفكر فيه",
        definition: "many crucial factors and consequences to weigh before deciding",
        speech: "Lots to consider: having many factors to evaluate carefully."
      }
    ]
  },
  {
    pageNum: 2,
    title: "Botanical Metaphors & Gym Vocabulary",
    sub: "Student Notebook Page 2 • Metaphors for Decisions & Growth",
    notes: [
      {
        term: "# Seeds",
        arabic: "بذور",
        definition: "The beginning or initial origin of decisions, ideas, or plants.",
        speech: "Seeds: the initial beginning of growth or ideas."
      },
      {
        term: "# Roots",
        arabic: "جذور",
        definition: "The deep foundational anchors that keep a tree or concept strong.",
        speech: "Roots: the deep foundations that anchor a plant or life."
      },
      {
        term: "# Leaf -> Leaves",
        arabic: "ورق شجر (مفرد وجمع شاذ)",
        definition: "Irregular noun plural transformation: f becomes ves (leaf to leaves).",
        speech: "Leaf becomes leaves. An irregular plural noun."
      },
      {
        term: "# A muscular man",
        arabic: "رجل مفتول العضلات / قوي البنية",
        definition: "A man possessing well-developed, strong muscles from physical training.",
        speech: "A muscular man: someone who built strong muscles from the gym."
      }
    ]
  },
  {
    pageNum: 3,
    title: "Past Modal of Deduction & Conditionals Core Rule",
    sub: "Student Notebook Page 3 • Logic, Time Anchors & Conditional Essence",
    notes: [
      {
        term: "Past Modal of Deduction",
        arabic: "ده استنتاج منطقي في الماضي",
        definition: "'It must have been an easy decision' — deduction based on strong clues.",
        speech: "It must have been an easy decision. This is a past modal of deduction."
      },
      {
        term: "Prepositions of Time Rule",
        arabic: "قاعدة in مقابل at",
        definition: "in evening / morning / afternoon / general • at night / midnight / noon",
        speech: "Use in with parts of the day and general. Use at with night, noon, and midnight."
      },
      {
        term: "Time Linkers Anchors",
        arabic: "روابط التوقيت الحياتية",
        definition: "Since + point of time (Since leaving university) • By the age of 30 (= your age) • When I was 19",
        speech: "Since plus point of time, by the age of thirty, when I was nineteen."
      },
      {
        term: "The Essence of Conditionals",
        arabic: "المفهوم الجوهري للجمل الشرطية",
        definition: "'It's called Conditional, that means action B will only happen if action A happens.'",
        speech: "It is called conditional because action B will only happen if action A happens."
      }
    ]
  },
  {
    pageNum: 4,
    title: "The 3 English Conditionals Master Comparison",
    sub: "Student Notebook Page 4 • Real vs Imaginary vs Past Regrets",
    notes: [
      {
        term: "First Conditional (Real)",
        arabic: "الحالة الشرطية الأولى: واقعية وممكنة",
        definition: "Formula: If + Present Simple -> will + verb",
        example: "If he plays chess every day, he will become a pro player.",
        speech: "First conditional: If he plays chess every day, he will become a pro player."
      },
      {
        term: "Second Conditional (Imaginary)",
        arabic: "الحالة الشرطية الثانية: تخيلية وغير واقعية في الحاضر",
        definition: "Formula: If + Past Simple -> would + verb",
        example: "If he went to the gym, he would become a muscular man.",
        speech: "Second conditional: If he went to the gym, he would become a muscular man."
      },
      {
        term: "Third Conditional (Regrets)",
        arabic: "الحالة الشرطية الثالثة: ندم على ماضٍ لا يمكن تغييره",
        definition: "Formula: If + Past Perfect -> would have / might have + V3",
        example: "If someone had told me, I wouldn't have done it.",
        speech: "Third conditional: If someone had told me, I wouldn't have done it."
      }
    ]
  },
  {
    pageNum: 5,
    title: "Four Direct Ways to Express Regret",
    sub: "Student Notebook Page 5 • Personal Regret Expressions",
    notes: [
      {
        term: "1. Present Regret",
        arabic: "ندم على الحاضر (أتمنى تغيير الواقع الآن)",
        definition: "Formula: I wish + Past Simple",
        example: "I wish I had more time.",
        speech: "I wish I had more time. Used to express present regret."
      },
      {
        term: "2. Past Regret",
        arabic: "ندم على الماضي (تمني عكس ما حدث سابقاً)",
        definition: "Formula: I wish + Past Perfect",
        example: "I wish I had studied harder.",
        speech: "I wish I had studied harder. Used to express past regret."
      },
      {
        term: "3. Strong Emotional Regret",
        arabic: "ندم عاطفي قوي (يا ليتني فعلت كذا)",
        definition: "Formula: If only + Past Perfect",
        example: "If only I had listened!",
        speech: "If only I had listened! Expresses strong emotional regret."
      },
      {
        term: "4. Direct Personal Regret",
        arabic: "ندم مباشر على فعل معين",
        definition: "Formula: I regret + V-ing (gerund)",
        example: "I regret leaving.",
        speech: "I regret leaving. Direct regret followed by gerund."
      }
    ]
  }
];

/* ==========================================================================
   SESSION 12: CHARACTER ANALYSIS & PROFESSIONAL RECRUITMENT (28 VOCABULARY WORDS)
   Official British Council Intermediate B1 Handout: ARB_B1_03_I053CEU_HO_v1.0
   Italian Ski Resort Case Study • Smartboard Slides 5, 6, 7, 8 & Classroom Notes
   ========================================================================== */
const VOCAB_SESSION_12 = [
  {
    id: 1201,
    word: "Outgoing",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈaʊtˌɡəʊ.ɪŋ/",
    citation: "Handout Page 1 & Smartboard Slides 5 & 7",
    definition: "Friendly, energetic, and happy to talk to new people.",
    b1Explain: "شخص اجتماعي، ودود، منفتح على الآخرين ويسهل عليه التحدث وبناء العلاقات.",
    sentence: "Since the assistant manager will deal with hotel guests every evening, you need to be outgoing and welcoming."
  },
  {
    id: 1202,
    word: "Sociable",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈsəʊ.ʃə.bəl/",
    citation: "Handout Page 1 & Smartboard Slides 5 & 7",
    definition: "Liking to spend time with other people and making friends easily.",
    b1Explain: "شخص أنيس ومحب لمخالطة الناس والاستمتاع بالتجمعات وتكوين الصداقات.",
    sentence: "Are you sociable? Do you enjoy meeting international travelers and welcoming them at reception?"
  },
  {
    id: 1203,
    word: "Sympathetic listener",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˌsɪm.pəˈθet.ɪk ˈlɪs.ən.ər/",
    citation: "Handout Page 1 & Smartboard Slide 5 • Student Notebook",
    definition: "Someone who listens kindly and cares about your feelings and problems.",
    b1Explain: "مستمع متعاطف ومتفهم؛ ينصت باهتمام لمشاكل النزلاء ويواسيهم باحترافية.",
    sentence: "When guests face travel disruptions in the snow, a sympathetic listener can resolve their frustration immediately."
  },
  {
    id: 1204,
    word: "Punctual",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈpʌŋk.tʃu.əl/",
    citation: "Handout Page 1 & Smartboard Slides 5, 6 & 8",
    definition: "Able to make choices quickly, clearly, and with confidence.",
    b1Explain: "دقيق في المواعيد وحريص تماماً على عدم التأخير في أي واجب.",
    sentence: "A reliable hotel assistant manager must be strictly punctual for morning staff briefings."
  },
  {
    id: 1205,
    word: "Punctuality",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
    citation: "Teacher Whiteboard Annotation (Slide 7) • punctuality ≠ tardiness",
    definition: "Someone you can trust to do what they promised and do good work.",
    b1Explain: "الالتزام الدقيق بالمواعيد كسمة مهنية أساسية في العمل.",
    sentence: "The general manager emphasized that punctuality is non-negotiable in hospitality management."
  },
  {
    id: 1206,
    word: "Tardiness",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈtɑː.di.nəs/",
    citation: "Teacher Whiteboard Annotation (Slide 7) • Opposites Clinic",
    definition: "Someone who comes up with original, new, and interesting ideas.",
    b1Explain: "التأخر عن المواعيد أو التباطؤ (وهو نقيض الالتزام بالمواعيد تماماً).",
    sentence: "Habitual tardiness will quickly create staffing problems when shifts transition at reception."
  },
  {
    id: 1207,
    word: "Efficient",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ɪˈfɪʃ.ənt/",
    citation: "Handout Page 1 & Smartboard Slides 5 & 6",
    definition: "Someone who carefully checks facts before deciding what is true.",
    b1Explain: "كفء وسريع الإنجاز؛ يؤدي المهام بأعلى دقة وبدون هدر للوقت أو الموارد.",
    sentence: "She is an efficient coordinator who organizes the cleaning schedules in record time."
  },
  {
    id: 1208,
    word: "Work well under pressure",
    pos: "verb phrase",
    cambridgeLevel: "B2",
    pronunciation: "/wɜːk wel ˈʌn.dər ˈpreʃ.ər/",
    citation: "Handout Page 1 & Smartboard Slides 5 & 7",
    definition: "Able to change easily to fit new situations and different jobs.",
    b1Explain: "يعمل بإتقان وهدوء وثبات تحت وطأة الضغوط وحالات الطوارئ.",
    sentence: "During a blizzard when the ski lifts close, hotel managers must work well under pressure."
  },
  {
    id: 1209,
    word: "Easy-going",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˌiː.ziˈɡəʊ.ɪŋ/",
    citation: "Handout Page 1 & Smartboard Slides 5, 6 & 7",
    definition: "Paying careful attention to every small part of a job to avoid mistakes.",
    b1Explain: "مرن، هادئ البال، متسامح وغير متشنج، لا يغضب من صغائر الأمور.",
    sentence: "His easy-going manner helps diffuse tension when anxious tourists arrive after a long bus journey."
  },
  {
    id: 1210,
    word: "Calm",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/kɑːm/",
    citation: "Handout Page 1 & Smartboard Slides 5, 6 & 7",
    definition: "Working hard on your own without needing someone to tell you what to do.",
    b1Explain: "هادئ، رزين ومتزن الأعصاب، يحتفظ برباطة جأشه في المواقف الصعبة.",
    sentence: "It is important that you remain calm and reassure guests when the ski resort experiences power outages."
  },
  {
    id: 1211,
    word: "Mature",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/məˈtʃʊər/",
    citation: "Handout Page 1 & Smartboard Slides 5 & 7 • Student Notebook",
    definition: "Able to stay calm and not get angry when things take a long time.",
    b1Explain: "ناضج، مكتمل الوعي، يتصرف بحكمة ورزانة ويتحمل عواقب قراراته.",
    sentence: "Because you will supervise hotel staff, you need to be mature and handle disputes fairly."
  },
  {
    id: 1212,
    word: "Responsible",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈspɒn.sə.bəl/",
    citation: "Handout Page 1 & Smartboard Slides 5, 7 & 8",
    definition: "Always arriving on time and never being late.",
    b1Explain: "مسؤول ومحل ثقة، يُعتمد عليه في إدارة المنشأة وتأدية الواجبات بأمانة.",
    sentence: "The assistant manager is responsible for locking the ski equipment storage and safe every night."
  },
  {
    id: 1213,
    word: "Decisive",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/dɪˈsaɪ.sɪv/",
    citation: "Handout Page 1 & Smartboard Slides 5, 6, 7 & Whiteboard Phonetics",
    definition: "Careful in speaking so that you do not upset or offend other people.",
    b1Explain: "حاسم وقاطع في اتخاذ القرارات دون تردد أو تسويف.",
    sentence: "When weather conditions turn dangerous, a decisive manager closes the outdoor terrace immediately."
  },
  {
    id: 1214,
    word: "Reserved",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/rɪˈzɜːvd/",
    citation: "Smartboard Slide 7 & Student Notebook Page 2 (has own rules / keeps private)",
    definition: "Continuing to try hard and not giving up when something is difficult.",
    b1Explain: "متحفظ، كفوف اللسان وكتوم، لا يفصح عن مشاعره بسهولة ويفضل الهدوء.",
    sentence: "Although Peter is quiet and reserved in his personal life, he is very polite with clients."
  },
  {
    id: 1215,
    word: "Keen",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/kiːn/",
    citation: "Candidate Card (Peter Bogdovic) & Student Notebook Page 2",
    definition: "Someone who finds good answers to difficult situations or troubles.",
    b1Explain: "متحمس للغاية، شغوف، وراغب بجدية في التعلم وتطوير مهاراته.",
    sentence: "Peter is very keen to learn hospitality management because he plans to open his own boutique hotel."
  },
  {
    id: 1216,
    word: "Bad-tempered",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˌbædˈtem.pəd/",
    citation: "Smartboard Slide 7 & Student Notebook Page 2 (very angry / mad)",
    definition: "A person who works well and cooperates happily with other colleagues.",
    b1Explain: "سريع الغضب وعصبي المزاج؛ ينفعل لأتفه الأسباب (عكس هادئ الطباع).",
    sentence: "A bad-tempered receptionist will quickly damage the luxury hotel's five-star reputation."
  },
  {
    id: 1217,
    word: "Whiny",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈwaɪ.ni/",
    citation: "Student Notebook Page 2 (whiny -> whine / irritating complaint)",
    definition: "The skill of guiding, encouraging, and leading a group of people.",
    b1Explain: "كثير التذمر والنواح والشكوى بصوت مزعج ومستفز.",
    sentence: "Tired travelers can become whiny if their luggage arrives late at the alpine ski depot."
  },
  {
    id: 1218,
    word: "Isolated",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈaɪ.sə.leɪ.tɪd/",
    citation: "Handout Page 1 (Job Advert) & Student Notebook Page 1",
    definition: "A strong personal belief in working hard and doing your job well.",
    b1Explain: "منعزل، ناءٍ وبعيد عن المدن والتجمعات السكانية الكبيرة.",
    sentence: "The ski resort hotel has 20 rooms and is located in a beautiful, but rather isolated, valley in the Italian Alps."
  },
  {
    id: 1219,
    word: "Ski resort",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈskiː rɪˌzɔːt/",
    citation: "Handout Page 1 (Job Advert) & Candidate Card",
    definition: "The chances of being promoted, earning more, and having a good future at work.",
    b1Explain: "منتجع تزلج جبلي؛ وجهة سياحية شتوية مجهزة للمتزلجين ومحبي الجليد.",
    sentence: "Winter is the busiest season in an alpine ski resort when thousands of skiers arrive on holiday."
  },
  {
    id: 1220,
    word: "Multi-task",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/ˌmʌl.tiˈtɑːsk/",
    citation: "Student Notebook Page 1 (Hotel duties: multi-task)",
    definition: "To do more than one task or duty at the same time.",
    b1Explain: "إنجاز مهام متعددة في آن واحد بمهارة وتنظيم دون إرباك.",
    sentence: "Hotel assistant managers must multi-task between answering phone calls, checking in guests, and supervising the dining room."
  },
  {
    id: 1221,
    word: "Enquiries",
    pos: "noun plural",
    cambridgeLevel: "B1",
    pronunciation: "/ɪnˈkwaɪə.riz/",
    citation: "Handout Page 1 (Duties: dealing with enquiries at reception)",
    definition: "Questions or requests for information from customers or guests.",
    b1Explain: "استفسارات وتساؤلات النزلاء والعملاء في مكتب الاستقبال.",
    sentence: "The evening duties include dealing with enquiries about ski equipment hire, weather, and dinner reservations."
  },
  {
    id: 1222,
    word: "Acting manager",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈæk.tɪŋ ˈmæn.ɪ.dʒər/",
    citation: "Handout Page 1 (Job Advert: acting manager when manager is away)",
    definition: "A person who temporarily does the job of the manager while the manager is away.",
    b1Explain: "مدير بالنيابة؛ يتولى مسؤولية إدارة المنشأة بالكامل حين يكون المدير غائباً.",
    sentence: "Because you will be the acting manager when the general manager is away, you must be mature and decisive."
  },
  {
    id: 1223,
    word: "Perks",
    pos: "noun plural",
    cambridgeLevel: "B2",
    pronunciation: "/pɜːks/",
    citation: "Handout Page 1 (Offer: free accommodation, meals, ski pass, car)",
    definition: "Extra benefits or nice advantages you get from your job besides your regular pay.",
    b1Explain: "مزايا وامتيازات وظيفية إضافية (مثل السكن المجاني وتذاكر التزلج وسيارة الشركة).",
    sentence: "The job perks include free accommodation, daily meals, two months' paid holiday, and a complimentary ski pass."
  },
  {
    id: 1224,
    word: "Hesitant",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈhez.ɪ.tənt/",
    citation: "Smartboard Slide 7 (Opposite of decisive: hesitant)",
    definition: "Slow to speak or act because you feel uncertain or nervous.",
    b1Explain: "متردد وغير واثق، يتلكأ في اتخاذ الخطوات والقرارات المصيرية.",
    sentence: "In an emergency evacuation, a manager cannot be hesitant; immediate decisions must be made."
  },
  {
    id: 1225,
    word: "Organised",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈɔː.ɡən.aɪzd/",
    citation: "Smartboard Slide 7 & Whiteboard Phonetics Clinic (/d/ ending, 1st stress)",
    definition: "Able to plan your time and keep your things neat and in good order.",
    b1Explain: "منظم ومرتب؛ يخطط أعماله بدقة منهجية ويحفظ الأمور في نصابها الصحيح.",
    sentence: "An organised assistant manager keeps the staff rota and reservation ledger meticulously updated."
  },
  {
    id: 1226,
    word: "Diversity",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/daɪˈvɜː.sə.ti/",
    citation: "Teacher Whiteboard Phonetics Clinic (/daɪˈvɜː.sə.ti/)",
    definition: "Having people of different backgrounds, cultures, and skills in a team.",
    b1Explain: "التنوع والتعددية الإيجابية في الخبرات والثقافات والخلفيات المهنية.",
    sentence: "The hotel staff team benefits from cultural diversity, allowing them to welcome guests in five different languages."
  },
  {
    id: 1227,
    word: "Empathetic",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˌem.pəˈθet.ɪk/",
    citation: "Student Notebook Page 1 (empathetic - high level / feel sorry)",
    definition: "Able to understand and share the feelings and worries of another person.",
    b1Explain: "مفرط التعاطف ومستشعر لمشاعر الآخرين؛ يضع نفسه مكان النزيل ويفهم حالته بعمق.",
    sentence: "Being empathetic enables the assistant manager to calm down stressed families who lost their ski goggles."
  },
  {
    id: 1228,
    word: "Under pressure",
    pos: "prepositional phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ˈʌn.dər ˈpreʃ.ər/",
    citation: "Handout Page 1 & Smartboard Slide 5 • Student Notebook",
    definition: "Working in a stressful situation with tight deadlines or big challenges.",
    b1Explain: "تحت وطأة الضغط العصبي أو ضيق الوقت أو ثقل المسؤولية.",
    sentence: "Hotel staff must keep smiling and deliver flawless hospitality even when they are working under pressure."
  }
];

/* ==========================================================================
   SESSION 12 STUDY MODULE DATA STRUCTURES: CHARACTER ANALYSIS & RECRUITMENT
   ========================================================================== */

/* ==========================================================================
   MODULE 0: LEAD-IN ACTIVITY (HANDOUT PAGE 1 & STUDENT NOTEBOOK PAGE 1)
   ========================================================================== */
const SESSION_12_LEAD_IN = {
  instruction: "Think of someone you know. Make short notes about them in the table: Age, Hobbies, Job, Character, Appearance.",
  partnerNotes: {
    age: "25 years old",
    hobbies: "Drawing & Digital Art",
    job: "Software Engineer (Backend Developer)",
    character: "Kind person, reliable, calm under pressure",
    appearance: "Short stature, distinctive curly hair"
  },
  modelDescription: "My study partner is 25 years old. He works as a backend software engineer. He is a very kind and thoughtful person who remains calm even during demanding project deadlines. Visually, he is of short height with dark curly hair. In his spare time, his favourite hobby is drawing and creating digital illustrations.",
  usefulPhrases: [
    { en: "He / She is in their mid-twenties", ar: "هو / هي في منتصف العشرينات" },
    { en: "Works as a backend developer", ar: "يعمل كمطور للأنظمة الخلفية" },
    { en: "Has a really easy-going nature", ar: "يتمتع بطبيعة هادئة وسهلة المعشر" },
    { en: "Medium height with curly hair", ar: "متوسط القامة بشعر مجعد" },
    { en: "Kind and supportive colleague", ar: "زميل طيب وداعم للآخرين" }
  ]
};

const SESSION_12_JOB_ADVERT = {
  title: "Assistant Hotel Manager — Alpine Ski Resort, Italy",
  code: "ARB_B1_03_I053CEU • Italian Alps Luxury Hospitality",
  fullText: `We are looking for an assistant manager to help with the day-to-day running of a small hotel. The hotel has 20 rooms and is located in a beautiful, but rather isolated, ski resort in Italy. Our hotel is obviously busiest in winter, although we have steady business for the rest of the year.

The duties of the job include:
• dealing with enquiries at reception in the evenings
• organising staff responsibilities when the manager is away
• serving in the bar / restaurant at busy times

The applicant needs to speak Italian and English, and other languages would be an advantage. Previous experience of reception work and good computer skills are required. As many of our guests are skiers, some knowledge of skiing would be useful too. Since you will be dealing with the public, you need to be outgoing and sociable and also a sympathetic listener! We are also looking for someone who is punctual and efficient.

Although there will be some time to relax, the job does get stressful at times, so it is important that you can work well under pressure and remain easy-going and calm with the public. Because you will be the acting manager when the manager is away, you need to be mature, responsible and decisive.

For the right person, we can offer: an excellent salary with free accommodation and meals; one full day off per week; two months’ paid holiday per year; a free ski pass and free use of a car.`,
  hotelInfo: {
    rooms: 20,
    setting: "Small boutique hotel located in a beautiful, but rather isolated, ski resort in Italy.",
    seasonality: "Busiest in winter during ski season, with steady trade for the rest of the year."
  },
  duties: [
    { icon: "🛎️", title: "Reception Enquiries", desc: "Dealing with guest enquiries, bookings, and check-ins at reception during the evenings." },
    { icon: "📋", title: "Staff Responsibilities", desc: "Organising staff responsibilities and supervising kitchen, cleaning, and bar personnel when the general manager is away." },
    { icon: "🍸", title: "Bar & Restaurant Service", desc: "Serving drinks in the bar and assisting restaurant staff during peak dining hours and apres-ski celebrations." }
  ],
  requirements: [
    { icon: "🗣️", req: "Languages", detail: "Must speak Italian and English fluently; additional European languages (French, German, Croatian) are a clear advantage." },
    { icon: "💻", req: "Experience & Tech", detail: "Previous experience of hotel reception work and solid computer skills are strictly required." },
    { icon: "⛷️", req: "Skiing Knowledge", detail: "Knowledge of skiing and alpine equipment is highly useful since most hotel guests are enthusiastic skiers." },
    { icon: "🌟", req: "Character Profile", detail: "Outgoing and sociable, sympathetic listener, punctual and efficient, works well under pressure, calm, easy-going, mature, responsible, and decisive." }
  ],
  perks: [
    { perk: "Excellent Salary", detail: "Highly competitive pay package for the alpine region." },
    { perk: "Free Accommodation & Meals", detail: "On-site private room with complimentary daily breakfast, lunch, and dinner." },
    { perk: "1 Full Day Off Weekly", detail: "Guaranteed rest day every week during peak winter." },
    { perk: "2 Months' Paid Holiday", detail: "Generous two-month paid annual leave during offseason." },
    { perk: "Free Ski Pass", detail: "Unlimited seasonal ski pass for the entire alpine resort slopes." },
    { perk: "Free Use of a Car", detail: "Company vehicle provided for personal and business transportation." }
  ],
  comprehensionAnalysis: {
    question: "Do you think this would be a good job? Is there anything you wouldn't like about it?",
    pros: [
      "Extremely generous benefits: free housing, meals, ski pass, car, and 2 months paid holiday.",
      "Valuable managerial experience acting as general manager during owner absence.",
      "Great lifestyle for skiing and outdoor mountain sports enthusiasts."
    ],
    cons: [
      "The resort is isolated, making winter transport and social life outside the hotel limited.",
      "High winter workload: evening shifts, bar service, and covering multiple roles under pressure.",
      "Heavy responsibility when acting as sole manager on duty."
    ]
  }
};

/* ==========================================================================
   LANGUAGE FOCUS MATCHING LAB (HANDOUT PAGE 2 & SMARTBOARD SLIDE 6)
   ========================================================================== */
const SESSION_12_MATCHING_QUIZ = [
  {
    num: 1,
    clue: "someone who is never late",
    answer: "punctual",
    arabic: "دقيق في المواعيد",
    rule: "Adjective describing strict adherence to appointed hours. Opposite: often late (tardy)."
  },
  {
    num: 2,
    clue: "someone who doesn't get angry easily",
    answer: "calm / easy-going",
    arabic: "هادئ الطبع / رزين",
    rule: "Possesses a relaxed temperament; diffuses stress smoothly without conflict."
  },
  {
    num: 3,
    clue: "someone who makes friends easily",
    answer: "sociable",
    arabic: "أنيس ومحب للمخالطة",
    rule: "Enjoys engaging with groups and establishing warm relationships effortlessly."
  },
  {
    num: 4,
    clue: "someone who has a very relaxed character",
    answer: "easy-going / calm",
    arabic: "مرن وهادئ البال",
    rule: "Tolerant, balanced, and unlikely to become flustered by sudden changes."
  },
  {
    num: 5,
    clue: "someone who is not afraid to make important decisions",
    answer: "decisive",
    arabic: "حاسم وقاطع في قراراته",
    rule: "Acts with firmness, clarity, and authority in urgent situations."
  },
  {
    num: 6,
    clue: "someone who does their job quickly and well",
    answer: "efficient",
    arabic: "كفء وسريع الإنجاز",
    rule: "Produces high-quality results without wasting time, effort, or resources."
  },
  {
    num: 7,
    clue: "someone who understands other people's problems",
    answer: "sympathetic listener",
    arabic: "مستمع متعاطف ومتفهم",
    rule: "Pays empathetic attention to guests' issues, demonstrating genuine care."
  },
  {
    num: 8,
    clue: "someone who is friendly and happy to meet and talk to new people (2 words)",
    answer: "outgoing, sociable",
    arabic: "اجتماعي ومنفتح وأنيس",
    rule: "Extroverted, welcoming, and energized by conversational interaction with guests."
  }
];

const SESSION_12_CHARACTER_TRAITS = [
  {
    trait: "Outgoing",
    opposite: "Shy, reserved",
    meaning: "Friendly, lively, and finding it easy to talk to people.",
    arabic: "اجتماعي ومنفتح",
    jobContext: "Essential for greeting guests warmly at reception in the evenings.",
    speech: "Outgoing. Opposite: shy, reserved."
  },
  {
    trait: "Sociable",
    opposite: "Quiet, reserved",
    meaning: "Liking to be with and interact with other people.",
    arabic: "أنيس ومحب للمخالطة",
    jobContext: "Crucial for socializing with guests and creating a friendly lodge atmosphere.",
    speech: "Sociable. Opposite: quiet, reserved."
  },
  {
    trait: "Sympathetic listener",
    opposite: "Uncaring, selfish, cruel",
    meaning: "Understands other people's problems and listens with genuine compassion.",
    arabic: "مستمع متعاطف ومتفهم",
    jobContext: "Needed when guests experience travel delays, altitude sickness, or lost ski gear.",
    speech: "Sympathetic listener. Opposite: uncaring, selfish, cruel."
  },
  {
    trait: "Punctual",
    opposite: "Often late (Tardy)",
    meaning: "Arrives strictly on time; never late for duties or meetings.",
    arabic: "دقيق في المواعيد",
    jobContext: "Shifts and morning desk handovers depend on exact timekeeping.",
    speech: "Punctual. Opposite: often late, or tardy."
  },
  {
    trait: "Efficient",
    opposite: "Disorganised, lazy",
    meaning: "Does the job quickly, accurately, and without wasting time or resources.",
    arabic: "كفء وسريع الإنجاز",
    jobContext: "Required for computer check-ins, ski pass validation, and supplier orders.",
    speech: "Efficient. Opposite: disorganised, lazy."
  },
  {
    trait: "Works well under pressure",
    opposite: "Stressed, nervous",
    meaning: "Maintains clear thinking and steady performance during emergencies or rushes.",
    arabic: "يعمل بإتقان تحت الضغط",
    jobContext: "Winter weekends can be chaotic with 20 rooms checking in simultaneously.",
    speech: "Works well under pressure. Opposite: stressed, nervous."
  },
  {
    trait: "Easy-going",
    opposite: "Bad-tempered, short-tempered",
    meaning: "Relaxed character who does not get angry or annoyed easily.",
    arabic: "هادئ الطبع وسهل المعشر",
    jobContext: "Helps handle demanding or frustrated guests smoothly without conflict.",
    speech: "Easy-going. Opposite: bad-tempered, short-tempered."
  },
  {
    trait: "Calm",
    opposite: "Nervous, stressed, on edge, jumpy",
    meaning: "Peaceful, composed, and free from anxiety or panic.",
    arabic: "هادئ ورزين ومتزن",
    jobContext: "Reassures hotel guests during alpine blizzards or road closures.",
    speech: "Calm. Opposite: nervous, stressed, on edge, jumpy."
  },
  {
    trait: "Mature",
    opposite: "Childish",
    meaning: "Behaves sensibly like an adult; capable of handling serious responsibility.",
    arabic: "ناضج وراشد الفكر",
    jobContext: "Acts as the sole manager on duty when the general manager travels.",
    speech: "Mature. Opposite: childish."
  },
  {
    trait: "Responsible",
    opposite: "Immature, inexperienced, careless",
    meaning: "Trustworthy and reliable in taking charge of important duties.",
    arabic: "مسؤول وموثوق",
    jobContext: "Entrusted with cash registers, hotel keys, and emergency safety protocols.",
    speech: "Responsible. Opposite: immature, inexperienced, careless."
  },
  {
    trait: "Decisive",
    opposite: "Hesitant",
    meaning: "Not afraid to make important choices firmly and swiftly.",
    arabic: "حاسم وقاطع في قراراته",
    jobContext: "Must make rapid decisions regarding staff rosters or room reassignments.",
    speech: "Decisive. Opposite: hesitant."
  }
];

const SESSION_12_PUNCTUALITY_VS_TARDINESS = {
  rule: "Teacher Whiteboard Key Rule: Punctuality ≠ Tardiness",
  forms: [
    { pos: "Adjective", positive: "Punctual (never late)", negative: "Tardy / Often late", note: "Describes a person's habit regarding time." },
    { pos: "Noun", positive: "Punctuality (promptness)", negative: "Tardiness (lateness)", note: "Abstract quality of arriving on schedule vs delaying." },
    { pos: "Adverb", positive: "Punctually (on the dot)", negative: "Tardily (belatedly)", note: "Manner of executing duties without delay." }
  ],
  collocations: [
    { en: "Maintain strict punctuality", ar: "الحفاظ على دقة المواعيد الصارمة" },
    { en: "Habitual tardiness is grounds for dismissal", ar: "التأخر المتكرر سبب لإنهاء الخدمة" },
    { en: "Punctuality is the courtesy of kings", ar: "دقة المواعيد من شيم العظماء والملوك" }
  ]
};

const SESSION_12_CANDIDATE_PETER = {
  name: "Peter Bogdovic",
  age: 29,
  nationality: "Croatian",
  languages: "Croatian (native), English (good); some Italian and French",
  qualifications: "Ex-ski coach / instructor • Good computer skills",
  medicalNotice: "Stopped skiing professionally because of a back injury, which makes it difficult for him to drive.",
  experience: "Has done holiday work as a waiter, and chef. Plans to open his own hotel in a ski resort when he has the necessary experience.",
  personality: "Very keen and enthusiastic. Wants to learn. Quiet, serious and ambitious.",
  pros: [
    "Ski resort insider: Ex-ski instructor who understands skiers' exact needs and daily habits.",
    "Bilingual competence: Fluent Croatian, good English, plus working knowledge of Italian and French.",
    "Restaurant & bar versatility: Practical experience as both waiter and chef to cover busy dinner rushes.",
    "Computer literate: Meets the technical requirement for operating hotel reception software.",
    "Highly motivated: Ambitious to learn hospitality management to launch his own ski resort hotel."
  ],
  cons: [
    "Driving limitation: Back injury makes driving difficult (problematic since job offers free car and resort is isolated).",
    "Italian level: Only speaks 'some Italian' (job requires speaking Italian with local suppliers and Italian guests).",
    "Introverted temperament: Described as 'quiet and serious' (job advert specifically requests 'outgoing and sociable').",
    "No acting manager background: Has never previously supervised a full hotel staff team."
  ],
  verdict: "Strong candidate with exceptional ski resort empathy and catering skills, but requires language tutoring in Italian and transport accommodations."
};

const SESSION_12_DISCUSSION_QUESTIONS = [
  {
    num: 1,
    q: "Are you always punctual? How do you feel if people keep you waiting?",
    focusWord: "Punctual / Punctuality",
    modelAnswer: "I pride myself on being extremely punctual. In professional situations, arriving 10 minutes early is my standard. When others keep me waiting without notice, it feels disrespectful of my time, though I stay calm if there's a valid delay.",
    speech: "Are you always punctual? How do you feel if people keep you waiting?"
  },
  {
    num: 2,
    q: "When do you need a sympathetic listener? Who do you talk to when you have a problem?",
    focusWord: "Sympathetic listener",
    modelAnswer: "Whenever I experience workplace burnout or have to make difficult career transitions, I need a sympathetic listener. I usually turn to my close mentor or trusted family members because they offer thoughtful advice without judging.",
    speech: "When do you need a sympathetic listener? Who do you talk to when you have a problem?"
  },
  {
    num: 3,
    q: "What are you responsible for in your job?",
    focusWord: "Responsible / Responsibility",
    modelAnswer: "In my current role, I am responsible for managing web development projects, coordinating cross-functional team sprints, and ensuring that our code quality meets the highest international engineering benchmarks.",
    speech: "What are you responsible for in your job?"
  },
  {
    num: 4,
    q: "Are you generally calm and easy-going? What things make you angry?",
    focusWord: "Calm & Easy-going",
    modelAnswer: "Generally, I am very calm and easy-going; small mistakes rarely bother me. However, deliberate dishonesty, laziness, and bad-tempered colleagues who refuse to communicate make me genuinely frustrated.",
    speech: "Are you generally calm and easy-going? What things make you angry?"
  },
  {
    num: 5,
    q: "Are you sociable? Do you enjoy going to parties and meeting new people? How often do you go out in the evening?",
    focusWord: "Sociable / Outgoing",
    modelAnswer: "Yes, I am quite sociable. While I enjoy focused quiet work during the day, I love attending cultural networking events and dinners twice a week to connect with people from diverse international backgrounds.",
    speech: "Are you sociable? Do you enjoy going to parties and meeting new people?"
  }
];

const SESSION_12_TEACHER_FEEDBACK = [
  {
    incorrect: "his hobbies is powerlifting",
    correct: "his hobby is powerlifting (or his hobbies are...)",
    category: "Subject-Verb Agreement",
    rule: "'Hobbies' is plural and takes 'are'. If mentioning one activity, use singular 'hobby is'.",
    speech: "Correction: His hobby is powerlifting. Or, his hobbies are powerlifting and skiing."
  },
  {
    incorrect: "I will feel stress",
    correct: "I will feel stressed",
    category: "Participle Adjective",
    rule: "'Stress' is a noun; when describing how a human feels, use the past participle adjective 'stressed'.",
    speech: "Correction: I will feel stressed."
  },
  {
    incorrect: "What about people waiting you?",
    correct: "What about people waiting for you?",
    category: "Preposition Dependency",
    rule: "The verb 'wait' requires the preposition 'for' before an object person: 'wait for someone'.",
    speech: "Correction: What about people waiting for you?"
  },
  {
    incorrect: "I don't like to waiting",
    correct: "I don't like waiting (or I don't like to wait)",
    category: "Gerund vs Infinitive",
    rule: "Use 'like + verb-ing' (waiting) or 'like + to + infinitive' (to wait). Never combine 'to + gerund'.",
    speech: "Correction: I don't like waiting. Or, I don't like to wait."
  },
  {
    incorrect: "Someone have more experience",
    correct: "Someone has more experience",
    category: "Indefinite Pronoun Concord",
    rule: "'Someone', 'everyone', and 'nobody' are grammatically singular and require third-person 'has'.",
    speech: "Correction: Someone has more experience."
  },
  {
    incorrect: "It depending on the problem",
    correct: "It depends on the problem",
    category: "Stative Verb / Present Simple",
    rule: "'Depend' is a stative verb expressing a general fact; use present simple 'it depends on'.",
    speech: "Correction: It depends on the problem."
  },
  {
    incorrect: "If someone needs me, he will find me...",
    correct: "If someone needs me, they will find me...",
    category: "Singular Gender-Neutral 'They'",
    rule: "In modern standard British English, refer back to indefinite pronouns (someone) with singular 'they'.",
    speech: "Correction: If someone needs me, they will find me."
  },
  {
    incorrect: "He is at a young age",
    correct: "He is young (or at a young age, he...)",
    category: "Concise Phrasing",
    rule: "Direct adjectives are more natural: 'He is young' rather than the wordy 'He is at a young age'.",
    speech: "Correction: He is young."
  }
];

const SESSION_12_PRONUNCIATION_LAB = [
  {
    word: "hotel",
    phonetic: "/həʊˈtel/",
    stressRule: "Stress is on the SECOND syllable (ho-TEL, not HO-tel).",
    audioSample: "hotel"
  },
  {
    word: "Croatia",
    phonetic: "/kroʊˈeɪ.ʃə/",
    stressRule: "Pronounce with the smooth /ʃ/ 'sh' sound on the second syllable.",
    audioSample: "Croatia"
  },
  {
    word: "organised",
    phonetic: "/ˈɔː.ɡən.aɪzd/",
    stressRule: "Primary stress falls on the FIRST syllable; ends with voiced /d/.",
    audioSample: "organised"
  },
  {
    word: "decisive",
    phonetic: "/dɪˈsaɪ.sɪv/",
    stressRule: "Stress the SECOND syllable; note the clear /aɪ/ 'eye' diphthong.",
    audioSample: "decisive"
  },
  {
    word: "diversity",
    phonetic: "/daɪˈvɜː.sə.ti/",
    stressRule: "Stress the SECOND syllable; British RP uses /daɪ/ or /dɪ/.",
    audioSample: "diversity"
  },
  {
    word: "punctuality",
    phonetic: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
    stressRule: "Secondary stress on 'punc', primary stress on 'al' (/æl/).",
    audioSample: "punctuality"
  }
];

const SESSION_12_NOTEBOOK_PAGES = [
  {
    pageNum: 1,
    title: "Classroom Lead-in & Hotel Assistant Criteria",
    sub: "Student Notebook • Page 1 Notes",
    notes: [
      {
        term: "Lead-in Partner Notes",
        definition: "Classroom partner description: '25 years old, Hobbies: Drawing, Job: SW (backend engineer), Character: Kind person, Appearance: Short with curly hair'.",
        arabic: "ملاحظات تعريف الشريك بالصف",
        speech: "Lead-in partner description: twenty five years old, backend software engineer, kind person."
      },
      {
        term: "Assistant Manager Job Core Traits",
        definition: "Key attributes noted from board: Not isolated, multi-task, 2 languages, outgoing & sociable, sympathetic listener (high level empathy), punctual & efficient (always submit on time), work well under pressure, calm, decisive, responsible, mature.",
        arabic: "صفات ومسؤوليات المدير المساعد",
        speech: "Assistant manager traits: outgoing, sociable, sympathetic listener, punctual, efficient, calm, mature, responsible, and decisive."
      },
      {
        term: "Mature (مكتمل النضج)",
        definition: "Can take responsible experience; behaving sensibly like an adult who makes trustworthy judgements.",
        arabic: "ناضج ويتحمل المسؤولية",
        speech: "Mature means being able to take responsible experience."
      }
    ]
  },
  {
    pageNum: 2,
    title: "Character Adjectives, Synonyms & Opposites",
    sub: "Student Notebook • Page 2 Notes",
    notes: [
      {
        term: "Reserved (متحفظ)",
        definition: "Has own rules; keeps thoughts private; quiet and avoids unnecessary chatter.",
        arabic: "متحفظ وله قواعده الخاصة",
        speech: "Reserved. Has own rules and keeps private."
      },
      {
        term: "Keen (شغوف ومتحمس)",
        definition: "Interesting, eager, and showing immense enthusiasm to learn new skills.",
        arabic: "شغوف ومقبل على التعلم",
        speech: "Keen means eager, interesting, and enthusiastic."
      },
      {
        term: "Bad-tempered (عصبي المزاج)",
        definition: "Very angry person; mad; loses patience easily over minor problems.",
        arabic: "حاد الطباع وسريع الغضب",
        speech: "Bad-tempered means a very angry person who gets mad easily."
      },
      {
        term: "Whiny (متذمر ونواح)",
        definition: "From the verb 'whine'; continuously complaining in an annoying, petulant voice.",
        arabic: "كثير التذمر والشكوى المزعجة",
        speech: "Whiny comes from whine; complaining constantly."
      }
    ]
  },
  {
    pageNum: 3,
    title: "Candidate Analysis: Peter Bogdovic Evaluation",
    sub: "Student Notebook • Page 3 Notes",
    notes: [
      {
        term: "Candidate Dossier",
        definition: "Age 29, Croatian, English good, some Italian & French. Ex-ski coach, waiter & chef. Stopped professional skiing due to back injury. Plans to open own hotel.",
        arabic: "ملف المرشح بيتر بوغدوفيتش",
        speech: "Candidate dossier: Peter Bogdovic, age twenty-nine, ex-ski coach and chef."
      },
      {
        term: "Strengths vs Challenges",
        definition: "Pros: Ski resort expert, restaurant work, computer skills, eager to learn. Cons: Driving limitation from back injury, basic Italian, introverted quiet nature.",
        arabic: "نقاط القوة والتحديات في التوظيف",
        speech: "Strengths include ski coaching and catering experience. Challenges include basic Italian and back injury."
      }
    ]
  }
];

/* ==========================================================================
   SESSION 13: STORYTELLING & NARRATIVE TENSES (28 VOCABULARY WORDS)
   Official British Council Intermediate B1 Handout: ARB_B1_01_I059CEU_HO_v1.0
   Past Simple, Past Continuous & Past Perfect • Smartboard Slides 11.08.08, 11.08.09 & Notebook
   ========================================================================== */
const VOCAB_SESSION_13 = [
  {
    id: 1301,
    word: "Magician",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/məˈdʒɪʃ.ən/",
    citation: "Handout Page 1 (Story A) • Cruise Ship Illusionist",
    definition: "A performer who does tricks that seem impossible to surprise people.",
    b1Explain: "ساحر أو فنان خفة يقدم عروضاً بصرية وحيلاً سحرية لإبهار الجمهور.",
    sentence: "A magician was working on a luxury cruise ship, performing illusions for the passengers every evening."
  },
  {
    id: 1302,
    word: "Cruise ship",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkruːz ʃɪp/",
    citation: "Handout Page 1 (Story A) • Setting of Story A",
    definition: "A huge passenger ship that takes people on holidays across the sea.",
    b1Explain: "سفينة سياحية ضخمة تنقل المسافرين في رحلات ترفيهية بحرية فاخرة.",
    sentence: "The cruise ship was sailing smoothly across the ocean before it struck an iceberg in the fog."
  },
  {
    id: 1303,
    word: "Squawk",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/skwɔːk/",
    citation: "Handout Page 1 (Story A) • The Parrot's Interruption",
    definition: "To make a loud, harsh, sharp sound like a parrot or angry bird.",
    b1Explain: "ينعق أو يصيح بصوت خشن حاد ومزعج (مثل صوت الببغاء المرتفع).",
    sentence: "The parrot kept squawking loudly during the magic act, revealing all the secret trapdoors."
  },
  {
    id: 1304,
    word: "Disappearing act",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˌdɪs.əˈpɪə.rɪŋ ækt/",
    citation: "Handout Page 1 (Title 3) • Student Notebook Page 1",
    definition: "A magic trick where something vanishes; or leaving suddenly without telling anyone.",
    b1Explain: "خدعة التواري أو الاختفاء السحري؛ أو الهروب والتملص المفاجئ من المكان.",
    sentence: "The magician intended to perform a simple disappearing act, but ended up losing the entire cruise liner."
  },
  {
    id: 1305,
    word: "Iceberg",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈaɪs.bɜːɡ/",
    citation: "Handout Page 1 (Story A) • Catastrophe at Sea",
    definition: "A very large piece of freshwater ice floating in the cold ocean.",
    b1Explain: "جبل جليدي ضخم طافٍ في مياه المحيط انفصل عن مثلجة قطبية.",
    sentence: "One night in the middle of the performance, the cruise vessel hit a submerged iceberg and began sinking."
  },
  {
    id: 1306,
    word: "Life raft",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈlaɪf rɑːft/",
    citation: "Handout Page 1 (Story A) • Emergency Survival",
    definition: "A small boat kept on a ship to save people if the ship sinks.",
    b1Explain: "قارب نجاة مطاطي أو طوافة إنقاذ تستخدم للنجاة عند غرق السفن في البحر.",
    sentence: "The shivering entertainer managed to drag himself out of the freezing water onto a nearby life raft."
  },
  {
    id: 1307,
    word: "Croak",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/krəʊk/",
    citation: "Handout Page 1 (Story A) • Parrot's Punchline",
    definition: "To make a low, rough, hoarse sound like a frog.",
    b1Explain: "ينعق بصوت أجش وخشن ومبحوح يخرج بصعوبة من الحلق.",
    sentence: "After gazing at the solitary survivor in shock, the parrot croaked: 'Where on earth is the ship?'"
  },
  {
    id: 1308,
    word: "Admit",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ədˈmɪt/",
    citation: "Handout Page 1 (Story A) & Student Notebook Page 2",
    definition: "To say that something is true, often when you feel embarrassed about it.",
    b1Explain: "يعترف بالواقع أو يقر بصحة أمر ما بعد تردد أو إنكار.",
    sentence: "The cynical bird finally had to admit that causing a 20-deck ship to vanish was an incredible trick."
  },
  {
    id: 1309,
    word: "Fishing boat",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfɪʃ.ɪŋ bəʊt/",
    citation: "Handout Page 1 (Story B) • Japanese Sea Incident",
    definition: "A boat used to catch fish in the sea or a river.",
    b1Explain: "سفينة أو قارب صيد مخصص لاصطياد الأسماك في عرض البحر.",
    sentence: "A traditional Japanese fishing boat was operating peacefully offshore when catastrophe fell from the clouds."
  },
  {
    id: 1310,
    word: "Off the coast",
    pos: "prepositional phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ɒf ðə kəʊst/",
    citation: "Handout Page 1 (Story B) • Geographical Location",
    definition: "In the sea, near to the land or beach.",
    b1Explain: "قبالة الشاطئ أو بمحاذاة الساحل البحري على مسافة قصيرة من اليابسة.",
    sentence: "The crew were dragging their fishing nets off the eastern coast of Japan when the accident occurred."
  },
  {
    id: 1311,
    word: "Criminal damage",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˌkrɪm.ɪ.nəl ˈdæm.ɪdʒ/",
    citation: "Handout Page 1 (Story B) • Judicial Charge",
    definition: "The crime of breaking or ruining someone else's things on purpose.",
    b1Explain: "إتلاف جنائي متعمد للممتلكات وتدميرها بالمخالفة للقانون.",
    sentence: "Because the incredulous shipowner refused to believe their story, the fishermen were jailed for criminal damage."
  },
  {
    id: 1312,
    word: "Come forward",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/kʌm ˈfɔː.wəd/",
    citation: "Handout Page 1 (Story B) • Witness Exoneration",
    definition: "To offer help, information, or evidence to the police.",
    b1Explain: "يتقدم طواعية للإدلاء بشهادة أو الكشف عن معلومات حاسمة لتبرئة مظلوم.",
    sentence: "The innocent men remained imprisoned until an air-cargo employee came forward with the bizarre explanation."
  },
  {
    id: 1313,
    word: "Transport",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/trænˈspɔːt/",
    citation: "Handout Page 1 (Story B) • Air Cargo Operations",
    definition: "To move people or goods from one place to another using a vehicle.",
    b1Explain: "ينقل البضائع أو الركاب أو المواشي بوسائل النقل لمسافات بعيدة.",
    sentence: "The commercial air carrier was chartered to transport live dairy cattle across international borders."
  },
  {
    id: 1314,
    word: "Panic",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ˈpæn.ɪk/",
    citation: "Handout Page 1 (Story B) • In-flight Emergency",
    definition: "A sudden strong feeling of fear that stops you from thinking clearly.",
    b1Explain: "يصيبه الذعر والهلع المفاجئ ويفقد السيطرة على تصرفاته من شدة الخوف.",
    sentence: "Midway through turbulence at thirty thousand feet, the massive cow panicked and destabilized the airframe."
  },
  {
    id: 1315,
    word: "Aircraft",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈeə.krɑːft/",
    citation: "Handout Page 1 (Story B) • Flight Safety",
    definition: "Any vehicle, like a plane or helicopter, that flies in the sky.",
    b1Explain: "طائرة أو مركبة جوية مصممة للتحليق في الفضاء الجوي.",
    sentence: "To prevent the transport aircraft from rolling over and crashing, the crew jettisoned the cargo ramp."
  },
  {
    id: 1316,
    word: "Give someone a lift",
    pos: "idiom",
    cambridgeLevel: "B1",
    pronunciation: "/ɡɪv ˈsʌm.wʌn ə lɪft/",
    citation: "Handout Page 1 (Story C) • Country Highway Hitchhiking",
    definition: "To take someone in your car to the place they want to go for free.",
    b1Explain: "يوصل شخصاً في طريقه بسيارته مجاناً كمعروف إنساني.",
    sentence: "The motorist felt pity for the hitchhiker standing alone in the rain and pulled over to give him a lift."
  },
  {
    id: 1317,
    word: "Trot",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/trɒt/",
    citation: "Handout Page 1 (Story C) • Animal Locomotion",
    definition: "To move faster than a walk but slower than a run, with short quick steps.",
    b1Explain: "يهرول أو يركض بخطوات قصيرة ورشيقة وإيقاعية سريعة.",
    sentence: "The driver glanced in his rear-view mirror and was shocked to see a sheep trotting alongside at thirty miles per hour."
  },
  {
    id: 1318,
    word: "Overtake",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.vəˈteɪk/",
    citation: "Handout Page 1 (Story C) • Highway Passing Manoeuvre",
    definition: "To drive past another slower car that is moving in front of you.",
    b1Explain: "يتجاوز أو يتخطى سيارة أو شخصاً آخر يسير أمامه على الطريق السريع.",
    sentence: "Her tongue was hanging out not from fatigue, but because she was signaling to overtake our speeding sedan."
  },
  {
    id: 1319,
    word: "Exhausted",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ɪɡˈzɔː.stɪd/",
    citation: "Handout Page 2 (True/False Item 6) • Physical Condition",
    definition: "Extremely tired, with no energy left in your body.",
    b1Explain: "منهك القوى ومستنزف الطاقة كلياً من شدة الإجهاد البدني أو العقلي.",
    sentence: "After sprinting behind the motoring vehicle for ten miles, any normal mammal would be thoroughly exhausted."
  },
  {
    id: 1320,
    word: "Pigs might fly",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/pɪɡz maɪt flaɪ/",
    citation: "Handout Page 1 (Title 4) • Sarcastic British Idiom",
    definition: "An English saying used to say that something is impossible and will never happen.",
    b1Explain: "تعبير اصطلاحي بريطاني مجازي يعبر عن استحالة وقوع أمر ما (مثل: 'في المشمش').",
    sentence: "If you think your strict boss will let you take Friday off without notice, pigs might fly!"
  },
  {
    id: 1321,
    word: "Need for speed",
    pos: "idiom",
    cambridgeLevel: "B1",
    pronunciation: "/niːd fɔː spiːd/",
    citation: "Handout Page 1 (Title 5) • Student Notebook Page 1",
    definition: "A strong desire to go very fast in a car or sport.",
    b1Explain: "هوس أو شغف جارف بالسرعة والاندفاع والحركة الخاطفة.",
    sentence: "That racing ram clearly had an uncontrollable need for speed as she accelerated down the country bypass."
  },
  {
    id: 1322,
    word: "Narrative tenses",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈnær.ə.tɪv ˈten.sɪz/",
    citation: "Handout Page 2 & Smartboard Slide 11.08.08",
    definition: "Past tenses (past simple, continuous, and perfect) used together to tell stories.",
    b1Explain: "أزمنة السرد الحكائي المستخدمة معاً لبناء القصص وترتيب أحداثها زمنياً.",
    sentence: "Skilled storytellers alternate between the three narrative tenses to establish background and sequence events."
  },
  {
    id: 1323,
    word: "Past simple",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/pɑːst ˈsɪm.pəl/",
    citation: "Smartboard Slide 11.08.08 (Rule 1)",
    definition: "The tense used for completed actions and main events in the past.",
    b1Explain: "الماضي البسيط؛ يُستخدم للتعبير عن الأحداث المكتملة والمحددة التي وقعت في الماضي.",
    sentence: "We use the past simple for sequential main events: the boat sank, the police arrived, and the driver stopped."
  },
  {
    id: 1324,
    word: "Past continuous",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/pɑːst kənˈtɪn.ju.əs/",
    citation: "Smartboard Slide 11.08.08 (Rule 2)",
    definition: "The tense (was/were + verb-ing) used for an action that was going on in the past when another event happened.",
    b1Explain: "الماضي المستمر؛ يُستخدم لبيان حدث كان مستمراً في الماضي عند وقوع حدث آخر.",
    sentence: "The crew were trawling for cod when an unexpected bovine object dropped through their deck canopy."
  },
  {
    id: 1325,
    word: "Past perfect",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/pɑːst ˈpɜː.fɪkt/",
    citation: "Smartboard Slide 11.08.08 (Rule 3)",
    definition: "The tense (had + past participle) used for an action finished before another point in the past.",
    b1Explain: "الماضي التام؛ يُستخدم لوصف حدث اكتمل وقوعه قبل حدث ماضٍ آخر في التسلسل الزمني.",
    sentence: "The suspect had already fled the alleyway before the first police squad car arrived at the crime scene."
  },
  {
    id: 1326,
    word: "In the middle of",
    pos: "prepositional phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ɪn ðə ˈmɪd.əl əv/",
    citation: "Handout Page 1 (Story A) • Time Interruption Marker",
    definition: "Right while something is happening and not finished yet.",
    b1Explain: "في خضم الحدث أو في منتصف سريانه بالتمام.",
    sentence: "In the middle of the second act, all the stage floodlights abruptly shut off."
  },
  {
    id: 1327,
    word: "Sure enough",
    pos: "discourse marker",
    cambridgeLevel: "B2",
    pronunciation: "/ʃɔːr ɪˈnʌf/",
    citation: "Handout Page 1 (Story C) • Narrative Confirmation",
    definition: "Used in stories to say that what someone expected or feared was really true.",
    b1Explain: "وكما كان متوقعاً تماماً؛ وبالفعل حدث الأمر كما قيل حرفياً.",
    sentence: "The passenger claimed the beast would keep up, and sure enough, she was running right outside my window."
  },
  {
    id: 1328,
    word: "Tongue hanging out",
    pos: "phrase",
    cambridgeLevel: "B1",
    pronunciation: "/tʌŋ ˈhæŋ.ɪŋ aʊt/",
    citation: "Handout Page 1 (Story C) • Comic Description",
    definition: "When an animal runs fast and pants with its tongue out of its mouth.",
    b1Explain: "لسانه يلهث متدلياً خارج فمه من شدة الركض أو السرعة أو العطش.",
    sentence: "The sheep sprinted alongside the speeding automobile with her tongue hanging out of the right side of her jaw."
  }
];

/* ==========================================================================
   SESSION 13 STUDY MODULE DATA STRUCTURES: STORYTELLING & NARRATIVE TENSES
   ========================================================================== */

const SESSION_13_LEAD_IN = {
  boardLine: "The sky was dark, the sound of the clock was loud, suddenly he saw a shadow of something...",
  instruction: "Look at the first line of the story on the board. With your partner, try and work out what the story is. Think about who the person is and what happened before.",
  notebookNotes: {
    setting: "Night-time, deserted room or ancient manor hallway",
    sound: "Loud, ominous ticking of an antique grandfather clock",
    action: "A dark silhouette of a mysterious entity suddenly materialized on the wall",
    tensesUsed: "Past Continuous (sky was darkening) & Past Simple (saw a shadow)"
  },
  modelContinuation: "The sky was dark, and the relentless sound of the clock was ringing loud in the empty library. Suddenly, detective Harrison saw a shadow of something slipping behind the velvet curtains. Earlier that evening, he had received an anonymous telegram warning him that the manor's master had disappeared.",
  usefulStoryOpeners: [
    { en: "It was a stormy evening when...", ar: "كانت أمسية عاصفة عندما..." },
    { en: "Without warning, the lights flickered...", ar: "دون سابق إنذار، ومضت الأضواء..." },
    { en: "He had never witnessed anything like it...", ar: "لم يكن قد رأى شيئاً كهذا من قبل..." },
    { en: "Before he could react, something moved...", ar: "قبل أن يتمكن من إبداء رد فعل، تحرك شيء..." }
  ]
};

const SESSION_13_STORIES = [
  {
    id: "storyA",
    letter: "A",
    title: "The Magician, the Parrot and the Cruise Liner",
    officialTitles: [
      { num: 2, title: "Never Work With Animals" },
      { num: 3, title: "Disappearing Act", isBest: true }
    ],
    studentChoice: "Disappearing Act ✓ (also Never work with Animals)",
    setting: "Cruise ship auditorium stage in the open ocean",
    characters: "An illusionist and an insufferable, skeptical caged parrot",
    text: `A magician was working on a cruise ship as part of a daily show for the passengers. A parrot in a cage was close to the stage. Every evening, as the magician was performing, the parrot made comments, squawking things like “He’s using a mirror” or “It’s all a trick, all a trick”. The magician had listened to the same thing every night for six months. One night, in the middle of the show, the ship hit an iceberg and sank completely in a few minutes. The magician managed to pull himself out of the water onto a life raft and was amazed to see the parrot, who was sitting and looking at him closely. After a few seconds, the parrot croaked, “OK, I have to admit it. That’s a great trick. So tell me, where’s the ship?”`,
    analysis: {
      pastContinuous: ["was working on a cruise ship", "as the magician was performing", "who was sitting and looking at him"],
      pastSimple: ["made comments", "hit an iceberg", "sank completely", "managed to pull", "was amazed", "parrot croaked"],
      pastPerfect: ["The magician had listened to the same thing every night for six months"]
    },
    audioText: "Story A: A magician was working on a cruise ship as part of a daily show for the passengers. A parrot in a cage was close to the stage. One night, in the middle of the show, the ship hit an iceberg and sank. On the life raft, the parrot croaked: OK, I have to admit it. That is a great trick. So tell me, where is the ship?"
  },
  {
    id: "storyB",
    letter: "B",
    title: "The Airborne Cow That Sank a Fishing Boat",
    officialTitles: [
      { num: 4, title: "Pigs Might Fly", isBest: true },
      { num: 6, title: "Is It A Bird, Is It A Plane?" }
    ],
    studentChoice: "Pigs Might Fly ✓ (also Is it a Bird, is it a Plane?)",
    setting: "Coastal waters off Japan & an interrogation penitentiary",
    characters: "Innocent Japanese fishermen, skeptical magistrate, and a cargo cargo-plane pilot",
    text: `A fishing boat was working off the coast of Japan when suddenly a cow fell from the sky and landed on the boat, causing it to sink. Another boat picked the fishermen up and took them home, but when they explained what had happened, their boss didn’t believe them. They lost their jobs and went to prison for criminal damage. They were sitting in prison a few weeks later when a man came forward and told the whole story. He explained that he worked for a private company that transported animals by plane, and that a few weeks before, they had flown a cow from Russia to South Korea. Unfortunately, during the flight, the animal had panicked, and to save the aircraft, and themselves, they had thrown the cow out of the plane. They were flying over the sea near Japan at the time.`,
    analysis: {
      pastContinuous: ["A fishing boat was working", "They were sitting in prison", "They were flying over the sea"],
      pastSimple: ["fell from the sky", "landed on the boat", "picked the fishermen up", "took them home", "didn’t believe them", "lost their jobs", "went to prison", "came forward", "told the whole story", "explained that he worked"],
      pastPerfect: ["when they explained what had happened", "they had flown a cow from Russia", "the animal had panicked", "they had thrown the cow out"]
    },
    audioText: "Story B: A fishing boat was working off the coast of Japan when suddenly a cow fell from the sky and landed on the boat, causing it to sink. The fishermen went to prison because no one believed them, until an air crew came forward and admitted they had thrown a panicked cow out of a cargo plane."
  },
  {
    id: "storyC",
    letter: "C",
    title: "The Speeding Sheep That Wanted to Overtake",
    officialTitles: [
      { num: 1, title: "A Walk In The Country" },
      { num: 5, title: "Need For Speed", isBest: true }
    ],
    studentChoice: "Need For Speed ✓ (also A walk in the country)",
    setting: "Rural highway connecting countryside villages",
    characters: "A generous car motorist, a peculiar hitchhiker, and an Olympic-caliber sheep",
    text: `A man was driving through the country when he stopped to give a lonely-looking man a lift. He hadn’t noticed that the man had a sheep with him. “Look”, he said. “I can take you, but I’m not taking the sheep.” “No problem,” the man replied. “She’ll follow us.” They started driving and sure enough the driver could see the sheep trotting behind the car. Even when they were moving quite fast, he could still see the sheep just behind. After they had gone about ten miles, he noticed that the sheep was looking very tired. He turned to his passenger and said, “I’m worried about your sheep. She looks very tired and her tongue is hanging out of the right side of her mouth”. “Oh, she’s not tired”, the man explained, “she just wants to overtake us.”`,
    analysis: {
      pastContinuous: ["A man was driving", "they were moving quite fast", "the sheep was looking very tired"],
      pastSimple: ["stopped to give", "he said", "the man replied", "started driving", "could see", "noticed", "turned to his passenger", "man explained"],
      pastPerfect: ["He hadn’t noticed", "After they had gone about ten miles"]
    },
    audioText: "Story C: A man was driving through the country when he stopped to give a man a lift. The man said his sheep would follow behind. Even when moving fast, the driver saw the sheep trotting behind. After ten miles, the sheep had her tongue hanging out, not because she was tired, but because she wanted to overtake the car."
  }
];

const SESSION_13_TRUE_FALSE = [
  {
    num: 1,
    statement: "The magician worked three times a week.",
    isTrue: false,
    proof: "Story A states: 'A magician was working on a cruise ship as part of a daily show for the passengers... Every evening, as the magician was performing...'",
    speech: "Statement 1: The magician worked three times a week. This is false. He performed daily every evening."
  },
  {
    num: 2,
    statement: "The parrot was part of the magician’s act.",
    isTrue: false,
    proof: "Story A states: 'A parrot in a cage was close to the stage.' The parrot was heckling and ruining his tricks, not an assistant.",
    speech: "Statement 2: The parrot was part of the magician's act. This is false. The bird heckled the show from a nearby cage."
  },
  {
    num: 3,
    statement: "The cow damaged the fishing boat.",
    isTrue: true,
    proof: "Story B states: '...suddenly a cow fell from the sky and landed on the boat, causing it to sink.'",
    speech: "Statement 3: The cow damaged the fishing boat. This is true. It hit the boat and caused it to sink."
  },
  {
    num: 4,
    statement: "The men escaped from prison.",
    isTrue: false,
    proof: "Story B states: 'They were sitting in prison a few weeks later when a man came forward and told the whole story.' They were formally exonerated, not escapees.",
    speech: "Statement 4: The men escaped from prison. This is false. A witness came forward and revealed the truth."
  },
  {
    num: 5,
    statement: "The driver offered to take the sheep in his car.",
    isTrue: false,
    proof: "Story C states: 'Look, I can take you, but I’m not taking the sheep.' He strictly refused the animal.",
    speech: "Statement 5: The driver offered to take the sheep in his car. This is false. He explicitly refused to allow the sheep inside."
  },
  {
    num: 6,
    statement: "The sheep was exhausted.",
    isTrue: false,
    proof: "Story C punchline: 'Oh, she’s not tired, she just wants to overtake us.' Her tongue was out as an overtaking signal!",
    speech: "Statement 6: The sheep was exhausted. This is false. The owner clarified that she simply wanted to overtake the car."
  }
];

const SESSION_13_NARRATIVE_TENSES = {
  title: "British Council Narrative Tenses Framework (Smartboard Slide 11.08.08)",
  rules: [
    {
      tense: "Past Simple",
      formula: "Subject + Past Form (V2: -ed or irregular)",
      negative: "Subject + didn't + infinitive (base form)",
      usage: "We use the past simple for a completed action in the past, or a chronological sequence of events.",
      examples: [
        { en: "The ship hit an iceberg and sank in a few minutes.", ar: "اصطدمت السفينة بجبل جليدي وغرقت خلال دقائق معدودة." },
        { en: "Their boss didn't believe their bizarre explanation.", ar: "لم يُصدق مديرهم تبريرهم الغريب والمفاجئ." }
      ]
    },
    {
      tense: "Past Continuous",
      formula: "Subject + was / were + verb-ing",
      negative: "Subject + wasn't / weren't + verb-ing",
      usage: "We use the past continuous to talk about an action that was in progress in the past, often forming background scenery or interrupted by a sudden past simple event.",
      examples: [
        { en: "A magician was performing on stage when the collision occurred.", ar: "كان الساحر يقدم عرضه على المسرح عندما وقع الاصطدام." },
        { en: "They were sitting in prison when the air pilot came forward.", ar: "كانوا يقضون عقوبتهم في السجن عندما تقدم الطيار بشهادته." }
      ]
    },
    {
      tense: "Past Perfect",
      formula: "Subject + had + past participle (V3)",
      negative: "Subject + hadn't + past participle",
      usage: "We use the past perfect to talk about a completed action that happened BEFORE another action, state, or reference point in the past.",
      examples: [
        { en: "He hadn't noticed that the hitchhiker had a sheep with him.", ar: "لم يكن قد انتبه إلى أن ذلك الرجل كان مصطحباً خروفاً معه." },
        { en: "The air crew had thrown the cow out because it had panicked.", ar: "كان طاقم الطائرة قد ألقوا بالبقرة لأنها كانت قد أصيبت بحالة ذعر شديد." }
      ]
    }
  ]
};

const SESSION_13_FRED_PRACTICE = {
  title: "Live Smartboard Practice: The Story of Fred the Dog (Slide 11.08.09)",
  lead: "Complete the story using these verbs in the correct narrative tense: take, have, live, become, get, decide, buy, own, behave, help.",
  answers: [
    { num: 1, base: "live", correct: "was living", tense: "Past Continuous", reason: "Background living situation in progress at that era in London." },
    { num: 2, base: "buy", correct: "bought", tense: "Past Simple", reason: "Single completed event that occurred while living in London." },
    { num: 3, base: "decide", correct: "decided", tense: "Past Simple", reason: "Single decision point." },
    { num: 4, base: "take", correct: "took", tense: "Past Simple", reason: "Repeated past routine / completed daily action." },
    { num: 5, base: "have", correct: "had had", tense: "Past Perfect", reason: "Ownership duration completed BEFORE taking him to training school." },
    { num: 6, base: "behave", correct: "was behaving", tense: "Past Continuous", reason: "Ongoing bad conduct in active progress at that phase." },
    { num: 7, base: "help", correct: "helped", tense: "Past Simple", reason: "Single positive completed impact of school." },
    { num: 8, base: "become", correct: "became", tense: "Past Simple", reason: "Change of state as a completed result." },
    { num: 9, base: "own", correct: "hadn't owned", tense: "Past Perfect (Neg)", reason: "Life experience prior to the past milestone of buying Fred." },
    { num: 10, base: "have", correct: "had", tense: "Past Simple", reason: "Specific past milestone event point in time." }
  ],
  fullTextTranscribed: "When I was living in London, I bought a dog. I decided to call it Fred. He was great fun. Every day, I took him for a walk and he was good company. After I had had him for about six months, I took him to a training school because he was behaving very badly and not listening to me when I called. Training school helped him a lot and he became much better. I hadn't owned a pet before I had Fred, but I'm very glad to have him around."
};

const SESSION_13_NOTEBOOK_PAGES = [
  {
    pageNum: 1,
    title: "Classroom Lead-in Brainstorm & Story Titles",
    sub: "Student Notebook • Page 1 Notes (WhatsApp Image 5.00.00 PM)",
    notes: [
      {
        term: "Opening Line Mystery Brainstorm",
        definition: "Transcribed from top lines: 'The sky was dark, the sound of clock was aloud, suddenly he saw a shadow of smth. -' Teacher evaluated narrative scene-setting.",
        arabic: "عصف ذهني لبداية قصة غامضة في الفصل",
        speech: "The sky was dark, the sound of clock was loud, suddenly he saw a shadow of something."
      },
      {
        term: "Story A Title Selection",
        definition: "Selected: 'Never work with Animals' and checked: 'Disappearing Act ✓'. Represents the ironic cruise liner vanishing trick.",
        arabic: "اختيار عنوان القصة الأولى (أ)",
        speech: "Story A: Disappearing Act. Never work with animals."
      },
      {
        term: "Story B Title Selection",
        definition: "Selected: 'Is it a Bird, is it a Plane?' and checked: 'Pigs might fly ✓'. Satirical reaction to an airborne cow.",
        arabic: "اختيار عنوان القصة الثانية (ب)",
        speech: "Story B: Pigs might fly. Is it a bird, is it a plane?"
      },
      {
        term: "Story C Title Selection",
        definition: "Checked: 'Need for speed ✓' alongside 'A walk in the country'. Fits the sports-car racing sheep.",
        arabic: "اختيار عنوان القصة الثالثة (ج)",
        speech: "Story C: Need for speed. A walk in the country."
      }
    ]
  },
  {
    pageNum: 2,
    title: "Student Original Narrative: 'It Wasn't Me'",
    sub: "Student Notebook • Page 2 Complete Transcription (WhatsApp Image 5.00.00 PM (1))",
    notes: [
      {
        term: "Background Setting (Past Continuous)",
        definition: "'I was walking on the street, I saw a man, he was wearing the same clothes color of mine.' Background walking interrupted by sighting.",
        arabic: "المشهد التمهيدي في الماضي المستمر",
        speech: "I was walking on the street, I saw a man, he was wearing the same clothes color of mine."
      },
      {
        term: "The Crime Incident (Past Simple)",
        definition: "'The man put a mask on his face and stabbed a random citizen in his chest.' Sudden violent crime action.",
        arabic: "وقوع الحادثة في الماضي البسيط",
        speech: "The man put a mask on his face and stabbed a random citizen in his chest."
      },
      {
        term: "Prior Escape (Past Perfect)",
        definition: "'He had run away before police came.' The criminal departed PRIOR to police arrival (classic Past Perfect rule).",
        arabic: "هروب الجاني قبل وصول الشرطة (ماضٍ تام)",
        speech: "He had run away before the police came."
      },
      {
        term: "False Accusation & Arrest (Past Simple)",
        definition: "'The police thought it was me, all people pointed at me and said it was him. The police arrested me and asked me to admit it.'",
        arabic: "الاشتباه الخاطئ والاعتقال",
        speech: "The police thought it was me. All people pointed at me and said it was him. The police arrested me and asked me to admit it."
      },
      {
        term: "The Dramatic Climax",
        definition: "'I told them: It wasn't me.' Resolving with the handout task title prompt.",
        arabic: "الذروة الحوارية والإنكار الصادق",
        speech: "I told them: It wasn't me."
      }
    ]
  }
];

const SESSION_13_STORY_PROMPTS = [
  {
    num: 1,
    title: "It Wasn't Me",
    isStudentChosen: true,
    modelStory: "I was walking down Oxford Street when a masked thief snatched a tourist's handbag. He had vanished into the underground station before anyone could react. Because I was wearing a nearly identical jacket, two bystanders grabbed me and shouted at the police. I spent four hours in custody insisting: 'It wasn't me!'"
  },
  {
    num: 2,
    title: "The Worst Night",
    isStudentChosen: false,
    modelStory: "We were driving home through the Highlands when our radiator cracked in heavy sleet. We hadn't checked the anti-freeze before leaving Aberdeen. By midnight, our phone batteries had died, the temperature had dropped below freezing, and we had to spend nine agonizing hours wrapped in emergency foil blankets."
  },
  {
    num: 3,
    title: "Just Because I Was Hungry!",
    isStudentChosen: false,
    modelStory: "I was revising for my university finals at two in the morning when my stomach started rumbling furiously. I snuck down to the kitchen to fry some chips. Unfortunately, I had forgotten to turn off the oil burner before dozing off on the sofa. Three smoke alarms went off simultaneously, soaking the flat!"
  },
  {
    num: 4,
    title: "She Didn't Believe Me Of Course",
    isStudentChosen: false,
    modelStory: "I arrived ninety minutes late for our wedding anniversary dinner. I explained that while I was waiting for the train, a rogue runaway swan had blocked the railway line and halted all southern express services. She just glared across the candlelight and scoffed: 'A swan? Really?'"
  },
  {
    num: 5,
    title: "It Wasn't Even My Cat",
    isStudentChosen: false,
    modelStory: "I was desperately chasing an agitated ginger feline across my neighbor's conservatory roof. I had climbed up a drainpipe to save it before the storm hit. When the firefighters arrived with sirens blazing, Mrs. Higgins poked her head out the window and said: 'My ginger tom is asleep on my bed; whose cat are you rescuing?'"
  }
];

const SESSION_13_TEACHER_CLINIC = [
  {
    incorrect: "When I was living in London, I was buying a dog.",
    correct: "When I was living in London, I bought a dog.",
    category: "Background vs Point Event",
    rule: "Use Past Continuous for the background period ('was living'), but Past Simple ('bought') for the discrete event that occurred during that period.",
    speech: "When I was living in London, I bought a dog."
  },
  {
    incorrect: "After I had him for six months, I took him to school.",
    correct: "After I had had him for six months, I took him to school.",
    category: "Past Perfect of 'Have'",
    rule: "The auxiliary is 'had' and the past participle of 'have' is also 'had': 'had had him'. This indicates ownership prior to the school event.",
    speech: "After I had had him for six months, I took him to school."
  },
  {
    incorrect: "He had run away before police was coming.",
    correct: "He had run away before the police came.",
    category: "Time Clause Concord with 'Before'",
    rule: "After 'before', use Past Simple ('came'), reserving Past Perfect ('had run away') for the earlier finished event.",
    speech: "He had run away before the police came."
  },
  {
    incorrect: "I didn't owned a pet before.",
    correct: "I hadn't owned a pet before (or I didn't own).",
    category: "Auxiliary Verb Agreement",
    rule: "With 'didn't', the main verb must be bare infinitive 'own'. For prior life experience before a past milestone, use Past Perfect: 'hadn't owned'.",
    speech: "I hadn't owned a pet before I had Fred."
  }
];

/* ==========================================================================
   SESSION 14: ATTENDING WEDDINGS & WEDDING TRADITIONS (28 VOCABULARY WORDS)
   Handout ID: ARB_B1_03_I069CGL_HO_v1.0 • Intermediate B1 Courseware
   ========================================================================== */
const VOCAB_SESSION_14 = [
  {
    id: 1401,
    word: "Aisle",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/aɪl/",
    citation: "Handout Page 1 (Box) & Page 3 (Story 2) • The Bride's Path",
    definition: "The long walk or path between rows of seats where the bride walks.",
    b1Explain: "الممر الأوسط بين مقاعد الكنيسة أو قاعة الاحتفال الذي تمشي فيه العروس نحو المذبح (حرف s صامت).",
    sentence: "All the wedding guests turned in awe as the bride began walking down the decorated floral aisle towards the altar."
  },
  {
    id: 1402,
    word: "Altar",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈɔːl.tər/",
    citation: "Handout Page 1 (Box) • Church Ceremony Setting",
    definition: "The special table at the front of a church where wedding vows are made.",
    b1Explain: "المذبح أو المنصة الدينية المقدسة في مقدمة الكنيسة حيث تُعقد مراسم الزواج وتبادل العهود.",
    sentence: "The nervous groom waited patiently at the altar beside the minister as wedding music filled the chapel."
  },
  {
    id: 1403,
    word: "Attend",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/əˈtend/",
    citation: "Handout Page 1 (Speaking) & Smartboard Slide 20 (Feedback)",
    definition: "To go to and be present at an event, celebration, or meeting.",
    b1Explain: "يحضر مناسبة رسمية أو حفلة زفاف أو اجتماعاً بصفته مدعواً أو مشاركاً (تُتبع بـ -ing عند التعبير عن التفضيل: like attending).",
    sentence: "Over two hundred distinguished guests travelled from overseas to attend the couple's lavish weekend celebration."
  },
  {
    id: 1404,
    word: "Best man",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌbest ˈmæn/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "The groom's closest friend who helps him at the wedding and keeps the rings.",
    b1Explain: "الإشبين أو الصديق المقرب الأول للعريس، يتولى حراسة خواتم الزواج وإلقاء الخطاب التكريمي ومساندة العريس.",
    sentence: "The best man delivered a hilarious yet touching speech that had all the wedding guests laughing and applauding."
  },
  {
    id: 1405,
    word: "Bouquet",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/buˈkeɪ/",
    citation: "Handout Page 1 (Vocabulary Grouping) • Bridal Traditions",
    definition: "A bunch of flowers held by the bride during a wedding ceremony.",
    b1Explain: "باقة ورد العروس المنسقة بعناية، والتي تحملها أثناء الزفاف وتلقيها تقليدياً نحو الفتيات العازبات.",
    sentence: "At the end of the evening reception, the bride tossed her fragrant rose bouquet over her shoulder into the excited crowd."
  },
  {
    id: 1406,
    word: "Bride",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/braɪd/",
    citation: "Handout Page 1 & Page 3 (Story 2) • The Central Figure",
    definition: "A woman on her wedding day.",
    b1Explain: "العروس؛ المرأة في يوم زفافها أو في فترة عقد القران (انتبه للنطق الصحيح بصوت /b/ وليس /p/).",
    sentence: "The bride looked radiant in a hand-embroidered white silk gown designed by an Italian couturier."
  },
  {
    id: 1407,
    word: "Bridesmaid",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈbraɪdz.meɪd/",
    citation: "Handout Page 1 (Vocabulary Grouping) • Bridal Party",
    definition: "A female friend or sister who helps the bride during a wedding.",
    b1Explain: "وصيفة العروس؛ صديقة أو قريبة ترافق العروس وتساعدها في تنظيم الحفل ومتطلبات المظهر.",
    sentence: "The bride chose her three closest university friends to serve as her bridesmaids in matching pastel dresses."
  },
  {
    id: 1408,
    word: "Catering",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkeɪ.tər.ɪŋ/",
    citation: "Handout Page 1 (Box) & Page 2 (Story 1) • Food & Drinks",
    definition: "The business of preparing and serving food and drinks for parties and weddings.",
    b1Explain: "خدمات تقديم الطعام والضيافة والتجهيز الغذائي للمناسبات والحفلات الكبرى.",
    sentence: "Because Andy was passionate about cooking, he organised the catering himself, serving homemade pies and savoury sandwiches."
  },
  {
    id: 1409,
    word: "Celebration",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌsel.əˈbreɪ.ʃən/",
    citation: "Handout Page 1 (Speaking Lead-in) • Festive Occasion",
    definition: "A happy party or event held to mark a special occasion.",
    b1Explain: "احتفال أو مهرجان بهيج يُقام تكريماً لمناسبة استثنائية أو عقد زواج مبارك.",
    sentence: "The joyous wedding celebration continued late into the night with live acoustic folk music and dancing."
  },
  {
    id: 1410,
    word: "Ceremony",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈser.ɪ.mə.ni/",
    citation: "Handout Page 1 (Box) & Smartboard Photo 1 (LearningApps Match)",
    definition: "A formal event with traditional actions, like a wedding or graduation.",
    b1Explain: "مراسم أو طقوس رسمية أو دينية تُقام باتباع أعراف وتقاليد محددة لتوثيق الزواج (نقول: hold/have/host a ceremony وليس do).",
    sentence: "The solemn wedding ceremony lasted forty minutes before the newlyweds stepped outside under a shower of confetti."
  },
  {
    id: 1411,
    word: "Church hall",
    pos: "noun phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtʃɜːtʃ ˌhɔːl/",
    citation: "Handout Page 2 (Story 1) • DIY Venue Setting",
    definition: "A room or building next to a church used for social parties and meetings.",
    b1Explain: "قاعة ملحقة بالكنيسة مخصصة للأنشطة الاجتماعية واللقاءات والمناسبات المجتمعية غير المكلفة.",
    sentence: "Instead of hiring an overpriced hotel ballroom, they held their reception in a cosy, decorated stone church hall."
  },
  {
    id: 1412,
    word: "Civil wedding",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˌsɪv.əl ˈwed.ɪŋ/",
    citation: "Smartboard Photo 1 & Photo 2 • Legal Marriage Without Religion",
    definition: "A legal wedding ceremony conducted by an official rather than a religious leader.",
    b1Explain: "زواج مدني قانوني غير ديني يوثقه موظف السجل المدني الحكومي دون طقوس دينية كنسية.",
    sentence: "They decided on a simple civil wedding at the city registry office, followed by an intimate garden dinner."
  },
  {
    id: 1413,
    word: "Commercialised",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/kəˈmɜː.ʃəl.aɪzd/",
    citation: "Handout Page 2 (Story 1) • Critique of Modern Weddings",
    definition: "Focused more on selling things and making money than on real meaning.",
    b1Explain: "مُسوّق تجارياً أو طاغٍ عليه الطابع الاستهلاكي الربحي المبالغ فيه على حساب المشاعر الحقيقية.",
    sentence: "He avoided commercialised wedding packages that push couples into spending thousands of pounds on pointless extravagance."
  },
  {
    id: 1414,
    word: "Groom",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ɡruːm/",
    citation: "Handout Page 1 & Notebook Transcription • The Man Marrying",
    definition: "A man on his wedding day.",
    b1Explain: "العريس؛ الرجل في يوم زواجه أو عقد قرانه (انتبه للنطق بصوت /r/ وليس /l/ لتفادي الخلط مع كلمة gloom).",
    sentence: "The groom smiled warmly as his bride arrived at the church door accompanied by her proud father."
  },
  {
    id: 1415,
    word: "Honeymoon",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈhʌn.i.muːn/",
    citation: "Handout Page 1 (Vocabulary Grouping) • Post-Wedding Vacation",
    definition: "A special holiday taken by a newly married couple right after their wedding.",
    b1Explain: "شهر العسل؛ الإجازة أو الرحلة الرومانسية التي يقضيها الزوجان عقب حفل الزفاف مباشرة للاستجمام.",
    sentence: "The newlyweds spent a tranquil two-week honeymoon exploring historic coastal villages in southern Italy."
  },
  {
    id: 1416,
    word: "Host",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/həʊst/",
    citation: "Smartboard Slide 20 (Language Feedback) • Preferred Collocation",
    definition: "To welcome guests and provide food and drinks for a party or event.",
    b1Explain: "يستضيف أو يقيم أو ينظم مناسبة أو حفل زفاف ويوفر له متطلبات الضيافة والمكان اللائق.",
    sentence: "The bride's grandparents offered to host the reception dinner in the expansive landscaped gardens of their estate."
  },
  {
    id: 1417,
    word: "Minister",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈmɪn.ɪ.stər/",
    citation: "Handout Page 1 (Box) • Religious Celebrant",
    definition: "A religious leader who is allowed to perform church weddings.",
    b1Explain: "كاهن أو قسيس معتمد رسمياً في الكنيسة لإدارة الشعائر الدينية وإتمام مراسم عقد القران ومباركة الزواج.",
    sentence: "The minister instructed the couple to join their right hands as they prepared to recite their traditional marriage vows."
  },
  {
    id: 1418,
    word: "Newlyweds",
    pos: "noun plural",
    cambridgeLevel: "B2",
    pronunciation: "/ˈnjuː.li.wedz/",
    citation: "Handout Page 1 (Groupings) • The Married Couple",
    definition: "Two people who have very recently been married to each other.",
    b1Explain: "العروسان حديثا الزواج؛ الزوجان في مستهل حياتهما الزوجية المشتركة.",
    sentence: "The cheering crowd threw fragrant dried rose petals over the beaming newlyweds as they exited the venue."
  },
  {
    id: 1419,
    word: "Photoshoot",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfəʊ.təʊ.ʃuːt/",
    citation: "Smartboard Photo 1 & Photo 2 • Professional Photography",
    definition: "A session where a photographer takes many pictures of people in nice poses.",
    b1Explain: "جلسة تصوير احترافية تُنظم لالتقاط صور تذكارية منسقة في موقع محدد لتخليد ذكرى المناسبة.",
    sentence: "The bride and groom slipped away during cocktail hour for an outdoor sunset photoshoot by the ancient stone bridge."
  },
  {
    id: 1420,
    word: "Propose",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/prəˈpəʊz/",
    citation: "Handout Page 1 (Box) & Smartboard Photo 1 (Match) • Asking Hand",
    definition: "To ask someone to marry you.",
    b1Explain: "يطلب يد شخص للزواج أو يتقدم لخطبته رسمياً ورومانسياً.",
    sentence: "He decided to propose on a moonlit cliff overlooking the Mediterranean sea during their summer holiday."
  },
  {
    id: 1421,
    word: "Proposal",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/prəˈpəʊ.zəl/",
    citation: "Smartboard Photo 2 (Teacher Board Annotation) • Noun Derivation",
    definition: "The moment when someone asks another person to marry them.",
    b1Explain: "طلب الزواج أو عرض الخطوبة؛ اللحظة الرسمية التي يعرض فيها الشريك الزواج على شريكه.",
    sentence: "Her partner's surprise marriage proposal at the top of the Eiffel Tower was captured on video by smiling tourists."
  },
  {
    id: 1422,
    word: "Prosperity",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/prɒsˈper.ə.ti/",
    citation: "Smartboard Photo 1 & Photo 2 (Annotation: Noun) • Cultural Symbol",
    definition: "The state of being successful, having good luck, and having enough money.",
    b1Explain: "الرخاء والازدهار والوفرة المالية والمعيشية، وهي أمنية تقليدية أساسية تُقدم للعروسين في سائر الثقافات.",
    sentence: "In traditional Greek and Vietnamese weddings, dried fruit and rice are tossed over the couple to symbolise fertility and prosperity."
  },
  {
    id: 1423,
    word: "Reception",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈsep.ʃən/",
    citation: "Handout Page 1 (Box) & Page 2 (Story 1) • Post-Ceremony Party",
    definition: "A celebratory party held after a wedding ceremony to eat, drink, and dance with guests.",
    b1Explain: "حفلة استقبال أو مأدبة زفاف تقام مباشرة بعد عقد القران للاحتفال بالمدعوين وإكرامهم بالموائد والتهاني.",
    sentence: "Following the vows at the registry office, seventy close friends gathered at a local vineyard for the evening reception."
  },
  {
    id: 1424,
    word: "Registrar",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌredʒ.ɪˈstrɑːr/",
    citation: "Handout Page 1 (Box) • Official Legal Celebrant",
    definition: "An official government person who conducts non-religious legal marriages.",
    b1Explain: "موظف السجل المدني الرسمي المخول قانونياً بتوثيق وتوقيع عقود الزواج المدني وتثبيتها في الدولة.",
    sentence: "The city registrar carefully verified both passports and certificates before pronouncing them legally married."
  },
  {
    id: 1425,
    word: "Suit",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/suːt/",
    citation: "Handout Page 1 (Vocabulary Groups) • Groom Attire",
    definition: "A smart set of clothes with matching jacket and trousers worn by men.",
    b1Explain: "بدلة رسمية متطابقة (جاكيت وبنطال وربطة عنق) يرتديها العريس والإشبين في المناسبات.",
    sentence: "The groom wore a tailored navy three-piece wool suit accessorised with a crisp silk pocket square and polished leather shoes."
  },
  {
    id: 1426,
    word: "Symbolise",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/ˈsɪm.bəl.aɪz/",
    citation: "Handout Page 1 (Box) & Smartboard Photo 1 (Match) & Photo 2 (Verb)",
    definition: "To represent or stand for an idea or feeling.",
    b1Explain: "يرمز إلى أو يعبر عن معنى روحي أو ثقافي عميق من خلال رمز أو طقس تقليدي (الاسم المشتق: symbol).",
    sentence: "In Crete, the collective first dance symbolises the enduring union of two families rather than just the individuals."
  },
  {
    id: 1427,
    word: "Veil",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/veɪl/",
    citation: "Handout Page 1 (Box) • Traditional Bridal Garment",
    definition: "A thin piece of material worn by a bride over her head or face.",
    b1Explain: "طرحة العروس؛ وشاح شفاف أو دانتيل خفيف يغطي رأس وكتفي ووجه العروس أثناء الدخول وإتمام المراسم.",
    sentence: "The groom gently lifted the translucent lace veil from the bride's face before they exchanged their first married kiss."
  },
  {
    id: 1428,
    word: "Vows",
    pos: "noun plural",
    cambridgeLevel: "B2",
    pronunciation: "/vaʊz/",
    citation: "Handout Page 1 (Groupings) • Sacred Promises",
    definition: "Serious, formal promises that a bride and groom make to each other at a wedding.",
    b1Explain: "عهود الزواج والوعود المقدسة التي يتبادلها الزوجان بصوت مسموع بالوفاء والإخلاص طوال العمر.",
    sentence: "The bride and groom wrote heartfelt personal vows promising to support and respect each other through all life's challenges."
  }
];

/* ==========================================================================
   SESSION 14 MODULES & AUTHENTIC PEDAGOGICAL DATA
   ========================================================================== */

const SESSION_14_LEAD_IN = {
  instruction: "Discuss the following authentic classroom discussion questions with your partner or group.",
  questions: [
    {
      num: 1,
      q: "Whose wedding celebrations did you last attend? Describe it.",
      qAr: "حفل زفاف مَن حضرت مؤخراً؟ صف تفاصيل الحفل وأجواءه.",
      modelAnswer: "The last wedding I attended was my cousin Omar's celebration in Alexandria last summer. It was a lively outdoor coastal reception held right by the sea. There was a fantastic buffet with fresh seafood, and everyone danced to traditional folk music until well after midnight.",
      audioText: "The last wedding I attended was my cousin Omar's celebration in Alexandria last summer. It was a lively outdoor coastal reception held right by the sea."
    },
    {
      num: 2,
      q: "What are the most important factors to consider when planning a wedding?",
      qAr: "ما هي أهم العوامل والمعايير التي يجب مراعاتها عند التخطيط لحفل الزفاف؟",
      modelAnswer: "In my opinion, the three most crucial factors are the budget, the venue capacity, and the catering quality. If you don't keep a strict budget, costs can quickly spiral out of control. Also, ensuring that close family members and friends feel welcomed and comfortable is far more important than superficial luxury.",
      audioText: "In my opinion, the three most crucial factors are the budget, the venue capacity, and the catering quality. Ensuring guests feel welcomed is far more important than luxury."
    },
    {
      num: 3,
      q: "What is your idea of a 'perfect' wedding?",
      qAr: "ما هو تصورك الشخصي لحفل الزفاف 'المثالي'؟",
      modelAnswer: "My idea of a perfect wedding is an intimate, stress-free gathering in a scenic garden with close family and genuine friends. Rather than a stiff, overly commercialised hotel ballroom banquet, I would prefer heartfelt personal vows, delicious homemade food, and meaningful conversations.",
      audioText: "My idea of a perfect wedding is an intimate, stress-free gathering in a scenic garden with close family and genuine friends, with heartfelt vows and good music."
    }
  ],
  usefulPhrases: [
    { en: "It was an intimate family gathering", ar: "كان تجمعاً عائلياً حميماً ومريحاً" },
    { en: "The catering was absolutely mouth-watering", ar: "كانت خدمات الطعام والضيافة شهية ولذيذة للغاية" },
    { en: "We danced until the early hours of the morning", ar: "رقصنا واحتفلنا حتى الساعات الأولى من الصباح" },
    { en: "To keep expenses within a reasonable budget", ar: "لإبقاء النفقات والمصاريف ضمن ميزانية معقولة" },
    { en: "A lavish celebration vs a humble DIY reception", ar: "احتفال باذخ وفخم مقابل حفل بسيط منظم ذاتياً" }
  ]
};

const SESSION_14_DIALOGUES = {
  story1: {
    title: "Story 1: Andy's Bristol Church Hall DIY Wedding",
    topic: "Budget-Friendly Wedding & Echo Questions",
    citation: "Handout Page 2 • Dialogue Listening Gap-Fill",
    turns: [
      { speaker: "A", text: "So, what was the last wedding you went to?" },
      { speaker: "B", text: "Well, I went to a friend's wedding near Bristol in England. It was my friend, Andy, who I've known for a long time. It was unusual in that he booked a small church hall —" },
      { speaker: "A", text: "A church hall?", isGap: true, gapType: "Echo Question", answer: "A church hall?", prompt: "Echo Question repeating Andy's unusual venue choice with rising intonation" },
      { speaker: "B", text: "Well, it's not the church, but a nice old building where they hold functions and parties and the like. Well, Andy loves cooking, so he did most of the catering for his own wedding, you know, lots of pies, sandwiches, cakes, that sort of thing." },
      { speaker: "A", text: "Really? He worked on his wedding day.", isGap: true, gapType: "Showing Surprise", answer: "Really?", prompt: "Expression of surprise at the groom cooking and catering his own big day" },
      { speaker: "B", text: "Yes. And all of the jobs, things like putting out the chairs, serving the food and washing all the dishes, well, that was done by me and his other friends." },
      { speaker: "A", text: "You did the washing up?", isGap: true, gapType: "Echo Question", answer: "You did the washing up?", prompt: "Echo Question repeating the unexpected chore done by the wedding guests" },
      { speaker: "B", text: "Yeah, we did the washing up so, all in all, it was much, much cheaper than a normal wedding. But, more important than that, it really felt like a friendly, family occasion. It felt more real and genuine than some of the expensive, commercialised weddings that I've been to." }
    ],
    pedagogicalAnalysis: {
      question: "Why does speaker A ask these questions? What effect does this have on the storyteller?",
      answerEn: "Speaker A uses Echo Questions ('A church hall?', 'You did the washing up?') and surprise markers ('Really?') to demonstrate active listening, show astonishment, and encourage Andy's friend to elaborate without derailing the narrative flow.",
      answerAr: "يستخدم المتحدث A تقنية 'الأسئلة الصدى' (Echo Questions) لإظهار الاستماع النشط والاندهاش من التفاصيل غير المألوفة، مما يحفز الراوي على الاسترسال وتقديم تفاصيل شيقة دون مقاطعة مسار القصة."
    }
  },
  story2: {
    title: "Story 2: The Bizarre CD Player Disaster (Mr Boombastic)",
    topic: "The Aisle Music Blunder & Backchannelling",
    citation: "Handout Page 3 • Active Listening Dialogue",
    turns: [
      { speaker: "A", text: "I read this great story in a magazine once." },
      { speaker: "B", text: "Oh yeah?", isGap: true, gapType: "Backchannelling", answer: "Oh yeah?", prompt: "Casual interest signal showing readiness to hear a story" },
      { speaker: "A", text: "Well, it was this guy's job to press the button on the CD player when the bride arrived at the ceremony." },
      { speaker: "B", text: "Right.", isGap: true, gapType: "Backchannelling", answer: "Right.", prompt: "Agreement & acknowledgement particle confirming comprehension" },
      { speaker: "A", text: "You know, so that the bride could walk down the aisle to the music that she had chosen." },
      { speaker: "B", text: "Sure.", isGap: true, gapType: "Backchannelling", answer: "Sure.", prompt: "Attentive acknowledgement indicating you understand the context" },
      { speaker: "A", text: "The problem was that the guy was waiting outside the wrong door to the church, or wherever it was." },
      { speaker: "B", text: "Oh no!", isGap: true, gapType: "Empathetic Reaction", answer: "Oh no!", prompt: "Reaction anticipating the unfolding disaster" },
      { speaker: "A", text: "Well, when the bride arrived, someone else had to press the button, but the problem was that they didn't know which track on the CD it was. So, track number one got played, and it was 'Mr Boombastic' by this singer called Shaggy." },
      { speaker: "B", text: "No! You're joking!", isGap: true, gapType: "Shock & Amusement", answer: "No!", prompt: "Disbelief and amusement at the inappropriate bridal song" },
      { speaker: "A", text: "'Mr Boombastic'! Like, totally the wrong music for a wedding. Apparently, the bride never spoke to the man again, but it must have been hilarious." }
    ],
    pedagogicalAnalysis: {
      question: "Why does speaker B say these phrases? What effect does this have on the storyteller?",
      answerEn: "Speaker B uses Backchannelling phrases ('Oh yeah?', 'Right.', 'Oh no!', 'No!') to provide constant verbal and emotional feedback. This validates the storyteller's delivery and amplifies the comedic climax.",
      answerAr: "يستخدم المتحدث B عبارات التجاوب التفاعلي (Backchannelling) للتأكيد على المتابعة الدقيقة والتفاعل العاطفي اللحظي مع تطورات الموقف الكوميدي، مما يشجع المتحدث على سرد الذروة بحماس."
    }
  },
  unusualWeddingsMatrix: [
    {
      storyNum: 1,
      title: "Andy's DIY Church Hall Wedding",
      venue: "Parish church hall near Bristol, England",
      unusualAspect: "Groom cooked all the catering; guests washed all the dishes and set out chairs.",
      costImpact: "Vastly cheaper, highly intimate, genuine family atmosphere without commercialisation.",
      icon: "🥧"
    },
    {
      storyNum: 2,
      title: "The CD Music Operator Disaster",
      venue: "Traditional church ceremony",
      unusualAspect: "Unplanned track 1 played as bride walked down the aisle: 'Mr Boombastic' by Shaggy.",
      costImpact: "Bride severed communication with the sound operator forever, but guests found it hilarious.",
      icon: "💿"
    },
    {
      storyNum: 3,
      title: "The Underwater Coral Reef Wedding",
      venue: "Deep sea diving site off the coast of Bali",
      unusualAspect: "Bride, groom, best man and minister wore scuba diving tanks and wet suits; exchanged vows written on waterproof plastic slates.",
      costImpact: "Unforgettable marine photography, required scuba certification, zero traditional catering costs.",
      icon: "🤿"
    },
    {
      storyNum: 4,
      title: "The Tandem Skydiving Jump Ceremony",
      venue: "12,000 feet above the drop zone in New Zealand",
      unusualAspect: "Couple shouted their vows into wind microphones inside the aircraft before leaping out in tandem parachute harnesses.",
      costImpact: "High adrenaline experience, extreme aerial photography, reception held on the landing field.",
      icon: "🪂"
    }
  ]
};

const SESSION_14_SMARTBOARD_MATCHING = [
  {
    id: "match1",
    term: "Ceremony",
    pos: "noun",
    definition: "An important social or religious event, when a traditional set of actions is performed in a formal way.",
    arMeaning: "مراسم أو طقوس رسمية أو دينية تُقام باتباع خطوات وأعراف محددة ومحترمة.",
    boardAnnotation: "Noun • Collocation: hold / have / host a ceremony (NOT 'do').",
    example: "The civil ceremony took place in the town hall at eleven o'clock."
  },
  {
    id: "match2",
    term: "Propose",
    pos: "verb",
    derivedNoun: "Proposal (noun)",
    definition: "To ask someone to marry you.",
    arMeaning: "يطلب يد شخص للزواج (الاسم المشتق: proposal - طلب الزواج).",
    boardAnnotation: "Verb ➔ Derivation: 'proposal' (noun).",
    example: "He booked a romantic rooftop dinner to propose to his girlfriend."
  },
  {
    id: "match3",
    term: "Civil wedding",
    pos: "noun phrase",
    definition: "Not religious. Relating to the ordinary people of a country.",
    arMeaning: "زواج مدني؛ عقد قران رسمي قانوني غير ديني أمام موظف السجل المدني.",
    boardAnnotation: "Noun phrase • Contrast with religious church ceremony.",
    example: "They opted for a civil wedding before having a casual garden celebration."
  },
  {
    id: "match4",
    term: "Photoshoot",
    pos: "noun",
    definition: "An occasion when a photographer takes a series of photographs, usually of the same person or people in the same place.",
    arMeaning: "جلسة تصوير فوتوغرافي احترافية في موقع محدد لتخليد الذكريات.",
    boardAnnotation: "Noun • Compound word: photo + shoot.",
    example: "The sunset photoshoot by the ancient stone ruins produced stunning wedding portraits."
  },
  {
    id: "match5",
    term: "Prosperity",
    pos: "noun",
    derivedAdj: "Prosperous (adj)",
    definition: "When people have money and everything that is needed for a good life.",
    arMeaning: "الرخاء والازدهار والوفرة المالية والمعيشية الكريمة.",
    boardAnnotation: "Noun • Key cultural wish for newlyweds across global traditions.",
    example: "Guests tossed rice over the newlyweds to wish them health, happiness, and prosperity."
  },
  {
    id: "match6",
    term: "Symbolise",
    pos: "verb",
    derivedNoun: "Symbol (noun)",
    definition: "To represent something.",
    arMeaning: "يرمز إلى أو يعبر عن معنى روحي أو معنوي عميق (الاسم المشتق: symbol).",
    boardAnnotation: "Verb ➔ Derivation: 'symbol' (noun). Spelling: British -ise / American -ize.",
    example: "The exchange of golden wedding rings is designed to symbolise eternal, unbroken unity."
  }
];

const SESSION_14_VOCAB_GROUPS = {
  instruction: "Categorize the 28 session vocabulary words into 5 thematic domains, reflecting the sorting task on Handout Page 1.",
  categories: [
    {
      name: "Wedding Roles & Key Figures",
      icon: "👥",
      words: ["Bride", "Groom", "Best man", "Bridesmaid", "Minister", "Registrar", "Newlyweds"],
      note: "The central couple, attendants, and authorized legal or religious officiants."
    },
    {
      name: "Venues & Architectural Features",
      icon: "🏛️",
      words: ["Aisle", "Altar", "Church hall"],
      note: "Sacred and communal spaces where rites and festivities are conducted."
    },
    {
      name: "Ceremony & Legal Formalities",
      icon: "📜",
      words: ["Ceremony", "Civil wedding", "Vows", "Propose", "Proposal"],
      note: "The formal commitments, legal contracts, and marital declarations."
    },
    {
      name: "Celebration, Hospitality & Media",
      icon: "🥂",
      words: ["Reception", "Catering", "Celebration", "Photoshoot", "Honeymoon", "Host"],
      note: "Entertaining guests, food preparation, photography, and the post-wedding holiday."
    },
    {
      name: "Attire, Traditions & Cultural Values",
      icon: "💐",
      words: ["Veil", "Suit", "Bouquet", "Symbolise", "Prosperity", "Commercialised", "Attend"],
      note: "Bridal garments, symbolic customs, cultural beliefs, and consumer critique."
    }
  ]
};

const SESSION_14_GLOBAL_CUSTOMS = [
  {
    country: "India (Hindu Tradition)",
    icon: "🇮🇳",
    badge: "Handout Authentic Slip",
    authenticText: "There are several ceremonies in a Hindu wedding, including one where the parents of the bride wash the couple's feet with milk and water. In another, the hands of the couple are tied together with thread. Also, the bride and groom walk several times in a circle together around a fire.",
    studentNotes: "Parents wash feet with milk & water. Hands tied with thread. Bride and groom walk 7 times in a circle around sacred fire (Saptapadi).",
    symbolism: "Fire acts as the divine witness; the 7 circles represent nourishment, strength, prosperity, family harmony, children, health, and lifelong friendship.",
    arExplain: "يغسل والدا العروس أقدام الزوجين بالحليب والماء ترحيباً وتطهيراً، وتُربط أيديهما بخيط مقدس، ويطوفان حول النار المقدسة لتوثيق العهود الروحية السبعة."
  },
  {
    country: "Crete, Greece",
    icon: "🇬🇷",
    badge: "Student Notebook Transcription",
    authenticText: "People spend a lot of time before the ceremony preparing and celebrating. The first dance is between all the attending couples, not just the bride and groom. It symbolises the union of two entire families rather than just two isolated individuals.",
    studentNotes: "Thousands attend. People spend a lot of time before ceremony. First dance between all couples, not just bride and groom. It symbolises union of family.",
    symbolism: "Community and extended kinship take precedence; the communal dance cements brotherhood and loyalty between clans.",
    arExplain: "يقضي الأهالي أياماً في الاستعداد، والرقصة الأولى يؤديها جميع الأزواج الحاضرين وليس العروسان فقط، رمزاً لاتحاد العائلتين وليس شخصين فقط."
  },
  {
    country: "Kenya (Maasai Tradition)",
    icon: "🇰🇪",
    badge: "Student Notebook Transcription",
    authenticText: "Before the bride departs for her new marital home, female elders shave the bride's hair to signify her departure from youth and entry into a new life stage. The groom's family presents three prized cows to the bride's father as an established customary dowry.",
    studentNotes: "Shave bride's hair. Groom and his family present 3 cows as traditional dowry gift.",
    symbolism: "Shaving hair marks profound personal rebirth; cattle represent supreme wealth, dignity, and economic security in nomadic pastoralist culture.",
    arExplain: "تقوم نساء القبيلة بحلق شعر رأس العروس إعلاناً لبدء حياة جديدة وتوديع مرحلة الفتيات، ويقدم العريس 3 أبقار تقديراً لعائلة العروس ورخاءً لها."
  },
  {
    country: "Morocco",
    icon: "🇲🇦",
    badge: "Student Notebook Transcription",
    authenticText: "During the festive wedding banquet, the bride is seated in an ornate, four-handled gilded carriage called the Ammariya. Male relatives lift the platform onto their shoulders and carry the bride three times around the hall while guests sing traditional celebratory chants.",
    studentNotes: "Bride is carried 3 times in the Ammariya around the hall before the banquet celebration begins.",
    symbolism: "Elevating the bride honors her as a queen on her wedding day, bestowing public dignity and celebratory blessings from the community.",
    arExplain: "تجلس العروس في 'العمارية' المغربية التقليدية الفاخرة، ويحملها الرجال على أكتافهم ويطوفون بها ثلاث مرات وسط الأهازيج والزغاريد كالملكة."
  },
  {
    country: "Korea",
    icon: "🇰🇷",
    badge: "Classroom Cultural Extension",
    authenticText: "During the traditional Paebaek family ceremony, the groom presents a pair of carved wooden mandarin ducks or geese to his mother-in-law, because geese mate for life. The parents toss chestnuts and dried jujube dates into the bride's outstretched silk apron.",
    studentNotes: "Carved wooden geese gifted for fidelity. Parents toss chestnuts (boys) and dates (girls) into bride's apron for fertility and prosperity.",
    symbolism: "Geese embody lifelong faithfulness, while dates and chestnuts symbolize children and future economic prosperity.",
    arExplain: "يُهدى العريس زوجاً من البط الخشبي رمزاً للوفاء الأبدي، بينما يُلقي الوالدان الكستناء والتمر في مئزر العروس كرمز للذرية والرخاء."
  },
  {
    country: "Vietnam",
    icon: "🇻🇳",
    badge: "Classroom Cultural Extension",
    authenticText: "On the wedding morning, the groom's delegation marches in a ceremonial procession to the bride's house bearing an odd number of red-lacquered gift boxes (mam qua) draped in crimson cloth, containing betel leaves, areca nuts, roast pig, and wine.",
    studentNotes: "Morning procession bearing red gift boxes with areca nuts and wine to pay respect to ancestors before the shrine.",
    symbolism: "Red represents good fortune and joy, while betel nut leaves represent an unbreakable, harmonious marital bond.",
    arExplain: "موكب عائلة العريس يحمل علباً حمراء مغطاة بالحرير تحتوي على هدايا وأوراق نبات التنبول لطلب الإذن ومباركة الأجداد في معبد العائلة."
  }
];

const SESSION_14_DISCUSSION_LAB = [
  {
    num: 1,
    prompt: "Think of an unusual or memorable wedding you attended or heard about. Describe the setting, atmosphere, and what made it stand out.",
    level: "B1/B2 Speaking Model",
    modelSpeech: "Two years ago, I attended a traditional Bedouin wedding in the desert outside Dahab. Instead of a standard banquet hall, large woven carpets and lanterns were spread across the golden sand dunes under the starry sky. What made it particularly memorable was that the wedding feast was cooked in underground earth ovens called Zerb, and the local musicians played traditional Oud instruments until sunrise. The sense of hospitality was unmatched.",
    audioText: "Two years ago, I attended a traditional Bedouin wedding in the desert outside Dahab. Instead of a banquet hall, large woven carpets and lanterns were spread across the sand under the stars. The feast was cooked in underground ovens, and the sense of hospitality was unmatched.",
    keyLexisUsed: ["attended", "reception", "celebration", "catering", "hospitality", "memorable"]
  },
  {
    num: 2,
    prompt: "Compare traditional religious church weddings with modern civil weddings. What are the advantages and drawbacks of each?",
    level: "B2 Comparative Discussion",
    modelSpeech: "A religious wedding in a grand church offers profound solemnity, traditional rituals, and a sense of historic continuity, especially when the bride walks down the floral aisle to an organ soundtrack. On the other hand, civil weddings conducted by a government registrar offer greater flexibility, are often much less costly, and allow couples from diverse cultural backgrounds to craft personal vows without rigid religious constraints.",
    audioText: "A religious wedding in a church offers solemnity, traditional rituals, and historical continuity as the bride walks down the aisle. Civil weddings with a registrar offer greater flexibility, lower costs, and personalised vows.",
    keyLexisUsed: ["civil wedding", "registrar", "ceremony", "aisle", "altar", "vows", "minister"]
  },
  {
    num: 3,
    prompt: "Many modern weddings cost tens of thousands of pounds. Do you think weddings have become too commercialised?",
    level: "B2 Critical Opinion",
    modelSpeech: "Yes, I strongly believe that contemporary weddings have become overly commercialised. Couples frequently face immense social pressure to hire luxury cars, book five-star hotel ballrooms, and pay for elaborate photoshoots, often taking out heavy bank loans just for one single day. As Andy proved in Story 1, holding an intimate celebration in a cosy church hall with friends helping with the catering can create far more authentic, joyful memories.",
    audioText: "I strongly believe that modern weddings have become overly commercialised. Couples face immense social pressure to hire luxury cars and book expensive hotel ballrooms. Holding an intimate celebration in a church hall with friends is far more authentic.",
    keyLexisUsed: ["commercialised", "church hall", "catering", "photoshoot", "reception", "prosperity"]
  }
];

const SESSION_14_TEACHER_FEEDBACK = [
  {
    id: "clinic1",
    incorrect: "They do the ceremony at.....",
    struck: "do",
    correct: "They have / host / hold the ceremony at...",
    teacherPen: "have / host / held",
    category: "Collocation Error (Smartboard Slide 20, Item 1)",
    rule: "In English, ceremonies, meetings, and conferences are NOT combined with the generic verb 'do'. Instead, use the native collocations: 'hold a ceremony', 'host a ceremony', or 'have a ceremony'. In the past tense, use 'held' or 'hosted'.",
    arRule: "في اللغة الإنجليزية لا نستخدم الفعل do مع مراسم الزواج. التعبير الفصيح الصحيح هو: hold a ceremony أو host a ceremony أو have a ceremony (وفي الماضي: held / hosted).",
    speech: "They held the ceremony in the ancient stone chapel."
  },
  {
    id: "clinic2",
    incorrect: "I don't like attend parties.",
    struck: "attend",
    correct: "I don't like attending parties. (or: I don't like to attend parties)",
    teacherPen: "attending",
    category: "Verb Pattern / Gerund after Verbs of Preference (Smartboard Slide 20, Item 2)",
    rule: "Verbs expressing personal likes, dislikes, and hobbies (like, enjoy, dislike, love, hate, detest) must be followed by a gerund (-ing form) or full infinitive (to + verb). In natural British English, the gerund 'attending' is preferred when discussing general habits.",
    arRule: "أفعال التفضيل والشعور (like, hate, love, enjoy) يجب أن يأتي بعدها صيغة Gerund (verb + ing) أو (to + verb). الأسلوب البريطاني الطبيعي يفضل: I don't like attending.",
    speech: "I don't like attending crowded parties where I do not know anyone."
  },
  {
    id: "clinic3",
    incorrect: "They didn't find a dress that fit her perfectly, so they go to the tailor, ....",
    struck: "go",
    correct: "They didn't find a dress that fit her perfectly, so they went to the tailor...",
    teacherPen: "went",
    category: "Narrative Past Tense Consistency (Smartboard Slide 20, Item 3)",
    rule: "When recounting a narrative in the past ('didn't find', 'fit'), all sequential action verbs within the narrative clause chain must stay in the Past Simple. Slipping into the present 'go' causes a tense clash; correct it to 'went'.",
    arRule: "التوافق الزمني في سرد القصص الماضية: ما دامت القصة بدأت في الماضي (didn't find)، فإن الأفعال المتتابعة يجب أن تبقى في الماضي البسيط (went وليس go).",
    speech: "They didn't find a dress that fit her perfectly, so they went to the tailor to alter it."
  },
  {
    id: "clinic4",
    incorrect: "Pride is carried 3 times... first dance not Pride and gloom",
    struck: "Pride / gloom",
    correct: "Bride is carried 3 times... first dance not bride and groom",
    teacherPen: "bride and groom",
    category: "Phonological & Spelling Interference (Student Notebook Notes)",
    rule: "Arabic phonological transfer often causes learners to confuse /p/ and /b/, writing 'pride' (feeling proud) instead of 'bride' (the woman marrying). Similarly, confusing /l/ and /r/ produces 'gloom' (darkness or sadness) instead of 'groom' (the man marrying). Always distinguish bride (/b/) and groom (/r/)!",
    arRule: "تداخل صوتي شائع لمتعلمي الإنجليزية العرب: الخلط بين صَوتَي p و b يحول bride (عروس) إلى pride (فخر)، والخلط بين l و r يحول groom (عريس) إلى gloom (حزن وكآبة)! احرص على كتابة bride and groom.",
    speech: "The bride and groom stood smiling happily together on the dance floor."
  }
];

const SESSION_14_PRONUNCIATION_LAB = [
  {
    category: "Intonation of Showing Interest (Active Listening)",
    rule: "To sound genuinely interested, engaged, and supportive, your pitch must start high and use dynamic rising or falling-rising curves. A flat, monotone, low pitch sounds bored, dismissive, or sarcastic.",
    examples: [
      {
        phrase: "A church hall?",
        type: "Echo Question (High Rising)",
        audioText: "A church hall?",
        note: "Pitch jumps high on 'church hall' to show surprise and invite explanation."
      },
      {
        phrase: "Really? He worked on his wedding day!",
        type: "Surprise Marker (Rising-Falling)",
        audioText: "Really? He worked on his wedding day!",
        note: "Strong upward inflection on 'Real-' followed by emphatic drop on '-ly'."
      },
      {
        phrase: "You did the washing up?",
        type: "Echo Question (Incredulous)",
        audioText: "You did the washing up?",
        note: "Stressed peak on 'washing up' signaling playful disbelief."
      },
      {
        phrase: "Oh no! What happened next?",
        type: "Empathetic Backchannel",
        audioText: "Oh no! What happened next?",
        note: "Warm, sympathetic downward dip expressing shared suspense."
      }
    ]
  },
  {
    category: "Silent Letters & Syllable Stress Clinic",
    rule: "Master the silent consonants and stress shifts in wedding and ceremonial vocabulary.",
    items: [
      {
        word: "Aisle",
        ipa: "/aɪl/",
        silentLetter: "Silent 's' — rhymes exactly with 'file' and 'smile'.",
        arNote: "حرف s صامت تماماً، تُنطق ككلمة I'll أو isle."
      },
      {
        word: "Bouquet",
        ipa: "/buˈkeɪ/",
        silentLetter: "Silent 't' (French loanword) — primary stress falls on the second syllable.",
        arNote: "كلمة فرنسية الأصل، حرف t في نهايتها صامت والنبر على المقطع الثاني."
      },
      {
        word: "Ceremony",
        ipa: "/ˈser.ɪ.mə.ni/",
        silentLetter: "4 syllables, primary stress strictly on the FIRST syllable: CER-e-mo-ny.",
        arNote: "النبر يقع على المقطع الأول CER، ولا يُنطق بتشديد المقطع الأخير."
      },
      {
        word: "Prosperity",
        ipa: "/prɒsˈper.ə.ti/",
        silentLetter: "4 syllables, primary stress on the SECOND syllable: pros-PER-i-ty.",
        arNote: "النبر الأساسي يقع على المقطع الثاني PER."
      },
      {
        word: "Propose vs Proposal",
        ipa: "/prəˈpəʊz/ ➔ /prəˈpəʊ.zəl/",
        silentLetter: "Verb 'propose' (2 syllables) ➔ Noun 'proposal' (3 syllables with schwa ending).",
        arNote: "انتقال النبر والصوت بين الفعل propose والاسم المشتق proposal."
      }
    ]
  }
];

const SESSION_14_NOTEBOOK_PAGES = [
  {
    id: "s14_note_customs",
    title: "Page 1: Authentic Handout & Handwritten Wedding Customs Table",
    imgUrl: "./assets/images/session14_notebook_wedding_customs.jpg",
    tag: "Authentic Handout Transcription",
    summary: "British Council worksheet 'Wedding customs around the world' with Hindu India slip cutout and student notes for Crete, Kenya, and Morocco.",
    fullTranscription: `[TOP SLIP CUTOUT: WEDDING CUSTOMS AROUND THE WORLD - INDIA]
There are several ceremonies in a Hindu wedding, including one where the parents of the bride wash the couple's feet with milk and water. In another, the hands of the couple are tied together with thread. Also, the bride and groom walk several times in a circle together around a fire.

[WORKSHEET TABLE TRANSCRIPTIONS]
• Country: Crete, Greece
  Student Handwritten Notes: "Thousands attend. People spend a lot of time before ceremony. First dance between all couples, not bride and groom. It symbolises a union of family."

• Country: Kenya
  Student Handwritten Notes: "Shave bride's hair (student wrote pride). Man present 3 cows."

• Country: Morocco
  Student Handwritten Notes: "Bride is carried 3 times (student wrote Pride is carried 3 times, then crossed out Pride shave h)."

[DISCUSSION PROMPT]
"Did anything you hear surprise you? Which place would you most/least like to attend a wedding? Tell your group."
© British Council. All rights reserved.`
  },
  {
    id: "s14_note_learningapps",
    title: "Page 2: Smartboard LearningApps Vocabulary Matching Activity",
    imgUrl: "./assets/images/session14_smartboard_matching.jpg",
    tag: "Smartboard Interactive Slide",
    summary: "The 6 core vocabulary matching pairs displayed on the classroom smartboard via LearningApps.org.",
    fullTranscription: `[LEARNINGAPPS INTERACTIVE MATCHING TILES]
1. [Tile] "an important social or religious event, when a traditional set of actions is performed in a formal way"
   ➔ Matched to: ceremony

2. [Tile] "to ask someone to marry you"
   ➔ Matched to: propose

3. [Tile] "not religious. Relating to the ordinary people of a country"
   ➔ Matched to: civil wedding

4. [Tile] "an occasion when a photographer takes a series of photographs, usually of the same person or people in the same place"
   ➔ Matched to: photoshoot

5. [Tile] "when people have money and everything that is needed for a good life"
   ➔ Matched to: prosperity

6. [Tile] "to represent something"
   ➔ Matched to: symbolise`
  },
  {
    id: "s14_note_classroom",
    title: "Page 3: Teacher Classroom Presentation & Part-of-Speech Board",
    imgUrl: "./assets/images/session14_classroom_presentation.jpg",
    tag: "Teacher Live Annotations",
    summary: "Teacher in front of the smartboard explaining grammatical parts of speech, prefixes, and noun/verb derivations.",
    fullTranscription: `[TEACHER LIVE BOARD ANNOTATIONS]
• prosperity ➔ noun
• civil wedding ➔ noun
• symbolise ➔ verb  ==>  symbol ➔ noun
• propose ➔ verb  ==>  proposal ➔ noun
• photoshoot ➔ noun
• ceremony ➔ noun

Teacher pedagogical notes: Notice how we change verbs to nouns ('propose' to 'proposal', 'symbolise' to 'symbol'). Notice also that 'civil wedding' functions as a compound noun phrase, while 'ceremony' describes the formal event.`
  },
  {
    id: "s14_note_feedback",
    title: "Page 4: Smartboard Slide 20 — Teacher Live Language Feedback Clinic",
    imgUrl: "./assets/images/session14_board_language_feedback.jpg",
    tag: "Slide 20 Error Clinic",
    summary: "Real student speech errors recorded during group presentations and corrected on the smartboard.",
    fullTranscription: `[SMARTBOARD SLIDE 20: LANGUAGE FEEDBACK]
Sentence 1: "They do the ceremony at....."
   Teacher correction: 'do' is struck through in red.
   Written alternatives: have / host / held the ceremony at...

Sentence 2: "I don't like attend parties."
   Teacher correction: 'attend' corrected with inserted 'to' or gerund 'attending' in purple pen.

Sentence 3: "They didn't find a dress that fit her perfectly, so they go to the tailor, ...."
   Teacher correction: 'go' is struck through in red.
   Written correction: 'went to the tailor' (past narrative consistency).

Vocabulary reminders on the board:
have / host / held / attend.`
  }
];

/* ==========================================================================
   GLOBAL WINDOW EXPOSURE (CROSS-SCRIPT SAFEGUARD)
   ========================================================================== */
if (typeof window !== 'undefined') {
  // Vocabulary sets
  window.VOCAB_SESSION_1 = typeof VOCAB_SESSION_1 !== 'undefined' ? VOCAB_SESSION_1 : [];
  window.VOCAB_SESSION_2 = typeof VOCAB_SESSION_2 !== 'undefined' ? VOCAB_SESSION_2 : [];
  window.VOCAB_SESSION_3 = typeof VOCAB_SESSION_3 !== 'undefined' ? VOCAB_SESSION_3 : [];
  window.VOCAB_SESSION_10 = typeof VOCAB_SESSION_10 !== 'undefined' ? VOCAB_SESSION_10 : [];
  window.VOCAB_SESSION_11 = typeof VOCAB_SESSION_11 !== 'undefined' ? VOCAB_SESSION_11 : [];
  window.VOCAB_SESSION_12 = typeof VOCAB_SESSION_12 !== 'undefined' ? VOCAB_SESSION_12 : [];
  window.VOCAB_SESSION_13 = typeof VOCAB_SESSION_13 !== 'undefined' ? VOCAB_SESSION_13 : [];
  window.VOCAB_SESSION_14 = typeof VOCAB_SESSION_14 !== 'undefined' ? VOCAB_SESSION_14 : [];

  // Session 1
  window.SESSION_1_DESCRIBING_OBJECTS = typeof SESSION_1_DESCRIBING_OBJECTS !== 'undefined' ? SESSION_1_DESCRIBING_OBJECTS : undefined;
  window.SESSION_1_RELATIVE_CLAUSES = typeof SESSION_1_RELATIVE_CLAUSES !== 'undefined' ? SESSION_1_RELATIVE_CLAUSES : undefined;
  window.SESSION_1_LISTENING_GAPS = typeof SESSION_1_LISTENING_GAPS !== 'undefined' ? SESSION_1_LISTENING_GAPS : undefined;
  window.SESSION_1_COMPOUND_STRESS = typeof SESSION_1_COMPOUND_STRESS !== 'undefined' ? SESSION_1_COMPOUND_STRESS : undefined;
  window.SESSION_1_CLARIFYING_CHECKING = typeof SESSION_1_CLARIFYING_CHECKING !== 'undefined' ? SESSION_1_CLARIFYING_CHECKING : undefined;
  window.SESSION_1_MEDIA_ITEMS = typeof SESSION_1_MEDIA_ITEMS !== 'undefined' ? SESSION_1_MEDIA_ITEMS : undefined;

  // Session 2
  window.SESSION_2_INDIRECT_QUESTIONS = typeof SESSION_2_INDIRECT_QUESTIONS !== 'undefined' ? SESSION_2_INDIRECT_QUESTIONS : undefined;
  window.SESSION_2_LISTENING_EXTRACTS = typeof SESSION_2_LISTENING_EXTRACTS !== 'undefined' ? SESSION_2_LISTENING_EXTRACTS : undefined;
  window.SESSION_2_CATEGORIES_MATRIX = typeof SESSION_2_CATEGORIES_MATRIX !== 'undefined' ? SESSION_2_CATEGORIES_MATRIX : undefined;
  window.SESSION_2_TENSES_LAB = typeof SESSION_2_TENSES_LAB !== 'undefined' ? SESSION_2_TENSES_LAB : undefined;
  window.SESSION_2_MEDIA_ITEMS = typeof SESSION_2_MEDIA_ITEMS !== 'undefined' ? SESSION_2_MEDIA_ITEMS : undefined;

  // Session 3
  window.SESSION_3_THIRD_CONDITIONAL = typeof SESSION_3_THIRD_CONDITIONAL !== 'undefined' ? SESSION_3_THIRD_CONDITIONAL : undefined;
  window.SESSION_3_REGRET_EVALUATION = typeof SESSION_3_REGRET_EVALUATION !== 'undefined' ? SESSION_3_REGRET_EVALUATION : undefined;
  window.SESSION_3_WAYS_TO_REGRET = typeof SESSION_3_WAYS_TO_REGRET !== 'undefined' ? SESSION_3_WAYS_TO_REGRET : undefined;
  window.SESSION_3_TIME_LINKERS = typeof SESSION_3_TIME_LINKERS !== 'undefined' ? SESSION_3_TIME_LINKERS : undefined;
  window.SESSION_3_TEACHER_FEEDBACK = typeof SESSION_3_TEACHER_FEEDBACK !== 'undefined' ? SESSION_3_TEACHER_FEEDBACK : undefined;
  window.SESSION_3_AMUSEMENT_PARK = typeof SESSION_3_AMUSEMENT_PARK !== 'undefined' ? SESSION_3_AMUSEMENT_PARK : undefined;
  window.SESSION_3_NOTEBOOK_PAGES = typeof SESSION_3_NOTEBOOK_PAGES !== 'undefined' ? SESSION_3_NOTEBOOK_PAGES : undefined;

  // Session 12
  window.SESSION_12_LEAD_IN = typeof SESSION_12_LEAD_IN !== 'undefined' ? SESSION_12_LEAD_IN : undefined;
  window.SESSION_12_JOB_ADVERT = typeof SESSION_12_JOB_ADVERT !== 'undefined' ? SESSION_12_JOB_ADVERT : undefined;
  window.SESSION_12_MATCHING_QUIZ = typeof SESSION_12_MATCHING_QUIZ !== 'undefined' ? SESSION_12_MATCHING_QUIZ : undefined;
  window.SESSION_12_CHARACTER_TRAITS = typeof SESSION_12_CHARACTER_TRAITS !== 'undefined' ? SESSION_12_CHARACTER_TRAITS : undefined;
  window.SESSION_12_PUNCTUALITY_VS_TARDINESS = typeof SESSION_12_PUNCTUALITY_VS_TARDINESS !== 'undefined' ? SESSION_12_PUNCTUALITY_VS_TARDINESS : undefined;
  window.SESSION_12_CANDIDATE_PETER = typeof SESSION_12_CANDIDATE_PETER !== 'undefined' ? SESSION_12_CANDIDATE_PETER : undefined;
  window.SESSION_12_DISCUSSION_QUESTIONS = typeof SESSION_12_DISCUSSION_QUESTIONS !== 'undefined' ? SESSION_12_DISCUSSION_QUESTIONS : undefined;
  window.SESSION_12_TEACHER_FEEDBACK = typeof SESSION_12_TEACHER_FEEDBACK !== 'undefined' ? SESSION_12_TEACHER_FEEDBACK : undefined;
  window.SESSION_12_PRONUNCIATION_LAB = typeof SESSION_12_PRONUNCIATION_LAB !== 'undefined' ? SESSION_12_PRONUNCIATION_LAB : undefined;
  window.SESSION_12_NOTEBOOK_PAGES = typeof SESSION_12_NOTEBOOK_PAGES !== 'undefined' ? SESSION_12_NOTEBOOK_PAGES : undefined;

  // Session 13
  window.SESSION_13_LEAD_IN = typeof SESSION_13_LEAD_IN !== 'undefined' ? SESSION_13_LEAD_IN : undefined;
  window.SESSION_13_STORIES = typeof SESSION_13_STORIES !== 'undefined' ? SESSION_13_STORIES : undefined;
  window.SESSION_13_TRUE_FALSE = typeof SESSION_13_TRUE_FALSE !== 'undefined' ? SESSION_13_TRUE_FALSE : undefined;
  window.SESSION_13_NARRATIVE_TENSES = typeof SESSION_13_NARRATIVE_TENSES !== 'undefined' ? SESSION_13_NARRATIVE_TENSES : undefined;
  window.SESSION_13_FRED_PRACTICE = typeof SESSION_13_FRED_PRACTICE !== 'undefined' ? SESSION_13_FRED_PRACTICE : undefined;
  window.SESSION_13_NOTEBOOK_PAGES = typeof SESSION_13_NOTEBOOK_PAGES !== 'undefined' ? SESSION_13_NOTEBOOK_PAGES : undefined;
  window.SESSION_13_STORY_PROMPTS = typeof SESSION_13_STORY_PROMPTS !== 'undefined' ? SESSION_13_STORY_PROMPTS : undefined;
  window.SESSION_13_TEACHER_CLINIC = typeof SESSION_13_TEACHER_CLINIC !== 'undefined' ? SESSION_13_TEACHER_CLINIC : undefined;

  // Session 14
  window.SESSION_14_LEAD_IN = typeof SESSION_14_LEAD_IN !== 'undefined' ? SESSION_14_LEAD_IN : undefined;
  window.SESSION_14_DIALOGUES = typeof SESSION_14_DIALOGUES !== 'undefined' ? SESSION_14_DIALOGUES : undefined;
  window.SESSION_14_SMARTBOARD_MATCHING = typeof SESSION_14_SMARTBOARD_MATCHING !== 'undefined' ? SESSION_14_SMARTBOARD_MATCHING : undefined;
  window.SESSION_14_VOCAB_GROUPS = typeof SESSION_14_VOCAB_GROUPS !== 'undefined' ? SESSION_14_VOCAB_GROUPS : undefined;
  window.SESSION_14_GLOBAL_CUSTOMS = typeof SESSION_14_GLOBAL_CUSTOMS !== 'undefined' ? SESSION_14_GLOBAL_CUSTOMS : undefined;
  window.SESSION_14_DISCUSSION_LAB = typeof SESSION_14_DISCUSSION_LAB !== 'undefined' ? SESSION_14_DISCUSSION_LAB : undefined;
  window.SESSION_14_TEACHER_FEEDBACK = typeof SESSION_14_TEACHER_FEEDBACK !== 'undefined' ? SESSION_14_TEACHER_FEEDBACK : undefined;
  window.SESSION_14_PRONUNCIATION_LAB = typeof SESSION_14_PRONUNCIATION_LAB !== 'undefined' ? SESSION_14_PRONUNCIATION_LAB : undefined;
  window.SESSION_14_NOTEBOOK_PAGES = typeof SESSION_14_NOTEBOOK_PAGES !== 'undefined' ? SESSION_14_NOTEBOOK_PAGES : undefined;
}



