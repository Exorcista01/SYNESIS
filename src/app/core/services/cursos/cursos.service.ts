import { Injectable } from '@angular/core';
import { Course, CardSection, Module, Lesson, CourseLevel } from '../../../features/courses/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cardSections: CardSection[] = [
    {
      title: 'Manutenção de Computadores',
      courses: [
        {
      id: 1,
      slug: 'manutencao-de-computadores',
      img: '/assets/course/cards/manutencao.png',
      title: 'Manutenção de Computadores do Zero ao Avançado',
      author: 'Carlos Henrique',
      year: '2025',
      tags: ['hardware', 'tecnologia', 'suporte'],
      description: 'Aprenda a identificar, montar e reparar computadores de forma profissional.',
      descriptionLong: 'Este curso cobre desde os fundamentos da arquitetura de computadores até a manutenção avançada de hardware e software. Você aprenderá a diagnosticar falhas, realizar upgrades, otimizar desempenho e oferecer suporte técnico eficiente.',
      level: 'Intermediário',
      studyHours: 60,
      totalLessons: 15,
      totalMinutes: 900,
      studentCount: 2430,
      accessEndDate: '2026-12-31',
      activities: 8,
      category: 'Manutenção de Computadores',
      modules: [
        {
          order: 1,
          title: 'Introdução e Ferramentas',
          durationInHours: 10,
          thumbnail: 'assets/images/modules/ferramentas.jpg',
          learnings: ['Identificar componentes', 'Usar ferramentas com segurança'],
          skills: ['Organização técnica', 'Diagnóstico inicial'],
          lessons: [
            { id: 1, title: 'Boas práticas de manutenção', type: 'artigo', description: 'Fundamentos de manutenção preventiva e corretiva.', durationInMinutes: 20 },
            { id: 2, title: 'Ferramentas básicas de técnico', type: 'video', description: 'Conheça as ferramentas essenciais de um técnico.', durationInMinutes: 18 },
            { id: 3, title: 'Segurança elétrica e ESD', type: 'artigo', description: 'Como evitar danos por eletricidade estática.', durationInMinutes: 15 },
            { id: 4, title: 'Desmontagem e montagem prática', type: 'video', description: 'Aprenda a desmontar e remontar um PC completo.', durationInMinutes: 30 }
          ]
        },
        {
          order: 2,
          title: 'Diagnóstico e Substituição',
          durationInHours: 20,
          thumbnail: 'assets/images/modules/diagnostico.jpg',
          lessons: [
            { id: 5, title: 'Diagnóstico de falhas em hardware', type: 'video', description: 'Como identificar defeitos comuns em PCs.', durationInMinutes: 25 },
            { id: 6, title: 'Testando memória e disco rígido', type: 'artigo', description: 'Usando ferramentas para validar componentes.', durationInMinutes: 22 },
            { id: 7, title: 'Substituição de componentes', type: 'video', description: 'Troca de fonte, RAM e CPU.', durationInMinutes: 35 },
            { id: 8, title: 'Reinstalação de sistemas operacionais', type: 'artigo', description: 'Formatando e reinstalando Windows e Linux.', durationInMinutes: 30 }
          ]
        },
        {
          order: 3,
          title: 'Otimização e Suporte',
          durationInHours: 15,
          thumbnail: 'assets/images/modules/suporte.jpg',
          lessons: [
            { id: 9, title: 'Limpando e otimizando o sistema', type: 'video', description: 'Ferramentas para otimização do Windows.', durationInMinutes: 20 },
            { id: 10, title: 'Atendimento ao cliente e suporte remoto', type: 'artigo', description: 'Como oferecer um serviço de manutenção profissional.', durationInMinutes: 25 }
          ]
        }
      ]
    },

    {
      id: 2,
      slug: 'montagem-e-configuracao-de-pcs',
      img: '/assets/course/cards/manutencao.png',
      title: 'Montagem e Configuração de PCs Profissional',
      author: 'Bruno Almeida',
      year: '2025',
      tags: ['hardware', 'montagem', 'configuração'],
      description: 'Monte computadores sob medida para diferentes necessidades e orçamentos.',
      descriptionLong: 'Neste curso, você aprenderá a planejar e montar computadores de forma profissional, entendendo como escolher peças compatíveis, montar sistemas estáveis e configurar BIOS, drivers e sistemas operacionais para desempenho máximo.',
      level: 'Intermediário',
      studyHours: 50,
      totalLessons: 14,
      totalMinutes: 840,
      studentCount: 1780,
      accessEndDate: '2026-12-31',
      activities: 6,
      category: 'Manutenção de Computadores',
      modules: [
        {
          order: 1,
          title: 'Planejamento e Compatibilidade',
          durationInHours: 15,
          thumbnail: 'assets/images/modules/compatibilidade.jpg',
          lessons: [
            { id: 11, title: 'Planejando um PC ideal', type: 'artigo', description: 'Definindo propósito e orçamento.', durationInMinutes: 18 },
            { id: 12, title: 'Compatibilidade entre componentes', type: 'video', description: 'Entenda como CPU, placa-mãe e RAM interagem.', durationInMinutes: 22 },
            { id: 13, title: 'Escolhendo a fonte de alimentação', type: 'video', description: 'Como calcular a potência ideal e escolher uma boa marca.', durationInMinutes: 25 }
          ]
        },
        {
          order: 2,
          title: 'Montagem Física',
          durationInHours: 20,
          thumbnail: 'assets/images/modules/montagem2.jpg',
          lessons: [
            { id: 14, title: 'Montando o gabinete', type: 'video', description: 'Instalando placa-mãe, CPU e cooler.', durationInMinutes: 30 },
            { id: 15, title: 'Instalação de memória, SSD e placa de vídeo', type: 'artigo', description: 'Passo a passo detalhado com dicas práticas.', durationInMinutes: 25 },
            { id: 16, title: 'Verificação de montagem e testes', type: 'video', description: 'Checklist final antes da inicialização.', durationInMinutes: 20 }
          ]
        },
        {
          order: 3,
          title: 'Configuração e Finalização',
          durationInHours: 15,
          thumbnail: 'assets/images/modules/configuracao.jpg',
          lessons: [
            { id: 17, title: 'Configurando BIOS/UEFI', type: 'video', description: 'Como ajustar configurações de boot e desempenho.', durationInMinutes: 18 },
            { id: 18, title: 'Instalação do sistema operacional', type: 'video', description: 'Instalando e otimizando Windows 11 e Linux.', durationInMinutes: 25 },
            { id: 19, title: 'Atualização de drivers e testes finais', type: 'artigo', description: 'Como garantir estabilidade e desempenho.', durationInMinutes: 22 }
          ]
        }
      ]
    },
    {
      id: 3,
      slug: 'manutencao-preventiva-e-suporte-tecnico',
      img: '/assets/course/cards/manutencao.png',
      title: 'Manutenção Preventiva e Suporte Técnico',
      author: 'Fernanda Ribeiro',
      year: '2025',
      tags: ['manutenção', 'preventiva', 'suporte técnico'],
      description: 'Previna falhas e mantenha computadores em alta performance continuamente.',
      descriptionLong: 'Este curso foca em práticas de manutenção preventiva e suporte técnico contínuo. Você aprenderá a criar cronogramas de limpeza e atualização, identificar falhas antecipadamente e lidar com clientes de forma profissional.',
      level: 'Iniciante',
      studyHours: 45,
      totalLessons: 12,
      totalMinutes: 720,
      studentCount: 1540,
      accessEndDate: '2026-11-15',
      activities: 4,
      category: 'Manutenção de Computadores',
      modules: [
        {
          order: 1,
          title: 'Introdução à Manutenção Preventiva',
          durationInHours: 10,
          thumbnail: 'assets/images/modules/preventiva1.jpg',
          lessons: [
            { id: 20, title: 'Importância da prevenção', type: 'artigo', description: 'Como evitar falhas antes que ocorram.', durationInMinutes: 15 },
            { id: 21, title: 'Cronogramas de manutenção', type: 'video', description: 'Criando e aplicando checklists preventivos.', durationInMinutes: 25 },
            { id: 22, title: 'Limpeza de hardware e periféricos', type: 'video', description: 'Dicas práticas de limpeza segura.', durationInMinutes: 20 }
          ]
        },
        {
          order: 2,
          title: 'Diagnóstico Rápido e Atendimento',
          durationInHours: 20,
          thumbnail: 'assets/images/modules/preventiva2.jpg',
          lessons: [
            { id: 23, title: 'Softwares de diagnóstico rápido', type: 'artigo', description: 'Ferramentas para checagem de desempenho.', durationInMinutes: 22 },
            { id: 24, title: 'Atendimento remoto eficiente', type: 'video', description: 'Como ajudar o cliente à distância.', durationInMinutes: 28 },
            { id: 25, title: 'Gerenciamento de chamados', type: 'artigo', description: 'Organizando solicitações e suporte técnico.', durationInMinutes: 25 }
          ]
        },
        {
          order: 3,
          title: 'Melhoria Contínua e Boas Práticas',
          durationInHours: 15,
          thumbnail: 'assets/images/modules/preventiva3.jpg',
          lessons: [
            { id: 26, title: 'Indicadores de qualidade e desempenho', type: 'artigo', description: 'Como medir eficiência em manutenção.', durationInMinutes: 18 },
            { id: 27, title: 'Feedback de clientes e relatórios', type: 'video', description: 'A importância de documentar o suporte.', durationInMinutes: 25 }
          ]
        }
      ]
    },
     {
        slug: 'montagem-desktop',
        id: 4,
        img: '/assets/course/cards/manutencao.png',
        title: 'Montagem de Computadores do Zero',
        author: 'Rafael Costa',
        year: '2024',
        tags: ['hardware', 'gabinete', 'cpu'],
        description: 'Aprenda a montar PCs passo a passo, desde a escolha das peças até a instalação do sistema operacional.',
        descriptionLong: 'Este curso ensina o processo completo de montagem de um computador: seleção de hardware, montagem física, BIOS e instalação de sistemas.',
        level: 'Iniciante',
        studyHours: 25,
        totalLessons: 18,
        totalMinutes: 600,
        studentCount: 3300,
        accessEndDate: 'Set 2026',
        activities: 9,
        category: 'Manutenção de Computadores',
        modules: [
          {
            order: 1,
            title: 'Escolhendo as Peças',
            durationInHours: 2,
            thumbnail: 'assets/images/modules/pecas.jpg',
            lessons: [
              { id: 1, title: 'Compatibilidade de componentes', type: 'video', description: 'CPU, placa-mãe e memória RAM.', durationInMinutes: 12 },
              { id: 2, title: 'Fontes de alimentação', type: 'artigo', description: 'Potência e certificações 80 Plus.' },
            ]
          },
          {
            order: 2,
            title: 'Montagem Prática',
            durationInHours: 3,
            thumbnail: 'assets/images/modules/montagem.jpg',
            lessons: [
              { id: 3, title: 'Montando o gabinete', type: 'video', description: 'Fixação de placa-mãe, cabos e drives.', durationInMinutes: 18 },
              { id: 4, title: 'Configuração da BIOS', type: 'video', description: 'Ajustes iniciais e detecção de hardware.', durationInMinutes: 20 },
            ]
          }
        ]
      },

      {
        slug: 'manutencao-notebooks',
        id: 5,
        img: '/assets/course/cards/manutencao.png',
        title: 'Manutenção de Notebooks e Ultrabooks',
        author: 'Patrícia Gomes',
        year: '2024',
        tags: ['notebooks', 'limpeza', 'tela', 'bateria'],
        description: 'Especialize-se na manutenção de notebooks, desde limpeza até troca de componentes internos.',
        descriptionLong: 'Com foco em portáteis, este curso ensina desmontagem, troca de tela, teclado, bateria e manutenção de sistemas de refrigeração compactos.',
        level: 'Intermediário',
        studyHours: 45,
        totalLessons: 32,
        totalMinutes: 1400,
        studentCount: 960,
        accessEndDate: 'Ago 2026',
        activities: 15,
        category: 'Manutenção de Computadores',
        modules: [
          {
            order: 1,
            title: 'Desmontagem e Limpeza Interna',
            durationInHours: 3,
            thumbnail: 'assets/images/modules/desmontagem.jpg',
            lessons: [
              { id: 1, title: 'Como desmontar com segurança', type: 'video', description: 'Cuidados com cabos e conectores.', durationInMinutes: 20 },
              { id: 2, title: 'Limpeza e troca de pasta térmica', type: 'video', description: 'Técnicas seguras de limpeza.', durationInMinutes: 18 },
            ]
          },
          {
            order: 2,
            title: 'Troca de Peças',
            durationInHours: 4,
            thumbnail: 'assets/images/modules/troca-pecas.jpg',
            lessons: [
              { id: 3, title: 'Substituição de tela LCD', type: 'video', description: 'Passo a passo completo.', durationInMinutes: 25 },
              { id: 4, title: 'Troca de teclado e bateria', type: 'artigo', description: 'Modelos compatíveis e substituições seguras.' },
            ]
          }
        ]
      },

      {
        slug: 'otimizacao-desempenho-pc',
        id: 6,
        img: '/assets/course/cards/manutencao.png',
        title: 'Otimização e Desempenho de PCs',
        author: 'André Nascimento',
        year: '2024',
        tags: ['otimização', 'windows', 'limpeza'],
        description: 'Otimize o desempenho de computadores e aprenda técnicas para acelerar o sistema.',
        descriptionLong: 'Aprenda a melhorar a performance de PCs, eliminar arquivos inúteis, configurar inicializações e realizar upgrades eficientes.',
        level: 'Intermediário',
        studyHours: 30,
        totalLessons: 20,
        totalMinutes: 800,
        studentCount: 1240,
        accessEndDate: 'Jul 2026',
        activities: 10,
        category: 'Manutenção de Computadores',
        modules: [
          {
            order: 1,
            title: 'Análise de Desempenho',
            durationInHours: 2,
            thumbnail: 'assets/images/modules/desempenho.jpg',
            lessons: [
              { id: 1, title: 'Ferramentas do Windows para diagnóstico', type: 'video', description: 'Gerenciador de tarefas e monitor de recursos.', durationInMinutes: 14 },
              { id: 2, title: 'Testes de benchmark', type: 'artigo', description: 'Como medir desempenho real do sistema.' },
            ]
          },
          {
            order: 2,
            title: 'Melhorias Práticas',
            durationInHours: 3,
            thumbnail: 'assets/images/modules/melhorias.jpg',
            lessons: [
              { id: 3, title: 'Upgrades de hardware', type: 'video', description: 'Melhorando RAM e armazenamento.', durationInMinutes: 20 },
              { id: 4, title: 'Desfragmentação e limpeza', type: 'video', description: 'Uso de ferramentas como CCleaner e Defrag.', durationInMinutes: 18 },
            ]
          }
        ]
      }
      ],  
    },
    {
      title: 'Redes de Computadores',
      courses: [
        {
        id: 3,
        slug: 'redes-de-computadores',
        img: '/assets/course/cards/rede.png',
        title: 'Redes de Computadores e Protocolos',
        author: 'João Ferreira',
        year: '2025',
        tags: ['redes', 'tcp/ip', 'internet'],
        description: 'Aprenda como funcionam as redes e a comunicação entre dispositivos.',
        descriptionLong: 'Um curso prático sobre redes de computadores, cobrindo desde os fundamentos até protocolos avançados. Ideal para estudantes de TI e profissionais que buscam certificações como CompTIA Network+ e Cisco CCNA.',
        level: 'Avançado',
        studyHours: 70,
        totalLessons: 18,
        totalMinutes: 1080,
        studentCount: 3200,
        accessEndDate: '2027-01-01',
        activities: 10,
        category: 'Redes de Computadores',
        modules: [
          {
            order: 1,
            title: 'Fundamentos de Rede',
            durationInHours: 20,
            thumbnail: 'assets/images/modules/rede1.jpg',
            lessons: [
              { id: 19, title: 'Modelo OSI e TCP/IP', type: 'artigo', description: 'Camadas e funcionamento da comunicação.', durationInMinutes: 25 },
              { id: 20, title: 'Endereçamento IP e sub-redes', type: 'video', description: 'Aprenda a calcular sub-redes e endereços.', durationInMinutes: 30 },
              { id: 21, title: 'Dispositivos de rede', type: 'video', description: 'Switches, roteadores e hubs na prática.', durationInMinutes: 20 }
            ]
          },
          {
            order: 2,
            title: 'Configuração e Segurança',
            durationInHours: 25,
            thumbnail: 'assets/images/modules/rede2.jpg',
            lessons: [
              { id: 22, title: 'Configuração de roteadores Cisco', type: 'video', description: 'CLI, VLANs e roteamento.', durationInMinutes: 35 },
              { id: 23, title: 'Segurança em redes', type: 'artigo', description: 'Firewalls, VPNs e IDS.', durationInMinutes: 30 }
            ]
          },
          {
            order: 3,
            title: 'Protocolos e Troubleshooting',
            durationInHours: 25,
            thumbnail: 'assets/images/modules/rede3.jpg',
            lessons: [
              { id: 24, title: 'Protocolos de roteamento', type: 'video', description: 'OSPF, RIP e BGP.', durationInMinutes: 30 },
              { id: 25, title: 'Diagnóstico de rede', type: 'artigo', description: 'Ping, tracert e ferramentas profissionais.', durationInMinutes: 20 }
            ]
          }
        ]
      },
      {
      id: 201,
      slug: 'origem-e-fundamentos-de-redes',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Origem e Fundamentos de Redes',
      description: 'Conceitos básicos, modelo OSI e evolução das redes.',
      author: 'Prof. Patrícia Lima',
      year: '2025',
      tags: ['Redes', 'Infraestrutura', 'OSI'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Modelo OSI e TCP/IP',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2011, title: 'As 7 Camadas do Modelo OSI', type: 'video', description: 'Entenda a função de cada camada.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/5-Nka-vY1sY' },
            { id: 2012, title: 'Endereçamento IP e Máscaras de Rede', type: 'artigo', description: 'IPv4, IPv6 e cálculo de sub-redes.', durationInMinutes: 20 },
            { id: 2013, title: 'Protocolos: TCP vs UDP', type: 'video', description: 'Quando usar cada um?', durationInMinutes: 18, videoUrl: 'https://www.youtube.com/embed/j-N-R-gH7-s' },
          ]
        },
        {
          order: 2,
          title: 'História e Evolução das Redes',
          durationInHours: 1,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2014, title: 'ARPANET e o Início da Internet', type: 'video', description: 'Como tudo começou.', durationInMinutes: 15, videoUrl: 'https://www.youtube.com/embed/2s5Ecmj6U5Y' },
            { id: 2015, title: 'Evolução dos Protocolos', type: 'artigo', description: 'Do IPX/SPX ao IPv6.', durationInMinutes: 12 },
          ]
        }
      ]
    },
    {
      id: 202,
      slug: 'configuracao-de-redes-locais',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Configuração de Redes Locais (LAN)',
      description: 'Aprenda a configurar switches, roteadores e redes locais.',
      author: 'Prof. Vanessa Santos',
      year: '2025',
      tags: ['Redes', 'LAN', 'Wi-Fi'],
      level: 'Intermediário',
      modules: [
        {
          order: 1,
          title: 'Cabeamento e Equipamentos',
          durationInHours: 1,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2021, title: 'Crimpando um Cabo de Rede (RJ-45)', type: 'video', description: 'Passo a passo para montar seus cabos.', durationInMinutes: 15, videoUrl: 'https://www.youtube.com/embed/04-aG33a1kM' },
            { id: 2022, title: 'Diferença entre Hub, Switch e Roteador', type: 'artigo', description: 'Entenda os equipamentos da sua rede.', durationInMinutes: 10 },
          ]
        },
        {
          order: 2,
          title: 'Configuração Básica de Dispositivos',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2023, title: 'Configurando um Roteador', type: 'video', description: 'SSID, senha e segurança Wi-Fi.', durationInMinutes: 18, videoUrl: 'https://www.youtube.com/embed/jx9Y8DsFQdU' },
            { id: 2024, title: 'Conectividade e Ping', type: 'artigo', description: 'Testando a rede e solucionando falhas.', durationInMinutes: 12 },
          ]
        }
      ]
    },
    {
      id: 203,
      slug: 'redes-sem-fio-e-wifi',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Redes Sem Fio e Wi-Fi Profissional',
      description: 'Aprenda os fundamentos das redes sem fio e suas configurações práticas.',
      author: 'Prof. Lucas Almeida',
      year: '2025',
      tags: ['Wi-Fi', 'Wireless', 'Roteadores'],
      level: 'Intermediário',
      modules: [
        {
          order: 1,
          title: 'Fundamentos do Wireless',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2031, title: 'Como o Wi-Fi Funciona', type: 'video', description: 'Entenda frequências, canais e interferências.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/h1Glr3b9kxM' },
            { id: 2032, title: 'Padrões IEEE 802.11', type: 'artigo', description: 'A, B, G, N, AC e AX.', durationInMinutes: 15 },
          ]
        },
        {
          order: 2,
          title: 'Segurança em Redes Wi-Fi',
          durationInHours: 1,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2033, title: 'Criptografia WPA3', type: 'video', description: 'O padrão mais seguro para Wi-Fi.', durationInMinutes: 14, videoUrl: 'https://www.youtube.com/embed/LT7d-xS0Psg' },
            { id: 2034, title: 'Ocultando SSID e Protegendo Acesso', type: 'artigo', description: 'Medidas práticas de proteção doméstica.', durationInMinutes: 10 },
          ]
        }
      ]
    },
    {
      id: 204,
      slug: 'topologias-e-dispositivos-de-rede',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Topologias e Dispositivos de Rede',
      description: 'Compreenda a estrutura física e lógica das redes e seus componentes.',
      author: 'Profa. Carla Nunes',
      year: '2025',
      tags: ['Topologia', 'Hardware', 'Infraestrutura'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Tipos de Topologia',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2041, title: 'Topologia Estrela, Barramento e Anel', type: 'video', description: 'Comparação e uso em redes reais.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/0Wzv0gKQvMo' },
            { id: 2042, title: 'Topologia Híbrida', type: 'artigo', description: 'Combinação das melhores abordagens.', durationInMinutes: 12 },
          ]
        },
        {
          order: 2,
          title: 'Equipamentos de Rede',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2043, title: 'Switches Gerenciáveis vs Não Gerenciáveis', type: 'video', description: 'Quando usar cada tipo.', durationInMinutes: 15, videoUrl: 'https://www.youtube.com/embed/qY8Q-u4xVIA' },
            { id: 2044, title: 'Funções dos Patch Panels', type: 'artigo', description: 'Organização e manutenção eficiente.', durationInMinutes: 10 },
          ]
        }
      ]
    },
    {
      id: 205,
      slug: 'protocolos-e-servicos-de-rede',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Protocolos e Serviços de Rede',
      description: 'Entenda os principais protocolos usados na internet e redes locais.',
      author: 'Prof. Rafael Dias',
      year: '2025',
      tags: ['TCP/IP', 'DNS', 'DHCP'],
      level: 'Avançado',
      modules: [
        {
          order: 1,
          title: 'Principais Protocolos',
          durationInHours: 3,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2051, title: 'DHCP e IP Dinâmico', type: 'video', description: 'Configuração e funcionamento.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/XQvZw2mF8vE' },
            { id: 2052, title: 'DNS e Resolução de Nomes', type: 'video', description: 'Tradução entre IPs e domínios.', durationInMinutes: 18, videoUrl: 'https://www.youtube.com/embed/_YfC9JqP_jQ' },
            { id: 2053, title: 'HTTP, HTTPS e FTP', type: 'artigo', description: 'Serviços de aplicação e segurança.', durationInMinutes: 15 },
          ]
        }
      ]
    },
    {
      id: 206,
      slug: 'seguranca-e-monitoramento-de-redes',
      category: 'Redes de Computadores',
      img: 'assets/course/cards/rede.png',
      title: 'Segurança e Monitoramento de Redes',
      description: 'Detecte falhas e proteja redes corporativas contra ataques.',
      author: 'Profa. Júlia Castro',
      year: '2025',
      tags: ['Segurança', 'Firewall', 'Monitoramento'],
      level: 'Avançado',
      modules: [
        {
          order: 1,
          title: 'Monitoramento de Tráfego',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2061, title: 'Usando o Wireshark', type: 'video', description: 'Analisando pacotes em tempo real.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/bhC2t0cSuR4' },
            { id: 2062, title: 'Logs e Alertas', type: 'artigo', description: 'Como identificar eventos suspeitos.', durationInMinutes: 15 },
          ]
        },
        {
          order: 2,
          title: 'Proteção de Perímetro e Firewall',
          durationInHours: 3,
          thumbnail: 'assets/course/cards/rede.png',
          lessons: [
            { id: 2063, title: 'Configurando Firewall no Windows e Linux', type: 'video', description: 'Bloqueio e liberação de portas.', durationInMinutes: 25, videoUrl: 'https://www.youtube.com/embed/Cw2RWkhL1cU' },
            { id: 2064, title: 'IDS e IPS', type: 'artigo', description: 'Sistemas de detecção e prevenção de intrusões.', durationInMinutes: 20 },
          ]
        }
      ]
    }

      ],
    },
    {
  title: 'Desenvolvimento Web',
  courses: [
    {
      id: 301,
      slug: 'html-e-css-para-iniciantes',
      category: 'Html',
      img: 'assets/course/cards/htnlAndCss.png',
      title: 'HTML e CSS para Iniciantes',
      description: 'Construa suas primeiras páginas web do zero.',
      descriptionLong: 'Aprenda HTML e CSS na prática, criando layouts modernos, responsivos e interativos do zero.',
      studyHours: 40,
      totalLessons: 28,
      totalMinutes: 1200,
      studentCount: 1200,
      accessEndDate: 'Dez 2026',
      activities: 12,
      author: 'Prof. Juliana Silva',
      year: '2025',
      tags: ['HTML', 'CSS', 'Frontend'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Introdução ao HTML',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/htnlAndCss.png',
          lessons: [
            { id: 3011, title: 'Estrutura básica de uma página HTML', type: 'video', description: 'Aprenda a criar seu primeiro HTML.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example1' },
            { id: 3012, title: 'Elementos e Tags HTML', type: 'artigo', description: 'Principais tags e suas funções.', durationInMinutes: 15 },
            { id: 3013, title: 'Formulários e Inputs', type: 'video', description: 'Como criar formulários interativos.', durationInMinutes: 18, videoUrl: 'https://www.youtube.com/embed/example2' },
          ]
        },
        {
          order: 2,
          title: 'Fundamentos de CSS',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/htnlAndCss.png',
          lessons: [
            { id: 3014, title: 'Seletores e Propriedades CSS', type: 'video', description: 'Aprenda a estilizar elementos.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example3' },
            { id: 3015, title: 'Box Model e Layouts', type: 'artigo', description: 'Como funcionam margens, padding e borders.', durationInMinutes: 15 },
          ]
        }
      ],
    },
    {
      id: 302,
      slug: 'javascript-moderno-es6',
      category: 'Java Script',
      img: 'assets/course/cards/js.png',
      title: 'JavaScript Moderno (ES6+)',
      description: 'Domine a linguagem que move a web interativa.',
      author: 'Prof. Ricardo Mendes',
      year: '2025',
      tags: ['JavaScript', 'ES6', 'Frontend'],
      level: 'Intermediário',
      modules: [
        {
          order: 1,
          title: 'Fundamentos do JavaScript Moderno',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/js.png',
          lessons: [
            { id: 3021, title: 'Variáveis, Constantes e Tipos', type: 'video', description: 'Aprenda as novidades do ES6.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example4' },
            { id: 3022, title: 'Funções e Arrow Functions', type: 'artigo', description: 'Sintaxe moderna e prática.', durationInMinutes: 18 },
            { id: 3023, title: 'Objetos e Arrays', type: 'video', description: 'Manipulação de dados em JS.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/example5' },
          ]
        },
        {
          order: 2,
          title: 'ES6 e além',
          durationInHours: 1.5,
          thumbnail: 'assets/course/cards/js.png',
          lessons: [
            { id: 3024, title: 'Classes e Herança', type: 'video', description: 'Programação orientada a objetos em JS.', durationInMinutes: 25, videoUrl: 'https://www.youtube.com/embed/example6' },
            { id: 3025, title: 'Promises e Async/Await', type: 'artigo', description: 'Trabalhando com código assíncrono.', durationInMinutes: 20 },
          ]
        }
      ],
    }
  ],
},

{
  title: 'Fundamentos de Programação',
  courses: [
    {
      id: 401,
      slug: 'logica-de-programacao-essencial',
      category: 'Lógica de Programação',
      img: 'assets/course/cards/logica.png',
      title: 'Lógica de Programação Essencial',
      description: 'Aprenda a pensar como um programador.',
      author: 'Prof. Ana Beatriz Costa',
      studyHours: 40,
      totalLessons: 28,
      totalMinutes: 1200,
      studentCount: 1200,
      accessEndDate: 'Dez 2026',
      activities: 12,
      year: '2025',
      tags: ['Lógica', 'Algoritmos'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Fundamentos da Lógica',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/logica.png',
          lessons: [
            { id: 4011, title: 'Tipos de Dados e Variáveis', type: 'video', description: 'Como armazenar informações.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example7' },
            { id: 4012, title: 'Estruturas de Controle', type: 'artigo', description: 'If, Else, Switch, Loops.', durationInMinutes: 18 },
          ]
        },
        {
          order: 2,
          title: 'Algoritmos e Resolução de Problemas',
          durationInHours: 1.5,
          thumbnail: 'assets/course/cards/logica.png',
          lessons: [
            { id: 4013, title: 'Fluxogramas e Pseudocódigo', type: 'video', description: 'Planejando seu código antes de escrever.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/example8' },
          ]
        }
      ]
    }
  ]
},

{
  title: 'Segurança Cibernética',
  courses: [
    {
      id: 501,
      slug: 'introducao-a-ciberseguranca',
      category: 'seguranca-cibernetica',
      img: 'assets/course/cards/Ciber.png',
      title: 'Introdução à Cibersegurança',
      description: 'Proteja sistemas e dados contra ameaças digitais.',
      studyHours: 40,
      totalLessons: 28,
      totalMinutes: 1200,
      studentCount: 1200,
      accessEndDate: 'Dez 2026',
      activities: 12,
      author: 'Prof. Marcos Andrade',
      year: '2025',
      tags: ['Segurança', 'Hacking Ético'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Fundamentos de Segurança',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/Ciber.png',
          lessons: [
            { id: 5011, title: 'Ameaças e Ataques Comuns', type: 'video', description: 'Tipos de ataques e como se prevenir.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example9' },
            { id: 5012, title: 'Segurança em Senhas e Autenticação', type: 'artigo', description: 'Boas práticas de proteção.', durationInMinutes: 18 },
          ]
        },
        {
          order: 2,
          title: 'Ferramentas de Cibersegurança',
          durationInHours: 1.5,
          thumbnail: 'assets/course/cards/Ciber.png',
          lessons: [
            { id: 5013, title: 'Firewalls e Anti-vírus', type: 'video', description: 'Defendendo sistemas contra invasões.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/example10' },
          ]
        }
      ]
    }
  ]
},

{
  title: 'Inteligência Artificial',
  courses: [
    {
      id: 601,
      slug: 'fundamentos-de-ia-e-machine-learning',
      category: 'inteligencia-artificial',
      img: 'assets/course/cards/Ia.png',
      title: 'Fundamentos de IA e Machine Learning',
      description: 'Descubra como as máquinas aprendem e tomam decisões.',
      studyHours: 40,
      totalLessons: 28,
      totalMinutes: 1200,
      studentCount: 1200,
      accessEndDate: 'Dez 2026',
      activities: 12,
      author: 'Profa. Helena Torres',
      year: '2025',
      tags: ['IA', 'Machine Learning', 'Dados'],
      level: 'Intermediário',
      modules: [
        {
          order: 1,
          title: 'Introdução à Inteligência Artificial',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/Ia.png',
          lessons: [
            { id: 6011, title: 'Conceitos de IA e ML', type: 'video', description: 'Diferença entre IA, ML e DL.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example11' },
            { id: 6012, title: 'Algoritmos Supervisionados e Não Supervisionados', type: 'artigo', description: 'Aprendizado de máquina passo a passo.', durationInMinutes: 18 },
          ]
        },
        {
          order: 2,
          title: 'Prática de Machine Learning',
          durationInHours: 1.5,
          thumbnail: 'assets/course/cards/Ia.png',
          lessons: [
            { id: 6013, title: 'Treinando seu primeiro modelo', type: 'video', description: 'Do dado bruto à previsão.', durationInMinutes: 25, videoUrl: 'https://www.youtube.com/embed/example12' },
          ]
        }
      ]
    }
  ]
},

{
  title: 'Matemática',
  courses: [
    {
      id: 701,
      slug: 'matematica-basica-para-tecnologia',
      category: 'matematica',
      img: 'assets/course/cards/matematica.png',
      title: 'Matemática Básica para Tecnologia',
      studyHours: 40,
      totalLessons: 28,
      totalMinutes: 1200,
      studentCount: 1200,
      accessEndDate: 'Dez 2026',
      activities: 12,
      description: 'Reforce sua base matemática para a área de TI.',
      author: 'Prof. Carlos Alberto',
      year: '2025',
      tags: ['Matemática', 'Cálculo', 'Lógica'],
      level: 'Iniciante',
      modules: [
        {
          order: 1,
          title: 'Fundamentos Matemáticos',
          durationInHours: 2,
          thumbnail: 'assets/course/cards/matematica.png',
          lessons: [
            { id: 7011, title: 'Números e Operações Básicas', type: 'video', description: 'Revisão de conceitos essenciais.', durationInMinutes: 20, videoUrl: 'https://www.youtube.com/embed/example13' },
            { id: 7012, title: 'Funções e Gráficos', type: 'artigo', description: 'Representação visual de dados.', durationInMinutes: 18 },
          ]
        },
        {
          order: 2,
          title: 'Lógica e Raciocínio Matemático',
          durationInHours: 1.5,
          thumbnail: 'assets/course/cards/matematica.png',
          lessons: [
            { id: 7013, title: 'Problemas e Algoritmos Matemáticos', type: 'video', description: 'Como resolver problemas com lógica.', durationInMinutes: 22, videoUrl: 'https://www.youtube.com/embed/example14' },
          ]
        }
      ]
    }
  ]
}

  ];

  constructor() {}

  getCardSections() {
    return this.cardSections;
  }

  getCourseById(slug: string): Course | undefined {
    for (const section of this.cardSections) {
      const foundCourse = section.courses.find(
        (course) => course.slug === slug
      );
      if (foundCourse) {
        return foundCourse;
      }
    }
    return undefined;
  }

  getAllCourses(): Observable<Course[]> {
    const allCourses = this.cardSections.flatMap(section => section.courses);
    return of(allCourses);
  }
  

  getTotalLessons(slug: string): number {
    const course = this.getCourseById(slug);

    if (!course || !course.modules) {
      return 0;
    }

    return course.modules.reduce((total, module) => {
      return total + (module.lessons ? module.lessons.length : 0);
    }, 0); 
  }

 
}