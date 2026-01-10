# SFERA Landing (standalone, без Figma)

Это **самодостаточный** сайт (React + Vite + Tailwind), который повторяет твою структуру по скринам:
- Hero
- Экосистема (схема)
- Наши сервисы (2 карточки)
- Почему Sfera (4 причины)
- Как начать (3 шага)
- Нам доверяют (4 метрики)
- CTA + футер

## 1) Как посмотреть локально (Windows/Mac)
1. Установи **Node.js LTS** (после установки в терминале должны работать команды `node -v` и `npm -v`).
2. В папке проекта:
   ```bash
   npm install
   npm run dev
   ```
3. Открой в браузере: http://localhost:5173

> Если у тебя было: “npm не распознано” — это значит, что Node.js не установлен или не добавлен в PATH.

## 2) Как сделать прод-версию (сборку)
```bash
npm run build
```
Появится папка `dist/` — это **готовый статический сайт**.

## 3) Деплой (3 простых варианта)
### Вариант A — Vercel (самый быстрый)
- Загрузи проект в GitHub
- Vercel → Import Project → Deploy

### Вариант B — Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Вариант C — На любой хостинг (reg.ru / VPS / shared)
- Собери `dist/`
- Залей содержимое `dist/` в корень сайта (обычно `public_html/`)

## 4) Где менять тексты и ссылки
- Основной файл: `src/App.tsx`
- Кнопки (Telegram/Start) — в блоке HERO (ищи `HERO_LINK_TELEGRAM` и `HERO_LINK_START`)
- Цвета/свечения — в `src/styles.css` и Tailwind-классах

## 5) OG-картинка
- Файл: `public/og-image.jpg`
- Метатеги: `index.html` (поля `og:image`)

## 6) Yandex Metrika
Вставь код Метрики в `index.html` перед `</head>`.
