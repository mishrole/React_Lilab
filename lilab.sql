Create database if not exists `lilab`;
Use `lilab`;

/* Categorías */

Create table tb_categoria (
    id_categoria integer not null auto_increment,
    nombre_categoria varchar(30) not null,
    imagen_categoria text not null,
    primary key (id_categoria)
);

/* Productos */

Create table tb_producto (
    id_producto integer not null auto_increment,
    nombre_producto varchar(30) not null,
    descripcion_producto text not null,
    precio_producto double not null,
    stock_producto integer not null,
    imagen_producto text not null,
    id_categoria integer not null,
    primary key(id_producto),
    constraint `tb_producto_fk_tb_categoria` foreign key (id_categoria) references tb_categoria(id_categoria)
);

/* Datos */

Insert into tb_categoria values
(1, 'Frutas', 'https://i0.wp.com/www.entrenamiento.com/wp-content/uploads/2016/07/frutas-saludables.jpg?fit=1600%2C1066&ssl=1'), (2, 'Verduras', 'https://www.entrenamiento.com/wp-content/uploads/2015/07/verduras-saludables.jpg');

Insert into tb_producto values
(1, 'Melocotón Paraguayo', 'El melocotón paraguayo se caracteriza por su forma aplanada y su pulpa carnosa, dulce, refrescante y blanca. El melocotón paraguayo posee las mismas propiedades nutritivas que el melocotón: buena fuente de fibra, antioxidante y vitaminas (A, B, C y K).', 6, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/p/a/paraguayo_1.jpg', 1),
(2, 'Albaricoques ecológicos', 'Jugosos, deliciosos, con buen aroma y de sabor dulce, así son nuestros albaricoques. De tamaño pequeño y de color amarillo o anaranjado con un toque rojo. Los albaricoques suelen comerse al natural, pero también pueden ser usados para realizar mermelada de albaricoque o bien como ingrediente en algún zumo o batido.', 4, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/a/l/albaricoques_1_1.jpg', 1),
(3, 'Melón Galia', 'El melón Galia se caracteriza por su pequeño tamaño, su forma esférica y su piel amarillo-terrosa con toques verdes. Es un melón muy dulce y apreciado por todos los integrantes del hogar. Es una de las frutas de temporada más consumidas en verano para tomar al natural, en ensaladas, sopas o cócteles.', 3, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/m/e/melon-galia.jpg', 1),
(4, 'Manzanas Rojas', 'Las manzanas Rojas son ricas en vitaminas, minerales y fibra. Se les atribuyen numerosas propiedades saludables y por eso es una de las frutas más beneficiosas para la salud. Las manzanas rojas, al igual que otras manzanas, ayudan a reducir el colesterol, los niveles de azúcar y el riesgo de enfermedades cardiovasculares. Dada su alto nivel de fibra, también mejoran la digestión y el tránsito intestinal.', 6, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/m/a/manzana-roja_1_2.jpg', 1),
(5, 'Piña Golden', 'Esta deliciosa fruta tropical se caracteriza por contener una alta cantidad de azúcares, vitaminas y minerales que son beneficiosos para la salud. Esta piña es de cultivo convencional y perfecta en maduración y dulzor.', 7, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/p/i/pi_a_6.jpg', 1),
(6, 'Kiwis Asturianos', 'Este delicioso kiwi nos llega de Asturias. Una fruta que atrae por su exotismo y su curioso nombre. Recolectada en su punto óptimo de maduración para que disfrutes de su deliciosa naturaleza nutritiva y de beneficios saludables como la vitamina C y los antioxidantes. Deleitate con su exquisito sabor comiendolo solo o añadiendolo junto a otras frutas a una rica ensalada.', 8, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/k/i/kiwi_1.jpg', 1),
(7, 'Judías verdes', 'Las judías verdes Bobby se caracterizan por tener una vaina redonda, ser fina, muy carnosa y de sabor suave. Esta verdura no puede faltar en menestras, ensaladillas rusas o incluso en cremas. A demás, las judías verdes Bobby son el acompañante perfecto para recetas de carne y pescado.', 8, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/j/u/judia-bobby_1.jpg', 2),
(8, 'Brócoli verde', 'El brócoli verde es una hortaliza muy rica en vitaminas y en minerales. Aporta múltiples beneficios al organismo y se ha convertido en un super alimento imprescindible de la alimentación saludable. Su sabor y su textura hacen que no sea muy popular entre los más pequeños de la casa. Si quieres que tus hijos/as coman brócoli sin rechistar puedes elaborar Nuggets de brócoli al horno o bien croquetas de brócoli con queso.', 4, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/b/r/brocoli_4.jpg', 2),
(9, 'Espárragos verdes', 'Frescos y muy saludables. Los espárragos verdes son el vegetal estrella de la dieta mediterránea y la elección gastronómica más apetitosa de la primavera. Estos dos manojos de espárragos verdes provienen de Granada.', 7, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/e/s/esparragos_1.jpg', 2),
(10, 'Champiñón Portobello', 'Los champiñones Portobello son una variedad de setas similar al champiñón blanco. El sabor de los champiñones Portobello es más intenso, dulce, fresco y seductor. Esta seta es perfecta para ser incluida en tu dieta habitual. Los champiñones Portobello son ideales para laminarlos y comerlos crudos en ensaladas o bien para cocinarlos en la parrilla combinados con carne o pescado.', 3, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/c/h/champi_on-portobello.jpg', 2),
(11, 'Ajos Secos', 'Planta bulbosa con un aroma y sabor intensos. Los ajos secos son un ingrediente imprescindible para los amantes de la cocina. Sus usos en la cocina son innumerables, puedes usarlos como condimento para guisados y estofados, se puede freír y también puedes preparar salsas.', 5, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/a/j/ajos.jpg', 2),
(12, 'Pimientos Rojos', 'De intenso color rojo, de gran tamaño y piel lisa, así son nuestros pimientos rojos. Los pimientos son hortalizas muy ricas en fibras, hidratos de carbono, minerales, carotenos y vitaminas (A y C). Los pimientos rojos son ideales para comer en crudo o en ensaladas.', 6, 100, 'https://storage.googleapis.com/disfrutaverdura-media/catalog/product/cache/6b8245bae7647528e2edd9cb5e275de1/p/i/pimiento.jpg', 2);

