document.addEventListener('DOMContentLoaded', () => {

    (new Form()).init();
});

class Form {

    init() {
        this.enableInputValidator();
        this.enableSelectValidator();
        this.enableTextAreaValidator();
        this.enableClipChecked();
    }

    enableInputValidator() {
        const inputs = document.querySelectorAll('input.invalid');
        inputs.forEach(input => {
            input.addEventListener('keyup', () => {
                input.classList.remove('invalid');

                const validationError = input.closest('.relative')?.nextElementSibling;
                if (validationError?.classList.contains('validation-error')) {
                    validationError.remove();
                }
            });
        });
    }

    enableSelectValidator() {
        const selects = document.querySelectorAll('select.invalid');
        selects.forEach(select => {
            select.addEventListener('change', () => {
                select.classList.remove('invalid');

                const validationError = select.closest('.relative')?.nextElementSibling;
                if (validationError?.classList.contains('validation-error')) {
                    validationError.remove();
                }
            });
        });
    }

    enableTextAreaValidator() {
        const textareas = document.querySelectorAll('textarea.invalid');
        textareas.forEach(textarea => {
            textarea.addEventListener('keyup', () => {
                textarea.classList.remove('invalid');

                const validationError = textarea.closest('.relative')?.nextElementSibling;
                if (validationError?.classList.contains('validation-error')) {
                    validationError.remove();
                }
            });
        });
    }

 enableClipChecked() {
    const clips = document.querySelectorAll('.clip-checked');

    clips.forEach(clip => {
        const checkbox = clip.querySelector('input[type="checkbox"]');
        if (!checkbox || checkbox.disabled) return;

        if (checkbox.checked) {
            clip.classList.add('active');
        }

        checkbox.addEventListener('change', () => {
            clip.classList.toggle('active', checkbox.checked);
        });

        clip.addEventListener('click', e => {
            if (e.target === checkbox || clip.querySelector('label')?.contains(e.target)) {
                return;
            }

            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });
}



}
