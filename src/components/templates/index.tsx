import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
  max-w-screen min-h-screen max-h-max bg-gray-50 flex flex-col items-center jusitfy-center px-4
`;

export const TemplateContent = tw.section`
  w-full h-screen max-w-screen-lg grid grid-cols-2 justify-center items-center
`;

export const TemplateMain = tw.main`
  flex flex-col justify-center items-center gap-10
`;