# Gerador de Carteira Bitcoin (Testnet)

Este projeto é um script simples em Node.js para gerar uma carteira Bitcoin na rede de teste (testnet), utilizando os protocolos BIP32, BIP39 e BIP44. Ele gera uma frase mnemônica (seed), deriva uma chave privada e cria um endereço Bitcoin correspondente.

## Funcionalidades

- Geração automática de frase mnemônica.
- Derivação de chave privada e endereço Bitcoin.
- Compatível com a rede de teste (`testnet`).

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [bip32](https://www.npmjs.com/package/bip32)
- [bip39](https://www.npmjs.com/package/bip39)
- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências:

```bash
npm install
```

## Como usar

1. Execute o script:

```bash
node geradorCarteira.js
```

2. O script exibirá no console as seguintes informações:
   - **Endereço Bitcoin**
   - **Chave privada**
   - **Frase mnemônica (seed)**

### Exemplo de saída:

```
Carteira criada com sucesso!
Endereço:  tb1qexampleaddress
Chave privada:  cVpExamplePrivateKey
Seed:  example seed words generated here
```

## Estrutura do projeto

```plaintext
.
├── geradorCarteira.js    # Script principal
├── package.json          # Configuração do projeto e dependências
└── README.md             # Documentação
```

## Avisos importantes

- **Rede de teste:** Este script é configurado para a rede de teste (`testnet`) e **não deve ser usado para transações reais**.  
- **Segurança:** Não compartilhe a frase mnemônica ou a chave privada gerada. Elas dão acesso total aos fundos da carteira.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b funcionalidade-nova`).
3. Commit suas mudanças (`git commit -m 'Adicionei nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin funcionalidade-nova`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Sobre

Desenvolvido para ajudar no aprendizado de geração de carteiras Bitcoin.

---
Se você gostou deste projeto, deixe uma estrela no repositório!
```
