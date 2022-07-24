# XP Wallet

## Sobre

 ### Informações gerais sobre o Projeto
Neste projeto você conseguirá adicionar e remover saldo em sua conta, comprar ações do mercado de ações para sua conta, vender da sua conta para o mercado de ações.

Está aplicação utiliza `React` como framework, para manipular os dados foram utilizados `Hooks` como `useState`, `useEffect`, sendo que todos os dados estão sendo registrados no localStorage e tratados la dentro.

Decidi usar o `localStorage` para salvar os dados e carregar com o `useEffect` sempre que um componente for montado, assim consigo com que todas as paginas possam acessar os valores salvos.

Desde o email do usuário até as ações do usuário e ações compradas estão salvas no localStorage.

As rotas foram desenvolvidas utilizando o `React Router 5`.

Toda a estilização da aplicação foi feita com `React-Bootstrap` e `Bootstrap 5`.

O projeto está totalmente responsivo para mobile.

[Clique Aqui](https://xp-wallet.000webhostapp.com/) para visualizar o projeto no seu navegador.


### Como rodar o projeto
<details>
  <summary markdown="span"><strong> Descrição dos comandos necessários</strong></summary><br />
  
- Clone o repositório:

```
    git clone https://github.com/Underewarrr/xp-wallet
```

- Vá até a pasta onde o projeto está:

```
    cd xp-wallet
```

- Dentro da pasta do projeto instale as dependências necessárias:

```
    npm install
```

- Depois de instalada as dependências, execute o projeto:

```
    npm start
```


</details>
<details>
<summary markdown="span"><strong> Tecnologias utilizadas.</strong></summary>
 
* React.js
* JavaScript
* CSS
* HTML
* LocalStorage
* Hooks
* React Router 5
* React Bootstrap 5
* React Icons

</details>

  <summary markdown="span"><strong> Principais dificuldades e aprendizados</strong></summary>

 A parte mais dificil do desenvolvimento foi criar a atualização dos estados para aumentar a quantidade da ação comprada só podendo aumentar a ação selecionada, chegar na logica desse algorito foi bem trabalhoso, o contrario não foi diferente remover apenas as ações que o usuario está vendendo foi realmente complicado de conseguir desenvolver!

Criar a pagina de saldo foi uma parte realmente complicada, e ainda contem um bug que não consegui arrumar :thinking:

O bug é : O usuario consegue adicionar um valor negativo como -32, e o valor soma na carteira.
O mesmo vale para o remover se você remover um valor negativo como -32 o valor irá somar na carteira.

Estou muito orgulhoso do resultado que obtive com o projeto, foi muito divertido e muito dificil!

Me superei diversas vezes enquanto desenvolvia e aprendi muito nesses ultimos dias!

