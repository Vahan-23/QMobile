# Структура компонентов

Эта папка содержит все компоненты приложения.

## Структура папок

```
src/
  components/
    WelcomePage/
      WelcomePage.js    # Основной компонент
      index.js          # Экспорт компонента
      (опционально) WelcomePage.css
```

## Как добавлять новые компоненты

1. Создайте папку с именем компонента в `src/components/`
2. Создайте файл `ComponentName.js` внутри папки
3. Создайте файл `index.js` для удобного импорта:
   ```js
   export { default } from './ComponentName';
   ```
4. Импортируйте компонент в других файлах:
   ```js
   import ComponentName from './components/ComponentName';
   ```

## Изображения

Изображения должны находиться в папке `public/Images/` и доступны по пути `/Images/...`

Пример:
- Файл: `public/Images/01 - Welcome page/welcome1.jpg`
- Путь в коде: `/Images/01 - Welcome page/welcome1.jpg`
