import { MapProps } from "../../interface/props";

function Map({ src }: MapProps) {
  return (
    <iframe
      src={src}
      style={{ border: "0" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
export default Map;
