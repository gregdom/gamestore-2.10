import CreateProductService from "../services/CreateProductService.js";
import CreateProductDetailService from "../services/CreateProductDetailService.js";
import ReadProductService from "../services/ReadProductService.js";
import UpdateProductService from "../services/UpdateProductService.js";

class MarketController {
  async create(req, res) {
    const id = req.user.id;
    const { name, slug, price, description, release } = req.body;
    const service = new CreateProductService();
    const product = await service.execute(
      id,
      name,
      slug,
      price,
      description,
      release
    );
    return res.json(product);
  }

  async createDetails(req, res) {
    const id = req.user.id;
    const idprod = req.params;
    console.log(id);
    console.log(idprod);
    const {
      cpumin,
      videocardmin,
      rammemorymin,
      storagemin,
      cpurec,
      videocardrec,
      rammemoryrec,
      storagerec,
      category,
      media,
    } = req.body;
    console.log(req.body);
    const service = new CreateProductDetailService();
    const product = await service.execute(
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
    );

    return res.json(product);
  }

  async read(req, res) {
    const id = req.user.id;
    const service = new ReadProductService();
    const product = await service.execute(id);
    return res.json(product);
  }

  async update(req, res) {
    const id = req.user.id;
    const {
      name,
      slug,
      price,
      description,
      release,
      cpumin,
      videocardmin,
      rammemorymin,
      storagemin,
      cpurec,
      videocardrec,
      rammemoryrec,
      storagerec,
      category,
      media1,
      media2,
      media3,
      media4,
      media5,
    } = req.body;
    const service = new UpdateProductService();
    const product = await service.execute(
      id,
      name,
      slug,
      price,
      description,
      release,
      cpumin,
      videocardmin,
      rammemorymin,
      storagemin,
      cpurec,
      videocardrec,
      rammemoryrec,
      storagerec,
      category,
      media1,
      media2,
      media3,
      media4,
      media5
    );

    return res.json(product);
  }
}

export default MarketController;
