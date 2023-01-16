import Logo from "../../public/assets/Images/logo.png";
import Image from "next/image";

const Navigation = () => {
	return (
		<nav className='font-semibold flex justify-between items-center px-14 h-20'>
			<Image src={Logo} alt='logo' width={120} />
			<div className='space-x-12'>
				<button>Dummy</button>
				<button className='bg-[#E50A14] py-[6px] px-5 font-normal rounded-[3px] hover:bg-[#F40B12] focus:bg-[#F40B12]'>
					Sign in
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
