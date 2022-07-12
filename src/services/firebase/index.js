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
    if (err.code?.indexOf('user-not-found') >= 0) {
      return { errors: ['usuário não registrado!'] };
    }
    return { errors: ['e-mail/senha inválidos!'] };
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
    // ...então crie um com sua conta google:
    const { email, displayName, photoURL } = logedUser;
    const createdAt = new Date();
    await setDoc(docRef, { email, displayName, photoURL, createdAt });
    return docRef;
  } catch (err) {
    console.log('Erro em *createUserDocument*:', err); // debug
    return {
      errors: ['Não foi possível verificar/criar o registro do usuário'],
    };
  }
}
