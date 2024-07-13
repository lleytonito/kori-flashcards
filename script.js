document.addEventListener("DOMContentLoaded", () => {
  const flashcards = [
    {
      question:
        "What does a round yellow warning sign with an 'X' symbol and black 'RR' letters indicate?",
      answer: "A railroad crossing is ahead.",
    },
    {
      question: "What should you do if a traffic signal is not working?",
      answer:
        "Come to a complete stop, then yield to traffic as if it were a four-way stop. Proceed only when safe.",
    },
    // ... Add the rest of the flashcards here
  ];

  let currentIndex = 0;
  let solvedIndex = 0;
  const solvedFlashcards = [];

  const cardNumber = document.getElementById("card-number");
  const cardFront = document.getElementById("card-front");
  const cardBack = document.getElementById("card-back");
  const flashcard = document.getElementById("flashcard");
  const flipBtn = document.getElementById("flip-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const markIcon = document.getElementById("mark-icon");

  const solvedCardNumber = document.getElementById("solved-card-number");
  const solvedCardFront = document.getElementById("solved-card-front");
  const solvedCardBack = document.getElementById("solved-card-back");
  const solvedFlashcard = document.getElementById("solved-flashcard");
  const solvedFlipBtn = document.getElementById("solved-flip-btn");
  const solvedPrevBtn = document.getElementById("solved-prev-btn");
  const solvedNextBtn = document.getElementById("solved-next-btn");
  const unsolvedMarkIcon = document.getElementById("unsolved-mark-icon");

  function updateCard() {
    if (flashcards.length > 0) {
      cardNumber.textContent = `${currentIndex + 1} of ${flashcards.length}`;
      cardFront.textContent = flashcards[currentIndex].question;
      cardBack.textContent = flashcards[currentIndex].answer;
      markIcon.style.display = "block";
    } else {
      cardNumber.textContent = "All cards solved!";
      cardFront.textContent = "";
      cardBack.textContent = "";
      markIcon.style.display = "none";
    }
  }

  function updateSolvedCard() {
    if (solvedFlashcards.length > 0) {
      solvedCardNumber.textContent = `${solvedIndex + 1} of ${
        solvedFlashcards.length
      }`;
      solvedCardFront.textContent = solvedFlashcards[solvedIndex].question;
      solvedCardBack.textContent = solvedFlashcards[solvedIndex].answer;
      unsolvedMarkIcon.style.display = "block";
    } else {
      solvedCardNumber.textContent = "No solved cards.";
      solvedCardFront.textContent = "";
      solvedCardBack.textContent = "";
      unsolvedMarkIcon.style.display = "none";
    }
  }

  function flipCard() {
    flashcard.classList.toggle("flipped");
  }

  function flipSolvedCard() {
    solvedFlashcard.classList.toggle("flipped");
  }

  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCard();
    }
  }

  function nextCard() {
    if (currentIndex < flashcards.length - 1) {
      currentIndex++;
      updateCard();
    }
  }

  function prevSolvedCard() {
    if (solvedIndex > 0) {
      solvedIndex--;
      updateSolvedCard();
    }
  }

  function nextSolvedCard() {
    if (solvedIndex < solvedFlashcards.length - 1) {
      solvedIndex++;
      updateSolvedCard();
    }
  }

  function markAsSolved() {
    if (flashcards.length > 0) {
      markIcon.src = "assets/green-checkmark.png";
      markIcon.classList.add("solved");
      setTimeout(() => {
        solvedFlashcards.push(flashcards.splice(currentIndex, 1)[0]);
        markIcon.src = "assets/grey-checkmark.png";
        markIcon.classList.remove("solved");
        if (currentIndex >= flashcards.length) {
          currentIndex = flashcards.length - 1;
        }
        updateCard();
        updateSolvedCard();
      }, 300);
    }
  }

  function markAsUnsolved() {
    if (solvedFlashcards.length > 0) {
      unsolvedMarkIcon.src = "assets/grey-checkmark.png";
      unsolvedMarkIcon.classList.add("solved");
      setTimeout(() => {
        flashcards.push(solvedFlashcards.splice(solvedIndex, 1)[0]);
        unsolvedMarkIcon.src = "assets/green-checkmark.png";
        unsolvedMarkIcon.classList.remove("solved");
        if (solvedIndex >= solvedFlashcards.length) {
          solvedIndex = solvedFlashcards.length - 1;
        }
        updateCard();
        updateSolvedCard();
      }, 300);
    }
  }

  flipBtn.addEventListener("click", flipCard);
  prevBtn.addEventListener("click", prevCard);
  nextBtn.addEventListener("click", nextCard);
  markIcon.addEventListener("click", markAsSolved);

  solvedFlipBtn.addEventListener("click", flipSolvedCard);
  solvedPrevBtn.addEventListener("click", prevSolvedCard);
  solvedNextBtn.addEventListener("click", nextSolvedCard);
  unsolvedMarkIcon.addEventListener("click", markAsUnsolved);

  updateCard();
  updateSolvedCard();
});
