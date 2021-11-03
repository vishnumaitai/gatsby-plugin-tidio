const React = require('react')

exports.onRenderBody = ({ setHeadComponents }, { tidioId, development = true,delayInMilliseconds=0 }) => {
  let source = "//code.tidio.co/" + tidioId + ".js"

  if(delayInMilliseconds>0){
    setTimeout(function () {
      var tidioScript = document.createElement('script');
      tidioScript.src = source;
      document.body.appendChild(tidioScript); 
  }, delayInMilliseconds * 1000);
  }
  if (!development && process.env.NODE_ENV === 'development') {
    console.log(
      '"development" is set to false - gatsby-plugin-zendesk-chat will not load in development mode',
    )
    return null
  }

  if (!tidioId) {
    console.log(
      'No Tidio key provided! gatsby-plugin-tidio will not load. Please add tidioId in gatsby-config.js',
    )
    return null
  }

  return setHeadComponents([
    <script
      key="gatsby-plugin-tidio"
      src={source}
    />
  ]);
};
