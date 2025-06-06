Заметки (PWA)
Это простое PWA-приложение для управления заметками. Оно работает офлайн, может быть установлено на домашний экран и поддерживает добавление, редактирование и удаление заметок.

Содержание
- Требования
- Установка
- Запуск проекта
- Использование
- Особенности
  
Для запуска этого проекта вам понадобится:

Visual Studio Code.
Расширение Live Server для VS Code.
Современный браузер (например, Chrome, Edge, Яндекс.Браузер).

1. Установка.
Склонируйте или скачайте проект:
git clone https://github.com/Res0m/PWAproj.git
Или просто скачайте ZIP-архив с проектом и распакуйте его.
Откройте проект в Visual Studio Code:
Запустите VS Code.
Выберите File → Open Folder и укажите папку с проектом.
Установите расширение Live Server:
Откройте вкладку Extensions (Ctrl+Shift+X).
Найдите расширение Live Server и установите его.
2. Запуск проекта.
Откройте проект в VS Code.
Запустите Live Server:
В нижней части окна VS Code найдите значок Go Live (обычно в правом нижнем углу).
Нажмите на него, чтобы запустить сервер.
Проект откроется в браузере по адресу http://127.0.0.1:5500.
Проверьте работу приложения:
Добавьте несколько заметок.
Попробуйте отключить интернет и убедитесь, что приложение работает офлайн.
3. Использование.
Добавление заметки
Введите текст заметки в поле ввода.
Нажмите кнопку "Добавить" , чтобы сохранить заметку.
Редактирование заметки
Нажмите кнопку "Редактировать" рядом с заметкой.
Текст заметки появится в поле ввода.
Внесите изменения и нажмите "Сохранить" .
Удаление заметки
Нажмите кнопку "Удалить" рядом с заметкой.
Заметка будет удалена из списка.
Офлайн-режим
Если интернет отключен, надпись "Офлайн-режим" появится в верхней части экрана. Приложение продолжит работать с ранее загруженными данными.

4. Особенности.
Офлайн-доступ: Приложение сохраняет данные в localStorage и работает без интернета.
Установка на домашний экран: Вы можете добавить приложение на домашний экран, чтобы использовать его как нативное приложение.
Адаптивный дизайн: Интерфейс оптимизирован для мобильных устройств и десктопов.
