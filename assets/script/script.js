const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active){
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }
  
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: 'smooth' });
    
      toggleMenu(event);
  });
});

// api github

let sobre = document.querySelector("#box-sobre");

async function getGitHubAPI(){
  try {
    const dadosPerfil = await fetch("https://api.github.com/users/hrvieira");
    const perfil = await dadosPerfil.json();

    let conteudo = `
              <img src="${perfil.avatar_url}" alt="Foto do perfil do GitHub - ${perfil.name}" id="busto">
              <article id="box-quem-sou">
                    <h2 class="titulo-secundario">Quem sou eu?</h2>
                    <p id="texto-quem-sou">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni deleniti modi sit laudantium totam!</p>
                    <div id="div-quem-sou">
                         <a href="${perfil.html_url}" id="bt-github" target="_blank">Github</a>
                         <p>${perfil.followers} Seguidores</p>
                         <p>${perfil.public_repos} Repositórios</p>
                    </div>
              </article>
    `;

    document.getElementById("box-sobre").innerHTML += conteudo;
  } catch (error) {
    console.log(error)
  }
}

getGitHubAPI();