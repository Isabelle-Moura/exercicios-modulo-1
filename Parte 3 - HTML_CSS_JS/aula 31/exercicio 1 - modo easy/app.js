const expandirTexto = (id) => {  

    const content = document.getElementById(id);
    content.classList.toggle('show')
}

//Código que fiz, mas não gostei do resultado.
//     let question = document.getElementById("question1");
//     question.style.display = "none";
  
//   let answer = document.getElementById("answer1");
//   answer.innerHTML = `
//   <div class="display-flex">
//   <span> O que é a Arnia?</span>
//   <button onclick="mostraOculta()">Expandir</button>
//   </div>
//   <p>A Arnia é uma empresa que faz parte do Grupo Linkcom, herdando mais de 25 anos de experiência no mercado de tecnologia, como também a bagagem de já ter treinado centenas de profissionais da área de tecnologia através da sua jornada. Profissionais que hoje trabalham tanto em startups em ascensão no mercado, com ótimas remunerações e condições de trabalho, como também empresas de grande renome e reconhecimento, como a Amazon.</p>`;
//   answer.style.display = "block";