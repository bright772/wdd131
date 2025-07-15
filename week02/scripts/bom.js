const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.innerHTML = input.value.trim();
        deleteButton.textContent = '❌';
        // deleteButton.ariaLabel = 'Remove this chapter';
        deleteButton.setAttribute('aria-label', 'Remove this chapter');
        li.append(' ', deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        input.value = '';
        input.focus();
    }
});

