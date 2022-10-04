import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class CreateProductService {
  async execute(id, name, slug, price, description, release) {
    const productQueryModelInit = new ProductQueryModel();
    const productName = await productQueryModelInit.findByName(name);

    if (productName) {
      return "Já existe um produto com esse nome em nosso sistema!";
    }

    const productSlug = await productQueryModelInit.findBySlug(slug);

    if (productSlug) {
      return "Esse slug já está em uso!";
    }

    const developer = await productQueryModelInit.findByDeveloper(id);

    if (!developer) {
      return "Algo errado aconteceu!";
    }

    const fk_id_developer = developer.iddeveloper;

    const product = await query(
      `INSERT INTO products VALUES (NULL, '${name}', '${slug}', '${price}', '${description}', '${release}', '${fk_id_developer}', '1');`
    );

    return "Produto registrado com sucesso!";
  }
}

export default CreateProductService;
