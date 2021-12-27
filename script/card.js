const content = [
    {
        id:"1",
        text:`“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
        name:"Tanya Sinclair",
        role:"UX Engineer"
    },
    {
        id:"2",
        text:`“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
        name:"John Tarkpor",
        role:"Junior Front-end Developer"
    }
];
const img = document.querySelector('.image-slider__image');
let imgSource = img.src;
const text = document.querySelector('.testimonial__quote');
const person = document.querySelector('.testimonial__name');
const role = document.querySelector('.testimonial__role');

const btns = document.querySelectorAll('.btn')
const changeSlide = () =>{
    if(person.textContent === content[0].name){
        img.src = "images/image-john.jpg"
        person.textContent = content[1].name;
        role.textContent = content[1].role;
        text.textContent = content[1].text;
    }
    else{
        img.src = "images/image-tanya.jpg"
        person.textContent = content[0].name;
        role.textContent = content[0].role;
        text.textContent = content[0].text;
    }
}
btns.forEach(btn => {
    btn.addEventListener('click', changeSlide)
});