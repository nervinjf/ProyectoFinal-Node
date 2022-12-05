const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { authRoutes, usersRoutes, productRoutes, cartRoutes, productsInCartRoutes, ordersRoutes } = require("./routes");
const transporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

transporter
  .verify() // devuelve una promesa
  .then(() =>
    console.log("Estamos listos para enviar correos a diestra y siniestra")
  );

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});


app.use("/api/v1", authRoutes);
app.use('/api/v1', usersRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', productsInCartRoutes);
app.use('/api/v1', ordersRoutes)

app.use(handleError);

module.exports = app;
