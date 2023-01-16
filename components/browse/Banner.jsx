import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useState, useEffect } from "react";

const Banner = ({ trending }) => {
	const [singleMovie, setSingleMovie] = useState("");

	useEffect(() => {
		setSingleMovie(trending[Math.floor(Math.random() * 20)]);
	}, []);

	return (
		<div
			className='h-[85vh] object-cover bg-cover flex items-center pl-12'
			style={{
				backgroundImage: `url(
					https://image.tmdb.org/t/p/original/${
						singleMovie.backdrop_path || singleMovie.poster_path
					}
				)`,
			}}
		>
			<section
				className={`w-[40vw] ${
					singleMovie ? "space-y-7" : "space-y-2"
				} text-xl textShadow`}
			>
				{singleMovie ? (
					<>
						<h1 className='text-6xl max-w-[80%]'>
							{singleMovie.title}
						</h1>
						<p>
							{singleMovie.overview.length > 140
								? singleMovie.overview.slice(0, 140) + "..."
								: singleMovie.overview}
						</p>
					</>
				) : (
					<>
						<h1 className='max-w-[80%] bg-gradient-to-r from-[#1414145b] rounded-xl h-14 w-[55%]'></h1>
						<p className='bg-gradient-to-r from-[#1414145b] w-[85%] rounded-xl h-8'></p>
						<p className='bg-gradient-to-r from-[#1414145b] w-[85%] rounded-xl h-8'></p>
						<p className='bg-gradient-to-r from-[#1414145b] w-[85%] rounded-xl h-8'></p>
					</>
				)}
				<div className='flex gap-4'>
					<button className='flex items-center gap-2 py-2 px-6 rounded-md capitalize btn bg-[#ffffffe1] text-black hover:bg-[#f3f3f3d0] font-semibold'>
						<FaPlay />
						play
					</button>
					<button className='flex items-center gap-2 py-2 px-6 rounded-md capitalize btn bg-[#6666664d]'>
						more info <ImInfo />
					</button>
				</div>
			</section>
		</div>
	);
};

export default Banner;
