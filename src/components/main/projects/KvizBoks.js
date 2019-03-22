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

const KvizBoks = () => (
  <div>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"kvizBoks"} date={"Apr. 2018"} />
      <ProjectTools tools={[
        "Processing",
        "Arduino",
        "Git",
        "Github",
        "Trello"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>kvizBoks is a console made to redefine learning maths through playing in a unique and fun way.
          The project is a prototype created as part of an exam in Digital Interaction at Aarhus Tech.
          </p>
          <p>Instead of interacting with the game the old fashioned way with multiple buttons, the interaction is done primarily through moving the controller.
          The console was created around the idea of being a useful addition to math classes in elementary school, to keep the students engaged at the end of lessons, while keeping it relevant to the subject.
          </p>
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

export default KvizBoks;
