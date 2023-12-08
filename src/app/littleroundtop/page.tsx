/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main>
			<title>Gettysburg  | Day 2</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Little Round Top
					</div>

					<div className="h-auto w-3/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-80 w-56 object-cover object-center"
							src="https://www.civilwarcycling.com/wp-content/uploads/2017/04/Gettysburg-Flanks-on-Fishhook-570x1024.jpg"
							alt="Battle of Chancellorsville"
							/>
							<p className="my-1 text-center">Fish hook illustration</p>
						</div>
						<p className="w-full mb-2 text-center">The Fish Hook</p>
						<p className="my-2">The Union line was a fish hook shape, following the contours of geography. The tip of the hook is Culp’s and Cemetery Hill, while the straight is Cemetery Ridge. Sickle’s men make up the end of the straight part of the hook, and without orders he moves his men forward to higher ground. In doing so, he exposed massive gaps in the Union lines. The only presence the morning of the second day was a signal station, which caught glimpses of Confederate troops moving behind Seminary Ridge. The Confederates were preparing to attack Sickles’ corps in their exposed position. Little and Big Round Top were virtually undefended on the Union’s far left flank.</p>
					</div>

					<div className="h-auto w-4/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-96 object-cover object-center"
							src="https://www.historynet.com/wp-content/uploads/2022/06/chamberlain-leads-bayonet-charge-little-round-top-acw-autumn-2022-scaled.jpg"
							alt="Battle of Chancellorsville"
							/>
							<p className="my-1 text-center">Art of Chamberlain leading the charge</p>
						</div>
						<p className="w-full mb-2 text-center">The 20th Maine</p>
						<p className="my-2">The Confederates, as part of Longstreet’s assault, occupied Big Round Top. They were under orders to proceed and attack Little Round Top. Five regiments advance into the valley between Big and Little Round Top. Meanwhile, the signal station has been desperately warning surrounding officers of the impending flanking action. They managed to turn Vincent’s brigade, they were making to reinforce Sickles’ position, along with a battery. As the Confederates began to ascend the slopes, the Union had quickly made a defensive line with guns and cannons.</p>
						<p className="my-2">The right flank of Vincent’s brigade was unwooded, and the 16th Michigan stationed there were on the verge of running. Colonel Vincent personally went to supervise, where he received a mortal wound. The 140th New York arrived to reinforce the Michigan men, The right flank was secure, however the left was still threatened. The 15th and 47th Alabama both charge the slope toward the 20th Maine, but they hold their ground. The 15th Alabama moved onto the 20th’s flank giving enfilading fire. Low on ammunition and desperate, Joshua Chamberlain of the 20th Maine ordered a right wheel charge. The Confederates were swept down the slopes of the hill, and the attack faltered. Reinforcements arrived, and by the end of the day the Union held both hills.</p>
					</div>

				</div>
			</div>
		</main>
  )
}