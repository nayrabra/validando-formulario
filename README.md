# Validação de Formulário

<div align="center">Este é um projeto desenvolvido no âmbito de um curso da Alura, intitulado "JavaScript: validando formulários".</div>

<br>

O objetivo principal deste projeto é praticar a validação dos campos de um formulário para criação de conta em um banco chamado "Moni Bank". Através de atributos de dados (data attributes), inputs e condições, foram definidas regras específicas para cada campo. Quando um campo estiver preenchido corretamente, o usuário poderá prosseguir, mas se houver algum erro, uma mensagem de erro será exibida e o usuário não poderá continuar.

|:placard: Vitrine.Dev |                                                 | 
| -------------------- | ----------------------------------------------- |
| :sparkles: Nome      | **Validação de Formulário**                     |
| :label: Tecnologias  | Javascript                                      |
| :rocket: URL         |https://validando-formulario-nayrabra.vercel.app/|
| 💻 Responsividade    | Celular, Tablet e Desktop                       |

## Condições para Validações dos Campos:

* Como regra geral, foi definido que todos os campos precisam estar preenchidos para conseguir prosseguir, o que foi possível através do atributo "required".
* Para o **"Nome"**, foi definido um input de tipo texto e tamanho mínimo de 3 caracteres.
* Para o **"E-mail"**, foi definido um input de tipo email e tamanho mínimo de 4 caracteres.
* Para o **"RG"**, foi definido um input de tipo texto com tamanho mínimo de 6 caracteres, sem um tamanho máximo específico, já que cada estado do Brasil possui uma identificação diferente de RG, não seguindo um padrão como o CPF. Além disso, foi imposto a condição de não ter todos os seus caracteres iguais, aceitando números e letras.
* Para o **"CPF"**, foi definido um input de tipo texto com tamanho mínimo de 11 caracteres e tamanho máximo de 14, permitindo que o usuário insira pontos e hífen, ex.: "032.144.353-00". A condição de não ter caracteres iguais também foi aplicada, aceitando apenas números. Foi implementada uma função para validar o primeiro dígito após o hífen e outra para o segundo dígito, utilizando um loop "for" e uma operação de módulo para obter o valor do dígito verificador a ser comparado. Caso o valor do dígito verificador seja igual a 10 ou 11, é atribuído o valor 0. Ao final, é feita a comparação entre o dígito verificador obtido e o dígito verificador fornecido no CPF digitado pelo usuário. Se forem diferentes, a função retorna true, indicando que o dígito é inválido e, consequentemente, exibirá uma mensagem de erro. Caso contrário, retorna false e o CPF estará correto.
* Para a **"Data de nascimento"**, foi definido um input do tipo data com a condição de ser maior de 18 anos, permitindo assim a criação da conta.

## Outras Informações

* Ao entrar no site, o usuário deve clicar no botão "Abrir conta" para acessar o formulário de preenchimento.
* Após preencher corretamente todos os campos do formulário, o usuário será redirecionado para a tela de reconhecimento facial.
* Na tela de reconhecimento facial, o usuário deverá permitir o uso da câmera e enviar sua imagem para prosseguir.
* Após o envio da imagem, o usuário será direcionado para a tela final, onde receberá a mensagem "Tudo certo!", com outras informações adicionais.
  
# Screenshots
## Desktop

<img width="800" alt="tela desktop da página inicial" src="https://github.com/nayrabra/validando-formulario/assets/102299426/8745a742-4f43-4454-a669-9802d159cd1e#vitrinedev">

<img width="800" alt="tela desktop do formulário" src="https://github.com/nayrabra/validando-formulario/assets/102299426/1765ec1a-c1f0-4e34-886c-8ec2ef88aca4">
<img width="800" alt="tela desktop do formulário" src="https://github.com/nayrabra/validando-formulario/assets/102299426/426f15c1-aef1-43d0-8678-21df3fadef9b">

<img width="800" alt="tela desktop do reconhecimento facial" src="https://github.com/nayrabra/validando-formulario/assets/102299426/5ab6bc5b-34b3-4c99-8b7a-4fc372ee40b8">

<img width="800" alt="tela desktop final" src="https://github.com/nayrabra/validando-formulario/assets/102299426/456c6b8c-65aa-4625-a30c-80ce33a28306">

## Simulação de Erro

<img width="800" alt="tela desktop do formulario com erro" src="https://github.com/nayrabra/validando-formulario/assets/102299426/a44d952a-d136-4726-9f9a-6a90b2cc5bad">

## Tablet 

<img width="400" alt="tela tablet formulario" src="https://github.com/nayrabra/validando-formulario/assets/102299426/819612f6-daf2-47ce-9b00-ba8cde5b22f2">
<img width="400" alt="tela tablet formulario" src="https://github.com/nayrabra/validando-formulario/assets/102299426/5732f353-d4a4-48ac-a523-bdddb596f71b">

## Mobile

<img width="200" alt="tela mobile formulario" src="https://github.com/nayrabra/validando-formulario/assets/102299426/f7ab8af0-fab4-41c8-8154-2520ac08b5a9">
<img width="200" alt="tela mobile formulario" src="https://github.com/nayrabra/validando-formulario/assets/102299426/2770a156-9d4a-40df-9d44-90d57abeac6c">

## Feito por:

**Nayra Braga Barbosa**

Linkedin: https://www.linkedin.com/in/nayra-barbosa/
