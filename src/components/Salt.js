export default function Salt({ title }) {
  const format_title = (phrase) => {
    const phrase_array = phrase.split(" ");
    const half_length = phrase_array.length / 2;
    let additional_length = phrase_array.length % 2 === 0 ? 0 : 1;
    return `<span class="-rotate-6 inline-block">${phrase_array
      .slice(0, half_length + additional_length)
      .join(" ")}</span><br/><span class="-rotate-3 inline-block">${phrase_array
      .slice(half_length + additional_length)
      .join(" ")}</span>`;
  };
  return (
    <div className="animate-slap -rotate-6 bg-black p-4">
      <p
        className="text-center text-2xl leading-none font-wilson"
        dangerouslySetInnerHTML={{ __html: format_title(title) }}
      />
    </div>
  );
}
