interface Props {
  src: string;
}
export const Map = ({ src }: Props) => {
  return (
    <iframe
      src={src}
      style={{ border: "0" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
