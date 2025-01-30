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
                      <p>Hey there 👋,</p>
                        
                      <p>I am a current Mechanical Engieering Co-op student at the University of Alberta. I have hands-on manufacturing experience with CNC mills and lathes, laser cutters, waterjet cutters, and 3D printers.</p>
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
