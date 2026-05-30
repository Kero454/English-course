// All content in this file is 100% original, written exclusively for this product.
// Listening uses the browser's Web Speech API (free, no copyright).
// Speech recognition uses the browser's SpeechRecognition API (free, no copyright).

const skillsPractice = {
  'a1-u1-l1': {
    reading: {
      passage: `Hello! My name is Anna. I am from Italy. I live in a small town near Rome. I am twenty-two years old. I am a student. I study English every day. My friends are very nice. They say "Good morning!" when we meet. In the evening, we say "See you tomorrow!" Have a nice day!`,
      questions: [
        { q: 'Where is Anna from?', options: ['Spain', 'Italy', 'France', 'Greece'], correct: 1 },
        { q: 'How old is Anna?', options: ['12', '20', '22', '25'], correct: 2 },
        { q: 'What do they say in the evening?', options: ['Good morning!', 'See you tomorrow!', 'Hello!', 'Have a nice day!'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Good morning! I am David. I am from London. I am a teacher. Nice to meet you! How are you today?`,
      questions: [
        { q: 'What time of day is it?', options: ['Morning', 'Afternoon', 'Evening', 'Night'], correct: 0 },
        { q: 'What is David\'s job?', options: ['Student', 'Doctor', 'Teacher', 'Driver'], correct: 2 },
        { q: 'Where is David from?', options: ['Paris', 'London', 'New York', 'Sydney'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Introduce yourself: say hello, your name, and where you are from.', model: 'Hello! My name is [your name]. I am from [your country]. Nice to meet you!' },
        { prompt: 'Say goodbye to a friend you will see tomorrow.', model: 'Goodbye! See you tomorrow! Have a nice day!' },
      ],
      targetPhrase: 'Nice to meet you!',
    },
    writing: {
      prompt: 'Write a short message (30-50 words) introducing yourself to a new classmate.',
      minWords: 30,
      rubric: ['Includes a greeting', 'States your name clearly', 'Says where you are from', 'Ends with a polite goodbye'],
      modelAnswer: `Hello! My name is Omar. I am from Cairo, Egypt. I am very happy to be in this class. I love learning English. I hope we can be good friends. Nice to meet you all! See you in class tomorrow.`,
    },
  },

  'a1-u1-l2': {
    reading: {
      passage: `This is my friend, Maria. She is twenty-eight years old. She is from Brazil, but she lives in Madrid now. She is a nurse at a big hospital. She speaks Portuguese, Spanish, and a little English. Her phone number is 555-3421. Her favourite hobby is reading. She has one brother and two sisters.`,
      questions: [
        { q: 'What is Maria\'s job?', options: ['Teacher', 'Doctor', 'Nurse', 'Student'], correct: 2 },
        { q: 'How many sisters does she have?', options: ['One', 'Two', 'Three', 'None'], correct: 1 },
        { q: 'Where does Maria live now?', options: ['Brazil', 'Madrid', 'Lisbon', 'Rome'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Hi, I am Lin. I am twenty-five years old. I am from China, but I live in Canada. I am an engineer. I speak Chinese and English.`,
      questions: [
        { q: 'What is Lin\'s job?', options: ['Doctor', 'Teacher', 'Engineer', 'Artist'], correct: 2 },
        { q: 'How old is Lin?', options: ['15', '20', '25', '30'], correct: 2 },
        { q: 'Which languages does Lin speak?', options: ['Chinese only', 'English only', 'Chinese and English', 'Spanish and English'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Tell me about yourself: name, age, country, and job.', model: 'My name is [name]. I am [age] years old. I am from [country]. I am a [job].' },
        { prompt: 'Ask a new friend three questions about themselves.', model: 'What is your name? Where are you from? What do you do?' },
      ],
      targetPhrase: 'What is your phone number?',
    },
    writing: {
      prompt: 'Write a short profile (40-60 words) about a friend or family member. Include name, age, country, job, and one hobby.',
      minWords: 40,
      rubric: ['Mentions name and age', 'Says where the person is from', 'States the person\'s job', 'Includes at least one hobby'],
      modelAnswer: `My friend is called Sara. She is thirty years old. She is from Morocco, but she lives in France. She is a doctor at a small clinic. She speaks Arabic, French, and English. Her favourite hobby is painting.`,
    },
  },

  'a1-u2-l1': {
    reading: {
      passage: `Tom goes shopping every Saturday. Today he buys five apples for three dollars, two bottles of water for one dollar each, and a chocolate cake for fifteen dollars. He pays twenty dollars in total. He gives the cashier a fifty-dollar bill. The cashier gives him thirty dollars back.`,
      questions: [
        { q: 'How many apples does Tom buy?', options: ['Two', 'Three', 'Five', 'Ten'], correct: 2 },
        { q: 'How much does the chocolate cake cost?', options: ['$1', '$3', '$15', '$20'], correct: 2 },
        { q: 'How much money does the cashier give back?', options: ['$5', '$15', '$20', '$30'], correct: 3 },
      ],
    },
    listening: {
      audioText: `In our class there are twenty-three students. Twelve are girls and eleven are boys. We have four teachers and one principal. The school has six floors and forty classrooms.`,
      questions: [
        { q: 'How many students are in the class?', options: ['13', '20', '23', '33'], correct: 2 },
        { q: 'How many boys are in the class?', options: ['11', '12', '13', '14'], correct: 0 },
        { q: 'How many classrooms does the school have?', options: ['14', '20', '40', '46'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Count from 1 to 20 out loud.', model: 'one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.' },
        { prompt: 'Tell me your phone number, age, and house number.', model: 'My phone number is... My age is... My house number is...' },
      ],
      targetPhrase: 'My phone number is seven, eight, two, five, one, zero, nine.',
    },
    writing: {
      prompt: 'Write a shopping list (30-40 words) with at least 5 items, quantities, and prices. Add a total.',
      minWords: 30,
      rubric: ['Includes at least 5 items', 'Each item has a quantity', 'Each item has a price', 'Includes a total'],
      modelAnswer: `Shopping list: 3 apples for 2 dollars, 2 bottles of milk for 4 dollars, 1 loaf of bread for 3 dollars, 12 eggs for 5 dollars, and 4 bananas for 2 dollars. The total is sixteen dollars.`,
    },
  },

  'a1-u2-l2': {
    reading: {
      passage: `Lisa has a busy week. On Monday morning, she has English class at nine o'clock. On Tuesday, she works at the library from two to six in the afternoon. On Wednesday evening, she visits her grandmother. On Friday night, she meets her friends at the cafe. On Sunday, she relaxes at home.`,
      questions: [
        { q: 'When is Lisa\'s English class?', options: ['Monday morning', 'Tuesday afternoon', 'Wednesday evening', 'Friday night'], correct: 0 },
        { q: 'What does Lisa do on Tuesday?', options: ['Visits grandmother', 'Works at the library', 'Meets friends', 'Reads a book'], correct: 1 },
        { q: 'When does she meet her friends?', options: ['Monday morning', 'Wednesday evening', 'Friday night', 'Sunday'], correct: 2 },
      ],
    },
    listening: {
      audioText: `My birthday is on the fifteenth of June. The party starts at seven thirty in the evening. It is on a Saturday. Please arrive on time!`,
      questions: [
        { q: 'When is the birthday?', options: ['5th of June', '15th of June', '15th of July', '25th of June'], correct: 1 },
        { q: 'What time does the party start?', options: ['7:00', '7:15', '7:30', '8:00'], correct: 2 },
        { q: 'What day of the week is the party?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Say the days of the week, starting with Monday.', model: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.' },
        { prompt: 'Tell me what time you wake up, eat lunch, and go to bed.', model: 'I wake up at... I eat lunch at... I go to bed at...' },
      ],
      targetPhrase: 'It is half past seven in the evening.',
    },
    writing: {
      prompt: 'Write about your weekly routine (40-60 words). Mention at least 4 different days with times.',
      minWords: 40,
      rubric: ['Mentions at least 4 days', 'Includes specific times', 'Uses prepositions of time correctly', 'Describes activities clearly'],
      modelAnswer: `On Monday morning, I go to work at eight thirty. On Wednesday evening, I have a yoga class at six o'clock. On Friday afternoon, I meet my sister at three. On Saturday, I stay at home and watch a film at nine in the evening.`,
    },
  },

  'a1-u3-l1': {
    reading: {
      passage: `My brother Jack lives in a small village. He gets up at six o'clock every day. He drinks coffee and reads the newspaper. He works on a farm. He has twenty cows and forty sheep. He doesn't have a car, but he rides a bicycle. On Sundays, he doesn't work. He plays football with his friends.`,
      questions: [
        { q: 'What time does Jack get up?', options: ['5:00', '6:00', '7:00', '8:00'], correct: 1 },
        { q: 'Does Jack have a car?', options: ['Yes, he does.', 'No, he doesn\'t.', 'Yes, two cars.', 'It doesn\'t say.'], correct: 1 },
        { q: 'What does Jack do on Sundays?', options: ['He works on the farm.', 'He reads newspapers.', 'He plays football.', 'He goes shopping.'], correct: 2 },
      ],
    },
    listening: {
      audioText: `Helen lives in New York. She works in a hospital. She doesn't drive a car; she takes the train every morning. She loves her job, but she doesn't like Monday mornings!`,
      questions: [
        { q: 'Where does Helen work?', options: ['A school', 'A hospital', 'An office', 'A shop'], correct: 1 },
        { q: 'How does she go to work?', options: ['By car', 'By bus', 'By train', 'On foot'], correct: 2 },
        { q: 'What doesn\'t she like?', options: ['Her job', 'New York', 'Mondays', 'The train'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe your daily routine. Mention at least 5 activities.', model: 'I get up at... I have breakfast. I go to work. I eat lunch at... I come home in the evening.' },
        { prompt: 'Talk about three things you do NOT do every day.', model: 'I don\'t drink coffee. I don\'t watch TV. I don\'t go to the gym.' },
      ],
      targetPhrase: 'She doesn\'t work on Sundays.',
    },
    writing: {
      prompt: 'Write about a typical day in your life (50-70 words). Use present simple. Include positive and negative sentences.',
      minWords: 50,
      rubric: ['Uses present simple correctly', 'Includes at least 5 daily activities', 'Includes at least 2 negative sentences', 'Uses time expressions'],
      modelAnswer: `I get up at seven o'clock every morning. I have a shower and drink a cup of tea. I don't eat a big breakfast. I go to university at half past eight. I study for six hours. In the evening, I cook dinner and read a book. I don't watch TV. I go to bed at eleven.`,
    },
  },
  'a2-u1-l1': {
    reading: {
      passage: `Last weekend, I went to Paris with my sister. We arrived on Friday evening and stayed in a small hotel near the river. On Saturday, we walked around the city and visited a famous museum. We saw beautiful paintings and ate lunch in a lovely cafe. In the evening, we watched the Eiffel Tower lights. On Sunday, we bought some gifts and flew home.`,
      questions: [
        { q: 'When did they arrive in Paris?', options: ['Thursday evening', 'Friday evening', 'Saturday morning', 'Sunday afternoon'], correct: 1 },
        { q: 'What did they do on Saturday?', options: ['Flew home', 'Bought gifts', 'Visited a museum', 'Stayed in the hotel'], correct: 2 },
        { q: 'What did they do on Sunday?', options: ['Visited a museum', 'Bought gifts and flew home', 'Walked around the city', 'Watched the lights'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Yesterday I had a very busy day. I woke up at six, went to the gym, and then drove to work. At lunchtime I met an old friend in a restaurant. After work I cooked dinner for my family. I finally went to bed at midnight.`,
      questions: [
        { q: 'What time did the speaker wake up?', options: ['5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.'], correct: 1 },
        { q: 'Who did they meet at lunchtime?', options: ['A colleague', 'An old friend', 'A family member', 'A neighbour'], correct: 1 },
        { q: 'What time did they go to bed?', options: ['10 p.m.', '11 p.m.', '12 a.m.', '1 a.m.'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe what you did last weekend. Use at least 6 past tense verbs.', model: 'Last weekend I went to... I met... I ate... I watched... I played... I had...' },
        { prompt: 'Tell me about a holiday you took last year.', model: 'Last year I went to... I stayed for... I visited... I tried...' },
      ],
      targetPhrase: 'I went to the cinema and watched an excellent film.',
    },
    writing: {
      prompt: 'Write a short story (60-80 words) about something interesting you did last week. Use at least 8 past tense verbs (mix regular and irregular).',
      minWords: 60,
      rubric: ['Uses past simple correctly', 'Includes time expressions', 'Tells events in clear order', 'Includes feelings or descriptions'],
      modelAnswer: `Last Tuesday I had a wonderful day. I woke up early and took the train to the coast. I met my best friend at the station, and we walked along the beach. We ate fish and chips for lunch and drank cold lemonade. In the afternoon, we swam in the sea and took lots of photos. We came back home tired but very happy.`,
    },
  },

  'a2-u2-l1': {
    reading: {
      passage: `London is one of the biggest cities in Europe. It is bigger than Madrid and more famous than Lisbon, but it is not as warm as Athens. The London Underground is older than the Paris Metro - in fact, it is the oldest in the world. Houses in central London are more expensive than houses in most other European capitals. However, the parks are beautiful, and many people say London is the best city for culture.`,
      questions: [
        { q: 'How does London compare to Athens?', options: ['Bigger', 'Warmer', 'Less warm', 'Older'], correct: 2 },
        { q: 'What is special about the London Underground?', options: ['It is the longest', 'It is the oldest in the world', 'It is the most modern', 'It is the cheapest'], correct: 1 },
        { q: 'What do many people say about London?', options: ['It is the cheapest', 'It is the warmest', 'It is the best for culture', 'It is the smallest'], correct: 2 },
      ],
    },
    listening: {
      audioText: `My new apartment is much bigger than my old one. It has three bedrooms instead of one, and the kitchen is more modern. The only problem is that it is farther from the city centre, so my journey to work is longer.`,
      questions: [
        { q: 'How is the new apartment compared to the old one?', options: ['Smaller', 'Bigger', 'The same', 'Cheaper'], correct: 1 },
        { q: 'How many bedrooms does it have now?', options: ['One', 'Two', 'Three', 'Four'], correct: 2 },
        { q: 'What is the problem with the new apartment?', options: ['It is smaller', 'It is more expensive', 'It is farther from work', 'The kitchen is old'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Compare two cities you know using at least 4 comparatives and 1 superlative.', model: '... is bigger than ... ... is more modern than ... ... is the most beautiful city I know.' },
        { prompt: 'Compare yourself to a sibling or friend (height, age, hobbies).', model: 'I am taller than my brother but he is more sporty than me.' },
      ],
      targetPhrase: 'This is the most interesting book I have ever read.',
    },
    writing: {
      prompt: 'Compare two places, people, or things you know well (60-80 words). Use at least 5 comparatives and 2 superlatives.',
      minWords: 60,
      rubric: ['Uses comparative forms correctly', 'Uses superlative forms correctly', 'Uses "than" correctly', 'Includes irregular forms (better/worse/best)'],
      modelAnswer: `My two favourite cities are Cairo and Istanbul. Cairo is hotter than Istanbul, but Istanbul is more beautiful. The food in Cairo is cheaper, but the food in Istanbul is better. Istanbul has the most amazing views over the sea. However, Cairo is the oldest city I have ever visited. Both cities are wonderful, but for me, Istanbul is the best for a short holiday.`,
    },
  },

  'a2-u3-l1': {
    reading: {
      passage: `Look out of the window! It is raining heavily, and the wind is blowing strongly. The children next door are playing in the rain - they are wearing yellow raincoats and laughing loudly. Their mother is calling them, but they aren't listening. Meanwhile, I am drinking hot tea and watching this funny scene from my warm living room.`,
      questions: [
        { q: 'What is the weather doing?', options: ['Snowing', 'Raining heavily', 'Sunny', 'Foggy'], correct: 1 },
        { q: 'What are the children wearing?', options: ['Blue coats', 'Yellow raincoats', 'Red boots', 'Nothing special'], correct: 1 },
        { q: 'What is the writer doing?', options: ['Playing in the rain', 'Calling the children', 'Drinking hot tea', 'Sleeping'], correct: 2 },
      ],
    },
    listening: {
      audioText: `Right now I am sitting in a coffee shop in the city centre. People are walking past the window, cars are honking in the street, and a guitarist is playing music outside. I am trying to write an email, but it isn't easy with all this noise!`,
      questions: [
        { q: 'Where is the speaker?', options: ['At home', 'In a coffee shop', 'In a park', 'In an office'], correct: 1 },
        { q: 'What is happening outside?', options: ['It is raining', 'A guitarist is playing', 'Children are playing', 'Nothing'], correct: 1 },
        { q: 'What is the speaker trying to do?', options: ['Sleep', 'Read a book', 'Write an email', 'Order coffee'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe what is happening around you right now. Mention at least 4 actions.', model: 'I am sitting at my desk. The clock is ticking. My phone is buzzing. Outside, a dog is barking.' },
        { prompt: 'Describe a busy place using the present continuous for at least 5 actions.', model: 'People are buying food. Children are running. A man is selling fruit.' },
      ],
      targetPhrase: 'The children are playing in the garden right now.',
    },
    writing: {
      prompt: 'Describe a busy scene happening RIGHT NOW (60-80 words). Use present continuous for at least 6 actions.',
      minWords: 60,
      rubric: ['Uses present continuous correctly', 'Describes at least 6 actions', 'Uses descriptive language', 'Creates a clear picture'],
      modelAnswer: `I am writing this from a bench in Central Park. The sun is shining, and a gentle breeze is blowing. Children are running around the fountain, laughing happily. A street musician is playing the violin, and a small crowd is listening quietly. Two old men are playing chess on a stone table. A young woman is jogging past me with her dog.`,
    },
  },

  'b1-u1-l1': {
    reading: {
      passage: `Mark has lived in Tokyo for eight years. He has tried sushi hundreds of times, has climbed Mount Fuji twice, and has visited almost every district of the city. However, he has never learned to read Japanese fluently, which sometimes embarrasses him. Recently, he has decided to take serious language lessons. He has already attended five classes this month and feels he has improved a lot.`,
      questions: [
        { q: 'How long has Mark lived in Tokyo?', options: ['2 years', '5 years', '8 years', '10 years'], correct: 2 },
        { q: 'What has Mark NEVER done?', options: ['Climbed Mount Fuji', 'Eaten sushi', 'Learned to read Japanese fluently', 'Visited Tokyo districts'], correct: 2 },
        { q: 'How many classes has he attended this month?', options: ['Three', 'Four', 'Five', 'Six'], correct: 2 },
      ],
    },
    listening: {
      audioText: `I have worked in this company for ten years. I have never been late, I have never missed a deadline, and I have trained over fifty new employees. But I have recently realised that I want a new challenge. I have already started looking for a new job.`,
      questions: [
        { q: 'How long has the speaker worked in this company?', options: ['5 years', '10 years', '15 years', '20 years'], correct: 1 },
        { q: 'How many employees has the speaker trained?', options: ['Over 20', 'Over 50', 'Over 100', 'Over 200'], correct: 1 },
        { q: 'What has the speaker started doing?', options: ['Training more people', 'Looking for a new job', 'Taking holidays', 'Studying'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Tell me about three things you have done in your life that you are proud of.', model: 'I have travelled to... I have learned... I have completed...' },
        { prompt: 'Compare your past and present life using present perfect (since, for, already).', model: 'I have lived here for... I have already finished... I have changed since...' },
      ],
      targetPhrase: 'I have never been to South America, but I have always wanted to go.',
    },
    writing: {
      prompt: 'Write about your achievements and experiences (70-90 words). Use the present perfect at least 6 times. Include "for", "since", "already", "never", and "yet".',
      minWords: 70,
      rubric: ['Uses present perfect correctly', 'Uses for/since/already/never/yet', 'Includes positive and negative sentences', 'Has a clear topic'],
      modelAnswer: `I have lived in this city for fifteen years, and I have grown a lot during that time. I have studied at two universities, and I have already earned a master's degree. I have travelled to over twenty countries, but I have never visited South America yet. I have made many wonderful friends since I moved here, and I have started my own small business.`,
    },
  },

  'b1-u2-l1': {
    reading: {
      passage: `If you study hard, you will pass the exam - that's a fact almost every student knows. But what if you don't have time to study? If I were you, I would create a smart schedule and stick to it. If you had only one hour a day, you would still make great progress. If technology didn't exist, we wouldn't have access to so many free learning tools.`,
      questions: [
        { q: 'What will happen if you study hard?', options: ['You will fail', 'You will pass', 'Nothing changes', 'It depends'], correct: 1 },
        { q: 'What does the writer suggest if you have only one hour?', options: ['Give up', 'Still make progress', 'Hire a tutor', 'Move abroad'], correct: 1 },
        { q: 'What is the writer\'s opinion about technology?', options: ['It is useless', 'It hurts learning', 'It gives free learning tools', 'It is too expensive'], correct: 2 },
      ],
    },
    listening: {
      audioText: `If I won the lottery tomorrow, the first thing I would do is buy a house by the sea. I wouldn't quit my job, though - I love what I do. I would also help my parents and donate some money to charity. But if I were really sensible, I would invest most of it.`,
      questions: [
        { q: 'What would the speaker buy first?', options: ['A car', 'A house by the sea', 'A boat', 'A business'], correct: 1 },
        { q: 'Would the speaker quit their job?', options: ['Yes', 'No', 'Maybe', 'It doesn\'t say'], correct: 1 },
        { q: 'What would a sensible person do?', options: ['Spend it all', 'Hide it', 'Invest most of it', 'Give it all away'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'If you could live in any country, where would you go and why?', model: 'If I could live anywhere, I would choose... because...' },
        { prompt: 'Talk about three things you will do if you have a free day tomorrow.', model: 'If I have a free day, I will... I will also... If the weather is good, I will...' },
      ],
      targetPhrase: 'If I had more time, I would learn another language.',
    },
    writing: {
      prompt: 'Write a paragraph (70-100 words) titled "If I Could Change One Thing About the World". Use both 1st and 2nd conditional. At least 5 conditional sentences.',
      minWords: 70,
      rubric: ['Uses 1st conditional correctly', 'Uses 2nd conditional correctly', 'At least 5 conditional sentences', 'Clear argument'],
      modelAnswer: `If I could change one thing about the world, I would end poverty. If every child had access to good food and clean water, millions of lives would improve. If I start a small project myself, I will only help a few people. But if many people work together, we will create real change. If I were a politician, I would make this my number-one priority.`,
    },
  },

  'b1-u3-l1': {
    reading: {
      passage: `The man who lives next door to me is a famous artist. He paints pictures which sell for thousands of dollars in galleries around the world. His house, which is the oldest on the street, is full of beautiful paintings. The studio where he works has huge windows that let in lots of natural light. His daughter, who is also an artist, often visits him. The painting that I love most shows the sea at sunset.`,
      questions: [
        { q: 'Who is the man next door?', options: ['A teacher', 'A famous artist', 'A doctor', 'A musician'], correct: 1 },
        { q: 'What is special about his house?', options: ['It is the biggest', 'It is the oldest on the street', 'It is the newest', 'It has no windows'], correct: 1 },
        { q: 'Which painting does the writer love most?', options: ['The one of the daughter', 'The sea at sunset', 'A self-portrait', 'A garden scene'], correct: 1 },
      ],
    },
    listening: {
      audioText: `My grandmother, who turned ninety last week, still lives in the house where my mother was born. The garden, which my grandfather planted in 1962, is full of fruit trees. The neighbours, who have known her for decades, often check on her.`,
      questions: [
        { q: 'How old is the grandmother?', options: ['80', '85', '90', '95'], correct: 2 },
        { q: 'When was the garden planted?', options: ['1942', '1952', '1962', '1972'], correct: 2 },
        { q: 'Who often checks on her?', options: ['Her children', 'Her neighbours', 'A nurse', 'Her sister'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe a person, place, and object using "who", "which", "where", "whose".', model: 'My best friend is someone who... My favourite city is a place where... I have a watch whose strap is broken.' },
        { prompt: 'Describe a film using at least 3 relative clauses.', model: 'It is a film which... The main character, who..., lives in a town where...' },
      ],
      targetPhrase: 'The house where I grew up is the one which has the green door.',
    },
    writing: {
      prompt: 'Describe a person who has influenced your life (80-100 words). Use at least 5 relative clauses with who/which/whose/where/that.',
      minWords: 80,
      rubric: ['At least 5 relative clauses', 'Correct relative pronouns', 'Includes defining and non-defining clauses', 'Describes the person clearly'],
      modelAnswer: `The person who has influenced my life the most is my grandmother, whose strength I have always admired. She grew up in a small village where life was very hard. The lessons that she taught me, which I still remember today, are about kindness and patience. Her stories, which always started with "When I was your age...", taught me to value what I have. The house where she still lives is full of books that she has read many times.`,
    },
  },

  'b2-u1-l1': {
    reading: {
      passage: `By this time next year, I will have completed my master's degree and will be starting my career in renewable energy. My plan is ambitious but realistic. By December, I will have submitted my dissertation. While my classmates will still be deciding what to do, I will already be interviewing for jobs. By next summer, I expect I will be earning a real salary for the first time. Honestly, the thought is both terrifying and exciting.`,
      questions: [
        { q: 'What will the writer have completed by next year?', options: ['A PhD', 'A bachelor degree', 'A master\'s degree', 'A diploma'], correct: 2 },
        { q: 'What field is the writer planning to work in?', options: ['Medicine', 'Renewable energy', 'Education', 'Law'], correct: 1 },
        { q: 'How does the writer feel about earning a salary?', options: ['Bored', 'Indifferent', 'Both terrified and excited', 'Disappointed'], correct: 2 },
      ],
    },
    listening: {
      audioText: `This time tomorrow I will be flying to Tokyo for the most important conference of my career. By the time I arrive, I will have prepared my entire presentation. While the audience is listening, I will be hoping they understand my accent. By Friday, I will have given three talks.`,
      questions: [
        { q: 'Where is the speaker flying to?', options: ['Beijing', 'Seoul', 'Tokyo', 'Singapore'], correct: 2 },
        { q: 'What will the speaker have done by the time they arrive?', options: ['Slept', 'Prepared the presentation', 'Eaten dinner', 'Called home'], correct: 1 },
        { q: 'How many talks will they have given by Friday?', options: ['Two', 'Three', 'Four', 'Five'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe your life in five years. Use future perfect and future continuous (3 of each).', model: 'In five years, I will have finished... I will be working at... By then I will have visited...' },
        { prompt: 'What will you be doing at this exact time tomorrow? Next week? Next year?', model: 'This time tomorrow I will be... Next week I will be... Next year I will probably be...' },
      ],
      targetPhrase: 'By the end of this year, I will have achieved my main goal.',
    },
    writing: {
      prompt: 'Describe your plans for the next 10 years (80-100 words). Use future perfect and future continuous at least 6 times total.',
      minWords: 80,
      rubric: ['Uses future perfect correctly', 'Uses future continuous correctly', 'Distinguishes completed vs ongoing future actions', 'Includes specific time markers'],
      modelAnswer: `By 2035, I will have built a successful career in international business and, hopefully, I will be running my own consultancy. By the time I am thirty-five, I will have lived in at least three different countries. I imagine I will be working with clients from all over the world. By the end of the next decade, I will have completed several professional certifications, and I will be mentoring younger colleagues.`,
    },
  },

  'b2-u2-l1': {
    reading: {
      passage: `English is spoken by more than 1.5 billion people worldwide. Every year, thousands of new books are translated into English, and major scientific papers are routinely published in this language. Last year alone, over fifty Hollywood films were watched by audiences in 190 countries. The language has been shaped by countless cultures and continues to evolve. By 2050, it is expected that English will have been adopted by even more international institutions.`,
      questions: [
        { q: 'How many people speak English worldwide?', options: ['Over 500 million', 'Over 1 billion', 'Over 1.5 billion', 'Over 2 billion'], correct: 2 },
        { q: 'How many Hollywood films were watched globally last year?', options: ['Around 20', 'Around 50', 'Around 100', 'Around 500'], correct: 1 },
        { q: 'What is predicted about English by 2050?', options: ['It will decline', 'It will replace all other languages', 'It will be adopted by more institutions', 'It will only be spoken in business'], correct: 2 },
      ],
    },
    listening: {
      audioText: `Our new product has been tested by independent experts and approved by three major safety agencies. It is currently being used by over two thousand customers worldwide, and it has already been recommended by leading magazines.`,
      questions: [
        { q: 'Who has tested the product?', options: ['Customers', 'Independent experts', 'The CEO', 'Marketing team'], correct: 1 },
        { q: 'How many safety agencies approved it?', options: ['One', 'Two', 'Three', 'Four'], correct: 2 },
        { q: 'How many customers are using it?', options: ['Hundreds', 'Over two thousand', 'Millions', 'A few'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Talk about a famous building or invention. Use the passive voice at least 5 times.', model: 'It was designed by... It is visited by... It has been described as... It was built in...' },
        { prompt: 'Describe a process (how something is made). Use passive forms.', model: 'First, the materials are gathered. Then they are mixed... Finally, the product is packaged...' },
      ],
      targetPhrase: 'The decision has been made and the document will be signed tomorrow.',
    },
    writing: {
      prompt: 'Describe a process, famous place, or historical event (80-100 words). Use the passive voice at least 7 times, in different tenses.',
      minWords: 80,
      rubric: ['Uses passive voice in different tenses', 'Uses at least 4 different tenses', 'Each passive is grammatically correct', 'Content is informative'],
      modelAnswer: `The Great Pyramid of Giza was built over 4,500 years ago by thousands of workers. It is widely considered one of the most impressive structures ever created. The huge stones were transported from quarries far away and were carefully placed by skilled engineers. For centuries, the pyramid was used as a royal tomb, and many treasures were stored inside. Today, the site is visited by millions of tourists every year.`,
    },
  },

  'b2-u3-l1': {
    reading: {
      passage: `When I asked my grandfather about his youth, he said that he had grown up during difficult times. He told me he had walked five kilometres to school every day and explained that nobody complained - they were simply grateful to be there. He admitted that he had not always been a good student, but he insisted that he had eventually learned the value of hard work. He suggested I should appreciate the opportunities I have.`,
      questions: [
        { q: 'What did the grandfather say about his school journey?', options: ['He drove to school', 'He walked 5 km daily', 'He took a bus', 'He stayed at home'], correct: 1 },
        { q: 'What did he admit?', options: ['He was top of the class', 'He had not always been a good student', 'He never went to school', 'He hated learning'], correct: 1 },
        { q: 'What did he suggest?', options: ['That the writer should travel', 'That the writer should appreciate opportunities', 'That school is useless', 'That life was easier then'], correct: 1 },
      ],
    },
    listening: {
      audioText: `My boss told me yesterday that the company was reorganising. She said that some departments would be merged and warned me that there might be redundancies. However, she promised that my position was safe and asked me if I would consider taking on additional responsibilities.`,
      questions: [
        { q: 'What did the boss say was happening?', options: ['The company was closing', 'The company was reorganising', 'The company was expanding', 'The company was being sold'], correct: 1 },
        { q: 'What did she promise?', options: ['A pay rise', 'The speaker\'s job was safe', 'A promotion', 'A new office'], correct: 1 },
        { q: 'What did she ask?', options: ['If the speaker wanted to leave', 'If the speaker would take more responsibilities', 'If the speaker liked the team', 'If the speaker was happy'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Report a conversation you had recently. Use at least 5 reporting verbs.', model: 'My friend told me that... She said... I asked her if... She suggested...' },
        { prompt: 'Report something interesting you heard on the news this week.', model: 'The news reported that... A journalist explained that... Witnesses claimed that...' },
      ],
      targetPhrase: 'She told me she had already finished the project.',
    },
    writing: {
      prompt: 'Report an interview or important conversation (80-100 words). Use at least 6 different reporting verbs (said, told, asked, claimed, suggested, admitted, denied).',
      minWords: 80,
      rubric: ['Uses reported speech correctly (backshift)', 'At least 6 different reporting verbs', 'Reports statements and questions', 'Clear narrative flow'],
      modelAnswer: `Last week I interviewed a successful entrepreneur. She told me that she had started her company at the age of twenty-two with no money. She admitted that the first three years had been extremely difficult and confessed that she had nearly given up twice. However, she insisted that persistence had been the key to her success. When I asked her what advice she would give young people, she suggested that they should focus on solving real problems. She denied that luck had played a major role.`,
    },
  },

  'c1-u1-l1': {
    reading: {
      passage: `Never before had the public seen such a bold political statement. Not only did the speech challenge traditional thinking, but it also offered a concrete vision for the future. Hardly had the speaker finished when the audience erupted in applause. Only later did commentators realise the historical significance of what they had witnessed. So powerful was the rhetoric that excerpts were quoted in newspapers for weeks. Little did anyone suspect that this single moment would alter the trajectory of an entire generation.`,
      questions: [
        { q: 'What did the speech do?', options: ['Repeated old ideas', 'Challenged traditional thinking and offered a vision', 'Avoided politics', 'Confused the audience'], correct: 1 },
        { q: 'When did the audience applaud?', options: ['Before the speech', 'In the middle', 'Hardly had the speaker finished', 'A week later'], correct: 2 },
        { q: 'What was the long-term effect?', options: ['It was forgotten', 'It altered a generation\'s trajectory', 'Only the speaker remembered it', 'It changed nothing'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Rarely have I encountered such a complex problem. Not until I had reviewed every document did the full picture emerge. Only by working closely with the entire team did we manage to find a solution. Little did we know at the time that our approach would later become the industry standard.`,
      questions: [
        { q: 'How does the speaker describe the problem?', options: ['Easy', 'Common', 'Complex', 'Trivial'], correct: 2 },
        { q: 'When did the full picture emerge?', options: ['Immediately', 'Not until they reviewed every document', 'Never', 'After a holiday'], correct: 1 },
        { q: 'What happened to their approach?', options: ['It failed', 'It became the industry standard', 'It was rejected', 'It was forgotten'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Describe a moment of personal triumph using at least 3 inverted structures.', model: 'Never before had I... Only when I... realised that... Hardly had I... when...' },
        { prompt: 'Argue passionately about a topic using inversion for emphasis.', model: 'Not only is this issue urgent, but... Rarely do we encounter... Under no circumstances should we...' },
      ],
      targetPhrase: 'Not only did she master the language, but she also embraced the culture.',
    },
    writing: {
      prompt: 'Write an emphatic paragraph (90-120 words) about a significant change. Use at least 6 inverted structures.',
      minWords: 90,
      rubric: ['At least 6 inversions, used correctly', 'Auxiliary before subject in each inversion', 'Adds rhetorical impact', 'Sophisticated tone'],
      modelAnswer: `Never in modern history have we witnessed such rapid technological change. Not only has the internet transformed how we work, but it has also redefined how we relate to one another. Rarely does a generation experience such a fundamental shift. Little did our parents imagine, just thirty years ago, that we would carry the world's libraries in our pockets. Hardly had society adjusted to email when social media arrived to disrupt everything once more. Only by remaining adaptable can we hope to thrive. So profound are these changes that historians will study them for centuries.`,
    },
  },

  'c1-u2-l1': {
    reading: {
      passage: `When my business partner suggested we expand abroad, I told her bluntly that we would be biting off more than we could chew. The market was a piece of cake on paper, but I knew that in reality we would have to pull out all the stops. We didn't have the resources, and the competition would eat us for breakfast. However, she insisted that fortune favours the bold, and that we should strike while the iron was hot. In the end, I gave in - and the gamble paid off handsomely.`,
      questions: [
        { q: 'What does "biting off more than we could chew" mean?', options: ['Eating too fast', 'Taking on more than we can handle', 'Being hungry', 'Being efficient'], correct: 1 },
        { q: 'What did the partner believe?', options: ['That risk should be avoided', 'That fortune favours the bold', 'That the market was bad', 'That they were unprepared'], correct: 1 },
        { q: 'What happened in the end?', options: ['The business failed', 'The gamble paid off', 'They cancelled the plan', 'They lost their savings'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Do not beat around the bush. If you have something to say, just spit it out. We have been going round in circles for an hour, and frankly, I am at the end of my rope. Let us get to the point and call a spade a spade.`,
      questions: [
        { q: 'What does "beat around the bush" mean?', options: ['Hit a plant', 'Avoid the main topic', 'Run around', 'Make noise'], correct: 1 },
        { q: 'How does the speaker feel?', options: ['Patient', 'Frustrated', 'Calm', 'Excited'], correct: 1 },
        { q: 'What does "call a spade a spade" mean?', options: ['Be direct and honest', 'Use a garden tool', 'Be polite', 'Stay silent'], correct: 0 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Tell a story from your life using at least 5 idioms or phrasal verbs.', model: 'I was over the moon when... I had to pull myself together because... My boss flew off the handle when...' },
        { prompt: 'Give advice to a friend using idioms.', model: 'Don\'t put all your eggs in one basket. Sometimes you just have to bite the bullet. Every cloud has a silver lining.' },
      ],
      targetPhrase: 'I was on cloud nine after the interview went off without a hitch.',
    },
    writing: {
      prompt: 'Write a story or opinion piece (100-130 words). Use at least 8 idioms or phrasal verbs naturally.',
      minWords: 100,
      rubric: ['At least 8 idioms or phrasal verbs', 'Used correctly and naturally', 'Story flows well', 'Wide range of expressions'],
      modelAnswer: `Last year I decided to bite the bullet and leave a job I had outgrown. Many people told me I was making a mountain out of a molehill, but deep down I knew I had to follow my gut. The first few months were no walk in the park - I had to tighten my belt and live on a shoestring. Several times I felt like throwing in the towel, but I kept my chin up. Eventually, things started to look up: I landed a position that ticked all the boxes. Looking back, taking that leap of faith was the best decision I have ever made. Every cloud really does have a silver lining.`,
    },
  },

  'c1-u3-l1': {
    reading: {
      passage: `In recent years, the rise of remote work has sparked heated debate. On the one hand, proponents argue that working from home boosts productivity and improves work-life balance. Furthermore, it reduces commuting time and benefits the environment. On the other hand, critics contend that it weakens team culture and isolates employees. Moreover, not all professions can be performed remotely. In conclusion, while remote work offers significant advantages, a hybrid approach may ultimately prove to be the most sustainable solution.`,
      questions: [
        { q: 'What is the author\'s overall position?', options: ['Strongly against remote work', 'Strongly for remote work', 'A hybrid approach may be best', 'It doesn\'t matter'], correct: 2 },
        { q: 'What is mentioned as a benefit of remote work?', options: ['Higher salaries', 'Reduced commuting and better balance', 'More meetings', 'Travel opportunities'], correct: 1 },
        { q: 'Which linking word introduces a contrasting view?', options: ['Furthermore', 'Moreover', 'On the other hand', 'In conclusion'], correct: 2 },
      ],
    },
    listening: {
      audioText: `Firstly, education shapes the future of any nation. Secondly, it empowers individuals to think critically. However, access remains unequal across the world. Therefore, governments must invest more strategically. In conclusion, the question is not whether to act, but how soon.`,
      questions: [
        { q: 'How many main points does the speaker raise?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
        { q: 'What does the speaker say about access to education?', options: ['It is equal', 'It is unequal globally', 'It is improving everywhere', 'It is unimportant'], correct: 1 },
        { q: 'What does the speaker call for?', options: ['Less spending', 'More strategic investment', 'A new curriculum', 'Privatisation'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Present a structured argument using at least 6 linking words.', model: 'Firstly,... Secondly,... However,... Furthermore,... In conclusion,...' },
        { prompt: 'Discuss the pros and cons of social media with clear discourse markers.', model: 'On the one hand,... On the other hand,... Moreover,... Nevertheless,... To sum up,...' },
      ],
      targetPhrase: 'Despite the challenges, the long-term benefits outweigh the drawbacks.',
    },
    writing: {
      prompt: 'Write a four-paragraph essay (150-200 words): "Is technology making our lives better or worse?" Use intro, two body paragraphs (opposing views), and conclusion. Include at least 10 different linking phrases.',
      minWords: 150,
      rubric: ['Clear four-paragraph structure', 'At least 10 varied linking phrases', 'Balanced argument before conclusion', 'Formal academic register'],
      modelAnswer: `Technology has become an inseparable part of modern life, yet whether it improves or worsens our existence remains a matter of debate. On the one hand, technology offers undeniable benefits. Firstly, it dramatically improves access to information; anyone with an internet connection can learn almost anything. Furthermore, medical advancements have extended life expectancy worldwide. In addition, communication tools allow families to stay connected across vast distances. On the other hand, critics argue that technology has serious drawbacks. To begin with, excessive screen time has been linked to anxiety. Moreover, automation threatens millions of jobs. Additionally, our dependence on devices may be eroding cognitive skills. In conclusion, while technology brings remarkable advantages, its negative consequences cannot be ignored. Ultimately, the question is not whether technology is good or bad, but rather how mindfully we use it. Therefore, individuals and societies must develop the wisdom to harness its power responsibly.`,
    },
  },

  'c2-u1-l1': {
    reading: {
      passage: `The discrepancy between informal and formal register can be jarring. Compare: "I'm gonna grab a coffee" versus "I shall be procuring a beverage." Whereas the former exemplifies casual, idiomatic speech, the latter borders on the absurdly archaic. Effective communicators calibrate their register with surgical precision, gauging context, audience, and intent. The truly proficient never sound stilted; rather, they oscillate fluidly between registers. This dexterity, while seemingly intuitive, is in fact the product of meticulous observation and assiduous practice.`,
      questions: [
        { q: 'What does the author say about "I shall be procuring a beverage"?', options: ['It is appropriate everywhere', 'It borders on the absurdly archaic', 'It is informal', 'It is incorrect'], correct: 1 },
        { q: 'What characterises a truly proficient speaker?', options: ['Always being formal', 'Always being casual', 'Fluid oscillation between registers', 'Avoiding both extremes'], correct: 2 },
        { q: 'What is "assiduous practice"?', options: ['Casual practice', 'Diligent and careful practice', 'Optional practice', 'Group practice'], correct: 1 },
      ],
    },
    listening: {
      audioText: `Allow me to elucidate my position. Whereas my colleague advocates for incremental change, I posit that nothing short of comprehensive reform will suffice. The status quo is, frankly, untenable. We must transcend partisan bickering and commit to bold action.`,
      questions: [
        { q: 'Which register does the speaker use?', options: ['Highly informal', 'Casual', 'Highly formal', 'Mixed'], correct: 2 },
        { q: 'What does the speaker advocate for?', options: ['Incremental change', 'Comprehensive reform', 'No change', 'Partisan politics'], correct: 1 },
        { q: 'What does "untenable" mean here?', options: ['Acceptable', 'Comfortable', 'Indefensible', 'Successful'], correct: 2 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Deliver the same message twice - once informal, once formal (e.g., refusing a request).', model: 'Informal: "Sorry mate, can\'t do it." / Formal: "I regret that I am unable to accommodate this request."' },
        { prompt: 'Improvise a formal speech opening, then switch to casual chat.', model: 'Ladies and gentlemen, esteemed colleagues... / Hey everyone, thanks for sticking around...' },
      ],
      targetPhrase: 'I respectfully submit that this proposal, while well-intentioned, is fundamentally flawed.',
    },
    writing: {
      prompt: 'Take the same scenario (complaint/recommendation/refusal). Write TWO versions (60-80 words each): highly formal and highly informal.',
      minWords: 120,
      rubric: ['Both convey the same message', 'Formal version uses sophisticated vocabulary', 'Informal version uses idiomatic language', 'No register slips in either'],
      modelAnswer: `FORMAL: I am writing to express my profound dissatisfaction with the service I received at your establishment on Saturday evening. The waiter was inattentive, the food was substandard, and the bill contained an erroneous charge. I trust that you will arrange an appropriate refund and take measures to prevent such failures in future.

INFORMAL: Hey, I have to vent about my dinner at your place on Saturday - it was honestly a disaster. The waiter ignored us forever, the food was awful, and you charged me for stuff I didn't even order! Can you sort out a refund and maybe train the staff a bit better? Thanks.`,
    },
  },

  'c2-u2-l1': {
    reading: {
      passage: `The proposal poses a serious challenge to conventional thinking. It draws heavily on cutting-edge research and offers a sweeping critique of existing models. Critics, predictably, have raised valid concerns and voiced strong objections. Nevertheless, the author makes a compelling case and presents irrefutable evidence on several key points. Were the proposal to gain widespread support, it could spark a fundamental shift in how policymakers approach the issue.`,
      questions: [
        { q: 'What collocation describes what the proposal does to conventional thinking?', options: ['Solves', 'Poses a challenge to', 'Confirms', 'Avoids'], correct: 1 },
        { q: 'What did critics do?', options: ['Praised it', 'Raised valid concerns and voiced strong objections', 'Ignored it', 'Approved it'], correct: 1 },
        { q: 'What does the author present?', options: ['Weak arguments', 'Irrefutable evidence', 'No data', 'A short summary'], correct: 1 },
      ],
    },
    listening: {
      audioText: `The new strategy is expected to bear fruit within twelve months. It will address long-standing problems and pave the way for sustainable growth. However, we must take into account the volatility of global markets and avoid placing undue pressure on our teams.`,
      questions: [
        { q: 'When is the strategy expected to "bear fruit"?', options: ['In 6 months', 'In 12 months', 'In 2 years', 'Immediately'], correct: 1 },
        { q: 'What will it pave the way for?', options: ['Quick profits', 'Sustainable growth', 'Cost cuts', 'Layoffs'], correct: 1 },
        { q: 'What must they take into account?', options: ['Their competitors', 'The volatility of global markets', 'Local laws', 'Employee preferences'], correct: 1 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Discuss a global issue using at least 6 sophisticated collocations.', model: 'Climate change poses a serious threat... This issue has gained momentum... We must draw attention to...' },
        { prompt: 'Give a brief professional update using sophisticated word partnerships.', model: 'The project has gained traction. We have made significant headway. The team has risen to the challenge.' },
      ],
      targetPhrase: 'The findings shed new light on a long-standing controversy.',
    },
    writing: {
      prompt: 'Write a sophisticated analysis (120-150 words) on any subject. Use at least 10 sophisticated word partnerships.',
      minWords: 120,
      rubric: ['At least 10 sophisticated collocations', 'Precise and idiomatic', 'Advanced vocabulary range', 'Polished tone throughout'],
      modelAnswer: `The recent surge in misinformation poses an unprecedented threat to public discourse. Social media platforms have, in many cases, played a pivotal role in amplifying false narratives, raising serious concerns among regulators and citizens alike. Researchers have drawn attention to the bitterly polarising effect of algorithmically curated feeds, which appear to deepen existing divisions rather than fostering understanding. Although several platforms have taken steps to address the problem, critics argue that these measures fall woefully short. Genuine reform will require sustained political will, robust independent oversight, and a fundamental shift in business models. Without such concerted action, we risk laying the foundations for a society in which truth itself becomes a casualty.`,
    },
  },

  'c2-u3-l1': {
    reading: {
      passage: `It is often argued that artificial intelligence will fundamentally reshape the labour market, yet the precise nature of this transformation remains a matter of considerable contention. Optimists contend that AI will liberate workers from mundane tasks, thereby unlocking unprecedented creative potential. Sceptics, by contrast, warn that the displacement of human labour will outpace society's capacity to adapt. To dismiss either view would be reductive. A more nuanced position recognises that, while the long-term outcome may indeed prove beneficial, the transition itself will exact significant social costs, particularly upon those least equipped to navigate it.`,
      questions: [
        { q: 'What is the author\'s overall stance?', options: ['Purely optimistic', 'Purely pessimistic', 'Nuanced - acknowledges both sides', 'Neutral and uninterested'], correct: 2 },
        { q: 'What do optimists believe?', options: ['AI will destroy creativity', 'AI will free workers and unlock potential', 'AI is irrelevant', 'AI is too slow'], correct: 1 },
        { q: 'What does "exact significant social costs" mean?', options: ['Reduce costs', 'Demand or impose costs', 'Calculate prices', 'Improve society'], correct: 1 },
      ],
    },
    listening: {
      audioText: `While the proposal has considerable merit, it would be naive to overlook its limitations. The author rightly identifies the core issue, but the solutions offered are, at best, partial. A truly comprehensive response would require acknowledging trade-offs that the present analysis conveniently sidesteps.`,
      questions: [
        { q: 'What is the speaker\'s view of the proposal?', options: ['It is perfect', 'It has merit but also limitations', 'It is useless', 'It is misleading'], correct: 1 },
        { q: 'How does the speaker describe the solutions offered?', options: ['Comprehensive', 'Partial', 'Brilliant', 'Innovative'], correct: 1 },
        { q: 'What does the analysis "conveniently sidestep"?', options: ['Trade-offs', 'The introduction', 'Statistics', 'The conclusion'], correct: 0 },
      ],
    },
    speaking: {
      prompts: [
        { prompt: 'Build a sophisticated argument on a controversial topic. Acknowledge counterarguments, then refute them.', model: 'It is often argued that... Whilst this view has some merit, it overlooks... A more compelling case can be made for...' },
        { prompt: 'Defend a nuanced position. Use hedging language and concessions.', model: 'I would argue, with some caveats, that... Granted, opponents will say... Nevertheless, the evidence suggests...' },
      ],
      targetPhrase: 'Whilst there is some truth to that view, it ultimately fails to address the fundamental issue.',
    },
    writing: {
      prompt: 'Write a sophisticated argumentative essay (180-220 words) on a debatable issue. Acknowledge counterarguments and refute them. Use hedging, concession, and rebuttal techniques.',
      minWords: 180,
      rubric: ['Sophisticated argument with clear thesis', 'Acknowledges counterarguments fairly', 'Uses hedging language (may, arguably, to some extent)', 'Refutes counterarguments persuasively'],
      modelAnswer: `It is frequently asserted that universal access to higher education represents an unalloyed social good. Whilst this position is intuitively appealing, a more rigorous analysis suggests the picture is considerably more complex. Proponents argue, with some justification, that higher education broadens horizons and enhances earning potential. Granted, there is robust empirical support for these claims. Nevertheless, the assumption that more is necessarily better merits scrutiny. To begin with, the proliferation of degrees has, in many sectors, devalued the very credential it bestows. Furthermore, encouraging universal enrolment risks marginalising vital vocational pathways. Critics of this nuanced position will counter that any restriction smacks of elitism. To this, one might respond that genuine equity lies not in funnelling everyone through identical channels, but in cultivating diverse routes to meaningful work. Ultimately, the case for universal higher education, though well-intentioned, rests upon premises that warrant careful interrogation. A more sophisticated policy framework would prioritise quality and choice over mere quantity.`,
    },
  },

};

export default skillsPractice;
