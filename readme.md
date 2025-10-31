# QMobile

React приложение с Tailwind CSS

## Структура проекта

```
QMobile/
├── public/
│   ├── Images/
│   │   └── 01 - Welcome page/    # Изображения для Welcome страницы
│   │       ├── WP.jpg            # Основное изображение Welcome Page
│   │       ├── welcome1.jpg
│   │       ├── welcome2.jpg
│   │       ├── welcome3.jpg
│   │       └── ...
│   └── index.html
├── src/
│   ├── components/               # Компоненты приложения
│   │   ├── WelcomePage/
│   │   │   ├── WelcomePage.js      # Главный компонент
│   │   │   ├── WelcomeHeader.js    # Шапка с кнопкой Skip
│   │   │   ├── WelcomeHero.js      # Hero секция с фоновым изображением
│   │   │   ├── WelcomeButtons.js   # Кнопки навигации
│   │   │   ├── PageIndicators.js   # Индикаторы страниц
│   │   │   ├── index.js
│   │   │   └── STRUCTURE.md         # Структура компонента
│   │   └── README.md            # Документация по компонентам
│   ├── App.js                   # Главный компонент
│   ├── index.js                 # Точка входа
│   └── index.css                # Глобальные стили (Tailwind)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Где что добавлять

### 📁 **Изображения**
- **Путь**: `public/Images/[Название папки]/`
- **Использование**: В компонентах путь начинается с `/Images/...`
- **Пример**: `public/Images/01 - Welcome page/welcome1.jpg` → `/Images/01 - Welcome page/welcome1.jpg`

### 📁 **Новые компоненты**
- **Путь**: `src/components/[ComponentName]/`
- **Структура**:
  ```
  ComponentName/
    ├── ComponentName.js    # Основной компонент
    └── index.js            # Экспорт
  ```
- **Импорт**: `import ComponentName from './components/ComponentName'`

### 📁 **Стили**
- **Глобальные**: `src/index.css` (Tailwind директивы)
- **Компонентные**: Можете создать `ComponentName.css` рядом с компонентом

## Установка

```bash
npm install
```

## Запуск

```bash
npm start
```

Приложение откроется в браузере по адресу [http://localhost:3000](http://localhost:3000)

## Сборка

```bash
npm run build
```

Собранное приложение будет в папке `build`

## Тестирование

```bash
npm test
```