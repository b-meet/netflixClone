import Head from "next/head";

import InputForm from "../components/InputForm";
import Benifits from "../components/Benifits";
import Footer from "../components/global/Footer";
import Navigation from "../components/global/Navigation";

const Home = () => {
	console.log("this is env variable value", process.env);
	return (
		<div>
			<Head>
				<title>MoviesFlix | TV shows, movies, web series</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<article className='shadow-[inset_0_0_120px_50px_rgba(0,0,0,1)] h-[100vh] bg-[-8rem] bg bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
				<section className=' bg-black bg-opacity-60'>
					<Navigation />
					<section className='flex justify-center items-center h-[calc(100vh-80px)]'>
						<div className='text-center flex flex-col gap-4 w-[50vw] items-center'>
							<h1 className='font-semibold text-6xl max-w-2xl leading-[1.10]'>
								Unlimited movies, TV shows and more.
							</h1>
							<span className='text-2xl mb-4'>
								Watch anywhere. Cancel anytime.
							</span>
							<InputForm />
						</div>
					</section>
				</section>
			</article>
			<div className='py-[4px] bg-gray-900' />

			<Benifits />
			<article className='grid place-items-center h-[30vh]'>
				<div className='text-center flex flex-col gap-4 w-[50vw] items-center'>
					<InputForm />
				</div>
			</article>
			<div className='py-[4px] bg-gray-900' />
			<Footer />
		</div>
	);
};

export default Home;
