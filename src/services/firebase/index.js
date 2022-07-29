// Inicializador do Firebase:
import { initializeApp } from 'firebase/app';
// importa o serviço de autenticação (getAuth) + outros serviços:
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// importa os serviços da Firestore Database:
// Firestore + referenciador de documentos (doc) + funções CRUD
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
} from 'firebase/firestore';
// Configurações do meu cluster Firebase:
import firebaseConfig from './firebaseConfig';
// Validações de email, senha e nome de usuário:
import validations from '../../modules/validations';
// =================================
// Inicializa e configura o Firebase:
// =================================
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
// ================================================
// Configura o Provedor de autenticação via google:
// ================================================
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
// ================================================
// Inicia o banco de dados Firestore:
// ================================================
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
export const signInUsingEmailandPassword = async (email, password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    return userData;
  } catch (err) {
    // console.log(err);
    if (err.code?.indexOf('user-not-found') >= 0) {
      return { errors: ['usuário não registrado!'] };
    }
    return { errors: ['e-mail/senha incorretos!'] };
  }
};
// ================================================
// Exporta o serviço de registro de usuário...
// ...via email + senha (createUserWithEmailAndPassword):
// ================================================
export const registerUsingEmailAndPassword = async (
  email,
  password,
  username,
) => {
  try {
    const errors = validations(email, password, username);
    if (errors.length > 0) return { errors };
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userData;
  } catch (err) {
    // console.log(err);
    if (err.code?.indexOf('email-already-in-use') >= 0) {
      return { errors: ['este e-mail já está em uso!'] };
    }
    return { errors: ['Erro ao efetuar registro!'] };
  }
};
// ===================================================
// Exporta a função de inicialização de um documento...
// ...na coleção "users" do banco de dados:
// ===================================================
export async function createUserDocument(logedUser, username = null) {
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
    if (!displayName) displayName = username;
    if (!photoURL) photoURL = '';
    const createdAt = new Date();
    await setDoc(docRef, { email, displayName, photoURL, createdAt });
    return docRef;
  } catch (err) {
    // console.log('Erro em *createUserDocument*:', err);
    return {
      errors: ['Erro ao verificar/criar o registro do usuário'],
    };
  }
}
// =======================================
// Desloga usuário...
// =======================================
export const signOutUser = async () => {
  try {
    return await signOut(auth);
  } catch (err) {
    // console.log(err);
    return { errors: ['Erro ao deslogar usuário!'] };
  }
};
// ===================================================
// Observador de eventos de mudança de estado de login:
// ===================================================
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
// ==========================================
// Obtém todos os documentos de uma coleção:
// ==========================================
export const getAllDocs = async (collectionName) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docsQuerySnapshot = await getDocs(collectionRef);
    const itensLists = [];
    docsQuerySnapshot.forEach((docSnapShot) => {
      itensLists.push(docSnapShot.data());
    });
    return itensLists;
  } catch (err) {
    // console.log(`erro ao obter dados da coleção ${collectionName}`);
    return { errors: [`erro ao obter dados da coleção ${collectionName}`] };
  }
};
// // ==========================================
// // Popula a coleção 'categories':
// // ==========================================
// export const populateCategories = async (shopData) => {
//   try {
//     let i = 0;
//     while (i < shopData.length) {
//       // tenta obter a referência do documento:
//       const docRef = doc(
//         db,
//         'categories',
//         shopData[i].title.replace('/', '_').toLowerCase(),
//       );
//       // eslint-disable-next-line no-await-in-loop
//       await setDoc(docRef, shopData[i]);
//       i += 1;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
