import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class UpdateProductService {
  async execute(
    id,
    name,
    slug,
    price,
    description,
    release,
    cpumin,
    videocadrrec,
    rammemorymin,
    storagemin,
    cpurec,
    videocarrec,
    rammemoryrec,
    storagerec,
    category,
    media1,
    media2,
    media3,
    media4,
    media5
  ) {
    const productQueryModelInit = new ProductQueryModel();
    const developer = await productQueryModelInit.findByDeveloper(id);

    if (!developer) {
      return "Algo errado aconteceu!";
    }

    const productName = await productQueryModelInit.findByName(name);

    if (productName && productName.fk_id_developer !== parseInt(developer)) {
      return "Esse nome está em uso por outra desenvolvedora!";
    }

    const productSlug = await productQueryModelInit.findBySlug(slug);

    if (productSlug && productSlug.fk_id_developer !== parseInt(developer)) {
      return "Slug não disponível!";
    }

    await query(
      `UPDATE productName SET name = '${name}', slug = '${slug}', price = '${price}', description = '${description}', release = '${release}' WHERE fk_id_developer = ${developer} LIMIT 1;`
    );

    return user;
  }
}

export default UpdateProductService;
