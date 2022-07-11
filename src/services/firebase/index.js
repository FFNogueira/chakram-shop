/* eslint-disable no-unused-vars */
// Inicializador do Firebase:
import { initializeApp } from 'firebase/app';
// importa o serviço de autenticação (getAuth) + outros serviços:
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
// =================================================
// Inicia o banco de dados Firestore:
// =================================================
export const db = getFirestore();
// ================================================
// Exporta o serviço de autenticação/login...
// ...via conta do google (signInWithGooglePopup):
// ================================================
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
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
    // ...então crie um:
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
