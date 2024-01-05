document.addEventListener('DOMContentLoaded', function () {
    const accordianContainer = document.querySelector('.accordian-container');

    accordianContainer.addEventListener('click', function (event) {
        const clickedBtn = event.target.closest('.accordian-btn');

        if (clickedBtn) {
            clickedBtn.classList.toggle('active');

            const accordianDescription = clickedBtn.nextElementSibling;
            const plusIcon = clickedBtn.querySelector('.plus-icon');
            const minusIcon = clickedBtn.querySelector('.minus-icon');

            if (accordianDescription.style.maxHeight) {
                accordianDescription.style.maxHeight = null;
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            } else {
                accordianDescription.style.maxHeight = accordianDescription.scrollHeight + 'px';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            }
        }
    });
});
