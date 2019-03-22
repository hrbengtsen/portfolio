import React from 'react';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import ProjectGallary from '../../other/ProjectGallary';

import kvizboksConsole from '../../../img/kvizboks-console.JPG';
import kvizboksController from '../../../img/kvizboks-controller.JPG';

import kvizboksGame from '../../../img/kvizboks-game.JPG';
import kvizboksVideo from '../../../img/kvizboks-video.mp4';
import kvizboksThumbnail from '../../../img/kvizboks-video-thumbnail.jpg';

const Grostedet9 = () => (
  <div>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"grostedet9"} date={"Nov. 2018"} />
      <ProjectTools tools={[
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Github"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>grostedet9 is a website created for the bed & breakfast of the same name.
          The website was developed from the ground up in pure HTML, CSS & JavaScript.
          It's a traditional static website, with a few key features such as being able to search prices, for the different rooms, by entering amount of days and persons.
          </p>
          <p>The website's design was made to be simple and intuitive to navigate and was inspired by Airbnb.</p>
        </div>
      } />
      <ProjectGallary
        title={"Concept"}
        items={[kvizboksConsole, kvizboksController, "", "", kvizboksGame, kvizboksVideo]}
        thumbnailForVideo={kvizboksThumbnail}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>Besides being different to interact with the game was designed with a competitive aspect as you play 1 on 1.
          Each player has their own math question that they have to answer correctly to gain a point.
          Both players answer is randomly placed on the halfcircle among 7 others that are carefully selected and not just random.
          By doing this, as well as locking the players selection if they answer wrong, for a brief amount of time, you are not able to just guess your way through the questions.
          </p>
          <p>Additionally the game has a fun twist, where when a player correctly answers a question, they recieve a new one and both their new answer as well as the other player's current answer is shuffled among new options, potentially changing the position of the other player's current answer.
          </p>
        </div>
      } />
    </div>
  </div>
);

export default Grostedet9;
