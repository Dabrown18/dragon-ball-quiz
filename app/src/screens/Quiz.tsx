import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import questions from '../questions';
import styles from './styles'
import QuizResults from "./QuizResults";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswerSelection = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback('');
      }, 1000);
    } else {
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback('');
    setShowResults(false);
  };

  if (showResults) {
    return (
      <QuizResults score={score} resetQuiz={resetQuiz} />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswerSelection(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        {feedback !== '' && <Text style={styles.feedback}>{feedback}</Text>}
      </View>
    </ImageBackground>
  );
}
