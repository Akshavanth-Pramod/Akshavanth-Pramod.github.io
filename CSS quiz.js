function checkAnswers(event) {

  event.preventDefault();

  const correctAnswers = {
    q1: 'a',
    q2: 'b',
    q3: 'b',
    q4: 'b',
    q5: 'b',
    q6: 'c',
    q7: 'b',
    q8: 'b',
    q9: 'a',
    q10: 'a',
    q11: 'c',
    q12: 'b',
    q13: 'b',
    q14: 'b',
    q15: 'b'
  };


  const correctAnswerTexts = {
    q1: 'Cascading Style Sheets',
    q2: '#header',
    q3: 'Padding',
    q4: 'Content, Padding, Border, Margin',
    q5: 'Applies lightblue background for screens smaller than 600px wide',
    q6: 'font-weight',
    q7: 'Changes the button color when hovered over',
    q8: 'Grid',
    q9: 'Group Selector',
    q10: 'max-width',
    q11: "Element's placement on the page",
    q12: 'rem',
    q13: 'The ID always overrides the class',
    q14: 'Gives it a full circular shape',
    q15: 'To apply styles based on device type or size'
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
