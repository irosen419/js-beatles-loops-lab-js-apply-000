function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(array) {
  var facts = [];
  
  for (let i = 0; i < array.length; i++) {
    facts.push(`${array[i]}!!!`);
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var johnFacts = [];
  do {
    johnFacts.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return johnFacts;
}