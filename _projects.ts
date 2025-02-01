const projectsContents = [
    {
        title: 'Companion Cube',
        pictures: [
            '/projects/CompanionCube_Original.webp',
            '/projects/CompanionCube_Hold.webp',
        ],
        body: `
            <p>The Companion Cube was my first milling project, designed to help me learn and reinforce fundamental CAM and on-machine basics. The cube itself was a relatively simple model, allowing me to practice basics such as contours, pockets, and chamfers. However, it also included less common elements like 3D surfacing and engraving. This project also allowed me to practice accurate alignment between multiple setups. The stock was carefully squared to size, ensuring perpendicularity and parallelism of all sides. I used a vise stop to streamline the setup process for subsequent operations. Any misalignments between setups would be clearly visible in the final part.</p>
            <img src='/projects/CompanionCube_CAMAnimation.webp' style="border-radius: 10px; max-width: 90%; max-height: 35rem;" />
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
            <p>The jar project was my first venture into turning. Beginning this project, I already had a year of CNC milling experience. This served as a fundamental training project where I learned the essentials, intricacies, and nuances of turning.</p>

        <h5 class="card-title"><span class="text-base-content opacity-70">Details</span></h5>
            <p>This project began with absolute basics of lathe work such as proper workholding, toolholding, and toolsetting. I was able to learn fundemental operations such as OD turning, drilling, and boring. It also encorperated single-point threading. Programming was done entirely conversationally on the machine's controller, giving a very hands-on learning experience. Each dimension was toleranced to give me experience using cutter compensation along with using metrology tools such as measuring wires, telescopic gauges, and micrometers.</p>
            <img src='/projects/PinMeasurement.webp' style="border-radius: 10px; max-width: 80%; max-height: 20rem;" />
            <figcaption>Fig.1 - Measurement of V-shaped groove using inspection wires from Machinery's Handbook 30th Edition.</figcaption>
            <p>The lid was completed completely independantly, allowing me to reinforce the knowledge learned curing the firsr portion of the project.</p>
        `,
    },
    {
        title: 'Trapped Ball',
        pictures: [
            '/projects/TrappedBall.webp',
            '/projects/TrappedBall_SJ_ISTU.webp',
            '/projects/TrappedBall_SJ_IRL.webp',
        ],
        body: `
        <h5 class="card-title"><span class="text-base-content opacity-70">Overview</span></h5>
            <p>The trapped ball is a seemingly impossible structure where a ball is somehow stuck in a wireframe cube. This was a test of my skills and attention to detail as any mistakes, misalignments, or poorly tolerated dimensions would readily show on the final ball.</p>
        <h5 class="card-title"><span class="text-base-content opacity-70">Details</span></h5>
            <p>The modeling and CAM were fairly trivial, using knowledge that I already had. Machining started with squaring the stock, ensuring proper perpendicularity and size of each face. This was one of the most crucial steps as any errors or imperfections would readily show on the sphere. </p>
            <img src='/projects/TrappedBall_SJ_CAM.webp' style="border-radius: 10px; max-width: 90%; max-height: 10rem;" />
            <img src='/projects/TrappedBall_SJ_Single.webp' style="border-radius: 10px; max-width: 90%; max-height: 25rem;" />
            <p>The same program was run identically on five of the six sides. The last side required soft jaws to secure both the ball and the cube at the same time. The soft jaws were milled from a plate of UHMW plastic which then replaced the vice's hard jaws.<p/>
            <img src='/projects/TrappedBall_CAM.webp' style="border-radius: 10px; max-width: 90%; max-height: 35rem;" />

        `,
    },
    {
        title: 'R8 Arbor',
        pictures: [
            '/projects/Arbor_Full.webp',
            '/projects/Arbor_Lineup.webp',
            '/projects/Arbor_ISTU.webp',
	],
	body: `
    <p>A slitting saw was needed for other projects. I decided to make an arbor to practice turning, and learn new skills such as the use of a 4-jaw chuck. It also allowed me to practice hitting tolerances.</p>
    <img src='/projects/Arbor_R8TaperCollet.webp' style="border-radius: 10px; max-width: 80%; max-height: 25rem;" />
    <figcaption>Fig.1 - Bridgeport R8 Collet Dimensions from Machinery's Handbook 30th Edition.</figcaption>
    <p>An R8 taper was used as it was most compatible with our mills. Final dimensions were tolerance to be at most 5 tenths from the nominal value. A challenge when manufacturing this part was the absence of a tail stock on our lathe. To ensure best concentricity, the taper must be turned in one setup. This, however, results in a large stickout to diameter ratio from the jaws which reduces overall rigidity significantly. To get around this, it mas turned in sections, allowing to keep a large stock diameter for as long as possible. Much time was spent dialing in subsequent setups to ensure concentricity and parallelity of critical locating features. </p>
    <img src='/projects/Arbor_Sim_Side.webp' style="border-radius: 10px; max-width: 80%; max-height: 25rem;" />
    `
    },
    {
        title: 'Collet Wrench',
        pictures: [
            '/projects/ColletWrench_Both_Cross.webp',
            '/projects/ColletWrench_Param_DogboneClearance.webp',
            '/projects/ColletWrench_Param_DogboneSize.webp',
            '/projects/ColletWrench_Param_Size.webp',
	],
	body: `
    <p>The ER16/ER20 collet wrenches supplied with our mills were deforming after years of use as they were made of aluminum. This was a fairly simple project, using mild steel plate that was already on-hand. The wrenches were parametrically modeled in Solidworks, allowing for quick and easy changes of features such as wrench size, dogbone size, etc. The wrench was cut on our waterjet cutter with added stock on critical features which were finished on our CNC mill. Faces were cleaned and edges broken with a die grinder.</p>
    `
    },
    {
        title: 'T-Slot Adapter',
        pictures: [
            '/projects/DPClamp_Both_ISO.webp',
            '/projects/DPClamp_ISTU.webp',
	],
	body: `
    <p>After receiving a new drill press, our previous clamps did not fit the new table. The model was based on T-slot nuts that were on-hand. It was modified to include a pocket to accommodate our current clamps along with resizing to fit into available scrap stock. </p>
    <div style="display: flex; justify-content: space-around;">
    <img 
        src="/projects/DPClamp_CAM_Top.webp" 
        alt="DPClamp CAM Top"
        style="border-radius: 10px; max-width: 40%; max-height: 25rem;" 
    />
    <img 
        src="/projects/DPClamp_CAM_Bottom.webp" 
        alt="DPClamp CAM Bottom"
        style="border-radius: 10px; max-width: 40%; max-height: 25rem;" 
    />
    </div>
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
    <img src='/projects/output.webp' style="border-radius: 10px; max-width: 80%; max-height: 25rem;" />
    `
    },
    ];

export default projectsContents;
