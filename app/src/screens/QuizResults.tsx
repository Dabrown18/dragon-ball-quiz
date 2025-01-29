import React, {FC} from 'react';
import {Text,  ImageBackground, View, TouchableOpacity} from 'react-native';
import questions from "@/app/src/questions";
import styles from './styles'

interface Props {
  score: number;
  resetQuiz: () => void;
}
const QuizResults: FC<Props> = ({score, resetQuiz}) => {
  return (
    <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.score}>Your Score: {score} / {questions.length}</Text>
        <TouchableOpacity
          style={styles.restartButton}
          onPress={resetQuiz}
        >
          <Text style={styles.optionText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
};

export default QuizResults;
