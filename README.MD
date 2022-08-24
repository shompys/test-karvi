## Pruebas funcionales y unitarias

### TESTING CON JEST.

PRUEBAS FUNCIONALES

Es una prueba basada en la ejecución, revisión y retroalimentación de las funcionalidades previamente diseñadas para el software.Es decir, son pruebas específicas, concretas y exhaustivas para probar y validar que el software hace lo que debe y sobre todo, lo que se ha especificado.Dentro de los tipos de pruebas unitarias se encuentran:
- Unit Testing: Este tipo de testing consiste en probar de forma individual las funciones y/o métodos del código. Este tipo de testing se usa cuando queremos implementar Test Driven Development (TDD)Debido a lo específicas que son, generalmente son las pruebas automatizadas de menor coste, y pueden ejecutarse rápidamente por un servidor de Continuous Integration (integración continua o CI)

- Integration Testing: Verifican que los diferentes módulos y/o servicios usados por nuestra aplicación funcionen en armonía cuando trabajan en conjunto. Son el paso siguiente al Unit Testing y son mucho más costosas, ya que requieren que la aplicación esté configurada y corriendo.

- Functional Testing: Basados en los requerimientos del negocio, verifican el resultado de una acción, sin importarle los estados intermedios del sistema mientras se lleva a cabo la ejecución.

- End-2-end Testing (e2e): Verifican que los flujos que sigue un usuario trabajen como se espera, y pueden ser tan simples como cargar una página o verificar un login; o cosas más complejas como un pago en línea.Son de las más costosas, así que lo ideal es usarla en partes clave de nuestra aplicación, confiando en pruebas más livianas y básicas como Unit Testing

- Regression Testing: Se refiere a las pruebas que se aplican a algo que funcionaba en el pasado y se quiere asegurar que siga así. Si falla, significa que una nueva funcionalidad ha afectado otra funcionalidad que era correcta en el pasado, causando una “regresión”.
- Acceptance Testing: Son pruebas formales, ejecutadas para verificar si un sistema satisface sus requerimientos de negocio.Estas pruebas replican el comportamiento de los usuarios, a fin de rechazar cambios si no se cumplen los objetivos. Estos objetivos pueden ir más allá de obtener una respuesta específica, y medir el rendimiento del sistema. Se suelen aplicar al final del desarrollo, con el objetivo de que si algo salió mal, volver a corregirlo.

PUEBAS NO FUNCIONALES

Por otro lado, las Pruebas No Funcionales evalúas cosas como la disponibilidad, accesibilidad, usabilidad, mantenibilidad, seguridad, rendimiento.

---
Testeando Strings:

- Ejercicio A:  Testing Login Form.
    - Debemos crear 3 variables:
        - Username
        - Email
        - Password

 - Crear un test unitario para corroborar que venga un string en el contenido de la variable  username.

 - Crear un test unitario corroborando que un Email contenga el @ y no contenga caracteres especiales.

 - Crear un test unitario corroborando que un Password tenga más de 8 caracteres y alguna letra en Mayuscula

