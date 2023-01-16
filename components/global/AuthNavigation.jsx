import { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../public/assets/Images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const AuthNavigation = () => {
	const navRef = useRef();

	const callback = () => {
		if (window.scrollY > 20) {
			navRef.current.classList.add("soildNav");
		} else {
			navRef.current.classList.remove("soildNav");
		}
	};

	useEffect(() => {
		addEventListener("scroll", callback);
		return () => {
			removeEventListener("scroll", callback);
		};
	}, []);

	return (
		<nav
			ref={navRef}
			className='nav flex items-center justify-between w-full h-16 fixed top-0 z-20 px-12'
		>
			<section className='flex items-center gap-5'>
				<Image src={Logo} alt='logo' width={100} />
				<ul className='flex gap-6 hover:child:text-slate-400 hover:child:cursor-pointer'>
					<li>Home</li>
					<li>TV shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
				</ul>
			</section>
			<ul className='flex items-center gap-5 hover:child:cursor-pointer'>
				<li className='flex items-center'>
					{/* <input type='text' /> */}
					<FaSearch />
				</li>
				<li>Kids</li>
				<li>
					<FaBell />
				</li>
				<li className='h-9 w-9 bg-green-700 rounded-md grid place-items-center'>
					G
				</li>
			</ul>
		</nav>
	);
};

export default AuthNavigation;
