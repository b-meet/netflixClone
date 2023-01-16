import Image from "next/image";
import { VscAdd } from "react-icons/vsc";
import { SlLike, SlDislike } from "react-icons/sl";

import Netflix from "../../public/assets/Images/netflix.png";

const ListItem = ({ children, genres }) => {
	console.log(genres);
	return children.map(
		({
			backdrop_path,
			original_title,
			original_name,
			id,
			name,
			title,
			genre_ids,
		}) => (
			<section key={id}>
				{backdrop_path ? (
					<div className='group/listItem min-w-[238px] h-max relative rounded-md bg-black bg-opacity-50 hover:delay-500 transition-all duration-300 hover:scale-150 hover:-translate-y-16 hover:shadow-2xl z-index-transition'>
						<Image
							src={Netflix}
							alt='logo'
							width={20}
							height={5}
							className='absolute top-1 z-[5] transition-opacity group-hover/listItem:opacity-0 group-hover/listItem:delay-500'
						/>
						<Image
							src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
							alt={original_title || original_name}
							priority
							height={140}
							width={238}
							className='rounded-md group-hover/listItem:rounded-b-none'
						/>
						<section className='text-base bg-[#181818] p-2 space-y-1 opacity-0 pointer-events-none group-hover/listItem:opacity-100 group-hover/listItem:pointer-events-auto group-hover/listItem:delay-500 transition-opacity rounded-b-md absolute top-[133px] right-0 left-0'>
							<h3 className='text-sm font-normal'>
								{title || name}
							</h3>
							<div className='flex items-center gap-1'>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<VscAdd />
								</span>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<SlLike />
								</span>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<SlDislike />
								</span>
							</div>
							<ul className='flex flex-wrap'>
								{genre_ids.map((id) => {
									let genre = "";
									genres &&
										genres?.map((item) => {
											if (item.id === id) {
												return (genre = item.name);
											}
										});
									return (
										<li className='text-[10px] after:content-["•"] after:ml-1 after:mr-1 last:after:content-[""] whitespace-nowrap'>
											{genre}
										</li>
									);
								})}
							</ul>
						</section>
					</div>
				) : (
					<div className='flex justify-center items-end pb-3 bg-gradient-to-t from-[#000000e7] to-[#181818] group/listItem min-w-[238px] h-[136px] relative rounded-md hover:delay-500 transition-all duration-300 hover:scale-150 hover:-translate-y-14 hover:shadow-2xl hover:rounded-b-none z-index-transition'>
						<span className='text-xs'>{name || title}</span>
						<section className='text-base bg-[#181818] p-2 space-y-1 opacity-0 pointer-events-none group-hover/listItem:opacity-100 group-hover/listItem:pointer-events-auto group-hover/listItem:delay-500 transition-opacity rounded-b-md absolute top-[133px] right-0 left-0'>
							<h3 className='text-sm font-normal'>
								{title || name}
							</h3>
							<div className='flex items-center gap-1'>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<VscAdd />
								</span>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<SlLike />
								</span>
								<span className='text-[10px] bg-[#2A2A2A] p-[6px] transition-colors duration-500 border border-[#919191] rounded-full hover:border-[#f2f2f2] cursor-pointer'>
									<SlDislike />
								</span>
							</div>
							<ul className='flex flex-wrap'>
								{genre_ids.map((id) => {
									let genre = "";
									genres &&
										genres?.map((item) => {
											if (item.id === id) {
												return (genre = item.name);
											}
										});
									return (
										<li className='text-[10px] after:content-["•"] after:ml-2 last:after:content-[""] whitespace-nowrap'>
											{genre}
										</li>
									);
								})}
							</ul>
						</section>
					</div>
				)}
			</section>
		)
	);
};

export default ListItem;
