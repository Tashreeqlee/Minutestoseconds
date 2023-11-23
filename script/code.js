const minutesInput = document.getElementById('minutesInput');
        const convertButton = document.getElementById('convertButton');
        const result = document.getElementById('result');

        convertButton.addEventListener('click', () => {
            const minutes = parseInt(minutesInput.value);
            const seconds = minutes * 60;
            result.textContent = `${minutes} minutes is equal to ${seconds} seconds.`;
        });