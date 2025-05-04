import { Fragment } from 'react';

const AboutCard = () => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                      <span className="text-base-content opacity-70">
                        About me
                      </span>
                  </h5>
                </div>
                <div className="card shadow-lg compact bg-base-100">
                  <div className="px-4 py-4">
                    <div className="w-full">
                    <div>Hey there 👋
<br /><br />
                      I'm a third-year Mechanical Engineering Co-op student at the University of Alberta.
<br /><br />
                      From a young age, I was captivated by the mechanics behind everyday objects—reading books, watching videos, and eventually getting hands-on with my first soldering iron and 3D printer in middle school. That early curiosity has since grown into a drive to design, innovate, and create.
<br /><br />
                      At university, I've had the privilege to work with CNC mills and lathes, laser cutters, waterjet cutters, and various 3D printers, gaining hands-on experience in additive and subtractive manufacturing. This equipment has allowed me to bring ideas to reality, from concept sketches to functional prototypes. It also taught me the intricacies of each manufacturing method, allowing me to adapt my approach to design.
<br /><br />
                      When I'm not in class or working on a project, you can find me mountain biking, downhill skiing, folding intricate origami models, or experimenting with new recipes in the kitchen. 
<br /><br />
                      I'm always open to new challenges and learning opportunities, whether it's collaborating on a meaningful project or exploring new technologies. Feel free to reach out if you'd like to connect!
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCard;
