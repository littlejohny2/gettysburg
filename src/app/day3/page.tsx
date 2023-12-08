/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main>
			<title>Gettysburg  | Day 3</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Last Day of Battle
					</div>

					<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
						<img
						className="h-[540] w-[480] mx-auto object-cover object-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gettysburg_Battle_Map_Day3.png/642px-Gettysburg_Battle_Map_Day3.png"
						alt="Day 3"
						/>
					</div>

					<div className="h-auto w-full float-left">
						<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
							<p className="my-2">Lee’s plan for the third day of the Battle of Gettysburg was the same as the previous. Ewell’s corps would assault the right flank of the Union atop Culp’s Hill while Longstreet would attack the left. However, after seven hours of fighting in the morning, Ewell’s attack stalled and Lee was forced to change his plans. Lee believes that Meade will reinforce his flanks leaving the center weak. He gave Longstreet command of Pickett’s division of 15,000 men to attack Cemetery Ridge. The attack was preceded by a massive artillery barrage of more than 150 Confederate artillery pieces. The Confederates then advanced over three quarters of a mile of open field, to horrible gun fire from multiple directions. Most men did not make it to Cemetery Ridge. Pickett’s division lost 3/4th of its number.</p>
							<p className="my-2">Confederate generals scrambled to reinforce their defensive lines anticipating a Union counterattack after such a defeat. However, the Union was weary as well and no attack came. There were a total of 51,000 casualties. Lee retreats from the field of battle, and slowly across the flooded Potomac River. It deals a mortal blow to the Confederate war effort, as the resources lost are not as easily replaced as it was for the Union. A day after the conclusion of the battle, the Siege of Vicksburg is won.</p>
						</div>
					</div>

				</div>
			</div>
		</main>
  )
}