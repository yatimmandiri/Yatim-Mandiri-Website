export const TitleSectionComponent = ({ title = false }) => {
  return (
    title && (
      <span className='text-base font-semibold border-l-4 border-orange-500 pl-2'>
        {title}
      </span>
    )
  );
};
