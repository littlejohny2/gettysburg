/* eslint-disable react/no-unescaped-entities */
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
						First Encounters
					</div>

					<div className="h-auto w-5/6 float-left p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-right p-2 my-4 ml-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-72 w-60 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Image_of_Lieutenant_General_A.P._Hill.jpg"
							alt="A.P. Hill"
							/>
							<p className="my-1 text-center">A.P. Hill</p>
						</div>
						<p className="w-full mb-2 text-center">Pettigrew's Concerns</p>
						<p className="my-2">June 30th, Pettigrew’s brigade of Heth’s division under AP Hill had marched to Gettysburg to gather shoes. There they had seen Buford’s movement into town, and under orders from Lee to not bring about a major engagement, had returned to Cashtown where the rest of the corps was. Pettigrew reported what he believed to be a detachment of the Union army proper, however AP Hill and Heth both disbelieved. After a disheartening discussion, where Pettigrew brought officers that both respected to vouch for him, AP Hill decided to attack the next day to occupy Gettysburg. AP Hill believed it to only be a small militia force.</p>
						<p className="my-2">All three Confederate corps were ordered to concentrate in Cashtown without bringing about a major engagement with the Union. AP Hill’s corps had arrived first, with Ewell to the north of Gettysburg and Longstreet to the west. AP Hill had distinguished himself as an aggressive general under the equally aggressive “Stonewall” Jackson. Jackson had died in Chancellorsville, and now AP Hill found himself in command of a corps for the first time.</p>
					</div>

					<div className="h-auto w-4/6 float-right p-4 my-4 shadow-md rounded-lg bg-amber-50">
						<div className="h-auto w-auto float-left p-2 my-4 mr-2 shadow-md rounded-lg bg-amber-50">
							<img
							className="h-64 w-64 object-cover object-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gettysburg_Day1_0700.png/540px-Gettysburg_Day1_0700.png"
							alt="Dat 1"
							/>
							<p className="my-1 text-center">Heth's Division advances</p>
						</div>
						<p className="w-full mb-2 text-center">Heth Marches</p>
						<p className="my-2">Heth’s division was to lead the advance on Gettysburg, 7,500 men supported by Pegram’s 20 artillery guns. Other elements of AP Hill’s corps surrounding Gettysburg also began to move out and AP Hill sent a courier to Lee informing him of the situation. Though Lee’s response is lost to history, it likely contained words of caution while also giving approval for his action. To lead the division was Archer’s veteran brigade of Tennesseeans and Alabamians. Prior to leaving camp, Pettigrew arrived to warn Archer of positions around the town the Union might be holding. Archer took the advice, but also believed forces to be insubstantial and there to be no major engagement that day. The division had started down the Chambersburg pike at 5 a.m.</p>
					</div>

				</div>
			</div>
		</main>
  )
}