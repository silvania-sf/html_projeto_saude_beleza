window.sr = ScrollReveal({reset: true}); //reseta tudo o que estiver no scroll

//Cria o reveal e especifica o que quer configurar
//Duração: tempo que demora para aparecer na tela (em ms)
sr.reveal('.grid.conteudo', {duration: 3000});
sr.reveal('.video', {duration: 7000});

//Fazer movimento: eixos X, Y e Z.
//Para mudar efeito: alterar valores de X, Y e Z e testar.
sr.reveal('.grid-equipe', {rotate: {x:0, y:100, z:0}, duration: 6000});