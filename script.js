document.addEventListener('DOMContentLoaded', () => {
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const formSteps = document.querySelectorAll('.form-step');
    const stepperSteps = document.querySelectorAll('.stepper .step');

    let currentStep = 1;

    // Função para atualizar a interface
    function updateFormSteps() {
        // Atualiza a etapa do formulário
        formSteps.forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`#step-${currentStep}`).classList.add('active');

        // Atualiza o passo a passo no topo (stepper)
        stepperSteps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    // Evento para os botões "Continuar"
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length) {
                currentStep++;
                updateFormSteps();
            }
        });
    });

    // Evento para os botões "Voltar"
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateFormSteps();
            }
        });
    });
});