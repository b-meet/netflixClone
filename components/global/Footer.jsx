import React from "react";

const Footer = () => {
	return (
		<footer className='max-w-[70rem] m-auto min-h-[20rem] text-slate-600 my-10 space-y-16'>
			<p className='mb-10'>
				Questions? Call{" "}
				<span className='hover:underline cursor-pointer'>
					000-800-040-1843
				</span>
			</p>
			<ul className='columns-4 space-y-3 gap-20 child:cursor-pointer hover:child:text-slate-400'>
				<li>FAQ</li>
				<li>Help Centre</li>
				<li>Account</li>
				<li>Media Centre </li> <li>Investor Relations</li>
				<li>Jobs</li>
				<li>Ways to Watch</li>
				<li>Terms of Use</li>
				<li>Privacy</li>
				<li>Cookie Preferences</li>
				<li>Corporate Information</li>
				<li>Contact Us</li>
				<li>Speed Test </li>
				<li>Legal Notices</li>
				<li>Only on Netflix</li>
			</ul>
			<p className='text-center'>
				All Rights Reserved @Copyright 1997-2023
			</p>
		</footer>
	);
};

export default Footer;
