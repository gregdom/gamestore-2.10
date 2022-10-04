import handlebars from "handlebars";
import fs from "fs";

class handlebarsMailTemplate {
  async parse(templateData) {
    const templateFileContent = await fs.promises.readFile(templateData.file, {
      encoding: "utf-8",
    });
    const parseTemplate = handlebars.compile(templateFileContent);
    return parseTemplate(templateData.variables);
  }
}

export default handlebarsMailTemplate;
