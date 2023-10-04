import "../components/tags.scss";

export function textWithLinks(text) {
  // Regular expression to find links
  const linkRegex = /(http[s]?:\/\/[^\s]+)/g;

  // Split the text into an array of substrings
  const textParts = text.split(linkRegex);

  // Map each substring and replace URLs with HTML links
  const textWithLinks = textParts.map((part, index) => {
    if (part.match(linkRegex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else {
      return part;
    }
  });

  // Return the mapped array as JSX
  return <>{textWithLinks}</>;
}

export const generateTags = (tags) => {
  if (tags && tags.trim() !== "") {
    return (
      tags.split(";").map((tag, index) => {
        if (tag.trim() !== "") {
          return (
            <span key={index} className="profile__tag player-tag">
              {tag}
            </span>
          );
        } else {
          return null;
        }
      })
    );
  } else {
    return (
      <span className="profile__tag player-tag">
        No tags
      </span>
    );
  }
};
