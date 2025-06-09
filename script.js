fetch('livros.json')
  .then(res => res.json())
  .then(dados => {
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = '';

    Object.keys(dados).forEach(categoria => {
      const section = document.createElement('section');
      const h2 = document.createElement('h2');
      h2.textContent = categoria;
      section.appendChild(h2);

      const ul = document.createElement('ul');
      dados[categoria].forEach(livro => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="titulo">${livro.titulo}</span> - 
                        <span class="autor">${livro.autor}</span> 
                        (<span class="ano">${livro.ano}</span>)`;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      conteudo.appendChild(section);
    });
  })
  .catch(error => {
    document.getElementById('conteudo').innerHTML = 'Erro ao carregar os livros.';
    console.error('Erro ao buscar os dados:', error);
  });
