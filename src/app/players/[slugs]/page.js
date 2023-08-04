import React from "react";
import playerData from "../../data/data-20-players.json";
import '../../components/player-table.scss';

export default function Page({ params }) {
  const requestedSlugs = decodeURIComponent(params.slugs).toLowerCase().split(",");

  if (requestedSlugs.length === 0) {
    return <div>Ya gotta pick some playas</div>;
  }

  const players = requestedSlugs.map((requestedSlug) => {
    const player = playerData.find(
      (data) =>
        data.slug.toLowerCase() === requestedSlug ||
        data.name.toLowerCase() === requestedSlug ||
        (data.other_slugs &&
          data.other_slugs
            .split(",")
            .some((slug) => slug.trim().toLowerCase() === requestedSlug))
    );

    if (player) {
      return player;
    } else {
      return null;
    }
  });

  const generateTableRows = (propertyKey, label, defaultValue = "Player doesn't exist") => (
    <tr>
      <td>{label}</td>
      {players.map((data, index) => (
        <td key={index}>{data ? data[propertyKey] : defaultValue}</td>
      ))}
    </tr>
  );

  return (
    <>
      <table className="player-table">
        <tbody>
          {generateTableRows("full_name", "Name")}
          {generateTableRows("age", "Age")}
          {generateTableRows("location", "Location")}
          {generateTableRows("job", "Job")}
        </tbody>
      </table>
    </>
  );
}
