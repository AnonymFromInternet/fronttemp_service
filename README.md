# Matches

Веб-приложение для отображения киберспортивных матчей с возможностью просмотра детальной информации о командах и игроках.

## Технологический стек

| Технология | Версия
|------------|--------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) | ^19.0.0
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | ~5.7.2
| ![Zustand](https://img.shields.io/badge/-Zustand-brown?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4T62TMUsDQRCFZ+4gCFaS2j9gYRAUNKW9vUVSWNjZ2FtZ2NgLlhZWgljoH1BIYSOYUkxnERA0cHeSQLy7wPDezrKXmBwYWHbfzrz3zZoEf7z2H79nG892zcKdYFBikKK0wiM+NnbGr2meDcBNp7PpBsOTRDmKPgCslgAD5nPT7Y4EzZh/ALqRlVdofbKQJajpMNcMUgJgL75eyLmvwsTYDhRCCCLghHmQuQ5B20iBmY7ztVLXYWw18wYAb4q+Uzru+hnYEoCZd+POYGkCvVb7OJMO3eGZZxBFEV9w+F0CUJpxdDk7QDrAdlLmhoIQOqXvZ6CkdvQSA2WlroS0O8rwkbF2IqOvIuB249g5ZjqQ1pdpCSG8Z5BU1PtKLQ5Q3K1WZ3Npnf8awJa+r3JMZeF9n4FyLlzWoHyYgdA3qKxZvQHMC/k9UbHOJQAAAABJRU5ErkJggg==) | ^5.0.3
| ![CSS Modules](https://img.shields.io/badge/-CSS%20Modules-000000?style=flat&logo=css3&logoColor=1572B6)
| ![UUID](https://img.shields.io/badge/-UUID-338ee8?style=flat) | ^11.1.0

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/AnonymFromInternet/fronttemp_service.git

# Перейти в директорию проекта
cd fronttemp_service

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

## Структура проекта

```
src/
├── assets/          # Шрифты и изображения
├── components/      # UI компоненты
├── constants/       # Константы проекта
├── mocks/           # Мок-данные на случай неработающего API
├── store/           # Zustand хранилище
└── types/           # TypeScript типы
```

## Проблемы

**Некорректные URL в документации:**

В документации указаны следующие URL:
- https://app.ftoyd.com/fronttemp-service
- https://app.ftoyd.com/fronttemp

Оба URL не работают.

Существует расхождение между URL, указанным в Swagger-документации, и фактическим URL в приложении. В настоящее время ни один из них не работает корректно. Необходимо согласовать правильный эндпоинт с бэкенд-командой.

## Моковые данные
Вместо них в данный момент впроекте используются моковые данные.
Для их замены на реальные данные, приходящие с API - в src/App.tsx заменить fetchMockMatches на fetchMatches при деструктуризации из useMatchesStore, а также в хуке useEffect.
В src/constants/constants.ts - поменять значение BASE_URL на рабочий эндпоинт.

## Лицензия

MIT

## TODO: Добавить инфо по поводу кривого урла. В сваггере он один, в ссылке он другой. В итоге ни тот ни другой не работает.
