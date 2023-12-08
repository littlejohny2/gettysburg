/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main>
			<title>Gettysburg  | Day 1</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						First Day of Battle
					</div>

					<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
						<img
						className="h-[540] w-[480] mx-auto object-cover object-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Gettysburg_Day1_1000.png/540px-Gettysburg_Day1_1000.png"
						alt="Day 1"
						/>
					</div>

					<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
						<img
						className="h-[540] w-[480] mx-auto object-cover object-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Gettysburg_Day1_1400.png/540px-Gettysburg_Day1_1400.png"
						alt="Day 1"
						/>
					</div>

					<div className="h-auto w-full float-left">
						<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
							<p className="my-2">AP Hill’s corps moved on Gettysburg to clear it of what he believed to be <a href='/firstencounter' className="text-blue-500 italic hover:underline">a small Pennsylvanian militia force.</a> Instead they encountered <a href='/bufordprepares' className="text-blue-500 italic hover:underline">Buford’s cavalry force</a> that attempted to slow him down while utilizing the natural terrain as much as possible. They delayed them several hours, allowing Reynolds to arrive with several brigades. There, a major engagement would begin. Quick and brutal fighting occurred in <a href='/herbstwoods' className="text-blue-500 italic hover:underline">Herbst’s Woods</a> and the <a href='/railroadcut' className="text-blue-500 italic hover:underline">railroad cut.</a> The Confederates were surprised and decisively beaten back across Willoughby Run. More forces would arrive as the day continued. Howard’s and Reynold’s corps defended Gettysburg in a semicircle, while AP Hill and now Ewell’s corps would renew their attack on all sides. Union fortunes turned, and they fought through the town of Gettysburg, retreating to Culp’s and Cemetery Hill. </p>
						</div>
					</div>

				</div>
			</div>
		</main>
  )
}