import React, { useEffect } from 'react';

interface TwitterTimelineProps {
  username: string;
}

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({ username }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="twitter-timeline"
      href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
    >
      Tweets by {username}
    </a>
  );
};

export default TwitterTimeline;