
export class Usuario {
  constructor(id = '', nome = '', email = '', telefone = '') {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

export const usuarioConverter = {
  toFirestore(usuario) {
    return {
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone
    };
  },

  fromFirestore(snapshot, options) {
    const dados = snapshot.data(options);

    return new Usuario(
      snapshot.id,
      dados.nome,
      dados.email,
      dados.telefone
    );
  }
};
