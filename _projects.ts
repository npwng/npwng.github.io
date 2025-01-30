const projectsContents = [
    {
        title: 'Companion Cube',
        pictures: [
            '/projects/CompanionCube_Original.webp',
            '/projects/CompanionCube_Hold.webp',
            '/projects/CompanionCube_CAMAnimation.webp',
        ],
        body: `
            <p>The Companion Cube was my first milling project. My aim was to learn and reinforce basic CAM and on-machine tasks. The cube was a a fairly basic model, but still comtained elements such as 3D surfacing and engraving. This project also allowed me to practice proper alignment of multiple setups. The stock was squared to size and proper perpendicularity and parallelity of all sides. A stop was used to speed up subsequent setups. Misalighments between wetups would readily show on the final part.
        `,
    },
    {
        title: 'Jar',
        pictures: [
            '/projects/Jar_Open.webp',
            '/projects/Jar_Closed.webp',
        ],
        body: `
        <h5 class="card-title"><span class="text-base-content opacity-70">Overview</span></h5>
            <p>The jar project was my first venture into turning, serving as a fundamental training project where I learned the essentials, intricacies, and nuances of the process. Programming for the project was done entirely conversationally on the machine's controller, giving a very hands-on learning experience.</p>

        <h5 class="card-title"><span class="text-base-content opacity-70">Details</span></h5>
            <p>This project taught me the absolute basics of lathe work such as proper workholding, toolholding, and toolsetting. I was able to learn operations such as OD turning, drilling, boring, single-point threading, and parting. I practiced using cutter compensation to tolerance features while using measuring wires, telescopic gauges, and micrometers to inspect dimensions.</p>
            <img src='/projects/PinMeasurement.webp' style="border-radius: 10px; max-width: 80%; max-height: 20rem;" />
            <figcaption>Fig.1 - Measurement of V-shaped groove using inspection wires from Machinery's Handbook 30th Edition.</figcaption>

        `,
    },
    {
        title: 'Trapped Ball',
        pictures: [
            '/projects/TrappedBall.webp',
        ],
        body: `
            <p>The trapped ball is a seemingly impossible structure where a ball is somehow stuck in a wireframe cube. This was a test of my skills and attention to detail as any mistakes, misalignments, or poorly tolerated dimensions would readily show on the final ball.</p>
		<p>Squaring the stock was one of the most crucial steps as any errors or imperfections would noticeably affect the final product. Both final size and perpendicularity between faces is crucial.</p>
		<p>The same program was run identically on five of the six sides. The last side required soft jaws to secure both the ball and the cube at the same time. The soft jaws were milled from a plate of UHMW plastic.<p/>
        `,
    },
    {
        title: 'R8 Arbor',
        pictures: [
            '/projects/Arbor_Full.webp',
            '/projects/Arbor_Lineup.webp',
	],
	body: `
    <p>A slitting saw was needed for other projects. I decided to make an arbor to practice turning, and learn new skills such as the use of a 4-jaw chuck. It also allowed me to practice hitting tolerances.</p>
    <img src='/projects/Arbor_R8TaperCollet.webp' style="border-radius: 10px; max-width: 80%; max-height: 25rem;" />
    <figcaption>Fig.1 - Bridgeport R8 Collet Dimensions from Machinery's Handbook 30th Edition.</figcaption>
    <p>An R8 taper was used as it was most compatible with our mills. Final dimensions were tolerance to be at most 5 tenths from the nominal value. A challenge when manufacturing this part was the absence of a tail stock on our lathe. To ensure best concentricity, the taper must be turned in one setup. This, however, results in a large stickout to diameter ratio from the jaws which reduces overall rigidity significantly. To get around this, it mas turned in sections, allowing to keep a large stock diameter for as long as possible. Much time was spent dialing in subsequent setups to ensure concentricity and parallelity of critical locating features. </p>
    `
    },
    {
        title: 'Collet Wrench',
        pictures: [

	],
	body: `
    <p>Our ER16/ER20 collet wrenches were wearing out. This was a fairly simple project. I modeled the wrenches in Solidworks. The design was made parametrically, making it easy to change features such as wrench size, dogbone size, etc. The bulk of the wrench was cut on our waterjet cutter, with the critical contact surfaces being finished on our CNC mill. Faces were cleaned and edges broken with a die grinder.</p>
    `
    },
    {
        title: 'T-Slot Adapter',
        pictures: [

	],
	body: `
    <p>After receiving a new drill press, our clamps did not fit the new table. Based on available T-slot nuts, these have a pocket to accommodate our current clamps. The design was also slightly modified to fit into scrap stock on-hand.</p>
    `
    },
    {
        title: 'Low Profile Vise Jaws',
        pictures: [
            '/projects/LPVJ_Full.webp',
            '/projects/LPVJ_Profile.webp',
            '/projects/LPVJ_GripIso.webp',
            '/projects/LPVJ_Measure.webp',
	],
	body: `
    <p>
	The low profile vise jaws were based on Talon Grip jaws which allow for very little (~40 thou) grip stock. The grips had an interesting geometry that required them to be held at 45 degrees 
    </p>
    `
    },
    ];

export default projectsContents;
