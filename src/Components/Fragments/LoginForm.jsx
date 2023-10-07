import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika autentikasi di sini, misalnya dengan mengirimkan data ke server
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://info.murniteguhhospitals.com/wp-content/uploads/2023/08/Header.jpg")`, // Ganti dengan path gambar hutan
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-xs">
        <div className="grid place-items-center m-4">
          <img
            src={"./public/images/logo2.jpg"}
            alt="Logo"
            className="w-20 rounded-full hover:scale-110"
          />
        </div>

        <form
          className="bg-white shadow-2xl shadow-cyan-400 rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-lg font-extrabold mb-6">LOGIN</h2>

          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
              id="username"
              type="text"
              placeholder="Username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              // required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="transition rounded py-1 px-2 mb-8 w-full ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500
            hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <Link to={"/home"}>Login</Link>
            </button>
          </div>

          <div className="text-blue-500 text-xs text-center">
            <span>
              <Link to={"/"}>Kembali</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-indigo-500 via-purple-600 to-pink-600">
//       <div className="w-full max-w-xs">
//         <div className="grid place-items-center m-4">
//           <img
//             src={"./public/images/logo2.jpg"}
//             alt="Logo"
//             className="w-20 rounded-full hover:scale-110"
//           />
//         </div>

//         <form
//           className="bg-white shadow-2xl shadow-cyan-400 rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit}
//           style={{
//             backgroundImage: `url("./public/images/logo2.jpg")`, // Ganti dengan path gambar hutan
//             backgroundSize: "cover",
//           }}
//         >
//           <h2 className="text-center text-lg font-extrabold mb-6">LOGIN</h2>

//           <div className="mb-3">
//             {/* ... Bagian form seperti sebelumnya ... */}
//           </div>
//           <div className="mb-8">
//             {/* ... Bagian form seperti sebelumnya ... */}
//           </div>
//           <div className="flex items-center justify-between">
//             {/* ... Bagian tombol login seperti sebelumnya ... */}
//           </div>

//           <div className="text-blue-500 text-xs text-center">
//             {/* ... Bagian link "Kembali" seperti sebelumnya ... */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default LoginForm;
