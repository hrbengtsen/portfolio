import React from 'react';

const Contact = () => (
  <div className="content center section text container">
    <h3 className="text-red">Get in touch.</h3>
    <p>Need help with a project? Feel free to message me!</p>
    <h4><a href="mailto:mikkelbengtsen@gmail.com" className="link-current animate-colour hover-text-red">mikkelbengtsen@gmail.com</a></h4>

    <div className="margin-top">
      <a href="#" className="margin padding-small anim-colour text-gray hover-text-white fa fa-linkedin xlarge"></a>
      <a href="#" className="margin padding-small anim-colour text-gray hover-text-white fa fa-twitter xlarge"></a>
      <a href="#" className="margin padding-small anim-colour text-gray hover-text-white fa fa-github xlarge"></a>
    </div>
  </div>
);

export default Contact;
