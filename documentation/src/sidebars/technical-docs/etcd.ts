export const etcd = [
  {
    type: 'category',
    label: '5.1.1. Окружение',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.1.1.1. Настройка ОС',
        id: 'tech-docs/etcd/setup-environments/os-setup',
      },
      {
        type: 'category',
        label: '5.1.1.2. Установка ПО',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.1.1.2.1. Etcd',
            id: 'tech-docs/etcd/components/etcd/lifecycle',
          },
        ],
      },
      {
        type: 'category',
        label: '5.1.1.3. Проверка',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.1.1.3.1. Etcd',
            id: 'tech-docs/etcd/components/etcd/check',
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: '5.1.2. Аутентификация',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.1.2.1. ЦА',
        id: 'tech-docs/etcd/certificates/all-center-authority',
      },
      {
        type: 'doc',
        label: '5.1.2.2. Сертификаты',
        id: 'tech-docs/etcd/certificates/all-certificates',
      },
    ],
  },
  {
    type: 'category',
    label: '5.1.3. Настройка',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.1.3.1. Инициализация',
        id: 'tech-docs/etcd/components/etcd/etcd-settings',
      },
      {
        type: 'doc',
        label: '5.1.3.2. Добавление узла',
        id: 'tech-docs/etcd/components/etcd/add-members',
      },
      {
        type: 'doc',
        label: '5.1.3.3. Удаление узла',
        id: 'tech-docs/etcd/components/etcd/remove-members',
      },
    ],
  },
  {
    type: 'doc',
    label: '5.1.4. Тюнинг',
    id: 'tech-docs/etcd/etcd-tuning',
  },
  {
    type: 'category',
    label: '5.1.5. Диагностика',
    collapsed: true,
    link: {
      type: 'doc',
      id: 'tech-docs/etcd/etcd-main',
    },
    items: [
      {
        type: 'doc',
        label: '5.1.5.1. Чек боксы',
        id: 'tech-docs/etcd/troubleshooting/check-box',
      },
      {
        type: 'doc',
        label: '5.1.5.2. Алиасы',
        id: 'tech-docs/etcd/troubleshooting/alias',
      },
      {
        type: 'doc',
        label: '5.1.5.3. Команды',
        id: 'tech-docs/etcd/troubleshooting/commands',
      },
      {
        type: 'doc',
        label: '5.1.5.5. Уплотнение',
        id: 'tech-docs/etcd/troubleshooting/compaction',
      },
      {
        type: 'doc',
        label: '5.1.5.6. Дефраг-ция',
        id: 'tech-docs/etcd/troubleshooting/defrag',
      },
      {
        type: 'doc',
        label: '5.1.5.7. Бекапы',
        id: 'tech-docs/etcd/troubleshooting/backups',
      },
      {
        type: 'doc',
        label: '5.1.5.8. Восстановление',
        id: 'tech-docs/etcd/troubleshooting/restore',
      },
    ],
  },
]
