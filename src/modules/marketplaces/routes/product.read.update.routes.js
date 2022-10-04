marketRouter.get("/", marketControllerInit.read);

marketRouter.put(
  "/register-product/:id",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      slug: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      release: Joi.string().required(),
      cpumin: Joi.string().required(),
      videocardmin: Joi.string().required(),
      rammemorymin: Joi.string().required(),
      storagemin: Joi.string().required(),
      cpurec: Joi.string().required(),
      videocarrec: Joi.string().required(),
      rammemoryrec: Joi.string().required(),
      storagerec: Joi.string().required(),
      category: Joi.string().required(),
      media1: Joi.string().required(),
      media2: Joi.string().required(),
      media3: Joi.string().required(),
      media4: Joi.string().required(),
      media5: Joi.string().required(),
    },
  }),
  marketControllerInit.update
);
