const questions = [
  {
    question: "Welche der folgenden Aussagen beschreibt die SWOT-Analyse korrekt?",
    options: [
      "Sie analysiert interne Stärken und Schwächen.",
      "Sie berücksichtigt externe Chancen und Risiken.",
      "Sie wird ausschließlich für die Projektplanung verwendet.",
      "Sie dient zur Identifikation und Gewichtung von Ressourcen."
    ],
    correctAnswers: [0, 1],
    feedback: "Die SWOT-Analyse hilft dir, sowohl interne als auch externe Faktoren strategisch zu bewerten."
  },
  {
    question: "Was ist eine zentrale Rolle des SCRUM-Masters?",
    options: [
      "Entscheidung über Prioritäten im Product Backlog.",
      "Entfernung von Hindernissen für das Team.",
      "Technische Umsetzung von Anforderungen.",
      "Organisation und Moderation von Meetings."
    ],
    correctAnswers: [1, 3],
    feedback: "Der SCRUM-Master sorgt für die Einhaltung des SCRUM-Prozesses und unterstützt das Team."
  },
  {
    question: "Welches Ziel verfolgt das Wasserfallmodell?",
    options: [
      "Klar definierte Phasen, die sequentiell bearbeitet werden.",
      "Flexibilität bei sich ändernden Anforderungen.",
      "Iterative Entwicklung mit regelmäßigen Feedback-Schleifen.",
      "Agile Anpassung an neue Anforderungen."
    ],
    correctAnswers: [0],
    feedback: "Das Wasserfallmodell eignet sich für Projekte mit klar definierten und stabilen Anforderungen."
  },
  {
    question: "Was sind die vier Schritte des PDCA-Zyklus?",
    options: [
      "Planen, Delegieren, Kontrollieren, Abschließen.",
      "Planen, Durchführen, Checken, Anpassen.",
      "Prüfen, Diskutieren, Kontrollieren, Anpassen.",
      "Planen, Entwickeln, Kontrollieren, Analysieren."
    ],
    correctAnswers: [1],
    feedback: "Der PDCA-Zyklus besteht aus Planen, Durchführen, Checken und Anpassen."
  },
  {
    question: "Welcher Grundsatz ist zentral für ITIL4?",
    options: [
      "Integration agiler Prinzipien in das Service Management.",
      "Vereinheitlichung aller Prozesse in der IT.",
      "Ausschließlicher Fokus auf technische Anforderungen.",
      "Minimierung der Kundeninteraktion im Serviceprozess."
    ],
    correctAnswers: [0],
    feedback: "ITIL4 integriert agile Prinzipien, um flexiblere Serviceprozesse zu ermöglichen."
  },
  {
    question: "Welche Maßnahme ist ein Beispiel für Total Quality Management (TQM)?",
    options: [
      "Kontinuierliche Verbesserung der Prozesse durch Mitarbeiterbeteiligung.",
      "Fokussierung auf kurzfristige Kostensenkung.",
      "Strikte Trennung von Planung und Umsetzung."
    ],
    correctAnswers: [0],
    feedback: "TQM setzt auf kontinuierliche Verbesserung unter Einbeziehung aller Mitarbeiter."
  },
  {
    question: "Wofür steht EFQM?",
    options: [
      "Enterprise Framework for Quality Measurement.",
      "Efficient Framework for Quality Management.",
      "European Foundation for Quality Management.",
      "European Foundation for Quantitative Methods."
    ],
    correctAnswers: [2],
    feedback: "EFQM steht für 'European Foundation for Quality Management' und bietet ein Rahmenwerk zur Organisationsverbesserung."
  },
  {
    question: "Was ist der Zweck eines Lastenhefts?",
    options: [
      "Es beschreibt die Anforderungen aus der Sicht des Auftraggebers.",
      "Es definiert technische Details der Umsetzung.",
      "Es enthält Testpläne und Abnahmekriterien.",
      "Es dient zur Budgetkontrolle während der Projektdurchführung."
    ],
    correctAnswers: [0],
    feedback: "Ein Lastenheft beschreibt die Anforderungen und Ziele aus der Sicht des Auftraggebers."
  },
  {
    question: "Welche Informationen enthält ein Pflichtenheft?",
    options: [
      "Technische Spezifikationen zur Umsetzung der Anforderungen.",
      "Projektziele aus der Perspektive des Auftraggebers.",
      "Kritische Stakeholder-Erwartungen.",
      "Langfristige Finanzierungspläne."
    ],
    correctAnswers: [0],
    feedback: "Das Pflichtenheft beschreibt, wie die Anforderungen technisch umgesetzt werden sollen."
  },
  {
    question: "Welches Element gehört zu einem Gantt-Diagramm?",
    options: [
      "Zeitliche Darstellung von Projektaufgaben.",
      "Darstellung von Meilensteinen.",
      "Kostenplanung und Budgetübersicht.",
      "Stakeholder-Analyse."
    ],
    correctAnswers: [0, 1],
    feedback: "Ein Gantt-Diagramm visualisiert Aufgaben und deren zeitliche Abhängigkeiten und zeigt Meilensteine an."
  },
  {
    question: "Was ist die Netzplantechnik?",
    options: [
      "Ein Framework zur Ressourcenverwaltung.",
      "Eine Methode zur Planung und Steuerung von Projekten.",
      "Ein Werkzeug für Kostenanalysen.",
      "Ein Ansatz zur Qualitätssicherung."
    ],
    correctAnswers: [1],
    feedback: "Die Netzplantechnik dient der Planung und Steuerung von Projekten."
  },
  {
    question: "Welche Ziele verfolgt ein Kanban-Board?",
    options: [
      "Visualisierung des Arbeitsfortschritts.",
      "Unterstützung der Priorisierung von Aufgaben.",
      "Automatisierung von Prozessen.",
      "Festlegung von Teamrollen."
    ],
    correctAnswers: [0, 1],
    feedback: "Kanban-Boards machen den Arbeitsfortschritt transparent und unterstützen die Priorisierung."
  },
  {
    question: "Welche Ebene des 4-Ohren-Modells spricht an, wenn jemand eine Aufforderung ausspricht?",
    options: [
      "Appell-Ohr.",
      "Beziehungs-Ohr.",
      "Selbstkundgabe-Ohr.",
      "Sach-Ohr."
    ],
    correctAnswers: [0],
    feedback: "Das Appell-Ohr nimmt die Aufforderung hinter einer Aussage wahr."
  },
  {
    question: "Welche der folgenden Aussagen beschreibt ein Projekt korrekt?",
    options: [
      "Es ist zeitlich begrenzt.",
      "Es hat klare Ziele.",
      "Es erfordert iterative Entwicklung.",
      "Es umfasst wiederholbare Prozesse."
    ],
    correctAnswers: [0, 1],
    feedback: "Ein Projekt ist zeitlich begrenzt und verfolgt klare Ziele."
  },
  {
    question: "Was umfasst das magische Dreieck des Projektmanagements?",
    options: [
      "Budget, Risiko, Ressourcen.",
      "Aufgaben, Rollen, Kommunikation.",
      "Kosten, Zeit, Qualität.",
      "Prioritäten, Meilensteine, Abhängigkeiten."
    ],
    correctAnswers: [2],
    feedback: "Das magische Dreieck besteht aus Kosten, Zeit und Qualität."
  },
  {
    question: "Was gehört zum Qualitätsmanagement in Projekten?",
    options: [
      "Einführung eines kontinuierlichen Verbesserungsprozesses.",
      "Einhaltung von Zeit- und Budgetvorgaben.",
      "Erstellung eines Risiko-Management-Plans.",
      "Definierung von Stakeholder-Anforderungen."
    ],
    correctAnswers: [0, 3],
    feedback: "Qualitätsmanagement umfasst die kontinuierliche Verbesserung und die Definition von Anforderungen."
  },
  {
    question: "Was ist ein Ziel von IT Service Management (ITSM)?",
    options: [
      "Standardisierung aller IT-Prozesse in einer Organisation.",
      "Reduzierung von Kundeninteraktionen.",
      "Erbringung von IT-Services, die den Geschäftszielen entsprechen.",
      "Fokus auf technische Innovationen ohne Kundenbeteiligung."
    ],
    correctAnswers: [2],
    feedback: "ITSM zielt darauf ab, IT-Services bereitzustellen, die den Geschäftszielen entsprechen."
  },
  // Weitere Fragen können hinzugefügt werden
];

let currentQuestionIndex = 0; // Zum Verfolgen der aktuellen Frage
const quizForm = document.getElementById("quiz-form");
const resultsDiv = document.getElementById("results");
const submitButton = document.getElementById("submit-button");

// Quiz für die aktuelle Frage rendern
function renderQuestion(index) {
  quizForm.innerHTML = ""; // Formular leeren
  const question = questions[index];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `<h2>Frage ${index + 1}: ${question.question}</h2>`;
  const answersDiv = document.createElement("div");
  answersDiv.classList.add("answers");

  question.options.forEach((option, i) => {
    const id = `question-${index}-answer-${i}`;
    answersDiv.innerHTML += `
      <label>
        <input type="checkbox" id="${id}" name="question-${index}" value="${i}">
        ${option}
      </label>`;
  });

  questionDiv.appendChild(answersDiv);
  quizForm.appendChild(questionDiv);

  submitButton.textContent = index < questions.length - 1 ? "Weiter" : "Quiz abschließen";
}

// Ergebnis für die aktuelle Frage auswerten
function evaluateQuestion(index) {
  const question = questions[index];
  const selectedAnswers = Array.from(
    document.querySelectorAll(`input[name="question-${index}"]:checked`)
  ).map((input) => parseInt(input.value));

  // Vergleiche die ausgewählten Antworten mit den richtigen
  const isCorrect =
    selectedAnswers.length === question.correctAnswers.length &&
    selectedAnswers.every((answer) => question.correctAnswers.includes(answer));

  // Feedback für die aktuelle Frage
  const correctAnswersText = question.correctAnswers
    .map((i) => question.options[i])
    .join(", ");
  const feedback = isCorrect
    ? `<p><strong>Korrekt!</strong> ${question.feedback}</p>`
    : `<p><strong>Falsch!</strong> Die korrekten Antworten sind: ${correctAnswersText}</p>`;

  resultsDiv.innerHTML = feedback;
  resultsDiv.style.display = "block";
}

// Weiter zur nächsten Frage
function nextQuestion() {
  resultsDiv.style.display = "none"; // Feedback ausblenden

  if (currentQuestionIndex < questions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    resultsDiv.innerHTML = `<p>Quiz beendet! Vielen Dank fürs Mitmachen.</p>`;
    submitButton.style.display = "none";
  }
}

// Initialisiere das Quiz
renderQuestion(currentQuestionIndex);

submitButton.addEventListener("click", () => {
  evaluateQuestion(currentQuestionIndex);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(nextQuestion, 3000); // Nach 3 Sekunden zur nächsten Frage wechseln
  } else {
    nextQuestion();
  }
});