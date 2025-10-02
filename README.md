<h1 align="center">Endereçamento Digital e Roteirização para imóveis do CAR</h1>

**Tema:** Desenvolver uma aplicação para uma plataforma móvel, como smartphones ou tablets.

## :bookmark_tabs: Índice
- [:scroll: Descrição](#scroll-descrição)  
- [:memo: Backlog do Produto](#memo-backlog-do-produto)  
- [:gear: Processos (DoR / DoD)](#gear-processos-dor--dod)  
- [:hammer_and_wrench: Tecnologias Utilizadas](#hammer_and_wrench-tecnologias-utilizadas)  
- [:building_construction: MPV](#building_construction-mpv)  
- [:busts_in_silhouette: Equipe](#busts_in_silhouette-equipe)  
- [:calendar: Calendário API](#calendar-calendário-api)  

## :scroll: Descrição
O desafio proposto consiste no desenvolvimento de um aplicativo móvel multiplataforma (Android), em **React Native**, voltado ao endereçamento digital rural e à roteirização rural para imóveis cadastrados no Cadastro Ambiental Rural (CAR). A solução deverá ser implementada com **arquitetura de microsserviços**. Além disso, o sistema deve ser projetado de forma flexível e escalável, possibilitando evoluções, melhorias e a incorporação de novas funcionalidades de maneira ágil e prática, sem necessidade de retrabalho.

O problema central a ser enfrentado é a ausência de endereços formais para grande parte das propriedades rurais, situação que impõe sérias dificuldades aos produtores, moradores e à prestação de serviços públicos e privados. Soma-se a isso a falta de informações atualizadas sobre as condições das vias rurais, cujo acesso, se disponível de forma prática, facilitaria significativamente os deslocamentos no campo, beneficiando tanto os proprietários e moradores quanto os prestadores de serviços.

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :memo: Backlog do Produto

| **Rank** | **Prioridade** | **User Story** | **Estimativa** | **Sprint** |
|----------|----------------|----------------|----------------|-----------:|
| 1 | Alta | Como usuário, quero acessar um mapa integrado para utilizar a navegação dentro do sistema. | 6 | Sprint 1 |
| 2 | Alta | Como usuário, quero acessar um menu para navegar rapidamente entre as funcionalidades do sistema. | 5 | Sprint 1 |
| 3 | Média | Como usuário, quero poder me cadastrar, fazer login e atualizar meus dados cadastrados na plataforma | 3 | Sprint 1 |
| 4 | Alta | Como usuário, quero visualizar minhas propriedades em uma lista para acessá-las de forma organizada. | 3 | Sprint 2 |
| 5 | Alta | Como usuário, quero ver minhas propriedades no mapa para acompanhar sua localização. | 6 | Sprint 2 |
| 6 | Alta | Como usuário, quero adicionar o Plus Code da minha propriedade para registrá-la com precisão. | 4 | Sprint 2 |
| 7 | Média | Como usuário, quero gerar um certificado digital para comprovar a posse da minha propriedade. | 3 | Sprint 2 |
| 8 | Alta | Como usuário, quero traçar rotas até uma propriedade para chegar ao destino com praticidade. | 6 | Sprint 3 |
| 9 | Alta | Como usuário, quero receber alertas de acidentes na rota para ajustar meu trajeto. | 3 | Sprint 3 |
| 10 | Alta | Como usuário, quero visualizar alertas climáticos para planejar melhor minha viagem. | 3 | Sprint 3 |
| 11 | Baixa | Como usuário, quero acessar o aplicativo sem internet para consultar minhas propriedades salvas. | 6 | Sprint 3 |

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :gear: Processos (DoR / DoD)
- [Definition of Ready (DoR)](documentos/DoR.md) — critérios mínimos para uma story entrar na sprint.  
- [Definition of Done (DoD)](documentos/DoD.md) — critérios que definem quando uma entrega está concluída.

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :hammer_and_wrench: Tecnologias Utilizadas
**Principais escolhas e requisitos técnicos**
- **Linguagens:** TypeScript.  
- **Frameworks / UI:** React Native.  
- **Plataforma alvo:** SO Android / Android SDK.  
- **Bancos de dados:** NoSQL (MongoDB) e Relacional (MySQL).  
- **Arquitetura:** Microsserviços. 

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :building_construction: MPV
**Sprint 1**: (mapa integrado, menu de navegação e autenticação básica — conforme backlog)  
**Sprint 2**: (listagem de propriedades, registrar Plus Code, geração de certificado digital)  
**Sprint 3**: (roteirização, alertas de rota, alertas climáticos e modo offline)

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :busts_in_silhouette: Equipe

| Foto | Nome | Função | GitHub |
|------|------|--------|--------|
| ![Uploading Lucas.jpg…]()
 | **Lucas** | *Desenvolvedor / Frontend* | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/LucasCassiano1) |
| - | **Diego Castro** | Dev Team | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Diegocastro5) |
| - | **Henrique Bitencourt** | Product Owner | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/hriquen) |
| - | **Joniel Oliveira** | Dev Team | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/JonielOliveira) |
| - | **Thiago Ribeiro** | Dev Team | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/yrnThiago) |
| - | **Ana Clara Becker** | Dev Team | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/ninabtolo) |
| - | **André Augusto** | Dev Team | [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/andreN4vs) |

:link: [(Voltar ao topo)](#bookmark_tabs-índice)

## :calendar: Calendário API - 2º semestre de 2025

| Status | Evento | Data / Período |
|:------:|:------:|:--------------:|
| ✔️ | Kick-off Geral | 25/08 a 29/08/2025 |
| ✔️ | Sprint 1 | 08/09 a 28/09/2025 |
| ➡️ | Sprint Review / Planning | 29/09 a 03/10/2025 |
| ⏳ | Sprint 2 | 06/10 a 26/10/2025 |
| ⏳ | Sprint Review / Planning | 27/10 a 31/10/2025 |
| ⏳ | Sprint 3 | 03/11 a 23/11/2025 |
| ⏳ | Sprint Review | 24/11 a 28/11/2025 |
| ⏳ | Feira de Soluções | 04/12/2025 |

:link: [(Voltar ao topo)](#bookmark_tabs-índice)
