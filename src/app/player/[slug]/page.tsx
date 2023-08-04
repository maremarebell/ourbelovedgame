'use client';

import playerData from "../../data/data-20-players.json";
import { Status } from '../../components/Status';
import {SvgLogoInstagram} from '../../utils/logos';
import {SvgLogoTiktok} from '../../utils/logos';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google';
import Sections from '../../components/Sections';
import PlayerProfile from '../../components/PlayerProfile';

export default function Page({ params }: { params: { slug: string } }) {
  const requestedSlug = params.slug.toLowerCase();
  let player = playerData.find(
    (data) =>
      data.slug.toLowerCase() === requestedSlug ||
      data.name.toLowerCase() === requestedSlug ||
      (data.other_slugs &&
        data.other_slugs.split(',').some((slug) => slug.trim().toLowerCase() === requestedSlug))
  );

  if (!player) {
    return <div>Player doesn't exist</div>;
  }

  // De-capitalize the name
  const deCapitalizedName = player.name.charAt(0).toLowerCase() + player.name.slice(1);

  let data = player;
  
  return (
    <>
      {data !== undefined && (
        <>
          <PlayerProfile data={data} />
        </>
      )}
    </>
  );
}
