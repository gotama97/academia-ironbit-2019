##COMPLEJIDAD CICLOMATICA

Es una metrica para la calidad de software creada por McCabe Sr. in 1976.

La forma mas simple de describirla es diciendo que *es un recuento del numero de decisiones en el codigo*.Entre mas desiciones la complejidad aumenta.

###POR QUE ES IMPORTANTE

*Define la complejidad del codigo.
*Determina el numero de pruebas a hacer 

###COMO CALCULAR LA COMPLEJIDAD CICLOMATICA

**FORMULA :**
        **CYC=E-N+2P**

**DONDE : **
*P = numero de partes desconectadas del diagramade flujo (subrutina, llamada de programas, etc).

*E = numero de aristas (*transferencias de control*)

*N=numero de nodos (*grupo secuencial de declaraciones que contienen solo una transferencia de control*)

Esto se traduce en el numero de declaraciones.**+***

Las desiciones binarias *como las declaracioes if y while* agregan comlejidad **+**.

Los operadores booleanos pueden agregar complejidad o agregar nada de complejidad. Por ejemplo, se puede agregar uno si se encuentra un operador booleano dentro de una declaracion inicial.

**CONCLUSIONES**
Entre menor sea el numero de comlejidad mejor.
Esto ya que un codigo con mucha complejidad se vuelve complejo de testear, y esto resulta en mas errores.
Ayuda a la planificacion de un mmejor codigo.
Esta practica esta fuertemente vinculada al rendimiento del algoritmo *en su anfitrion* (el uso-maquina), pero no la mantebilidad *en su implementacion*

##COMPLEJIDAD COGNITIVA

Es una metrica para la calidad de software creada por McCabe Sr. in 1976.

Se utiliza para estimar el *riesgo*, *costo* y *estabilidad*. Esta metrica pude ser utilizada en el *desarrollo*,*mantenimiento* y *re-ingeneria*.

###POR QUE ES IMPORTANTE

Define el **numero de caminos indepedientes dentro de un fragmento de codigo** y determina la cota superior del numero de pruebas que se deben realizar para segurar que se ejecuta cada sentencia al menos una vez. La relacion porcentual entre esta cota y el numero de iteraciones realizadas en un proceso de medicion, se conoce como cobertura de codigo.De esta forma, un 100% d cbertura garantizada qe todos los escenarios de un algoritmo han sido sometidos a pruebas binarias.

Puede que haya veces que la complejidad en numero coincida con otra mas sin encambio esta no sera la misma complejidad. Ya que la complejidad *humana* paa mantener el codigo puede variar

###CRITERIOS
*Incrementar cuando hay salto en la linea(*arriba-abajo-izquierda-derecha*) de lectura de flujo del codigo.

*Incrementar cuando las estructuras de control estan anidadas.

*Ignorar *structuras atajo* que por facilidad de lecur condennsen multples lineas de codigo en una.

**CONCLUSIONES**

Es la capacidad humana para comprender el algoritmo 