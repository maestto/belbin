import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import QuestionSet from "./components/questionSet";

const steps = [
    {
        label: "Какой вклад я могу внести в работу команды",
        questions: ["Раздел1 Вопрос1", "Раздел1 Вопрос2", "Раздел1 Вопрос1", "Раздел1 Вопрос2", "Раздел1 Вопрос3", "Раздел1 Вопрос1", "Раздел1 Вопрос2", "Раздел1 Вопрос3"]
    },
    {
        label: 'Мои недостатки, которые могут проявиться в командной работе',
        questions: ["Раздел2 Вопрос1", "Раздел2 Вопрос2", "Раздел2 Вопрос3"]
    },
    {
        label: 'Участие в совместном проекте',
        questions: ["Раздел3 Вопрос1", "Раздел3 Вопрос2", "Раздел3 Вопрос3"]
    },
    {
        label: 'Особенности моего стиля работы в команде',
        questions: ["Раздел4 Вопрос1", "Раздел4 Вопрос2", "Раздел4 Вопрос3"]
    },
    {
        label: 'Я получаю удовольствие от работы, потому что',
        questions: ["Раздел5 Вопрос1", "Раздел5 Вопрос2", "Раздел5 Вопрос3"]
    },
    {
        label: 'Если мне неожиданно предложат решить трудную задачу за ограниченное время с незнакомыми людьми, то',
        questions: ["Раздел6 Вопрос1", "Раздел6 Вопрос2", "Раздел6 Вопрос3"]
    },
    {
        label: 'Проблемы, с которыми я сталкиваюсь, работая в команде',
        questions: ["Раздел7 Вопрос1", "Раздел7 Вопрос2", "Раздел7 Вопрос3"]
    },
];

const QuestionsPage = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBackStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleResetStepper = () => setActiveStep(0);

    return (
        <Box sx={{ maxWidth: 1200 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                            <QuestionSet id={index} questionsArray={step.questions}/>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNextStep}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Завершить тест' : 'Следующий раздел'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBackStep}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Вернуться назад
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Button onClick={handleResetStepper} sx={{ mt: 1, mr: 1 }}>
                        Завершить
                    </Button>
                </Paper>
            )}
        </Box>
    );
};

export default QuestionsPage