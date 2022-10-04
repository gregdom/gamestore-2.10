import { query } from "../../../../config/db/SnipetConn.js";

class ProductQueryModel {
  async findByName(name) {
    const product = await query(
      `SELECT * FROM products WHERE name = '${name}';`
    );
    console.log("QUERING MODEL > NAME", product[0]);
    return product[0];
  }

  async findBySlug(slug) {
    const product = await query(
      `SELECT * FROM products WHERE slug = '${slug}';`
    );
    console.log("QUERING MODEL > SLUG", product[0]);
    return product[0];
  }

  async findAll(id) {
    const product = await query(
      `SELECT * FROM products WHERE fk_id_developer = ${id}`
    );
    return product;
  }

  async findByPk(id) {
    const product = await query(
      `SELECT * FROM products WHERE idproduct = ${id}`
    );
    return product[0];
  }

  async findByDeveloper(id) {
    const developer = await query(
      `SELECT * FROM developers WHERE id_user = ${id};`
    );
    console.log("QUERING MODEL > DEVELOPER", developer[0]);
    return developer[0];
  }
}

export default ProductQueryModel;
