# ADMINS > PERMISSÕES:

<!-- ** (FUNCIONÁRIOS) **
- Criar contas de admin para novos funcionários;    CREATE
- Listar um funcionário;                            READ
- Listar todos os funcionários;                     READ
- Atualizar dados dos funcionários;                 UPDATE
- Excluir funcionários;                             DELETE -->
   
** (MARKETPLACES) **   
- Listar um marketplace;                            READ ✔
- Listar todos marketplaces;                        READ ✔
- Excluir marketplaces;                             DELETE ✔
   
** (CLIENTES) **   
- Listar um cliente;                                READ ✔
- Listar todos os clientes;                         READ ✔
- Excluir clientes;                                 DELETE ✔


# CUSTOMERS > PERMISSÕES:

- Criar conta de usuário;                           CREATE *
- Criar conta de marketplace                        CREATE
- Listar sua conta;                                 READ
- Atualizar sua conta;                              UPDATE
- Excluir sua conta;                                DELETE



PRINCIPAL
gamestore.com/admin

PRECISA LOGAR
gamestore.com/admin/login



Atualizar
id: 46                             >> id: 46
name: Mateus Bertol                >> name: Mateus Bertol de Oliveira
email: mateusbertol@hotmail.com    >> email: mateusol@hotmail.com
password: mateus                   >> password: mateusol

{
  iduser: 46,
  name: 'Mateus Bertol',
  email: 'mateusbertol@hotmail.com',
  password: '$2a$08$yRGgsl8mrGlz8pG5Z1UaJeonQPQlKtU4XMpLL47FogApAYMIrMfle',
  cpf: '96587452136',
  id_level: 1
}

INIT 1 - Verificar se o id existe:
NÃO: return "Usuário não encontrado";

SIM: 2 - Verificar se o email existe:
NÃO: return "Já existe outro usuário com esse email";




// import FindAllUsersService from "../services/FindAllUsersService.js";

  // async findAllUsers(req, res) {
  //   const usersInit = new FindAllUsersService();
  //   const users = await usersInit.execute();

  //   console.log(req.user.id);

  //   if (users.length > 0) {
  //     return res.json(users);
  //   }

  //   return res.json("Nenhum usuário (dir: users)");
  // }




  `INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${media1}', '${idprod.id}'), INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${media2}', '${idprod.id}'), INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${media3}', '${idprod.id}'), INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${media4}', '${idprod.id}'), INSERT INTO medias (idmedia, mediapath, id_product_medias) VALUES (NULL, '${media5}', '${idprod.id}'),`