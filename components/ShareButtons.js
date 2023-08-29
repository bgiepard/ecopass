import { useRouter } from 'next/router';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

export default function ShareButtons() {
  const router = useRouter();

  const baseUrl = 'https://ecopass.pl';
  const shareUrl = baseUrl + router.asPath;
  const title = 'Sprawdź ten artykuł!';

  return (
    <div className="flex gap-3 mt-3 ">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon round size={30} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon round size={30} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon round size={30} />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon round size={30} />
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
        <RedditIcon round size={30} />
      </RedditShareButton>
      <TumblrShareButton url={shareUrl} title={title}>
        <TumblrIcon round size={30} />
      </TumblrShareButton>
    </div>
  );
}
