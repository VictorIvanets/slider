
// let Vimeo = require('vimeo').Vimeo;
// let client = new Vimeo("5834e89b54420cfc2ea0909cb3c8ece31c6f66b0", "QwP+ShkAogp002U0F9xYkW72pQJUgTHJinFk3vCtn/B2y3eoq/BsczMiltHr24BJBHuYIQXyf4ReD4K30qzeiP24RZX8AW8tOP0dTyuNK4ky/SSM6lvfObhtWYWy+pMh", "7cd9556412f6eb3910a52605f04d3846");



// //   client.request({
// //     method: 'GET',
// //     path: '/tutorial'
// //   }, function (error, body, status_code, headers) {
// //     if (error) {
// //       console.log(error);
// //     }

// //     console.log(body);
// //   })




// //   let file_name = "20240207_115024.mp4"
// //   client.upload(
// //     file_name,
// //     {
// //       'name': 'aqua',
// //       'description': 'video for test'
// //     },
// //     function (uri) {
// //       console.log('Your video URI is: ' + uri);
// //     },
// //     function (bytes_uploaded, bytes_total) {
// //       var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
// //       console.log(bytes_uploaded, bytes_total, percentage + '%')
// //     },
// //     function (error) {
// //       console.log('Failed because: ' + error)
// //     }
// //   )


// //   https://vimeo.com/910747596




// client.request('/videos/910747596', function (error, body, statusCode, headers) {
//             if (error) {
//               console.log('There was an error making the request.')
//               console.log('Server reported: ' + error)
//               return
//             }
//             console.log(body.link)
//             })



let offset = 0  
const sliderLine = document.querySelector(".container__slider__line") 
const addPopUp = document.getElementById("root")


document.querySelector(".container__slider__next").addEventListener('click', ()=>{
  offset = offset + 17
  if (offset > 68){
    offset = 68
  }
  sliderLine.style.left = `${-offset}rem`
})

document.querySelector(".container__slider__prev").addEventListener('click', ()=>{
  offset = offset - 17
  if (offset <= 0){
    offset = 0
  }
  sliderLine.style.left = `${-offset}rem`
})



document.querySelector(".container__slider__line").addEventListener('click', (e)=>{
  const videolink = e.target.alt
  addPopUp.innerHTML = ("")
  addPopUp.insertAdjacentHTML("beforeend",
  ` 
<div class="sliderbox__container">
      <iframe class="sliderbox__videoup" id="slider" src=${videolink} width="640" height="360" allow="" allowfullscreen frameborder="0"></iframe>
</div>
  `
  )
})

document.querySelector(".close").addEventListener('click', ()=>{
  addPopUp.innerHTML = ("")
})

