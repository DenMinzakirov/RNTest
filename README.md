# Тестовое приложение по поиску фильмов 

## Описание 

Приложение позволяет по запросу вывести список филмов.  
__Важно__ api на текущий момент работает только с английскими словами
 
## Сборка и запуск проекта

### Dev
* склонировать проект https://github.com/DenMinzakirov/RNTest.git
* настроить окружение согласно рекомендациям https://reactnative.dev/
* npm install - установить зависимости
* npm start - запуск метро-сервера
* npm run android или npm run ios (или соответсвенно "npx react-native run-android") для запуска сборки проекта на устройство или эмулятор

### Готовая сборка для установки на телефоны __android__
https://github.com/DenMinzakirov/RNTest/raw/develop/apk/app-release.apk  

### Самые большие списки выводятся по запросам 'Potter' и 'Star'

# Особенности реализации
* Использовано API www.omdbapi.com - возвращает список фильмов с постером и годом производства (каждый запрос отдает 10 эл-тов)
* На отображение формируется список из полученых карточек (1 запрос = 10 шт) и при пролистывании к концу списка происходит дозапрос для следующей страницы и добавление эл-тов для отображения
* Для формирования списка используется компонент FlatList оптимизирующий память при отображении списков
* Для навигации по экранам (2 экрана Main и List) используется React Navigation (Tab navigation)
* При выборе любого эл-та из списка откроется модальное окно с данными по элементу
* Иконки, кнопки и поля ввода сформированы с помощью UI - React Native Elements
