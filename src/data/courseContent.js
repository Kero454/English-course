const courseContent = {
  A1: {
    title: 'Beginner',
    description: 'Start your English journey! Learn basic greetings, simple sentences, and everyday vocabulary.',
    color: 'emerald',
    units: [
      {
        id: 'a1-u1',
        title: 'Greetings & Introductions',
        lessons: [
          {
            id: 'a1-u1-l1',
            title: 'Saying Hello & Goodbye',
            type: 'grammar',
            content: {
              explanation: `<h3>Common Greetings</h3>
<p>In English, we use different greetings depending on the time of day and the formality of the situation.</p>

<h4>Informal Greetings</h4>
<ul>
<li><strong>Hi!</strong> – The most common informal greeting</li>
<li><strong>Hey!</strong> – Very casual, used with friends</li>
<li><strong>What's up?</strong> – Very informal, means "How are you?"</li>
</ul>

<h4>Formal Greetings</h4>
<ul>
<li><strong>Good morning</strong> – Used before 12:00 PM</li>
<li><strong>Good afternoon</strong> – Used from 12:00 PM to 6:00 PM</li>
<li><strong>Good evening</strong> – Used after 6:00 PM</li>
</ul>

<h4>Saying Goodbye</h4>
<ul>
<li><strong>Goodbye / Bye</strong> – Standard farewell</li>
<li><strong>See you later!</strong> – When you expect to meet again</li>
<li><strong>Take care!</strong> – A warm farewell</li>
<li><strong>Have a nice day!</strong> – Polite and friendly</li>
</ul>

<h4>Key Dialogues</h4>
<div class="dialogue">
<p><strong>A:</strong> Hello! My name is Sarah. What's your name?</p>
<p><strong>B:</strong> Hi Sarah! I'm John. Nice to meet you!</p>
<p><strong>A:</strong> Nice to meet you too, John!</p>
</div>`,
              examples: [
                { english: 'Hello, how are you?', explanation: 'A standard greeting' },
                { english: 'I\'m fine, thank you.', explanation: 'A polite response' },
                { english: 'Nice to meet you!', explanation: 'Said when meeting someone for the first time' },
                { english: 'See you tomorrow!', explanation: 'Said when leaving, expecting to meet the next day' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "How are you?"',
                options: ['I\'m fine, thank you.', 'My name is Tom.', 'I am from Spain.', 'Goodbye!'],
                correct: 0
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate at 3:00 PM?',
                options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'Nice to ___ you!',
                answer: 'meet'
              },
              {
                type: 'multiple-choice',
                question: '"What\'s up?" is a ___ greeting.',
                options: ['formal', 'informal', 'business', 'written'],
                correct: 1
              }
            ]
          },
          {
            id: 'a1-u1-l2',
            title: 'Personal Information',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Talking About Yourself</h3>
<p>When you meet someone new, you often need to share basic personal information.</p>

<h4>Key Phrases</h4>
<ul>
<li><strong>My name is...</strong> / <strong>I'm...</strong> – Introducing yourself</li>
<li><strong>I'm from...</strong> – Saying where you are from</li>
<li><strong>I'm ... years old.</strong> – Saying your age</li>
<li><strong>I live in...</strong> – Saying where you live</li>
<li><strong>I'm a...</strong> – Saying your job/occupation</li>
<li><strong>I speak...</strong> – Saying what languages you speak</li>
</ul>

<h4>Question Words</h4>
<table>
<tr><td><strong>What</strong></td><td>What is your name?</td></tr>
<tr><td><strong>Where</strong></td><td>Where are you from?</td></tr>
<tr><td><strong>How old</strong></td><td>How old are you?</td></tr>
<tr><td><strong>What</strong></td><td>What do you do? (job)</td></tr>
</table>`,
              examples: [
                { english: 'My name is Maria.', explanation: 'Introducing yourself' },
                { english: 'I\'m from Egypt.', explanation: 'Telling your nationality/origin' },
                { english: 'I\'m 25 years old.', explanation: 'Telling your age' },
                { english: 'I\'m a teacher.', explanation: 'Telling your job' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'How do you ask someone their name?',
                options: ['Where are you?', 'What is your name?', 'How old are you?', 'What do you do?'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'I ___ from London.',
                answer: 'am'
              },
              {
                type: 'multiple-choice',
                question: '"What do you do?" asks about your ___.',
                options: ['age', 'name', 'job', 'country'],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'She ___ 30 years old.',
                answer: 'is'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-u2',
        title: 'Numbers, Days & Time',
        lessons: [
          {
            id: 'a1-u2-l1',
            title: 'Numbers 1-100',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Numbers in English</h3>
<h4>1-20</h4>
<p>1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine, 10-ten, 11-eleven, 12-twelve, 13-thirteen, 14-fourteen, 15-fifteen, 16-sixteen, 17-seventeen, 18-eighteen, 19-nineteen, 20-twenty</p>

<h4>Tens: 20-100</h4>
<p>20-twenty, 30-thirty, 40-forty, 50-fifty, 60-sixty, 70-seventy, 80-eighty, 90-ninety, 100-one hundred</p>

<h4>Combining Numbers</h4>
<p>For numbers between tens, we use a hyphen: <strong>twenty-one (21), thirty-five (35), ninety-nine (99)</strong></p>

<h4>Ordinal Numbers</h4>
<p>1st-first, 2nd-second, 3rd-third, 4th-fourth, 5th-fifth... These are used for dates and positions.</p>`,
              examples: [
                { english: 'I have two brothers.', explanation: 'Cardinal number' },
                { english: 'She lives on the third floor.', explanation: 'Ordinal number' },
                { english: 'There are forty-five students.', explanation: 'Compound number with hyphen' },
                { english: 'My birthday is on the twenty-first of May.', explanation: 'Ordinal for dates' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'How do you spell the number 15?',
                options: ['fiveteen', 'fifteen', 'fiften', 'fifteen'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'What is the ordinal form of 3?',
                options: ['three', 'thirdth', 'third', 'threeth'],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'The number 40 is spelled ___.',
                answer: 'forty'
              },
              {
                type: 'multiple-choice',
                question: 'How do you write 87 in words?',
                options: ['eighty-seven', 'eight-seven', 'eighthy-seven', 'eighty seven'],
                correct: 0
              }
            ]
          },
          {
            id: 'a1-u2-l2',
            title: 'Days, Months & Telling Time',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Days of the Week</h3>
<p>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</p>
<p><em>Note: Days always start with a capital letter in English!</em></p>

<h3>Months of the Year</h3>
<p>January, February, March, April, May, June, July, August, September, October, November, December</p>

<h3>Telling Time</h3>
<ul>
<li><strong>It's three o'clock.</strong> (3:00)</li>
<li><strong>It's half past three.</strong> (3:30)</li>
<li><strong>It's quarter past three.</strong> (3:15)</li>
<li><strong>It's quarter to four.</strong> (3:45)</li>
<li><strong>It's ten past three.</strong> (3:10)</li>
<li><strong>It's twenty to four.</strong> (3:40)</li>
</ul>`,
              examples: [
                { english: 'Today is Monday.', explanation: 'Saying the day' },
                { english: 'My birthday is in July.', explanation: 'Using "in" with months' },
                { english: 'The meeting is on Friday.', explanation: 'Using "on" with days' },
                { english: 'It\'s half past nine.', explanation: 'Telling the time (9:30)' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which day comes after Wednesday?',
                options: ['Tuesday', 'Thursday', 'Friday', 'Monday'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'What preposition do we use with days?',
                options: ['in', 'at', 'on', 'to'],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'It\'s quarter ___ six. (5:45)',
                answer: 'to'
              },
              {
                type: 'multiple-choice',
                question: 'Which month comes after April?',
                options: ['March', 'June', 'May', 'February'],
                correct: 2
              }
            ]
          }
        ]
      },
      {
        id: 'a1-u3',
        title: 'Present Simple Tense',
        lessons: [
          {
            id: 'a1-u3-l1',
            title: 'Forming the Present Simple',
            type: 'grammar',
            content: {
              explanation: `<h3>Present Simple Tense</h3>
<p>We use the present simple for habits, routines, facts, and things that are generally true.</p>

<h4>Affirmative</h4>
<table>
<tr><td>I / You / We / They</td><td>work</td></tr>
<tr><td>He / She / It</td><td>work<strong>s</strong></td></tr>
</table>

<h4>Important: Third Person -S</h4>
<p>With <strong>he, she, it</strong>, we add <strong>-s</strong> or <strong>-es</strong> to the verb:</p>
<ul>
<li>work → works, play → plays, read → reads</li>
<li>go → goes, do → does, watch → watches</li>
<li>study → studies, try → tries (y → ies)</li>
</ul>

<h4>Negative</h4>
<p>I/You/We/They <strong>don't</strong> + verb</p>
<p>He/She/It <strong>doesn't</strong> + verb (no -s on the main verb!)</p>

<h4>Questions</h4>
<p><strong>Do</strong> I/you/we/they + verb?</p>
<p><strong>Does</strong> he/she/it + verb?</p>`,
              examples: [
                { english: 'I work in a hospital.', explanation: 'Regular affirmative' },
                { english: 'She plays tennis every Saturday.', explanation: 'Third person with -s' },
                { english: 'They don\'t like coffee.', explanation: 'Negative form' },
                { english: 'Does he speak English?', explanation: 'Question form with does' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'She ___ to school every day.',
                options: ['go', 'goes', 'going', 'gone'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'They ___ like swimming.',
                options: ['doesn\'t', 'don\'t', 'isn\'t', 'aren\'t'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: '___ your father work in an office?',
                answer: 'Does'
              },
              {
                type: 'multiple-choice',
                question: 'He ___ (study) English every evening.',
                options: ['studys', 'studies', 'study', 'studieing'],
                correct: 1
              }
            ]
          }
        ]
      }
    ]
  },

  A2: {
    title: 'Elementary',
    description: 'Build on basics! Master past tense, comparisons, and everyday conversations.',
    color: 'blue',
    units: [
      {
        id: 'a2-u1',
        title: 'Past Simple Tense',
        lessons: [
          {
            id: 'a2-u1-l1',
            title: 'Regular & Irregular Past Verbs',
            type: 'grammar',
            content: {
              explanation: `<h3>Past Simple Tense</h3>
<p>We use the past simple to talk about completed actions in the past.</p>

<h4>Regular Verbs: Add -ed</h4>
<ul>
<li>work → worked, play → played, want → wanted</li>
<li>live → lived (just add -d), study → studied (y → ied)</li>
<li>stop → stopped (double consonant + ed)</li>
</ul>

<h4>Common Irregular Verbs</h4>
<table>
<tr><th>Base Form</th><th>Past Simple</th></tr>
<tr><td>go</td><td>went</td></tr>
<tr><td>come</td><td>came</td></tr>
<tr><td>see</td><td>saw</td></tr>
<tr><td>eat</td><td>ate</td></tr>
<tr><td>drink</td><td>drank</td></tr>
<tr><td>buy</td><td>bought</td></tr>
<tr><td>take</td><td>took</td></tr>
<tr><td>make</td><td>made</td></tr>
<tr><td>have</td><td>had</td></tr>
<tr><td>be</td><td>was/were</td></tr>
<tr><td>write</td><td>wrote</td></tr>
<tr><td>read</td><td>read (same spelling, different pronunciation)</td></tr>
</table>

<h4>Negative & Questions</h4>
<p>Negative: Subject + <strong>didn't</strong> + base form</p>
<p>Question: <strong>Did</strong> + subject + base form?</p>
<p><em>Important: With "didn't" and "did", the main verb stays in base form!</em></p>`,
              examples: [
                { english: 'I went to Paris last summer.', explanation: 'Irregular verb "go" → "went"' },
                { english: 'She didn\'t watch the film.', explanation: 'Negative: didn\'t + base form' },
                { english: 'Did you enjoy the party?', explanation: 'Question: Did + subject + base form' },
                { english: 'We played football yesterday.', explanation: 'Regular verb + -ed' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ (go) to the shops yesterday.',
                options: ['go', 'goed', 'went', 'gone'],
                correct: 2
              },
              {
                type: 'multiple-choice',
                question: 'She ___ (not/come) to the party.',
                options: ['didn\'t came', 'didn\'t come', 'doesn\'t come', 'not came'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: '___ you see the new film last week?',
                answer: 'Did'
              },
              {
                type: 'multiple-choice',
                question: 'They ___ (buy) a new car last month.',
                options: ['buyed', 'buied', 'bought', 'buy'],
                correct: 2
              }
            ]
          }
        ]
      },
      {
        id: 'a2-u2',
        title: 'Comparatives & Superlatives',
        lessons: [
          {
            id: 'a2-u2-l1',
            title: 'Comparing Things',
            type: 'grammar',
            content: {
              explanation: `<h3>Comparatives & Superlatives</h3>

<h4>Comparatives (comparing 2 things)</h4>
<ul>
<li>Short adjectives (1 syllable): add <strong>-er</strong> → tall → taller, fast → faster</li>
<li>Adjectives ending in -e: add <strong>-r</strong> → nice → nicer</li>
<li>Adjectives ending in consonant+y: change y to <strong>-ier</strong> → happy → happier</li>
<li>Long adjectives (2+ syllables): <strong>more</strong> + adjective → beautiful → more beautiful</li>
</ul>
<p>Always use <strong>than</strong> after the comparative: "She is taller <strong>than</strong> her brother."</p>

<h4>Superlatives (the most/least of all)</h4>
<ul>
<li>Short adjectives: <strong>the + -est</strong> → the tallest, the fastest</li>
<li>Long adjectives: <strong>the most</strong> + adjective → the most beautiful</li>
</ul>

<h4>Irregular Forms</h4>
<table>
<tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td>good</td><td>better</td><td>the best</td></tr>
<tr><td>bad</td><td>worse</td><td>the worst</td></tr>
<tr><td>far</td><td>farther/further</td><td>the farthest/furthest</td></tr>
</table>`,
              examples: [
                { english: 'London is bigger than Paris.', explanation: 'Comparative + than' },
                { english: 'Mount Everest is the highest mountain.', explanation: 'Superlative with "the"' },
                { english: 'This book is more interesting than that one.', explanation: 'Long adjective comparative' },
                { english: 'She is the best student in the class.', explanation: 'Irregular superlative' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'My house is ___ (big) than yours.',
                options: ['more big', 'bigger', 'biggest', 'the bigger'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'This is ___ (good) restaurant in town.',
                options: ['the better', 'the goodest', 'the best', 'better'],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'English is ___ (easy) than Chinese.',
                answer: 'easier'
              },
              {
                type: 'multiple-choice',
                question: 'This film is ___ (interesting) than the last one.',
                options: ['interestinger', 'more interesting', 'most interesting', 'the more interesting'],
                correct: 1
              }
            ]
          }
        ]
      },
      {
        id: 'a2-u3',
        title: 'Present Continuous & Future',
        lessons: [
          {
            id: 'a2-u3-l1',
            title: 'Present Continuous',
            type: 'grammar',
            content: {
              explanation: `<h3>Present Continuous Tense</h3>
<p>We use the present continuous for actions happening <strong>right now</strong> or <strong>around now</strong>.</p>

<h4>Form: am/is/are + verb-ing</h4>
<ul>
<li>I <strong>am working</strong> (I'm working)</li>
<li>He/She <strong>is reading</strong> (He's reading)</li>
<li>We/They <strong>are playing</strong> (We're playing)</li>
</ul>

<h4>Spelling Rules for -ing</h4>
<ul>
<li>Most verbs: add -ing → work → working, eat → eating</li>
<li>Verbs ending in -e: drop -e, add -ing → make → making, come → coming</li>
<li>Short verbs (CVC): double last consonant → sit → sitting, run → running</li>
<li>Verbs ending in -ie: change to -ying → die → dying, lie → lying</li>
</ul>

<h4>Present Continuous vs Present Simple</h4>
<ul>
<li><strong>Present Simple:</strong> habits, routines → "I drink coffee every morning."</li>
<li><strong>Present Continuous:</strong> happening now → "I am drinking coffee right now."</li>
</ul>`,
              examples: [
                { english: 'She is cooking dinner right now.', explanation: 'Action happening now' },
                { english: 'They aren\'t listening to me.', explanation: 'Negative form' },
                { english: 'Are you working today?', explanation: 'Question form' },
                { english: 'I\'m studying English this year.', explanation: 'Action around now (temporary)' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Look! It ___ (rain) outside!',
                options: ['rains', 'is raining', 'rain', 'rained'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'She ___ (sit) on the sofa right now.',
                answer: 'is sitting'
              },
              {
                type: 'multiple-choice',
                question: 'We ___ (not/watch) TV at the moment.',
                options: ['don\'t watch', 'aren\'t watching', 'doesn\'t watch', 'isn\'t watching'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence uses the present continuous correctly?',
                options: ['I am go to school.', 'She is plays tennis.', 'They are eating lunch.', 'He running fast.'],
                correct: 2
              }
            ]
          }
        ]
      }
    ]
  },

  B1: {
    title: 'Intermediate',
    description: 'Express yourself with confidence! Master conditionals, perfect tenses, and complex ideas.',
    color: 'violet',
    units: [
      {
        id: 'b1-u1',
        title: 'Present Perfect Tense',
        lessons: [
          {
            id: 'b1-u1-l1',
            title: 'Present Perfect: Form & Usage',
            type: 'grammar',
            content: {
              explanation: `<h3>Present Perfect Tense</h3>
<p>The present perfect connects the past to the present. It's one of the most important tenses in English.</p>

<h4>Form: have/has + past participle</h4>
<ul>
<li>I/You/We/They <strong>have worked</strong> (I've worked)</li>
<li>He/She/It <strong>has worked</strong> (She's worked)</li>
</ul>

<h4>When to Use It</h4>
<ol>
<li><strong>Experience:</strong> "I have visited Paris." (at some point in my life)</li>
<li><strong>Change over time:</strong> "My English has improved." (from past until now)</li>
<li><strong>Unfinished time:</strong> "I have eaten two apples today." (today isn't over)</li>
<li><strong>Recent events:</strong> "She has just arrived." (very recently)</li>
</ol>

<h4>Key Words</h4>
<ul>
<li><strong>ever / never:</strong> "Have you ever been to Japan?"</li>
<li><strong>already / yet:</strong> "I've already finished." / "I haven't finished yet."</li>
<li><strong>just:</strong> "He has just left."</li>
<li><strong>for / since:</strong> "I've lived here for 5 years / since 2019."</li>
</ul>

<h4>Present Perfect vs Past Simple</h4>
<ul>
<li><strong>Present Perfect:</strong> "I have lost my keys." (I still don't have them)</li>
<li><strong>Past Simple:</strong> "I lost my keys yesterday." (specific time in the past)</li>
</ul>`,
              examples: [
                { english: 'I have never eaten sushi.', explanation: 'Life experience with "never"' },
                { english: 'She has lived in London since 2015.', explanation: 'Duration with "since"' },
                { english: 'Have you ever been to Australia?', explanation: 'Question about life experience' },
                { english: 'They have already finished the project.', explanation: 'Completed action with "already"' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ (never/see) a ghost.',
                options: ['have never seen', 'never saw', 'have never saw', 'never have seen'],
                correct: 0
              },
              {
                type: 'multiple-choice',
                question: 'She has worked here ___ 10 years.',
                options: ['since', 'for', 'from', 'during'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'Have you ___ been to New York?',
                answer: 'ever'
              },
              {
                type: 'multiple-choice',
                question: 'They ___ just ___ (arrive).',
                options: ['have...arrived', 'has...arrived', 'have...arrive', 'did...arrive'],
                correct: 0
              }
            ]
          }
        ]
      },
      {
        id: 'b1-u2',
        title: 'Conditional Sentences',
        lessons: [
          {
            id: 'b1-u2-l1',
            title: 'First & Second Conditionals',
            type: 'grammar',
            content: {
              explanation: `<h3>Conditional Sentences</h3>

<h4>Zero Conditional: General Truths</h4>
<p><strong>If + present simple, present simple</strong></p>
<p>"If you heat water to 100°C, it boils." (always true)</p>

<h4>First Conditional: Real/Possible Future</h4>
<p><strong>If + present simple, will + base form</strong></p>
<p>Used for things that are likely or possible in the future.</p>
<ul>
<li>"If it rains tomorrow, I will stay home."</li>
<li>"If you study hard, you will pass the exam."</li>
</ul>

<h4>Second Conditional: Unreal/Imaginary Present</h4>
<p><strong>If + past simple, would + base form</strong></p>
<p>Used for imaginary or unlikely situations.</p>
<ul>
<li>"If I won the lottery, I would buy a house." (I probably won't win)</li>
<li>"If I were you, I would apologize." (I'm not you — we use "were" for all subjects)</li>
</ul>

<h4>Key Differences</h4>
<ul>
<li><strong>1st conditional:</strong> "If I have time, I will help you." (possible — I might have time)</li>
<li><strong>2nd conditional:</strong> "If I had time, I would help you." (I don't have time now)</li>
</ul>`,
              examples: [
                { english: 'If you don\'t hurry, you\'ll miss the bus.', explanation: '1st conditional — real possibility' },
                { english: 'If I had a million dollars, I would travel the world.', explanation: '2nd conditional — imaginary' },
                { english: 'If I were president, I would change the law.', explanation: '2nd conditional with "were"' },
                { english: 'If water reaches 0°C, it freezes.', explanation: 'Zero conditional — scientific fact' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'If I ___ (be) you, I would study harder.',
                options: ['am', 'was', 'were', 'will be'],
                correct: 2
              },
              {
                type: 'multiple-choice',
                question: 'If it rains, we ___ (stay) inside.',
                options: ['would stay', 'will stay', 'stayed', 'stay'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'If she ___ rich, she would donate to charity.',
                answer: 'were'
              },
              {
                type: 'multiple-choice',
                question: 'Which is a second conditional sentence?',
                options: [
                  'If I study, I will pass.',
                  'If I studied, I would pass.',
                  'If I study, I pass.',
                  'If I will study, I pass.'
                ],
                correct: 1
              }
            ]
          }
        ]
      },
      {
        id: 'b1-u3',
        title: 'Relative Clauses',
        lessons: [
          {
            id: 'b1-u3-l1',
            title: 'Defining & Non-defining Clauses',
            type: 'grammar',
            content: {
              explanation: `<h3>Relative Clauses</h3>
<p>Relative clauses give extra information about a noun. They use relative pronouns: <strong>who, which, that, whose, where, when</strong>.</p>

<h4>Defining Relative Clauses</h4>
<p>These identify which person/thing we're talking about. <strong>No commas.</strong></p>
<ul>
<li><strong>who/that</strong> – for people: "The man <strong>who lives</strong> next door is a doctor."</li>
<li><strong>which/that</strong> – for things: "The book <strong>that I read</strong> was excellent."</li>
<li><strong>where</strong> – for places: "This is the restaurant <strong>where we met</strong>."</li>
<li><strong>whose</strong> – for possession: "The girl <strong>whose father</strong> is a pilot..."</li>
</ul>

<h4>Non-defining Relative Clauses</h4>
<p>These add extra information (not essential). <strong>Use commas. Cannot use "that".</strong></p>
<ul>
<li>"My brother, <strong>who lives in London</strong>, is a teacher."</li>
<li>"Paris, <strong>which is the capital of France</strong>, is beautiful."</li>
</ul>`,
              examples: [
                { english: 'The woman who called you is my aunt.', explanation: 'Defining: identifies which woman' },
                { english: 'My car, which is very old, still works well.', explanation: 'Non-defining: extra info about "my car"' },
                { english: 'That\'s the hotel where we stayed.', explanation: '"where" for places' },
                { english: 'The student whose essay won the prize is here.', explanation: '"whose" for possession' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'The man ___ helped me was very kind.',
                options: ['which', 'who', 'whose', 'where'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'This is the park ___ I play football.',
                options: ['who', 'which', 'whose', 'where'],
                correct: 3
              },
              {
                type: 'fill-blank',
                question: 'The boy ___ bag was stolen reported it to the police.',
                answer: 'whose'
              },
              {
                type: 'multiple-choice',
                question: 'London, ___ is the capital of England, is very expensive.',
                options: ['that', 'which', 'who', 'where'],
                correct: 1
              }
            ]
          }
        ]
      }
    ]
  },

  B2: {
    title: 'Upper Intermediate',
    description: 'Refine your English! Tackle advanced grammar, nuanced vocabulary, and academic writing.',
    color: 'amber',
    units: [
      {
        id: 'b2-u1',
        title: 'Advanced Tenses',
        lessons: [
          {
            id: 'b2-u1-l1',
            title: 'Future Perfect & Future Continuous',
            type: 'grammar',
            content: {
              explanation: `<h3>Future Perfect</h3>
<p><strong>will have + past participle</strong></p>
<p>Used for actions that will be completed before a specific future time.</p>
<ul>
<li>"By next year, I <strong>will have graduated</strong>."</li>
<li>"She <strong>will have finished</strong> the book by tomorrow."</li>
</ul>

<h3>Future Continuous</h3>
<p><strong>will be + verb-ing</strong></p>
<p>Used for actions that will be in progress at a specific future time.</p>
<ul>
<li>"This time tomorrow, I <strong>will be flying</strong> to Paris."</li>
<li>"At 8 PM, they <strong>will be having</strong> dinner."</li>
</ul>

<h3>Future Perfect Continuous</h3>
<p><strong>will have been + verb-ing</strong></p>
<p>Emphasizes the duration of an action up to a future point.</p>
<ul>
<li>"By June, I <strong>will have been working</strong> here for 10 years."</li>
</ul>

<h4>Summary of All Future Forms</h4>
<table>
<tr><th>Form</th><th>Use</th><th>Example</th></tr>
<tr><td>will + base</td><td>decisions, predictions</td><td>I'll help you.</td></tr>
<tr><td>going to + base</td><td>plans, evidence-based predictions</td><td>It's going to rain.</td></tr>
<tr><td>will be + -ing</td><td>in progress at future time</td><td>I'll be sleeping at midnight.</td></tr>
<tr><td>will have + p.p.</td><td>completed before future time</td><td>I'll have finished by 5.</td></tr>
</table>`,
              examples: [
                { english: 'By 2030, scientists will have found a cure.', explanation: 'Future perfect: completed before 2030' },
                { english: 'Don\'t call at 9 — I\'ll be driving.', explanation: 'Future continuous: in progress at that time' },
                { english: 'By the time you arrive, we will have eaten.', explanation: 'Future perfect with "by the time"' },
                { english: 'Next month, she will have been teaching for 20 years.', explanation: 'Future perfect continuous: duration to future point' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'By next month, I ___ (finish) the course.',
                options: ['will finish', 'will be finishing', 'will have finished', 'finish'],
                correct: 2
              },
              {
                type: 'multiple-choice',
                question: 'This time next week, I ___ (lie) on the beach.',
                options: ['will lie', 'will be lying', 'will have lied', 'am lying'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'By 2025, they will ___ been living here for a decade.',
                answer: 'have'
              },
              {
                type: 'multiple-choice',
                question: 'Don\'t phone between 7 and 8 — we ___ dinner.',
                options: ['will have', 'will be having', 'will have had', 'are having'],
                correct: 1
              }
            ]
          }
        ]
      },
      {
        id: 'b2-u2',
        title: 'Passive Voice',
        lessons: [
          {
            id: 'b2-u2-l1',
            title: 'All Passive Forms',
            type: 'grammar',
            content: {
              explanation: `<h3>The Passive Voice</h3>
<p>We use the passive when the action is more important than who does it, or when the doer is unknown.</p>

<h4>Form: be + past participle</h4>
<table>
<tr><th>Tense</th><th>Active</th><th>Passive</th></tr>
<tr><td>Present Simple</td><td>They make cars.</td><td>Cars <strong>are made</strong>.</td></tr>
<tr><td>Past Simple</td><td>She wrote the book.</td><td>The book <strong>was written</strong>.</td></tr>
<tr><td>Present Perfect</td><td>They have built a bridge.</td><td>A bridge <strong>has been built</strong>.</td></tr>
<tr><td>Future</td><td>They will repair the road.</td><td>The road <strong>will be repaired</strong>.</td></tr>
<tr><td>Modal</td><td>You must complete the form.</td><td>The form <strong>must be completed</strong>.</td></tr>
</table>

<h4>Adding the Agent</h4>
<p>Use <strong>by</strong> to mention who did the action (only if it's important):</p>
<p>"The painting was created <strong>by Picasso</strong>."</p>

<h4>When to Use Passive</h4>
<ul>
<li>The doer is unknown: "My car <strong>was stolen</strong>."</li>
<li>The doer is obvious: "The criminal <strong>was arrested</strong>." (by police — obvious)</li>
<li>Formal/academic writing: "The experiment <strong>was conducted</strong> in 2020."</li>
</ul>`,
              examples: [
                { english: 'The Mona Lisa was painted by Leonardo da Vinci.', explanation: 'Past simple passive with agent' },
                { english: 'English is spoken in many countries.', explanation: 'Present simple passive' },
                { english: 'The new hospital will be opened next year.', explanation: 'Future passive' },
                { english: 'The report has been completed.', explanation: 'Present perfect passive' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'The letter ___ yesterday. (send)',
                options: ['was sent', 'is sent', 'sent', 'has sent'],
                correct: 0
              },
              {
                type: 'multiple-choice',
                question: 'This bridge ___ in 1990. (build)',
                options: ['built', 'was built', 'has built', 'is built'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'The homework must ___ completed by Friday.',
                answer: 'be'
              },
              {
                type: 'multiple-choice',
                question: 'The decision ___ yet. (not/make)',
                options: ['hasn\'t been made', 'wasn\'t made', 'isn\'t made', 'didn\'t make'],
                correct: 0
              }
            ]
          }
        ]
      },
      {
        id: 'b2-u3',
        title: 'Reported Speech',
        lessons: [
          {
            id: 'b2-u3-l1',
            title: 'Direct & Indirect Speech',
            type: 'grammar',
            content: {
              explanation: `<h3>Reported Speech (Indirect Speech)</h3>
<p>When we report what someone said, we usually change the tense "one step back."</p>

<h4>Tense Changes</h4>
<table>
<tr><th>Direct Speech</th><th>Reported Speech</th></tr>
<tr><td>Present Simple → </td><td>Past Simple</td></tr>
<tr><td>"I <strong>like</strong> pizza."</td><td>He said he <strong>liked</strong> pizza.</td></tr>
<tr><td>Present Continuous → </td><td>Past Continuous</td></tr>
<tr><td>"I <strong>am working</strong>."</td><td>She said she <strong>was working</strong>.</td></tr>
<tr><td>Past Simple → </td><td>Past Perfect</td></tr>
<tr><td>"I <strong>went</strong> home."</td><td>He said he <strong>had gone</strong> home.</td></tr>
<tr><td>Will → </td><td>Would</td></tr>
<tr><td>"I <strong>will</strong> call you."</td><td>She said she <strong>would</strong> call me.</td></tr>
<tr><td>Can → </td><td>Could</td></tr>
<tr><td>"I <strong>can</strong> swim."</td><td>He said he <strong>could</strong> swim.</td></tr>
</table>

<h4>Other Changes</h4>
<ul>
<li><strong>this → that</strong>, <strong>these → those</strong></li>
<li><strong>here → there</strong></li>
<li><strong>today → that day</strong>, <strong>tomorrow → the next day</strong></li>
<li><strong>yesterday → the day before</strong></li>
</ul>

<h4>Reporting Questions</h4>
<p>Use <strong>if/whether</strong> for yes/no questions: "Are you happy?" → She asked <strong>if</strong> I was happy.</p>
<p>Use question words for wh- questions: "Where do you live?" → He asked <strong>where</strong> I lived.</p>
<p><em>Important: Use statement word order in reported questions (no inversion)!</em></p>`,
              examples: [
                { english: '"I am tired." → She said she was tired.', explanation: 'Present → Past' },
                { english: '"I will help you." → He said he would help me.', explanation: 'Will → Would' },
                { english: '"Do you like music?" → She asked if I liked music.', explanation: 'Reported yes/no question' },
                { english: '"Where did you go?" → He asked where I had gone.', explanation: 'Reported wh- question' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: '"I am happy." → She said she ___ happy.',
                options: ['is', 'was', 'were', 'has been'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: '"I will come tomorrow." → He said he ___ come the next day.',
                options: ['will', 'would', 'could', 'should'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: '"Can you swim?" → She asked ___ I could swim.',
                answer: 'if'
              },
              {
                type: 'multiple-choice',
                question: '"I bought a car." → He said he ___ a car.',
                options: ['bought', 'had bought', 'has bought', 'buys'],
                correct: 1
              }
            ]
          }
        ]
      }
    ]
  },

  C1: {
    title: 'Advanced',
    description: 'Master English at a professional level. Tackle complex structures, idioms, and academic discourse.',
    color: 'rose',
    units: [
      {
        id: 'c1-u1',
        title: 'Advanced Grammar Structures',
        lessons: [
          {
            id: 'c1-u1-l1',
            title: 'Inversion & Emphasis',
            type: 'grammar',
            content: {
              explanation: `<h3>Inversion for Emphasis</h3>
<p>In formal or literary English, we sometimes invert the subject and auxiliary verb for emphasis.</p>

<h4>Negative Adverbials at the Start</h4>
<p>When a negative adverb starts the sentence, we invert subject and auxiliary:</p>
<ul>
<li><strong>Never have I</strong> seen such beauty. (NOT: Never I have seen...)</li>
<li><strong>Rarely does she</strong> make mistakes.</li>
<li><strong>Seldom do we</strong> get such opportunities.</li>
<li><strong>Not only did he</strong> win, but he also broke the record.</li>
<li><strong>Hardly had I</strong> sat down when the phone rang.</li>
<li><strong>No sooner had they</strong> arrived than it started raining.</li>
</ul>

<h4>Other Inversions</h4>
<ul>
<li><strong>Only after/when/if:</strong> "Only after studying hard <strong>did she pass</strong>."</li>
<li><strong>So/Such ... that:</strong> "So beautiful <strong>was the sunset</strong> that we stopped to watch."</li>
<li><strong>Little:</strong> "Little <strong>did he know</strong> what was about to happen."</li>
<li><strong>Under no circumstances:</strong> "Under no circumstances <strong>should you</strong> open this door."</li>
</ul>

<h4>Cleft Sentences for Emphasis</h4>
<ul>
<li><strong>It is/was ... that/who:</strong> "It was John <strong>who</strong> broke the window." (emphasis on John)</li>
<li><strong>What ... is/was:</strong> "What I need <strong>is</strong> a holiday." (emphasis on "a holiday")</li>
<li><strong>All ... is/was:</strong> "All I want <strong>is</strong> peace." (emphasis on "peace")</li>
</ul>`,
              examples: [
                { english: 'Never before had I tasted such delicious food.', explanation: 'Inversion with "never before"' },
                { english: 'Not only did she pass, but she got the highest mark.', explanation: 'Inversion with "not only"' },
                { english: 'It was the manager who made the final decision.', explanation: 'Cleft sentence for emphasis' },
                { english: 'What concerns me is the lack of funding.', explanation: 'What-cleft for emphasis' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Hardly ___ the door when the alarm went off.',
                options: ['I had opened', 'had I opened', 'I opened', 'did I open'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'Not only ___ the exam, but she also got a scholarship.',
                options: ['she passed', 'did she pass', 'she did pass', 'has she passed'],
                correct: 1
              },
              {
                type: 'fill-blank',
                question: 'Seldom ___ we encounter such generosity.',
                answer: 'do'
              },
              {
                type: 'multiple-choice',
                question: '___ I known about the delay, I would have taken a different route.',
                options: ['If', 'Had', 'Would', 'Should'],
                correct: 1
              }
            ]
          }
        ]
      },
      {
        id: 'c1-u2',
        title: 'Advanced Vocabulary & Idioms',
        lessons: [
          {
            id: 'c1-u2-l1',
            title: 'English Idioms & Expressions',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Essential English Idioms</h3>
<p>Idioms are phrases whose meaning cannot be understood from the individual words. They are very common in English.</p>

<h4>Common Idioms</h4>
<table>
<tr><th>Idiom</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Break the ice</td><td>To make people feel more comfortable</td><td>"He told a joke to break the ice."</td></tr>
<tr><td>Hit the nail on the head</td><td>To be exactly right</td><td>"You hit the nail on the head with that analysis."</td></tr>
<tr><td>A piece of cake</td><td>Something very easy</td><td>"The exam was a piece of cake."</td></tr>
<tr><td>Cost an arm and a leg</td><td>To be very expensive</td><td>"That car cost an arm and a leg."</td></tr>
<tr><td>Let the cat out of the bag</td><td>To reveal a secret</td><td>"She let the cat out of the bag about the surprise."</td></tr>
<tr><td>Once in a blue moon</td><td>Very rarely</td><td>"We go out once in a blue moon."</td></tr>
<tr><td>Bite off more than you can chew</td><td>To take on too much</td><td>"I bit off more than I could chew with this project."</td></tr>
<tr><td>The ball is in your court</td><td>It's your decision/turn</td><td>"I've made my offer. The ball is in your court."</td></tr>
<tr><td>Burn the midnight oil</td><td>To work late into the night</td><td>"She burned the midnight oil to finish the report."</td></tr>
<tr><td>Under the weather</td><td>Feeling ill</td><td>"I'm feeling a bit under the weather today."</td></tr>
</table>

<h4>Phrasal Verbs for Advanced Learners</h4>
<table>
<tr><th>Phrasal Verb</th><th>Meaning</th></tr>
<tr><td>come across as</td><td>to give the impression of being</td></tr>
<tr><td>put up with</td><td>to tolerate</td></tr>
<tr><td>get away with</td><td>to avoid punishment for</td></tr>
<tr><td>look into</td><td>to investigate</td></tr>
<tr><td>bring up</td><td>to mention / to raise (a child)</td></tr>
<tr><td>turn down</td><td>to reject / to reduce volume</td></tr>
<tr><td>carry out</td><td>to perform / to conduct</td></tr>
<tr><td>break down</td><td>to stop working / to analyze in detail</td></tr>
</table>`,
              examples: [
                { english: 'She comes across as confident, but she\'s actually quite shy.', explanation: '"come across as" = to give the impression of' },
                { english: 'I won\'t put up with this behavior any longer.', explanation: '"put up with" = to tolerate' },
                { english: 'The research was carried out over a period of two years.', explanation: '"carry out" = to conduct/perform' },
                { english: 'He burned the midnight oil to meet the deadline.', explanation: 'Idiom: worked very late' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'The exam was easy — it was a ___.',
                options: ['piece of bread', 'piece of cake', 'cup of tea', 'slice of pie'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'I can\'t ___ his rudeness any longer.',
                options: ['put up with', 'put on with', 'put off with', 'put in with'],
                correct: 0
              },
              {
                type: 'fill-blank',
                question: 'She let the ___ out of the bag about the surprise party.',
                answer: 'cat'
              },
              {
                type: 'multiple-choice',
                question: '"Once in a blue moon" means:',
                options: ['very often', 'at night', 'very rarely', 'with sadness'],
                correct: 2
              }
            ]
          }
        ]
      },
      {
        id: 'c1-u3',
        title: 'Academic Writing Skills',
        lessons: [
          {
            id: 'c1-u3-l1',
            title: 'Essay Writing & Linking Words',
            type: 'writing',
            content: {
              explanation: `<h3>Academic Essay Structure</h3>

<h4>Essay Structure</h4>
<ol>
<li><strong>Introduction:</strong> Hook → Background → Thesis statement</li>
<li><strong>Body Paragraphs (2-3):</strong> Topic sentence → Evidence → Explanation → Link</li>
<li><strong>Conclusion:</strong> Restate thesis → Summarize → Final thought</li>
</ol>

<h4>Linking Words & Phrases</h4>

<p><strong>Adding information:</strong></p>
<p>Furthermore, Moreover, In addition, Additionally, What is more, Not only... but also</p>

<p><strong>Contrasting:</strong></p>
<p>However, Nevertheless, On the other hand, Conversely, Despite this, In contrast, Whereas, Although</p>

<p><strong>Cause & Effect:</strong></p>
<p>Therefore, Consequently, As a result, Hence, Thus, Due to, Owing to, Because of</p>

<p><strong>Giving examples:</strong></p>
<p>For instance, For example, Such as, Namely, In particular, To illustrate</p>

<p><strong>Concluding:</strong></p>
<p>In conclusion, To summarize, On the whole, All in all, Taking everything into account</p>

<h4>Hedging Language</h4>
<p>In academic writing, we often avoid absolute statements:</p>
<ul>
<li>"This <strong>may/might/could</strong> suggest that..."</li>
<li>"It <strong>appears/seems</strong> that..."</li>
<li>"The evidence <strong>tends to</strong> indicate..."</li>
<li>"It is <strong>widely believed</strong> that..."</li>
<li>"<strong>To some extent</strong>, this is true."</li>
</ul>`,
              examples: [
                { english: 'Furthermore, the study reveals significant improvements.', explanation: 'Adding information with "Furthermore"' },
                { english: 'Nevertheless, several limitations should be noted.', explanation: 'Contrasting with "Nevertheless"' },
                { english: 'This may suggest that further research is needed.', explanation: 'Hedging with "may suggest"' },
                { english: 'Taking everything into account, the benefits outweigh the risks.', explanation: 'Concluding phrase' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Choose the best linking word: "The weather was terrible. ___, we decided to go out."',
                options: ['Furthermore', 'Nevertheless', 'Therefore', 'Moreover'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'Which word shows cause and effect?',
                options: ['However', 'Moreover', 'Consequently', 'Although'],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'In ___, the evidence strongly supports the hypothesis.',
                answer: 'conclusion'
              },
              {
                type: 'multiple-choice',
                question: 'Which is an example of hedging language?',
                options: [
                  'This proves that...',
                  'This clearly shows...',
                  'This may suggest that...',
                  'This definitely means...'
                ],
                correct: 2
              }
            ]
          }
        ]
      }
    ]
  },

  C2: {
    title: 'Proficiency',
    description: 'Achieve near-native mastery! Perfect your command of nuance, register, and sophisticated expression.',
    color: 'indigo',
    units: [
      {
        id: 'c2-u1',
        title: 'Nuance & Register',
        lessons: [
          {
            id: 'c2-u1-l1',
            title: 'Formal vs Informal Register',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Understanding Register</h3>
<p>Register refers to the level of formality in language. Mastering register is essential for C2-level proficiency.</p>

<h4>Formal vs Informal Equivalents</h4>
<table>
<tr><th>Informal</th><th>Formal</th></tr>
<tr><td>ask for</td><td>request</td></tr>
<tr><td>get</td><td>obtain / acquire</td></tr>
<tr><td>help</td><td>assist / facilitate</td></tr>
<tr><td>need</td><td>require</td></tr>
<tr><td>start</td><td>commence / initiate</td></tr>
<tr><td>end</td><td>conclude / terminate</td></tr>
<tr><td>think about</td><td>consider / contemplate</td></tr>
<tr><td>show</td><td>demonstrate / illustrate</td></tr>
<tr><td>use</td><td>utilise / employ</td></tr>
<tr><td>enough</td><td>sufficient / adequate</td></tr>
<tr><td>but</td><td>however / nevertheless / notwithstanding</td></tr>
<tr><td>so</td><td>therefore / consequently / thus</td></tr>
<tr><td>about</td><td>regarding / concerning / with respect to</td></tr>
</table>

<h4>Levels of Formality</h4>
<ol>
<li><strong>Very Informal (slang):</strong> "Gonna grab some grub." </li>
<li><strong>Informal:</strong> "I'll get something to eat."</li>
<li><strong>Neutral:</strong> "I'm going to have lunch."</li>
<li><strong>Formal:</strong> "I intend to take my midday meal."</li>
<li><strong>Very Formal:</strong> "I shall be partaking of luncheon."</li>
</ol>

<h4>When to Use Which Register</h4>
<ul>
<li><strong>Academic papers:</strong> Formal</li>
<li><strong>Business emails:</strong> Neutral to formal</li>
<li><strong>News articles:</strong> Neutral</li>
<li><strong>Social media:</strong> Informal</li>
<li><strong>Legal documents:</strong> Very formal</li>
</ul>`,
              examples: [
                { english: 'I would be grateful if you could furnish me with the requisite documentation.', explanation: 'Very formal: business/legal context' },
                { english: 'Could you send me the documents, please?', explanation: 'Neutral: everyday professional communication' },
                { english: 'Can you send me the stuff?', explanation: 'Informal: communication with friends/colleagues' },
                { english: 'The data demonstrate a significant correlation between the variables.', explanation: 'Academic register' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'What is the formal equivalent of "get"?',
                options: ['grab', 'obtain', 'take', 'have'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'Which register is appropriate for an academic paper?',
                options: ['Very informal', 'Informal', 'Neutral', 'Formal'],
                correct: 3
              },
              {
                type: 'fill-blank',
                question: 'The formal equivalent of "enough" is ___.',
                answer: 'sufficient'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the most formal way to say "I need help"?',
                options: [
                  'I need a hand.',
                  'I require assistance.',
                  'I need some help.',
                  'Can someone help me?'
                ],
                correct: 1
              }
            ]
          }
        ]
      },
      {
        id: 'c2-u2',
        title: 'Advanced Collocations',
        lessons: [
          {
            id: 'c2-u2-l1',
            title: 'Sophisticated Word Partnerships',
            type: 'vocabulary',
            content: {
              explanation: `<h3>Advanced Collocations</h3>
<p>Collocations are words that naturally go together. Using them correctly is a hallmark of advanced English.</p>

<h4>Verb + Noun Collocations</h4>
<table>
<tr><th>Correct</th><th>Incorrect</th></tr>
<tr><td>make a decision</td><td>do a decision</td></tr>
<tr><td>do research</td><td>make research</td></tr>
<tr><td>take a risk</td><td>make a risk</td></tr>
<tr><td>pay attention</td><td>give attention</td></tr>
<tr><td>raise a concern</td><td>lift a concern</td></tr>
<tr><td>draw a conclusion</td><td>take a conclusion</td></tr>
<tr><td>lodge a complaint</td><td>put a complaint</td></tr>
<tr><td>bear in mind</td><td>keep in mind (less formal)</td></tr>
<tr><td>exert influence</td><td>put influence</td></tr>
<tr><td>pose a threat</td><td>make a threat</td></tr>
</table>

<h4>Adjective + Noun Collocations</h4>
<table>
<tr><th>Natural</th><th>Unnatural</th></tr>
<tr><td>a stark contrast</td><td>a strong contrast</td></tr>
<tr><td>a foregone conclusion</td><td>an already-decided conclusion</td></tr>
<tr><td>a vested interest</td><td>a personal interest (weaker)</td></tr>
<tr><td>a pivotal role</td><td>an important role (weaker)</td></tr>
<tr><td>a resounding success</td><td>a big success (weaker)</td></tr>
<tr><td>an unprecedented move</td><td>a never-before move</td></tr>
</table>

<h4>Adverb + Adjective Collocations</h4>
<ul>
<li><strong>deeply</strong> concerned / committed / rooted</li>
<li><strong>highly</strong> unlikely / recommended / skilled</li>
<li><strong>bitterly</strong> disappointed / cold / opposed</li>
<li><strong>widely</strong> regarded / known / available</li>
<li><strong>utterly</strong> ridiculous / impossible / devastated</li>
</ul>`,
              examples: [
                { english: 'The committee drew the conclusion that reforms were necessary.', explanation: '"draw a conclusion" — correct collocation' },
                { english: 'This poses a significant threat to biodiversity.', explanation: '"pose a threat" — correct collocation' },
                { english: 'She played a pivotal role in the negotiations.', explanation: '"pivotal role" — more sophisticated than "important role"' },
                { english: 'The proposal was widely regarded as groundbreaking.', explanation: '"widely regarded" — adverb + adjective collocation' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'You should ___ a decision soon.',
                options: ['do', 'make', 'take', 'get'],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: 'The result was a ___ conclusion.',
                options: ['foregone', 'previous', 'beforehand', 'predone'],
                correct: 0
              },
              {
                type: 'fill-blank',
                question: 'She was ___ disappointed by the results. (adverb meaning "intensely")',
                answer: 'bitterly'
              },
              {
                type: 'multiple-choice',
                question: 'Climate change ___ a serious threat to coastal communities.',
                options: ['makes', 'does', 'poses', 'gives'],
                correct: 2
              }
            ]
          }
        ]
      },
      {
        id: 'c2-u3',
        title: 'Critical Analysis & Argumentation',
        lessons: [
          {
            id: 'c2-u3-l1',
            title: 'Constructing Sophisticated Arguments',
            type: 'writing',
            content: {
              explanation: `<h3>Advanced Argumentation</h3>
<p>At C2 level, you should be able to construct nuanced, well-supported arguments with precision and sophistication.</p>

<h4>Argument Structure</h4>
<ol>
<li><strong>Thesis:</strong> State your position clearly</li>
<li><strong>Premises:</strong> Provide evidence and reasoning</li>
<li><strong>Counter-arguments:</strong> Address opposing views</li>
<li><strong>Rebuttal:</strong> Refute counter-arguments</li>
<li><strong>Conclusion:</strong> Synthesize and reaffirm</li>
</ol>

<h4>Introducing Arguments</h4>
<ul>
<li>"It could be argued that..."</li>
<li>"There is a compelling case for..."</li>
<li>"The evidence overwhelmingly suggests..."</li>
<li>"One might contend that..."</li>
</ul>

<h4>Acknowledging Counter-arguments</h4>
<ul>
<li>"Admittedly, there are those who maintain..."</li>
<li>"While it is true that..., it should be noted..."</li>
<li>"Proponents of the opposing view argue...; however,..."</li>
<li>"Notwithstanding the merits of this position,..."</li>
</ul>

<h4>Nuanced Conclusions</h4>
<ul>
<li>"On balance, the evidence leans towards..."</li>
<li>"While no definitive conclusion can be drawn, it appears..."</li>
<li>"The preponderance of evidence suggests..."</li>
<li>"In the final analysis,..."</li>
</ul>

<h4>Rhetorical Devices</h4>
<ul>
<li><strong>Tricolon:</strong> Groups of three ("government of the people, by the people, for the people")</li>
<li><strong>Antithesis:</strong> Contrasting ideas ("It was the best of times, it was the worst of times")</li>
<li><strong>Rhetorical questions:</strong> "Can we really afford to ignore this evidence?"</li>
<li><strong>Anaphora:</strong> Repetition at the start of clauses for emphasis</li>
</ul>`,
              examples: [
                { english: 'While the economic benefits are undeniable, the environmental costs cannot be overlooked.', explanation: 'Balanced argument with concession' },
                { english: 'Admittedly, the methodology has its limitations; nevertheless, the findings remain significant.', explanation: 'Acknowledging weakness while maintaining position' },
                { english: 'The preponderance of evidence suggests that early intervention yields the best outcomes.', explanation: 'Nuanced conclusion with hedging' },
                { english: 'One might contend that regulation stifles innovation; however, historical evidence suggests otherwise.', explanation: 'Counter-argument and rebuttal' }
              ]
            },
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which phrase best introduces a counter-argument?',
                options: [
                  'I completely disagree.',
                  'Admittedly, proponents of the opposing view contend...',
                  'That is wrong because...',
                  'Everyone knows that...'
                ],
                correct: 1
              },
              {
                type: 'multiple-choice',
                question: '"On balance" is used to:',
                options: [
                  'Introduce a new point',
                  'Give an example',
                  'Weigh up and conclude',
                  'Contradict a previous point'
                ],
                correct: 2
              },
              {
                type: 'fill-blank',
                question: 'The ___ of evidence suggests a strong correlation.',
                answer: 'preponderance'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the most sophisticated way to hedge?',
                options: [
                  'I think this is right.',
                  'The evidence tends to suggest...',
                  'This is probably true.',
                  'Maybe this is correct.'
                ],
                correct: 1
              }
            ]
          }
        ]
      }
    ]
  }
};

export function getLevelColor(level) {
  const colors = {
    A1: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', ring: 'ring-emerald-500' },
    A2: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', ring: 'ring-blue-500' },
    B1: { bg: 'bg-violet-500', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', ring: 'ring-violet-500' },
    B2: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', ring: 'ring-amber-500' },
    C1: { bg: 'bg-rose-500', light: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', ring: 'ring-rose-500' },
    C2: { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', ring: 'ring-indigo-500' },
  };
  return colors[level] || colors.A1;
}

export function getAllLessons(level) {
  const levelData = courseContent[level];
  if (!levelData) return [];
  const lessons = [];
  levelData.units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lessons.push({ ...lesson, unitTitle: unit.title, unitId: unit.id });
    });
  });
  return lessons;
}

export default courseContent;
