/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main className='bg-white text-black'>
			<title>Gettysburg  | Day 1</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Herbst's Woods
					</div>

					<div className="h-auto w-3/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<p className="w-full mb-2 text-center">Confederate Arrival!</p>
						<p className="my-2">Archer’s brigade marched toward Willoughby Run, when they began receiving fire from Herbst Woods and artillery fire. Running for the cover of brush and forest, the 1st and 13th Alabama regiments occupied the bank of Willoughby Run while the 7th and 14th Tennessee swiftly pushed back Buford's men in Herbst Woods. Calef also had a section of artillery that decided to fall back. The left flank of the Union was under threat of being turned.</p>
					</div>

					<div className="h-auto w-5/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-96 object-cover object-center"
							src="https://www.wbritain.com/media/products/BLHA12_B269ED8178046.jpg?dimensions=499x428"
							alt="Battle of Chancellorsville"
							/>
							<p className="my-1 text-center">Iron Brigade at Herbst Woods</p>
						</div>
						<p className="w-full mb-2 text-center">The Iron Brigade</p>
						<p className="my-2">Meredith’s Iron Brigade of midwesterners arrived just in time. Without pausing to load, they formed behind McPherson’s Ridge, out of sight of the Confederates. The 2nd Wisconsin on the farthest right were first to crest the ridge, charging into Herbst Woods on orders of Reynolds, who was near the forest atop his horse viewing the Confederate position. The Confederates unleashed a volley, dropping 100 men. Reynolds was killed by a stray bullet from the volley. The regiments inside the woods requested support from the 13th Alabama and 1st Tennessee, positioned in the cover of Willoughby Run. They began to advance into the open and wheel to fire into the forest. The 7th Wisconsin was second over the ridge, followed by the 19th Indiana and 24th Michigan. Quickly, the Confederate regiments in the open were overwhelmed. There was no time for an orderly retreat. Without support, the Confederates in the woods withdrew as well. Many Confederates, in the confusion, surrender and are captured including brigade commander Archer. In little time, the entire brigade had collapsed. The Union takes defensive positions along Willoughby Run.</p>
					</div>

					<div className="h-auto w-full float-left">
						<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
							<p className="my-2">The fighting at the <a href='/railroadcut' className="text-blue-500 italic hover:underline">railroad cut</a> and <a href='/herbstwoods' className="text-blue-500 italic hover:underline">Herbst’s Woods</a> all took place in about 30 minutes. Heth’s division had been repulsed, however he had more brigades that could attack. Doubleday was now in command, the most senior officer after Reynolds. He decided to respect the wishes of Reynolds, in preventing the town itself from being overrun by Confederates rather than withdrawing to stronger defensive ground at Culp’s Hill. The Union reformed and took defensive positions.</p>
							<p className="my-2">The good fortunes of the Union would not last. At about noon, the remainder of Reynold’s first corps and Howard’s corps arrived. Howard’s troops positioned themselves north of Gettysburg, anticipating another Confederate corps arriving down Carlisle road. Before either Meade or Lee knew, a major engagement was taking place. Simultaneous attacks from AP Hill’s corps and Ewell’s corps drove the Union back to Culp’s Hill and the surrounding strong ground. The rest of the Union army arrived by night, taking a defensive fishhook formation across the highground. For the Federal soldiers, it would be another disheartening defeat.</p>
						</div>
					</div>

				</div>
			</div>
		</main>
  )
}