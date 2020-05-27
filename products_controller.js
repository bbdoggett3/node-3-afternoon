module.exports = {
  create: (req, res, next) => {
    //create_product.sql
    const db = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    db.create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch((error) => {
        res.status(500).send({ errorMessage: "Opps! Something went wrong" });
        console.log(error);
      });
  },

  getOne: (req, res, next) => {
    //read_product.sql
    const db = req.app.get("db");
    const { id } = req.params;

    db.read_product(id)
      .then((product) => res.status(200).send(product))
      .catch((error) => {
        res.status(500).send({ errorMessage: "Opps! Something went wrong" });
        console.log(error);
      });
  },

  getAll: (req, res, next) => {
    //read_products.sql
    const db = req.app.get("db");

    db.read_products()
      .then((products) => res.status(200).send(products))
      .catch((error) => {
        res.status(500).send({ errorMessage: "Opps! Something went wrong" });
        console.log(error);
      });
  },

  update: (req, res, next) => {
    // update_product.sql
    const db = req.app.get("db");
    const { params, query } = req;

    db.update_product(params.id, query.desc)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        res.status(500).send({ errorMessage: `Opps! Something went wrong` });
        console.log(error);
      });
  },

  delete: (req, res, next) => {
    // delete_product.sql
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product(id)
      .then(() => sendStatus(200))
      .catch((error) => {
        res.status(500).send({ errorMessage: "Opps! Something went wrong" });
        console.log(error);
      });
  },
};
