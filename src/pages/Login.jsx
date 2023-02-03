
//  імперативний useNavigate
// import { useNavigate } from "react-router-dom";
// import FakeAPI from '../fakeAPI'
// const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     if (response.success) {
//       navigate("/profile", { replace: true });
//     }
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <form onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default Login
// декларативний Navigate
// import { Navigate, useState } from "react-router-dom";
// import FakeAPI from '../fakeAPI'

// export const Login = () => {
//   const [isLoginSuccess, setIsLoginSuccess] = useState(false);

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     setIsLoginSuccess(response.success);
//   };

//   if (isLoginSuccess) {
//     return <Navigate to="/profile" replace />;
//   }

//   return (
//     <div>
//       <h1>Login page</h1>
//       <form onSubmit={handleSubmit} />
//     </div>
//   );
// };