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
  if (tags) {
    return (
      tags.split(";").map((tag, index) => (
        <span key={index} className="profile__tag">
          {tag}
        </span>
      ))
    );
  } else {
    return (
      <span className="profile__tag">
        No tags
      </span>
    );
  }
};
