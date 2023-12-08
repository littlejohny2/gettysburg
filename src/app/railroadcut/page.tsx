/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Railroad Cut
					</div>

					<div className="h-auto w-5/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-56 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/c/c0/JRDavis.jpg"
							alt="Joseph Robert Davis"
							/>
							<p className="my-1 text-center">Joseph Robert Davis</p>
						</div>
						<p className="w-full mb-2 text-center">Retreat before Davis!</p>
						<p className="my-2">Davis’ brigade, nephew of Confederate President Jefferson Davis, advanced on the Union right flank. Cutler’s brigade arrived just in time to relieve Buford’s men. Three regiments were positioned north of the railroad cut, while two were positioned south to protect the center. However, Davis’ brigade is large and extends beyond the flanks of Cutler’s regiments. The 147th New York on the left flank pushes forward to support the 2nd Maine, becoming isolated. The 56th Pennsylvania and 76th New York were out flanked, and retreated back to Seminary Ridge. The message to retreat however did not arrive to the 147th New York, as the messenger was shot. Without orders to fall back, they decided to stay.</p>
						<p className="my-2">South of the Chambersburg Pike two regiments of Cutler’s threw back a Confederate regiment and artillery from the 2nd Maine Battery arrived to relieve Calef’s battery. Behind the two regiments they unlimber their guns and begin opening fire, their two targets being Pegram’s artillery on Herr Ridge and just to their right Davis’ advancing brigade. They were forced to retreat once they were attacked by skirmishers from the 42nd Mississippi.</p>
					</div>

					<div className="h-auto w-3/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<p className="w-full mb-2 text-center">The Surrounded 147th</p>
						<p className="my-2">With the 147th New York isolated, the Confederates surrounded the regiment on all sides. With the other regiments gone they have to turn to the right to meet the rest of Davis’ brigade. The 42nd Mississippi, the regiment they were originally facing, ran into the railroad ditch right behind the 147th. They become disorganized, companies facing different directions and receiving grievous casualties.</p>
					</div>

					<div className="h-auto w-5/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-96 object-cover object-center"
							src="https://i.gettysburgdaily.com/imgs/RailroadCut061311/RailroadCut06131110.jpg"
							alt="Battle of Chancellorsville"
							/>
							<p className="my-1 text-center">The Railroad Cut</p>
						</div>
						<p className="w-full mb-2 text-center">Union Counterattack!</p>
						<p className="my-2">Following Reynolds death, Abner Doubleday was field commander. Seeing the complete collapse on the right flank, he orders his only reserve regiment, the 6th Wisconsin, to head in. Cutler’s two regiments south of the Chambersburg pike turned to their right and advanced toward the railroad cut. The 42nd Mississippi and the 2nd Mississippi entered into the ditch for cover. The Union regiments quickly charge their position, and fire into the cut. 20 men from the 6th Wisconsin get into the ditch on the right flank and pour fire into their side. There is a complete retreat, and hundreds of Confederate prisoners are taken. The 147th New York was relieved, after being isolated for 20 minutes and losing a majority of the regiment.</p>
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