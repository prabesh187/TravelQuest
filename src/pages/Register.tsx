// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, User, Eye, EyeOff, MapPin } from 'lucide-react';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     location: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [wantsNewsletter, setWantsNewsletter] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const ukLocations = [
//     'London', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol', 'Edinburgh',
//     'Glasgow', 'Leeds', 'Sheffield', 'Newcastle', 'Cardiff', 'Belfast', 'Other'
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (!agreeToTerms) {
//       setError('Please agree to the terms and conditions');
//       return;
//     }

//     setError('');
//     setSuccess(true);

//     // Simulate registration logic
//     setTimeout(() => {
//       console.log('User registered:', formData);
//       navigate('/login');
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
//           <p className="mt-2 text-gray-600">
//             Create your account and start exploring Australia
//           </p>
//         </div>

//         <div className="bg-white py-8 px-6 shadow-lg rounded-xl border">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* First Name */}
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//                   First Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                     placeholder="First name"
//                   />
//                 </div>
//               </div>

//               {/* Last Name */}
//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//                   Last Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                     placeholder="Last name"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Email address"
//                 />
//               </div>
//             </div>

//             {/* Location */}
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
//                 Location (UK)
//               </label>
//               <div className="relative">
//                 <MapPin className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                 <select
//                   id="location"
//                   name="location"
//                   required
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                 >
//                   <option value="">Select your location</option>
//                   {ukLocations.map(location => (
//                     <option key={location} value={location}>{location}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Passwords */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* Password */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                     placeholder="Password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-3"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
//                     placeholder="Confirm password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-3"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Checkboxes */}
//             <div className="space-y-4">
//               <div className="flex items-start gap-2">
//                 <input
//                   id="agreeToTerms"
//                   type="checkbox"
//                   checked={agreeToTerms}
//                   onChange={(e) => setAgreeToTerms(e.target.checked)}
//                   className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
//                   I agree to the <a href="#" className="text-orange-600">Terms</a> & <a href="#" className="text-orange-600">Privacy Policy</a>
//                 </label>
//               </div>

//               <div className="flex items-start gap-2">
//                 <input
//                   id="wantsNewsletter"
//                   type="checkbox"
//                   checked={wantsNewsletter}
//                   onChange={(e) => setWantsNewsletter(e.target.checked)}
//                   className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded"
//                 />
//                 <label htmlFor="wantsNewsletter" className="text-sm text-gray-700">
//                   Send me travel tips and updates
//                 </label>
//               </div>
//             </div>

//             {/* Error & Success Messages */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             {success && <p className="text-green-600 text-sm">Registration successful! Redirecting...</p>}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-500"
//             >
//               Create Account
//             </button>

//             {/* Login Link */}
//             <p className="text-center text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-orange-600 hover:text-orange-500">
//                 Sign in
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




// src/components/Register.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, MapPin } from 'lucide-react';
import { Auth } from 'aws-amplify'; // Importing from AWS Amplify

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const ukLocations = [
    'London', 'Manchester', 'Birmingham', 'Liverpool', 'Bristol', 'Edinburgh',
    'Glasgow', 'Leeds', 'Sheffield', 'Newcastle', 'Cardiff', 'Belfast', 'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setError('');
    setSuccess(false);

    try {
      // Using AWS Cognito sign-up method
      const { user } = await Auth.signUp({
        username: formData.email, // Using email as the username
        password: formData.password,
        attributes: {
          email: formData.email, // Default attribute
          given_name: formData.firstName, // Optional attributes
          family_name: formData.lastName
        }
      });

      setSuccess(true);
      console.log('User successfully registered:', user);

      // Redirect to login after delay
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error: any) {
      setError(error.message || 'Failed to register');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
          <p className="mt-2 text-gray-600">
            Create your account and start exploring Australia
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-xl border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="First name"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location (UK)
              </label>
              <div className="relative">
                <MapPin className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select your location</option>
                  {ukLocations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10 py-3 w-full border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms & Newsletter */}
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-orange-600">Terms</a> & <a href="#" className="text-orange-600">Privacy Policy</a>
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="wantsNewsletter"
                  type="checkbox"
                  checked={wantsNewsletter}
                  onChange={(e) => setWantsNewsletter(e.target.checked)}
                  className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded"
                />
                <label htmlFor="wantsNewsletter" className="text-sm text-gray-700">
                  Send me travel tips and updates
                </label>
              </div>
            </div>

            {/* Feedback */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Registration successful! Redirecting...</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-500"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-600 hover:text-orange-500">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
