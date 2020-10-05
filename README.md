# Проект по практике "theater-service" для компании EPAM Systems
***
Данный проект реализован по архитектурному паттерну ***MVC*** на языке программирования Java. В качестве сборщика используется ***maven***.
---
Используемые технологии и библиотеки:
* ***Java Servlets***
* ***JPA***
* ***Hibernate***
* ***GSON***
* ***JUnit4***
* ***Log4j2***
* ***Java 8***
***
Данный проект реализован как _SPA_ приложение. Backend занимается получением данных с СУБД, придворительной их обработкой и отправкой клиенту.
---
Доступ к данным осуществляется с помощью _DAO_-слоя с помощью технологии _ORM_ _Hibernate_.
***
Frontend часть подробно описана в ветке ***frontend***. Реализует SPA приложение на чистом _JavaScript_. В качестве сборщика использовался ***webpack***.