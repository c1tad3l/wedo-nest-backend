<h1>wedo-nest-backend</h1>

## Описание

Документация

## Установка

```bash
$ npm i
```

## Запуск

```bash
# режим разработки
$ npm run start

# режим просмотра
$ npm run start:dev

# в прод
$ npm run start:prod
```

## Запуск тестов

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Запуск Докера

```bash
docker compose up --build
```

## Примеры запросов REST API

Здесь расписана краткая документация REST API, более подробная находится по адресу

```url
http://localhost:3000/api/docs
```

**Авторизация**

**/signup**

```javascript
const data = {
  username: "test",
  name: "Иван",
  lastName: "Иванов",
  surname: "Иванович",
  phone: "791717171717",
  email: "tester@gmail.com",
  passport_date: "1999-01-08",
  passport_series: "1212 1212",
  passport_number: "1232 3431 3531 4314",
  passport_by: "УМВД АСТРАХАНСКОЙ ОБЛАСТИ",
  certificate_number: "4341431",
  certificate_date: "1999-01-08",
  certificate_school_name: "№1",
  average_point: 3.34,
  is_general_education: "12",
  is_citizenship: "false",
  password: "123456"
}

// fetch
fetch('http://localhost:3000/auth/signup', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
  .then((response) => response.json())
  .then((data) => console.log(data));

// axios
axios({
  method: 'POST',
  url: "http://localhost:3000/auth/signup",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((res) => console.log(res));
```

**/signin**

```javascript
const data = {
  username: "test",
  password: "123456"
}

// fetch
fetch('http://localhost:3000/auth/signin', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// axios
axios({
  method: 'GET',
  url: "http://localhost:3000/auth/signin",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((res) => console.log(res));
```

**Пользователь**

| method             | resource         | description                                                                                    |
|:-------------------|:-----------------|:-----------------------------------------------------------------------------------------------|
| `GET`              | `/`              | Получение всех пользователей                                                                   |
| `GET`              | `/user/:id`      | Возвращает указанный идентификатор пользователя                                                |
| `PUT`              | `/user/:id`      | Обновляет уже созданного пользователя в базе данных                                            |
| `DELETE`           | `/user/:id`      | Удаляет пользователя из базы данных пользователя, которого вы хотите удалить                   |

**/user**

Получение всех пользователей

```javascript
// fetch
fetch('http://localhost:3000/user/', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer',
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// axios
axios({
  method: 'GET',
  url: "http://localhost:3000/user/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ',
  }
}).then((res) => console.log(res));
```