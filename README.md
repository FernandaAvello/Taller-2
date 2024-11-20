# Proyecto Clínica

## Descripción
Este proyecto para una página web para una clínica ficticia.

## Características
- Vista Principal (Incluye sección de bienvenida, servicios, testimonios, pie de página)
- Presentación de Equipo Médico , listado.
- Página de Contacto (incluye formulario de contacto, mapa de la clínica)

## Requisitos
- Navegador Web.

## Ejecución
1. Clona el repositorio:
  ```bash
  git clone https://github.com/FernandaAvello/proyecto-clinica3.git
  ```
2. Navega al directorio del proyecto:
3. Doble click en archivo `index.html`

## Event Loop
El event loop en JavaScript es el mecanismo que gestiona la ejecución de tareas, la delegación de eventos y el manejo de operaciones asincrónicas,
permitiendo que JavaScript sea no bloqueante a pesar de ser un lenguaje de un solo hilo. Para entender cómo funciona,
es crucial conocer los elementos principales: stack, heap, y queue.

## 1. Heap
El heap es el espacio en memoria donde se almacenan objetos y datos dinámicos.
JavaScript usa el heap para almacenar variables y estructuras más complejas.
Es el lugar donde se gestionan las asignaciones de memoria.

## 2. Stack (pila de llamadas)
El stack es una estructura LIFO (Last In, First Out) que se utiliza para ejecutar funciones.
Cada vez que se llama a una función, se apila en el stack.
Cuando esa función termina, se "desapila".

## 3. Queue (cola de tareas)
La queue es una cola FIFO (First In, First Out) que contiene mensajes o tareas pendientes,
como callbacks de operaciones asincrónicas (por ejemplo, temporizadores, promesas resueltas o eventos de entrada).

## Declaración de Variables
Variables declaradas con const
validateEmail y validatePhone: Estas funciones están declaradas en el scope global del archivo, por lo que son accesibles en cualquier parte del script.
patientFullname: Declarada dentro del evento DOMContentLoaded, por lo que su scope está limitado a esa función.
Variables declaradas con let:

patientName, patientLastName, patientEmail, patientPhone: Estas variables están declaradas dentro del evento DOMContentLoaded, por lo que su scope está limitado a esa función. No son accesibles fuera de esta función.

En resumen, las variables declaradas con let y const dentro de la función del evento DOMContentLoaded tienen un scope limitado a esa función, mientras que las funciones validateEmail y validatePhone tienen un scope global.

## Uso del Debugger
Un depurador de JavaScript es una herramienta que permite a los desarrolladores:
-Detener la ejecución del programa en puntos específicos.
-Inspeccionar el estado del programa en ese momento.
-Seguir el flujo de ejecución línea por línea.
-Establecer puntos de interrupción.
-Examinar las variables mientras se ejecuta el código.

Para depurar JavaScript, se puede usar la palabra reservada debugger en el código. Esta sentencia especifica la línea exacta donde se
quiere que se detenga la aplicación web para ser depurada. Para que el script se detenga en la sentencia debugger, se debe tener el Dev Tools abierto y luego recargar la página.
También se puede usar el comando Ctrl+P Abrir archivo para ubicar el archivo por nombre y comenzar a depurar.
En Visual Studio Code, se pueden usar las siguientes opciones para depurar JavaScript:
-Run and Debug: Permite ejecutar y depurar el código en diferentes lenguajes de programación, incluyendo JavaScript.
-Javascript Debug Terminal: Permite ejecutar el código JavaScript en una terminal de depuración específica para este lenguaje.
-Debug URL: Permite depurar una URL específica en el proyecto.
