import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

import ListItem from "./ListItem";

const List = ({
	continueWatching,
	trending,
	topRated,
	upcomming,
	tvShows,
	genres,
	topRatedTvShows,
	popularTvShows,
}) => {
	const router = useRouter();

	const data = [
		{ id: 1, title: "continue watching", details: continueWatching },
		{ id: 2, title: "top searches", details: topRated },
		{ id: 3, title: "trending now", details: trending },
		{ id: 4, title: "popular TV shows", details: popularTvShows },
		{ id: 5, title: "latest TV shows", details: tvShows },
		{ id: 6, title: "upcomming movies", details: upcomming },
		{ id: 7, title: "top rated TV shows", details: topRatedTvShows },
	];

	return (
		<>
			{data.map(({ id, title, details }) => (
				<article className='my-6 pl-12 capitalize ' key={id}>
					<h3 className='mb-3'>{title}</h3>
					<div className='group/list relative'>
						<article className='flex gap-2 items-center'>
							<ListItem genres={genres}>{details}</ListItem>
						</article>
						<div className='absolute top-0 right-0 w-[66px] rounded-l-md h-full bg-black bg-opacity-60 z-[5]'>
							<button
								onClick={() =>
									router.push("/browse/continueWatching")
								}
								className='pl-3 invisible text-xs opacity-80 group-hover/list:visible h-full w-full flex items-center gap-2 hover:opacity-100 transition-colors'
							>
								See <br /> more <FaChevronRight />
							</button>
						</div>
					</div>
				</article>
			))}
		</>
	);
};

export default List;
