
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';

import {
  doc,
  setDoc,
  getDoc,
  collection
} from 'firebase/firestore';

import { auth, db } from '../../firebase-init';
import { Usuario, usuarioConverter } from '../model/Usuario';

const usuariosRef = collection(db, 'Usuarios')
  .withConverter(usuarioConverter);

export function useAuthService() {

  async function cadastrarEmailSenha(nome, email, senha, telefone) {
    const resultado = await createUserWithEmailAndPassword(
      auth, email, senha
    );

    const usuario = new Usuario(
      resultado.user.uid,
      nome,
      email,
      telefone
    );

    await setDoc(doc(usuariosRef, usuario.id), usuario);

    await sendEmailVerification(resultado.user);
    await signOut(auth);
  }

  async function loginEmailSenha(email, senha) {
    const resultado = await signInWithEmailAndPassword(
      auth, email, senha
    );

    if (!resultado.user.emailVerified) {
      await signOut(auth);
      throw new Error('Confirme seu e-mail antes de entrar.');
    }

    const documento = await getDoc(
      doc(usuariosRef, resultado.user.uid)
    );

    if (!documento.exists()) {
      throw new Error('Usuário não encontrado.');
    }

    return documento.data();
  }

  async function recuperarSenha(email) {
    await sendPasswordResetEmail(auth, email);
  }

  return {
    cadastrarEmailSenha,
    loginEmailSenha,
    recuperarSenha
  };
}
