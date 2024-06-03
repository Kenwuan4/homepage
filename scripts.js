function toggleSection() {
    var section = document.getElementById('personal__section');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}