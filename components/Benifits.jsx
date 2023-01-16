import Image from "next/image";
import tvImg from "../public/assets/Images/tv.png";
import mobile from "../public/assets/Images/mobile.jpg";
import devices from "../public/assets/Images/device-pile.png";
import children from "../public/assets/Images/children.png";

const benifitData = [
	{
		id: 1,
		title: "Enjoy on your TV.",
		text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
		img: tvImg,
		alt: "television",
	},
	{
		id: 2,
		title: "Download your shows to watch offline.",
		text: "Save your favourites easily and always have something to watch.",
		img: mobile,
		alt: "mobile",
	},
	{
		id: 3,
		title: "Watch everywhere.",
		text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
		img: devices,
		alt: "device-pile",
	},
	{
		id: 4,
		title: "Create profiles for children.",
		text: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
		img: children,
		alt: "childrens",
	},
];

const Benifits = () => {
	return (
		<article>
			{benifitData.map(({ id, title, text, img, alt }) => (
				<div
					key={id}
					className='child:even:flex-row-reverse child:first:pt-0 '
				>
					<article className='py-12 flex justify-around items-center '>
						<section className='max-w-[32%] space-y-7'>
							<h2 className='font-bold text-5xl'>{title}</h2>
							<p className='text-2xl'>{text}</p>
						</section>
						<Image src={img} alt={alt} width={500} height={400} />
					</article>
					<div className='py-[4px] bg-gray-900' />
				</div>
			))}
		</article>
	);
};

export default Benifits;
