// ==========================================
// CONFIG
// ==========================================
const fields = [
    { id: 'name', errorId: 'nameError' },
    { id: 'email', errorId: 'emailError' },
    { id: 'subject', errorId: 'subjectError' },
    { id: 'message', errorId: 'messageError' }
];

const submitButton = document.getElementById('submit-btn');
const maxWords = 100;
const minWords = 20;

// ==========================================
// UTILITIES
// ==========================================
function getWordCount(text) {
    return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function isEmpty(value) {
    return value.trim() === "";
}

function getValues() {
    return {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value
    };
}

// ==========================================
// VALIDATION STATE CHECK
// ==========================================
function allValid() {
    const v = getValues();
    return (
        v.name !== "" &&
        v.email !== "" &&
        v.subject !== "" &&
        getWordCount(v.message) >= minWords
    );
}

// Enable/Disable button globally
function updateSubmitState() {
    submitButton.disabled = !allValid();
}

// ==========================================
// FIELD VALIDATION FOR TEXT INPUTS
// ==========================================
fields.forEach(({ id, errorId }) => {
    const input = document.getElementById(id);
    const error = document.getElementById(errorId);

    if (!input) return;

    input.addEventListener('blur', () => {
        // Special handling for message box (word count)
        //if (id === 'message') return;

        if (isEmpty(input.value)) {
            error.style.display = "block";
            input.style.borderColor = "red";
        } else {
            error.style.display = "none";
            input.style.borderColor = "";
        }

        updateSubmitState();
    });

    input.addEventListener('input', () => {
        if (!isEmpty(input.value)) {
            error.style.display = "none";
            input.style.borderColor = "";
        }
        updateSubmitState();
    });
});

// ==========================================
// WORD COUNT VALIDATION (MESSAGE TEXTAREA)
// ==========================================
(function setupMessageBox() {
    const textarea = document.getElementById('message');
    const error = document.getElementById('messageError');

    textarea.addEventListener('input', () => {
        const count = getWordCount(textarea.value);

        if (count === 0) {
            error.style.display = "none";
        }
        else if (count < minWords) {
            error.style.display = "block";
            error.style.color = "red";
            error.innerHTML = `${count} / <span style="color: green;">${maxWords} words</span>`;
        }
        else if (count <= maxWords) {
            error.style.display = "block";
            error.style.color = "green";
            error.innerHTML = `${count} / ${maxWords} words`;
        }
        else if (count > maxWords) {
            error.style.display = "block";
            error.style.color = "red";
            error.innerHTML = "Maximum word count reached!";
            // Trim text to max words
            const trimmed = textarea.value
                .trim()
                .split(/\s+/)
                .slice(0, maxWords)
                .join(" ");
            textarea.value = trimmed;
        }

        updateSubmitState();
    });

    // Prevent pasting over the limit
    textarea.addEventListener('paste', e => {
        const currentWords = getWordCount(textarea.value);
        const pastedWords = getWordCount(e.clipboardData.getData("text"));

        if (currentWords + pastedWords > maxWords) {
            e.preventDefault();
            error.style.display = "block";
            error.style.color = "red";
            error.innerHTML = "Maximum word count exceeded!";
        }
    });
})();

// ==========================================
// CLEAR INPUTS
// ==========================================
function clearInputs() {
    fields.forEach(f => {
        document.getElementById(f.id).value = "";
    });
    updateSubmitState();
}

// ==========================================
// SUBMIT HANDLER
// ==========================================
submitButton.addEventListener("click", function () {

    const params = getValues();

    console.log("Sending Message...", params);

    // Example (replace with emailJS)
    if (allValid()) 
    {
        // Send to me
        emailjs.send("service_R@gn@rok17.35", "template_autoMe", params)
        .then(() => console.log("Message sent to owner"))
        .catch((err) => console.error("Owner send error", err));

        // Send to sender
         emailjs.send("service_R@gn@rok17.35", "template_autoReply", params)
        .then(() => {hideLoadingBar(); showStatus(); clearInputs()})
        .catch((err) => {hideLoadingBar(); showError(); showStatus()});
    }
    else 
    {
        updateSubmitState()
        hideLoadingBar()
    }

});
