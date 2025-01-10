function checkAnswers(event) {
  // Prevent form from submitting to avoid page reload
  event.preventDefault();

  // Correct answers for each question
  const correctAnswers = {
    q1: 'a',
    q2: 'a',
    q3: 'a',
    q4: 'b',
    q5: 'b',
    q6: 'a',
    q7: 'a',
    q8: 'b',
    q9: 'b',
    q10: 'c',
    q11: 'a',
    q12: 'c',
    q13: 'b',
    q14: 'a',
    q15: 'a'
  };

  // Text for correct answers
  const correctAnswerTexts = {
    q1: 'Hypertext Markup Language',
    q2: '&lt;h1&gt;',
    q3: 'To define a hyperlink',
    q4: 'src',
    q5: 'Unordered list',
    q6: '&lt;table&gt;',
    q7: 'alt',
    q8: '&lt;form&gt;',
    q9: '&lt;p&gt;',
    q10: 'The footer of a document',
    q11: '&lt;a&gt;',
    q12: '&lt;img&gt;',
    q13: '&lt;section&gt;',
    q14: '&lt;ol&gt;',
    q15: '&lt;header&gt;'
  };

  let score = 0;
  let resultHtml = "<h2>Results:</h2><ul>";

  // Loop through each question
  for (let i = 1; i <= 15; i++) {
    const questionId = "q" + i;
    const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = correctAnswers[questionId];
      const correctAnswerText = correctAnswerTexts[questionId];

      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        score++;
        resultHtml += `<li>Question ${i}: Correct! The answer is <strong>${correctAnswerText}</strong>.</li>`;
      } else {
        resultHtml += `<li>Question ${i}: Incorrect! The correct answer is <strong>${correctAnswerText}</strong>.</li>`;
      }
    } else {
      resultHtml += `<li>Question ${i}: No answer selected. The correct answer is <strong>${correctAnswerTexts[questionId]}</strong>.</li>`;
    }
  }

  // Display the result with score
  resultHtml += `</ul><h3>Your Score: ${score} out of 15</h3>`;

  // Show the result below the quiz
  document.getElementById("result").innerHTML = resultHtml;
}
