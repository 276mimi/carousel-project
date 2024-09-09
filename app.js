let slideIndex = 0;

const allslides = document.querySelectorAll('.slide')
const totalSlides = allslides.length;
console.log(totalSlides);

const showSlide = (index) => {
    allslides.forEach((eachslide, i) => {
        eachslide.classList.toggle('active', i === index );
    })
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

    console.log(slideIndex = (slideIndex + 1) % totalSlides);
    
const  nextSlide = () => {
    slideIndex = (slideIndex + 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
};

const prevSlide = () => {
    slideIndex = (slideIndex - 1) % totalSlides;
    showSlide(slideIndex)
}

document.querySelector('.next').addEventListener('click', nextSlide);

document.querySelector('.prev').addEventListener('click', prevSlide

)
// setInterval(nextSlide, 3000); 
// Auto slide every second