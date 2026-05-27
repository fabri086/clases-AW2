-- Comenzamos a armar la base de datos
-- Conectar a la base de datos 'rotiseria'
\c rotiseria;

-- Creo la tabla 'menu'
CREATE TABLE menu(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    imagen VARCHAR(255),
    precio NUMERIC(10000,5)
    );

--insertamos 10 contenido
INSERT INTO menu (nombre, imagen, precio) VALUES
    ('Hamburguesa','hamburguesa.png', 9000),
    ('Lomo Completo','lomo.png', 12250),
    ('Milanesa napolitana','mila.png', 15890),
    ('Pollo al spiedo','pollo.png',32990),
    ('Empanada','criollo.png',6000),
    ('Pizza','pizza.png',12000),
    ('Pasta','pasta.png',9420),
    ('Papas','papas.png',2500),
    ('Ensalada','ensalada.png',2500),
    ('Matambre','matambre.png',16750);

