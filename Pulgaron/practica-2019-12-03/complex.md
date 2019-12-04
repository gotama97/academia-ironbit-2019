
COMPLEJIDAD CICLOMATICA

La complejidad ciclomática es una métrica de calidad software basada en el cálculo del número de caminos independientes que tiene nuestro código.

Estos caminos se identifican a partir de las estructuras de control (condicionales, bucles, …) incluidas en la mayoría de los lenguajes de programación, y más concretamente, a partir del diagrama de flujo de cada uno de nuestros métodos.

Complejidad ciclomática ¿Nuestro código es fácil de mantener y probar?
15 noviembre, 2012 por Joaquín Oriente

La complejidad ciclomática es una métrica de calidad software basada en el cálculo del número de caminos independientes que tiene nuestro código.

Estos caminos se identifican a partir de las estructuras de control (condicionales, bucles, …) incluidas en la mayoría de los lenguajes de programación, y más concretamente, a partir del diagrama de flujo de cada uno de nuestros métodos.

¿Para qué sirve la complejidad ciclomática?
Esta métrica fué propuesta por Thomas McCabe en 1976 y permite tomar la temperatura de nuestro código respecto su nivel de mantenibilidad, la probabilidad de incluir fallos, o el esfuerzo necesario para poder probar todos sus caminos.

La idea es sencilla, cuanto más compleja sea la lógica de un código, más difícil será de entender, mantener y probar.

Si tienes curiosidad, y quieres ver esto mismo de manera gráfica, échale un vistazo a este diagrama de flujo que muestra «la realidad» de un método con complejidad ciclomática alta. ¿Te parece fácil de mantener? Claramente… ¡no!.

¿Y cómo se calcula?
Si nos atenemos a la definición de complejidad ciclomática, como detección y recuento de caminos independientes, la idea más «purista» es acudir al diagrama de flujo, tratarlo como un grafo, con sus nodos y aristas, y buscar cuántos caminos diferentes hay desde el nodo inicial al final.

En el ejemplo anterior sobre calcular si un año es bisiesto o no, habrían 3 posibles caminos (SI, NO-SI, NO-NO).

Otra manera de calcular la complejidad ciclomática sería con la fórmula (simplificada para un único punto de entrada  y salida)…

v(G) = e – n + 2, donde e representa el número de aristas y n el número de nodos.

Valores de referencia
Como se puede intuir, una complejidad ciclomática de 3 «habla» de un método sencillo, con poca lógica.

Thomas McCabe, establece en sus trabajos los siguientes valores de referencia:

<= 10, métodos sencillos, sin mucho riesgo.
> 10, <= 20, métodos medianamente complejos, con riesgo moderado.
> 20, <= 50, métodos complejos, con alto riesgo.
> 50, métodos inestables, de altísimo riesgo.


Complejidad cognitiva: métrica de software
Las métricas de complejidad (como la complejidad cognitiva) pueden ser utilizadas en el desarrollo, mantenimiento y reingeniería del software para estimar su riesgo, costo y estabilidad. Generalmente las más básicas contabilizan el tamaño del código (p.ej. número de líneas de código).

Sin embargo, desde un punto de vista basado en la calidad del software, cobra vital importancia la complejidad ciclomática. Esta métrica, propuesta por Thomas McCabe en 1976, se basa en el diagrama de flujo determinado por las estructuras de control de un determinado código. De dicho análisis se puede obtener una medida cuantitativa de la dificultad de crear pruebas automáticas del código y también es una medición orientativa de la fiabilidad del mismo. Esta métrica no obstante, está fuertemente vinculada al rendimiento del algoritmo “en su anfitrión” (el uso-máquina), pero no la mantenibilidad “en su implementación” (el uso humano). ¿Cómo podría medirse dicha complejidad? La respuesta a esta pregunta está en la complejidad cognitiva; la capacidad humana para comprender el algoritmo.

Complejidad cognitiva vs ciclomática
La complejidad ciclomática define el número de caminos independientes dentro de un fragmento de código y determina la cota superior del número de pruebas que se deben realizar para asegurar que se ejecuta cada sentencia al menos una vez. La relación porcentual entre esta cota y el número de iteraciones realizadas en un proceso de medición, se conoce como cobertura de código. De esta forma, un 100% de cobertura garantiza que todos los escenarios de un algoritmo han sido sometidos a pruebas unitarias.

in embargo, la implementación de un algoritmo no es necesariamente uniforme. Independientemente del lenguaje, existen múltiples implementaciones y no necesariamente tienen por qué cambiar su complejidad ciclomática.

Complejidad cognitiva: 3 criterios principales
cognitive-complexity

Incrementar cuando hay salto en la línea (arriba-abajo, izquierda-derecha) de de lectura de flujo del código
Incrementar cuando las estructuras de control están anidadas
Ignorar “estructuras atajo” que por facilidad de lectura condensen múltiples líneas de código en una

A la hora de analizar la complejidad cognitiva de un software, nuestro primer candidato sería seguramente SonarQube. (Pulsa aquí para descargar documentación) SonarQube, está ampliamente extendida en la comunidad de QA. Es usada como herramienta para calcular los umbrales de calidad, como la complejidad ciclomática.

Desde su blog “SonarSource” nos explican cómo están implementando esta métrica para los diferentes lenguajes (C/#/++, Java, JavaScript, etc), auque de momento el proyecto está en desarrollo.

Desde el departamento de operaciones de Axpe Consulting, hemos probado el plugin para proyectos python (ver plugin), liberado el 27 de Enero de 2017, descubriendo que ofrece un potencial de mejora en la mantenibilidad, de más de un 13% de la implementación de nuestros scripts en python.