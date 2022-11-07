import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgetPasswordPage } from "./pages/ForgetPassword";
import { HomePage } from "./pages/Home";
import { OffersPage } from "./pages/Offers";
import { ProfilePage } from "./pages/Profile";
import { SignInPage } from "./pages/Signin";
import { SignUpPage } from "./pages/Signup";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/forgetpassword" element={<ForgetPasswordPage />} />
					<Route path="/offers" element={<OffersPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
