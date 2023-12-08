/* eslint-disable @next/next/no-img-element */
import Header from '../components/header'
import Image from 'next/image'
import GBRoads from '../../../public/GB-Roads.png'
import RRcut from '../../../public/RRcut.png'

export default function Home() {
	return (
		<main>
			<title>Gettysburg  | Background</title>
			<Header/>
			<div className="flex justify-center">
				<div className="h-auto w-5/6 p-8 mt-16 shadow-md rounded-lg bg-neutral-50">

					<div className="h-auto w-full mb-8 text-center text-4xl">
						The Town and Topography
					</div>

					<div className="h-auto w-4/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<Image
							width='400'
							src={GBRoads}
							alt="Gettysburg Roads"
							/>
							<p className="my-1 text-center">Roads of Gettysburg</p>
						</div>
						<p className="w-full mb-2 text-center">A Wheel with Spokes</p>
						<p className="my-2">Gettysburg was a vital crossroads in the area, much like a wheel with many spokes. Those spokes were roads to towns held by either army. Both armies were spread around the general area, with corps broken up across several towns. Roads like the Chambersburg pike led to Cashtown, the position of AP Hill’s corps on June 30th. The Emmitsburg road held both Reynolds and Howards corps. This would result in the armies meeting here, in an unplanned battle.</p>
					</div>

					<div className="h-auto w-5/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<Image
							width='400'
							src={RRcut}
							alt="Railroad Cut"
							/>
							<p className="my-1 text-center">The Modern Railroad Cut</p>
						</div>
						<p className="w-full mb-2 text-center">Hills and Ridges and Farms</p>
						<p className="my-2">Throughout the Civil War, small ridges and hills would play decisive roles in combat. Prior to the modern age, reconnaissance was significantly more difficult. Often, generals would make decisions with very little knowledge of enemy positions. In order for a ridge to hide enemy movements, it only has to be the height of a man.</p>
						<p className="my-2">Ground just at western edge of the town was largely farmland. At the western edge of town was the Lutheran Seminary, with its distinctive cupola. It was built on a ridge, running north and south. Into the town ran the Chambersburg pike, and parallel to it a railroad cut. There was a railroad planned to run into Gettysburg, and so a ditch had been dug for it. Further to the west of town lay McPherson’s farm. Its most prominent features were two other ridges, running north and south. To the southwest was Herbst’s land, including a strip of woods bordering a creek. Willoughby Run ran north to south as well, and created a natural depression.</p>
					</div>

				</div>
			</div>
		</main>
  )
}