Complejidad ciclomática

Es la métrica que mide cuantos flujos o sentencias de ejecución tiene un codigo, cuantos(ifs, then-else, while, for, switch, etc).

La cual se mide a mayor cómplejidad ciclomatica tiene mayor complejo es el código, más complicado será de leer, entender, modificar y mantener.

Por otro lado obteniendo la complejidad ciclomatica ayuda a determinar el numero maximo de pruebas que hay que realizar, las pruebas deben pasar al menos una vez por cada linea de código.

Como calcular la complejidad ciclomática
- Por defecto siempre comienza en 1
- Se suma 1 por cada una de las siguientes expresiones encontradas en el cuerpo del método:
	while | for | foreach | case | default | continue | goto | && | || | catch | ternary operator ?: | ??
- No se tendrán en cuenta a la hora de sumar las siguientes expresiones:
	else | do | switch | try | using | throw | finally | return | object creation | method call | field access
El resultado de la anterior suma nos daría la complejidad ciclomática del método, por lo tanto, la complejidad ciclomática de la clase sería la suma de la de las sentencias que tiene.

la tabla orientativa elaborada a partir de los análisis de McCabe:
Complejidad Ciclomática	Evaluación del riesgo
1-10	Programa Simple, sin mucho riesgo
11-20	Más complejo, riesgo moderado
21-50	Complejo, Programa de alto riesgo
+50	Programa no testeable, Muy alto riesgo

Si la métrica nos da el número de caminos independientes para un método, si queremos cubrir todos estos caminos con pruebas unitarias, podemos utilizar la complejidad ciclomática para estimar este esfuerzo. De esta forma un método con complejidad ciclomática 10 costará bastante más de cubrir con pruebas unitarias que un método con complejidad ciclomática 5. Y, además, nos da el número de casos de prueba unitarios básicos para obtener una cobertura del 100%.

Complejidad Cognitiva

La Complejidad Cognitiva es una medida de cómo es de difícil entender intuitivamente un bloque de código. A diferencia de la Complejidad Ciclomática, que determina qué dificultad tiene probar el código. Es decir, como es de bueno un algoritmo para que una persona interactúe con él en su mantenimiento.

A veces hay demasiadas variables locales para realizar un seguimiento de, o demasiadas declaraciones if / for En todos los casos, es más difícil entender lo que se supone que debe hacer el código porque es difícil mantener una imagen mental del algoritmo.

Para establecer el valor de la complejidad cognitiva, se establecen algunos puntos en los cuales nos tenemos que fijar dentro de lo que es un algoritmo:

-Se incrementa cuando hay salto en el flujo del código (arriba-abajo, izquierda-derecha). 

-Algunos elementos que incrementan la cpnplejidad cognitiva son:
	- loops
	- conditionals
	- catching/rescuing exceptions
	- switch or case statements
	- sequences of logical operators (e.g. a || b && c || d)
	- recursión
	- jumps to labels
	- for
-Se incrementa cuando las estructuras de control están anidadas.
- El código no es más complejo por usar estructuras del lenguaje que nos permitan incluir en una sola línea varias sentencias.