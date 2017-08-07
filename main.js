let info = document.querySelector('.info')
let bio = document.querySelector('.bio')
let photo = document.querySelector('.photo')

  let req = new XMLHttpRequest();
  req.open("GET", "https://api.github.com/users/kylearora");
  req.addEventListener('load', function(){
    let data = JSON.parse(this.responseText);
      console.log(data)

      bio.innerHTML = `${data.bio}`
      photo.innerHTML = `<img src=${data.avatar_url}>`;

      info.innerHTML = `

    <span class="infoLabels">Name:</span>  ${data.name} <br>
    <span class="infoLabels">GitHub URL:</span> <a href="${data.html_url}">${data.login}</a><br>
    <span class="infoLabels">Email:</span> <a href="mail.to:kylearora@gmail.com">kylearora@gmail.com</a><br>
    <span class="infoLabels">Company:</span>  ${data.company} <br>
    <span class="infoLabels">Website:</span> <a href="${data.blog}">kylearora.com</a>

      `;
})
req.send()
