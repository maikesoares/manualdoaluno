import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/utils/firebase';

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error('Firebase Auth Error:', error.code, error.message);
    throw error;
  }
};
