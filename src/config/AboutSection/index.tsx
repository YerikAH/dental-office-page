import {
  IconDental,
  IconFirstAidKit,
  IconHeartHandshake,
  IconScale,
  IconShieldChevron,
} from "@tabler/icons-react";
import bannerPromotion from "@/assets/banner_promotion.jpg";

export const ABOUT_SECTION = {
  title: "Descubre Quiénes Somos y Nuestra Pasión por tu Salud Dental",
  text: "En Consultorio Dental La Preventiva, nos dedicamos a proporcionar atención dental de calidad con un enfoque preventivo. Nuestro equipo altamente calificado y apasionado trabaja incansablemente para garantizar tu bienestar bucal. Nos enorgullece ofrecer servicios que abarcan desde limpiezas dentales hasta tratamientos especializados, utilizando tecnología de vanguardia para resultados precisos y eficaces",
  image: bannerPromotion,
  points: [
    {
      icon: <IconHeartHandshake />,
      title: "Cuidado Personalizado",
    },
    {
      icon: <IconFirstAidKit />,
      title: "Innovación Tecnológica",
    },
    {
      icon: <IconDental />,
      title: "Compromiso con la Excelencia",
    },
    {
      icon: <IconScale />,
      title: "Ética Profesional",
    },
    {
      icon: <IconShieldChevron />,
      title: "Enfoque Preventivo",
    },
  ],
};
