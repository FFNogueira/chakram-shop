/* eslint-disable no-unused-vars */
// Inicializador do Firebase:
import { initializeApp } from 'firebase/app';
// importa o serviço de autenticação (getAuth) + outros serviços:
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// importa os serviços da Firestore Database:
// Firestore + referenciador de documentos (doc) + funções CRUD
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
// Configurações do meu cluster Firebase:
import firebaseConfig from './firebaseConfig';
// minhas validações de email e senha:
import validations from '../../modules/validations';

// =================================
// Inicializa e configura o Firebase:
// =================================
const firebaseApp = initializeApp(firebaseConfig);
// ===============================================
// Configura o Provedor de autenticação via google:
// ===============================================
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
// =================================================
// Inicia o banco de dados Firestore:
// =================================================
export const db = getFirestore();
// ================================================
// Exporta o serviço geral de autenticação/login...
// ================================================
export const auth = getAuth();
// ================================================
// Exporta o serviço de autenticação/login...
// ...via conta do google (signInWithGooglePopup):
// ================================================
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// ================================================
// Exporta o serviço de autenticação/login...
// ...via email + senha (signInWithEmail):
// ================================================
export const signInUsingEmailandPassword = async (_email, _password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, _email, _password);
    return userData;
  } catch (err) {
    console.log(err);
    if (err.code?.indexOf('user-not-found') >= 0) {
      return { errors: ['usuário não registrado!'] };
    }
    return { errors: ['e-mail/senha inválidos!'] };
  }
};
// ================================================
// Exporta o serviço de registro de usuário...
// ...via email + senha (createUserWithEmailAndPassword):
// ================================================
export const registerUsingEmailAndPassword = async (_email, _password) => {
  try {
    const errors = validations(_email, _password);
    if (errors.length > 0) return { errors };
    const userData = await createUserWithEmailAndPassword(
      auth,
      _email,
      _password,
    );
    return userData;
  } catch (err) {
    console.log(err);
    if (err.code?.indexOf('email-already-in-use') >= 0) {
      return { errors: ['este e-mail já está em uso!'] };
    }
    return { errors: ['Erro ao efetuar registro!'] };
  }
};
// ====================================================
// Exporta a função de inicialização de um documento...
// ...na coleção "users" do banco de dados:
// ====================================================
export async function createUserDocument(logedUser) {
  try {
    // tenta obter a referência ao documento relativo a 'uid' do usuário que logou:
    const docRef = doc(db, 'users', logedUser.uid);
    // tenta obter o documento do usuário:
    const userDoc = await getDoc(docRef);
    // Se o usuário já possui documento/cadastro...
    // ...então apenas retorne a referência do documento:
    if (userDoc.exists()) return docRef;
    // Se o usuário ainda não tem cadastro/documento...
    // ...então crie um novo:
    let { displayName, photoURL } = logedUser;
    const { email } = logedUser;
    if (!displayName) displayName = email;
    if (!photoURL) photoURL = '';
    const createdAt = new Date();
    await setDoc(docRef, { email, displayName, photoURL, createdAt });
    return docRef;
  } catch (err) {
    console.log('Erro em *createUserDocument*:', err); // debug
    return {
      errors: ['Erro ao verificar/criar o registro do usuário'],
    };
  }
}
