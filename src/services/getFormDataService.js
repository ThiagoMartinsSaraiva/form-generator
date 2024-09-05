export const getFormDataService = {
  run() {
    return [
      {
        id: 584173,
        user_id: 29187,
        name: "Desafio | Front-End II",
        type: "modern",
        slug: "UWv2GCT5",
        fields: [
          {
            slug: "07a2f70f7107",
            type: "text",
            asset: null,
            items: [],
            logic: {
              debug: true,
              active: false,
              target: null,
              actions: [],
            },
            value: "Qual seu nome?",
            options: {
              embed: [],
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: null,
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: null,
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
                showScore: false,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: null,
              onlyInteger: false,
              maxCharacters: {
                value: null,
                active: false,
              },
              multipleAnswer: null,
              allowOtherValue: false,
              requireBusinessEmail: false,
            },
            position: 0,
            validation: {
              required: false,
            },
            description: ["Digite seu nome completo"],
          },
          {
            slug: "x5f41nx6nhmg",
            type: "email",
            asset: null,
            items: [],
            logic: {
              active: false,
              target: null,
              actions: [],
            },
            value: "Qual seu e-mail?",
            history: 0,
            options: {
              embed: [],
              format: null,
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: "5",
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: "1",
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: true,
              onlyInteger: false,
              maxCharacters: {
                value: 140,
                active: null,
              },
              multipleAnswer: null,
              multiplesPerLine: null,
            },
            position: 1,
            description: [null],
          },
          {
            slug: "xxuncnxx21zh",
            type: "radio",
            asset: null,
            items: [
              {
                key: "x0pvq35su8c1n",
                label: "Abacaxi 🍍",
              },
              {
                key: "xvvf4hlxrfks",
                label: "Melancia 🍉",
              },
              {
                key: "xcj4p48s0n1h",
                label: "Maçâ 🍎",
              },
            ],
            logic: {
              active: true,
              target: "answer_value",
              actions: [
                {
                  type: "jump",
                  condition: [
                    {
                      data: {
                        exit: "1243869ab0b3",
                        enter: "Abacaxi",
                        enter2: null,
                      },
                      type: "contain",
                    },
                  ],
                },
                {
                  type: "jump",
                  condition: [
                    {
                      data: {
                        exit: "xcxuzk0fnf3a",
                        enter: "Melancia",
                        enter2: null,
                      },
                      type: "contain",
                    },
                  ],
                },
                {
                  type: "jump",
                  condition: [
                    {
                      data: {
                        exit: "xexpxjviz2g",
                        enter: "Maçâ",
                        enter2: null,
                      },
                      type: "contain",
                    },
                  ],
                },
              ],
            },
            value: "Qual sua fruta favorita?",
            history: 1,
            options: {
              embed: [],
              format: null,
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: "5",
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: "1",
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: true,
              onlyInteger: false,
              maxCharacters: {
                value: 140,
                active: null,
              },
              multipleAnswer: null,
              allowOtherValue: true,
              multiplesPerLine: false,
            },
            position: 2,
            description: ["Aquela que você poderia comer todos os dias!"],
          },
          {
            slug: "x6x10krziri5",
            type: "thankyou",
            asset: null,
            items: [],
            logic: {
              debug: true,
              active: false,
              target: null,
              actions: [],
            },
            value: "Você não receberá frutas hoje",
            options: {
              embed: [],
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: null,
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: null,
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
                showScore: false,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: null,
              onlyInteger: false,
              maxCharacters: {
                value: null,
                active: false,
              },
              multipleAnswer: null,
              allowOtherValue: false,
              requireBusinessEmail: false,
            },
            position: 3,
            validation: {
              required: false,
            },
            description: ["Resposta recebida"],
          },
          {
            slug: "1243869ab0b3",
            type: "thankyou",
            asset: null,
            items: [],
            logic: {
              debug: true,
              active: false,
              target: null,
              actions: [],
            },
            value: "Legal, vamos te enviar um 🍍",
            options: {
              embed: [],
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: null,
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: null,
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
                showScore: false,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: null,
              onlyInteger: false,
              maxCharacters: {
                value: null,
                active: false,
              },
              multipleAnswer: null,
              allowOtherValue: false,
              requireBusinessEmail: false,
            },
            position: 4,
            validation: {
              required: false,
            },
            description: ["Resposta recebida."],
          },
          {
            slug: "xcxuzk0fnf3a",
            type: "thankyou",
            asset: null,
            items: [],
            logic: {
              debug: true,
              active: false,
              target: null,
              actions: [],
            },
            value: "Legal, vamos te enviar uma 🍉",
            options: {
              embed: [],
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: null,
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: null,
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
                showScore: false,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: null,
              onlyInteger: false,
              maxCharacters: {
                value: null,
                active: false,
              },
              multipleAnswer: null,
              allowOtherValue: false,
              requireBusinessEmail: false,
            },
            position: 5,
            validation: {
              required: false,
            },
            description: ["Resposta recebida"],
          },
          {
            slug: "xexpxjviz2g",
            type: "thankyou",
            asset: null,
            items: [],
            logic: {
              debug: true,
              active: false,
              target: null,
              actions: [],
            },
            value: "Legal, vamos te enviar uma 🍎",
            options: {
              embed: [],
              minmax: {
                max: null,
                min: null,
                active: false,
              },
              rating: {
                endAt: null,
                legend: {
                  end: null,
                  start: null,
                  center: null,
                },
                startAt: null,
              },
              endForm: {
                file: null,
                type: ["message"],
                redirect: null,
                showScore: false,
              },
              redirect: {
                value: null,
                active: false,
              },
              required: null,
              onlyInteger: false,
              maxCharacters: {
                value: null,
                active: false,
              },
              multipleAnswer: null,
              allowOtherValue: false,
              requireBusinessEmail: false,
            },
            position: 6,
            validation: {
              required: false,
            },
            description: ["Resposta recebida"],
          },
        ],
        created_at: "2024-09-04T21:42:07.000000Z",
        updated_at: "2024-09-04T21:58:14.000000Z",
        style: {
          logo: {
            position: "left",
          },
          color: "#673AB7",
          closed: {
            title:
              "Opa, este formulário não está recebendo respostas no momento",
            attachment: null,
            description:
              "Você pode tentar novamente mais tarde, ou entrar em contato com o dono do formulário",
          },
          bgColor: "#ffffff",
          textColor: "#263238",
          background: [],
          removeBrand: true,
          questionColor: "#673AB7",
        },
        language: "pt",
        notifications: {
          webhook: {
            active: false,
            urls: [],
          },
          owner: false,
          respondent: false,
          emailForward: {
            active: false,
            value: null,
          },
          whatsapp: {
            active: false,
          },
        },
        apps: {
          gtm: {
            value: null,
            active: false,
          },
          pluga: {
            value: null,
            active: false,
          },
          fbPixel: {
            value: null,
            active: false,
          },
          gAnalytics: {
            value: null,
            active: false,
          },
        },
        team_id: null,
        scores: null,
        options: {
          scores: {
            active: false,
          },
          utms: {
            active: false,
            add_to_links: false,
          },
        },
        draft_of: null,
        closed: null,
        run_notifications_strategy: "completed",
        run_actions_strategy: "completed",
        trial: false,
        public_link: "https://form.respondi.app/UWv2GCT5",
        visibility: "public",
        potential_fraud: false,
        head: {
          title: "Título do formulário",
          description: null,
          updated_at: "2024-09-04T21:45:01.000000Z",
          thumbnail: null,
        },
      },
    ];
  },
};
