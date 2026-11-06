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
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "Step-by-step actions that teams follow to complete a job together.",
    b1Explain: "Step-by-step actions that teams follow to complete a job together.",
    opposite: "Chaos / Ad-hoc",
    arWord: "عمليات / إجراءات / مسارات عمل / يعالج / يصنع",
    arMeaning: "إجراءات ومسارات العمل المنظمة خطوة بخطوة",
    sentence: "Our engineering team established clear processes so everyone knows what to do."
  },
  {
    id: 2, word: "Conflict resolution",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈkɒn.flɪkt ˌrez.əˈluː.ʃən/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "Finding a fair, calm, and peaceful solution when people disagree.",
    b1Explain: "Finding a fair and calm solution when two people disagree.",
    opposite: "Escalating conflict",
    arWord: "حل النزاعات / فض الخلافات / تسوية النزاع",
    arMeaning: "فض النزاعات وحل الخلافات بهدوء وإنصاف",
    sentence: "Learning conflict resolution helped the managers handle disagreements between team members calmly."
  },
  {
    id: 3, word: "Dynamic",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/daɪˈnæm.ɪk/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "Full of energy, active, and exciting; never boring.",
    b1Explain: "Energetic and exciting, never boring or standing still.",
    opposite: "Static / Stagnant",
    arWord: "ديناميكي / حيوي / نشيط / متفاعل ومتغير باستمرار",
    arMeaning: "ديناميكي / مفعم بالحيوية والنشاط والتجدد",
    sentence: "The project leader created a dynamic atmosphere where everyone felt motivated to contribute."
  },
  {
    id: 4, word: "A challenge",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ə ˈtʃæl.ɪndʒ/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "A difficult task that tests your ability and needs real effort.",
    b1Explain: "A task that is not easy, but exciting to try and finish.",
    opposite: "Easy task",
    arWord: "تحدٍ / مهمة صعبة / يتحدى قدرة",
    arMeaning: "تحدٍ صعب ومحفز يختبر القدرات ويحتاج جهداً حقيقياً",
    sentence: "Building the tower out of paper tubes was a tough challenge, but our team succeeded."
  },
  {
    id: 5, word: "Approximately",
    pos: "adverb", cambridgeLevel: "B1",
    pronunciation: "/əˈprɒk.sɪ.mət.li/",
    citation: "Handout Page 1 (Listening)",
    definition: "Close to an exact number or time, but not completely exact; about.",
    b1Explain: "About or nearly, when you don't know the exact figure.",
    opposite: "Exactly / Precisely",
    arWord: "تقريباً / حوالي / زهاء / بنسبة تقريبية",
    arMeaning: "تقريباً / بتقدير تقريبي غير دقيق تماماً",
    sentence: "The team-building workshop lasted approximately two hours."
  },
  {
    id: 6, word: "Capitalize on",
    pos: "verb phrase", cambridgeLevel: "C1",
    pronunciation: "/ˈkæp.ɪ.təl.aɪz ɒn/",
    citation: "Handout Page 1 (Lead-In)",
    definition: "To use a good situation, skill, or chance to get an advantage.",
    b1Explain: "To take advantage of something good that is available around you.",
    opposite: "Waste / Miss out",
    arWord: "يستثمر / يستغل فرصة بنجاح / يستفيد لأقصى حد",
    arMeaning: "يستثمر الفرصة أو الميزة ويستغلها لصالحه",
    sentence: "We managed to capitalize on our architect's drawing skills to win the building competition."
  },
  {
    id: 7, word: "Sophisticated",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/səˈfɪs.tɪ.keɪ.tɪd/",
    citation: "Handout Page 2 & Slide 3",
    definition: "Cleverly designed and modern; not simple.",
    b1Explain: "Cleverly designed and advanced rather than simple.",
    opposite: "Primitive / Crude",
    arWord: "متقدم / راقٍ / متطور تقنياً / معقد ببراعة",
    arMeaning: "متطور ومتقن التصميم وغير بدائي",
    sentence: "The winning bridge design used a sophisticated balance of wooden sticks and tape."
  },
  {
    id: 8, word: "Time-management",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈtaɪm ˌmæn.ɪdʒ.mənt/",
    citation: "Handout Page 2 (Discussion)",
    definition: "Planning your time well so you finish all your work before the deadline.",
    b1Explain: "Planning your hours wisely so you finish all tasks before the deadline.",
    opposite: "Procrastination",
    arWord: "إدارة الوقت / تنظيم وتوزيع أوقات العمل",
    arMeaning: "إدارة الوقت وتنظيم الساعات بذكاء لإنجاز العمل",
    sentence: "Good time-management allowed our group to plan, build, and test our model with minutes to spare."
  },
  {
    id: 9, word: "Customised",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈkʌs.tə.maɪzd/",
    citation: "Handout Page 2 (Task 2)",
    definition: "Specially made or arranged to fit the exact needs of a group.",
    b1Explain: "Made specially to fit your exact group and preferences.",
    opposite: "Standardized / Generic",
    arWord: "مخصص / مفصل حسب الطلب / مصمم خصيصاً",
    arMeaning: "مخصص ومصمم خصيصاً ليلائم احتياجات محددة",
    sentence: "The trainer offered a customised course designed specifically for hotel reception staff."
  },
  {
    id: 10, word: "Complex",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈkɒm.pleks/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "Having many different connected parts and not simple to understand.",
    b1Explain: "Hard to solve quickly because it has many connected parts.",
    opposite: "Simple / Straightforward",
    arWord: "معقد / مركب / مجمع مبانٍ أو منشآت",
    arMeaning: "معقد ومتشابك العناصر ويحتاج تحليلاً",
    sentence: "The instructions for assembling the solar kit were complex, so we read them twice together."
  },
  {
    id: 11, word: "Brainstorm",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈbreɪn.stɔːm/",
    citation: "Handout Page 2 (Activity 3)",
    definition: "To meet in a group and share lots of creative ideas quickly.",
    b1Explain: "Sitting together to think of creative ideas freely.",
    opposite: "",
    arWord: "عصف ذهني / يتبادل أفكاراً إبداعية / توليد أفكار حرة",
    arMeaning: "عصف ذهني وتوليد أفكار إبداعية في جلسة جماعية",
    sentence: "Before touching the materials, our group spent five minutes brainstorming possible layouts."
  },
  {
    id: 12, word: "Construct",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/kənˈstrʌkt/",
    citation: "Handout Page 3 & Slide 4",
    definition: "To build or put pieces together to make something.",
    b1Explain: "To build something carefully using tools and materials.",
    opposite: "Demolish / Dismantle",
    arWord: "يبني / يشيد / ينشئ / يركب بناءً",
    arMeaning: "يبني أو يشيد أو يركب أجزاء الشيء بعناية",
    sentence: "Using only cardboard and string, we constructed a small boat that could float on water."
  },
  {
    id: 13, word: "Decision-making",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/dɪˈsɪʒ.ən ˌmeɪ.kɪŋ/",
    citation: "Handout Page 3 (Team Analysis)",
    definition: "The process of choosing the best option as a team.",
    b1Explain: "The way a group chooses what to do next.",
    opposite: "Indecision",
    arWord: "اتخاذ القرارات / صنع القرار وحسم الموقف",
    arMeaning: "صنع واتخاذ القرارات الجماعية بحكمة وحسم",
    sentence: "Fast and clear decision-making was the main reason Team Blue finished first."
  },
  {
    id: 14, word: "Feedback",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈfiːd.bæk/",
    citation: "Handout Page 3 (Review)",
    definition: "Helpful advice telling someone what they did well and how to get better.",
    b1Explain: "Telling someone what they did well and how they can improve.",
    opposite: "",
    arWord: "تغذية راجعة / ملاحظات تقييمية / آراء نقدية بناءة",
    arMeaning: "تغذية راجعة وتقييم بناء للأداء لتطويره",
    sentence: "After the exercise, the teacher gave constructive feedback on our communication style."
  },
  {
    id: 15, word: "Orienteering",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˌɔː.ri.enˈtɪə.rɪŋ/",
    citation: "Handout Page 3 (Outdoor Challenge)",
    definition: "The outdoor sport of finding your way using a map and a compass.",
    b1Explain: "Navigating across outdoor trails using maps.",
    opposite: "",
    arWord: "رياضة تحديد الاتجاهات / التنقل والملاحة بالخريطة والبوصلة",
    arMeaning: "رياضة تحديد المواقع والاتجاهات بالخريطة والبوصلة",
    sentence: "During the afternoon session, we went orienteering in the forest to locate hidden clues."
  },
  {
    id: 16, word: "Synchronized",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈsɪŋ.krə.naɪzd/",
    citation: "Handout Page 3 & Slide 5",
    definition: "Happening or moving together at the exact same time and speed.",
    b1Explain: "Moving together at the same time in harmony.",
    opposite: "Desynchronized",
    arWord: "متزامن / متناسق في التوقيت / منسق بحركة واحدة",
    arMeaning: "متزامن ومنسجم في التوقيت والسرعة معاً",
    sentence: "Rowing the canoe required synchronized strokes from all four paddlers."
  },
  {
    id: 17, word: "Freestanding",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˌfriːˈstæn.dɪŋ/",
    citation: "Smartboard Challenge Slide 5",
    definition: "Standing up on its own without leaning against a wall or pole.",
    b1Explain: "Standing upright without any wall or support holding it.",
    opposite: "Supported / Leaning",
    arWord: "قائم بذاته / مستقل هيكلياً بدون دعائم خارجية",
    arMeaning: "قائم بذاته دون الاستناد إلى جدار أو دعامة خارجية",
    sentence: "The rules stated that the tower must remain freestanding for at least sixty seconds."
  },
  {
    id: 18, word: "Structural stability",
    pos: "noun phrase", cambridgeLevel: "C1",
    pronunciation: "/ˈstrʌk.tʃər.əl stəˈbɪl.ə.ti/",
    citation: "Smartboard Challenge Slide 5",
    definition: "How strong and stable an object is so it does not fall or break.",
    b1Explain: "The solid strength of a building that stops it from collapsing.",
    opposite: "Instability / Collapse",
    arWord: "استقرار هيكلي / ثبات وتوازن البناء المعماري",
    arMeaning: "ثبات وتماسك الهيكل الهندسي لمنع الانهيار",
    sentence: "Adding triangular supports to the base improved the structural stability of the paper tower."
  },
  {
    id: 19, word: "Venture",
    pos: "noun / verb", cambridgeLevel: "B2",
    pronunciation: "/ˈven.tʃər/",
    citation: "Handout Page 4 (Summary)",
    definition: "To go into a new or unfamiliar place with curiosity and courage.",
    b1Explain: "To bravely go into an unknown place.",
    opposite: "Retreat / Stay put",
    arWord: "مشروع مغامرة / عمل تجاري جديد وجريء / يجازف",
    arMeaning: "يخوض تجربة أو يغامر بالدخول في مجال أو مكان جديد",
    sentence: "Equipped with compasses, the teams ventured into the dense woodland to find the checkpoint."
  },
  {
    id: 20, word: "Beat the clock",
    pos: "idiom", cambridgeLevel: "B2",
    pronunciation: "/biːt ðə klɒk/",
    citation: "Handout Page 4 (Game Review)",
    definition: "To finish a task or game before the time runs out.",
    b1Explain: "Completing a challenge before the timer hits zero.",
    opposite: "Run out of time",
    arWord: "يسابق الزمن / ينجز المهمة قبل نفاد الوقت المحدد",
    arMeaning: "يتسابق مع الزمن وينهي المهمة قبل انتهاء الوقت",
    sentence: "We placed the final block with three seconds remaining and beat the clock!"
  },
  {
    id: 21, word: "Acquaintance",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/əˈkweɪn.təns/",
    citation: "Teacher Clinic (Whiteboard)",
    definition: "Someone you know a little, but who is not a close friend.",
    b1Explain: "A person you know slightly, like a neighbor, but not a close friend.",
    opposite: "Close friend / Stranger",
    arWord: "معرفة شخصية / شخص تعرفه سطحياً / دراية بموضوع",
    arMeaning: "معرفة عابرة أو شخص تعرفه سطحياً (ليس صديقاً مقرباً)",
    sentence: "He is not a close buddy of mine; he is just a business acquaintance from the conference."
  },
  {
    id: 22, word: "Disorganised",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/dɪˈsɔː.ɡən.aɪzd/",
    citation: "Teacher Clinic (Whiteboard)",
    definition: "Messy, poorly planned, and not working in an orderly way.",
    b1Explain: "Not orderly, confused, and messy with poor planning.",
    opposite: "Well-organized",
    arWord: "غير منظم / عشوائي / فوضوي في ترتيبه",
    arMeaning: "فوضوي وغير منظم ويعاني من سوء التخطيط",
    sentence: "Team Red lost valuable minutes because their workspace was completely disorganised."
  },
  {
    id: 23, word: "Tension",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈten.ʃən/",
    citation: "Handout Page 4 (Reflection)",
    definition: "A nervous, uncomfortable feeling between people who disagree.",
    b1Explain: "An uncomfortable feeling when people feel angry or worried.",
    opposite: "Harmony / Calm",
    arWord: "توتر / شد عصبي / ضغط نفسي أو خلاف مشحون",
    arMeaning: "توتر وقلق ومشاحنات بين الأطراف المختلفة",
    sentence: "Taking a short laugh break helped relieve the tension between the competing teams."
  },
  {
    id: 24, word: "Clue",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/kluː/",
    citation: "Handout Page 4 (Treasure Hunt)",
    definition: "A helpful sign or hint that helps you find an answer or solve a puzzle.",
    b1Explain: "A hint that helps you solve a puzzle or mystery.",
    opposite: "",
    arWord: "دليل / إشارة توجيهية / خيط لحل لغز",
    arMeaning: "دليل أو إشارة إرشادية تساعد في حل اللغز",
    sentence: "The riddle written on the yellow card gave us a clue to find the next hidden flag."
  },
  {
    id: 25, word: "Outfitted with",
    pos: "verb phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈaʊt.fɪt.ɪd wɪð/",
    citation: "Handout Page 4 & Slide 6",
    definition: "Given all the clothes, tools, or safety gear needed for an activity.",
    b1Explain: "Provided with all the equipment and safety gear you need.",
    opposite: "Ill-equipped",
    arWord: "مجهز بـ / مزود بـ / مزود بمعدات وأدوات",
    arMeaning: "مجهز ومزود بجميع الملابس والأدوات اللازمة للمهمة",
    sentence: "All hikers were outfitted with waterproof jackets, helmets, and emergency whistles."
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
    opposite: "Quote verbatim",
    arWord: "يعيد صياغة / يعبّر بأسلوب آخر / صياغة جديدة / يفسر بكلمات أبسط",
    arMeaning: "إعادة صياغة الكلام بكلمات أسهل وأبسط لنقل المعنى",
    sentence: "If you don't know the exact word, paraphrase it by describing what it does."
  },
  {
    id: 102, word: "Lack of confidence",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/læk əv ˈkɒn.fɪ.dəns/",
    citation: "Teacher Insights (Slide 4)",
    definition: "Feeling shy, nervous, or unsure about your own abilities.",
    b1Explain: "Feeling shy or afraid to speak because you worry about making mistakes.",
    opposite: "Self-confidence",
    arWord: "انعدام الثقة / قلة الثقة بالنفس / تردد وشك في القدرات",
    arMeaning: "قلة الثقة بالنفس / الخجل والتردد في التحدث",
    sentence: "His hesitation in meetings was caused by a lack of confidence, not poor English."
  },
  {
    id: 103, word: "Essential",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪˈsen.ʃəl/",
    citation: "Maggie's Quote (Slide 4)",
    definition: "Very important and completely necessary.",
    b1Explain: "Something that you must have or that is extremely important.",
    opposite: "Optional / Trivial",
    arWord: "أساسي / جوهري / ضروري للغاية / لا غنى عنه",
    arMeaning: "جوهري / ضروري وأساسي جداً ولا غنى عنه",
    sentence: "Maggie reminded the class that making mistakes is an essential part of learning."
  },
  {
    id: 104, word: "Translate",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/trænzˈleɪt/",
    citation: "Slide 4 Discussion",
    definition: "To change words or text from one language into another language.",
    b1Explain: "Converting words from your native language into English.",
    opposite: "Keep untranslated",
    arWord: "يترجم / ينقل لغة / يفسر معنى / يحول لواقع",
    arMeaning: "يترجم من لغة إلى أخرى",
    sentence: "Translating word-for-word in your head slows down your speaking speed."
  },
  {
    id: 105, word: "Native language",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈneɪ.tɪv ˈlæŋ.ɡwɪdʒ/",
    citation: "Slide 4 Discussion",
    definition: "The first language you learned to speak as a child from your parents.",
    b1Explain: "The primary language of your home country.",
    opposite: "Foreign / Second language",
    arWord: "اللغة الأم / لغة المنشأ والوطن الأصلية",
    arMeaning: "اللغة الأم (اللغة الأولى التي تعلمها في الصغر)",
    sentence: "Try to think in English rather than translating from your native language."
  },
  {
    id: 106, word: "Identify",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/aɪˈden.tɪ.faɪ/",
    citation: "Language Focus (Slide 5, Sentence a)",
    definition: "To recognise and name who someone or what something is.",
    b1Explain: "To find out exactly what or who something is.",
    opposite: "Overlook / Misdiagnose",
    arWord: "يحدد / يميّز / يكتشف هوية الشيء أو الشخص",
    arMeaning: "يحدد / يتعرف على المشكلة أو السبب بدقة",
    sentence: "If I had this problem, I would try to identify the reason first."
  },
  {
    id: 107, word: "Imaginary",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪˈmædʒ.ɪ.nər.i/",
    citation: "Language Focus (Slide 5, Q2)",
    definition: "Created in the mind and existing only in imagination, not in reality.",
    b1Explain: "Not real; existing only in your thoughts or imagination.",
    opposite: "Real / Actual",
    arWord: "خيالي / وهمي / مفترض في العقل فقط",
    arMeaning: "خيالي / افتراضي غير موجود على أرض الواقع",
    sentence: "The second conditional is used for imaginary or unreal situations in the present."
  },
  {
    id: 108, word: "Second conditional",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈsek.ənd kənˈdɪʃ.ən.əl/",
    citation: "Slide 6 Grammar Focus",
    definition: "A grammatical structure using past tense and would for hypothetical situations.",
    b1Explain: "The grammar pattern we use to imagine situations and give advice.",
    opposite: "",
    arWord: "الحالة الشرطية الثانية (للمواقف غير الواقعية أو المستقبل غير المحتمل)",
    arMeaning: "الحالة الشرطية الثانية (للمواقف الافتراضية وتقديم النصيحة)",
    sentence: "We practiced the second conditional to give thoughtful study advice to our classmates."
  },
  {
    id: 109, word: "Stressed out",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/strest aʊt/",
    citation: "Learner Challenges (Slide 4)",
    definition: "Feeling overwhelmed, anxious, and exhausted by too much pressure.",
    b1Explain: "Feeling overwhelmed, worried, and unable to rest.",
    opposite: "Relaxed / Calm",
    arWord: "مرهق نفسياً / واقع تحت ضغط عصبي شديد / متوتر",
    arMeaning: "متوتر جداً / مجهد ومضغوط نفسياً وعصبياً",
    sentence: "Ahmed felt stressed out whenever the teacher asked him to speak in front of the whole class."
  },
  {
    id: 110, word: "Fluency",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈfluː.ən.si/",
    citation: "Course Objectives (Slide 2)",
    definition: "The ability to speak or write a language smoothly, easily, and without hesitation.",
    b1Explain: "Speaking smoothly without stopping or searching for words.",
    opposite: "Hesitancy / Stuttering",
    arWord: "طلاقة لغوية / فصاحة وسلاسة في التحدث دون توقف",
    arMeaning: "الطلاقة اللغوية (التحدث بسلاسة ويسر دون تعثر)",
    sentence: "Practicing English every day with native podcasts will greatly improve your fluency."
  },
  {
    id: 111, word: "Overcome",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.vəˈkʌm/",
    citation: "Maggie's Strategy (Slide 4)",
    definition: "To successfully deal with, defeat, or control a problem or difficulty.",
    b1Explain: "To defeat a problem or conquer a personal fear.",
    opposite: "Succumb / Surrender",
    arWord: "يتغلب على / يتجاوز عقبة / ينتصر على صعوبة",
    arMeaning: "يتغلب على صعوبة أو عقبة ويتجاوزها بنجاح",
    sentence: "She managed to overcome her fear of public speaking by joining the college debate team."
  },
  {
    id: 112, word: "Promotion",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/prəˈməʊ.ʃən/",
    citation: "Student Goals Context",
    definition: "Moving up to a higher, more responsible or better-paid position at work.",
    b1Explain: "Getting a higher and better-paid position at work.",
    opposite: "Demotion",
    arWord: "ترقية وظيفية / ترويج ودعاية / تقدم في المنصب",
    arMeaning: "ترقية وظيفية إلى منصب أعلى ومسؤوليات أكبر",
    sentence: "Improving his business English helped him earn a promotion to regional sales manager."
  },
  {
    id: 113, word: "Speaking club",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈspiː.kɪŋ klʌb/",
    citation: "British Council Resources",
    definition: "A regular group meeting where learners gather to practice English conversation.",
    b1Explain: "A friendly meeting where learners practice talking in English.",
    opposite: "",
    arWord: "نادي محادثة / حلقة نقاش وتدريب لغوي",
    arMeaning: "نادي محادثة لممارسة الحوار والتواصل باللغة الإنجليزية",
    sentence: "Joining the weekly British Council speaking club boosted my conversational confidence."
  },
  {
    id: 114, word: "Excerpt",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈek.sɜːpt/",
    citation: "Handout Listening Exercise",
    definition: "A short extract or passage taken from a book, speech, or recording.",
    b1Explain: "A short piece taken from a conversation or recording.",
    opposite: "Full text",
    arWord: "مقتطف / مقطع مأخوذ من نص أو تسجيل / اقتباس",
    arMeaning: "مقتطف / مقطع قصير مأخوذ من تسجيل صوتي أو كتاب",
    sentence: "Listen to this thirty-second audio excerpt and identify what advice Maggie gives."
  },
  {
    id: 115, word: "Prediction",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/prɪˈdɪk.ʃən/",
    citation: "Pre-Listening Task (Slide 3)",
    definition: "A statement estimating or guessing what will happen in the future.",
    b1Explain: "A guess about what will happen next based on what you already know.",
    opposite: "",
    arWord: "تنبؤ / توقع مستقبلي / تخمين مبني على قرائن",
    arMeaning: "تنبؤ / توقع مبني على معطيات وملاحظات مسبقة",
    sentence: "Before listening, make a prediction about which learning problem is most common."
  },
  {
    id: 116, word: "Hypothetical",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˌhaɪ.pəˈθet.ɪ.kəl/",
    citation: "Grammar Analysis (Slide 5)",
    definition: "Based on an imagined possibility rather than on actual real facts.",
    b1Explain: "Imagined as an example, not real or fact.",
    opposite: "Factual / Real",
    arWord: "افتراضي / فرضي / قائم على تخيل احتمالي",
    arMeaning: "افتراضي / مبني على فرضية وتخيل وليس حقيقة واقعة",
    sentence: "'If I won the lottery' is a classic hypothetical statement used in the second conditional."
  },
  {
    id: 117, word: "Complain",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/kəmˈpleɪn/",
    citation: "Slide 4 Learner Quotes",
    definition: "To say that you are unhappy, dissatisfied, or annoyed about something.",
    b1Explain: "To say you are not satisfied with food, service, or treatment.",
    opposite: "Praise / Applaud",
    arWord: "يشتكي / يتذمر / يقدم شكوى رسمية",
    arMeaning: "يشتكي / يتذمر من سوء المعاملة أو عدم الرضا",
    sentence: "Many students complain that English grammar rules have too many confusing exceptions."
  },
  {
    id: 118, word: "If I were you",
    pos: "phrase / idiom", cambridgeLevel: "B1",
    pronunciation: "/ɪf aɪ wɜː juː/",
    citation: "Advice Formulas (Slide 5 & 6)",
    definition: "A conversational phrase used to give sympathetic advice or recommendations.",
    b1Explain: "The standard phrase used in English to give someone advice.",
    opposite: "",
    arWord: "لو كنت مكانك / نصيحتي لك كأنني في موقعك",
    arMeaning: "لو كنت مكانك (صيغة تقديم النصيحة باللغة الإنجليزية)",
    sentence: "If I were you, I would listen to English news podcasts for fifteen minutes every morning."
  },
  {
    id: 119, word: "Study tips",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈstʌd.i tɪps/",
    citation: "Slide 6 Practical Advice",
    definition: "Useful suggestions and practical advice to help you learn more effectively.",
    b1Explain: "Useful little pieces of advice on how to study better.",
    opposite: "",
    arWord: "نصائح دراسية / إرشادات وإضاءات للتفوق في المذاكرة",
    arMeaning: "نصائح وإرشادات دراسية لرفع كفاءة وسرعة التعلم",
    sentence: "The teacher shared five study tips to help students remember irregular verbs easily."
  },
  {
    id: 120, word: "Confidence",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈkɒn.fɪ.dəns/",
    citation: "Course Overview (Slide 1)",
    definition: "A feeling of trust in your own abilities, qualities, and judgment.",
    b1Explain: "Belief in your own power and ability to do something well.",
    opposite: "Insecurity / Doubt",
    arWord: "ثقة بالنفس / يقين واطمئنان / ائتمان",
    arMeaning: "الثقة بالنفس والإيمان بالقدرات الشخصية",
    sentence: "Speaking regularly with partners in class will gradually build your speaking confidence."
  },
  {
    id: 121, word: "Underlying reason",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌʌn.dəˈlaɪ.ɪŋ ˈriː.zən/",
    citation: "Maggie's Diagnostic (Slide 4)",
    definition: "The real, fundamental cause beneath the surface of a problem.",
    b1Explain: "The deep, real cause behind a difficulty that people don't see immediately.",
    opposite: "Surface symptom",
    arWord: "السبب الدفين / الدافع الجذري الأساسي غير الظاهر",
    arMeaning: "السبب الجذري الخفي الكامن وراء المشكلة",
    sentence: "Fear of being judged by colleagues was the underlying reason for his workplace silence."
  },
  {
    id: 122, word: "Acquiring",
    pos: "verb (gerund)", cambridgeLevel: "B2",
    pronunciation: "/əˈkwaɪə.rɪŋ/",
    citation: "Language Acquisition Theory",
    definition: "Gradually developing or gaining a skill or language through natural practice.",
    b1Explain: "Gradually picking up a new language skill through daily use.",
    opposite: "Losing / Forgetting",
    arWord: "اكتساب / تحصيل لغة أو مهارة / حيازة وشراء",
    arMeaning: "اكتساب المهارة أو اللغة تلقائياً عبر الممارسة المستمرة",
    sentence: "Acquiring natural British pronunciation requires active listening and repeated speaking drills."
  },
  {
    id: 123, word: "Have a seat",
    pos: "idiom / phrase", cambridgeLevel: "B1",
    pronunciation: "/hæv ə siːt/",
    citation: "Classroom Social Rituals",
    definition: "A polite, friendly idiom inviting someone to sit down comfortably.",
    b1Explain: "A polite invitation to sit down comfortably.",
    opposite: "Stand up",
    arWord: "تفضل بالجلوس / خذ مقعدك واسترح",
    arMeaning: "تفضل بالجلوس (دعوة مهذبة ومألوفة للجلوس)",
    sentence: "'Please have a seat while I review your English assessment scores,' smiled the instructor."
  },
  {
    id: 124, word: "A life saver",
    pos: "idiom", cambridgeLevel: "B2",
    pronunciation: "/ə ˈlaɪf ˌseɪ.vər/",
    citation: "Student Colloquial Speech",
    definition: "A person or thing that provides essential help in a difficult moment.",
    b1Explain: "A person who helps you out of a stressful problem just in time.",
    opposite: "",
    arWord: "منقذ للموقف / حل سحري في اللحظة الحرجة",
    arMeaning: "منقذ حقيقي (شخص أو شيء يحل أزمة حرجة في وقتها)",
    sentence: "Lending me your course notes before the midterm exam was an absolute life saver!"
  },
  {
    id: 125, word: "Put somebody on the spot",
    pos: "idiom", cambridgeLevel: "B2",
    pronunciation: "/pʊt ˈsʌm.bə.di ɒn ðə spɒt/",
    citation: "Classroom Dynamics (Slide 4)",
    definition: "To cause embarrassment by forcing someone to answer unexpected questions in public.",
    b1Explain: "Making someone feel uncomfortable by asking a sudden hard question in front of others.",
    opposite: "Put at ease",
    arWord: "يُحرج شخصاً / يضعه في موقف محرج ومفاجئ يطلب إجابة فورية",
    arMeaning: "يحرجه بسؤال مباغت أو موقف مفاجئ أمام الحاضرين",
    sentence: "The teacher avoided putting shy students on the spot during whole-class discussions."
  },
  {
    id: 126, word: "Boost somebody",
    pos: "verb phrase", cambridgeLevel: "B2",
    pronunciation: "/buːst ˈsʌm.bə.di/",
    citation: "Motivation Strategy (Slide 5)",
    definition: "To increase someone's confidence, energy, morale, or performance.",
    b1Explain: "Helping someone feel more certain and positive about their abilities.",
    opposite: "Discourage / Undermine",
    arWord: "يدعم شخصاً / يحفزه ويرفع معنوياته وثقته",
    arMeaning: "يرفع معنوياته ويزيد من ثقته وحماسه وأدائه",
    sentence: "Receiving positive feedback on her presentation really boosted her confidence in English."
  },
  {
    id: 127, word: "A round of applause",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ə raʊnd əv əˈplɔːz/",
    citation: "Presentation Review",
    definition: "A period of rhythmic hand clapping by an audience to show praise.",
    b1Explain: "When the group or audience claps together to appreciate someone.",
    opposite: "Booing / Silence",
    arWord: "جولة تصفيق حار / تحية إعجاب جماعية بالأيدي",
    arMeaning: "جولة تصفيق حارة من الحاضرين تقديراً وتشجيعاً",
    sentence: "Let's give Sarah a big round of applause for her wonderful presentation on study habits."
  },
  {
    id: 128, word: "World class",
    pos: "adjective phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌwɜːld ˈklɑːs/",
    citation: "Excellence Criteria",
    definition: "Among the top rank or highest standard in the world.",
    b1Explain: "Of top international standard, among the very best.",
    opposite: "Mediocre / Substandard",
    arWord: "عالمي المستوى / فائق الجودة والاحترافية / ممتاز دولياً",
    arMeaning: "بمستوى عالمي رفيع / من الطراز الأول عالمياً",
    sentence: "The British Council provides world class language tuition with certified native educators."
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
    opposite: "Pay fixed price",
    arWord: "يفاوض على السعر / يساوم / يجادل في الثمن",
    arMeaning: "التفاوض / المساومة على السعر للحصول على تخفيض",
    sentence: "At the traditional market, shoppers often bargain over the price of handmade crafts."
  },
  {
    id: 202, word: "Made of",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/meɪd əv/",
    citation: "Handout Page 1 & Smartboard Slide 4",
    definition: "Used when you can still easily see the original material (like wood or glass).",
    b1Explain: "Used when the material hasn't changed its form (you can still see the wood, metal, or glass).",
    opposite: "Made from",
    arWord: "مصنوع من (مادة لم تتغير طبيعتها)",
    arMeaning: "مصنوع من (المادة محتفظة بشكلها الأصلي كالخشب أو المعدن)",
    sentence: "This sturdy carpenter's workbench is made of solid beech wood."
  },
  {
    id: 203, word: "Made from",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/meɪd frəm/",
    citation: "Handout Page 1 & Smartboard Slide 4",
    definition: "Used when the original material changes completely into something new (like paper from wood).",
    b1Explain: "Used when the original material is transformed into something new (like trees into paper).",
    opposite: "Made of",
    arWord: "مصنوع من (مادة تحولت بالتصنيع)",
    arMeaning: "مصنوع من (المادة تحولت بالكامل لشيء جديد كالورق من الخشب)",
    sentence: "Cardboard boxes are made from recycled wood pulp and fibers."
  },
  {
    id: 204, word: "Renovate",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈren.ə.veɪt/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "To repair and paint an old room or building so it looks new again.",
    b1Explain: "To fix up and modernise an old room or house so it looks brand new.",
    opposite: "Demolish / Neglect",
    arWord: "يجدد / يرمم / يعيد تأهيل",
    arMeaning: "يرمم / يجدد مبنى قديم ويعيد طلاءه وإصلاحه",
    sentence: "They bought an old country cottage and spent three months renovating the kitchen."
  },
  {
    id: 205, word: "DIY",
    pos: "noun / abbreviation", cambridgeLevel: "B1",
    pronunciation: "/ˌdiː.aɪˈwaɪ/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "Do-It-Yourself: repairing, painting, or building things yourself at home.",
    b1Explain: "Doing home improvements and building furniture yourself at home.",
    opposite: "Hiring a contractor",
    arWord: "افعلها بنفسك / صيانة منزلية ذاتية / تصليح يدوي",
    arMeaning: "اصنعها بنفسك (إصلاحات وأشغال يدوية منزلية ذاتية)",
    sentence: "He enjoys doing DIY on weekends and built his own wooden bookshelves."
  },
  {
    id: 206, word: "Craft",
    pos: "noun / verb", cambridgeLevel: "B1",
    pronunciation: "/krɑːft/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "An activity that needs skill in making nice things by hand.",
    b1Explain: "Making beautiful or practical objects with your own hands.",
    opposite: "Mass production",
    arWord: "حرفة / صنعة يدوية / مهارة فنية / يصنع ببراعة",
    arMeaning: "حرفة يدوية / صناعة باليد بمهارة وإتقان",
    sentence: "She creates traditional ceramic crafts and sells them at the weekend craft fair."
  },
  {
    id: 207, word: "Handsaw",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈhænd.sɔː/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A sharp hand tool with metal teeth used to cut wood manually.",
    b1Explain: "A sharp hand tool with metal teeth used to cut wooden boards by hand.",
    opposite: "Power saw",
    arWord: "منشار يدوي / منشار خشب",
    arMeaning: "منشار يدوي للخشب ذو أسنان معدنية",
    sentence: "He used a sharp handsaw to trim the wooden planks for the garden fence."
  },
  {
    id: 208, word: "Screwdriver",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈskruːˌdraɪ.vər/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A handheld tool used to turn screws in or out.",
    b1Explain: "A handheld tool with a plastic grip used to turn screws in or out.",
    opposite: "",
    arWord: "مفك براغي / مفك عادة / مفك صليبة",
    arMeaning: "مفك براغي يدوي لربط وفك البراغي",
    sentence: "I need a flat screwdriver to tighten the loose hinges on the kitchen cupboard."
  },
  {
    id: 209, word: "Measuring tape",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈmeʒ.ər.ɪŋ teɪp/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A flexible metal ribbon used for measuring lengths and room sizes.",
    b1Explain: "A flexible metal ruler that pulls out of a case to measure room dimensions.",
    opposite: "",
    arWord: "شريط قياس / شريط متري / متر قياس",
    arMeaning: "شريط قياس متري مرن لقياس الأبعاد والأطوال",
    sentence: "Always measure the wall with a measuring tape before buying a new wardrobe."
  },
  {
    id: 210, word: "Drill",
    pos: "noun / verb", cambridgeLevel: "B1",
    pronunciation: "/drɪl/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A power tool used to make holes in hard materials like wood or walls.",
    b1Explain: "An electric power tool that rotates fast to make holes in walls or timber.",
    opposite: "",
    arWord: "مثقاب / شنيور / يثقب / تدريب عملي",
    arMeaning: "مثقاب كهربائي (دريل / شنيور) لعمل ثقوب بالجدران والخشب",
    sentence: "He used an electric drill to make two clean holes in the wall for the picture frame."
  },
  {
    id: 211, word: "Spirit level",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈspɪr.ɪt ˌlev.əl/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A straight tool with a floating bubble showing if a surface is level.",
    b1Explain: "A long straight tool with a floating green bubble that shows if a shelf or picture is straight.",
    opposite: "",
    arWord: "ميزان مياه / ميزان تسوية / ميزان بناء",
    arMeaning: "ميزان ماء (ميزان تسوية لضبط استقامة الرفوف والأسطح)",
    sentence: "Place the spirit level on the shelf to confirm the bubble is resting right in the middle."
  },
  {
    id: 212, word: "Soldering iron",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈsɒl.dər.ɪŋ ˌaɪən/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A heated electrical tool used to melt soft metal and join wires.",
    b1Explain: "A heated metal tool used to melt soft metal and join electrical wires or computer boards.",
    opposite: "",
    arWord: "كاوية لحام / مكواة قصدير / أداة لحام كهربي",
    arMeaning: "كاوية لحام كهربائية لصهر القصدير وتوصيل الأسلاك",
    sentence: "He fixed the loose headphone wire using a soldering iron and wire cutters."
  },
  {
    id: 213, word: "Brackets and screws",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbræk.ɪts ənd skruːz/",
    citation: "Handout Page 2 (Listening 1)",
    definition: "Metal angle supports and threaded fasteners used to fix shelves to walls securely.",
    b1Explain: "Right-angle metal supports and threaded pins used to hold wall shelves securely.",
    opposite: "",
    arWord: "حوامل وبراغي / زوايا تثبيت ومسامير قلاووظ",
    arMeaning: "دعامات معدنية وبراغي تثبيت للرفوف الجدارية",
    sentence: "You will need four steel brackets and screws to put up these heavy book shelves."
  },
  {
    id: 214, word: "Sledgehammer",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈsledʒˌhæm.ər/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A very heavy hammer with a long handle used for breaking down walls.",
    b1Explain: "A very heavy hammer with a long handle used for breaking down brick or concrete walls.",
    opposite: "Light tack hammer",
    arWord: "مرزبة / مطرقة ثقيلة / شاكوش هدم كبير",
    arMeaning: "مهدة / مطرقة هدم ثقيلة لتكسير الجدران والخرسانة",
    sentence: "The builders used a sledgehammer to knock down the partition wall between the rooms."
  },
  {
    id: 215, word: "Nail gun",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈneɪl ˌɡʌn/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A power tool that shoots nails into wood quickly and easily.",
    b1Explain: "A tool that shoots nails into wood quickly so you don't need to swing a hammer.",
    opposite: "Manual hammer",
    arWord: "مسدس مسامير / فرد تثبيت مسامير",
    arMeaning: "مسدس مسامير آلي لتثبيت الأخشاب بسرعة فائقة",
    sentence: "The carpenter used an air-powered nail gun to assemble the timber roof frame in minutes."
  },
  {
    id: 216, word: "Rubber handle",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈrʌb.ər ˈhæn.dəl/",
    citation: "Handout Page 2 (Listening 2)",
    definition: "A soft rubber grip on a tool that prevents slipping and electric shocks.",
    b1Explain: "A soft grip on a tool that stops your hands from slipping and protects against electric shocks.",
    opposite: "Bare metal grip",
    arWord: "مقبض مطاطي / يد كاوتشوك عازلة ومريحة",
    arMeaning: "مقبض مطاطي مانع للانزلاق وعازل للصدمات الكهربائية",
    sentence: "The wire cutters have a thick rubber handle to ensure a firm, safe grip while cutting."
  },
  {
    id: 217, word: "Pliers",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/ˈplaɪ.əz/",
    citation: "Smartboard Slides 1 & 2",
    definition: "A metal hand tool with two handles used for gripping, pulling, or bending wire.",
    b1Explain: "A scissor-like tool with flat jaws used to hold, pull, or bend wire.",
    opposite: "",
    arWord: "زرادية / بنسة / كماشة مسك وثني",
    arMeaning: "كماشة / زرادية لتثبيت وسحب وثني الأسلاك المعدنية",
    sentence: "He held the metal nut securely with a pair of pliers while tightening the bolt."
  },
  {
    id: 218, word: "Wire cutters",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈwaɪə ˌkʌt.əz/",
    citation: "Handout Page 2 & Smartboard Slide 5",
    definition: "A sharp hand tool shaped like pliers used to cut through electrical cables cleanly.",
    b1Explain: "A sharp hand tool shaped like pliers used to snip through electrical cables cleanly.",
    opposite: "",
    arWord: "قصافة أسلاك / قطاعة أسلاك كهربائية",
    arMeaning: "قطاعة أسلاك كهربائية لقص الكابلات بدقة وأمان",
    sentence: "Use these insulated wire cutters to trim the excess speaker wire safely."
  },
  {
    id: 219, word: "Safety catch",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈseɪf.ti kætʃ/",
    citation: "Handout Page 2 (Listening 3)",
    definition: "A safety lock mechanism on a tool that prevents accidental operation or firing.",
    b1Explain: "A small switch on a power tool that locks it so it cannot start or shoot accidentally.",
    opposite: "Trigger release",
    arWord: "صمام أمان / قفل حماية / قفل أمان لمنع التشغيل العرضي",
    arMeaning: "صمام أمان / قفل أمان لمنع انطلاق الأداة بالخطأ",
    sentence: "Always engage the safety catch on the nail gun before setting it down on the table."
  },
  {
    id: 220, word: "Hacksaw",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈhæk.sɔː/",
    citation: "Student Notebook (Session 1)",
    definition: "A metal saw with fine teeth used for cutting metal pipes and plastic tubes.",
    b1Explain: "A metal saw with tiny sharp teeth used for cutting metal pipes and plastic tubes.",
    opposite: "Wood handsaw",
    arWord: "منشار معادن / منشار حديد مقوس",
    arMeaning: "منشار حديد دقيق الأسنان لقص المعادن والأنابيب",
    sentence: "He used a hacksaw to cut through the copper water pipe under the bathroom sink."
  },
  {
    id: 221, word: "Chisel",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈtʃɪz.əl/",
    citation: "Student Notebook (Session 1)",
    definition: "A sharp metal hand tool hit with a hammer to carve or cut wood or stone.",
    b1Explain: "A sharp flat steel blade used with a hammer to carve shapes or cut grooves in wood.",
    opposite: "",
    arWord: "أزميل / منقاش نحت وتكسير / ينحت بالأزميل",
    arMeaning: "إزميل فولاذي لنحت وحفر الخشب أو الحجارة",
    sentence: "The woodworker used a sharp chisel to carve neat grooves into the wooden cabinet door."
  },
  {
    id: 222, word: "Wrench",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/rentʃ/",
    citation: "Student Notebook (Session 1)",
    definition: "A metal tool with adjustable parts used to hold and turn nuts, bolts, or pipes.",
    b1Explain: "A metal tool that grips nuts and bolts so you can turn, tighten, or loosen them.",
    opposite: "",
    arWord: "مفتاح ربط / مفتاح فرنساوي / يشد ويربط بقوة",
    arMeaning: "مفتاح ربط الصواميل والمواسير (مفتاح إنجليزي / سبانة)",
    sentence: "He tightened the leaking plumbing pipe under the kitchen sink with an adjustable wrench."
  },
  {
    id: 223, word: "Answering machine",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈɑːn.sə.rɪŋ məˌʃiːn/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small machine that answers phone calls and records messages when you are away.",
    b1Explain: "A machine that records voice messages when you are away from your telephone.",
    opposite: "",
    arWord: "جهاز الرد الآلي / مسجل رسائل هاتفية",
    arMeaning: "جهاز الرد الآلي على الهاتف وتسجيل الرسائل الصوتية",
    sentence: "Please leave a brief message on my answering machine and I will phone you back."
  },
  {
    id: 224, word: "Laptop computer",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈlæp.tɒp kəmˌpjuː.tər/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small, portable computer that you can carry and use anywhere.",
    b1Explain: "A portable computer with a battery and screen that folds shut to carry anywhere.",
    opposite: "Desktop computer",
    arWord: "كمبيوتر محمول / حاسوب متنقل / لابتوب",
    arMeaning: "حاسوب محمول (لابتوب) يعمل بالبطارية وسهل الحمل",
    sentence: "She packed her laptop computer into her backpack before heading to the British Council library."
  },
  {
    id: 225, word: "Digital camera",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌdɪdʒ.ɪ.təl ˈkæm.rə/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A camera that takes photos and saves them on an electronic memory card.",
    b1Explain: "An electronic camera that stores high-resolution photos on an internal memory card.",
    opposite: "Film camera",
    arWord: "كاميرا رقمية / آلة تصوير إلكترونية",
    arMeaning: "كاميرا رقمية لتخزين الصور على بطاقة ذاكرة إلكترونية",
    sentence: "He took sharp architectural photos using a high-end digital camera."
  },
  {
    id: 226, word: "Vacuum cleaner",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈvæk.juːm ˌkliː.nər/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "An electric machine that cleans floors and carpets by sucking up dust.",
    b1Explain: "An electrical household machine that sucks up dust and dirt from floors and rugs.",
    opposite: "Manual broom",
    arWord: "مكنسة كهربائية / جهاز شفط أتربة",
    arMeaning: "مكنسة كهربائية لشفط الغبار وتنظيف السجاد والأرضيات",
    sentence: "He turned on the vacuum cleaner to clean the workshop floor after finishing the woodwork."
  },
  {
    id: 227, word: "Text message",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈtekst ˌmes.ɪdʒ/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A short written message sent from one mobile phone to another.",
    b1Explain: "A short written message sent from one mobile phone to another.",
    opposite: "Voice call",
    arWord: "رسالة نصية / رسالة SMS قصيرة",
    arMeaning: "رسالة نصية قصيرة (SMS) بين الهواتف المحمولة",
    sentence: "Send me a quick text message when you arrive outside the British Council building."
  },
  {
    id: 228, word: "Mobile phone",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈməʊ.baɪl ˈfəʊn/",
    citation: "Handout Page 3 (Compound Stress)",
    definition: "A small phone that you can carry with you to make calls and use the internet.",
    b1Explain: "A portable cellular smartphone carried in your pocket.",
    opposite: "Landline phone",
    arWord: "هاتف محمول / جوال / موبايل / هاتف خلوي",
    arMeaning: "هاتف محمول / جوال محمول باليد للاتصال والإنترنت",
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
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/daɪˈrekt flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "A flight between two places where you stay on the same plane without changing.",
    b1Explain: "A flight where you stay on the same plane with the same flight number until you arrive.",
    opposite: "Connecting flight",
    arWord: "رحلة مباشرة / طيران بدون توقف / خط جوي مباشر",
    arMeaning: "رحلة طيران مباشرة دون تغيير الطائرة في مطار وسيط",
    sentence: "We booked a direct flight from London to Cairo to avoid wasting time in airport terminals."
  },
  {
    id: 302, word: "Long-haul flight",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈlɒŋ.hɔːl flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "A long flight that travels across oceans or continents, usually over six hours.",
    b1Explain: "A very long flight to another continent that takes many hours.",
    opposite: "Short-haul flight",
    arWord: "رحلة طويلة المدى / طيران لمسافات طويلة عبر القارات",
    arMeaning: "رحلة طيران طويلة المدى عابرة للقارات والمحيطات (تزيد عن 6 ساعات)",
    sentence: "On a long-haul flight from London to Tokyo, passengers receive two hot meals and movie headsets."
  },
  {
    id: 303, word: "Connecting flight",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/kəˈnek.tɪŋ flaɪt/",
    citation: "Handout Page 1 & Smartboard Slide 2",
    definition: "A journey where you must get off one plane and get on another to reach your destination.",
    b1Explain: "When you change planes at another airport before reaching your final destination.",
    opposite: "Direct flight",
    arWord: "رحلة متصلة / طيران ترانزيت مع تبديل طائرة",
    arMeaning: "رحلة ترانزيت (تبديل الطائرة في مطار وسيط للوصول للوجهة النهائية)",
    sentence: "Due to thick fog in Frankfurt, my first flight was delayed and I almost missed my connecting flight."
  },
  {
    id: 304, word: "Layover",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈleɪˌəʊ.vər/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "A waiting time at an airport between two connecting flights.",
    b1Explain: "A short wait at an airport between two different flights.",
    opposite: "",
    arWord: "فترة توقف ترانزيت / انتظار بين رحلتين / استراحة سفر",
    arMeaning: "فترة انتظار ترانزيت بين رحلتين داخل المطار",
    sentence: "We had a four-hour layover in Dubai, so we explored the duty-free shops and grabbed lunch."
  },
  {
    id: 305, word: "Business class",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈbɪz.nɪs klɑːs/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "A more expensive section on a plane with bigger seats and better food.",
    b1Explain: "The expensive and comfortable section of a plane with large reclining seats and delicious meals.",
    opposite: "Economy class",
    arWord: "درجة رجال الأعمال / الدرجة الممتازة",
    arMeaning: "درجة رجال الأعمال (مقاعد واسعة مريحة ووجبات فاخرة)",
    sentence: "The senior company directors always travel business class on overseas business trips."
  },
  {
    id: 306, word: "Budget accommodation",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbʌdʒ.ɪt əˌkɒm.əˈdeɪ.ʃən/",
    citation: "Handout Page 1 (Exercise 2)",
    definition: "Cheap places to stay, like simple hotels, guesthouses, or hostels.",
    b1Explain: "Affordable places to stay that do not cost a lot of money.",
    opposite: "Luxury hotel",
    arWord: "إقامة اقتصادية / سكن رخيص / نزول منخفض التكلفة",
    arMeaning: "إقامة اقتصادية منخفضة التكلفة (فنادق بسيطة، بيوت شباب)",
    sentence: "As backpackers on a tight budget, we looked for clean budget accommodation near the city centre."
  },
  {
    id: 307, word: "Full-board",
    pos: "adjective / noun", cambridgeLevel: "B2",
    pronunciation: "/ˌfʊlˈbɔːd/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "A hotel price that includes your room and all three daily meals.",
    b1Explain: "When your hotel price includes your room and all three meals every day.",
    opposite: "Room only",
    arWord: "إقامة كاملة (شاملة الوجبات الثلاث)",
    arMeaning: "إقامة فندقية شاملة السكن والوجبات الثلاث اليومية (إفطار، غداء، عشاء)",
    sentence: "The beach resort offers full-board packages, so breakfast, lunch, and dinner are all covered."
  },
  {
    id: 308, word: "Half-board",
    pos: "adjective / noun", cambridgeLevel: "B2",
    pronunciation: "/ˌhɑːfˈbɔːd/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "A hotel price that includes your room, breakfast, and dinner.",
    b1Explain: "A hotel package that gives you breakfast and dinner, but not lunch.",
    opposite: "Full-board",
    arWord: "نصف إقامة (شاملة الفطور ووجبة رئيسية)",
    arMeaning: "إقامة فندقية نصف شاملة (تشمل المبيت والإفطار والعشاء فقط)",
    sentence: "We preferred half-board because we wanted to eat lunch at local cafes while exploring historical monuments."
  },
  {
    id: 309, word: "All-inclusive",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌɔːl.ɪnˈkluː.sɪv/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "A holiday where the total price covers your room, all food, drinks, and activities.",
    b1Explain: "A holiday where one price pays for everything: room, food, drinks, and activities.",
    opposite: "Self-catering",
    arWord: "شامل كلياً / شامل جميع الوجبات والمشروبات والخدمات",
    arMeaning: "إقامة شاملة كلياً لجميع الوجبات والمشروبات والأنشطة الترفيهية",
    sentence: "Booking an all-inclusive holiday in Sharm El-Sheikh helped us manage our family travel budget easily."
  },
  {
    id: 310, word: "Self-catering",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˌselfˈkeɪ.tər.ɪŋ/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "A place to stay with a kitchen so you can cook your own food.",
    b1Explain: "A holiday apartment with a kitchen where you cook your own meals.",
    opposite: "All-inclusive",
    arWord: "خدمة ذاتية لإعداد الطعام / سكن مجهز بمطبخ مستقل",
    arMeaning: "إقامة بنظام الخدمة الذاتية (شقة بمطبخ مجهز لطهي الوجبات بنفسك)",
    sentence: "We rented a quiet self-catering cottage in Scotland so we could cook our own fresh seafood meals."
  },
  {
    id: 311, word: "En-suite bathroom",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌɒnˈswiːt ˈbɑːθ.ruːm/",
    citation: "Handout Page 2 (Listening 1)",
    definition: "A private bathroom that is connected directly inside your bedroom.",
    b1Explain: "A private bathroom that is inside your bedroom so you don't have to share.",
    opposite: "Shared bathroom",
    arWord: "حمام خاص داخل الغرفة / دورة مياه ملحقة",
    arMeaning: "حمام خاص ملحق مباشرة داخل غرفة النوم",
    sentence: "Every premium double bedroom in the boutique hotel comes with a private en-suite bathroom."
  },
  {
    id: 312, word: "Facilities",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/fəˈsɪl.ə.tiz/",
    citation: "Handout Page 2 (Reading 1)",
    definition: "Places, equipment, or services provided for you, like a gym or swimming pool.",
    b1Explain: "Useful services and places provided by a hotel, like a swimming pool, gym, or free Wi-Fi.",
    opposite: "",
    arWord: "مرافق / خدمات وتسهيلات / تجهيزات الفندق",
    arMeaning: "مرافق وتجهيزات وخدمات ترفيهية ورياضية يقدمها الفندق للنزلاء",
    sentence: "The hotel facilities include a heated indoor pool, a modern fitness gym, and conference rooms."
  },
  {
    id: 313, word: "Aisle seat",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈaɪl siːt/",
    citation: "Smartboard Slide 3",
    definition: "A plane or train seat right next to the walking path in the middle.",
    b1Explain: "A seat next to the walking passage so you can stand up easily without disturbing others.",
    opposite: "Window seat",
    arWord: "مقعد الممر / كرسي جهة الممر في الطائرة",
    arMeaning: "مقعد بجانب الممر الأوسط في الطائرة أو القطار",
    sentence: "I always request an aisle seat so I can stretch my long legs and walk around during long flights."
  },
  {
    id: 314, word: "Overhead locker",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.və.hed ˈlɒk.ər/",
    citation: "Smartboard Slide 3",
    definition: "An overhead cupboard above your plane seat where you put your small bags.",
    b1Explain: "The cupboard above your seat in a plane where you put your small bag.",
    opposite: "Under-seat space",
    arWord: "خزانة أمتعة علوية / صندوق حفظ الحقائب بالطائرة",
    arMeaning: "صندوق الأمتعة العلوي فوق مقاعد الركاب في الطائرة",
    sentence: "Please place your carry-on trolley bag wheels-first into the overhead locker above your seat."
  },
  {
    id: 315, word: "Boarding pass",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈbɔː.dɪŋ ˌpɑːs/",
    citation: "Smartboard Slide 3",
    definition: "A paper or phone card you must show to get on an airplane.",
    b1Explain: "The ticket card or phone barcode you show to get onto the aeroplane.",
    opposite: "",
    arWord: "بطاقة صعود الطائرة / تذكرة ركوب الطائرة",
    arMeaning: "بطاقة الصعود إلى الطائرة (تذكرة المرور عبر البوابة)",
    sentence: "Have your passport and digital boarding pass ready on your screen before approaching security."
  },
  {
    id: 316, word: "Departure gate",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/dɪˈpɑː.tʃər ɡeɪt/",
    citation: "Smartboard Slide 3",
    definition: "The numbered door in an airport where passengers wait to get on their plane.",
    b1Explain: "The door and waiting area at an airport where you get on your aeroplane.",
    opposite: "Arrivals gate",
    arWord: "بوابة المغادرة / صالة ركوب الطائرة",
    arMeaning: "بوابة المغادرة المحددة في المطار لركوب الطائرة",
    sentence: "Flight BA 155 to London Heathrow is now boarding at departure gate number twenty-two."
  },
  {
    id: 317, word: "Flight attendant",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈflaɪt əˌten.dənt/",
    citation: "Smartboard Slide 3",
    definition: "A person whose job is to serve passengers and keep them safe on a plane.",
    b1Explain: "A member of the aeroplane staff who serves meals and ensures safety on board.",
    opposite: "Passenger",
    arWord: "مضيف طيران / مضيفة جوية / طاقم الضيافة الجوية",
    arMeaning: "مضيف / مضيفة طيران لخدمة الركاب وتأمين سلامتهم على متن الطائرة",
    sentence: "The friendly flight attendant demonstrated the emergency oxygen masks before takeoff."
  },
  {
    id: 318, word: "Luggage storage",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈlʌɡ.ɪdʒ ˌstɔː.rɪdʒ/",
    citation: "Handout Page 2 (Listening 2)",
    definition: "A safe room in a hotel or airport where you can leave your bags for a while.",
    b1Explain: "A safe room at a hotel where you can leave your bags before check-in or after check-out.",
    opposite: "",
    arWord: "مخزن أمتعة / غرفة حفظ الحقائب والأمانات",
    arMeaning: "غرفة أمانات حفظ الحقائب والأمتعة بالفندق أو المطار",
    sentence: "Since our flight was at night, the receptionist stored our suitcases in the hotel luggage storage."
  },
  {
    id: 319, word: "Airport shuttle",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈeə.pɔːt ˌʃʌt.əl/",
    citation: "Handout Page 2 (Listening 2)",
    definition: "A bus that makes regular trips between the airport and hotels or city centre.",
    b1Explain: "A bus that drives people between the airport terminal and nearby hotels.",
    opposite: "",
    arWord: "حافلة المطار المكوكية / وسيلة نقل المطار الدورية",
    arMeaning: "حافلة نقل مكوكية منتظمة بين المطار والفندق",
    sentence: "The complimentary airport shuttle departs every thirty minutes directly from outside Terminal 2."
  },
  {
    id: 320, word: "Vacancy",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈveɪ.kən.si/",
    citation: "Handout Page 2 (Dialogue)",
    definition: "An empty room in a hotel that is ready to rent.",
    b1Explain: "An empty room available for guests to book in a hotel.",
    opposite: "No vacancy / Fully booked",
    arWord: "غرفة شاغرة / مكان متاح للحجز / وظيفة شاغرة",
    arMeaning: "غرفة شاغرة ومتاحة للحجز في الفندق",
    sentence: "The neon sign outside the seaside motel lit up to show they had no vacancy for the night."
  },
  {
    id: 321, word: "Fully booked",
    pos: "adjective phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌfʊl.i ˈbʊkt/",
    citation: "Handout Page 2 (Dialogue)",
    definition: "Having all rooms, tickets, or seats sold, with none left.",
    b1Explain: "When all hotel rooms or flight seats are completely taken and none are left.",
    opposite: "Vacancy available",
    arWord: "محجوز بالكامل / مكتمل العدد / لا توجد أماكن شاغرة",
    arMeaning: "محجوز بالكامل ولا توجد أي غرف أو تذاكر شاغرة",
    sentence: "During the busy summer festival weekend, nearly all city centre hotels were fully booked."
  },
  {
    id: 322, word: "Arrivals board",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/əˈraɪ.vəlz bɔːd/",
    citation: "Student Notebook (Session 2)",
    definition: "A large electronic screen at the airport showing landing times of planes.",
    b1Explain: "The electronic screen in an airport that shows when flights are landing.",
    opposite: "Departures board",
    arWord: "لوحة مواعيد الوصول / شاشة الرحلات القادمة",
    arMeaning: "شاشة عرض مواعيد الرحلات القادمة والهابطة بالمطار",
    sentence: "We checked the arrivals board and saw that my cousin's flight from Manchester was on time."
  },
  {
    id: 323, word: "Hand luggage",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈhænd ˌlʌɡ.ɪdʒ/",
    citation: "Student Notebook (Session 2)",
    definition: "Small bags or backpacks that you are allowed to take with you inside the airplane.",
    b1Explain: "Small suitcases or bags that you carry with you onto the plane.",
    opposite: "Checked luggage",
    arWord: "حقيبة يد / حقيبة مقصورة الطائرة / أمتعة محمولة",
    arMeaning: "حقائب اليد المسموح بحملها داخل مقصورة الطائرة",
    sentence: "Make sure all liquids in your hand luggage are in containers under one hundred millilitres."
  },
  {
    id: 324, word: "Wheelchair accessible",
    pos: "adjective phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈwiːl.tʃeər əkˌses.ə.bəl/",
    citation: "Handout Page 3 & Notebook",
    definition: "Having ramps, wide doors, and lifts so people in wheelchairs can enter easily.",
    b1Explain: "Designed with ramps and elevators so people in wheelchairs can enter comfortably.",
    opposite: "Inaccessible",
    arWord: "مجهز لذوي الكراسي المتحركة / مسار ميسر حركياً",
    arMeaning: "مجهز بمسارات ومصاعد لتسهيل دخول مستخدمي الكراسي المتحركة",
    sentence: "The museum entrance and all gallery floors are fully wheelchair accessible."
  },
  {
    id: 325, word: "Pet-friendly",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈpetˌfrend.li/",
    citation: "Handout Page 3 & Notebook",
    definition: "Allowing guests to bring their pet dogs or cats into the hotel.",
    b1Explain: "A hotel that allows you to bring your pet dog or cat to stay with you.",
    opposite: "No pets allowed",
    arWord: "يسمح باصطحاب الحيوانات الأليفة / مرحب بالحيوانات",
    arMeaning: "فندق أو نزل يرحب باصطحاب الحيوانات الأليفة مع النزلاء",
    sentence: "We searched for a pet-friendly boutique hotel so our golden retriever could travel with us."
  },
  {
    id: 326, word: "Free cancellation",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌfriː kæn.səlˈeɪ.ʃən/",
    citation: "Handout Page 3 (Booking App)",
    definition: "A rule that lets you cancel your booking without paying any money.",
    b1Explain: "When you can cancel your hotel or flight booking and get all your money back.",
    opposite: "Non-refundable",
    arWord: "إلغاء مجاني للحجز / استرداد كامل دون غرامة",
    arMeaning: "إلغاء مجاني للحجز مع استرداد كامل المبلغ المدفوع",
    sentence: "I chose the hotel room with free cancellation in case my business schedule changed at the last minute."
  },
  {
    id: 327, word: "Non-refundable deposit",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌnɒn.rɪˈfʌn.də.bəl dɪˈpɒz.ɪt/",
    citation: "Handout Page 3 (Terms)",
    definition: "A first payment that you lose if you decide to cancel your trip.",
    b1Explain: "An advance money payment that the hotel keeps if you decide to cancel your booking.",
    opposite: "Refundable deposit",
    arWord: "عربون غير قابل للاسترداد / دفعة مقدمة غير مسترجعة",
    arMeaning: "عربون حجز مالي غير قابل للاسترداد عند إلغاء الرحلة",
    sentence: "Booking the luxury mountain villa required a non-refundable deposit of two hundred pounds."
  },
  {
    id: 328, word: "Room service",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈruːm ˌsɜː.vɪs/",
    citation: "Handout Page 3 & Notebook",
    definition: "When hotel staff bring food or drinks directly to your bedroom.",
    b1Explain: "Ordering food and drinks over the hotel phone to be brought directly to your bedroom.",
    opposite: "Dine-in restaurant",
    arWord: "خدمة الغرف / توصيل الطلبات والوجبات للغرفة",
    arMeaning: "خدمة الغرف (توصيل الطعام والمشروبات لغرفة النزيل)",
    sentence: "After a tiring twelve-hour journey, we ordered hot soup and sandwiches from twenty-four-hour room service."
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
    id: 1, word: "Recognize",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˈrek.əɡ.naɪz/",
    citation: "Handout Page 1 & Whiteboard Slide 2",
    definition: "To know someone or something because you have seen or met them before.",
    b1Explain: "Knowing who someone is because you have seen their face or heard their voice before.",
    opposite: "Fail to recognize / Forget",
    arWord: "يتعرف على / يميّز / يعترف بـ / يدرك شخصاً أو شيئاً",
    arMeaning: "يتعرف على شخص أو شيء رآه أو قابله من قبل",
    sentence: "I didn't recognize my childhood school friend at first because he had grown a beard."
  },
  {
    id: 2, word: "Realize",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˈrɪə.laɪz/",
    citation: "Handout Page 1 & Whiteboard Slide 2",
    definition: "To understand or notice something clearly for the first time.",
    b1Explain: "Suddenly understanding a new fact or truth that you didn't notice before.",
    opposite: "Overlook / Misunderstand",
    arWord: "يدرك / يعي / يفهم فجأة / يحقق هدفاً",
    arMeaning: "يدرك أو يستوعب حقيقة جديدة لأول مرة",
    sentence: "Halfway to the airport, he suddenly realized that he had left his British Council course book at home."
  },
  {
    id: 3, word: "Regret",
    pos: "verb / noun", cambridgeLevel: "B2",
    pronunciation: "/rɪˈɡret/",
    citation: "Handout Page 1 (Lead-In)",
    definition: "A sad feeling of wishing you had made a different choice in the past.",
    b1Explain: "Feeling sorry about a decision you made in the past and wishing you could change it.",
    opposite: "Welcome / Rejoice in",
    arWord: "يندم / يتحسر / يأسف على / ندم وأسف",
    arMeaning: "يندم أو يأسف على قرار أو تصرف سابق ويتمنى لو اتخذ غيره",
    sentence: "She never regretted studying English in London because it opened up international career opportunities."
  },
  {
    id: 4, word: "Studying abroad",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈstʌd.i.ɪŋ əˈbrɔːd/",
    citation: "Handout Page 1 (Conversation 1)",
    definition: "Going to study at a school or university in a different country.",
    b1Explain: "Living and taking university courses in a foreign country.",
    opposite: "Studying locally",
    arWord: "الدراسة بالخارج / السفر للتعليم الدولي",
    arMeaning: "الدراسة في الخارج بجامعة أو معهد في بلد أجنبي",
    sentence: "Studying abroad in Edinburgh helped Omar become much more independent and fluent in English."
  },
  {
    id: 5, word: "Lots to consider",
    pos: "phrase / idiom", cambridgeLevel: "B2",
    pronunciation: "/lɒts tuː kənˈsɪd.ər/",
    citation: "Handout Page 1 (Listening Context)",
    definition: "Having many different facts or options to think about before deciding.",
    b1Explain: "Having a lot of important facts and details to weigh up before choosing.",
    opposite: "Simple decision",
    arWord: "أمور كثيرة تستحق التفكير / اعتبارات ونقاط عديدة للدراسة",
    arMeaning: "أمور وخيارات كثيرة يجب دراستها والتفكير فيها قبل اتخاذ القرار",
    sentence: "Before accepting a job offer in a new city, there are lots to consider like housing and transport."
  },
  {
    id: 6, word: "Seeds",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/siːdz/",
    citation: "Handout Page 1 & Smartboard Metaphor",
    definition: "The small hard parts of a plant from which new plants grow; or new ideas.",
    b1Explain: "Small grains that grow into plants; also used for the early beginnings of plans.",
    opposite: "Harvest / Result",
    arWord: "بذور / حبوب الزراعة / نواة الفكرة أو البداية",
    arMeaning: "بذور النباتات أو بدايات الأفكار والمشاريع الجديدة",
    sentence: "The teacher explained that early mistakes are the seeds from which true fluency grows."
  },
  {
    id: 7, word: "Roots",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/ruːts/",
    citation: "Handout Page 1 & Smartboard Metaphor",
    definition: "The parts of a plant that grow under the ground; or family origins.",
    b1Explain: "The parts of a tree deep in the earth; or your ancestral culture and background.",
    opposite: "Branches",
    arWord: "جذور / أصول العائلة / أساسات الشيء الثابتة",
    arMeaning: "جذور النباتات تحت الأرض أو الأصول العائلية والتراث الثقافي",
    sentence: "Even after living in Manchester for ten years, he remained deeply proud of his Alexandria roots."
  },
  {
    id: 8, word: "Leaves",
    pos: "noun (plural)", cambridgeLevel: "B1",
    pronunciation: "/liːvz/",
    citation: "Handout Page 1 (Tree Metaphor)",
    definition: "The flat green parts that grow on plants or tree branches.",
    b1Explain: "The flat green parts that grow on tree branches in spring.",
    opposite: "",
    arWord: "أوراق الشجر / أوراق نبات / يغادر أو يترك",
    arMeaning: "أوراق الأشجار والنباتات الخضراء",
    sentence: "In autumn, the golden leaves fall from the oak trees across British parks."
  },
  {
    id: 9, word: "Muscular",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈmʌs.kjə.lər/",
    citation: "Handout Page 2 & Slide 3",
    definition: "Having strong, large muscles from doing physical exercise.",
    b1Explain: "Having a strong body with well-developed athletic muscles.",
    opposite: "Frail / Weak",
    arWord: "عضلي / قوي البنية / مفتول العضلات",
    arMeaning: "مفتول العضلات وقوي البنية الجسدية والرياضية",
    sentence: "Working on the construction site all summer made his arms and shoulders visibly muscular."
  },
  {
    id: 10, word: "Decision process",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/dɪˈsɪʒ.ən ˌprəʊ.ses/",
    citation: "Handout Page 2 (Task 3)",
    definition: "The steps you take when thinking about choices before you decide.",
    b1Explain: "The structured steps a person follows to choose the best option.",
    opposite: "Hasty impulse",
    arWord: "عملية اتخاذ القرار / خطوات حسم الاختيار",
    arMeaning: "مسار وعملية التفكير المتدرجة لاتخاذ القرار الصائب",
    sentence: "The university admission decision process takes about four weeks from submitting your form."
  },
  {
    id: 11, word: "Time linkers",
    pos: "grammar term", cambridgeLevel: "B1",
    pronunciation: "/taɪm ˈlɪŋ.kəz/",
    citation: "Handout Page 2 & Smartboard Slide 4",
    definition: "Connecting words like before, after, while, and as soon as.",
    b1Explain: "Words that show when events happened in a story.",
    opposite: "",
    arWord: "روابط زمنية / أدوات الربط الزمني بين الأحداث",
    arMeaning: "روابط زمنية (مثل before, after, while) لربط تسلسل الأحداث",
    sentence: "Using time linkers like 'as soon as' and 'meanwhile' made his story much easier to follow."
  },
  {
    id: 12, word: "Since leaving university",
    pos: "time phrase", cambridgeLevel: "B2",
    pronunciation: "/sɪns ˈliː.vɪŋ ˌjuː.nɪˈvɜː.sə.ti/",
    citation: "Handout Page 2 (Sentence Completion)",
    definition: "From the time you graduated from university up to now.",
    b1Explain: "Starting from graduation day until the present moment.",
    opposite: "",
    arWord: "منذ تخرجه من الجامعة / بعد ترك الجامعة",
    arMeaning: "منذ التخرج ومغادرة الجامعة وحتى اللحظة الراهنة",
    sentence: "Since leaving university, Layla has worked for two international tech firms in Cairo."
  },
  {
    id: 13, word: "By the age of thirty",
    pos: "time phrase", cambridgeLevel: "B1",
    pronunciation: "/baɪ ði eɪdʒ əv ˈθɜː.ti/",
    citation: "Handout Page 2 (Future Goals)",
    definition: "At or before the time you reach thirty years old.",
    b1Explain: "Happening before your thirtieth birthday arrives.",
    opposite: "",
    arWord: "مع بلوغ سن الثلاثين / قبل إتمام الثلاثين عاماً",
    arMeaning: "بحلول سن الثلاثين أو قبله",
    sentence: "Tariq hopes to buy his own apartment and launch a software startup by the age of thirty."
  },
  {
    id: 14, word: "In the last couple of months",
    pos: "time phrase", cambridgeLevel: "B1",
    pronunciation: "/ɪn ðə lɑːst ˈkʌp.əl əv mʌnθs/",
    citation: "Handout Page 2 (Present Perfect)",
    definition: "During the past two or three months.",
    b1Explain: "In the recent two or three months just gone by.",
    opposite: "",
    arWord: "في الشهرين الماضيين / خلال الشهرين الأخيرين",
    arMeaning: "خلال الشهرين أو الثلاثة أشهر الماضية القريبة",
    sentence: "In the last couple of months, our English class has made tremendous progress in speaking fluency."
  },
  {
    id: 15, word: "Third conditional",
    pos: "grammar term", cambridgeLevel: "B2",
    pronunciation: "/θɜːd kənˈdɪʃ.ən.əl/",
    citation: "Handout Page 3 & Smartboard Slide 5",
    definition: "A grammar form used to talk about past situations that did not happen and regrets.",
    b1Explain: "Grammar with 'had done' and 'would have done' for past regrets.",
    opposite: "",
    arWord: "الحالة الشرطية الثالثة (عن ماضٍ افتراضي مستحيل)",
    arMeaning: "الحالة الشرطية الثالثة (للتعبير عن الندم وافتراض ما لم يحدث في الماضي)",
    sentence: "We use the third conditional to express regrets: 'If I had studied harder, I would have passed.'"
  },
  {
    id: 16, word: "Past modal of deduction",
    pos: "grammar term", cambridgeLevel: "B2",
    pronunciation: "/pɑːst ˈməʊ.dəl əv dɪˈdʌk.ʃən/",
    citation: "Handout Page 3 & Smartboard Slide 5",
    definition: "Modal structures like must have, could have, and can't have.",
    b1Explain: "Modal verbs used to make logical guesses about past events.",
    opposite: "",
    arWord: "أفعال الاستنتاج الماضي (must have / could have)",
    arMeaning: "أفعال الاستنتاج والترجيح المنطقي عن أحداث الماضي (must have, can't have)",
    sentence: "In Session 3, we practiced past modals of deduction: 'He must have missed the bus because he is late.'"
  },
  {
    id: 17, word: "Deduction",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/dɪˈdʌk.ʃən/",
    citation: "Handout Page 3 & Slide 5",
    definition: "The process of reaching an answer or conclusion by looking at the facts.",
    b1Explain: "Working out the truth by examining all the available clues.",
    opposite: "Speculation / Wild guess",
    arWord: "استنتاج منطقي / استدلال / خصم من حساب",
    arMeaning: "استنتاج منطقي مبني على فحص الأدلة والوقائع",
    sentence: "Through careful deduction, the detective realized the front door had been unlocked from inside."
  },
  {
    id: 18, word: "If only I had listened",
    pos: "idiom / phrase", cambridgeLevel: "B2",
    pronunciation: "/ɪf ˈəʊn.li aɪ hæd ˈlɪs.ənd/",
    citation: "Handout Page 3 (Expressing Regret)",
    definition: "A phrase used to say you strongly wish you had followed someone's advice.",
    b1Explain: "Expressing a deep regret that you did not pay attention to advice.",
    opposite: "",
    arWord: "ليتني كنت استمعت / لو أنني أصغيت للنصيحة فقط",
    arMeaning: "ليتني استمعت لنصيحتك (صيغة تحسر وندم شديد)",
    sentence: "If only I had listened to the teacher's exam advice, I wouldn't have run out of time."
  },
  {
    id: 19, word: "I wish I had studied harder",
    pos: "phrase", cambridgeLevel: "B1",
    pronunciation: "/aɪ wɪʃ aɪ hæd ˈstʌd.id ˈhɑː.dər/",
    citation: "Handout Page 3 (Expressing Regret)",
    definition: "A phrase used to express sadness that you did not work harder in the past.",
    b1Explain: "Saying you feel sorry that you didn't spend more time studying.",
    opposite: "",
    arWord: "أتمنى لو أنني ذاكرت بجهد أكبر / يا ليتني اجتهدت أكثر",
    arMeaning: "أتمنى لو أنني درست بجد أكبر (تعبير عن الندم الدراسي)",
    sentence: "'I wish I had studied harder for the IELTS listening section,' sighed Karim after the exam."
  },
  {
    id: 20, word: "I regret leaving",
    pos: "phrase", cambridgeLevel: "B2",
    pronunciation: "/aɪ rɪˈɡret ˈliː.vɪŋ/",
    citation: "Handout Page 3 & Slide 5",
    definition: "A clear statement saying you are sorry that you left.",
    b1Explain: "Saying clearly that you wish you had stayed instead of walking away.",
    opposite: "I am glad I left",
    arWord: "أندم على المغادرة / آسف على ترك العمل",
    arMeaning: "أنا نادم على الرحيل والمغادرة",
    sentence: "I regret leaving my previous company so early, as my former team was promoted soon after."
  },
  {
    id: 21, word: "Theme park",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈθiːm ˌpɑːk/",
    citation: "Student Notebook (Session 3 - Fun Fair)",
    definition: "A very large amusement park with big rides, roller coasters, and shows.",
    b1Explain: "A huge park with thrilling rides, shows, and games for visitors.",
    opposite: "",
    arWord: "مدينة ملاهي ذات طابع خاص / متنزه ترفيهي تخصصي",
    arMeaning: "مدينة ملاهٍ كبرى وألعاب ترفيهية متكاملة",
    sentence: "We spent the entire Saturday at Alton Towers theme park riding the newest roller coasters."
  },
  {
    id: 22, word: "Fun fair",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈfʌn ˌfeər/",
    citation: "Student Notebook (Session 3)",
    definition: "An outdoor event with games, food stalls, and fun rides for families.",
    b1Explain: "An outdoor travelling fair with rides, popcorn stalls, and carnival games.",
    opposite: "",
    arWord: "مهرجان ألعاب وترفيه / معرض ملاهٍ متجول",
    arMeaning: "مهرجان ألعاب مفتوح في الهواء الطلق مع أكشاك وألعاب تسلية",
    sentence: "The annual summer fun fair in the town park had cotton candy, music, and bumper cars."
  },
  {
    id: 23, word: "Roller coaster",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈrəʊ.lə ˌkəʊ.stər/",
    citation: "Student Notebook (Session 3)",
    definition: "An exciting ride on a track with steep drops, high turns, and fast speed.",
    b1Explain: "A fast railway ride that climbs high, plunges down, and loops upside down.",
    opposite: "",
    arWord: "قطار الموت / أفعوانية الملاهي / تقلبات سريعة وصعود وهبوط",
    arMeaning: "قطار الموت (قطار الملاهي السريع الملتوي بالمنحدرات الشديدة)",
    sentence: "Riding the giant roller coaster was terrifying at first, but ended up being thrilling."
  },
  {
    id: 24, word: "Big wheel",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˌbɪɡ ˈwiːl/",
    citation: "Student Notebook (Session 3)",
    definition: "A huge turning wheel with seats that takes people high up to see the view.",
    b1Explain: "A giant rotating Ferris wheel that lifts you high into the sky for a scenic view.",
    opposite: "",
    arWord: "عجلة الملاهي الدوارة الكبيرة / عين لندن الترفيهية",
    arMeaning: "دولاب الهواء / عجلة الملاهي الدوارة العملاقة (عين لندن)",
    sentence: "We rode the big wheel at sunset and took magnificent panoramic photos of the city skyline."
  },
  {
    id: 25, word: "Merry-go-round",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈmer.i.ɡəʊˌraʊnd/",
    citation: "Student Notebook (Session 3)",
    definition: "A round turning ride for children with model horses and music.",
    b1Explain: "A circular rotating ride with painted horses that go up and down to carnival music.",
    opposite: "",
    arWord: "لعبة الخيول الدوارة / دوامة الأطفال الترفيهية",
    arMeaning: "دوامة الخيول الدوارة للأطفال في الملاهي",
    sentence: "The young children laughed with delight as they rode the colourful horses on the merry-go-round."
  },
  {
    id: 26, word: "Amusement rides",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/əˈmjuːz.mənt raɪdz/",
    citation: "Student Notebook (Session 3)",
    definition: "The fun machines and roller coasters that people ride at a park.",
    b1Explain: "The mechanical machines and exciting attractions you ride at fun fairs.",
    opposite: "",
    arWord: "ألعاب الملاهي / مراكب وأجهزة المغامرة الترفيهية",
    arMeaning: "ألعاب ومرافق الملاهي الترفيهية المتنوعة",
    sentence: "Our theme park ticket gave us unlimited access to all twenty-five amusement rides."
  },
  {
    id: 27, word: "Weak forms / schwa (ə)",
    pos: "phonetics term", cambridgeLevel: "B2",
    pronunciation: "/wiːk fɔːmz / ʃwɑː/",
    citation: "Handout Page 4 & Smartboard Slide 6",
    definition: "The unstressed pronunciation of auxiliary words in fast natural speech.",
    b1Explain: "Pronouncing auxiliary words with a short weak sound like schwa in connected speech.",
    opposite: "Strong forms",
    arWord: "أشكال النطق الضعيفة / صوت الشوا (ə) غير المشدد",
    arMeaning: "الأشكال الصوتية الضعيفة وصوت الشوا (ə) في الكلام الإنجليزي السريع المتصل",
    sentence: "In connected speech, 'would have' is pronounced with weak forms as /wʊdə/."
  },
  {
    id: 28, word: "Prepositions of time",
    pos: "grammar term", cambridgeLevel: "B1",
    pronunciation: "/ˌprep.əˈzɪʃ.ənz əv taɪm/",
    citation: "Handout Page 4 & Smartboard Slide 6",
    definition: "Prepositions like in, on, and at showing when events happen.",
    b1Explain: "Little words that tell us the exact time or day an event happens.",
    opposite: "Prepositions of place",
    arWord: "حروف جر الوقت والزمن (at, on, in)",
    arMeaning: "حروف الجر الدالة على الزمان (in, on, at)",
    sentence: "We reviewed prepositions of time: 'at' for clock times, 'on' for days, and 'in' for months."
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
    id: 1201, word: "Outgoing",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌaʊtˈɡəʊ.ɪŋ/",
    citation: "Handout Page 1 (Personality Adjectives)",
    definition: "Friendly, energetic, and happy to talk to new people.",
    b1Explain: "Friendly, energetic, and happy to talk to new people.",
    opposite: "Introverted / Shy",
    arWord: "اجتماعي / منفتح / ودود ومحب للناس / منطلق",
    arMeaning: "شخص اجتماعي، ودود، منفتح على الآخرين ويسهل عليه التحدث وبناء العلاقات",
    sentence: "Hotel guest hosts must be outgoing and enjoy starting conversations with international travelers."
  },
  {
    id: 1202, word: "Sociable",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈsəʊ.ʃə.bəl/",
    citation: "Handout Page 1 (Personality Adjectives)",
    definition: "Liking to spend time with other people and making friends easily.",
    b1Explain: "Liking to spend time with other people and making friends easily.",
    opposite: "Unsociable / Solitary",
    arWord: "مؤانس / محب للعلاقات الاجتماعية / لطيف المعاشرة",
    arMeaning: "شخص أنيس ومحب لمخالطة الناس والاستمتاع بالتجمعات وتكوين الصداقات",
    sentence: "Being sociable helps hotel receptionists create a warm and welcoming lounge atmosphere."
  },
  {
    id: 1203, word: "Sympathetic listener",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌsɪm.pəˈθet.ɪk ˈlɪs.ən.ər/",
    citation: "Smartboard Slide 3 (Clinic)",
    definition: "Someone who listens kindly and cares about your feelings and problems.",
    b1Explain: "Someone who listens kindly and cares about your feelings and problems.",
    opposite: "Uncaring listener",
    arWord: "مستمع متعاطف / منصت باهتمام وتفهم لمشاعر الآخرين",
    arMeaning: "مستمع متعاطف ومتفهم؛ ينصت باهتمام لمشاكل النزلاء ويواسيهم باحترافية",
    sentence: "A front-desk manager needs to be a sympathetic listener when guests have travel complaints."
  },
  {
    id: 1204, word: "Punctual",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈpʌŋk.tʃu.əl/",
    citation: "Handout Page 1 (Work Ethics)",
    definition: "Arriving or doing things at the exact agreed time; not late.",
    b1Explain: "Arriving on time and never making people wait for you.",
    opposite: "Unpunctual / Late",
    arWord: "دقيق في المواعيد / منضبط / في وقته تماماً / حريص على الوقت",
    arMeaning: "دقيق في المواعيد وحريص تماماً على عدم التأخير في أي واجب",
    sentence: "Please be punctual for the morning team briefing so we can open the lobby on time."
  },
  {
    id: 1205, word: "Punctuality",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
    citation: "Handout Page 2 & Slide 4",
    definition: "The habit of always arriving on time and never being late.",
    b1Explain: "The good habit of always showing up exactly when promised.",
    opposite: "Tardiness",
    arWord: "الانضباط في المواعيد / الدقة الزمنية / الالتزام بالوقت",
    arMeaning: "الالتزام الدقيق بالمواعيد كسمة مهنية أساسية في العمل",
    sentence: "Punctuality is essential in the hospitality sector because flights operate on strict schedules."
  },
  {
    id: 1206, word: "Tardiness",
    pos: "noun", cambridgeLevel: "C1",
    pronunciation: "/ˈtɑː.di.nəs/",
    citation: "Teacher Notes (Whiteboard)",
    definition: "The quality of being late or arriving after the agreed time.",
    b1Explain: "Repeatedly arriving late for meetings or work shifts.",
    opposite: "Punctuality",
    arWord: "تأخر / تأخير / بطء / عدم انضباط في الحضور",
    arMeaning: "التأخر عن المواعيد أو التباطؤ (وهو نقيض الالتزام بالمواعيد تماماً)",
    sentence: "Repeated tardiness will result in a formal review with your department supervisor."
  },
  {
    id: 1207, word: "Efficient",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪˈfɪʃ.ənt/",
    citation: "Handout Page 1 (Work Styles)",
    definition: "Working quickly and effectively without wasting time, energy, or money.",
    b1Explain: "Getting jobs done fast and accurately without wasting any time.",
    opposite: "Inefficient",
    arWord: "كفء / فعال / منجز / سريع الإتقان ومقتصد في الجهد والوقت",
    arMeaning: "كفء وسريع الإنجاز؛ يؤدي المهام بأعلى دقة وبدون هدر للوقت أو الموارد",
    sentence: "An efficient check-in clerk handles reservations rapidly and prevents lobby queues."
  },
  {
    id: 1208, word: "Work well under pressure",
    pos: "verb phrase", cambridgeLevel: "B2",
    pronunciation: "/wɜːk wel ˈʌn.dər ˈpreʃ.ər/",
    citation: "Job Advert Context (Slide 2)",
    definition: "Able to stay calm and perform effectively during stressful deadlines.",
    b1Explain: "Keeping calm and doing good work even when things get very busy and stressful.",
    opposite: "Panics under pressure",
    arWord: "يعمل ببراعة تحت الضغوط / هادئ ومنجز في الأوقات الصعبة",
    arMeaning: "يعمل بإتقان وهدوء وثبات تحت وطأة الضغوط وحالات الطوارئ",
    sentence: "Concierges must work well under pressure when three airport shuttles arrive simultaneously."
  },
  {
    id: 1209, word: "Easy-going",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌiː.ziˈɡəʊ.ɪŋ/",
    citation: "Handout Page 1 (Personality Adjectives)",
    definition: "Relaxed, calm, and not easily upset or worried by difficulties.",
    b1Explain: "Relaxed and tolerant, not getting angry over small everyday problems.",
    opposite: "Demanding / Rigid",
    arWord: "مرن الطباع / هادئ المزاج / غير متكلف / سهل المعاملة",
    arMeaning: "مرن، هادئ البال، متسامح وغير متشنج، لا يغضب من صغائر الأمور",
    sentence: "His easy-going personality makes him a pleasant colleague to share the night shift with."
  },
  {
    id: 1210, word: "Calm",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/kɑːm/",
    citation: "Handout Page 1 (Personality Adjectives)",
    definition: "Peaceful, quiet, and not showing anger, excitement, or anxiety.",
    b1Explain: "Staying quiet, peaceful, and in control of your emotions.",
    opposite: "Agitated / Panicky",
    arWord: "هادئ / ساكن / رابط الجأش / يهدئ الأعصاب",
    arMeaning: "هادئ، رزين ومتزن الأعصاب، يحتفظ برباطة جأشه في المواقف الصعبة",
    sentence: "She remained completely calm while resolving the angry customer's billing mistake."
  },
  {
    id: 1211, word: "Mature",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/məˈtʃʊər/",
    citation: "Handout Page 1 (Personality Adjectives)",
    definition: "Behaving in a sensible and adult way with good judgment.",
    b1Explain: "Acting wisely like a sensible adult and taking responsibility.",
    opposite: "Immature / Childish",
    arWord: "ناضج فكرياً / راشد / متزن التصرفات",
    arMeaning: "ناضج، مكتمل الوعي، يتصرف بحكمة ورزانة ويتحمل عواقب قراراته",
    sentence: "Although he is only nineteen, Omar has a very mature attitude toward his hospitality career."
  },
  {
    id: 1212, word: "Responsible",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/rɪˈspɒn.sə.bəl/",
    citation: "Handout Page 1 (Work Ethics)",
    definition: "Sensible, trustworthy, and able to make good independent choices.",
    b1Explain: "Dependable and honest, making sure all duties are completed properly.",
    opposite: "Irresponsible",
    arWord: "مسؤول / يعتمد عليه / أهل للثقة / واعٍ بواجباته",
    arMeaning: "مسؤول ومحل ثقة، يُعتمد عليه في إدارة المنشأة وتأدية الواجبات بأمانة",
    sentence: "The night manager is responsible for the overall safety and security of all hotel guests."
  },
  {
    id: 1213, word: "Decisive",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/dɪˈsaɪ.sɪv/",
    citation: "Handout Page 2 & Slide 4",
    definition: "Able to make choices quickly, clearly, and with firm confidence.",
    b1Explain: "Making choices quickly and clearly without hesitating or second-guessing.",
    opposite: "Indecisive / Hesitant",
    arWord: "حاسم / قاطع في قراراته / لا يتردد",
    arMeaning: "حاسم وقاطع في اتخاذ القرارات دون تردد أو تسويف",
    sentence: "In an evacuation emergency, staff must be decisive and give clear instructions to guests."
  },
  {
    id: 1214, word: "Reserved",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/rɪˈzɜːvd/",
    citation: "Handout Page 1 (Opposites)",
    definition: "Slow to reveal emotions or opinions; quiet and private.",
    b1Explain: "Quiet and keeping your feelings to yourself rather than speaking loudly.",
    opposite: "Outgoing / Expressive",
    arWord: "متحفظ / قليل الكلام / كتوم وهادئ المشاعر",
    arMeaning: "متحفظ، كفوف اللسان وكتوم، لا يفصح عن مشاعره بسهولة ويفضل الهدوء",
    sentence: "He is somewhat reserved with strangers, but opens up once he gets to know the team."
  },
  {
    id: 1215, word: "Keen",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/kiːn/",
    citation: "Job Interview Dialogues",
    definition: "Very eager, interested, and enthusiastic about doing something.",
    b1Explain: "Very enthusiastic, excited, and eager to learn or work.",
    opposite: "Indifferent / Apathetic",
    arWord: "شغوف / متحمس / حريص جداً / حاد الذهن",
    arMeaning: "متحمس للغاية، شغوف، وراغب بجدية في التعلم وتطوير مهاراته",
    sentence: "The new apprentice is very keen to learn foreign languages and culinary techniques."
  },
  {
    id: 1216, word: "Bad-tempered",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌbædˈtem.pəd/",
    citation: "Handout Page 1 (Negative Traits)",
    definition: "Easily becoming angry, irritable, or annoyed by small things.",
    b1Explain: "Getting angry and impatient very quickly over minor matters.",
    opposite: "Good-tempered / Patient",
    arWord: "سريع الغضب / عصبي المزاج / نكد الطبع",
    arMeaning: "سريع الغضب وعصبي المزاج؛ ينفعل لأتفه الأسباب (عكس هادئ الطباع)",
    sentence: "Working twenty hours without proper sleep made the sous-chef visibly bad-tempered."
  },
  {
    id: 1217, word: "Whiny",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈwaɪ.ni/",
    citation: "Teacher Clinic (Whiteboard)",
    definition: "Complaining frequently in an annoying, high-pitched, child-like tone.",
    b1Explain: "Always complaining about minor troubles in an irritating voice.",
    opposite: "Content / Resilient",
    arWord: "كثير الشكوى / متذمر / نقاق بصوت متأفف",
    arMeaning: "كثير التذمر والشكوى؛ يتأفف باستمرار بنبرة بكائية مزعجة",
    sentence: "Nobody enjoys working with colleagues who are whiny and refuse to look for solutions."
  },
  {
    id: 1218, word: "Hard-working",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌhɑːdˈwɜː.kɪŋ/",
    citation: "Handout Page 1 (Work Styles)",
    definition: "Putting a lot of effort, energy, and care into your work.",
    b1Explain: "Putting energy and serious effort into completing tasks thoroughly.",
    opposite: "Lazy / Slacker",
    arWord: "مكافح / مجتهد في عمله / دؤوب ومثابر",
    arMeaning: "مجد ومجتهد؛ يبذل قصارى جهده وطاقته لإنجاز عمله على أكمل وجه",
    sentence: "Housekeeping staff are extraordinarily hard-working and clean fifty suites every morning."
  },
  {
    id: 1219, word: "Patient",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈpeɪ.ʃənt/",
    citation: "Handout Page 1 (Positive Traits)",
    definition: "Able to wait calmly without becoming annoyed, anxious, or angry.",
    b1Explain: "Able to stay calm and polite when things take a long time.",
    opposite: "Impatient",
    arWord: "صبور / حليم ومتحمل / مريض طبي",
    arMeaning: "صبور وباله طويل؛ يتحمل الانتظار ولا ينفعل من بطء الإجراءات",
    sentence: "A tour guide must be patient when answering repeated questions from curious visitors."
  },
  {
    id: 1220, word: "Reliable",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/rɪˈlaɪ.ə.bəl/",
    citation: "Handout Page 1 (Work Ethics)",
    definition: "Consistently trustworthy and doing what you promised to do.",
    b1Explain: "Dependable, always doing what you promised without failing.",
    opposite: "Unreliable",
    arWord: "موثوق / يعتمد عليه / مضمون الأداء والوفاء",
    arMeaning: "موثوق ويُعتمد عليه تماماً في الوفاء بالعهود وإنجاز المهام",
    sentence: "Hassan is our most reliable driver; he has never once missed an airport pickup."
  },
  {
    id: 1221, word: "Creative",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/kriˈeɪ.tɪv/",
    citation: "Handout Page 1 (Special Skills)",
    definition: "Using imagination and original ideas to create new things.",
    b1Explain: "Having original ideas and inventing clever artistic solutions.",
    opposite: "Unimaginative",
    arWord: "مبدع / مبتكر / خلاق ولديه خيال واسع",
    arMeaning: "مبدع ومبتكر؛ يوظف خياله لابتكار أفكار جديدة وحلول غير تقليدية",
    sentence: "The hotel marketing team developed a creative social media campaign to attract tourists."
  },
  {
    id: 1222, word: "Polite",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/pəˈlaɪt/",
    citation: "Handout Page 1 (Customer Service)",
    definition: "Showing good manners, respect, and consideration for other people.",
    b1Explain: "Saying please and thank you, treating everyone with kindness and respect.",
    opposite: "Rude / Impolite",
    arWord: "مؤدب / مهذب / دمث الخلق ولبق",
    arMeaning: "مهذب ومؤدب؛ يتعامل بأعلى درجات اللباقة والكياسة والاحترام",
    sentence: "Always maintain a polite and respectful tone, even when handling unreasonable demands."
  },
  {
    id: 1223, word: "Self-confident",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌselfˈkɒn.fɪ.dənt/",
    citation: "Handout Page 1 (Personality Traits)",
    definition: "Feeling sure of your own abilities, qualities, and judgment.",
    b1Explain: "Feeling sure of your skills and not feeling shy or nervous.",
    opposite: "Insecure / Shy",
    arWord: "واثق من نفسه / معتد بذاته وقدراته",
    arMeaning: "واثق من نفسه ومن قدراته ومهاراته وتقديره للأمور",
    sentence: "Her self-confident body language and fluent presentation impressed the hotel board."
  },
  {
    id: 1224, word: "Sensitive",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈsen.sə.tɪv/",
    citation: "Handout Page 1 (Personality Comparison)",
    definition: "Easily affected by emotions or showing awareness of others' feelings.",
    b1Explain: "Easily hurt by criticism, or deeply caring about other people's emotions.",
    opposite: "Insensitive / Thick-skinned",
    arWord: "حساس / رقيق المشاعر / سريع التأثر",
    arMeaning: "حساس؛ مرهف المشاعر وسريع التأثر بما يقال، أو مراعٍ لمشاعر غيره",
    sentence: "Be gentle with your constructive feedback because she can be quite sensitive to criticism."
  },
  {
    id: 1225, word: "Sensible",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈsen.sə.bəl/",
    citation: "Handout Page 1 (Personality Comparison)",
    definition: "Having or showing good practical judgment, wisdom, and common sense.",
    b1Explain: "Making practical, smart, and safe choices based on common sense.",
    opposite: "Foolish / Reckless",
    arWord: "عاقل / حكيم ورشيد / تصرفه منطقي وسليم",
    arMeaning: "عاقل، حكيم وذو منطق سليم؛ يتصرف برزانة وتدبير واقعي",
    sentence: "It was sensible to cancel the outdoor beach party before the severe thunderstorm hit."
  },
  {
    id: 1226, word: "Stubborn",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ˈstʌb.ən/",
    citation: "Handout Page 1 (Negative Traits)",
    definition: "Determined not to change your mind, attitude, or decision.",
    b1Explain: "Refusing to change your mind or admit you might be mistaken.",
    opposite: "Flexible / Adaptable",
    arWord: "عنيد / متشبث برأيه / صلب الرأس",
    arMeaning: "عنيد ومتشبث برأيه؛ يرفض التراجع أو التنازل حتى لو تبين خطؤه",
    sentence: "He was too stubborn to admit that he had booked the wrong conference dates."
  },
  {
    id: 1227, word: "Talkative",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈtɔː.kə.tɪv/",
    citation: "Handout Page 1 (Social Traits)",
    definition: "Liking to talk a lot and engage in conversation.",
    b1Explain: "Talking a great deal and enjoying sharing stories with people.",
    opposite: "Quiet / Taciturn",
    arWord: "ثرثار / كثير الكلام / محب للدردشة باستفاضة",
    arMeaning: "ثرثار ومحب للكلام؛ يسترسل في الأحاديث وتجاذب أطراف الحوار",
    sentence: "The taxi driver was remarkably talkative and shared historic anecdotes all the way to Giza."
  },
  {
    id: 1228, word: "Unpunctual",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/ʌnˈpʌŋk.tʃu.əl/",
    citation: "Handout Page 1 (Negative Traits)",
    definition: "Not arriving at the agreed time; repeatedly arriving late.",
    b1Explain: "Failing to arrive on time; regularly showing up after the scheduled hour.",
    opposite: "Punctual",
    arWord: "غير منضبط في المواعيد / دائم التأخر عن أوقاته",
    arMeaning: "غير منضبط في المواعيد؛ دائم التأخر عن التوقيت المحدد للعمل أو المواعيد",
    sentence: "Being unpunctual for flight duties is unacceptable in commercial international aviation."
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
    id: 1301, word: "Magician",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/məˈdʒɪʃ.ən/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "A performer who does tricks that seem impossible to surprise people.",
    b1Explain: "A performer who does tricks that seem impossible to surprise people.",
    opposite: "",
    arWord: "ساحر / خبير ألعاب خفة / بهلوان مدهش",
    arMeaning: "ساحر أو فنان خفة يقدم عروضاً بصرية وحيلاً سحرية لإبهار الجمهور",
    sentence: "The magician made a white rabbit vanish into thin air before our eyes."
  },
  {
    id: 1302, word: "Cruise ship",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈkruːz ˌʃɪp/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "A huge passenger ship that takes people on holidays across the sea.",
    b1Explain: "A huge passenger ship that takes people on holidays across the sea.",
    opposite: "",
    arWord: "سفينة سياحية فاخرة / باخرة رحلات بحرية كبيرة",
    arMeaning: "سفينة سياحية ضخمة تنقل المسافرين في رحلات ترفيهية بحرية فاخرة",
    sentence: "Every summer, thousands of tourists travel across the Mediterranean on a luxury cruise ship."
  },
  {
    id: 1303, word: "Squawk",
    pos: "verb / noun", cambridgeLevel: "B2",
    pronunciation: "/skwɔːk/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "To make a loud, harsh, sharp sound like a parrot or angry bird.",
    b1Explain: "To make a loud, harsh, sharp sound like a parrot or angry bird.",
    opposite: "Whisper",
    arWord: "ينعق / يصيح بصوت حاد / صرخة طائر مزعجة",
    arMeaning: "ينعق أو يصيح بصوت خشن حاد ومزعج (مثل صوت الببغاء المرتفع)",
    sentence: "The captain's colourful parrot would squawk loudly whenever the magic show began."
  },
  {
    id: 1304, word: "Disappearing act",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˌdɪs.əˈpɪə.rɪŋ ækt/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "A magic trick where something vanishes; or leaving suddenly without telling anyone.",
    b1Explain: "A magic trick where something vanishes; or leaving suddenly without telling anyone.",
    opposite: "Appearance",
    arWord: "فقرة الإخفاء السحرية / حيلة التواري والاختفاء",
    arMeaning: "خدعة التواري أو الاختفاء السحري؛ أو الهروب والتملص المفاجئ من المكان",
    sentence: "The magician practiced his famous disappearing act until the illusion was completely seamless."
  },
  {
    id: 1305, word: "Iceberg",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈaɪs.bɜːɡ/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "A very large piece of freshwater ice floating in the cold ocean.",
    b1Explain: "A very large piece of freshwater ice floating in the cold ocean.",
    opposite: "",
    arWord: "جبل جليدي عائم / كتلة جليد بحرية ضخمة",
    arMeaning: "جبل جليدي ضخم طافٍ في مياه المحيط انفصل عن مثلجة قطبية",
    sentence: "In the middle of the stormy night, the cruise ship tragically struck a floating iceberg."
  },
  {
    id: 1306, word: "Life raft",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˈlaɪf ˌrɑːft/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "A small boat kept on a ship to save people if the ship sinks.",
    b1Explain: "A small boat kept on a ship to save people if the ship sinks.",
    opposite: "",
    arWord: "قارب نجاة مطاطي / طوافة إنقاذ بحرية طارئة",
    arMeaning: "قارب نجاة مطاطي أو طوافة إنقاذ تستخدم للنجاة عند غرق السفن في البحر",
    sentence: "The magician and the parrot found themselves floating alone together on a tiny rubber life raft."
  },
  {
    id: 1307, word: "Croak",
    pos: "verb / noun", cambridgeLevel: "B2",
    pronunciation: "/krəʊk/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "To make a low, rough, hoarse sound like a frog.",
    b1Explain: "To make a low, rough, hoarse sound like a frog.",
    opposite: "Melodic song",
    arWord: "ينعق / يخور / صوت الضفدع أو النقيق الأجش",
    arMeaning: "ينعق بصوت أجش وخشن ومبحوح يخرج بصعوبة من الحلق",
    sentence: "After three days without fresh water in the hot sun, the exhausted parrot could only croak faintly."
  },
  {
    id: 1308, word: "Admit",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ədˈmɪt/",
    citation: "Handout Page 1 (The Parrot Story)",
    definition: "To say that something is true, often when you feel embarrassed about it.",
    b1Explain: "To say that something is true, often when you feel embarrassed about it.",
    opposite: "Deny",
    arWord: "يعترف بـ / يقر بذنب / يقبل دخولاً / يسجل في مستشفى",
    arMeaning: "يعترف بالواقع أو يقر بصحة أمر ما بعد تردد أو إنكار",
    sentence: "Finally, the stubborn parrot admitted: 'Okay, I give up! Where did you hide the cruise ship?'"
  },
  {
    id: 1309, word: "Fishing boat",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈfɪʃ.ɪŋ ˌbəʊt/",
    citation: "Handout Page 2 (Exercise 3)",
    definition: "A boat used to catch fish in the sea or a river.",
    b1Explain: "A boat used to catch fish in the sea or a river.",
    opposite: "",
    arWord: "مركب صيد / سفينة صيد سمك صغيرة",
    arMeaning: "سفينة أو قارب صيد مخصص لاصطياد الأسماك في عرض البحر",
    sentence: "Early at dawn, the coastal fishing boat returned to Alexandria port filled with fresh tuna."
  },
  {
    id: 1310, word: "Off the coast",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/ɒf ðə kəʊst/",
    citation: "Handout Page 2 (Exercise 3)",
    definition: "In the sea, near to the land or beach.",
    b1Explain: "In the sea, near to the land or beach.",
    opposite: "Inland",
    arWord: "قبالة الساحل / في عرض البحر قرب الشاطئ",
    arMeaning: "قبالة الشاطئ أو بمحاذاة الساحل البحري على مسافة قصيرة من اليابسة",
    sentence: "The cargo vessel broke down roughly three miles off the southern coast of England."
  },
  {
    id: 1311, word: "Criminal damage",
    pos: "noun phrase", cambridgeLevel: "B2",
    pronunciation: "/ˈkrɪm.ɪ.nəl ˈdæm.ɪdʒ/",
    citation: "Handout Page 2 (Exercise 4)",
    definition: "The crime of breaking or ruining someone else's property on purpose.",
    b1Explain: "The crime of breaking or ruining someone else's property on purpose.",
    opposite: "Lawful preservation",
    arWord: "إتلاف جنائي / تخريب متعمد لممتلكات الغير",
    arMeaning: "إتلاف جنائي متعمد للممتلكات وتدميرها بالمخالفة للقانون",
    sentence: "The suspect was arrested and formally charged with criminal damage after breaking the shop windows."
  },
  {
    id: 1312, word: "Come forward",
    pos: "phrasal verb", cambridgeLevel: "B2",
    pronunciation: "/kʌm ˈfɔː.wəd/",
    citation: "Handout Page 2 (Exercise 4)",
    definition: "To offer help, information, or evidence to the police.",
    b1Explain: "To offer help, information, or evidence to the police.",
    opposite: "Hold back / Stay silent",
    arWord: "يتقدم للإدلاء بمعلومات / يتطوع للشهادة والمساعدة",
    arMeaning: "يتقدم طواعية للإدلاء بشهادة أو الكشف عن معلومات حاسمة لتبرئة مظلوم",
    sentence: "Detectives appealed to eyewitnesses to come forward and share any mobile phone video clips."
  },
  {
    id: 1313, word: "Transport",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/trænˈspɔːt/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To move people or goods from one place to another using a vehicle.",
    b1Explain: "To move people or goods from one place to another using a vehicle.",
    opposite: "",
    arWord: "وسيلة نقل / مواصلات / ينقل بضائع أو ركاب",
    arMeaning: "ينقل البضائع أو الركاب أو المواشي بوسائل النقل لمسافات بعيدة",
    sentence: "The farmer used an open wooden trailer to transport five pigs to the county livestock fair."
  },
  {
    id: 1314, word: "Panic",
    pos: "verb / noun", cambridgeLevel: "B2",
    pronunciation: "/ˈpæn.ɪk/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "A sudden strong feeling of fear that stops you from thinking clearly.",
    b1Explain: "A sudden strong feeling of fear that stops you from thinking clearly.",
    opposite: "Composure / Calm",
    arWord: "ذعر / فزع شديد / يصاب بالهلع وفقدان السيطرة",
    arMeaning: "يصيبه الذعر والهلع المفاجئ ويفقد السيطرة على تصرفاته من شدة الخوف",
    sentence: "When the pig unexpectedly jumped into the driver's lap, the driver panicked and lost control."
  },
  {
    id: 1315, word: "Aircraft",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈeə.krɑːft/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "Any vehicle, like a plane or helicopter, that flies in the sky.",
    b1Explain: "Any vehicle, like a plane or helicopter, that flies in the sky.",
    opposite: "",
    arWord: "طائرة / مركبة جوية / طائرات حربية أو مدنية",
    arMeaning: "طائرة أو مركبة جوية مصممة للتحليق في الفضاء الجوي",
    sentence: "The pilot guided the damaged aircraft through the thick storm clouds and landed safely."
  },
  {
    id: 1316, word: "Give someone a lift",
    pos: "idiom", cambridgeLevel: "B1",
    pronunciation: "/ɡɪv ˈsʌm.wʌn ə lɪft/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To take someone in your car to the place they want to go for free.",
    b1Explain: "To take someone in your car to the place they want to go for free.",
    opposite: "",
    arWord: "يوصل شخصاً بسيارته / يقله مجاناً في طريقه",
    arMeaning: "يوصل شخصاً في طريقه بسيارته مجاناً كمعروف إنساني",
    sentence: "It was pouring with rain, so my kind neighbour gave me a lift to the metro station."
  },
  {
    id: 1317, word: "Trot",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/trɒt/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To move faster than a walk but slower than a run, with short quick steps.",
    b1Explain: "To move faster than a walk but slower than a run, with short quick steps.",
    opposite: "Sprint / Walk slowly",
    arWord: "يخبّ / يهرول بخطوات سريعة متتالية (للخيول والحيوانات)",
    arMeaning: "يهرول أو يخب في مشيه بخطوات سريعة متتالية (بين المشي والركض)",
    sentence: "The escaped pig started trotting cheerfully along the motorway hard shoulder."
  },
  {
    id: 1318, word: "Overtake",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.vəˈteɪk/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To drive past another slower car that is moving in front of you.",
    b1Explain: "To drive past another slower car that is moving in front of you.",
    opposite: "Follow behind",
    arWord: "يتجاوز سيارة أخرى / يسبق في الطريق أو السباق",
    arMeaning: "يتجاوز أو يتخطى سيارة أبطأ منه تسير في نفس الاتجاه على الطريق",
    sentence: "He accelerated into the right lane to overtake the slow-moving farm tractor safely."
  },
  {
    id: 1319, word: "Exhausted",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ɪɡˈzɔː.stɪd/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "Extremely tired, with no energy left in your body.",
    b1Explain: "Extremely tired, with no energy left in your body.",
    opposite: "Energized / Refreshed",
    arWord: "منهك القوى / مجهد تماماً / خائر القوى من التعب",
    arMeaning: "منهك القوى، مرهق تماماً ومستنزف الطاقة البدنية والذهنية",
    sentence: "After trotting twenty kilometres in the midday summer heat, the runaway pig was utterly exhausted."
  },
  {
    id: 1320, word: "Pigs might fly",
    pos: "idiom", cambridgeLevel: "C1",
    pronunciation: "/pɪɡz maɪt flaɪ/",
    citation: "Handout Page 3 (Idiomatic Wrap-Up)",
    definition: "An English saying used to say that something is impossible and will never happen.",
    b1Explain: "An English saying used to say that something is impossible and will never happen.",
    opposite: "Certain to happen",
    arWord: "في المشمش / مستحيل حدوثه / ضرب من المحال",
    arMeaning: "عشم إبليس في الجنة (مثل إنجليزي شهير يقال عند استحالة وقوع الشيء)",
    sentence: "'Do you think the boss will give us all a fifty percent pay raise?' 'Yes, and pigs might fly!'"
  },
  {
    id: 1321, word: "Need for speed",
    pos: "idiom / phrase", cambridgeLevel: "B2",
    pronunciation: "/niːd fər spiːd/",
    citation: "Handout Page 3 (Story Headline)",
    definition: "A strong desire to go very fast in a car or sport.",
    b1Explain: "A strong desire to go very fast in a car or sport.",
    opposite: "Cautious driving",
    arWord: "الشغف بالسرعة / الرغبة في الانطلاق السريع والاندفاع",
    arMeaning: "الهوس بالسرعة والرغبة الجامحة في الانطلاق والقيادة السريعة",
    sentence: "Young sports car enthusiasts often confess they have an uncontrollable need for speed."
  },
  {
    id: 1322, word: "Narrative tenses",
    pos: "grammar term", cambridgeLevel: "B2",
    pronunciation: "/ˈnær.ə.tɪv ˌten.sɪz/",
    citation: "Handout Page 4 (Grammar Rule Box)",
    definition: "Past tenses (past simple, continuous, and perfect) used together to tell stories.",
    b1Explain: "Past tenses (past simple, continuous, and perfect) used together to tell stories.",
    opposite: "",
    arWord: "أزمنة السرد والقصص (الماضي البسيط والمستمر والتام)",
    arMeaning: "الأزمنة السردية (الماضي البسيط والمستمر والتام) المستخدمة لرواية القصص",
    sentence: "Mastering narrative tenses allows English storytellers to paint vivid, sequential past timelines."
  },
  {
    id: 1323, word: "Past simple",
    pos: "grammar term", cambridgeLevel: "B1",
    pronunciation: "/pɑːst ˈsɪm.pəl/",
    citation: "Handout Page 4 (Grammar Rule Box)",
    definition: "The tense used for completed actions and main events in the past.",
    b1Explain: "The tense used for completed actions and main events in the past.",
    opposite: "",
    arWord: "زمن الماضي البسيط (للأحداث المنتهية المحددة)",
    arMeaning: "صيغة الماضي البسيط للأحداث المكتملة المتتالية في سياق القصة",
    sentence: "In storytelling, we use the past simple for the main plot events: 'He opened the door and ran.'"
  },
  {
    id: 1324, word: "Past continuous",
    pos: "grammar term", cambridgeLevel: "B1",
    pronunciation: "/pɑːst kənˈtɪn.ju.əs/",
    citation: "Handout Page 4 (Grammar Rule Box)",
    definition: "The tense (was/were + verb-ing) used for an action that was going on in the past when another event happened.",
    b1Explain: "The tense (was/were + verb-ing) used for an action that was going on in the past when another event happened.",
    opposite: "",
    arWord: "زمن الماضي المستمر (للأحداث الجارية وقت وقوع غيرها)",
    arMeaning: "صيغة الماضي المستمر (was/were + ing) للحدث الخلفي المستمر الذي قاطعه حدث آخر",
    sentence: "We use the past continuous to describe the scene: 'The sun was shining and birds were singing.'"
  },
  {
    id: 1325, word: "Past perfect",
    pos: "grammar term", cambridgeLevel: "B2",
    pronunciation: "/pɑːst ˈpɜː.fɪkt/",
    citation: "Handout Page 4 (Grammar Rule Box)",
    definition: "The tense (had + past participle) used for an action finished before another point in the past.",
    b1Explain: "The tense (had + past participle) used for an action finished before another point in the past.",
    opposite: "",
    arWord: "زمن الماضي التام (للحدث الأسبق وقوعاً في الماضي)",
    arMeaning: "صيغة الماضي التام (had + p.p) لحدث اكتمل ووقع قبل حدث ماضٍ آخر",
    sentence: "When the police arrived at the docks, the runaway suspect had already vanished."
  },
  {
    id: 1326, word: "In the middle of",
    pos: "prepositional phrase", cambridgeLevel: "B1",
    pronunciation: "/ɪn ðə ˈmɪd.əl əv/",
    citation: "Handout Page 4 (Task 6)",
    definition: "Right while something is happening and not finished yet.",
    b1Explain: "Right while something is happening and not finished yet.",
    opposite: "",
    arWord: "في خضم / أثناء وسط الحدث أو المعمعة",
    arMeaning: "في خضم أو أثناء وقوع الأمر وانشغال الشخص به قبل انتهائه",
    sentence: "She was right in the middle of preparing dinner when the kitchen fire alarm suddenly sounded."
  },
  {
    id: 1327, word: "Sure enough",
    pos: "discourse marker", cambridgeLevel: "B2",
    pronunciation: "/ʃɔːr ɪˈnʌf/",
    citation: "Handout Page 4 (Task 6)",
    definition: "Used in stories to say that what someone expected or feared was really true.",
    b1Explain: "Used in stories to say that what someone expected or feared was really true.",
    opposite: "Unexpectedly",
    arWord: "بالفعل تماماً / كما كان متوقعاً بلا ريب",
    arMeaning: "وكما كان متوقعاً بالضبط (تأكيد لما كان منتظراً في مسار القصة)",
    sentence: "We predicted it would rain on camping day and, sure enough, thunder shook our tents at dawn."
  },
  {
    id: 1328, word: "Tongue hanging out",
    pos: "idiom / phrase", cambridgeLevel: "B2",
    pronunciation: "/tʌŋ ˈhæŋ.ɪŋ aʊt/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "When an animal runs fast and pants with its tongue out of its mouth.",
    b1Explain: "When an animal runs fast and pants with its tongue out of its mouth.",
    opposite: "",
    arWord: "لسانه متدلٍ من شدة العطش أو الإجهاد واللهاث",
    arMeaning: "لسانه متدلٍ من شدة الإجهاد واللهث بعد الركض والتعب الشديد",
    sentence: "The cheerful golden retriever jogged back to its owner with its pink tongue hanging out."
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
    id: 1401, word: "Aisle",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/aɪl/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "The long walk or path between rows of seats where the bride walks.",
    b1Explain: "The long walk or path between rows of seats where the bride walks.",
    opposite: "",
    arWord: "ممر الكنيسة أو القاعة / الممشى بين صفوف المقاعد",
    arMeaning: "الممر الأوسط بين مقاعد الكنيسة أو قاعة الاحتفال الذي تمشي فيه العروس نحو المذبح (حرف s صامت)",
    sentence: "Everyone stood up silently in church as the beautiful bride walked down the aisle on her father's arm."
  },
  {
    id: 1402, word: "Altar",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈɔːl.tər/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "The special table at the front of a church where wedding vows are made.",
    b1Explain: "The special table at the front of a church where wedding vows are made.",
    opposite: "",
    arWord: "مذبح الكنيسة / منصة مراسم الزواج المقدسة",
    arMeaning: "المذبح أو المنصة الدينية في مقدمة الكنيسة حيث تُعقد مراسم الزواج وتبادل العهود",
    sentence: "The nervous groom waited by the decorated flower altar for his bride to arrive."
  },
  {
    id: 1403, word: "Attend",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/əˈtend/",
    citation: "Handout Page 1 (Discussion 1)",
    definition: "To go to and be present at an event, celebration, or meeting.",
    b1Explain: "To go to and be present at an event, celebration, or meeting.",
    opposite: "Miss / Skip",
    arWord: "يحضر مناسبة / يشارك في حفل / يعتني بـ",
    arMeaning: "يحضر مناسبة رسمية أو حفلة زفاف أو اجتماعاً بصفته مدعواً أو مشاركاً",
    sentence: "Over two hundred close family members and university friends travelled to attend their wedding."
  },
  {
    id: 1404, word: "Best man",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˌbest ˈmæn/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "The groom's closest friend who helps him at the wedding and keeps the rings.",
    b1Explain: "The groom's closest friend who helps him at the wedding and keeps the rings.",
    opposite: "Maid of honour",
    arWord: "إشبين العريس / الصديق الملازم للعريس في زفافه",
    arMeaning: "الإشبين أو الصديق المقرب الأول للعريس، يتولى حراسة خواتم الزواج وإلقاء الخطاب التكريمي ومساندة العريس",
    sentence: "The best man delivered a hilarious yet touching speech that had all the wedding guests laughing and crying."
  },
  {
    id: 1405, word: "Bouquet",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/buˈkeɪ/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "A bunch of flowers held by the bride during a wedding ceremony.",
    b1Explain: "A bunch of flowers held by the bride during a wedding ceremony.",
    opposite: "",
    arWord: "باقة زهور / بوكيه ورد العروس",
    arMeaning: "باقة ورد العروس المنسقة بعناية، والتي تحملها أثناء الزفاف وتلقيها تقليدياً نحو الفتيات العازبات",
    sentence: "At the end of the evening, the bride turned around and tossed her fragrant rose bouquet into the crowd."
  },
  {
    id: 1406, word: "Bride",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/braɪd/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "A woman on her wedding day.",
    b1Explain: "A woman on her wedding day.",
    opposite: "Groom",
    arWord: "عروس / العروسة في يوم زفافها",
    arMeaning: "العروس؛ المرأة في يوم زفافها أو في فترة عقد القران",
    sentence: "The bride looked magnificent in her handmade ivory lace gown."
  },
  {
    id: 1407, word: "Bridesmaid",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈbraɪdz.meɪd/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "A female friend or sister who helps the bride during a wedding.",
    b1Explain: "A female friend or sister who helps the bride during a wedding.",
    opposite: "Best man / Groomsman",
    arWord: "وصيفة العروس / رفيقة العروس المساعدة",
    arMeaning: "وصيفة العروس؛ صديقة أو قريبة ترافق العروس وتساعدها في تنظيم الحفل ومتطلبات المظهر",
    sentence: "Her younger sister served as head bridesmaid and helped adjust her long veil before the photos."
  },
  {
    id: 1408, word: "Catering",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈkeɪ.tər.ɪŋ/",
    citation: "Handout Page 2 (Listening Comprehension)",
    definition: "The business of preparing and serving food and drinks for parties and weddings.",
    b1Explain: "The business of preparing and serving food and drinks for parties and weddings.",
    opposite: "",
    arWord: "خدمات تقديم الأطعمة والمشروبات / تموين الحفلات",
    arMeaning: "خدمات تقديم الطعام والضيافة والتجهيز الغذائي للمناسبات والحفلات الكبرى",
    sentence: "They hired a top-tier Egyptian catering company that prepared an exquisite four-course feast."
  },
  {
    id: 1409, word: "Celebration",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˌsel.əˈbreɪ.ʃən/",
    citation: "Handout Page 1 (Introduction)",
    definition: "A happy party or event held to mark a special occasion.",
    b1Explain: "A happy party or event held to mark a special occasion.",
    opposite: "Mourning",
    arWord: "احتفال / بهجة وفرحة بمناسبة سعيدة",
    arMeaning: "احتفال أو مهرجان بهيج يُقام تكريماً لمناسبة استثنائية أو عقد زواج مبارك",
    sentence: "The wedding celebration continued late into the night with live Oriental and jazz music."
  },
  {
    id: 1410, word: "Ceremony",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈser.ɪ.mə.ni/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "A formal event with traditional actions, like a wedding or graduation.",
    b1Explain: "A formal event with traditional actions, like a wedding or graduation.",
    opposite: "Informal gathering",
    arWord: "مراسم رسمية / طقوس احتفالية مهيبة",
    arMeaning: "مراسم أو طقوس رسمية أو دينية تُقام باتباع أعراف وتقاليد محددة لتوثيق الزواج",
    sentence: "The religious marriage ceremony lasted about forty-five minutes and included ancient family blessings."
  },
  {
    id: 1411, word: "Church hall",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈtʃɜːtʃ ˌhɔːl/",
    citation: "Handout Page 2 (Listening Exercise 2)",
    definition: "A room or building next to a church used for social parties and meetings.",
    b1Explain: "A room or building next to a church used for social parties and meetings.",
    opposite: "",
    arWord: "قاعة الكنيسة الملحقة / صالة الفعاليات الاجتماعية",
    arMeaning: "قاعة ملحقة بالكنيسة مخصصة للأنشطة الاجتماعية واللقاءات والمناسبات المجتمعية",
    sentence: "After the vows, guests walked across the lawn to the church hall for tea and wedding cupcakes."
  },
  {
    id: 1412, word: "Civil wedding",
    pos: "compound noun", cambridgeLevel: "B2",
    pronunciation: "/ˌsɪv.əl ˈwed.ɪŋ/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "A legal wedding ceremony conducted by an official rather than a religious leader.",
    b1Explain: "A legal wedding ceremony conducted by an official rather than a religious leader.",
    opposite: "Religious wedding",
    arWord: "زواج مدني رسمي / عقد قران قانوني لدى المحكمة",
    arMeaning: "زواج مدني قانوني غير ديني يوثقه موظف السجل المدني الحكومي دون طقوس كنسية",
    sentence: "They chose to have a simple civil wedding at the town hall on Friday followed by a beach dinner on Saturday."
  },
  {
    id: 1413, word: "Commercialised",
    pos: "adjective", cambridgeLevel: "B2",
    pronunciation: "/kəˈmɜː.ʃəl.aɪzd/",
    citation: "Handout Page 2 (Audio Script • Speaker 3)",
    definition: "Focused more on selling things and making money than on real meaning.",
    b1Explain: "Focused more on selling things and making money than on real meaning.",
    opposite: "Authentic / Non-commercial",
    arWord: "تجاري بحت / مستغل لأغراض الربح والمال",
    arMeaning: "مُسوّق تجارياً أو طاغٍ عليه الطابع الاستهلاكي الربحي المبالغ فيه على حساب المشاعر الحقيقية",
    sentence: "Some people feel modern weddings have become far too commercialised and expensive."
  },
  {
    id: 1414, word: "Groom",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ɡruːm/",
    citation: "Handout Page 1 (Box) • Key Wedding Roles",
    definition: "A man on his wedding day.",
    b1Explain: "A man on his wedding day.",
    opposite: "Bride",
    arWord: "عريس / يهندم ويرتب مظهره / يعتني بحصان",
    arMeaning: "العريس؛ الرجل في يوم زواجه أو عقد قرانه",
    sentence: "The smiling groom stood proudly next to his new wife as their parents toasted their future."
  },
  {
    id: 1415, word: "Honeymoon",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈhʌn.i.muːn/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "A special holiday taken by a newly married couple right after their wedding.",
    b1Explain: "A special holiday taken by a newly married couple right after their wedding.",
    opposite: "",
    arWord: "شهر العسل / رحلة الزوجين بعد الزفاف",
    arMeaning: "شهر العسل؛ الإجازة أو الرحلة الرومانسية التي يقضيها الزوجان عقب حفل الزفاف مباشرة للاستجمام",
    sentence: "The newlyweds flew to Zanzibar for a fortnight's tropical honeymoon."
  },
  {
    id: 1416, word: "Host",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/həʊst/",
    citation: "Handout Page 2 (Listening Dialogue)",
    definition: "To welcome guests and provide food and drinks for a party or event.",
    b1Explain: "To welcome guests and provide food and drinks for a party or event.",
    opposite: "Guest",
    arWord: "مضيف / يستضيف ضيوفاً / مقدم الحفل أو البرنامج",
    arMeaning: "يستضيف أو يقيم أو ينظم مناسبة أو حفل زفاف ويوفر له متطلبات الضيافة والمكان اللائق",
    sentence: "The bride's generous parents offered to host the reception at their countryside home."
  },
  {
    id: 1417, word: "Minister",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˈmɪn.ɪ.stər/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "A religious leader who is allowed to perform church weddings.",
    b1Explain: "A religious leader who is allowed to perform church weddings.",
    opposite: "",
    arWord: "رجل دين / قسيس معتمد للمراسم / وزير حكومي",
    arMeaning: "رجل دين مرخص له بإتمام مراسم وعقود الزواج الكنسي",
    sentence: "The parish minister asked the bride and groom to join hands and repeat their sacred promises."
  },
  {
    id: 1418, word: "Newlyweds",
    pos: "noun (plural)", cambridgeLevel: "B2",
    pronunciation: "/ˈnjuː.li.wedz/",
    citation: "Handout Page 2 (Listening Context)",
    definition: "Two people who have very recently been married to each other.",
    b1Explain: "Two people who have very recently been married to each other.",
    opposite: "Long-married couple",
    arWord: "العروسان الجديدان / حديثو الزواج",
    arMeaning: "العروسان حديثا الزواج في أيامهما وأشهرهما الأولى معاً",
    sentence: "The wedding guests cheered and showered the happy newlyweds with rose petals and confetti."
  },
  {
    id: 1419, word: "Photoshoot",
    pos: "compound noun", cambridgeLevel: "B1",
    pronunciation: "/ˈfəʊ.təʊ.ʃuːt/",
    citation: "Handout Page 2 (Dialogue)",
    definition: "A session where a photographer takes many pictures of people in nice poses.",
    b1Explain: "A session where a photographer takes many pictures of people in nice poses.",
    opposite: "",
    arWord: "جلسة تصوير فوتوغرافي / تصوير للعروسين أو عارضي الأزياء",
    arMeaning: "جلسة تصوير احترافية للعروسين والضيوف لتوثيق اللحظات التذكارية",
    sentence: "The sunset photoshoot in the palace gardens produced breathtaking photos for their wedding album."
  },
  {
    id: 1420, word: "Propose",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/prəˈpəʊz/",
    citation: "Handout Page 3 (Grammar in Context)",
    definition: "To ask someone to marry you.",
    b1Explain: "To ask someone to marry you.",
    opposite: "",
    arWord: "يطلب يدها للزواج / يتقدم بخطبة / يقترح فكرة",
    arMeaning: "يطلب يدها للزواج ويتقدم بطلب الخطوبة رسمياً",
    sentence: "He surprised her by proposing on bended knee during a quiet dinner by the River Nile."
  },
  {
    id: 1421, word: "Proposal",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/prəˈpəʊ.zəl/",
    citation: "Handout Page 3 (Grammar in Context)",
    definition: "The moment when someone asks another person to marry them.",
    b1Explain: "The moment when someone asks another person to marry them.",
    opposite: "",
    arWord: "عرض زواج / طلب خطوبة / مقترح مشروع رسمي",
    arMeaning: "طلب الزواج أو التقدم بعرض الخطوبة رسمياً",
    sentence: "Her eyes filled with tears of joy when she accepted his romantic marriage proposal."
  },
  {
    id: 1422, word: "Prosperity",
    pos: "noun", cambridgeLevel: "C1",
    pronunciation: "/prɒsˈper.ə.ti/",
    citation: "Handout Page 1 (Cultural Traditions)",
    definition: "The state of being successful, having good luck, and having enough money.",
    b1Explain: "The state of being successful, having good luck, and having enough money.",
    opposite: "Poverty / Hardship",
    arWord: "رخاء / ازدهار مادي ورغد عيش",
    arMeaning: "الرخاء والازدهار والوفرة المالية والبركة في المعيشة",
    sentence: "In many cultures, throwing grains of rice over the bride and groom is a symbol of future prosperity."
  },
  {
    id: 1423, word: "Reception",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/rɪˈsep.ʃən/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "A celebratory party held after a wedding ceremony to eat, drink, and dance with guests.",
    b1Explain: "A celebratory party held after a wedding ceremony to eat, drink, and dance with guests.",
    opposite: "",
    arWord: "حفل استقبال الزفاف / صالة الاستقبال بالفندق",
    arMeaning: "حفل استقبال وضيافة وعشاء يعقب مراسم عقد القران للاحتفال وتناول الطعام مع المدعوين",
    sentence: "The evening reception was hosted in the hotel's grand ballroom and featured live orchestral music."
  },
  {
    id: 1424, word: "Registrar",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/ˌredʒ.ɪˈstrɑːr/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "An official government person who conducts non-religious legal marriages.",
    b1Explain: "An official government person who conducts non-religious legal marriages.",
    opposite: "Religious minister",
    arWord: "موثق عقود الزواج المدني / مأمور السجل الرسمي",
    arMeaning: "المأذون أو موظف السجل المدني المسؤول عن توثيق الزواج قانونياً وتسليم وثيقة الزواج",
    sentence: "The civil registrar checked both passports and witnessed the couple signing the official marriage register."
  },
  {
    id: 1425, word: "Suit",
    pos: "noun", cambridgeLevel: "A2/B1",
    pronunciation: "/suːt/",
    citation: "Handout Page 1 (Wedding Attire)",
    definition: "A smart set of clothes with matching jacket and trousers worn by men.",
    b1Explain: "A smart set of clothes with matching jacket and trousers worn by men.",
    opposite: "Casual wear",
    arWord: "بدلة رسمية / يناسب ويلائم ذوقاً أو موعداً",
    arMeaning: "بدلة رسمية متناسقة للرجال (سترة وبنطال)",
    sentence: "The groom looked exceptionally elegant in his tailored midnight-blue three-piece wedding suit."
  },
  {
    id: 1426, word: "Symbolise",
    pos: "verb", cambridgeLevel: "B2",
    pronunciation: "/ˈsɪm.bəl.aɪz/",
    citation: "Handout Page 1 (Cultural Traditions)",
    definition: "To represent or stand for an idea or feeling.",
    b1Explain: "To represent or stand for an idea or feeling.",
    opposite: "",
    arWord: "يرمز إلى / يمثل دلالة ومعنى رمزياً",
    arMeaning: "يرمز أو يعبر عن معنى روحي أو قيمة معينة متوارثة",
    sentence: "The circular gold wedding rings symbolise everlasting love with no beginning and no end."
  },
  {
    id: 1427, word: "Veil",
    pos: "noun", cambridgeLevel: "B2",
    pronunciation: "/veɪl/",
    citation: "Handout Page 1 (Wedding Attire)",
    definition: "A thin piece of material worn by a bride over her head or face.",
    b1Explain: "A thin piece of material worn by a bride over her head or face.",
    opposite: "",
    arWord: "طرحة العروس / خمار / حجاب يغطي الوجه",
    arMeaning: "طرحة العروس الرقيقة المصنوعة من الدانتيل أو الحرير لتغطية الرأس أو الوجه",
    sentence: "The bride lifted her sheer lace veil just before sharing their first celebratory smile as husband and wife."
  },
  {
    id: 1428, word: "Vows",
    pos: "noun (plural)", cambridgeLevel: "B2",
    pronunciation: "/vaʊz/",
    citation: "Handout Page 1 (Vocabulary Matching)",
    definition: "Serious, formal promises that a bride and groom make to each other at a wedding.",
    b1Explain: "Serious, formal promises that a bride and groom make to each other at a wedding.",
    opposite: "",
    arWord: "عهود الزواج / نذور الوفاء والارتباط الأبدي",
    arMeaning: "عهود الزواج والوعود الرسمية المتبادلة بين العروسين بالوفاء والإخلاص",
    sentence: "They wrote their own personal wedding vows, promising to support and cherish each other through thick and thin."
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
   SESSION 15: CONVERSATION SKILLS - AVOIDING 'DEAD AIR' (28 VOCABULARY WORDS)
   Handout ID: ARB_B1_07_I029CEA_HO_v1.0 • Authentic British Council Classroom
   ========================================================================== */

const VOCAB_SESSION_15 = [
  {
    id: 1501, word: "Dead air",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌded ˈeər/",
    citation: "Handout Title (Page 1)",
    definition: "An uncomfortable silence during a conversation when nobody is speaking.",
    b1Explain: "An uncomfortable silence during a conversation when nobody speaks.",
    opposite: "Lively conversation",
    arWord: "صمت مطبق مفاجئ / انقطاع الكلام على الهواء أو الهاتف",
    arMeaning: "الصمت المحرج أو الفراغ غير المريح في المحادثة عندما يتوقف الجميع عن الكلام.",
    sentence: "She quickly asked about his hobbies to avoid awkward dead air."
  },
  {
    id: 1502, word: "Initiate",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ɪˈnɪʃ.i.eɪt/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To start a conversation, activity, or process with another person.",
    b1Explain: "To start a conversation or discussion with someone.",
    opposite: "Conclude / End",
    arWord: "يبادر / يبدأ حواراً أو خطوة أولى / يطلق مشروعاً",
    arMeaning: "يبدأ أو يفتتح (محادثة أو حواراً) مع شخص آخر.",
    sentence: "It is often easy to initiate a chat by asking a friendly question."
  },
  {
    id: 1503, word: "Small talk",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈsmɔːl ˌtɔːk/",
    citation: "Handout Page 1 (Lead-in context)",
    definition: "Polite, friendly conversation about everyday topics like the weather or travel.",
    b1Explain: "Polite conversation about simple daily topics to break the ice.",
    opposite: "Deep debate",
    arWord: "دردشة عابرة / حديث ودي قصير لكسر الحواجز",
    arMeaning: "حديث ودي خفيف ومجاملات اجتماعية حول مواضيع يومية بسيطة.",
    sentence: "Before the meeting started, the colleagues engaged in light small talk."
  },
  {
    id: 1504, word: "Icebreaker",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈaɪsˌbreɪ.kər/",
    citation: "Handout Page 1 & 2 (Opening questions)",
    definition: "A game or friendly remark that helps strangers relax together.",
    b1Explain: "Something friendly you say or do to help strangers feel relaxed.",
    opposite: "Awkward silence",
    arWord: "كاسر الجليد / لعبة أو عبارة للتعارف وتلطيف الأجواء",
    arMeaning: "وسيلة أو عبارة لكسر حاجز الصمت والجليد وبدء التعارف.",
    sentence: "Asking about someone's flight is a wonderful icebreaker at business conferences."
  },
  {
    id: 1505, word: "Whereabouts",
    pos: "adverb", cambridgeLevel: "B1",
    pronunciation: "/ˈweər.ə.baʊts/",
    citation: "Handout Page 2 (Question 11)",
    definition: "In or near what place; the general location where someone is.",
    b1Explain: "In or near which place someone lives or works.",
    opposite: "Exact address",
    arWord: "مكان التواجد / موقع الإقامة أو الوجود الحالي",
    arMeaning: "أين تقريباً / في أي جهة أو منطقة (للسؤال عن المكان التقريبي).",
    sentence: "Whereabouts in London do you live and work?"
  },
  {
    id: 1506, word: "Unscramble",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ʌnˈskræm.bəl/",
    citation: "Handout Page 1 (Exercise 2)",
    definition: "To put mixed-up words or letters back into their correct order.",
    b1Explain: "To put jumbled words into the right sentence order.",
    opposite: "Jumble / Mix up",
    arWord: "يفك تشفير / يعيد ترتيب الحروف أو الكلمات المبعثرة",
    arMeaning: "يفك تشويش أو يعيد ترتيب كلمات مبعثرة لتكوين جملة صحيحة.",
    sentence: "Students had to unscramble twelve questions to practice natural conversation starters."
  },
  {
    id: 1507, word: "Bother",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˈbɒð.ər/",
    citation: "Handout Page 3 (Exercise 5)",
    definition: "To interrupt, annoy, or cause trouble for someone who is busy.",
    b1Explain: "To disturb or interrupt someone when they are busy.",
    opposite: "Leave alone",
    arWord: "يزعج / يضايق / يكلف نفسه عناء فعل شيء",
    arMeaning: "يزعج أو يقاطع شخصاً مشغولاً بلباقة.",
    sentence: "Excuse me, sorry to bother you, but do you have a minute?"
  },
  {
    id: 1508, word: "Signal",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˈsɪɡ.nəl/",
    citation: "Handout Page 3 (Exercise 4)",
    definition: "To show by words, sounds, or actions what you want to do.",
    b1Explain: "To indicate or show clearly through your words or actions.",
    opposite: "Hide / Conceal",
    arWord: "إشارة / يرسل إشارة أو دلالة حركية / تلميح",
    arMeaning: "يعطي إشارة أو يلمح بوضوح بنيته أو رغبته.",
    sentence: "Checking your wristwatch can signal politely that your lunch break is over."
  },
  {
    id: 1509, word: "Co-worker",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈkəʊˌwɜː.kər/",
    citation: "Handout Page 5 (Role Play 1)",
    definition: "A person who works together with you in the same job.",
    b1Explain: "A person who works with you in the same company.",
    opposite: "Competitor",
    arWord: "زميل عمل / رفيق في الوظيفة أو الفريق",
    arMeaning: "زميل عمل في نفس المؤسسة أو الوظيفة.",
    sentence: "A new co-worker joined our design team this morning."
  },
  {
    id: 1510, word: "Recommendation",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˌrek.ə.menˈdeɪ.ʃən/",
    citation: "Handout Page 4 (Language formulas)",
    definition: "A helpful suggestion about a good thing to choose or visit.",
    b1Explain: "Helpful advice suggesting a good place to visit or try.",
    opposite: "Warning",
    arWord: "توصية / ترشيح وتزكية لشيء أو شخص",
    arMeaning: "توصية أو ترشيح مفيد لمكان أو تجربة تستحق الزيارة.",
    sentence: "Can you give me a recommendation for a nice Italian restaurant?"
  },
  {
    id: 1511, word: "Hometown",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈhəʊm.taʊn/",
    citation: "Handout Page 4 & 5",
    definition: "The city or town where you were born or grew up.",
    b1Explain: "The town or city where you grew up as a child.",
    opposite: "Foreign city",
    arWord: "مسقط الرأس / البلدة الأم التي نشأ فيها",
    arMeaning: "مسقط الرأس أو المدينة الأم التي نشأ فيها الشخص.",
    sentence: "He gave us fantastic tips on great tourist spots in his hometown."
  },
  {
    id: 1512, word: "Dilemma",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/dɪˈlem.ə/",
    citation: "Smartboard 3 (Would you rather)",
    definition: "A difficult situation where you must choose between two hard choices.",
    b1Explain: "A situation where you have to choose between two different options.",
    opposite: "Easy decision",
    arWord: "معضلة / مأزق حرج بين خيارين صعبين",
    arMeaning: "معضلة أو موقف صعب يتطلب الاختيار بين بديلين كلاهما يحمل تحديات.",
    sentence: "Choosing between high salary and job happiness is a common career dilemma."
  },
  {
    id: 1513, word: "Hypothetical",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˌhaɪ.pəˈθet.ɪ.kəl/",
    citation: "Smartboard 4 (Conditional Clinic)",
    definition: "Based on an imagined situation rather than something that is real.",
    b1Explain: "Imagined as an example, not real right now.",
    opposite: "Real / Actual",
    arWord: "افتراضي / مبني على تخيل نظري",
    arMeaning: "افتراضي أو تخيلي قائم على موقف غير واقعي أو مشروط.",
    sentence: "The teacher asked a hypothetical question about winning a million pounds."
  },
  {
    id: 1514, word: "Would rather",
    pos: "modal idiom", cambridgeLevel: "B1",
    pronunciation: "/wʊd ˈrɑː.ðər/",
    citation: "Smartboard 3 (Decision choices)",
    definition: "Used to show that you prefer one thing over another thing.",
    b1Explain: "Used when stating which choice you prefer over another.",
    opposite: "Dislike both",
    arWord: "يفضل أن / يميل لاختيار بديل بعينه",
    arMeaning: "يفضل / يرجح خياراً على آخر في المقارنة.",
    sentence: "Would you rather travel around the world or live in a mansion?"
  },
  {
    id: 1515, word: "Get used to",
    pos: "verb phrase", cambridgeLevel: "B1",
    pronunciation: "/ɡet ˈjuːst tuː/",
    citation: "Smartboard 4 (Teacher correction)",
    definition: "To become familiar with something so it no longer feels strange.",
    b1Explain: "To become comfortable with a new situation over time.",
    opposite: "Feel unfamiliar",
    arWord: "يعتاد على / يتأقلم تدريجياً مع وضع جديد",
    arMeaning: "يعتاد على أو يتأقلم مع وضع جديد حتى يصبح مألوفاً.",
    sentence: "It takes time to get used to waking up early for work."
  },
  {
    id: 1516, word: "Mansion",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈmæn.ʃən/",
    citation: "Smartboard 3 (Item 18)",
    definition: "A very large, expensive, and impressive private house.",
    b1Explain: "A very large and luxurious house with many rooms.",
    opposite: "Cottage / Tiny flat",
    arWord: "قصر فخم / فيلا سكنية واسعة وشاهقة",
    arMeaning: "قصر فخم وكبير جداً ذو مساحات وحدائق واسعة.",
    sentence: "He preferred traveling the world instead of owning an expensive mansion."
  },
  {
    id: 1517, word: "Average pay",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈæv.ər.ɪdʒ peɪ/",
    citation: "Smartboard 3 (Item 20)",
    definition: "A standard, normal salary that is neither very high nor low.",
    b1Explain: "A normal salary that is neither very high nor very low.",
    opposite: "Amazing pay / Luxury income",
    arWord: "متوسط الأجر / الراتب المعتاد المتعارف عليه",
    arMeaning: "أجر متوسط أو راتب عادي غير مرتفع ولا منخفض.",
    sentence: "He took a dream job with average pay because he loved the work."
  },
  {
    id: 1518, word: "Lunch break",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈlʌntʃ breɪk/",
    citation: "Smartboard 1 & 2",
    definition: "The time during the working day when you pause to eat.",
    b1Explain: "A break in the middle of the workday for eating lunch.",
    opposite: "Working hours",
    arWord: "استراحة الغداء / وقت تناول وجبة منتصف اليوم",
    arMeaning: "استراحة الغداء اليومية أثناء دوام العمل.",
    sentence: "Well, my lunch break is almost over, so I must get back to work."
  },
  {
    id: 1519, word: "Briskly",
    pos: "adverb", cambridgeLevel: "B1",
    pronunciation: "/ˈbrɪsk.li/",
    citation: "Handout Page 5 (Roleplay pacing)",
    definition: "In a quick, active, and energetic way.",
    b1Explain: "Quickly and with plenty of energy.",
    opposite: "Slowly / Sluggishly",
    arWord: "بنشاط وهمة / بخطوات سريعة وحيوية",
    arMeaning: "بنشاط وسرعة وحيوية ملحوظة.",
    sentence: "She walked briskly into the meeting room with a friendly smile."
  },
  {
    id: 1520, word: "Interrupt",
    pos: "verb", cambridgeLevel: "B1",
    pronunciation: "/ˌɪn.təˈrʌpt/",
    citation: "Handout Page 3 (Conversation etiquette)",
    definition: "To stop someone speaking by speaking yourself or making a noise.",
    b1Explain: "To speak while another person is already talking.",
    opposite: "Listen quietly",
    arWord: "يقاطع الحديث / يعترض مسار الكلام أو العمل",
    arMeaning: "يقاطع حديث شخص آخر قبل أن ينهي فكرته.",
    sentence: "It is polite to say 'excuse me' before you interrupt a conversation."
  },
  {
    id: 1521, word: "Wrap up",
    pos: "phrasal verb", cambridgeLevel: "B1",
    pronunciation: "/ræp ʌp/",
    citation: "Smartboard 1 & 2 (Closing phrases)",
    definition: "To bring a conversation, meeting, or event to an end.",
    b1Explain: "To finish or conclude a discussion in a friendly way.",
    opposite: "Initiate / Open",
    arWord: "يختم / ينهي اجتماعاً أو مكالمة / يغلّف هدية",
    arMeaning: "يختتم أو ينهي حديثاً أو اجتماعاً بشكل منظم.",
    sentence: "Let us wrap up our meeting so everyone can catch their trains."
  },
  {
    id: 1522, word: "Tone of voice",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/təʊn əv vɔɪs/",
    citation: "Handout Page 2 (Intonation notes)",
    definition: "The quality or feeling in your voice that shows your attitude.",
    b1Explain: "The sound of your voice that shows whether you are friendly.",
    opposite: "Monotone speech",
    arWord: "نبرة الصوت / طابع الكلام المعبر عن المشاعر",
    arMeaning: "نبرة الصوت التي تعبر عن مشاعر المتحدث وموقفه الودي.",
    sentence: "A warm tone of voice makes strangers feel comfortable talking to you."
  },
  {
    id: 1523, word: "Body language",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈbɒd.i ˌlæŋ.ɡwɪdʒ/",
    citation: "Handout Page 1 & 5",
    definition: "Movements or postures of your body that communicate your feelings.",
    b1Explain: "The gestures and postures that show how you feel without words.",
    opposite: "Spoken words",
    arWord: "لغة الجسد / إيماءات وحركات الجسم التعبيرية",
    arMeaning: "لغة الجسد والإيماءات الحركية المعبرة عن المشاعر.",
    sentence: "Open body language like smiling and uncrossed arms welcomes conversation."
  },
  {
    id: 1524, word: "Eye contact",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˈaɪ ˌkɒn.tækt/",
    citation: "Handout Page 1 (Conversation skills)",
    definition: "Looking directly into another person's eyes while talking with them.",
    b1Explain: "Looking directly at someone when speaking to show polite attention.",
    opposite: "Looking away",
    arWord: "التواصل البصري / التقاء العيون أثناء الحوار",
    arMeaning: "التواصل البصري والنظر المباشر لإظهار الاهتمام والصدق.",
    sentence: "Making friendly eye contact shows you are actively listening to your partner."
  },
  {
    id: 1525, word: "Awkward",
    pos: "adjective", cambridgeLevel: "B1",
    pronunciation: "/ˈɔː.kwəd/",
    citation: "Handout Title context",
    definition: "Feeling uncomfortable, embarrassed, or not relaxed with other people.",
    b1Explain: "Uncomfortable or embarrassed, not natural or relaxed.",
    opposite: "Comfortable / Natural",
    arWord: "محرج / مرتبك / غير مريح اجتماعياً",
    arMeaning: "محرج أو غير مريح ويثير الارتباك الاجتماعي.",
    sentence: "There was an awkward silence when neither person knew what to say."
  },
  {
    id: 1526, word: "Colleague",
    pos: "noun", cambridgeLevel: "B1",
    pronunciation: "/ˈkɒl.iːɡ/",
    citation: "Handout Page 3 (Exercise 4)",
    definition: "A person you work with in a profession or business.",
    b1Explain: "A person that you work with in the same office.",
    opposite: "Competitor",
    arWord: "زميل عمل / رفيق مهنة",
    arMeaning: "زميل عمل في المهنة أو التخصص.",
    sentence: "She asked her colleague for advice on the new computer software."
  },
  {
    id: 1527, word: "Firm handshake",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌfɜːm ˈhænd.ʃeɪk/",
    citation: "Handout Page 1 (Formal greetings)",
    definition: "A strong, confident clasp of hands when greeting a person.",
    b1Explain: "A strong and polite greeting made by holding someone's hand.",
    opposite: "Limp handshake",
    arWord: "مصافحة قوية / قبضة يد واثقة ومحترمة عند اللقاء",
    arMeaning: "مصافحة قوية واثقة تعكس الجدية والترحيب والاحترام.",
    sentence: "A firm handshake and a warm smile create a great first impression."
  },
  {
    id: 1528, word: "Social gathering",
    pos: "noun phrase", cambridgeLevel: "B1",
    pronunciation: "/ˌsəʊ.ʃəl ˈɡæð.ər.ɪŋ/",
    citation: "Handout Page 1 & 5",
    definition: "A party or meeting where people come together to enjoy time.",
    b1Explain: "An informal event where friends or acquaintances meet to chat.",
    opposite: "Formal board meeting",
    arWord: "تجمع اجتماعي / لقاء عائلي أو مناسبة ودية",
    arMeaning: "تجمع أو لقاء اجتماعي غير رسمي للتعارف وقضاء وقت ممتع.",
    sentence: "A birthday party is a relaxed social gathering where you can meet new people."
  }
];

/* ==========================================================================
   SESSION 15 MODULES & AUTHENTIC PEDAGOGICAL DATA
   ========================================================================== */

const SESSION_15_LEAD_IN = {
  instruction: "Work with a partner and discuss meeting new people in social versus business situations.",
  questions: [
    {
      num: 1,
      q: "Are you good at meeting new people?",
      qAr: "هل تجيد التعرف على أشخاص جدد وتكوين علاقات بسهولة؟",
      modelAnswer: "Honestly, it depends on the setting. At casual social gatherings like parties or family barbecues, I feel confident initiating small talk about hobbies and travel. However, in formal business meetings, I tend to be more reserved until I find common ground.",
      audioText: "Honestly, it depends on the setting. At casual social gatherings like parties, I feel confident initiating small talk about hobbies. In formal business meetings, I tend to be more reserved until I find common ground."
    },
    {
      num: 2,
      q: "When was the last time you met someone new? What did you talk about?",
      qAr: "متى كانت آخر مرة قابلت فيها شخصاً جديداً؟ وماذا كان موضوع حديثكما؟",
      modelAnswer: "Just last week, a new co-worker joined our department. During our lunch break, I introduced myself and asked how her first week was going and whereabouts in the city she lived. We ended up discussing our favourite local cafes and weekend hiking trails.",
      audioText: "Just last week, a new co-worker joined our department. During lunch, I introduced myself and asked whereabouts in the city she lived. We ended up discussing local cafes and hiking trails."
    },
    {
      num: 3,
      q: "When you meet someone for the first time, what kind of questions might you want to ask in: 1. a social situation like a party? 2. a formal context like a business meeting?",
      qAr: "عندما تقابل شخصاً لأول مرة، ما نوع الأسئلة المناسبة لطرحها في: 1. مناسبة اجتماعية كحفلة؟ 2. سياق رسمي كاجتماع عمل؟",
      modelAnswer: "At a social party, safe open icebreakers work best: 'How do you know the host?', 'What do you like doing in your free time?', or 'Have you travelled anywhere exciting recently?'. In a formal business context, questions should be respectful and professional: 'How do you do?', 'Whereabouts do you work?', or 'How was your flight?'.",
      audioText: "At a social party, safe icebreakers work best like 'How do you know the host?' or 'What do you do in your free time?'. In a business context, professional questions work best like 'Whereabouts do you work?' or 'How was your flight?'."
    }
  ],
  contextComparison: [
    {
      setting: "Social Gathering (Party / Cafe / Sports Club)",
      icon: "🎉",
      tone: "Relaxed, warm, and conversational",
      topics: "Free time, hobbies, sports, travel, mutual friends, weekend plans",
      openers: ["'Hi! My name's Jon. What's yours?'", "'What's up? / How's it going?'", "'Look at those delicious snacks!'"],
      closers: ["'Nice to see you!'", "'See you later!'", "'Bye for now.'"],
      bodyLanguage: "Casual posture, smiling, active nodding, warm eye contact"
    },
    {
      setting: "Formal Context (Business Conference / Meeting)",
      icon: "💼",
      tone: "Polite, respectful, professional, and clear",
      topics: "Travel/flight, role, office location, city impressions, industry projects",
      openers: ["'How do you do?'", "'Excuse me. Sorry to bother you...'", "'How was your flight?'"],
      closers: ["'It was a pleasure to speak to you.'", "'Well, lovely to meet you.'", "'It's been nice talking to you. Bye.'"],
      bodyLanguage: "Firm handshake, upright posture, steady eye contact, business card exchange"
    }
  ]
};

const SESSION_15_DIALOGUES = {
  dialogue1: {
    title: "Dialogue 1: Two Friends Talking About a Boat Race",
    topic: "Signaling the End of a Conversation & Avoiding Dead Air",
    citation: "Handout Page 3 • Exercise 4 (Listening Analysis)",
    turns: [
      { speaker: "Mark", text: "Hey Leo! Did you watch the university boat race on the river yesterday afternoon?" },
      { speaker: "Leo", text: "Yes, I did! It was intense. The Oxford crew pulled ahead right at the final bridge." },
      { speaker: "Mark", text: "I know! The crowds along the riverbanks were cheering briskly. The atmosphere was incredible." },
      { speaker: "Leo", text: "Totally. Have you ever tried rowing yourself? It looks exhausting." },
      { speaker: "Mark", text: "Well, my lunch break is almost over. See you later!", isGap: true, gapType: "Conversation Closing Signal", answer: "Well, my lunch break is almost over. See you later!", prompt: "Polite conversational closer providing a genuine time reason before dead air occurs" },
      { speaker: "Leo", text: "No problem at all, Mark! Nice talking to you. Catch you tomorrow!" }
    ],
    pedagogicalAnalysis: {
      question: "How does the first speaker (Mark) signal that the conversation is finished?",
      answerEn: "Mark uses the classic transition signal word 'Well...' followed by a practical, socially acceptable constraint ('my lunch break is almost over') and an upbeat farewell ('See you later!'). This gently closes the exchange without creating awkward dead air or hurting his friend's feelings.",
      answerAr: "يستخدم مارك كلمة الانتقال الشهيرة 'Well...' متبوعة بسبب زمني ومهني مقنع ومقبول اجتماعياً ('استراحة الغداء قاربت على الانتهاء') ثم يودع بحرارة ('See you later!'). هذا ينهي الحوار بذوق دون أي صمت محرج أو إحراج للطرف الآخر."
    }
  },
  dialogue2: {
    title: "Dialogue 2: Two Colleagues at Work",
    topic: "Giving Suggestions, Recommendations & Advice for Town Activities",
    citation: "Handout Page 3 • Exercise 4 & Handout Page 4 (Language of Advice)",
    turns: [
      { speaker: "Sarah", text: "Hi David, have you got a minute? I'm completely new to the city, and I really don't know what to do this weekend." },
      { speaker: "David", text: "Welcome to the team, Sarah! You should definitely visit the historic riverside market on Saturday morning.", isGap: true, gapType: "Advice Formula (You should definitely...)", answer: "You should definitely", prompt: "Strong recommendation formula" },
      { speaker: "Sarah", text: "That sounds lovely! What about Sunday afternoon?" },
      { speaker: "David", text: "Why don't you try renting a bicycle in the royal park? The cycling paths are amazing.", isGap: true, gapType: "Suggestion Formula (Why don't you try... -ing)", answer: "Why don't you try", prompt: "Friendly suggestion formula" },
      { speaker: "Sarah", text: "I love cycling! Is there anywhere good to grab dinner afterwards?" },
      { speaker: "David", text: "One thing I recommend is the seafood grill down by the old harbour. If I were you, I would book a table in advance because it gets very busy.", isGap: true, gapType: "Conditional Advice (If I were you, I would...)", answer: "If I were you, I would", prompt: "Second conditional advice formula" },
      { speaker: "Sarah", text: "Thank you so much! That's very helpful advice." }
    ],
    pedagogicalAnalysis: {
      question: "What does the first speaker suggest the other speaker should do? What exact advice formulas does he use?",
      answerEn: "David uses a diverse toolkit of British Council B1 advice formulas: 1) 'You should definitely...' for high enthusiasm, 2) 'Why don't you try + gerund...' for open suggestions, 3) 'One thing I recommend is...' for personal tips, and 4) 'If I were you, I would...' for thoughtful guidance.",
      answerAr: "استخدم ديفيد أربع صيغ نصيحة أساسية: 1) You should definitely (ينبغي عليك بالتأكيد)، 2) Why don't you try + ing (لِمَ لا تجرب)، 3) One thing I recommend is (شيء أوصي به هو)، 4) If I were you, I would (لو كنت مكانك لفعلت كذا)."
    }
  },
  dialogue3: {
    title: "Dialogue 3: Singapore Business Conference Introductions",
    topic: "12 Unscrambled Questions & Natural Social Icebreakers",
    citation: "Handout Page 1 & 2 • Exercises 2 & 3",
    turns: [
      { speaker: "Emma", text: "Excuse me. Sorry to bother you, but is this your first visit to Singapore?" },
      { speaker: "Ken", text: "Yes, it is! I just arrived yesterday from Tokyo for the international tech expo." },
      { speaker: "Emma", text: "How was your flight? I hope the journey wasn't too tiring." },
      { speaker: "Ken", text: "It was very smooth, thank you. Whereabouts do you work, Emma?" },
      { speaker: "Emma", text: "I work for an educational software consultancy right in downtown Singapore. How is your job going?" },
      { speaker: "Ken", text: "It's going really well, thanks! What do you like doing in your free time here when you're not working?" },
      { speaker: "Emma", text: "I love visiting the botanical gardens and watching sports on weekends." }
    ],
    pedagogicalAnalysis: {
      question: "How do the speakers keep the conversation flowing smoothly without awkward dead air?",
      answerEn: "Each speaker alternates between answering with an upbeat detail and immediately throwing back an open question ('How was your flight?', 'Whereabouts do you work?', 'What do you like doing in your free time?'). This reciprocal dynamic ensures dead air never occurs.",
      answerAr: "يقوم كل متحدث بالرد بابتسامة وتفاصيل لطيفة ثم يتبعها فوراً بسؤال مفتوح للطرف الآخر. هذا التبادل السلس يلغي أي احتمالية لحدوث صمت محرج ويحافظ على حيوية المحادثة."
    }
  }
};

const SESSION_15_SMARTBOARD_MATCHING = [
  {
    id: "sb1",
    phrase: "How do you do?",
    category: "Initiating",
    register: "Formal",
    context: "First-time formal business greeting when introduced to a senior colleague or client",
    arMeaning: "تشرفنا / أهلاً بك (تحية رسمية جداً عند اللقاء لأول مرة في سياق العمل)",
    responseNote: "Traditional British response is to reply with the exact same phrase: 'How do you do?'"
  },
  {
    id: "sb2",
    phrase: "How are things with you?",
    category: "Initiating",
    register: "Neutral / Informal",
    context: "Warm greeting to someone you have already met before",
    arMeaning: "كيف هي أمورك وأحوالك؟ (تحية ودية لشخص تعرفه مسبقاً)",
    responseNote: "Answers: 'Good thanks!', 'Can't complain!', or 'Pretty busy, how about you?'"
  },
  {
    id: "sb3",
    phrase: "Bye for now.",
    category: "Closing",
    register: "Informal",
    context: "Casual departure implying you will see the person again soon",
    arMeaning: "إلى اللقاء مؤقتاً / مع السلامة الآن (على أمل اللقاء قريباً)",
    responseNote: "Friendly and lighthearted closer for friends and colleagues."
  },
  {
    id: "sb4",
    phrase: "Hi! My name's Jon. What's yours?",
    category: "Initiating",
    register: "Informal",
    context: "Direct, friendly introduction at a social gathering or party",
    arMeaning: "مرحباً! اسمي جون، ما اسمك أنت؟ (افتتاح تعارف ودي ومباشر في حفلة)",
    responseNote: "Breaks the ice immediately with an open smile and handshake."
  },
  {
    id: "sb5",
    phrase: "See you again.",
    category: "Closing",
    register: "Neutral / Informal",
    context: "Friendly parting phrase expressing expectation of future meetings",
    arMeaning: "أراك مرة أخرى / إلى لقاء قادم.",
    responseNote: "Can be expanded to: 'See you again soon!' or 'Hope to see you again!'"
  },
  {
    id: "sb6",
    phrase: "Well, lovely to meet you.",
    category: "Closing",
    register: "Polite / Formal",
    context: "Gracious closing phrase when departing from a new acquaintance",
    arMeaning: "حسناً، لقد سررت كثيراً بلقائك والتعرف عليك.",
    responseNote: "The word 'Well...' acts as an acoustic signal that you are preparing to leave."
  },
  {
    id: "sb7",
    phrase: "How's it going?",
    category: "Initiating",
    register: "Informal",
    context: "Everyday casual greeting among peers, friends, and co-workers",
    arMeaning: "كيف تسير الأمور معك؟ / ما الأخبار؟",
    responseNote: "Natural answer: 'Not bad, thanks! How about yourself?'"
  },
  {
    id: "sb8",
    phrase: "What's up? / What's good?",
    category: "Initiating",
    register: "Very Informal",
    context: "Classroom Smartboard addition: Slang/youth greeting for close friends",
    arMeaning: "ما الأخبار؟ / شو في جديد؟ (عامية ودية جداً بين الأصدقاء المقربين)",
    responseNote: "Recorded directly from Smartboard 1 & 2 additions in purple and red marker."
  },
  {
    id: "sb9",
    phrase: "I'm sorry, I've got to go now.",
    category: "Closing",
    register: "Neutral / Polite",
    context: "Honest, polite closer when you have a pressing appointment or bus to catch",
    arMeaning: "أعتذر، عليّ المغادرة الآن فوراً لارتباطي بموعد.",
    responseNote: "Best paired with a smile and a quick apology to maintain warmth."
  },
  {
    id: "sb10",
    phrase: "Have you got a minute?",
    category: "Initiating",
    register: "Neutral / Informal",
    context: "Checking if a colleague is free before asking a question or starting a chat",
    arMeaning: "هل لديك دقيقة من وقتك؟ (للاستئذان قبل بدء الحديث مع شخص)",
    responseNote: "Shows respect for the other person's time and schedule."
  },
  {
    id: "sb11",
    phrase: "It's been nice talking to you. Bye.",
    category: "Closing",
    register: "Polite / Neutral",
    context: "Smooth, respectful ending after an enjoyable chat at a conference or party",
    arMeaning: "كان من اللطيف جداً التحدث معك. مع السلامة.",
    responseNote: "Polite standard wrap-up formula taught across British Council centres."
  },
  {
    id: "sb12",
    phrase: "Excuse me. Sorry to bother you...",
    category: "Initiating",
    register: "Polite / Formal",
    context: "Courteous conversational opener when approaching someone who is reading or busy",
    arMeaning: "عفواً، أعتذر لمقاطعتك وإزعاجك... (افتتاح مؤدب ولطيف للحديث مع غريب)",
    responseNote: "Softens the interruption before delivering your query."
  }
];

const SESSION_15_VOCAB_GROUPS = {
  instruction: "Categorize the 28 session vocabulary words into 4 functional conversational domains.",
  categories: [
    {
      name: "Conversational Openers & Icebreakers",
      icon: "🤝",
      words: ["Initiate", "Small talk", "Icebreaker", "Unscramble", "Whereabouts", "Tone of voice", "Eye contact"],
      note: "Starting conversations smoothly with strangers and new acquaintances."
    },
    {
      name: "Closing Signals & Floor Management",
      icon: "⏱️",
      words: ["Dead air", "Bother", "Signal", "Interrupt", "Wrap up", "Lunch break", "Awkward"],
      note: "Ending conversations gracefully and navigating awkward silences."
    },
    {
      name: "Advice Formulas & Hometown Exploration",
      icon: "🏙️",
      words: ["Recommendation", "Hometown", "Co-worker", "Colleague", "Briskly", "Firm handshake", "Social gathering"],
      note: "Recommending sights and welcoming new arrivals to town."
    },
    {
      name: "Dilemmas, Preferences & Hypotheticals",
      icon: "⚖️",
      words: ["Dilemma", "Hypothetical", "Would rather", "Get used to", "Mansion", "Average pay"],
      note: "Weighing hypothetical choices and practicing Second Conditional grammar."
    }
  ]
};

const SESSION_15_DILEMMAS = [
  {
    id: "dil17",
    itemNum: 17,
    title: "The Wealth Strategy Dilemma",
    optionA: {
      text: "Get £1,000 today in cash",
      pros: "Immediate capital, can spend or invest right now, zero waiting",
      cons: "It is a small one-time lump sum that will disappear quickly"
    },
    optionB: {
      text: "Get £100 every month for life",
      pros: "Guaranteed passive income (£1,200/year; £36,000 over 30 years!)",
      cons: "Requires long-term patience; £100 will buy less over time due to inflation"
    },
    modelSecondConditional: "If I had the choice, I would choose £100 every month for life, because in just ten months I would already exceed the initial £1,000!",
    audioText: "If I had the choice, I would choose 100 pounds every month for life, because steady recurring income provides long-term financial security."
  },
  {
    id: "dil18",
    itemNum: 18,
    title: "The Lifestyle Dilemma",
    optionA: {
      text: "Live in a luxury mansion",
      pros: "Prestige, enormous living space, private amenities (pool, cinema, garden)",
      cons: "Extremely high maintenance, property taxes, cleaning costs, static location"
    },
    optionB: {
      text: "Travel around the world freely",
      pros: "Discover diverse cultures, try international cuisine, collect lifelong memories",
      cons: "No stable permanent home, frequent jet lag, continuous packing and travel fatigue"
    },
    modelSecondConditional: "If I were forced to pick one, I would definitely rather travel around the world, because authentic life experiences are worth far more than bricks and mortar.",
    audioText: "If I were forced to pick one, I would rather travel around the world, because authentic life experiences and cultural discoveries are worth far more than owning a mansion."
  },
  {
    id: "dil19",
    itemNum: 19,
    title: "The Work-Life Balance Dilemma",
    optionA: {
      text: "Work 3 days a week (full 10-hour days)",
      pros: "4 full days of weekend every week, great for hobbies and long road trips",
      cons: "The 3 working days are exhausting with little personal time in the evenings"
    },
    optionB: {
      text: "Work 5 days a week with shorter hours (4 hours/day)",
      pros: "Plenty of free time every single afternoon, consistent daily routine, less daily stress",
      cons: "Still have to commute into work five days every week; short weekend"
    },
    modelSecondConditional: "If I could design my schedule, I would rather work 3 days a week. Having a 4-day weekend would allow me to travel and pursue creative hobbies.",
    audioText: "If I could design my schedule, I would rather work 3 days a week. Having a four-day weekend every single week would provide true freedom."
  },
  {
    id: "dil20",
    itemNum: 20,
    title: "The Career & Money Dilemma",
    optionA: {
      text: "Have your dream job with average pay",
      pros: "Daily joy, passion, deep purpose, zero burnout, proud of your craft",
      cons: "Must live within a modest budget; cannot afford luxury vacations or goods"
    },
    optionB: {
      text: "Have a boring job with amazing pay",
      pros: "Financial freedom, luxury lifestyle, early retirement, generous savings",
      cons: "Daily monotony, lack of motivation, feeling that 40 hours a week are wasted"
    },
    modelSecondConditional: "If you offered me both, I would pick the dream job with average pay. As our teacher noted on the smartboard: 'Work is just not about money!'",
    audioText: "If you offered me both, I would pick the dream job with average pay. Work is just not about money, you spend one third of your life at work and you need to enjoy it."
  },
  {
    id: "dil21",
    itemNum: 21,
    title: "The Ultimate Freedom Dilemma",
    optionA: {
      text: "Buy everything you want without limit",
      pros: "Unlimited material luxury, designer clothes, sports cars, buying gifts for everyone",
      cons: "May lead to greed, superficial relationships, and losing appreciation for things"
    },
    optionB: {
      text: "Never have to work again for the rest of your life",
      pros: "Complete control of your time, zero workplace stress, freedom to sleep, read, and volunteer",
      cons: "Without a daily routine or goals, some people feel bored or lost"
    },
    modelSecondConditional: "If I had the ability not to work, I would definitely not work! I would dedicate my days to volunteering, reading, and learning new languages.",
    audioText: "If I had the ability not to work, I would not work. Having complete ownership of your time is the greatest luxury in the world."
  }
];

const SESSION_15_DISCUSSION_LAB = [
  {
    num: 1,
    prompt: "Imagine an overseas visitor arrives in your town or city. They know nothing about the area and want recommendations on places to go and things to do. What advice would you give them?",
    level: "B1/B2 Advice Fluency Model",
    modelSpeech: "If you were visiting my city for the first time, one thing I would strongly recommend is taking an early morning stroll along the historic waterfront. Why don't you try visiting the ancient citadel at sunset? The panoramic view across the bay is truly breathtaking. For dinner, you should definitely check out the traditional seafood grill in the old bazaar. If I were you, I would avoid the tourist trap cafes along the main highway and stick to the authentic local alleyways.",
    audioText: "If you were visiting my city for the first time, one thing I would strongly recommend is an early morning walk along the waterfront. Why don't you try visiting the citadel at sunset? You should definitely check out the seafood grill in the bazaar.",
    keyLexisUsed: ["recommendation", "hometown", "advice formulas", "why don't you try", "if I were you", "you should definitely"]
  },
  {
    num: 2,
    prompt: "Roleplay: A new co-worker has just joined your department. They are completely new to town and want advice on weekend activities and hobbies. How would you initiate the conversation and avoid dead air?",
    level: "B1/B2 Workplace Roleplay Model",
    modelSpeech: "Hi there! Have you got a minute? My name is Alex from the technical team. Welcome to the company! Whereabouts in town are you staying? Since you are new to the area, you should check out the community sports complex down the road if you enjoy playing football or tennis. Also, if you need a recommendation for good weekend coffee spots, I would be delighted to send you a list. Well, my lunch break is almost over, but it was lovely to meet you! See you around the office.",
    audioText: "Hi there! Have you got a minute? My name is Alex. Welcome to the company! Whereabouts in town are you staying? You should check out the sports complex down the road. Well, my lunch break is almost over, lovely to meet you!",
    keyLexisUsed: ["co-worker", "initiate", "whereabouts", "lunch break", "wrap up", "avoid dead air"]
  },
  {
    num: 3,
    prompt: "What strategies do you use when an awkward dead air silence happens during a social gathering with people you don't know well?",
    level: "B2 Fluency & Communication Strategy",
    modelSpeech: "Whenever an awkward silence strikes, the best remedy is to throw out an open-ended icebreaker about the shared environment or current events. For instance, commenting on the venue music, asking 'How do you know the host?', or asking about recent travel plans immediately breaks the dead air. Maintaining friendly eye contact and relaxed body language also reassures the other person and encourages them to speak freely.",
    audioText: "Whenever an awkward silence strikes, the best remedy is to throw out an open-ended icebreaker about the shared environment. Asking how they know the host breaks the dead air. Maintaining eye contact reassures the other person.",
    keyLexisUsed: ["dead air", "awkward", "icebreaker", "social gathering", "eye contact", "body language"]
  }
];

const SESSION_15_TEACHER_FEEDBACK = [
  {
    id: "clinic15_1",
    incorrect: "If you have the ability not to work, you will not work.",
    struck: "have ... will",
    correct: "If you had the ability not to work, you would not work.",
    teacherPen: "had ... would",
    category: "Second Conditional for Hypothetical Dilemmas (Smartboard 4)",
    rule: "When discussing unreal, imaginary, or hypothetical dilemmas (like Smartboard 3 Would You Rather choices), use the Second Conditional: If + Past Simple, would + bare infinitive. Using 'have ... will' makes it sound like a guaranteed real-world fact (First Conditional), whereas not having to work is purely hypothetical.",
    arRule: "في المواقف الافتراضية والتخيلية (الحالة الشرطية الثانية Second Conditional): نستخدم الماضي البسيط بعد If (had) متبوعاً بـ would + الفعل المجرد في جواب الشرط (would not work)، وليس have و will.",
    speech: "If you had the ability not to work, you would not work."
  },
  {
    id: "clinic15_2",
    incorrect: "Work it's just not about money.",
    struck: "it's",
    correct: "Work is just not about money.",
    teacherPen: "is (delete 'it')",
    category: "Resumptive Subject Pronoun Redundancy (Smartboard 4)",
    rule: "In English sentence structure, a noun subject ('Work') cannot be followed immediately by a duplicate personal pronoun ('it'). This common interference stems from Arabic grammar (العمل هو ليس فقط عن المال). In English, say directly: 'Work is just not about money.'",
    arRule: "تداخل لغوي شائع من اللغة العربية: في الإنجليزية لا يجوز وضع ضمير فاعل مكرر (it) مباشرة بعد الفاعل الصريح (Work). نقول مباشرة: Work is just not about money وليس Work it is.",
    speech: "Work is just not about money."
  },
  {
    id: "clinic15_3",
    incorrect: "You will get use to it.",
    struck: "use",
    correct: "You will get used to it.",
    teacherPen: "used (-ed)",
    category: "Fixed Idiomatic Pattern: get used to + noun / -ing (Smartboard 4)",
    rule: "The expression meaning 'to become accustomed to something unfamiliar' is fixed as 'get used to' (with an '-ed' ending). Although the 'd' sound assimilates into the 't' of 'to' in spoken speech (/ɡet ˈjuːst tuː/), it must ALWAYS be spelled with 'used'.",
    arRule: "التعبير الاصطلاحي الدال على الاعتياد والتأقلم يكتب دائماً: get used to (بحرف d) متبوعاً باسم أو gerund. ورغم أن صوت d يدمج نطقاً مع t في الكلام السريع، إلا أن كتابته بحرف d إلزامية.",
    speech: "You will get used to it over time."
  },
  {
    id: "clinic15_4",
    incorrect: "For me, I need new apartment, so I'll choose the first one.",
    struck: "new apartment ... I'll",
    correct: "For me, I need a new apartment, so I'd choose the first one.",
    teacherPen: "a new apartment ... I'd choose",
    category: "Indefinite Article & Hypothetical Modal Contraction (Smartboard 4)",
    rule: "Two corrections: 1) Singular countable nouns like 'apartment' require an indefinite article ('a new apartment'). 2) When selecting a choice in a hypothetical dilemma game, use the conditional modal contraction 'I'd choose' (I would choose) instead of future certainty 'I'll choose'.",
    arRule: "تصحيحان مهمان: 1) الأسماء المعدودة المفردة تتطلب أداة نكرة (a new apartment). 2) عند الاختيار في لعبة افتراضية نستخدم صيغة الشرط المخففة (I'd choose = I would choose) بدلاً من المستقبل المؤكد (I'll choose).",
    speech: "For me, I need a new apartment, so I would choose the first one."
  },
  {
    id: "clinic15_5",
    incorrect: "I like reading also.",
    struck: "reading also",
    correct: "I also like reading. / I like reading too.",
    teacherPen: "also like reading / ... too",
    category: "Adverb Position in Spoken English (Smartboard 4)",
    rule: "In natural English, the adverb 'also' belongs in the mid-position directly before the main verb: 'I also like reading.' If you want to put an addition word at the very end of a sentence, use 'too' or 'as well': 'I like reading too.' Avoid ending clauses with 'also'.",
    arRule: "موقع الظرف also في الجملة الإنجليزية: يوضع also في المنتصف قبل الفعل الأساسي (I also like reading). وإذا أردت وضع كلمة تدل على الإضافة في نهاية الجملة استخدم too أو as well وليس also.",
    speech: "I also like reading in my spare time."
  }
];

const SESSION_15_PRONUNCIATION_LAB = [
  {
    category: "Sentence Stress & Weak Forms /ə/ (Schwa) in Social Questions",
    rule: "In conversational English, content words (nouns, main verbs) carry strong stress and pitch peaks, while grammatical function words (auxiliary verbs, pronouns, prepositions) reduce to the weak neutral vowel /ə/ (schwa). This creates the natural rhythm of English and prevents speech from sounding stiff.",
    items: [
      {
        question: "How are things with you?",
        ipa: "/haʊ ə ˈθɪŋz wɪð juː/",
        stressPattern: "Strong stress on THI-ngs; 'are' weakens to short /ə/.",
        arNote: "كلمة are تتحول إلى صوت شوا ضعيف /ə/ بينما يقع النبر الأقوى على كلمة things."
      },
      {
        question: "How do you do?",
        ipa: "/haʊ djuː ˈduː/",
        stressPattern: "Rhythmical formal beat: first 'do' contracts to /d/, final 'DO' takes main stress.",
        arNote: "في التحية الرسمية يندمج do you إلى /djuː/ وينصب النبر الأساسي على الفعل الأخير DO."
      },
      {
        question: "Where do you come from?",
        ipa: "/ˈweə də juː ˈkʌm frəm/",
        stressPattern: "Peaks on WHERE and COME; 'from' reduces to weak /frəm/.",
        arNote: "النبر القوي على أداة الاستفهام WHERE وفعل COME بينما تنطق from بصوت الشوا الخفيف /frəm/."
      },
      {
        question: "Is this your first visit to Singapore?",
        ipa: "/ɪz ðɪs jɔː ˈfɜːst ˈvɪz.ɪt tə ˈsɪŋ.ə.pɔː/",
        stressPattern: "Peaks on FIRST, VI-sit, and SIN-gapore; 'to' reduces to /tə/.",
        arNote: "حرف الجر to يتحول لصوت شوا خفيف /tə/ والنبر الأساسي على first و visit و Singapore."
      }
    ]
  },
  {
    category: "Intonation Patterns: Initiating vs Closing Conversations",
    rule: "Initiating phrases and open questions typically end in a lively, friendly rising or fall-rise pitch to encourage the partner to talk. Closing signals ('Well, my lunch break is almost over') begin with a high 'Well...' followed by a gentle, conclusive downward fall indicating that the speaker is politely taking their leave.",
    items: [
      {
        phrase: "Hi! My name's Jon. What's yours? ↗",
        type: "Open Icebreaker (Friendly Rising Pitch)",
        note: "High pitch on 'Jon', rising inflection on 'yours?' to invite immediate reply."
      },
      {
        phrase: "Well, my lunch break is almost over. ↘",
        type: "Polite Closer Signal (Definitive Falling Pitch)",
        note: "Stretched 'Well...' signals departure intention, followed by descending pitch."
      },
      {
        phrase: "It was a pleasure to speak to you! ↘",
        type: "Warm Professional Farewell (Warm Falling Pitch)",
        note: "Sincere descending warmth leaving a memorable final impression."
      }
    ]
  }
];

const SESSION_15_NOTEBOOK_PAGES = [
  {
    id: "s15_note_starting_ending",
    title: "Smartboard Slide 1: Starting & Ending Conversations",
    imgUrl: "./assets/images/session15_board_starting_ending.jpg",
    tag: "Authentic Smartboard Capture",
    summary: "Teacher classroom board listing key functional phrases under two distinct columns: Starting vs Ending a conversation.",
    fullTranscription: `[SMARTBOARD SLIDE: CONVERSATION SKILLS]
Left Column: STARTING
• Hi!
• How was your day?
• Morning?
• What's up?
• How are you doing?

Right Column: ENDING
• Nice to see you!
• Have a nice day!
• See you later
• It was a pleasure to speak to you
• Well, my lunch break is almost over

Classroom pedagogical note: Notice how "Well, my lunch break is almost over" acts as an indirect, polite signaling device before saying "See you later".`
  },
  {
    id: "s15_note_additions",
    title: "Smartboard Slide 2: Conversational Additions & Slang Registers",
    imgUrl: "./assets/images/session15_board_starting_ending_additions.jpg",
    tag: "Teacher Live Additions",
    summary: "Interactive smartboard with student and teacher live pen contributions showing informal alternatives and contextual remarks.",
    fullTranscription: `[SMARTBOARD SLIDE WITH LIVE PEN CONTRIBUTIONS]
Left Column: STARTING (Live Red & Purple Additions)
• What's good? (Colloquial slang alternative to "What's up?")
• Look at those... (Contextual remark about the immediate surroundings / food / weather)
• Hi, you're [Name], aren't you? (Tag question opener when recognizing someone)

Right Column: ENDING (Live Additions)
• Well, my lunch break is almost over.
• Catch you later!
• Have a great weekend!

Teacher note on board: Always match the formality of your opener to the social setting (casual party vs corporate meeting).`
  },
  {
    id: "s15_note_dilemmas",
    title: "Smartboard Slide 3: Would You Rather Dilemmas (Questions 17–21)",
    imgUrl: "./assets/images/session15_board_dilemmas_would_you_rather.jpg",
    tag: "Interactive Dilemma Slide",
    summary: "British Council classroom slide with 5 provocative hypothetical decision choices used for speaking fluency debate.",
    fullTranscription: `[SMARTBOARD SLIDE: WOULD YOU RATHER...]
17. Get £1,000 today - OR - Get £100 every month for life
18. Live in a mansion - OR - Travel around the world
19. Work 3 days a week - OR - Work 5 days a week with shorter hours
20. Have a dream job with average pay - OR - Have a boring job with amazing pay
21. Buy everything you want - OR - Never have to work again

Classroom task: Work with a partner. Choose one option for each dilemma, justify your choice using Second Conditional grammar ("If I chose... I would..."), and debate your partner's counter-arguments.`
  },
  {
    id: "s15_note_language_feedback",
    title: "Smartboard Slide 4: Teacher Live Language Feedback & Corrections Clinic",
    imgUrl: "./assets/images/session15_board_language_feedback.jpg",
    tag: "Error Analysis & Grammar Clinic",
    summary: "Authentic teacher whiteboard capturing real student speech errors, strikethroughs, and grammatical corrections.",
    fullTranscription: `[TEACHER LIVE LANGUAGE FEEDBACK BOARD]
1. "If you have the ability not to work, you will not work."
   Teacher correction in purple: struck through have ➔ had, struck through will ➔ would.
   Rule: Second Conditional for hypothetical dilemmas.

2. "Work it's just not about money."
   Teacher correction in red: crossed out "it's" ➔ "Work is just not about money."
   Rule: Do not duplicate noun subject with pronoun "it".

3. "You will get use to it."
   Teacher correction in purple: corrected to "get used to it" (-ed ending).
   Rule: Fixed idiom: get used to + noun/pronoun.

4. "For me, I need new apartment, so I'll choose the first one."
   Teacher correction in red: inserted article "a" ("a new apartment") and changed "I'll" to "I'd choose".

5. "I like reading also"
   Teacher correction: repositioned to "I also like reading" or "I like reading too".`
  }
];


/* ==========================================================================
   SESSION 16: IMPROVING CONVERSATION SKILLS: AVOIDING AWKWARD SILENCES
   Authentic Handout ARS_B1_01_I029CEU_HO_v1.0 & Smartboards 1–5
   ========================================================================== */

const VOCAB_SESSION_16 = [
    {
    id: 1601,
    word: "awkward silence",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈɔːk.wəd ˈsaɪ.ləns/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "an uncomfortable pause when nobody knows what to say in conversation.",
    b1Explain: "an uncomfortable pause when nobody knows what to say in conversation.",
    opposite: "flowing dialogue",
    arWord: "صمت محرج / سكون ثقيل يقطع تدفق الحديث",
    arMeaning: "صمت محرج / وقفة غير مريحة في المحادثة",
    sentence: "There was an awkward silence after the speaker finished his joke, so I asked a question.",
    def: "an uncomfortable pause when nobody knows what to say in conversation.",
    context: "There was an awkward silence after the speaker finished his joke, so I asked a question.",
    ar: "صمت محرج / وقفة غير مريحة في المحادثة",
    phonetic: "/ˈɔːk.wəd ˈsaɪ.ləns/",
    partOfSpeech: "noun"
  },
    {
    id: 1602,
    word: "small talk",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈsmɔːl ˌtɔːk/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "polite, informal conversation about light, everyday topics like the weather.",
    b1Explain: "polite, informal conversation about light, everyday topics like the weather.",
    opposite: "deep discussion",
    arWord: "دردشة خفيفة / حديث عابر لتجاوز الصمت",
    arMeaning: "أحاديث ودية قصيرة وغير رسمية / دردشة عامة",
    sentence: "At business conferences, making polite small talk with strangers helps you establish new connections.",
    def: "polite, informal conversation about light, everyday topics like the weather.",
    context: "At business conferences, making polite small talk with strangers helps you establish new connections.",
    ar: "أحاديث ودية قصيرة وغير رسمية / دردشة عامة",
    phonetic: "/ˈsmɔːl ˌtɔːk/",
    partOfSpeech: "noun"
  },
    {
    id: 1603,
    word: "break the ice",
    pos: "idiom",
    cambridgeLevel: "B1",
    pronunciation: "/breɪk ðiː aɪs/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "to say or do something that helps people feel relaxed together.",
    b1Explain: "to say or do something that helps people feel relaxed together.",
    opposite: "create tension",
    arWord: "يكسر الجليد / يزيل الحرج والتوتر في بداية اللقاء",
    arMeaning: "يكسر الجليد / يزيل التوتر الأولي بين الغرباء",
    sentence: "She offered some appetizers to break the ice before starting the marketing presentation.",
    def: "to say or do something that helps people feel relaxed together.",
    context: "She offered some appetizers to break the ice before starting the marketing presentation.",
    ar: "يكسر الجليد / يزيل التوتر الأولي بين الغرباء",
    phonetic: "/breɪk ðiː aɪs/",
    partOfSpeech: "idiom"
  },
    {
    id: 1604,
    word: "tag question",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtæɡ ˌkwes.tʃən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a short question at the end of a sentence to check information.",
    b1Explain: "a short question at the end of a sentence to check information.",
    opposite: "direct question",
    arWord: "سؤال ذيلي توكيدي (مثل: أليس كذلك؟)",
    arMeaning: "سؤال ذيلي / سؤال قصير في نهاية الجملة للتأكيد",
    sentence: "You are a friend of Anna's, aren't you? That is a very friendly tag question.",
    def: "a short question at the end of a sentence to check information.",
    context: "You are a friend of Anna's, aren't you? That is a very friendly tag question.",
    ar: "سؤال ذيلي / سؤال قصير في نهاية الجملة للتأكيد",
    phonetic: "/ˈtæɡ ˌkwes.tʃən/",
    partOfSpeech: "noun"
  },
    {
    id: 1605,
    word: "intonation",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌɪn.təˈneɪ.ʃən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "the rise and fall of the pitch of your voice when speaking.",
    b1Explain: "the rise and fall of the pitch of your voice when speaking.",
    opposite: "monotone voice",
    arWord: "تنغيم صوتي / ارتفاع وانخفاض نبرة الصوت في الجمل",
    arMeaning: "نبرة الصوت والتنغيم صعوداً وهبوطاً أثناء الكلام",
    sentence: "When checking known information with a tag question, your intonation normally falls at the end.",
    def: "the rise and fall of the pitch of your voice when speaking.",
    context: "When checking known information with a tag question, your intonation normally falls at the end.",
    ar: "نبرة الصوت والتنغيم صعوداً وهبوطاً أثناء الكلام",
    phonetic: "/ˌɪn.təˈneɪ.ʃən/",
    partOfSpeech: "noun"
  },
    {
    id: 1606,
    word: "mingle",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ˈmɪŋ.ɡəl/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "to move around and talk to different people at a social gathering.",
    b1Explain: "to move around and talk to different people at a social gathering.",
    opposite: "isolate yourself",
    arWord: "يختلط بالناس / يندمج ويتنقل بين الضيوف في الحفل",
    arMeaning: "يختلط بالآخرين ويتجول للتحدث في الحفلات",
    sentence: "During the summer party, students were encouraged to mingle and find common interests.",
    def: "to move around and talk to different people at a social gathering.",
    context: "During the summer party, students were encouraged to mingle and find common interests.",
    ar: "يختلط بالآخرين ويتجول للتحدث في الحفلات",
    phonetic: "/ˈmɪŋ.ɡəl/",
    partOfSpeech: "verb"
  },
    {
    id: 1607,
    word: "put off",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/pʊt ɒf/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "to make someone dislike something or feel discouraged from doing it.",
    b1Explain: "to make someone dislike something or feel discouraged from doing it.",
    opposite: "attract",
    arWord: "ينفّر / يؤجل موعداً / يثير اشمئزازاً أو ضيقاً",
    arMeaning: "ينفر / يصرف الشخص عن الشيء أو يجعله يتردد",
    sentence: "People who complain constantly about work often put off others from having a long chat.",
    def: "to make someone dislike something or feel discouraged from doing it.",
    context: "People who complain constantly about work often put off others from having a long chat.",
    ar: "ينفر / يصرف الشخص عن الشيء أو يجعله يتردد",
    phonetic: "/pʊt ɒf/",
    partOfSpeech: "phrasal verb"
  },
    {
    id: 1608,
    word: "icebreaker",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈaɪsˌbreɪ.kər/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a question or remark that starts a friendly conversation with a stranger.",
    b1Explain: "a question or remark that starts a friendly conversation with a stranger.",
    opposite: "conversation killer",
    arWord: "نشاط تعارفي كاسر للجليد / عبارة لبدء الود",
    arMeaning: "عبارة أو سؤال افتتاحي لبدء الحديث مع شخص جديد",
    sentence: "Asking about the food or venue is a classic icebreaker at any evening party.",
    def: "a question or remark that starts a friendly conversation with a stranger.",
    context: "Asking about the food or venue is a classic icebreaker at any evening party.",
    ar: "عبارة أو سؤال افتتاحي لبدء الحديث مع شخص جديد",
    phonetic: "/ˈaɪsˌbreɪ.kər/",
    partOfSpeech: "noun"
  },
    {
    id: 1609,
    word: "reception",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈsep.ʃən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a formal social party to welcome guests, like after a wedding.",
    b1Explain: "a formal social party to welcome guests, like after a wedding.",
    opposite: "private departure",
    arWord: "حفل استقبال / مكتب الاستقبال والإرشاد",
    arMeaning: "حفل استقبال رسمي أو اجتماعي للترحيب بالضيوف",
    sentence: "Chris flew over to Italy specifically to attend Anna's wedding reception.",
    def: "a formal social party to welcome guests, like after a wedding.",
    context: "Chris flew over to Italy specifically to attend Anna's wedding reception.",
    ar: "حفل استقبال رسمي أو اجتماعي للترحيب بالضيوف",
    phonetic: "/rɪˈsep.ʃən/",
    partOfSpeech: "noun"
  },
    {
    id: 1610,
    word: "sales advisor",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈseɪlz ədˌvaɪ.zər/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a company worker who assists customers and gives advice about buying products.",
    b1Explain: "a company worker who assists customers and gives advice about buying products.",
    opposite: "customer",
    arWord: "مستشار مبيعات / مسؤول توجيه العملاء والشراء",
    arMeaning: "مستشار مبيعات / مسؤول تقديم المشورة للعملاء",
    sentence: "Dave explained that he works as a sales advisor for an international technology firm.",
    def: "a company worker who assists customers and gives advice about buying products.",
    context: "Dave explained that he works as a sales advisor for an international technology firm.",
    ar: "مستشار مبيعات / مسؤول تقديم المشورة للعملاء",
    phonetic: "/ˈseɪlz ədˌvaɪ.zər/",
    partOfSpeech: "noun"
  },
    {
    id: 1611,
    word: "public relations",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌpʌb.lɪk rɪˈleɪ.ʃənz/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "the business of presenting a positive image of an organization to people.",
    b1Explain: "the business of presenting a positive image of an organization to people.",
    opposite: "negative publicity",
    arWord: "علاقات عامة / بناء الصورة الذهنية والتواصل المجتمعي",
    arMeaning: "العلاقات العامة / بناء صورة إيجابية للمؤسسة",
    sentence: "Jane works in public relations, managing media announcements and corporate brand communications.",
    def: "the business of presenting a positive image of an organization to people.",
    context: "Jane works in public relations, managing media announcements and corporate brand communications.",
    ar: "العلاقات العامة / بناء صورة إيجابية للمؤسسة",
    phonetic: "/ˌpʌb.lɪk rɪˈleɪ.ʃənz/",
    partOfSpeech: "noun"
  },
    {
    id: 1612,
    word: "interruption",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌɪn.təˈrʌp.ʃən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "something that stops someone from speaking or continuing what they are doing.",
    b1Explain: "something that stops someone from speaking or continuing what they are doing.",
    opposite: "continuity",
    arWord: "مقاطعة للحديث / تشويش على المتكلم",
    arMeaning: "مقاطعة للحديث أو العمل",
    sentence: "Dave apologized for the sudden interruption when his mobile phone started ringing loudly.",
    def: "something that stops someone from speaking or continuing what they are doing.",
    context: "Dave apologized for the sudden interruption when his mobile phone started ringing loudly.",
    ar: "مقاطعة للحديث أو العمل",
    phonetic: "/ˌɪn.təˈrʌp.ʃən/",
    partOfSpeech: "noun"
  },
    {
    id: 1613,
    word: "dead air",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌded ˈeər/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "an unwanted period of silence during a talk or conversation.",
    b1Explain: "an unwanted period of silence during a talk or conversation.",
    opposite: "lively talk",
    arWord: "صمت لاغي ومحرج / توقف مريب للكلام",
    arMeaning: "فترة صمت مطبقة وغير مرغوبة في الحديث أو البث",
    sentence: "Good conversationalists use follow-up questions to eliminate dead air when meeting strangers.",
    def: "an unwanted period of silence during a talk or conversation.",
    context: "Good conversationalists use follow-up questions to eliminate dead air when meeting strangers.",
    ar: "فترة صمت مطبقة وغير مرغوبة في الحديث أو البث",
    phonetic: "/ˌded ˈeər/",
    partOfSpeech: "noun"
  },
    {
    id: 1614,
    word: "transition",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/trænˈzɪʃ.ən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a smooth change from one conversation topic or subject to another.",
    b1Explain: "a smooth change from one conversation topic or subject to another.",
    opposite: "abrupt stop",
    arWord: "انتقال سلس / تحول من موضوع حوار إلى آخر",
    arMeaning: "انتقال سلس من موضوع حديث إلى آخر",
    sentence: "Using phrases like 'By the way' allows a natural transition to a new topic.",
    def: "a smooth change from one conversation topic or subject to another.",
    context: "Using phrases like 'By the way' allows a natural transition to a new topic.",
    ar: "انتقال سلس من موضوع حديث إلى آخر",
    phonetic: "/trænˈzɪʃ.ən/",
    partOfSpeech: "noun"
  },
    {
    id: 1615,
    word: "floor holder",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/flɔːr ˈhəʊl.dər/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a phrase like well or anyway used to keep control of talking.",
    b1Explain: "a phrase like well or anyway used to keep control of talking.",
    opposite: "silent pause",
    arWord: "عبارة حفظ الدور في الكلام (مثل: حسناً، في الواقع)",
    arMeaning: "عبارة استبقاء للحديث مثل 'anyway' أو 'well' لمنع المقاطعة",
    sentence: "Words like 'Well' and 'Anyway' act as a floor holder while you decide what to say next.",
    def: "a phrase like well or anyway used to keep control of talking.",
    context: "Words like 'Well' and 'Anyway' act as a floor holder while you decide what to say next.",
    ar: "عبارة استبقاء للحديث مثل 'anyway' أو 'well' لمنع المقاطعة",
    phonetic: "/flɔːr ˈhəʊl.dər/",
    partOfSpeech: "noun"
  },
    {
    id: 1616,
    word: "mutual friend",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈmjuː.tʃu.əl frend/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a person who is a friend of two people who meet.",
    b1Explain: "a person who is a friend of two people who meet.",
    opposite: "total stranger",
    arWord: "صديق مشترك بين طرفين",
    arMeaning: "صديق مشترك بين طرفين التقيا",
    sentence: "Maria and Chris discovered they share a mutual friend named Anna from secondary school.",
    def: "a person who is a friend of two people who meet.",
    context: "Maria and Chris discovered they share a mutual friend named Anna from secondary school.",
    ar: "صديق مشترك بين طرفين التقيا",
    phonetic: "/ˈmjuː.tʃu.əl frend/",
    partOfSpeech: "noun"
  },
    {
    id: 1617,
    word: "closing signal",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkləʊ.zɪŋ ˈsɪɡ.nəl/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a polite sentence showing that you want to end a conversation.",
    b1Explain: "a polite sentence showing that you want to end a conversation.",
    opposite: "opening remark",
    arWord: "إشارة ختام الحديث / عبارة تمهيدية للاستئذان والرحيل",
    arMeaning: "إشارة ختامية مهذبة تدل على الرغبة في إنهاء الحديث",
    sentence: "'I'd better be getting on' is a very British closing signal when leaving a conference break.",
    def: "a polite sentence showing that you want to end a conversation.",
    context: "'I'd better be getting on' is a very British closing signal when leaving a conference break.",
    ar: "إشارة ختامية مهذبة تدل على الرغبة في إنهاء الحديث",
    phonetic: "/ˈkləʊ.zɪŋ ˈsɪɡ.nəl/",
    partOfSpeech: "noun"
  },
    {
    id: 1618,
    word: "farewell",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/feəˈwel/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "an expression or statement of good wishes when parting or leaving.",
    b1Explain: "an expression or statement of good wishes when parting or leaving.",
    opposite: "greeting",
    arWord: "وداع / توديع رسمي أو حار عند المغادرة",
    arMeaning: "توديع وداع / كلمات الوداع والتمنيات الطيبة",
    sentence: "They exchanged warm farewells and promised to stay in touch after the wedding.",
    def: "an expression or statement of good wishes when parting or leaving.",
    context: "They exchanged warm farewells and promised to stay in touch after the wedding.",
    ar: "توديع وداع / كلمات الوداع والتمنيات الطيبة",
    phonetic: "/feəˈwel/",
    partOfSpeech: "noun"
  },
    {
    id: 1619,
    word: "chit-chat",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtʃɪt.tʃæt/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "light, informal conversation about matters that are not very serious.",
    b1Explain: "light, informal conversation about matters that are not very serious.",
    opposite: "serious debate",
    arWord: "ثرثرة ودية / محادثة عفوية خفيفة للتسلية",
    arMeaning: "دردشة خفيفة وتبادل أحاديث بسيطة وغير رسمية",
    sentence: "We spent twenty minutes engaged in friendly chit-chat while waiting for the seminar to begin.",
    def: "light, informal conversation about matters that are not very serious.",
    context: "We spent twenty minutes engaged in friendly chit-chat while waiting for the seminar to begin.",
    ar: "دردشة خفيفة وتبادل أحاديث بسيطة وغير رسمية",
    phonetic: "/ˈtʃɪt.tʃæt/",
    partOfSpeech: "noun"
  },
    {
    id: 1620,
    word: "common ground",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌkɒm.ən ˈɡraʊnd/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "shared interests or opinions between people who are talking together.",
    b1Explain: "shared interests or opinions between people who are talking together.",
    opposite: "disagreement",
    arWord: "أرضية مشتركة / نقاط اهتمام واتفاق متطابقة",
    arMeaning: "أرضية مشتركة واهتمامات يتقاسمها الطرفان",
    sentence: "They found common ground quickly when they realized both had spent holidays travelling in Rome.",
    def: "shared interests or opinions between people who are talking together.",
    context: "They found common ground quickly when they realized both had spent holidays travelling in Rome.",
    ar: "أرضية مشتركة واهتمامات يتقاسمها الطرفان",
    phonetic: "/ˌkɒm.ən ˈɡraʊnd/",
    partOfSpeech: "noun"
  },
    {
    id: 1621,
    word: "hesitation",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌhez.ɪˈteɪ.ʃən/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a short pause before speaking or acting because you feel unsure.",
    b1Explain: "a short pause before speaking or acting because you feel unsure.",
    opposite: "readiness",
    arWord: "تردد / تلكؤ وتوقف قبل النطق أو القرار",
    arMeaning: "تردد / وقفة قصيرة قبل التحدث لعدم التأكد",
    sentence: "After a slight hesitation, Nick admitted that his new job in accounts was overwhelming.",
    def: "a short pause before speaking or acting because you feel unsure.",
    context: "After a slight hesitation, Nick admitted that his new job in accounts was overwhelming.",
    ar: "تردد / وقفة قصيرة قبل التحدث لعدم التأكد",
    phonetic: "/ˌhez.ɪˈteɪ.ʃən/",
    partOfSpeech: "noun"
  },
    {
    id: 1622,
    word: "rapport",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ræpˈɔːr/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a friendly relationship where people understand each other and communicate well.",
    b1Explain: "a friendly relationship where people understand each other and communicate well.",
    opposite: "hostility",
    arWord: "ألفة وانسجام / تفاهم وروابط ودية سريعة",
    arMeaning: "وفاق وانسجام وتفاهم عميق بين طرفين",
    sentence: "Dave tried to build positive rapport with Jane before pitching his marketing proposal.",
    def: "a friendly relationship where people understand each other and communicate well.",
    context: "Dave tried to build positive rapport with Jane before pitching his marketing proposal.",
    ar: "وفاق وانسجام وتفاهم عميق بين طرفين",
    phonetic: "/ræpˈɔːr/",
    partOfSpeech: "noun"
  },
    {
    id: 1623,
    word: "reciprocal",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈsɪp.rə.kəl/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "an action or feeling that is given and received equally by both.",
    b1Explain: "an action or feeling that is given and received equally by both.",
    opposite: "one-sided",
    arWord: "متبادل / ثنائي ومتكافئ بين الطرفين",
    arMeaning: "متبادل / فعل أو شعور يقدمه ويتبادله الطرفان بالتساوي",
    sentence: "Healthy social dialogue requires reciprocal questioning rather than one person talking non-stop.",
    def: "an action or feeling that is given and received equally by both.",
    context: "Healthy social dialogue requires reciprocal questioning rather than one person talking non-stop.",
    ar: "متبادل / فعل أو شعور يقدمه ويتبادله الطرفان بالتساوي",
    phonetic: "/rɪˈsɪp.rə.kəl/",
    partOfSpeech: "adj"
  },
    {
    id: 1624,
    word: "social etiquette",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌsəʊ.ʃəl ˈet.ɪ.ket/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "polite rules of behavior expected in social and professional situations.",
    b1Explain: "polite rules of behavior expected in social and professional situations.",
    opposite: "rudeness",
    arWord: "آداب اللباقة الاجتماعية / بروتوكول المعاملات الراقية",
    arMeaning: "آداب اللياقة الاجتماعية وقواعد السلوك المهذب",
    sentence: "Social etiquette requires excusing yourself politely before answering an urgent phone call.",
    def: "polite rules of behavior expected in social and professional situations.",
    context: "Social etiquette requires excusing yourself politely before answering an urgent phone call.",
    ar: "آداب اللياقة الاجتماعية وقواعد السلوك المهذب",
    phonetic: "/ˌsəʊ.ʃəl ˈet.ɪ.ket/",
    partOfSpeech: "noun"
  },
    {
    id: 1625,
    word: "turn-taking",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtɜːn ˌteɪ.kɪŋ/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "the natural order in which people speak and listen during dialogue.",
    b1Explain: "the natural order in which people speak and listen during dialogue.",
    opposite: "monologue",
    arWord: "تبادل الأدوار في الحديث / احترام دور كل متحدث",
    arMeaning: "تبادل الأدوار بالتناوب بين المتحدث والمستمع",
    sentence: "Smooth turn-taking ensures both speakers have an equal opportunity to express their opinions.",
    def: "the natural order in which people speak and listen during dialogue.",
    context: "Smooth turn-taking ensures both speakers have an equal opportunity to express their opinions.",
    ar: "تبادل الأدوار بالتناوب بين المتحدث والمستمع",
    phonetic: "/ˈtɜːn ˌteɪ.kɪŋ/",
    partOfSpeech: "noun"
  },
    {
    id: 1626,
    word: "tone of voice",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌtəʊn əv ˈvɔɪs/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "the sound and feeling in your voice that shows your attitude.",
    b1Explain: "the sound and feeling in your voice that shows your attitude.",
    opposite: "expressionless voice",
    arWord: "نغمة الصوت / حرارة ونبرة المتكلم",
    arMeaning: "نبرة الصوت الدالة على المشاعر والموقف النفسي",
    sentence: "A warm and inviting tone of voice helps strangers feel comfortable talking with you.",
    def: "the sound and feeling in your voice that shows your attitude.",
    context: "A warm and inviting tone of voice helps strangers feel comfortable talking with you.",
    ar: "نبرة الصوت الدالة على المشاعر والموقف النفسي",
    phonetic: "/ˌtəʊn əv ˈvɔɪs/",
    partOfSpeech: "noun"
  },
    {
    id: 1627,
    word: "compliment",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkɒm.plɪ.mənt/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "a polite remark saying something nice or praising another person.",
    b1Explain: "a polite remark saying something nice or praising another person.",
    opposite: "insult",
    arWord: "مجاملة رقيقة / يمتدح ويثني على شخص أو مظهره",
    arMeaning: "مجاملة لطيفة وثناء على مظهر أو إنجاز الآخرين",
    sentence: "Jon paid Blanca a charming compliment by saying that she has a very lovely name.",
    def: "a polite remark saying something nice or praising another person.",
    context: "Jon paid Blanca a charming compliment by saying that she has a very lovely name.",
    ar: "مجاملة لطيفة وثناء على مظهر أو إنجاز الآخرين",
    phonetic: "/ˈkɒm.plɪ.mənt/",
    partOfSpeech: "noun"
  },
    {
    id: 1628,
    word: "departure",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/dɪˈpɑː.tʃər/",
    citation: "Handout ARS_B1_01 & Smartboard",
    definition: "the act of leaving a conversation, meeting, or social event politely.",
    b1Explain: "the act of leaving a conversation, meeting, or social event politely.",
    opposite: "arrival",
    arWord: "رحيل / انصراف ومغادرة المكان أو السفر",
    arMeaning: "مغادرة / انصراف مهذب من محادثة أو مناسبة",
    sentence: "Julia made a quick but graceful departure when Nick started complaining about his long hours.",
    def: "the act of leaving a conversation, meeting, or social event politely.",
    context: "Julia made a quick but graceful departure when Nick started complaining about his long hours.",
    ar: "مغادرة / انصراف مهذب من محادثة أو مناسبة",
    phonetic: "/dɪˈpɑː.tʃər/",
    partOfSpeech: "noun"
  }
];

const SESSION_16_LEAD_IN = {
  questions: [
    {
      num: 1,
      q: "Do you remember a time when you were at a party or a conference where you didn’t know many people? What happened?",
      b1PartnerModel: "Yes! Last summer I attended an international software conference in London. At first, I felt quite shy because everyone seemed to already know colleagues. But during the morning coffee break, I walked up to the refreshments table and commented on how great the espresso was. That simple comment sparked an hour-long chat with a designer from Berlin!",
      audioText: "Last summer I attended a software conference in London. I felt shy, but at the coffee break, I made a comment about the espresso. That sparked an hour-long chat with a designer from Berlin."
    },
    {
      num: 2,
      q: "How easy is it for you to make conversation with people you don’t know? Does it make a difference what language you are speaking?",
      b1PartnerModel: "It depends a lot on the atmosphere. In my native language, I find it quite effortless because idioms come naturally. However, when speaking English, I sometimes pause to find the exact vocabulary. But I noticed that friendly eye contact, active listening, and a warm smile matter much more than perfect grammar.",
      audioText: "In my native language it is effortless, but in English I sometimes hesitate for words. However, friendly eye contact and active listening matter far more than grammar."
    },
    {
      num: 3,
      q: "What are good ways of starting a conversation with someone you don’t know well?",
      b1PartnerModel: "The most natural way is making an observational remark about your shared environment, like 'It's a fantastic venue, isn't it?' or asking a polite contextual question like 'Have you seen the main speaker before?'. Asking how they know the host is another infallible opener.",
      audioText: "The most natural way is making an observational remark about your shared environment, or asking a polite contextual question like how they know the host."
    },
    {
      num: 4,
      q: "What are good topics to talk about with someone you don’t know well?",
      b1PartnerModel: "Safe, neutral topics are ideal for small talk: recent travel experiences, the food and drinks at the event, local city recommendations, upcoming holidays, and movies or podcasts. These topics allow everyone to participate without controversy.",
      audioText: "Safe, neutral topics are ideal: recent travel, the food and venue, local recommendations, holidays, and movies. These avoid controversy."
    },
    {
      num: 5,
      q: "What questions would you never ask someone you don’t know well?",
      b1PartnerModel: "In British social etiquette, you should strictly avoid asking personal questions about how much money they earn, their political beliefs, marital status, religion, or why they do not have children. Such topics can make people feel very uncomfortable.",
      audioText: "In social etiquette, avoid personal questions about salary, politics, marital status, or religion. These make strangers feel uncomfortable."
    },
    {
      num: 6,
      q: "What makes you want to talk to someone again? What puts you off speaking to someone again?",
      b1PartnerModel: "I want to speak again with people who show genuine curiosity, practice reciprocal turn-taking, and smile warmly. On the contrary, what puts me off is someone who complains non-stop, dominates the dialogue without listening, or constantly glances around the room while you are speaking.",
      audioText: "I want to talk again with people who show genuine curiosity and listen. What puts me off is someone who complains non-stop or dominates the conversation."
    }
  ],
  questionFormsExercise: [
    {
      num: 1,
      prompt: "___ you enjoying the party?",
      answer: "Are",
      options: ["Are", "Have", "Do", "Was"],
      type: "Present Continuous Question"
    },
    {
      num: 2,
      prompt: "___ you lived around here for long?",
      answer: "Have",
      options: ["Have", "Did", "Are", "Do"],
      type: "Present Perfect Question (Duration)"
    },
    {
      num: 3,
      prompt: "What ___ you do for a living?",
      answer: "do",
      options: ["do", "are", "have", "did"],
      type: "Present Simple Question (Profession)"
    },
    {
      num: 4,
      prompt: "___ this your first visit to Amsterdam?",
      answer: "Is",
      options: ["Is", "Was", "Are", "Did"],
      type: "Present Simple with 'to be'"
    },
    {
      num: 5,
      prompt: "How ___ your flight?",
      answer: "was",
      options: ["was", "is", "did", "were"],
      type: "Past Simple Question (Experience)"
    },
    {
      num: 6,
      prompt: "Where ___ you go on holiday last year?",
      answer: "did",
      options: ["did", "have", "were", "do"],
      type: "Past Simple Question (Completed Travel)"
    }
  ]
};

const SESSION_16_DIALOGUES = [
  {
    num: 1,
    title: "Conversation 1: Maria & Chris",
    setting: "At a wedding party / reception",
    badge: "Wedding Reception • Social Opener",
    speakers: ["Maria", "Chris"],
    audioText: "Maria: Excuse me, could you pass me one of those? Chris: The tomato things? Maria: Yeah, thanks. Hey, you're a friend of Anna's, aren't you? Chris: Yes, we've known each other for years. We were at school together. Maria: Wow! And do you still live around here? Chris: No, I just came over for the wedding. I'm working in Italy at the moment. Maria: Oh, that sounds great. Chris: Yes, I really like it. Have you been there? Maria: Just once, to Rome. I loved it. Chris: Yes, it's a great city. And what about you, where do you...",
    lines: [
      { speaker: "Maria", text: "Excuse me, could you pass me one of those..." },
      { speaker: "Chris", text: "The tomato things?" },
      { speaker: "Maria", text: "Yeah ... thanks ... Hey, you’re a friend of Anna’s, aren’t you?" },
      { speaker: "Chris", text: "Yes, we’ve known each other for years. We were at school together." },
      { speaker: "Maria", text: "Wow! And do you still live around here?" },
      { speaker: "Chris", text: "No, I just came over for the wedding. I’m working in Italy at the moment." },
      { speaker: "Maria", text: "Oh, that sounds great." },
      { speaker: "Chris", text: "Yes, I really like it. Have you been there?" },
      { speaker: "Maria", text: "Just once, to Rome. I loved it." },
      { speaker: "Chris", text: "Yes, it’s a great city. And what about you, where do you..." }
    ],
    gapQuestion: "Hey, you’re a friend of Anna’s, [aren't you]?",
    keyFunctions: ["Passing food as icebreaker", "Tag question to confirm shared acquaintance", "Asking about living arrangements and travel"]
  },
  {
    num: 2,
    title: "Conversation 2: Dave & Jane",
    setting: "At a marketing conference",
    badge: "Business Conference • Professional Networking",
    speakers: ["Dave", "Jane"],
    audioText: "Dave: Hi, I'm Dave. Do you mind if I join you? Jane: Not at all. I'm Jane. Dave: You were in the marketing presentation this morning, weren't you? Jane: That's right. I thought it was quite interesting. Dave: Yes, he made some very good points. Jane: Anyway, what do you do, Dave? Dave: I'm a sales advisor. What about you? Jane: I'm in PR. I... Dave: Oh, that's my boss calling. If you'll excuse me I have to get that. Jane: Fine. Hopefully we'll get the chance to talk again later.",
    lines: [
      { speaker: "Dave", text: "Hi, I’m Dave. Do you mind if I join you?" },
      { speaker: "Jane", text: "Not at all. I’m Jane." },
      { speaker: "Dave", text: "You were in the marketing presentation this morning, weren’t you?" },
      { speaker: "Jane", text: "That’s right. I thought it was quite interesting." },
      { speaker: "Dave", text: "Yes, he made some very good points." },
      { speaker: "Jane", text: "Anyway, what do you do, Dave?" },
      { speaker: "Dave", text: "I’m a sales advisor. What about you?" },
      { speaker: "Jane", text: "I’m in PR. I ..." },
      { speaker: "Dave", text: "Oh, that’s my boss calling. If you’ll excuse me I have to get that." },
      { speaker: "Jane", text: "Fine. Hopefully we’ll get the chance to talk again later." }
    ],
    gapQuestion: "You were in the marketing presentation this morning, [weren't you]?",
    keyFunctions: ["Polite joining request", "Past simple tag question", "Topic pivot with 'Anyway'", "Graceful phone call departure"]
  },
  {
    num: 3,
    title: "Conversation 3: Jon & Blanca",
    setting: "At a house party",
    badge: "Social Party • Casual Icebreaker",
    speakers: ["Jon", "Blanca"],
    audioText: "Jon: It's a great party, isn't it? Blanca: Yeah, the foods great. Do you know many people here? Jon: Not really. What about you? Blanca: Me neither. I came with a friend of Fred's. Jon: My name's Jon by the way. Blanca: Blanca. Jon: That's a Spanish name isn't it? Blanca: Maybe, but there's no one Spanish in my family. I suppose my parents just liked the name. Jon: I see. It's a nice name anyway. Blanca: Look, It's time I was going and my friend's waiting for me. Jon: Ok. See you...",
    lines: [
      { speaker: "Jon", text: "It’s a great party, isn’t it?" },
      { speaker: "Blanca", text: "Yeah, the foods great. Do you know many people here?" },
      { speaker: "Jon", text: "Not really. What about you?" },
      { speaker: "Blanca", text: "Me neither. I came with a friend of Fred’s." },
      { speaker: "Jon", text: "My name’s Jon by the way." },
      { speaker: "Blanca", text: "Blanca." },
      { speaker: "Jon", text: "That’s a Spanish name isn’t it?" },
      { speaker: "Blanca", text: "Maybe, but there’s no one Spanish in my family. I suppose my parents just liked the name." },
      { speaker: "Jon", text: "I see. It’s a nice name anyway." },
      { speaker: "Blanca", text: "Look, It’s time I was going and my friend’s waiting for me." },
      { speaker: "Jon", text: "Ok. See you …" }
    ],
    gapQuestion: "That’s a Spanish name, [isn't it]?",
    keyFunctions: ["Party atmosphere tag opener", "Finding common unfamiliarity", "Introducing name mid-chat", "Polite departure excuse"]
  },
  {
    num: 4,
    title: "Conversation 4: Nick & Julia",
    setting: "At a company conference break",
    badge: "Company Conference • Break Mingle",
    speakers: ["Nick", "Julia"],
    audioText: "Nick: Well, it's been a busy day, hasn't it? Julia: Yes, but interesting. I don't think I know you, do I? Nick: Sorry, I'm Nick. Julia: Julia. Pleased to meet you. You haven't been with the company long, have you, Nick? Nick: No, I just joined last week. I'm working in the accounts department. Everyone seems quite friendly, but they're so busy all the time and I've got so much work. I've been working late every evening you know, and... Julia: Aha. Nick: ...and, well, I thought this conference would be a bit of a break, but there are such early starts and then... Julia: Well, nice to meet you, Nick. I'd better be getting on. Good luck with the job.",
    lines: [
      { speaker: "Nick", text: "Well, it’s been a busy day, hasn’t it?" },
      { speaker: "Julia", text: "Yes, but interesting. I don’t think I know you, do I?" },
      { speaker: "Nick", text: "Sorry, I’m Nick." },
      { speaker: "Julia", text: "Julia. Pleased to meet you. You haven’t been with the company long, have you, Nick?" },
      { speaker: "Nick", text: "No, I just joined last week. I’m working in the accounts department. Everyone seems quite friendly, but they’re so busy all the time and I’ve got so much work. I’ve been working late every evening you know, and …" },
      { speaker: "Julia", text: "Aha." },
      { speaker: "Nick", text: "… and, well, I thought this conference would be a bit of a break, but there are such early starts and then …" },
      { speaker: "Julia", text: "Well, nice to meet you, Nick. I’d better be getting on. Good luck with the job." }
    ],
    gapQuestion: "You haven’t been with the company long, [have you]?",
    keyFunctions: ["Shared fatigue tag question", "Negative tag with positive meaning", "Complaining puts off partner", "Prompt exit signal: 'I'd better be getting on'"]
  }
];

const SESSION_16_SMARTBOARD_MATCHING = [
  {
    id: "s16_m1",
    phrase: "Hello, you work in the café, don't you?",
    category: "Starting a conversation",
    arNote: "بدء محادثة باستخدام سؤال ذيلي للتعرف على شخص مألوف"
  },
  {
    id: "s16_m2",
    phrase: "Let me give you my card.",
    category: "Closing a conversation",
    arNote: "إنهاء المحادثة بتبادل بطاقات العمل للتواصل المستقبلي"
  },
  {
    id: "s16_m3",
    phrase: "It was very nice meeting you.",
    category: "Closing a conversation",
    arNote: "عبارة ختامية مهذبة تدل على سرور اللقاء قبل المغادرة"
  },
  {
    id: "s16_m4",
    phrase: "By the way ...",
    category: "Changing topic",
    arNote: "أداة انتقال شائعة لتغيير الموضوع بطريقة طبيعية"
  },
  {
    id: "s16_m5",
    phrase: "Okay, enjoy the rest of the conference.",
    category: "Closing a conversation",
    arNote: "توديع مهذب وختام للمحادثة في المؤتمرات المهنية"
  },
  {
    id: "s16_m6",
    phrase: "Hi, I think we met at Martin's party.",
    category: "Starting a conversation",
    arNote: "افتتاحية كسر الجليد بالإشارة إلى لقاء سابق أو مناسبة مشتركة"
  },
  {
    id: "s16_m7",
    phrase: "Excuse me, could you pass me one of those...?",
    category: "Starting a conversation",
    arNote: "طلب شيء من البيئة المحيطة كطريقة عفوية لبدء الحديث"
  },
  {
    id: "s16_m8",
    phrase: "Hi, I'm Dave. Do you mind if I join you?",
    category: "Starting a conversation",
    arNote: "افتتاحية مهذبة للانضمام إلى طاولة أو مجموعة جديدة"
  },
  {
    id: "s16_m9",
    phrase: "Anyway, what do you do, Dave?",
    category: "Changing topic",
    arNote: "استخدام anyway لإعادة توجيه الحديث والسؤال عن الوظيفة"
  },
  {
    id: "s16_m10",
    phrase: "If you'll excuse me, I have to get that.",
    category: "Closing a conversation",
    arNote: "اعتذار مؤقت أو إنهاء الحديث للرد على مكالمة هاتفية"
  },
  {
    id: "s16_m11",
    phrase: "It's time I was going and my friend's waiting for me.",
    category: "Closing a conversation",
    arNote: "إشارة ختامية تدل على ضيق الوقت وانتظار صديق"
  },
  {
    id: "s16_m12",
    phrase: "I'd better be getting on. Good luck with the job.",
    category: "Closing a conversation",
    arNote: "إنهاء الحديث بلباقة لتجنب الاستماع إلى الشكاوى المتكررة"
  }
];

const SESSION_16_VOCAB_GROUPS = [
  {
    title: "1. Conversational Openers & Social Icebreakers",
    badge: "Classroom Openers & Meeting New People",
    icon: "🤝",
    desc: "Key phrases and strategies to initiate interactions gracefully with strangers in social and casual settings without awkward hesitation.",
    words: ["mingle", "icebreaker", "small talk", "break the ice", "compliment", "common ground", "mutual friend"]
  },
  {
    title: "2. Question Tags & Auxiliary Grammar",
    badge: "Smartboard Slides 3 & 4 • Intonation Mechanics",
    icon: "❓",
    desc: "Grammatical question tags and vocal pitch contours used to seek agreement, verify shared background, and keep conversation flowing effortlessly.",
    words: ["tag question", "intonation", "tone of voice", "turn-taking", "floor holder", "hesitation", "reciprocal"]
  },
  {
    title: "3. Workplace & Professional Networking",
    badge: "Marketing Conference & Accounts Department Context",
    icon: "💼",
    desc: "Vocabulary related to business presentations, conference coffee breaks, job roles, handling disruptions, and professional social etiquette.",
    words: ["sales advisor", "public relations", "reception", "interruption", "social etiquette", "dead air", "awkward silence"]
  },
  {
    title: "4. Smooth Transitions & Polite Partings",
    badge: "Handout Page 3 • Closing Signals & Goodbyes",
    icon: "👋",
    desc: "Strategic phrases for changing subjects naturally, holding the floor, signaling departure, and wrapping up conversations pleasantly.",
    words: ["transition", "chit-chat", "rapport", "put off", "closing signal", "farewell", "departure"]
  }
];

const SESSION_16_QUESTION_TAGS_LAB = {
  rules: [
    {
      title: "Rule 1: Auxiliary Reversal Pattern",
      content: "Positive statement (+) requires a Negative tag (-): 'You are a friend of Anna\\'s, aren\\'t you?'\\nNegative statement (-) requires a Positive tag (+): 'You aren\\'t from around here, are you?'"
    },
    {
      title: "Rule 2: Falling vs. Rising Intonation",
      content: "Falling intonation (↘): Used when checking information you already believe to be true or expecting agreement. The voice dips at the end.\\nRising intonation (↗): Used when you genuinely do not know the answer and are asking a real question."
    },
    {
      title: "Rule 3: Pronoun Matching",
      content: "The subject of the tag must always be a personal pronoun matching the sentence subject: 'This cake is delicious, isn't it?' ('This cake' -> 'it'). 'He always throws great parties, doesn't he?'"
    }
  ],
  practiceItems: [
    {
      id: "qt_1",
      statement: "This cake’s delicious,",
      tag: "isn't it?",
      full: "This cake's delicious, isn't it?",
      intonation: "Falling ↘ (Speaker expects agreement; both are eating the cake)",
      expectedReply: "Yes, it is! The chocolate icing is wonderful."
    },
    {
      id: "qt_2",
      statement: "We met at the conference last year,",
      tag: "didn't we?",
      full: "We met at the conference last year, didn't we?",
      intonation: "Falling ↘ (Speaker is 90% sure and checking recognition)",
      expectedReply: "Yes, in Berlin! It's great to see you again."
    },
    {
      id: "qt_3",
      statement: "The weather wasn’t very good at the weekend,",
      tag: "was it?",
      full: "The weather wasn't very good at the weekend, was it?",
      intonation: "Falling ↘ (Checking shared experience of bad weather)",
      expectedReply: "No, it rained non-stop all Sunday."
    },
    {
      id: "qt_4",
      statement: "You went to university with Ally,",
      tag: "didn't you?",
      full: "You went to university with Ally, didn't you?",
      intonation: "Falling ↘ (Checking known fact to open conversation)",
      expectedReply: "That's right, we shared a flat during our second year."
    },
    {
      id: "qt_5",
      statement: "You aren’t from around here,",
      tag: "are you?",
      full: "You aren't from around here, are you?",
      intonation: "Slight rise ↗ / fall ↘ (Friendly curiosity about hometown)",
      expectedReply: "No, I just relocated from Edinburgh last month."
    },
    {
      id: "qt_6",
      statement: "It’s a fantastic film,",
      tag: "isn't it?",
      full: "It's a fantastic film, isn't it?",
      intonation: "Falling ↘ (Sharing an enthusiastic opinion)",
      expectedReply: "Absolutely! The cinematography was incredible."
    },
    {
      id: "qt_7",
      statement: "He always throws great parties,",
      tag: "doesn't he?",
      full: "He always throws great parties, doesn't he?",
      intonation: "Falling ↘ (Social affirmation among guests)",
      expectedReply: "He really does; the music and food are always spot-on."
    },
    {
      id: "qt_8",
      statement: "It’s been a lovely week,",
      tag: "hasn't it?",
      full: "It's been a lovely week, hasn't it?",
      intonation: "Falling ↘ (Classic British weather/time opener)",
      expectedReply: "Yes, so refreshing after all the rain last month."
    }
  ]
};

const SESSION_16_DISCUSSION_LAB = [
  {
    num: 1,
    title: "Prompt 1: The School Summer Party Mingle (Handout p. 3 Ex 5)",
    scenario: "You are attending your English school's summer party. Mingle with fellow students from different classes. Find at least three things you have in common.",
    modelSpeech: "Hello there! It's a wonderful evening for a garden party, isn't it? My name is Tariq from the upper-intermediate group. I noticed you were talking about weekend hikes earlier—do you enjoy outdoor trekking? Me too! In fact, I went up to the national park last weekend. How long have you been studying English here? Oh, six months? So have I! We should definitely organize a group hike with our classmates before the term ends.",
    audioText: "Hello there! It's a wonderful evening for a garden party, isn't it? My name is Tariq. I noticed you were talking about weekend hikes—do you enjoy trekking? Me too! How long have you been studying English here? So have I! We should definitely organize a group hike.",
    keyLexisUsed: ["mingle", "common ground", "tag question", "small talk", "reciprocal"]
  },
  {
    num: 2,
    title: "Prompt 2: Conference Coffee Break Networking (Handout p. 3 Ex 3)",
    scenario: "Roleplay: You are at an international industry conference during a fifteen-minute coffee break. Approach someone standing alone, establish professional rapport, and close politely with a business card exchange.",
    modelSpeech: "Excuse me, do you mind if I take the chair next to you? It's been quite an intense morning, hasn't it? My name is Sarah, and I work in public relations for GreenTech Solutions. That keynote on renewable supply chains was thought-provoking, wasn't it? What line of work are you in? Oh, sales advisor in industrial logistics? That sounds fascinating. Look, my phone indicates the next workshop is starting in two minutes. Let me give you my card. Hopefully we'll get the chance to talk again later!",
    audioText: "Excuse me, do you mind if I take the chair next to you? It's been an intense morning, hasn't it? My name is Sarah. That keynote was thought-provoking. What line of work are you in? Let me give you my card. Hopefully we will talk again later!",
    keyLexisUsed: ["public relations", "sales advisor", "tag question", "closing signal", "farewell"]
  },
  {
    num: 3,
    title: "Prompt 3: Rescuing an Awkward Silence",
    scenario: "You are seated next to someone you have never met before at a formal wedding banquet. A heavy awkward silence suddenly falls over the table. How do you intervene?",
    modelSpeech: "Whenever an awkward silence strikes, I refuse to let panic set in. I usually look around for an immediate sensory hook—perhaps the floral centerpiece or the background music. I might say with a warm smile, 'That jazz band has been playing since five, haven't they? They are remarkably talented!' Then I transition smoothly into a reciprocal question: 'Are you into live music yourself?' This immediately breaks the tension and gives the other person an easy, pressure-free topic to talk about.",
    audioText: "Whenever an awkward silence strikes, I look around for an immediate sensory hook. I might say, 'That jazz band has been playing since five, haven't they?' Then I ask, 'Are you into live music yourself?' This breaks the tension.",
    keyLexisUsed: ["awkward silence", "dead air", "transition", "icebreaker", "tone of voice"]
  }
];

const SESSION_16_TEACHER_FEEDBACK = [
  {
    id: "clinic16_1",
    incorrect: "You are from Spain, no?",
    struck: "no?",
    correct: "You are from Spain, aren't you?",
    teacherPen: "aren't you? (Use auxiliary tag)",
    category: "Tag Question vs. Literal Translation Interference",
    rule: "Many languages (Spanish, Arabic, Italian) use a simple word like 'no?' or 'right?' at the end of statements. In standard English, natural conversational checking requires an auxiliary question tag matching the verb: 'You are... aren't you?'",
    arRule: "تداخل لغوي شائع: في اللغات الأخرى يقال 'صح؟' أو 'no؟' في نهاية الجملة. في الإنجليزية الطبيعية، نستخدم السؤال الذيلي المتطابق مع الفعل المساعد: You are ➔ aren't you.",
    speech: "You are from Spain, aren't you?"
  },
  {
    id: "clinic16_2",
    incorrect: "Excuse me, what did you said?",
    struck: "said",
    correct: "Excuse me, what did you say?",
    teacherPen: "say (bare infinitive after 'did')",
    category: "Double Past Tense Error in Questions",
    rule: "In Past Simple questions, the auxiliary 'did' already carries the past tense. The main verb must remain in its bare base form (infinitive without 'to'): 'What did you say?', not 'What did you said?'.",
    arRule: "خطأ تكرار صيغة الماضي: الفعل المساعد did يحمل زمن الماضي بالفعل، لذا يجب أن يعود الفعل الأساسي إلى مصدره المجرد: What did you say وليس said.",
    speech: "Excuse me, what did you say?"
  },
  {
    id: "clinic16_3",
    incorrect: "I am working here since two years.",
    struck: "am working ... since",
    correct: "I have been working here for two years.",
    teacherPen: "have been working ... for",
    category: "Present Perfect Continuous for Duration up to Now",
    rule: "To express an ongoing action that started in the past and continues into the present moment, use Present Perfect Continuous ('have been working'). Use 'for' for a length of time (two years) and 'since' for a starting point (since 2024).",
    arRule: "للتعبير عن عمل بدأ في الماضي ومستمر حتى الآن: نستخدم المضارع التام المستمر (have been working)، ونستخدم for للدلالة على المدة الزمنية (for two years) وليس since.",
    speech: "I have been working here for two years."
  },
  {
    id: "clinic16_4",
    incorrect: "By the way, what you do?",
    struck: "what you do?",
    correct: "By the way, what do you do?",
    teacherPen: "what do you do? (insert auxiliary 'do')",
    category: "Missing Auxiliary 'do' in Present Simple Wh-Questions",
    rule: "In English information questions (Wh-questions) in the Present Simple, the auxiliary verb 'do' or 'does' is mandatory between the question word and subject pronoun: 'What do you do for a living?'",
    arRule: "إغفال الفعل المساعد do: في أسئلة المضارع البسيط يجب وضع الفعل المساعد do قبل الفاعل: What do you do وليس What you do.",
    speech: "By the way, what do you do for a living?"
  },
  {
    id: "clinic16_5",
    incorrect: "I must to go now, my friend waits me.",
    struck: "must to ... waits me",
    correct: "I have to go now; my friend is waiting for me.",
    teacherPen: "have to go / is waiting for me",
    category: "Modal Verb Structure & Prepositional Phrasal Verb",
    rule: "1) The modal verb 'must' takes a bare infinitive without 'to' (or use 'I have to go' / 'I'd better be getting on'). 2) The verb 'wait' requires the preposition 'for' when followed by an object: 'waiting for me', not 'waits me'.",
    arRule: "تصحيحان: 1) لا يجوز وضع to بعد must، والأفضل في الانصراف المهذب قول I have to go أو I'd better be getting on. 2) الفعل wait يتطلب حرف الجر for: waiting for me وليس waits me.",
    speech: "I have to go now; my friend is waiting for me."
  }
];

const SESSION_16_PRONUNCIATION_LAB = [
  {
    category: "Intonation in Question Tags: Agreement Checking vs. Real Question",
    rule: "If you know or expect the listener to agree with your statement, your pitch falls on the tag question (↘). If you genuinely do not know and need information, your pitch rises on the tag (↗). In social conversation, falling intonation sounds friendlier and encourages the listener to continue chatting.",
    items: [
      {
        question: "It's a great party, isn't it? ↘",
        type: "Agreement Pitch (Falling ↘)",
        note: "Speaker is enjoying the party and expects Blanca to confirm. Voice falls on 'it'."
      },
      {
        question: "You haven't been with the company long, have you? ↘",
        type: "Checking Shared Knowledge (Falling ↘)",
        note: "Julia already observed Nick is new. Falling intonation prompts him to explain his role."
      },
      {
        question: "You don't happen to have the time, do you? ↗",
        type: "Genuine Inquiry (Rising ↗)",
        note: "Speaker does not know the time and needs actual information."
      }
    ]
  },
  {
    category: "Connected Speech & Auxiliary Weakening (/ə/ Schwa & Flaps)",
    rule: "In natural British dialogue, auxiliary verbs in question tags connect smoothly with following pronouns. 'Aren't you' becomes /ˈɑːnt juː/, 'Didn't you' undergoes yod-coalescence to /ˈdɪdntʃuː/, and 'have you' simplifies without heavy glottal stopping.",
    items: [
      {
        phrase: "You went to university with Ally, didn't you?",
        phonetic: "/jʊ ˈwent tə ˌjuːnɪˈvɜːsɪti wɪð ˈæli | ˈdɪdntʃuː/",
        note: "Notice the contraction of 'didn't you' into /ˈdɪdntʃuː/ in fast British speech."
      },
      {
        phrase: "This cake's delicious, isn't it?",
        phonetic: "/ðɪs ˈkeɪks dɪˈlɪʃəs | ˈɪznt ɪt/",
        note: "The /t/ in 'isn't' links into the vowel /ɪ/ of 'it' without any pause."
      }
    ]
  }
];

const SESSION_16_NOTEBOOK_PAGES = [
  {
    id: "s16_board_1",
    title: "Smartboard Slide 1: Question Completion & Auxiliary Verbs",
    imgUrl: "./assets/images/session16_board_question_forms.jpg",
    tag: "Authentic Smartboard Capture",
    summary: "British Council classroom smartboard exercise completing conversation questions with auxiliary verbs (do, are, have, was, is, did).",
    fullTranscription: `[SMARTBOARD SLIDE: ENCOURAGING CONVERSATION]
Complete the questions with these words:
[ Have | did | do | was | Are | Is ]

1. [Are] you enjoying the party?
2. [Have] you lived around here for long?
3. What [do] you do for a living?
4. [Is] this your first visit to Amsterdam?
5. How [was] your flight?
6. Where [did] you go on holiday last year?

Pedagogical note on board: These questions cover the essential small-talk categories: Present Experience, Living Area, Career, Travel Impressions, Journey, and Recent Holidays.`
  },
  {
    id: "s16_board_2",
    title: "Smartboard Slide 2: Listening Replies to Tag Questions",
    imgUrl: "./assets/images/session16_board_listening_replies.jpg",
    tag: "Classroom Dialogue Focus",
    summary: "Authentic smartboard showing verbatim listener responses to tag questions from the first three conversations.",
    fullTranscription: `[SMARTBOARD SLIDE: LISTENING REPLIES]
Listen to the first three conversations again. What replies do the speakers give?

1. Maria: "You're a friend of Anna's, aren't you?"
   Chris: "Yes, we've known each other for years. We were at school together."

2. Dave: "You were in the marketing presentation this morning, weren't you?"
   Jane: "That's right. I thought it was quite interesting."

3. Jon: "It's a great party, isn't it?"
   Blanca: "Yeah, the foods great. Do you know many people here?"

4. Jon: "That's a Spanish name, isn't it?"
   Blanca: "Maybe, but there's no one Spanish in my family. I suppose my parents just liked the name."`
  },
  {
    id: "s16_board_3",
    title: "Smartboard Slide 3: Tag Question Rules & Intonation Contours",
    imgUrl: "./assets/images/session16_board_tag_rules_intonation.jpg",
    tag: "Grammar & Phonetics Whiteboard",
    summary: "Whiteboard notes defining the structure of question tags and comparing falling intonation (agreement) with rising intonation (real question).",
    fullTranscription: `[SMARTBOARD SLIDE: QUESTION TAG RULES & INTONATION]
1. Structure:
   Statement (+) + Negative Tag (-) ➔ "It's a great film, isn't it?"
   Statement (-) + Positive Tag (+) ➔ "You aren't from around here, are you?"

2. Intonation patterns:
   - Falling intonation (↘): When you check information or expect the listener to agree.
     Example: "It's been a busy day, hasn't it? ↘"
   - Rising intonation (↗): When you genuinely do not know the answer and are asking a question.
     Example: "I don't think I know you, do I? ↗"`
  },
  {
    id: "s16_board_4",
    title: "Smartboard Slide 4: Question Tag Practice (Sentences 1–8)",
    imgUrl: "./assets/images/session16_board_tag_practice.jpg",
    tag: "Interactive Practice Whiteboard",
    summary: "Smartboard slide with 8 authentic sentences completed with their appropriate question tags and student practice notes.",
    fullTranscription: `[SMARTBOARD SLIDE: QUESTION TAG PRACTICE]
1. This cake's delicious, isn't it?
2. We met at the conference last year, didn't we?
3. The weather wasn't very good at the weekend, was it?
4. You went to university with Ally, didn't you?
5. You aren't from around here, are you?
6. It's a fantastic film, isn't it?
7. He always throws great parties, doesn't he?
8. It's been a lovely week, hasn't it?

Teacher tip: Practice speaking these sentences with your partner using natural falling intonation on the tag.`
  },
  {
    id: "s16_board_5",
    title: "Smartboard Slide 5: Categorizing Functional Phrases",
    imgUrl: "./assets/images/session16_board_conversation_categories.jpg",
    tag: "Functional Language Table",
    summary: "Whiteboard table sorting conversational strategies into Starting a conversation, Closing a conversation, and Changing topic.",
    fullTranscription: `[SMARTBOARD SLIDE: CONVERSATION STAGES]
1. Starting a conversation:
   • Hello, you work in the café, don't you?
   • Hi, I think we met at Martin's party.
   • Excuse me, could you pass me one of those...
   • Hi, I'm Dave. Do you mind if I join you?

2. Closing a conversation:
   • Let me give you my card.
   • It was very nice meeting you.
   • Okay, enjoy the rest of the conference.
   • If you'll excuse me, I have to get that.
   • It's time I was going and my friend's waiting for me.
   • I'd better be getting on. Good luck with the job.

3. Changing topic:
   • By the way ...
   • Anyway ...`
  }
];

/* ==========================================================================
   SESSION 17: COMMUNICATING WITH CONFIDENCE: JOB APPRAISAL INTERVIEW
   Authentic Handout ARC_B1_01_I016CEU_HO_v1.1 & Smartboards 1–9
   ========================================================================== */

const VOCAB_SESSION_17 = [
  {
    id: 1701,
    word: "appraisal",
    pos: "noun",
    cambridgeLevel: "C1",
    pronunciation: "/əˈpreɪ.zəl/",
    citation: "Handout Page 1 & Smartboard 1",
    definition: "A formal meeting between an employee and manager to review job performance.",
    b1Explain: "A formal meeting to talk about how well you do your job.",
    opposite: "dismissal",
    arWord: "تقييم وظيفي سنوي / مراجعة الأداء المهني / تثمين قيمة",
    arMeaning: "تقييم أداء سنوي / مقابلة رسمية لتقييم الموظف",
    sentence: "During her annual appraisal, Emma discussed her career aspirations and time management goals.",
    def: "A formal meeting between an employee and manager to review job performance.",
    context: "During her annual appraisal, Emma discussed her career aspirations and time management goals.",
    ar: "تقييم أداء سنوي / مقابلة رسمية لتقييم الموظف",
    phonetic: "/əˈpreɪ.zəl/",
    partOfSpeech: "noun"
  },
  {
    id: 1702,
    word: "performance",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/pəˈfɔː.məns/",
    citation: "Handout Page 1 & Smartboard 1",
    definition: "How well or badly a person does their work at a company.",
    b1Explain: "How well a person does their job.",
    opposite: "poor work",
    arWord: "أداء وظيفي / إنجاز مهني / عرض تمثيلي",
    arMeaning: "أداء العمل ومستوى الإنجاز الوظيفي",
    sentence: "The director praised her outstanding performance in improving interdepartmental communication this year.",
    def: "How well or badly a person does their work at a company.",
    context: "The director praised her outstanding performance in improving interdepartmental communication this year.",
    ar: "أداء العمل ومستوى الإنجاز الوظيفي",
    phonetic: "/pəˈfɔː.məns/",
    partOfSpeech: "noun"
  },
  {
    id: 1703,
    word: "objective",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/əbˈdʒek.tɪv/",
    citation: "Smartboard Slide 2",
    definition: "A clear goal that you want to achieve through careful work.",
    b1Explain: "A goal that you plan to achieve.",
    opposite: "aimless task",
    arWord: "هدف محدد / غاية عملية / موضوعي ومنصف",
    arMeaning: "هدف مهني محدد يسعى الموظف لتحقيقه",
    sentence: "They agreed on three clear performance objectives for the upcoming financial year.",
    def: "A clear goal that you want to achieve through careful work.",
    context: "They agreed on three clear performance objectives for the upcoming financial year.",
    ar: "هدف مهني محدد يسعى الموظف لتحقيقه",
    phonetic: "/əbˈdʒek.tɪv/",
    partOfSpeech: "noun"
  },
  {
    id: 1704,
    word: "promotion",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/prəˈməʊ.ʃən/",
    citation: "Case Study Brief (Handout Page 2)",
    definition: "Moving up to a higher, more important position at work.",
    b1Explain: "Getting a higher job with better pay in your company.",
    opposite: "demotion",
    arWord: "ترقية لوظيفة أعلى / ترويج تجاري",
    arMeaning: "ترقية وظيفية إلى منصب أعلى ومسؤولية أكبر",
    sentence: "Emma worked hard for three years hoping to earn a promotion to Senior Manager.",
    def: "Moving up to a higher, more important position at work.",
    context: "Emma worked hard for three years hoping to earn a promotion to Senior Manager.",
    ar: "ترقية وظيفية إلى منصب أعلى ومسؤولية أكبر",
    phonetic: "/prəˈməʊ.ʃən/",
    partOfSpeech: "noun"
  },
  {
    id: 1705,
    word: "strength",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/streŋθ/",
    citation: "Smartboard Slide 3",
    definition: "A good quality or ability that makes someone effective at their work.",
    b1Explain: "A skill or good quality that you do very well.",
    opposite: "weakness",
    arWord: "نقطة قوة / ميزة تنافسية / صلابة وقدرة",
    arMeaning: "نقطة قوة وميزة مهارية في أداء الشخص",
    sentence: "Her greatest strength is communicating complex technical ideas clearly to new staff members.",
    def: "A good quality or ability that makes someone effective at their work.",
    context: "Her greatest strength is communicating complex technical ideas clearly to new staff members.",
    ar: "نقطة قوة وميزة مهارية في أداء الشخص",
    phonetic: "/streŋθ/",
    partOfSpeech: "noun"
  },
  {
    id: 1706,
    word: "weakness",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈwiːk.nəs/",
    citation: "Smartboard Slide 3",
    definition: "An area of work where someone needs practice and personal improvement.",
    b1Explain: "An area where you are not yet good and need to improve.",
    opposite: "strength",
    arWord: "نقطة ضعف / جانب يحتاج تحسيناً / وهن",
    arMeaning: "نقطة ضعف أو مجال بحاجة إلى تطوير وتحسين",
    sentence: "Poor punctuality during morning meetings was highlighted as Emma's primary weakness.",
    def: "An area of work where someone needs practice and personal improvement.",
    context: "Poor punctuality during morning meetings was highlighted as Emma's primary weakness.",
    ar: "نقطة ضعف أو مجال بحاجة إلى تطوير وتحسين",
    phonetic: "/ˈwiːk.nəs/",
    partOfSpeech: "noun"
  },
  {
    id: 1707,
    word: "punctuality",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
    citation: "Smartboard Slide 6 (Category 1)",
    definition: "The habit of arriving and finishing tasks at the agreed time.",
    b1Explain: "Arriving on time and not being late.",
    opposite: "lateness",
    arWord: "انضباط في المواعيد / الالتزام الصارم بالوقت",
    arMeaning: "الالتزام الدقيق بالمواعيد والانضباط الزمني",
    sentence: "Strict punctuality is essential when hosting meetings with corporate clients.",
    def: "The habit of arriving and finishing tasks at the agreed time.",
    context: "Strict punctuality is essential when hosting meetings with corporate clients.",
    ar: "الالتزام الدقيق بالمواعيد والانضباط الزمني",
    phonetic: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
    partOfSpeech: "noun"
  },
  {
    id: 1708,
    word: "deadline",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈded.laɪn/",
    citation: "Smartboard Slide 6 & Teacher Clinic",
    definition: "The exact time or date when a job must be finished.",
    b1Explain: "The time when a task must be finished.",
    opposite: "flexible date",
    arWord: "موعد نهائي للتسليم / آخر أجل لإنهاء العمل",
    arMeaning: "الموعد النهائي لتسليم العمل",
    sentence: "She always meets deadlines for monthly reports without needing any managerial reminders.",
    def: "The exact time or date when a job must be finished.",
    context: "She always meets deadlines for monthly reports without needing any managerial reminders.",
    ar: "الموعد النهائي لتسليم العمل",
    phonetic: "/ˈded.laɪn/",
    partOfSpeech: "noun"
  },
  {
    id: 1709,
    word: "time management",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈtaɪm ˌmæn.ɪdʒ.mənt/",
    citation: "Handout Para 2 & Smartboard 6",
    definition: "Using your working hours effectively to finish tasks without wasting time.",
    b1Explain: "Planning your time well so you get your work done.",
    opposite: "time-wasting",
    arWord: "إدارة وتنظيم الوقت / جدولة الساعات بكفاءة",
    arMeaning: "إدارة الوقت وتنظيم جدول المهام بكفاءة",
    sentence: "Attending a time management workshop helped Emma keep team meetings strictly on schedule.",
    def: "Using your working hours effectively to finish tasks without wasting time.",
    context: "Attending a time management workshop helped Emma keep team meetings strictly on schedule.",
    ar: "إدارة الوقت وتنظيم جدول المهام بكفاءة",
    phonetic: "/ˈtaɪm ˌmæn.ɪdʒ.mənt/",
    partOfSpeech: "noun"
  },
  {
    id: 1710,
    word: "adaptability",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/əˌdæp.təˈbɪl.ə.ti/",
    citation: "Handout Para 1 & Smartboard 3",
    definition: "The ability to change your methods easily when conditions change.",
    b1Explain: "Being able to change easily when new situations happen.",
    opposite: "inflexibility",
    arWord: "مرونة التكيف / القدرة على التأقلم مع المتغيرات",
    arMeaning: "القدرة على التكيف والمرونة مع الظروف المتغيرة",
    sentence: "Her adaptability helped our department adjust smoothly when new company software was introduced.",
    def: "The ability to change your methods easily when conditions change.",
    context: "Her adaptability helped our department adjust smoothly when new company software was introduced.",
    ar: "القدرة على التكيف والمرونة مع الظروف المتغيرة",
    phonetic: "/əˌdæp.təˈbɪl.ə.ti/",
    partOfSpeech: "noun"
  },
  {
    id: 1711,
    word: "initiative",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ɪˈnɪʃ.ə.tɪv/",
    citation: "Smartboard Slide 6 (Category 6)",
    definition: "The ability to take action and make decisions without being told.",
    b1Explain: "Doing something good without waiting for your boss to tell you.",
    opposite: "passivity",
    arWord: "مبادرة ذاتية / روح الإقدام والتصرف الاستباقي",
    arMeaning: "المبادرة الذاتية والتحرك الإيجابي دون انتظار التوجيه",
    sentence: "Emma showed great initiative by proposing a streamlined system for customer feedback.",
    def: "The ability to take action and make decisions without being told.",
    context: "Emma showed great initiative by proposing a streamlined system for customer feedback.",
    ar: "المبادرة الذاتية والتحرك الإيجابي دون انتظار التوجيه",
    phonetic: "/ɪˈnɪʃ.ə.tɪv/",
    partOfSpeech: "noun"
  },
  {
    id: 1712,
    word: "workload",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈwɜːk.ləʊd/",
    citation: "Handout Para 1",
    definition: "The amount of work that someone has to do in a day.",
    b1Explain: "The amount of work you have to do.",
    opposite: "free time",
    arWord: "حجم العمل / عبء المهام الموكلة للموظف",
    arMeaning: "عبء العمل وحجم المهام اليومية المطلوبة",
    sentence: "She adjusts her daily workload carefully to ensure all urgent client tickets are answered.",
    def: "The amount of work that someone has to do in a day.",
    context: "She adjusts her daily workload carefully to ensure all urgent client tickets are answered.",
    ar: "عبء العمل وحجم المهام اليومية المطلوبة",
    phonetic: "/ˈwɜːk.ləʊd/",
    partOfSpeech: "noun"
  },
  {
    id: 1713,
    word: "productivity",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌprɒd.ʌkˈtɪv.ə.ti/",
    citation: "Handout Para 4",
    definition: "The rate at which a person or team finishes useful work.",
    b1Explain: "How much good work you get done.",
    opposite: "unproductiveness",
    arWord: "إنتاجية / معدل إنجاز المخرجات في زمن محدد",
    arMeaning: "الإنتاجية ومعدل إنجاز العمل المفيد",
    sentence: "Building team unity improved office productivity and reduced repeated errors.",
    def: "The rate at which a person or team finishes useful work.",
    context: "Building team unity improved office productivity and reduced repeated errors.",
    ar: "الإنتاجية ومعدل إنجاز العمل المفيد",
    phonetic: "/ˌprɒd.ʌkˈtɪv.ə.ti/",
    partOfSpeech: "noun"
  },
  {
    id: 1714,
    word: "procedure",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/prəˈsiː.dʒər/",
    citation: "Handout Para 5",
    definition: "The official, step-by-step way of doing something at a company.",
    b1Explain: "The correct official steps to do a job.",
    opposite: "disorder",
    arWord: "إجراء إداري رسمي / خطوة نظامية متبعة",
    arMeaning: "إجراءات العمل الرسمية والخطوات المتبعة",
    sentence: "Staff must follow safety procedures whenever they handle delicate equipment.",
    def: "The official, step-by-step way of doing something at a company.",
    context: "Staff must follow safety procedures whenever they handle delicate equipment.",
    ar: "إجراءات العمل الرسمية والخطوات المتبعة",
    phonetic: "/prəˈsiː.dʒər/",
    partOfSpeech: "noun"
  },
  {
    id: 1715,
    word: "recommendation",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌrek.ə.menˈdeɪ.ʃən/",
    citation: "Smartboard Slide 4 & 5",
    definition: "Helpful advice suggesting the best thing to do in a situation.",
    b1Explain: "Helpful advice on what you should do.",
    opposite: "warning",
    arWord: "توصية مهنية / مقترح تحسين معتمد",
    arMeaning: "توصية مهنية ونصيحة لتطوير الأداء",
    sentence: "The appraiser made a recommendation that Emma should attend advanced leadership seminars.",
    def: "Helpful advice suggesting the best thing to do in a situation.",
    context: "The appraiser made a recommendation that Emma should attend advanced leadership seminars.",
    ar: "توصية مهنية ونصيحة لتطوير الأداء",
    phonetic: "/ˌrek.ə.menˈdeɪ.ʃən/",
    partOfSpeech: "noun"
  },
  {
    id: 1716,
    word: "constructive",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/kənˈstrʌk.tɪv/",
    citation: "Smartboard Slide 1",
    definition: "Useful advice that is intended to help someone improve their work.",
    b1Explain: "Helpful and positive, meant to help you improve.",
    opposite: "destructive",
    arWord: "بناء ومثمر / مفيد ويدعو للتطوير الإيجابي",
    arMeaning: "بنّاء ومفيد ويهدف إلى تطوير الشخص",
    sentence: "The manager offered constructive feedback on her presentation style rather than harsh criticism.",
    def: "Useful advice that is intended to help someone improve their work.",
    context: "The manager offered constructive feedback on her presentation style rather than harsh criticism.",
    ar: "بنّاء ومفيد ويهدف إلى تطوير الشخص",
    phonetic: "/kənˈstrʌk.tɪv/",
    partOfSpeech: "adj"
  },
  {
    id: 1717,
    word: "cooperate",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/kəʊˈɒp.ər.eɪt/",
    citation: "Handout Para 3",
    definition: "To work together with someone to achieve a common goal.",
    b1Explain: "To work together with other people happily.",
    opposite: "compete",
    arWord: "يتعاون / يتكاتف ويعمل بروح الفريق الواحد",
    arMeaning: "يتعاون ويعمل مع الآخرين بروح الفريق",
    sentence: "Different departments must cooperate closely to deliver the new software on time.",
    def: "To work together with someone to achieve a common goal.",
    context: "Different departments must cooperate closely to deliver the new software on time.",
    ar: "يتعاون ويعمل مع الآخرين بروح الفريق",
    phonetic: "/kəʊˈɒp.ər.eɪt/",
    partOfSpeech: "verb"
  },
  {
    id: 1718,
    word: "expectation",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌek.spekˈteɪ.ʃən/",
    citation: "Handout Para 6",
    definition: "What you believe or hope will happen in the future.",
    b1Explain: "What you hope or expect will happen.",
    opposite: "surprise",
    arWord: "توقع / ما ينتظر تحقيقه من مستوى أو نتائج",
    arMeaning: "توقعات مستقبلية لما ينتظر حدوثه",
    sentence: "Clear communication helps align client expectations with actual project delivery dates.",
    def: "What you believe or hope will happen in the future.",
    context: "Clear communication helps align client expectations with actual project delivery dates.",
    ar: "توقعات مستقبلية لما ينتظر حدوثه",
    phonetic: "/ˌek.spekˈteɪ.ʃən/",
    partOfSpeech: "noun"
  },
  {
    id: 1719,
    word: "alter course",
    pos: "phrase / verb",
    cambridgeLevel: "B2",
    pronunciation: "/ˈɔːl.tər kɔːs/",
    citation: "Emma's Appraisal Report (Handout Para 1)",
    definition: "To change a plan or action when the situation around you changes.",
    b1Explain: "To change your plan when circumstances change.",
    opposite: "stay on track",
    arWord: "يعدل المسار / يغير خطة العمل لمواكبة الظروف",
    arMeaning: "يغيّر مساره أو يغيّر خطته عندما تتطلب الظروف ذلك",
    sentence: "Emma is good at altering course when project requirements change suddenly.",
    def: "To change a plan or action when the situation around you changes.",
    context: "Emma is good at altering course when project requirements change suddenly.",
    ar: "يغيّر مساره أو يغيّر خطته عندما تتطلب الظروف ذلك",
    phonetic: "/ˈɔːl.tər kɔːs/",
    partOfSpeech: "phrase"
  },
  {
    id: 1720,
    word: "allocated time",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈæl.ə.keɪ.tɪd taɪm/",
    citation: "Emma's Appraisal Report (Handout Para 2)",
    definition: "The specific amount of time planned or given to finish an activity.",
    b1Explain: "The planned time allowed for a meeting or task.",
    opposite: "unlimited time",
    arWord: "الوقت المخصص / الزمن المحدد سلفاً لمهمة أو اجتماع",
    arMeaning: "الوقت المحدد أو المخصص لمهمة أو اجتماع",
    sentence: "Our morning meeting ran beyond its allocated time, causing delays for other staff.",
    def: "The specific amount of time planned or given to finish an activity.",
    context: "Our morning meeting ran beyond its allocated time, causing delays for other staff.",
    ar: "الوقت المحدد أو المخصص لمهمة أو اجتماع",
    phonetic: "/ˈæl.ə.keɪ.tɪd taɪm/",
    partOfSpeech: "noun"
  },
  {
    id: 1721,
    word: "interfere with",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/ˌɪn.təˈfɪər wɪð/",
    citation: "Emma's Appraisal Report (Handout Para 2)",
    definition: "To prevent something from working properly or stop someone from doing their work.",
    b1Explain: "To stop or slow down someone while they do their work.",
    opposite: "help / facilitate",
    arWord: "يتداخل مع / يعرقل أو يربك مهام أخرى",
    arMeaning: "يعيق أو يتداخل مع واجبات الآخرين ويعطل عملهم",
    sentence: "Late meetings interfere with the daily duties of our customer service colleagues.",
    def: "To prevent something from working properly or stop someone from doing their work.",
    context: "Late meetings interfere with the daily duties of our customer service colleagues.",
    ar: "يعيق أو يتداخل مع واجبات الآخرين ويعطل عملهم",
    phonetic: "/ˌɪn.təˈfɪər wɪð/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 1722,
    word: "build unity",
    pos: "phrase / verb",
    cambridgeLevel: "B2",
    pronunciation: "/bɪld ˈjuː.nə.ti/",
    citation: "Emma's Appraisal Report (Handout Para 4)",
    definition: "To help people in a team feel connected, friendly, and work together.",
    b1Explain: "To help team members work together peacefully.",
    opposite: "divide people",
    arWord: "يبني التكاتف والوحدة / يرسخ تماسك وترابط الفريق",
    arMeaning: "يبني الوحدة والترابط ويعزز روح الفريق الواحد",
    sentence: "The manager helped build unity across the office by organizing weekly team discussions.",
    def: "To help people in a team feel connected, friendly, and work together.",
    context: "The manager helped build unity across the office by organizing weekly team discussions.",
    ar: "يبني الوحدة والترابط ويعزز روح الفريق الواحد",
    phonetic: "/bɪld ˈjuː.nə.ti/",
    partOfSpeech: "phrase"
  },
  {
    id: 1723,
    word: "disagreement",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌdɪs.əˈɡriː.mənt/",
    citation: "Emma's Appraisal Report (Handout Para 4)",
    definition: "A situation where people have different opinions and argue about an idea.",
    b1Explain: "When two people have different opinions and argue.",
    opposite: "agreement",
    arWord: "خلاف في الرأي / تباين في وجهات النظر / نزاع ودي",
    arMeaning: "خلاف أو تباين في الرأي بين أعضاء الفريق",
    sentence: "Good team managers reduce disagreements before they turn into major workplace arguments.",
    def: "A situation where people have different opinions and argue about an idea.",
    context: "Good team managers reduce disagreements before they turn into major workplace arguments.",
    ar: "خلاف أو تباين في الرأي بين أعضاء الفريق",
    phonetic: "/ˌdɪs.əˈɡriː.mənt/",
    partOfSpeech: "noun"
  },
  {
    id: 1724,
    word: "efficient plan",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ɪˈfɪʃ.ənt plæn/",
    citation: "Emma's Appraisal Report (Handout Para 3)",
    definition: "A well-organized plan that works quickly and produces good results without wasting time.",
    b1Explain: "A well-organized plan that works well without wasting time.",
    opposite: "wasteful plan",
    arWord: "خطة فعالة وكفؤة / استراتيجية عمل متقنة وناجزة",
    arMeaning: "خطة عمل فعالة ومنظمة تحقق النتائج دون إهدار للوقت",
    sentence: "Emma helped the team develop an efficient plan to share project updates weekly.",
    def: "A well-organized plan that works quickly and produces good results without wasting time.",
    context: "Emma helped the team develop an efficient plan to share project updates weekly.",
    ar: "خطة عمل فعالة ومنظمة تحقق النتائج دون إهدار للوقت",
    phonetic: "/ɪˈfɪʃ.ənt plæn/",
    partOfSpeech: "noun"
  },
  {
    id: 1725,
    word: "as instructed",
    pos: "phrase / adverb",
    cambridgeLevel: "B2",
    pronunciation: "/æz ɪnˈstrʌk.tɪd/",
    citation: "Emma's Appraisal Report (Handout Para 5)",
    definition: "Doing a task exactly in the way your manager told you to.",
    b1Explain: "Doing work exactly as your manager told you.",
    opposite: "disobediently",
    arWord: "وفقاً للتوجيهات / كما طُلب تماماً وبحسب التعليمات",
    arMeaning: "وفق التعليمات المحددة وبحسب ما أُمر به تماماً",
    sentence: "She completed every report as instructed, but rarely suggested newer creative methods.",
    def: "Doing a task exactly in the way your manager told you to.",
    context: "She completed every report as instructed, but rarely suggested newer creative methods.",
    ar: "وفق التعليمات المحددة وبحسب ما أُمر به تماماً",
    phonetic: "/æz ɪnˈstrʌk.tɪd/",
    partOfSpeech: "phrase"
  },
  {
    id: 1726,
    word: "creativity",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌkriː.eɪˈtɪv.ə.ti/",
    citation: "Emma's Appraisal Report (Handout Para 5)",
    definition: "The ability to produce original ideas and find new solutions to problems.",
    b1Explain: "The ability to think of new and interesting ideas.",
    opposite: "imitation",
    arWord: "إبداع وابتكار / تفكير خلاق خارج الصندوق",
    arMeaning: "الإبداع والقدرة على ابتكار أفكار وحلول عمل جديدة",
    sentence: "Senior managers need creativity to solve difficult business problems and streamline procedures.",
    def: "The ability to produce original ideas and find new solutions to problems.",
    context: "Senior managers need creativity to solve difficult business problems and streamline procedures.",
    ar: "الإبداع والقدرة على ابتكار أفكار وحلول عمل جديدة",
    phonetic: "/ˌkriː.eɪˈtɪv.ə.ti/",
    partOfSpeech: "noun"
  },
  {
    id: 1727,
    word: "customer expectation",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈkʌs.tə.mər ˌek.spekˈteɪ.ʃən/",
    citation: "Emma's Appraisal Report (Handout Para 6)",
    definition: "What a client hopes and believes they will receive from a company.",
    b1Explain: "What a customer expects to receive from your service.",
    opposite: "unrealistic demand",
    arWord: "توقعات العملاء / ما ينتظره الزبون من جودة وسرعة",
    arMeaning: "توقعات العميل ومستوى الخدمة الذي ينتظر الحصول عليه",
    sentence: "Managing customer expectation clearly from day one helps prevent misunderstandings about delivery dates.",
    def: "What a client hopes and believes they will receive from a company.",
    context: "Managing customer expectation clearly from day one helps prevent misunderstandings about delivery dates.",
    ar: "توقعات العميل ومستوى الخدمة الذي ينتظر الحصول عليه",
    phonetic: "/ˈkʌs.tə.mər ˌek.spekˈteɪ.ʃən/",
    partOfSpeech: "noun"
  },
  {
    id: 1728,
    word: "frequent delay",
    pos: "noun phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfriː.kwənt dɪˈleɪ/",
    citation: "Emma's Appraisal Report (Handout Para 6)",
    definition: "A situation when things happen later than planned many times in succession.",
    b1Explain: "When something happens late many times.",
    opposite: "on-time delivery",
    arWord: "تأخير متكرر / بطء مكرر خارج الجدول الزمني",
    arMeaning: "تأخير متكرر وتأخر مستمر في مواعيد التسليم",
    sentence: "Clients complained about frequent delay in receiving their monthly software updates.",
    def: "A situation when things happen later than planned many times in succession.",
    context: "Clients complained about frequent delay in receiving their monthly software updates.",
    ar: "تأخير متكرر وتأخر مستمر في مواعيد التسليم",
    phonetic: "/ˈfriː.kwənt dɪˈleɪ/",
    partOfSpeech: "noun"
  },
  {
    id: 1729,
    word: "readily",
    pos: "adverb",
    cambridgeLevel: "C1",
    pronunciation: "/ˈred.əl.i/",
    citation: "Emma's Appraisal Report (Handout Para 1)",
    definition: "Quickly, willingly, and happily without showing any hesitation or complaints.",
    b1Explain: "Quickly and willingly without complaining.",
    opposite: "reluctantly",
    arWord: "بكل سرور وسهولة / بطيب خاطر ودون تردد",
    arMeaning: "بكل استعداد وطواعية وعن طيب خاطر",
    sentence: "Emma has readily accepted departmental changes and adapted to her new colleagues.",
    def: "Quickly, willingly, and happily without showing any hesitation or complaints.",
    context: "Emma has readily accepted departmental changes and adapted to her new colleagues.",
    ar: "بكل استعداد وطواعية وعن طيب خاطر",
    phonetic: "/ˈred.əl.i/",
    partOfSpeech: "adverb"
  },
  {
    id: 1730,
    word: "circumstances",
    pos: "noun (plural)",
    cambridgeLevel: "B2",
    pronunciation: "/ˈsɜː.kəm.stɑːn.sɪz/",
    citation: "Emma's Appraisal Report (Handout Para 1)",
    definition: "The conditions, facts, and events around you that affect a situation.",
    b1Explain: "The facts and conditions around you that affect what you do.",
    opposite: "fixed state",
    arWord: "ظروف محيطة / ملابسات وأوضاع راهنة",
    arMeaning: "الظروف والملابسات المحيطة بالموقف",
    sentence: "She adapted to unexpected office circumstances when our budget was reduced.",
    def: "The conditions, facts, and events around you that affect a situation.",
    context: "She adapted to unexpected office circumstances when our budget was reduced.",
    ar: "الظروف والملابسات المحيطة بالموقف",
    phonetic: "/ˈsɜː.kəm.stɑːn.sɪz/",
    partOfSpeech: "noun"
  },
  {
    id: 1731,
    word: "run beyond",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/rʌn bɪˈjɒnd/",
    citation: "Emma's Appraisal Report (Handout Para 2)",
    definition: "To continue past the planned end time or official limit.",
    b1Explain: "To take more time than planned and finish late.",
    opposite: "finish early",
    arWord: "يتجاوز الوقت المحدد / يمتد لأطول من الموعد المقرر",
    arMeaning: "يتجاوز الوقت المحدد ويستمر أطول من المخطط",
    sentence: "When meetings run beyond their end time, colleagues arrive late to other commitments.",
    def: "To continue past the planned end time or official limit.",
    context: "When meetings run beyond their end time, colleagues arrive late to other commitments.",
    ar: "يتجاوز الوقت المحدد ويستمر أطول من المخطط",
    phonetic: "/rʌn bɪˈjɒnd/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 1732,
    word: "overcome difficulties",
    pos: "collocation / phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˌəʊ.vəˈkʌm ˈdɪf.ɪ.kəl.tiz/",
    citation: "Emma's Appraisal Report (Handout Para 3)",
    definition: "To find solutions and successfully defeat complex problems at work.",
    b1Explain: "To solve hard problems successfully.",
    opposite: "give up",
    arWord: "يتغلب على الصعاب / يجتاز العقبات بنجاح",
    arMeaning: "يتغلب على الصعوبات ويتجاوز العقبات بنجاح",
    sentence: "Her communication skills helped the team overcome difficulties during the product launch.",
    def: "To find solutions and successfully defeat complex problems at work.",
    context: "Her communication skills helped the team overcome difficulties during the product launch.",
    ar: "يتغلب على الصعوبات ويتجاوز العقبات بنجاح",
    phonetic: "/ˌəʊ.vəˈkʌm ˈdɪf.ɪ.kəl.tiz/",
    partOfSpeech: "phrase"
  },
  {
    id: 1733,
    word: "management style",
    pos: "noun phrase",
    cambridgeLevel: "B2",
    pronunciation: "/ˈmæn.ɪdʒ.mənt staɪl/",
    citation: "Emma's Appraisal Report (Handout Para 4)",
    definition: "The personal way a manager leads, guides, and communicates with their team.",
    b1Explain: "The way a manager leads and talks to their team.",
    opposite: "laissez-faire",
    arWord: "أسلوب القيادة والإدارة / طريقة التعامل وتوجيه المرؤوسين",
    arMeaning: "الأسلوب الإداري وطريقة قيادة الفريق وتوجيهه",
    sentence: "Her collaborative management style made employees feel valued and motivated.",
    def: "The personal way a manager leads, guides, and communicates with their team.",
    context: "Her collaborative management style made employees feel valued and motivated.",
    ar: "الأسلوب الإداري وطريقة قيادة الفريق وتوجيهه",
    phonetic: "/ˈmæn.ɪdʒ.mənt staɪl/",
    partOfSpeech: "noun"
  },
  {
    id: 1734,
    word: "approach customers",
    pos: "collocation / phrase",
    cambridgeLevel: "B2",
    pronunciation: "/əˈprəʊtʃ ˈkʌs.tə.məz/",
    citation: "Emma's Appraisal Report (Handout Para 6)",
    definition: "To speak to clients, listen to their needs, and handle their requests.",
    b1Explain: "How you talk to customers and help them.",
    opposite: "ignore clients",
    arWord: "يتواصل مع العملاء / يتعامل مع الزبائن بلباقة واستيعاب",
    arMeaning: "أسلوب التعامل مع العملاء والتواصل معهم",
    sentence: "She met with the director to improve her methods of approaching customers with empathy.",
    def: "To speak to clients, listen to their needs, and handle their requests.",
    context: "She met with the director to improve her methods of approaching customers with empathy.",
    ar: "أسلوب التعامل مع العملاء والتواصل معهم",
    phonetic: "/əˈprəʊtʃ ˈkʌs.tə.məz/",
    partOfSpeech: "phrase"
  },
  {
    id: 1735,
    word: "turn out",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/tɜːn aʊt/",
    citation: "Emma's Appraisal Report (Handout Para 6)",
    definition: "To happen in a particular way or be discovered to be true.",
    b1Explain: "To happen or be discovered in the end.",
    opposite: "remain hidden",
    arWord: "يتضح في النهاية / يتبين أنه كذا / يسفر عن",
    arMeaning: "يتبين / يتضح في النهاية أنه كذا",
    sentence: "The delayed delivery turned out to be an error in the postal address.",
    def: "To happen in a particular way or be discovered to be true.",
    context: "The delayed delivery turned out to be an error in the postal address.",
    ar: "يتبين / يتضح في النهاية أنه كذا",
    phonetic: "/tɜːn aʊt/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 1736,
    word: "resourceful",
    pos: "adj",
    cambridgeLevel: "C1",
    pronunciation: "/rɪˈzɔː.sfəl/",
    citation: "Smartboard Slide 6 (Category 4)",
    definition: "Good at finding quick, clever ways to overcome difficulties and solve problems.",
    b1Explain: "Skilled at solving problems quickly with whatever you have.",
    opposite: "unimaginative",
    arWord: "واسع الحيلة والتدبير / صاحب حلول ذكية وعملية",
    arMeaning: "واسع الحيلة وبارع في إيجاد الحلول السريعة",
    sentence: "A resourceful manager finds solutions even when project budgets are reduced.",
    def: "Good at finding quick, clever ways to overcome difficulties and solve problems.",
    context: "A resourceful manager finds solutions even when project budgets are reduced.",
    ar: "واسع الحيلة وبارع في إيجاد الحلول السريعة",
    phonetic: "/rɪˈzɔː.sfəl/",
    partOfSpeech: "adj"
  }
];

const SESSION_17_LEAD_IN = {
  quotes: [
    {
      id: "q1",
      speaker: "Team Leader",
      text: "It’s a good chance to give feedback on my team’s performance.",
      sentiment: "Positive",
      analysis: "Highlights appraisal as a constructive evaluation opportunity."
    },
    {
      id: "q2",
      speaker: "Junior Employee",
      text: "You can never be totally honest because you have the appraisal with the person who manages you.",
      sentiment: "Drawback",
      analysis: "Underlines the power dynamic and fear of speaking truth to authority."
    },
    {
      id: "q3",
      speaker: "HR Specialist",
      text: "We use the system to help with professional development.",
      sentiment: "Positive",
      analysis: "Emphasizes long-term training and skill building."
    },
    {
      id: "q4",
      speaker: "Technical Engineer",
      text: "If I need training in a particular area I usually mention it at the appraisal.",
      sentiment: "Positive",
      analysis: "Uses the interview as a forum to request budget and courses."
    },
    {
      id: "q5",
      speaker: "Introverted Staff Member",
      text: "I don’t really like it. I don’t enjoy talking about myself. Luckily it’s only once a year!",
      sentiment: "Drawback",
      analysis: "Reflects social anxiety and discomfort with self-promotion."
    },
    {
      id: "q6",
      speaker: "Senior Manager",
      text: "There’s a lot of administration before and after the appraisal. I have to write full reports on all of my team.",
      sentiment: "Drawback",
      analysis: "Points out bureaucratic paperwork load."
    },
    {
      id: "q7",
      speaker: "Project Coordinator",
      text: "The problem here is that my objectives usually change during the year.",
      sentiment: "Drawback",
      analysis: "Addresses agile business shifts that make annual targets obsolete."
    },
    {
      id: "q8",
      speaker: "Corporate Executive",
      text: "We can only grade a few employees as “performing exceptionally”.",
      sentiment: "Drawback",
      analysis: "Refers to strict bell-curve quotas limiting top ratings."
    }
  ],
  discussionQuestions: [
    {
      num: 1,
      q: "Have you ever had a job appraisal / review meeting?",
      smartboardAnswer: "Most professionals experience annual or semi-annual performance appraisals where goals, KPIs, and wage reviews are discussed with line managers.",
      modelPartnerTurn: "Yes, in my previous role at a logistics firm, we had an annual appraisal every December. We sat down for forty-five minutes with our department head, reviewed completed projects against annual KPIs, and established a learning development plan for the upcoming fiscal year.",
      audioText: "In my previous role, we had an annual appraisal every December. We reviewed projects against KPIs and established a learning plan for the upcoming year."
    },
    {
      num: 2,
      q: "What opportunities for employees do job appraisals create?",
      smartboardAnswer: "Employees are aware of their strengths and weaknesses and can plan future development. (Verbatim Smartboard 2)",
      modelPartnerTurn: "Appraisals create a formal channel to showcase achievements, request specialized software training, negotiate salary raises or promotions, and align personal career ambitions with company strategic goals.",
      audioText: "Employees become aware of their strengths and weaknesses and can plan future development, request training, and negotiate promotions."
    },
    {
      num: 3,
      q: "What could be some drawbacks of job appraisals?",
      smartboardAnswer: "It can be a nerve-wracking experience. (Verbatim Smartboard 2)",
      modelPartnerTurn: "They can trigger high stress and anxiety. If managers lack empathy, appraisals can feel like a courtroom prosecution rather than supportive coaching. Additionally, heavy administrative paperwork and rigid quotas can demotivate high performers.",
      audioText: "It can be a nerve-wracking experience. Heavy administrative paperwork and rigid grading quotas can demotivate high performers."
    },
    {
      num: 4,
      q: "How often do you think such reviews should take place?",
      smartboardAnswer: "Usually at the end of every year. (Verbatim Smartboard 2)",
      modelPartnerTurn: "While formal evaluations happen at the end of every year, many modern organizations combine this with lightweight monthly or quarterly check-ins. Waiting twelve whole months to provide critical feedback is often too late to correct emerging problems.",
      audioText: "Usually at the end of every year, but combining this with quarterly check-ins is far more effective than waiting twelve months."
    }
  ]
};

const SESSION_17_EMMA_REPORT = {
  background: "Emma has been working for a company for 3 years. She hopes to get promoted to Senior Manager. You are the director of this company. Read the report an appraiser wrote after Emma's review meeting and decide if you would give Emma a promotion.",
  paragraphs: [
    {
      num: 1,
      heading: "1. Adaptability & Changing Circumstances",
      text: "Over the past year there have been a number of changes in our department. Emma has readily accepted change and has adapted to circumstances around her quite well. She adjusts her workload to meet the needs of the team and handles a variety of assignments. She is good at altering course when it is required. Over the next year Emma could continue working in this area and adapting to changing conditions.",
      analysis: {
        category: "Adaptability to change / Flexibility",
        status: "Strength",
        recommendation: "Emma could continue working in this area and adapting to changing conditions."
      }
    },
    {
      num: 2,
      heading: "2. Meeting Management & Timekeeping",
      text: "On the other hand, Emma leads meetings which frequently run beyond their allocated time. This often leads to delays in other meetings and interferes with the duties of staff members. Emma should ensure that her meetings start and end on time; one possibility might be for her to attend time management courses.",
      analysis: {
        category: "Attendance, Punctuality & Time Management",
        status: "Weakness",
        recommendation: "Emma should ensure that her meetings start and end on time; one possibility might be for her to attend time management courses."
      }
    },
    {
      num: 3,
      heading: "3. Complex Communication & Interdepartmental Strategy",
      text: "Nevertheless, one of Emma’s most important skills is her ability to effectively communicate on complex topics. This ability has been very useful for the company over the past year and has helped us overcome several difficulties that occurred. One of the ways for Emma to advance next year could be to cooperate with other departments in order to develop an efficient communication plan.",
      analysis: {
        category: "Effective Communication Skills",
        status: "Strength",
        recommendation: "One of the ways for Emma to advance next year could be to cooperate with other departments in order to develop an efficient communication plan."
      }
    },
    {
      num: 4,
      heading: "4. Building Team Unity & Productivity",
      text: "In addition, one of the positives about Emma’s management style is her ability to build unity. This has helped reduce disagreements between team members over the past year and has improved productivity significantly. A good idea for Emma’s development next year may be to lead a series of seminars to share her experience.",
      analysis: {
        category: "Effective Cooperation & Team Unity",
        status: "Strength",
        recommendation: "A good idea for Emma's development next year may be to lead a series of seminars to share her experience."
      }
    },
    {
      num: 5,
      heading: "5. Process Innovation & Creative Initiative",
      text: "Throughout the year, Emma has performed her work as instructed. However, she did not take any opportunities to think about new ways she could be working. Improving processes and procedures could be a significant benefit to the company, and Emma might need to work on her creativity and how to think about the steps she takes in her work and how she can reduce the time it takes.",
      analysis: {
        category: "Creativity & Process Innovation",
        status: "Weakness",
        recommendation: "Emma might need to work on her creativity, improve processes and procedures, and reduce task time."
      }
    },
    {
      num: 6,
      heading: "6. Customer Expectations & Service Approach",
      text: "Finally, Emma needs to work on managing customer expectations. Her customers reported frequent delays and problems, which often turn out to be a problem with how she managed their expectations. Emma should be looking to discuss her ways of approaching customers with our customer service managers.",
      analysis: {
        category: "Customer Satisfaction & Expectation Management",
        status: "Weakness",
        recommendation: "Emma should be looking to discuss her ways of approaching customers with our customer service managers."
      }
    }
  ],
  smartboardSynthesis: {
    strengths: [
      "Adaptability to change, flexibility",
      "Effective communication skills (handling complex topics)",
      "Effective cooperation skills (building team unity & boosting productivity)"
    ],
    weaknesses: [
      "Poor time management (meetings running over allocated time)",
      "Lack of creativity (performing work only as instructed without process innovation)",
      "Poor customer satisfaction (mismanaging delivery expectations leading to complaints)"
    ],
    strategies: [
      "Adaptability: Continue working in this area and adapting to changing conditions.",
      "Attendance & Punctuality: Should ensure that her meetings start and end on time; attend time management courses.",
      "Communication: Cooperate with other departments in order to develop an efficient communication plan.",
      "Cooperation: Lead a series of seminars to share her experience in team building.",
      "Creativity: Improve processes and procedures; think about steps taken in work to reduce time.",
      "Customer satisfaction: Discuss her ways of approaching customers with the customer service managers."
    ]
  }
};

const SESSION_17_SMARTBOARD_MATCHING = [
  {
    category: "Time management",
    pos: "punctual, organized, meets deadlines",
    neg: "always late, disorganized, misses deadlines",
    arCategory: "إدارة الوقت والالتزام بالمواعيد"
  },
  {
    category: "Communication",
    pos: "clear, articulate, good listener",
    neg: "unclear, talks too much, poor listener",
    arCategory: "مهارات التواصل والاستماع الفعال"
  },
  {
    category: "Teamwork skills",
    pos: "cooperative, supportive, dependable",
    neg: "uncooperative, selfish, unreliable",
    arCategory: "مهارات العمل الجماعي ودعم الفريق"
  },
  {
    category: "Creativity and innovation",
    pos: "imaginative, resourceful, forward-thinking",
    neg: "unoriginal, narrow-minded, resistant to change",
    arCategory: "الإبداع والابتكار والتفكير المستقبلي"
  },
  {
    category: "Customer satisfaction",
    pos: "polite, attentive, service-minded",
    neg: "rude, indifferent, unhelpful",
    arCategory: "إرضاء العملاء وحسن الاستقبال والخدمة"
  },
  {
    category: "Initiative",
    pos: "proactive, self-motivated, takes charge",
    neg: "passive, dependent, needs supervision",
    arCategory: "روح المبادرة والدافع الذاتي"
  },
  {
    category: "Job knowledge",
    pos: "knowledgeable, skilled, experienced",
    neg: "inexperienced, unskilled, uninformed",
    arCategory: "المعرفة التخصصية والخبرة الوظيفية"
  },
  {
    category: "Leadership",
    pos: "inspiring, confident, decisive",
    neg: "bossy, indecisive, lacks authority",
    arCategory: "القيادة والحسم وإلهام الآخرين"
  },
  {
    category: "Managerial skills",
    pos: "fair, organized, strategic",
    neg: "unfair, disorganized, poor planner",
    arCategory: "المهارات الإدارية والتخطيط الاستراتيجي"
  },
  {
    category: "Problem-solving skills",
    pos: "analytical, practical, calm under pressure",
    neg: "impulsive, panics easily, avoids problems",
    arCategory: "حل المشكلات والهدوء تحت الضغط"
  }
];

const SESSION_17_VOCAB_GROUPS = [
  {
    title: "1. Review Stages & Performance Metrics",
    badge: "Official Review Procedures & Outcomes",
    icon: "📋",
    desc: "Terminology surrounding formal review meetings, performance criteria, constructive evaluation, and managerial promotions.",
    words: ["appraisal", "performance", "objective", "promotion", "workload", "productivity", "as instructed", "readily", "management style"]
  },
  {
    title: "2. Timekeeping & Workplace Efficiency",
    badge: "Deadlines, Scheduling & Meeting Management",
    icon: "⏱️",
    desc: "Core vocabulary focused on establishing measurable goals, punctual habits, respecting deadlines, allocated time, and avoiding interference.",
    words: ["allocated time", "deadline", "punctuality", "time management", "run beyond", "interfere with", "frequent delay", "procedure", "turn out"]
  },
  {
    title: "3. Communication, Collaboration & Team Unity",
    badge: "Team Cohesion & Interdepartmental Strategy",
    icon: "👥",
    desc: "Qualities that build team unity, encourage cooperation, handle disagreements peacefully, and manage communication effectively.",
    words: ["build unity", "cooperate", "disagreement", "efficient plan", "initiative", "overcome difficulties", "constructive", "recommendation", "expectation"]
  },
  {
    title: "4. Adaptability, Creativity & Client Relations",
    badge: "Flexibility, Innovation & Customer Service",
    icon: "💡",
    desc: "Action-oriented lexis describing strengths, addressing weaknesses, embracing adaptability, altering course, and applying creativity.",
    words: ["adaptability", "alter course", "circumstances", "creativity", "approach customers", "customer expectation", "strength", "weakness", "resourceful"]
  }
];

const SESSION_17_MODALS_LAB = {
  rule: "In professional appraisals, we use modal verbs (could, may, might, should) followed by a bare infinitive (base form of the verb) to give polite recommendations and developmental suggestions rather than giving strict authoritarian orders.",
  situations: [
    {
      num: 1,
      situation: "Anna has problems sleeping at night.",
      boardAnswer: "She could try sleeping pills. / She might avoid caffeine.",
      modalUsed: "could / might + base verb",
      arExpl: "توصية مهذبة باستخدام could أو might متبوعة بالمصدر بدون to."
    },
    {
      num: 2,
      situation: "Alexander wants to sell his flat.",
      boardAnswer: "He might try advertising online.",
      modalUsed: "might + try advertising",
      arExpl: "اقتراح فكرة محتملة باستخدام might try."
    },
    {
      num: 3,
      situation: "Maria can’t give up smoking.",
      boardAnswer: "She might go on a special course.",
      modalUsed: "might + go",
      arExpl: "اقتراح حضور دورة متخصصة باستخدام might."
    },
    {
      num: 4,
      situation: "There’re some really strange noises coming from my car’s engine.",
      boardAnswer: "You should be able to take it to a mechanic.",
      modalUsed: "should + be able to take",
      arExpl: "توصية عملية قوية باستخدام should."
    },
    {
      num: 5,
      situation: "Your friend doesn’t know what to get for his girlfriend’s birthday.",
      boardAnswer: "You could always go with flowers.",
      modalUsed: "could + always go",
      arExpl: "اقتراح خيار كلاسيكي مضمون باستخدام could always."
    },
    {
      num: 6,
      situation: "Sasha has nothing to wear to the opera.",
      boardAnswer: "You may borrow my suit / dress.",
      modalUsed: "may + borrow",
      arExpl: "عرض مهذب وموافقة كريمة باستخدام may borrow."
    },
    {
      num: 7,
      situation: "Bjorn doesn’t know what to do on his holiday.",
      boardAnswer: "You could visit a local travel agent.",
      modalUsed: "could + visit",
      arExpl: "توصية مفيدة باستشارة وكيل سياحة باستخدام could."
    },
    {
      num: 8,
      situation: "Kira hasn’t got enough money to buy a flat.",
      boardAnswer: "She might ask bank for a loan.",
      modalUsed: "might + ask",
      arExpl: "اقتراح التقدم بطلب قرض بنكي باستخدام might."
    }
  ]
};

const SESSION_17_DISCUSSION_LAB = [
  {
    num: 1,
    title: "Task 1: Delivering Constructive Appraisal Feedback",
    prompt: "Roleplay: You are conducting an annual performance review with a team member who is exceptionally creative and loved by customers, but frequently misses administrative deadlines and submits disorganized expense reports. How do you deliver constructive feedback?",
    modelSpeech: "Thank you for joining me today, Sarah. First, I want to formally commend your exceptional creativity and the wonderful rapport you have built with our premier clients—customer satisfaction scores in your sector are up by twenty percent! However, looking at your administrative duties, there is an area we need to address. Several expense reports and project dossiers have missed their deadlines over the past quarter. Emma and I recommend that you set aside thirty minutes every Friday afternoon strictly for administration. You might also consider using our project management software notifications. How do you feel about implementing that schedule?",
    audioText: "First, I want to commend your exceptional creativity and customer rapport. However, several expense reports missed deadlines. We recommend setting aside thirty minutes every Friday for administration. How do you feel about that?",
    keyLexisUsed: ["appraisal", "commendable", "deadline", "constructive", "recommendation", "administration"]
  },
  {
    num: 2,
    title: "Task 2: Negotiating a Promotion & Professional Development Budget",
    prompt: "Roleplay: You are Emma during your review with the company director. You want to ask for a promotion to Senior Manager, but the director has raised concerns about your meeting durations. How do you justify your promotion request while presenting a clear strategy?",
    modelSpeech: "I truly appreciate your feedback regarding meeting management. I completely accept that allowing discussions to run over their allocated time creates knock-on delays for the department. To solve this immediately, I have already registered for an executive time-management seminar starting next Tuesday, and I am establishing strict fifteen-minute agendas for all team standups. Over the past three years, I have successfully adapted to departmental restructuring and boosted our team productivity significantly. With this structured improvement in place, I believe I am fully ready to take on the Senior Manager responsibilities.",
    audioText: "I appreciate your feedback regarding meeting management. I accept that running over time causes delays. I have registered for a time-management seminar and set strict agendas. I believe I am ready for the Senior Manager role.",
    keyLexisUsed: ["promotion", "time management", "allocated time", "productivity", "adaptability", "objective"]
  },
  {
    num: 3,
    title: "Task 3: Best Employee Bonus Decision (Handout p. 4 Ex 4)",
    prompt: "Group Discussion: Review Emma's appraisal alongside other candidates. Should she be awarded the annual performance bonus, or should the bonus be reserved for a staff member with zero timekeeping issues?",
    modelSpeech: "While Emma undeniably possesses commendable strengths in interdepartmental communication and team unity, awarding her the top performance bonus this year might send the wrong message regarding organizational discipline. Time management and customer satisfaction are core operational pillars. Instead, I propose awarding her a targeted professional development grant to cover her leadership training, with an explicit agreement that meeting punctuality and customer complaint resolution will be re-evaluated in six months for a formal promotion.",
    audioText: "Awarding Emma the top bonus might send the wrong message regarding discipline. I propose awarding her a targeted professional development grant, with a formal review in six months.",
    keyLexisUsed: ["performance", "bonus", "punctuality", "development plan", "criteria", "managerial"]
  }
];

const SESSION_17_TEACHER_FEEDBACK = [
  {
    id: "clinic17_1",
    incorrect: "He worked in this position for 2 years.",
    struck: "worked",
    correct: "He has worked in this position for 2 years.",
    teacherPen: "has worked (Present Perfect for ongoing duration)",
    category: "Present Perfect vs. Past Simple with 'for 2 years' (Smartboard 9)",
    rule: "When an employee started a job in the past and is still currently in that same job today, you must use the Present Perfect: 'He has worked in this position for two years.' Using Past Simple ('He worked') means he has already left the position.",
    arRule: "المضارع التام مع المدة الزمنية: بما أن الموظف ما زال في وظيفته حتى اللحظة، يجب استخدام المضارع التام (He has worked for 2 years). استخدام الماضي البسيط يعني أنه ترك الوظيفة.",
    speech: "He has worked in this position for two years."
  },
  {
    id: "clinic17_2",
    incorrect: "She have high problem-solving skills.",
    struck: "have high",
    correct: "She has commendable (or strong) problem-solving skills.",
    teacherPen: "has commendable / strong",
    category: "Subject-Verb Agreement & Natural Business Collocations (Smartboard 9)",
    rule: "Two errors: 1) Third person singular subject 'She' requires 'has', not 'have'. 2) In professional appraisal reports, we do not say 'high skills'; the standard professional collocations are 'commendable skills', 'strong skills', or 'exceptional problem-solving skills'.",
    arRule: "تصحيحان: 1) توافق الفعل مع الفاعل: She has وليس have. 2) المتلازمات اللفظية المهنية: لا يقال high skills بل commendable skills (مهارات جديرة بالثناء) أو strong skills.",
    speech: "She has commendable problem-solving skills."
  },
  {
    id: "clinic17_3",
    incorrect: "He should work his creativity.",
    struck: "work his",
    correct: "He should work on his creativity.",
    teacherPen: "work on his",
    category: "Preposition with Skill Improvement (Smartboard 9)",
    rule: "The phrasal verb meaning 'to spend time producing or improving something' is 'work on'. You work on your weaknesses, work on your punctuality, or work on your creativity. Never omit 'on'.",
    arRule: "حرف الجر مع فعل التطوير: للتعبير عن العمل على تحسين مهارة أو جانب معين نستخدم دائماً حرف الجر on: work on his creativity.",
    speech: "He should work on his creativity."
  },
  {
    id: "clinic17_4",
    incorrect: "He can miss deadlines.",
    struck: "miss",
    correct: "He can meet deadlines.",
    teacherPen: "meet deadlines (Professional achievement)",
    category: "Opposite Collocation in Performance Reviews (Smartboard 9)",
    rule: "In employee appraisals, finishing tasks on time is described with the positive collocation 'meet deadlines'. 'Miss deadlines' is a serious failure. Saying 'He can miss deadlines' as praise is a severe semantic confusion.",
    arRule: "متلازمة الالتزام بالمواعيد: إنجاز العمل في الوقت المحدد يسمى meet deadlines، بينما miss deadlines يعني الفشل في الالتزام بالموعد النهائي.",
    speech: "He is always able to meet deadlines."
  },
  {
    id: "clinic17_5",
    incorrect: "I make my best in my work every day.",
    struck: "make my best",
    correct: "I do my best in my work every day.",
    teacherPen: "do my best (Fixed collocation)",
    category: "Make vs. Do Collocation Error",
    rule: "Effort, duty, and performance collocate with 'do', not 'make'. The fixed English idiom is always 'do one's best': 'I always do my best in my work.'",
    arRule: "المتلازمة اللفظية الثابتة: بذل الجهد يقترن بالفعل do وليس make: يقال دائماً do my best وليس make my best.",
    speech: "I do my best in my work every day."
  }
];

const SESSION_17_PRONUNCIATION_LAB = [
  {
    category: "Silent Letters & Weak Forms in Modal Verbs (could, should, would)",
    rule: "In the modal auxiliary verbs 'could', 'should', and 'would', the letter 'l' is completely silent (/kʊd/, /ʃʊd/, /wʊd/). When followed by 'have' in connected speech, they reduce to weak forms: 'should have' -> /ˈʃʊd.əv/.",
    items: [
      {
        word: "could",
        ipa: "/kʊd/",
        ruleNote: "Silent 'l'. Rhymes with 'good' /ɡʊd/. Never pronounce the 'l'."
      },
      {
        word: "should",
        ipa: "/ʃʊd/",
        ruleNote: "Silent 'l'. Starts with /ʃ/ and ends with /d/."
      },
      {
        word: "should ensure",
        ipa: "/ʃʊd ɪnˈʃɔːr/",
        ruleNote: "Smooth transition from /d/ to /ɪ/ without a glottal pause."
      }
    ]
  },
  {
    category: "Syllable Stress in Appraisal & Management Terminology",
    rule: "Mastering the rhythmic stress peaks in polysyllabic business vocabulary ensures that your speech sounds authoritative and professional during appraisals.",
    items: [
      {
        word: "appraisal",
        ipa: "/əˈpreɪ.zəl/",
        stress: "Second syllable: ap-PRAI-sal."
      },
      {
        word: "punctuality",
        ipa: "/ˌpʌŋk.tʃuˈæl.ə.ti/",
        stress: "Primary stress on third syllable: punk-chu-AL-i-ty."
      },
      {
        word: "productivity",
        ipa: "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        stress: "Primary stress on third syllable: prod-uk-TIV-i-ty."
      },
      {
        word: "recommendation",
        ipa: "/ˌrek.ə.menˈdeɪ.ʃən/",
        stress: "Primary stress on fourth syllable: rek-om-en-DAY-shun."
      }
    ]
  }
];

const SESSION_17_NOTEBOOK_PAGES = [
  {
    id: "s17_handout_report",
    title: "Handout Page 2: Emma's 3-Year Appraisal Report (Authentic Student Worksheet)",
    imgUrl: "./assets/images/session17_handout_emma_report.jpg",
    tag: "Authentic Student Handout & Notes",
    summary: "Verbatim British Council printed worksheet (ARC_B1_01_I016CEU) with authentic student pen underlines, modal recommendations, and vocabulary annotations.",
    fullTranscription: `[BRITISH COUNCIL OFFICIAL WORKSHEET: EMMA'S APPRAISAL REPORT]
Paragraph 1:
"Over the past year there have been a number of changes in our department. Emma has readily accepted change and has adapted to circumstances around her quite well. She adjusts her workload to meet the needs of the team and handles a variety of assignments. She is good at altering course when it is required. Over the next year Emma could continue working in this area and adapting to changing conditions."
• Student Annotation: Underlined "altering course" (idiomatic phrase for changing plans).

Paragraph 2:
"On the other hand, Emma leads meetings which frequently run beyond their allocated time. This often leads to delays in other meetings and interferes with the duties of staff members. Emma should [ensure] that her meetings start and end on time; one possibility might be for her to attend time management courses."
• Student Annotation: Underlined "leads meetings which frequently run beyond their allocated time" and "delays in other meetings and interferes with the duties of staff members". Boxed modal verb "ensure" and underlined "attend time management courses".

Paragraph 3:
"Nevertheless, one of Emma's most important skills is her ability to effectively communicate on complex topics. This ability has been very useful for the company over the past year and has helped us overcome several difficulties that occurred. One of the ways for Emma to advance next year could be to cooperate with other departments in order to develop an efficient communication plan."
• Student Annotation: Underlined "ability to effectively communicate on complex topics", "ability", and "cooperate with other departments in order to develop an efficient communication plan".

Paragraph 4:
"In addition, one of the positives about Emma's management style is her ability to build unity. This has helped reduce disagreements between team members over the past year and has improved productivity significantly. A good idea for Emma's development next year may be to lead a series of seminars to share her experience."
• Student Annotation: Underlined "ability to build unity", "reduce disagreements between team members over the past year", "improved productivity significantly", and the whole recommendation sentence.

Paragraph 5:
"Throughout the year, Emma has performed her work as instructed. However, she did not take any opportunities to think about new ways she could be working. Improving processes and procedures could be a significant benefit to the company, and Emma might need to work on her creativity and how to think about the steps she takes in her work and how she can reduce the time it takes."
• Student Annotation: Underlined "processes and procedures could be a significant benefit to the company, and Emma might need to work on her creativity and how to think about the steps she takes in her work and how she can reduce the time it takes".

Paragraph 6:
"Finally, Emma needs to work on managing customer expectations. Her customers reported frequent delays and problems, which often turn out to be a problem with how she managed their expectations. Emma should be looking to discuss her ways of approaching customers with our customer service managers."
• Student Annotation: Underlined "managing customer expectations. Her customers reported frequent delays and problems" and "ways of approaching customers with our customer service managers".

Source: www.britishcouncil.org • ARC_B1_01_I016CEU`
  },
  {
    id: "s17_board_1",
    title: "Smartboard Slide 1: What is a Job Appraisal?",
    imgUrl: "./assets/images/session17_board_what_is_appraisal.jpg",
    tag: "Authentic Smartboard Capture",
    summary: "Teacher smartboard presentation defining a job appraisal as an official assessment of strengths, weaknesses, and testing.",
    fullTranscription: `[SMARTBOARD SLIDE: WHAT'S A JOB APPRAISAL?]
"The official or formal assessment of the strengths and weaknesses of someone or something. Appraisal often involves observation or some kind of testing."

Key concepts highlighted:
• Formal vs informal feedback
• Assessing both strengths and growth opportunities
• Observation, KPI metrics, and structured development`
  },
  {
    id: "s17_board_2",
    title: "Smartboard Slide 2: Lead-in Questions & Model Classroom Answers",
    imgUrl: "./assets/images/session17_board_lead_in_answers.jpg",
    tag: "Classroom Discussion Board",
    summary: "British Council whiteboard capturing student answers to the Lead-in questions on appraisal opportunities, drawbacks, and frequency.",
    fullTranscription: `[SMARTBOARD SLIDE: LEAD-IN DISCUSSION ANSWERS]
Questions & Green Board Answers:
2. What opportunities for employees do job appraisals create?
   ➔ "Employees are aware of their strengths and weaknesses and can plan future development."

3. What could be some drawbacks of job appraisals?
   ➔ "It can be a nerve-wracking experience."

4. How often do you think such reviews should take place?
   ➔ "Usually at the end of every year."`
  },
  {
    id: "s17_board_3",
    title: "Smartboard Slide 3: Emma's Strengths, Weaknesses & Improvement Strategies",
    imgUrl: "./assets/images/session17_board_strengths_weaknesses.jpg",
    tag: "Case Study Analysis Slide",
    summary: "Complete whiteboard breakdown of Emma's 3-year performance review into Strengths, Weaknesses, and Improvement Strategies.",
    fullTranscription: `[SMARTBOARD SLIDE: EMMA'S REVIEW ANALYSIS]
1. Emma's Strengths & Weaknesses:
   Strengths:
   • Adaptability to change, flexibility
   • Effective communication skills
   • Effective cooperation skills
   
   Weaknesses:
   • Poor time management
   • Lack of creativity
   • Poor customer satisfaction

2. Strategies she should come up with to improve performance:
   • Adaptability: Continue working in this area and adapting to changing conditions.
   • Attendance & Punctuality: Should ensure that her meetings start and end on time.
   • Communication: Cooperate with other departments in order to develop an efficient communication plan.
   • Cooperation: Lead a series of seminars to share her experience.
   • Creativity: Improve processes and procedures; think about steps taken in work and how she can reduce time.
   • Customer satisfaction: Discuss her ways of approaching customers with the CS managers.`
  },
  {
    id: "s17_board_4",
    title: "Smartboard Slide 4: Language Focus — Modal Verbs for Future Development",
    imgUrl: "./assets/images/session17_board_modal_verbs_rules.jpg",
    tag: "Grammar Analysis Slide",
    summary: "Classroom language focus analyzing phrases used for Emma's future development and establishing rules for modal verbs.",
    fullTranscription: `[SMARTBOARD SLIDE: LANGUAGE FOCUS - MODAL VERBS]
1. Phrases used to talk about future development for Emma:
   • could continue working on this ...
   • might be for her to attend time management courses
   • could be to cooperate with other departments
   • may be to lead a series of seminars
   • might need to work on ...
   • should be looking to ...

2. Do these phrases express strict orders or recommendations?
   ➔ Recommendations for possible development.

3. Do they refer to past, present or future?
   ➔ Future (and present development).

4. What words do we use after modal verbs?
   ➔ Bare Infinitive (base form of the verb without 'to').`
  },
  {
    id: "s17_board_5",
    title: "Smartboard Slide 5: 8 Situations & Recommended Actions",
    imgUrl: "./assets/images/session17_board_situations_recommendations.jpg",
    tag: "Classroom Practice Slide",
    summary: "Smartboard displaying the 8 authentic life and work situations with green-highlighted model recommendations using modals.",
    fullTranscription: `[SMARTBOARD SLIDE: 8 SITUATIONS & RECOMMENDATIONS]
1. Anna has problems sleeping at night.
   ➔ She could try sleeping pills.
2. Alexander wants to sell his flat.
   ➔ He might try advertising online.
3. Maria can’t give up smoking.
   ➔ She might go on a special course.
4. There’re some really strange noises from my car’s engine.
   ➔ You should be able to take it to a mechanic.
5. Your friend doesn’t know what to get for his girlfriend’s birthday.
   ➔ You could always go with flowers.
6. Sasha has nothing to wear to the opera.
   ➔ You may borrow my suit / dress.
7. Bjorn doesn’t know what to do on his holiday.
   ➔ You could visit a local travel agent.
8. Kira hasn’t got enough money to buy a flat.
   ➔ She might ask bank for a loan.`
  },
  {
    id: "s17_board_6",
    title: "Smartboard Slide 6: Feedback Categories & Adjectives Matrix",
    imgUrl: "./assets/images/session17_board_feedback_matrix.jpg",
    tag: "Vocabulary Matrix Slide",
    summary: "Comprehensive 10-category classroom table contrasting positive vs negative adjectives for performance evaluation.",
    fullTranscription: `[SMARTBOARD SLIDE: 10 FEEDBACK CATEGORIES MATRIX]
1. Time management:
   • Positive: punctual, organized, meets deadlines
   • Negative: always late, disorganized, misses deadlines
2. Communication:
   • Positive: clear, articulate, good listener
   • Negative: unclear, talks too much, poor listener
3. Teamwork skills:
   • Positive: cooperative, supportive, dependable
   • Negative: uncooperative, selfish, unreliable
4. Creativity and innovation:
   • Positive: imaginative, resourceful, forward-thinking
   • Negative: unoriginal, narrow-minded, resistant to change
5. Customer satisfaction:
   • Positive: polite, attentive, service-minded
   • Negative: rude, indifferent, unhelpful
6. Initiative:
   • Positive: proactive, self-motivated, takes charge
   • Negative: passive, dependent, needs supervision
7. Job knowledge:
   • Positive: knowledgeable, skilled, experienced
   • Negative: inexperienced, unskilled, uninformed
8. Leadership:
   • Positive: inspiring, confident, decisive
   • Negative: bossy, indecisive, lacks authority
9. Managerial skills:
   • Positive: fair, organized, strategic
   • Negative: unfair, disorganized, poor planner
10. Problem-solving skills:
   • Positive: analytical, practical, calm under pressure
   • Negative: impulsive, panics easily, avoids problems`
  },
  {
    id: "s17_board_7",
    title: "Smartboard Slide 7: Teacher Live Language Feedback Clinic",
    imgUrl: "./assets/images/session17_board_teacher_live_clinic.jpg",
    tag: "Error Analysis Whiteboard",
    summary: "Authentic teacher whiteboard capturing real student speech errors, strikethroughs, and grammatical corrections.",
    fullTranscription: `[TEACHER LIVE LANGUAGE FEEDBACK BOARD]
1. "He worked in this position for 2 years."
   Teacher correction in red: struck through "worked" ➔ "has worked"
   Rule: Present Perfect with "for 2 years" for continuing duration.

2. "She have high problem-solving skills."
   Teacher correction in red: struck through "have" ➔ "has", circled "high" ➔ "commendable" (or "strong")
   Rule: Subject-verb agreement (she has) & natural business collocations.

3. "He should work his creativity."
   Teacher correction in red: inserted preposition "on" ➔ "He should work on his creativity."
   Rule: Phrasal verb "work on" + skill.

4. "He can miss deadlines."
   Teacher correction in red: corrected "miss" ➔ "meet deadlines."
   Rule: Meet deadlines = positive achievement; miss deadlines = failure.`
  }
];


/* ==========================================================================
   SESSION 18: DESCRIBING THINGS AND EXPLAINING THEIR IMPORTANCE
   British Council Intermediate B1 • Focus on Fluency
   Handout ID: ARB_B1_08_I022CEU_HO_v1.0
   ========================================================================== */

const VOCAB_SESSION_18 = [
  {
    id: 1801,
    word: "sentimental",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/ˌsen.tɪˈmen.təl/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "Having value because it brings back personal memories and feelings.",
    b1Explain: "Important to you because of personal feelings and memories.",
    opposite: "unsentimental",
    arWord: "عاطفي / ذو قيمة معنوية غالية / متعلق بالذكريات",
    arMeaning: "ذو قيمة معنوية وعاطفية خاصة",
    sentence: "This old silver ring has immense sentimental value because my grandmother gave it to me.",
    def: "Having value because it brings back personal memories and feelings.",
    context: "This old silver ring has immense sentimental value because my grandmother gave it to me.",
    ar: "ذو قيمة معنوية وعاطفية خاصة",
    phonetic: "/ˌsen.tɪˈmen.təl/",
    partOfSpeech: "adj"
  },
  {
    id: 1802,
    word: "valuable",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ˈvæl.jə.bəl/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "Worth a large amount of money or having great practical importance.",
    b1Explain: "Worth a lot of money or very useful.",
    opposite: "worthless",
    arWord: "قيّم وثمين / ذو فائدة أو قيمة مادية أو معنوية كبرى",
    arMeaning: "قيّم / ثمين / عالي الأهمية",
    sentence: "The museum displayed valuable ancient coins made of pure gold and silver.",
    def: "Worth a large amount of money or having great practical importance.",
    context: "The museum displayed valuable ancient coins made of pure gold and silver.",
    ar: "قيّم / ثمين / عالي الأهمية",
    phonetic: "/ˈvæl.jə.bəl/",
    partOfSpeech: "adj"
  },
  {
    id: 1803,
    word: "expensive",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ɪkˈspen.sɪv/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "Costing a lot of money to buy or maintain.",
    b1Explain: "Costing a lot of money.",
    opposite: "cheap",
    arWord: "باهظ الثمن / غالٍ / عالي التكلفة",
    arMeaning: "باهظ الثمن / مكلف",
    sentence: "Laptops with high-speed processors are quite expensive in electronics shops.",
    def: "Costing a lot of money to buy or maintain.",
    context: "Laptops with high-speed processors are quite expensive in electronics shops.",
    ar: "باهظ الثمن / مكلف",
    phonetic: "/ɪkˈspen.sɪv/",
    partOfSpeech: "adj"
  },
  {
    id: 1804,
    word: "unique",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/juːˈniːk/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "Being the only one of its kind; unlike anything else.",
    b1Explain: "Special and unlike anything else in the world.",
    opposite: "common",
    arWord: "فريد من نوعه / لا مثيل له / استثنائي",
    arMeaning: "فريد من نوعه / لا مثيل له",
    sentence: "Each handmade pottery bowl has a unique shape and colorful pattern.",
    def: "Being the only one of its kind; unlike anything else.",
    context: "Each handmade pottery bowl has a unique shape and colorful pattern.",
    ar: "فريد من نوعه / لا مثيل له",
    phonetic: "/juːˈniːk/",
    partOfSpeech: "adj"
  },
  {
    id: 1805,
    word: "possession",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/pəˈzeʃ.ən/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "Something that you own or have in your control.",
    b1Explain: "An object or item that belongs to you.",
    opposite: "loan",
    arWord: "مقتنى شخصي / ملكية خاصة / حيازة شيء",
    arMeaning: "مقتنى / ملكية خاصة",
    sentence: "His passport and camera were his most prized possessions during his trip abroad.",
    def: "Something that you own or have in your control.",
    context: "His passport and camera were his most prized possessions during his trip abroad.",
    ar: "مقتنى / ملكية خاصة",
    phonetic: "/pəˈzeʃ.ən/",
    partOfSpeech: "noun"
  },
  {
    id: 1806,
    word: "inherit",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ɪnˈher.ɪt/",
    citation: "Handout Page 1 & Smartboard Lead-in",
    definition: "To receive money or property from someone after they die.",
    b1Explain: "To get property or money from a relative who passed away.",
    opposite: "disown",
    arWord: "يرث / يرث مالاً أو مقتنيات أو جينات من عائلته",
    arMeaning: "يرث / ينال تركة",
    sentence: "She inherited an antique wooden clock that had been in her family for generations.",
    def: "To receive money or property from someone after they die.",
    context: "She inherited an antique wooden clock that had been in her family for generations.",
    ar: "يرث / ينال تركة",
    phonetic: "/ɪnˈher.ɪt/",
    partOfSpeech: "verb"
  },
  {
    id: 1807,
    word: "leather",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈleð.ər/",
    citation: "Handout Page 2 & Smartboard Language Focus",
    definition: "Animal skin treated and used to make shoes, bags, and jackets.",
    b1Explain: "Durable material made from treated animal skin.",
    opposite: "fabric",
    arWord: "جلد طبيعي مدبوغ",
    arMeaning: "جلد طبيعي متين",
    sentence: "The briefcase was crafted from genuine black leather with neat stitching.",
    def: "Animal skin treated and used to make shoes, bags, and jackets.",
    context: "The briefcase was crafted from genuine black leather with neat stitching.",
    ar: "جلد طبيعي متين",
    phonetic: "/ˈleð.ər/",
    partOfSpeech: "noun"
  },
  {
    id: 1808,
    word: "metal",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈmet.əl/",
    citation: "Handout Page 2 & Smartboard Classroom Objects",
    definition: "A hard, solid material such as iron, steel, or gold.",
    b1Explain: "Hard, solid material like iron, steel, or aluminum.",
    opposite: "plastic",
    arWord: "معدن صلب / سبيكة فلزية",
    arMeaning: "معدن صلب",
    sentence: "These kitchen scissors are made of strong stainless metal.",
    def: "A hard, solid material such as iron, steel, or gold.",
    context: "These kitchen scissors are made of strong stainless metal.",
    ar: "معدن صلب",
    phonetic: "/ˈmet.əl/",
    partOfSpeech: "noun"
  },
  {
    id: 1809,
    word: "plastic",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈplæs.tɪk/",
    citation: "Handout Page 2 & Smartboard Classroom Objects",
    definition: "A light artificial material that can be shaped when soft.",
    b1Explain: "Light artificial material shaped into bottles, pens, or cases.",
    opposite: "metal",
    arWord: "بلاستيك / مادة لدنة صناعية",
    arMeaning: "بلاستيك / مادة لدنة",
    sentence: "The phone casing is made of durable lightweight plastic.",
    def: "A light artificial material that can be shaped when soft.",
    context: "The phone casing is made of durable lightweight plastic.",
    ar: "بلاستيك / مادة لدنة",
    phonetic: "/ˈplæs.tɪk/",
    partOfSpeech: "noun"
  },
  {
    id: 1810,
    word: "glass",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ɡlɑːs/",
    citation: "Handout Page 2 & Smartboard Materials",
    definition: "A hard clear material through which you can see clearly.",
    b1Explain: "Clear, hard material used in windows, screens, and bottles.",
    opposite: "opaque wood",
    arWord: "زجاج شفاف / كأس زجاجي",
    arMeaning: "زجاج شفاف",
    sentence: "The smartphone display is protected by scratch-resistant tempered glass.",
    def: "A hard clear material through which you can see clearly.",
    context: "The smartphone display is protected by scratch-resistant tempered glass.",
    ar: "زجاج شفاف",
    phonetic: "/ɡlɑːs/",
    partOfSpeech: "noun"
  },
  {
    id: 1811,
    word: "brass",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/brɑːs/",
    citation: "Smartboard Conversation 3 & Language Focus",
    definition: "A bright yellow metal made by mixing copper and zinc.",
    b1Explain: "Shiny yellow metal used for musical instruments and decorative locks.",
    opposite: "silver",
    arWord: "نحاس أصفر مصقول",
    arMeaning: "نحاس أصفر لامع",
    sentence: "His vintage leather briefcase has sturdy brass locks on both sides.",
    def: "A bright yellow metal made by mixing copper and zinc.",
    context: "His vintage leather briefcase has sturdy brass locks on both sides.",
    ar: "نحاس أصفر لامع",
    phonetic: "/brɑːs/",
    partOfSpeech: "noun"
  },
  {
    id: 1812,
    word: "rectangular",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/rekˈtæŋ.ɡjə.lər/",
    citation: "Handout Page 2 & Smartboard Slide 8",
    definition: "Shaped like a flat box with four straight sides and corners.",
    b1Explain: "Having four straight sides with opposite sides equal in length.",
    opposite: "circular",
    arWord: "مستطيل الشكل / ذو زوايا قائمة وأضلاع متفاوتة",
    arMeaning: "مستطيل الشكل",
    sentence: "The student carried a rectangular wooden box containing watercolor paints.",
    def: "Shaped like a flat box with four straight sides and corners.",
    context: "The student carried a rectangular wooden box containing watercolor paints.",
    ar: "مستطيل الشكل",
    phonetic: "/rekˈtæŋ.ɡjə.lər/",
    partOfSpeech: "adj"
  },
  {
    id: 1813,
    word: "triangular",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/traɪˈæŋ.ɡjə.lər/",
    citation: "Handout Page 2 (Shape Descriptors)",
    definition: "Having three straight sides and three points or angles.",
    b1Explain: "Having three sides and three sharp corners.",
    opposite: "square",
    arWord: "مثلث الشكل / ذو ثلاثة أضلاع وزوايا",
    arMeaning: "مثلث الشكل",
    sentence: "Road caution signs in the UK often have a distinctive triangular shape.",
    def: "Having three straight sides and three points or angles.",
    context: "Road caution signs in the UK often have a distinctive triangular shape.",
    ar: "مثلث الشكل",
    phonetic: "/traɪˈæŋ.ɡjə.lər/",
    partOfSpeech: "adj"
  },
  {
    id: 1814,
    word: "round",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/raʊnd/",
    citation: "Handout Page 2 (Shape Descriptors)",
    definition: "Having a circular shape like a ball, ring, or circle.",
    b1Explain: "Shaped like a circle or ball.",
    opposite: "square",
    arWord: "مستدير / دائري الشكل / كروي",
    arMeaning: "مستدير / دائري",
    sentence: "Grandpa wore a round antique watch on his left wrist.",
    def: "Having a circular shape like a ball, ring, or circle.",
    context: "Grandpa wore a round antique watch on his left wrist.",
    ar: "مستدير / دائري",
    phonetic: "/raʊnd/",
    partOfSpeech: "adj"
  },
  {
    id: 1815,
    word: "tiny",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtaɪ.ni/",
    citation: "Handout Page 2 (Dimension & Size)",
    definition: "Extremely small in size, volume, or physical dimensions.",
    b1Explain: "Very small in size or quantity.",
    opposite: "huge",
    arWord: "متناهي الصغر / ضئيل الحجم جداً",
    arMeaning: "ضئيل الحجم / بالغ الصغر",
    sentence: "The device features a tiny memory chip capable of storing thousands of files.",
    def: "Extremely small in size, volume, or physical dimensions.",
    context: "The device features a tiny memory chip capable of storing thousands of files.",
    ar: "ضئيل الحجم / بالغ الصغر",
    phonetic: "/ˈtaɪ.ni/",
    partOfSpeech: "adj"
  },
  {
    id: 1816,
    word: "average-sized",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ˈæv.ər.ɪdʒ saɪzd/",
    citation: "Smartboard Conversation 3 (Briefcase Description)",
    definition: "Having an ordinary medium size, neither very big nor small.",
    b1Explain: "Medium in size, not too large and not too small.",
    opposite: "extreme",
    arWord: "متوسط الحجم / قياسي ومعتاد الأبعاد",
    arMeaning: "متوسط الحجم والقياس",
    sentence: "He carried an average-sized shoulder bag suitable for commuting on the train.",
    def: "Having an ordinary medium size, neither very big nor small.",
    context: "He carried an average-sized shoulder bag suitable for commuting on the train.",
    ar: "متوسط الحجم والقياس",
    phonetic: "/ˈæv.ər.ɪdʒ saɪzd/",
    partOfSpeech: "adj"
  },
  {
    id: 1817,
    word: "classical",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/ˈklæs.ɪ.kəl/",
    citation: "Handout Page 2 & Smartboard Slide 7",
    definition: "Traditional and timeless in design, style, or appearance.",
    b1Explain: "Traditional and high quality in a style that never dates.",
    opposite: "modern",
    arWord: "كلاسيكي / تقليدي رفيع المستوى وعريق",
    arMeaning: "كلاسيكي أنيق / تقليدي رفيع الذوق",
    sentence: "He bought a classical trench coat that always looks elegant in rainy weather.",
    def: "Traditional and timeless in design, style, or appearance.",
    context: "He bought a classical trench coat that always looks elegant in rainy weather.",
    ar: "كلاسيكي أنيق / تقليدي رفيع الذوق",
    phonetic: "/ˈklæs.ɪ.kəl/",
    partOfSpeech: "adj"
  },
  {
    id: 1818,
    word: "brand new",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ˌbrænd ˈnjuː/",
    citation: "Handout Page 2 (Age & Quality)",
    definition: "Completely new and never used or worn by anyone before.",
    b1Explain: "Completely new and never used before.",
    opposite: "second-hand",
    arWord: "جديد تماماً / غير مستعمل ولسه في كرتونته",
    arMeaning: "جديد كلياً / غير مستعمل مسبقاً",
    sentence: "Her parents bought her a brand new bicycle for her sixteenth birthday.",
    def: "Completely new and never used or worn by anyone before.",
    context: "Her parents bought her a brand new bicycle for her sixteenth birthday.",
    ar: "جديد كلياً / غير مستعمل مسبقاً",
    phonetic: "/ˌbrænd ˈnjuː/",
    partOfSpeech: "adj"
  },
  {
    id: 1819,
    word: "reliable",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈlaɪ.ə.bəl/",
    citation: "Handout Page 2 (Quality & Utility)",
    definition: "Able to work well and be trusted to perform reliably.",
    b1Explain: "Trustworthy and performing well every time you use it.",
    opposite: "unreliable",
    arWord: "موثوق به / يعتمد عليه ولا يتعطل بسهولة",
    arMeaning: "موثوق / يعتمد عليه",
    sentence: "My old sedan car is still remarkably reliable on long highway journeys.",
    def: "Able to work well and be trusted to perform reliably.",
    context: "My old sedan car is still remarkably reliable on long highway journeys.",
    ar: "موثوق / يعتمد عليه",
    phonetic: "/rɪˈlaɪ.ə.bəl/",
    partOfSpeech: "adj"
  },
  {
    id: 1820,
    word: "fragile",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/ˈfrædʒ.aɪl/",
    citation: "Handout Page 2 (easy to break)",
    definition: "Easily broken or damaged and requiring delicate, gentle handling.",
    b1Explain: "Delicate and easily broken if dropped or handled roughly.",
    opposite: "unbreakable",
    arWord: "هش / قابل للكسر بسرعة / رقيق ويحتاج عناية",
    arMeaning: "سريع العطب / قابل للكسر / هش",
    sentence: "Be careful with that fragile porcelain tea set when packing the boxes.",
    def: "Easily broken or damaged and requiring delicate, gentle handling.",
    context: "Be careful with that fragile porcelain tea set when packing the boxes.",
    ar: "سريع العطب / قابل للكسر / هش",
    phonetic: "/ˈfrædʒ.aɪl/",
    partOfSpeech: "adj"
  },
  {
    id: 1821,
    word: "handle",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈhæn.dəl/",
    citation: "Handout Page 2 (Object Components)",
    definition: "The part of an object made for holding or opening.",
    b1Explain: "The part of an item you hold with your hand.",
    opposite: "base",
    arWord: "مقبض / يد الباب أو الحقيبة / يتعامل مع موقف",
    arMeaning: "مقبض / يد الحقيبة أو الإبريق",
    sentence: "The leather briefcase has a reinforced handle that makes it comfortable to carry.",
    def: "The part of an object made for holding or opening.",
    context: "The leather briefcase has a reinforced handle that makes it comfortable to carry.",
    ar: "مقبض / يد الحقيبة أو الإبريق",
    phonetic: "/ˈhæn.dəl/",
    partOfSpeech: "noun"
  },
  {
    id: 1822,
    word: "lid",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/lɪd/",
    citation: "Handout Page 2 (Object Components)",
    definition: "A top cover for closing a pot, box, or container.",
    b1Explain: "A removable top that covers and seals a container.",
    opposite: "bottom",
    arWord: "غطاء / غطاء الإناء أو الصندوق / جفن العين",
    arMeaning: "غطاء الإناء أو الصندوق",
    sentence: "Lift the lid of the jewelry box carefully to see the velvet interior.",
    def: "A top cover for closing a pot, box, or container.",
    context: "Lift the lid of the jewelry box carefully to see the velvet interior.",
    ar: "غطاء الإناء أو الصندوق",
    phonetic: "/lɪd/",
    partOfSpeech: "noun"
  },
  {
    id: 1823,
    word: "lock",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/lɒk/",
    citation: "Handout Page 2 & Smartboard Conversation 3",
    definition: "A mechanical device kept closed and opened with a key.",
    b1Explain: "A secure device opened with a key or special combination.",
    opposite: "open latch",
    arWord: "قفل أمان / يقفل بالمفتاح / يغلق بإحكام",
    arMeaning: "قفل أمان ومزلاج",
    sentence: "He secured his suitcase with a small metal padlock before his flight.",
    def: "A mechanical device kept closed and opened with a key.",
    context: "He secured his suitcase with a small metal padlock before his flight.",
    ar: "قفل أمان ومزلاج",
    phonetic: "/lɒk/",
    partOfSpeech: "noun"
  },
  {
    id: 1824,
    word: "battery",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈbæt.ər.i/",
    citation: "Handout Page 2 (Object Power Components)",
    definition: "A portable device that supplies electricity to electronic devices.",
    b1Explain: "A small object providing electrical energy to devices.",
    opposite: "mains power",
    arWord: "بطارية شحن / حجارة الطاقة الكهربائية",
    arMeaning: "بطارية طاقة كهربائية",
    sentence: "Her wireless mouse stopped responding because the alkaline battery was completely flat.",
    def: "A portable device that supplies electricity to electronic devices.",
    context: "Her wireless mouse stopped responding because the alkaline battery was completely flat.",
    ar: "بطارية طاقة كهربائية",
    phonetic: "/ˈbæt.ər.i/",
    partOfSpeech: "noun"
  },
  {
    id: 1825,
    word: "fingerprint",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈfɪŋ.ɡə.prɪnt/",
    citation: "Smartboard Conversation 1 (Jo's Phone)",
    definition: "The mark made by a person's fingertip used for security.",
    b1Explain: "The unique pattern on your finger used to unlock phones.",
    opposite: "password",
    arWord: "بصمة الإصبع / أثر البصمة البيومترية",
    arMeaning: "بصمة الإصبع الحيوية",
    sentence: "Modern smartphones use fingerprint technology to unlock the screen instantly and securely.",
    def: "The mark made by a person's fingertip used for security.",
    context: "Modern smartphones use fingerprint technology to unlock the screen instantly and securely.",
    ar: "بصمة الإصبع الحيوية",
    phonetic: "/ˈfɪŋ.ɡə.prɪnt/",
    partOfSpeech: "noun"
  },
  {
    id: 1826,
    word: "remind",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈmaɪnd/",
    citation: "Smartboard Conversation 2 & Language Focus",
    definition: "To cause someone to remember a person, event, or duty.",
    b1Explain: "To make someone remember an important person or memory.",
    opposite: "forget",
    arWord: "يذكّر / يستحضر في الذهن ذكرى أو موعداً",
    arMeaning: "يُذكّر بذكرى أو شخص عزيز",
    sentence: "Looking at this vintage pocket watch always reminds me of my beloved grandfather.",
    def: "To cause someone to remember a person, event, or duty.",
    context: "Looking at this vintage pocket watch always reminds me of my beloved grandfather.",
    ar: "يُذكّر بذكرى أو شخص عزيز",
    phonetic: "/rɪˈmaɪnd/",
    partOfSpeech: "verb"
  },
  {
    id: 1827,
    word: "anniversary",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌæn.ɪˈvɜː.sər.i/",
    citation: "Smartboard Conversation 3 (Tenth Anniversary)",
    definition: "The date on which an important event happened in the past.",
    b1Explain: "A yearly celebration of a special date like a wedding.",
    opposite: "ordinary day",
    arWord: "ذكرى سنوية / عيد سنوي لمناسبة زواج أو تأسيس",
    arMeaning: "ذكرى سنوية (زواج أو مناسبة هامة)",
    sentence: "They exchanged meaningful silver gifts on their tenth wedding anniversary.",
    def: "The date on which an important event happened in the past.",
    context: "They exchanged meaningful silver gifts on their tenth wedding anniversary.",
    ar: "ذكرى سنوية (زواج أو مناسبة هامة)",
    phonetic: "/ˌæn.ɪˈvɜː.sər.i/",
    partOfSpeech: "noun"
  },
  {
    id: 1828,
    word: "smart cookie",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/smɑːt ˈkʊk.i/",
    citation: "Smartboard Slide 12 (Idiom of the Day)",
    definition: "A very intelligent, clever, and quick-thinking person.",
    b1Explain: "An intelligent, capable person who solves problems quickly.",
    opposite: "foolish person",
    arWord: "شخص ذكي ولماح / داهية وشديد الفطنة",
    arMeaning: "شخص شديد الفطنة والذكاء وسريع البديهة",
    sentence: "Elena figured out the complex logic puzzle in two minutes; she is one smart cookie!",
    def: "A very intelligent, clever, and quick-thinking person.",
    context: "Elena figured out the complex logic puzzle in two minutes; she is one smart cookie!",
    ar: "شخص شديد الفطنة والذكاء وسريع البديهة",
    phonetic: "/smɑːt ˈkʊk.i/",
    partOfSpeech: "idiom"
  }
];

const SESSION_18_VOCAB_GROUPS = [
  {
    title: "1. Emotional & Monetary Value",
    badge: "Significance, Sentiment & Ownership",
    icon: "💎",
    desc: "Terminology used to convey what an object is worth, how it was acquired, its personal importance, and special family history.",
    words: ["sentimental", "valuable", "expensive", "unique", "possession", "inherit", "remind"]
  },
  {
    title: "2. Materials & Craftsmanship",
    badge: "Substances & Physical Composition",
    icon: "🧱",
    desc: "Target materials describing what items are manufactured from, texture, metallic elements, and tactile surfaces.",
    words: ["leather", "metal", "plastic", "glass", "brass", "fragile", "classical"]
  },
  {
    title: "3. Dimensions, Shapes & Features",
    badge: "Geometry, Forms & Structural Parts",
    icon: "📐",
    desc: "Geometric adjectives and functional hardware components used to specify the exact physical appearance of personal items.",
    words: ["rectangular", "triangular", "round", "tiny", "average-sized", "handle", "lid"]
  },
  {
    title: "4. Practical Utility & Keepsakes",
    badge: "Reliability, Modern Tech & Occasions",
    icon: "⌚",
    desc: "Terms describing durability, security locks, modern battery power, fingerprint recognition, special anniversaries, and clever wits.",
    words: ["brand new", "reliable", "lock", "battery", "fingerprint", "anniversary", "smart cookie"]
  }
];

const SESSION_18_LEAD_IN = {
  title: "Lead-In: Discussion & Personal Possessions Matching",
  badge: "Handout Page 1 & Smartboard 1-2",
  questions: [
    {
      q: "1. What is the most valuable thing that you own?",
      model: "In terms of financial value, probably my laptop because I need it for university and work. But emotionally, my mother\\'s handwritten recipe book is much more precious.",
      ar: "ما هو أثمن وأغلى شيء تملكه؟"
    },
    {
      q: "2. What is the most expensive thing that you have ever bought?",
      model: "The most expensive thing I\\'ve ever bought is my smartphone. I saved up for six months to purchase it brand new with high resolution and plenty of storage.",
      ar: "ما هو أغلى شيء اشتريته في حياتك؟"
    },
    {
      q: "3. Do you own anything that has sentimental value? Why is it sentimental to you?",
      model: "Yes, I have an old silver wristwatch that my grandfather gave me on my graduation. Every time I look at it, it reminds me of his encouragement and wisdom.",
      ar: "هل تملك شيئاً ذا قيمة معنوية وعاطفية؟ ولماذا؟"
    },
    {
      q: "4. Have you ever inherited anything from someone?",
      model: "I inherited a wooden bookshelf from my uncle when he moved abroad. It\\'s made of dark oak wood and has classical carved brass handles.",
      ar: "هل ورثت أي شيء من أحد من قبل؟"
    },
    {
      q: "5. Have you ever lost anything important?",
      model: "Unfortunately, I once lost my wallet on the commuter train. Losing the money was bad, but losing family photos and personal ID cards was far more stressful.",
      ar: "هل سبق لك أن فقدت شيئاً مهماً؟"
    }
  ],
  matching: [
    { word: "sentimental", pos: "adj", def: "having an emotional value to you", letter: "c", ar: "ذو قيمة معنوية / عاطفية" },
    { word: "valuable", pos: "adj", def: "worth a lot of money + very helpful or important", letter: "d", ar: "قيّم / ثمين / عالي القيمة" },
    { word: "expensive", pos: "adj", def: "costing a lot of money", letter: "f", ar: "باهظ الثمن / مكلف" },
    { word: "unique", pos: "adj", def: "unlike anything else", letter: "b", ar: "فريد من نوعه / لا مثيل له" },
    { word: "possession", pos: "noun", def: "something that you own", letter: "a", ar: "مقتنى / ملكية خاصة" },
    { word: "inherit", pos: "verb", def: "to receive something from someone after they die", letter: "e", ar: "يرث / يحصل على تركة" }
  ]
};

const SESSION_18_INPUT_CONVERSATIONS = [
  {
    id: 1,
    speaker: "Jo (Conversation 1)",
    object: "A Smartphone",
    description: "White, very slim, modern smartphone featuring a really high resolution camera and fingerprint technology.",
    importance: "I just can't live without my mobile. I'm completely lost without it. It has all my contacts, calendar, and memories.",
    keyQuotes: [
      "Well, it's white and very slim.",
      "It's got a really high resolution camera.",
      "It's also got fingerprint technology.",
      "I just can't live without my mobile. I'm completely lost without it."
    ],
    audioScript: "Interviewer: Jo, tell us about an object that is indispensable to you.\\nJo: Well, it\\'s my mobile phone. It\\'s white and very slim, with a really high resolution camera and fingerprint technology. I\\'ve had it for about a year. Honestly, I just can\\'t live without my mobile. I\\'m completely lost without it!"
  },
  {
    id: 2,
    speaker: "Mark (Conversation 2)",
    object: "An Antique Wristwatch",
    description: "Classic round metallic wristwatch, vintage design, worn with gentle aging on the leather strap.",
    importance: "I've had it for ages. It was given to me by my grandfather. It's got a lot of sentimental value for me; it reminds me of the summer holidays I used to spend with him.",
    keyQuotes: [
      "I've had it for ages.",
      "It was given to me by my grandfather.",
      "It's got a lot of sentimental value for me.",
      "It reminds me of the summer holidays I used to spend with him."
    ],
    audioScript: "Interviewer: Mark, do you own something of sentimental importance?\\nMark: Absolutely. This round watch on my wrist. I\\'ve had it for ages. It was given to me by my grandfather before he passed away. It\\'s got a lot of sentimental value for me because it reminds me of the warm summer holidays I used to spend fishing with him."
  },
  {
    id: 3,
    speaker: "David (Conversation 3)",
    object: "A Black Leather Briefcase",
    description: "Rectangular, average-sized, made of sturdy black leather with classical styling, polished brass locks, and monogrammed initials 'BE'.",
    importance: "My wife gave it to me on our tenth anniversary. It looks classical, holds all my important legal papers, and represents our decade of marriage.",
    keyQuotes: [
      "It's an expensive looking briefcase, sort of classical.",
      "It's rectangular, average-sized.",
      "It's made of black leather and it's got brass locks.",
      "It's got the initials BE engraved on the side.",
      "My wife gave it to me on our tenth anniversary."
    ],
    audioScript: "Interviewer: David, what possession would you hate to lose?\\nDavid: My briefcase. It\\'s an expensive looking briefcase, sort of classical and rectangular, average-sized. It\\'s made of black leather, and it\\'s got brass locks with the initials BE on it. My wife gave it to me on our tenth anniversary, so it means the world to me."
  }
];

const SESSION_18_LANGUAGE_FOCUS = {
  title: "Language Focus: Two Descriptive Pillars",
  badge: "Smartboard Slides 6-8",
  objectFeatures: [
    { phrase: "It's made of leather / wood / metal / plastic / glass / brass.", category: "Material & Composition", eg: "It's made of black leather and brass." },
    { phrase: "It's rectangular / triangular / round / tiny / long and thin / average-sized.", category: "Shape & Dimension", eg: "It's rectangular and average-sized." },
    { phrase: "It's classical / brand new / reliable / striped / soft / fragile / valuable.", category: "Quality & Condition", eg: "It's classical and remarkably reliable." },
    { phrase: "It's got brass locks / a handle / a lid / buttons / batteries / an LCD screen / fingerprint technology.", category: "Components & Hardware", eg: "It's got sturdy brass locks and a leather handle." },
    { phrase: "It's used for writing / carrying things / cooking / taking high-resolution photos.", category: "Function & Purpose", eg: "It's used for carrying confidential files." }
  ],
  importancePhrases: [
    { phrase: "I just can't live without it.", meaning: "It is an essential item for my daily life.", tone: "Colloquial & Emphatic" },
    { phrase: "I'm completely lost without it.", meaning: "Without it, I cannot function or organize my day.", tone: "Strong Emotional Need" },
    { phrase: "It's got a lot of sentimental value for me.", meaning: "Its value is emotional, not just financial.", tone: "Warm & Personal" },
    { phrase: "It reminds me of the summer holidays I used to spend with him.", meaning: "It triggers precious memories of a loved one.", tone: "Nostalgic & Reflective" },
    { phrase: "It was given to me by my grandfather.", meaning: "It is a cherished heirloom handed down through generations.", tone: "Historical & Hereditary" },
    { phrase: "My wife gave it to me on our tenth anniversary.", meaning: "A symbolic gift commemorating a major milestone.", tone: "Milestone Celebration" }
  ],
  grammarRules: [
    { rule: "It has got vs. I have got", note: "Use 'It has got' (It's got) to describe features of the object. Use 'I have got' (I've got) for personal possession: 'It's got brass locks' vs. 'I've got an antique watch'." },
    { rule: "Made of vs. Made from", note: "Use 'made of' when the basic physical material remains clearly recognizable (e.g. 'made of wood / leather / glass'). Use 'made from' when the material undergoes chemical transformation (e.g. 'paper is made from wood')." },
    { rule: "Used for + -ing vs. Used to + infinitive", note: "Express function with 'It's used for carrying papers' (preposition for + gerund) OR 'It's used to carry papers' (infinitive of purpose)." }
  ]
};

const SESSION_18_LOST_PROPERTY_FORM = {
  title: "British Council Lost Property Office Claim Form",
  badge: "Handout Page 2-3 Role-Play",
  fields: [
    { label: "Item Category & Name", sample: "Vintage Men's Wristwatch", hint: "What kind of object is it?" },
    { label: "Date & Location Lost", sample: "Lost on Wednesday afternoon around 4:30 PM in Classroom 3B.", hint: "Where and when was it misplaced?" },
    { label: "Physical Description", sample: "Round metallic casing with a gold-tinted rim, white dial, black Roman numerals, and a brown leather strap showing slight wear. It has got a tiny scratch near the number 12.", hint: "Shape, materials, color, dimensions, distinctive marks." },
    { label: "Hardware & Function", sample: "Analogue mechanical movement with a small brass winding crown on the right side. It does not require a battery.", hint: "Components, buttons, lids, locks, or power." },
    { label: "Owner Claim & Sentimental Value", sample: "It has immense sentimental value because it was given to me by my late grandfather on my 21st birthday. I would be heartbroken if it were permanently lost.", hint: "Why is this object irreplaceable to you?" }
  ]
};

const SESSION_18_TEACHER_FEEDBACK = [
  {
    original: "It's got a buttons.",
    correction: "It's got buttons. / It's got a button.",
    rule: "Indefinite article error: Never place 'a' before plural countable nouns. Say 'It has got buttons' (plural) or 'It has got a button' (singular).",
    audio: "It has got buttons, or it has got a button."
  },
  {
    original: "I got it two months ago.",
    correction: "I got it two months ago. (Correct!)",
    rule: "Accurate Past Simple: Use past simple ('got') with past time markers like 'ago'.",
    audio: "I got it two months ago."
  },
  {
    original: "It was a gift from my family.",
    correction: "It was a gift from my family. (Correct!)",
    rule: "Natural phrasing: 'a gift from [person]' is the correct collocation.",
    audio: "It was a gift from my family."
  },
  {
    original: "It's important to me because I got it when I was young.",
    correction: "It's important to me because I got it when I was young. (Correct!)",
    rule: "Compound sentence structure: Time clause introduced by 'when I was young' with correct past tense agreement.",
    audio: "It is important to me because I got it when I was young."
  },
  {
    original: "It's made of plastic.",
    correction: "It's made of plastic. (Correct!)",
    rule: "Preposition check: 'made of' + material is 100% correct.",
    audio: "It is made of plastic."
  },
  {
    original: "It's got a rectangular shape.",
    correction: "It's got a rectangular shape. / It is rectangular.",
    rule: "Both forms are acceptable: 'It has got a rectangular shape' (noun phrase with article) or simply 'It is rectangular' (adjective).",
    audio: "It has got a rectangular shape, or it is rectangular."
  },
  {
    original: "I don't have valuable things to talk about.",
    correction: "I don't have anything valuable to talk about.",
    rule: "Negative indefinite pronoun: In negative sentences, use 'anything + adjective' ('anything valuable') rather than clumsy plural phrases.",
    audio: "I do not have anything valuable to talk about."
  }
];

const SESSION_18_PRONUNCIATION_LAB = [
  {
    word: "sentimental",
    ipa: "/ˌsen.tɪˈmen.təl/",
    stress: "sen-ti-MEN-tal (Stress on 3rd syllable)",
    tip: "Secondary stress on the first syllable 'sen', but the primary pitch rise is on 'MEN'."
  },
  {
    word: "valuable",
    ipa: "/ˈvæl.jə.bəl/",
    stress: "VAL-u-a-ble (3 or 4 syllables, stress on VAL)",
    tip: "Notice that British speakers usually compress this to 3 syllables /ˈvæl.jə.bəl/ rather than 4."
  },
  {
    word: "rectangular",
    ipa: "/rekˈtæŋ.ɡjə.lər/",
    stress: "rec-TANG-gu-lar (Stress on TANG)",
    tip: "The vowel in 'TANG' is an open front /æ/ sound with a velar nasal /ŋ/."
  },
  {
    word: "triangular",
    ipa: "/traɪˈæŋ.ɡjə.lər/",
    stress: "tri-ANG-gu-lar (Stress on ANG)",
    tip: "Begins with diphthong /traɪ/, then rises on the stressed syllable /æŋ/."
  },
  {
    word: "possession",
    ipa: "/pəˈzeʃ.ən/",
    stress: "pos-SESS-ion (Stress on SESS)",
    tip: "The first syllable is an unstressed schwa /pə/, the double 'ss' is pronounced as /z/, and the ending is /ʃən/."
  },
  {
    word: "anniversary",
    ipa: "/ˌæn.ɪˈvɜː.sər.i/",
    stress: "an-ni-VER-sa-ry (Stress on VER)",
    tip: "Primary stress lands on 'VER' with the long central vowel /ɜː/."
  }
];

const SESSION_18_NOTEBOOK_PAGES = [
  {
    pageTitle: "Page 1: Smartboard Lead-In & Core Value Terminology",
    handoutDoc: "ARB_B1_08_I022CEU_HO_v1.0",
    date: "Session 18",
    image: "assets/images/session18_board_leadin_matching.jpg",
    summary: "Authentic whiteboard matching definitions with teacher blue annotations and full answer key (1c, 2d, 3f, 4b, 5a, 6e).",
    notes: [
      "sentimental (adj) -> c. having an emotional value to you (e.g., photo albums, family heirlooms).",
      "valuable (adj) -> d. worth a lot of money + very helpful or important.",
      "expensive (adj) -> f. costing a lot of money (monetary price).",
      "unique (adj) -> b. unlike anything else (one of a kind).",
      "possession (n) -> a. something that you own.",
      "inherit (v) -> e. to receive something from someone after they die."
    ]
  },
  {
    pageTitle: "Page 2: The Three Objects & Audio Script Analysis",
    handoutDoc: "ARB_B1_08_I022CEU_HO_v1.0",
    date: "Session 18",
    image: "assets/images/session18_board_input_answers.jpg",
    summary: "Whiteboard notes identifying the three speakers, their target objects, and why they cherish them.",
    notes: [
      "Conversation 1: Jo talks about her mobile phone. Why? She just can\\'t live without it; she is completely lost without it.",
      "Conversation 2: A vintage wristwatch. Why? It\\'s got a lot of sentimental value; reminds him of his grandfather.",
      "Conversation 3: A leather briefcase. Why? Gift from his wife on their tenth wedding anniversary."
    ]
  },
  {
    pageTitle: "Page 3: Two-Column Language Matrix & Teacher Annotations",
    handoutDoc: "ARB_B1_08_I022CEU_HO_v1.0",
    date: "Session 18",
    image: "assets/images/session18_board_language_focus_table.jpg",
    summary: "Teacher classification contrasting descriptive features with emotional importance markers.",
    notes: [
      "Describing the object: 'It\\'s made of black leather', 'It\\'s got brass locks', 'It\\'s rectangular, average-sized', 'It\\'s got fingerprint technology'.",
      "Describing importance: 'I just can\\'t live without it', 'I\\'m completely lost without it', 'It reminds me of the summer holidays', 'It\\'s got sentimental value'.",
      "Grammar point on board: 'It has got' (object feature) vs 'I have got' (possession)."
    ]
  },
  {
    pageTitle: "Page 4: Teacher Live Clinic & Idiom of the Day",
    handoutDoc: "ARB_B1_08_I022CEU_HO_v1.0",
    date: "Session 18",
    image: "assets/images/session18_board_language_feedback.jpg",
    summary: "Whiteboard corrections on plural nouns, prepositions, and the authentic Idiom of the Day: Smart Cookie.",
    notes: [
      "Correction: 'It\\'s got a buttons' -> 'It\\'s got buttons' (No 'a' with plural nouns!).",
      "Correction: 'I don\\'t have valuable things to talk about' -> 'I don\\'t have anything valuable to talk about'.",
      "Idiom of the Day: Smart Cookie = A very intelligent and quick-thinking person (e.g., 'Elena is one smart cookie!')."
    ]
  }
];



/* ==========================================================================
   SESSION 19: SPECIAL EDUCATIONAL NEEDS & SOCIAL INCLUSION
   British Council Intermediate B1 • Social and Cultural Inclusion
   Handout ID: ARB_B1_10_I120CEA_HO_v1.0
   ========================================================================== */

const VOCAB_SESSION_19 = [
  {
    id: 1901,
    word: "disability",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌdɪs.əˈbɪl.ə.ti/",
    citation: "Handout Page 1 & Smartboard Vocab Match",
    definition: "A physical or mental condition making daily activities difficult.",
    b1Explain: "A condition that makes it hard to do normal physical activities.",
    opposite: "full ability",
    arWord: "إعاقة جسدية أو حسية / عجز حركي أو إدراكي",
    arMeaning: "إعاقة / عجز جسدي أو عقلي",
    sentence: "She overcame her physical disability and became an accomplished author and speaker.",
    def: "A physical or mental condition making daily activities difficult.",
    context: "She overcame her physical disability and became an accomplished author and speaker.",
    ar: "إعاقة / عجز جسدي أو عقلي",
    phonetic: "/ˌdɪs.əˈbɪl.ə.ti/",
    partOfSpeech: "noun"
  },
  {
    id: 1902,
    word: "condition",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/kənˈdɪʃ.ən/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "A long-term illness or health issue that cannot easily heal.",
    b1Explain: "A chronic illness or medical problem that lasts for a long time.",
    opposite: "good health",
    arWord: "حالة صحية أو طبية / شرط أو ظرف مقيد",
    arMeaning: "حالة صحية أو مرضية مزمنة",
    sentence: "Her spinal condition requires her to use a customized wheelchair for mobility.",
    def: "A long-term illness or health issue that cannot easily heal.",
    context: "Her spinal condition requires her to use a customized wheelchair for mobility.",
    ar: "حالة صحية أو مرضية مزمنة",
    phonetic: "/kənˈdɪʃ.ən/",
    partOfSpeech: "noun"
  },
  {
    id: 1903,
    word: "attitude",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈæt.ɪ.tʃuːd/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "The personal way you think and feel about someone or something.",
    b1Explain: "How you think and feel about life, people, or situations.",
    opposite: "indifference",
    arWord: "موقف عقلي / اتجاه نفسي أو نظرة تصرفية",
    arMeaning: "موقف / توجه عقلي وشعوري",
    sentence: "Helen maintains a positive attitude towards education despite facing daily physical barriers.",
    def: "The personal way you think and feel about someone or something.",
    context: "Helen maintains a positive attitude towards education despite facing daily physical barriers.",
    ar: "موقف / توجه عقلي وشعوري",
    phonetic: "/ˈæt.ɪ.tʃuːd/",
    partOfSpeech: "noun"
  },
  {
    id: 1904,
    word: "mainstream",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/ˈmeɪn.striːm/",
    citation: "Handout Page 1 (Lead-In Statement 3)",
    definition: "Considered normal and shared by the majority of ordinary people.",
    b1Explain: "Normal and accepted by the majority, especially standard public schools.",
    opposite: "specialized",
    arWord: "التعليم العام المدمج / التيار العام السائد في المجتمع",
    arMeaning: "التعليم العام / الاتجاه السائد والمشترك للجميع",
    sentence: "Modern laws encourage enrolling students with special needs into mainstream classrooms.",
    def: "Considered normal and shared by the majority of ordinary people.",
    context: "Modern laws encourage enrolling students with special needs into mainstream classrooms.",
    ar: "التعليم العام / الاتجاه السائد والمشترك للجميع",
    phonetic: "/ˈmeɪn.striːm/",
    partOfSpeech: "adj"
  },
  {
    id: 1905,
    word: "inclusion",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ɪnˈkluː.ʒən/",
    citation: "Handout Header: Social and Cultural Inclusion",
    definition: "The practice of ensuring everyone can participate equally and feel welcomed.",
    b1Explain: "Making sure everyone feels included, respected, and treated equally.",
    opposite: "exclusion",
    arWord: "الدمج الشامل / إشراك الجميع وتكافؤ الفرص",
    arMeaning: "الدمج الشامل وتكافؤ الفرص في المجتمع والتعليم",
    sentence: "The university introduced an inclusion policy to guarantee wheelchair access in all lecture halls.",
    def: "The practice of ensuring everyone can participate equally and feel welcomed.",
    context: "The university introduced an inclusion policy to guarantee wheelchair access in all lecture halls.",
    ar: "الدمج الشامل وتكافؤ الفرص في المجتمع والتعليم",
    phonetic: "/ɪnˈkluː.ʒən/",
    partOfSpeech: "noun"
  },
  {
    id: 1906,
    word: "ramp",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ræmp/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "A sloping surface that connects two areas at different heights.",
    b1Explain: "A slope connecting higher and lower ground for wheelchairs.",
    opposite: "stairs",
    arWord: "منحدر صعود مائل / ممر مائل للكراسي المتحركة",
    arMeaning: "منحدر / ممر مائل لتسهيل حركة الكراسي المتحركة",
    sentence: "A smooth concrete ramp was constructed alongside the steep main entrance steps.",
    def: "A sloping surface that connects two areas at different heights.",
    context: "A smooth concrete ramp was constructed alongside the steep main entrance steps.",
    ar: "منحدر / ممر مائل لتسهيل حركة الكراسي المتحركة",
    phonetic: "/ræmp/",
    partOfSpeech: "noun"
  },
  {
    id: 1907,
    word: "handrail",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈhænd.reɪl/",
    citation: "Smartboard Live Clinic Feedback",
    definition: "A bar attached to a wall to hold for support.",
    b1Explain: "A long metal or wooden bar on a wall to hold onto.",
    opposite: "open wall",
    arWord: "درابزين / مسند يد للاتكاء عند صعود الدرج",
    arMeaning: "درابزين / مقبض جداري للاستناد والتوازن",
    sentence: "The school installed sturdy metal handrails along both sides of the corridor for extra balance.",
    def: "A bar attached to a wall to hold for support.",
    context: "The school installed sturdy metal handrails along both sides of the corridor for extra balance.",
    ar: "درابزين / مقبض جداري للاستناد والتوازن",
    phonetic: "/ˈhænd.reɪl/",
    partOfSpeech: "noun"
  },
  {
    id: 1908,
    word: "elevator",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈel.ɪ.veɪ.tər/",
    citation: "Smartboard Live Clinic Feedback",
    definition: "A machine that carries people up and down in buildings.",
    b1Explain: "A lift that carries passengers between different floors.",
    opposite: "staircase",
    arWord: "مصعد كهربائي / أسانسير",
    arMeaning: "مصعد كهربائي للأدوار المتعددة",
    sentence: "The building has a spacious glass elevator that easily fits two wheelchairs.",
    def: "A machine that carries people up and down in buildings.",
    context: "The building has a spacious glass elevator that easily fits two wheelchairs.",
    ar: "مصعد كهربائي للأدوار المتعددة",
    phonetic: "/ˈel.ɪ.veɪ.tər/",
    partOfSpeech: "noun"
  },
  {
    id: 1909,
    word: "escalator",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈes.kə.leɪ.tər/",
    citation: "Smartboard Live Clinic Feedback",
    definition: "Moving stairs that carry people between different floors of buildings.",
    b1Explain: "Moving electric stairs found in malls and stations.",
    opposite: "fixed stairs",
    arWord: "سلم كهربائي متحرك",
    arMeaning: "سلم كهربائي متحرك",
    sentence: "While tourists used the escalator, wheelchair users took the nearby elevator.",
    def: "Moving stairs that carry people between different floors of buildings.",
    context: "While tourists used the escalator, wheelchair users took the nearby elevator.",
    ar: "سلم كهربائي متحرك",
    phonetic: "/ˈes.kə.leɪ.tər/",
    partOfSpeech: "noun"
  },
  {
    id: 1910,
    word: "vending machine",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈven.dɪŋ məˌʃiːn/",
    citation: "Smartboard Live Clinic Feedback",
    definition: "A coin-operated machine that serves snacks, drinks, or small goods.",
    b1Explain: "An automatic machine selling cold drinks and snacks.",
    opposite: "human cashier",
    arWord: "ماكينة بيع ذاتي للأطعمة والمشروبات بالعملة",
    arMeaning: "آلة بيع ذاتية آلية للوجبات الخفيفة والمشروبات",
    sentence: "The cafeteria lowered the buttons on the vending machine so students in wheelchairs could reach them.",
    def: "A coin-operated machine that serves snacks, drinks, or small goods.",
    context: "The cafeteria lowered the buttons on the vending machine so students in wheelchairs could reach them.",
    ar: "آلة بيع ذاتية آلية للوجبات الخفيفة والمشروبات",
    phonetic: "/ˈven.dɪŋ məˌʃiːn/",
    partOfSpeech: "noun"
  },
  {
    id: 1911,
    word: "flat terrain",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/flæt təˈreɪn/",
    citation: "Smartboard Live Clinic Feedback",
    definition: "Level, smooth ground without steep slopes, obstacles, or stairs.",
    b1Explain: "Smooth and even ground that has no steep hills or steps.",
    opposite: "rough ground",
    arWord: "أرض منبسطة مستوية خالية من المرتفعات والعوائق",
    arMeaning: "أرضية مستوية وممهدة تماماً دون عوائق",
    sentence: "The university campus was landscaped with flat terrain to allow easy wheelchair commuting.",
    def: "Level, smooth ground without steep slopes, obstacles, or stairs.",
    context: "The university campus was landscaped with flat terrain to allow easy wheelchair commuting.",
    ar: "أرضية مستوية وممهدة تماماً دون عوائق",
    phonetic: "/flæt təˈreɪn/",
    partOfSpeech: "noun"
  },
  {
    id: 1912,
    word: "accommodate",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/əˈkɒm.ə.deɪt/",
    citation: "Helen\\'s Reading Text (Handout Para 1)",
    definition: "To make practical changes so someone can participate comfortably.",
    b1Explain: "To adjust arrangements to fit someone's special needs comfortably.",
    opposite: "neglect",
    arWord: "يتكيف مع الاحتياجات / يوفر سبيلاً ميسراً / يستوعب ضيوفاً",
    arMeaning: "يستوعب ويوفر التسهيلات المناسبة",
    sentence: "The teacher rearranged desks to accommodate Helen and her wheelchair near the entrance.",
    def: "To make practical changes so someone can participate comfortably.",
    context: "The teacher rearranged desks to accommodate Helen and her wheelchair near the entrance.",
    ar: "يستوعب ويوفر التسهيلات المناسبة",
    phonetic: "/əˈkɒm.ə.deɪt/",
    partOfSpeech: "verb"
  },
  {
    id: 1913,
    word: "encourage",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ɪnˈkʌr.ɪdʒ/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "To give someone confidence, hope, or support to succeed.",
    b1Explain: "To give someone hope, courage, and support.",
    opposite: "discourage",
    arWord: "يشجع / يحفز ويدعم معنوياً لبذل الجهد",
    arMeaning: "يشجع ويحفز ويمد بالعزيمة",
    sentence: "Good educators encourage all pupils to express their creative ideas freely.",
    def: "To give someone confidence, hope, or support to succeed.",
    context: "Good educators encourage all pupils to express their creative ideas freely.",
    ar: "يشجع ويحفز ويمد بالعزيمة",
    phonetic: "/ɪnˈkʌr.ɪdʒ/",
    partOfSpeech: "verb"
  },
  {
    id: 1914,
    word: "expect",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ɪkˈspekt/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "To think or believe that something will happen soon.",
    b1Explain: "To believe that something will happen or arrive.",
    opposite: "doubt",
    arWord: "يتوقع / ينتظر حدوث شيء / يرجو",
    arMeaning: "يتوقع حدوث شيء مستقبلاً",
    sentence: "Parents expect local schools to provide equal educational opportunities for every child.",
    def: "To think or believe that something will happen soon.",
    context: "Parents expect local schools to provide equal educational opportunities for every child.",
    ar: "يتوقع حدوث شيء مستقبلاً",
    phonetic: "/ɪkˈspekt/",
    partOfSpeech: "verb"
  },
  {
    id: 1915,
    word: "surround",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/səˈraʊnd/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "To place people or objects all around someone or something.",
    b1Explain: "To be all around someone or keep people close to you.",
    opposite: "isolate",
    arWord: "يحيط بـ / يكتنف من كل جانب",
    arMeaning: "يحيط بـ / يلتف حوله برعاية واهتمام",
    sentence: "She chose to surround herself with caring friends who treated her with dignity.",
    def: "To place people or objects all around someone or something.",
    context: "She chose to surround herself with caring friends who treated her with dignity.",
    ar: "يحيط بـ / يلتف حوله برعاية واهتمام",
    phonetic: "/səˈraʊnd/",
    partOfSpeech: "verb"
  },
  {
    id: 1916,
    word: "take for granted",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/teɪk fɔː ˈɡrɑːn.tɪd/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "To fail to appreciate something because you are used to it.",
    b1Explain: "To not value something because you assume it will always be there.",
    opposite: "cherish",
    arWord: "يعتبره أمراً مسلماً به ومفروغاً منه دون تقدير",
    arMeaning: "يأخذ الأمر كمسلّم به دون تقدير لقيمته الحقيقية",
    sentence: "Able-bodied people often take for granted how simple it is to walk up stairs.",
    def: "To fail to appreciate something because you are used to it.",
    context: "Able-bodied people often take for granted how simple it is to walk up stairs.",
    ar: "يأخذ الأمر كمسلّم به دون تقدير لقيمته الحقيقية",
    phonetic: "/teɪk fɔː ˈɡrɑːn.tɪd/",
    partOfSpeech: "idiom"
  },
  {
    id: 1917,
    word: "tick all the boxes",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/tɪk ɔːl ðə ˈbɒk.sɪz/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "To satisfy all necessary rules, requirements, or quality standards.",
    b1Explain: "To meet all requirements or standards completely.",
    opposite: "fall short",
    arWord: "يستوفي جميع المعايير / يطابق كامل الشروط المطلوبة",
    arMeaning: "يستوفي جميع المعايير والشروط المطلوبة تماماً",
    sentence: "The newly renovated library ticks all the boxes for disability access and digital learning.",
    def: "To satisfy all necessary rules, requirements, or quality standards.",
    context: "The newly renovated library ticks all the boxes for disability access and digital learning.",
    ar: "يستوفي جميع المعايير والشروط المطلوبة تماماً",
    phonetic: "/tɪk ɔːl ðə ˈbɒk.sɪz/",
    partOfSpeech: "idiom"
  },
  {
    id: 1918,
    word: "off limits",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/ˌɒf ˈlɪm.ɪts/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "Not allowed to be entered, visited, or used by people.",
    b1Explain: "A place where people are forbidden or unable to enter.",
    opposite: "open to all",
    arWord: "محظور الدخول / منطقة ممنوعة وغير مصرح بارتيادها",
    arMeaning: "محظور الدخول / غير مسموح بالوصول إليه",
    sentence: "Before the elevator was installed, the upper floor chemistry lab was off limits to wheelchair users.",
    def: "Not allowed to be entered, visited, or used by people.",
    context: "Before the elevator was installed, the upper floor chemistry lab was off limits to wheelchair users.",
    ar: "محظور الدخول / غير مسموح بالوصول إليه",
    phonetic: "/ˌɒf ˈlɪm.ɪts/",
    partOfSpeech: "idiom"
  },
  {
    id: 1919,
    word: "make a fuss",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/meɪk ə fʌs/",
    citation: "Helen\\'s Reading Text (Handout Para 1)",
    definition: "To create unnecessary excitement, complaints, or excessive worry.",
    b1Explain: "To cause unnecessary drama or give too much unwanted attention.",
    opposite: "stay calm",
    arWord: "يثير ضجة وجلبة / يضخم الأمور بافتعال غير مبرر",
    arMeaning: "يفتعل ضجة وجلبة واهتماماً مبالغاً فيه بلا داعٍ",
    sentence: "Helen asked her instructor not to make a fuss every time she entered the classroom.",
    def: "To create unnecessary excitement, complaints, or excessive worry.",
    context: "Helen asked her instructor not to make a fuss every time she entered the classroom.",
    ar: "يفتعل ضجة وجلبة واهتماماً مبالغاً فيه بلا داعٍ",
    phonetic: "/meɪk ə fʌs/",
    partOfSpeech: "idiom"
  },
  {
    id: 1920,
    word: "special treatment",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈspeʃ.əl ˈtriːt.mənt/",
    citation: "Helen\\'s Reading Text (Handout Para 2)",
    definition: "Giving unusual extra favors or privileges not shared by others.",
    b1Explain: "Treating someone differently by giving them extra privileges.",
    opposite: "equal treatment",
    arWord: "معاملة تفضيلية استثنائية / رعاية خاصة إضافية",
    arMeaning: "معاملة خاصة استثنائية (تمييز إيجابي أو مبالغ فيه)",
    sentence: "Helen wanted to be treated like any normal student rather than receiving awkward special treatment.",
    def: "Giving unusual extra favors or privileges not shared by others.",
    context: "Helen wanted to be treated like any normal student rather than receiving awkward special treatment.",
    ar: "معاملة خاصة استثنائية (تمييز إيجابي أو مبالغ فيه)",
    phonetic: "/ˈspeʃ.əl ˈtriːt.mənt/",
    partOfSpeech: "noun"
  },
  {
    id: 1921,
    word: "resent",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/rɪˈzent/",
    citation: "Helen\\'s Reading Text (Handout Para 2)",
    definition: "To feel angry and bitter about something perceived as unfair.",
    b1Explain: "To feel angry or upset because you think something is unfair.",
    opposite: "welcome",
    arWord: "يستاء من / يمتعض ويشعر بالحقد أو الظلم",
    arMeaning: "يستاء من / يشعر بالحنق والمرارة والضيق",
    sentence: "She worried that other students might resent her if trips were cancelled on her account.",
    def: "To feel angry and bitter about something perceived as unfair.",
    context: "She worried that other students might resent her if trips were cancelled on her account.",
    ar: "يستاء من / يشعر بالحنق والمرارة والضيق",
    phonetic: "/rɪˈzent/",
    partOfSpeech: "verb"
  },
  {
    id: 1922,
    word: "burden",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈbɜː.dən/",
    citation: "Helen\\'s Reading Text (Handout Para 2)",
    definition: "A heavy duty or difficult responsibility causing extra stress.",
    b1Explain: "A heavy problem or difficulty that worries you.",
    opposite: "relief",
    arWord: "عبء ثقيل / حمل مرهق ومسؤولية شاقة / يرهق كاهلاً",
    arMeaning: "عبء ثقيل / حمل مرهق نفسياً",
    sentence: "She hated feeling like a burden to her classmates during collaborative team projects.",
    def: "A heavy duty or difficult responsibility causing extra stress.",
    context: "She hated feeling like a burden to her classmates during collaborative team projects.",
    ar: "عبء ثقيل / حمل مرهق نفسياً",
    phonetic: "/ˈbɜː.dən/",
    partOfSpeech: "noun"
  },
  {
    id: 1923,
    word: "downhill",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/ˌdaʊnˈhɪl/",
    citation: "Helen\\'s Reading Text (Handout Para 2)",
    definition: "To deteriorate continuously and become much worse over time.",
    b1Explain: "To get worse and worse progressively.",
    opposite: "improve",
    arWord: "نحو الأسفل / هبوطاً / تدهور في الحالة نحو الأسوأ",
    arMeaning: "يتدهور ويسير نحو الأسوأ باستمرار",
    sentence: "After the teacher publicly criticized her seating needs, things quickly went downhill.",
    def: "To deteriorate continuously and become much worse over time.",
    context: "After the teacher publicly criticized her seating needs, things quickly went downhill.",
    ar: "يتدهور ويسير نحو الأسوأ باستمرار",
    phonetic: "/ˌdaʊnˈhɪl/",
    partOfSpeech: "idiom"
  },
  {
    id: 1924,
    word: "field trip",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfiːld ˌtrɪp/",
    citation: "Helen\\'s Reading Text (Handout Para 2)",
    definition: "A school or work visit away from class for education.",
    b1Explain: "An educational trip organized by a school outside class.",
    opposite: "classroom lesson",
    arWord: "رحلة ميدانية تعليمية / جولة استكشافية خارج الفصل",
    arMeaning: "رحلة مدرسية تعليمية ميدانية",
    sentence: "The museum field trip gave students hands-on experience with ancient Egyptian artifacts.",
    def: "A school or work visit away from class for education.",
    context: "The museum field trip gave students hands-on experience with ancient Egyptian artifacts.",
    ar: "رحلة مدرسية تعليمية ميدانية",
    phonetic: "/ˈfiːld ˌtrɪp/",
    partOfSpeech: "noun"
  },
  {
    id: 1925,
    word: "crowded",
    pos: "adj",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkraʊ.dɪd/",
    citation: "Helen\\'s Reading Text (Handout Para 1)",
    definition: "Full of too many people or objects with little space.",
    b1Explain: "Full of people with very little room to move.",
    opposite: "spacious",
    arWord: "مزدحم / مكتظ بالناس أو المركبات",
    arMeaning: "مزدحم / مكتظ بالناس أو الأثاث",
    sentence: "The classroom was narrow and crowded, making wheelchair navigation very difficult.",
    def: "Full of too many people or objects with little space.",
    context: "The classroom was narrow and crowded, making wheelchair navigation very difficult.",
    ar: "مزدحم / مكتظ بالناس أو الأثاث",
    phonetic: "/ˈkraʊ.dɪd/",
    partOfSpeech: "adj"
  },
  {
    id: 1926,
    word: "participate",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/pɑːˈtɪs.ɪ.peɪt/",
    citation: "Handout Lead-In Statement 6",
    definition: "To take part in an activity along with other people.",
    b1Explain: "To take part in an activity with others.",
    opposite: "withdraw",
    arWord: "يشارك / يسهم في نشاط أو حوار تفاعلي",
    arMeaning: "يشارك وينخرط بفعالية في نشاط",
    sentence: "Accessible facilities allow every student to participate fully in extracurricular sports and clubs.",
    def: "To take part in an activity along with other people.",
    context: "Accessible facilities allow every student to participate fully in extracurricular sports and clubs.",
    ar: "يشارك وينخرط بفعالية في نشاط",
    phonetic: "/pɑːˈtɪs.ɪ.peɪt/",
    partOfSpeech: "verb"
  },
  {
    id: 1927,
    word: "facilities",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/fəˈsɪl.ə.tiz/",
    citation: "Handout Page 3 Listening & Page 4 Task",
    definition: "Buildings, equipment, or services provided for a particular purpose.",
    b1Explain: "Rooms, equipment, and services provided in a building.",
    opposite: "obstacles",
    arWord: "تجهيزات وتسهيلات بيئية / مرافق خدمية ميسرة",
    arMeaning: "مرافق وخدمات وتجهيزات مساعدة",
    sentence: "The office upgraded its sanitary facilities with automatic doors and emergency call cords.",
    def: "Buildings, equipment, or services provided for a particular purpose.",
    context: "The office upgraded its sanitary facilities with automatic doors and emergency call cords.",
    ar: "مرافق وخدمات وتجهيزات مساعدة",
    phonetic: "/fəˈsɪl.ə.tiz/",
    partOfSpeech: "noun"
  },
  {
    id: 1928,
    word: "resourceful",
    pos: "adj",
    cambridgeLevel: "C1",
    pronunciation: "/rɪˈzɔː.sfəl/",
    citation: "Session 17 & 19 Shared Leadership Quality",
    definition: "Skilled at solving problems quickly with whatever tools you have.",
    b1Explain: "Good at solving problems quickly with whatever is available.",
    opposite: "helpless",
    arWord: "مبتكر ومتحايل على الصعاب / واسع الحيلة في حل المشكلات",
    arMeaning: "واسع الحيلة وبارع في إيجاد الحلول السريعة",
    sentence: "A resourceful teacher designs engaging classroom tasks that involve every student naturally.",
    def: "Skilled at solving problems quickly with whatever tools you have.",
    context: "A resourceful teacher designs engaging classroom tasks that involve every student naturally.",
    ar: "واسع الحيلة وبارع في إيجاد الحلول السريعة",
    phonetic: "/rɪˈzɔː.sfəl/",
    partOfSpeech: "adj"
  }
];

const SESSION_19_VOCAB_GROUPS = [
  {
    title: "1. Core Medical & Inclusion Concepts",
    badge: "Medical Conditions & Social Rights",
    icon: "🤝",
    desc: "Key vocabulary covering physical conditions, equal educational rights, societal attitudes, and mainstream inclusion.",
    words: ["disability", "condition", "attitude", "mainstream", "inclusion", "encourage", "expect"]
  },
  {
    title: "2. Architectural & Physical Accessibility",
    badge: "Building Architecture & Mobility Aids",
    icon: "🏢",
    desc: "Terms detailing architectural modifications such as slopes, wall supports, lifts, and level terrain.",
    words: ["ramp", "handrail", "elevator", "escalator", "flat terrain", "facilities", "vending machine"]
  },
  {
    title: "3. Social Interaction & Class Dynamics",
    badge: "Psychological & Classroom Atmosphere",
    icon: "👥",
    desc: "Colloquial phrases and idioms describing how teachers and peers interact with individuals who have special needs.",
    words: ["accommodate", "surround", "make a fuss", "special treatment", "resent", "burden", "downhill"]
  },
  {
    title: "4. Practical Standards & Student Engagement",
    badge: "Policy Standards & Active Participation",
    icon: "✅",
    desc: "Expressions for satisfying official audit criteria, exploring outside field trips, and actively participating as equals.",
    words: ["take for granted", "tick all the boxes", "off limits", "field trip", "crowded", "participate", "resourceful"]
  }
];

const SESSION_19_LEAD_IN = {
  title: "Lead-In: Inclusion Statements & Philosophical Perspectives",
  badge: "Handout Page 1 (Lead-In 1 & 2)",
  statements: [
    { id: 1, text: "Education should be available to all.", defaultAgree: true, discussion: "Access to quality learning is a fundamental human right regardless of physical or cognitive differences." },
    { id: 2, text: "Every student has his/her own special needs.", defaultAgree: true, discussion: "Even neurotypical students require differentiated pacing, visual explanations, or tailored encouragement." },
    { id: 3, text: "People with special needs should be able to access mainstream education.", defaultAgree: true, discussion: "Mainstream schooling fosters empathy among peers and prepares students with disabilities for civic life." },
    { id: 4, text: "It is better to provide special schools for students with special needs.", defaultAgree: false, discussion: "While specialized schools offer targeted medical therapy, total segregation limits social integration." },
    { id: 5, text: "Schools should provide extra support services for students with special needs.", defaultAgree: true, discussion: "Shadow teachers, speech therapists, and accessible mobility corridors must be state-funded." },
    { id: 6, text: "Students with special needs should be able to participate fully in school/work life.", defaultAgree: true, discussion: "Participation extends beyond tests to sports, arts, social clubs, and school leadership." }
  ]
};

const SESSION_19_READINGS = {
  title: "Core Jigsaw Readings: Helen's Two School Experiences",
  badge: "Authentic Handout ARC/ARB & Smartboard Slides 18-22",
  readingA: {
    title: "Reading A: A Nightmare Experience",
    subtitle: "Authentic Transcribed Student Handout (ARC_B1_10_I120CEA_HO)",
    photo: "assets/images/session19_handout_reading_a_text.jpg",
    paragraphs: [
      "The problems began on my first day of classes. The classroom was very small and quite crowded. It was difficult for me to get a place where I was near the door and could see the board. The teacher made a big fuss about having to move the furniture to accommodate me and my chair.",
      "From that moment things just went downhill. Although I spoke to the teacher and told him that I just wanted to be included and not get special treatment, he would always mention my condition whenever we did any activity. 'Remember Helen can't move to you so you will have to move to her', he would say when we did interactive activities or 'We can't do that because Helen can't' when he spoke about going on field trips to museums or other places. I started to feel like my classmates resented me because I was limiting what they could do and that I was a burden.",
      "Another thing that really annoyed me was the way the teacher spoke to me. Although I actually had quite good English, he would always speak to me in a slow, loud voice. I have a physical disability but that doesn't mean I am stupid! After two months, I'd had enough and I left that school."
    ],
    studentNotes: "Student handwritten note at bottom of page: 'teacher made big fuss and make other students pay attention... teacher treated her like she was stupid.'",
    quiz: [
      { q: "1. Helen had _____ with this school.", options: ["some problems", "many problems"], answer: 1, explanation: "Handout Para 1 & Slide 19: Helen faced continuous problems with furniture, field trips, and teacher condescension." },
      { q: "2. It was _____ for Helen to get a good seat in the classroom.", options: ["easy", "difficult"], answer: 1, explanation: "The room was crowded and small, making it difficult to sit near the door and see the board." },
      { q: "3. The teacher _____ about Helen's needs.", options: ["made a big fuss", "didn't make a fuss"], answer: 0, explanation: "The teacher made a dramatic fuss about moving furniture rather than handling it discreetly." },
      { q: "4. The teacher _____ when Helen asked him not to make a fuss.", options: ["listened", "didn't listen"], answer: 1, explanation: "He continued highlighting her condition in every activity." },
      { q: "5. The teacher _____ the other students' attention to Helen's needs.", options: ["drew", "didn't draw"], answer: 0, explanation: "He loudly announced 'Remember Helen can't move to you' which singled her out." },
      { q: "6. Helen thought the other students saw her as _____.", options: ["an inspiration", "a problem and a burden"], answer: 1, explanation: "Because the teacher canceled field trips saying 'Helen can't', classmates began resenting her." },
      { q: "7. Helen liked the way the teacher spoke to her.", options: ["True", "False (He spoke in a slow, loud voice as if she were stupid)"], answer: 1, explanation: "Having a physical disability does not mean someone has cognitive impairment." },
      { q: "8. Helen _____ because of the problems.", options: ["stayed for a year", "left the school after two months"], answer: 1, explanation: "After two months of emotional exhaustion, she withdrew." }
    ]
  },
  readingB: {
    title: "Reading B: Better Than I Could Have Wished",
    subtitle: "Pedagogical Jigsaw Contrast Text (Smartboard Slide 22)",
    paragraphs: [
      "When I registered at my new school, the experience could not have been more different. A week before term started, a senior coordinator invited me and my parents for a quiet campus tour. We discussed my mobility requirements without any awkwardness or drama.",
      "On my first day, the teacher welcomed me with a friendly smile and simply handed out the syllabus like she did with every other student. The desks were already arranged with wide, accessible aisles, and an adjustable table had been placed naturally near the front. Nobody made a big fuss, and I didn't feel singled out.",
      "Whenever group work happened, students teamed up naturally. For our off-campus field trip to the science museum, the school pre-booked an accessible mini-bus so everyone could travel together. The staff proved that with proper planning and respectful attitudes, students with special needs can flourish alongside everyone else."
    ],
    quiz: [
      { q: "1. Helen is _____ with her new school.", options: ["unhappy", "happy and thriving"], answer: 1, explanation: "Slide 22 Answer 1: Helen feels valued and comfortable." },
      { q: "2. Helen _____ from the other students in the class.", options: ["feels completely alienated", "doesn't feel different"], answer: 1, explanation: "Slide 22 Answer 2: She participates on equal terms." },
      { q: "3. Helen thinks this school is _____ her last school.", options: ["similar to", "completely different from"], answer: 1, explanation: "Slide 22 Answer 3: Proactive preparation created a completely positive environment." },
      { q: "4. Helen felt welcome from _____ at this school.", options: ["day one", "the third term"], answer: 0, explanation: "Slide 22 Answer 4: A warm, professional attitude greeted her from the very start." },
      { q: "5. The staff discussed Helen's needs with her _____ she started class.", options: ["before", "weeks after"], answer: 0, explanation: "Slide 22 Answer 5: Pre-term consultation ensured smooth accommodation." },
      { q: "6. The school made it clear to Helen that she was _____.", options: ["just like other students", "a burden on their budget"], answer: 0, explanation: "Slide 22 Answer 6: She was treated with equal dignity." },
      { q: "7. The school checked with Helen to see if their facilities were suitable.", options: ["True", "False"], answer: 0, explanation: "Slide 22 Answer 7: They confirmed bathroom and corridor access in advance." },
      { q: "8. The school's preparations made a _____ to how comfortable Helen felt.", options: ["tiny difference", "big difference"], answer: 1, explanation: "Slide 22 Answer 8: Thoughtful preparation removed social and physical friction." }
    ]
  }
};

const SESSION_19_ATTITUDES_QUIZ = {
  title: "Whose Attitude? Stakeholder Perspectives",
  badge: "Handout Page 2 & Smartboard Slide 15",
  options: [
    { key: "A", label: "Helen" },
    { key: "B", label: "Helen's parents" },
    { key: "C", label: "Many people" },
    { key: "D", label: "Many businesses" }
  ],
  items: [
    { id: 1, text: "People with disabilities have a lot to be unhappy about.", answer: "C", stakeholder: "Many people", note: "Common societal misconception assuming people with disabilities live in constant sorrow." },
    { id: 2, text: "People should look at their strengths rather than their weaknesses.", answer: "A", stakeholder: "Helen", note: "Helen's empowering mindset: focus on cognitive talents and resilience rather than limitations." },
    { id: 3, text: "People with disabilities should have the same access to education as everybody else.", answer: "B", stakeholder: "Helen's parents", note: "Advocacy position demanding equal civil rights and educational parity." },
    { id: 4, text: "Going to school is just something we do.", answer: "C", stakeholder: "Many people", note: "Able-bodied people take schooling for granted without realizing the physical battles others endure." },
    { id: 5, text: "Buildings do not need to have special access for people with special needs.", answer: "D", stakeholder: "Many businesses", note: "Unsupportive companies that view accessibility ramps and elevators merely as burdensome expenses." }
  ]
};

const SESSION_19_ACCESSIBILITY_AUDIT = {
  title: "Workplace & Office Accessibility Audit",
  badge: "Handout Page 3-4 & Smartboard Slides 11, 28",
  checklist: [
    { item: "Entrance Ramps & Automatic Doors", standard: "Slopes no steeper than 1:12 ratio with slip-resistant surfaces.", importance: "Essential for independent wheelchair entry without needing assistance." },
    { item: "Elevators vs. Escalators", standard: "Dedicated wide passenger elevators with Braille buttons and voice announcements.", importance: "Wheelchair users cannot use escalators; elevators must serve all building floors." },
    { item: "Flat Terrain & Threshold Clearances", standard: "Ground surfaces completely level with zero tripping ledges or sudden steps.", importance: "Prevents wheel blockage and minimizes fall hazards for visually impaired workers." },
    { item: "Wall Handrails & Support Bars", standard: "Continuous round handrails installed at a standard height of 900mm.", importance: "Provides essential stabilization for employees with mobility or joint disorders." },
    { item: "Accessible Kitchens & Vending Machines", standard: "Controls, coin slots, and dispensers positioned at or below 1100mm height.", importance: "Ensures staff can independently purchase refreshments and prepare tea." },
    { item: "Wide Corridors & Desk Clearances", standard: "Minimum 1200mm clear width between workstations and along fire exits.", importance: "Allows comfortable turning circles for electric wheelchairs." }
  ]
};

const SESSION_19_SPEAKING_LAB = [
  {
    topic: "Mainstream Education vs. Specialized Schools",
    prompt: "Should all students with special educational needs be included in mainstream education?",
    b1Answer: "In my opinion, mainstream education is much better because it teaches all students how to cooperate and respect differences. When children study together, they don't see disability as something strange. However, schools must provide shadow teachers and ramps so nobody falls behind.",
    b2Answer: "I firmly advocate for comprehensive mainstream inclusion. Segregated institutions, while well-intentioned, often perpetuate social exclusion and limit career horizons. When educational authorities invest in universal design—such as adaptive digital curricula and accessible architecture—everyone in the classroom benefits from diverse perspectives."
  },
  {
    topic: "Workplace Awareness & Accommodations",
    prompt: "Do you think your current school or workplace accommodates people with special needs?",
    b1Answer: "At my workplace, they installed an elevator last year, which was a great improvement. But the cafeteria tables are still crowded and the vending machines are too high. We need more staff training so colleagues understand how to offer help politely without making a fuss.",
    b2Answer: "While our corporate headquarters complies with baseline architectural codes such as entrance ramps and wide elevators, our cultural awareness remains deficient. True accommodation is not merely physical; it involves establishing neurodiverse hiring initiatives, flexible scheduling, and anti-bias workshops so individuals never feel stigmatized."
  }
];

const SESSION_19_TEACHER_FEEDBACK = [
  {
    original: "Put arms on the walls for them to hold",
    correction: "handrail (noun)",
    rule: "Lexical precision: The architectural fixture mounted to a wall to hold for stability is termed a 'handrail'.",
    audio: "Install handrails along the corridors for support."
  },
  {
    original: "Elevators vs escalators",
    correction: "elevators (lifts) vs. escalators (moving stairs)",
    rule: "Functional distinction: Escalators cannot be safely navigated in a wheelchair. Buildings must provide elevators for inclusive access.",
    audio: "Wheelchair users require elevators rather than escalators."
  },
  {
    original: "How they can take food from the machine",
    correction: "vending machine (noun)",
    rule: "Vocabulary target: An automated machine that dispenses food and beverages upon payment is a 'vending machine'.",
    audio: "Lower the buttons on the vending machine so everyone can reach."
  },
  {
    original: "to make easily access",
    correction: "to make access easy / to make it easily accessible",
    rule: "Word order & syntax: 'Access' is a noun; use the adjective 'easy' after the object ('to make access easy') or use the adverb before the adjective ('easily accessible').",
    audio: "The renovations will make access easy for everyone."
  },
  {
    original: "Level ground",
    correction: "flat terrain (noun phrase)",
    rule: "Professional collocation: In urban planning and disability audits, use the professional collocation 'flat terrain' to denote smooth, unsloped surfaces.",
    audio: "The campus was paved with smooth, flat terrain."
  }
];

const SESSION_19_PRONUNCIATION_LAB = [
  {
    word: "disability",
    ipa: "/ˌdɪs.əˈbɪl.ə.ti/",
    stress: "dis-a-BIL-i-ty (Stress on BIL)",
    tip: "Secondary stress on 'dis', but the sharp pitch rise occurs on the 3rd syllable 'BIL'."
  },
  {
    word: "condition",
    ipa: "/kənˈdɪʃ.ən/",
    stress: "con-DI-tion (Stress on DI)",
    tip: "The prefix 'con-' is reduced to a neutral schwa /kən/, rising on 'dɪʃ'."
  },
  {
    word: "attitude",
    ipa: "/ˈæt.ɪ.tʃuːd/",
    stress: "AT-ti-tude (Stress on AT)",
    tip: "British English pronounces the final syllable as /tʃuːd/ with stress firmly on the initial /æt/."
  },
  {
    word: "escalator",
    ipa: "/ˈes.kə.leɪ.tər/",
    stress: "ES-ca-la-tor (Stress on ES)",
    tip: "Initial stress on /es/, followed by two unstressed syllables and a weak agent ending."
  },
  {
    word: "accommodate",
    ipa: "/əˈkɒm.ə.deɪt/",
    stress: "ac-COM-mo-date (Stress on COM)",
    tip: "First vowel is a weak schwa /ə/, second syllable is stressed with a short /ɒ/ vowel."
  },
  {
    word: "inclusion",
    ipa: "/ɪnˈkluː.ʒən/",
    stress: "in-CLU-sion (Stress on CLU)",
    tip: "The middle syllable has a long /uː/ sound followed by the voiced postalveolar fricative /ʒən/."
  }
];

const SESSION_19_NOTEBOOK_PAGES = [
  {
    pageTitle: "Page 1: Lesson Overview & Target Vocabulary Definitions",
    handoutDoc: "ARB_B1_10_I120CEA_HO_v1.0",
    date: "Session 19",
    image: "assets/images/session19_board_vocab_matching.jpg",
    summary: "Smartboard slide 6 transcribing the 10 core special needs vocabulary words matched to British Council definitions.",
    notes: [
      "condition (n) -> f. an illness or medical problem that you have for a long time.",
      "attitude (n) -> h. the way that you think and feel about something.",
      "surround (v) -> j. to choose to have particular people near you all the time.",
      "disability (n) -> i. physical or mental condition making normal movement hard.",
      "take for granted (v) -> d. to be so used to something that you do not recognize its true value.",
      "encourage (v) -> a. to give somebody support, courage, or hope.",
      "expect (v) -> c. to think or believe that something will happen.",
      "ramp (n) -> b. a slope joining two areas when one is higher than the other.",
      "off limits (adj) -> e. where people are not allowed or cannot go.",
      "tick all the boxes (v) -> g. meet all necessary requirements."
    ]
  },
  {
    pageTitle: "Page 2: Reading A - Full Authentic Student Handout",
    handoutDoc: "ARB_B1_10_I120CEA_HO_v1.0",
    date: "Session 19",
    image: "assets/images/session19_handout_reading_a_text.jpg",
    summary: "Handout photo showing Helen\\'s personal account of discrimination and poor school preparation, with student handwriting.",
    notes: [
      "Helen\\'s experience at School A: 'The classroom was very small and crowded. Teacher made a big fuss about moving furniture.'",
      "Teacher continuously singled her out: 'Remember Helen can\\'t move to you... We can\\'t do that because Helen can\\'t.'",
      "Classmates resented her as a burden because field trips were canceled.",
      "Teacher spoke in a slow, loud voice: 'I have a physical disability but that doesn\\'t mean I am stupid!'",
      "Student handwritten notes: 'teacher made big fuss and make other students pay attention... teacher treated her like she was stupid.'"
    ]
  },
  {
    pageTitle: "Page 3: Stakeholder Attitudes & Jigsaw Comparisons",
    handoutDoc: "ARB_B1_10_I120CEA_HO_v1.0",
    date: "Session 19",
    image: "assets/images/session19_board_attitudes_answers.jpg",
    summary: "Analysis of societal perspectives (Helen, parents, businesses, general public) and contrasting School A vs School B.",
    notes: [
      "1C: Many people think people with disabilities have a lot to be unhappy about.",
      "2A: Helen believes people should look at their strengths rather than their weaknesses.",
      "3B: Helen\\'s parents advocate that children with disabilities must have equal educational access.",
      "4C: Many people take schooling for granted as just something we do.",
      "5D: Many businesses stubbornly claim buildings do not need special access."
    ]
  },
  {
    pageTitle: "Page 4: Teacher Live Clinic & Workplace Audit",
    handoutDoc: "ARB_B1_10_I120CEA_HO_v1.0",
    date: "Session 19",
    image: "assets/images/session19_board_language_feedback.jpg",
    summary: "Teacher whiteboard corrections on architectural terms and grammatical precision.",
    notes: [
      "Correction: 'Put arms on the walls for them to hold' = handrail.",
      "Correction: 'Elevators vs escalators' (Wheelchairs require elevators; escalators are inaccessible).",
      "Correction: 'How they can take food from machine' = vending machine.",
      "Grammar: 'to make easily access' -> 'to make access easy'.",
      "Collocation: 'Level ground' -> 'Flat terrain'."
    ]
  }
];



/* ==========================================================================
   SESSION 20: DAILY CONVERSATION & SOCIAL CONVERSATION SKILLS
   British Council Intermediate B1 • Conversation Skills
   Handout ID: ARB_B1_07_I007CEA_HO_v1.0
   ========================================================================== */

const VOCAB_SESSION_20 = [
  {
    id: 2001,
    word: "greeting",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈɡriː.tɪŋ/",
    citation: "Handout Page 1 (Speaking Lead-in)",
    definition: "Words or actions used to welcome someone politely.",
    b1Explain: "Polite words or gestures used when meeting someone.",
    opposite: "farewell",
    arWord: "تحية ترحيب / إلقاء السلام واستقبال الآخرين",
    arMeaning: "تحية وترحيب رسمي أو ودي",
    sentence: "In business culture, a firm handshake is the standard greeting.",
    def: "Words or actions used to welcome someone politely.",
    context: "In business culture, a firm handshake is the standard greeting.",
    ar: "تحية وترحيب رسمي أو ودي",
    phonetic: "/ˈɡriː.tɪŋ/",
    partOfSpeech: "noun"
  },
  {
    id: 2002,
    word: "opener",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈəʊ.pən.ər/",
    citation: "Handout Page 1 (Language Section)",
    definition: "A friendly remark used to start a conversation easily.",
    b1Explain: "A remark or question used to begin talking with someone.",
    opposite: "closer",
    arWord: "افتتاحية الكلام / عبارة استهلالية لكسر الصمت وبدء الحوار",
    arMeaning: "فاتحة حديث / عبارة لبدء المحادثة",
    sentence: "Commenting on the lovely weather is a reliable conversational opener.",
    def: "A friendly remark used to start a conversation easily.",
    context: "Commenting on the lovely weather is a reliable conversational opener.",
    ar: "فاتحة حديث / عبارة لبدء المحادثة",
    phonetic: "/ˈəʊ.pən.ər/",
    partOfSpeech: "noun"
  },
  {
    id: 2003,
    word: "small talk",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈsmɔːl ˌtɔːk/",
    citation: "Smartboard Slide 4 & 5 (Small Talk Matrix)",
    definition: "Polite conversation about light, ordinary, or safe topics.",
    b1Explain: "Polite, friendly conversation about everyday safe topics.",
    opposite: "deep debate",
    arWord: "محادثة خفيفة وودية / دردشة استكشافية غير رسمية",
    arMeaning: "حديث ودي عابر / دردشة خفيفة لكسر الجليد",
    sentence: "Colleagues made pleasant small talk by the office coffee machine.",
    def: "Polite conversation about light, ordinary, or safe topics.",
    context: "Colleagues made pleasant small talk by the office coffee machine.",
    ar: "حديث ودي عابر / دردشة خفيفة لكسر الجليد",
    phonetic: "/ˈsmɔːl ˌtɔːk/",
    partOfSpeech: "noun"
  },
  {
    id: 2004,
    word: "safe topic",
    pos: "phrase",
    cambridgeLevel: "B1",
    pronunciation: "/seɪf ˈtɒp.ɪk/",
    citation: "Smartboard Slide 4 (Safe Topics Table)",
    definition: "A non-controversial subject suitable for conversation with anyone.",
    b1Explain: "An easy subject like weather or hobbies that causes no arguments.",
    opposite: "taboo topic",
    arWord: "موضوع حديث آمن وحيادي (كالطقس أو الرياضة)",
    arMeaning: "موضوع محايد وآمن للحديث العام",
    sentence: "The weekend weather and popular movies are safe topics for networking.",
    def: "A non-controversial subject suitable for conversation with anyone.",
    context: "The weekend weather and popular movies are safe topics for networking.",
    ar: "موضوع محايد وآمن للحديث العام",
    phonetic: "/seɪf ˈtɒp.ɪk/",
    partOfSpeech: "phrase"
  },
  {
    id: 2005,
    word: "rejoinder",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/rɪˈdʒɔɪn.dər/",
    citation: "Handout Page 1 & Whiteboard Developing Replies",
    definition: "A quick, witty, or polite conversational reply.",
    b1Explain: "A polite and helpful answer that keeps a conversation going.",
    opposite: "silence",
    arWord: "رد سريع وفطن / تعليق حواري يعيد الكرة للمتحدث",
    arMeaning: "رد لبق وسريع يُكمل مجرى الحوار",
    sentence: "She offered a warm rejoinder that immediately put the guest at ease.",
    def: "A quick, witty, or polite conversational reply.",
    context: "She offered a warm rejoinder that immediately put the guest at ease.",
    ar: "رد لبق وسريع يُكمل مجرى الحوار",
    phonetic: "/rɪˈdʒɔɪn.dər/",
    partOfSpeech: "noun"
  },
  {
    id: 2006,
    word: "develop",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/dɪˈvel.əp/",
    citation: "Handout Page 1 (Develop the conversation)",
    definition: "To expand or add details to keep a conversation moving.",
    b1Explain: "To add information so the conversation does not stop awkwardly.",
    opposite: "cut short",
    arWord: "يطور / ينمي الفكرة ويوسع مجرى الحديث / يتطور",
    arMeaning: "يطوّر ويُثري الحديث بمعلومات إضافية",
    sentence: "Always develop the conversation by asking follow-up questions.",
    def: "To expand or add details to keep a conversation moving.",
    context: "Always develop the conversation by asking follow-up questions.",
    ar: "يطوّر ويُثري الحديث بمعلومات إضافية",
    phonetic: "/dɪˈvel.əp/",
    partOfSpeech: "verb"
  },
  {
    id: 2007,
    word: "productive",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/prəˈdʌk.tɪv/",
    citation: "Handout Page 4 (Line j: The meeting was very productive)",
    definition: "Achieving good and useful results without wasting time.",
    b1Explain: "Achieving good, successful results with practical outcomes.",
    opposite: "unproductive",
    arWord: "مثمر ومنتج / محقق للنتائج والفوائد المرجوة",
    arMeaning: "مثمر وفعال ومحقق لنتائج عملية",
    sentence: "Both directors agreed the morning business meeting had been highly productive.",
    def: "Achieving good and useful results without wasting time.",
    context: "Both directors agreed the morning business meeting had been highly productive.",
    ar: "مثمر وفعال ومحقق لنتائج عملية",
    phonetic: "/prəˈdʌk.tɪv/",
    partOfSpeech: "adj"
  },
  {
    id: 2008,
    word: "host",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/həʊst/",
    citation: "Handout Page 3 (Exercise 6: Host and Visitor)",
    definition: "A person who receives or entertains guests.",
    b1Explain: "Someone who invites guests and welcomes them warmly.",
    opposite: "guest",
    arWord: "مضيف اللقاء أو الدعوة / يستضيف ضيفاً أو برنامجاً",
    arMeaning: "مُضيف يستقبل الزوار والضيوف",
    sentence: "Our host provided coffee and introduced us to company executives.",
    def: "A person who receives or entertains guests.",
    context: "Our host provided coffee and introduced us to company executives.",
    ar: "مُضيف يستقبل الزوار والضيوف",
    phonetic: "/həʊst/",
    partOfSpeech: "noun"
  },
  {
    id: 2009,
    word: "visitor",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈvɪz.ɪ.tər/",
    citation: "Handout Page 3 (Exercise 6: Host and Visitor)",
    definition: "Someone who visits a person or place temporarily.",
    b1Explain: "A person visiting a company, city, or friend.",
    opposite: "resident",
    arWord: "زائر / ضيف وافد من مكان آخر",
    arMeaning: "زائر مؤقت لمكان أو مؤسسة",
    sentence: "The international visitor scheduled three factory tours during her stay.",
    def: "Someone who visits a person or place temporarily.",
    context: "The international visitor scheduled three factory tours during her stay.",
    ar: "زائر مؤقت لمكان أو مؤسسة",
    phonetic: "/ˈvɪz.ɪ.tər/",
    partOfSpeech: "noun"
  },
  {
    id: 2010,
    word: "pleasure",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈpleʒ.ər/",
    citation: "Handout Page 4 (Line k: It\'s been a pleasure)",
    definition: "A feeling of happiness, satisfaction, or enjoyment.",
    b1Explain: "A feeling of joy and polite satisfaction.",
    opposite: "displeasure",
    arWord: "سرور وسعادة بالغة / دواعي سروري وشرف لي",
    arMeaning: "متعة وسعادة وشرف بالتعارف والتعاون",
    sentence: "It has truly been a pleasure working alongside your marketing team.",
    def: "A feeling of happiness, satisfaction, or enjoyment.",
    context: "It has truly been a pleasure working alongside your marketing team.",
    ar: "متعة وسعادة وشرف بالتعارف والتعاون",
    phonetic: "/ˈpleʒ.ər/",
    partOfSpeech: "noun"
  },
  {
    id: 2011,
    word: "regards",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/rɪˈɡɑːdz/",
    citation: "Handout Page 3 (Line b: Give my regards to your wife)",
    definition: "Friendly greetings sent through another person.",
    b1Explain: "Warm greetings and good wishes passed on to someone.",
    opposite: "disrespect",
    arWord: "تحيات حارة / أطيب السلام والتمنيات العطرة",
    arMeaning: "تحيات وسلامات وود يُرسل للغير",
    sentence: "Please give my warmest regards to your family when you return.",
    def: "Friendly greetings sent through another person.",
    context: "Please give my warmest regards to your family when you return.",
    ar: "تحيات وسلامات وود يُرسل للغير",
    phonetic: "/rɪˈɡɑːdz/",
    partOfSpeech: "noun"
  },
  {
    id: 2012,
    word: "keep in touch",
    pos: "idiom",
    cambridgeLevel: "B1",
    pronunciation: "/kiːp ɪn tʌtʃ/",
    citation: "Smartboard Slide 9 (Leave-Taking Phrase 2)",
    definition: "To continue communicating with someone regularly over time.",
    b1Explain: "To stay in contact by calling, texting, or emailing.",
    opposite: "lose contact",
    arWord: "يبقى على تواصل / يحافظ على الاتصال والمودة",
    arMeaning: "يبقى على تواصل واتصال مستمر",
    sentence: "Don\'t be a stranger after graduation; let\'s keep in touch!",
    def: "To continue communicating with someone regularly over time.",
    context: "Don\'t be a stranger after graduation; let\'s keep in touch!",
    ar: "يبقى على تواصل واتصال مستمر",
    phonetic: "/kiːp ɪn tʌtʃ/",
    partOfSpeech: "idiom"
  },
  {
    id: 2013,
    word: "see around",
    pos: "phrase",
    cambridgeLevel: "B1",
    pronunciation: "/siː əˈraʊnd/",
    citation: "Smartboard Slide 9 (I\'ll see you around)",
    definition: "To see someone casually from time to time.",
    b1Explain: "To meet someone informally when you cross paths nearby.",
    opposite: "never meet",
    arWord: "أراك لاحقاً بالجوار / نلتقي قريباً في المكان",
    arMeaning: "أراك لاحقاً بالجوار / نلتقي قريباً",
    sentence: "I work just across the street, so I\'ll see you around.",
    def: "To see someone casually from time to time.",
    context: "I work just across the street, so I\'ll see you around.",
    ar: "أراك لاحقاً بالجوار / نلتقي قريباً",
    phonetic: "/siː əˈraʊnd/",
    partOfSpeech: "phrase"
  },
  {
    id: 2014,
    word: "safe journey",
    pos: "phrase",
    cambridgeLevel: "B1",
    pronunciation: "/seɪf ˈdʒɜː.ni/",
    citation: "Smartboard Slide 9 (Phrase 4: Safe journey!)",
    definition: "A polite wish for someone traveling to arrive safely.",
    b1Explain: "A friendly farewell wishing a traveler a safe trip.",
    opposite: "rough travel",
    arWord: "رحلة آمنة وموفقة / سفراً سالماً ميموناً",
    arMeaning: "رحلة آمنة وموفقة بإذن الله",
    sentence: "Have a wonderful flight back to London and safe journey!",
    def: "A polite wish for someone traveling to arrive safely.",
    context: "Have a wonderful flight back to London and safe journey!",
    ar: "رحلة آمنة وموفقة بإذن الله",
    phonetic: "/seɪf ˈdʒɜː.ni/",
    partOfSpeech: "phrase"
  },
  {
    id: 2015,
    word: "be off",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/biː ɒf/",
    citation: "Smartboard Slide 9 (Phrase 5: I\'ll be off then)",
    definition: "To leave or depart from a place.",
    b1Explain: "To leave right now and start traveling home.",
    opposite: "stay put",
    arWord: "يستعد للانصراف / ينطلق مغادراً المكان في الحال",
    arMeaning: "يغادر وينصرف في الحال",
    sentence: "It is getting quite late, so I\'ll be off then.",
    def: "To leave or depart from a place.",
    context: "It is getting quite late, so I\'ll be off then.",
    ar: "يغادر وينصرف في الحال",
    phonetic: "/biː ɒf/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2016,
    word: "better be going",
    pos: "phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ˈbet.ər biː ˈɡəʊ.ɪŋ/",
    citation: "Smartboard Slide 9 (Phrase 1: I\'d better be going)",
    definition: "A polite way to announce that you must depart.",
    b1Explain: "A polite phrase meaning it is time to leave.",
    opposite: "stay longer",
    arWord: "حان وقت المغادرة / ينبغي عليّ الرحيل والذهاب الآن",
    arMeaning: "حريٌّ بي أن أنصرف الآن / حان وقت ذهابي",
    sentence: "Look at the clock; I\'d better be going before traffic starts.",
    def: "A polite way to announce that you must depart.",
    context: "Look at the clock; I\'d better be going before traffic starts.",
    ar: "حريٌّ بي أن أنصرف الآن / حان وقت ذهابي",
    phonetic: "/ˈbet.ər biː ˈɡəʊ.ɪŋ/",
    partOfSpeech: "phrase"
  },
  {
    id: 2017,
    word: "touch",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/tʌtʃ/",
    citation: "Handout Page 2 (I\'ll be in touch!)",
    definition: "Contact or communication maintained between people.",
    b1Explain: "Regular contact and communication through calls or messages.",
    opposite: "isolation",
    arWord: "لمس / تواصل واحتكاك / يؤثر وجدانياً",
    arMeaning: "تواصل واتصال بالأخبار والمستجدات",
    sentence: "Send me an email next week so we can stay in touch.",
    def: "Contact or communication maintained between people.",
    context: "Send me an email next week so we can stay in touch.",
    ar: "تواصل واتصال بالأخبار والمستجدات",
    phonetic: "/tʌtʃ/",
    partOfSpeech: "noun"
  },
  {
    id: 2018,
    word: "gain experience",
    pos: "collocation",
    cambridgeLevel: "B2",
    pronunciation: "/ɡeɪn ɪkˈspɪə.ri.əns/",
    citation: "Teacher Whiteboard Clinic Slide 2",
    definition: "To acquire practical knowledge through working in a field.",
    b1Explain: "To learn practical work skills by doing a job.",
    opposite: "lack practice",
    arWord: "يكتسب خبرة عملية وتجربة حياتية جديدة",
    arMeaning: "يكتسب خبرة عملية وتطبيقية",
    sentence: "Internships are an excellent method to gain experience in software development.",
    def: "To acquire practical knowledge through working in a field.",
    context: "Internships are an excellent method to gain experience in software development.",
    ar: "يكتسب خبرة عملية وتطبيقية",
    phonetic: "/ɡeɪn ɪkˈspɪə.ri.əns/",
    partOfSpeech: "collocation"
  },
  {
    id: 2019,
    word: "earn money",
    pos: "collocation",
    cambridgeLevel: "B1",
    pronunciation: "/ɜːn ˈmʌn.i/",
    citation: "Teacher Whiteboard Clinic Slide 2",
    definition: "To receive payment in exchange for your work.",
    b1Explain: "To get paid wages or salary for your work.",
    opposite: "lose money",
    arWord: "يكسب المال / يجني أرباحاً وراتباً من جهده",
    arMeaning: "يكسب مالاً لقاء جهده وعمله",
    sentence: "Students take part-time jobs on weekends to earn money for textbooks.",
    def: "To receive payment in exchange for your work.",
    context: "Students take part-time jobs on weekends to earn money for textbooks.",
    ar: "يكسب مالاً لقاء جهده وعمله",
    phonetic: "/ɜːn ˈmʌn.i/",
    partOfSpeech: "collocation"
  },
  {
    id: 2020,
    word: "regret",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/rɪˈɡret/",
    citation: "Teacher Whiteboard Clinic (regret working)",
    definition: "To feel sorry or sad about an action you did.",
    b1Explain: "To feel sad or sorry about something you did.",
    opposite: "celebrate",
    arWord: "يندم على ما فات / يأسف ويتحسر على فرصة ضائعة",
    arMeaning: "يندم على فعل قام به سابقاً",
    sentence: "Do you ever regret changing careers to enter web design?",
    def: "To feel sorry or sad about an action you did.",
    context: "Do you ever regret changing careers to enter web design?",
    ar: "يندم على فعل قام به سابقاً",
    phonetic: "/rɪˈɡret/",
    partOfSpeech: "verb"
  },
  {
    id: 2021,
    word: "cuisine",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/kwɪˈziːn/",
    citation: "Teacher Whiteboard Clinic Slide 2 (Favourite cuisine)",
    definition: "A characteristic style of cooking and regional food.",
    b1Explain: "A country's special traditional style of preparing food.",
    opposite: "plain meal",
    arWord: "فن الطهي / المطبخ التقليدي لبلد أو ثقافة معينة",
    arMeaning: "فنون الطهي والمطبخ المميز لبلد ما",
    sentence: "Italian cuisine is famous for handmade pasta and fresh olive oil.",
    def: "A characteristic style of cooking and regional food.",
    context: "Italian cuisine is famous for handmade pasta and fresh olive oil.",
    ar: "فنون الطهي والمطبخ المميز لبلد ما",
    phonetic: "/kwɪˈziːn/",
    partOfSpeech: "noun"
  },
  {
    id: 2022,
    word: "obsessed with",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/əbˈsest wɪð/",
    citation: "Teacher Whiteboard Clinic Slide 2",
    definition: "Unable to stop thinking about something you like.",
    b1Explain: "Thinking about someone or something all the time with passion.",
    opposite: "uninterested in",
    arWord: "مهووس بـ / مولع وشديد التعلق بشيء لدرجة الهوس",
    arMeaning: "مهووس ومولع بشدة بشيء ما",
    sentence: "My teenage brother is completely obsessed with football video games.",
    def: "Unable to stop thinking about something you like.",
    context: "My teenage brother is completely obsessed with football video games.",
    ar: "مهووس ومولع بشدة بشيء ما",
    phonetic: "/əbˈsest wɪð/",
    partOfSpeech: "adj"
  },
  {
    id: 2023,
    word: "gourmet",
    pos: "adj",
    cambridgeLevel: "B2",
    pronunciation: "/ˈɡʊə.meɪ/",
    citation: "Teacher Whiteboard Clinic Slide 2 (Gourmet food)",
    definition: "High quality, exquisite food prepared with great skill.",
    b1Explain: "Delicious, premium food prepared by expert chefs.",
    opposite: "fast food",
    arWord: "ذواقة طعام / أطباق فاخرة عالية التميز والجودة",
    arMeaning: "طعام فاخر وعالي الجودة وممتاز الصنع",
    sentence: "They treated their international guests to an elegant gourmet dinner.",
    def: "High quality, exquisite food prepared with great skill.",
    context: "They treated their international guests to an elegant gourmet dinner.",
    ar: "طعام فاخر وعالي الجودة وممتاز الصنع",
    phonetic: "/ˈɡʊə.meɪ/",
    partOfSpeech: "adj"
  },
  {
    id: 2024,
    word: "comfort zone",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈkʌm.fət ˌzəʊn/",
    citation: "Teacher Whiteboard Clinic Slide 2 (Out of my comfort zone)",
    definition: "A situation where you feel safe, comfortable, and confident.",
    b1Explain: "Familiar situations where you feel secure and comfortable.",
    opposite: "stressful challenge",
    arWord: "منطقة الراحة والأمان النفسي والاعتياد",
    arMeaning: "منطقة الراحة والأمان المعتادة",
    sentence: "Giving speeches in English pushed him outside his usual comfort zone.",
    def: "A situation where you feel safe, comfortable, and confident.",
    context: "Giving speeches in English pushed him outside his usual comfort zone.",
    ar: "منطقة الراحة والأمان المعتادة",
    phonetic: "/ˈkʌm.fət ˌzəʊn/",
    partOfSpeech: "noun"
  },
  {
    id: 2025,
    word: "social butterfly",
    pos: "idiom",
    cambridgeLevel: "B2",
    pronunciation: "/ˌsəʊ.ʃəl ˈbʌt.ə.flaɪ/",
    citation: "Teacher Whiteboard Clinic Slide 2",
    definition: "An outgoing person who enjoys socializing with many people.",
    b1Explain: "An outgoing, friendly person who loves chatting with everyone.",
    opposite: "loner",
    arWord: "فراشة اجتماعية / شخص شديد الاندماج ومحب للتعارف",
    arMeaning: "شخص اجتماعي جداً ومتألق في المناسبات",
    sentence: "Sarah is a real social butterfly; she talks effortlessly to everyone at parties.",
    def: "An outgoing person who enjoys socializing with many people.",
    context: "Sarah is a real social butterfly; she talks effortlessly to everyone at parties.",
    ar: "شخص اجتماعي جداً ومتألق في المناسبات",
    phonetic: "/ˌsəʊ.ʃəl ˈbʌt.ə.flaɪ/",
    partOfSpeech: "idiom"
  },
  {
    id: 2026,
    word: "polyglot",
    pos: "noun",
    cambridgeLevel: "C1",
    pronunciation: "/ˈpɒl.i.ɡlɒt/",
    citation: "Teacher Whiteboard Clinic Slide 1",
    definition: "A person who knows and speaks many languages fluently.",
    b1Explain: "A person who speaks four or more foreign languages fluently.",
    opposite: "monolingual",
    arWord: "متحدث بلغات متعددة / ضليع في عدة ألسن",
    arMeaning: "متعدد اللغات / طليق في عدة ألسن",
    sentence: "Our conference interpreter is a remarkable polyglot who speaks six languages.",
    def: "A person who knows and speaks many languages fluently.",
    context: "Our conference interpreter is a remarkable polyglot who speaks six languages.",
    ar: "متعدد اللغات / طليق في عدة ألسن",
    phonetic: "/ˈpɒl.i.ɡlɒt/",
    partOfSpeech: "noun"
  },
  {
    id: 2027,
    word: "pick up",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/pɪk ʌp/",
    citation: "Teacher Whiteboard Clinic Slide 1 (Pick up new hobbies)",
    definition: "To learn a new skill or hobby naturally.",
    b1Explain: "To learn a skill easily without taking formal classes.",
    opposite: "give up",
    arWord: "يلتقط / يتعلم لغة عفوياً / يستقبل شخصاً بسيارة",
    arMeaning: "يكتسب مهارة أو هواية جديدة بسهولة",
    sentence: "He was able to pick up guitar chords quickly during summer vacation.",
    def: "To learn a new skill or hobby naturally.",
    context: "He was able to pick up guitar chords quickly during summer vacation.",
    ar: "يكتسب مهارة أو هواية جديدة بسهولة",
    phonetic: "/pɪk ʌp/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2028,
    word: "take on",
    pos: "phrasal verb",
    cambridgeLevel: "B2",
    pronunciation: "/teɪk ɒn/",
    citation: "Teacher Whiteboard Clinic Slide 1 (Take on an MA)",
    definition: "To accept a new challenge, degree, or responsibility.",
    b1Explain: "To accept a difficult task, job, or degree program.",
    opposite: "refuse",
    arWord: "يتولى مسؤولية جديدة / يقبل تحدياً / يوظف عاملاً",
    arMeaning: "يتحمل مسؤولية / يخوض تحدياً دراسياً أو عملياً",
    sentence: "She decided to take on a Master's degree while continuing to work full-time.",
    def: "To accept a new challenge, degree, or responsibility.",
    context: "She decided to take on a Master's degree while continuing to work full-time.",
    ar: "يتحمل مسؤولية / يخوض تحدياً دراسياً أو عملياً",
    phonetic: "/teɪk ɒn/",
    partOfSpeech: "phrasal verb"
  }
];

const SESSION_20_VOCAB_GROUPS = [
  {
    title: "1. Greetings & Conversational Openers",
    badge: "Meeting Customs, Small Talk & Openers",
    icon: "🤝",
    desc: "Target terms covering cultural greetings, initial remarks to start talking, polite rejoinders, and developing safe topics naturally.",
    words: ["greeting", "opener", "small talk", "safe topic", "rejoinder", "develop", "productive"]
  },
  {
    title: "2. Leaving Phrases & Formal Partings",
    badge: "Hosts, Guests & Polite Leave-Taking",
    icon: "👋",
    desc: "Core business and social etiquette lexis for thanking hosts, acknowledging visitors, sending personal regards, and taking leave gracefully.",
    words: ["host", "visitor", "pleasure", "regards", "keep in touch", "see around", "safe journey"]
  },
  {
    title: "3. Leave-Taking Idioms & Career Choices",
    badge: "Departures, Workplace Experience & Comfort",
    icon: "🚪",
    desc: "Colloquial farewell expressions, career milestones, distinguishing earning money from gaining experience, and stepping out of comfort zones.",
    words: ["be off", "better be going", "touch", "gain experience", "earn money", "regret", "comfort zone"]
  },
  {
    title: "4. Lifestyle, Hobbies & Social Nuances",
    badge: "Cuisine, Passion, Habits & Talents",
    icon: "🍱",
    desc: "Authentic terminology describing international dining, culinary appreciation, social extroversion, multilingual polyglots, and adopting hobbies.",
    words: ["cuisine", "obsessed with", "gourmet", "social butterfly", "polyglot", "pick up", "take on"]
  }
];

const SESSION_20_LEAD_IN = {
  title: "Greeting Customs & Small Talk Architecture",
  badge: "Handout Page 1 & Smartboard Slides 4-5",
  greetingQuestions: [
    {
      q: "Who do you usually say hello and goodbye to every day?",
      model: "Every morning I say hello to my family members, then to the building security guard and the barista at my local coffee shop, before greeting my office team.",
      ar: "بمن تبدأ بالتحية والسلام والوداع يومياً؟"
    },
    {
      q: "How do you greet children vs. parents vs. colleagues vs. strangers?",
      model: "With children, I smile and give a high-five or gentle wave. With parents, a warm hug or kiss on the cheek. With colleagues, a friendly nod or handshake. With strangers or taxi drivers, a polite 'Good morning' or verbal greeting.",
      ar: "كيف تختلف تحيتك للأطفال، الوالدين، الزملاء، والغرباء؟"
    },
    {
      q: "How many languages can you say hello and goodbye in?",
      model: "I can greet people in Arabic (Marhaban / Ma\'a salama), English (Hello / Goodbye), French (Bonjour / Au revoir), and Spanish (Hola / Adiós).",
      ar: "بكم لغة تستطيع إلقاء التحية وتوديع الآخرين؟"
    }
  ],
  smallTalkTable: [
    { question: "Who makes small talk?", answer: "People who do not know each other, or people who know each other a little." },
    { question: "What do people talk about?", answer: "Safe topics: the weather, sports, food, work, travel, hobbies, films, current events, and general news." },
    { question: "Where do people make small talk?", answer: "Anywhere: an office kitchen, an elevator, a bus stop, an airport lounge, a hotel lobby, or a cafeteria." },
    { question: "Why do people make small talk?", answer: "To be friendly, to fill awkward silence, and to build rapport to get to know someone." }
  ]
};

const SESSION_20_OPENERS_MATCHING = {
  title: "Conversational Openers & Developing Replies",
  badge: "Handout Page 1 (Exercise 2)",
  items: [
    { id: 1, opener: "How are you?", reply: "I'm fine, thanks. And you? You're looking well.", letter: "e", note: "Answers question, returns inquiry, and adds a sincere compliment to develop dialogue." },
    { id: 2, opener: "Nice to see you again.", reply: "Nice to see you too. How are you?", letter: "h", note: "Reciprocates warm feeling and smoothly transitions into current well-being." },
    { id: 3, opener: "It's been a long time, hasn't it?", reply: "Yes, I think we last met two years ago in Bangkok.", letter: "a", note: "Confirms shared history with specific time and geographical memory." },
    { id: 4, opener: "Nice weather today, isn't it?", reply: "Yes, lovely. I hope it stays like this for the weekend.", letter: "f", note: "Classic British small talk opener; reply expands with weekend plans." },
    { id: 5, opener: "Terrible weather, isn't it?", reply: "Yes, awful. I think it's rained every day since I arrived.", letter: "b", note: "Builds instant empathy through shared minor complaint." },
    { id: 6, opener: "That's a nice shirt.", reply: "Thanks, my wife bought it for me.", letter: "g", note: "Accepts compliment graciously and gives brief personal background." },
    { id: 7, opener: "This coffee's a bit weak.", reply: "Yes, it is. Not like the coffee we get in Italy.", letter: "c", note: "Agrees politely and broadens discussion into travel and international comparison." },
    { id: 8, opener: "Did you get that report I sent you?", reply: "Yes, I did. It was very useful.", letter: "d", note: "Workplace transition opener; gives immediate positive reassurance." }
  ]
};

const SESSION_20_GOODBYES_LAB = {
  title: "The 7 Core Whiteboard Leave-Taking Formulas",
  badge: "Handout Page 2 & Smartboard Slide 9",
  phrases: [
    { id: 1, phrase: "I'd better be going.", meaning: "Announcing departure politely without seeming rushed.", context: "Informal & Professional" },
    { id: 2, phrase: "Keep in touch!", meaning: "Warm request to maintain future contact.", context: "Friends & Business Acquaintances" },
    { id: 3, phrase: "I'll see you around.", meaning: "Casual farewell when people live or work in the same vicinity.", context: "Coworkers & Neighbors" },
    { id: 4, phrase: "Safe journey!", meaning: "Wishing safe travels to someone boarding a flight or driving.", context: "Travelers & Visitors" },
    { id: 5, phrase: "I'll be off then.", meaning: "Colloquial British parting remark right before walking away.", context: "Informal Gatherings" },
    { id: 6, phrase: "It's been great meeting you.", meaning: "Enthusiastic farewell after an initial introduction or networking session.", context: "First-time Acquaintances" },
    { id: 7, phrase: "Come and see me soon.", meaning: "Warm invitation for future reciprocal visits.", context: "Close Friends & Family" }
  ],
  audioMarkers: [
    { phrase: "Have a good one!", meaning: "Casual wish for a pleasant day or evening ahead." },
    { phrase: "See you!", meaning: "Quick informal contraction of 'See you later'." },
    { phrase: "I'll be in touch!", meaning: "Promising to send an email or phone update soon." },
    { phrase: "Speak soon.", meaning: "Expectation of another phone call or conversation in the near future." }
  ]
};

const SESSION_20_LEAVING_CONVERSATION = {
  title: "Master 11-Turn Leaving Conversation (Host & Tokyo Visitor)",
  badge: "Handout Pages 3 & 4 (Exercise 6 & 7)",
  scenario: "A host and visitor are having a leaving conversation after a successful business meeting. The visitor is flying back to Tokyo tomorrow.",
  turns: [
    { step: 1, speaker: "Visitor", function: "1. Start a 'leaving conversation'", line: "Is that the time? I guess I should be going.", letter: "a" },
    { step: 2, speaker: "Host", function: "2. Reply to the visitor", line: "Oh, so soon?", letter: "d" },
    { step: 3, speaker: "Visitor", function: "3. Say why you must leave", line: "I'm afraid so, I've got a long day tomorrow – I'm flying back to Tokyo.", letter: "e" },
    { step: 4, speaker: "Host", function: "4. Show interest in the visitor's plans", line: "Really? What time do you get there?", letter: "c" },
    { step: 5, speaker: "Visitor", function: "5. Give more information", line: "Around six in the evening local time, and then I have to catch a train.", letter: "h" },
    { step: 6, speaker: "Host", function: "6. Make a final reference to business", line: "Well, thank you very much for coming. I think we had a very useful meeting.", letter: "g" },
    { step: 7, speaker: "Visitor", function: "7. Thank the host for her/his help", line: "Yes, I agree, the meeting was very productive. And thanks for your help.", letter: "j" },
    { step: 8, speaker: "Host", function: "8. Reply – say it's been a pleasure", line: "Not at all. It's been a pleasure.", letter: "k" },
    { step: 9, speaker: "Visitor", function: "9. Make a second reference to leaving", line: "Well, I really must go now.", letter: "f" },
    { step: 10, speaker: "Host", function: "10. Wish the visitor a good trip and send your regards to someone", line: "It's been nice meeting you again. Have a good trip, and give my regards to your wife.", letter: "b" },
    { step: 11, speaker: "Visitor", function: "11. Refer to the next meeting and say goodbye", line: "Thanks, I'll do that. See you next month in Bangkok. Bye.", letter: "i" }
  ]
};

const SESSION_20_TEACHER_FEEDBACK = [
  {
    original: "To gain money / To earn experience",
    correction: "To earn money / To gain experience",
    rule: "Collocation distinction: You 'earn' money through labor or salary. You 'gain' experience, reputation, or weight.",
    audio: "You earn money from your job, and you gain experience over time."
  },
  {
    original: "Do you regret to work in this field?",
    correction: "Do you regret working in this field?",
    rule: "Verb pattern: The verb 'regret' is followed by a gerund (-ing) when looking back at past actions.",
    audio: "Do you regret working in this field?"
  },
  {
    original: "Have you ever went to a Chinese restaurant?",
    correction: "Have you ever been to a Chinese restaurant?",
    rule: "Present perfect experience: Use 'been to' for completed visits where the person has gone and returned.",
    audio: "Have you ever been to a Chinese restaurant?"
  },
  {
    original: "What food do you like? Chinese, Syrian... What's your favourite kitchen?",
    correction: "What's your favourite cuisine?",
    rule: "Lexical precision: 'Kitchen' is the physical room. 'Cuisine' refers to regional styles of cooking.",
    audio: "What is your favourite cuisine?"
  },
  {
    original: "Which restaurant do that you prefer?",
    correction: "Which restaurant do you prefer?",
    rule: "Syntax error: Do not insert relative pronoun 'that' inside a direct question with auxiliary 'do'.",
    audio: "Which restaurant do you prefer?"
  },
  {
    original: "I want to speak many languages / I want to be multi-speaker",
    correction: "I want to be a polyglot.",
    rule: "Advanced vocabulary: A person who speaks many foreign languages fluently is termed a 'polyglot'.",
    audio: "She wants to be a polyglot and speak four languages."
  },
  {
    original: "It's out of my usual thing",
    correction: "It's out of my comfort zone.",
    rule: "Natural idiom: When trying something unfamiliar and challenging, say 'It is out of my comfort zone'.",
    audio: "Public speaking is completely out of my comfort zone."
  },
  {
    original: "I like to talk with people / I am very social person",
    correction: "I am a social butterfly.",
    rule: "Colloquial idiom: An extrovert who moves easily among groups at parties is a 'social butterfly'.",
    audio: "He is a real social butterfly at corporate events."
  },
  {
    original: "You had to must change it",
    correction: "You had to change it. (Past obligation)",
    rule: "Modal past tense: 'Must' has no past tense form. The past of 'must' and 'have to' is always 'had to'.",
    audio: "You had to change your train ticket yesterday."
  }
];

const SESSION_20_PRONUNCIATION_LAB = [
  {
    word: "productive",
    ipa: "/prəˈdʌk.tɪv/",
    stress: "pro-DUC-tive (Stress on 2nd syllable)",
    tip: "Initial 'pro-' is reduced to a weak schwa /prə/, with strong stress on the short central vowel in 'DUC'."
  },
  {
    word: "cuisine",
    ipa: "/kwɪˈziːn/",
    stress: "cui-SINE (Stress on 2nd syllable)",
    tip: "Begins with /kwɪ/ and ends with a long tense /iː/ vowel on the stressed syllable."
  },
  {
    word: "polyglot",
    ipa: "/ˈpɒl.i.ɡlɒt/",
    stress: "POL-y-glot (Stress on 1st syllable)",
    tip: "Primary stress on the first syllable 'POL', with short open vowels /ɒ/."
  },
  {
    word: "gourmet",
    ipa: "/ˈɡʊə.meɪ/",
    stress: "GOUR-met (Stress on 1st syllable)",
    tip: "Borrowed from French; the 't' is silent, ending in diphthong /meɪ/."
  },
  {
    word: "better be going",
    ipa: "/ˈbet.ər biː ˈɡəʊ.ɪŋ/",
    stress: "I'd BET-ter be GO-ing",
    tip: "Linking 'r' connects 'better' and 'be', creating smooth continuous rhythm."
  },
  {
    word: "social butterfly",
    ipa: "/ˌsəʊ.ʃəl ˈbʌt.ə.flaɪ/",
    stress: "SO-cial BUT-ter-fly",
    tip: "Both words receive primary stress on their initial syllables."
  }
];

const SESSION_20_NOTEBOOK_PAGES = [
  {
    pageTitle: "Page 1: Small Talk Definition & Safe Topics Matrix",
    handoutDoc: "ARB_B1_07_I007CEA_HO_v1.0",
    date: "Session 20",
    image: "assets/images/session20_board_small_talk_table.jpg",
    summary: "Authentic smartboard table categorizing who makes small talk, where it happens, safe conversational themes, and social rationale.",
    notes: [
      "Who: People who do not know each other well, or acquaintances.",
      "What: Safe topics including weather, sports, food, travel, work, and films.",
      "Where: Elevators, bus stops, office corridors, cafeterias, and airport terminals.",
      "Why: To be polite and friendly, fill awkward silence, and establish trust."
    ]
  },
  {
    pageTitle: "Page 2: 4 Small Talk Themes & Sample Model Questions",
    handoutDoc: "ARB_B1_07_I007CEA_HO_v1.0",
    date: "Session 20",
    image: "assets/images/session20_board_small_talk_topics.jpg",
    summary: "Smartboard slide outlining practical conversational prompts across Weather, Sports, Hobbies, and Dining.",
    notes: [
      "Weather: 'Isn\'t the weather nice today?' / 'Isn\'t this weather terrible?'",
      "Sports: 'Did you see the football game?' / 'Do you play badminton?'",
      "Hobbies: 'What are your hobbies?' / 'What do you like to do in your free time?'",
      "Food & Drink: 'Have you tried that new Thai restaurant?' / 'What kind of food do you like?'"
    ]
  },
  {
    pageTitle: "Page 3: Whiteboard Missing-Letters Leave-Taking Exercise",
    handoutDoc: "ARB_B1_07_I007CEA_HO_v1.0",
    date: "Session 20",
    image: "assets/images/session20_board_goodbye_phrases.jpg",
    summary: "Classroom board gap-fill transcribing the 7 authentic phrases used to say goodbye politely.",
    notes: [
      "1. I\'d better be going.",
      "2. Keep in touch!",
      "3. I\'ll see you around.",
      "4. Safe journey!",
      "5. I\'ll be off then.",
      "6. It\'s been great meeting you.",
      "7. Come and see me soon."
    ]
  },
  {
    pageTitle: "Page 4: Teacher Live Clinic 1 - Hobbies & Education",
    handoutDoc: "ARB_B1_07_I007CEA_HO_v1.0",
    date: "Session 20",
    image: "assets/images/session20_board_teacher_clinic1.jpg",
    summary: "Teacher whiteboard analysis of phrasal verbs, academic terminology, and grammatical precision.",
    notes: [
      "Phrasal Verb: 'pick up new hobbies' (adopt skills casually).",
      "Academic collocation: 'take on an MA' (commit to postgraduate study).",
      "Terminology: 'major / field' in university.",
      "Vocabulary: 'slow metabolism' vs 'polyglot' (fluent in many languages)."
    ]
  },
  {
    pageTitle: "Page 5: Teacher Live Clinic 2 - Food, Idioms & Past Modals",
    handoutDoc: "ARB_B1_07_I007CEA_HO_v1.0",
    date: "Session 20",
    image: "assets/images/session20_board_teacher_clinic2.jpg",
    summary: "Whiteboard notes correcting collocations, food terminology, and modal verbs.",
    notes: [
      "Collocation: 'earn money' (wages) vs 'gain experience' (skills).",
      "Grammar: 'regret working' (regret + gerund for past deeds).",
      "Lexis: 'cuisine' (regional cooking) vs 'kitchen'.",
      "Idioms: 'out of my comfort zone' & 'social butterfly'.",
      "Modal Past: 'had to change it' (past form of must/have to)."
    ]
  }
];




/* ==========================================================================
   SESSION 21: THE VALUE OF SPORT (FOCUS ON FLUENCY)
   British Council Intermediate B1 • Focus on Fluency
   Handout ID: ARB_B1_08_I095CEU_HO_v1.0
   ========================================================================== */

const VOCAB_SESSION_21 = [
  {
    id: 2101,
    word: "triathlon",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/traɪˈæθ.lɒn/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "A race where athletes swim, cycle, and run long distances one after another.",
    b1Explain: "A multi-sport race that combines swimming, cycling, and running.",
    opposite: "single-sport race",
    arWord: "ترياثلون / سباق ثلاثي (سباحة، دراجات، ركض)",
    arMeaning: "سباق رياضي ثلاثي يشمل السباحة وركوب الدراجات والجري",
    sentence: "Anthony started training for his first triathlon at the age of fifty-five.",
    def: "A race where athletes swim, cycle, and run long distances one after another.",
    context: "Anthony started training for his first triathlon at the age of fifty-five.",
    ar: "سباق رياضي ثلاثي يشمل السباحة وركوب الدراجات والجري",
    phonetic: "/traɪˈæθ.lɒn/",
    partOfSpeech: "noun"
  },
  {
    id: 2102,
    word: "weightlifting",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈweɪtˌlɪf.tɪŋ/",
    citation: "Handout Page 1 & Smartboard Slide 6",
    definition: "A sport where you lift heavy metal bars to build strength and muscle.",
    b1Explain: "Exercising by lifting heavy weights to build strong muscles.",
    opposite: "aerobics / light cardio",
    arWord: "رفع الأثقال / رياضة حمل الأوزان والحديد",
    arMeaning: "رياضة رفع الأوزان الثقيلة لبناء القوة والعضلات",
    sentence: "Sue took up weightlifting at university to increase her physical stamina.",
    def: "A sport where you lift heavy metal bars to build strength and muscle.",
    context: "Sue took up weightlifting at university to increase her physical stamina.",
    ar: "رياضة رفع الأوزان الثقيلة لبناء القوة والعضلات",
    phonetic: "/ˈweɪtˌlɪf.tɪŋ/",
    partOfSpeech: "noun"
  },
  {
    id: 2103,
    word: "switch off",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/swɪtʃ ɒf/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To stop thinking about work or daily stress and completely relax your mind.",
    b1Explain: "To turn off your mental stress and focus on relaxing.",
    opposite: "stress out / obsess over",
    arWord: "يفصل عن التفكير / يسترخي / يوقف التوتر / يغلق جهازاً",
    arMeaning: "التوقف عن التفكير في ضغوط العمل والاسترخاء الذهني",
    sentence: "Going to the gym helps me switch off from the stress of a busy workday.",
    def: "To stop thinking about work or daily stress and completely relax your mind.",
    context: "Going to the gym helps me switch off from the stress of a busy workday.",
    ar: "التوقف عن التفكير في ضغوط العمل والاسترخاء الذهني",
    phonetic: "/swɪtʃ ɒf/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2104,
    word: "take up",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/teɪk ʌp/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To start doing a new hobby, sport, or activity for the first time.",
    b1Explain: "To begin practicing a new sport or regular activity.",
    opposite: "give up / quit",
    arWord: "يبدأ ممارسة / يخوض نشاطاً جديداً / يشغل وقتاً أو حيزاً",
    arMeaning: "البدء في ممارسة رياضة أو هواية جديدة لأول مرة",
    sentence: "My friend suggested I come down to the club and take up running.",
    def: "To start doing a new hobby, sport, or activity for the first time.",
    context: "My friend suggested I come down to the club and take up running.",
    ar: "البدء في ممارسة رياضة أو هواية جديدة لأول مرة",
    phonetic: "/teɪk ʌp/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2105,
    word: "hooked on",
    pos: "adjective phrase",
    cambridgeLevel: "B2",
    pronunciation: "/hʊkt ɒn/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "Extremely excited about an activity and wanting to do it as much as possible.",
    b1Explain: "Feeling so enthusiastic about an activity that you cannot stop doing it.",
    opposite: "bored with / indifferent to",
    arWord: "شديد التعلق بـ / مهووس ومتحمس للغاية / مدمن إيجابياً على",
    arMeaning: "التعلق الشديد بنشاط معين والمداومة عليه بشغف",
    sentence: "After training for only two weeks, Sue was completely hooked on weightlifting.",
    def: "Extremely excited about an activity and wanting to do it as much as possible.",
    context: "After training for only two weeks, Sue was completely hooked on weightlifting.",
    ar: "التعلق الشديد بنشاط معين والمداومة عليه بشغف",
    phonetic: "/hʊkt ɒn/",
    partOfSpeech: "adjective phrase"
  },
  {
    id: 2106,
    word: "burn off",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/bɜːn ɒf/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To use up physical energy or calories through intense exercise or movement.",
    b1Explain: "To get rid of extra energy or body fat through exercise.",
    opposite: "store fat / gain weight",
    arWord: "يحرق سعرات حرارية / يستهلك طاقة الجسم / يتخلص من الدهون",
    arMeaning: "حرق السعرات الحرارية والتخلص من الطاقة الزائدة بالرياضة",
    sentence: "An intensive training session helps burn off excess calories quickly.",
    def: "To use up physical energy or calories through intense exercise or movement.",
    context: "An intensive training session helps burn off excess calories quickly.",
    ar: "حرق السعرات الحرارية والتخلص من الطاقة الزائدة بالرياضة",
    phonetic: "/bɜːn ɒf/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2107,
    word: "build up",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/bɪld ʌp/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To gradually increase your physical strength, muscle mass, or endurance over time.",
    b1Explain: "To make your muscles or stamina stronger step by step.",
    opposite: "weaken / lose muscle",
    arWord: "يبني / يقوي تدريجياً / ينمي عضلات ولياقة",
    arMeaning: "تقوية العضلات وبناء اللياقة البدنية والتحمل تدريجياً",
    sentence: "Lifting weights regularly will build up your muscle strength and bone density.",
    def: "To gradually increase your physical strength, muscle mass, or endurance over time.",
    context: "Lifting weights regularly will build up your muscle strength and bone density.",
    ar: "تقوية العضلات وبناء اللياقة البدنية والتحمل تدريجياً",
    phonetic: "/bɪld ʌp/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2108,
    word: "hard on",
    pos: "adjective phrase",
    cambridgeLevel: "B2",
    pronunciation: "/hɑːd ɒn/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "Causing strain, wear, or physical stress to delicate joints like knees and ankles.",
    b1Explain: "Putting painful pressure or strain on parts of the body.",
    opposite: "gentle on / joint-friendly",
    arWord: "شديد الإجهاد على / مجهد للمفاصل / قاسٍ على الركبتين",
    arMeaning: "مجهد ويسبب ضغطاً وألماً على المفاصل والأربطة",
    sentence: "Long-distance running on concrete pavements can be very hard on the knees.",
    def: "Causing strain, wear, or physical stress to delicate joints like knees and ankles.",
    context: "Long-distance running on concrete pavements can be very hard on the knees.",
    ar: "مجهد ويسبب ضغطاً وألماً على المفاصل والأربطة",
    phonetic: "/hɑːd ɒn/",
    partOfSpeech: "adjective phrase"
  },
  {
    id: 2109,
    word: "stamina",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈstæm.ɪ.nə/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "The physical or mental energy to keep doing hard exercise for a long time.",
    b1Explain: "The power to keep running or exercising without getting tired quickly.",
    opposite: "exhaustion / fatigue",
    arWord: "قوة التحمل / طاقة الصمود والاستمرار / جلد بدني",
    arMeaning: "القدرة البدنية على مواصلة الجهد الشاق لفترة طويلة",
    sentence: "Triathlon athletes need extraordinary stamina to finish the swimming, cycling, and running.",
    def: "The physical or mental energy to keep doing hard exercise for a long time.",
    context: "Triathlon athletes need extraordinary stamina to finish the swimming, cycling, and running.",
    ar: "القدرة البدنية على مواصلة الجهد الشاق لفترة طويلة",
    phonetic: "/ˈstæm.ɪ.nə/",
    partOfSpeech: "noun"
  },
  {
    id: 2110,
    word: "endurance",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ɪnˈdʒʊə.rəns/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "The ability to suffer difficult physical pain or tiredness without giving up.",
    b1Explain: "Continuing through hard physical effort over long distances.",
    opposite: "fragility / giving up",
    arWord: "صمود / قدرة التحمل / صيرورة وطول نفس",
    arMeaning: "القدرة على تحمل المشاق والإرهاق دون استسلام",
    sentence: "Marathon runners train for months to develop their cardiovascular endurance.",
    def: "The ability to suffer difficult physical pain or tiredness without giving up.",
    context: "Marathon runners train for months to develop their cardiovascular endurance.",
    ar: "القدرة على تحمل المشاق والإرهاق دون استسلام",
    phonetic: "/ɪnˈdʒʊə.rəns/",
    partOfSpeech: "noun"
  },
  {
    id: 2111,
    word: "downside",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈdaʊn.saɪd/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "The disadvantage, negative aspect, or drawback of a situation or sport.",
    b1Explain: "A negative point or disadvantage of an activity.",
    opposite: "upside / benefit",
    arWord: "جانب سلبي / عيب / نقيصة / وجه غير محبذ",
    arMeaning: "الجانب السلبي أو العيب في نشاط أو قرار",
    sentence: "The only downside of intense training is the high risk of joint injuries.",
    def: "The disadvantage, negative aspect, or drawback of a situation or sport.",
    context: "The only downside of intense training is the high risk of joint injuries.",
    ar: "الجانب السلبي أو العيب في نشاط أو قرار",
    phonetic: "/ˈdaʊn.saɪd/",
    partOfSpeech: "noun"
  },
  {
    id: 2112,
    word: "benefit",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈben.ɪ.fɪt/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "A helpful, positive, or healthy result that improves your life or fitness.",
    b1Explain: "A good, positive advantage that you get from doing something.",
    opposite: "drawback / harm",
    arWord: "فائدة / ميزة / منفعة صحية / نفع",
    arMeaning: "فائدة وميزة إيجابية تعود على الصحة أو النفس",
    sentence: "Regular exercise offers both physical health benefits and social connection.",
    def: "A helpful, positive, or healthy result that improves your life or fitness.",
    context: "Regular exercise offers both physical health benefits and social connection.",
    ar: "فائدة وميزة إيجابية تعود على الصحة أو النفس",
    phonetic: "/ˈben.ɪ.fɪt/",
    partOfSpeech: "noun"
  },
  {
    id: 2113,
    word: "in good shape",
    pos: "idiom / phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ɪn ɡʊd ʃeɪp/",
    citation: "Smartboard Slide 9 (Anthony's Benefits)",
    definition: "Being healthy, physically fit, and having a strong, active body.",
    b1Explain: "Having a fit, healthy body from exercising regularly.",
    opposite: "out of shape / unfit",
    arWord: "في لياقة بدنية ممتازة / بصحة جيدة وجسم رشيق",
    arMeaning: "التمتع بلياقة بدنية وصحية عالية وجسم قوي",
    sentence: "Training three days a week keeps Anthony in good shape in his sixties.",
    def: "Being healthy, physically fit, and having a strong, active body.",
    context: "Training three days a week keeps Anthony in good shape in his sixties.",
    ar: "التمتع بلياقة بدنية وصحية عالية وجسم قوي",
    phonetic: "/ɪn ɡʊd ʃeɪp/",
    partOfSpeech: "idiom / phrase"
  },
  {
    id: 2114,
    word: "come down",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/kʌm daʊn/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To travel or visit a local venue or club to join others.",
    b1Explain: "To visit a place or club to take part in an activity.",
    opposite: "stay away / depart",
    arWord: "يأتي لزيارة / ينزل للنادي / ينضم إلى لقاء",
    arMeaning: "القدوم إلى مكان أو نادٍ للانضمام إلى مجموعة",
    sentence: "Why don't you come down to the sports hall on Saturday and meet the team?",
    def: "To travel or visit a local venue or club to join others.",
    context: "Why don't you come down to the sports hall on Saturday and meet the team?",
    ar: "القدوم إلى مكان أو نادٍ للانضمام إلى مجموعة",
    phonetic: "/kʌm daʊn/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2115,
    word: "keep off",
    pos: "phrasal verb",
    cambridgeLevel: "B1",
    pronunciation: "/kiːp ɒf/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "To prevent extra body weight or fat from returning after you lose it.",
    b1Explain: "To make sure unwanted weight does not come back.",
    opposite: "gain back weight / regain pounds",
    arWord: "يمنع رجوع الوزن / يحافظ على ثبات الوزن / يتجنب السمنة",
    arMeaning: "منع عودة الوزن الزائد بعد فقدانه والحفاظ على الرشاقة",
    sentence: "A balanced diet combined with lifting weights helps keep the weight off permanently.",
    def: "To prevent extra body weight or fat from returning after you lose it.",
    context: "A balanced diet combined with lifting weights helps keep the weight off permanently.",
    ar: "منع عودة الوزن الزائد بعد فقدانه والحفاظ على الرشاقة",
    phonetic: "/kiːp ɒf/",
    partOfSpeech: "phrasal verb"
  },
  {
    id: 2116,
    word: "energetic",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˌen.əˈdʒet.ɪk/",
    citation: "Smartboard Slide 17 (Teacher Clinic)",
    definition: "Full of vitality, active power, and enthusiasm; never feeling slow or tired.",
    b1Explain: "Having lots of energy and eager to move or be active.",
    opposite: "lethargic / sluggish",
    arWord: "مفعم بالحيوية / نشيط / ذو طاقة متجددة / حماسي",
    arMeaning: "مليء بالنشاط والحيوية والطاقة الإيجابية",
    sentence: "Exercising in the morning makes you feel alert and energetic throughout the whole day.",
    def: "Full of vitality, active power, and enthusiasm; never feeling slow or tired.",
    context: "Exercising in the morning makes you feel alert and energetic throughout the whole day.",
    ar: "مليء بالنشاط والحيوية والطاقة الإيجابية",
    phonetic: "/ˌen.əˈdʒet.ɪk/",
    partOfSpeech: "adjective"
  },
  {
    id: 2117,
    word: "sprint distance",
    pos: "compound noun",
    cambridgeLevel: "B2",
    pronunciation: "/sprɪnt ˈdɪs.təns/",
    citation: "Smartboard Slide 9 (Triathlon Distances)",
    definition: "A shorter race format designed for speed rather than very long endurance.",
    b1Explain: "A shorter sports race distance where athletes go as fast as possible.",
    opposite: "marathon distance",
    arWord: "مسافة السرعة القصيرة / سباق المسافات القصيرة",
    arMeaning: "سباق بمسافات قصيرة يركز على السرعة بدلاً من التحمل الطويل",
    sentence: "A sprint distance triathlon consists of a 750-meter swim, 20-kilometer cycle, and 5-kilometer run.",
    def: "A shorter race format designed for speed rather than very long endurance.",
    context: "A sprint distance triathlon consists of a 750-meter swim, 20-kilometer cycle, and 5-kilometer run.",
    ar: "سباق بمسافات قصيرة يركز على السرعة بدلاً من التحمل الطويل",
    phonetic: "/sprɪnt ˈdɪs.təns/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2118,
    word: "Olympic distance",
    pos: "compound noun",
    cambridgeLevel: "B2",
    pronunciation: "/əˈlɪm.pɪk ˈdɪs.təns/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "The official international triathlon standard: 1.5km swim, 40km bike, and 10km run.",
    b1Explain: "The standard triathlon distance used in the Olympic Games.",
    opposite: "ironman distance",
    arWord: "المسافة الأولمبية القياسية / السباق الأولمبي المعتمد",
    arMeaning: "المسافة الأولمبية الرسمية للسباق الثلاثي",
    sentence: "Anthony competed in the Olympic distance triathlon, finishing in under three hours.",
    def: "The official international triathlon standard: 1.5km swim, 40km bike, and 10km run.",
    context: "Anthony competed in the Olympic distance triathlon, finishing in under three hours.",
    ar: "المسافة الأولمبية الرسمية للسباق الثلاثي",
    phonetic: "/əˈlɪm.pɪk ˈdɪs.təns/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2119,
    word: "recommend",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/ˌrek.əˈmend/",
    citation: "Handout Page 2 (Presenter Questions)",
    definition: "To suggest an activity or sport to someone because you believe it is good.",
    b1Explain: "To tell someone that a sport or activity is great to try.",
    opposite: "discourage / warn against",
    arWord: "يوصي بـ / يرشح / ينصح بتجربة شيء",
    arMeaning: "تزكية ونصح الآخرين بممارسة رياضة أو خوض تجربة",
    sentence: "Sue would definitely recommend weightlifting to other young women wanting to feel strong.",
    def: "To suggest an activity or sport to someone because you believe it is good.",
    context: "Sue would definitely recommend weightlifting to other young women wanting to feel strong.",
    ar: "تزكية ونصح الآخرين بممارسة رياضة أو خوض تجربة",
    phonetic: "/ˌrek.əˈmend/",
    partOfSpeech: "verb"
  },
  {
    id: 2120,
    word: "injury",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈɪn.dʒər.i/",
    citation: "Handout Page 1 (Exercise 2)",
    definition: "Physical damage to your body, muscles, or bones caused by an accident or exercise.",
    b1Explain: "Harm or damage done to your body during physical training.",
    opposite: "recovery / wellness",
    arWord: "إصابة بدنية / أذى جسدي / تمزق أو جرح",
    arMeaning: "إصابة أو ضرر جسدي يحدث للعضلات أو العظام أثناء التمرين",
    sentence: "Warming up thoroughly before heavy squats helps prevent serious knee injuries.",
    def: "Physical damage to your body, muscles, or bones caused by an accident or exercise.",
    context: "Warming up thoroughly before heavy squats helps prevent serious knee injuries.",
    ar: "إصابة أو ضرر جسدي يحدث للعضلات أو العظام أثناء التمرين",
    phonetic: "/ˈɪn.dʒər.i/",
    partOfSpeech: "noun"
  },
  {
    id: 2121,
    word: "climbing",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈklaɪ.mɪŋ/",
    citation: "Handout Page 1 (Lead-in Activities)",
    definition: "The sport of using your hands and feet to ascend steep rock walls or mountains.",
    b1Explain: "The activity of going up steep rocks or artificial climbing walls.",
    opposite: "descending / base walking",
    arWord: "تسلق الجبال والصخور / رياضة الصعود العمودي",
    arMeaning: "رياضة تسلق المرتفعات أو الجدران الصخرية باستخدام اليدين والقدمين",
    sentence: "Indoor rock climbing builds tremendous grip strength and upper body power.",
    def: "The sport of using your hands and feet to ascend steep rock walls or mountains.",
    context: "Indoor rock climbing builds tremendous grip strength and upper body power.",
    ar: "رياضة تسلق المرتفعات أو الجدران الصخرية باستخدام اليدين والقدمين",
    phonetic: "/ˈklaɪ.mɪŋ/",
    partOfSpeech: "noun"
  },
  {
    id: 2122,
    word: "cycling",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈsaɪ.klɪŋ/",
    citation: "Handout Page 1 (Lead-in Activities)",
    definition: "The sport or activity of riding a bicycle for fitness or racing.",
    b1Explain: "Riding a bike on roads or tracks for exercise.",
    opposite: "driving / walking",
    arWord: "ركوب الدراجات / سباق الدراجات الهوائية",
    arMeaning: "رياضة ركوب الدراجات الهوائية للتنقل أو اللياقة البدنية",
    sentence: "Cycling along scenic country lanes is Anthony's favorite part of triathlon training.",
    def: "The sport or activity of riding a bicycle for fitness or racing.",
    context: "Cycling along scenic country lanes is Anthony's favorite part of triathlon training.",
    ar: "رياضة ركوب الدراجات الهوائية للتنقل أو اللياقة البدنية",
    phonetic: "/ˈsaɪ.klɪŋ/",
    partOfSpeech: "noun"
  },
  {
    id: 2123,
    word: "bowling",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈbəʊ.lɪŋ/",
    citation: "Handout Page 1 (Lead-in Activities)",
    definition: "A game where players roll a heavy ball down a lane to knock down pins.",
    b1Explain: "A social sport where you roll a ball to knock down ten wooden pins.",
    opposite: "athletics / combat sports",
    arWord: "البولينج / لعبة دحرجة الكرة لإسقاط الأوتاد",
    arMeaning: "لعبة دحرجة كرة ثقيلة في مسار خشبي لإسقاط الأهداف العشرة",
    sentence: "Our office team went ten-pin bowling on Friday for a relaxing social evening.",
    def: "A game where players roll a heavy ball down a lane to knock down pins.",
    context: "Our office team went ten-pin bowling on Friday for a relaxing social evening.",
    ar: "لعبة دحرجة كرة ثقيلة في مسار خشبي لإسقاط الأهداف العشرة",
    phonetic: "/ˈbəʊ.lɪŋ/",
    partOfSpeech: "noun"
  },
  {
    id: 2124,
    word: "muscles",
    pos: "noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/ˈmʌs.əlz/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "Tissues inside the body that contract to produce movement, strength, and posture.",
    b1Explain: "Parts of the body that give you strength to lift and run.",
    opposite: "fat tissue",
    arWord: "عضلات الجسم / أنسجة القوة العضلية",
    arMeaning: "أنسجة الجسم المسؤولة عن الحركة وبذل القوة البدنية",
    sentence: "Compound exercises like deadlifts activate multiple major muscle groups simultaneously.",
    def: "Tissues inside the body that contract to produce movement, strength, and posture.",
    context: "Compound exercises like deadlifts activate multiple major muscle groups simultaneously.",
    ar: "أنسجة الجسم المسؤولة عن الحركة وبذل القوة البدنية",
    phonetic: "/ˈmʌs.əlz/",
    partOfSpeech: "noun (plural)"
  },
  {
    id: 2125,
    word: "ankles",
    pos: "noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/ˈæŋ.kəlz/",
    citation: "Handout Page 1 & Smartboard Slide 9",
    definition: "The joints connecting your feet with your lower legs that bear your body weight.",
    b1Explain: "The joint between your foot and the bottom of your leg.",
    opposite: "wrists / shoulders",
    arWord: "كواحل القدمين / مفاصل الكاحل",
    arMeaning: "مفاصل القدمين التي تربط الساق بالقدم وتحمل وزن الجسم",
    sentence: "Wearing supportive running shoes protects your ankles on uneven trails.",
    def: "The joints connecting your feet with your lower legs that bear your body weight.",
    context: "Wearing supportive running shoes protects your ankles on uneven trails.",
    ar: "مفاصل القدمين التي تربط الساق بالقدم وتحمل وزن الجسم",
    phonetic: "/ˈæŋ.kəlz/",
    partOfSpeech: "noun (plural)"
  },
  {
    id: 2126,
    word: "calories",
    pos: "noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkæl.ər.iz/",
    citation: "Handout Page 1 & Smartboard Slide 10",
    definition: "Units measuring the amount of energy provided by food and burned during exercise.",
    b1Explain: "Units of energy in food that you burn off when exercising.",
    opposite: "empty mass",
    arWord: "سعرات حرارية / وحدات طاقة غذائية",
    arMeaning: "وحدات قياس الطاقة الغذائية المستهلكة في النشاط البدني",
    sentence: "A one-hour cross-training workout can burn off more than six hundred calories.",
    def: "Units measuring the amount of energy provided by food and burned during exercise.",
    context: "A one-hour cross-training workout can burn off more than six hundred calories.",
    ar: "وحدات قياس الطاقة الغذائية المستهلكة في النشاط البدني",
    phonetic: "/ˈkæl.ər.iz/",
    partOfSpeech: "noun (plural)"
  },
  {
    id: 2127,
    word: "cardio",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈkɑː.di.əʊ/",
    citation: "Smartboard Slide 9 (Sue's Advice)",
    definition: "Aerobic exercise that raises your heart rate, such as running, swimming, or cycling.",
    b1Explain: "Exercise like running or swimming that makes your heart beat faster.",
    opposite: "static stretching",
    arWord: "تمارين الكارديو / تمارين القلب والأوعية الهوائية",
    arMeaning: "التمارين الرياضية الهوائية التي ترفع نبضات القلب وتنشط الدورة الدموية",
    sentence: "Combining strength training with moderate cardio creates the most balanced physical fitness.",
    def: "Aerobic exercise that raises your heart rate, such as running, swimming, or cycling.",
    context: "Combining strength training with moderate cardio creates the most balanced physical fitness.",
    ar: "التمارين الرياضية الهوائية التي ترفع نبضات القلب وتنشط الدورة الدموية",
    phonetic: "/ˈkɑː.di.əʊ/",
    partOfSpeech: "noun"
  },
  {
    id: 2128,
    word: "training schedule",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtreɪ.nɪŋ ˌʃedʒ.uːl/",
    citation: "Handout Page 1 (Exercise 1)",
    definition: "A planned timetable showing the days, times, and types of workouts you must do.",
    b1Explain: "A weekly plan showing when and how you will exercise.",
    opposite: "random exercise / no plan",
    arWord: "جدول التدريب الرياضي / خطة التمارين المجدولة",
    arMeaning: "خطة زمنية منتظمة تحدد مواعيد التمارين الرياضية وأنواعها",
    sentence: "Sticking to a weekly training schedule ensures steady progress before an endurance race.",
    def: "A planned timetable showing the days, times, and types of workouts you must do.",
    context: "Sticking to a weekly training schedule ensures steady progress before an endurance race.",
    ar: "خطة زمنية منتظمة تحدد مواعيد التمارين الرياضية وأنواعها",
    phonetic: "/ˈtreɪ.nɪŋ ˌʃedʒ.uːl/",
    partOfSpeech: "compound noun"
  }
];

const SESSION_21_SPORTS_RANKING = {
  title: "Lead-in: The 8 Core Sports & Activity Enjoyment Index",
  badge: "Handout Page 1 (Lead-in Activity)",
  description: "Rate the following sports and physical activities in order of enjoyment for doing (not just watching!) from 1 (most enjoyable) to 8 (least enjoyable).",
  activities: [
    { id: 1, name: "Running", icon: "🏃", benefits: "Cardiovascular health, high calorie burn, mental clarity", risk: "Hard on knees and ankle joints" },
    { id: 2, name: "Cycling", icon: "🚴", benefits: "Low impact on joints, leg endurance, outdoor exploration", risk: "Traffic and road safety" },
    { id: 3, name: "Swimming", icon: "🏊", benefits: "Full-body workout, zero joint impact, lung capacity", risk: "Pool access and technique" },
    { id: 4, name: "Tennis", icon: "🎾", benefits: "Agility, hand-eye coordination, social competition", risk: "Elbow strain and sudden stopping" },
    { id: 5, name: "Walking", icon: "🚶", benefits: "Accessible to everyone, switches off daily stress, sustainable", risk: "Lower intensity" },
    { id: 6, name: "Bowling", icon: "🎳", benefits: "Relaxing, highly sociable, friendly team atmosphere", risk: "Low cardiovascular challenge" },
    { id: 7, name: "Going to the gym", icon: "🏋️", benefits: "Targeted muscle building, climate controlled, flexible", risk: "Gym membership cost, intimidation" },
    { id: 8, name: "Climbing", icon: "🧗", benefits: "Extreme grip strength, problem-solving, thrill", risk: "Fear of heights, specialized gear required" }
  ]
};

const SESSION_21_LISTENING_INTERVIEW = {
  title: "Radio Feature: Why We Love Our Sports (Anthony & Sue)",
  badge: "Handout Page 1 & Smartboard Slides 6 & 9",
  summary: "A presenter interviews two athletes who found a life-changing passion in demanding sports: Anthony, who took up triathlons in his mid-fifties, and Sue, who fell in love with competitive weightlifting at nineteen.",
  characters: [
    {
      name: "Anthony (Triathlon Athlete)",
      sport: "Triathlons (Swimming 1.5km, Cycling 40km, Running 10km)",
      ageStarted: "Started at 55 (now 61)",
      reason: "Had more free time and running club friends suggested it",
      benefits: "Keeps him in great physical shape; vast social network of active friends",
      drawbacks: "Running can be hard on the knees and ankles; requires structured training",
      quote: "Triathlons keep me physically sharp and give me an incredible circle of supportive friends."
    },
    {
      name: "Sue (Weightlifter)",
      sport: "Olympic Weightlifting",
      ageStarted: "Started at 19 (university)",
      reason: "University friend recommended it to build functional strength",
      benefits: "Builds strength and stamina, burns off calories, keeps weight off, and switches off mental stress",
      drawbacks: "Must balance lifting with cardio and running to avoid becoming slow or overly heavy",
      quote: "Lifting heavy weights switches my brain off from work stress better than anything else."
    }
  ],
  qaCards: [
    {
      q: "1. When and why did Anthony start training for triathlons?",
      a: "Six years ago, when he was 55, because he had more free time and friends from a running club suggested it.",
      audio: "Anthony started six years ago at age fifty-five because he had free time and friends suggested it."
    },
    {
      q: "2. How far is an Olympic distance triathlon?",
      a: "It consists of a 1.5 km swim, 40 km bike ride, and 10 km run (= exactly twice the sprint triathlon distance).",
      audio: "An Olympic distance triathlon is a 1.5 kilometer swim, 40 kilometer bike ride, and 10 kilometer run."
    },
    {
      q: "3. What are the benefits of the sport for Anthony?",
      a: "Being in great physical shape, improving cardiovascular health, and enjoying social benefits from a large circle of friends.",
      audio: "The benefits are staying in top physical shape and gaining a large number of active friends."
    },
    {
      q: "4. Are there any disadvantages for Anthony?",
      a: "Running can be hard on the knees and ankles, though it is manageable if you train properly with good footwear.",
      audio: "Running can be hard on the knees and ankles, but it is fine if you train with proper technique."
    },
    {
      q: "5. When and why did Sue start weightlifting?",
      a: "Four years ago, when she was 19, because a friend at university suggested it.",
      audio: "Sue started four years ago at age nineteen after a university friend recommended it."
    },
    {
      q: "6. What are the benefits of the sport for Sue?",
      a: "Physical health (building strength and stamina), switching off from job stress, and burning off calories to keep weight off.",
      audio: "She gains strength and stamina, switches off from job stress, and burns off calories."
    },
    {
      q: "7. What training advice does Sue give about lifting?",
      a: "Don't just do heavy weights alone because it builds up heavy muscle and makes you slow; combine it with running.",
      audio: "Don't just lift heavy weights; you should run as well so you don't become slow and heavy."
    }
  ]
};

const SESSION_21_MULTIWORD_VERBS_LAB = {
  title: "Multiword Verbs Laboratory: Sports & Physical Wellbeing",
  badge: "Handout Page 1 & Smartboard Slides 10 & 11",
  prepositions: ["down", "off", "up", "on"],
  items: [
    {
      id: 1,
      sentence: "Anthony's friend suggested he come _____ to the running club.",
      verb: "come down",
      prep: "down",
      meaning: "Travel or visit a club or group venue.",
      ar: "ينزل أو يأتي لزيارة النادي والانضمام إليه"
    },
    {
      id: 2,
      sentence: "Weightlifting helps Sue switch _____ from the stress of her job.",
      verb: "switch off",
      prep: "off",
      meaning: "Disconnect mentally and stop thinking about stress.",
      ar: "يفصل عقلياً ويتوقف عن التفكير في ضغوط العمل"
    },
    {
      id: 3,
      sentence: "Anthony took _____ triathlons in his mid-50s.",
      verb: "take up",
      prep: "up",
      meaning: "Start practicing a new sport or hobby.",
      ar: "يبدأ ممارسة رياضة أو نشاط جديد لأول مرة"
    },
    {
      id: 4,
      sentence: "Running on hard roads can be hard _____ the knees and ankles.",
      verb: "hard on",
      prep: "on",
      meaning: "Cause painful physical pressure, wear, or strain on joints.",
      ar: "شديد الإجهاد والضغط على المفاصل والأوتار"
    },
    {
      id: 5,
      sentence: "After a few weeks Sue was hooked _____ weightlifting.",
      verb: "hooked on",
      prep: "on",
      meaning: "Extremely excited, passionate, or addicted to an activity.",
      ar: "شديد الشغف والتعلق بالنشاط والمداومة عليه"
    },
    {
      id: 6,
      sentence: "Weightlifting is great at burning _____ calories and helps to keep the weight off.",
      verb: "burn off",
      prep: "off",
      meaning: "Use up calories through intensive physical effort.",
      ar: "يحرق السعرات الحرارية الزائدة ويتخلص من الدهون"
    },
    {
      id: 7,
      sentence: "Weightlifting can build _____ muscle, strength, and stamina.",
      verb: "build up",
      prep: "up",
      meaning: "Increase strength and physical power gradually.",
      ar: "يبني ويقوي العضلات وقوة التحمل تدريجياً"
    }
  ]
};

const SESSION_21_PRESENTER_QUESTIONS = {
  title: "The 6 Essential Sports Interviewer Question Formulas",
  badge: "Handout Page 2 (Exercise 3)",
  questions: [
    { id: 1, gap: "How [long] have you been doing triathlons?", word: "long", full: "How long have you been doing triathlons?", tip: "Present Perfect Continuous for duration of athletic hobby" },
    { id: 2, gap: "How did you [get] started?", word: "get", full: "How did you get started?", tip: "Common idiom for investigating initial inspiration" },
    { id: 3, gap: "How did your first race [go]?", word: "go", full: "How did your first race go?", tip: "Asking about success, outcome, and initial experience" },
    { id: 4, gap: "How do you think it [helps] you in your life?", word: "helps", full: "How do you think it helps you in your life?", tip: "Exploring broader lifestyle, physical, and psychological benefits" },
    { id: 5, gap: "Would you [recommend] it to other girls?", word: "recommend", full: "Would you recommend it to other girls?", tip: "Inviting advice for peers and prospective newcomers" },
    { id: 6, gap: "Are there any [downsides]?", word: "downsides", full: "Are there any downsides?", tip: "Inviting balanced reflection on injuries, costs, and challenges" }
  ]
};

const SESSION_21_TEACHER_FEEDBACK = [
  {
    original: "She agree with the statement.",
    correction: "She agrees with the statement.",
    rule: "Subject-Verb Agreement: In the Present Simple, third-person singular subjects (he/she/it) require the -s or -es verb ending.",
    audio: "She agrees with the statement."
  },
  {
    original: "If something goes wrong, it will be a great risk.",
    correction: "If something goes wrong, it poses a big risk. / ...there will be a high risk.",
    rule: "Collocation & First Conditional: We say 'pose a risk' or 'run a risk'. We generally describe risks as 'high', 'serious', or 'big', rather than 'great'.",
    audio: "If something goes wrong, it poses a big risk."
  },
  {
    original: "They take care of a lot of things, so we can't call them lazy.",
    correction: "They take care of a lot of things, so we can't call them lazy. (Grammatically accurate!)",
    rule: "Phrasal Verb Accuracy: 'Take care of' is correctly used here to mean handling responsibilities proactively.",
    audio: "They take care of a lot of things, so we can't call them lazy."
  },
  {
    original: "It make you feel happy and you switch off stress.",
    correction: "It makes you feel happy and it switches off stress.",
    rule: "Parallel Agreement: Keep subject-verb agreement consistent across coordinated clauses ('it makes... and it switches off...').",
    audio: "It makes you feel happy and it switches off stress."
  }
];

const SESSION_21_PRONUNCIATION_LAB = [
  { word: "heard", ipa: "/hɜːd/", sound: "Long central vowel /ɜː/", note: "Rhymes with 'bird' and 'word'. Do not pronounce like 'hear' or 'beard'." },
  { word: "think", ipa: "/θɪŋk/", sound: "Voiceless dental fricative /θ/", note: "Place tongue between teeth. Do not substitute with /s/ or /f/." },
  { word: "energetic", ipa: "/ˌen.əˈdʒet.ɪk/", sound: "Secondary stress on /en-/, main stress on /-dʒet-/", note: "Four syllables with rhythm: en-er-GET-ic." },
  { word: "triathlon", ipa: "/traɪˈæθ.lɒn/", sound: "Three distinct syllables: tri-ATH-lon", note: "Avoid inserting an extra vowel sound like 'tri-ath-a-lon'." },
  { word: "muscles", ipa: "/ˈmʌs.əlz/", sound: "Silent 'c'", note: "Pronounced identically to the seafood 'mussels' (/ˈmʌs.əlz/)." },
  { word: "ankles", ipa: "/ˈæŋ.kəlz/", sound: "Velar nasal /ŋ/ before /k/", note: "Distinct from 'uncle' (/ˈʌŋ.kəl/); ensure front open vowel /æ/." }
];

const SESSION_21_WHITEBOARD_GALLERY = [
  { img: "assets/images/session21_board_input_sports.jpg", title: "Smartboard Slide 6: Radio Interview Input (Anthony & Sue)", desc: "Core listening introduction: Anthony's triathlon passion (swimming, cycling, running) and Sue's Olympic weightlifting." },
  { img: "assets/images/session21_board_input_answers.jpg", title: "Smartboard Slide 9: Complete Listening Q&A Key", desc: "Detailed breakdown of Anthony starting at 55, Olympic distances (1.5km swim, 40km bike, 10km run), joint impacts, Sue's routine, and cardio balance." },
  { img: "assets/images/session21_board_multiword_verbs.jpg", title: "Smartboard Slide 10: Multiword Verbs Exercise", desc: "Filling prepositions (down, off, up, on) into high-frequency British sports and wellness phrasal verbs." },
  { img: "assets/images/session21_board_teacher_annotations.jpg", title: "Smartboard Slide 10 Annotations: Teacher's Red Pen Insights", desc: "Live classroom explanations: switch off = turn off stress, took up = try something new, hooked on = extremely excited/addicted." },
  { img: "assets/images/session21_board_partner_questions.jpg", title: "Smartboard Slide 11: Speaking Partner Discussion Tasks", desc: "Classroom fluency prompts testing conversational fluency with multiword verbs and injury recovery strategies." },
  { img: "assets/images/session21_board_teacher_clinic.jpg", title: "Smartboard Slide 17: Live Teacher Language Clinic", desc: "Real-time student error correction: third person singular 's', risk collocations, energetic pronunciation, and vowel drills (/heard/, /think/)." }
];


/* ==========================================================================
   SESSION 22: CONVERSATION TOPICS & SOCIAL INCLUSION
   British Council Intermediate B1 • Social and Cultural Inclusion
   Handout ID: ARB_B1_10_I122CEA_HO_v1.0
   ========================================================================== */

const VOCAB_SESSION_22 = [
  {
    id: 2201,
    word: "common ground",
    pos: "compound noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˌkɒm.ən ˈɡraʊnd/",
    citation: "Handout Page 2 & Smartboard Slide 9",
    definition: "Shared interests, beliefs, or experiences that help two different people connect easily.",
    b1Explain: "Interests and ideas that two people both share and enjoy.",
    opposite: "total disagreement / polarization",
    arWord: "أرضية مشتركة / نقاط اهتمام وتفاهم مشتركة",
    arMeaning: "الاهتمامات والخبرات المشتركة التي تجمع بين شخصين",
    sentence: "Finding common ground about favorite travel destinations helped us break the ice immediately.",
    def: "Shared interests, beliefs, or experiences that help two different people connect easily.",
    context: "Finding common ground about favorite travel destinations helped us break the ice immediately.",
    ar: "الاهتمامات والخبرات المشتركة التي تجمع بين شخصين",
    phonetic: "/ˌkɒm.ən ˈɡraʊnd/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2202,
    word: "strategy",
    pos: "noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈstræt.ə.dʒi/",
    citation: "Handout Page 2 & Smartboard Slide 9",
    definition: "A smart, careful plan or method designed to achieve success in conversation or life.",
    b1Explain: "A clear plan of action to handle a situation or conversation well.",
    opposite: "random action / ad-hoc",
    arWord: "استراتيجية / خطة عمل محكمة / أسلوب منهجي",
    arMeaning: "خطة مدروسة ومنهجية لتحقيق هدف أو إدارة حوار بنجاح",
    sentence: "Using the 'Three A's' strategy makes social conversations feel natural and balanced.",
    def: "A smart, careful plan or method designed to achieve success in conversation or life.",
    context: "Using the 'Three A's' strategy makes social conversations feel natural and balanced.",
    ar: "خطة مدروسة ومنهجية لتحقيق هدف أو إدارة حوار بنجاح",
    phonetic: "/ˈstræt.ə.dʒi/",
    partOfSpeech: "noun"
  },
  {
    id: 2203,
    word: "interactive",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˌɪn.təˈræk.tɪv/",
    citation: "Handout Page 2 & Smartboard Slide 9",
    definition: "Involving active communication and mutual participation where both sides talk and listen.",
    b1Explain: "When people participate actively together rather than just one person talking.",
    opposite: "passive / one-sided lecture",
    arWord: "تفاعلي / متبادل المشاركة / قائم على التحاور المشترك",
    arMeaning: "تفاعلي يتطلب مشاركة وتجاوب الطرفين في الحديث",
    sentence: "A good networking conversation must be interactive, not just one person asking all the questions.",
    def: "Involving active communication and mutual participation where both sides talk and listen.",
    context: "A good networking conversation must be interactive, not just one person asking all the questions.",
    ar: "تفاعلي يتطلب مشاركة وتجاوب الطرفين في الحديث",
    phonetic: "/ˌɪn.təˈræk.tɪv/",
    partOfSpeech: "adjective"
  },
  {
    id: 2204,
    word: "offended",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/əˈfen.dɪd/",
    citation: "Handout Page 2 & Smartboard Slide 9",
    definition: "Feeling upset, hurt, or annoyed because someone said something rude or inappropriate.",
    b1Explain: "Feeling hurt or angry because of an impolite or intrusive comment.",
    opposite: "pleased / complimented",
    arWord: "مستاء / متضايق من إساءة / منزعج ومجروح المشاعر",
    arMeaning: "الشعور بالاستياء أو الانزعاج بسبب كلام غير لائق",
    sentence: "Some people feel offended when strangers ask prying questions about their salary or age.",
    def: "Feeling upset, hurt, or annoyed because someone said something rude or inappropriate.",
    context: "Some people feel offended when strangers ask prying questions about their salary or age.",
    ar: "الشعور بالاستياء أو الانزعاج بسبب كلام غير لائق",
    phonetic: "/əˈfen.dɪd/",
    partOfSpeech: "adjective"
  },
  {
    id: 2205,
    word: "taboo topic",
    pos: "compound noun",
    cambridgeLevel: "B2",
    pronunciation: "/təˈbuː ˈtɒp.ɪk/",
    citation: "Handout Page 2 & Smartboard Slide 9",
    definition: "A sensitive subject that people avoid discussing because social etiquette considers it unacceptable.",
    b1Explain: "A topic that is considered impolite or inappropriate to talk about in public.",
    opposite: "safe topic / open subject",
    arWord: "موضوع محظور اجتماعياً / مسألة شائكة وممنوع الخوض فيها",
    arMeaning: "موضوع حساس يتجنب الناس مناقشته لعدم ملاءمته اجتماعياً",
    sentence: "In many corporate cultures, personal debt and political affiliation are treated as taboo topics.",
    def: "A sensitive subject that people avoid discussing because social etiquette considers it unacceptable.",
    context: "In many corporate cultures, personal debt and political affiliation are treated as taboo topics.",
    ar: "موضوع حساس يتجنب الناس مناقشته لعدم ملاءمته اجتماعياً",
    phonetic: "/təˈbuː ˈtɒp.ɪk/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2206,
    word: "controversial",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˌkɒn.trəˈvɜː.ʃəl/",
    citation: "Smartboard Slide 5 (Complete Sentences)",
    definition: "Causing a lot of disagreement, strong arguments, or opposing public opinions.",
    b1Explain: "Something that causes heated debates and strong disagreements among people.",
    opposite: "uncontroversial / consensus",
    arWord: "مثير للجدل / مثار خلاف وانقسام في الآراء",
    arMeaning: "يسبب جدلاً واسعاً واختلافاً حاداً في وجهات النظر",
    sentence: "Immigration and taxation can be highly controversial topics at an informal dinner party.",
    def: "Causing a lot of disagreement, strong arguments, or opposing public opinions.",
    context: "Immigration and taxation can be highly controversial topics at an informal dinner party.",
    ar: "يسبب جدلاً واسعاً واختلافاً حاداً في وجهات النظر",
    phonetic: "/ˌkɒn.trəˈvɜː.ʃəl/",
    partOfSpeech: "adjective"
  },
  {
    id: 2207,
    word: "trivial",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈtrɪv.i.əl/",
    citation: "Smartboard Slide 5 (Complete Sentences)",
    definition: "Having little value, seriousness, or real importance; small and ordinary.",
    b1Explain: "Very small and unimportant; not worth worrying about.",
    opposite: "crucial / significant",
    arWord: "تافه / بسيط وغير مهم / سطحي وقليل القيمة",
    arMeaning: "بسيط وقليل الأهمية ولا يستحق القلق أو الخلاف",
    sentence: "Don't waste time arguing over trivial details like who chose the restaurant.",
    def: "Having little value, seriousness, or real importance; small and ordinary.",
    context: "Don't waste time arguing over trivial details like who chose the restaurant.",
    ar: "بسيط وقليل الأهمية ولا يستحق القلق أو الخلاف",
    phonetic: "/ˈtrɪv.i.əl/",
    partOfSpeech: "adjective"
  },
  {
    id: 2208,
    word: "vent",
    pos: "verb",
    cambridgeLevel: "B2",
    pronunciation: "/vent/",
    citation: "Smartboard Slide 5 (Complete Sentences)",
    definition: "To express strong negative feelings, anger, or frustration openly to a trusted friend.",
    b1Explain: "To talk freely about your anger or frustration to feel relieved.",
    opposite: "bottle up / suppress",
    arWord: "يفضفض / ينفس عن غضبه / يبوح بما في صدره",
    arMeaning: "التعبير عن المشاعر السلبية والإحباط لتفريغ الشحنة النفسية",
    sentence: "After a frustrating confrontation at the office, she needed to vent to her colleague.",
    def: "To express strong negative feelings, anger, or frustration openly to a trusted friend.",
    context: "After a frustrating confrontation at the office, she needed to vent to her colleague.",
    ar: "التعبير عن المشاعر السلبية والإحباط لتفريغ الشحنة النفسية",
    phonetic: "/vent/",
    partOfSpeech: "verb"
  },
  {
    id: 2209,
    word: "make small talk",
    pos: "verb phrase",
    cambridgeLevel: "B1",
    pronunciation: "/meɪk ˈsmɔːl ˌtɔːk/",
    citation: "Smartboard Slide 5 (Complete Sentences)",
    definition: "To have a polite, casual conversation about light and neutral topics before serious business.",
    b1Explain: "To chat casually about ordinary things to make someone feel comfortable.",
    opposite: "plunge into formal debate",
    arWord: "يتبادل أحاديث ودية خفيفة / يتجاذب أطراف الحديث",
    arMeaning: "إجراء محادثة ودية خفيفة حول موضوعات بسيطة لكسر الحواجز",
    sentence: "It is customary to make small talk about the flight before launching into the contract negotiation.",
    def: "To have a polite, casual conversation about light and neutral topics before serious business.",
    context: "It is customary to make small talk about the flight before launching into the contract negotiation.",
    ar: "إجراء محادثة ودية خفيفة حول موضوعات بسيطة لكسر الحواجز",
    phonetic: "/meɪk ˈsmɔːl ˌtɔːk/",
    partOfSpeech: "verb phrase"
  },
  {
    id: 2210,
    word: "offensive",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/əˈfen.sɪv/",
    citation: "Smartboard Slide 5 (Complete Sentences)",
    definition: "Likely to make someone angry or disgusted; rude and disrespectful.",
    b1Explain: "Rude or hurtful words that upset other people.",
    opposite: "courteous / polite",
    arWord: "مسيء / مهين وغير لائق / جارح للمشاعر",
    arMeaning: "مسيء ويجرح المشاعر أو يفتقر إلى اللباقة والاحترام",
    sentence: "Making jokes about a person's religion or ethnic background is unacceptable and offensive.",
    def: "Likely to make someone angry or disgusted; rude and disrespectful.",
    context: "Making jokes about a person's religion or ethnic background is unacceptable and offensive.",
    ar: "مسيء ويجرح المشاعر أو يفتقر إلى اللباقة والاحترام",
    phonetic: "/əˈfen.sɪv/",
    partOfSpeech: "adjective"
  },
  {
    id: 2211,
    word: "stereotype",
    pos: "noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈster.i.ə.taɪp/",
    citation: "Smartboard Slides 19 & 20 (Teacher Feedback)",
    definition: "A fixed, oversimplified, and often unfair general idea that people have about a group.",
    b1Explain: "A general belief about all people in a group that is often not true.",
    opposite: "nuanced understanding / individuality",
    arWord: "صورة نمطية / فكرة مسبقة شائعة وغير دقيقة",
    arMeaning: "فكرة نمطية مسبقة وغير دقيقة عن جماعة أو ثقافة معينة",
    sentence: "Cultural exchange programs help travelers overcome stereotypes about international communities.",
    def: "A fixed, oversimplified, and often unfair general idea that people have about a group.",
    context: "Cultural exchange programs help travelers overcome stereotypes about international communities.",
    ar: "فكرة نمطية مسبقة وغير دقيقة عن جماعة أو ثقافة معينة",
    phonetic: "/ˈster.i.ə.taɪp/",
    partOfSpeech: "noun"
  },
  {
    id: 2212,
    word: "get to know",
    pos: "verb phrase",
    cambridgeLevel: "B1",
    pronunciation: "/ɡet tuː nəʊ/",
    citation: "Smartboard Slides 19 & 20 (Teacher Feedback)",
    definition: "To spend time with someone gradually so that you learn about their personality and life.",
    b1Explain: "To spend time with a person until you understand them well.",
    opposite: "remain strangers",
    arWord: "يتعرف على تدريجياً / يكتشف شخصية فلان مع الوقت",
    arMeaning: "التعرف على شخص بمرور الوقت واكتشاف طباعه واهتماماته",
    sentence: "Working on the community project helped the volunteers get to know each other closely.",
    def: "To spend time with someone gradually so that you learn about their personality and life.",
    context: "Working on the community project helped the volunteers get to know each other closely.",
    ar: "التعرف على شخص بمرور الوقت واكتشاف طباعه واهتماماته",
    phonetic: "/ɡet tuː nəʊ/",
    partOfSpeech: "verb phrase"
  },
  {
    id: 2213,
    word: "hilarious",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/hɪˈleə.ri.əs/",
    citation: "Smartboard Slides 19 & 20 & Adjectives Table",
    definition: "Extremely funny and entertaining, making people laugh out loud.",
    b1Explain: "So funny that it makes everyone laugh loudly (extreme of funny).",
    opposite: "boring / solemn",
    arWord: "مضحك للغاية / في غاية الطرافة / مسلٍ جداً",
    arMeaning: "مضحك جداً ومثير للضحك بصوت عالٍ (صفة قوية لا تقبل very)",
    sentence: "The speaker shared a hilarious story about his first confusing day living abroad.",
    def: "Extremely funny and entertaining, making people laugh out loud.",
    context: "The speaker shared a hilarious story about his first confusing day living abroad.",
    ar: "مضحك جداً ومثير للضحك بصوت عالٍ (صفة قوية لا تقبل very)",
    phonetic: "/hɪˈleə.ri.əs/",
    partOfSpeech: "adjective"
  },
  {
    id: 2214,
    word: "freezing",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈfriː.zɪŋ/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely cold, having a temperature near or below the freezing point of water.",
    b1Explain: "Very, very cold (extreme of cold).",
    opposite: "boiling",
    arWord: "شديد البرودة / متجمد من البرد / قارص",
    arMeaning: "شديد البرودة لدرجة التجمد",
    sentence: "Put your thick winter coat on because it's absolutely freezing outside today.",
    def: "Extremely cold, having a temperature near or below the freezing point of water.",
    context: "Put your thick winter coat on because it's absolutely freezing outside today.",
    ar: "شديد البرودة لدرجة التجمد",
    phonetic: "/ˈfriː.zɪŋ/",
    partOfSpeech: "adjective"
  },
  {
    id: 2215,
    word: "boiling",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈbɔɪ.lɪŋ/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely hot; feeling uncomfortably warm and sweaty in high temperatures.",
    b1Explain: "Very, very hot (extreme of hot).",
    opposite: "freezing",
    arWord: "شديد الحرارة / حار جداً كالغليان / ملتهب",
    arMeaning: "شديد الحرارة بشكل لا يطاق",
    sentence: "Without air conditioning in August, the top-floor office was boiling.",
    def: "Extremely hot; feeling uncomfortably warm and sweaty in high temperatures.",
    context: "Without air conditioning in August, the top-floor office was boiling.",
    ar: "شديد الحرارة بشكل لا يطاق",
    phonetic: "/ˈbɔɪ.lɪŋ/",
    partOfSpeech: "adjective"
  },
  {
    id: 2216,
    word: "furious",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈfjʊə.ri.əs/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely angry; filled with intense rage and displeasure.",
    b1Explain: "Very, very angry (extreme of angry).",
    opposite: "delighted / calm",
    arWord: "غاضب جداً / ثائر ومحنق للغاية / مستشيط غضباً",
    arMeaning: "شديد الغضب وممتلئ بالحنق والانفعال",
    sentence: "The client was furious when our shipment arrived three days after the firm deadline.",
    def: "Extremely angry; filled with intense rage and displeasure.",
    context: "The client was furious when our shipment arrived three days after the firm deadline.",
    ar: "شديد الغضب وممتلئ بالحنق والانفعال",
    phonetic: "/ˈfjʊə.ri.əs/",
    partOfSpeech: "adjective"
  },
  {
    id: 2217,
    word: "exhausted",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ɪɡˈzɔː.stɪd/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely tired, having completely drained all your physical and mental strength.",
    b1Explain: "Very, very tired (extreme of tired).",
    opposite: "refreshed / energetic",
    arWord: "منهك تماماً / مجهد لأقصى درجة / خائر القوى",
    arMeaning: "في غاية التعب والإرهاق بعد استنفاد كامل الطاقة",
    sentence: "After facilitating the eight-hour bilingual workshop, Noi was completely exhausted.",
    def: "Extremely tired, having completely drained all your physical and mental strength.",
    context: "After facilitating the eight-hour bilingual workshop, Noi was completely exhausted.",
    ar: "في غاية التعب والإرهاق بعد استنفاد كامل الطاقة",
    phonetic: "/ɪɡˈzɔː.stɪd/",
    partOfSpeech: "adjective"
  },
  {
    id: 2218,
    word: "filthy",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈfɪl.θi/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely dirty, covered with thick layers of dust, mud, or grease.",
    b1Explain: "Very, very dirty (extreme of dirty).",
    opposite: "spotless / clean",
    arWord: "شديد القذارة / متسخ جداً / مغطى بالأتربة",
    arMeaning: "في غاية الاتساخ والقذارة",
    sentence: "His mountain biking shoes were filthy after cycling through muddy forest tracks.",
    def: "Extremely dirty, covered with thick layers of dust, mud, or grease.",
    context: "His mountain biking shoes were filthy after cycling through muddy forest tracks.",
    ar: "في غاية الاتساخ والقذارة",
    phonetic: "/ˈfɪl.θi/",
    partOfSpeech: "adjective"
  },
  {
    id: 2219,
    word: "tiny",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ˈtaɪ.ni/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely small in size, volume, or dimension.",
    b1Explain: "Very, very small (extreme of small).",
    opposite: "enormous / huge",
    arWord: "ضئيل الحجم جداً / متناهي الصغر / قميء",
    arMeaning: "صغير جداً ومتناهي الضآلة",
    sentence: "The microchip inside the smart identity card is tiny but holds vast data.",
    def: "Extremely small in size, volume, or dimension.",
    context: "The microchip inside the smart identity card is tiny but holds vast data.",
    ar: "صغير جداً ومتناهي الضآلة",
    phonetic: "/ˈtaɪ.ni/",
    partOfSpeech: "adjective"
  },
  {
    id: 2220,
    word: "enormous",
    pos: "adjective",
    cambridgeLevel: "B1",
    pronunciation: "/ɪˈnɔː.məs/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely large in size, quantity, or degree; huge and vast.",
    b1Explain: "Very, very large (extreme of big).",
    opposite: "tiny",
    arWord: "ضخم للغاية / هائل / فائق الكبر والاتساع",
    arMeaning: "ضخم وهائل جداً في الحجم أو الأثر",
    sentence: "The new community sports complex has an enormous Olympic swimming pool.",
    def: "Extremely large in size, quantity, or degree; huge and vast.",
    context: "The new community sports complex has an enormous Olympic swimming pool.",
    ar: "ضخم وهائل جداً في الحجم أو الأثر",
    phonetic: "/ɪˈnɔː.məs/",
    partOfSpeech: "adjective"
  },
  {
    id: 2221,
    word: "terrifying",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˈter.ə.faɪ.ɪŋ/",
    citation: "Smartboard Extreme Adjectives Table",
    definition: "Extremely scary, frightening, and causing intense panic or dread.",
    b1Explain: "Very, very scary (extreme of scary).",
    opposite: "comforting / soothing",
    arWord: "مرعب ومخيف جداً / مروع ويثير الفزع",
    arMeaning: "مخيف للغاية ومثير للرعب والهلع",
    sentence: "Turbulence during the storm was a terrifying experience for nervous passengers.",
    def: "Extremely scary, frightening, and causing intense panic or dread.",
    context: "Turbulence during the storm was a terrifying experience for nervous passengers.",
    ar: "مخيف للغاية ومثير للرعب والهلع",
    phonetic: "/ˈter.ə.faɪ.ɪŋ/",
    partOfSpeech: "adjective"
  },
  {
    id: 2222,
    word: "surroundings",
    pos: "noun (plural)",
    cambridgeLevel: "B1",
    pronunciation: "/səˈraʊn.dɪŋz/",
    citation: "Handout Page 1 (Listening Question 6)",
    definition: "The place, objects, and environment around you, which serve as an easy conversation topic.",
    b1Explain: "The physical environment and room around you.",
    opposite: "distant context",
    arWord: "المكان المحيط / البيئة والأجواء المجاورة",
    arMeaning: "المكان والبيئة المحيطة بالشخص والتي تصلح كموضوع لبدء الحوار",
    sentence: "Commenting on the tasteful décor of the conference room is an easy way to start talking.",
    def: "The place, objects, and environment around you, which serve as an easy conversation topic.",
    context: "Commenting on the tasteful décor of the conference room is an easy way to start talking.",
    ar: "المكان والبيئة المحيطة بالشخص والتي تصلح كموضوع لبدء الحوار",
    phonetic: "/səˈraʊn.dɪŋz/",
    partOfSpeech: "noun (plural)"
  },
  {
    id: 2223,
    word: "participate",
    pos: "verb",
    cambridgeLevel: "B1",
    pronunciation: "/pɑːˈtɪs.ɪ.peɪt/",
    citation: "Handout Page 1 (Listening Question 2)",
    definition: "To take part in an activity or conversation along with other people.",
    b1Explain: "To join in and take an active part in a conversation.",
    opposite: "withdraw / remain silent",
    arWord: "يشارك / يسهم في الحوار / ينخرط مع الآخرين",
    arMeaning: "المشاركة الفعالة والتحدث في حوار جماعي",
    sentence: "Zhang wanted to participate more naturally instead of just giving short, passive answers.",
    def: "To take part in an activity or conversation along with other people.",
    context: "Zhang wanted to participate more naturally instead of just giving short, passive answers.",
    ar: "المشاركة الفعالة والتحدث في حوار جماعي",
    phonetic: "/pɑːˈtɪs.ɪ.peɪt/",
    partOfSpeech: "verb"
  },
  {
    id: 2224,
    word: "safe topic",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/seɪf ˈtɒp.ɪk/",
    citation: "Handout Page 1 & Smartboard Discussion",
    definition: "A neutral subject like the weather, food, or sports that will not cause discomfort or offense.",
    b1Explain: "An easy, polite topic that does not offend anyone.",
    opposite: "taboo topic",
    arWord: "موضوع آمن للحوار / حديث حيادي خالٍ من الحرج",
    arMeaning: "موضوع حيادي وآمن مثل الطقس أو الرياضة لا يثير أي حرج أو خلاف",
    sentence: "When chatting with international clients for the first time, stick to safe topics like travel.",
    def: "A neutral subject like the weather, food, or sports that will not cause discomfort or offense.",
    context: "When chatting with international clients for the first time, stick to safe topics like travel.",
    ar: "موضوع حيادي وآمن مثل الطقس أو الرياضة لا يثير أي حرج أو خلاف",
    phonetic: "/seɪf ˈtɒp.ɪk/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2225,
    word: "sensitive topic",
    pos: "compound noun",
    cambridgeLevel: "B2",
    pronunciation: "/ˈsen.sɪ.tɪv ˈtɒp.ɪk/",
    citation: "Handout Page 1 (Listening Question 9)",
    definition: "A delicate subject that needs careful handling because it can easily trigger emotional distress.",
    b1Explain: "A delicate subject that can easily make people uncomfortable or annoyed.",
    opposite: "casual topic",
    arWord: "موضوع حساس / مسألة شائكة تتطلب الحذر والكياسة",
    arMeaning: "موضوع دقيق وحساس قد يثير انفعالات أو مشاعر محرجة",
    sentence: "Personal finances and religious beliefs are sensitive topics that require utmost tact.",
    def: "A delicate subject that needs careful handling because it can easily trigger emotional distress.",
    context: "Personal finances and religious beliefs are sensitive topics that require utmost tact.",
    ar: "موضوع دقيق وحساس قد يثير انفعالات أو مشاعر محرجة",
    phonetic: "/ˈsen.sɪ.tɪv ˈtɒp.ɪk/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2226,
    word: "cross-cultural",
    pos: "adjective",
    cambridgeLevel: "B2",
    pronunciation: "/ˌkrɒsˈkʌl.tʃər.əl/",
    citation: "Handout Page 1 (Listening Overview)",
    definition: "Involving, comparing, or combining people and ideas from different countries and traditions.",
    b1Explain: "Connecting or involving people from different world cultures.",
    opposite: "monocultural",
    arWord: "عابر للثقافات / متعدد الثقافات / تواصل بين الثقافات",
    arMeaning: "متعلق بالتفاعل والمقارنة بين ثقافات وعادات شعوب مختلفة",
    sentence: "Effective cross-cultural communication requires understanding that polite topics vary around the world.",
    def: "Involving, comparing, or combining people and ideas from different countries and traditions.",
    context: "Effective cross-cultural communication requires understanding that polite topics vary around the world.",
    ar: "متعلق بالتفاعل والمقارنة بين ثقافات وعادات شعوب مختلفة",
    phonetic: "/ˌkrɒsˈkʌl.tʃər.əl/",
    partOfSpeech: "adjective"
  },
  {
    id: 2227,
    word: "role play",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˈrəʊl ˌpleɪ/",
    citation: "Handout Page 1 (Exercise 3)",
    definition: "Practicing a real-life conversation by pretending to be in a specific situation with a partner.",
    b1Explain: "Acting out a situation in class to practice speaking English.",
    opposite: "real incident",
    arWord: "لعب أدوار تمثيلية / محاكاة تدريبية لموقف واقعي",
    arMeaning: "تقمص أدوار واقعية والتدرب على المحادثة في سياق محدد",
    sentence: "The teacher asked Dewi and Alan to perform a role play at a simulated university reception.",
    def: "Practicing a real-life conversation by pretending to be in a specific situation with a partner.",
    context: "The teacher asked Dewi and Alan to perform a role play at a simulated university reception.",
    ar: "تقمص أدوار واقعية والتدرب على المحادثة في سياق محدد",
    phonetic: "/ˈrəʊl ˌpleɪ/",
    partOfSpeech: "compound noun"
  },
  {
    id: 2228,
    word: "two-way conversation",
    pos: "compound noun",
    cambridgeLevel: "B1",
    pronunciation: "/ˌtuː.weɪ ˌkɒn.vəˈseɪ.ʃən/",
    citation: "Smartboard Slide 13 (The Three A's)",
    definition: "A dialogue where both speakers contribute ideas, ask questions, and listen equally.",
    b1Explain: "A conversation where both people talk and listen equally.",
    opposite: "monologue / interrogation",
    arWord: "محادثة ثنائية الاتجاه / حوار متبادل متكافئ",
    arMeaning: "حوار متبادل يتشارك فيه الطرفان بالكلام والاستماع بالتساوي",
    sentence: "Using the 'Answer, Add, Ask' formula transforms an awkward interview into a genuine two-way conversation.",
    def: "A dialogue where both speakers contribute ideas, ask questions, and listen equally.",
    context: "Using the 'Answer, Add, Ask' formula transforms an awkward interview into a genuine two-way conversation.",
    ar: "حوار متبادل يتشارك فيه الطرفان بالكلام والاستماع بالتساوي",
    phonetic: "/ˌtuː.weɪ ˌkɒn.vəˈseɪ.ʃən/",
    partOfSpeech: "compound noun"
  }
];

const SESSION_22_TOPICS_CATEGORIZER = {
  title: "Lead-in: Acceptable vs. Taboo Conversation Topics",
  badge: "Handout Page 1 (Lead-in Activity)",
  description: "When meeting someone from another country or culture for the first time, some topics build instant rapport, while others can cause deep discomfort.",
  categories: {
    safe: [
      { topic: "The Weather", why: "Universal, non-controversial, and a classic British icebreaker.", example: "Lovely day today, isn't it?" },
      { topic: "Your Surroundings", why: "Immediate shared reality; comment on the venue, food, or view.", example: "This venue has incredible lighting, don't you think?" },
      { topic: "Travel & Hometowns", why: "People love sharing positive memories of where they grew up or visited.", example: "Have you ever visited northern Italy?" },
      { topic: "Food & Cuisines", why: "Engaging and universally enjoyable cultural topic.", example: "Do you know any great local Thai restaurants around here?" },
      { topic: "Sports & Hobbies", why: "Great for finding passionate common ground.", example: "Are you into tennis or football?" }
    ],
    taboo: [
      { topic: "Personal Income / Salaries", why: "Asking 'How much do you earn?' is considered rude and invasive in the UK and US.", example: "Avoid asking about money or rent." },
      { topic: "Political Affiliations", why: "Highly polarized; can create heated arguments before rapport is established.", example: "Avoid asking who someone voted for." },
      { topic: "Religious Beliefs", why: "Deeply personal; risk of offending or sounding judgmental.", example: "Avoid questioning religious practices." },
      { topic: "Age & Marital Status", why: "Can feel like an interrogation or intrusive personal pressure.", example: "Avoid asking 'Why aren't you married yet?'." },
      { topic: "Negative Physical Comments", why: "Commenting on someone's weight or tired appearance is offensive.", example: "Never say 'You look exhausted today'." }
    ]
  }
};

const SESSION_22_LISTENING_PASSAGE = {
  title: "Cross-Cultural Case Study: Zhang, Dewi, Julie & Alan",
  badge: "Handout Page 1 (Exercises 1, 2 & 3)",
  audioContext: "A university seminar on communicating across cultures in English. Tutor Noi facilitates role-plays and discussions with international students Zhang (from China) and Dewi (from Indonesia) to overcome conversational anxiety.",
  transcript: `Tutor Noi: Welcome everyone. Today we are looking at communicating across cultures in English. Many learners tell me that when they meet native speakers, they feel like they are being interrogated with lots of questions! Zhang, you experienced this, didn't you?

Zhang: Yes, absolutely! At first, I felt so stressed. British people kept asking me question after question. I thought I was answering politely, but the conversations always died out quickly.

Tutor Noi: Exactly. In English conversation, giving one-word answers forces the other person to work too hard. To make it interactive, you need a strategy. We call it 'The Three A's': Answer, Add, and Ask. Let's see how Zhang did in his first role-play with Julie.

Julie: So, Zhang, where do you come from?
Zhang: I'm from China. Actually, I'm from the capital, Beijing. Have you ever been to China, Julie?
Julie: Oh, I haven't, but I've always wanted to see the Great Wall! How long did you live in Beijing?

Tutor Noi: Fantastic! Notice how Zhang didn't just stop at 'I'm from China'. He added a detail about Beijing, and then asked Julie a reciprocal question. That transformed it into a genuine two-way conversation.

Now, let's look at Dewi's role-play with Alan at a reception. Dewi was nervous about taboo topics. What did you talk about, Dewi?

Dewi: Alan and I started by talking about our immediate surroundings—the music playing and the historic hall. Our surroundings are so easy because you are both seeing and hearing the same things right now! Alan then asked about my flight. It was safe, polite, and we quickly discovered common ground about our mutual love of photography.

Tutor Noi: Well done. Remember: what is considered personal or taboo can differ between cultures. Asking about someone's salary or marital status might be normal small talk in some countries, but in the UK it can cause real offense. Stick to safe topics first, use the Three A's, and listen actively!`,
  trueFalseQuiz: [
    { id: 1, statement: "Zhang feels comfortable talking to British people because they ask him a lot of questions.", isTrue: false, explanation: "False: At first, Zhang felt stressed and like he was being interrogated because he only gave short answers." },
    { id: 2, statement: "Zhang needs to learn how to participate more in a conversation and not just answer questions.", isTrue: true, explanation: "True: He needed to learn how to add information and ask questions back to make it a two-way dialogue." },
    { id: 3, statement: "In the first role play, Zhang listens to what Julie says and asks about her responses.", isTrue: true, explanation: "True: Zhang applied the 3 A's by asking 'Have you ever been to China, Julie?'." },
    { id: 4, statement: "To have a good conversation you should only give basic answers to questions so the other person has to keep asking more questions.", isTrue: false, explanation: "False: Basic one-word answers kill conversations; you should add details and ask questions in return." },
    { id: 5, statement: "Asking someone how much money they earn is usually an OK question.", isTrue: false, explanation: "False: Asking about salaries is considered a taboo topic and impolite in British culture." },
    { id: 6, statement: "Talking about your surroundings is one of the easiest things to talk about.", isTrue: true, explanation: "True: Surroundings (the room, music, venue, weather) are shared experiences that are immediate and neutral." },
    { id: 7, statement: "In the second role play, Dewi only talks about music at the party.", isTrue: false, explanation: "False: Dewi talked about the historic hall, her flight, and their shared interest in photography." },
    { id: 8, statement: "Alan changed the topic in the role play to a more serious one.", isTrue: false, explanation: "False: They kept the conversation casual, friendly, and focused on safe topics and hobbies." },
    { id: 9, statement: "Topics that are seen as too personal are the same across all cultures.", isTrue: false, explanation: "False: What is acceptable or taboo varies significantly across different cultures around the world." },
    { id: 10, statement: "Noi feels that students need to learn how to talk about things in a personal way.", isTrue: true, explanation: "True: Noi teaches students to share safe personal details using the 'Add' step to build warmth and rapport." }
  ]
};

const SESSION_22_THREE_AS_LAB = {
  title: "The Three A's Conversational Strategy Laboratory",
  badge: "Smartboard Slide 13 (Language Focus)",
  description: "Transform every interview into an enjoyable two-way conversation using the proven 3 A's formula: Answer, Add, and Ask.",
  formula: [
    { letter: "1. Answer", role: "Direct & Polite", desc: "Answer the question directly. Never give a blunt 'yes', 'no', or single-word reply.", example: "Julie: 'Where do you come from?' ➔ Zhang: 'I'm from China.'" },
    { letter: "2. Add", role: "Color & Context", desc: "Volunteer 1 or 2 interesting extra facts, personal stories, or feelings to give the other person something to react to.", example: "Zhang: 'Actually, I'm from the capital, Beijing.'" },
    { letter: "3. Ask", role: "Pass the Ball", desc: "Ask a reciprocal or related question back to keep the flow balanced and show genuine interest.", example: "Zhang: 'Have you ever been to China, Julie?'" }
  ],
  practiceScenarios: [
    {
      partnerQ: "Do you play any sports?",
      modelA: "Yes, I do. (Answer)",
      modelAdd: "I took up cycling last year and I ride about twenty kilometers every Sunday morning. (Add)",
      modelAsk: "How about you? Do you prefer outdoor sports or going to the gym? (Ask)",
      audio: "Yes, I do. I took up cycling last year and I ride about twenty kilometers every Sunday morning. How about you? Do you prefer outdoor sports or going to the gym?"
    },
    {
      partnerQ: "Is this your first time at this conference?",
      modelA: "Yes, it is my first time here. (Answer)",
      modelAdd: "I flew in from Cairo yesterday, and I've been really impressed by the keynote speakers so far. (Add)",
      modelAsk: "Have you attended this event in previous years? (Ask)",
      audio: "Yes, it is my first time here. I flew in from Cairo yesterday, and I've been really impressed by the keynote speakers so far. Have you attended this event in previous years?"
    },
    {
      partnerQ: "What do you think of the venue?",
      modelA: "I think it's fantastic. (Answer)",
      modelAdd: "The historic architecture and the garden terrace outside are truly wonderful. (Add)",
      modelAsk: "Did you travel far to get here this morning? (Ask)",
      audio: "I think it's fantastic. The historic architecture and the garden terrace outside are truly wonderful. Did you travel far to get here this morning?"
    }
  ]
};

const SESSION_22_VOCAB_MATCHING = {
  title: "Core Lexical Matching & Sentence Completion",
  badge: "Handout Page 2 & Smartboard Slides 5 & 9",
  definitionsQuiz: [
    { term: "common ground", correct: "b", options: { a: "shared location", b: "shared interests and experiences", c: "shared hometowns and facilities" } },
    { term: "strategy", correct: "a", options: { a: "a careful plan or way of doing something", b: "a way of asking questions", c: "a careful way of controlling a situation" } },
    { term: "interactive", correct: "b", options: { a: "responding to the actions of a user", b: "involving participation from all", c: "requiring people to work together" } },
    { term: "offended", correct: "c", options: { a: "embarrassed by something or someone", b: "confused by something or someone", c: "upset by something or someone" } },
    { term: "taboo topics", correct: "b", options: { a: "things that are not interesting to talk about", b: "things that are not acceptable to talk about", c: "things that must never be talked about" } }
  ],
  gapSentences: [
    { id: 1, sentence: "In some cultures, talking about money or salaries is considered [taboo].", word: "taboo", hint: "Unacceptable subject in polite company" },
    { id: 2, sentence: "When you meet someone from another country, it is useful to [make small talk] before starting a serious conversation.", word: "make small talk", hint: "Chat casually about safe, friendly topics" },
    { id: 3, sentence: "Making jokes about someone's religion or nationality can be very [offensive].", word: "offensive", hint: "Hurtful and impolite" },
    { id: 4, sentence: "Some people think that discussing immigration is a [controversial] topic because it creates strong disagreements.", word: "controversial", hint: "Provokes arguments and divided opinions" },
    { id: 5, sentence: "Don't worry about such a [trivial] problem. There are much more important things to discuss.", word: "trivial", hint: "Small, unimportant detail" },
    { id: 6, sentence: "When my colleague feels frustrated about discrimination at work, she needs to [vent] to a friend.", word: "vent", hint: "Express frustration freely to relieve stress" }
  ]
};

const SESSION_22_EXTREME_ADJECTIVES = {
  title: "Extreme Adjectives Laboratory (Smartboard Table)",
  badge: "Smartboard Slide & Espresso English Reference",
  rule: "Extreme adjectives (non-gradable adjectives) already contain the idea of 'very'. Therefore, you CANNOT say 'very freezing' or 'very hilarious'. Instead, use 'absolutely', 'completely', or use the extreme adjective on its own!",
  pairs: [
    { base: "cold", extreme: "freezing", ipa: "/ˈfriː.zɪŋ/", example: "It's not just cold outside; it's absolutely freezing!" },
    { base: "hot", extreme: "boiling", ipa: "/ˈbɔɪ.lɪŋ/", example: "Open the window! The conference room is boiling." },
    { base: "angry", extreme: "furious", ipa: "/ˈfjʊə.ri.əs/", example: "She wasn't just annoyed; she was furious when the meeting was cancelled." },
    { base: "tired", extreme: "exhausted", ipa: "/ɪɡˈzɔː.stɪd/", example: "After flying for twelve hours, I felt completely exhausted." },
    { base: "dirty", extreme: "filthy", ipa: "/ˈfɪl.θi/", example: "Wash your hands immediately; they are filthy from the garden." },
    { base: "funny", extreme: "hilarious", ipa: "/hɪˈleə.ri.əs/", example: "His speech at the dinner was absolutely hilarious." },
    { base: "small", extreme: "tiny", ipa: "/ˈtaɪ.ni/", example: "Their apartment in Tokyo was tiny, but very well organized." },
    { base: "big", extreme: "enormous / huge", ipa: "/ɪˈnɔː.məs/", example: "They hosted the gala in an enormous ballroom." },
    { base: "scary", extreme: "terrifying", ipa: "/ˈter.ə.faɪ.ɪŋ/", example: "Driving on icy mountain cliffs was a terrifying experience." },
    { base: "good", extreme: "wonderful / fantastic / excellent", ipa: "/ˈwʌn.də.fəl/", example: "The performance by the international choir was fantastic." }
  ]
};

const SESSION_22_TEACHER_FEEDBACK = [
  {
    original: "Stereotype",
    correction: "Stereotype (Noun / Verb): Learn to recognize cultural stereotypes.",
    rule: "Lexical Mastery: A 'stereotype' is an oversimplified generalization about a group. We say 'cultural stereotypes' or 'to challenge stereotypes'.",
    audio: "A stereotype is an oversimplified idea about a group of people."
  },
  {
    original: "How much have you been here?",
    correction: "How long have you been here?",
    rule: "Duration vs. Quantity: Use 'How long' with the Present Perfect to inquire about time duration. 'How much' asks about cost or uncountable quantities (e.g., money, coffee).",
    audio: "How long have you been here in the United Kingdom?"
  },
  {
    original: "Till we know each other",
    correction: "Till we get to know each other",
    rule: "State vs. Process: 'Know' is a stative verb (having existing knowledge). 'Get to know' expresses the ongoing process of becoming familiar with someone over time.",
    audio: "We should chat for a while till we get to know each other."
  },
  {
    original: "This is very very funny",
    correction: "This is hilarious. / This is absolutely hilarious.",
    rule: "Extreme Adjectives: Do not use 'very' with extreme adjectives. Say 'hilarious' or 'absolutely hilarious', not 'very hilarious'.",
    audio: "That comedian was absolutely hilarious."
  }
];

const SESSION_22_BBC_PRONUNCIATION = {
  title: "Tim's Pronunciation Workshop: Connected Speech in Conversation",
  badge: "BBC Learning English Reference (Slide 21)",
  summary: "In natural English conversation, words link together smoothly without awkward pauses. Understanding these patterns helps you speak more fluently and understand fast speech.",
  tips: [
    { feature: "Consonant to Vowel Linking", rule: "When a word ends in a consonant and the next begins with a vowel, connect them smoothly.", example: "get_to_know_each_other ➔ /ɡet tə nəʊ wiːtʃ ˈʌð.ər/" },
    { feature: "Elision of /t/ and /d/", rule: "The sounds /t/ and /d/ are often dropped in fast speech when surrounded by consonants.", example: "next topic ➔ /neks ˈtɒp.ɪk/ • common ground ➔ /ˈkɒm.ən ɡraʊnd/" },
    { feature: "Intonation in Openers", rule: "Use a friendly rising-falling intonation on conversational questions to sound approachable.", example: "Lovely day, isn't it? ↗↘" },
    { feature: "The /θ/ vs /s/ Contrast", rule: "Ensure clear distinction between 'theme' /θiːm/ and 'seem' /siːm/.", example: "I think it's a safe theme. /aɪ θɪŋk ɪts ə seɪf θiːm/" }
  ]
};

const SESSION_22_WHITEBOARD_GALLERY = [
  { img: "assets/images/session22_board_sentence_completion.jpg", title: "Smartboard Slide 5: Lexical Gap-Fill (Taboo, Vent, Trivial)", desc: "Classroom sentences testing words: taboo, make small talk, offensive, controversial, trivial, and vent." },
  { img: "assets/images/session22_board_vocab_matching.jpg", title: "Smartboard Slide 9: Vocabulary Definitions Match", desc: "Multiple choice matching for common ground, strategy, interactive, offended, and taboo topics." },
  { img: "assets/images/session22_board_vocab_answers.jpg", title: "Smartboard Slide 9 Key: Revealed Definitions", desc: "Teacher's verified answer key highlighting shared interests, careful plans, and unacceptable conversational themes." },
  { img: "assets/images/session22_board_three_as_strategy.jpg", title: "Smartboard Slide 13: The Three A's Strategy", desc: "Breakdown of Answer, Add, Ask with Zhang and Julie's authentic dialogue: Answer (China), Add (Beijing), Ask (Have you been?)." },
  { img: "assets/images/session22_board_teacher_clinic1.jpg", title: "Smartboard Slide 19: Teacher Live Clinic (Error Correction)", desc: "Teacher in front of the board correcting: How long vs How much, get to know, and extreme adjective 'hilarious'." },
  { img: "assets/images/session22_board_language_feedback.jpg", title: "Smartboard Slide 20: Clean Language Feedback Slide", desc: "Full whiteboard view of key feedback: stereotypes, duration questions, relationship processes, and hilarious." },
  { img: "assets/images/session22_board_extreme_adjectives.jpg", title: "Smartboard Table: 10 Extreme Adjectives", desc: "Espresso English / British Council reference table: cold-freezing, hot-boiling, angry-furious, tired-exhausted, dirty-filthy, funny-hilarious, tiny, enormous, terrifying, fantastic." },
  { img: "assets/images/session22_board_bbc_pronunciation.jpg", title: "Smartboard Slide 21: Tim's Pronunciation Workshop", desc: "BBC Learning English Pronunciation Workshop showing connected speech rules, linking, and conversational intonation." }
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
  window.VOCAB_SESSION_15 = typeof VOCAB_SESSION_15 !== 'undefined' ? VOCAB_SESSION_15 : [];

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

  // Session 15
  window.VOCAB_SESSION_15 = typeof VOCAB_SESSION_15 !== 'undefined' ? VOCAB_SESSION_15 : [];
  window.SESSION_15_LEAD_IN = typeof SESSION_15_LEAD_IN !== 'undefined' ? SESSION_15_LEAD_IN : undefined;
  window.SESSION_15_DIALOGUES = typeof SESSION_15_DIALOGUES !== 'undefined' ? SESSION_15_DIALOGUES : undefined;
  window.SESSION_15_SMARTBOARD_MATCHING = typeof SESSION_15_SMARTBOARD_MATCHING !== 'undefined' ? SESSION_15_SMARTBOARD_MATCHING : undefined;
  window.SESSION_15_VOCAB_GROUPS = typeof SESSION_15_VOCAB_GROUPS !== 'undefined' ? SESSION_15_VOCAB_GROUPS : undefined;
  window.SESSION_15_DILEMMAS = typeof SESSION_15_DILEMMAS !== 'undefined' ? SESSION_15_DILEMMAS : undefined;
  window.SESSION_15_DISCUSSION_LAB = typeof SESSION_15_DISCUSSION_LAB !== 'undefined' ? SESSION_15_DISCUSSION_LAB : undefined;
  window.SESSION_15_TEACHER_FEEDBACK = typeof SESSION_15_TEACHER_FEEDBACK !== 'undefined' ? SESSION_15_TEACHER_FEEDBACK : undefined;
  window.SESSION_15_PRONUNCIATION_LAB = typeof SESSION_15_PRONUNCIATION_LAB !== 'undefined' ? SESSION_15_PRONUNCIATION_LAB : undefined;
  window.SESSION_15_NOTEBOOK_PAGES = typeof SESSION_15_NOTEBOOK_PAGES !== 'undefined' ? SESSION_15_NOTEBOOK_PAGES : undefined;
  // Session 16
  window.VOCAB_SESSION_16 = typeof VOCAB_SESSION_16 !== 'undefined' ? VOCAB_SESSION_16 : [];
  window.SESSION_16_LEAD_IN = typeof SESSION_16_LEAD_IN !== 'undefined' ? SESSION_16_LEAD_IN : undefined;
  window.SESSION_16_DIALOGUES = typeof SESSION_16_DIALOGUES !== 'undefined' ? SESSION_16_DIALOGUES : undefined;
  window.SESSION_16_SMARTBOARD_MATCHING = typeof SESSION_16_SMARTBOARD_MATCHING !== 'undefined' ? SESSION_16_SMARTBOARD_MATCHING : undefined;
  window.SESSION_16_VOCAB_GROUPS = typeof SESSION_16_VOCAB_GROUPS !== 'undefined' ? SESSION_16_VOCAB_GROUPS : undefined;
  window.SESSION_16_QUESTION_TAGS_LAB = typeof SESSION_16_QUESTION_TAGS_LAB !== 'undefined' ? SESSION_16_QUESTION_TAGS_LAB : undefined;
  window.SESSION_16_DISCUSSION_LAB = typeof SESSION_16_DISCUSSION_LAB !== 'undefined' ? SESSION_16_DISCUSSION_LAB : undefined;
  window.SESSION_16_TEACHER_FEEDBACK = typeof SESSION_16_TEACHER_FEEDBACK !== 'undefined' ? SESSION_16_TEACHER_FEEDBACK : undefined;
  window.SESSION_16_PRONUNCIATION_LAB = typeof SESSION_16_PRONUNCIATION_LAB !== 'undefined' ? SESSION_16_PRONUNCIATION_LAB : undefined;
  window.SESSION_16_NOTEBOOK_PAGES = typeof SESSION_16_NOTEBOOK_PAGES !== 'undefined' ? SESSION_16_NOTEBOOK_PAGES : undefined;

  // Session 17
  window.VOCAB_SESSION_17 = typeof VOCAB_SESSION_17 !== 'undefined' ? VOCAB_SESSION_17 : [];
  window.SESSION_17_LEAD_IN = typeof SESSION_17_LEAD_IN !== 'undefined' ? SESSION_17_LEAD_IN : undefined;
  window.SESSION_17_EMMA_REPORT = typeof SESSION_17_EMMA_REPORT !== 'undefined' ? SESSION_17_EMMA_REPORT : undefined;
  window.SESSION_17_SMARTBOARD_MATCHING = typeof SESSION_17_SMARTBOARD_MATCHING !== 'undefined' ? SESSION_17_SMARTBOARD_MATCHING : undefined;
  window.SESSION_17_VOCAB_GROUPS = typeof SESSION_17_VOCAB_GROUPS !== 'undefined' ? SESSION_17_VOCAB_GROUPS : undefined;
  window.SESSION_17_MODALS_LAB = typeof SESSION_17_MODALS_LAB !== 'undefined' ? SESSION_17_MODALS_LAB : undefined;
  window.SESSION_17_DISCUSSION_LAB = typeof SESSION_17_DISCUSSION_LAB !== 'undefined' ? SESSION_17_DISCUSSION_LAB : undefined;
  window.SESSION_17_TEACHER_FEEDBACK = typeof SESSION_17_TEACHER_FEEDBACK !== 'undefined' ? SESSION_17_TEACHER_FEEDBACK : undefined;
  window.SESSION_17_PRONUNCIATION_LAB = typeof SESSION_17_PRONUNCIATION_LAB !== 'undefined' ? SESSION_17_PRONUNCIATION_LAB : undefined;
  window.SESSION_17_NOTEBOOK_PAGES = typeof SESSION_17_NOTEBOOK_PAGES !== 'undefined' ? SESSION_17_NOTEBOOK_PAGES : undefined;

  // Session 18
  window.VOCAB_SESSION_18 = typeof VOCAB_SESSION_18 !== 'undefined' ? VOCAB_SESSION_18 : [];
  window.SESSION_18_VOCAB_GROUPS = typeof SESSION_18_VOCAB_GROUPS !== 'undefined' ? SESSION_18_VOCAB_GROUPS : undefined;
  window.SESSION_18_LEAD_IN = typeof SESSION_18_LEAD_IN !== 'undefined' ? SESSION_18_LEAD_IN : undefined;
  window.SESSION_18_INPUT_CONVERSATIONS = typeof SESSION_18_INPUT_CONVERSATIONS !== 'undefined' ? SESSION_18_INPUT_CONVERSATIONS : undefined;
  window.SESSION_18_LANGUAGE_FOCUS = typeof SESSION_18_LANGUAGE_FOCUS !== 'undefined' ? SESSION_18_LANGUAGE_FOCUS : undefined;
  window.SESSION_18_LOST_PROPERTY_FORM = typeof SESSION_18_LOST_PROPERTY_FORM !== 'undefined' ? SESSION_18_LOST_PROPERTY_FORM : undefined;
  window.SESSION_18_TEACHER_FEEDBACK = typeof SESSION_18_TEACHER_FEEDBACK !== 'undefined' ? SESSION_18_TEACHER_FEEDBACK : undefined;
  window.SESSION_18_PRONUNCIATION_LAB = typeof SESSION_18_PRONUNCIATION_LAB !== 'undefined' ? SESSION_18_PRONUNCIATION_LAB : undefined;
  window.SESSION_18_NOTEBOOK_PAGES = typeof SESSION_18_NOTEBOOK_PAGES !== 'undefined' ? SESSION_18_NOTEBOOK_PAGES : undefined;

  // Session 19
  window.VOCAB_SESSION_19 = typeof VOCAB_SESSION_19 !== 'undefined' ? VOCAB_SESSION_19 : [];
  window.SESSION_19_VOCAB_GROUPS = typeof SESSION_19_VOCAB_GROUPS !== 'undefined' ? SESSION_19_VOCAB_GROUPS : undefined;
  window.SESSION_19_LEAD_IN = typeof SESSION_19_LEAD_IN !== 'undefined' ? SESSION_19_LEAD_IN : undefined;
  window.SESSION_19_READINGS = typeof SESSION_19_READINGS !== 'undefined' ? SESSION_19_READINGS : undefined;
  window.SESSION_19_ATTITUDES_QUIZ = typeof SESSION_19_ATTITUDES_QUIZ !== 'undefined' ? SESSION_19_ATTITUDES_QUIZ : undefined;
  window.SESSION_19_ACCESSIBILITY_AUDIT = typeof SESSION_19_ACCESSIBILITY_AUDIT !== 'undefined' ? SESSION_19_ACCESSIBILITY_AUDIT : undefined;
  window.SESSION_19_SPEAKING_LAB = typeof SESSION_19_SPEAKING_LAB !== 'undefined' ? SESSION_19_SPEAKING_LAB : undefined;
  window.SESSION_19_TEACHER_FEEDBACK = typeof SESSION_19_TEACHER_FEEDBACK !== 'undefined' ? SESSION_19_TEACHER_FEEDBACK : undefined;
  window.SESSION_19_PRONUNCIATION_LAB = typeof SESSION_19_PRONUNCIATION_LAB !== 'undefined' ? SESSION_19_PRONUNCIATION_LAB : undefined;
  window.SESSION_19_NOTEBOOK_PAGES = typeof SESSION_19_NOTEBOOK_PAGES !== 'undefined' ? SESSION_19_NOTEBOOK_PAGES : undefined;

  // Session 20
  window.VOCAB_SESSION_20 = typeof VOCAB_SESSION_20 !== 'undefined' ? VOCAB_SESSION_20 : [];
  window.SESSION_20_VOCAB_GROUPS = typeof SESSION_20_VOCAB_GROUPS !== 'undefined' ? SESSION_20_VOCAB_GROUPS : undefined;
  window.SESSION_20_LEAD_IN = typeof SESSION_20_LEAD_IN !== 'undefined' ? SESSION_20_LEAD_IN : undefined;
  window.SESSION_20_OPENERS_MATCHING = typeof SESSION_20_OPENERS_MATCHING !== 'undefined' ? SESSION_20_OPENERS_MATCHING : undefined;
  window.SESSION_20_GOODBYES_LAB = typeof SESSION_20_GOODBYES_LAB !== 'undefined' ? SESSION_20_GOODBYES_LAB : undefined;
  window.SESSION_20_LEAVING_CONVERSATION = typeof SESSION_20_LEAVING_CONVERSATION !== 'undefined' ? SESSION_20_LEAVING_CONVERSATION : undefined;
  window.SESSION_20_TEACHER_FEEDBACK = typeof SESSION_20_TEACHER_FEEDBACK !== 'undefined' ? SESSION_20_TEACHER_FEEDBACK : undefined;
  window.SESSION_20_PRONUNCIATION_LAB = typeof SESSION_20_PRONUNCIATION_LAB !== 'undefined' ? SESSION_20_PRONUNCIATION_LAB : undefined;
  window.SESSION_20_NOTEBOOK_PAGES = typeof SESSION_20_NOTEBOOK_PAGES !== 'undefined' ? SESSION_20_NOTEBOOK_PAGES : undefined;

  // Session 21
  window.VOCAB_SESSION_21 = typeof VOCAB_SESSION_21 !== 'undefined' ? VOCAB_SESSION_21 : [];
  window.SESSION_21_SPORTS_RANKING = typeof SESSION_21_SPORTS_RANKING !== 'undefined' ? SESSION_21_SPORTS_RANKING : undefined;
  window.SESSION_21_LISTENING_INTERVIEW = typeof SESSION_21_LISTENING_INTERVIEW !== 'undefined' ? SESSION_21_LISTENING_INTERVIEW : undefined;
  window.SESSION_21_MULTIWORD_VERBS_LAB = typeof SESSION_21_MULTIWORD_VERBS_LAB !== 'undefined' ? SESSION_21_MULTIWORD_VERBS_LAB : undefined;
  window.SESSION_21_PRESENTER_QUESTIONS = typeof SESSION_21_PRESENTER_QUESTIONS !== 'undefined' ? SESSION_21_PRESENTER_QUESTIONS : undefined;
  window.SESSION_21_TEACHER_FEEDBACK = typeof SESSION_21_TEACHER_FEEDBACK !== 'undefined' ? SESSION_21_TEACHER_FEEDBACK : undefined;
  window.SESSION_21_PRONUNCIATION_LAB = typeof SESSION_21_PRONUNCIATION_LAB !== 'undefined' ? SESSION_21_PRONUNCIATION_LAB : undefined;
  window.SESSION_21_WHITEBOARD_GALLERY = typeof SESSION_21_WHITEBOARD_GALLERY !== 'undefined' ? SESSION_21_WHITEBOARD_GALLERY : undefined;

  // Session 22
  window.VOCAB_SESSION_22 = typeof VOCAB_SESSION_22 !== 'undefined' ? VOCAB_SESSION_22 : [];
  window.SESSION_22_TOPICS_CATEGORIZER = typeof SESSION_22_TOPICS_CATEGORIZER !== 'undefined' ? SESSION_22_TOPICS_CATEGORIZER : undefined;
  window.SESSION_22_LISTENING_PASSAGE = typeof SESSION_22_LISTENING_PASSAGE !== 'undefined' ? SESSION_22_LISTENING_PASSAGE : undefined;
  window.SESSION_22_THREE_AS_LAB = typeof SESSION_22_THREE_AS_LAB !== 'undefined' ? SESSION_22_THREE_AS_LAB : undefined;
  window.SESSION_22_VOCAB_MATCHING = typeof SESSION_22_VOCAB_MATCHING !== 'undefined' ? SESSION_22_VOCAB_MATCHING : undefined;
  window.SESSION_22_EXTREME_ADJECTIVES = typeof SESSION_22_EXTREME_ADJECTIVES !== 'undefined' ? SESSION_22_EXTREME_ADJECTIVES : undefined;
  window.SESSION_22_TEACHER_FEEDBACK = typeof SESSION_22_TEACHER_FEEDBACK !== 'undefined' ? SESSION_22_TEACHER_FEEDBACK : undefined;
  window.SESSION_22_BBC_PRONUNCIATION = typeof SESSION_22_BBC_PRONUNCIATION !== 'undefined' ? SESSION_22_BBC_PRONUNCIATION : undefined;
  window.SESSION_22_WHITEBOARD_GALLERY = typeof SESSION_22_WHITEBOARD_GALLERY !== 'undefined' ? SESSION_22_WHITEBOARD_GALLERY : undefined;




}



