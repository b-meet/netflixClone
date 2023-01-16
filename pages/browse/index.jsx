import { useState, useEffect } from "react";
import Head from "next/head";
import AuthNavigation from "../../components/global/AuthNavigation";
import List from "../../components/browse/List";
import Banner from "../../components/browse/Banner";
import Footer from "../../components/global/Footer";

const Browse = ({
	continueWatching,
	trending,
	topRated,
	upcomming,
	tvShows,
	topRatedTvShows,
	popularTvShows,
	movieGenre,
	tvGenre,
}) => {
	const [genres, setGenres] = useState("");

	useEffect(() => {
		setGenres([...movieGenre.genres, ...tvGenre.genres]);
	}, [movieGenre, tvGenre]);

	return (
		<section className='select-none'>
			<Head>
				<title>Home - Netflix</title>
			</Head>
			<header className='bg-gradient-to-t from-[#000000e7] to-[#181818]'>
				<AuthNavigation />
				<Banner trending={trending.results} />
			</header>
			<div className='transitionalGradiant h-48 absolute top-[65vh] left-0 right-0'></div>
			<main className='mainGradiant pb-16 pt-2 m-auto text-xl font-semibold relative bottom-16'>
				<List
					continueWatching={continueWatching.results}
					trending={trending.results}
					topRated={topRated.results}
					upcomming={upcomming.results}
					tvShows={tvShows.results}
					topRatedTvShows={topRatedTvShows.results}
					popularTvShows={popularTvShows.results}
					genres={genres}
				/>
			</main>
			<Footer />
		</section>
	);
};

export const getStaticProps = async () => {
	const continueWatching = await fetch(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=8`
	);
	const continueWatchingData = await continueWatching.json();

	const trending = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=4`
	);
	const trendingData = await trending.json();

	const topRated = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=120`
	);
	const topRatedData = await topRated.json();

	const upcomming = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=2`
	);
	const upcommingData = await upcomming.json();

	const tvShows = await fetch(
		`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=4`
	);
	const tvShowsData = await tvShows.json();

	const topRatedTvShows = await fetch(
		`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=10`
	);
	const topRatedTvShowsData = await topRatedTvShows.json();

	const popularTvShows = await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=13`
	);
	const popularTvShowsData = await popularTvShows.json();

	const movieGenre = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
	);
	const movieGenreData = await movieGenre.json();

	const tvGenre = await fetch(
		`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`
	);
	const tvGenreData = await tvGenre.json();

	return {
		props: {
			continueWatching: continueWatchingData,
			trending: trendingData,
			topRated: topRatedData,
			upcomming: upcommingData,
			tvShows: tvShowsData,
			topRatedTvShows: topRatedTvShowsData,
			popularTvShows: popularTvShowsData,
			movieGenre: movieGenreData,
			tvGenre: tvGenreData,
		},
	};
};

export default Browse;
