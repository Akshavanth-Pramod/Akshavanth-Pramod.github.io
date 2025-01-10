function checkAnswers(event) {
  event.preventDefault();

  const correctAnswers = {
    q1: 'b',
    q2: 'd',
    q3: 'b',
    q4: 'a',
    q5: 'a',
    q6: 'b',
    q7: 'c',
    q8: 'a',
    q9: 'c',
    q10: 'a',
    q11: 'b',
    q12: 'c',
    q13: 'b',
    q14: 'd',
    q15: 'a'
  };

  const correctAnswerTexts = {
    q1: 'Adding dynamic and interactive features to web pages',
    q2: 'All of the above',
    q3: 'myFunction();',
    q4: 'object',
    q5: 'To call a function when an event occurs',
    q6: 'Boolean',
    q7: 'Both a and b',
    q8: 'push()',
    q9: 'Character',
    q10: '// This is a comment',
    q11: 'Changes the text content of an element',
    q12: 'fruits[1]',
    q13: 'Respect block scope',
    q14: 'No keyword is required',
    q15: 'Changes the content of the first &lt;h1&gt; element to "Updated!"'
  };

  let score = 0;
  let resultHtml = "<h2>Results:</h2><ul>";

  for (let i = 1; i <= 15; i++) {
    const questionId = "q" + i;
    const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = correctAnswers[questionId];
      const correctAnswerText = correctAnswerTexts[questionId];

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

  resultHtml += `</ul><h3>Your Score: ${score} out of 15</h3>`;

  document.getElementById("result").innerHTML = resultHtml;
}
