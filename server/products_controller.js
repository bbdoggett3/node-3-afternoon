module.exports = {

    create: (req, res, next) => {
        //create_product.sql
        const db = req.app.get('db');

        db.create_product()
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong'});
            console.log(error)
        })
    },

    getOne: (req, res, next) => {
        //read_product.sql
        const db = req.app.get('db');

        db.read_product()
        .then(product => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong'});
            console.log(error)
        })
    },

    getAll: (req, res, next) => {
        //read_products.sql
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong'});
            console.log(error)
        })
    },

    update: (req, res, next) => {
        // update_product.sql
        const db = req.app.get('db');

        db.update_product()
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: `Opps! Something went wrong`});
            console.log(error)
        })
    },

    delete: (req, res, next) => {
        // delete_product.sql
        const db = req.app.get('db');

        db.delete()
        .then(() => sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong'});
            console.log(error)
        })

    }


}