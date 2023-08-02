# Trial Example - MercadoPago Checkout PRO

## Introducción

Dada la documentación de Mercado Pago Developers para [integrar Checkout PRO](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro).

Tomado el [ejemplo oficial de integracion](https://github.com/mercadopago/checkout-payment-sample) allí presentado como caso de implementación.

Con el objetivo de realizar una transacción digital de prueba entre un cliente y un vendedor.

Se procedió a:

- Recuperar el proyecto './client/reactjs/', acondicionarlo a las nuevas variables de servidor y configuración de TOKEN

- Replicar el servidor NodeJS del proyecto './server/node/' por medio del framework **FastAPI**

- Implementar la biblioteca SDK para **Python** hecha por MercadoPago


## Desarrollo:

Por medio de la interface React, se envía un request que ejecuta una operación POST en el path '/create_preference'. El body del request es como se muestra a continuación:

 {'quantity': 1, 'price': '10', 'amount': 10, 'description': 'Some book'}

Utilizamos esa data para construir una variable local, que finalmente utilizamos como argumento de uno de los métodos internos de la instancia de la SDK.

En este caso estamos creando una 'preferencia' que es una representación de la transacción previa a la transferencia.

El return del método es un response de los servidores de MercadoPago, y cuando esa información llega al frontend de React, éste redirige la interface hacia la plataforma de pagos de MercadoPago. 

Una vez finalizada la transacción nos redirige hacia otro endpoint donde se imprimen los resultados de la transacción por pantalla. 

## Resultado:
![gif](https://github.com/jackonedev/CheckoutPRO_example/blob/main/trial_example.gif?raw=true)

## Forma de uso:
1) descargar este proyecto
2) instalar dependencias del lado del cliente (npm install)
3) instalar dependencias del lado del server (py -m venv venv | .\venv\Scripts\activate) | pip install -r requirements.txt)
4) correr el frontend en un servidor local en el puerto 3000
5) correr el backend en un servidor local en el puerto 8000
6) ejecutar la interface react desde un navegador web accediendo a la url 'localhost:3000'


## Contacto

Por cualquier duda o sugerencia af.stigliano@gmail.com
