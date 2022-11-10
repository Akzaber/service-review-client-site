import React from "react";
import { Link } from "react-router-dom";

const NewSection = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/x687Q7S/cricket-batter-hitting-the-ball-picture-id1191513027-k-20-m-1191513027-s-170667a-w-0-h-b-Dl-VKPyd-Og.jpg"
            className="rounded-lg shadow-sm hover:shadow-xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl text-black font-bold">
              Crickets Photography
            </h1>
            <p className="py-6">
              Cricket is a match where one team wins and one team loses.
              Sometimes its heart broken when you see your favorite loses in
              front of you. The players also feel the pain after losing and it
              shows on their face. Some break downs in tears and some feel
              disappointment and their expression shows it.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 font-semibold bg-green-600 rounded text-white">
                <Link to="/services">See more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/LCmFFTW/cricket-photography-tips-10.jpg"
            className="md:w-1/2 rounded-lg shadow-sm hover:shadow-xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl text-black font-bold">
              Do cricket ball photography
            </h1>
            <p className="py-6">
              While photographing the batsman, we can't forget the bowler.
              Photographing bat can give you different shots and angles. But
              photographing ball will give the different hand movements. When a
              bowler start running and throw the ball, you can get the perfect
              picture of that. Just you have to take some time.
            </p>
            <button className="px-4 py-2 font-semibold rounded bg-green-600 text-white">
              <Link to="/services">See more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
