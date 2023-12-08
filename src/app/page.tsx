/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Header from './components/header'

export default function Home() {
	return (
		<main>
			<Header/>
			<div className="bg-[url('../../public/battle_art.png')] h-[1050px] w-full pt-12 bg-cover bg-center">
			</div>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-6xl">
						The Days Before Gettysburg
					</div>

					<div className="h-auto w-5/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-96 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Battle_of_Chancellorsville.png/449px-Battle_of_Chancellorsville.png"
							alt="Battle of Chancellorsville"
							/>
							<p className="my-1 text-center">Battle of Chancellorsville</p>
						</div>
						<p className="w-full mb-2 text-center">Vicksburg and Chancellorsville</p>
						<p className="my-2">The Confederacy was losing ground on all fronts. Vicksburg was its final line of defense upon the Mississippi, the great waterway serving as a lifeline for transporting large amounts of troops quickly. Soon it would fall, leaving the deep South vulnerable. General Bragg's repeated defeats in Tennessee left them losing that front as well. Only in the Eastern Theater had Lee been able to keep the Union at bay, even venturing into Maryland. Most recently, in early May of 1863, Lee won a stunning victory against a force that outnumbered his own. Additionally, his Army of Northern Virginia was low on supplies.</p>
						<p className="my-2">All this weighed on General Robert E. Lee's mind, as he planned a bold offensive into Pennsylvania. The goal was simple: to demoralize the North. Lee relied on reports from anti-war newspapers that the North was growing weary. Lee began the advance northward June 3.</p>
					</div>

					<div className="h-auto w-5/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-96 w-60 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Gettysburg_Campaign.png/457px-Gettysburg_Campaign.png"
							alt="Gettysburg Campaign"
							/>
							<p className="my-1 text-center">Gettysburg Campaign</p>
						</div>
						<p className="w-full mb-2 text-center">Lee moves North!</p>
						<p className="my-2">Composed of three corps, after the death of General "Stonewall" Jackson in Chancellorsville, the Confederate army began to slip out of Fredericksburg. Ewell's corps moved first, with AP Hill's and Longstreet's following. They moved into the Valley of Virginia to keep their movements more secretive. Hooker sent a cavalry force to scout across the Rappahannock river. They met Jeb Stuart's cavalry at Brandy Station, leading to the largest all cavalry battle of the war. Though the Union cavalry were driven back across the river, it alerted the Union to Lee's movement and suprised Stuart. Hooker quickly moved to position the Army of the Potomac between Lee and Washington D.C., reducing their baggage train for speed. Ewell routed a Federal force at Winchester, June 14. Lee's army had cross the Potomac river by June 15. From there, they headed north into the Cumberland Valley.</p>
						<p className="w-full mb-2 text-center">Stuart lost!</p>
						<p className="my-2">Stuart's cavalry were meant to positiom themselves east of the Blue Ridge Mountains and provide information to Lee about the movements and progress of the Union army. Once arriving in Pennsylvania, they would reunite oncemore in York. Stuart positioned himself too far east however, and found his cavalry unable to relay information as the Union army lay between them and Lee. Due to increased speed, the Union army repeatedly came between Stuart and Lee. Instead, Stuart focused on raiding supply trains, leaving Lee with insufficient intelligence.</p>
					</div>

					<div className="h-auto w-1/2 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-40 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Joseph_Hooker_-_Brady-Handy--restored.jpg/269px-Joseph_Hooker_-_Brady-Handy--restored.jpg"
							alt="Joseph Hooker"
							/>
							<p className="my-1 text-center">Joseph Hooker</p>
						</div>
						<p className="w-full mb-2 text-center">Hooker fired!</p>
						<p className="my-2">Hooker had been promoted to General of the Army of the Potomac since the defeat at the Battle of Fredericksburg under Burnside. His aggressive tactics, however, had been spectacularly defeated at Chancellorsville. The goodwill toward him in Washington began waning, as once he learned Lee moved northward he wished to take Richmond. The plan was vetoed by Lincoln, who continued to lose faith in him. Due to decisions made at Chancellorsville, the officers serving under him had already lost all confidence in him. They wrote to Lincoln, expressing their issues. The final straw was an argument over the garrison at Harper's Ferry. Hooker wanted command over the garrison in Harper's Ferry, Maryland offering to resign if he was denied. To his surprise, Lincoln was more than happy to accept his resignation.</p>
					</div>

					<div className="h-auto w-2/5 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-40 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/George_G._Meade_Standing.jpg/310px-George_G._Meade_Standing.jpg"
							alt="George Meade"
							/>
							<p className="my-1 text-center">George Meade</p>
						</div>
						<p className="w-full mb-2 text-center">Reynolds or Meade?</p>
						<p className="my-2">Reynolds, the commander of the first corps, had a reputation as one of the best commanders of the Army of the Potomac. He was the natural first choice for Lincoln as replacement. However, Reynolds wanted assurances that there would be no political interference from Lincoln, something he could not promise. Reynolds did not accept the offer. Meade was also a corps commander, known for his quiet and humble demeanor. He was recommended by several of his colleagues, and on June 28th a messenger arrived from Washington asking him to take command. Despite his own reservations, he accepted.</p>
					</div>

					<div className="h-auto w-full float-left">
						<div className="h-auto w-3/5 p-4 my-4 mx-auto shadow-md rounded-lg bg-amber-50">
							<p className="w-full my-2 text-center">Convergence</p>
							<p className="my-2">Lee was essentially blind to the movement of the Union army without Stuart. He continued moving east, threatening the Pennsylvanian capital of Harrisburg. However, a spy hired by Longstreet informed of the Union army arriving just southward much earlier than they had anticipated. Realizing his rear was exposed, Lee decided to concentrate his forces in Cashtown, halfway between Chambersburg and Gettysburg. He ordered his commanders to not bring on a major engagement before they were reorganized. Meanwhile, Meade saw <a href='/terrain' className="text-blue-500 italic hover:underline">Gettysburg as a vital crossroads</a> to secure and ordered Reynolds and his first corps to occupy. <a href='/bufordprepares' className="text-blue-500 italic hover:underline">Buford's cavalry arrived</a> June 30th, to screen ahead for Reynolds.</p>
						</div>
					</div>
					
				</div>
			</div>
		</main>
	)
}
