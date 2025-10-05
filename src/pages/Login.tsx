// src/components/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Auth } from 'aws-amplify'; // Importing from AWS Amplify

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset previous errors

    try {
      // Using AWS Cognito sign-in method
      const user = await Auth.signIn(email, password);
      console.log('Login successful:', user);

      // Optional: Implement "remember me" with persistence if needed here

      navigate('/dashboard'); // Redirect to the dashboard after login
    } catch (error: any) {
      setError(error.message || 'An unknown error occurred during login');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to your Aussie Travel Explorer account</p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-xl border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                />
                <span className="ml-2">Remember me</span>
              </label>

              <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
                Forgot your password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg"
            >
              Sign In
            </button>

            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{' '}
              <Link to="/register" className="text-orange-600 hover:text-orange-500 font-medium">
                Sign up here
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-500">
          By signing in, you agree to our{' '}
          <Link to="/terms" className="text-orange-600 hover:text-orange-500">
            Terms
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-orange-600 hover:text-orange-500">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;



// src/components/Login.tsx
// Final-auth-pages

// firebase.ts (Make sure this is correctly set up)

// Login.tsx






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { getDoc, doc } from 'firebase/firestore';
// import { auth, db } from '../firebase';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       const userDocRef = doc(db, 'users', user.uid);
//       const userDoc = await getDoc(userDocRef);

//       if (userDoc.exists()) {
//         const role = userDoc.data().role;
//         navigate(role === 'admin' ? '/admin' : '/');
//       } else {
//         setError('User role not found. Please contact support.');
//       }
//     } catch (err: any) {
//       setError(err.message || 'Login failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
//           <p className="mt-2 text-gray-600">Sign in to your Aussie Travel Explorer account</p>
//         </div>

//         <div className="bg-white py-8 px-6 shadow-lg rounded-xl border">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3"
//                   aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center text-sm text-gray-700">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-orange-600 border-gray-300 rounded"
//                 />
//                 <span className="ml-2">Remember me</span>
//               </label>
//               <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
//                 Forgot your password?
//               </Link>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg"
//             >
//               Sign In
//             </button>

//             <p className="text-sm text-center text-gray-600">
//               Don’t have an account?{' '}
//               <Link to="/register" className="text-orange-600 hover:text-orange-500 font-medium">
//                 Sign up here
//               </Link>
//             </p>
//           </form>
//         </div>

//         <p className="text-center text-xs text-gray-500">
//           By signing in, you agree to our{' '}
//           <Link to="/terms" className="text-orange-600 hover:text-orange-500">
//             Terms
//           </Link>{' '}and{' '}
//           <Link to="/privacy" className="text-orange-600 hover:text-orange-500">
//             Privacy Policy
//           </Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
