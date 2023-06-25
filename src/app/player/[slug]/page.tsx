'use client';

import playerData from "../../data-20.json";
import { Status } from '../../Status';
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {

  const player = playerData.find((data) => data.slug === params.slug);

  const tagList = player?.tags
    ? player.tags.split(';').map((tag) => (
        <span key={tag}>
          {tag}
        </span>
      ))
    : null;

  let data = player;
  const imagePath = `/assets/players/${params.slug}.png`;

  let tiktokHandle = "";
  let instagramHandle = "";

  if (data?.tiktok_url !== undefined && data?.tiktok_url.length > 0) {
    const tiktokparts = data?.tiktok_url.split('/');

    if (tiktokparts !== undefined) {
      tiktokHandle = tiktokparts[tiktokparts.length - 1];
    }
  }

  const instaparts = data?.instagram_url.split('/');

  if (instaparts !== undefined && instaparts.length > 0) {
    instagramHandle = instaparts[instaparts.length - 2];
  }

  return (
    <>
      {data !== undefined && (
        <>
          <div className="hero">

            <svg className="svger" viewBox="0 0 94 20">
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" opacity=".6">
                {data.name}
              </text>
            </svg>

            <Image
              src={imagePath}
              alt={`headshot of ${data.name}`}
              height={320}
              width={500}
              className="hero__image"
            />
          </div>
          
          <div className="profile main-content">
          <div className="profile__nameplate">
              
              <Status data={data} />
              <ul>
                <li>{data.age}</li>
                <li>{data.job}</li>
                <li>{data.location}</li>
              </ul>
              {data.tiktok_url.length > 0 && tiktokHandle !== undefined && (
                <a 
                  href={`${data.tiktok_url}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="profile__cta"
                >
                  <Image
                    src="/assets/logo-tiktok.svg"
                    alt="TikTok logo"
                    className="profile__logo"
                    height={30}
                    width={30}
                  />

                  <span>
                    {tiktokHandle}
                  </span>
                </a>
              )}
              <a
                href={`${data.instagram_url}`} 
                target="_blank"
                rel="noreferrer"
                className="profile__cta social-icon social-icon--instagram"
              >
                <Image
                  src="/assets/logo-instagram.svg"
                  alt="Instagram logo"
                  className="profile__logo social-icon__icon"
                  height={30}
                  width={30}
                />

                <span className="social-icon__text">
                  @{instagramHandle}
                </span>
              </a>
            </div>
            {data.full_name}

            <h3>Pre-Season Predictions</h3>

            <Image
              src="/assets/image-ball.png"
              alt="crystal ball emoji"
              height={40}
              width={40}
            />

            <ul>
              {player?.gor_predictions &&
                player.gor_predictions.split(';').map((prediction, index) => (
                  <li key={index}>{prediction}</li>
                ))}
            </ul>

            <li>
              <a href={`${data.abc_profile}`} target="_blank" rel="noreferrer">
                <Image
                  src="/assets/logo-abc.svg"
                  alt="ABC logo"
                  height={40}
                  width={40}
                />
                <span>Official ABC Bio</span>
              </a>
            </li>

            {data.linkedin_url.length > 0 && (
              <li>
                <a
                  href={`${data.linkedin_url}`}
                  target="_blank"
                  rel="noreferrer"
                >

                  <Image
                    src="/assets/logo-linkedin.svg"
                    alt="LinkedIn logo"
                    height={40}
                    width={40}
                  />
                
                  LinkedIn: {data.linkedin_job}
              
                </a>
              </li>
            )}

            Tags:
            {tagList}
          </div>
        </>
      )}
    </>
  );
}
