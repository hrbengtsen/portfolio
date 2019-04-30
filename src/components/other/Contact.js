import React from 'react';

const Contact = () => (
  <div className="content center section text container">
    <h3 className="text-red">Get in touch.</h3>
    <p>Always looking for opportunities. Feel free to message me!</p>
    <a href="mailto:mikkelbengtsen@gmail.com" className="link-current anim-colour hover-text-red">
      <h4 className="hide-small">mikkelbengtsen@gmail.com</h4>
      <h5 className="hide-large hide-medium">mikkelbengtsen@gmail.com</h5>
    </a>

    <div className="margin-top">
      <a href="https://twitter.com/hrbengtsen" className="margin padding-small anim-colour text-gray hover-text-white fa fa-twitter xlarge"></a>
      <a href="https://github.com/hrbengtsen" className="margin padding-small anim-colour text-gray hover-text-white fa fa-github xlarge"></a>
    </div>
  </div>
);

export default Contact;
