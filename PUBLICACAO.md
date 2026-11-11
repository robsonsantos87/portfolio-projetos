# Publicação do portfólio — Robson Santos

Este repositório contém o portfólio profissional de Robson Santos. O site foi concebido para recrutadores e oportunidades de emprego e **não é uma página comercial da PotencI.A**.

## Estado

- Site estático em `index.html`, `styles.css` e `script.js`, com imagens dos estudos de caso na raiz.
- Todos os estudos distinguem fases de implementação, homologação e MVP.
- As imagens dos projetos são **ilustrações conceituais geradas por IA**, não capturas reais.
- Dados institucionais, nomes de pessoas e informações privadas não são expostos.

## Publicar primeiro em GitHub Pages (sem domínio personalizado)

1. Verifique o conteúdo da branch `main` e aprove a apresentação.
2. Acesse **Settings > Pages** do repositório.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch `main`, pasta `/(root)`, e clique em **Save**.
5. Aguarde a confirmação de implantação na página de configurações do GitHub.
6. Confira o endereço de testes: https://robsonsantos87.github.io/portfolio-projetos/

> O endereço acima é o padrão esperado, **não é uma confirmação de publicação**. Valide o URL e o HTTPS após habilitar Pages.

## Apontar o subdomínio profissional

**Não alterar o domínio raiz `potencia.site` nem seu site existente.**

Somente depois que o endereço padrão do GitHub Pages funcionar:

1. Se possível, valide a propriedade do domínio nas configurações da conta GitHub, para proteger contra sequestro de subdomínio.
2. **Primeiro** no GitHub, em **Settings > Pages > Custom domain**, digite `robson.potencia.site` e clique em **Save**. Na publicação por branch, isso cria um arquivo `CNAME` na raiz.
3. **Depois**, no provedor que gerencia os DNS de `potencia.site`, crie/ajuste este registro:
   - Tipo: `CNAME`
   - Nome/Host: `robson`
   - Destino: `robsonsantos87.github.io`
   - TTL: padrão do provedor.
4. Aguarde a verificação do DNS e ative **Enforce HTTPS** quando disponibilizado.
5. Confira https://robson.potencia.site em navegador privado e também pelo celular.

O CNAME DNS deve apontar para `robsonsantos87.github.io` **sem `/portfolio-projetos`**. Não utilizar registro wildcard. Não altere registros de `@` ou `www`, que podem atender o site comercial.

**Segurança:** o GitHub recomenda configurar o domínio no GitHub antes de apontar o DNS para ele. Não deixe o DNS apontando para Pages se o site estiver desabilitado ou sem a configuração do domínio.

Referência: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Revisão de qualidade antes de divulgar para recrutadores

- [ ] Abrir a página em celular e desktop, confirmando fonte, espaçamento, imagens e ausência de overflow horizontal.
- [ ] Testar menu móvel, navegação por âncoras, filtros e abertura/fechamento de cada estudo de caso.
- [ ] Verificar que o site apresenta Robson como pessoa física/profissional, sem propaganda da PotencI.A.
- [ ] Confirmar que as descrições refletem somente trabalhos e resultados que podem ser demonstrados.
- [ ] Revisar dados pessoais antes de adicionar foto, telefone, e-mail ou LinkedIn.
- [ ] Acrescentar currículo PDF validado, com autorização para divulgação pública.
- [ ] Verificar que arquivos com credenciais, dados de clientes ou da instituição não sejam adicionados.
- [ ] Validar leitura em telas menores e navegação por teclado.

## Atualizações futuras

As alterações de texto e visual podem ser realizadas nos arquivos do site. Publicações na branch `main` são atualizadas automaticamente pelo GitHub Pages quando a fonte de publicação está configurada para `main`.
