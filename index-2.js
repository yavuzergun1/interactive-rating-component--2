const submitButton= document.querySelector('.onayla');
const mainContainer= document.querySelector('.container-main');
const ratingContainer= document.querySelector('.container-rating');
const ratings= document.querySelector('.nums');
const thankU= document.querySelector('.container-thankU-none')
// const thankUContainer= document.querySelector('container-thankU');

ratings.addEventListener('click',ratingYaz);
let rating = 0;

function ratingYaz(e){
    
e.preventDefault();
console.log(e.target.textContent);
return rating= e.target.textContent;
}

submitButton.addEventListener('click', calistir);

function calistir(e){
    e.preventDefault();
    
    thankU.className='container-thankU-block';
    thankU.innerHTML= `<img src="images/illustration-thank-you.svg" alt="">
    <div class="selected"> 
      <p>You selected ${rating} out of 5</p>
    </div>
    
      <h1>Thank you!</h1>
      
    
      <p> We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
      </p>`;
    
}