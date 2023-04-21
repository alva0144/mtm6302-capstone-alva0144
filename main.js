document.querySelector('.generate-image').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=gx78pminbhpAr1JcZ9JPhmWAUG1Lh8T1uOTIMRIm&date=${choice}`
    
    fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.getElementById('explanation').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}