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

  // Dynamically construct the image path based on the slug
  const imagePath = `/assets/players/${params.slug}.png`;


  let tiktokHandle = "";
  let instagramHandle = "";

  if (data?.tiktok_url !== "NA") {
    const tiktokparts = data?.tiktok_url.split('/');

    if (tiktokparts !== undefined) {
      tiktokHandle = tiktokparts[tiktokparts.length - 1];
    }
  }

  const instaparts = data?.instagram_url.split('/');

  if (instaparts !== undefined) {
    instagramHandle = instaparts[instaparts.length - 2];
  }

  return (
    <>
      {data !== undefined && (
        <>
          <Image
            src={imagePath}
            alt={`headshot of ${data.name}`}
            height={320}
            width={500}
          />
          
          <h1>{data.name}</h1>
          <h2>{data.full_name}</h2>
                
          <Status data={data} />

          <ul>
            <li>{data.age}</li>
            <li>{data.job}</li>
            <li>{data.location}</li>
          </ul>
        
          <a
            href={`data.instagram_url`}
            target="_blank"
            rel="noreferrer"
          >

            <Image
              src="/assets/logo-instagram.svg"
              alt="Instagram logo"
              height={40}
              width={40}
            />

            {instagramHandle}
          </a>

          {data.name}
         
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

          {data.tiktok_url !== "NA" && tiktokHandle !== undefined && (
            <li>
                <a href={`${data.tiktok_url}`} target="_blank" rel="noreferrer">

                  <Image
                    src="/assets/logo-tiktok.svg"
                    alt="TikTok logo"
                    height={40}
                    width={40}
                  />

                  <span>
                      Tiktok: {tiktokHandle}
                  </span>
                </a>
            </li>
          )}

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
                <span>
                  LinkedIn: {data.linkedin_job}
                </span>
              </a>
            </li>
          )}

          Tags:
          {tagList}
        </>
      )}
    </>
  );
}
