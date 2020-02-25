const { fromEvent, timer, from, zip, of } = rxjs;
const { flatMap, map, skip, switchMap, catchError } = rxjs.operators;
const { fromFetch } = rxjs.fetch;

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

let timer$;

fromEvent(quoteInputElement, 'input').subscribe(() => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.padEnd(arrayQuote.length, '\0').split('')
  let correct = true

  zip(from(arrayQuote), from(arrayValue)).pipe(
    map(([characterSpan, character]) => ({characterSpan, character}))
  ).subscribe(
    ({characterSpan, character}) => {
      if (character == '\0') {
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
      } else {
        characterSpan.classList.add('incorrect');
        characterSpan.classList.remove('correct');
        correct = false;
      }
    }
  );

  if (correct) renderNewQuote()
});

function getRandomQuote() {
  return fromFetch(RANDOM_QUOTE_API_URL).pipe(
    switchMap(response => 
      (response.ok) ? response.json() : of({error: true, message: `Error ${response.status}`})
    ),
    catchError(err => {
      return of({ error: true, message: err.message });
    }),
    map(
      quoteResult => quoteResult.content
    )
  );
}

function renderNewQuote() {
  quoteDisplayElement.innerHTML = '';
  getRandomQuote().pipe(
    flatMap(quote => quote.split(''))
  ).subscribe(
    character => {
      const characterSpan = document.createElement('span');
      characterSpan.innerText = character;
      quoteDisplayElement.appendChild(characterSpan);
    },
    e => console.error(e),
    () => {
      quoteInputElement.value = null;
      startTimer();
    }
  )
}

function startTimer() {
  if(typeof timer$ !== 'undefined') timer$.unsubscribe();
  
  timer$ = timer(0, 1000).subscribe(time => {
    timerElement.innerText = time
    if(time == 100) renderNewQuote();
  });
};

renderNewQuote()
