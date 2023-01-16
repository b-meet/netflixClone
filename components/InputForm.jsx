"use Client";

import { useRouter } from "next/router";
import { useState } from "react";

const InputForm = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
			setError("");
			router.push("/browse");
		} else {
			setError("Enter a valid email ID");
		}
	};

	return (
		<>
			<p className='text-xl'>
				Ready to watch? Enter your email to create or restart your
				membership.
			</p>
			<div className='w-full relative'>
				<form className='flex items-center justify-center w-full'>
					<input
						type='text'
						className={`h-[70px] w-[70%] text-lg text-black px-4 outline-none transition ${
							error && "border border-b-2 border-yellow-500"
						} hover:bg-slate-100 focus:bg-slate-200`}
						placeholder='Email address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						type='submit'
						onClick={(e) => handleSubmit(e)}
						className='h-[70px] bg-[#F40B12] px-10 text-3xl'
					>
						Get Started
					</button>
				</form>
				{error ? (
					<span className='absolute left-2 text-yellow-500'>
						{error}
					</span>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default InputForm;
