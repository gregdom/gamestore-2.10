import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class CreateProductDetailService {
  async execute(
    id,
    idprod,
    cpumin,
    videocardmin,
    rammemorymin,
    storagemin,
    cpurec,
    videocardrec,
    rammemoryrec,
    storagerec,
    category,
    media
  ) {
    const productQueryModelInit = new ProductQueryModel();
    const developerReturn = await productQueryModelInit.findByDeveloper(id); // 52

    if (!developerReturn) {
      return "Algo errado aconteceu! > Developer";
    }

    const developer = developerReturn.iddeveloper; // 48

    const productExists = await productQueryModelInit.findByPk(idprod.id);

    if (!productExists) {
      return "Algo errado aconteceu! > Product";
    }

    if (
      productExists &&
      productExists.fk_id_developer !== parseInt(developer)
    ) {
      return "Não permitido! Algo deu errado.";
    }

    await query(
      `INSERT INTO requirementsmin (idreqmin, cpu, videocard, rammemory, storage, id_product_prod) VALUES (NULL, '${cpumin}', '${videocardmin}', '${rammemorymin}', '${storagemin}', '${idprod.id}');`
    );

    await query(
      `INSERT INTO requirementsrec (idreqrec, cpu, videocard, rammemory, storage, id_product_prod) VALUES (NULL, '${cpurec}', '${videocardrec}', '${rammemoryrec}', '${storagerec}', '${idprod.id}');`
    );

    await query(
      `INSERT INTO products_categories (idproductscategories, id_product, id_categories) VALUES (NULL, '${idprod.id}', '${category}');`
    );

    media.forEach((element) => {
      console.log(element, "DETAIL");
      query(
        `INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${element.mediaurl}', '${idprod.id}');`
      );
    });

    return "As informações do produto foram cadastradas!";
  }
}

export default CreateProductDetailService;
