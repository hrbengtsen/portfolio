import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectOverview from '../../other/ProjectOverview';
import ProjectTools from '../../other/ProjectTools';
import Text from '../../other/Text';
import Button from '../../other/Button';
import ProjectGallary from '../../other/ProjectGallary';

import pomodoifyUser from '../../../img/pomodoify-user.png';
import pomodoifyTimer from '../../../img/pomodoify-timer.png';
import pomodoifyProgression from '../../../img/pomodoify-progression.png';

const Pomodoify = () => (
  <div>
    <Helmet>
      <title>Project: Pomodoify - Mikkel Bengtsen</title>
    </Helmet>
    <div className="content padding-as-row anim-seq">
      <ProjectOverview project={"Pomodoify"} date={"May 2020"} />
      <ProjectTools tools={[
        "React"
      ]} />
      <Text title={"About"} parentClasses={"section"} text={
        <div>
          <p>Pomodoify is a relaxing and simple React webapp made to boost your productivity through <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" className="link-current anim-colour hover-text-red">the Pomodoro Technique</a> and a progression system. The app is still in development and therefore everything is subject to improve/change.
          </p>
        </div>
      } />
      <Button external name={"Explore the repository"} link={"https://github.com/hrbengtsen/pomodoify"} />
      <ProjectGallary
        title={"Concept"}
        items={[pomodoifyUser, pomodoifyTimer, pomodoifyProgression]}
        itemCol={["l9 m9", "l8 m8", "l8 m8"]}
      />
      <Text parentClasses={"section-top"} text={
        <div>
          <p>The app was designed to be relaxing and inviting through its simplicity, colors and shapes. Furthermore, the addition of the progression system and achievements creates an extra motivating factor to get work done. This feature as well as the overall design makes the app stand out amongst similar timers.
          </p>
          <p>In developing the app I learned and worked with more advanced features of React such as the Context API, Higher Order Components and Reducers. These concepts made for an overall better app structure and state management. 
          </p>
        </div>
      } />
      <Button external name={"Try the app"} link={"https://hrbengtsen.github.io/pomodoify"} />
    </div>
  </div>
);

export default Pomodoify;
