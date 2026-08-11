import './style.css'

interface Props {
  title?: boolean;
  text: string
}

export function FancyText({ title, text }: Props) {
  return title ? (
    <h1 className="title">{text}</h1>
  ) : (
    <h3 className="phrase">{text}</h3>
  );
}
