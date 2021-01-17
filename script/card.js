const img = document.querySelector('.main-img');
const source = img.src;
const text = document.querySelector('.card-text');
const person = document.querySelector('.author-name');
const role = document.querySelector('.author-role');

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

nextBtn.addEventListener('click', () => {
    img.src = 'images/image-john.jpg';
    text.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`;
    person.textContent = 'John Tarkpor';
    role.textContent = 'Junior Front-end Developer'
})
prevBtn.addEventListener('click', () => {
    img.src = 'images/image-tanya.jpg';
    text.textContent = `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`;
    person.textContent = 'Tanya Sinclair';
    role.textContent = 'UX Engineer'
})