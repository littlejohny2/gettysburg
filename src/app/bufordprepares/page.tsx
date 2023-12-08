/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'

export default function Home() {
	return (
		<main>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						Buford's Stand
					</div>

					<div className="h-auto w-4/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-54 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/John_Buford.jpg/536px-John_Buford.jpg"
							alt="Buford"
							/>
							<p className="my-1 text-center">Buford</p>
						</div>
						<p className="w-full mb-2 text-center">Buford Arrives</p>
						<p className="my-2">Buford was in command of a Union division of cavalry, two brigades of 2700 men. He was in charge of screening the town of Gettysburg prior to Reynold’s corps arriving, scouting for enemy presence. Upon arrival, he recognized Gettysburg as being <a href="/terrain" className="text-blue-500 italic hover:underline">an important crossroads</a> either army would likely have to cross through at some point. He also recognized that the high ground south to Gettysburg would provide a strong defense. Whenever scouts arrived with information of Confederates concentrating in Cashtown, down the Chambersburg pike, he would have to make a decision. Believing that if the Confederates took the strong ground around Gettysburg they would be defeated, he set up defensive positions west of town. His men went into action, sending pickets down roads, and messengers urging Reynolds to arrive as quickly as possible to reinforce.</p>
					</div>

					<div className="h-auto w-5/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-[540] w-[480] mx-auto object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gettysburg_Day1_0700.png/540px-Gettysburg_Day1_0700.png"
							alt="Day 1"
							/>
							<p className="my-1 text-center">Buford's Skirmishers</p>
						</div>
						<p className="w-full mb-2 text-center">Contact!</p>
						<p className="my-2">Buford was reinforced by Calef’s battery, six artillery guns total. He orders Calef to choose a position at his discretion. Men tear down the fences of McPherson’s farm for better maneuvering of units. Pickets that Buford ordered down Chambersburg pike arrive at 8 a.m. bearing the message that a substantial Confederate force is moving on Gettysburg. No sooner had Calef’s battery been set up than they received orders to distribute their guns widely across McPherson’s Ridge to give the impression of a larger force. Skirmish lines were set up on McPherson’s Ridge, Willoughby Run, and Herr Ridge further to the west. Heth’s division deployed into battle line once encountering resistance at Herr Ridge. After facing overwhelming firepower, the skirmishers there retreated. Atop the ridge, Pegram's artillery unlimbers and begins a long range artillery duel with Calef’s guns.</p>
						<p className="w-full mb-2 text-center">Reynold's Arrives!</p>
						<p className="my-2">Buford had taken to the cupola of the Lutheran Seminary for a view of the battlefield and the advancing rows of Confederate troops. Reynolds arrived, having ridden ahead of his corps. Buford gave a report on the situation and Reynolds ordered him to continue to delay, two brigades were nearly there to relieve his men.</p>
					</div>

				</div>
			</div>
		</main>
  )
}