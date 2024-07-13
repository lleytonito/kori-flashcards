document.addEventListener("DOMContentLoaded", () => {
  const flashcards = [
    {
      question:
        "What is the maximum legal speed limit on a Washington state highway unless otherwise posted?",
      answer: "B. 60 mph",
      choices: ["A. 55 mph", "B. 60 mph", "C. 65 mph", "D. 70 mph"],
    },
    {
      question:
        "When approaching a stop sign, where must you stop your vehicle?",
      answer: "B. Before the stop line, crosswalk, or intersection",
      choices: [
        "A. Before entering the intersection",
        "B. Before the stop line, crosswalk, or intersection",
        "C. At the stop sign",
        "D. At the point where you can see clearly in both directions",
      ],
    },
    {
      question:
        "What should you do when you see a flashing yellow traffic signal at the next intersection?",
      answer: "B. Proceed with caution",
      choices: [
        "A. Stop, then proceed with caution",
        "B. Proceed with caution",
        "C. Speed up to clear the intersection quickly",
        "D. Prepare to stop as the light is about to turn red",
      ],
    },
    {
      question: "What is the purpose of a two-way left turn lane?",
      answer: "A. To allow vehicles to make left turns from both directions",
      choices: [
        "A. To allow vehicles to make left turns from both directions",
        "B. For passing slower traffic",
        "C. For emergency vehicles only",
        "D. For U-turns only",
      ],
    },
    {
      question:
        "In Washington, what does a solid white line between lanes of traffic indicate?",
      answer:
        "B. You should stay in your lane unless a special situation requires you to change lanes",
      choices: [
        "A. You may change lanes if it is safe to do so",
        "B. You should stay in your lane unless a special situation requires you to change lanes",
        "C. It separates traffic going in opposite directions",
        "D. It marks the edge of the roadway",
      ],
    },
    {
      question: "How far must you park from a fire hydrant?",
      answer: "C. 15 feet",
      choices: ["A. 5 feet", "B. 10 feet", "C. 15 feet", "D. 20 feet"],
    },
    {
      question: "What should you do if you miss your exit on the freeway?",
      answer:
        "C. Get off at the next exit and come back to the exit you missed",
      choices: [
        "A. Stop and back up carefully",
        "B. Make a U-turn at the next emergency vehicle crossover",
        "C. Get off at the next exit and come back to the exit you missed",
        "D. Pull over to the shoulder and reverse to your exit",
      ],
    },
    {
      question: "When are you required to use your headlights?",
      answer: "C. When visibility is less than 1,000 feet",
      choices: [
        "A. Only at night",
        "B. Between dusk and dawn",
        "C. When visibility is less than 1,000 feet",
        "D. Whenever you turn on your windshield wipers",
      ],
    },
    {
      question:
        "What is the legal blood alcohol concentration (BAC) limit for drivers over 21 years old in Washington?",
      answer: "B. 0.08%",
      choices: ["A. 0.05%", "B. 0.08%", "C. 0.10%", "D. 0.15%"],
    },
    {
      question:
        "What does a round, yellow sign with a black 'X' and 'RR' signify?",
      answer: "B. Railroad crossing ahead",
      choices: [
        "A. Roundabout ahead",
        "B. Railroad crossing ahead",
        "C. Restricted road ahead",
        "D. Road closed ahead",
      ],
    },
    {
      question: "When driving in fog, you should use your:",
      answer: "A. Low-beam headlights",
      choices: [
        "A. Low-beam headlights",
        "B. High-beam headlights",
        "C. Hazard lights",
        "D. Parking lights",
      ],
    },
    {
      question:
        "What should you do if you see a pedestrian with a white cane or a guide dog in your lane?",
      answer: "B. Stop and yield the right-of-way",
      choices: [
        "A. Honk your horn to alert them",
        "B. Stop and yield the right-of-way",
        "C. Flash your lights to signal them",
        "D. Continue driving carefully around them",
      ],
    },
    {
      question:
        "You must dim your high-beam headlights when you are within how many feet of an oncoming vehicle?",
      answer: "C. 500 feet",
      choices: ["A. 200 feet", "B. 300 feet", "C. 500 feet", "D. 600 feet"],
    },
    {
      question:
        "What is the penalty for not stopping for a school bus with its stop sign extended and red lights flashing?",
      answer: "C. A fine and possible suspension of your driver's license",
      choices: [
        "A. A warning",
        "B. A ticket with no fine",
        "C. A fine and possible suspension of your driver's license",
        "D. No penalty if no children are present",
      ],
    },
    {
      question: "In Washington, when must you use your turn signals?",
      answer: "D. All of the above",
      choices: [
        "A. When changing lanes",
        "B. When turning at an intersection",
        "C. When entering or exiting a freeway",
        "D. All of the above",
      ],
    },
    {
      question:
        "What is the minimum following distance you should maintain when driving behind a motorcycle?",
      answer: "A. Four seconds",
      choices: [
        "A. Four seconds",
        "B. Two seconds",
        "C. One second",
        "D. Three seconds",
      ],
    },
    {
      question:
        "When parking uphill on a two-way street with no curb, your front wheels should be:",
      answer: "B. Turned to the right (away from the street)",
      choices: [
        "A. Turned to the left (toward the street)",
        "B. Turned to the right (away from the street)",
        "C. Parallel with the pavement",
        "D. Perpendicular to the pavement",
      ],
    },
    {
      question: "What should you do if your car starts to skid on ice?",
      answer: "C. Turn the steering wheel in the direction you want to go",
      choices: [
        "A. Accelerate to gain traction",
        "B. Brake hard to stop the skid",
        "C. Turn the steering wheel in the direction you want to go",
        "D. Turn the steering wheel in the opposite direction of the skid",
      ],
    },
    {
      question: "What should you do if your vehicle has a blowout?",
      answer:
        "A. Hold the steering wheel tightly and keep the vehicle going straight",
      choices: [
        "A. Hold the steering wheel tightly and keep the vehicle going straight",
        "B. Brake hard to stop the vehicle quickly",
        "C. Accelerate to maintain control",
        "D. Immediately steer off the road",
      ],
    },
    {
      question:
        "At what blood alcohol concentration (BAC) level are you considered legally intoxicated if you are under 21 in Washington?",
      answer: "A. 0.02%",
      choices: ["A. 0.02%", "B. 0.05%", "C. 0.08%", "D. 0.10%"],
    },
    {
      question: "When merging onto the freeway, you should be driving:",
      answer: "C. At or near the same speed as the traffic on the freeway",
      choices: [
        "A. 5-10 mph slower than the traffic on the freeway",
        "B. The posted speed limit for the freeway",
        "C. At or near the same speed as the traffic on the freeway",
        "D. As fast as possible to blend with traffic",
      ],
    },
    {
      question: "What is the hand signal for a left turn?",
      answer: "A. Arm extended straight out",
      choices: [
        "A. Arm extended straight out",
        "B. Arm extended upward",
        "C. Arm extended downward",
        "D. Arm waving",
      ],
    },
    {
      question: "What is the best way to handle a curve?",
      answer: "B. Slow down before entering the curve",
      choices: [
        "A. Accelerate into the curve",
        "B. Slow down before entering the curve",
        "C. Brake hard while in the curve",
        "D. Maintain your speed through the curve",
      ],
    },
    {
      question:
        "When parallel parking, you must be within how many inches of the curb?",
      answer: "B. 12 inches",
      choices: ["A. 6 inches", "B. 12 inches", "C. 18 inches", "D. 24 inches"],
    },
    {
      question:
        "What should you do if you approach a traffic signal that is not working?",
      answer: "B. Treat it as a four-way stop",
      choices: [
        "A. Stop and wait for the signal to start working",
        "B. Treat it as a four-way stop",
        "C. Proceed with caution",
        "D. Follow the directions of a traffic officer",
      ],
    },
    {
      question: "When are you allowed to pass another vehicle on the right?",
      answer: "D. When the vehicle is making or about to make a left turn",
      choices: [
        "A. Never",
        "B. Only on a one-way street",
        "C. When the vehicle is driving too slowly",
        "D. When the vehicle is making or about to make a left turn",
      ],
    },
    {
      question:
        "What should you do if you see an emergency vehicle with flashing lights stopped ahead?",
      answer: "B. Move over a lane if possible; otherwise, slow down",
      choices: [
        "A. Continue driving at the same speed",
        "B. Move over a lane if possible; otherwise, slow down",
        "C. Stop immediately",
        "D. Speed up to pass quickly",
      ],
    },
    {
      question:
        "What is the correct response if your car starts to hydroplane?",
      answer: "C. Take your foot off the gas pedal",
      choices: [
        "A. Brake hard to stop the vehicle",
        "B. Accelerate to regain traction",
        "C. Take your foot off the gas pedal",
        "D. Turn the steering wheel sharply",
      ],
    },
    {
      question: "What is the correct hand signal for a right turn?",
      answer: "B. Arm extended upward",
      choices: [
        "A. Arm extended straight out",
        "B. Arm extended upward",
        "C. Arm extended downward",
        "D. Arm waving",
      ],
    },
    {
      question: "How far ahead should you signal before making a turn?",
      answer: "C. At least 100 feet",
      choices: [
        "A. At least 50 feet",
        "B. At least 75 feet",
        "C. At least 100 feet",
        "D. At least 150 feet",
      ],
    },
    {
      question:
        "When driving at night, you should dim your headlights when you are within how many feet of a vehicle you are following?",
      answer: "B. 300 feet",
      choices: ["A. 100 feet", "B. 300 feet", "C. 500 feet", "D. 700 feet"],
    },
    {
      question:
        "What should you do if you approach a school bus that is stopped with its red lights flashing and stop sign extended?",
      answer:
        "C. Stop and wait until the red lights stop flashing and the stop sign is withdrawn",
      choices: [
        "A. Slow down and proceed with caution",
        "B. Pass the bus if no children are present",
        "C. Stop and wait until the red lights stop flashing and the stop sign is withdrawn",
        "D. Honk to alert the bus driver",
      ],
    },
    {
      question:
        "What is the correct action to take when a pedestrian is crossing the street at an intersection without a marked crosswalk?",
      answer: "B. Yield to the pedestrian",
      choices: [
        "A. Proceed with caution",
        "B. Yield to the pedestrian",
        "C. Honk to alert the pedestrian",
        "D. Speed up to pass before the pedestrian crosses",
      ],
    },
    {
      question: "When are you allowed to park in a handicap parking space?",
      answer: "C. Only if you have a handicap license plate or placard",
      choices: [
        "A. Anytime if the space is available",
        "B. Only during certain hours",
        "C. Only if you have a handicap license plate or placard",
        "D. Never",
      ],
    },
    {
      question: "What is the purpose of a shared center lane?",
      answer: "D. For vehicles making left turns from both directions",
      choices: [
        "A. For passing slower vehicles",
        "B. For emergency vehicles only",
        "C. For parking",
        "D. For vehicles making left turns from both directions",
      ],
    },
    {
      question:
        "How should you react when a traffic officer directs you to proceed through a red light?",
      answer: "A. Follow the officer's directions",
      choices: [
        "A. Follow the officer's directions",
        "B. Wait until the light turns green",
        "C. Ignore the officer and follow the traffic signals",
        "D. Stop and wait for further instructions",
      ],
    },
    {
      question: "What should you do if your brakes fail while you are driving?",
      answer:
        "C. Pump the brakes, shift to a lower gear, and use the emergency brake",
      choices: [
        "A. Shift to a higher gear",
        "B. Turn off the engine",
        "C. Pump the brakes, shift to a lower gear, and use the emergency brake",
        "D. Accelerate to maintain control",
      ],
    },
    {
      question: "What is the purpose of a 'No Passing Zone' sign?",
      answer: "A. To indicate that passing is not allowed in this area",
      choices: [
        "A. To indicate that passing is not allowed in this area",
        "B. To indicate that passing is allowed only at night",
        "C. To indicate that passing is allowed only during certain hours",
        "D. To indicate that passing is allowed with caution",
      ],
    },
    {
      question: "When must you yield to a pedestrian in a crosswalk?",
      answer: "D. Always",
      choices: [
        "A. Only if the pedestrian is on your side of the road",
        "B. Only if the pedestrian is in a marked crosswalk",
        "C. Only if the pedestrian is crossing on a green light",
        "D. Always",
      ],
    },
    {
      question: "What should you do when approaching a roundabout?",
      answer: "C. Yield to traffic in the roundabout and enter when safe",
      choices: [
        "A. Speed up to enter quickly",
        "B. Stop before entering",
        "C. Yield to traffic in the roundabout and enter when safe",
        "D. Enter without yielding",
      ],
    },
    {
      question:
        "What should you do if you are involved in a minor collision with a parked vehicle and you can't find the owner?",
      answer:
        "C. Leave a note with your contact information and report the incident to the police",
      choices: [
        "A. Leave immediately",
        "B. Wait for the owner to return",
        "C. Leave a note with your contact information and report the incident to the police",
        "D. Call your insurance company and leave",
      ],
    },
    {
      question: "When driving through a construction zone, you should:",
      answer: "B. Slow down and follow the posted speed limits",
      choices: [
        "A. Speed up to pass through quickly",
        "B. Slow down and follow the posted speed limits",
        "C. Ignore the construction signs",
        "D. Honk to alert workers of your presence",
      ],
    },
    {
      question:
        "What is the correct response to an approaching emergency vehicle using sirens and flashing lights?",
      answer: "A. Pull over to the right and stop",
      choices: [
        "A. Pull over to the right and stop",
        "B. Speed up to get out of the way",
        "C. Maintain your speed and direction",
        "D. Pull over to the left and stop",
      ],
    },
    {
      question: "When driving in rain, you should:",
      answer: "B. Increase your following distance",
      choices: [
        "A. Use your high-beam headlights",
        "B. Increase your following distance",
        "C. Drive faster to avoid hydroplaning",
        "D. Maintain the posted speed limit",
      ],
    },
    {
      question: "How far ahead should you look when driving in city traffic?",
      answer: "C. At least one block",
      choices: [
        "A. At least 100 feet",
        "B. At least 500 feet",
        "C. At least one block",
        "D. At least one mile",
      ],
    },
    {
      question:
        "What is the penalty for leaving the scene of an accident involving injuries?",
      answer: "C. Fines, imprisonment, and loss of driving privileges",
      choices: [
        "A. A warning",
        "B. A ticket with no fine",
        "C. Fines, imprisonment, and loss of driving privileges",
        "D. No penalty if it was not your fault",
      ],
    },
    {
      question: "When should you use your horn?",
      answer: "B. To alert other drivers to a potential accident",
      choices: [
        "A. To greet other drivers",
        "B. To alert other drivers to a potential accident",
        "C. To express anger",
        "D. To get a slow driver to move",
      ],
    },
    {
      question: "What should you do if you see a 'Wrong Way' sign?",
      answer: "C. Stop and back out of the lane if you can safely do so",
      choices: [
        "A. Continue driving in the same direction",
        "B. Speed up to get out of the way",
        "C. Stop and back out of the lane if you can safely do so",
        "D. Make a U-turn",
      ],
    },
    {
      question:
        "What is the first thing you should do if your vehicle starts to skid?",
      answer: "A. Take your foot off the gas pedal",
      choices: [
        "A. Take your foot off the gas pedal",
        "B. Steer in the direction of the skid",
        "C. Apply the brakes",
        "D. Steer in the opposite direction of the skid",
      ],
    },
    {
      question:
        "When turning left from a two-way street onto a one-way street, you should:",
      answer:
        "B. Begin the turn with your left wheel as close as possible to the yellow dividing line",
      choices: [
        "A. Begin the turn in the right lane",
        "B. Begin the turn with your left wheel as close as possible to the yellow dividing line",
        "C. Make a wide turn",
        "D. Turn from any lane",
      ],
    },
  ];

  let currentIndex = 0;
  let solvedIndex = 0;
  const solvedFlashcards = [];

  const cardNumber = document.getElementById("card-number");
  const cardFront = document.getElementById("card-front");
  const cardBack = document.getElementById("card-back");
  const choicesContainer = document.getElementById("choices");
  const flashcard = document.getElementById("flashcard");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const markIcon = document.getElementById("mark-icon");

  const solvedCardNumber = document.getElementById("solved-card-number");
  const solvedCardFront = document.getElementById("solved-card-front");
  const solvedCardBack = document.getElementById("solved-card-back");
  const solvedChoicesContainer = document.getElementById("solved-choices");
  const solvedFlashcard = document.getElementById("solved-flashcard");
  const solvedPrevBtn = document.getElementById("solved-prev-btn");
  const solvedNextBtn = document.getElementById("solved-next-btn");
  const unsolvedMarkIcon = document.getElementById("unsolved-mark-icon");

  function updateCard() {
    if (flashcards.length > 0) {
      cardNumber.textContent = `${currentIndex + 1} of ${flashcards.length}`;
      cardFront.textContent = flashcards[currentIndex].question;
      cardBack.textContent = flashcards[currentIndex].answer;
      choicesContainer.innerHTML = flashcards[currentIndex].choices
        .map((choice) => `<div>${choice}</div>`)
        .join("");
      markIcon.style.display = "block";
    } else {
      cardNumber.textContent = "All cards solved!";
      cardFront.textContent = "";
      cardBack.textContent = "";
      choicesContainer.innerHTML = "";
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
      solvedChoicesContainer.innerHTML = solvedFlashcards[solvedIndex].choices
        .map((choice) => `<div>${choice}</div>`)
        .join("");
      unsolvedMarkIcon.style.display = "block";
    } else {
      solvedCardNumber.textContent = "No solved cards.";
      solvedCardFront.textContent = "";
      solvedCardBack.textContent = "";
      solvedChoicesContainer.innerHTML = "";
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

  flashcard.addEventListener("click", flipCard);
  prevBtn.addEventListener("click", prevCard);
  nextBtn.addEventListener("click", nextCard);
  markIcon.addEventListener("click", markAsSolved);

  solvedFlashcard.addEventListener("click", flipSolvedCard);
  solvedPrevBtn.addEventListener("click", prevSolvedCard);
  solvedNextBtn.addEventListener("click", nextSolvedCard);
  unsolvedMarkIcon.addEventListener("click", markAsUnsolved);

  updateCard();
  updateSolvedCard();
});
