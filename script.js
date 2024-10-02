document.querySelector('button').addEventListener('click', function() {
    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('lista-horarios').appendChild(li);
    input.value = '';
});
