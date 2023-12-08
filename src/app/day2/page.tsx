/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main className='bg-white text-black'>
			<title>Gettysburg  | Day 2</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Second Day of Battle
					</div>

					<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
						<img
						className="h-[540] w-[480] mx-auto object-cover object-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Gettysburg_Battle_Map_Day2.png/642px-Gettysburg_Battle_Map_Day2.png"
						alt="Day 1"
						/>
					</div>

					<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
						<img
						className="h-[540] w-[480] mx-auto object-cover object-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Gettysburg_Day2_Hood.png/640px-Gettysburg_Day2_Hood.png"
						alt="Day 1"
						/>
					</div>

					<div className="h-auto w-full float-left">
						<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
							<p className="my-2">Lee had since arrived on the field, and decided to order an attack along the entrenched Union lines. His corps commander Longstreet, being more cautious and defensive minded, advised him otherwise. The Union left flank was to be attacked by Longstreet’s corps and the right by Ewell’s corps. The attacks failed to coordinate, with Longstreet being delayed until the afternoon. Sickle’s had moved out of position to occupy a peach orchard, leading to hours of fighting near the center. The Union position was nearly turned at <a href='/littleroundtop' className="text-blue-500 italic hover:underline">Little Round Top,</a> however minutes before the Confederates arrived there came Federal forces. Confederate attacks stalled by dusk, with heavy casualties on both sides.</p>
						</div>
					</div>

				</div>
			</div>
		</main>
  )
}