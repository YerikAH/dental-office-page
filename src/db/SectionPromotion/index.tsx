import {
  IconBrandTelegram,
  IconFileLike,
  IconMessage,
  IconShoppingBag,
  IconUserExclamation,
} from "@tabler/icons-react";
import bannerPromotion from "../../assets/banner_promotion.jpg";

export const SECTION_PROMOTION = {
  title:
    "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat eleifend urna a fringilla. Etiam vitae libero et magna laoreet pulvinar quis ac quam. Praesent posuere magna in velit tincidunt mattis. Ut porta pretium lacinia. Cras erat leo, aliquet sit amet elit non, maximus interdum neque. Aenean eu consectetur dui",
  image: bannerPromotion,
  points: [
    {
      icon: <IconUserExclamation />,
      title: "Tratamiento de calidad",
    },
    {
      icon: <IconMessage />,
      title: "Mensajeria rapida",
    },
    {
      icon: <IconBrandTelegram />,
      title: "Atención fácil y rapida con nuestra plataforma",
    },
    {
      icon: <IconFileLike />,
      title: "Buenas reseñas desde 5 años ",
    },
    {
      icon: <IconShoppingBag />,
      title: "Productos baratos",
    },
  ],
};
