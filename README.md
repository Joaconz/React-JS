# Proyecto final React JS - Joaquin Nuñez
El proyecto consiste en un E-commerce de productos y accesorios para personalizar el área de trabajo y ocio. 


## Páginas
* Home : La página principal muestra primeramente un slider, el cual indica la finalidad de los productos. Debajo, se muestra las colecciones o categorias de productos, y finalmente se da una vista general a todos los productos (llamada ItemListContainer).
* About : En esta pagina solo se muestra informacion de la marca. 
* Detalle:  Al hacer click sobre un producto, se lo lleva al cliente al ItemDetail, donde se muestra una imagen del producto, junto con su descripcion y un conjunto de botones para controlar la cantidad que se desea añadir al carrito. 
* Carrito : El ícono del carrito se encontrará siempre en la parte superior derecha, en el navBar. En caso de que el carrito esté vacío, no se mostrará el numero que indica la cantidad de productos añadidos al mismo, y al clickearlo le hará saber al usuario que no posee ningun producto en el carrito, con un boton para ir a ver los productos disponibles. Cuando hay productos en el carrito, se mostrará cada producto agregado, con un boton para eliminarlo. Debajo de los productos, se mostraran 3 botones, los cuales serviran para vaciar el carrito, volver a la lista de productos o terminar la compra. Clickeando el ultimo, se abrira un formulario para escribir informacion del comprador.

## Librerías
* React Router Dom // Colección de componentes que facilitan la navegación entre páginas en React, el cual use para la navegación dinámica de la misma
* FireBase // Base de datos provista por Google, utilizada para guardar la lista de productos y las órdenes de compra
* Toastify // crea alertas personalizadas para indicar que se agregó un producto al carrito
* Sweet Alert // crea alertas personalizadas para confirmar la compra e indicar el número de compra
* Tailwind CSS // se basa en el diseño de los componentes
* React Bootstrap // ayuda al diseño de los componentes

## Link de video de funcionamiento
https://drive.google.com/file/d/1oC6AOSALdFeurAC3tGd3m_IUqo2cCuE_/view?usp=sharing
